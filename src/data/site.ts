/**
 * Κεντρικό αρχείο δεδομένων & μεταφράσεων.
 * Ό,τι αλλάξεις εδώ, ενημερώνεται αυτόματα σε όλο το site.
 */

export type Lang = "en" | "el";
export type SemesterId = "winter" | "spring";

export interface Course {
  id: string;
  semester: SemesterId;
  code: string;
  en: string;
  el: string;
}

/* ── Εξάμηνα ──────────────────────────────────────────────────────────────── */
export const SEMESTERS: { id: SemesterId; en: string; el: string }[] = [
  { id: "winter", en: "Winter Semester", el: "Χειμερινό Εξάμηνο" },
  { id: "spring", en: "Spring Semester", el: "Εαρινό Εξάμηνο" },
];

/* ── Μαθήματα (4 + 4) ─────────────────────────────────────────────────────── */
export const COURSES: Course[] = [
  // ── Χειμερινό ──
  {
    id: "security-assessment-ethical-hacking",
    semester: "winter",
    code: "01",
    en: "Security Assessment and Ethical Hacking",
    el: "Αποτίμηση Ασφάλειας και Ethical Hacking",
  },
  {
    id: "network-security",
    semester: "winter",
    code: "02",
    en: "Network Security",
    el: "Ασφάλεια Δικτύων",
  },
  {
    id: "information-security-management",
    semester: "winter",
    code: "03",
    en: "Information Security Management",
    el: "Διαχείριση Ασφάλειας Πληροφοριών",
  },
  {
    id: "applied-cryptography-cryptanalysis",
    semester: "winter",
    code: "04",
    en: "Applied Cryptography and Cryptanalysis",
    el: "Εφαρμοσμένη Κρυπτογραφία και Κρυπτανάλυση",
  },

  // ── Εαρινό ──
  {
    id: "wireless-mobile-network-security",
    semester: "spring",
    code: "05",
    en: "Wireless and Mobile Network Security",
    el: "Ασφάλεια Ασύρματων και Κινητών Δικτύων",
  },
  {
    id: "cyber-defense-digital-forensics",
    semester: "spring",
    code: "06",
    en: "Cyber Defense and Digital Forensics",
    el: "Κυβερνοάμυνα και Ψηφιακή Εγκληματολογία",
  },
  {
    id: "security-privacy-legal-framework",
    semester: "spring",
    code: "07",
    en: "Legal Framework of Security and Privacy",
    el: "Νομικό Πλαίσιο Ασφάλειας και Απορρήτου",
  },
  {
    id: "advanced-topics-cybersecurity-ai",
    semester: "spring",
    code: "08",
    en: "Advanced Topics in Cybersecurity and Artificial Intelligence",
    el: "Προχωρημένα Θέματα Κυβερνοασφάλειας και Τεχνητής Νοημοσύνης",
  },
];

/** Τα IDs σε μορφή tuple — τα χρειάζεται το Zod schema. */
export const COURSE_IDS = COURSES.map((c) => c.id) as [string, ...string[]];

/** Βοηθητικό: μαθήματα ενός εξαμήνου */
export const coursesBySemester = (semester: SemesterId) =>
  COURSES.filter((c) => c.semester === semester);

/* ── Στατικό περιεχόμενο UI ───────────────────────────────────────────────── */
export const UI = {
  degreeTitle: {
    en: "Cybersecurity and Artificial Intelligence Technologies",
    el: "Κυβερνοασφάλεια και Τεχνολογίες Τεχνητής Νοημοσύνης",
  },
  university: {
    en: "University of Piraeus",
    el: "Πανεπιστήμιο Πειραιώς",
  },
  department: {
    en: "Department of Digital Systems",
    el: "Τμήμα Ψηφιακών Συστημάτων",
  },
  studentName: {
    en: "Ioannis Kalaitzidis",
    el: "Ιωάννης Καλαϊτζίδης",
  },
  mscBadge: {
    en: "MSc Portfolio",
    el: "Χαρτοφυλάκιο ΠΜΣ",
  },
  browseLabel: {
    en: "Browse by semester",
    el: "Πλοήγηση ανά εξάμηνο",
  },
  assignmentLabel: {
    en: "Assignment",
    el: "Εργασία",
  },
  individualLabel: {
    en: "Individual Assignment",
    el: "Ατομική Εργασία",
  },
  groupLabel: {
    en: "Group Assignment",
    el: "Ομαδική Εργασία",
  },
  githubBtn: {
    en: "View on GitHub",
    el: "Προβολή στο GitHub",
  },
  downloadBtn: {
    en: "Preview & Download (PDF)",
    el: "Προβολή & Λήψη (PDF)",
  },
  emptyTitle: {
    en: "No assignments yet",
    el: "Δεν υπάρχουν εργασίες ακόμη",
  },
  emptySub: {
    en: "Assignments will appear here once published.",
    el: "Οι εργασίες θα εμφανιστούν εδώ μόλις δημοσιευτούν.",
  },
  newAssignment: {
    en: "New Assignment",
    el: "Νέα Εργασία",
  },
  themeToggle: {
    en: "Toggle theme",
    el: "Εναλλαγή θέματος",
  },
  langToggle: {
    en: "Switch language",
    el: "Αλλαγή γλώσσας",
  },
} as const;
