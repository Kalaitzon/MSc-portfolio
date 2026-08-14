---
title: "Buffer Overflow Exploitation with GDB"
description: "Analysis and exploitation of a buffer-overflow vulnerability in checker.c. Using GDB, the flaw in process_input was located and the offset computed to build a payload that redirects execution to the hidden win() function."
title_el: "Εκμετάλλευση Buffer Overflow με GDB"
description_el: "Ανάλυση και εκμετάλλευση ευπάθειας υπερχείλισης μνήμης στο πρόγραμμα checker.c. Μέσω GDB εντοπίστηκε η ευπάθεια στη συνάρτηση process_input και υπολογίστηκε το offset για δημιουργία payload που ανακατευθύνει τη ροή εκτέλεσης στην κρυφή συνάρτηση win()."
courseId: "security-assessment-ethical-hacking"
order: 2
pdfLink: "/pdfs/buffer-overflow-gdb.pdf"
pdfLinkEn: "/pdfs/buffer-overflow-gdb-en.pdf"
tags: ["Buffer Overflow", "GDB", "Exploit Dev"]
---

Analysis and exploitation of a buffer-overflow vulnerability in checker.c. Using GDB, the flaw in process_input was located and the offset computed to build a payload that redirects execution to the hidden win() function.
