import type { APIRoute } from "astro";
import fs from "node:fs/promises";
import path from "node:path";
import { COURSE_IDS } from "../../data/site";

// Αυτό το endpoint τρέχει στον server (τοπικά), δεν γίνεται prerender.
export const prerender = false;

const VALID_COURSES: string[] = COURSE_IDS;

/** Μετατρέπει τον τίτλο σε ασφαλές όνομα αρχείου (υποστηρίζει και ελληνικά) */
function slugify(input: string): string {
  const greekMap: Record<string, string> = {
    α: "a", β: "v", γ: "g", δ: "d", ε: "e", ζ: "z", η: "i", θ: "th",
    ι: "i", κ: "k", λ: "l", μ: "m", ν: "n", ξ: "x", ο: "o", π: "p",
    ρ: "r", σ: "s", ς: "s", τ: "t", υ: "y", φ: "f", χ: "ch", ψ: "ps",
    ω: "o", ά: "a", έ: "e", ή: "i", ί: "i", ό: "o", ύ: "y", ώ: "o",
    ϊ: "i", ϋ: "y", ΐ: "i", ΰ: "y",
  };

  return input
    .toLowerCase()
    .split("")
    .map((ch) => greekMap[ch] ?? ch)
    .join("")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60) || "assignment";
}

/** Κάνει escape τα quotes ώστε να μη σπάσει το YAML frontmatter */
function yamlSafe(text: string): string {
  return text.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\r?\n/g, " ").trim();
}

export const POST: APIRoute = async ({ request }) => {
  // Ασφάλεια: επιτρέπεται ΜΟΝΟ σε development, ποτέ σε live site.
  if (!import.meta.env.DEV) {
    return new Response(
      JSON.stringify({ ok: false, error: "Η φόρμα είναι διαθέσιμη μόνο τοπικά (npm run dev)." }),
      { status: 403, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const form = await request.formData();

    const title = String(form.get("title") ?? "").trim();
    const description = String(form.get("description") ?? "").trim();
    const titleEl = String(form.get("title_el") ?? "").trim();
    const descriptionEl = String(form.get("description_el") ?? "").trim();
    const courseId = String(form.get("courseId") ?? "").trim();
    const tagsRaw = String(form.get("tags") ?? "").trim();
    const dateRaw = String(form.get("publishedDate") ?? "").trim();
    const pdfUrl = String(form.get("pdfUrl") ?? "").trim();
    const pdfFile = form.get("pdfFile") as File | null;

    // ── Έλεγχοι ───────────────────────────────────────────────────────────
    if (!title) throw new Error("Λείπει ο τίτλος.");
    if (!description) throw new Error("Λείπει η περιγραφή.");
    if (!VALID_COURSES.includes(courseId)) throw new Error("Δεν επιλέχθηκε έγκυρο μάθημα.");

    const hasFile = pdfFile && typeof pdfFile.size === "number" && pdfFile.size > 0;
    if (!hasFile && !pdfUrl) throw new Error("Ανέβασε ένα PDF ή δώσε ένα link.");

    const slug = slugify(title);
    const projectRoot = process.cwd();

    // ── 1. Αποθήκευση του PDF στο public/pdfs/ ────────────────────────────
    let pdfLink = pdfUrl;

    if (hasFile) {
      if (!pdfFile!.name.toLowerCase().endsWith(".pdf")) {
        throw new Error("Το αρχείο πρέπει να είναι PDF.");
      }

      const pdfDir = path.join(projectRoot, "public", "pdfs");
      await fs.mkdir(pdfDir, { recursive: true });

      const pdfName = `${slug}.pdf`;
      const buffer = Buffer.from(await pdfFile!.arrayBuffer());
      await fs.writeFile(path.join(pdfDir, pdfName), buffer);

      pdfLink = `/pdfs/${pdfName}`;
    }

    // ── 2. Δημιουργία του Markdown αρχείου ────────────────────────────────
    const contentDir = path.join(projectRoot, "src", "content", "assignments");
    await fs.mkdir(contentDir, { recursive: true });

    // Αν υπάρχει ήδη αρχείο με το ίδιο όνομα, βάζουμε -2, -3 κλπ.
    let fileName = `${slug}.md`;
    let counter = 2;
    while (true) {
      try {
        await fs.access(path.join(contentDir, fileName));
        fileName = `${slug}-${counter++}.md`;
      } catch {
        break;
      }
    }

    const tags = tagsRaw
      ? tagsRaw.split(",").map((t) => t.trim()).filter(Boolean)
      : [];

    const publishedDate = dateRaw || new Date().toISOString().slice(0, 10);

    const frontmatter = [
      "---",
      `title: "${yamlSafe(title)}"`,
      `description: "${yamlSafe(description)}"`,
      ...(titleEl ? [`title_el: "${yamlSafe(titleEl)}"`] : []),
      ...(descriptionEl ? [`description_el: "${yamlSafe(descriptionEl)}"`] : []),
      `courseId: "${courseId}"`,
      `pdfLink: "${yamlSafe(pdfLink)}"`,
      `publishedDate: ${publishedDate}`,
      `tags: [${tags.map((t) => `"${yamlSafe(t)}"`).join(", ")}]`,
      "---",
      "",
      `## ${title}`,
      "",
      description,
      "",
    ].join("\n");

    await fs.writeFile(path.join(contentDir, fileName), frontmatter, "utf-8");

    return new Response(
      JSON.stringify({
        ok: true,
        message: `Δημιουργήθηκε το αρχείο src/content/assignments/${fileName}`,
        file: fileName,
        pdfLink,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Κάτι πήγε στραβά.";
    return new Response(JSON.stringify({ ok: false, error: message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
};
