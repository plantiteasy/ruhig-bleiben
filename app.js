(function () {
  "use strict";
  var D = window.RB;
  var $ = function (id) { return document.getElementById(id); };
  var LS_PROTO = "rb-protokoll-v1", LS_LANG = "rb-lang-v1";
  var UA = navigator.userAgent || "";
  var IS_ANDROID = /Android/i.test(UA);
  var IS_IOS = /iPhone|iPad|iPod/i.test(UA) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function pad(n) { return String(n).padStart(2, "0"); }
  function fmtDate(d) { return pad(d.getDate()) + "." + pad(d.getMonth() + 1) + "." + d.getFullYear(); }
  function fmtTime(d) { return pad(d.getHours()) + ":" + pad(d.getMinutes()); }
  function isoDate(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
  function flash(el, text, ms) { el.textContent = text; clearTimeout(el._t); el._t = setTimeout(function () { el.textContent = ""; }, ms || 3500); }
  function mb(n) { var m = (n || 0) / 1048576; return (m < 10 ? m.toFixed(1).replace(".", ",") : String(Math.round(m))) + " MB"; }
  /* ---------- Sprache der Oberfläche (DE/RU) ----------
     Inhalte stehen in data.js deutsch, die russische Fassung jeweils in „ru“. Sätze zum Sagen bleiben immer deutsch
     (groß), darunter russisch – gezeigt wird ja der Polizei. Paragrafen und Briefe an Behörden bleiben deutsch. */
  var LS_UI = "rb-ui-v1";
  var UI = lsGet(LS_UI) || (/^ru/i.test(navigator.language || "") ? "ru" : "de");
  var T = {
    de: {
      meta: "Prototyp · Baden-Württemberg · Stand 25.09.2026 · keine Rechtsberatung", install: "Installieren", install_app: "App installieren",
      tab_jetzt: "Jetzt", tab_fragen: "Fragen", tab_aufnahme: "Aufnahme", tab_danach: "Danach", tab_wissen: "Wissen", tabs_aria: "Bereiche",
      jetzt_h: "Was passiert gerade?", jetzt_lead: "Tippe auf deine Situation. Du bekommst sofort, was du sagen und was du lassen solltest.",
      q_ask: "Frage stellen", q_proto: "Protokoll", back: "Zurück", close: "Schließen",
      b_say: "Sag", b_do: "Tu", b_dont: "Lass", tap: "Groß anzeigen",
      act_film: "Video ohne Ton", act_consent: "Mit Einwilligung aufnehmen", act_proto: "Protokoll danach",
      fragen_h: "Frage stellen",
      fragen_lead: "Tippe auf das Mikrofon und frag kurz, zum Beispiel „Darf ich filmen?“ oder «Можно ли снимать?». Das Mikrofon hört zu, bis du noch einmal tippst oder 5 Sekunden nichts sagst. Verarbeitet wird nur deine Frage.",
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
      w_mic: "Mikrofon", s_mic: "Mikrofon", w_cam: "Kamera", s_cam: "Kamera", w_cammic: "Kamera oder Mikrofon", s_cammic: "Kamera und Mikrofon", w_geo: "Standort", s_geo: "Standort",
      rec_h: "Aufnahme", rec_lead: "Video ohne Ton ist erlaubt, solange du nicht störst. Ton nur mit Einwilligung aller, die sprechen.",
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
      recs_h: "Auf diesem Gerät", recs_one: "Aufnahme", recs_many: "Aufnahmen", recs_hint: "„Sichern“ schickt die Datei an dich selbst (Telegram, WhatsApp, Mail) oder in Google Drive.",
      rec_recovered: "Wiederhergestellt – die Aufnahme wurde unterbrochen", hash_wait: "wird berechnet …", hash_na: "nicht berechnet (Datei zu groß)",
      b_share: "Sichern", b_dl: "Laden", b_proto: "Ins Protokoll", b_del: "Löschen", b_del_sure: "Wirklich löschen?", b_taken: "Übernommen",
      m_clock: " Uhr", m_ca: "ca. ", m_sec: " s", m_audio: "mit Ton, Einwilligung {x}", m_silent: "ohne Ton",
      danach_h: "Danach", danach_lead: "Noch am selben Tag: Gedächtnisprotokoll. Diktieren geht mit dem Mikrofon neben jedem Feld.",
      seg_dict_aria: "Sprache fürs Diktieren", dict_de: "Diktat Deutsch", dict_ru: "Диктовка по-русски", dict: "Diktieren", gps: "Standort einfügen", gps_wait: "Suche …",
      f_datum: "Datum", f_zeit: "Uhrzeit", f_ort: "Ort", f_beamte: "Beamte und Fahrzeuge", f_ablauf: "Was ist passiert?", f_zitate: "Wörtliche Aussagen", f_zeugen: "Zeugen",
      f_aufnahmen: "Aufnahmen", f_schaden: "Verletzungen und Schäden", f_name: "Dein Name und Anschrift (für Briefe)",
      ph_ort: "Straße, Haltestelle, Richtung", ph_beamte: "Namen, Dienststelle, Kennzeichen, Aussehen", ph_ablauf: "Der Reihe nach, mit Uhrzeiten, so genau wie möglich",
      ph_zitate: "Wer hat was genau gesagt?", ph_zeugen: "Name und Kontakt, nur mit Einverständnis", ph_aufnahmen: "Wird aus „Aufnahme“ übernommen: Uhrzeit, Dauer, Prüfsumme",
      ph_schaden: "Was, wo, Arztbesuch, Fotos", ph_name: "Vorname Nachname, Straße, PLZ Ort",
      p_copy: "Protokoll kopieren", share: "Teilen", p_file: "Als Datei", p_clear: "Neues Protokoll", p_clear_sure: "Wirklich leeren?", p_new: "Neues Protokoll angelegt",
      copied: "Kopiert", copy_fail: "Kopieren ging nicht – bitte „Teilen“ nutzen", geo_na: "Standort ist hier nicht verfügbar", geo_fail: "Standort nicht gefunden. Draußen noch einmal versuchen.",
      fristen_h: "Fristen", briefe_h: "Briefe",
      dl_proto: "Gedächtnisprotokoll", dl_proto_d: "am selben Tag – {x}", dl_bc: "Bodycam-Sicherung beantragen", dl_bc_d: "sofort; gelöscht wird spätestens am {x}",
      dl_bb: "Bürgerbeauftragte BW", dl_bb_d: "bis {x}, nicht parallel zu einem Straf- oder Gerichtsverfahren", dl_anwalt: "Anwalt", dl_anwalt_d: "vor jeder Beschwerde oder Anzeige sprechen",
      left_over: "abgelaufen", left_today: "heute", left_1: "noch 1 Tag", left_n: "noch {x} Tage",
      l_to: "An:", l_copy: "Kopieren", l_mail: "In Mail öffnen",
      wissen_h: "Wissen", w_label: "Wissen durchsuchen", w_ph: "Suchen: Ausweis, filmen, Messer …", w_cats: "Themen", w_all: "Alle",
      w_empty: "Nichts gefunden. Versuch: filmen, Ausweis, Test, Handy, Beschwerde.",
      data_note: "Deine Daten bleiben auf dem Gerät: Protokoll und Aufnahmen gehen an keinen Server.",
      disclaimer: "Allgemeine Information, keine Rechtsberatung. Geprüft anhand von Gesetzen und Gerichtsentscheidungen, noch nicht von einem Anwalt. Quellen: {links}",
      i_done: "<strong>Installiert.</strong> Situationen und Wissen funktionieren auch ohne Internet.",
      i_ios: "<strong>Auf den Home-Bildschirm:</strong> In Safari „Teilen“ und dann „Zum Home-Bildschirm“. Danach funktionieren Situationen und Wissen auch ohne Internet.",
      i_android: "<strong>Als App installieren:</strong> In Chrome oben rechts ⋮ und dann „App installieren“ oder „Zum Startbildschirm hinzufügen“. Danach funktionieren Situationen und Wissen auch ohne Internet.",
      i_other: "<strong>Als App aufs Handy:</strong> Android – in Chrome ⋮ und „App installieren“. iPhone – in Safari „Teilen“ und „Zum Home-Bildschirm“.",
      prof_h: "Mein Profil", prof_open: "Mein Profil", prof_lead: "Freiwillig. Mit ein paar Angaben passen die Hinweise besser zu dir – zum Beispiel, wie lange dein Führerschein hier noch gilt.",
      pf_by: "Geburtsjahr", pf_by_ph: "z. B. 1990", pf_none: "Keine Angabe", pf_nat: "Staatsangehörigkeit", pf_nat_de: "Deutsch", pf_nat_eu: "EU-Staat", pf_nat_andere: "Anderes Land",
      pf_status: "Aufenthalt", pf_st_p24: "Schutz nach § 24 (Ukraine)", pf_st_titel: "Aufenthaltstitel", pf_st_asyl: "Asyl oder Duldung", pf_st_visum: "Visum oder anderes",
      pf_fs: "Führerschein aus", pf_fs_de: "Deutschland", pf_fs_eu: "EU-Staat", pf_fs_ua: "Ukraine", pf_fs_dritt: "Anderes Land, z. B. Russland oder Kasachstan", pf_fs_kein: "Kein Führerschein",
      pf_fsdatum: "Führerschein erhalten am", pf_seit: "In Deutschland gemeldet seit", pf_seit_hint: "Ab diesem Tag läuft die 6-Monats-Frist für deinen Führerschein.", pf_bau: "Ich arbeite auf Baustellen",
      prof_privacy: "Bleibt nur auf diesem Handy, nichts wird gesendet. Die Hinweise folgen festen Regeln aus den Karten – keine Rechtsberatung.",
      prof_del: "Profil löschen", prof_del_sure: "Wirklich löschen?", prof_deleted: "Profil gelöscht", prof_saved: "Gespeichert – nur auf diesem Handy",
      fd_h: "Für dich", fd_empty: "Noch keine Hinweise. Fülle oben aus, was du möchtest.", fd_edit: "Profil ändern",
      fd_invite: "Genauer für dich: ein kurzes Profil – freiwillig, bleibt auf dem Handy.", fd_invite_go: "Ausfüllen", fd_hide: "Ausblenden",
      n_fs_over: "Dein ausländischer Führerschein gilt in Deutschland seit dem {d} nicht mehr. Nicht mehr fahren – sonst ermittelt die Polizei wegen Fahrens ohne Fahrerlaubnis. Umschreiben lassen.",
      n_fs_soon: "Dein ausländischer Führerschein gilt hier nur noch {n} – bis zum {d}. Jetzt bei der Führerscheinstelle umschreiben lassen.",
      n_fs_ok: "Dein ausländischer Führerschein gilt hier bis zum {d} – 6 Monate ab deiner Anmeldung. Umschreibung rechtzeitig beantragen.",
      n_fs_ask: "Trag im Profil ein, seit wann du in Deutschland gemeldet bist – dann siehst du, wie lange dein Führerschein hier noch gilt.",
      n_ua_extra: " Ukrainische Führerscheine lassen sich seit 18.08.2026 ohne Prüfung umschreiben.",
      n_ua24: "Dein ukrainischer Führerschein gilt mit § 24 ohne Übersetzung, derzeit bis zum 04.03.2027 ({n}). Aufenthaltstitel und EU-Verordnung 2022/1280 ausgedruckt dabeihaben. Seit 18.08.2026 ohne Prüfung umschreibbar.",
      n_null: "Für dich gilt am Steuer 0,0 Promille und kein Cannabis – {g}. Das gilt auch auf dem E-Scooter.",
      n_null_u21: "unter 21", n_null_b21: "bis zu deinem 21. Geburtstag", n_null_pz: "Probezeit, voraussichtlich bis zum {d}",
      n_pass_eu: "Als EU-Bürger: Pass oder Personalausweis immer dabeihaben und auf Verlangen zeigen.",
      n_pass: "Als ausländischer Staatsbürger: Pass oder Aufenthaltstitel immer dabeihaben und auf Verlangen zeigen.",
      n_bau: "Auf der Baustelle: Ausweis immer im Original dabei (bis 5.000 €). Beim Zoll musst du Fragen zu deiner Arbeit beantworten – anders als bei der Polizei.",
      days_1: "1 Tag", days_n: "{n} Tage"
    },
    ru: {
      meta: "Прототип · Баден-Вюртемберг · на 25.09.2026 · не юридическая консультация", install: "Установить", install_app: "Установить приложение",
      tab_jetzt: "Сейчас", tab_fragen: "Вопрос", tab_aufnahme: "Запись", tab_danach: "После", tab_wissen: "Знания", tabs_aria: "Разделы",
      jetzt_h: "Что происходит?", jetzt_lead: "Нажми на свою ситуацию — сразу увидишь, что сказать и чего не делать.",
      q_ask: "Задать вопрос", q_proto: "Протокол", back: "Назад", close: "Закрыть",
      b_say: "Скажи", b_do: "Делай", b_dont: "Не делай", tap: "Показать крупно",
      act_film: "Видео без звука", act_consent: "Запись с согласия", act_proto: "Протокол после",
      fragen_h: "Задать вопрос",
      fragen_lead: "Нажми на микрофон и спроси коротко, например «Можно ли снимать?» или „Darf ich filmen?“. Микрофон слушает, пока не нажмёшь ещё раз или 5 секунд не будет слышно речи. Обрабатывается только твой вопрос.",
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
      w_mic: "микрофону", s_mic: "Микрофон", w_cam: "камере", s_cam: "Камера", w_cammic: "камере или микрофону", s_cammic: "Камера и Микрофон", w_geo: "местоположению", s_geo: "Геоданные",
      rec_h: "Запись", rec_lead: "Видео без звука можно, пока ты не мешаешь. Звук — только с согласия всех, кто говорит.",
      rec_silent: "Начать видео без звука", rec_consent: "Со звуком — только с согласия", consent_ask: "Спроси вслух и дождись ответа:",
      consent_yes: "Все согласны — со звуком", consent_no: "Не согласны — видео без звука", cancel: "Отмена",
      consent_tip: "Совет: в начале записи попроси ещё раз подтвердить согласие.", rec_stop: "Остановить запись",
      rec_live_hint: "Не выключай экран и не переключайся на другое приложение — иначе телефон остановит камеру. Всё, что уже записано, сохранится.",
      rec_note: "<strong>Запись сохраняется на телефоне каждую секунду,</strong> даже если приложение упадёт. Всё равно после остановки нажми «Сохранить» и отправь себе или в своё облако — на случай, если телефон заберут. Автоматического облака пока нет.",
      rec_running: "Идёт запись", mode_audio: "Со звуком (согласие {x})", mode_silent: "Без звука",
      rec_nobrowser: "В этом браузере запись не работает. Используй Chrome (Android) или Safari (iPhone), сайт должен открываться по https.",
      rec_nocam: "Подходящая камера не найдена.", rec_busy: "Камера занята. Закрой другие приложения с камерой и нажми ещё раз.", rec_camfail: "Камера не запустилась ({x}).",
      rec_storage: "Сохранить на телефоне не получается (память заполнена или приватный режим). Запись продолжается — после остановки сразу нажми «Сохранить».",
      rec_nopersist: "Этот телефон не хранит записи надолго. После остановки сразу нажми «Сохранить».", rec_empty: "Запись пустая. Начни ещё раз.",
      recs_h: "На этом телефоне", recs_one: "запись", recs_few: "записи", recs_many: "записей", recs_hint: "«Сохранить» отправляет файл тебе же (Telegram, WhatsApp, почта) или в Google Drive.",
      rec_recovered: "Восстановлено — запись была прервана", hash_wait: "считается …", hash_na: "не посчитана (файл слишком большой)",
      b_share: "Сохранить", b_dl: "Скачать", b_proto: "В протокол", b_del: "Удалить", b_del_sure: "Точно удалить?", b_taken: "Добавлено",
      m_clock: "", m_ca: "ок. ", m_sec: " с", m_audio: "со звуком, согласие {x}", m_silent: "без звука",
      danach_h: "После", danach_lead: "В тот же день: протокол по памяти. Надиктовать можно кнопкой у каждого поля.",
      seg_dict_aria: "Язык диктовки", dict_de: "Диктовка по-немецки", dict_ru: "Диктовка по-русски", dict: "Диктовать", gps: "Вставить место", gps_wait: "Ищу …",
      f_datum: "Дата", f_zeit: "Время", f_ort: "Место", f_beamte: "Полицейские и машины", f_ablauf: "Что произошло?", f_zitate: "Точные слова", f_zeugen: "Свидетели",
      f_aufnahmen: "Записи", f_schaden: "Травмы и ущерб", f_name: "Твоё имя и адрес (для писем)",
      ph_ort: "Улица, остановка, направление", ph_beamte: "Имена, участок, номера машин, внешность", ph_ablauf: "По порядку, со временем, как можно точнее",
      ph_zitate: "Кто что именно сказал?", ph_zeugen: "Имя и контакт, только с согласия", ph_aufnahmen: "Добавляется из «Записи»: время, длительность, контрольная сумма",
      ph_schaden: "Что, где, врач, фото", ph_name: "Имя Фамилия, улица, индекс, город",
      p_copy: "Копировать протокол", share: "Поделиться", p_file: "Файлом", p_clear: "Новый протокол", p_clear_sure: "Точно очистить?", p_new: "Новый протокол создан",
      copied: "Скопировано", copy_fail: "Скопировать не удалось — нажми «Поделиться»", geo_na: "Местоположение здесь недоступно", geo_fail: "Место не найдено. Попробуй ещё раз на улице.",
      fristen_h: "Сроки", briefe_h: "Письма",
      dl_proto: "Протокол по памяти", dl_proto_d: "в тот же день — {x}", dl_bc: "Попросить сохранить записи камер", dl_bc_d: "сразу; удалят не позже {x}",
      dl_bb: "Уполномоченная по делам граждан BW", dl_bb_d: "до {x}, не параллельно с уголовным делом или судом", dl_anwalt: "Адвокат", dl_anwalt_d: "поговорить до любой жалобы или заявления",
      left_over: "срок истёк", left_today: "сегодня",
      l_to: "Кому:", l_copy: "Копировать", l_mail: "Открыть в почте",
      wissen_h: "Знания", w_label: "Поиск по знаниям", w_ph: "Поиск: паспорт, снимать, нож …", w_cats: "Темы", w_all: "Все",
      w_empty: "Ничего не найдено. Попробуй: снимать, паспорт, тест, телефон, жалоба.",
      data_note: "Твои данные остаются на телефоне: протокол и записи не уходят ни на какой сервер.",
      disclaimer: "Общая информация, не юридическая консультация. Проверено по законам и решениям судов, адвокатом ещё не проверено. Источники: {links}",
      i_done: "<strong>Установлено.</strong> Ситуации и знания работают и без интернета.",
      i_ios: "<strong>На экран «Домой»:</strong> в Safari нажми «Поделиться», затем «На экран „Домой“». После этого ситуации и знания работают и без интернета.",
      i_android: "<strong>Установить как приложение:</strong> в Chrome справа вверху ⋮, затем «Установить приложение» или «Добавить на главный экран». После этого ситуации и знания работают и без интернета.",
      i_other: "<strong>Приложение на телефон:</strong> Android — в Chrome ⋮ и «Установить приложение». iPhone — в Safari «Поделиться» и «На экран „Домой“».",
      prof_h: "Мой профиль", prof_open: "Мой профиль", prof_lead: "По желанию. Несколько данных — и подсказки точнее подойдут тебе, например сколько ещё действуют твои права.",
      pf_by: "Год рождения", pf_by_ph: "например 1990", pf_none: "Не указано", pf_nat: "Гражданство", pf_nat_de: "Германия", pf_nat_eu: "Страна ЕС", pf_nat_andere: "Другая страна",
      pf_status: "Статус пребывания", pf_st_p24: "Защита по § 24 (Украина)", pf_st_titel: "Вид на жительство", pf_st_asyl: "Убежище или Duldung", pf_st_visum: "Виза или другое",
      pf_fs: "Права выданы в", pf_fs_de: "Германии", pf_fs_eu: "стране ЕС", pf_fs_ua: "Украине", pf_fs_dritt: "другой стране, например России или Казахстане", pf_fs_kein: "Прав нет",
      pf_fsdatum: "Дата получения прав", pf_seit: "Прописан в Германии с", pf_seit_hint: "С этого дня идут 6 месяцев, пока действуют иностранные права.", pf_bau: "Работаю на стройках",
      prof_privacy: "Остаётся только на этом телефоне, ничего не отправляется. Подсказки строятся по готовым правилам из карточек — это не юридическая консультация.",
      prof_del: "Удалить профиль", prof_del_sure: "Точно удалить?", prof_deleted: "Профиль удалён", prof_saved: "Сохранено — только на этом телефоне",
      fd_h: "Для тебя", fd_empty: "Пока подсказок нет. Заполни выше, что хочешь.", fd_edit: "Изменить профиль",
      fd_invite: "Точнее для тебя: короткий профиль — по желанию, остаётся на телефоне.", fd_invite_go: "Заполнить", fd_hide: "Скрыть",
      n_fs_over: "Твои иностранные права в Германии не действуют с {d}. Не садись за руль — иначе полиция возбудит дело за езду без прав. Поменяй права.",
      n_fs_soon: "Твои иностранные права действуют здесь ещё {n} — до {d}. Сейчас подай на обмен в ведомство по правам (Führerscheinstelle).",
      n_fs_ok: "Твои иностранные права действуют здесь до {d} — 6 месяцев с прописки. Подай на обмен вовремя.",
      n_fs_ask: "Укажи в профиле, с какого дня ты прописан в Германии, — тогда увидишь, сколько ещё действуют твои права.",
      n_ua_extra: " Украинские права с 18.08.2026 можно обменять без экзаменов.",
      n_ua24: "Твои украинские права с § 24 действуют без перевода, сейчас до 04.03.2027 ({n}). Держи при себе вид на жительство и распечатку регламента ЕС 2022/1280. С 18.08.2026 их можно обменять без экзаменов.",
      n_null: "Для тебя за рулём: 0,0 промилле и никакого каннабиса — {g}. На электросамокате тоже.",
      n_null_u21: "тебе нет 21", n_null_b21: "до твоего 21-го дня рождения", n_null_pz: "испытательный срок, примерно до {d}",
      n_pass_eu: "Гражданину ЕС: паспорт или удостоверение личности всегда с собой, показывать по требованию.",
      n_pass: "Иностранцу: паспорт или вид на жительство всегда с собой, показывать по требованию.",
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
    var k = IS_ANDROID ? "perm_android" : IS_IOS ? "perm_ios" : "perm_other";
    return t(k).replace("{w}", t("w_" + what)).replace("{s}", t("s_" + what));
  }

  /* ---------- Views ---------- */
  var views = ["jetzt", "fragen", "aufnahme", "danach", "wissen", "situation", "profil"], currentView = "jetzt", backTo = "jetzt";
  function show(name) {
    currentView = name;
    views.forEach(function (v) { $("v-" + v).hidden = v !== name; });
    var tab = name === "situation" || name === "profil" ? "jetzt" : name;
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
    if (v === "profil" && currentView !== "profil") { backTo = currentView === "situation" ? "jetzt" : currentView; fillProfileForm(); }
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
      return '<button class="say-b" type="button" data-de="' + esc(p[0]) + '" data-ru="' + esc(p[1] || "") + '"><span class="say-de">' + esc(p[0]) +
        '</span><span class="say-ru">' + esc(p[1] || "") + '</span><span class="say-tap">' + esc(t("tap")) + "</span></button>";
    }).join("");
  }
  function actionButtons(actions) {
    return (actions || []).map(function (a) {
      if (a === "film") return '<a class="btn primary" href="#aufnahme" data-act="film">' + esc(t("act_film")) + "</a>";
      if (a === "consent") return '<a class="btn" href="#aufnahme" data-act="consent">' + esc(t("act_consent")) + "</a>";
      if (a === "protokoll") return '<a class="btn" href="#danach">' + esc(t("act_proto")) + "</a>";
      if (a.indexOf("situation:") === 0) { var sit = findSituation(a.slice(10)); return sit ? '<a class="btn" href="#s/' + sit.id + '">' + esc(L(sit, "title")) + "</a>" : ""; }
      return "";
    }).join("");
  }
  function situationHTML(s, compact) {
    var note = L(s, "note"), mine = profileNotes().filter(function (n) { return n.sits.indexOf(s.id) > -1; });
    return '<div class="s-head"><h' + (compact ? "3" : "1") + ">" + esc(L(s, "title")) + "</h" + (compact ? "3" : "1") + '><span class="pill ' + s.tone + '">' + esc(L(s, "toneLabel")) + "</span></div>" +
      (mine.length ? '<div class="fd-box"><p class="block-t">' + esc(t("fd_h")) + "</p>" + mine.map(noteHTML).join("") + "</div>" : "") +
      '<div class="block"><p class="block-t say">' + esc(t("b_say")) + "</p>" + sayButtons(s.say) + "</div>" +
      '<div class="block"><p class="block-t do">' + esc(t("b_do")) + '</p><ul class="pts">' + L(s, "doo").map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="block"><p class="block-t dont">' + esc(t("b_dont")) + '</p><ul class="pts">' + L(s, "dont").map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>" +
      (note ? '<p class="note">' + esc(note) + "</p>" : "") +
      '<p class="law">' + esc(s.law) + "</p>" +
      '<div class="s-actions">' + actionButtons(s.actions) + "</div>";
  }
  function renderSituation(s) { $("sit-body").innerHTML = '<div class="view" style="padding:0">' + situationHTML(s, false) + "</div>"; }
  $("sit-back").addEventListener("click", function () { location.hash = "#jetzt"; });

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
  function openBig(de, ru, from) {
    $("big-de").textContent = de; $("big-ru").textContent = ru || ""; $("big").hidden = false; lastFocus = from; $("big-close").focus(); keepAwake();
    // Eigener Verlaufseintrag: Die Zurück-Taste von Android schließt das Großbild statt die Seite zu verlassen.
    try { history.pushState({ rbBig: 1 }, ""); } catch (e) {}
  }
  function hideBig() { $("big").hidden = true; if (!needAwake()) releaseAwake(); if (lastFocus) { try { lastFocus.focus({ preventScroll: true }); } catch (e) {} } }
  function closeBig() { if ($("big").hidden) return; if (history.state && history.state.rbBig) history.back(); else hideBig(); }
  window.addEventListener("popstate", function () { if (!$("big").hidden) hideBig(); });
  $("big-close").addEventListener("click", closeBig);
  $("big").addEventListener("click", function (e) { if (e.target.id === "big" || e.target.id === "big-de" || e.target.id === "big-ru") closeBig(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeBig(); });
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest(".say-b");
    if (b) openBig(b.getAttribute("data-de"), b.getAttribute("data-ru"), b);
    var a = e.target.closest && e.target.closest("[data-act]");
    if (a) pendingAct = a.getAttribute("data-act");
  });

  /* ---------- Matching ---------- */
  function norm(s) {
    return String(s || "").toLowerCase().replace(/\u00ad/g, "").replace(/ё/g, "е").replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
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
        if (n >= Math.max(4, k.length - 2)) best = 1;
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
    "werde", "bekomm", "bekommen", "sagen", "zeigen", "machen", "frage", "welche", "warum", "wieso", "jetzt", "heute", "gestern", "immer", "schon", "bitte",
    "можно", "меня", "если", "нужно", "надо", "полиция", "полицию", "полиции", "чтобы", "могут", "может", "должен", "сейчас", "почему"];
  function match(q) {
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
    }).filter(function (r) { return r.sc > 0; }).sort(function (a, b) { return b.sc - a.sc || b.best - a.best; }).slice(0, 3);
  }
  function cardHTML(c) {
    return '<div class="w-head"><h3>' + esc(L(c, "title")) + '</h3><span class="pill ' + c.tone + '">' + esc(L(c, "toneLabel")) + "</span></div>" +
      "<p>" + esc(L(c, "text")) + "</p>" + (c.say ? sayButtons(c.say) : "") + '<p class="law">' + esc(c.law) + "</p>";
  }
  function speakText(e) {
    var it = e.item;
    if (e.kind === "s") return L(it, "title") + ". " + t("speak_say") + ": " + it.say[0][UI === "ru" ? 1 : 0] + " " + L(it, "doo")[0];
    return L(it, "title") + ". " + L(it, "text");
  }
  function renderAnswers(q) {
    var res = match(q), box = $("answers");
    if (!res.length) {
      // Russisch gefragt oder russische Oberfläche: Hinweis auf Russisch
      box.innerHTML = '<p class="err">' + esc(UI === "ru" || /[а-яё]/i.test(q) ? T.ru.no_card : T.de.no_card) + "</p>";
      return;
    }
    box.innerHTML = res.map(function (r, i) {
      var inner = r.e.kind === "s" ? situationHTML(r.e.item, true) : cardHTML(r.e.item);
      return (i === 1 ? '<p class="alt-t">' + esc(t("alt")) + "</p>" : "") +
        '<article class="ans' + (i === 0 ? " top" : "") + '" data-id="' + esc(r.e.item.id) + '">' + inner +
        (i === 0 ? '<div class="ans-row"><button class="btn" type="button" id="speak">' + esc(t("speak")) + "</button></div>" : "") + "</article>";
    }).join("");
    var sp = $("speak");
    if (sp) sp.addEventListener("click", function () {
      if (!("speechSynthesis" in window)) { sp.textContent = t("speak_na"); return; }
      if (speechSynthesis.speaking) { speechSynthesis.cancel(); sp.textContent = t("speak"); return; }
      var u = new SpeechSynthesisUtterance(speakText(res[0].e)); u.lang = UI === "ru" ? "ru-RU" : "de-DE"; u.rate = 1;
      u.onend = function () { sp.textContent = t("speak"); };
      speechSynthesis.speak(u); sp.textContent = t("stop");
    });
  }

  /* ---------- Speech recognition ---------- */
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  var lang = lsGet(LS_LANG) || (UI === "ru" ? "ru-RU" : "de-DE");
  function syncSeg() {
    [].forEach.call(document.querySelectorAll(".seg-b"), function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false"); });
  }
  [].forEach.call(document.querySelectorAll(".seg-b"), function (b) {
    b.addEventListener("click", function () { lang = b.getAttribute("data-lang"); lsSet(LS_LANG, lang); syncSeg(); });
  });
  function srError(code) {
    if (code === "not-allowed") return permHelp("mic");
    if (code === "service-not-allowed") return IS_IOS ? t("sr_ios") : t("sr_blocked");
    if (code === "network") return t("sr_net");
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
  function listen(onText, onEnd, onErr) {
    if (!SR) { onErr(t("sr_none")); return null; }
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
        ctl.stopped = true; ctl.err = srError(ev.error);
      };
      r.onend = function () {
        ctl.text = mergeText(ctl.text, seg); seg = "";
        if (!ctl.stopped && Date.now() - ctl.lastSpeech < SILENCE_MS) {
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
    ctl.timer = setInterval(function () { if (Date.now() - ctl.lastSpeech >= SILENCE_MS) ctl.stop(); }, 250);
    try { startOne(); } catch (e) { clearInterval(ctl.timer); onErr(t("sr_start")); return null; }
    activeListen = ctl;
    return ctl;
  }
  function stopListening() { if (activeListen) activeListen.stop(); }

  $("mic").addEventListener("click", function () {
    var mic = $("mic"), err = $("ask-err");
    if (activeListen) { stopListening(); return; }
    err.hidden = true;
    var r = listen(function (fin, interim) { $("transcript").textContent = (fin + " " + interim).trim(); },
      function (fin) {
        mic.setAttribute("aria-pressed", "false"); $("mic-label").textContent = t("mic_idle");
        var q = fin || $("transcript").textContent;
        if (q) { $("ask-input").value = q; renderAnswers(q); }
      },
      function (msg) { err.textContent = msg; err.hidden = !msg; mic.setAttribute("aria-pressed", "false"); $("mic-label").textContent = t("mic_idle"); });
    if (r) { mic.setAttribute("aria-pressed", "true"); $("mic-label").textContent = t("mic_on"); $("transcript").textContent = ""; }
  });
  $("ask-form").addEventListener("submit", function (e) {
    e.preventDefault(); var q = $("ask-input").value.trim();
    if (!q) { $("ask-err").textContent = t("ask_empty"); $("ask-err").hidden = false; return; }
    $("ask-err").hidden = true; $("transcript").textContent = q; renderAnswers(q);
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
  function recError(msg) { var e = $("rec-err"); e.textContent = msg || ""; e.hidden = !msg; }
  function setRecUI(stage) {
    $("rec-start").hidden = stage !== "start"; $("consent-step").hidden = stage !== "consent"; $("rec-live").hidden = stage !== "live";
  }
  function camError(e, withAudio) {
    var n = e && e.name;
    if (n === "NotAllowedError" || n === "SecurityError") return permHelp(withAudio ? "cammic" : "cam");
    if (n === "NotFoundError" || n === "OverconstrainedError") return t("rec_nocam");
    if (n === "NotReadableError" || n === "AbortError") return t("rec_busy");
    return t("rec_camfail", n || "?");
  }
  function startRecording(withAudio, consentAt) {
    if (recState) return;
    recError("");
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder) {
      recError(t("rec_nobrowser")); setRecUI("start"); return;
    }
    recState = { pending: true };
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
        stream.getVideoTracks().forEach(function (t) { t.addEventListener("ended", stopRecording); });
        var v = $("preview"); v.srcObject = stream; v.muted = true; var p = v.play(); if (p && p.catch) p.catch(function () {});
        if (storageOK) putRec(r).catch(storageFail);
        else recError(t("rec_nopersist"));
        if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(function () {});
        $("rec-mode").textContent = recModeText(r);
        tick(); setRecUI("live"); keepAwake(); updateRecFloat();
      })
      .catch(function (e) { recState = null; setRecUI("start"); recError(camError(e, withAudio)); });
  }
  function recModeText(r) { return r.withAudio ? t("mode_audio", fmtTime(r.consentAt)) : t("mode_silent"); }
  function tick() {
    if (!recState || !recState.r) return;
    var s = Math.floor((Date.now() - recState.r.started.getTime()) / 1000), clock = pad(Math.floor(s / 60)) + ":" + pad(s % 60);
    $("rec-time").textContent = clock; $("rec-float-time").textContent = clock;
  }
  function updateRecFloat() {
    var on = !!(recState && recState.rec);
    $("rec-float").hidden = !on || currentView === "aufnahme";
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
    stream.getTracks().forEach(function (t) { t.stop(); }); $("preview").srcObject = null;
    if (!needAwake()) releaseAwake();
    updateRecFloat(); setRecUI("start");
    if (!chunks.length) { recError(t("rec_empty")); delRec(r.id).catch(function () {}); return; }
    var blob = new Blob(chunks, { type: r.type }), ended = new Date();
    r.ended = ended; r.dur = Math.max(1, Math.round((ended - r.started) / 1000)); r.size = blob.size; r.blob = blob; r.status = "done";
    recordings.unshift(r); renderRecs();
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
          '<div class="actions"><button class="btn primary" type="button" data-share>' + esc(t("b_share")) + "</button>" +
          '<button class="btn" type="button" data-dl>' + esc(t("b_dl")) + "</button>" +
          '<button class="btn" type="button" data-proto>' + esc(t("b_proto")) + "</button>" +
          '<button class="btn ghost" type="button" data-del>' + esc(t("b_del")) + "</button></div></div>";
      }).join("");
  }
  function recById(id) { for (var i = 0; i < recordings.length; i++) if (recordings[i].id === id) return recordings[i]; return null; }
  function downloadURL(url, name) { var a = document.createElement("a"); a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove(); }
  $("rec-list").addEventListener("click", function (e) {
    var b = e.target.closest("button"), item = e.target.closest(".rec-item");
    var r = b && item ? recById(item.getAttribute("data-id")) : null;
    if (!r) return;
    if (b.hasAttribute("data-share")) {
      var file = new File([r.blob], r.name, { type: r.type });
      if (navigator.canShare && navigator.canShare({ files: [file] })) navigator.share({ files: [file], title: r.name, text: r.hash ? "SHA-256: " + r.hash : r.name }).catch(function () {});
      else downloadURL(r.url, r.name);
    } else if (b.hasAttribute("data-dl")) {
      downloadURL(r.url, r.name);
    } else if (b.hasAttribute("data-proto")) {
      var f = $("p-aufnahmen"); f.value = (f.value ? f.value + "\n" : "") + recLine(r); saveProto(); b.textContent = t("b_taken");
    } else if (b.hasAttribute("data-del")) {
      if (!b._armed) {
        b._armed = true; b.textContent = t("b_del_sure"); b.classList.add("armed");
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
  window.addEventListener("hashchange", function () {
    if (location.hash === "#aufnahme" && pendingAct === "consent" && !recState) setRecUI("consent");
    if (location.hash === "#aufnahme" && pendingAct === "film" && !recState) startRecording(false, null);
    pendingAct = null;
  });
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") { if (needAwake()) keepAwake(); return; }
    // App geht in den Hintergrund: den Rest sofort speichern, bevor das Handy die Kamera stoppt.
    if (recState && recState.rec && recState.rec.state === "recording") { try { recState.rec.requestData(); } catch (e) {} }
  });
  window.addEventListener("beforeunload", function (e) { if (recState && recState.rec) { e.preventDefault(); e.returnValue = ""; } });

  /* ---------- Protocol ---------- */
  var fields = ["datum", "zeit", "ort", "beamte", "ablauf", "zitate", "zeugen", "aufnahmen", "schaden", "name"];
  function protoData() { var o = {}; fields.forEach(function (f) { o[f] = $("p-" + f).value; }); return o; }
  function saveProto() { lsSet(LS_PROTO, JSON.stringify(protoData())); renderDeadlines(); renderLetters(); }
  function loadProto() {
    var raw = lsGet(LS_PROTO), o = null;
    try { o = raw ? JSON.parse(raw) : null; } catch (e) { o = null; }
    var now = new Date();
    fields.forEach(function (f) { $("p-" + f).value = o && o[f] ? o[f] : ""; });
    if (!$("p-datum").value) $("p-datum").value = isoDate(now);
    if (!$("p-zeit").value) $("p-zeit").value = fmtTime(now);
  }
  var saveT;
  $("proto").addEventListener("input", function () { clearTimeout(saveT); saveT = setTimeout(saveProto, 300); });
  function protoDateObj() { var v = $("p-datum").value; if (!v) return new Date(); var p = v.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function protoText() {
    var o = protoData();
    return "GEDÄCHTNISPROTOKOLL\nErstellt am: " + fmtDate(new Date()) + ", " + fmtTime(new Date()) + " Uhr\n\n" +
      "Vorfall am: " + fmtDate(protoDateObj()) + (o.zeit ? ", " + o.zeit + " Uhr" : "") + "\n" +
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
  $("p-share").addEventListener("click", function () { shareText("Gedächtnisprotokoll", protoText(), $("p-msg")); });
  $("p-file").addEventListener("click", function () {
    var blob = new Blob([protoText()], { type: "text/plain;charset=utf-8" });
    downloadURL(URL.createObjectURL(blob), "gedaechtnisprotokoll_" + $("p-datum").value + ".txt");
  });
  var clearArmed = false;
  $("p-clear").addEventListener("click", function () {
    var b = $("p-clear");
    if (!clearArmed) { clearArmed = true; b.textContent = t("p_clear_sure"); setTimeout(function () { clearArmed = false; b.textContent = t("p_clear"); }, 4000); return; }
    clearArmed = false; b.textContent = t("p_clear");
    var keepName = $("p-name").value; lsSet(LS_PROTO, ""); loadProto(); $("p-name").value = keepName; saveProto(); flash($("p-msg"), t("p_new"));
  });
  $("p-gps").addEventListener("click", function () {
    var b = $("p-gps");
    if (!navigator.geolocation) { flash($("p-msg"), t("geo_na")); return; }
    b.textContent = t("gps_wait");
    navigator.geolocation.getCurrentPosition(function (pos) {
      var la = pos.coords.latitude.toFixed(5), lo = pos.coords.longitude.toFixed(5), f = $("p-ort");
      f.value = (f.value ? f.value + "\n" : "") + "Standort " + la + ", " + lo + " (±" + Math.round(pos.coords.accuracy) + " m) https://www.openstreetmap.org/?mlat=" + la + "&mlon=" + lo + "#map=18/" + la + "/" + lo;
      b.textContent = t("gps"); saveProto();
    }, function (err) {
      b.textContent = t("gps");
      if (err && err.code === 1) flash($("p-msg"), permHelp("geo"), 9000); else flash($("p-msg"), t("geo_fail"));
    }, { enableHighAccuracy: true, timeout: 12000 });
  });
  [].forEach.call(document.querySelectorAll(".dict"), function (b) {
    b.addEventListener("click", function () {
      if (activeListen) { stopListening(); return; }
      var f = $(b.getAttribute("data-for")), base = f.value;
      var r = listen(function (fin, interim) { f.value = (base ? base + " " : "") + (fin + " " + interim).trim(); },
        function (fin) { b.setAttribute("aria-pressed", "false"); b.textContent = t("dict"); if (fin) f.value = (base ? base + " " : "") + fin.trim(); saveProto(); },
        function (msg) { b.setAttribute("aria-pressed", "false"); b.textContent = t("dict"); if (msg) flash($("p-msg"), msg, 9000); });
      if (r) { b.setAttribute("aria-pressed", "true"); b.textContent = t("stop"); }
    });
  });

  /* ---------- Deadlines & letters ---------- */
  function addDays(d, n) { var x = new Date(d); x.setDate(x.getDate() + n); return x; }
  function addMonths(d, n) { var x = new Date(d); var day = x.getDate(); x.setDate(1); x.setMonth(x.getMonth() + n); var last = new Date(x.getFullYear(), x.getMonth() + 1, 0).getDate(); x.setDate(Math.min(day, last)); return x; }
  function daysLeft(d) { var today = new Date(); today.setHours(0, 0, 0, 0); var x = new Date(d); x.setHours(0, 0, 0, 0); return Math.round((x - today) / 86400000); }
  function renderDeadlines() {
    var d = protoDateObj(), bc = addDays(d, 28), bb = addMonths(d, 3);
    var items = [
      [t("dl_proto"), t("dl_proto_d", fmtDate(d))],
      [t("dl_bc"), t("dl_bc_d", fmtDate(bc)) + " (" + leftText(daysLeft(bc)) + ")"],
      [t("dl_bb"), t("dl_bb_d", fmtDate(bb) + " (" + leftText(daysLeft(bb)) + ")")],
      [t("dl_anwalt"), t("dl_anwalt_d")]
    ];
    $("deadlines").innerHTML = items.map(function (x) { return '<li class="dl"><span class="dl-t">' + esc(x[0]) + '</span><span class="dl-d">' + esc(x[1]) + "</span></li>"; }).join("");
  }
  function fillLetter(body) {
    var o = protoData();
    var map = { datum: fmtDate(protoDateObj()), zeit: o.zeit || "[Uhrzeit]", ort: (o.ort || "[Ort]").split("\n")[0],
      beamte: o.beamte ? o.beamte.replace(/\n/g, "; ") : "Beamte und Kennzeichen unbekannt", ablauf: o.ablauf || "[kurze Schilderung]", name: o.name || "[Name, Anschrift]" };
    return body.replace(/\{(\w+)\}/g, function (m, k) { return map[k] != null ? map[k] : m; });
  }
  function renderLetters() {
    var letters = D.letters;
    $("letters").innerHTML = Object.keys(letters).map(function (k) {
      var l = letters[k], text = fillLetter(l.body), isMail = l.to.indexOf("@") > -1;
      var mail = isMail ? "mailto:" + l.to + "?subject=" + encodeURIComponent(l.title) + "&body=" + encodeURIComponent(text) : "";
      return '<div class="letter"><h3>' + esc(L(l, "title")) + '</h3><p class="hint">' + esc(L(l, "hint")) + "</p><p>" + esc(t("l_to")) + ' <span class="to">' + esc(l.to) + "</span></p>" +
        '<pre lang="de">' + esc(text) + '</pre><div class="actions"><button class="btn primary" type="button" data-copy="' + k + '">' + esc(t("l_copy")) + "</button>" +
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
  function renderWissen(q) {
    var nq = norm(q || ""), words = nq ? nq.split(" ").map(function (w) { return w.length > 6 ? w.slice(0, w.length - 2) : w; }) : [];
    var list = D.cards.filter(function (c) {
      if (wCat && c.cat !== wCat) return false;
      if (!words.length) return true;
      var hay = norm(c.title + " " + c.text + " " + c.kw.join(" ") + (c.ru ? " " + c.ru.title + " " + c.ru.text : ""));
      return words.every(function (w) { return hay.indexOf(w) > -1; });
    });
    $("w-list").innerHTML = list.map(function (c) { return '<article class="w-card" data-id="' + esc(c.id) + '">' + cardHTML(c) + "</article>"; }).join("");
    $("w-empty").hidden = list.length > 0;
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
    $("install-help").innerHTML = t(isStandalone() ? "i_done" : IS_IOS ? "i_ios" : IS_ANDROID ? "i_android" : "i_other");
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
  function loadProfile() { try { prof = JSON.parse(lsGet(LS_PROF) || "{}") || {}; } catch (e) { prof = {}; } }
  function hasProfile() { return Object.keys(prof).length > 0; }
  function parseDay(v) { var p = String(v || "").split("-"); if (p.length !== 3) return null; var d = new Date(+p[0], +p[1] - 1, +p[2]); return isNaN(d.getTime()) ? null : d; }
  function daysText(n) {
    if (UI !== "ru") return n === 1 ? t("days_1") : t("days_n").replace("{n}", n);
    var m10 = n % 10, m100 = n % 100;
    return n + (m10 === 1 && m100 !== 11 ? " день" : m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14) ? " дня" : " дней");
  }
  // Jeder Hinweis: Stufe (red/amber/info), Text und die Situationen, in denen er oben erscheint.
  function profileNotes() {
    var p = prof, out = [], y = new Date().getFullYear(), fs = p.fs || "", ua24 = fs === "ua" && p.status === "p24";
    if (fs === "dritt" || (fs === "ua" && !ua24)) { // 6 Monate ab Wohnsitz (§ 29 FeV)
      var seit = parseDay(p.seit), extra = fs === "ua" ? t("n_ua_extra") : "", where = ["papiere", "verkehr"];
      if (!seit) out.push({ lv: "info", tx: t("n_fs_ask"), sits: ["papiere"] });
      else {
        var end = addMonths(seit, 6), n = daysLeft(end);
        if (n < 0) out.push({ lv: "red", tx: t("n_fs_over").replace("{d}", fmtDate(end)) + extra, sits: where });
        else if (n <= 60) out.push({ lv: "amber", tx: t("n_fs_soon").replace("{n}", daysText(n)).replace("{d}", fmtDate(end)) + extra, sits: where });
        else out.push({ lv: "info", tx: t("n_fs_ok").replace("{d}", fmtDate(end)) + extra, sits: where });
      }
    }
    if (ua24) out.push({ lv: daysLeft(UA24_END) <= 90 ? "amber" : "info", tx: t("n_ua24").replace("{n}", leftText(daysLeft(UA24_END))), sits: ["papiere", "verkehr"] });
    var by = parseInt(p.by, 10), g = ""; // 0,0 Promille unter 21 und in der Probezeit (§ 24c StVG)
    if (by > 1900 && by <= y) { if (y - by < 21) g = t("n_null_u21"); else if (y - by === 21) g = t("n_null_b21"); }
    if (!g && (fs === "de" || fs === "eu")) {
      var fd = parseDay(p.fsdatum), pz = fd ? addMonths(fd, 24) : null;
      if (pz && daysLeft(pz) >= 0) g = t("n_null_pz").replace("{d}", fmtDate(pz));
    }
    if (g) out.push({ lv: "amber", tx: t("n_null").replace("{g}", g), sits: ["test", "verkehr", "escooter", "unfall"] });
    if (p.nat === "eu" || p.nat === "andere") out.push({ lv: "info", tx: t(p.nat === "eu" ? "n_pass_eu" : "n_pass"), sits: ["personalien", "verkehr", "kontrolleur", "zoll"] });
    if (p.bau) out.push({ lv: "info", tx: t("n_bau"), sits: ["zoll", "personalien"] });
    var rank = { red: 0, amber: 1, info: 2 };
    return out.sort(function (a, b) { return rank[a.lv] - rank[b.lv]; });
  }
  function noteHTML(n) { return '<p class="fd fd-' + n.lv + '">' + esc(n.tx) + "</p>"; }
  function renderFuerDich() {
    // Startseite nur Dringendes (rot/gelb) – die Kacheln sollen im Stress oben bleiben. Alles andere steht in der passenden Situation.
    var box = $("fuer-dich"), notes = profileNotes(), urgent = notes.filter(function (n) { return n.lv !== "info"; });
    if (urgent.length) {
      box.innerHTML = '<div class="fd-box"><div class="fd-head"><p class="block-t">' + esc(t("fd_h")) + '</p><a class="fd-edit" href="#profil">' + esc(t("fd_edit")) + "</a></div>" +
        urgent.slice(0, 2).map(noteHTML).join("") + "</div>";
    } else if (!hasProfile() && lsGet(LS_PROF_HIDE) !== "aus") {
      box.innerHTML = '<div class="fd-invite"><p>' + esc(t("fd_invite")) + '</p><a class="btn" href="#profil">' + esc(t("fd_invite_go")) + "</a>" +
        '<button class="fd-x" type="button" id="fd-hide" aria-label="' + esc(t("fd_hide")) + '">×</button></div>';
    } else box.innerHTML = "";
    $("prof-notes").innerHTML = notes.length ? notes.map(noteHTML).join("") : '<p class="hint">' + esc(t("fd_empty")) + "</p>";
  }
  $("fuer-dich").addEventListener("click", function (e) { if (e.target.id === "fd-hide") { lsSet(LS_PROF_HIDE, "aus"); renderFuerDich(); } });
  function syncProfileFields() {
    var nat = $("pf-nat").value, fs = $("pf-fs").value, ua24 = nat === "andere" && $("pf-status").value === "p24";
    $("pf-status-f").hidden = nat !== "andere";
    $("pf-fsdatum-f").hidden = !(fs === "de" || fs === "eu");
    $("pf-seit-f").hidden = !(fs === "dritt" || (fs === "ua" && !ua24));
  }
  function fillProfileForm() {
    Object.keys(pf).forEach(function (k) { $(pf[k]).value = prof[k] || ""; });
    $("pf-bau").checked = !!prof.bau; syncProfileFields();
  }
  function saveProfile() {
    syncProfileFields();
    var o = {};
    Object.keys(pf).forEach(function (k) { var el = $(pf[k]), v = String(el.value || "").trim(); if (v && !el.closest(".field").hidden) o[k] = v; });
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
    prof = {}; try { localStorage.removeItem(LS_PROF); } catch (e) {}
    fillProfileForm(); renderFuerDich(); flash($("prof-msg"), t("prof_deleted"));
  });
  $("prof-back").addEventListener("click", function () { location.hash = "#" + backTo; });

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
  }
  function setUI(u) {
    if (u === UI || !T[u]) return;
    UI = u; lsSet(LS_UI, u);
    if (!lsGet(LS_LANG)) { lang = u === "ru" ? "ru-RU" : "de-DE"; syncSeg(); } // Spracheingabe folgt, solange nicht selbst gewählt
    applyUI(); renderGrid(); renderFuerDich(); renderCats(); renderWissen($("w-q").value); renderDeadlines(); renderLetters(); syncInstall(); renderRecs();
    if (currentView === "situation") route();
    if ($("answers").innerHTML && $("ask-input").value.trim()) renderAnswers($("ask-input").value.trim());
  }
  [].forEach.call(document.querySelectorAll(".lang-b"), function (b) { b.addEventListener("click", function () { setUI(b.getAttribute("data-ui")); }); });

  /* ---------- Start ---------- */
  applyUI(); loadProfile(); fillProfileForm(); renderFuerDich(); buildCorpus(); renderGrid(); syncSeg(); loadProto(); renderDeadlines(); renderLetters(); renderCats(); renderWissen(""); syncInstall(); route(); loadRecs();
  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
    var hadController = !!navigator.serviceWorker.controller;
    // Neue Version direkt nach dem Öffnen: einmal neu laden, damit geänderte Inhalte sofort gelten.
    navigator.serviceWorker.addEventListener("controllerchange", function () {
      if (hadController && !recState && performance.now() < 15000) location.reload();
    });
    window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); });
  }
})();
