# MSc Portfolio — Cybersecurity & Artificial Intelligence Technologies

A bilingual (EN/EL) portfolio website showcasing academic assignments completed as part of an MSc programme at the University of Piraeus. Built with **Astro 6** + **Tailwind CSS 4**, deployed on Vercel.

🌐 **Live site:** [msc-portfolio-theta.vercel.app](https://msc-portfolio-theta.vercel.app)

---

## Prerequisites

**Node.js 22.12 or later.** To check your version:

```powershell
node -v
```

If it returns `v22.x` or higher you're good. Otherwise download the LTS version from [nodejs.org](https://nodejs.org) and install it.

---

## Run locally

Install dependencies (first time only):

```powershell
npm install
```

Start the development server:

```powershell
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser. Changes to source files hot-reload automatically.

---

## Build for production

```powershell
npm run build
```

This generates the `dist/` folder containing the fully static site ready for deployment. Every `git push` to the `main` branch triggers an automatic redeploy on Vercel.

---

## Adding a new assignment

1. Place the PDF in `public/pdfs/` (e.g. `my-assignment.pdf`).
2. Create a new `.md` file in `src/content/assignments/` (e.g. `my-assignment.md`):

```markdown
---
title: "Assignment Title in English"
description: "Short description in English."
title_el: "Τίτλος στα Ελληνικά"
description_el: "Σύντομη περιγραφή στα Ελληνικά."
courseId: "network-security"
order: 6
pdfLink: "/pdfs/my-assignment.pdf"
pdfLinkEn: "/pdfs/my-assignment-en.pdf"
repoLink: "https://github.com/Kalaitzon/my-repo"
tags: ["Tag1", "Tag2"]
---
```

Available `courseId` values are defined in `src/data/site.ts`.  
If an assignment has no PDF, omit the `pdfLink` line entirely.  
If there is no GitHub repository, omit the `repoLink` line.

---

## Project structure

```
├─ public/
│  ├─ logo.png                  ← University logo
│  └─ pdfs/                     ← All assignment PDFs (Greek + English)
├─ src/
│  ├─ pages/index.astro         ← Main page (layout, tabs, cards, scripts)
│  ├─ data/site.ts              ← Courses, semesters, UI strings (edit text here)
│  ├─ content.config.ts         ← Assignment schema definition
│  ├─ content/assignments/      ← One .md file per assignment
│  └─ styles/global.css         ← Tailwind v4 theme (colours, fonts, dark mode)
├─ extras/admin-form/           ← Optional assignment-entry form (see extras/README.md)
├─ astro.config.mjs
├─ package.json
└─ tsconfig.json
```

All UI text (course names, button labels, semester names) can be edited in **`src/data/site.ts`**.

---

## Tech stack

| Tool | Purpose |
|------|---------|
| [Astro 6](https://astro.build) | Static site framework |
| [Tailwind CSS 4](https://tailwindcss.com) | Utility-first styling |
| [Vercel](https://vercel.com) | Hosting & CI/CD |

---

## Disclaimer

All practical work involving offensive security techniques was conducted exclusively in controlled, isolated laboratory environments for academic and educational purposes only. No real systems, networks, or individuals were targeted at any point.
