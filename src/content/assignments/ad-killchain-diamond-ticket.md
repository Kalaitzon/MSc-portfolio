---
title: "Active Directory Kill-Chain via Shadow Credentials and Diamond Ticket"
description: "A full attack kill-chain escalating from an unprivileged domain user to full SYSTEM privileges on a Windows Server 2016 Domain Controller. Starting from exposed credentials in SMB shares, it exploits Shadow Credentials (msDS-KeyCredentialLink) to bypass PKINIT authentication, then uses DCSync and Pass-the-Hash to extract the krbtgt key and forge a stealthy Diamond Ticket with high OpSec resilience."
title_el: "Αλυσίδα Επίθεσης Active Directory μέσω Shadow Credentials και Diamond Ticket"
description_el: "Ολοκληρωμένη αλυσίδα επίθεσης με κλιμάκωση από απλό χρήστη domain σε πλήρη δικαιώματα SYSTEM σε Domain Controller (Windows Server 2016). Ξεκινώντας από εκτεθειμένα διαπιστευτήρια σε SMB shares, εκμεταλλεύεται Shadow Credentials (msDS-KeyCredentialLink) για παράκαμψη της αυθεντικοποίησης PKINIT, και στη συνέχεια αξιοποιεί DCSync και Pass-the-Hash για εξαγωγή του κλειδιού krbtgt και πλαστογράφηση ενός δυσδιάκριτου «Diamond Ticket» με υψηλή ανθεκτικότητα OpSec."
courseId: "cyber-defense-digital-forensics"
order: 2
pdfLink: "/pdfs/ad-killchain-diamond-ticket.pdf"
pdfLinkEn: "/pdfs/ad-killchain-diamond-ticket-en.pdf"
tags: ["Shadow Credentials", "Diamond Ticket", "PKINIT"]
---

A full attack kill-chain escalating from an unprivileged domain user to full SYSTEM privileges on a Windows Server 2016 Domain Controller. Starting from exposed credentials in SMB shares, it exploits Shadow Credentials (msDS-KeyCredentialLink) to bypass PKINIT authentication, then uses DCSync and Pass-the-Hash to extract the krbtgt key and forge a stealthy Diamond Ticket with high OpSec resilience.
