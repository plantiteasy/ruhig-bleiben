(function () {
  "use strict";
  var D = window.RB;
  var $ = function (id) { return document.getElementById(id); };
  var LS_PROTO = "rb-protokoll-v1", LS_PROTO_PREV = "rb-protokoll-vorher-v1", LS_LANG = "rb-lang-v1", LS_PROTO_SAVED = "rb-protokoll-gesichert-v1";
  var UA = navigator.userAgent || "";
  var IS_ANDROID = /Android/i.test(UA);
  var IS_IOS = /iPhone|iPad|iPod/i.test(UA) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  // Browser in Telegram, WhatsApp, Instagram usw.: Kamera oft gesperrt, Speicher unsicher.
  var IS_INAPP = /; wv\)|Telegram|WhatsApp|Instagram|FBAN|FBAV|Line\//i.test(UA);

  // „§ 81a“, „Abs. 1“ usw. nicht am Zeilenende trennen
  function nb(s) { return String(s || "").replace(/(§§?|Abs\.|S\.|Nr\.|Art\.|Rn\.) (?=\d)/g, "$1\u00a0").replace(/PolG BW/g, "PolG\u00a0BW"); }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function pad(n) { return String(n).padStart(2, "0"); }
  function fmtDate(d) { return pad(d.getDate()) + "." + pad(d.getMonth() + 1) + "." + d.getFullYear(); }
  function fmtTime(d) { return pad(d.getHours()) + ":" + pad(d.getMinutes()); }
  function isoDate(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
  function flash(el, text, ms) { el.textContent = text; clearTimeout(el._t); el._t = setTimeout(function () { el.textContent = ""; }, ms || 3500); }
  function mb(n) { var m = (n || 0) / 1048576; return (m < 10 ? m.toFixed(1).replace(".", ",") : String(Math.round(m))) + (UI === "ru" ? " МБ" : " MB"); }
  /* ---------- Sprache der Oberfläche (DE/RU) ----------
     Inhalte stehen in data.js deutsch, die russische Fassung jeweils in „ru“. Sätze zum Sagen bleiben immer deutsch
     (groß), darunter russisch – gezeigt wird ja der Polizei. Paragrafen und Briefe an Behörden bleiben deutsch. */
  var LS_UI = "rb-ui-v1";
  var UI = lsGet(LS_UI) || (/^(ru|uk|be|kk)/i.test(navigator.language || "") ? "ru" : "de");
  var T = {
    de: {
      meta: "Prototyp · Baden-Württemberg · Stand 25.09.2026 · keine Rechtsberatung", install: "Installieren", install_app: "App installieren",
      tab_jetzt: "Jetzt", tab_fragen: "Fragen", tab_aufnahme: "Aufnahme", tab_danach: "Danach", tab_wissen: "Wissen", tabs_aria: "Bereiche",
      jetzt_h: "Was passiert gerade?", jetzt_lead: "Tippe auf deine Situation. Du bekommst sofort, was du sagen und was du lassen solltest.",
      q_ask: "Frage stellen", q_proto: "Protokoll", back: "Zurück", close: "Schließen",
      b_say: "Sag", b_do: "Tu", b_dont: "Lass", tap: "Groß anzeigen",
      act_film: "Video ohne Ton", act_consent: "Mit Einwilligung aufnehmen", act_proto: "Protokoll danach", act_qh: "Antworten mit §",
      k_start: "Ich werde kontrolliert", k_start_s: "Video ohne Ton startet · Antworten mit § auf einem Bildschirm", k_h: "Was sagt der Polizist?", k_role_aria: "Ich bin",
      k_ptt: "Stichwort sagen", k_ptt_on: "Ich höre … Stichwort sagen", k_nomatch: "Nicht gefunden: „{x}“. Tippe auf einen Knopf.",
      k_mic_busy: "Bei einer Aufnahme mit Ton ist das Mikrofon belegt. Tippe auf einen Knopf.", k_all: "Alle 64 Antworten",
      k_rec: "Video starten", k_stop: "Stopp", k_norec: "Keine Aufnahme", k_rec_wait: "Kamera startet …", k_rec_silent: "Video ohne Ton", k_rec_audio: "Video mit Ton",
      k_saved: "Aufnahme gespeichert.", k_sichern: "Jetzt sichern", k_big: "Zeigen", k_more: "Mehr und warum",
      k_test_warn: "Testmodus: nur mit Freunden, die Polizei spielen und einverstanden sind. Der Ton geht zur Erkennung an Google. Nicht bei echter Polizei benutzen.",
      k_listen: "Mithören starten (Test)", k_listen_on: "Mithören stoppen", k_live: "Hört mit (Test):", k_log_share: "Log teilen", k_test_off: "Testmodus aus", k_log_none: "kein Treffer",
      k_start_filme: "Ich filme eine Kontrolle (Freund, Fremde)", k_menu: "Menü", k_stop_sure: "Wirklich stoppen?", big_speak: "Vorlesen (Deutsch)",
      einr_card: "In 30 Sekunden einrichten: Kamera erlauben, auf den Startbildschirm, üben →", einr_h: "In 30 Sekunden bereit", einr_lead: "Einmal jetzt in Ruhe – dann reicht im Ernstfall ein Tipp.",
      einr_1: "Sprache der App", einr_2: "Meistens bin ich", einr_3: "Kamera und Mikrofon erlauben", einr_3h: "Sonst fragt das Handy erst, wenn der Polizist schon da ist.",
      einr_cam: "Jetzt erlauben", einr_cam_ok: "✓ Erlaubt", einr_4: "Auf den Startbildschirm", einr_4h: "Danach: lange auf das App-Symbol drücken → „Kontrolle“ startet sofort das Video.",
      einr_5: "Einmal üben", einr_try: "Kontrolle-Bildschirm ansehen (ohne Aufnahme)", einr_test: "Mit einem Freund üben: Mithör-Test einschalten (Ton geht an Google)",
      einr_6: "Optional: Profil", einr_prof: "Führerschein, Aufenthalt – für passende Hinweise", einr_done: "Fertig",
      fragen_h: "Frage stellen",
      fragen_lead: "Tippe auf das Mikrofon und frag kurz, zum Beispiel „Darf ich filmen?“ oder «Можно ли снимать?». Die Antwort erscheint als Text, sobald du fertig gesprochen hast. Danach hört das Mikrofon noch 5 Sekunden zu, falls du etwas ergänzen willst. Verarbeitet wird nur deine Frage.",
      seg_ask_aria: "Sprache der Spracheingabe", seg_de: "Deutsch", seg_ru: "Русский", mic_idle: "Tippen und fragen", mic_on: "Ich höre … tippen zum Stoppen",
      fragen_hint: "Die Erkennung übernimmt dein Browser (Chrome über Google, Safari über Apple). Die App speichert deine Frage nicht.",
      ask_label: "Frage eintippen", ask_ph: "Oder tippen: filmen, Ausweis, Test …", ask_go: "Suchen", ask_empty: "Gib zuerst eine Frage ein.",
      alt: "Passt vielleicht auch:", speak: "Vorlesen", stop: "Stopp", speak_na: "Vorlesen nicht verfügbar", speak_say: "Sag",
      no_card: "Dazu habe ich noch keine Karte. Versuch: filmen, Ausweis, Test, Handy, Durchsuchung, Anwalt – oder wähle unter „Jetzt“ deine Situation.",
      sr_ios: "Spracheingabe ist gesperrt: Einstellungen › Allgemein › Tastatur › Diktierfunktion einschalten. Oder die Frage tippen.",
      sr_blocked: "Spracheingabe ist in diesem Browser gesperrt. Tippe die Frage.", sr_net: "Spracheingabe braucht Internet. Tippe die Frage – die Antworten kommen auch offline.",
      sr_nospeech: "Nichts gehört. Noch einmal tippen und kurz fragen.", sr_audio: "Kein Mikrofon gefunden.", sr_other: "Spracheingabe unterbrochen ({x}).",
      sr_none: "Spracheingabe gibt es in diesem Browser nicht. Nutze Chrome (Android) oder Safari (iPhone) – oder tippe die Frage.", sr_start: "Spracheingabe konnte nicht starten.",
      perm_android: "{w} ist blockiert. In Chrome: Menü ⋮ › Einstellungen › Website-Einstellungen › {s} – diese Seite erlauben.",
      perm_ios: "{w} ist blockiert. Einstellungen › Apps › Safari › {s} – auf „Fragen“ oder „Erlauben“ stellen.", perm_other: "{w} ist blockiert. In den Website-Einstellungen des Browsers erlauben.",
      w_mic: "Mikrofon", s_mic: "Mikrofon", w_cam: "Kamera", s_cam: "Kamera", w_cammic: "Kamera oder Mikrofon", s_cammic: "Kamera bzw. Mikrofon", w_geo: "Standort", s_geo: "Standort",
      rec_h: "Aufnahme", rec_lead: "Video ohne Ton ist erlaubt, solange du nicht störst. Ton nur mit Einwilligung aller, die sprechen. Am Steuer: erst Motor ganz aus, dann Handy in die Hand.",
      rec_silent: "Video ohne Ton starten", rec_consent: "Mit Ton – nur mit Einwilligung", consent_ask: "Frag laut und warte auf die Antwort:",
      consent_yes: "Alle sind einverstanden – mit Ton", consent_no: "Nicht einverstanden – Video ohne Ton", cancel: "Abbrechen",
      consent_tip: "Tipp: Lass dir die Einwilligung zu Beginn der Aufnahme noch einmal bestätigen.", rec_stop: "Aufnahme beenden",
      rec_live_hint: "Bildschirm anlassen und die App nicht wechseln – sonst stoppt das Handy die Kamera. Was bis dahin aufgenommen ist, bleibt gespeichert.",
      rec_note: "<strong>Wird jede Sekunde auf dem Gerät gespeichert,</strong> auch wenn die App abstürzt. Trotzdem nach dem Stopp „Sichern“ tippen und an dich selbst oder in deine Cloud schicken – falls das Handy abgenommen wird. Automatische Cloud-Sicherung fehlt noch.",
      rec_running: "Aufnahme läuft", mode_audio: "Mit Ton (Einwilligung {x})", mode_silent: "Ohne Ton",
      rec_nobrowser: "Aufnehmen geht in diesem Browser nicht. Nutze Chrome (Android) oder Safari (iPhone), die Seite muss über https laufen.",
      rec_nocam: "Keine passende Kamera gefunden.", rec_busy: "Die Kamera ist belegt. Andere Kamera-Apps schließen und noch einmal tippen.", rec_camfail: "Kamera konnte nicht starten ({x}).",
      rec_storage: "Speichern auf dem Gerät klappt nicht (Speicher voll oder privater Modus). Die Aufnahme läuft weiter – nach dem Stopp sofort „Sichern“.",
      rec_nopersist: "Dieses Gerät speichert Aufnahmen nicht dauerhaft. Nach dem Stopp sofort „Sichern“.", rec_empty: "Die Aufnahme ist leer. Bitte noch einmal starten.",
      recs_h: "Auf diesem Gerät", recs_one: "Aufnahme", recs_many: "Aufnahmen", recs_hint: "„Sichern“ schickt die Originaldatei an dich selbst: in Telegram „Als Datei senden“, in WhatsApp als „Dokument“ – sonst wird das Video verkleinert. Oder in Google Drive.",
      rec_saved: "Gespeichert auf diesem Handy. Jetzt „Sichern“ tippen – falls das Handy abgenommen wird.", rec_share_big: "Zu groß zum direkten Teilen (über 50 MB). Die Datei liegt jetzt unter „Downloads“ – dort antippen › Teilen › Google Drive oder Telegram (als Datei).",
      rec_cut: "Aufnahme gestoppt – das Handy hat die Kamera beendet ({x} Uhr). Das Video bis dahin ist gespeichert.", rec_try_silent: "Oder ohne Ton filmen: „Video ohne Ton starten“ tippen.",
      perm_inapp: "Du bist im Browser von Telegram, WhatsApp o. Ä. Hier sind Kamera und Mikrofon oft gesperrt und Aufnahmen gehen leicht verloren. Öffne die Seite in Chrome: Menü ⋮ › „Im Browser öffnen“.",
      rec_recovered: "Wiederhergestellt – die Aufnahme wurde unterbrochen", hash_wait: "wird berechnet …", hash_na: "nicht berechnet (Datei zu groß)",
      b_share: "Sichern", b_dl: "Herunterladen", b_proto: "Ins Protokoll", b_del: "Löschen", b_del_sure: "Wirklich löschen?", b_taken: "Übernommen",
      m_clock: " Uhr", m_ca: "ca. ", m_sec: " s", m_audio: "mit Ton, Einwilligung {x}", m_silent: "ohne Ton",
      danach_h: "Danach", danach_lead: "Noch am selben Tag: Gedächtnisprotokoll. Diktieren geht mit dem Mikrofon neben jedem Feld.",
      seg_dict_aria: "Sprache fürs Diktieren", dict_de: "Diktat Deutsch", dict_ru: "Диктовка по-русски", dict: "Diktieren", gps: "Standort einfügen", gps_wait: "Suche …",
      f_datum: "Datum", f_zeit: "Uhrzeit", f_ort: "Ort", f_beamte: "Beamte und Fahrzeuge", f_ablauf: "Was ist passiert?", f_zitate: "Wörtliche Aussagen", f_zeugen: "Zeugen",
      f_aufnahmen: "Aufnahmen", f_schaden: "Verletzungen und Schäden", f_name: "Dein Name und Anschrift (für Briefe)",
      ph_ort: "Straße, Haltestelle, Richtung", ph_beamte: "Namen, Dienststelle, Kennzeichen, Aussehen", ph_ablauf: "Der Reihe nach, mit Uhrzeiten, so genau wie möglich",
      ph_zitate: "Wer hat was genau gesagt?", ph_zeugen: "Name und Kontakt, nur mit Einverständnis", ph_aufnahmen: "Unter „Aufnahme“ bei der Aufnahme „Ins Protokoll“ tippen",
      ph_schaden: "Was, wo, Arztbesuch, Fotos", ph_name: "Vorname Nachname, Straße, PLZ Ort",
      p_copy: "Protokoll kopieren", share: "Teilen", p_file: "Als Datei", p_clear: "Protokoll löschen", p_clear_sure: "Wirklich löschen?", p_new: "Protokoll gelöscht.", p_undo: "Rückgängig", p_restored: "Protokoll wiederhergestellt",
      p_backup: "Nur auf diesem Handy gespeichert – ein iPhone löscht es nach einigen Tagen ohne Nutzung. Jetzt „Als Datei“ oder „Teilen“ an dich selbst.",
      when_check: "Datum und Uhrzeit des Vorfalls – bitte prüfen, nicht die jetzige Zeit.", sr_none_p: "Diktieren gibt es in diesem Browser nicht. Tippe den Text ins Feld.",
      sr_net_p: "Diktieren braucht Internet. Tippe den Text ins Feld.", sr_blocked_p: "Diktieren ist in diesem Browser gesperrt. Tippe den Text ins Feld.",
      l_missing: "Vor dem Senden noch ausfüllen: {x}.", l_cyr: "Der Brief geht an deutsche Behörden: Ort und Name in lateinischen Buchstaben, die Schilderung auf Deutsch.",
      qh_h: "Polizei sagt … – deine Antwort", qh_lead: "Antippen: Der Satz erscheint groß mit Paragraf. Läuft die Aufnahme, ist alles drauf, was gesagt wird.",
      qh_top: "Wichtigste", v_musst: "Pflicht – mitmachen", v_musst_nicht: "Musst du nicht", v_darf_nicht: "Darf die Polizei nicht", v_kommt_drauf_an: "Kommt drauf an",
      dl_bc_over: "Frist vorbei – Aufnahmen sind wahrscheinlich gelöscht. Trotzdem schicken und Anwalt fragen.", act_notdienst: "Anwaltsnotdienst Stuttgart anrufen", alt_more: "Öffnen",
      copied: "Kopiert", copy_fail: "Kopieren ging nicht – bitte „Teilen“ nutzen", geo_na: "Standort ist hier nicht verfügbar", geo_fail: "Standort nicht gefunden. Draußen noch einmal versuchen.",
      fristen_h: "Fristen", briefe_h: "Briefe",
      dl_proto: "Gedächtnisprotokoll", dl_proto_d: "am selben Tag – {x}", dl_bc: "Bodycam-Sicherung beantragen", dl_bc_d: "sofort; gelöscht wird spätestens am {x}",
      dl_bb: "Bürgerbeauftragte BW", dl_bb_d: "bis {x}, nicht parallel zu einem Straf- oder Gerichtsverfahren", dl_anwalt: "Anwalt", dl_anwalt_d: "vor jeder Beschwerde oder Anzeige sprechen",
      left_over: "abgelaufen", left_today: "heute", left_1: "noch 1 Tag", left_n: "noch {x} Tage",
      l_to: "An:", l_copy: "Kopieren", l_mail: "In Mail öffnen",
      wissen_h: "Wissen", w_label: "Wissen durchsuchen", w_ph: "Suchen: pusten, Ausweis, filmen …", w_cats: "Themen", w_all: "Alle",
      w_empty: "Nichts gefunden. Versuch: pusten, Ausweis, filmen, Handy, Beschwerde.", w_sits: "Situationen",
      data_note: "Deine Daten bleiben auf dem Gerät: Protokoll und Aufnahmen gehen an keinen Server.",
      disclaimer: "Allgemeine Information, keine Rechtsberatung. Geprüft anhand von Gesetzen und Gerichtsentscheidungen, noch nicht von einem Anwalt. Quellen: {links}",
      i_done: "<strong>Installiert.</strong> Situationen und Wissen funktionieren auch ohne Internet.",
      i_ios: "<strong>Auf den Home-Bildschirm:</strong> In Safari „Teilen“ und dann „Zum Home-Bildschirm“. Danach funktionieren Situationen und Wissen auch ohne Internet.",
      i_android: "<strong>Als App installieren:</strong> In Chrome oben rechts ⋮ und dann „App installieren“ oder „Zum Startbildschirm hinzufügen“. Danach funktionieren Situationen und Wissen auch ohne Internet.",
      i_other: "<strong>Als App aufs Handy:</strong> Android – in Chrome ⋮ und „App installieren“. iPhone – in Safari „Teilen“ und „Zum Home-Bildschirm“.",
      i_samsung: "<strong>Als App installieren:</strong> Menü ≡ unten rechts › „Seite hinzufügen zu“ › „Startbildschirm“. Danach funktionieren Situationen und Wissen auch ohne Internet.",
      i_firefox: "<strong>Als App installieren:</strong> Menü ⋮ › „Installieren“ oder „Zum Startbildschirm hinzufügen“. Am zuverlässigsten läuft die App in Chrome.",
      i_crios: "<strong>Auf den Home-Bildschirm:</strong> Chrome auf dem iPhone: Teilen-Symbol oben › „Zum Home-Bildschirm“. Klappt das nicht, die Seite in Safari öffnen.",
      prof_h: "Mein Profil", prof_open: "Mein Profil", prof_lead: "Freiwillig. Mit ein paar Angaben passen die Hinweise besser zu dir – zum Beispiel, wie lange dein Führerschein hier noch gilt.",
      pf_by: "Geburtsjahr", pf_none: "Keine Angabe", pf_nat: "Staatsangehörigkeit", pf_nat_de: "Deutsch", pf_nat_eu: "EU-Staat", pf_nat_andere: "Anderes Land",
      pf_status: "Aufenthalt", pf_st_p24: "Schutz nach § 24 (Ukraine)", pf_st_titel: "Aufenthaltstitel", pf_st_asyl: "Asyl oder Duldung", pf_st_visum: "Visum oder anderes",
      pf_fs: "Führerschein aus", pf_fs_de: "Deutschland", pf_fs_eu: "EU-Staat", pf_fs_ua: "Ukraine", pf_fs_dritt: "Anderes Land, z. B. Russland oder Kasachstan", pf_fs_kein: "Kein Führerschein",
      pf_fsdatum: "Führerschein erhalten am", pf_seit: "Seit wann wohnst du in Deutschland?", pf_seit_hint: "Der erste Tag in Deutschland – nicht der Einzug in die jetzige Wohnung. Ab diesem Tag laufen die 6 Monate.", d_tag: "Tag", d_mon: "Monat", d_jahr: "Jahr", d_missing: "Noch wählen: {x}", d_invalid: "Dieses Datum gibt es nicht – bitte den Tag prüfen.", d_future: "Das Datum liegt in der Zukunft – bitte prüfen.",
      mon_1: "Januar", mon_2: "Februar", mon_3: "März", mon_4: "April", mon_5: "Mai", mon_6: "Juni", mon_7: "Juli", mon_8: "August", mon_9: "September", mon_10: "Oktober", mon_11: "November", mon_12: "Dezember",
      pf_bau: "Ich arbeite auf Baustellen",
      prof_privacy: "Bleibt nur auf diesem Handy, nichts wird gesendet. Die Hinweise folgen festen Regeln aus den Karten – keine Rechtsberatung.",
      prof_del: "Profil löschen", prof_del_sure: "Wirklich löschen?", prof_deleted: "Profil gelöscht", prof_saved: "Gespeichert – nur auf diesem Handy",
      fd_h: "Für dich", fd_empty: "Noch keine Hinweise. Fülle oben aus, was du möchtest.", fd_edit: "Profil ändern",
      fd_invite: "Genauer für dich: ein kurzes Profil – freiwillig, bleibt auf dem Handy.", fd_invite_go: "Ausfüllen", fd_hide: "Ausblenden",
      n_fs_over: "Dein ausländischer Führerschein gilt in Deutschland seit dem {d} nicht mehr. Nicht mehr fahren – sonst ermittelt die Polizei wegen Fahrens ohne Fahrerlaubnis. Umschreiben lassen.",
      n_fs_soon: "Dein ausländischer Führerschein gilt hier nur noch {n} – bis zum {d}. Jetzt bei der Führerscheinstelle umschreiben lassen.",
      n_fs_ok: "Dein ausländischer Führerschein gilt hier bis zum {d} – 6 Monate ab deinem Zuzug nach Deutschland. Umschreibung rechtzeitig beantragen.",
      n_fs_today: "Dein ausländischer Führerschein gilt hier nur noch heute ({d}). Ab morgen nicht mehr fahren – umschreiben lassen.",
      n_ua_ask: "Hast du Schutz nach § 24? Dann gilt dein ukrainischer Führerschein weiter – trag es im Profil unter „Aufenthalt“ ein. Sonst gilt er 6 Monate ab Zuzug.",
      n_ua24_over: "Laut Stand der App endete der Schutz nach § 24 am 04.03.2027. Prüfe deinen Aufenthaltstitel: Wurde der Schutz verlängert, gilt der Führerschein weiter – sonst erst klären, dann fahren.",
      n_pass_asyl: "Mit Asyl oder Duldung: Aufenthaltsgestattung oder Duldungsbescheinigung immer dabeihaben und der Polizei auf Verlangen zeigen – der Pass liegt oft bei der Behörde.",
      n_fs_ask: "Trag im Profil ein, seit wann du in Deutschland wohnst – dann siehst du, wie lange dein Führerschein hier noch gilt.",
      n_ua_extra: " Ukrainische Führerscheine lassen sich seit 18.08.2026 ohne Prüfung umschreiben.",
      n_ua24: "Dein ukrainischer Führerschein gilt mit § 24 ohne Übersetzung, derzeit bis zum 04.03.2027 ({n}). Aufenthaltstitel und EU-Verordnung 2022/1280 ausgedruckt dabeihaben. Seit 18.08.2026 ohne Prüfung umschreibbar.",
      n_null: "Für dich gilt am Steuer 0,0 Promille und kein Cannabis – {g}. Das gilt auch auf dem E-Scooter.",
      n_null_u21: "unter 21", n_null_b21: "bis zu deinem 21. Geburtstag in diesem Jahr", n_null_pz: "in der Probezeit, voraussichtlich bis zum {d}", n_and: " und ",
      n_pass_eu: "Als EU-Bürger: Pass oder Personalausweis immer dabeihaben und der Polizei auf Verlangen zeigen.",
      n_pass: "Als ausländischer Staatsbürger: Pass oder Aufenthaltstitel immer dabeihaben und der Polizei auf Verlangen zeigen.",
      n_bau: "Auf der Baustelle: Ausweis immer im Original dabei (sonst Bußgeld bis 5.000 €). Beim Zoll musst du Fragen zu deiner Arbeit beantworten – anders als bei der Polizei.",
      days_1: "1 Tag", days_n: "{n} Tage"
    },
    ru: {
      meta: "Прототип · Баден-Вюртемберг · на 25.09.2026 · не юридическая консультация", install: "Установить", install_app: "Установить приложение",
      tab_jetzt: "Сейчас", tab_fragen: "Вопрос", tab_aufnahme: "Запись", tab_danach: "После", tab_wissen: "Знания", tabs_aria: "Разделы",
      jetzt_h: "Что происходит?", jetzt_lead: "Нажми на свою ситуацию — сразу увидишь, что сказать и чего не делать.",
      q_ask: "Задать вопрос", q_proto: "Протокол", back: "Назад", close: "Закрыть",
      b_say: "Скажи", b_do: "Делай", b_dont: "Не делай", tap: "Показать крупно",
      act_film: "Видео без звука", act_consent: "Запись с согласия", act_proto: "Протокол после", act_qh: "Ответы с §",
      k_start: "Меня проверяет полиция", k_start_s: "Запускается видео без звука · ответы с § на одном экране", k_h: "Что говорит полицейский?", k_role_aria: "Я",
      k_ptt: "Сказать слово", k_ptt_on: "Слушаю… скажи слово", k_nomatch: "Не найдено: «{x}». Нажми на кнопку.",
      k_mic_busy: "Во время записи со звуком микрофон занят. Нажми на кнопку.", k_all: "Все 64 ответа",
      k_rec: "Начать видео", k_stop: "Стоп", k_norec: "Запись не идёт", k_rec_wait: "Камера включается…", k_rec_silent: "Видео без звука", k_rec_audio: "Видео со звуком",
      k_saved: "Запись сохранена.", k_sichern: "Сохранить копию", k_big: "Показать полицейскому", k_more: "Подробнее и почему",
      k_test_warn: "Тестовый режим: только с друзьями, которые играют полицию и согласны. Звук для распознавания уходит в Google. Не использовать с настоящей полицией.",
      k_listen: "Начать прослушивание (тест)", k_listen_on: "Остановить прослушивание", k_live: "Слушает (тест):", k_log_share: "Поделиться логом", k_test_off: "Выключить тест", k_log_none: "нет совпадения",
      k_start_filme: "Я снимаю проверку (друга, чужих)", k_menu: "Меню", k_stop_sure: "Точно остановить?", big_speak: "Прочитать вслух по-немецки",
      einr_card: "Настроить за 30 секунд: камера, значок на экране, пробный запуск →", einr_h: "Готово за 30 секунд", einr_lead: "Один раз сейчас спокойно — тогда в нужный момент хватит одного нажатия.",
      einr_1: "Язык приложения", einr_2: "Чаще всего я", einr_3: "Разрешить камеру и микрофон", einr_3h: "Иначе телефон спросит, когда полицейский уже рядом.",
      einr_cam: "Разрешить сейчас", einr_cam_ok: "✓ Разрешено", einr_4: "Значок на главный экран", einr_4h: "Потом: долго нажми на значок приложения → «Kontrolle» сразу включает видео.",
      einr_5: "Один раз попробовать", einr_try: "Посмотреть экран проверки (без записи)", einr_test: "Потренироваться с другом: включить тест прослушивания (звук уходит в Google)",
      einr_6: "По желанию: профиль", einr_prof: "Права, вид на жительство — для точных подсказок", einr_done: "Готово",
      fragen_h: "Задать вопрос",
      fragen_lead: "Нажми на микрофон и спроси коротко, например «Можно ли снимать?» или „Darf ich filmen?“. Ответ появится текстом, как только договоришь. Потом микрофон ещё 5 секунд слушает, если захочешь что-то добавить. Обрабатывается только твой вопрос.",
      seg_ask_aria: "Язык голосового ввода", seg_de: "По-немецки", seg_ru: "По-русски", mic_idle: "Нажми и спроси", mic_on: "Слушаю… нажми, чтобы остановить",
      fragen_hint: "Речь распознаёт браузер (Chrome через Google, Safari через Apple). Приложение не сохраняет твой вопрос.",
      ask_label: "Ввести вопрос", ask_ph: "Или напиши: снимать, паспорт, тест …", ask_go: "Найти", ask_empty: "Сначала введи вопрос.",
      alt: "Может подойти и это:", speak: "Прочитать вслух", stop: "Стоп", speak_na: "Озвучка недоступна", speak_say: "Скажи",
      no_card: "Пока нет карточки на этот вопрос. Попробуй: снимать, паспорт, тест, телефон, обыск, адвокат — или выбери ситуацию на вкладке «Сейчас».",
      sr_ios: "Голосовой ввод выключен: Настройки › Основные › Клавиатура › включить «Диктовку». Или напиши вопрос.",
      sr_blocked: "Голосовой ввод в этом браузере заблокирован. Напиши вопрос.", sr_net: "Для голосового ввода нужен интернет. Напиши вопрос — ответы работают и без сети.",
      sr_nospeech: "Ничего не услышал. Нажми ещё раз и спроси коротко.", sr_audio: "Микрофон не найден.", sr_other: "Голосовой ввод прервался ({x}).",
      sr_none: "В этом браузере нет голосового ввода. Используй Chrome (Android) или Safari (iPhone) — или напиши вопрос.", sr_start: "Голосовой ввод не запустился.",
      perm_android: "Доступ к {w} заблокирован. В Chrome: меню ⋮ › Настройки › Настройки сайтов › {s} — разрешить для этого сайта.",
      perm_ios: "Доступ к {w} заблокирован. Настройки › Приложения › Safari › {s} — выбрать «Спрашивать» или «Разрешить».", perm_other: "Доступ к {w} заблокирован. Разреши его в настройках сайта в браузере.",
      w_mic: "микрофону", s_mic: "Микрофон", w_cam: "камере", s_cam: "Камера", w_cammic: "камере или микрофону", s_cammic: "Камера или Микрофон", w_geo: "местоположению", s_geo: "Геоданные",
      rec_h: "Запись", rec_lead: "Видео без звука можно, пока ты не мешаешь. Звук — только с согласия всех, кто говорит. За рулём: сначала полностью заглуши мотор, потом бери телефон.",
      rec_silent: "Начать видео без звука", rec_consent: "Со звуком — только с согласия", consent_ask: "Спроси вслух и дождись ответа:",
      consent_yes: "Все согласны — со звуком", consent_no: "Не согласны — видео без звука", cancel: "Отмена",
      consent_tip: "Совет: в начале записи попроси ещё раз подтвердить согласие.", rec_stop: "Остановить запись",
      rec_live_hint: "Не выключай экран и не переключайся на другое приложение — иначе телефон остановит камеру. Всё, что уже записано, сохранится.",
      rec_note: "<strong>Запись сохраняется на телефоне каждую секунду,</strong> даже если приложение упадёт. Всё равно после остановки нажми «Отправить себе» и отправь себе или в своё облако — на случай, если телефон заберут. Автоматического облака пока нет.",
      rec_running: "Идёт запись", mode_audio: "Со звуком (согласие {x})", mode_silent: "Без звука",
      rec_nobrowser: "В этом браузере запись не работает. Используй Chrome (Android) или Safari (iPhone), сайт должен открываться по https.",
      rec_nocam: "Подходящая камера не найдена.", rec_busy: "Камера занята. Закрой другие приложения с камерой и нажми ещё раз.", rec_camfail: "Камера не запустилась ({x}).",
      rec_storage: "Сохранить на телефоне не получается (память заполнена или приватный режим). Запись продолжается — после остановки сразу нажми «Отправить себе».",
      rec_nopersist: "Этот телефон не хранит записи надолго. После остановки сразу нажми «Отправить себе».", rec_empty: "Запись пустая. Начни ещё раз.",
      recs_h: "На этом телефоне", recs_one: "запись", recs_few: "записи", recs_many: "записей", recs_hint: "«Отправить себе» отправляет оригинальный файл: в Telegram — «Отправить как файл», в WhatsApp — как «Документ», иначе видео сожмётся. Или в Google Drive.",
      rec_saved: "Сохранено на этом телефоне. Теперь нажми «Отправить себе» — на случай, если телефон заберут.", rec_share_big: "Файл слишком большой для прямой отправки (больше 50 МБ). Он сохранён в «Загрузки» — открой его там › Поделиться › Google Drive или Telegram (как файл).",
      rec_cut: "Запись остановлена — телефон отключил камеру ({x}). Видео до этого момента сохранено.", rec_try_silent: "Или снимай без звука: нажми «Начать видео без звука».",
      perm_inapp: "Ты во встроенном браузере Telegram, WhatsApp или другого мессенджера. Здесь камера и микрофон часто заблокированы, а записи легко потерять. Открой страницу в Chrome: меню ⋮ › «Открыть в браузере».",
      rec_recovered: "Восстановлено — запись была прервана", hash_wait: "считается …", hash_na: "не посчитана (файл слишком большой)",
      b_share: "Отправить себе", b_dl: "Скачать", b_proto: "В протокол", b_del: "Удалить", b_del_sure: "Точно удалить?", b_taken: "Добавлено",
      m_clock: "", m_ca: "ок. ", m_sec: " с", m_audio: "со звуком, согласие {x}", m_silent: "без звука",
      danach_h: "После", danach_lead: "В тот же день: протокол по памяти. Надиктовать можно кнопкой у каждого поля.",
      seg_dict_aria: "Язык диктовки", dict_de: "Диктовка по-немецки", dict_ru: "Диктовка по-русски", dict: "Диктовать", gps: "Вставить место", gps_wait: "Ищу …",
      f_datum: "Дата", f_zeit: "Время", f_ort: "Место", f_beamte: "Полицейские и машины", f_ablauf: "Что произошло?", f_zitate: "Точные слова", f_zeugen: "Свидетели",
      f_aufnahmen: "Записи", f_schaden: "Травмы и ущерб", f_name: "Твоё имя и адрес (для писем)",
      ph_ort: "Улица, остановка, направление", ph_beamte: "Имена, участок, номера машин, внешность", ph_ablauf: "По порядку, со временем, как можно точнее",
      ph_zitate: "Кто что именно сказал?", ph_zeugen: "Имя и контакт, только с согласия", ph_aufnahmen: "В «Записи» нажми «В протокол» у нужной записи",
      ph_schaden: "Что, где, врач, фото", ph_name: "Имя Фамилия, улица, индекс, город",
      p_copy: "Копировать протокол", share: "Поделиться", p_file: "Файлом", p_clear: "Удалить протокол", p_clear_sure: "Точно удалить?", p_new: "Протокол удалён.", p_undo: "Отменить", p_restored: "Протокол восстановлен",
      p_backup: "Хранится только на этом телефоне — iPhone удаляет такие данные через несколько дней без использования. Сейчас нажми «Файлом» или «Поделиться» себе.",
      when_check: "Дата и время случая — проверь, это не «сейчас».", sr_none_p: "В этом браузере нет диктовки. Напиши текст в поле.",
      sr_net_p: "Для диктовки нужен интернет. Напиши текст в поле.", sr_blocked_p: "Диктовка в этом браузере заблокирована. Напиши текст в поле.",
      l_missing: "Перед отправкой заполни: {x}.", l_cyr: "Письмо уйдёт в немецкие органы: место и имя латиницей, как в паспорте, описание — по-немецки (переключи «Диктовка по-немецки»).",
      qh_h: "Полиция говорит … — твой ответ", qh_lead: "Нажми: фраза появится крупно с параграфом. Если идёт запись, всё сказанное попадёт на неё.",
      qh_top: "Главное", v_musst: "Обязан — выполни", v_musst_nicht: "Не обязан", v_darf_nicht: "Полиции нельзя", v_kommt_drauf_an: "Зависит",
      dl_bc_over: "Срок прошёл — записи, скорее всего, удалены. Всё равно отправь и спроси адвоката.", act_notdienst: "Позвонить дежурному адвокату (Штутгарт)", alt_more: "Открыть",
      copied: "Скопировано", copy_fail: "Скопировать не удалось — нажми «Поделиться»", geo_na: "Местоположение здесь недоступно", geo_fail: "Место не найдено. Попробуй ещё раз на улице.",
      fristen_h: "Сроки", briefe_h: "Письма",
      dl_proto: "Протокол по памяти", dl_proto_d: "в тот же день — {x}", dl_bc: "Попросить сохранить записи камер", dl_bc_d: "сразу; удалят не позже {x}",
      dl_bb: "Уполномоченная по делам граждан BW", dl_bb_d: "до {x}, не параллельно с уголовным делом или судом", dl_anwalt: "Адвокат", dl_anwalt_d: "поговорить до любой жалобы или заявления",
      left_over: "срок истёк", left_today: "сегодня",
      l_to: "Кому:", l_copy: "Копировать", l_mail: "Открыть в почте",
      wissen_h: "Знания", w_label: "Поиск по знаниям", w_ph: "Поиск: дуть, паспорт, снимать …", w_cats: "Темы", w_all: "Все",
      w_empty: "Ничего не найдено. Попробуй: дуть, паспорт, снимать, телефон, жалоба.", w_sits: "Ситуации",
      data_note: "Твои данные остаются на телефоне: протокол и записи не уходят ни на какой сервер.",
      disclaimer: "Общая информация, не юридическая консультация. Проверено по законам и решениям судов, адвокатом ещё не проверено. Источники: {links}",
      i_done: "<strong>Установлено.</strong> Ситуации и знания работают и без интернета.",
      i_ios: "<strong>На экран «Домой»:</strong> в Safari нажми «Поделиться», затем «На экран „Домой“». После этого ситуации и знания работают и без интернета.",
      i_android: "<strong>Установить как приложение:</strong> в Chrome справа вверху ⋮, затем «Установить приложение» или «Добавить на главный экран». После этого ситуации и знания работают и без интернета.",
      i_other: "<strong>Приложение на телефон:</strong> Android — в Chrome ⋮ и «Установить приложение». iPhone — в Safari «Поделиться» и «На экран „Домой“».",
      i_samsung: "<strong>Установить как приложение:</strong> меню ≡ справа внизу › «Добавить страницу на» › «Главный экран». После этого ситуации и знания работают и без интернета.",
      i_firefox: "<strong>Установить как приложение:</strong> меню ⋮ › «Установить» или «Добавить на главный экран». Надёжнее всего приложение работает в Chrome.",
      i_crios: "<strong>На экран «Домой»:</strong> в Chrome на iPhone — значок «Поделиться» вверху › «На экран „Домой“». Если не получается, открой страницу в Safari.",
      prof_h: "Мой профиль", prof_open: "Мой профиль", prof_lead: "По желанию. Несколько данных — и подсказки точнее подойдут тебе, например сколько ещё действуют твои права.",
      pf_by: "Год рождения", pf_none: "Не указано", pf_nat: "Гражданство", pf_nat_de: "Германия", pf_nat_eu: "Страна ЕС", pf_nat_andere: "Другая страна",
      pf_status: "Статус пребывания", pf_st_p24: "Защита по § 24 (Украина)", pf_st_titel: "Вид на жительство", pf_st_asyl: "Убежище или Duldung", pf_st_visum: "Виза или другое",
      pf_fs: "Права выданы в", pf_fs_de: "Германии", pf_fs_eu: "стране ЕС", pf_fs_ua: "Украине", pf_fs_dritt: "другой стране, например России или Казахстане", pf_fs_kein: "Прав нет",
      pf_fsdatum: "Дата получения прав", pf_seit: "С какого дня ты живёшь в Германии?", pf_seit_hint: "Первый день жизни в Германии, а не въезд в нынешнюю квартиру. С этого дня идут 6 месяцев.", d_tag: "День", d_mon: "Месяц", d_jahr: "Год", d_missing: "Ещё выбери: {x}", d_invalid: "Такой даты нет — проверь день.", d_future: "Эта дата ещё не наступила — проверь.",
      mon_1: "январь", mon_2: "февраль", mon_3: "март", mon_4: "апрель", mon_5: "май", mon_6: "июнь", mon_7: "июль", mon_8: "август", mon_9: "сентябрь", mon_10: "октябрь", mon_11: "ноябрь", mon_12: "декабрь",
      pf_bau: "Работаю на стройках",
      prof_privacy: "Остаётся только на этом телефоне, ничего не отправляется. Подсказки строятся по готовым правилам из карточек — это не юридическая консультация.",
      prof_del: "Удалить профиль", prof_del_sure: "Точно удалить?", prof_deleted: "Профиль удалён", prof_saved: "Сохранено — только на этом телефоне",
      fd_h: "Для тебя", fd_empty: "Пока подсказок нет. Заполни выше, что хочешь.", fd_edit: "Изменить профиль",
      fd_invite: "Точнее для тебя: короткий профиль — по желанию, остаётся на телефоне.", fd_invite_go: "Заполнить", fd_hide: "Скрыть",
      n_fs_over: "Твои иностранные права в Германии не действуют с {d}. Не садись за руль — иначе полиция возбудит дело за езду без прав. Поменяй права.",
      n_fs_soon: "Твои иностранные права действуют здесь ещё {n} — до {d}. Сейчас подай на обмен в ведомство по правам (Führerscheinstelle).",
      n_fs_ok: "Твои иностранные права действуют здесь до {d} — 6 месяцев с переезда в Германию. Подай на обмен вовремя.",
      n_fs_today: "Твои иностранные права действуют здесь только сегодня ({d}). С завтрашнего дня не садись за руль — поменяй права.",
      n_ua_ask: "У тебя защита по § 24? Тогда украинские права действуют дальше — укажи это в профиле в поле «Статус пребывания». Иначе они действуют 6 месяцев с переезда.",
      n_ua24_over: "По данным приложения защита по § 24 закончилась 04.03.2027. Проверь свой вид на жительство: если защиту продлили, права действуют дальше — иначе сначала выясни, потом садись за руль.",
      n_pass_asyl: "При убежище или Duldung: всегда носи с собой Aufenthaltsgestattung или справку о Duldung и показывай полиции по требованию — паспорт часто хранится у ведомства.",
      n_fs_ask: "Укажи в профиле, с какого дня ты живёшь в Германии, — тогда увидишь, сколько ещё действуют твои права.",
      n_ua_extra: " Украинские права с 18.08.2026 можно обменять без экзаменов.",
      n_ua24: "Твои украинские права с § 24 действуют без перевода, сейчас до 04.03.2027 ({n}). Держи при себе вид на жительство и распечатку регламента ЕС 2022/1280. С 18.08.2026 их можно обменять без экзаменов.",
      n_null: "Для тебя за рулём: 0,0 промилле и никакого каннабиса — {g}. На электросамокате тоже.",
      n_null_u21: "тебе нет 21", n_null_b21: "до твоего 21-го дня рождения в этом году", n_null_pz: "на испытательном сроке, примерно до {d}", n_and: " и ",
      n_pass_eu: "Гражданину ЕС: паспорт или удостоверение личности всегда с собой, показывать полиции по требованию.",
      n_pass: "Иностранцу: паспорт или вид на жительство всегда с собой, показывать полиции по требованию.",
      n_bau: "На стройке: документ всегда в оригинале с собой (штраф до 5 000 €). Таможне ты обязан отвечать на вопросы о работе — в отличие от полиции.",
      days_1: "1 день", days_n: "{n} дн."
    }
  };
  function t(k, x) { var v = T[UI][k]; if (v == null) v = T.de[k]; if (v == null) v = k; return x == null ? v : v.replace("{x}", x); }
  // Feld aus data.js in der gewählten Sprache; fehlt die Übersetzung, gilt Deutsch.
  function L(o, f) { return UI === "ru" && o && o.ru && o.ru[f] != null ? o.ru[f] : o[f]; }
  function leftText(n) {
    if (n < 0) return t("left_over"); if (n === 0) return t("left_today");
    if (UI !== "ru") return n === 1 ? t("left_1") : t("left_n", n);
    var m10 = n % 10, m100 = n % 100;
    return "осталось " + n + (m10 === 1 && m100 !== 11 ? " день" : m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14) ? " дня" : " дней");
  }
  function recCount(n) {
    if (UI !== "ru") return n + " " + (n === 1 ? t("recs_one") : t("recs_many"));
    var m10 = n % 10, m100 = n % 100;
    return n + " " + (m10 === 1 && m100 !== 11 ? t("recs_one") : m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14) ? t("recs_few") : t("recs_many"));
  }

  // what: "mic", "cam", "cammic" oder "geo"
  function permHelp(what) {
    if (IS_INAPP) return t("perm_inapp");
    var k = IS_ANDROID ? "perm_android" : IS_IOS ? "perm_ios" : "perm_other";
    return t(k).replace("{w}", t("w_" + what)).replace("{s}", t("s_" + what));
  }

  /* ---------- Views ---------- */
  var views = ["jetzt", "fragen", "aufnahme", "danach", "wissen", "situation", "profil", "kontrolle", "einrichten"], currentView = "jetzt";
  var lastTab = "jetzt";
  function show(name) {
    if (name !== currentView) { stopListening(); if (name !== "fragen") stopSpeaking(); }
    currentView = name;
    views.forEach(function (v) { $("v-" + v).hidden = v !== name; });
    var tab = name === "situation" || name === "profil" ? lastTab : name === "kontrolle" || name === "einrichten" ? "jetzt" : name; lastTab = tab;
    document.body.classList.toggle("k-mode", name === "kontrolle"); // Vollbild: ohne Kopf und Tabs, Fußleiste mit Stichwort und Menü
    [].forEach.call(document.querySelectorAll(".tabs a"), function (a) {
      if (a.getAttribute("data-tab") === tab) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    updateRecFloat();
    window.scrollTo(0, 0);
  }
  function route() {
    var h = (location.hash || "#jetzt").slice(1);
    if (h.indexOf("s/") === 0) { var s = findSituation(h.slice(2)); if (s) { renderSituation(s); show("situation"); return; } }
    var v = views.indexOf(h) > -1 && h !== "situation" ? h : "jetzt";
    if (v === "danach") refreshProtoNow();
    if (v === "kontrolle" && !(history.state && history.state.rbK)) hideK(); // neu geöffnet: Knöpfe, nicht die alte Antwort
    if (v === "einrichten") renderEinrichten();
    show(v);
  }
  window.addEventListener("hashchange", route);

  /* ---------- Situations ---------- */
  function findSituation(id) { for (var i = 0; i < D.situations.length; i++) if (D.situations[i].id === id) return D.situations[i]; return null; }
  function renderGrid() {
    var names = {}, last = null;
    (D.groups || []).forEach(function (g) { names[g[0]] = UI === "ru" && g[2] ? g[2] : g[1]; });
    $("sit-grid").innerHTML = D.situations.map(function (s) {
      // Überschrift, sobald eine neue Gruppe beginnt – bei 15 Kacheln findet man so schneller die eigene Lage.
      var head = s.group && s.group !== last && names[s.group] ? '<h2 class="grid-h">' + esc(names[s.group]) + "</h2>" : "";
      last = s.group;
      return head + '<button class="sit" type="button" data-id="' + s.id + '"><span class="sit-t">' + esc(L(s, "title")) + '</span><span class="sit-s">' + esc(L(s, "sub")) +
        '</span><span class="pill ' + s.tone + '">' + esc(L(s, "toneLabel")) + "</span></button>";
    }).join("");
    [].forEach.call(document.querySelectorAll(".sit"), function (b) {
      b.addEventListener("click", function () { location.hash = "#s/" + b.getAttribute("data-id"); });
    });
  }
  function sayButtons(list) {
    return (list || []).map(function (p) {
      return '<button class="say-b" type="button" data-de="' + esc(p[0]) + '" data-ru="' + esc(p[1] || "") + '"><span class="say-de" lang="de" translate="no">' + esc(p[0]) +
        '</span><span class="say-ru" lang="ru">' + esc(p[1] || "") + '</span><span class="say-tap">' + esc(t("tap")) + "</span></button>";
    }).join("");
  }
  function actionButtons(actions) {
    return (actions || []).map(function (a) {
      if (a === "film") return '<a class="btn primary" href="#aufnahme" data-act="film">' + esc(t("act_film")) + "</a>";
      if (a === "consent") return '<a class="btn" href="#aufnahme" data-act="consent">' + esc(t("act_consent")) + "</a>";
      if (a === "protokoll") return '<a class="btn" href="#danach">' + esc(t("act_proto")) + "</a>";
      if (a === "qh") return '<a class="btn" href="#aufnahme" data-act="qh">' + esc(t("act_qh")) + "</a>";
      if (a.indexOf("tel:") === 0) return '<a class="btn primary" href="' + esc(a) + '">' + esc(t("act_notdienst")) + "</a>";
      if (a.indexOf("situation:") === 0) { var sit = findSituation(a.slice(10)); return sit ? '<a class="btn" href="#s/' + sit.id + '">' + esc(L(sit, "title")) + "</a>" : ""; }
      return "";
    }).join("");
  }
  function fdBox(list) {
    return list.length ? '<div class="fd-box"><div class="fd-head"><p class="block-t">' + esc(t("fd_h")) + '</p><a class="fd-edit" href="#profil">' + esc(t("fd_edit")) + "</a></div>" + list.map(noteHTML).join("") + "</div>" : "";
  }
  function situationHTML(s, compact, noHead) {
    var note = L(s, "note"), mine = profileNotes().filter(function (n) { return n.sits.indexOf(s.id) > -1; });
    // Dringendes (rot/gelb) über „Sag“, reine Info erst unter „Lass“ – die Sätze sollen ohne Scrollen sichtbar bleiben.
    var urgent = mine.filter(function (n) { return n.lv !== "info"; }), info = mine.filter(function (n) { return n.lv === "info"; });
    return (noHead ? "" : '<div class="s-head"><h' + (compact ? "3" : "1") + ">" + esc(L(s, "title")) + "</h" + (compact ? "3" : "1") + '><span class="pill ' + s.tone + '">' + esc(L(s, "toneLabel")) + "</span></div>") +
      fdBox(urgent) +
      '<div class="block"><p class="block-t say">' + esc(t("b_say")) + "</p>" + sayButtons(s.say) + "</div>" +
      '<div class="block"><p class="block-t do">' + esc(t("b_do")) + '</p><ul class="pts">' + L(s, "doo").map(function (x) { return "<li>" + telLinks(esc(x)) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="block"><p class="block-t dont">' + esc(t("b_dont")) + '</p><ul class="pts">' + L(s, "dont").map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>" +
      fdBox(info) +
      (note ? '<p class="note">' + esc(note) + "</p>" : "") +
      '<p class="law" lang="de" translate="no">' + esc(s.law) + "</p>" +
      '<div class="s-actions">' + actionButtons(s.actions) + "</div>";
  }
  function renderSituation(s) { $("sit-body").innerHTML = '<div class="view" style="padding:0">' + situationHTML(s, false) + "</div>"; }
  // „Zurück“ wie die Zurück-Taste: dorthin, woher man kam (Fragen, andere Situation …). Ohne Vorgeschichte (Link direkt geöffnet) nach „Jetzt“.
  // Jeder Verlaufseintrag bekommt seine Tiefe (history.state.d); so weiß „Zurück“, ob es noch in der App zurückgeht,
  // und die Scrollposition kommt beim Zurückgehen wieder.
  var depth = 0, replacing = false, scrollPos = {};
  (function () { var st = history.state; depth = st && st.d != null ? st.d : 0; try { history.replaceState({ d: depth }, ""); } catch (e) {} })();
  window.addEventListener("hashchange", function () {
    var st = history.state;
    if (st && st.d != null && !replacing) { depth = st.d; if (scrollPos[depth]) window.scrollTo(0, scrollPos[depth]); }
    else { if (!replacing) depth++; try { history.replaceState({ d: depth }, ""); } catch (e) {} }
    replacing = false;
  });
  window.addEventListener("scroll", function () { scrollPos[depth] = window.scrollY; }, { passive: true });
  function goBack() { if (depth > 0) history.back(); else { replacing = true; location.replace("#jetzt"); } }
  $("sit-back").addEventListener("click", goBack);

  /* ---------- Big phrase screen ---------- */
  var lastFocus = null, wakeLock = null;
  function keepAwake() {
    try {
      if (!navigator.wakeLock || wakeLock) return;
      navigator.wakeLock.request("screen").then(function (l) {
        wakeLock = l;
        l.addEventListener("release", function () { if (wakeLock === l) wakeLock = null; });
      }).catch(function () {});
    } catch (e) {}
  }
  function releaseAwake() { try { if (wakeLock) { var l = wakeLock; wakeLock = null; l.release(); } } catch (e) {} }
  function needAwake() { return !!(recState && recState.rec) || !$("big").hidden; }
  // opts.intro: „Ich spreche wenig Deutsch. Bitte lesen Sie:“ – für das Zeigen an den Beamten.
  function openBig(de, ru, from, law, why, opts) {
    $("big-de").textContent = nb(de); $("big-ru").textContent = nb(ru); $("big-law").textContent = nb(law); $("big-why").textContent = nb(why);
    $("big-intro").hidden = !(opts && opts.intro); bigSpeakText = de; bigSpeakUI(false);
    $("big-speak").hidden = !("speechSynthesis" in window);
    $("big").hidden = false; lastFocus = from; keepAwake();
    setInert(true); $("big").scrollTop = 0; $("big-close").focus();
    // Eigener Verlaufseintrag: Die Zurück-Taste von Android schließt das Großbild statt die Seite zu verlassen.
    try { history.pushState({ rbBig: 1 }, ""); } catch (e) {}
  }
  // Hinter dem Großbild ist nichts antippbar oder per Tab erreichbar.
  function setInert(on) { ["main", "rec-float"].forEach(function (id) { var el = $(id); if (el) el.inert = on; }); [].forEach.call(document.querySelectorAll(".app-head,.tabs"), function (el) { el.inert = on; }); }
  var bigSpeakText = "";
  function bigSpeakUI(on) { $("big-speak").textContent = on ? t("stop") : t("big_speak"); $("big-speak").setAttribute("aria-pressed", on ? "true" : "false"); }
  $("big-speak").addEventListener("click", function () {
    if ($("big-speak").getAttribute("aria-pressed") === "true") { stopSpeaking(); bigSpeakUI(false); return; }
    try {
      stopSpeaking();
      var u = new SpeechSynthesisUtterance(($("big-intro").hidden ? "" : $("big-intro").textContent + " ") + bigSpeakText.replace(/§§?/g, "Paragraf"));
      u.lang = "de-DE"; u.rate = 0.9;
      u.onend = u.onerror = function () { bigSpeakUI(false); };
      speechSynthesis.speak(u); bigSpeakUI(true);
    } catch (e) { bigSpeakUI(false); }
  });
  function hideBig() { stopSpeaking(); $("big").hidden = true; setInert(false); if (!needAwake()) releaseAwake(); if (lastFocus) { try { lastFocus.focus({ preventScroll: true }); } catch (e) {} } }
  function closeBig() { if ($("big").hidden) return; if (history.state && history.state.rbBig) history.back(); else hideBig(); }
  window.addEventListener("popstate", function () { if (!$("big").hidden) hideBig(); });
  $("big-close").addEventListener("click", closeBig);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeBig(); });
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest(".say-b");
    if (b) openBig(b.getAttribute("data-de"), b.getAttribute("data-ru"), b, b.getAttribute("data-law") || "", b.getAttribute("data-why") || "");
    var a = e.target.closest && e.target.closest("[data-act]");
    if (a) {
      pendingAct = a.getAttribute("data-act");
      // Aus einer Situation zur Aufnahme: passende Antworten gleich oben
      var sid = currentView === "situation" ? location.hash.slice(3) : "", cat = SIT_QH[sid];
      if (cat) { qhCat = cat; renderQuick(); }
    }
  });

  /* ---------- Matching ---------- */
  function norm(s) {
    return String(s || "").toLowerCase().replace(/\u00ad/g, "").replace(/ё/g, "е").replace(/[ії]/g, "и").replace(/є/g, "е").replace(/ґ/g, "г").replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
      .replace(/[^a-z0-9а-я ]+/g, " ").replace(/\s+/g, " ").trim();
  }
  // „~“ vor dem Suchwort: allgemein, zählt 1 Punkt (z. B. „за рул“ passt zu vielen Fragen).
  // „!“ davor: kurz, aber eindeutig, zählt 4 Punkte (z. B. „zoll“, „дтп“).
  function kwList(list) {
    return list.map(function (k) {
      var c = k.charAt(0), mark = c === "~" || c === "!";
      return { k: norm(mark ? k.slice(1) : k), weak: c === "~", strong: c === "!" };
    });
  }
  var corpus = [];
  function buildCorpus() {
    // Titel nur deutsch: Russische Fragen laufen über die Suchwörter (russische Titel brachten im Test nur Fehltreffer).
    D.situations.forEach(function (s) { corpus.push({ kind: "s", item: s, kw: kwList(s.kw), title: norm(s.title + " " + s.sub) }); });
    D.cards.forEach(function (c) { corpus.push({ kind: "c", item: c, kw: kwList(c.kw), title: norm(c.title) }); });
  }
  // Ein Wort der Frage passt, wenn es mit dem Suchwort beginnt (2). Ab 5 Buchstaben darf die Endung abweichen (1):
  // „пописать“ findet „пописал“, „травы“ findet „траву“.
  function wordHit(k, words) {
    var best = 0;
    for (var i = 0; i < words.length && best < 2; i++) {
      var w = words[i];
      if (w.indexOf(k) === 0) best = 2;
      else if (k.length >= 5 && w.length >= 4 && k.indexOf(w) !== 0) { // „kontrolle“ ist nicht „kontrolleur“
        var n = 0; while (n < k.length && k.charAt(n) === w.charAt(n)) n++;
        // Kurze Suchwörter brauchen fast das ganze Wort („handy“ ist nicht „handschellen“), die Länge darf kaum abweichen.
        if (n >= Math.max(4, k.length - (k.length > 6 ? 2 : 1)) && Math.abs(w.length - k.length) <= 2) best = 1;
      }
    }
    return best;
  }
  // Mehrwort-Suchwörter passen am Stück (2) oder in beliebiger Reihenfolge (1): „адвокат телефон“ findet „телефон адвокат“.
  function kwHit(k, nq, words) {
    if (nq.indexOf(" " + k) > -1) return 2;
    var parts = k.split(" "), q = parts.length > 1 ? 1 : 2;
    for (var i = 0; i < parts.length; i++) {
      if (parts[i].length <= 2) { if (words.indexOf(parts[i]) < 0) return 0; continue; }
      var h = wordHit(parts[i], words); if (!h) return 0; if (h < q) q = h;
    }
    return q;
  }
  var STOP = ["darf", "muss", "kann", "mich", "mein", "meine", "polizei", "wird", "werden", "eine", "einen", "nicht", "habe", "haben", "wurde", "wurden",
    "werde", "will", "soll", "bekomm", "bekommen", "sagen", "zeigen", "machen", "frage", "welche", "warum", "wieso", "jetzt", "heute", "gestern", "immer", "schon", "bitte",
    "можно", "меня", "если", "нужно", "надо", "полиция", "полицию", "полиции", "чтобы", "могут", "может", "должен", "сейчас", "почему"];
  function match(q) { return score(q).slice(0, 3); }
  function score(q) {
    var nq = " " + norm(q) + " ";
    if (nq.trim().length < 2) return [];
    var all = nq.trim().split(" ");
    var words = all.filter(function (w) { return w.length > 3 && STOP.indexOf(w) < 0; }).map(function (w) { return w.length > 6 ? w.slice(0, w.length - 2) : w; });
    return corpus.map(function (e) {
      var sc = 0, best = 0;
      e.kw.forEach(function (x) {
        var h = x.k ? kwHit(x.k, nq, all) : 0; if (!h) return;
        var pts = x.weak ? 1 : x.strong ? 4 : x.k.length < 6 ? 2 : x.k.length < 10 ? 3 : 4;
        sc += h === 2 || x.weak ? pts : pts - 1; if (x.k.length > best) best = x.k.length;
      });
      words.forEach(function (w) { if (e.title.indexOf(w) > -1) sc += 1; });
      return { e: e, sc: sc, best: best };
    }).filter(function (r) { return r.sc > 0; }).sort(function (a, b) { return b.sc - a.sc || b.best - a.best; });
  }
  // Telefonnummern (0711 …) antippbar machen – im Stress abtippen klappt nicht.
  function telLinks(html) { return html.replace(/(?:\+49|\b0)\d{2,4}(?: ?\d{2,4}){2,4}\b/g, function (m) { return '<a href="tel:' + m.replace(/ /g, "") + '">' + m + "</a>"; }); }
  function cardHTML(c, noHead) {
    return (noHead ? "" : '<div class="w-head"><h3>' + esc(L(c, "title")) + '</h3><span class="pill ' + c.tone + '">' + esc(L(c, "toneLabel")) + "</span></div>") +
      "<p>" + telLinks(esc(L(c, "text"))) + "</p>" + (c.say ? sayButtons(c.say) : "") + '<p class="law" lang="de" translate="no">' + esc(c.law) + "</p>";
  }
  // Antwort aus der Schnellhilfe (Polizei sagt → Antwort mit §), wenn keine Karte passt – z. B. „Steigen Sie aus“.
  function quickAnsHTML(q) {
    var ru = UI === "ru" && q.ru ? q.ru.say : "";
    return '<article class="ans top" data-id="' + esc(q.id) + '"><div class="w-head"><h3>„' + esc(L(q, "cop")) + '“</h3><span class="pill ' + VTONE[q.v] + '">' + esc(t("v_" + q.v)) + "</span></div>" +
      '<button class="say-b" type="button" data-de="' + esc(q.say) + '" data-ru="' + esc(ru) + '" data-law="' + esc(q.law) + '" data-why="' + esc(L(q, "why")) + '"><span class="say-de" lang="de" translate="no">' + esc(nb(q.say)) + "</span>" +
      (ru ? '<span class="say-ru" lang="ru">' + esc(nb(ru)) + "</span>" : "") + '<span class="say-tap">' + esc(t("tap")) + "</span></button>" +
      "<p>" + esc(nb(L(q, "why"))) + '</p><p class="law" lang="de" translate="no">' + esc(nb(q.law)) + "</p></article>";
  }
  function speakText(e) {
    var it = e.item;
    if (e.kind === "s") return L(it, "title") + ". " + t("speak_say") + ": " + it.say[0][UI === "ru" ? 1 : 0] + " " + L(it, "doo")[0];
    return L(it, "title") + ". " + L(it, "text");
  }
  function stopSpeaking() { try { if ("speechSynthesis" in window) speechSynthesis.cancel(); } catch (e) {} }
  // fromUser: nach dem Suchen Tastatur zu und zur Antwort scrollen – sonst liegt sie unter der Tastatur.
  function renderAnswers(q, fromUser) {
    var res = match(q), box = $("answers");
    stopSpeaking();
    var kq = !res.length && qById(kMatch(q, true));
    if (kq) box.innerHTML = quickAnsHTML(kq);
    else if (!res.length) {
      // Russisch gefragt oder russische Oberfläche: Hinweis auf Russisch
      box.innerHTML = '<p class="err">' + esc(UI === "ru" || /[а-яё]/i.test(q) ? T.ru.no_card : T.de.no_card) + "</p>";
    } else {
      box.innerHTML = res.map(function (r, i) {
        var it = r.e.item, sit = r.e.kind === "s";
        if (i === 0) return '<article class="ans top" data-id="' + esc(it.id) + '">' + (sit ? situationHTML(it, true) : cardHTML(it)) +
          '<div class="ans-row"><button class="btn" type="button" id="speak">' + esc(t("speak")) + "</button></div></article>";
        // Weitere Treffer nur als Zeile zum Aufklappen – sonst wird die Seite sechs Bildschirme lang.
        return (i === 1 ? '<p class="alt-t">' + esc(t("alt")) + "</p>" : "") +
          '<article class="ans alt" data-id="' + esc(it.id) + '"><details><summary><h3>' + esc(L(it, "title")) + '</h3><span class="pill ' + it.tone + '">' + esc(L(it, "toneLabel")) + "</span></summary>" +
          (sit ? situationHTML(it, true, true) : cardHTML(it, true)) + "</details></article>";
      }).join("");
      var sp = $("speak"), talking = false;
      sp.addEventListener("click", function () {
        if (!("speechSynthesis" in window)) { sp.textContent = t("speak_na"); return; }
        if (talking) { talking = false; stopSpeaking(); sp.textContent = t("speak"); return; }
        stopSpeaking();
        var u = new SpeechSynthesisUtterance(speakText(res[0].e)); u.lang = UI === "ru" ? "ru-RU" : "de-DE"; u.rate = 1;
        u.onend = u.onerror = function () { talking = false; sp.textContent = t("speak"); };
        talking = true; speechSynthesis.speak(u); sp.textContent = t("stop");
      });
    }
    if (fromUser) {
      $("ask-input").blur();
      var first = box.firstElementChild;
      if (first) { try { first.scrollIntoView({ block: "start", behavior: "smooth" }); } catch (e) { first.scrollIntoView(); } }
    }
  }

  /* ---------- Speech recognition ---------- */
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  var lang = lsGet(LS_LANG) || (UI === "ru" ? "ru-RU" : "de-DE");
  function syncSeg() {
    [].forEach.call(document.querySelectorAll(".seg-b[data-lang]"), function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false"); });
  }
  [].forEach.call(document.querySelectorAll(".seg-b[data-lang]"), function (b) {
    b.addEventListener("click", function () { lang = b.getAttribute("data-lang"); lsSet(LS_LANG, lang); syncSeg(); });
  });
  function srError(code, ctx) {
    var p = ctx === "proto" ? "_p" : "";
    if (code === "not-allowed") return permHelp("mic");
    if (code === "service-not-allowed") return IS_IOS ? t("sr_ios") : t("sr_blocked" + p);
    if (code === "network") return t("sr_net" + p);
    if (code === "no-speech") return t("sr_nospeech");
    if (code === "audio-capture") return t("sr_audio");
    if (code === "aborted") return "";
    return t("sr_other", code);
  }
  /* Das Mikrofon hört zu, bis erneut getippt wird oder 5 Sekunden Stille sind. Android beendet die Erkennung
     bei jeder Pause selbst – dann wird sie sofort neu gestartet und der Text weiter gesammelt. */
  var SILENCE_MS = 5000, activeListen = null;
  function mergeText(a, b) {
    a = (a || "").trim(); b = (b || "").trim();
    if (!b) return a;
    if (!a) return b;
    if (b.indexOf(a) === 0) return b; // Android liefert manchmal den ganzen Satz noch einmal
    if (a.slice(-b.length) === b) return a; // doppelt gelieferte Teile nicht zweimal anhängen
    return a + " " + b;
  }
  // endless: ohne 5-Sekunden-Grenze, bis stop() (nur Test-Mithörmodus)
  function listen(onText, onEnd, onErr, ctx, endless) {
    if (!SR) { onErr(t(ctx === "proto" ? "sr_none_p" : "sr_none")); return null; }
    var ctl = { stopped: false, done: false, text: "", err: "", lastSpeech: Date.now(), rec: null, timer: null };
    function finish() {
      if (ctl.done) return;
      ctl.done = true; clearInterval(ctl.timer); if (activeListen === ctl) activeListen = null;
      if (ctl.err) onErr(ctl.err);
      onEnd(ctl.text);
    }
    function startOne() {
      var r = new SR(), seg = "";
      r.lang = lang; r.interimResults = true; r.continuous = true; r.maxAlternatives = 1;
      r.onresult = function (ev) {
        var fin = "", interim = "";
        for (var i = 0; i < ev.results.length; i++) {
          var tr = ev.results[i][0].transcript;
          if (ev.results[i].isFinal) fin = mergeText(fin, tr); else interim += tr;
        }
        seg = fin; ctl.lastSpeech = Date.now();
        onText(mergeText(ctl.text, seg), interim.trim());
      };
      r.onspeechstart = function () { ctl.lastSpeech = Date.now(); };
      r.onerror = function (ev) {
        if (ev.error === "no-speech" || ev.error === "aborted") return; // Pause – das regelt die 5-Sekunden-Grenze
        ctl.stopped = true; ctl.err = srError(ev.error, ctx);
      };
      r.onend = function () {
        ctl.text = mergeText(ctl.text, seg); seg = "";
        if (!ctl.stopped && (endless || Date.now() - ctl.lastSpeech < SILENCE_MS)) {
          try { startOne(); return; } catch (e) {}
        }
        finish();
      };
      ctl.rec = r; r.start();
    }
    ctl.stop = function () {
      if (ctl.stopped) return;
      ctl.stopped = true;
      try { ctl.rec.stop(); } catch (e) { finish(); }
    };
    ctl.timer = setInterval(function () { if (!endless && Date.now() - ctl.lastSpeech >= SILENCE_MS) ctl.stop(); }, 250);
    try { startOne(); } catch (e) { clearInterval(ctl.timer); onErr(t("sr_start")); return null; }
    activeListen = ctl;
    return ctl;
  }
  function stopListening() { if (activeListen) activeListen.stop(); }

  /* Die Antwort kommt als Text, sobald 1 Sekunde lang kein neues Wort erkannt wurde – nicht erst nach den
     5 Sekunden Stille. Das Mikrofon hört danach weiter; sagt man noch etwas, wird die Antwort ersetzt. */
  var LIVE_MS = 1000;
  $("mic").addEventListener("click", function () {
    var mic = $("mic"), err = $("ask-err"), liveT = null, shown = "", heard = "";
    if (activeListen) { stopListening(); return; }
    err.hidden = true;
    function show(q, end) {
      if (!q || q === shown) return;
      if (!end && !match(q).length && !kMatch(q, true)) return; // halbe Frage ohne Treffer: noch keine „nichts gefunden“-Meldung
      $("ask-input").value = q; renderAnswers(q, !shown); shown = q;
    }
    var r = listen(function (fin, interim) {
        var q = (fin + " " + interim).trim();
        $("transcript").textContent = q;
        if (q === heard) return; // Android meldet denselben Satz manchmal noch einmal – das ist kein neues Wort
        heard = q; clearTimeout(liveT); liveT = setTimeout(function () { show(q); }, LIVE_MS);
      },
      function (fin) {
        clearTimeout(liveT);
        mic.setAttribute("aria-pressed", "false"); $("mic-label").textContent = t("mic_idle");
        show(fin || $("transcript").textContent, true);
      },
      function (msg) {
        err.textContent = msg; err.hidden = !msg; mic.setAttribute("aria-pressed", "false"); $("mic-label").textContent = t("mic_idle");
        if (msg) { try { err.scrollIntoView({ block: "center", behavior: "smooth" }); } catch (e) {} }
      });
    if (r) { mic.setAttribute("aria-pressed", "true"); $("mic-label").textContent = t("mic_on"); $("transcript").textContent = ""; }
  });
  $("ask-form").addEventListener("submit", function (e) {
    e.preventDefault(); var q = $("ask-input").value.trim();
    if (!q) { $("ask-err").textContent = t("ask_empty"); $("ask-err").hidden = false; return; }
    $("ask-err").hidden = true; $("transcript").textContent = q; renderAnswers(q, true);
  });
  $("ask-input").addEventListener("input", function () { $("ask-err").hidden = true; });

  /* ---------- Aufnahmen auf dem Gerät (IndexedDB) ----------
     Jede Sekunde landet ein Stück der Aufnahme in "chunks". Stürzt die App ab oder wird sie geschlossen,
     setzt loadRecs() die Stücke beim nächsten Start wieder zu einer Datei zusammen. */
  var dbP = null, storageOK = true;
  function db() {
    if (!dbP) {
      dbP = new Promise(function (res, rej) {
        if (!window.indexedDB) { rej(new Error("IndexedDB fehlt")); return; }
        var r = indexedDB.open("rb-aufnahmen", 1);
        r.onupgradeneeded = function () {
          var d = r.result;
          if (!d.objectStoreNames.contains("recs")) d.createObjectStore("recs", { keyPath: "id" });
          if (!d.objectStoreNames.contains("chunks")) d.createObjectStore("chunks", { keyPath: "k" });
        };
        r.onsuccess = function () { res(r.result); };
        r.onerror = function () { rej(r.error); };
      });
      dbP.catch(function () { dbP = null; });
    }
    return dbP;
  }
  function tx(stores, mode, fn) {
    return db().then(function (d) {
      return new Promise(function (res, rej) {
        var trx = d.transaction(stores, mode), out, req = fn(trx);
        if (req) req.onsuccess = function () { out = req.result; };
        trx.oncomplete = function () { res(out); };
        trx.onerror = function () { rej(trx.error); };
        trx.onabort = function () { rej(trx.error); };
      });
    });
  }
  function chunkRange(id) { return IDBKeyRange.bound([id, 0], [id, Infinity]); }
  function putRec(r) {
    var o = {}; Object.keys(r).forEach(function (k) { if (k !== "url") o[k] = r[k]; });
    return tx("recs", "readwrite", function (t) { t.objectStore("recs").put(o); });
  }
  function putChunk(id, seq, data) { return tx("chunks", "readwrite", function (t) { t.objectStore("chunks").put({ k: [id, seq], data: data }); }); }
  function getChunks(id) { return tx("chunks", "readonly", function (t) { return t.objectStore("chunks").getAll(chunkRange(id)); }); }
  function delChunks(id) { return tx("chunks", "readwrite", function (t) { t.objectStore("chunks").delete(chunkRange(id)); }); }
  function allRecs() { return tx("recs", "readonly", function (t) { return t.objectStore("recs").getAll(); }); }
  function delRec(id) { return tx(["recs", "chunks"], "readwrite", function (t) { t.objectStore("recs").delete(id); t.objectStore("chunks").delete(chunkRange(id)); }); }
  function storageFail() {
    if (!storageOK) return;
    storageOK = false;
    recError(t("rec_storage"));
  }
  function hashBlob(blob) {
    if (!window.crypto || !crypto.subtle || !blob.arrayBuffer) return Promise.reject(new Error("kein SHA-256"));
    return blob.arrayBuffer().then(function (buf) { return crypto.subtle.digest("SHA-256", buf); }).then(function (h) {
      return Array.prototype.map.call(new Uint8Array(h), function (b) { return b.toString(16).padStart(2, "0"); }).join("");
    });
  }

  /* ---------- Recording ---------- */
  var recState = null, recordings = [], pendingAct = null;
  function pickMime(withAudio) {
    var c = withAudio
      ? ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4", "video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm"]
      : ["video/mp4;codecs=avc1", "video/mp4", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"];
    // Bewusst avc1, nicht avc3: iPhone und Mac (AVFoundation) spielen avc3-MP4 nicht ab – getestet 25.09.2026.
    if (!window.MediaRecorder || !MediaRecorder.isTypeSupported) return "";
    for (var i = 0; i < c.length; i++) if (MediaRecorder.isTypeSupported(c[i])) return c[i];
    return "";
  }
  function baseType(m) { return String(m || "").split(";")[0] || "video/mp4"; }
  function fileName(r) {
    var s = r.started, ext = /webm/.test(r.type) ? "webm" : /quicktime/.test(r.type) ? "mov" : "mp4";
    return "kontrolle_" + isoDate(s) + "_" + pad(s.getHours()) + "-" + pad(s.getMinutes()) + "-" + pad(s.getSeconds()) +
      (r.withAudio ? "_mit-ton" : "_ohne-ton") + (r.status === "recovered" ? "_wiederhergestellt" : "") + "." + ext;
  }
  function recError(msg) { ["rec-err", "k-err"].forEach(function (id) { var e = $(id); e.textContent = msg || ""; e.hidden = !msg; }); }
  function setRecUI(stage) {
    $("rec-start").hidden = stage !== "start"; $("consent-step").hidden = stage !== "consent"; $("rec-live").hidden = stage !== "live";
  }
  function camError(e, withAudio) {
    var n = e && e.name;
    if (n === "NotAllowedError" || n === "SecurityError") return withAudio ? permHelp("cammic") + " " + t("rec_try_silent") : permHelp("cam");
    if (n === "NotFoundError" || n === "OverconstrainedError") return t("rec_nocam");
    if (n === "NotReadableError" || n === "AbortError") return t("rec_busy");
    return t("rec_camfail", n || "?");
  }
  function startRecording(withAudio, consentAt) {
    if (recState) return;
    recError(""); storageOK = true; // nach einem Speicherfehler bei jeder neuen Aufnahme wieder versuchen
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder) {
      recError(t("rec_nobrowser")); setRecUI("start"); return;
    }
    recState = { pending: true }; kSaved = false; syncKBar();
    navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: "environment" }, width: { ideal: 1280 }, height: { ideal: 720 } }, audio: !!withAudio })
      .then(function (stream) {
        // Ein Schlüsselbild pro Sekunde: Chrome schreibt MP4 sonst erst beim Stopp – bei einem Absturz wäre alles weg.
        var mime = pickMime(withAudio), opts = { videoBitsPerSecond: 2500000, videoKeyFrameIntervalDuration: 1000 }, rec, seq = 0, chunks = [];
        if (mime) opts.mimeType = mime;
        try { rec = new MediaRecorder(stream, opts); } catch (e) { rec = new MediaRecorder(stream); }
        var started = new Date();
        var r = { id: "r" + started.getTime(), started: started, ended: null, dur: 0, withAudio: !!withAudio, consentAt: consentAt || null,
          type: "", name: "", hash: "", size: 0, status: "recording" };
        rec.ondataavailable = function (ev) {
          if (!ev.data || !ev.data.size) return;
          chunks.push(ev.data); r.size += ev.data.size;
          if (storageOK) putChunk(r.id, seq++, ev.data).catch(storageFail);
        };
        rec.onstop = function () { finishRecording(r, chunks, stream); };
        try { rec.start(1000); } catch (e) { stream.getTracks().forEach(function (t) { t.stop(); }); throw e; }
        r.type = baseType(rec.mimeType || mime); r.name = fileName(r);
        recState = { rec: rec, r: r, timer: setInterval(tick, 500) };
        stream.getVideoTracks().forEach(function (tr) { tr.addEventListener("ended", function () { r.cut = true; stopRecording(); }); });
        [$("preview"), $("k-thumb")].forEach(function (v) { v.srcObject = stream; v.muted = true; var p = v.play(); if (p && p.catch) p.catch(function () {}); });
        if (storageOK) putRec(r).catch(storageFail);
        else recError(t("rec_nopersist"));
        if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(function () {});
        $("rec-mode").textContent = recModeText(r);
        tick(); setRecUI("live"); keepAwake(); updateRecFloat();
      })
      .catch(function (e) { recState = null; setRecUI("start"); recError(camError(e, withAudio)); syncKBar(); });
  }
  function recModeText(r) { return r.withAudio ? t("mode_audio", fmtTime(r.consentAt)) : t("mode_silent"); }
  function tick() {
    if (!recState || !recState.r) return;
    var s = Math.floor((Date.now() - recState.r.started.getTime()) / 1000), clock = pad(Math.floor(s / 60)) + ":" + pad(s % 60);
    $("rec-time").textContent = clock; $("rec-float-time").textContent = clock; $("big-rec-t").textContent = "REC " + clock; syncKBar(clock);
  }
  function updateRecFloat() {
    var on = !!(recState && recState.rec);
    $("rec-float").hidden = !on || currentView === "aufnahme" || currentView === "kontrolle";
    $("big-rec").hidden = !on; syncKBar();
    document.body.classList.toggle("rec-on", on);
  }
  function stopRecording() { if (recState && recState.rec && recState.rec.state !== "inactive") { try { recState.rec.stop(); } catch (e) {} } }
  function saveFinal(r) {
    if (!storageOK) return Promise.resolve();
    // Erst die fertige Datei speichern, dann die Einzelstücke löschen – so geht bei einem Absturz dazwischen nichts verloren.
    return putRec(r).then(function () { return delChunks(r.id); }).catch(storageFail);
  }
  function finishRecording(r, chunks, stream) {
    if (recState && recState.r === r) { clearInterval(recState.timer); recState = null; }
    stream.getTracks().forEach(function (t) { t.stop(); }); $("preview").srcObject = null; $("k-thumb").srcObject = null; kSaved = true;
    if (!needAwake()) releaseAwake();
    updateRecFloat(); setRecUI("start");
    if (r.cut) { recError(t("rec_cut", fmtTime(new Date()))); try { if (navigator.vibrate) navigator.vibrate([200, 100, 200]); } catch (e) {} }
    if (!chunks.length) { recError(t("rec_empty")); delRec(r.id).catch(function () {}); return; }
    var blob = new Blob(chunks, { type: r.type }), ended = new Date();
    r.ended = ended; r.dur = Math.max(1, Math.round((ended - r.started) / 1000)); r.size = blob.size; r.blob = blob; r.status = "done";
    r.fresh = true; recordings.forEach(function (x) { x.fresh = false; });
    recordings.unshift(r); renderRecs();
    var it = document.querySelector("#rec-list .rec-item [data-share]"); // der Knopf, den man jetzt braucht, mittig ins Bild
    if (it && currentView === "aufnahme") { try { it.scrollIntoView({ block: "center" }); } catch (e) { it.scrollIntoView(); } }
    hashBlob(blob).then(function (h) { r.hash = h; }, function () { r.noHash = true; })
      .then(function () { renderRecs(); return saveFinal(r); });
  }
  function recover(r) {
    return getChunks(r.id).then(function (rows) {
      if (!rows || !rows.length) return delRec(r.id);
      var blob = new Blob(rows.map(function (x) { return x.data; }), { type: r.type || "video/webm" });
      r.blob = blob; r.size = blob.size; r.status = "recovered"; r.approx = true;
      r.dur = rows.length; r.ended = new Date(r.started.getTime() + rows.length * 1000); r.name = fileName(r);
      recordings.push(r); recordings.sort(function (a, b) { return b.started - a.started; }); renderRecs();
      return hashBlob(blob).then(function (h) { r.hash = h; }, function () { r.noHash = true; })
        .then(function () { renderRecs(); return saveFinal(r); });
    }).catch(function () {});
  }
  function loadRecs() {
    allRecs().then(function (list) {
      list = (list || []).sort(function (a, b) { return b.started - a.started; });
      recordings = list.filter(function (x) { return x.status !== "recording"; });
      renderRecs();
      list.filter(function (x) { return x.status === "recording"; }).forEach(recover);
    }).catch(function () { storageOK = false; });
  }
  function recMeta(r) {
    return fmtDate(r.started) + " · " + fmtTime(r.started) + t("m_clock") + " · " + (r.approx ? t("m_ca") : "") + r.dur + t("m_sec") + " · " + mb(r.size) + " · " +
      (r.withAudio ? t("m_audio", fmtTime(r.consentAt)) : t("m_silent"));
  }
  function recLine(r) {
    return fmtDate(r.started) + " " + fmtTime(r.started) + " Uhr, " + (r.approx ? "ca. " : "") + r.dur + " s, " +
      (r.withAudio ? "mit Ton, Einwilligung um " + fmtTime(r.consentAt) : "ohne Ton") +
      (r.status === "recovered" ? ", unterbrochen und wiederhergestellt" : "") + (r.hash ? ", SHA-256 " + r.hash : "") + ", Datei " + r.name;
  }
  function renderRecs() {
    var box = $("rec-list");
    if (!recordings.length) { box.innerHTML = ""; return; }
    var total = 0; recordings.forEach(function (r) { total += r.size || 0; });
    box.innerHTML = "<h2>" + esc(t("recs_h")) + '</h2><p class="hint">' + esc(recCount(recordings.length)) + ", " + mb(total) + ". " + esc(t("recs_hint")) + "</p>" +
      recordings.map(function (r) {
        if (!r.url && r.blob) r.url = URL.createObjectURL(r.blob);
        return '<div class="rec-item" data-id="' + esc(r.id) + '">' +
          (r.status === "recovered" ? '<p class="rec-flag">' + esc(t("rec_recovered")) + "</p>" : "") +
          '<video src="' + r.url + '" controls playsinline preload="metadata"></video>' +
          '<p class="rec-meta">' + esc(recMeta(r)) + "</p>" +
          '<p class="hash">SHA-256: ' + (r.hash ? esc(r.hash) : esc(r.noHash ? t("hash_na") : t("hash_wait"))) + "</p>" +
          (r.fresh ? '<p class="rec-fresh">' + esc(t("rec_saved")) + "</p>" : "") +
          '<div class="actions"><button class="btn primary" type="button" data-share>' + esc(t("b_share")) + "</button>" +
          '<button class="btn" type="button" data-dl>' + esc(t("b_dl")) + "</button>" +
          '<button class="btn" type="button" data-proto>' + esc(t(inProto(r) ? "b_taken" : "b_proto")) + "</button>" +
          '<button class="btn ghost" type="button" data-del>' + esc(t("b_del")) + '</button></div><p class="field-msg rec-msg" aria-live="polite"></p></div>';
      }).join("");
  }
  function inProto(r) { return !!r.name && $("p-aufnahmen").value.indexOf(r.name) > -1; }
  function addToProto(r, b) {
    if (inProto(r)) { b.textContent = t("b_taken"); return; }
    // Erst wenn die Prüfsumme fertig ist – sonst fehlt sie im Protokoll.
    if (!r.hash && !r.noHash) { b.textContent = t("hash_wait"); setTimeout(function () { addToProto(r, b); }, 400); return; }
    var f = $("p-aufnahmen"); f.value = (f.value ? f.value + "\n" : "") + recLine(r); saveProto(); b.textContent = t("b_taken");
  }
  var SHARE_MAX = 50 * 1048576; // Chrome teilt größere Dateien nicht (Web Share)
  function recFallback(r, item) { downloadURL(r.url, r.name); item.querySelector(".rec-msg").textContent = t("rec_share_big"); }
  function recById(id) { for (var i = 0; i < recordings.length; i++) if (recordings[i].id === id) return recordings[i]; return null; }
  function downloadURL(url, name) { var a = document.createElement("a"); a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove(); }
  $("rec-list").addEventListener("click", function (e) {
    var b = e.target.closest("button"), item = e.target.closest(".rec-item");
    var r = b && item ? recById(item.getAttribute("data-id")) : null;
    if (!r) return;
    if (b.hasAttribute("data-share")) {
      r.fresh = false; var fr = item.querySelector(".rec-fresh"); if (fr) fr.remove();
      if ((r.size || 0) > SHARE_MAX) { recFallback(r, item); return; }
      var file = new File([r.blob], r.name, { type: r.type });
      if (navigator.canShare && navigator.canShare({ files: [file] })) navigator.share({ files: [file], title: r.name, text: r.hash ? "SHA-256: " + r.hash : r.name }).catch(function (e) { if (!e || e.name !== "AbortError") recFallback(r, item); });
      else downloadURL(r.url, r.name);
    } else if (b.hasAttribute("data-dl")) {
      downloadURL(r.url, r.name);
    } else if (b.hasAttribute("data-proto")) {
      addToProto(r, b);
    } else if (b.hasAttribute("data-del")) {
      if (!b._armed || Date.now() - b._armed < 700) { // Doppeltipp darf nicht löschen
        if (b._armed) return;
        b._armed = Date.now(); b.textContent = t("b_del_sure"); b.classList.add("armed");
        setTimeout(function () { b._armed = false; b.textContent = t("b_del"); b.classList.remove("armed"); }, 4000);
        return;
      }
      delRec(r.id).catch(function () {});
      if (r.url) URL.revokeObjectURL(r.url);
      recordings = recordings.filter(function (x) { return x !== r; }); renderRecs();
    }
  });
  $("rec-silent").addEventListener("click", function () { startRecording(false, null); });
  $("rec-consent").addEventListener("click", function () { setRecUI("consent"); });
  $("consent-yes").addEventListener("click", function () { startRecording(true, new Date()); });
  $("consent-no").addEventListener("click", function () { startRecording(false, null); });
  $("consent-cancel").addEventListener("click", function () { setRecUI("start"); });
  $("rec-stop").addEventListener("click", stopRecording);
  $("consent-de").textContent = D.consent.de; $("consent-ru").textContent = D.consent.ru;
  if (IS_INAPP) recError(t("perm_inapp")); // gleich sagen, nicht erst nach dem ersten Fehlversuch
  window.addEventListener("hashchange", function () {
    if (location.hash === "#aufnahme" && pendingAct === "consent" && !recState) setRecUI("consent");
    if (location.hash === "#aufnahme" && pendingAct === "film" && !recState) startRecording(false, null);
    if (location.hash === "#aufnahme" && pendingAct === "qh") setTimeout(function () { $("qh").scrollIntoView({ block: "start" }); }, 0);
    if (location.hash === "#kontrolle" && pendingAct === "kontrolle-filme") { kRole = "filme"; lsSet(LS_KROLE, kRole); hideK(); renderKontrolle(); }
    if (location.hash === "#kontrolle" && (pendingAct === "kontrolle" || pendingAct === "kontrolle-filme") && !recState) startRecording(false, null);
    pendingAct = null;
  });
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") { if (needAwake()) keepAwake(); return; }
    // App geht in den Hintergrund: den Rest sofort speichern, bevor das Handy die Kamera stoppt.
    if (recState && recState.rec && recState.rec.state === "recording") { try { recState.rec.requestData(); } catch (e) {} }
  });
  window.addEventListener("beforeunload", function (e) { if (recState && recState.rec) { e.preventDefault(); e.returnValue = ""; } });

  /* ---------- Schnellhilfe: Polizei sagt → Antwort mit Paragraf ----------
     Steht auf der Aufnahme-Seite unter dem Stopp-Knopf. Inhalte in data.js (quick), jede Aussage mit Paragraf und Quelle. */
  var SIT_QH = { verkehr: "fahrer", papiere: "fahrer", test: "fahrer", auto: "fahrer", handysteuer: "fahrer", escooter: "fahrer", unfall: "fahrer",
    personalien: "person", durchsuchung: "person", filmen: "aufnahme", handy: "aufnahme", festnahme: "druck", freund: "person" };
  var qhCat = "top", VTONE = { musst: "must", musst_nicht: "right", darf_nicht: "no", kommt_drauf_an: "warn" };
  function renderQuick() {
    var Q = D.quick || [];
    $("qh").hidden = !Q.length;
    if (!Q.length) return;
    var cats = [["top", t("qh_top")]].concat((D.quickGroups || []).map(function (g) { return [g[0], UI === "ru" && g[2] ? g[2] : g[1]]; }));
    $("qh-cats").innerHTML = cats.map(function (c) { return '<button type="button" class="chip" data-qc="' + c[0] + '" aria-pressed="' + (qhCat === c[0]) + '">' + esc(c[1]) + "</button>"; }).join("");
    var list = qhCat === "top" ? (D.quickTop || []).map(function (id) { return Q.filter(function (q) { return q.id === id; })[0]; }).filter(Boolean)
      : Q.filter(function (q) { return q.g === qhCat; });
    $("qh-list").innerHTML = list.map(function (q) {
      return '<button type="button" class="qh-i" data-q="' + esc(q.id) + '"><span class="qh-cop">„' + esc(L(q, "cop")) + '“</span>' +
        '<span class="pill ' + VTONE[q.v] + '">' + esc(t("v_" + q.v)) + '</span><span class="qh-say" lang="de" translate="no">' + esc(nb(q.say)) + "</span>" +
        (UI === "ru" && q.ru ? '<span class="say-ru" lang="ru">' + esc(nb(q.ru.say)) + "</span>" : "") + '<span class="law" lang="de" translate="no">' + esc(nb(q.law)) + "</span></button>";
    }).join("");
  }
  $("qh-cats").addEventListener("click", function (e) { var b = e.target.closest("[data-qc]"); if (!b) return; qhCat = b.getAttribute("data-qc"); renderQuick(); });
  $("qh-list").addEventListener("click", function (e) {
    var b = e.target.closest("[data-q]"); if (!b) return;
    var q = (D.quick || []).filter(function (x) { return x.id === b.getAttribute("data-q"); })[0]; if (!q) return;
    openBig(q.say, UI === "ru" && q.ru ? q.ru.say : "", b, q.law, L(q, "why"));
  });

  /* ---------- Kontrolle-Modus ----------
     Ein Bildschirm für die ganze Kontrolle: oben die Aufnahme, darunter je Rolle 10 Knöpfe in der Reihenfolge einer
     typischen Kontrolle. Ein Tipp zeigt einen kurzen Satz groß, das Ja/Nein und den Paragrafen – ohne Scrollen, die Aufnahme bleibt sichtbar.
     Inhalte: kontrolle.js (Kurzfassung, Stichwörter) → quick.js (volle, geprüfte Antwort). */
  var K = D.kontrolle || null, LS_KROLE = "rb-k-rolle-v1", LS_KTEST = "rb-test-mithoeren", kRole = lsGet(LS_KROLE) || "fahrer", kCur = null, kSaved = false;
  if (K && !K.buttons[kRole]) kRole = "fahrer";
  function qById(id) { var Q = D.quick || []; for (var i = 0; i < Q.length; i++) if (Q[i].id === id) return Q[i]; return null; }
  function syncKBar(clock) {
    if (!$("k-bar")) return;
    var on = !!(recState && recState.rec), wait = !!(recState && recState.pending);
    if (on && !clock) { var sec = Math.floor((Date.now() - recState.r.started.getTime()) / 1000); clock = pad(Math.floor(sec / 60)) + ":" + pad(sec % 60); }
    $("k-dot").hidden = !on; $("k-thumb").hidden = !on;
    $("k-bar").classList.toggle("on", on);
    var b = $("k-rec");
    if (!(on && kStopArmed)) { b.textContent = on ? t("k_stop") : t("k_rec"); b.className = "btn k-recbtn " + (on ? "stop" : "primary"); }
    b.disabled = wait;
    if (on) $("k-status").textContent = (recState.r.withAudio ? t("k_rec_audio") : t("k_rec_silent")) + " · " + clock;
    else if (wait) $("k-status").textContent = t("k_rec_wait");
    else $("k-status").innerHTML = kSaved ? esc(t("k_saved")) + ' <button type="button" class="k-save" id="k-save">' + esc(t("k_sichern")) + "</button>" : esc(t("k_norec"));
  }
  function roleSeg() {
    return K.roles.map(function (r) {
      return '<button type="button" class="seg-b" data-kr="' + r[0] + '" aria-pressed="' + (kRole === r[0]) + '">' + esc(UI === "ru" ? r[2] : r[1]) + "</button>";
    }).join("");
  }
  function renderKontrolle() {
    if (!K) { $("k-start").hidden = true; $("k-start-filme").hidden = true; return; }
    $("k-role").innerHTML = roleSeg(); $("einr-role").innerHTML = roleSeg();
    // Russische Oberfläche: darunter klein das deutsche Stichwort – das hört man vom Beamten.
    $("k-grid").innerHTML = (K.buttons[kRole] || []).map(function (b) {
      var q = qById(b[0]); if (!q) return "";
      return '<button type="button" class="k-b" data-k="' + b[0] + '" aria-pressed="' + (kCur === b[0]) + '"><span class="k-b-t">' + esc(UI === "ru" ? b[2] : b[1]) + "</span>" +
        (UI === "ru" ? '<span class="k-b-de" lang="de" translate="no">' + esc(b[1]) + "</span>" : "") +
        '<span class="k-b-v ' + VTONE[q.v] + '">' + esc(t("v_" + q.v)) + "</span></button>";
    }).join("");
    var h = K.hinweis && K.hinweis[kRole];
    $("k-hint").hidden = !h;
    if (h) $("k-hint").innerHTML = esc(UI === "ru" ? h.ru : h.de) + ' <a href="tel:' + esc(h.tel) + '">' + esc(h.telText) + "</a>";
    $("k-test").hidden = lsGet(LS_KTEST) !== "1";
    $("k-listen").textContent = kListen ? t("k_listen_on") : t("k_listen");
    syncKBar();
    if (kCur) showK(kCur, true);
  }
  // Antwort oben, die Knöpfe bleiben darunter: die nächste Frage ist wieder nur ein Tipp.
  function showK(id, noPush) {
    var q = qById(id), k = (K && K.kurz[id]) || {}; if (!q) return;
    var ru = UI === "ru", dann = ru ? k.dann_ru : k.dann;
    kCur = id;
    $("k-cop").textContent = "„" + q.cop + "“";
    $("k-cop-ru").textContent = ru && q.ru && q.ru.cop ? "„" + q.ru.cop + "“" : ""; $("k-cop-ru").hidden = !ru;
    $("k-v").className = "pill " + VTONE[q.v]; $("k-v").textContent = t("v_" + q.v);
    $("k-say").textContent = nb(k.de || q.say);
    $("k-say-ru").textContent = ru ? nb(k.ru || (q.ru && q.ru.say) || "") : ""; $("k-say-ru").hidden = !ru;
    $("k-law").textContent = nb(k.law || q.law);
    $("k-dann").textContent = dann || ""; $("k-dann").hidden = !dann;
    $("k-full").textContent = nb(q.say); $("k-full-ru").textContent = ru && q.ru ? nb(q.ru.say) : ""; $("k-full-ru").hidden = !ru;
    $("k-why").textContent = nb(L(q, "why")); $("k-lawfull").textContent = nb(q.law);
    if (!noPush) { $("k-more").hidden = true; $("k-more-b").setAttribute("aria-expanded", "false"); }
    $("k-ans").hidden = false; $("v-kontrolle").classList.add("ans-on");
    [].forEach.call(document.querySelectorAll("#k-grid .k-b"), function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-k") === id ? "true" : "false"); });
    // Eigener Verlaufseintrag: Die Zurück-Taste schließt die Antwort, nicht die Kontrolle.
    // Ist schon eine Antwort offen, ersetzt die neue sie – Zurück führt immer mit einem Schritt zu den Knöpfen.
    if (!noPush) { try { if (history.state && history.state.rbK) history.replaceState({ rbK: 1, d: depth }, ""); else history.pushState({ rbK: 1, d: depth }, ""); } catch (e) {} window.scrollTo(0, 0); }
  }
  function hideK() {
    kCur = null; $("k-ans").hidden = true; $("v-kontrolle").classList.remove("ans-on");
    [].forEach.call(document.querySelectorAll("#k-grid .k-b"), function (b) { b.setAttribute("aria-pressed", "false"); });
  }
  window.addEventListener("popstate", function () { if (!(history.state && history.state.rbK) && !$("k-ans").hidden) hideK(); });
  $("k-close").addEventListener("click", function () { if (history.state && history.state.rbK) history.back(); else hideK(); });
  $("k-more-b").addEventListener("click", function () {
    var open = $("k-more").hidden; $("k-more").hidden = !open; $("k-more-b").setAttribute("aria-expanded", open ? "true" : "false");
  });
  // Zeigen: nur der deutsche Satz und der Paragraf für den Beamten; bei russischer Oberfläche mit „Ich spreche wenig Deutsch“.
  $("k-big").addEventListener("click", function () {
    var q = qById(kCur), k = (K && K.kurz[kCur]) || {}; if (!q) return;
    openBig(k.de || q.say, "", $("k-big"), k.law || q.law, "", { intro: UI !== "de" });
  });
  $("k-grid").addEventListener("click", function (e) { var b = e.target.closest("[data-k]"); if (b) showK(b.getAttribute("data-k")); });
  [$("k-role"), $("einr-role")].forEach(function (el) {
    el.addEventListener("click", function (e) {
      var b = e.target.closest("[data-kr]"); if (!b) return;
      kRole = b.getAttribute("data-kr"); lsSet(LS_KROLE, kRole); hideK(); renderKontrolle();
    });
  });
  $("k-status").addEventListener("click", function (e) {
    if (!e.target.closest("#k-save")) return;
    var b = document.querySelector("#rec-list .rec-item [data-share]");
    if (b) b.click(); else location.hash = "#aufnahme";
  });
  // Stopp nur mit Bestätigung: ein versehentlicher Tipp soll die Aufnahme nicht beenden.
  var kStopArmed = 0, kStopT = null;
  $("k-rec").addEventListener("click", function () {
    var b = $("k-rec");
    clearTimeout(kStopT); // alter Zeitgeber darf eine neue Bestätigung nicht zurücksetzen
    if (recState && recState.rec) {
      if (!kStopArmed) { kStopArmed = Date.now(); b.textContent = t("k_stop_sure"); b.classList.add("armed"); kStopT = setTimeout(function () { kStopArmed = 0; syncKBar(); }, 3000); return; }
      kStopArmed = 0; stopRecording();
    } else if (!recState) startRecording(false, null);
  });

  /* Stichwort-Abgleich: Wortanfänge zählen, ein Leerzeichen am Stichwort-Ende verlangt das ganze Wort.
     Punkte = Länge der gefundenen Stichwörter; es gewinnt der Knopf mit den meisten, ab 3 („моч“). */
  function kScore(n, stems) {
    var sc = 0;
    stems.forEach(function (st) { var w = norm(st); if (w && n.indexOf(" " + w + (/ $/.test(st) ? " " : "")) > -1) sc += w.length; });
    return sc;
  }
  function kMatch(text, all) {
    if (!K) return null;
    var n = " " + norm(text) + " ", best = null, bs = 2, seen = {};
    (all ? K.roles.map(function (r) { return r[0]; }) : [kRole]).forEach(function (role) {
      (K.buttons[role] || []).concat((K.extra && K.extra[role]) || []).forEach(function (b) {
        var id = b[0], stems = b[3] || b[1];
        if (seen[id]) return; seen[id] = 1;
        var sc = kScore(n, stems); if (sc > bs) { bs = sc; best = id; }
      });
    });
    return best;
  }
  // Mikrofon für die eigene Stimme: ein Stichwort („pusten“, „Kofferraum“) → Antwort. Nicht bei Aufnahme mit Ton (Mikrofon belegt).
  var kPTT = null, kListen = null;
  function micBusy() { return !!(recState && recState.r && recState.r.withAudio); }
  $("k-ptt").addEventListener("click", function () {
    var b = $("k-ptt"), heard = $("k-heard"), shown = false;
    if (kPTT) { kPTT.stop(); return; }
    if (micBusy()) { heard.textContent = t("k_mic_busy"); return; }
    if (kListen) kListen.stop();
    function reset() { kPTT = null; b.setAttribute("aria-pressed", "false"); $("k-ptt-l").textContent = t("k_ptt"); }
    kPTT = listen(function (fin, interim) {
        heard.textContent = (fin + " " + interim).trim();
        var id = !interim && fin && kMatch(fin);
        if (id && !shown) { shown = true; showK(id); if (kPTT) kPTT.stop(); }
      },
      function (fin) {
        reset();
        if (shown) { heard.textContent = ""; return; }
        var id = fin && kMatch(fin);
        if (id) { heard.textContent = ""; showK(id); } else if (fin) heard.textContent = t("k_nomatch", fin);
      },
      function (msg) { reset(); heard.textContent = msg; }, "k");
    if (kPTT) { b.setAttribute("aria-pressed", "true"); $("k-ptt-l").textContent = t("k_ptt_on"); heard.textContent = ""; }
  });

  /* Test-Mithörmodus (nur für Proben mit Freunden): hört dauerhaft zu, ordnet jeden Satz einem Knopf der gewählten Rolle zu
     und öffnet die Antwort von selbst. Einschalten per Link mit ?mithoeren=1. Das Log bleibt nur im Speicher. */
  var kLog = [];
  (function () { var m = /[?&]mithoeren=([01])/.exec(location.search); if (m) { if (m[1] === "1") lsSet(LS_KTEST, "1"); else try { localStorage.removeItem(LS_KTEST); } catch (e) {} } })();
  function kLabel(id) { var r = null; if (K) Object.keys(K.buttons).forEach(function (k) { K.buttons[k].forEach(function (b) { if (b[0] === id) r = UI === "ru" ? b[2] : b[1]; }); }); return r || id; }
  function renderKLog() {
    $("k-log").innerHTML = kLog.slice(0, 20).map(function (x) {
      return "<li><span class=\"k-log-t\">" + fmtTime(x.t) + "</span> „" + esc(x.text) + "“ → <b>" + esc(x.id ? kLabel(x.id) : t("k_log_none")) + "</b></li>";
    }).join("");
  }
  function kListenUI() {
    var on = !!kListen;
    $("k-listen").textContent = on ? t("k_listen_on") : t("k_listen"); $("k-listen").setAttribute("aria-pressed", on ? "true" : "false");
    $("k-live").hidden = !on; if (!on) $("k-live-t").textContent = "";
  }
  function kListenStop() { if (kListen) kListen.stop(); }
  $("k-listen").addEventListener("click", function () {
    if (kListen) { kListenStop(); return; }
    if (micBusy()) { $("k-listen-msg").textContent = t("k_mic_busy"); return; }
    if (kPTT) kPTT.stop();
    var done = "", qt = null;
    $("k-listen-msg").textContent = "";
    kListen = listen(function (fin, interim) {
        var neu = fin.indexOf(done) === 0 ? fin.slice(done.length).trim() : fin;
        $("k-live-t").textContent = t("k_live") + " „" + (neu + " " + interim).trim() + "“";
        clearTimeout(qt);
        if (!interim && neu) qt = setTimeout(function () {
          var id = kMatch(neu); done = fin;
          kLog.unshift({ t: new Date(), text: neu, id: id, role: kRole }); renderKLog();
          if (id && id !== kCur) showK(id);
        }, 300);
      },
      function () { clearTimeout(qt); kListen = null; kListenUI(); },
      function (msg) { $("k-listen-msg").textContent = msg; }, "k", true);
    kListenUI();
  });
  $("k-live-stop").addEventListener("click", kListenStop);
  $("k-log-share").addEventListener("click", function () {
    var lines = kLog.slice().reverse().map(function (x) { return fmtTime(x.t) + " [" + x.role + "] " + x.text + " -> " + (x.id || "-"); });
    shareText("Mithör-Test", lines.join("\n") || "-", $("k-listen-msg"));
  });
  $("k-test-off").addEventListener("click", function () { kListenStop(); try { localStorage.removeItem(LS_KTEST); } catch (e) {} $("k-test").hidden = true; });

  /* ---------- Einrichten (30 Sekunden, einmal in Ruhe) ----------
     Kamera-Erlaubnis vorher holen: Sonst erscheint die Browser-Frage erst, wenn der Polizist am Fenster steht. */
  var LS_SETUP = "rb-einrichten-v1";
  function renderEinrichten() {
    $("einr-role").innerHTML = K ? roleSeg() : "";
    $("einr-test").checked = lsGet(LS_KTEST) === "1";
    $("einr-inst").innerHTML = $("install-help").innerHTML;
    try {
      if (navigator.permissions && navigator.permissions.query) navigator.permissions.query({ name: "camera" }).then(function (st) {
        if (st.state === "granted") { $("einr-cam-msg").textContent = t("einr_cam_ok"); $("einr-cam-msg").className = "einr-msg ok"; }
      }).catch(function () {});
    } catch (e) {}
  }
  $("einr-cam").addEventListener("click", function () {
    var m = $("einr-cam-msg");
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { m.textContent = t("rec_nobrowser"); return; }
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(function (st) {
      st.getTracks().forEach(function (tr) { tr.stop(); });
      m.textContent = t("einr_cam_ok"); m.className = "einr-msg ok";
    }).catch(function () { m.textContent = permHelp("cammic"); m.className = "einr-msg err"; });
  });
  $("einr-test").addEventListener("change", function () {
    if ($("einr-test").checked) lsSet(LS_KTEST, "1"); else try { localStorage.removeItem(LS_KTEST); } catch (e) {}
    renderKontrolle();
  });
  $("einr-done").addEventListener("click", function () { lsSet(LS_SETUP, isoDate(new Date())); renderFuerDich(); location.hash = "#jetzt"; });
  $("einr-back").addEventListener("click", goBack);

  /* ---------- Protocol ---------- */
  var fields = ["datum", "zeit", "ort", "beamte", "ablauf", "zitate", "zeugen", "aufnahmen", "schaden", "name"];
  function protoData() { var o = {}; fields.forEach(function (f) { o[f] = $("p-" + f).value; }); return o; }
  function saveProto() {
    var o = protoData(); o.zeitOk = protoZeitOk; lsSet(LS_PROTO, JSON.stringify(o)); renderDeadlines(); renderLetters(); syncProtoHints(o);
  }
  // Datum/Uhrzeit werden beim ersten Öffnen mit „jetzt“ vorbelegt – der Hinweis bleibt, bis man sie selbst bestätigt oder ändert.
  var protoZeitOk = false, protoFilledAt = 0;
  function syncProtoHints(o) {
    var d = $("p-datum").value;
    $("p-when-msg").textContent = d && d > isoDate(new Date()) ? t("d_future") : protoZeitOk ? "" : t("when_check");
    $("p-backup").hidden = !(o && o.ablauf && o.ablauf.trim()) || lsGet(LS_PROTO_SAVED) === "1";
  }
  ["p-datum", "p-zeit"].forEach(function (id) { $(id).addEventListener("change", function () { protoZeitOk = true; saveProto(); }); });
  function loadProto() {
    var raw = lsGet(LS_PROTO), o = null;
    try { o = raw ? JSON.parse(raw) : null; } catch (e) { o = null; }
    var now = new Date();
    fields.forEach(function (f) { $("p-" + f).value = o && o[f] ? o[f] : ""; });
    protoZeitOk = !!(o && o.zeitOk);
    if (!$("p-datum").value) { $("p-datum").value = isoDate(now); protoZeitOk = false; protoFilledAt = Date.now(); }
    if (!$("p-zeit").value) $("p-zeit").value = fmtTime(now);
    $("p-datum").max = isoDate(now);
    syncProtoHints(o);
  }
  // Noch nichts geschrieben und die Vorbelegung ist Stunden alt (App lief im Hintergrund): neu auf „jetzt“ setzen.
  function refreshProtoNow() {
    var o = protoData(), empty = !["ort", "beamte", "ablauf", "zitate", "zeugen", "schaden"].some(function (f) { return o[f]; });
    if (empty && !protoZeitOk && protoFilledAt && Date.now() - protoFilledAt > 3 * 3600 * 1000) {
      var now = new Date(); $("p-datum").value = isoDate(now); $("p-zeit").value = fmtTime(now); $("p-datum").max = isoDate(now); protoFilledAt = Date.now();
      renderDeadlines(); renderLetters();
    }
  }
  var saveT;
  $("proto").addEventListener("input", function () { clearTimeout(saveT); saveT = setTimeout(saveProto, 300); });
  function protoDateObj() { var v = $("p-datum").value; if (!v) return null; var p = v.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function protoDateText() { var d = protoDateObj(); return d ? fmtDate(d) : "[Datum]"; }
  function protoText() {
    var o = protoData();
    return "GEDÄCHTNISPROTOKOLL\nErstellt am: " + fmtDate(new Date()) + ", " + fmtTime(new Date()) + " Uhr\n\n" +
      "Vorfall am: " + protoDateText() + (o.zeit ? ", " + o.zeit + " Uhr" : "") + "\n" +
      "Ort: " + (o.ort || "-") + "\n\nBeteiligte Beamte und Fahrzeuge:\n" + (o.beamte || "-") +
      "\n\nAblauf:\n" + (o.ablauf || "-") + "\n\nWörtliche Aussagen:\n" + (o.zitate || "-") +
      "\n\nZeugen:\n" + (o.zeugen || "-") + "\n\nAufnahmen:\n" + (o.aufnahmen || "-") +
      "\n\nVerletzungen und Schäden:\n" + (o.schaden || "-") + (o.name ? "\n\nVerfasst von: " + o.name : "") + "\n";
  }
  function copyText(text, msgEl) {
    try {
      navigator.clipboard.writeText(text).then(function () { flash(msgEl, t("copied")); }, function () { flash(msgEl, t("copy_fail")); });
    } catch (e) { flash(msgEl, t("copy_fail")); }
  }
  function shareText(title, text, msgEl) {
    if (navigator.share) navigator.share({ title: title, text: text }).catch(function () {}); else copyText(text, msgEl);
  }
  $("p-copy").addEventListener("click", function () { copyText(protoText(), $("p-msg")); });
  $("p-share").addEventListener("click", function () { shareText("Gedächtnisprotokoll", protoText(), $("p-msg")); protoSaved(); });
  function protoSaved() { lsSet(LS_PROTO_SAVED, "1"); $("p-backup").hidden = true; }
  $("p-file").addEventListener("click", function () {
    var blob = new Blob([protoText()], { type: "text/plain;charset=utf-8" });
    downloadURL(URL.createObjectURL(blob), "gedaechtnisprotokoll_" + ($("p-datum").value || isoDate(new Date())) + ".txt");
    protoSaved();
  });
  var clearArmed = 0, undoT;
  $("p-clear").addEventListener("click", function () {
    var b = $("p-clear");
    if (!clearArmed) { clearArmed = Date.now(); b.textContent = t("p_clear_sure"); setTimeout(function () { clearArmed = 0; b.textContent = t("p_clear"); }, 4000); return; }
    if (Date.now() - clearArmed < 700) return; // Doppeltipp löscht nicht
    clearArmed = 0; b.textContent = t("p_clear");
    lsSet(LS_PROTO_PREV, lsGet(LS_PROTO) || JSON.stringify(protoData()));
    var keepName = $("p-name").value; lsSet(LS_PROTO, ""); loadProto(); $("p-name").value = keepName; saveProto(); flash($("p-msg"), t("p_new"), 15000);
    $("p-undo").hidden = false; clearTimeout(undoT); undoT = setTimeout(function () { $("p-undo").hidden = true; }, 15000);
  });
  $("p-undo").addEventListener("click", function () {
    var prev = lsGet(LS_PROTO_PREV); if (!prev) return;
    lsSet(LS_PROTO, prev); loadProto(); renderDeadlines(); renderLetters(); $("p-undo").hidden = true; flash($("p-msg"), t("p_restored"));
  });
  // Meldungen direkt unter dem Feld, dessen Knopf getippt wurde – nicht irgendwo unten auf der Seite.
  function fieldMsg(btn, text) { var m = btn.closest(".field").querySelector(".field-msg"); if (m) m.textContent = text || ""; }
  $("p-gps").addEventListener("click", function () {
    var b = $("p-gps");
    if (b.disabled) return;
    fieldMsg(b, "");
    if (!navigator.geolocation) { fieldMsg(b, t("geo_na")); return; }
    b.textContent = t("gps_wait"); b.disabled = true;
    navigator.geolocation.getCurrentPosition(function (pos) {
      var la = pos.coords.latitude.toFixed(5), lo = pos.coords.longitude.toFixed(5), f = $("p-ort");
      f.value = (f.value ? f.value + "\n" : "") + "Standort " + la + ", " + lo + " (±" + Math.round(pos.coords.accuracy) + " m) https://www.openstreetmap.org/?mlat=" + la + "&mlon=" + lo + "#map=18/" + la + "/" + lo;
      b.textContent = t("gps"); b.disabled = false; saveProto();
    }, function (err) {
      b.textContent = t("gps"); b.disabled = false;
      fieldMsg(b, err && err.code === 1 ? permHelp("geo") : t("geo_fail"));
    }, { enableHighAccuracy: true, timeout: 12000 });
  });
  [].forEach.call(document.querySelectorAll(".dict"), function (b) {
    b.addEventListener("click", function () {
      if (activeListen) { // läuft schon: dasselbe Feld = Stopp, anderes Feld = dorthin wechseln
        var same = activeListen._btn === b; stopListening();
        if (same) return;
        setTimeout(function () { b.click(); }, 200); return;
      }
      var f = $(b.getAttribute("data-for")), base = f.value, stopped = false;
      fieldMsg(b, "");
      // Wer während des Diktats selbst tippt, beendet es – getippter Text geht vor.
      function typed() { stopped = true; if (r) r.stop(); }
      var r = listen(function (fin, interim) {
          if (stopped) return;
          f.value = (base ? base + " " : "") + (fin + " " + interim).trim();
          clearTimeout(saveT); saveT = setTimeout(saveProto, 800);
        },
        function (fin) { f.removeEventListener("input", typed); b.setAttribute("aria-pressed", "false"); b.textContent = t("dict"); if (fin && !stopped) f.value = (base ? base + " " : "") + fin.trim(); saveProto(); },
        function (msg) { f.removeEventListener("input", typed); b.setAttribute("aria-pressed", "false"); b.textContent = t("dict"); if (msg) fieldMsg(b, msg); }, "proto");
      if (r) { r._btn = b; f.addEventListener("input", typed); b.setAttribute("aria-pressed", "true"); b.textContent = t("stop"); }
    });
  });

  /* ---------- Deadlines & letters ---------- */
  function addDays(d, n) { var x = new Date(d); x.setDate(x.getDate() + n); return x; }
  function addMonths(d, n) { var x = new Date(d); var day = x.getDate(); x.setDate(1); x.setMonth(x.getMonth() + n); var last = new Date(x.getFullYear(), x.getMonth() + 1, 0).getDate(); x.setDate(Math.min(day, last)); return x; }
  function daysLeft(d) { var today = new Date(); today.setHours(0, 0, 0, 0); var x = new Date(d); x.setHours(0, 0, 0, 0); return Math.round((x - today) / 86400000); }
  function renderDeadlines() {
    var d = protoDateObj() || new Date(), bc = addDays(d, 28), bb = addMonths(d, 3), nbc = daysLeft(bc), nbb = daysLeft(bb);
    var items = [ // [Titel, Text, Tage bis Fristende oder null]
      [t("dl_proto"), t("dl_proto_d", fmtDate(d)), null],
      [t("dl_bc"), nbc < 0 ? t("dl_bc_over") : t("dl_bc_d", fmtDate(bc)) + " (" + leftText(nbc) + ")", nbc],
      [t("dl_bb"), t("dl_bb_d", fmtDate(bb) + " (" + leftText(nbb) + ")"), nbb],
      [t("dl_anwalt"), t("dl_anwalt_d"), null]
    ];
    $("deadlines").innerHTML = items.map(function (x) {
      var cls = x[2] == null ? "" : x[2] < 0 ? " dl-over" : x[2] <= 7 ? " dl-soon" : "";
      return '<li class="dl' + cls + '"><span class="dl-t">' + esc(x[0]) + '</span><span class="dl-d">' + esc(x[1]) + "</span></li>";
    }).join("");
  }
  function fillLetter(body) {
    var o = protoData();
    // Ort: die erste eigene Zeile; eine GPS-Zeile nur als „in der Nähe der GPS-Position …“, ohne Kartenlink.
    var lines = (o.ort || "").split("\n").filter(function (x) { return x.trim(); });
    var ort = lines.filter(function (x) { return x.indexOf("Standort ") !== 0; })[0];
    if (!ort && lines[0]) { var gm = lines[0].match(/Standort ([\d.]+, [\d.]+)/); ort = gm ? "der Nähe der GPS-Position " + gm[1] : lines[0]; }
    var map = { datum: protoDateText(), zeit: o.zeit || "[Uhrzeit]", ort: ort || "[Ort]",
      beamte: o.beamte ? o.beamte.replace(/\n/g, "; ") : "Beamte und Kennzeichen unbekannt", ablauf: o.ablauf || "[kurze Schilderung]", name: o.name || "[Name, Anschrift]" };
    return body.replace(/\{(\w+)\}/g, function (m, k) { return map[k] != null ? map[k] : m; });
  }
  function renderLetters() {
    var letters = D.letters, o = protoData(), miss = [], cyr = /[\u0400-\u04ff]/;
    if (!o.ort) miss.push(t("f_ort")); if (!o.name) miss.push(t("f_name"));
    var warn = (miss.length ? '<p class="field-msg">' + esc(t("l_missing", miss.join(", "))) + "</p>" : "") +
      (cyr.test(o.ort + o.beamte + o.name + o.ablauf) ? '<p class="field-msg">' + esc(t("l_cyr")) + "</p>" : "");
    $("letters").innerHTML = Object.keys(letters).map(function (k) {
      var l = letters[k], text = fillLetter(l.body), isMail = l.to.indexOf("@") > -1;
      var mail = isMail ? "mailto:" + l.to + "?subject=" + encodeURIComponent(l.title) + "&body=" + encodeURIComponent(text) : "";
      return '<div class="letter"><h3>' + esc(L(l, "title")) + '</h3><p class="hint">' + esc(L(l, "hint")) + "</p>" + warn + "<p>" + esc(t("l_to")) + ' <span class="to">' + esc(l.to) + "</span>" +
        (l.post ? '<br><span class="hint">' + esc(l.post) + "</span>" : "") + "</p>" +
        '<pre lang="de" translate="no">' + esc(text) + '</pre><div class="actions"><button class="btn primary" type="button" data-copy="' + k + '">' + esc(t("l_copy")) + "</button>" +
        (isMail ? '<a class="btn" href="' + mail + '">' + esc(t("l_mail")) + "</a>" : "") +
        '<button class="btn" type="button" data-sharel="' + k + '">' + esc(t("share")) + '</button></div><p class="hint" data-msg="' + k + '" aria-live="polite"></p></div>';
    }).join("");
  }
  $("letters").addEventListener("click", function (e) {
    var c = e.target.closest("[data-copy]"), s = e.target.closest("[data-sharel]");
    var k = c ? c.getAttribute("data-copy") : s ? s.getAttribute("data-sharel") : null;
    if (!k) return;
    var text = fillLetter(D.letters[k].body), msg = document.querySelector('[data-msg="' + k + '"]');
    if (c) copyText(text, msg); else shareText(D.letters[k].title, text, msg);
  });

  /* ---------- Wissen ---------- */
  var wCat = "";
  function renderCats() {
    var used = {};
    D.cards.forEach(function (c) { used[c.cat] = (used[c.cat] || 0) + 1; });
    $("w-cats").innerHTML = '<button type="button" class="chip" data-cat="" aria-pressed="' + (wCat === "") + '">' + esc(t("w_all")) + "</button>" +
      D.cats.filter(function (c) { return used[c[0]]; }).map(function (c) {
        return '<button type="button" class="chip" data-cat="' + c[0] + '" aria-pressed="' + (wCat === c[0]) + '">' + esc(UI === "ru" && c[2] ? c[2] : c[1]) + "</button>";
      }).join("");
  }
  // Mit Suchtext: dieselbe Suche wie unter „Fragen“ (Situationen zuerst, dann Karten nach Punkten).
  // Findet sie nichts, zählen Wortanfänge im ganzen Kartentext.
  function renderWissen(q) {
    var nq = norm(q || ""), sits = [], list;
    if (nq) {
      var hits = score(q);
      sits = hits.filter(function (r) { return r.e.kind === "s"; }).slice(0, 3).map(function (r) { return r.e.item; });
      list = hits.filter(function (r) { return r.e.kind === "c"; }).map(function (r) { return r.e.item; });
      if (!list.length && !sits.length) {
        var words = nq.split(" ").map(function (w) { return w.length > 6 ? w.slice(0, w.length - 2) : w; });
        list = D.cards.filter(function (c) {
          var hay = norm(c.title + " " + c.text + " " + c.kw.join(" ") + (c.ru ? " " + c.ru.title + " " + c.ru.text : "")).split(" ");
          return words.every(function (w) { return hay.some(function (x) { return x.indexOf(w) === 0; }); });
        });
      }
    } else list = D.cards.filter(function (c) { return !wCat || c.cat === wCat; });
    $("w-list").innerHTML = (sits.length ? '<div class="w-sits"><p class="block-t">' + esc(t("w_sits")) + "</p>" + sits.map(function (s) {
      return '<a class="btn" href="#s/' + s.id + '">' + esc(L(s, "title")) + "</a>"; }).join("") + "</div>" : "") +
      list.map(function (c) { return '<article class="w-card" data-id="' + esc(c.id) + '">' + cardHTML(c) + "</article>"; }).join("");
    $("w-empty").hidden = list.length > 0 || sits.length > 0;
  }
  $("w-q").addEventListener("input", function () {
    // Wer tippt, sucht in allen Themen – sonst findet „Messer“ unter „Verkehr“ nichts.
    if ($("w-q").value.trim() && wCat) { wCat = ""; renderCats(); }
    renderWissen($("w-q").value);
  });
  $("w-cats").addEventListener("click", function (e) {
    var b = e.target.closest(".chip"); if (!b) return;
    wCat = b.getAttribute("data-cat"); $("w-q").value = ""; renderCats(); renderWissen("");
  });

  /* ---------- Installieren ---------- */
  var installEv = null;
  function isStandalone() { return (window.matchMedia && matchMedia("(display-mode: standalone)").matches) || navigator.standalone === true; }
  function syncInstall() {
    [].forEach.call(document.querySelectorAll("[data-install]"), function (b) { b.hidden = !installEv || isStandalone(); });
    var k = isStandalone() ? "i_done" : /SamsungBrowser/.test(UA) ? "i_samsung" : /CriOS/.test(UA) ? "i_crios" : /Firefox|FxiOS/.test(UA) ? "i_firefox" : IS_IOS ? "i_ios" : IS_ANDROID ? "i_android" : "i_other";
    $("install-help").innerHTML = t(k);
  }
  window.addEventListener("beforeinstallprompt", function (e) { e.preventDefault(); installEv = e; syncInstall(); });
  window.addEventListener("appinstalled", function () { installEv = null; syncInstall(); });
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-install]");
    if (!b || !installEv) return;
    var ev = installEv; installEv = null; syncInstall();
    try { var p = ev.prompt(); if (p && p.catch) p.catch(function () {}); } catch (x) {}
  });

  /* ---------- Profil (freiwillig, nur auf dem Gerät) ----------
     Aus wenigen Angaben entstehen Hinweise nach festen Regeln – dieselben Aussagen wie in den Karten, nur mit deinen Daten.
     Nichts verlässt das Handy; „Profil löschen“ entfernt alles. */
  var LS_PROF = "rb-profil-v1", LS_PROF_HIDE = "rb-profil-hinweis-v1", prof = {};
  var UA24_END = new Date(2027, 2, 4); // Schutz nach § 24 derzeit bis 04.03.2027 – wie in der Karte k-ukrainefs
  var pf = { by: "pf-by", nat: "pf-nat", status: "pf-status", fs: "pf-fs", fsdatum: "pf-fsdatum", seit: "pf-seit" };
  // Datum als drei eigene Listen (Tag · Monat · Jahr): Der Kalender des Handys blättert nur Monat für Monat zurück –
  // für einen Führerschein von vor 20 Jahren wären das 240 Tipper. .value liefert wie bisher JJJJ-MM-TT oder "".
  function yearOpts(from, to) { var h = ""; for (var i = from; i >= to; i--) h += '<option value="' + i + '">' + i + "</option>"; return h; }
  function dateSelect(el) {
    var y0 = new Date().getFullYear(), id = el.id, h = "", i;
    h += '<select id="' + id + '-d" data-t-aria="d_tag"><option value="" data-t="d_tag"></option>';
    for (i = 1; i <= 31; i++) h += '<option value="' + i + '">' + i + "</option>";
    h += '</select><select id="' + id + '-m" data-t-aria="d_mon"><option value="" data-t="d_mon"></option>';
    for (i = 1; i <= 12; i++) h += '<option value="' + i + '" data-t="mon_' + i + '"></option>';
    h += '</select><select id="' + id + '-y" data-t-aria="d_jahr"><option value="" data-t="d_jahr"></option>' + yearOpts(y0, y0 - (+el.getAttribute("data-back") || 60)) + "</select>";
    el.innerHTML = h;
    var sd = $(id + "-d"), sm = $(id + "-m"), sy = $(id + "-y");
    el.check = function () { // "" = gültig oder leer, sonst der Grund
      var miss = [];
      if (!sd.value) miss.push(t("d_tag")); if (!sm.value) miss.push(t("d_mon")); if (!sy.value) miss.push(t("d_jahr"));
      if (miss.length === 3) return "";
      if (miss.length) return t("d_missing", UI === "ru" ? miss.join(", ").toLowerCase() : miss.join(", "));
      var x = new Date(+sy.value, +sm.value - 1, +sd.value);
      if (x.getMonth() !== +sm.value - 1) return t("d_invalid");
      if (daysLeft(x) > 0) return t("d_future");
      return "";
    };
    Object.defineProperty(el, "value", {
      get: function () { return sd.value && sm.value && sy.value && !el.check() ? sy.value + "-" + pad(sm.value) + "-" + pad(sd.value) : ""; },
      set: function (v) {
        var p = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(v || ""));
        if (p && !sy.querySelector('option[value="' + p[1] + '"]')) sy.insertAdjacentHTML("beforeend", '<option value="' + p[1] + '">' + p[1] + "</option>");
        sy.value = p ? p[1] : ""; sm.value = p ? String(+p[2]) : ""; sd.value = p ? String(+p[3]) : "";
      }
    });
  }
  function dateMsgs() { [].forEach.call(document.querySelectorAll(".dsel"), function (el) { el.parentNode.querySelector(".dsel-msg").textContent = el.check(); }); }
  [].forEach.call(document.querySelectorAll(".dsel"), dateSelect);
  (function () { var y0 = new Date().getFullYear(); $("pf-by").innerHTML = '<option value="" data-t="pf_none"></option>' + yearOpts(y0 - 12, y0 - 95); })();
  function loadProfile() { try { prof = JSON.parse(lsGet(LS_PROF) || "{}") || {}; } catch (e) { prof = {}; } }
  function hasProfile() { return Object.keys(prof).length > 0; }
  function parseDay(v) { var p = String(v || "").split("-"); if (p.length !== 3) return null; var d = new Date(+p[0], +p[1] - 1, +p[2]); return isNaN(d.getTime()) ? null : d; }
  function daysText(n) {
    if (UI !== "ru") return n === 1 ? t("days_1") : t("days_n").replace("{n}", n);
    var m10 = n % 10, m100 = n % 100;
    return n + (m10 === 1 && m100 !== 11 ? " день" : m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14) ? " дня" : " дней");
  }
  // Jeder Hinweis: Stufe (red/amber/info), Text und die Situationen, in denen er oben erscheint.
  // home: auch auf der Startseite zeigen (nur Rotes und bald ablaufende Fristen – nicht die dauerhafte 0,0-Regel).
  function profileNotes() {
    var p = prof, out = [], y = new Date().getFullYear(), fs = p.fs || "", ua24 = fs === "ua" && p.status === "p24";
    var drive = ["papiere", "verkehr", "unfall", "handysteuer", "test"];
    // Ukrainischer Führerschein ohne Angabe zum Aufenthalt: erst nach § 24 fragen, statt fälschlich „abgelaufen“ zu melden.
    var uaAsk = fs === "ua" && !p.status && p.nat !== "de" && p.nat !== "eu";
    if (uaAsk) out.push({ lv: "info", tx: t("n_ua_ask"), sits: ["papiere", "verkehr"] });
    else if (fs === "dritt" || (fs === "ua" && !ua24)) { // 6 Monate ab Wohnsitz (§ 29 FeV)
      var seit = parseDay(p.seit), extra = fs === "ua" ? t("n_ua_extra") : "";
      if (!seit) out.push({ lv: "info", tx: t("n_fs_ask"), sits: ["papiere", "verkehr"] });
      else {
        // Vorsichtig gerechnet: Der Tag „6 Monate später“ gilt schon als erster Tag ohne Gültigkeit – lieber einen Tag zu früh warnen.
        var end = addMonths(seit, 6), n = daysLeft(end);
        var last = addDays(end, -1), nl = n - 1;
        if (nl < 0) out.push({ lv: "red", home: 1, tx: t("n_fs_over").replace("{d}", fmtDate(end)) + extra, sits: drive });
        else if (nl === 0) out.push({ lv: "red", home: 1, tx: t("n_fs_today").replace("{d}", fmtDate(last)) + extra, sits: drive });
        else if (nl <= 60) out.push({ lv: "amber", home: 1, tx: t("n_fs_soon").replace("{n}", daysText(nl)).replace("{d}", fmtDate(last)) + extra, sits: drive });
        else out.push({ lv: "info", tx: t("n_fs_ok").replace("{d}", fmtDate(last)) + extra, sits: drive });
      }
    }
    if (ua24) {
      var nu = daysLeft(UA24_END);
      if (nu < 0) out.push({ lv: "red", home: 1, tx: t("n_ua24_over"), sits: drive });
      else out.push({ lv: nu <= 90 ? "amber" : "info", home: nu <= 90 ? 1 : 0, tx: t("n_ua24").replace("{n}", leftText(nu)), sits: drive });
    }
    // 0,0 Promille (§ 24c StVG): unter 21 UND in der Probezeit – beides kann gleichzeitig gelten und unterschiedlich lange dauern.
    var by = parseInt(p.by, 10), g = [];
    if (by > 1900 && by <= y) { if (y - by < 21) g.push(t("n_null_u21")); else if (y - by === 21) g.push(t("n_null_b21")); }
    if (fs === "de" || fs === "eu") {
      var fd = parseDay(p.fsdatum), pz = fd ? addMonths(fd, 24) : null;
      if (pz && daysLeft(pz) >= 0) g.push(t("n_null_pz").replace("{d}", fmtDate(pz)));
    }
    if (g.length) out.push({ lv: "amber", tx: t("n_null").replace("{g}", g.join(t("n_and"))), sits: ["test", "verkehr", "escooter", "unfall"] });
    var passK = p.nat === "eu" ? "n_pass_eu" : p.nat === "andere" ? (p.status === "asyl" ? "n_pass_asyl" : "n_pass") : "";
    if (passK) out.push({ lv: "info", tx: t(passK), sits: ["personalien", "verkehr", "zoll"] });
    if (p.bau) out.push({ lv: "info", tx: t("n_bau"), sits: ["zoll", "personalien"] });
    var rank = { red: 0, amber: 1, info: 2 };
    return out.sort(function (a, b) { return rank[a.lv] - rank[b.lv]; });
  }
  function noteHTML(n) { return '<p class="fd fd-' + n.lv + '">' + esc(n.tx) + "</p>"; }
  function renderFuerDich() {
    // Startseite nur Dringendes (rot/gelb) – die Kacheln sollen im Stress oben bleiben. Alles andere steht in der passenden Situation.
    // Höchstens ein Hinweis, damit die Kacheln auf kleinen Handys sichtbar bleiben.
    var box = $("fuer-dich"), notes = profileNotes(), urgent = notes.filter(function (n) { return n.home; });
    if (urgent.length) box.innerHTML = fdBox(urgent.slice(0, 1));
    else if (!lsGet(LS_SETUP)) box.innerHTML = '<a class="einr-card" href="#einrichten">' + esc(t("einr_card")) + "</a>";
    else if (hasProfile()) box.innerHTML = '<p class="fd-line"><a class="fd-edit" href="#profil">' + esc(t("prof_open")) + "</a></p>";
    else if (lsGet(LS_PROF_HIDE) !== "aus") {
      box.innerHTML = '<div class="fd-invite"><a href="#profil">' + esc(t("fd_invite")) + "</a>" +
        '<button class="fd-x" type="button" id="fd-hide" aria-label="' + esc(t("fd_hide")) + '">×</button></div>';
    } else box.innerHTML = "";
    $("prof-notes").innerHTML = notes.length ? notes.map(noteHTML).join("") : '<p class="hint">' + esc(t("fd_empty")) + "</p>";
  }
  $("fuer-dich").addEventListener("click", function (e) { if (e.target.id === "fd-hide") { lsSet(LS_PROF_HIDE, "aus"); renderFuerDich(); } });
  function syncProfileFields() {
    var nat = $("pf-nat").value, fs = $("pf-fs").value, ua24 = nat === "andere" && $("pf-status").value === "p24";
    $("pf-status-f").hidden = !(nat === "andere" || (fs === "ua" && nat !== "de" && nat !== "eu"));
    $("pf-fsdatum-f").hidden = !(fs === "de" || fs === "eu");
    $("pf-seit-f").hidden = !(fs === "dritt" || (fs === "ua" && !ua24));
  }
  function fillProfileForm() {
    Object.keys(pf).forEach(function (k) { $(pf[k]).value = prof[k] || ""; });
    $("pf-bau").checked = !!prof.bau; syncProfileFields(); dateMsgs();
  }
  function saveProfile() {
    syncProfileFields(); dateMsgs();
    var o = {};
    Object.keys(pf).forEach(function (k) {
      var el = $(pf[k]), v = String(el.value || "").trim(); if (el.closest(".field").hidden) return;
      if (v) o[k] = v;
      else if (el.check && el.check() && prof[k]) o[k] = prof[k]; // halb geändertes Datum: bis es fertig ist, gilt das alte
    });
    if ($("pf-bau").checked) o.bau = true;
    prof = o;
    if (hasProfile()) lsSet(LS_PROF, JSON.stringify(o)); else { try { localStorage.removeItem(LS_PROF); } catch (e) {} }
    renderFuerDich(); flash($("prof-msg"), t("prof_saved"), 2500);
  }
  var profT;
  $("prof").addEventListener("input", function () { clearTimeout(profT); profT = setTimeout(saveProfile, 250); });
  $("prof").addEventListener("change", function () { clearTimeout(profT); saveProfile(); });
  $("prof").addEventListener("submit", function (e) { e.preventDefault(); });
  var profDelArmed = false;
  $("prof-del").addEventListener("click", function () {
    var b = $("prof-del");
    if (!profDelArmed) { profDelArmed = true; b.textContent = t("prof_del_sure"); setTimeout(function () { profDelArmed = false; b.textContent = t("prof_del"); }, 4000); return; }
    profDelArmed = false; b.textContent = t("prof_del");
    prof = {}; try { localStorage.removeItem(LS_PROF); localStorage.removeItem(LS_PROF_HIDE); } catch (e) {}
    fillProfileForm(); renderFuerDich(); flash($("prof-msg"), t("prof_deleted"));
  });
  $("prof-back").addEventListener("click", goBack);

  /* ---------- Sprache umschalten ---------- */
  var linksHTML = null;
  function applyUI() {
    document.documentElement.lang = UI;
    [].forEach.call(document.querySelectorAll("[data-t]"), function (el) { el.textContent = t(el.getAttribute("data-t")); });
    [].forEach.call(document.querySelectorAll("[data-t-ph]"), function (el) { el.placeholder = t(el.getAttribute("data-t-ph")); });
    [].forEach.call(document.querySelectorAll("[data-t-aria]"), function (el) { el.setAttribute("aria-label", t(el.getAttribute("data-t-aria"))); });
    var disc = document.querySelector('[data-t-html="disclaimer"]'); // Quellen-Links bleiben, nur der Text davor wechselt
    if (disc) { if (linksHTML === null) linksHTML = disc.innerHTML.slice(disc.innerHTML.indexOf("<a ")); disc.innerHTML = t("disclaimer").replace("{links}", linksHTML); }
    [].forEach.call(document.querySelectorAll('[data-t-html="rec_note"]'), function (el) { el.innerHTML = t("rec_note"); });
    [].forEach.call(document.querySelectorAll(".lang-b"), function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-ui") === UI ? "true" : "false"); });
    $("mic-label").textContent = activeListen ? t("mic_on") : t("mic_idle");
    [].forEach.call(document.querySelectorAll(".dict"), function (b) { b.textContent = b.getAttribute("aria-pressed") === "true" ? t("stop") : t("dict"); });
    if (recState && recState.r) $("rec-mode").textContent = recModeText(recState.r);
    dateMsgs();
  }
  function setUI(u) {
    if (u === UI || !T[u]) return;
    UI = u; lsSet(LS_UI, u);
    if (!lsGet(LS_LANG)) { lang = u === "ru" ? "ru-RU" : "de-DE"; syncSeg(); } // Spracheingabe folgt, solange nicht selbst gewählt
    applyUI(); renderGrid(); renderFuerDich(); renderCats(); renderWissen($("w-q").value); renderDeadlines(); renderLetters(); syncProtoHints(protoData()); syncInstall(); renderRecs(); renderQuick(); renderKontrolle(); renderKLog();
    if (currentView === "situation") route();
    if ($("answers").innerHTML && $("ask-input").value.trim()) renderAnswers($("ask-input").value.trim());
  }
  [].forEach.call(document.querySelectorAll(".lang-b"), function (b) { b.addEventListener("click", function () { setUI(b.getAttribute("data-ui")); }); });

  /* ---------- Start ---------- */
  // Homescreen-Shortcut „Kontrolle“ (./?start=1#kontrolle): Video ohne Ton sofort starten; ?start aus der Adresse nehmen, damit Neuladen nicht erneut startet.
  var kAuto = /[?&]start=1/.test(location.search);
  if (kAuto) { try { history.replaceState(history.state, "", location.pathname + "#kontrolle"); } catch (e) {} }
  applyUI(); loadProfile(); fillProfileForm(); renderFuerDich(); buildCorpus(); renderGrid(); syncSeg(); loadProto(); renderDeadlines(); renderLetters(); renderCats(); renderWissen(""); renderQuick(); renderKontrolle(); syncInstall(); route(); loadRecs();
  if (kAuto && !recState) startRecording(false, null);
  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
    var hadController = !!navigator.serviceWorker.controller;
    // Neue Version direkt nach dem Öffnen: einmal neu laden, damit geänderte Inhalte sofort gelten.
    // Aber nie, wenn schon getippt wurde oder ein Satz groß gezeigt wird – dann gilt die neue Version beim nächsten Öffnen.
    var userActed = false;
    ["pointerdown", "keydown"].forEach(function (ev) { document.addEventListener(ev, function () { userActed = true; }, { capture: true, once: true }); });
    navigator.serviceWorker.addEventListener("controllerchange", function () {
      if (hadController && !recState && !userActed && $("big").hidden && currentView !== "kontrolle" && performance.now() < 15000) location.reload();
    });
    window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); });
  }
})();
