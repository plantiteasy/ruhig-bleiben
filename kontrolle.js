/* Kontrolle-Modus: je Rolle 10 Knöpfe in der Reihenfolge einer typischen Kontrolle.
   Jeder Knopf zeigt auf einen Eintrag in quick.js (dort die volle, geprüfte Antwort mit Quellen).
   kurz  = der Satz zum Aussprechen, nur aus dem geprüften „say“ gekürzt – keine neue Rechtsaussage.
   dann  = was tun, wenn der Beamte darauf besteht (aus „why“ des Eintrags).
   law   = der eine tragende Paragraf; alle Normen stehen im Eintrag.
   stich = Stichwörter für „Stichwort sagen“ und den Test-Mithörmodus. Wortanfang zählt („durchsuch“ trifft „durchsuchen“);
           ein Leerzeichen am Ende verlangt das ganze Wort („pass “ trifft nicht „passiert“).
   Noch nicht anwaltlich geprüft. */
window.RB = window.RB || {};
window.RB.kontrolle = {
  roles: [["fahrer", "Fahrer", "Водитель"], ["beifahrer", "Beifahrer", "Пассажир"], ["fuss", "Zu Fuß", "Пешком"]],
  buttons: {
    fahrer: [
      ["fahrer-papiere", "Papiere", "Документы", ["führerschein", "fahrzeugschein", "fahrzeugpapiere", "papiere", "zulassung", "ausweis", "personalausweis", "права ", "документ", "техпаспорт"]],
      ["fahrer-fragen", "Getrunken? Woher?", "Пил? Откуда?", ["getrunken", "wo kommen sie", "wo wollen sie", "wo fahren sie", "woher", "wohin", "alkohol", "drogen genommen", "medikamente", "пил", "откуда", "куда едете"]],
      ["fahrer-pusten", "Pusten", "Дуть в трубку", ["pusten", "puste ", "atemalkohol", "alkoholtest", "atemtest", "blasen", "röhrchen", "alkomat", "тест на алкогол", "дуть", "дуйте", "дуньте", "дыхни", "дыхните", "алкотест", "трубк"]],
      ["fahrer-drogenvortest", "Urin-, Drogentest", "Тест мочи, наркотики", ["urin", "wischtest", "drogentest", "drogenschnelltest", "speichel", "finger", "mit den augen", "augen ", "pupille", "auf einer linie", "моч", "мазок", "наркотест", "тест на наркотики", "слюн", "палец", "пальц"]],
      ["fahrer-blut", "Blutprobe", "Анализ крови", ["blut", "blut ", "blutprobe", "blutentnahme", "blut abnehmen", "кров", "кровь "]],
      ["fahrer-aussteigen", "Aussteigen", "Выйти из машины", ["aussteigen", "steigen sie", "raus aus dem", "aus dem fahrzeug", "aus dem auto", "aus dem wagen", "kommen sie raus", "выйти", "выйдите", "выходите", "из машины"]],
      ["fahrer-kofferraum", "Kofferraum, Auto", "Багажник, машина", ["kofferraum", "handschuhfach", "durchsuch", "schauen uns das auto", "ins auto", "багажник", "бардачок", "досмотр", "обыск"]],
      ["fahrer-handy", "Handy zeigen, entsperren", "Телефон показать", ["entsperr", "handy", "handy her", "pin ", "code ", "разблок", "пароль", "телефон"]],
      ["aufnahme-filmen-stoppen", "Filmen aufhören", "Прекратить съёмку", ["filmen", "sie filmen", "aufnehm", "aufnahme", "ihre kamera", "kamera aus", "video aus", "handy runter", "fotografier", "keine fotos", "снимать", "съёмк", "запись ", "прекратите сним", "опустите телефон"]],
      ["fahrer-unterschrift", "Unterschreiben", "Подписать", ["unterschreib", "unterschrift", "подпис", "подпиш"]]
    ],
    beifahrer: [
      ["person-beifahrer-ausweis", "Ausweis vom Beifahrer", "Документ пассажира", ["ausweis", "personalausweis", "personalien", "ausweisen", "wie heißen sie", "документ", "паспорт", "удостоверени", "посвідч"]],
      ["druck-zeuge-beifahrer", "Aussagen als Zeuge", "Показания свидетеля", ["zeuge", "aussage", "aussagen", "gefahren", "getrunken", "свидетел", "свідок", "показани", "за рулём", "кермо", "пил"]],
      ["person-grund", "Grund? „Normale Kontrolle“", "Причина?", ["grund ", "normale kontrolle", "allgemeine kontrolle", "verdachtsunabhängig", "причин", "обычная проверка"]],
      ["person-taschen-durchsuchen", "Taschen durchsuchen", "Обыск, карманы", ["taschen", "tasche ", "durchsuch", "abtasten", "tasten sie ab", "abgetastet", "rucksack", "обыск", "карман", "сумк", "рюкзак"]],
      ["person-handy", "Handy mitnehmen, entsperren", "Телефон забирают", ["handy", "handy durchsuch", "durchsuchen ihr handy", "entsperr", "pin ", "telefon", "smartphone", "телефон", "разблок"]],
      ["aufnahme-filmen-stoppen", "Filmen aufhören", "Прекратить съёмку", ["filmen", "sie filmen", "aufnehm", "aufnahme", "ihre kamera", "kamera aus", "video aus", "handy runter", "handy weg", "smartphone weg", "fotografier", "keine fotos", "снимать", "съёмк", "запись ", "прекратите сним", "опустите телефон"]],
      ["person-weggehen", "Hier stehen bleiben", "Стойте здесь", ["stehen bleiben", "bleiben sie hier", "bleiben hier", "hier stehen", "nicht weggehen", "sie bleiben", "стойте", "не уходите", "оставайтесь"]],
      ["person-wache", "Mitkommen auf die Wache", "В участок", ["wache", "revier", "mitkommen", "kommen mit", "kommen sie mit", "dienststelle", "präsidium", "участок", "отдел", "пройдёмте", "поедете с нами"]],
      ["person-angehoerige", "Ehepartner, Verwandte", "Жена, муж, родные", ["seine frau", "ihre frau", "frau ", "ihr mann", "mann ", "ehefrau", "ehemann", "verheiratet", "verlobt", "verwandt", "bruder", "schwester", "жена", "муж ", "мужа", "дружин", "чоловік", "родствен", "родич"]],
      ["person-auslaender-pass", "Pass, Aufenthaltstitel", "Паспорт, ВНЖ", ["pass ", "reisepass", "aufenthalt", "duldung", "visum", "внж", "вид на жительство", "загранпаспорт"]]
    ],
    fuss: [
      ["person-personalien", "Name, Adresse", "Имя, адрес", ["personalien", "ausweis", "personalausweis", "name", "geburtsdatum", "adresse", "wie heißen", "wo wohnen", "имя", "фамили", "адрес", "дата рождения", "документ"]],
      ["person-auslaender-pass", "Pass, Aufenthaltstitel", "Паспорт, ВНЖ", ["pass ", "reisepass", "aufenthalt", "duldung", "visum", "внж", "вид на жительство", "паспорт"]],
      ["person-grund", "Grund? „Normale Kontrolle“", "Причина?", ["grund ", "normale kontrolle", "allgemeine kontrolle", "verdachtsunabhängig", "причин", "обычная проверка"]],
      ["person-taschen-durchsuchen", "Taschen durchsuchen", "Обыск, карманы", ["taschen", "tasche ", "durchsuch", "abtasten", "tasten sie ab", "abgetastet", "rucksack", "обыск", "карман", "сумк", "рюкзак"]],
      ["person-handy", "Handy mitnehmen, entsperren", "Телефон забирают", ["handy", "handy durchsuch", "durchsuchen ihr handy", "entsperr", "pin ", "telefon", "smartphone", "телефон", "разблок"]],
      ["aufnahme-filmen-stoppen", "Filmen aufhören", "Прекратить съёмку", ["filmen", "sie filmen", "aufnehm", "aufnahme", "ihre kamera", "kamera aus", "video aus", "handy runter", "handy weg", "smartphone weg", "fotografier", "keine fotos", "снимать", "съёмк", "запись ", "прекратите сним", "опустите телефон"]],
      ["person-weggehen", "Hier stehen bleiben", "Стойте здесь", ["stehen bleiben", "bleiben sie hier", "bleiben hier", "hier stehen", "nicht weggehen", "sie bleiben", "стойте", "не уходите", "оставайтесь"]],
      ["person-platzverweis", "Platzverweis, weggehen", "Уйти с места", ["platzverweis", "verlassen", "gehen sie weg", "gehen sie weiter", "hauen sie ab", "verschwinden sie", "weitergehen", "уходите", "покиньте"]],
      ["person-wache", "Mitkommen auf die Wache", "В участок", ["wache", "revier", "mitkommen", "kommen mit", "kommen sie mit", "dienststelle", "präsidium", "участок", "отдел", "пройдёмте", "поедете с нами"]],
      ["person-fotos-fingerabdruecke", "Fotos, Fingerabdrücke", "Фото, отпечатки", ["fotos von ihnen", "foto von ihnen", "fingerabdr", "erkennungsdienst", "сфотографир", "отпечат"]]
    ]
  },
  // Nur für „Stichwort sagen“ und Mithören: Einträge ohne eigenen Knopf (volle Antwort aus quick.js)
  extra: {
    fahrer: [["fahrer-warnausruestung", ["warndreieck", "verbandkasten", "verbandskasten", "warnweste", "аптечк", "аварийный знак", "жилет"]],
      ["fahrer-handy-weg-haende", ["hände", "lenkrad", "hände ans lenkrad", "handy weg", "smartphone weg", "legen sie das handy", "руки", "руль"]], ["aufnahme-loeschen", ["lösch", "удал", "стер", "видал"]], ["druck-freiwillig-mitkommen", ["freiwillig mit", "freiwillig auf die wache", "freiwillig zur wache", "добровольно"]], ["aufnahme-nehmen-sie-auf", ["sie das auf", "das etwa auf", "etwa auf", "nehmen sie auf", "nehmen sie uns auf", "filmen sie etwa", "filmen sie uns", "zeichnen sie auf", "вы снимаете", "вы записываете"]], ["aufnahme-livestream", ["livestream", "live stream", "streamen", "трансляц", "стрим"]]],
    beifahrer: [["druck-unterschreiben", ["unterschreib", "unterschrift", "подпис", "подпиш"]], ["aufnahme-loeschen", ["lösch", "удал", "стер", "видал"]], ["druck-freiwillig-mitkommen", ["freiwillig mit", "freiwillig auf die wache", "freiwillig zur wache", "добровольно"]], ["aufnahme-nehmen-sie-auf", ["sie das auf", "das etwa auf", "etwa auf", "nehmen sie auf", "nehmen sie uns auf", "filmen sie etwa", "filmen sie uns", "zeichnen sie auf", "вы снимаете", "вы записываете"]], ["aufnahme-livestream", ["livestream", "live stream", "streamen", "трансляц", "стрим"]]],
    fuss: [["aufnahme-loeschen", ["lösch", "удал", "стер", "видал"]], ["druck-freiwillig-mitkommen", ["freiwillig mit", "freiwillig auf die wache", "freiwillig zur wache", "добровольно"]], ["aufnahme-nehmen-sie-auf", ["sie das auf", "das etwa auf", "etwa auf", "nehmen sie auf", "nehmen sie uns auf", "filmen sie etwa", "filmen sie uns", "zeichnen sie auf", "вы снимаете", "вы записываете"]], ["aufnahme-livestream", ["livestream", "live stream", "streamen", "трансляц", "стрим"]]]
  },
  kurz: {
    "aufnahme-loeschen": { de: "Ich lösche nichts. Einer Beschlagnahme widerspreche ich, Widerstand leiste ich nicht.", ru: "Ничего не удаляю. Против изъятия возражаю, сопротивления не оказываю.", law: "§§ 94, 98 Abs. 1 StPO",
      dann: "Beschlagnahmt er das Handy: loslassen, nicht festhalten.", dann_ru: "Если изымает телефон: отпустить, не удерживать." },
    "druck-freiwillig-mitkommen": { de: "Ist das eine Anordnung? Freiwillig komme ich nicht mit. Einer Anordnung folge ich ohne Widerstand.", ru: "Это распоряжение? Добровольно не пойду. Распоряжению подчинюсь без сопротивления.", law: "Art. 104 Abs. 1 GG" },
    "aufnahme-nehmen-sie-auf": { de: "Ja, offen und nur Bild ohne Ton. Ich veröffentliche nichts.", ru: "Да, открыто и только изображение без звука. Ничего не публикую.", law: "§ 201 Abs. 1 Nr. 1 StGB · § 22 KUG",
      dann: "Nie leugnen. Läuft Ton mit: offen sagen und den Ton ausschalten, wenn er widerspricht.", dann_ru: "Никогда не отрицай. Если пишется звук: скажи прямо и выключи звук, если он возражает." },
    "aufnahme-livestream": { de: "Ich beende den Livestream und speichere nur privat.", ru: "Прекращаю трансляцию и сохраняю только для себя.", law: "§§ 22, 33 KUG" },
    "fahrer-handy-weg-haende": { de: "Mache ich. Das Handy kommt in die Halterung, meine Hände bleiben sichtbar.", ru: "Выполняю. Телефон в держатель, руки на виду.", law: "§ 36 Abs. 5 S. 4 StVO" },
    "person-angehoerige": { de: "Ich bin mit dem Fahrer verheiratet. Ich verweigere die Aussage.", ru: "Я в браке с водителем. Отказываюсь давать показания.", law: "§ 52 Abs. 1 StPO",
      dann: "Das gilt auch für Verlobte, Eltern, Kinder und Geschwister.", dann_ru: "То же касается жениха или невесты, родителей, детей, братьев и сестёр." },
    "fahrer-papiere": { de: "Bitte sehr. Zur Sache sage ich nichts.", ru: "Пожалуйста. По существу ничего не скажу.", law: "§ 4 Abs. 2 S. 2 FeV · § 13 Abs. 6 S. 1 FZV" },
    "fahrer-fragen": { de: "Meine Personalien gebe ich an. Weitere Fragen beantworte ich nicht.", ru: "Личные данные назову. На другие вопросы не отвечаю.", law: "§ 43 Abs. 1 S. 2 PolG BW · § 136 Abs. 1 S. 2 StPO" },
    "fahrer-pusten": { de: "Ist das eine Anordnung? Einem Atemalkoholtest stimme ich nicht zu. § 81a StPO verlangt nur Dulden.", ru: "Это распоряжение? На алкотест не соглашаюсь. § 81a StPO требует только терпеть.", law: "§ 81a Abs. 1 StPO" },
    "fahrer-drogenvortest": { de: "Urin-, Speichel- und Koordinationstests mache ich nicht mit. Eine Anordnung nach § 81a StPO dulde ich.", ru: "В тестах мочи, слюны и на координацию не участвую. Распоряжение по § 81a StPO стерплю.", law: "§ 81a Abs. 1 StPO" },
    "fahrer-blut": { de: "Ich stimme nicht zu, leiste aber keinen Widerstand. Wer hat das angeordnet, auf welche Tatsachen?", ru: "Не соглашаюсь, но сопротивляться не буду. Кто это назначил и на каких фактах?", law: "§ 81a Abs. 2 StPO",
      dann: "Wird die Blutentnahme angeordnet: dulden, nicht wehren.", dann_ru: "Если взятие крови назначено: терпеть, не сопротивляться." },
    "fahrer-aussteigen": { de: "Ich steige aus. Zur Sache sage ich nichts, freiwilligen Tests stimme ich nicht zu.", ru: "Выхожу. По существу ничего не скажу, на добровольные тесты не соглашаюсь.", law: "§ 36 Abs. 5 StVO" },
    "fahrer-kofferraum": { de: "Einer Durchsuchung stimme ich nicht zu. Auf welcher Grundlage? Ich leiste keinen Widerstand.", ru: "На обыск не соглашаюсь. На каком основании? Сопротивляться не буду.", law: "§ 102 StPO · § 35 PolG BW",
      dann: "Durchsucht er trotzdem: dulden, nicht helfen.", dann_ru: "Если всё равно обыскивает: терпеть, не помогать." },
    "fahrer-handy": { de: "Zum Vorwurf sage ich nichts. Mein Handy entsperre ich nicht, den Code nenne ich nicht.", ru: "По обвинению ничего не скажу. Телефон не разблокирую, код не назову.", law: "§ 136 Abs. 1 S. 2 StPO",
      dann: "Beschlagnahmt er es: keinen Widerstand leisten. Den PIN musst du nicht nennen – Ausnahme: Ausländer ohne gültigen Pass (§ 48 Abs. 3a AufenthG).", dann_ru: "Если изымает: не сопротивляться. PIN называть не нужно — исключение: иностранец без действующего паспорта (§ 48 Abs. 3a AufenthG)." },
    "aufnahme-filmen-stoppen": { de: "Ich behindere Sie nicht und veröffentliche nichts. Ordnen Sie es an, folge ich unter Widerspruch.", ru: "Я вам не мешаю и ничего не публикую. Если прикажете, подчинюсь, но с возражением.", law: "§§ 1, 3 PolG BW",
      dann: "Ordnet er es an: aufhören und später gerichtlich prüfen lassen.", dann_ru: "Если приказал: прекратить и потом обжаловать в суде." },
    "fahrer-unterschrift": { de: "Ich unterschreibe nichts und sage nichts zur Sache. Eine Kopie nehme ich gern.", ru: "Ничего не подписываю и по существу не говорю. От копии не откажусь.", law: "§ 136 Abs. 1 S. 2 StPO" },
    "person-beifahrer-ausweis": { de: "Ich bin nur Beifahrer. Auf welcher Rechtsgrundlage?", ru: "Я только пассажир. На каком основании?", law: "§ 27 PolG BW · § 163b StPO",
      dann: "Besteht er darauf: Personalien unter Widerspruch angeben, mitgeführten Ausweis zeigen.", dann_ru: "Если настаивает: назвать данные с возражением, показать документ, если он с собой." },
    "druck-zeuge-beifahrer": { de: "Hier sind meine Personalien. Bei der Polizei sage ich nur auf Ladung im Auftrag der Staatsanwaltschaft aus.", ru: "Вот мои данные. В полиции даю показания только по вызову по поручению прокуратуры.", law: "§ 163 Abs. 3 S. 1 StPO" },
    "person-grund": { de: "Werde ich einer Straftat verdächtigt? Dann nennen Sie mir bitte die Tat.", ru: "Меня подозревают в преступлении? Тогда назовите, в каком.", law: "§ 163b Abs. 1 · § 163a Abs. 4 S. 1 StPO",
      dann: "Nach § 27 PolG BW muss er den Grund nicht sofort nennen. Später eine schriftliche Bestätigung verlangen.", dann_ru: "По § 27 PolG BW причину сразу называть не обязаны. Потом можно потребовать письменное подтверждение." },
    "person-taschen-durchsuchen": { de: "Ich stimme der Durchsuchung nicht zu und leiste keinen Widerstand. Auf welcher Grundlage?", ru: "Не согласен на обыск и не сопротивляюсь. На каком основании?", law: "§ 34 PolG BW · § 102 StPO",
      dann: "Durchsucht er trotzdem: dulden, nicht wehren.", dann_ru: "Если всё равно обыскивает: терпеть, не сопротивляться." },
    "person-handy": { de: "Ich gebe das Handy nicht freiwillig heraus und widerspreche der Beschlagnahme. Meinen PIN nenne ich nicht.", ru: "Телефон добровольно не отдаю и возражаю против изъятия. PIN не называю.", law: "§ 98 Abs. 2 · § 136 Abs. 1 S. 2 StPO",
      dann: "Nimmt er es trotzdem: keinen Widerstand leisten, Bescheinigung verlangen. PIN-Ausnahme: Ausländer ohne gültigen Pass (§ 48 Abs. 3a AufenthG).", dann_ru: "Если всё равно забирает: не сопротивляться, потребовать справку. Исключение по PIN: иностранец без действующего паспорта (§ 48 Abs. 3a AufenthG)." },
    "person-weggehen": { de: "Werde ich festgehalten, und auf welcher Grundlage? Wenn nicht, möchte ich jetzt gehen.", ru: "Меня задерживают, и на каком основании? Если нет, хочу сейчас уйти.", law: "§ 27 Abs. 2 S. 3 PolG BW · § 163b StPO",
      dann: "Hält er dich fest: bleib, wehr dich nicht, lass es später prüfen.", dann_ru: "Если задерживает: оставайся, не сопротивляйся, обжалуй потом." },
    "person-wache": { de: "Ich komme mit, leiste keinen Widerstand, widerspreche aber. Warum ist meine Identität hier nicht feststellbar?", ru: "Поеду, не сопротивляюсь, но возражаю. Почему мою личность нельзя установить здесь?", law: "§ 163b Abs. 1 S. 2 · § 163c StPO",
      dann: "Verlange, einen Angehörigen zu benachrichtigen.", dann_ru: "Потребуй сообщить родственнику." },
    "druck-unterschreiben": { de: "Ich unterschreibe nichts. Eine Pflicht zur Unterschrift gibt es nicht.", ru: "Ничего не подписываю. Обязанности подписывать нет.", law: "§ 168a Abs. 3 StPO" },
    "person-auslaender-pass": { de: "Hier sind mein Pass und mein Aufenthaltstitel. Zur Sache sage ich nichts.", ru: "Вот мой паспорт и вид на жительство. По делу ничего не скажу.", law: "§§ 47a, 48 Abs. 1 AufenthG" },
    "person-personalien": { de: "Hier sind meine Personalien. Zu allem Weiteren sage ich nichts.", ru: "Вот мои данные. Больше ничего не скажу.", law: "§ 111 OWiG" },
    "person-platzverweis": { de: "Ich gehe. Nennen Sie mir bitte die Gefahr, den Bereich und die Dauer.", ru: "Ухожу. Назовите, пожалуйста, опасность, территорию и срок.", law: "§ 30 Abs. 1 PolG BW" },
    "person-fotos-fingerabdruecke": { de: "Bin ich Beschuldigter oder Zeuge? Ich widerspreche, leiste aber keinen Widerstand.", ru: "Я обвиняемый или свидетель? Возражаю, но не сопротивляюсь.", law: "§ 81b Abs. 1 · § 163b Abs. 2 StPO",
      dann: "Als Beschuldigter oder wenn deine Identität sonst nicht klärbar ist, musst du es dulden.", dann_ru: "Обвиняемый, или если личность иначе не установить, обязан это терпеть." }
  }
};
