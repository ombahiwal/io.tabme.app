import { LOCALES } from '../constants';

export default {
  [LOCALES.GERMAN]: {
    'edit-file': 'Bearbeiten Sie {file} und speichern Sie es, um es neu zu laden.',
    'hello': 'Hallo',
    'default_welcome': "Willkommen!",
    'default_scan_qr': "QR-Code scannen.",
    'default_looking': "Suche nach einem Tabme QR...",
    'default_msg1': "Scannen Sie den QR-Code.",
    'default_msg2': "Holen Sie sich das Menü.",
    'default_msg3': "Bestellen & Bezahlen.",
    'default_with': "mit",
    'default_and': "und",
    'default_enjoy': "Genießen!",
    'default_worldmap': "Tabme Weltkarte 🌐",
    'default_qr_scanner_msg_found': "QR Found!",
    'default_tabme_foot_cr':"© {year} tabme UG (hf.)",
    'welcome_order_for': "Bestellung für {type}",
    'delivery': "Lieferung",
    'pickup': "Abholung",
    'pickup_order': "Abholauftrag - \"{id}\"",
    'delivery_order': "Auslieferungsauftrag - \"{id}\"",
    'table_num':'Tisch #{tablenum}',
    'another_table': "andere Tisch?",
    'check_in_btn': "Einchecken",
    'pickup_btn': "Abholung",
    'minute_short': "min",
    'tnc': "Allgemeine Geschäftsbedingungen",
    'privacy_data_policy':'Privatsphäre und Datenschutz',
    'imprint':"Impressum",
    'restaurant_not_found': "Restaurant nicht gefunden oder ungültiger, bitte erneut versuchen.",
    'login': "Anmeldung",
    'register_link1': "Neu bei tabme? - Registrieren Sie sich hier.",
    'register_link2': "Anmelden oder Registrieren bei tabme.",
    'loading_text': "Laden...",
    'pickup_msg_time': "Sobald Sie Ihre Bestellung aufgegeben haben, wird sie in ca. {time}mins* abholbereit sein",
    'order_pickup_title': "Bestellung zur Abholung",
    'continue_menu_btn': "Weiter zum Menü",
    'login_checking_loading_msg': "Anmeldedaten werden geprüft...",
    'welcome_checkin_msg': "Sie sind Eingecheckt!",
    'dishes_cart': "Artikel",
    'proceed_btn': "Weiter {text}",
    'label_allergen': "Allergen Info",
    'allergen_msg': "Allergen Info",
    'cart_subtotal': "Zwischensumme",
    'cart_tip': "Trinkgeld",
    'cart_promo': "Promo",
    'cart_total': "Gesamt",
    'cart_tab_summary_title': "Tab Zusammenfassung",
    'cart_payment_options_title': "Zahlungsoptionen",
    'cart_enter_promo': "Code eingeben...",
    'cart_apply_btn': "Anwenden",
    'cart_processing': "Verarbeitung...",
    'cart_sending': "Bestellung abschicken...",
    'cart_no_items': "Keine Artikel hinzugefügt!",
    'btn_place_order': "Bestellung aufgeben",
    'btn_pay': "Bezahlen", 
    'payment_msg_bill_info': "Bitte prüfen Sie die Rechnungsinformationen.",
    'payment_bill_info_title': "Rechnungsinfo",
    'payment_info_title': "Zahlungsinfo",
    'payment_failed': "Zahlung fehlgeschlagen!",
    'order_failed': "Bestellung fehlgeschlagen!",
    'payment_success': "Zahlung erfolgreich!",
    'payment_msg_failed':"(Wenn ein Betrag abgezogen wurde, wird er innerhalb von 7 Werktagen zurückerstattet.)",
    'payment_msg_order_failed':"(Wenn Ihre Bestellung fehlgeschlagen ist, versuchen Sie es bitte erneut. Der abgezogene Betrag wird innerhalb von 7 Arbeitstagen zurückerstattet.)",
    'cart_note_msg': "Schreiben Sie eine Notiz für das Personal zusammen mit Ihrer Bestellung...",
    'payment_powered_by':"angetrieben durch",
    'payment_privacy': "Datenschutzrichtlinie",
    'payment_optn_cash': "Bargeld",
    'payment_optn_stripe':'Karte und mehr',
    'payment_optn_razorpay':'Kredit / Debitkarten, UPI & mehr (von Razorpay)',
    'proceed_to_place': "Bestellung aufgeben",
    'proceed_to_pay': "Bezahlen",
    'pay_at_counter': "Bitte bezahlen Sie an der Theke, nachdem Sie bedient wurden.",
    'error_message_order_creation': "Es ist ein Fehler aufgetreten, die Auftragserstellung ist fehlgeschlagen!",
    'pay_to_delivery_cash': "Bitte zahlen Sie an den Zusteller",
    'home_account_info_title': "Kontoinformationen",
    'home_past_orders_title': "Vergangene Bestellungen",
    'home_label_logout': "Abmelden",
    'label_update_btn': "Aktualisieren",
    'label_zip': "Postleitzahl",
    'label_addr': "Adresse",
    'label_delivery_addr': "Lieferadresse",
    'label_name':"{type}Name",
    'label_email': "E-Mail-Adresse",
    'label_region': "Region",
    'label_country': "Land",
    'label_phone': "Telefonnummer",
    'label_addr_zip': "Adresse und Postleitzahl",
    'label_region_country': "Region & Land",
    'label_at': "at",
    'order_past_head': "Ihre Bestellung",
    'order_current_head': "Ihre aktuelle Bestellung",
    'order_status': "Bestellstatus :",
    'order_total': "Gesamtpreis :",
    'order_total_items': "Nr. Artikel :",
    'order_id': "Bestell-ID :",
    'order_time_placed': "Platziert am :",
    'Cancelled': "Storniert",
    'Preparing': "Vorbereitung",
    'Received': "Empfangen",
    'Completed': "Abgeschlossen",
    'order_bottom_msg': "Bei Fragen zur Bestellung wenden Sie sich bitte an das Restaurantpersonal oder an den \"tabme.\" Kundenbetreuung.",
    'order_receipt_btn': "Rechnung",
    'order_pickup_est_msg': "* geschätzte Zeit ab dem Zeitpunkt der Annahme der Bestellung. die Zubereitungszeit kann variieren.",
    'order_current_state_msg_placed': "Ihre Bestellung wurde aufgegeben!",
    'order_current_state_msg_pickup':"(Die Bestellung wird in ca. {estimate} min nach Annahme zur Abholung bereit sein)",
    'order_current_state_msg': "Ihre Bestellung hat den Status {status}",
    'order_type_label_pickup_id': "Abholung - {id}",
    'order_type_label_delivery_id': "Lieferung - {id}",
    'order_current_keep':"(Halten Sie diese Seite offen, bis Ihre Bestellung abgeschlossen ist.)",
    'or':'oder',
    'pickup_time':"~{time}min",
    'order_cancelled_msg':"Die Bestellung wurde vom Restaurant aufgrund eines Problems storniert.",
    'order_cancelled_msg2':"Die Bestellung wurde vom Restaurant aufgrund eines Problems storniert. Alle Online-Zahlungen werden innerhalb von 7 Werktagen zurückerstattet. ",
    'order_complete_msg':"Die Bestellung ist abgeschlossen!",
    'cookies_msg':"Möchten Sie Cookies akzeptieren?",
    'accept':"Akzeptieren",
    'reject':"ablehnen",
    'welcome_order_for_pickup':"Bestellung zur Abholung",
    'welcome_order_for_delivery':"Bestellung zur Lieferung",
    'checkin_btn':"Einchecken",
    'restaurant_closed_msg':"Dieses Restaurant nimmt derzeit keine Bestellungen an.",
    'welcome_pickup_msg':"Sie haben sich für die Abholung entschieden!",
    'required':"erforderlich",
    'your_tab':"Ihr Reiter.",
    'add_btn':"Hinzufügen",
    'placeholder_enter_email': "Ihre E-Mail eingeben",
    'password':"Passwort",
    'cookie_policy':"Cookie-Richtlinie",
    'cart_promo_valid':"Angewendet!",
    'cart_promo_invalid':"Ungültig!",
    'pickup_msg_addr':"Abholung zwischen {opening}-{closing} Uhr \n {address} \n {zip} {city}",
    'Germany' : "Deutschland",
    'delivery_charge_label':"Liefergebühr",
    'guest_form_security_message':"Wir geben Ihre Informationen nicht an Dritte weiter. Wir gewährleisten angemessene Sicherheitsmaßnahmen, um Ihnen das beste Kundenerlebnis zu bieten.",
    'today':"Heute",
    'choose_pickup_time':"Abholzeit wählen"
  },
};
