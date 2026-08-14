import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { COURSE_IDS } from "./data/site";

const assignments = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/assignments" }),
  schema: z.object({
    // ── Αγγλικά (υποχρεωτικά — προεπιλεγμένη γλώσσα) ──
    title: z.string(),
    description: z.string(),
    // ── Ελληνικά (προαιρετικά — fallback στα αγγλικά) ──
    title_el: z.string().optional(),
    description_el: z.string().optional(),
    courseId: z.enum(COURSE_IDS),
    // Σειρά εμφάνισης μέσα στο μάθημα (1, 2, 3…). Μικρότερο = πρώτο.
    order: z.number().optional().default(99),
    // true = ομαδική εργασία, false/κενό = ατομική
    group: z.boolean().optional().default(false),
    // Προαιρετικό link εγγράφου (https://… ή /pdfs/….pdf). Κενό = χωρίς κουμπί.
    pdfLink: z.string().optional(),
    // Προαιρετικό αγγλικό PDF — εμφανίζεται όταν η γλώσσα είναι EN.
    pdfLinkEn: z.string().optional(),
    // Προαιρετικό link GitHub (π.χ. για τις εργασίες ΤΝ).
    repoLink: z.string().url().optional(),
    publishedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional().default([]),
  }),
});

export const collections = { assignments };
