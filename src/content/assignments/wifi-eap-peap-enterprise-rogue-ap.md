---
title: "Enterprise Wi-Fi Attack on EAP-PEAP (802.1X)"
description: "Implementation of an attack on the EAP-PEAP authentication method under IEEE 802.1X via a rogue access point on Kali Linux. Using kernel virtual interfaces (mac80211_hwsim) with hostapd-wpe to overcome hardware limits, it captures the client's encrypted MSCHAPv2 credentials, proving the risk in WPA2/WPA3-Enterprise networks when the server certificate is not strictly validated."
title_el: "Επίθεση σε Εταιρικό Wi-Fi (EAP-PEAP / 802.1X)"
description_el: "Υλοποίηση επίθεσης στη μέθοδο αυθεντικοποίησης EAP-PEAP στο πλαίσιο του IEEE 802.1X μέσω κακόβουλου σημείου πρόσβασης σε Kali Linux. Με χρήση εικονικών διεπαφών του πυρήνα (mac80211_hwsim) και hostapd-wpe για την υπέρβαση των φυσικών περιορισμών, υποκλέπτονται τα κρυπτογραφημένα διαπιστευτήρια MSCHAPv2 του πελάτη, αποδεικνύοντας τον κίνδυνο σε δίκτυα WPA2/WPA3-Enterprise όταν δεν επαληθεύεται αυστηρά το πιστοποιητικό του διακομιστή."
courseId: "wireless-mobile-network-security"
order: 9
pdfLink: "/pdfs/wifi-eap-peap-enterprise-rogue-ap.pdf"
pdfLinkEn: "/pdfs/wifi-eap-peap-enterprise-rogue-ap-en.pdf"
tags: ["EAP-PEAP", "802.1X", "hostapd-wpe"]
---

Implementation of an attack on the EAP-PEAP authentication method under IEEE 802.1X via a rogue access point on Kali Linux. Using kernel virtual interfaces (mac80211_hwsim) with hostapd-wpe to overcome hardware limits, it captures the client's encrypted MSCHAPv2 credentials, proving the risk in WPA2/WPA3-Enterprise networks when the server certificate is not strictly validated.
