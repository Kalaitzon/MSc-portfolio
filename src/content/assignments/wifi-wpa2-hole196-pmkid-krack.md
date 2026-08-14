---
title: "WPA2 Vulnerabilities: Hole196, PMKID and KRACK"
description: "Evaluation of three critical WPA2 vulnerabilities in a Kali Linux testbed. Implements the Hole196 attack (an insider abusing the shared GTK for ARP spoofing and MitM to decrypt IoT camera traffic), the modern PMKID attack (hcxdumptool + Hashcat for offline password recovery), and analyses the KRACK key-reinstallation flaw via PCAP, showing how replaying Handshake Message 3 collapses the encryption."
title_el: "Ευπάθειες WPA2: Hole196, PMKID και KRACK"
description_el: "Αξιολόγηση τριών κρίσιμων ευπαθειών του WPA2 σε περιβάλλον Kali Linux. Υλοποιεί την επίθεση Hole196 (εσωτερικός χρήστης εκμεταλλεύεται το κοινό GTK για ARP spoofing και MitM ώστε να αποκρυπτογραφήσει κίνηση IoT κάμερας), τη σύγχρονη επίθεση PMKID (hcxdumptool + Hashcat για offline ανάκτηση κωδικού), και αναλύει τη σχεδιαστική ευπάθεια KRACK μέσω PCAP, δείχνοντας πώς η επανεκπομπή του 3ου μηνύματος της χειραψίας καταρρέει την κρυπτογράφηση."
courseId: "wireless-mobile-network-security"
order: 8
pdfLink: "/pdfs/wifi-wpa2-hole196-pmkid-krack.pdf"
pdfLinkEn: "/pdfs/wifi-wpa2-hole196-pmkid-krack-en.pdf"
tags: ["WPA2", "PMKID", "KRACK"]
---

Evaluation of three critical WPA2 vulnerabilities in a Kali Linux testbed. Implements the Hole196 attack (an insider abusing the shared GTK for ARP spoofing and MitM to decrypt IoT camera traffic), the modern PMKID attack (hcxdumptool + Hashcat for offline password recovery), and analyses the KRACK key-reinstallation flaw via PCAP, showing how replaying Handshake Message 3 collapses the encryption.
