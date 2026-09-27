/* Schnellhilfe „Polizei sagt → deine Antwort mit Paragraf“ (Stand 27.09.2026, Baden-Württemberg).
   Jede Antwort gegen den Gesetzestext geprüft (gesetze-im-internet.de, landesrecht-bw.de) und von einem zweiten Prüfer gegengelesen
   (Rad/E-Scooter: rad-regeln, rad-rahmennummer und die Ergänzungen in fahrer-blut, fahrer-handy, fahrer-wissen-sie-warum, person-ausweis-mitfuehren am 27.09.2026;
   Paket A+B: fahrer-verdacht-anzeichen, druck-nichts-zu-verbergen, fahrer-vorwurf-bestreiten neu, geändert fahrer-fragen, fahrer-drogenvortest,
   fahrer-kofferraum, fahrer-anhalten, fahrer-schluessel-weiterfahrt, fahrer-verwarnungsgeld am 27.09.2026);
   „src“ = Primärquellen. Noch nicht anwaltlich geprüft. */
window.RB.quickGroups = [["fahrer", "Fahrer", "Водитель"], ["person", "Beifahrer, Personenkontrolle", "Пассажир, проверка документов"], ["aufnahme", "Filmen und Handy", "Съёмка и телефон"], ["druck", "Druck und Fragen", "Давление и вопросы"]];
window.RB.quickTop = ["fahrer-fragen", "fahrer-pusten", "fahrer-handy-weg-haende", "aufnahme-nehmen-sie-auf", "aufnahme-filmen-stoppen", "fahrer-drogenvortest", "fahrer-kofferraum", "person-beifahrer-ausweis", "fahrer-blut", "druck-widerstand-drohung", "aufnahme-handy-herausgeben", "person-taschen-durchsuchen"];
window.RB.quick = [
 {
  "id": "fahrer-anhalten",
  "g": "fahrer",
  "v": "musst",
  "cop": "Polizei – bitte folgen! Halten Sie da vorne rechts an.",
  "say": "Ich halte an und folge Ihren Anweisungen zur Verkehrskontrolle nach § 36 Abs. 5 StVO. Zur Sache mache ich keine Angaben.",
  "law": "§ 36 Abs. 1 S. 2, Abs. 5 S. 1, S. 4 StVO · § 16 Abs. 2 S. 2 StVO · BKat Nr. 129 (Anlage BKatV) · FeV Anlage 13 Nr. 3.2.19",
  "why": "Hier hat die Polizei recht: Zur allgemeinen Verkehrskontrolle darf sie jeden ohne Verdacht anhalten, ihre Anweisungen sind zu befolgen. Haltgebot missachtet: 70 € und 1 Punkt (BKat Nr. 129, FeV Anlage 13 Nr. 3.2.19). Zeigt die Polizei „Bitte folgen“, fahr hinterher, bis sie anhält, und halte dort, wo sie es anweist. Gibt sie nur das Haltezeichen und kannst du nicht sofort gefahrlos halten (keine Haltebucht, schnelle Straße, Dunkelheit): zeig, dass du verstanden hast – Blinker, deutlich langsamer – und halte an der nächsten sicheren Stelle. Das Haltezeichen entbindet nicht von der Sorgfaltspflicht (§ 36 Abs. 1 S. 2 StVO); bei besonders langsamer Fahrt auf schnellen Straßen ist Warnblinklicht erlaubt (§ 16 Abs. 2 S. 2 StVO). Nicht kilometerweit weiterfahren – das kann wie Flucht wirken. Nach dem Halten: Motor aus, bei Dunkelheit Innenlicht an, Hände sichtbar.",
  "src": [
   "https://www.gesetze-im-internet.de/stvo_2013/__36.html",
   "https://www.gesetze-im-internet.de/stvo_2013/__16.html",
   "https://www.gesetze-im-internet.de/bkatv_2013/BJNR049800013.html",
   "https://www.gesetze-im-internet.de/fev_2010/anlage_13.html"
  ],
  "ru": {
   "cop": "Полиция — следуйте за нами! Остановитесь вон там справа.",
   "say": "Я останавливаюсь и выполняю ваши указания для дорожной проверки по § 36 Abs. 5 StVO. По существу ничего не скажу.",
   "why": "Здесь полиция права: для общей дорожной проверки она может остановить любого без подозрения, её указания нужно выполнять. Не остановился по требованию: 70 € и 1 балл (BKat Nr. 129, FeV Anlage 13 Nr. 3.2.19). Если полиция показывает «Bitte folgen», едь за ней, пока она не остановится, и встань там, где она укажет. Если есть только знак остановиться, а сразу безопасно остановиться нельзя (нет кармана, быстрая дорога, темно): покажи, что понял, — поворотник, заметно сбавь скорость — и остановись в ближайшем безопасном месте. Знак остановки не снимает с тебя обязанности соблюдать осторожность (§ 36 Abs. 1 S. 2 StVO); при очень медленной езде на быстрой дороге разрешена аварийная сигнализация (§ 16 Abs. 2 S. 2 StVO). Не проезжай лишние километры — это может выглядеть как бегство. После остановки: заглуши мотор, в темноте включи свет в салоне, держи руки на виду."
  }
 },
 {
  "id": "fahrer-papiere",
  "g": "fahrer",
  "v": "musst",
  "cop": "Führerschein und Fahrzeugschein, bitte.",
  "say": "Bitte sehr. Beides händige ich zur Prüfung aus – § 4 Abs. 2 S. 2 FeV, § 13 Abs. 6 S. 1 FZV. Zur Sache sage ich nichts.",
  "law": "§ 4 Abs. 2 S. 2 FeV · § 13 Abs. 6 S. 1 FZV (FZV 2023) · § 111 OWiG · BKat Nr. 168, 174, 251, 252",
  "why": "Hier hat die Polizei recht: Der Fahrer muss Führerschein und Zulassungsbescheinigung Teil I mitführen und auf Verlangen zur Prüfung aushändigen. Nicht dabei: je 10 € (BKat Nr. 168, 174), nicht ausgehändigt: je 10 € (Nr. 251, 252). Aushändigen heißt zur Prüfung, nicht Abgabe; Personalien musst du zusätzlich angeben (§ 111 OWiG).",
  "src": [
   "https://www.gesetze-im-internet.de/fev_2010/__4.html",
   "https://www.gesetze-im-internet.de/fzv_2023/__13.html",
   "https://www.gesetze-im-internet.de/owig_1968/__111.html",
   "https://www.gesetze-im-internet.de/bkatv_2013/BJNR049800013.html",
   "https://www.bmv.de/ikfzapp",
   "https://www.kba.de/DE/Themen/ZentraleRegister/iKfz_App/DFZ/dfz_node.html"
  ],
  "ru": {
   "cop": "Права и техпаспорт, пожалуйста.",
   "say": "Пожалуйста. Передаю оба документа для проверки — § 4 Abs. 2 S. 2 FeV, § 13 Abs. 6 S. 1 FZV. По существу ничего не скажу.",
   "why": "Здесь полиция права: водитель обязан иметь при себе права и техпаспорт (Zulassungsbescheinigung Teil I) и по требованию передать их для проверки. Нет с собой: по 10 € (BKat Nr. 168, 174), не отдал: по 10 € (Nr. 251, 252). Передать — значит для проверки, а не насовсем; личные данные назвать тоже обязательно (§ 111 OWiG)."
  }
 },
 {
  "id": "fahrer-warnausruestung",
  "g": "fahrer",
  "v": "musst",
  "cop": "Zeigen Sie mir bitte Warndreieck, Verbandkasten und Warnweste.",
  "say": "Ich hole die Sachen selbst heraus und gebe sie Ihnen zur Prüfung – § 31b StVZO. Einer Durchsuchung des Fahrzeugs stimme ich nicht zu.",
  "law": "§ 31b Nr. 2, 4, 4a StVZO · BKat Nr. 191",
  "why": "Hier hat die Polizei recht: Der Fahrer muss Warndreieck, Erste-Hilfe-Material und Warnweste auf Verlangen vorzeigen und zur Prüfung aushändigen (Verweigerung: 5 €, BKat Nr. 191). Die Pflicht gilt nur für diese Gegenstände, sie erlaubt keine Durchsuchung des Autos.",
  "src": [
   "https://www.gesetze-im-internet.de/stvzo_2012/__31b.html",
   "https://www.gesetze-im-internet.de/bkatv_2013/BJNR049800013.html"
  ],
  "ru": {
   "cop": "Покажите, пожалуйста, знак аварийной остановки, аптечку и жилет.",
   "say": "Я сам достану эти вещи и дам вам их проверить — § 31b StVZO. На обыск машины не соглашаюсь.",
   "why": "Здесь полиция права: водитель обязан по требованию показать и дать проверить знак аварийной остановки, аптечку и жилет (отказ: 5 €, BKat Nr. 191). Обязанность касается только этих вещей, она не разрешает обыскивать машину."
  }
 },
 {
  "id": "fahrer-aussteigen",
  "g": "fahrer",
  "v": "musst",
  "cop": "Steigen Sie bitte mal aus dem Fahrzeug aus.",
  "say": "Ich steige aus und folge Ihrer Anweisung nach § 36 Abs. 5 StVO. Zur Sache sage ich nichts, freiwilligen Tests stimme ich nicht zu.",
  "law": "§ 36 Abs. 5 S. 1, S. 4 StVO · BKat Nr. 128 · § 34 Abs. 2 PolG BW",
  "why": "Hier hat die Polizei in der Regel recht: Anweisungen im Rahmen der Verkehrskontrolle, auch zur Prüfung der Verkehrstüchtigkeit, sind zu befolgen, z. B. Aussteigen, Motor aus, Licht an. Weigerung: 20 € (BKat Nr. 128). Aussteigen heißt nicht, Fragen zu beantworten oder bei Tests mitzumachen.",
  "src": [
   "https://www.gesetze-im-internet.de/stvo_2013/__36.html",
   "https://www.gesetze-im-internet.de/bkatv_2013/BJNR049800013.html",
   "https://www.landesrecht-bw.de/perma?d=jlr-NNLBW00007D29NN00000000047"
  ],
  "ru": {
   "cop": "Выйдите, пожалуйста, из машины.",
   "say": "Я выхожу и выполняю ваше указание по § 36 Abs. 5 StVO. По существу ничего не говорю, на добровольные тесты не соглашаюсь.",
   "why": "Здесь полиция, как правило, права: указания в рамках дорожной проверки, в том числе для проверки способности водить, нужно выполнять: выйти, заглушить мотор, включить свет. Отказ: 20 € (BKat Nr. 128). Выйти не значит отвечать на вопросы или участвовать в тестах."
  }
 },
 {
  "id": "fahrer-fragen",
  "g": "fahrer",
  "v": "musst_nicht",
  "cop": "Wo kommen Sie her, wo wollen Sie hin? Haben Sie heute was getrunken?",
  "say": "Meine Personalien gebe ich an. Weitere Fragen beantworte ich nicht – dazu bin ich nicht verpflichtet (§ 43 Abs. 1 S. 2 PolG BW, § 136 Abs. 1 S. 2 StPO).",
  "law": "§ 111 Abs. 1, 3 OWiG · § 43 Abs. 1 S. 2, 3, 5, 6 PolG BW · § 136 Abs. 1 S. 2 i.V.m. § 163a Abs. 4 S. 1–2 StPO · § 46 Abs. 1, § 55 OWiG · § 2 Abs. 12 StVG",
  "why": "Pflicht sind nur die Personalien: Name, Geburtsdatum und -ort, Familienstand, Beruf, Wohnort und Anschrift, Staatsangehörigkeit (§ 111 OWiG, Verweigerung bis 1.000 €). Zu Fahrtziel, Alkohol, Drogen oder Medikamenten darfst du schweigen: ohne Verdacht, weil § 43 Abs. 1 PolG BW darüber hinaus nur zur Abwehr einer Gefahr etwa für Leben oder Gesundheit Angaben verlangt (S. 3) und du nichts sagen musst, was dich wegen einer Straftat oder Ordnungswidrigkeit belasten kann (S. 5); als Beschuldigter nach § 136 StPO. Das gilt auch für Nachfragen wie „Wann haben Sie zuletzt konsumiert?“, „Aber früher doch bestimmt?“ oder „Schon mal mit der Polizei zu tun gehabt?“: Jede Zeitangabe räumt Konsum ein, und Tatsachen, die auf nicht nur vorübergehende Eignungsmängel schließen lassen, übermittelt die Polizei der Führerscheinstelle (§ 2 Abs. 12 StVG). Du darfst fragen: „Welche Tat wird mir vorgeworfen?“ (§ 163a Abs. 4 S. 1 StPO).",
  "src": [
   "https://www.gesetze-im-internet.de/owig_1968/__111.html",
   "https://www.gesetze-im-internet.de/owig_1968/__55.html",
   "https://www.gesetze-im-internet.de/owig_1968/__46.html",
   "https://www.gesetze-im-internet.de/stpo/__136.html",
   "https://www.gesetze-im-internet.de/stpo/__163a.html",
   "https://www.landesrecht-bw.de/perma?d=jlr-NNLBW00007D29NN00000000057",
   "https://www.gesetze-im-internet.de/stvg/__2.html"
  ],
  "ru": {
   "cop": "Откуда едете, куда направляетесь? Сегодня что-нибудь пили?",
   "say": "Свои личные данные назову. На другие вопросы не отвечаю — я не обязан (§ 43 Abs. 1 S. 2 PolG BW, § 136 Abs. 1 S. 2 StPO).",
   "why": "Обязательно назвать только личные данные: имя, дату и место рождения, семейное положение, профессию, место жительства и адрес, гражданство (§ 111 OWiG, отказ: до 1 000 €). О том, куда едешь, об алкоголе, наркотиках и лекарствах можешь молчать: без подозрения — потому что § 43 Abs. 1 PolG BW сверх этого требует сведений только для защиты от опасности, например для жизни или здоровья (S. 3), а говорить то, из-за чего тебя могут преследовать за преступление или правонарушение, ты не обязан (S. 5); как подозреваемый — по § 136 StPO. Это касается и вопросов вдогонку: «Когда вы последний раз употребляли?», «Но раньше-то точно?», «Уже имели дело с полицией?»: любое указание времени — признание употребления, а факты, указывающие на не только временные недостатки пригодности к вождению, полиция передаёт в ведомство по водительским правам (§ 2 Abs. 12 StVG). Можно спросить: «В чём меня обвиняют?» (§ 163a Abs. 4 S. 1 StPO)."
  }
 },
 {
  "id": "fahrer-pusten",
  "g": "fahrer",
  "v": "musst_nicht",
  "cop": "Pusten Sie mal kurz hier rein – das müssen Sie machen.",
  "say": "Ist das eine Anordnung? Einem Atemalkoholtest stimme ich nicht zu. Zur aktiven Mitwirkung bin ich nicht verpflichtet – § 81a StPO verlangt nur Dulden.",
  "law": "§ 81a Abs. 1 StPO · § 136 Abs. 1 S. 2, § 136a Abs. 1 S. 3 StPO · § 24a Abs. 1 StVG · OLG Brandenburg (2 B) 53 Ss-OWi 58/13 · BGH 2 StR 232/24 Rn. 32",
  "why": "Pusten, als Vortest oder am beweissicheren Gerät auf der Wache, ist aktive Mitwirkung und kann nicht erzwungen werden (OLG Brandenburg 2013); eine Pflicht zum Pusten nennt kein Gesetz, erzwingbar ist nur das Dulden nach § 81a StPO. Die Selbstbelastungsfreiheit schützt vor aktiver Mitwirkung, nicht vor dem Dulden (BGH 2025). Die Polizei muss nicht auf die Freiwilligkeit hinweisen. Spiegelt sie aber eine Pflicht vor, ist ein Verwertungsverbot möglich – deshalb gehört die Frage „Anordnung?“ auf die Aufnahme.",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__81a.html",
   "https://www.gesetze-im-internet.de/stpo/__136a.html",
   "https://www.gesetze-im-internet.de/stvg/__24a.html",
   "https://www.bundesgerichtshof.de/SharedDocs/Entscheidungen/DE/Strafsenate/2_StS/2024/2_StR_232-24A.pdf?__blob=publicationFile&v=1",
   "https://www.burhoff.de/asp_weitere_beschluesse/inhalte/2214.htm"
  ],
  "ru": {
   "cop": "Дуньте-ка сюда — вы обязаны это сделать.",
   "say": "Это распоряжение? На алкотест (дуть в трубку) не соглашаюсь. Активно участвовать я не обязан — § 81a StPO требует только терпеть.",
   "why": "Дуть в трубку, как предварительный тест или на точном приборе в участке, — это активное участие, заставить нельзя (OLG Brandenburg 2013); обязанности дуть нет ни в одном законе, заставить можно только терпеть меры по § 81a StPO. Право не свидетельствовать против себя защищает от активного участия, но не от обязанности терпеть меры (BGH 2025). Полиция не обязана говорить, что тест добровольный. Но если она выдаёт его за обязанность, результат могут не допустить как доказательство — поэтому вопрос «Это распоряжение?» должен попасть на запись."
  }
 },
 {
  "id": "fahrer-drogenvortest",
  "g": "fahrer",
  "v": "musst_nicht",
  "cop": "Machen Sie mal einen Urintest oder Wischtest. Und folgen Sie meinem Finger mit den Augen.",
  "say": "Urin-, Speichel- und Koordinationstests mache ich nicht mit. Zur aktiven Mitwirkung bin ich nicht verpflichtet; eine Anordnung nach § 81a StPO dulde ich.",
  "law": "§ 81a Abs. 1 S. 1–2, Abs. 2 StPO · § 46 Abs. 4 OWiG · § 24a Abs. 1a, 2 StVG · § 316 StGB · BGH 2 StR 232/24 Rn. 32",
  "why": "Urin abgeben, Speichel liefern, Finger-Nase, auf einer Linie gehen, dem Licht folgen: alles aktive Mitwirkung und damit freiwillig. Dulden musst du nur eine angeordnete körperliche Untersuchung oder Blutentnahme nach § 81a StPO. Die Polizei hat recht, wenn sie bei Verdacht nach § 24a Abs. 1a oder 2 StVG oder § 316 StGB eine Blutprobe anordnet. Wer mitmacht, liefert oft erst die Tatsachen dafür: Unsicherheit bei einer Übung oder ein positiver Vortest, auch ein falsch-positiver. Hinsehen und Beobachtungen notieren darf die Polizei (siehe Antwort „Ihre Pupillen sind geweitet …“).",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__81a.html",
   "https://www.gesetze-im-internet.de/owig_1968/__46.html",
   "https://www.gesetze-im-internet.de/stvg/__24a.html",
   "https://www.gesetze-im-internet.de/stgb/__316.html",
   "https://www.bundesgerichtshof.de/SharedDocs/Entscheidungen/DE/Strafsenate/2_StS/2024/2_StR_232-24A.pdf?__blob=publicationFile&v=1"
  ],
  "ru": {
   "cop": "Сдайте тест мочи или мазок. И следите глазами за моим пальцем.",
   "say": "В тестах мочи, слюны и на координацию не участвую. Активно участвовать я не обязан; распоряжение по § 81a StPO я стерплю.",
   "why": "Сдать мочу или слюну, «палец к носу», пройти по линии, следить за светом — всё это активное участие, значит добровольно. Терпеть нужно только назначенное телесное обследование или взятие крови по § 81a StPO. Полиция права, если при подозрении по § 24a Abs. 1a или 2 StVG или по § 316 StGB назначает анализ крови. Кто участвует, часто сам и даёт для этого факты: неуверенность при упражнении или положительный предварительный тест, даже ложноположительный. Смотреть на тебя и записывать наблюдения полиция вправе (см. ответ «У вас расширены зрачки…»)."
  }
 },
 {
  "id": "fahrer-verdacht-anzeichen",
  "g": "fahrer",
  "v": "kommt_drauf_an",
  "cop": "Ihre Pupillen sind geweitet, Sie wirken nervös und Ihre Lippen sind trocken. Da stimmt doch was nicht.",
  "say": "Dazu sage ich nichts. Freiwilligen Tests stimme ich nicht zu. Eine Anordnung nach § 81a StPO dulde ich ohne Widerstand.",
  "law": "§ 81a Abs. 1, Abs. 2 S. 2 StPO · § 46 Abs. 4 S. 2 Nr. 1 OWiG · § 136 Abs. 1 S. 2 StPO · § 24a Abs. 1a, 2, 4, § 24c, § 2 Abs. 12 StVG · § 316 StGB",
  "why": "Pupillen, Nervosität, Zittern, gerötete Augen oder trockene Lippen notiert die Polizei als Anzeichen – dich ansehen und das aufschreiben darf sie. Begründen bestimmte Tatsachen den Verdacht einer Fahrt unter Alkohol oder Drogen (§ 316 StGB, § 24a StVG), darf sie die Blutentnahme ohne Richter anordnen (§ 81a Abs. 2 S. 2 StPO; bei § 24a, § 24c StVG über § 46 Abs. 4 OWiG). Dann hat sie recht: mitkommen und dulden. Ob die Anzeichen gereicht haben, prüft später das Gericht, nicht die Diskussion am Straßenrand. Freiwillig bleiben Pusten, Urin, Speichel und alle Übungen; Unsicherheit dabei kann selbst zum Anzeichen werden. Erkläre nichts („nur müde“, „nehme Tabletten“, „letzte Woche gekifft“): Jede Angabe zum Konsum kann den Verdacht erst begründen, und Tatsachen, die auf nicht nur vorübergehende Eignungsmängel schließen lassen, übermittelt die Polizei der Führerscheinstelle (§ 2 Abs. 12 StVG). Verschriebene Medikamente: Rezept dabeihaben, erklären erst bei der Blutprobe oder über den Anwalt (Ausnahme § 24a Abs. 4 StVG; sie hilft nicht, wenn du tatsächlich nicht sicher fahren konntest, § 316 StGB). Ausnahme Gesundheit: Geht es dir akut schlecht (z. B. Unterzucker, Anfall), sag das sofort und bitte um einen Arzt.",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__81a.html",
   "https://www.gesetze-im-internet.de/owig_1968/__46.html",
   "https://www.gesetze-im-internet.de/stpo/__136.html",
   "https://www.gesetze-im-internet.de/stvg/__24a.html",
   "https://www.gesetze-im-internet.de/stvg/__24c.html",
   "https://www.gesetze-im-internet.de/stvg/__2.html",
   "https://www.gesetze-im-internet.de/stgb/__316.html"
  ],
  "ru": {
   "cop": "У вас расширены зрачки, вы нервничаете и губы сухие. Что-то тут не так.",
   "say": "Об этом ничего не скажу. На добровольные тесты не соглашаюсь. Распоряжение по § 81a StPO стерплю, сопротивляться не буду.",
   "why": "Зрачки, нервозность, дрожь, красные глаза или сухие губы полиция записывает как признаки — смотреть на тебя и записывать это она вправе. Если конкретные факты дают подозрение, что ты ехал под алкоголем или наркотиками (§ 316 StGB, § 24a StVG), она может назначить взятие крови без судьи (§ 81a Abs. 2 S. 2 StPO; при § 24a, § 24c StVG — через § 46 Abs. 4 OWiG). Тогда полиция права: поехать с ней и терпеть. Хватило ли признаков, потом проверяет суд, а не спор на обочине. Добровольными остаются трубка, моча, слюна и все упражнения; неуверенность при них сама может стать признаком. Ничего не объясняй («просто устал», «пью таблетки», «курил травку на прошлой неделе»): любые слова об употреблении могут как раз и создать подозрение, а факты, указывающие на не только временные недостатки пригодности к вождению, полиция передаёт в ведомство по водительским правам (§ 2 Abs. 12 StVG). Лекарства по рецепту: носи рецепт с собой, объясняй только при взятии крови или через адвоката (исключение § 24a Abs. 4 StVG не поможет, если ты на самом деле не мог безопасно вести машину, § 316 StGB). Исключение — здоровье: если тебе сейчас плохо (например, низкий сахар, приступ), скажи сразу и попроси врача."
  }
 },
 {
  "id": "fahrer-blut",
  "g": "fahrer",
  "v": "kommt_drauf_an",
  "cop": "Wenn Sie nicht pusten, nehmen wir eben Blut. Kommen Sie mit auf die Wache.",
  "say": "Ich stimme nicht zu, leiste aber keinen Widerstand. Bitte vermerken Sie, wer die Blutentnahme nach § 81a StPO angeordnet hat und auf welche Tatsachen.",
  "law": "§ 81a Abs. 1 S. 2, Abs. 2 S. 1–2 StPO · § 46 Abs. 4 S. 1–2 OWiG · § 316, § 315c StGB · § 113 StGB · § 24a Abs. 1, 1a, § 24c Abs. 1 StVG · § 1 Abs. 3 StVG · § 13 S. 1 Nr. 2 Buchst. c, § 46 Abs. 3 FeV · OLG Karlsruhe, Beschl. v. 14.07.2020 – 2 Rv 35 Ss 175/20 · OLG Hamm 1 ORs 70/24 · § 69 Abs. 2 Nr. 2 StGB",
  "why": "Begründen bestimmte Tatsachen den Verdacht einer Trunkenheits- oder Rauschfahrt (§ 316, § 315c Abs. 1 Nr. 1a StGB) oder einer Tat nach § 24a/§ 24c StVG, darf die Polizei die Blutentnahme ohne Richter anordnen; ein Arzt nimmt sie ab, du musst sie dulden – dann hat die Polizei recht. Ohne solchen Verdacht gibt es keine Blutentnahme; bei anderen Taten ordnet grundsätzlich der Richter an (§ 81a Abs. 2 S. 1 StPO). Auf dem Fahrrad, auch dem Pedelec bis 25 km/h, gelten § 24a und § 24c StVG nicht, sie betreffen nur Kraftfahrzeuge (§ 1 Abs. 3 StVG). Auf dem Rad ist Fahren nach der Rechtsprechung schon unter 1,6 ‰ strafbar, wenn du wegen Alkohol Fahrfehler machst oder Ausfallerscheinungen zeigst, ab 1,6 ‰ immer (§ 316 StGB; OLG Karlsruhe 2 Rv 35 Ss 175/20). Ab 1,6 ‰ auf dem Rad verlangt die Fahrerlaubnisbehörde eine MPU (§ 13 S. 1 Nr. 2 Buchst. c, § 46 Abs. 3 FeV) – das kann den Autoführerschein kosten. E-Scooter sind Kraftfahrzeuge: ab 0,5 ‰ oder 3,5 ng/ml THC Bußgeld, unter 21 oder in der Probezeit 0,0 (§ 24a Abs. 1, 1a, § 24c Abs. 1 StVG). Mit alkoholbedingten Fahrfehlern ist Fahren schon unter 1,1 ‰ strafbar, ab 1,1 ‰ immer (§ 316 StGB; OLG Hamm 1 ORs 70/24, der BGH hat das offengelassen). Dann wird meist auch die Fahrerlaubnis entzogen, also auch der Autoführerschein (§ 69 Abs. 2 Nr. 2 StGB). Das Pusten abzulehnen ist dein Recht.",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__81a.html",
   "https://www.gesetze-im-internet.de/owig_1968/__46.html",
   "https://www.gesetze-im-internet.de/stgb/__316.html",
   "https://www.gesetze-im-internet.de/stgb/__315c.html",
   "https://www.gesetze-im-internet.de/stgb/__113.html",
   "https://www.gesetze-im-internet.de/stvg/__24a.html",
   "https://www.gesetze-im-internet.de/stvg/__24c.html",
   "https://www.gesetze-im-internet.de/stvg/__1.html",
   "https://www.gesetze-im-internet.de/fev_2010/__13.html",
   "https://www.gesetze-im-internet.de/fev_2010/__46.html",
   "https://nrwe.justiz.nrw.de/olgs/hamm/j2025/1_ORs_70_24_Urteil_20250108.html",
   "https://www.burhoff.de/asp_weitere_beschluesse/inhalte/5733.htm",
   "https://www.gesetze-im-internet.de/stgb/__69.html"
  ],
  "ru": {
   "cop": "Раз не дуете — возьмём кровь. Едем в участок.",
   "say": "Я не соглашаюсь, но сопротивляться не буду. Прошу записать, кто назначил взятие крови по § 81a StPO и на каких фактах основано решение.",
   "why": "Если конкретные факты дают подозрение в езде в нетрезвом виде или под воздействием веществ (§ 316, § 315c Abs. 1 Nr. 1a StGB) или в нарушении по § 24a/§ 24c StVG, полиция может назначить взятие крови без судьи; кровь берёт врач, ты обязан это терпеть — тогда полиция права. Без такого подозрения кровь не берут; при других деяниях решение, как правило, принимает судья (§ 81a Abs. 2 S. 1 StPO). На велосипеде, в том числе на педелеке до 25 км/ч, § 24a и § 24c StVG не действуют: они касаются только механических транспортных средств (Kraftfahrzeuge), а педелек до 25 км/ч по закону к ним не относится (§ 1 Abs. 3 StVG). На велосипеде езда по судебной практике наказуема уже ниже 1,6 ‰, если из-за алкоголя есть ошибки вождения или явные признаки опьянения, а с 1,6 ‰ — всегда (§ 316 StGB; OLG Karlsruhe 2 Rv 35 Ss 175/20). С 1,6 ‰ на велосипеде ведомство по водительским правам требует MPU (медико-психологическую экспертизу, § 13 S. 1 Nr. 2 Buchst. c, § 46 Abs. 3 FeV) — так можно лишиться и автомобильных прав. Электросамокат по закону — механическое транспортное средство (Kraftfahrzeug): с 0,5 ‰ или 3,5 нг/мл THC — штраф, до 21 года или на испытательном сроке — 0,0 (§ 24a Abs. 1, 1a, § 24c Abs. 1 StVG). При ошибках вождения из-за алкоголя езда наказуема уже ниже 1,1 ‰, с 1,1 ‰ — всегда (§ 316 StGB; OLG Hamm 1 ORs 70/24, BGH этот вопрос не решил). Тогда обычно лишают и водительских прав, в том числе на автомобиль (§ 69 Abs. 2 Nr. 2 StGB). Отказаться дуть — твоё право."
  }
 },
 {
  "id": "fahrer-kofferraum",
  "g": "fahrer",
  "v": "kommt_drauf_an",
  "cop": "Machen Sie mal den Kofferraum auf, wir schauen uns das Auto an.",
  "say": "Geht es um Warndreieck, Verbandkasten, Warnweste oder die Ladung? Das zeige ich selbst. Einer Durchsuchung stimme ich nicht zu – auf welcher Grundlage, § 102 StPO oder § 35 PolG BW? Ich leiste keinen Widerstand.",
  "law": "§ 102, § 105 Abs. 1 S. 1, § 107 StPO · § 35 Nr. 1, 3, 5, 7, 9 i.V.m. § 34 Abs. 2, § 27 Abs. 1 Nr. 3, 5, 6 PolG BW · § 27 Abs. 2 S. 3 PolG BW · § 36 Abs. 5 S. 1, 4 StVO · § 22 Abs. 1, § 23 Abs. 1 S. 2 StVO · § 31b StVZO",
  "why": "Die Verkehrskontrolle (§ 36 Abs. 5 StVO) erlaubt Anhalten und Anweisungen, keine Durchsuchung. Nennt die Polizei die Ladung als Zweck, kann das eine Anweisung zur Verkehrskontrolle sein (§ 36 Abs. 5 S. 1, 4 StVO; Sicherungspflicht: § 22 Abs. 1, § 23 Abs. 1 S. 2 StVO): Ladung zeigen, nichts auspacken. Warndreieck, Verbandkasten und Warnweste musst du vorzeigen und zur Prüfung aushändigen (§ 31b StVZO): selbst herausnehmen, Kofferraum wieder schließen. Was die Polizei dabei offen sieht, kann einen Verdacht begründen. Taschen öffnen, Sachen herausnehmen oder Verkleidungen abbauen ist Durchsuchung. Erlaubt ist sie bei Verdacht einer Straftat (§ 102 StPO; Anordnung durch den Richter, bei Gefahr im Verzug auch durch die Polizei, § 105 Abs. 1) oder nach § 35 PolG BW, unter anderem: Tatsachen deuten auf sicherstellbare Sachen hin (Nr. 3), gefährlicher Ort (Nr. 5), Kontrollstelle oder Kontrollbereich (Nr. 7 i. V. m. § 27 Abs. 1 Nr. 5, 6), Kennzeichen zur gezielten Kontrolle ausgeschrieben (Nr. 9). Die Schleierfahndung auf Autobahn und Durchgangsstraßen (§ 27 Abs. 1 Nr. 7 b) nennt § 35 nicht; allein deswegen dürfen du und deine mitgeführten Sachen durchsucht werden, wenn sich deine Identität anders nicht oder nur schwer feststellen lässt (§ 27 Abs. 2 S. 3 PolG BW). Soll deine Identität festgestellt werden, dürfen du und deine mitgeführten Sachen außerdem nach Waffen durchsucht werden, wenn das nach den Umständen zum Schutz der Beamten erforderlich erscheint (§ 34 Abs. 2, § 35 Nr. 1 PolG BW). Liegt eine Grundlage vor, hat die Polizei recht: dulden, nicht helfen.",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__102.html",
   "https://www.gesetze-im-internet.de/stpo/__105.html",
   "https://www.gesetze-im-internet.de/stpo/__107.html",
   "https://www.landesrecht-bw.de/perma?j=PolG_BW_!_35",
   "https://www.landesrecht-bw.de/perma?j=PolG_BW_!_34",
   "https://www.landesrecht-bw.de/perma?j=PolG_BW_!_27",
   "https://www.gesetze-im-internet.de/stvo_2013/__36.html",
   "https://www.gesetze-im-internet.de/stvo_2013/__22.html",
   "https://www.gesetze-im-internet.de/stvo_2013/__23.html",
   "https://www.gesetze-im-internet.de/stvzo_2012/__31b.html"
  ],
  "ru": {
   "cop": "Откройте-ка багажник, мы осмотрим машину.",
   "say": "Речь о знаке аварийной остановки, аптечке, жилете или грузе? Это покажу сам. На обыск не соглашаюсь — на каком основании, § 102 StPO или § 35 PolG BW? Сопротивляться не буду.",
   "why": "Дорожная проверка (§ 36 Abs. 5 StVO) разрешает остановить и давать указания, но не обыскивать. Если полиция называет целью груз, это может быть указанием в рамках дорожной проверки (§ 36 Abs. 5 S. 1, 4 StVO; обязанность закрепить груз: § 22 Abs. 1, § 23 Abs. 1 S. 2 StVO): груз показать, ничего не распаковывать. Знак аварийной остановки, аптечку и жилет нужно показать и дать на проверку (§ 31b StVZO): достань сам, потом закрой багажник. То, что полиция при этом видит открыто, может дать основание для подозрения. Открывать сумки, вынимать вещи или снимать обшивку — это уже обыск. Он допустим при подозрении в преступлении (§ 102 StPO; назначает судья, при срочности и полиция, § 105 Abs. 1) или по § 35 PolG BW, в том числе: факты указывают на вещи, которые можно изъять (Nr. 3), «опасное место» (Nr. 5), контрольный пункт или зона контроля (Nr. 7 вместе с § 27 Abs. 1 Nr. 5, 6), номер машины поставлен на целевой контроль (Nr. 9). Проверку без подозрения на автобанах и транзитных дорогах (Schleierfahndung, § 27 Abs. 1 Nr. 7 b) § 35 не называет; если проверка идёт только по этому основанию, обыскать тебя и твои вещи можно, если твою личность иначе установить нельзя или очень трудно (§ 27 Abs. 2 S. 3 PolG BW). Если устанавливают твою личность, тебя и твои вещи можно также обыскать на оружие, когда по обстоятельствам это нужно для защиты полицейских (§ 34 Abs. 2, § 35 Nr. 1 PolG BW). Если основание есть, полиция права: терпи, но не помогай."
  }
 },
 {
  "id": "fahrer-handy",
  "g": "fahrer",
  "v": "musst_nicht",
  "cop": "Sie hatten das Handy in der Hand. Zeigen Sie mal her und entsperren Sie es.",
  "say": "Zum Vorwurf sage ich nichts. Mein Handy entsperre ich nicht, den Code nenne ich nicht – § 136 Abs. 1 S. 2 StPO. Ich leiste keinen Widerstand.",
  "law": "§ 23 Abs. 1a StVO · BKat Nr. 246.1, 246.4 · FeV Anlage 13 Nr. 3.2.15 · § 136 Abs. 1 S. 2 StPO · § 46 Abs. 1 OWiG · § 94 Abs. 2, § 98 Abs. 2 StPO · § 81b Abs. 1 StPO · § 48 Abs. 3a, § 71 Abs. 4 AufenthG · BGH 2 StR 232/24",
  "why": "Handy am Steuer ist eine Ordnungswidrigkeit (§ 23 Abs. 1a StVO, 100 €, 1 Punkt; auf dem Fahrrad 55 €, kein Punkt). Zeigen, Entsperren oder PIN nennen ist aktive Mitwirkung, dazu bist du nie verpflichtet. Ausnahme: Besitzt du als Ausländer überhaupt keinen gültigen Pass, Passersatz oder sonstigen geeigneten Identitätsnachweis, darf dein Handy ausgelesen werden, wenn das zur Klärung von Identität, Staatsangehörigkeit und Rückführungsmöglichkeit erforderlich ist, und du musst die Zugangsdaten dafür zur Verfügung stellen (§ 48 Abs. 3a AufenthG; zuständig ist auch die Landespolizei, § 71 Abs. 4; für EU-Bürger gilt das grundsätzlich nicht, § 1 Abs. 2 Nr. 1 AufenthG). Die Polizei kann das Gerät als Beweismittel beschlagnahmen (§ 94 Abs. 2, § 98 StPO i.V.m. § 46 OWiG), muss aber verhältnismäßig bleiben. Den Finger zwangsweise auflegen erlaubt der BGH jedenfalls bei richterlich angeordneter Durchsuchung.",
  "src": [
   "https://www.gesetze-im-internet.de/stvo_2013/__23.html",
   "https://www.gesetze-im-internet.de/stpo/__94.html",
   "https://www.gesetze-im-internet.de/stpo/__98.html",
   "https://www.gesetze-im-internet.de/stpo/__81b.html",
   "https://www.gesetze-im-internet.de/owig_1968/__46.html",
   "https://www.gesetze-im-internet.de/aufenthg_2004/__48.html",
   "https://www.gesetze-im-internet.de/aufenthg_2004/__71.html",
   "https://www.bundesgerichtshof.de/SharedDocs/Entscheidungen/DE/Strafsenate/2_StS/2024/2_StR_232-24A.pdf?__blob=publicationFile&v=1",
   "https://www.gesetze-im-internet.de/bkatv_2013/BJNR049800013.html",
   "https://www.gesetze-im-internet.de/fev_2010/anlage_13.html"
  ],
  "ru": {
   "cop": "У вас в руке был телефон. Покажите и разблокируйте его.",
   "say": "По обвинению ничего не скажу. Телефон не разблокирую и код не назову — § 136 Abs. 1 S. 2 StPO. Сопротивляться не буду.",
   "why": "Телефон за рулём — административное нарушение (§ 23 Abs. 1a StVO, 100 €, 1 балл; на велосипеде 55 €, без балла). Показать, разблокировать или назвать PIN — активное участие, это ты никогда не обязан. Исключение: если у тебя как у иностранца вообще нет действующего паспорта, Passersatz или иного подходящего удостоверения личности, данные с твоего телефона могут считать, когда это нужно для установления личности, гражданства и возможности возврата в другую страну, и ты обязан предоставить для этого данные доступа (§ 48 Abs. 3a AufenthG; земельная полиция на это тоже уполномочена, § 71 Abs. 4; к гражданам ЕС это в принципе не относится, § 1 Abs. 2 Nr. 1 AufenthG). Полиция может изъять телефон как доказательство (§ 94 Abs. 2, § 98 StPO вместе с § 46 OWiG), но должна соблюдать соразмерность. Прикладывать твой палец силой BGH разрешил во всяком случае при обыске по решению судьи."
  }
 },
 {
  "id": "fahrer-fuehrerschein",
  "g": "fahrer",
  "v": "kommt_drauf_an",
  "cop": "Ihr Führerschein ist beschlagnahmt, den nehmen wir mit.",
  "say": "Ich widerspreche der Beschlagnahme ausdrücklich nach § 98 Abs. 2 StPO, leiste aber keinen Widerstand. Bitte geben Sie mir eine Bescheinigung.",
  "law": "§ 94 Abs. 3, § 98 Abs. 1 S. 1, Abs. 2 S. 1–2 StPO · § 111a Abs. 1, 3 StPO · § 69 Abs. 2, 3 StGB · § 21 Abs. 2 Nr. 2 StVG",
  "why": "Bei Verdacht auf Trunkenheit (§ 316 StGB), Straßenverkehrsgefährdung (§ 315c) oder Unfallflucht mit erheblichem Schaden wird die Fahrerlaubnis in der Regel entzogen. Dann darf die Polizei den Führerschein bei Gefahr im Verzug beschlagnahmen – hier hat sie recht. Dein ausdrücklicher Widerspruch bewirkt, dass sie binnen 3 Tagen die gerichtliche Bestätigung beantragen soll; du kannst jederzeit selbst das Gericht anrufen.",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__94.html",
   "https://www.gesetze-im-internet.de/stpo/__98.html",
   "https://www.gesetze-im-internet.de/stpo/__111a.html",
   "https://www.gesetze-im-internet.de/stgb/__69.html",
   "https://www.gesetze-im-internet.de/stvg/__21.html"
  ],
  "ru": {
   "cop": "Ваши права изъяты, мы их забираем.",
   "say": "Я прямо возражаю против изъятия по § 98 Abs. 2 StPO, но сопротивляться не буду. Прошу выдать мне справку.",
   "why": "При подозрении в езде в нетрезвом виде (§ 316 StGB), создании опасности (§ 315c) или бегстве с места ДТП со значительным ущербом права, как правило, отнимают. Тогда полиция при срочности может изъять удостоверение — здесь она права. Твоё прямое возражение означает, что полиция должна в течение 3 дней запросить подтверждение суда; ты сам тоже можешь в любой момент обратиться в суд."
  }
 },
 {
  "id": "fahrer-unterschrift",
  "g": "fahrer",
  "v": "musst_nicht",
  "cop": "Unterschreiben Sie hier bitte noch.",
  "say": "Ich unterschreibe nichts und mache keine Angaben zur Sache – § 136 Abs. 1 S. 2 StPO. Eine Kopie nehme ich gern.",
  "law": "§ 136 Abs. 1 S. 2, § 163a Abs. 4 S. 2 StPO · § 46 Abs. 1, § 55 OWiG · § 111 OWiG",
  "why": "Keine Vorschrift verpflichtet dich, Anhörungsbogen, Protokoll, „freiwillige Herausgabe“ oder Test-Einwilligung zu unterschreiben; die Polizei fertigt ihr Protokoll auch ohne. Eine Unterschrift kann als Zustimmung oder Geständnis gelesen werden. Recht hat die Polizei nur bei den Personalien: Die musst du angeben, aber nicht unterschreiben.",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__136.html",
   "https://www.gesetze-im-internet.de/stpo/__163a.html",
   "https://www.gesetze-im-internet.de/owig_1968/__55.html",
   "https://www.gesetze-im-internet.de/owig_1968/__111.html",
   "https://www.gesetze-im-internet.de/stpo/__132.html"
  ],
  "ru": {
   "cop": "Подпишите вот здесь, пожалуйста.",
   "say": "Я ничего не подписываю и по существу ничего не говорю — § 136 Abs. 1 S. 2 StPO. От копии не откажусь.",
   "why": "Никакая норма не обязывает подписывать анкету-опрос, протокол, «добровольную выдачу» или согласие на тест; полиция составит протокол и без подписи. Подпись могут прочитать как согласие или признание. Полиция права только насчёт личных данных: их нужно назвать, но подписывать не обязательно."
  }
 },
 {
  "id": "fahrer-verwarnungsgeld",
  "g": "fahrer",
  "v": "musst_nicht",
  "cop": "Das macht 35 Euro Verwarnungsgeld. Zahlen Sie das gleich hier?",
  "say": "Mit dem Verwarnungsgeld bin ich nicht einverstanden (§ 56 Abs. 2 OWiG). Zur Sache äußere ich mich gegebenenfalls später schriftlich.",
  "law": "§ 56 Abs. 1–4, § 57 Abs. 2 OWiG · § 107 Abs. 1, 3 OWiG",
  "why": "Eine Verwarnung mit Verwarnungsgeld (5–55 €) wird nur wirksam, wenn du nach Belehrung einverstanden bist und sofort oder binnen einer Woche zahlst; dann ist die Sache ohne Kosten erledigt. Lehnst du ab, folgt in der Regel ein Bußgeldverfahren; ein Bußgeldbescheid kostet mindestens 25 € Gebühr plus Auslagen (§ 107 OWiG). Ablehnen lohnt nur, wenn du den Vorwurf bestreitest.",
  "src": [
   "https://www.gesetze-im-internet.de/owig_1968/__56.html",
   "https://www.gesetze-im-internet.de/owig_1968/__57.html",
   "https://www.gesetze-im-internet.de/owig_1968/__107.html"
  ],
  "ru": {
   "cop": "Это 35 евро предупредительного штрафа. Заплатите прямо здесь?",
   "say": "С предупредительным штрафом не согласен (§ 56 Abs. 2 OWiG). По существу, если понадобится, выскажусь позже письменно.",
   "why": "Предупреждение со штрафом (5–55 €) действует, только если после разъяснения ты согласен и платишь сразу или в течение недели; тогда дело закрыто без издержек. Откажешься — как правило, начнётся процедура штрафа; постановление о штрафе (Bußgeldbescheid) стоит минимум 25 € пошлины плюс расходы (§ 107 OWiG). Отказываться стоит, только если ты оспариваешь обвинение."
  }
 },
 {
  "id": "fahrer-vorwurf-bestreiten",
  "g": "fahrer",
  "v": "musst_nicht",
  "cop": "Sie waren nicht angeschnallt – wir haben es beide gesehen.",
  "say": "Zum Vorwurf mache ich keine Angaben (§ 136 Abs. 1 S. 2 StPO, § 46 Abs. 1 OWiG).",
  "law": "§ 136 Abs. 1 S. 2 StPO · § 46 Abs. 1, § 55 Abs. 1, § 56 Abs. 1–4 OWiG · § 49 Abs. 1, § 67 Abs. 1, § 107 Abs. 1, 3 OWiG · § 111 OWiG · § 21a Abs. 1, § 23 Abs. 1a StVO · BKat Nr. 100, 246.1",
  "why": "Streiten am Straßenrand hilft nicht: Die Beamten sagen später als Zeugen aus, und jede Erklärung („Den Gurt hatte ich nur kurz ab“) kann als Geständnis gelten. Zur Sache darfst du schweigen (§ 136 Abs. 1 S. 2 StPO i. V. m. § 46 Abs. 1 OWiG), Personalien bleiben Pflicht (§ 111 OWiG). Ein Verwarnungsgeld (5–55 €, etwa 30 € ohne Gurt, BKat Nr. 100) wird nur wirksam, wenn du einverstanden bist und zahlst; dann ist die Sache unter diesem Vorwurf erledigt, Kosten fallen keine an (§ 56 Abs. 2–4 OWiG). Lehne nur ab, wenn du den Vorwurf wirklich bestreitest; sonst ist Zahlen am günstigsten. Handy am Steuer (100 €, BKat Nr. 246.1) liegt über 55 €, dafür gibt es gleich ein Bußgeldverfahren. Meist kommt später ein Anhörungsbogen: Angaben zur Person sind Pflicht, zur Sache nicht – es genügt, dass du Gelegenheit zur Äußerung bekommst (§ 55 Abs. 1 OWiG). Akteneinsicht, etwa ins Messprotokoll, gibt es auf Antrag (§ 49 Abs. 1 OWiG); gegen einen Bußgeldbescheid Einspruch binnen zwei Wochen ab Zustellung (§ 67 Abs. 1 OWiG). Ehrlich: Hält der Vorwurf, wird es teurer – ein Bußgeldbescheid kostet mindestens 25 € Gebühr plus Auslagen (§ 107 Abs. 1, 3 OWiG). Direkt danach Zeit, Ort und Zeugen notieren.",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__136.html",
   "https://www.gesetze-im-internet.de/owig_1968/__46.html",
   "https://www.gesetze-im-internet.de/owig_1968/__55.html",
   "https://www.gesetze-im-internet.de/owig_1968/__56.html",
   "https://www.gesetze-im-internet.de/owig_1968/__49.html",
   "https://www.gesetze-im-internet.de/owig_1968/__67.html",
   "https://www.gesetze-im-internet.de/owig_1968/__107.html",
   "https://www.gesetze-im-internet.de/owig_1968/__111.html",
   "https://www.gesetze-im-internet.de/stvo_2013/__21a.html",
   "https://www.gesetze-im-internet.de/stvo_2013/__23.html",
   "https://www.gesetze-im-internet.de/bkatv_2013/BJNR049800013.html"
  ],
  "ru": {
   "cop": "Вы были не пристёгнуты — мы оба это видели.",
   "say": "По обвинению ничего не скажу (§ 136 Abs. 1 S. 2 StPO, § 46 Abs. 1 OWiG).",
   "why": "Спорить на обочине бесполезно: полицейские потом дают показания как свидетели, а любое объяснение («я отстегнулся всего на минуту») могут счесть признанием. По существу можешь молчать (§ 136 Abs. 1 S. 2 StPO вместе с § 46 Abs. 1 OWiG), личные данные назвать обязательно (§ 111 OWiG). Предупредительный штраф (5–55 €, например 30 € за непристёгнутый ремень, BKat Nr. 100) действует, только если ты согласен и платишь; тогда дело по этому обвинению закрыто, издержек нет (§ 56 Abs. 2–4 OWiG). Отказывайся, только если действительно оспариваешь обвинение; иначе заплатить дешевле всего. Телефон за рулём (100 €, BKat Nr. 246.1) дороже 55 €, там сразу начинается процедура штрафа. Обычно потом приходит анкета (Anhörungsbogen): личные данные — обязательно, по существу — нет; достаточно, что тебе дали возможность высказаться (§ 55 Abs. 1 OWiG). Ознакомиться с делом, например с протоколом измерения, можно по заявлению (§ 49 Abs. 1 OWiG); на постановление о штрафе (Bußgeldbescheid) — возражение в течение двух недель после вручения (§ 67 Abs. 1 OWiG). Честно: если обвинение подтвердится, выйдет дороже — постановление о штрафе стоит минимум 25 € пошлины плюс расходы (§ 107 Abs. 1, 3 OWiG). Сразу после проверки запиши время, место и свидетелей."
  }
 },
 {
  "id": "fahrer-halter",
  "g": "fahrer",
  "v": "musst_nicht",
  "cop": "Das ist doch Ihr Auto. Sagen Sie mir, wer gefahren ist.",
  "say": "Wer gefahren ist, sage ich hier nicht. Dazu bin ich nicht verpflichtet – §§ 52, 55, 136, 163 Abs. 3 StPO i.V.m. § 46 OWiG.",
  "law": "§ 52 Abs. 1, § 55 Abs. 1, § 136 Abs. 1 S. 2, § 163 Abs. 3 StPO · § 46 Abs. 1, 2 OWiG · § 31a StVZO · § 4c Abs. 1, § 23 Abs. 2 StVG",
  "why": "Dich selbst musst du nicht belasten (§ 136, § 55 StPO), Angehörige auch nicht: Ehegatte, eingetragener Lebenspartner, Verlobte, Eltern, Kinder, Geschwister und weitere nahe Verwandte (§ 52 Abs. 1 StPO), nicht aber ein Lebensgefährte ohne Trauschein. Als Zeuge musst du bei der Polizei nur aussagen, wenn der Ladung ein Auftrag der Staatsanwaltschaft zugrunde liegt (§ 163 Abs. 3 StPO), im Bußgeldverfahren sinngemäß der Bußgeldbehörde (§ 46 Abs. 2 OWiG). Recht hat die Polizei bei den Personalien: Die bleiben Pflicht.",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__52.html",
   "https://www.gesetze-im-internet.de/stpo/__55.html",
   "https://www.gesetze-im-internet.de/stpo/__163.html",
   "https://www.gesetze-im-internet.de/owig_1968/__46.html",
   "https://www.gesetze-im-internet.de/stvzo_2012/__31a.html",
   "https://www.gesetze-im-internet.de/stvg/__4c.html",
   "https://www.gesetze-im-internet.de/stvg/__23.html",
   "https://nrwe.justiz.nrw.de/ovgs/ovg_nrw/j2020/8_E_785_20_Beschluss_20201012.html"
  ],
  "ru": {
   "cop": "Это ведь ваша машина. Скажите, кто был за рулём.",
   "say": "Кто был за рулём, здесь не скажу. Я не обязан — §§ 52, 55, 136, 163 Abs. 3 StPO в связи с § 46 OWiG.",
   "why": "Свидетельствовать против себя не обязан (§ 136, § 55 StPO), против родственников тоже: супруга, зарегистрированного партнёра, жениха или невесты, родителей, детей, братьев и сестёр и других близких родственников (§ 52 Abs. 1 StPO) — но не против сожителя без брака. Свидетелем в полиции нужно давать показания, только если вызов назначила прокуратура (§ 163 Abs. 3 StPO), а в деле о штрафе — ведомство по штрафам (§ 46 Abs. 2 OWiG). Полиция права насчёт личных данных: их называть обязательно."
  }
 },
 {
  "id": "fahrer-wissen-sie-warum",
  "g": "fahrer",
  "v": "musst_nicht",
  "cop": "Wissen Sie, warum wir Sie angehalten haben?",
  "say": "Bitte sagen Sie es mir. Wird mir etwas vorgeworfen, nennen Sie bitte die Tat (§ 163a Abs. 4 S. 1 StPO). Zur Sache sage ich nichts.",
  "law": "§ 163a Abs. 4 S. 1, 2 StPO · § 136 Abs. 1 S. 1, 2 StPO · § 46 Abs. 1, § 55 Abs. 1 OWiG · § 36 Abs. 5 S. 1 StVO",
  "why": "Die Frage lädt dazu ein, selbst einen Verstoß zu nennen („Ich war wohl zu schnell“) – das wäre ein Geständnis. Raten musst du nicht: Dem Beschuldigten ist bei der Vernehmung zu eröffnen, welche Tat ihm zur Last gelegt wird, und er darf schweigen (§ 163a Abs. 4 S. 1, 2 i. V. m. § 136 Abs. 1 S. 2 StPO). Im Bußgeldverfahren gilt das sinngemäß (§ 46 Abs. 1 OWiG); dort genügt es, dir Gelegenheit zur Äußerung zu geben (§ 55 Abs. 1 OWiG). Recht hat der Beamte bei einer allgemeinen Verkehrskontrolle: Sie braucht keinen Anlass (§ 36 Abs. 5 S. 1 StVO). Personalien bleiben Pflicht, im Auto oder auf dem Motorrad auch die Papiere.",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__163a.html",
   "https://www.gesetze-im-internet.de/stpo/__136.html",
   "https://www.gesetze-im-internet.de/owig_1968/__46.html",
   "https://www.gesetze-im-internet.de/owig_1968/__55.html",
   "https://www.gesetze-im-internet.de/stvo_2013/__36.html"
  ],
  "ru": {
   "cop": "Знаете, почему мы вас остановили?",
   "say": "Скажите мне, пожалуйста. Если меня в чём-то обвиняют, назовите, пожалуйста, деяние (§ 163a Abs. 4 S. 1 StPO). По существу ничего не скажу.",
   "why": "Этот вопрос подталкивает самому назвать нарушение («Наверное, я превысил скорость») — это было бы признанием. Гадать не нужно: подозреваемому при допросе обязаны сообщить, в каком деянии его обвиняют, и он вправе молчать (§ 163a Abs. 4 S. 1, 2 вместе с § 136 Abs. 1 S. 2 StPO). В деле об административном нарушении это действует соответственно (§ 46 Abs. 1 OWiG); там достаточно дать тебе возможность высказаться (§ 55 Abs. 1 OWiG). Полицейский прав при общей дорожной проверке: для неё повод не нужен (§ 36 Abs. 5 S. 1 StVO). Назвать личные данные обязательно, а в машине или на мотоцикле — и показать документы."
  }
 },
 {
  "id": "fahrer-handy-weg-haende",
  "g": "fahrer",
  "v": "musst",
  "cop": "Legen Sie das Handy weg! Hände ans Lenkrad, dass ich sie sehen kann!",
  "say": "Mache ich. Das Handy kommt in die Halterung und nimmt offen weiter auf. Meine Hände bleiben sichtbar – § 36 Abs. 5 StVO.",
  "law": "§ 36 Abs. 5 S. 4 StVO · BKat Nr. 128 (Anlage BKatV) · § 23 Abs. 1a, 1b S. 1 Nr. 1 StVO",
  "why": "Anweisungen der Polizei bei der Verkehrskontrolle sind zu befolgen (§ 36 Abs. 5 S. 4 StVO; Weigerung 20 €, BKat Nr. 128). Sichtbare Hände dienen der Eigensicherung, ein Gegenstand in der Hand wirkt im Dunkeln bedrohlich – hier hat der Beamte recht. Filmen verbietet diese Anweisung nicht: Wer das Handy in die Halterung stellt oder aufs Armaturenbrett legt, hat sie befolgt. Mit laufendem Motor darfst du das Handy ohnehin nicht in der Hand halten (§ 23 Abs. 1a, 1b S. 1 Nr. 1 StVO). Ein ausdrückliches Filmverbot ist ein anderer Fall (siehe aufnahme-filmen-stoppen).",
  "src": [
   "https://www.gesetze-im-internet.de/stvo_2013/__36.html",
   "https://www.gesetze-im-internet.de/stvo_2013/__23.html",
   "https://www.gesetze-im-internet.de/bkatv_2013/BJNR049800013.html"
  ],
  "ru": {
   "cop": "Уберите телефон! Руки на руль, чтобы я их видел!",
   "say": "Выполняю. Телефон ставлю в держатель, он открыто продолжает снимать. Руки остаются на виду — § 36 Abs. 5 StVO.",
   "why": "Указания полиции при дорожной проверке нужно выполнять (§ 36 Abs. 5 S. 4 StVO; отказ — 20 €, BKat Nr. 128). Руки на виду нужны для безопасности полицейских, предмет в руке в темноте выглядит угрожающе — здесь полицейский прав. Снимать это указание не запрещает: поставив телефон в держатель или положив на приборную панель, ты его выполнил. При работающем двигателе держать телефон в руке и так нельзя (§ 23 Abs. 1a, 1b S. 1 Nr. 1 StVO). Прямой запрет съёмки — другой случай (см. aufnahme-filmen-stoppen)."
  }
 },
 {
  "id": "fahrer-schluessel-weiterfahrt",
  "g": "fahrer",
  "v": "kommt_drauf_an",
  "cop": "Sie fahren heute nicht mehr weiter. Geben Sie mir den Autoschlüssel.",
  "say": "Ich fahre nicht weiter und gebe den Schlüssel heraus, widerspreche aber. Darf ein nüchterner Fahrer mit Führerschein übernehmen? Bitte Grund und Bescheinigung nach § 38 Abs. 3 PolG BW.",
  "law": "§§ 1, 3, § 38 Abs. 1 Nr. 1, Abs. 3, 4 PolG BW · § 21 Abs. 1 Nr. 2, Abs. 2 Nr. 2 StVG · § 94 StPO · § 4 Abs. 1, 2 FeV · § 24a, § 24c StVG · § 316 StGB · § 113 StGB",
  "why": "Besteht der Verdacht, dass du nicht fahrtüchtig bist (Alkohol, Drogen), darf die Polizei die Weiterfahrt untersagen (§§ 1, 3 PolG BW) und zur Abwehr einer unmittelbar bevorstehenden Störung den Schlüssel beschlagnahmen (§ 38 Abs. 1 Nr. 1 PolG BW) – dann hat sie recht. Grund und Rechtsbehelf sind unverzüglich zu nennen, auf Verlangen gibt es eine Bescheinigung (§ 38 Abs. 3). Die Beschlagnahme ist aufzuheben, sobald ihr Zweck erreicht ist (§ 38 Abs. 4), etwa wenn du wieder nüchtern bist oder ein fahrtüchtiger Fahrer übernimmt. Übernehmen kann, wer eine Fahrerlaubnis für das Auto hat, den Führerschein dabeihat (§ 4 Abs. 1, 2 FeV) und selbst unter den Grenzen bleibt und fahrtüchtig ist (§ 24a StVG, § 316 StGB); unter 21 oder in der Probezeit gar kein Alkohol und kein Cannabis (§ 24c StVG). Lässt du als Halter jemanden ohne Fahrerlaubnis fahren, machst du dich selbst strafbar (§ 21 Abs. 1 Nr. 2 StVG). Ob der neue Fahrer fahrtüchtig ist, wird die Polizei prüfen wollen; zu Tests ist auch er nicht verpflichtet. Ist der Führerschein nach § 94 StPO sichergestellt oder beschlagnahmt, ist das Fahren eines führerscheinpflichtigen Kraftfahrzeugs eine Straftat (§ 21 Abs. 2 Nr. 2 StVG).",
  "src": [
   "https://www.landesrecht-bw.de/perma?j=PolG_BW_!_3",
   "https://www.landesrecht-bw.de/perma?j=PolG_BW_!_38",
   "https://www.gesetze-im-internet.de/stvg/__21.html",
   "https://www.gesetze-im-internet.de/stpo/__94.html",
   "https://www.gesetze-im-internet.de/fev_2010/__4.html",
   "https://www.gesetze-im-internet.de/stvg/__24a.html",
   "https://www.gesetze-im-internet.de/stvg/__24c.html",
   "https://www.gesetze-im-internet.de/stgb/__316.html",
   "https://www.gesetze-im-internet.de/stgb/__113.html"
  ],
  "ru": {
   "cop": "Сегодня вы дальше не поедете. Отдайте ключ от машины.",
   "say": "Дальше не поеду и отдам ключ, но возражаю. Может ли трезвый водитель с правами сесть за руль? Прошу назвать причину и выдать справку по § 38 Abs. 3 PolG BW.",
   "why": "Если есть подозрение, что ты не способен вести машину (алкоголь, наркотики), полиция может запретить ехать дальше (§§ 1, 3 PolG BW) и для предотвращения непосредственно грозящего нарушения изъять ключ (§ 38 Abs. 1 Nr. 1 PolG BW) — тогда она права. Причину и способ обжалования обязаны сообщить сразу, по требованию выдают справку (§ 38 Abs. 3). Изъятие отменяется, как только цель достигнута (§ 38 Abs. 4), например когда ты протрезвел или за руль садится водитель, способный вести машину. Сесть за руль может тот, у кого есть права на эту машину, они с собой (§ 4 Abs. 1, 2 FeV) и он сам не превышает пределы и способен вести машину (§ 24a StVG, § 316 StGB); до 21 года или на испытательном сроке — ни алкоголя, ни каннабиса (§ 24c StVG). Если ты как владелец разрешаешь ехать человеку без прав, это преступление и с твоей стороны (§ 21 Abs. 1 Nr. 2 StVG). Способен ли новый водитель вести машину, полиция захочет проверить; проходить тесты не обязан и он. Если права изъяты по § 94 StPO, вождение механического транспортного средства (Kraftfahrzeug), для которого нужны права, — преступление (§ 21 Abs. 2 Nr. 2 StVG)."
  }
 },
 {
  "id": "fahrer-auslaendischer-fuehrerschein",
  "g": "fahrer",
  "v": "kommt_drauf_an",
  "cop": "Sie wohnen doch hier. Mit dem russischen Führerschein dürfen Sie nicht mehr fahren – das ist Fahren ohne Fahrerlaubnis.",
  "say": "Meine Personalien nenne ich. Seit wann ich hier wohne, sage ich nicht. Ob mein Führerschein gilt, regelt § 29 Abs. 1 FeV – das klärt mein Anwalt.",
  "law": "§ 29 Abs. 1 S. 4, 5, Abs. 2 S. 2 FeV · § 21 Abs. 1 Nr. 1 StVG · § 136 Abs. 1 S. 2 StPO · § 111 OWiG · Art. 3 Abs. 1, 2 VO (EU) 2022/1280",
  "why": "Eine Fahrerlaubnis aus einem Nicht-EU-Staat berechtigt nach Begründung eines ordentlichen Wohnsitzes in Deutschland nur noch sechs Monate; die Fahrerlaubnisbehörde kann auf Antrag um bis zu sechs Monate verlängern, wenn du glaubhaft machst, dass du nicht länger als zwölf Monate hier wohnen wirst (§ 29 Abs. 1 S. 4, 5 FeV). Nicht deutschsprachige Führerscheine brauchen meist eine Übersetzung (§ 29 Abs. 2 S. 2). Ist die Frist abgelaufen, hat der Beamte recht: Fahren ohne Fahrerlaubnis ist eine Straftat (§ 21 Abs. 1 Nr. 1 StVG). Seit wann du hier wohnst, ist eine Angabe zur Sache – die musst du nicht machen (§ 136 Abs. 1 S. 2 StPO); die Anschrift schon (§ 111 OWiG). Ukrainer mit vorübergehendem Schutz: Der ukrainische Führerschein gilt für die Dauer des Schutzes, ohne Übersetzung (Art. 3 VO (EU) 2022/1280).",
  "src": [
   "https://www.gesetze-im-internet.de/fev_2010/__29.html",
   "https://www.gesetze-im-internet.de/stvg/__21.html",
   "https://www.gesetze-im-internet.de/stpo/__136.html",
   "https://www.gesetze-im-internet.de/owig_1968/__111.html",
   "https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32022R1280"
  ],
  "ru": {
   "cop": "Вы ведь здесь живёте. С российскими правами вам больше нельзя ездить — это езда без прав.",
   "say": "Свои данные назову. С какого времени я здесь живу, не скажу. Действуют ли мои права, определяет § 29 Abs. 1 FeV — это выяснит мой адвокат.",
   "why": "Права из страны вне ЕС после того, как ты обосновался в Германии (ordentlicher Wohnsitz), действуют ещё только шесть месяцев; ведомство по правам по заявлению может продлить максимум на шесть месяцев, если ты убедительно покажешь, что проживёшь здесь не дольше двенадцати месяцев (§ 29 Abs. 1 S. 4, 5 FeV). К правам не на немецком обычно нужен перевод (§ 29 Abs. 2 S. 2). Если срок истёк, полицейский прав: езда без прав — преступление (§ 21 Abs. 1 Nr. 1 StVG). С какого времени ты здесь живёшь — это показания по существу, их давать не обязан (§ 136 Abs. 1 S. 2 StPO); адрес назвать нужно (§ 111 OWiG). Украинцы с временной защитой: украинские права действуют на время защиты, без перевода (Art. 3 VO (EU) 2022/1280)."
  }
 },
 {
  "id": "person-beifahrer-ausweis",
  "g": "person",
  "v": "kommt_drauf_an",
  "cop": "Vom Beifahrer brauche ich auch den Ausweis.",
  "say": "Ich fahre nur mit. Auf welcher Rechtsgrundlage – § 27 PolG BW oder § 163b StPO? Wenn Sie darauf bestehen, nenne ich meine Personalien unter Widerspruch.",
  "law": "§ 27 Abs. 1, 2 PolG BW · § 43 Abs. 1 S. 2 PolG BW · § 163b Abs. 1, 2 StPO · § 46 Abs. 1 OWiG · § 111 OWiG · § 1 Abs. 1 S. 2 PAuswG · § 4 Abs. 2 S. 2 FeV · § 48a Abs. 5 Nr. 2 FeV · § 13 Abs. 6 FZV",
  "why": "Führerschein und Fahrzeugschein zeigen muss nur, wer fährt (§ 4 Abs. 2 S. 2 FeV, § 13 Abs. 6 FZV). Ausnahme: Die Begleitperson beim Begleiteten Fahren ab 17 muss ihren Führerschein mitführen und aushändigen (§ 48a Abs. 5 Nr. 2 FeV). Für die Identität eines Beifahrers braucht die Polizei eine eigene Grundlage: § 27 Abs. 1 PolG BW (z. B. konkrete Gefahr, Kontrollstelle, Durchgangsstraßen zur Bekämpfung grenzüberschreitender Kriminalität), § 43 Abs. 1 S. 2 PolG BW (Befragung als möglicher Auskunftsgeber) oder § 163b StPO (als Verdächtiger oder Zeuge, über § 46 Abs. 1 OWiG auch bei Ordnungswidrigkeiten). Liegt eine davon vor, was oft der Fall ist, hat der Beamte recht: Personalien angeben und einen mitgeführten Ausweis zeigen. Ohne rechtmäßiges Verlangen darf eine Weigerung nicht nach § 111 OWiG geahndet werden (BVerfG 1 BvR 1564/92, Rn. 32, 38).",
  "src": [
   "https://www.landesrecht-bw.de/bsbw/document/jlr-NNLBW00007D29",
   "https://www.gesetze-im-internet.de/stpo/__163b.html",
   "https://www.gesetze-im-internet.de/owig_1968/__111.html",
   "https://www.gesetze-im-internet.de/owig_1968/__46.html",
   "https://www.gesetze-im-internet.de/pauswg/__1.html",
   "https://www.gesetze-im-internet.de/fev_2010/__4.html",
   "https://www.gesetze-im-internet.de/fev_2010/__48a.html",
   "https://www.gesetze-im-internet.de/fzv_2023/__13.html",
   "https://www.bundesverfassungsgericht.de/SharedDocs/Entscheidungen/DE/1995/03/rs19950307_1bvr156492.html"
  ],
  "ru": {
   "cop": "У пассажира мне тоже нужен документ.",
   "say": "Я только пассажир. На каком правовом основании — § 27 PolG BW или § 163b StPO? Если вы настаиваете, назову свои данные, но с возражением.",
   "why": "Права и техпаспорт обязан показать только тот, кто за рулём (§ 4 Abs. 2 S. 2 FeV, § 13 Abs. 6 FZV). Исключение: сопровождающий при вождении с 17 лет обязан иметь при себе свои права и передать их (§ 48a Abs. 5 Nr. 2 FeV). Для установления личности пассажира полиции нужно отдельное основание: § 27 Abs. 1 PolG BW (например, конкретная опасность, контрольный пункт, транзитные трассы для борьбы с трансграничной преступностью), § 43 Abs. 1 S. 2 PolG BW (опрос как возможного источника сведений) или § 163b StPO (подозреваемый или свидетель, через § 46 Abs. 1 OWiG и при административных нарушениях). Если такое основание есть, а так бывает часто, полицейский прав: назови данные и покажи документ, если он при тебе. Без законного требования отказ нельзя наказать по § 111 OWiG (BVerfG 1 BvR 1564/92, Rn. 32, 38)."
  }
 },
 {
  "id": "person-personalien",
  "g": "person",
  "v": "musst",
  "cop": "Name, Geburtsdatum, Adresse – und zwar sofort!",
  "say": "Hier sind meine Personalien – eine Weigerung wäre nach § 111 OWiG eine Ordnungswidrigkeit. Zu allem Weiteren mache ich keine Angaben.",
  "law": "§ 111 Abs. 1, 3 OWiG · § 27 Abs. 2 PolG BW · § 43 Abs. 1 S. 2 PolG BW · § 163b Abs. 1 StPO · § 1 Abs. 1 S. 2 PAuswG · § 136 Abs. 1 S. 2 StPO · § 163 Abs. 3 StPO",
  "why": "Bei einer rechtmäßigen Identitätsfeststellung (§ 27 PolG BW, § 163b StPO) oder Befragung (§ 43 Abs. 1 S. 2 PolG BW) musst du deine Personalien richtig angeben. § 111 OWiG ahndet Weigerung oder falsche Angaben zu Namen, Geburtsort und -tag, Familienstand, Beruf, Wohnort, Wohnung und Staatsangehörigkeit mit bis zu 1.000 €. Die Pflicht selbst entsteht aus diesen Befugnissen (BVerfG 1 BvR 1564/92). Einen mitgeführten Ausweis musst du vorlegen und den Lichtbildabgleich ermöglichen (§ 1 Abs. 1 S. 2 PAuswG). Zur Sache musst du als Beschuldigter nichts sagen (§ 136 Abs. 1 S. 2 StPO). Als Zeuge musst du gegenüber der Polizei ohne Ladung im Auftrag der Staatsanwaltschaft nicht aussagen (§ 163 Abs. 3 StPO).",
  "src": [
   "https://www.gesetze-im-internet.de/owig_1968/__111.html",
   "https://www.gesetze-im-internet.de/stpo/__163b.html",
   "https://www.gesetze-im-internet.de/stpo/__136.html",
   "https://www.gesetze-im-internet.de/stpo/__163.html",
   "https://www.gesetze-im-internet.de/pauswg/__1.html",
   "https://www.landesrecht-bw.de/bsbw/document/jlr-NNLBW00007D29",
   "https://www.bundesverfassungsgericht.de/SharedDocs/Entscheidungen/DE/1995/03/rs19950307_1bvr156492.html"
  ],
  "ru": {
   "cop": "Имя, дата рождения, адрес — и немедленно!",
   "say": "Вот мои данные — отказ был бы нарушением по § 111 OWiG. Больше никаких сведений не даю.",
   "why": "При законной проверке личности (§ 27 PolG BW, § 163b StPO) или опросе (§ 43 Abs. 1 S. 2 PolG BW) данные нужно назвать правдиво. § 111 OWiG наказывает отказ или ложные сведения об имени, месте и дате рождения, семейном положении, профессии, месте жительства, адресе и гражданстве штрафом до 1000 €. Сама обязанность вытекает из этих полномочий (BVerfG 1 BvR 1564/92). Документ, если он при тебе, нужно предъявить и дать сверить лицо с фото (§ 1 Abs. 1 S. 2 PAuswG). По делу подозреваемый может молчать (§ 136 Abs. 1 S. 2 StPO). Свидетель обязан давать показания в полиции только по вызову по поручению прокуратуры (§ 163 Abs. 3 StPO)."
  }
 },
 {
  "id": "person-grund",
  "g": "person",
  "v": "kommt_drauf_an",
  "cop": "Das ist eine ganz normale Kontrolle. Den Grund muss ich Ihnen nicht sagen.",
  "say": "Werde ich einer Straftat verdächtigt? Dann nennen Sie mir bitte die Tat – § 163b Abs. 1 mit § 163a Abs. 4 StPO.",
  "law": "§ 163b Abs. 1 S. 1 StPO · § 163a Abs. 4 S. 1 StPO · § 163b Abs. 2 S. 1 StPO · § 69 Abs. 1 S. 2 StPO · § 36 Abs. 5 StVO · § 37 Abs. 2 S. 2 LVwVfG · § 39 Abs. 1 LVwVfG · § 2 Abs. 2 Nr. 2 LVwVfG",
  "why": "Wirst du als Verdächtiger kontrolliert, muss dir die Polizei gleich zu Beginn sagen, welcher Tat du verdächtigt wirst. Sonst ist die Maßnahme rechtswidrig, außer der Anlass ist offensichtlich oder der Zweck würde gefährdet (OLG Hamm 2 ORs 5/25). Einem Zeugen ist der Gegenstand der Untersuchung zu nennen (§ 163b Abs. 2 mit § 69 Abs. 1 S. 2 StPO). Recht hat der Beamte bei einer allgemeinen Verkehrskontrolle des Fahrers, die keinen Anlass braucht (§ 36 Abs. 5 StVO). Auch bei einer Kontrolle nach § 27 PolG BW muss er den Grund nicht sofort nennen. Dort kannst du unverzüglich eine schriftliche Bestätigung verlangen, wenn du ein berechtigtes Interesse hast; sie ist dann zu begründen (§ 37 Abs. 2 S. 2, § 39 Abs. 1 LVwVfG, nicht bei Strafverfolgung, § 2 Abs. 2 Nr. 2 LVwVfG).",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__163b.html",
   "https://www.gesetze-im-internet.de/stpo/__163a.html",
   "https://www.gesetze-im-internet.de/stpo/__69.html",
   "https://www.gesetze-im-internet.de/stvo_2013/__36.html",
   "https://www.landesrecht-bw.de/bsbw/document/jlr-NNLBW00007E83",
   "https://nrwe.justiz.nrw.de/olgs/hamm/j2025/2_ORs_5_25_Beschluss_20250218.html"
  ],
  "ru": {
   "cop": "Это обычная проверка. Причину я вам говорить не обязан.",
   "say": "Меня подозревают в преступлении? Тогда назовите, пожалуйста, в каком — § 163b Abs. 1 вместе с § 163a Abs. 4 StPO.",
   "why": "Если тебя проверяют как подозреваемого, полиция в самом начале обязана сказать, в каком деянии тебя подозревают. Иначе мера незаконна, кроме случаев, когда повод очевиден или сообщение сорвало бы цель проверки (OLG Hamm 2 ORs 5/25). Свидетелю обязаны назвать предмет расследования (§ 163b Abs. 2 с § 69 Abs. 1 S. 2 StPO). Полицейский прав при обычной проверке водителя на дороге, для неё повод не нужен (§ 36 Abs. 5 StVO). При проверке по § 27 PolG BW он тоже не обязан сразу называть причину. Там можно без промедления потребовать письменное подтверждение, если у тебя есть обоснованный интерес; тогда его нужно обосновать (§ 37 Abs. 2 S. 2, § 39 Abs. 1 LVwVfG, не при уголовном преследовании, § 2 Abs. 2 Nr. 2 LVwVfG)."
  }
 },
 {
  "id": "person-ausweis-mitfuehren",
  "g": "person",
  "v": "kommt_drauf_an",
  "cop": "Sie müssen Ihren Ausweis immer dabeihaben!",
  "say": "Als Deutscher muss ich nach § 1 Abs. 1 PAuswG einen Ausweis besitzen, aber nicht mitführen. Meine Personalien nenne ich Ihnen.",
  "law": "§ 1 Abs. 1 S. 1, 2 PAuswG · § 1 Abs. 2 S. 3 PAuswG · § 32 Abs. 1 Nr. 2, Abs. 3 PAuswG · §§ 47a, 48 Abs. 1 AufenthG · § 8 Abs. 1a FreizügG/EU · § 4 Abs. 1 S. 2 Nr. 1a, Abs. 2 S. 2 FeV · § 5 Abs. 4 S. 2 FeV · § 1 Abs. 3 StVG · § 48a Abs. 5 Nr. 2 FeV",
  "why": "Deutsche ab 16 müssen einen Ausweis nur besitzen; ein gültiger Reisepass genügt (§ 1 Abs. 2 S. 3 PAuswG). Hast du ihn dabei, musst du ihn einer zur Identitätsfeststellung berechtigten Behörde vorlegen und den Lichtbildabgleich ermöglichen, sonst drohen bis 3.000 € (§ 1 Abs. 1 S. 2, § 32 Abs. 1 Nr. 2, Abs. 3 PAuswG). Recht hat der Beamte bei Ausländern: Sie müssen Pass und Aufenthaltstitel auf Verlangen vorlegen (§§ 47a, 48 Abs. 1 AufenthG; EU-Bürger § 8 Abs. 1a FreizügG/EU). Ebenso beim Führerschein, wenn du ein Kraftfahrzeug fährst, für das du eine Fahrerlaubnis brauchst, auch S-Pedelec bis 45 km/h oder Motorroller (§ 4 Abs. 2 S. 2 FeV); beim Mofa ist es die Prüfbescheinigung (§ 5 Abs. 4 S. 2 FeV). Ebenso bei der Begleitperson beim Begleiteten Fahren (§ 48a Abs. 5 Nr. 2 FeV). Für Fahrrad, Pedelec bis 25 km/h und E-Scooter brauchst du keinen Führerschein (§ 4 Abs. 1 S. 2 Nr. 1a FeV, § 1 Abs. 3 StVG).",
  "src": [
   "https://www.gesetze-im-internet.de/pauswg/__1.html",
   "https://www.gesetze-im-internet.de/pauswg/__32.html",
   "https://www.gesetze-im-internet.de/aufenthg_2004/__47a.html",
   "https://www.gesetze-im-internet.de/aufenthg_2004/__48.html",
   "https://www.gesetze-im-internet.de/freiz_gg_eu_2004/__8.html",
   "https://www.gesetze-im-internet.de/fev_2010/__4.html",
   "https://www.gesetze-im-internet.de/fev_2010/__5.html",
   "https://www.gesetze-im-internet.de/fev_2010/__48a.html",
   "https://www.landesrecht-bw.de/bsbw/document/jlr-NNLBW00007D29",
   "https://www.gesetze-im-internet.de/stvg/__1.html"
  ],
  "ru": {
   "cop": "Вы обязаны всегда носить с собой удостоверение личности!",
   "say": "Как гражданин Германии я по § 1 Abs. 1 PAuswG обязан иметь удостоверение, но не носить его с собой. Свои данные я вам назову.",
   "why": "Граждане Германии с 16 лет обязаны только иметь удостоверение; подходит и действующий загранпаспорт (§ 1 Abs. 2 S. 3 PAuswG). Если документ при тебе, его нужно предъявить ведомству, которое вправе устанавливать личность, и дать сверить лицо с фото, иначе штраф до 3000 € (§ 1 Abs. 1 S. 2, § 32 Abs. 1 Nr. 2, Abs. 3 PAuswG). Полицейский прав в отношении иностранцев: они по требованию обязаны предъявить паспорт и вид на жительство (§§ 47a, 48 Abs. 1 AufenthG; граждане ЕС — § 8 Abs. 1a FreizügG/EU). Также в отношении водительских прав, если ты ведёшь механическое транспортное средство (Kraftfahrzeug), для которого нужны права, в том числе S-Pedelec до 45 км/ч или мотороллер (§ 4 Abs. 2 S. 2 FeV); для мопеда Mofa — свидетельство о сдаче экзамена (Prüfbescheinigung, § 5 Abs. 4 S. 2 FeV). Также в отношении сопровождающего при вождении с 17 лет (§ 48a Abs. 5 Nr. 2 FeV). Для велосипеда, педелека до 25 км/ч и электросамоката права не нужны (§ 4 Abs. 1 S. 2 Nr. 1a FeV, § 1 Abs. 3 StVG)."
  }
 },
 {
  "id": "person-auslaender-pass",
  "g": "person",
  "v": "musst",
  "cop": "Pass und Aufenthaltstitel, bitte.",
  "say": "Hier sind mein Pass und mein Aufenthaltstitel – §§ 47a, 48 Abs. 1 AufenthG. Zur Sache sage ich nichts.",
  "law": "§ 47a AufenthG · § 48 Abs. 1 AufenthG · § 71 Abs. 4 AufenthG · § 98 Abs. 2 Nr. 2a, 3, Abs. 5 AufenthG · § 1 Abs. 2 Nr. 1 AufenthG · § 8 Abs. 1 Nr. 3, Abs. 1a FreizügG/EU",
  "why": "Ausländer müssen Pass und Aufenthaltstitel bzw. Duldung einer zur Identitätsfeststellung befugten Behörde auf Verlangen vorlegen und den Lichtbildabgleich ermöglichen (§ 47a AufenthG). Soweit es für Maßnahmen nach dem Aufenthaltsgesetz erforderlich ist, müssen sie die Papiere auch aushändigen und vorübergehend überlassen (§ 48 Abs. 1 AufenthG; die Landespolizei ist zuständig, § 71 Abs. 4). Wer das nicht oder nicht rechtzeitig tut, riskiert bis 3.000 € (§ 98 Abs. 2 Nr. 2a, 3, Abs. 5 AufenthG). Eine ausdrückliche Pflicht zum Mitführen steht nicht im Gesetz, vorlegen kannst du aber nur, was du dabeihast. EU-Bürger: § 8 Abs. 1 Nr. 3, Abs. 1a FreizügG/EU (das AufenthG gilt für sie grundsätzlich nicht, § 1 Abs. 2 Nr. 1 AufenthG).",
  "src": [
   "https://www.gesetze-im-internet.de/aufenthg_2004/__47a.html",
   "https://www.gesetze-im-internet.de/aufenthg_2004/__48.html",
   "https://www.gesetze-im-internet.de/aufenthg_2004/__71.html",
   "https://www.gesetze-im-internet.de/aufenthg_2004/__98.html",
   "https://www.gesetze-im-internet.de/aufenthg_2004/__1.html",
   "https://www.gesetze-im-internet.de/freiz_gg_eu_2004/__8.html"
  ],
  "ru": {
   "cop": "Паспорт и вид на жительство, пожалуйста.",
   "say": "Вот мой паспорт и вид на жительство — §§ 47a, 48 Abs. 1 AufenthG. По делу ничего не скажу.",
   "why": "Иностранцы обязаны по требованию предъявить паспорт и вид на жительство или Duldung ведомству, которое вправе устанавливать личность, и дать сверить лицо с фото (§ 47a AufenthG). Если это нужно для мер по закону о пребывании, документы нужно также передать и временно оставить (§ 48 Abs. 1 AufenthG; земельная полиция на это уполномочена, § 71 Abs. 4). Кто этого не делает или делает не вовремя, рискует штрафом до 3000 € (§ 98 Abs. 2 Nr. 2a, 3, Abs. 5 AufenthG). Прямой обязанности носить документы с собой в законе нет, но предъявить можно только то, что при тебе. Граждане ЕС: § 8 Abs. 1 Nr. 3, Abs. 1a FreizügG/EU (AufenthG к ним в принципе не применяется, § 1 Abs. 2 Nr. 1 AufenthG)."
  }
 },
 {
  "id": "person-taschen-durchsuchen",
  "g": "person",
  "v": "kommt_drauf_an",
  "cop": "Leeren Sie mal Ihre Taschen aus – wir durchsuchen Sie jetzt.",
  "say": "Ich stimme der Durchsuchung nicht zu und leiste keinen Widerstand. Auf welcher Rechtsgrundlage – § 34 PolG BW oder § 102 StPO?",
  "law": "§ 34 Abs. 1, 2 PolG BW · § 27 Abs. 2 S. 3 PolG BW · §§ 102, 103, 105 Abs. 1 StPO · § 163b Abs. 1 S. 3, Abs. 2 S. 2 StPO · § 107 StPO · § 113 StGB",
  "why": "Durchsuchen darf dich die Polizei nur mit Befugnis. Nach § 34 PolG BW etwa, wenn du festgehalten werden darfst, wenn Tatsachen auf Sachen hindeuten, die sichergestellt werden dürfen, an einem Ort nach § 27 Abs. 1 Nr. 3 oder bei einer Identitätsfeststellung nach Waffen zur Eigensicherung (Abs. 2). Als Verdächtigen nach § 102 StPO (angeordnet vom Richter, bei Gefahr im Verzug von der Polizei, § 105 Abs. 1 StPO). Und wenn deine Identität anders nicht zu klären ist (§ 27 Abs. 2 S. 3 PolG BW, § 163b Abs. 1 S. 3 StPO). Dann musst du die Durchsuchung dulden; eine Pflicht, selbst die Taschen auszuräumen, steht in diesen Normen nicht. Einen Nichtverdächtigen darf die Polizei zur Identitätsfeststellung nicht gegen seinen Willen durchsuchen (§ 163b Abs. 2 S. 2 StPO). Zur Suche nach bestimmten Beweismitteln geht das nur, wenn Tatsachen dafür sprechen, dass sie sich bei ihm befinden (§ 103 Abs. 1 StPO).",
  "src": [
   "https://www.landesrecht-bw.de/bsbw/document/jlr-NNLBW00007D29",
   "https://www.gesetze-im-internet.de/stpo/__102.html",
   "https://www.gesetze-im-internet.de/stpo/__103.html",
   "https://www.gesetze-im-internet.de/stpo/__105.html",
   "https://www.gesetze-im-internet.de/stpo/__107.html",
   "https://www.gesetze-im-internet.de/stpo/__163b.html",
   "https://www.gesetze-im-internet.de/stgb/__113.html"
  ],
  "ru": {
   "cop": "Выложите всё из карманов — мы вас сейчас обыщем.",
   "say": "Я не согласен на обыск и не сопротивляюсь. На каком основании — § 34 PolG BW или § 102 StPO?",
   "why": "Обыскивать тебя полиция может только при наличии полномочия. По § 34 PolG BW, например, если тебя можно задержать, если факты указывают на вещи, которые можно изъять, в месте по § 27 Abs. 1 Nr. 3 или при проверке личности, чтобы искать оружие ради безопасности полицейских (Abs. 2). Подозреваемого — по § 102 StPO (распоряжение судьи, при угрозе промедления — полиции, § 105 Abs. 1 StPO). И если личность иначе не установить (§ 27 Abs. 2 S. 3 PolG BW, § 163b Abs. 1 S. 3 StPO). Тогда обыск нужно терпеть; обязанности самому выкладывать всё из карманов в этих нормах нет. Не подозреваемого нельзя обыскивать против воли ради установления личности (§ 163b Abs. 2 S. 2 StPO). Ради поиска конкретных доказательств это возможно, только если факты указывают, что они у него (§ 103 Abs. 1 StPO)."
  }
 },
 {
  "id": "person-durchsuchung-geschlecht",
  "g": "person",
  "v": "kommt_drauf_an",
  "cop": "Mein Kollege tastet Sie jetzt ab. (Beamter zu einer Frau)",
  "say": "Ich möchte von einer Person meines Geschlechts durchsucht werden – § 34 Abs. 3 PolG BW. Ich leiste keinen Widerstand.",
  "law": "§ 34 Abs. 2, 3 PolG BW · § 27 Abs. 2 S. 4 PolG BW · § 81d Abs. 1 StPO",
  "why": "Nach dem Polizeigesetz dürfen Personen nur von Personen gleichen Geschlechts oder von Ärzten durchsucht werden (§ 34 Abs. 3 PolG BW). Recht hat der Beamte, wenn die sofortige Durchsuchung zum Schutz gegen eine Gefahr für Leib oder Leben erforderlich erscheint. Das trifft beim Abtasten nach Waffen zur Eigensicherung (§ 34 Abs. 2) häufig zu. Für die Durchsuchung zur Identitätsfeststellung nennt § 27 Abs. 2 S. 4 PolG BW keine Ausnahme. Für die Durchsuchung als Beschuldigter nach § 102 StPO steht keine solche Regel im Gesetz; für körperliche Untersuchungen gilt § 81d StPO.",
  "src": [
   "https://www.landesrecht-bw.de/bsbw/document/jlr-NNLBW00007D29",
   "https://www.gesetze-im-internet.de/stpo/__81d.html",
   "https://www.gesetze-im-internet.de/stpo/__102.html"
  ],
  "ru": {
   "cop": "Мой коллега вас сейчас ощупает. (полицейский-мужчина женщине)",
   "say": "Прошу, чтобы меня обыскивал человек моего пола — § 34 Abs. 3 PolG BW. Я не сопротивляюсь.",
   "why": "По закону о полиции обыскивать человека могут только лица того же пола или врачи (§ 34 Abs. 3 PolG BW). Полицейский прав, если немедленный обыск нужен для защиты от опасности для здоровья или жизни. Так часто бывает при ощупывании на оружие ради безопасности полицейских (§ 34 Abs. 2). Для обыска при установлении личности § 27 Abs. 2 S. 4 PolG BW исключений не называет. Для обыска обвиняемого по § 102 StPO такого правила в законе нет; для телесного осмотра действует § 81d StPO."
  }
 },
 {
  "id": "person-zeuge-aussage",
  "g": "person",
  "v": "musst_nicht",
  "cop": "Sie haben das doch gesehen – als Zeuge müssen Sie aussagen.",
  "say": "Meine Personalien gebe ich an. Aussagen muss ich bei der Polizei nur auf Ladung im Auftrag der Staatsanwaltschaft – § 163 Abs. 3 StPO.",
  "law": "§ 163 Abs. 3 S. 1 StPO · § 161a Abs. 1 StPO · §§ 52, 55 StPO · § 43 Abs. 1 S. 2, 3, 5, 9 PolG BW · § 111 OWiG",
  "why": "Bei der Polizei erscheinen und aussagen muss ein Zeuge nur, wenn der Ladung ein Auftrag der Staatsanwaltschaft zugrunde liegt (§ 163 Abs. 3 S. 1 StPO). Vor der Staatsanwaltschaft besteht Aussagepflicht (§ 161a Abs. 1 StPO). Auch dann darfst du Fragen verweigern, mit denen du dich oder Angehörige belasten würdest (§ 55 StPO), und Angehörige des Beschuldigten dürfen ganz schweigen (§ 52 StPO). Recht hat der Beamte bei den Personalien (§ 163b Abs. 2 StPO, § 43 Abs. 1 S. 2 PolG BW, § 111 OWiG). Ebenso, wenn die Befragung eine Gefahr für Leben, Gesundheit, Freiheit oder bedeutende Sachwerte abwehren soll: Dann besteht Auskunftspflicht, notfalls mit Zwangsgeld (§ 43 Abs. 1 S. 3, 9 PolG BW).",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__163.html",
   "https://www.gesetze-im-internet.de/stpo/__161a.html",
   "https://www.gesetze-im-internet.de/stpo/__52.html",
   "https://www.gesetze-im-internet.de/stpo/__55.html",
   "https://www.landesrecht-bw.de/bsbw/document/jlr-NNLBW00007D29"
  ],
  "ru": {
   "cop": "Вы же это видели — как свидетель вы обязаны дать показания.",
   "say": "Свои данные назову. Давать показания в полиции я обязан только по вызову по поручению прокуратуры — § 163 Abs. 3 StPO.",
   "why": "Приходить в полицию и давать показания свидетель обязан, только если вызов основан на поручении прокуратуры (§ 163 Abs. 3 S. 1 StPO). В прокуратуре показания давать обязательно (§ 161a Abs. 1 StPO). Но и там можно не отвечать на вопросы, которыми ты изобличил бы себя или близких (§ 55 StPO), а родственники обвиняемого могут вообще молчать (§ 52 StPO). Полицейский прав насчёт личных данных (§ 163b Abs. 2 StPO, § 43 Abs. 1 S. 2 PolG BW, § 111 OWiG). И если опрос нужен, чтобы отвести опасность для жизни, здоровья, свободы или значительного имущества: тогда отвечать обязан, иначе возможен принудительный штраф (§ 43 Abs. 1 S. 3, 9 PolG BW)."
  }
 },
 {
  "id": "person-angehoerige",
  "g": "person",
  "v": "musst_nicht",
  "cop": "Sie sind doch seine Frau – sagen Sie uns, wie viel er getrunken hat.",
  "say": "Ich bin mit dem Fahrer verheiratet. Ich verweigere die Aussage – § 52 Abs. 1 StPO.",
  "law": "§ 52 Abs. 1, 3 StPO · § 46 Abs. 1 OWiG · § 43 Abs. 1 S. 5 PolG BW",
  "why": "Das Zeugnis gegen den Beschuldigten verweigern dürfen: Verlobte, Ehegatten und eingetragene Lebenspartner (auch nach Scheidung), Verwandte und Verschwägerte in gerader Linie (Eltern, Kinder, Großeltern, Schwiegereltern), Verwandte in der Seitenlinie bis zum 3. Grad (Geschwister, Onkel, Tante, Neffe, Nichte) und Verschwägerte bis zum 2. Grad (Schwager, Schwägerin). Das gilt auch vor Staatsanwaltschaft und Gericht, und du musst darüber belehrt werden (§ 52 Abs. 1, 3 StPO). Im Bußgeldverfahren gilt es über § 46 Abs. 1 OWiG, bei polizeilicher Befragung nach § 43 Abs. 1 S. 5 PolG BW. Deine Personalien musst du trotzdem angeben.",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__52.html",
   "https://www.gesetze-im-internet.de/owig_1968/__46.html",
   "https://www.landesrecht-bw.de/bsbw/document/jlr-NNLBW00007D29"
  ],
  "ru": {
   "cop": "Вы же его жена — скажите нам, сколько он выпил.",
   "say": "Я замужем за водителем. Я отказываюсь давать показания — § 52 Abs. 1 StPO.",
   "why": "Отказаться давать показания против обвиняемого вправе: жених или невеста, супруги и зарегистрированные партнёры (и после развода), родственники и свойственники по прямой линии (родители, дети, дедушки и бабушки, родители супруга), родственники по боковой линии до 3-й степени (братья, сёстры, дяди, тёти, племянники) и свойственники до 2-й степени (шурин, золовка и т. п.). Это действует и в прокуратуре, и в суде, и тебе обязаны об этом разъяснить (§ 52 Abs. 1, 3 StPO). В деле об административном нарушении — через § 46 Abs. 1 OWiG, при опросе по закону о полиции — по § 43 Abs. 1 S. 5 PolG BW. Личные данные назвать всё равно нужно."
  }
 },
 {
  "id": "person-weggehen",
  "g": "person",
  "v": "kommt_drauf_an",
  "cop": "Sie bleiben hier stehen, bis wir fertig sind!",
  "say": "Werde ich festgehalten – und auf welcher Rechtsgrundlage? Wenn nicht, möchte ich jetzt gehen.",
  "law": "§ 27 Abs. 2 S. 3 PolG BW · § 43 Abs. 1 S. 11 PolG BW · § 33 Abs. 1 PolG BW · § 163b Abs. 1 S. 2, Abs. 2 S. 2 StPO · § 164 StPO",
  "why": "Wer weder verdächtig ist noch selbst kontrolliert wird, darf gehen. Festhalten darf die Polizei nur mit Befugnis: zur Identitätsfeststellung, wenn die Identität anders nicht feststellbar ist (§ 27 Abs. 2 S. 3 PolG BW, § 163b Abs. 1 S. 2 StPO; Zeugen nur, wenn es nicht außer Verhältnis zur Sache steht, § 163b Abs. 2 S. 2 StPO). Außerdem für die Dauer einer Befragung als möglicher Auskunftsgeber (§ 43 Abs. 1 S. 11 PolG BW) und im Gewahrsam (§ 33 PolG BW). Bei Ermittlungen vor Ort darf der leitende Beamte Personen festhalten, die vorsätzlich stören oder sich seinen Anordnungen widersetzen (§ 164 StPO). Nennt der Beamte eine solche Grundlage, hat er recht: dann bleib.",
  "src": [
   "https://www.landesrecht-bw.de/bsbw/document/jlr-NNLBW00007D29",
   "https://www.gesetze-im-internet.de/stpo/__163b.html",
   "https://www.gesetze-im-internet.de/stpo/__164.html"
  ],
  "ru": {
   "cop": "Стойте здесь, пока мы не закончим!",
   "say": "Меня задерживают — и на каком основании? Если нет, я хотел бы сейчас уйти.",
   "why": "Кого не подозревают и кого самого не проверяют, может уйти. Удерживать полиция может только при наличии полномочия: для установления личности, если иначе её не установить (§ 27 Abs. 2 S. 3 PolG BW, § 163b Abs. 1 S. 2 StPO; свидетеля — только если это соразмерно значимости дела, § 163b Abs. 2 S. 2 StPO). Кроме того, на время опроса как возможного источника сведений (§ 43 Abs. 1 S. 11 PolG BW) и при задержании (Gewahrsam, § 33 PolG BW). Во время следственных действий на месте руководящий полицейский может задержать тех, кто умышленно мешает или не подчиняется его распоряжениям (§ 164 StPO). Если полицейский называет такое основание, он прав — тогда оставайся."
  }
 },
 {
  "id": "person-wache",
  "g": "person",
  "v": "kommt_drauf_an",
  "cop": "Sie kommen jetzt mit auf die Wache.",
  "say": "Ich komme mit, leiste keinen Widerstand, widerspreche aber. Warum ist meine Identität hier nicht feststellbar? Ich will einen Angehörigen benachrichtigen – § 163c StPO.",
  "law": "§ 27 Abs. 2 S. 3 PolG BW · § 33 Abs. 1 Nr. 3, Abs. 2, 3 PolG BW · § 163b Abs. 1 S. 2 StPO · § 163c Abs. 1, 2 StPO · § 114c Abs. 1 StPO · Art. 104 Abs. 4 GG",
  "why": "Zur Dienststelle bringen darf dich die Polizei zur Identitätsfeststellung nur, wenn deine Identität anders nicht oder nur unter erheblichen Schwierigkeiten feststellbar ist (§ 27 Abs. 2 S. 3 PolG BW, § 163b Abs. 1 S. 2 StPO). Nach StPO gilt: nicht länger als unerlässlich, insgesamt höchstens 12 Stunden, grundsätzlich unverzüglich zum Richter, und du darfst einen Angehörigen oder eine Vertrauensperson benachrichtigen (§ 163c Abs. 1, 2 mit § 114c StPO). Nach PolG (Gewahrsam, § 33 Abs. 1 Nr. 3) müssen Grund und Rechtsbehelfe unverzüglich genannt werden. Ohne Richter dauert der Gewahrsam höchstens bis zum Ende des Tages nach dem Ergreifen (§ 33 Abs. 2, 3). Bei einer Festnahme wegen Tatverdachts gelten eigene Regeln.",
  "src": [
   "https://www.landesrecht-bw.de/bsbw/document/jlr-NNLBW00007D29",
   "https://www.gesetze-im-internet.de/stpo/__163b.html",
   "https://www.gesetze-im-internet.de/stpo/__163c.html",
   "https://www.gesetze-im-internet.de/stpo/__114c.html",
   "https://www.gesetze-im-internet.de/gg/art_104.html"
  ],
  "ru": {
   "cop": "Вы сейчас поедете с нами в участок.",
   "say": "Я поеду, не сопротивляюсь, но возражаю. Почему мою личность нельзя установить здесь? Хочу сообщить родственнику — § 163c StPO.",
   "why": "Везти в участок для установления личности полиция может, только если иначе её не установить или это крайне затруднительно (§ 27 Abs. 2 S. 3 PolG BW, § 163b Abs. 1 S. 2 StPO). По StPO: не дольше, чем необходимо, всего не более 12 часов, как правило сразу к судье, и можно сообщить родственнику или доверенному лицу (§ 163c Abs. 1, 2 с § 114c StPO). По закону о полиции (Gewahrsam, § 33 Abs. 1 Nr. 3) причину и способы обжалования обязаны назвать без промедления. Без судьи задержание длится не дольше конца следующего дня (§ 33 Abs. 2, 3). При задержании по подозрению в преступлении действуют свои правила."
  }
 },
 {
  "id": "person-platzverweis",
  "g": "person",
  "v": "musst",
  "cop": "Verlassen Sie sofort den Platz – sonst nehmen wir Sie mit!",
  "say": "Ich gehe. Bitte nennen Sie mir die Gefahr sowie Bereich und Dauer des Platzverweises – § 30 Abs. 1 PolG BW.",
  "law": "§ 30 Abs. 1, 2 PolG BW · § 133 Abs. 1, 2 PolG BW · § 80 Abs. 2 S. 1 Nr. 2 VwGO",
  "why": "Einen Platzverweis zur Abwehr einer Gefahr oder zur Beseitigung einer Störung musst du sofort befolgen, auch wenn du ihn für falsch hältst. Widerspruch und Klage halten ihn nicht auf (§ 80 Abs. 2 S. 1 Nr. 2 VwGO), ein Verstoß kostet bis 5.000 € (§ 133 PolG BW). Er gilt nur vorübergehend und für einen Ort. Ein längeres Aufenthaltsverbot (bis 3 Monate) braucht Tatsachen für eine drohende Straftat (§ 30 Abs. 2). Die Rechtmäßigkeit lässt du danach vom Verwaltungsgericht prüfen. Allein das Fotografieren oder Filmen eines Einsatzes begründet keine konkrete Gefahr (BVerfG 1 BvR 2501/13).",
  "src": [
   "https://www.landesrecht-bw.de/bsbw/document/jlr-NNLBW00007D29",
   "https://www.gesetze-im-internet.de/vwgo/__80.html",
   "https://www.bundesverfassungsgericht.de/SharedDocs/Entscheidungen/DE/2015/07/rk20150724_1bvr250113.html",
   "https://www.landesrecht.rlp.de/bsrp/document/NJRE001511713"
  ],
  "ru": {
   "cop": "Немедленно покиньте это место — иначе заберём вас!",
   "say": "Я ухожу. Назовите, пожалуйста, опасность, а также территорию и срок запрета — § 30 Abs. 1 PolG BW.",
   "why": "Требование покинуть место (Platzverweis) для предотвращения опасности или устранения нарушения нужно выполнить сразу, даже если считаешь его неправильным. Возражение и иск его не приостанавливают (§ 80 Abs. 2 S. 1 Nr. 2 VwGO), нарушение — штраф до 5000 € (§ 133 PolG BW). Он действует временно и для конкретного места. Более долгий запрет (до 3 месяцев) требует фактов о грозящем преступлении (§ 30 Abs. 2). Законность потом проверит административный суд. Одна лишь фото- или видеосъёмка операции не создаёт конкретной опасности (BVerfG 1 BvR 2501/13)."
  }
 },
 {
  "id": "person-fotos-fingerabdruecke",
  "g": "person",
  "v": "kommt_drauf_an",
  "cop": "Wir machen jetzt Fotos und Fingerabdrücke von Ihnen.",
  "say": "Bin ich Beschuldigter oder Zeuge? Als Zeuge nicht gegen meinen Willen – § 163b Abs. 2 StPO. Ich widerspreche, leiste aber keinen Widerstand.",
  "law": "§ 81b Abs. 1 StPO · § 163b Abs. 1 S. 3, Abs. 2 S. 2 StPO · § 163c Abs. 3 StPO · § 41 Abs. 1, 3 PolG BW · § 28 Abs. 1 Nr. 2, Abs. 3 Nr. 2 PolG BW",
  "why": "Beim Beschuldigten dürfen Fotos und Fingerabdrücke auch gegen seinen Willen genommen werden, soweit das für das Strafverfahren oder den Erkennungsdienst notwendig ist (§ 81b Abs. 1 StPO). Bei sonst nicht klärbarer Identität geht das auch nach § 163b Abs. 1 S. 3 StPO und § 41 Abs. 1 Nr. 1 PolG BW – dann hat der Beamte recht. Bei Nichtverdächtigen (Zeugen, unbeteiligte Mitfahrer) sind Durchsuchung und erkennungsdienstliche Maßnahmen nach StPO gegen ihren Willen unzulässig (§ 163b Abs. 2 S. 2 StPO); ihre Unterlagen sind nach der Identitätsfeststellung zu vernichten (§ 163c Abs. 3 StPO). Eine Vorladung zur erkennungsdienstlichen Behandlung kann zwangsweise durchgesetzt werden (§ 28 Abs. 1 Nr. 2, Abs. 3 Nr. 2 PolG BW).",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__81b.html",
   "https://www.gesetze-im-internet.de/stpo/__163b.html",
   "https://www.gesetze-im-internet.de/stpo/__163c.html",
   "https://www.landesrecht-bw.de/bsbw/document/jlr-NNLBW00007D29"
  ],
  "ru": {
   "cop": "Сейчас мы вас сфотографируем и снимем отпечатки пальцев.",
   "say": "Я обвиняемый или свидетель? Свидетеля — не против его воли, § 163b Abs. 2 StPO. Я возражаю, но не сопротивляюсь.",
   "why": "У обвиняемого фото и отпечатки можно снимать и против его воли, если это нужно для уголовного дела или полицейского учёта (§ 81b Abs. 1 StPO). Если личность иначе не установить, это возможно и по § 163b Abs. 1 S. 3 StPO и § 41 Abs. 1 Nr. 1 PolG BW — тогда полицейский прав. У не подозреваемых (свидетелей, непричастных пассажиров) обыск и дактилоскопия по StPO против их воли запрещены (§ 163b Abs. 2 S. 2 StPO); их материалы после установления личности уничтожаются (§ 163c Abs. 3 StPO). Вызов на фотографирование и снятие отпечатков могут исполнить принудительно (§ 28 Abs. 1 Nr. 2, Abs. 3 Nr. 2 PolG BW)."
  }
 },
 {
  "id": "person-handy",
  "g": "person",
  "v": "kommt_drauf_an",
  "cop": "Ihr Handy nehmen wir mit – entsperren Sie es bitte.",
  "say": "Ich gebe das Handy nicht freiwillig heraus und widerspreche der Beschlagnahme – § 98 Abs. 2 StPO. Bitte eine Bescheinigung. Meinen PIN nenne ich nicht.",
  "law": "§§ 94, 98 Abs. 1, 2 StPO · § 38 Abs. 1, 3 PolG BW · § 136 Abs. 1 S. 2 StPO · § 81b Abs. 1 StPO · § 48 Abs. 3, 3a, § 71 Abs. 4 AufenthG · § 113 StGB · BGH 2 StR 232/24",
  "why": "Ein Handy darf als Beweismittel beschlagnahmt werden, wenn es für ein Verfahren Bedeutung haben kann (§ 94 StPO). Anordnen darf das das Gericht, bei Gefahr im Verzug auch die Polizei (§ 98 Abs. 1 StPO). Nach Polizeirecht ist das u. a. zum Schutz gegen eine unmittelbar bevorstehende oder bereits eingetretene Störung möglich, mit Angabe von Grund und Rechtsbehelf und einer Bescheinigung auf Verlangen (§ 38 Abs. 1, 3 PolG BW). Widersprichst du ausdrücklich, soll die Polizei binnen 3 Tagen die gerichtliche Bestätigung beantragen; du kannst jederzeit selbst das Gericht anrufen (§ 98 Abs. 2 StPO). Einen PIN musst du nicht nennen, denn die Selbstbelastungsfreiheit schützt vor aktiver Mitwirkung (§ 136 Abs. 1 S. 2 StPO; BGH 2 StR 232/24, Rn. 32). Ausnahme: Besitzt du als Ausländer überhaupt keinen gültigen Pass, Passersatz oder sonstigen geeigneten Identitätsnachweis, musst du das Handy auf Verlangen aushändigen; ist das Auslesen zur Klärung von Identität, Staatsangehörigkeit und Rückführungsmöglichkeit erforderlich, musst du auch die Zugangsdaten zur Verfügung stellen (§ 48 Abs. 3 S. 1, Abs. 3a AufenthG; zuständig ist auch die Landespolizei, § 71 Abs. 4; für EU-Bürger gilt das grundsätzlich nicht, § 1 Abs. 2 Nr. 1 AufenthG). Recht hat der Beamte beim Finger: Als Beschuldigter musst du das Auflegen dulden, jedenfalls bei einer richterlich angeordneten Durchsuchung, die auch nach Handys sucht, wenn es verhältnismäßig ist (BGH 2 StR 232/24).",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__94.html",
   "https://www.gesetze-im-internet.de/stpo/__98.html",
   "https://www.gesetze-im-internet.de/stpo/__136.html",
   "https://www.gesetze-im-internet.de/stpo/__81b.html",
   "https://www.landesrecht-bw.de/bsbw/document/jlr-NNLBW00007D29",
   "https://www.gesetze-im-internet.de/aufenthg_2004/__48.html",
   "https://www.gesetze-im-internet.de/aufenthg_2004/__71.html",
   "https://www.bundesgerichtshof.de/SharedDocs/Entscheidungen/DE/Strafsenate/2_StS/2024/2_StR_232-24A.pdf?__blob=publicationFile&v=1",
   "https://www.bundesverfassungsgericht.de/SharedDocs/Entscheidungen/DE/2025/07/rk20250709_1bvr097525.html",
   "https://www.landesrecht.rlp.de/bsrp/document/NJRE001511713"
  ],
  "ru": {
   "cop": "Ваш телефон мы забираем — разблокируйте его, пожалуйста.",
   "say": "Телефон добровольно не отдаю и возражаю против изъятия — § 98 Abs. 2 StPO. Прошу справку. PIN я не называю.",
   "why": "Телефон могут изъять как доказательство, если он может иметь значение для дела (§ 94 StPO). Распорядиться может суд, а при угрозе промедления и полиция (§ 98 Abs. 1 StPO). По закону о полиции это возможно, в частности, против непосредственно грозящего или уже наступившего нарушения, с указанием причины и способа обжалования и справкой по требованию (§ 38 Abs. 1, 3 PolG BW). Если ты явно возразил, полиция должна в течение 3 дней запросить подтверждение суда; ты и сам можешь в любой момент обратиться в суд (§ 98 Abs. 2 StPO). PIN называть не обязан: защита от самообвинения охватывает активное содействие (§ 136 Abs. 1 S. 2 StPO; BGH 2 StR 232/24, Rn. 32). Исключение: если у тебя как у иностранца вообще нет действующего паспорта, Passersatz или иного подходящего удостоверения личности, ты обязан по требованию отдать телефон; если данные с него нужно считать для установления личности, гражданства и возможности возврата в другую страну, ты обязан также предоставить данные доступа (§ 48 Abs. 3 S. 1, Abs. 3a AufenthG; земельная полиция на это тоже уполномочена, § 71 Abs. 4; к гражданам ЕС это в принципе не относится, § 1 Abs. 2 Nr. 1 AufenthG). С пальцем полицейский прав: обвиняемый должен терпеть, что его палец приложат, как минимум при обыске по решению судьи, который направлен и на поиск телефонов, если это соразмерно (BGH 2 StR 232/24)."
  }
 },
 {
  "id": "person-telefonnummer",
  "g": "person",
  "v": "musst_nicht",
  "cop": "Geben Sie mir noch Ihre Handynummer und E-Mail – und bei wem arbeiten Sie?",
  "say": "Telefonnummer, E-Mail und Arbeitgeber gehören nicht zu den Pflichtangaben nach § 111 OWiG und § 43 Abs. 1 S. 2 PolG BW. Die gebe ich nicht an.",
  "law": "§ 111 Abs. 1, 3 OWiG · § 43 Abs. 1 S. 2, 3 PolG BW",
  "why": "Pflichtangaben sind höchstens die in § 111 OWiG genannten: Vor-, Familien- und Geburtsname, Ort und Tag der Geburt, Familienstand, Beruf, Wohnort, Wohnung, Staatsangehörigkeit. Bei der polizeirechtlichen Befragung sind es nur Name, Vorname, Datum und Ort der Geburt, Wohnanschrift und Staatsangehörigkeit (§ 43 Abs. 1 S. 2 PolG BW). Telefonnummer, E-Mail-Adresse und Arbeitgeber stehen in keiner der beiden Listen. Recht hat der Beamte nur, wenn die Befragung eine Gefahr für Leben, Gesundheit, Freiheit oder bedeutende fremde Sach- oder Vermögenswerte abwehren soll (§ 43 Abs. 1 S. 3 PolG BW).",
  "src": [
   "https://www.gesetze-im-internet.de/owig_1968/__111.html",
   "https://www.landesrecht-bw.de/perma?j=PolG_BW_!_43"
  ],
  "ru": {
   "cop": "Дайте ещё номер телефона и e-mail — и где вы работаете?",
   "say": "Номер телефона, e-mail и работодатель не входят в обязательные данные по § 111 OWiG и § 43 Abs. 1 S. 2 PolG BW. Их я не называю.",
   "why": "Обязательные данные — не больше тех, что перечислены в § 111 OWiG: имя, фамилия и фамилия при рождении, место и дата рождения, семейное положение, профессия, место жительства, адрес, гражданство. При полицейском опросе — только имя, фамилия, дата и место рождения, адрес и гражданство (§ 43 Abs. 1 S. 2 PolG BW). Номера телефона, e-mail и работодателя нет ни в одном из этих списков. Полицейский прав, только если опрос нужен для отвращения опасности для жизни, здоровья, свободы или значительного чужого имущества (§ 43 Abs. 1 S. 3 PolG BW)."
  }
 },
 {
  "id": "person-verdachtsunabhaengig",
  "g": "person",
  "v": "kommt_drauf_an",
  "cop": "Das ist eine verdachtsunabhängige Kontrolle – da brauchen wir keinen Grund. Jetzt schauen wir noch ins Auto.",
  "say": "Personalien und Ausweis bekommen Sie (§ 27 PolG BW). Einer Durchsuchung stimme ich nicht zu – Grundlage nach § 35 PolG BW? Ich leiste keinen Widerstand.",
  "law": "§ 27 Abs. 1 Nr. 3, 5, 6, 7, Abs. 2 S. 2, 3 PolG BW · § 34 Abs. 2 PolG BW · § 35 Nr. 1, 3, 5, 7, 9 PolG BW · § 111 OWiG",
  "why": "Ohne Verdacht darf die Polizei die Identität feststellen, u. a. an gefährlichen Orten (§ 27 Abs. 1 Nr. 3 PolG BW), an einer Kontrollstelle gegen Straftaten von erheblicher Bedeutung (Nr. 5), in einem Kontrollbereich (Nr. 6) und zur Bekämpfung grenzüberschreitender Kriminalität auf Autobahnen und anderen Durchgangsstraßen (Nr. 7, „Schleierfahndung“). Dann hat der Beamte recht: anhalten, Personalien angeben, mitgeführte Ausweise vorzeigen und aushändigen (§ 27 Abs. 2 S. 2). Das Auto ohne weiteren Grund durchsuchen darf er nur an Kontrollstelle oder im Kontrollbereich (§ 35 Nr. 7), an gefährlichen Orten (§ 35 Nr. 5) oder bei ausgeschriebenem Kennzeichen (§ 35 Nr. 9). Für die Schleierfahndung nach Nr. 7 nennt § 35 keine solche Befugnis; dort braucht es andere Gründe, etwa Tatsachen für sicherstellbare Sachen (§ 35 Nr. 3) oder eine anders nicht klärbare Identität (§ 27 Abs. 2 S. 3).",
  "src": [
   "https://www.landesrecht-bw.de/perma?j=PolG_BW_!_27",
   "https://www.landesrecht-bw.de/perma?j=PolG_BW_!_34",
   "https://www.landesrecht-bw.de/perma?j=PolG_BW_!_35",
   "https://www.gesetze-im-internet.de/owig_1968/__111.html"
  ],
  "ru": {
   "cop": "Это проверка без подозрения — причина нам не нужна. Сейчас ещё осмотрим машину.",
   "say": "Данные и документ вы получите (§ 27 PolG BW). На обыск не соглашаюсь — какое основание по § 35 PolG BW? Сопротивляться не буду.",
   "why": "Без подозрения полиция может устанавливать личность, в частности, в «опасных местах» (§ 27 Abs. 1 Nr. 3 PolG BW), на контрольном пункте против серьёзных преступлений (Nr. 5), в зоне контроля (Nr. 6) и для борьбы с трансграничной преступностью на автобанах и других транзитных трассах (Nr. 7, «Schleierfahndung»). Тогда полицейский прав: остановиться, назвать данные, показать и передать документы, если они при тебе (§ 27 Abs. 2 S. 2). Обыскать машину без дополнительного основания он может только на контрольном пункте или в зоне контроля (§ 35 Nr. 7), в «опасных местах» (§ 35 Nr. 5) или если номер объявлен в розыск (§ 35 Nr. 9). Для Schleierfahndung по Nr. 7 § 35 такого права не называет; там нужны другие основания, например факты о вещах, которые можно изъять (§ 35 Nr. 3), или личность, которую иначе не установить (§ 27 Abs. 2 S. 3)."
  }
 },
 {
  "id": "person-waffenverbotszone",
  "g": "person",
  "v": "musst",
  "cop": "Sie sind hier in der Waffenverbotszone. Wir durchsuchen Sie jetzt und schauen in Ihren Rucksack.",
  "say": "Ich dulde die Kontrolle nach § 42c WaffG und leiste keinen Widerstand. Ich stimme aber nicht zu und sage nichts zur Sache.",
  "law": "§ 42c WaffG · § 42 Abs. 5 WaffG · §§ 1, 3, 4, 6 WMVZ VO Stuttgart vom 30.01.2025 · § 113 StGB",
  "why": "In einer Waffen- und Messerverbotszone darf die Polizei Personen ohne Verdacht kurz anhalten, befragen, mitgeführte Sachen in Augenschein nehmen und die Person durchsuchen (§ 42c S. 1 WaffG). Die Stuttgarter Zone (Teile von Neuer Vorstadt, Hauptbahnhof, Oberem Schlossgarten und Rathaus) beruht auf § 42 Abs. 5 WaffG; Waffen und Messer sind dort freitags und samstags von 18 bis 8 Uhr und vor Feiertagen verboten, Verstoß bis 10.000 € (§§ 1, 4 WMVZ VO). Hier hat der Beamte recht: dulden. Personen nach Herkunft, Hautfarbe oder Religion ohne sachlichen Grund auszuwählen ist unzulässig (§ 42c S. 2 WaffG). Fragen zur Sache musst du trotzdem nicht beantworten.",
  "src": [
   "https://www.gesetze-im-internet.de/waffg_2002/__42c.html",
   "https://www.gesetze-im-internet.de/waffg_2002/__42.html",
   "https://www.stuttgart.de/medien/ibs/1-10.pdf",
   "https://www.gesetze-im-internet.de/stgb/__113.html"
  ],
  "ru": {
   "cop": "Вы в зоне запрета оружия. Сейчас мы вас обыщем и заглянем в рюкзак.",
   "say": "Я терплю проверку по § 42c WaffG и не сопротивляюсь. Но согласия не даю и по существу ничего не говорю.",
   "why": "В зоне запрета оружия и ножей полиция может без подозрения ненадолго остановить, опросить, осмотреть вещи и обыскать человека (§ 42c S. 1 WaffG). Зона в Штутгарте (части Neue Vorstadt, главного вокзала, Oberer Schlossgarten и ратуши) основана на § 42 Abs. 5 WaffG; оружие и ножи там запрещены по пятницам и субботам с 18 до 8 часов и накануне праздников, штраф до 10 000 € (§§ 1, 4 WMVZ VO). Здесь полицейский прав: терпи. Выбирать людей по происхождению, цвету кожи или религии без объективной причины запрещено (§ 42c S. 2 WaffG). Отвечать на вопросы по существу всё равно не обязан."
  }
 },
 {
  "id": "aufnahme-filmen-stoppen",
  "g": "aufnahme",
  "v": "kommt_drauf_an",
  "cop": "Hören Sie sofort auf zu filmen! Nehmen Sie das Handy runter!",
  "say": "Ich behindere Sie nicht und veröffentliche nichts. Ein Filmverbot braucht eine konkrete Gefahr (§§ 1, 3 PolG BW). Ordnen Sie es an, folge ich unter Widerspruch.",
  "law": "§§ 1, 3 PolG BW · § 80 Abs. 2 S. 1 Nr. 2 VwGO · BVerfG 1 BvR 2501/13 · BVerwG 6 C 12.11 · VG Berlin 1 K 334/23",
  "why": "Das Filmen eines Polizeieinsatzes ist grundsätzlich zulässig. Verbieten darf die Polizei es nur bei konkreter Gefahr (BVerfG 1 BvR 2501/13 Rn. 14; BVerwG 6 C 12.11 – Fall aus BW; VG Berlin 1 K 334/23 Rn. 18, 20). Recht hat der Beamte, wenn du tatsächlich störst, zu nah kommst oder die Eigensicherung behinderst (die Hände sollen sichtbar bleiben, das Handy also besser in die Halterung) oder wenn konkrete Anhaltspunkte für eine rechtswidrige Veröffentlichung bestehen. Seine Anordnung gilt sofort (§ 80 Abs. 2 S. 1 Nr. 2 VwGO): befolgen und später gerichtlich prüfen lassen.",
  "src": [
   "https://www.landesrecht-bw.de/perma?j=PolG_BW_!_1",
   "https://www.landesrecht-bw.de/perma?j=PolG_BW_!_3",
   "https://www.gesetze-im-internet.de/vwgo/__80.html",
   "https://testphase.rechtsinformationen.bund.de/v1/case-law/KVRE411101501.html",
   "https://www.bverwg.de/de/280312U6C12.11.0",
   "https://gesetze.berlin.de/bsbe/document/NJRE001624474"
  ],
  "ru": {
   "cop": "Немедленно прекратите снимать! Опустите телефон!",
   "say": "Я вам не мешаю и ничего не публикую. Для запрета съёмки нужна конкретная опасность (§§ 1, 3 PolG BW). Если вы это прикажете, подчинюсь, но с возражением.",
   "why": "Снимать работу полиции в принципе можно. Запретить это полиция может только при конкретной опасности (BVerfG 1 BvR 2501/13, п. 14; BVerwG 6 C 12.11 — дело из BW; VG Berlin 1 K 334/23, п. 18, 20). Полицейский прав, если ты действительно мешаешь, подходишь слишком близко или мешаешь ему обеспечивать свою безопасность (руки должны быть на виду, поэтому телефон лучше поставить в держатель), а также если есть конкретные признаки незаконной публикации. Его распоряжение действует сразу (§ 80 Abs. 2 S. 1 Nr. 2 VwGO): выполни его и потом обжалуй в суде."
  }
 },
 {
  "id": "aufnahme-201-strafbar",
  "g": "aufnahme",
  "v": "kommt_drauf_an",
  "cop": "Tonaufnahmen sind verboten, das ist § 201 StGB – Sie machen sich strafbar!",
  "say": "Dann schalte ich den Ton ab und filme nur Bild. § 201 Abs. 1 Nr. 1 StGB erfasst nur das gesprochene Wort, keine Bildaufnahmen.",
  "law": "§ 201 Abs. 1 Nr. 1, § 205 Abs. 1 StGB · BGH 3 StR 97/26 · OLG Düsseldorf 3 RVs 28/22 · OLG Celle 1 ORs 7/23 · OLG Zweibrücken 1 OLG 2 Ss 62/21 · LG Hanau 5 KLs 3350 Js 16251/22",
  "why": "Ob Ton strafbar ist, hängt von der Lage ab. Können Unbeteiligte auf Straße oder Platz mithören, verneinen Gerichte das „nichtöffentlich gesprochene Wort“ (OLG Düsseldorf 3 RVs 28/22, OLG Celle 1 ORs 7/23, VG Berlin 1 K 334/23). Bei einer nächtlichen Autokontrolle ohne Passanten wurde dagegen ein Beifahrer verurteilt (LG Hanau 5 KLs 3350 Js 16251/22: 40 Tagessätze à 100 €). Seit BGH 3 StR 97/26 (10.06.2026) ist klar, dass auch dienstliche Worte von Polizisten geschützt sein können. Nach ausdrücklichem Widerspruch ist „Ton aus, Bild weiter“ der sichere Weg.",
  "src": [
   "https://www.gesetze-im-internet.de/stgb/__201.html",
   "https://www.gesetze-im-internet.de/stgb/__205.html",
   "https://testphase.rechtsinformationen.bund.de/v1/case-law/KORE300362026.html",
   "https://nrwe.justiz.nrw.de/olgs/duesseldorf/j2022/3_RVs_28_22_Urteil_20221104.html",
   "https://voris.wolterskluwer-online.de/browse/document/9fed8342-d472-4a26-a931-c74aaac2ff48",
   "https://www.landesrecht.rlp.de/bsrp/document/NJRE001511713",
   "https://www.lareda.hessenrecht.hessen.de/perma?d=LARE240000089",
   "https://nrwe.justiz.nrw.de/lgs/aachen/lg_aachen/j2020/60_Qs_34_20_Beschluss_20200819.html"
  ],
  "ru": {
   "cop": "Записывать звук запрещено, это § 201 StGB — вы совершаете преступление!",
   "say": "Тогда я выключаю звук и снимаю только изображение. § 201 Abs. 1 Nr. 1 StGB касается только записи речи, а не картинки.",
   "why": "Наказуема ли запись звука, зависит от ситуации. Если на улице или площади разговор могут слышать посторонние, суды не считают слова «непублично сказанными» (OLG Düsseldorf 3 RVs 28/22, OLG Celle 1 ORs 7/23, VG Berlin 1 K 334/23). А вот за запись ночной проверки машины, когда рядом никого не было, осудили пассажира (LG Hanau 5 KLs 3350 Js 16251/22: 40 дневных ставок по 100 €). После решения BGH 3 StR 97/26 (10.06.2026) ясно, что служебные слова полицейских тоже могут быть защищены. Если полицейский прямо возражает, надёжнее выключить звук и продолжать снимать картинку."
  }
 },
 {
  "id": "aufnahme-nehmen-sie-auf",
  "g": "aufnahme",
  "v": "musst_nicht",
  "cop": "Nehmen Sie das etwa auf?",
  "say": "Ja, offen und nur Bild ohne Ton – das erfasst § 201 Abs. 1 Nr. 1 StGB nicht. Ich veröffentliche nichts (§ 22 KUG).",
  "law": "§ 201 Abs. 1 Nr. 1 StGB · § 22 KUG · BGH 3 StR 97/26 · OLG Zweibrücken 1 OLG 2 Ss 62/21",
  "why": "Du musst nicht antworten, aber lüg nie. Wer eine laufende Aufnahme leugnet, nimmt heimlich auf, und die heimliche Aufnahme einer Vernehmung hat der BGH als grundsätzlich unbefugt gewertet (3 StR 97/26). Die offene Ankündigung ist aber keine Erlaubnis: Widersprechen die Beamten, bleibt eine Tonaufnahme ohne faktische Öffentlichkeit unbefugt (OLG Zweibrücken 1 OLG 2 Ss 62/21 Rn. 17).",
  "src": [
   "https://www.gesetze-im-internet.de/stgb/__201.html",
   "https://www.gesetze-im-internet.de/kunsturhg/__22.html",
   "https://testphase.rechtsinformationen.bund.de/v1/case-law/KORE300362026.html",
   "https://www.landesrecht.rlp.de/bsrp/document/NJRE001511713"
  ],
  "ru": {
   "cop": "Вы что, это записываете?",
   "say": "Да, открыто и только изображение без звука — это не подпадает под § 201 Abs. 1 Nr. 1 StGB. Я ничего не публикую (§ 22 KUG).",
   "why": "Отвечать ты не обязан, но никогда не лги. Кто отрицает идущую запись, записывает тайно, а тайную запись допроса BGH признал в принципе неправомерной (3 StR 97/26). Но открытое предупреждение — не разрешение: если полицейские возражают и посторонних рядом нет, запись звука остаётся неправомерной (OLG Zweibrücken 1 OLG 2 Ss 62/21, п. 17)."
  }
 },
 {
  "id": "aufnahme-loeschen",
  "g": "aufnahme",
  "v": "musst_nicht",
  "cop": "Löschen Sie das Video, und zwar sofort!",
  "say": "Ich lösche nichts. Für Beweismittel sieht die StPO Beschlagnahme vor (§ 94 StPO), keine Löschung. Einer Beschlagnahme widerspreche ich, Widerstand leiste ich nicht.",
  "law": "§§ 94, 98 Abs. 1 StPO · § 3 PolG BW · OLG Zweibrücken 1 OLG 2 Ss 62/21",
  "why": "Eine Befugnis, dich zum Löschen zu verpflichten, enthält die StPO nicht. Nach Polizeirecht käme sie allenfalls über die Generalklausel (§ 3 PolG BW) bei konkreter Gefahr in Betracht, etwa wenn eine rechtswidrige Veröffentlichung droht. Recht hat der Beamte insoweit, als er das Handy bei Straftatverdacht beschlagnahmen darf. Gerade weil jederzeit gelöscht werden könnte, bejahte das OLG Zweibrücken die Eilzuständigkeit der Polizei (1 OLG 2 Ss 62/21 Rn. 19).",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__94.html",
   "https://www.gesetze-im-internet.de/stpo/__98.html",
   "https://www.landesrecht-bw.de/perma?j=PolG_BW_!_3",
   "https://www.landesrecht.rlp.de/bsrp/document/NJRE001511713"
  ],
  "ru": {
   "cop": "Удалите видео, и немедленно!",
   "say": "Я ничего не удаляю. Для доказательств StPO предусматривает изъятие (§ 94 StPO), а не удаление. Против изъятия возражаю, сопротивления не оказываю.",
   "why": "Права обязать тебя удалить запись в StPO нет. По полицейскому праву это возможно разве что по общей оговорке (§ 3 PolG BW) при конкретной опасности, например если грозит незаконная публикация. Но при подозрении в преступлении полицейский может изъять телефон. Именно потому, что запись можно в любой момент удалить, OLG Zweibrücken признал срочные полномочия полиции (1 OLG 2 Ss 62/21, п. 19)."
  }
 },
 {
  "id": "aufnahme-handy-herausgeben",
  "g": "aufnahme",
  "v": "kommt_drauf_an",
  "cop": "Geben Sie mir Ihr Handy. Das wird beschlagnahmt.",
  "say": "Freiwillig gebe ich es nicht heraus. Ich widerspreche der Beschlagnahme und beantrage die gerichtliche Entscheidung (§ 98 Abs. 2 StPO). Widerstand leiste ich nicht.",
  "law": "§§ 94, 98 Abs. 1 und 2 StPO · § 113 StGB · § 38 Abs. 3 PolG BW · BVerfG 1 BvR 975/25",
  "why": "Bei Anfangsverdacht (etwa nach § 201 StGB) und Gefahr im Verzug dürfen die Beamten das Handy beschlagnahmen (§§ 94, 98 Abs. 1 StPO), dann loslassen. Wer es festhält oder zurückholen will, riskiert § 113 StGB: Im Fall des OLG Zweibrücken (1 OLG 2 Ss 62/21) folgten Fesselung und Widerstand, am Ende standen 7 Monate auf Bewährung, auch wegen Beleidigung. Nach deinem ausdrücklichen Widerspruch soll die Polizei binnen drei Tagen die gerichtliche Bestätigung beantragen. Gerichte haben solche Beschlagnahmen mehrfach aufgehoben (LG Kassel 2 Qs 111/19, LG Hanau 1 Qs 23/22), und das BVerfG hält das lange Einbehalten des ganzen Handys für kaum zu rechtfertigen (1 BvR 975/25 Rn. 13).",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__94.html",
   "https://www.gesetze-im-internet.de/stpo/__98.html",
   "https://www.gesetze-im-internet.de/stgb/__113.html",
   "https://www.landesrecht-bw.de/perma?j=PolG_BW_!_38",
   "https://testphase.rechtsinformationen.bund.de/v1/case-law/KVRE462712501.html",
   "https://www.lareda.hessenrecht.hessen.de/perma?d=LARE200000323",
   "https://www.lareda.hessenrecht.hessen.de/perma?d=LARE230005211",
   "https://www.landesrecht.rlp.de/bsrp/document/NJRE001511713"
  ],
  "ru": {
   "cop": "Дайте мне ваш телефон. Он изымается.",
   "say": "Добровольно я его не отдаю. Возражаю против изъятия и требую решения суда (§ 98 Abs. 2 StPO). Сопротивления не оказываю.",
   "why": "При первоначальном подозрении (например, по § 201 StGB) и срочности полицейские могут изъять телефон (§§ 94, 98 Abs. 1 StPO), тогда отпусти его. Кто держит телефон или пытается его вернуть, рискует статьёй § 113 StGB: в деле OLG Zweibrücken (1 OLG 2 Ss 62/21) дошло до наручников и сопротивления, итог — 7 месяцев условно, в том числе за оскорбление. После твоего явного возражения полиция должна в течение трёх дней запросить подтверждение суда. Суды не раз отменяли такие изъятия (LG Kassel 2 Qs 111/19, LG Hanau 1 Qs 23/22), а BVerfG считает долгое удержание всего телефона трудно оправдываемым (1 BvR 975/25, п. 13)."
  }
 },
 {
  "id": "aufnahme-pin-entsperren",
  "g": "aufnahme",
  "v": "musst_nicht",
  "cop": "Entsperren Sie das Handy und sagen Sie uns den PIN.",
  "say": "Den PIN nenne ich nicht und entsperre nicht – an meiner Überführung muss ich nicht mitwirken (§ 136 Abs. 1 S. 2 StPO). Widerstand leiste ich nicht.",
  "law": "§ 136 Abs. 1 S. 2, § 163a Abs. 4 S. 2 StPO · § 81b Abs. 1, §§ 94 ff., 102, 105 Abs. 1 StPO · § 48 Abs. 3a, § 71 Abs. 4 AufenthG · BGH 2 StR 232/24",
  "why": "Keine Vorschrift verpflichtet dich, einen Code zu nennen. Ausnahme: Besitzt du als Ausländer überhaupt keinen gültigen Pass, Passersatz oder sonstigen geeigneten Identitätsnachweis, darf dein Handy ausgelesen werden, wenn das zur Klärung von Identität, Staatsangehörigkeit und Rückführungsmöglichkeit erforderlich ist, und du musst die Zugangsdaten dafür zur Verfügung stellen (§ 48 Abs. 3a AufenthG; zuständig ist auch die Landespolizei, § 71 Abs. 4; für EU-Bürger gilt das grundsätzlich nicht, § 1 Abs. 2 Nr. 1 AufenthG). Die Selbstbelastungsfreiheit schützt vor aktiver Mitwirkung, aber nicht davor, Maßnahmen dulden zu müssen (BGH 2 StR 232/24 Rn. 32). Deshalb darf die Polizei deinen Finger zwangsweise auf den Sensor legen, nach dem BGH jedenfalls bei einer richterlich angeordneten Durchsuchung, die auch dem Auffinden von Handys dient. Rechtsgrundlage ist § 81b Abs. 1 i. V. m. §§ 94 ff. StPO (Rn. 35, mit Verweis u. a. auf LG Ravensburg 2 Qs 9/23 jug. und AG Baden-Baden 9 Gs 982/19). Dann nicht wehren.",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__136.html",
   "https://www.gesetze-im-internet.de/stpo/__163a.html",
   "https://www.gesetze-im-internet.de/stpo/__81b.html",
   "https://www.gesetze-im-internet.de/aufenthg_2004/__48.html",
   "https://www.gesetze-im-internet.de/aufenthg_2004/__71.html",
   "https://testphase.rechtsinformationen.bund.de/v1/case-law/KORE711342025.html"
  ],
  "ru": {
   "cop": "Разблокируйте телефон и скажите нам PIN-код.",
   "say": "PIN я не назову и разблокировать не буду — помогать себя изобличать я не обязан (§ 136 Abs. 1 S. 2 StPO). Сопротивления не оказываю.",
   "why": "Никакая норма не обязывает называть код. Исключение: если у тебя как у иностранца вообще нет действующего паспорта, Passersatz или иного подходящего удостоверения личности, данные с твоего телефона могут считать, когда это нужно для установления личности, гражданства и возможности возврата в другую страну, и ты обязан предоставить для этого данные доступа (§ 48 Abs. 3a AufenthG; земельная полиция на это тоже уполномочена, § 71 Abs. 4; к гражданам ЕС это в принципе не относится, § 1 Abs. 2 Nr. 1 AufenthG). Свобода от самообвинения защищает от активного участия, но не от обязанности терпеть меры (BGH 2 StR 232/24, п. 32). Поэтому полиция может силой приложить твой палец к сенсору, по BGH во всяком случае при обыске по постановлению судьи, который направлен и на поиск телефонов. Правовое основание — § 81b Abs. 1 вместе с §§ 94 ff. StPO (п. 35, со ссылкой в том числе на LG Ravensburg 2 Qs 9/23 jug. и AG Baden-Baden 9 Gs 982/19). В этом случае не сопротивляйся."
  }
 },
 {
  "id": "aufnahme-bildrecht-kug",
  "g": "aufnahme",
  "v": "musst_nicht",
  "cop": "Sie dürfen uns nicht filmen – wir haben ein Recht am eigenen Bild!",
  "say": "§ 22 KUG verbietet nur das Verbreiten und öffentliche Zurschaustellen, nicht das Filmen. Ich veröffentliche nichts; die Aufnahme dient nur der Beweissicherung.",
  "law": "§§ 22, 23, 33 KUG · § 201a Abs. 1 Nr. 2 StGB · BVerwG 6 C 12.11 · BVerfG 1 BvR 2501/13",
  "why": "Strafbar ist nach § 33 KUG erst das Verbreiten oder öffentliche Zurschaustellen. Das bloße Anfertigen darf die Polizei nur bei konkreten Anhaltspunkten für eine rechtswidrige Veröffentlichung verbieten (BVerwG 6 C 12.11 Rn. 34 f. – SEK-Einsatz in Schwäbisch Hall; BVerfG 1 BvR 2501/13 Rn. 14). Eine Kopie, an die nur du selbst kommst, ist nach dem Wortlaut weder Verbreiten noch Zurschaustellen; ein Urteil genau dazu gibt es nicht. Recht hat der Beamte, sobald du erkennbare Gesichter postest oder streamst (§ 33 KUG). Filmst du hilflose Menschen, etwa Verletzte nach einem Unfall, kann schon das Herstellen der Aufnahme nach § 201a Abs. 1 Nr. 2 StGB strafbar sein.",
  "src": [
   "https://www.gesetze-im-internet.de/kunsturhg/__22.html",
   "https://www.gesetze-im-internet.de/kunsturhg/__23.html",
   "https://www.gesetze-im-internet.de/kunsturhg/__33.html",
   "https://www.gesetze-im-internet.de/stgb/__201a.html",
   "https://www.bverwg.de/de/280312U6C12.11.0",
   "https://testphase.rechtsinformationen.bund.de/v1/case-law/KVRE411101501.html"
  ],
  "ru": {
   "cop": "Вам нельзя нас снимать — у нас есть право на собственное изображение!",
   "say": "§ 22 KUG запрещает только распространять и публично показывать, а не снимать. Я ничего не публикую; запись нужна только как доказательство.",
   "why": "По § 33 KUG наказуемо только распространение или публичный показ. Саму съёмку полиция может запретить лишь при конкретных признаках незаконной публикации (BVerwG 6 C 12.11, п. 34 и след. — операция спецназа в Швебиш-Халле; BVerfG 1 BvR 2501/13, п. 14). Копия, доступная только тебе, по тексту закона — ни распространение, ни показ; решения суда именно об этом нет. Полицейский прав, как только ты выкладываешь или транслируешь узнаваемые лица (§ 33 KUG). Если ты снимаешь беспомощных людей, например раненых после аварии, наказуемой по § 201a Abs. 1 Nr. 2 StGB может быть уже сама съёмка."
  }
 },
 {
  "id": "aufnahme-datenschutz-dsgvo",
  "g": "aufnahme",
  "v": "kommt_drauf_an",
  "cop": "Das verstößt gegen den Datenschutz – die DSGVO verbietet das.",
  "say": "Ich stütze die Aufnahme auf Art. 6 Abs. 1 lit. f DSGVO: nur Beweissicherung, keine Veröffentlichung. Ordnen Sie das Aufhören an, folge ich unter Widerspruch.",
  "law": "Art. 6 Abs. 1 UAbs. 1 lit. f DSGVO · Art. 2 Abs. 2 lit. c DSGVO · VG Berlin 1 K 334/23 · BGH 3 StR 97/26 · EuGH C-212/13",
  "why": "Das VG Berlin (1 K 334/23, 23.09.2025, Rn. 27–31) sieht in Art. 6 Abs. 1 lit. f DSGVO eine Rechtfertigung dafür, einen Einsatz zur späteren Überprüfung aufzuzeichnen, auch im Rahmen von § 201 StGB. Eine Veröffentlichung deckt das nicht. Nach demselben Urteil (Leitsatz 5) kann ein DSGVO-Verstoß aber eine Gefahr sein, gegen die die Polizei einschreiten darf. Der BGH (3 StR 97/26 Rn. 9) verneinte die Rechtfertigung für die heimliche Aufnahme einer Vernehmung. Auf die „Haushaltsausnahme“ (Art. 2 Abs. 2 lit. c DSGVO) solltest du dich nicht verlassen: Nach EuGH C-212/13 fällt eine Kamera, die den öffentlichen Raum erfasst, nicht darunter.",
  "src": [
   "https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679",
   "https://gesetze.berlin.de/bsbe/document/NJRE001624474",
   "https://testphase.rechtsinformationen.bund.de/v1/case-law/KORE300362026.html",
   "https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:62013CJ0212"
  ],
  "ru": {
   "cop": "Это нарушает защиту данных — DSGVO это запрещает.",
   "say": "Я основываю запись на Art. 6 Abs. 1 lit. f DSGVO: только для доказательств, без публикации. Если вы прикажете прекратить, подчинюсь, но с возражением.",
   "why": "VG Berlin (1 K 334/23, 23.09.2025, п. 27–31) считает, что Art. 6 Abs. 1 lit. f DSGVO оправдывает запись операции для последующей проверки, в том числе в рамках § 201 StGB. Публикацию это не покрывает. Но по тому же решению (тезис 5) нарушение DSGVO может само быть опасностью, против которой полиция вправе вмешаться. BGH (3 StR 97/26, п. 9) не признал такое оправдание для тайной записи допроса. На «бытовое исключение» (Art. 2 Abs. 2 lit. c DSGVO) не полагайся: по EuGH C-212/13 камера, снимающая общественное пространство, под него не подпадает."
  }
 },
 {
  "id": "aufnahme-bodycam-sichern",
  "g": "aufnahme",
  "v": "musst",
  "cop": "Ich schalte jetzt meine Bodycam ein.",
  "say": "In Ordnung. Ich beantrage, die Aufnahme als Beweis aufzubewahren und nicht zu löschen (§ 44 Abs. 10 S. 2, § 75 Abs. 5 PolG BW).",
  "law": "§ 44 Abs. 5, 8, 10, 11 PolG BW · § 75 Abs. 5 S. 3 PolG BW · § 2 Abs. 2 PolG BW · LG Hanau 1 Qs 23/22 · LG Hanau 5 KLs 3350 Js 16251/22",
  "why": "Die Bodycam darf zur Abwehr einer Gefahr eingesetzt werden (§ 44 Abs. 5 PolG BW). Verhindern darfst du das nicht, widersprechen schon. Länger als 60 Sekunden gespeichert wird nur bei Gefahr für Leib oder Leben (Abs. 8), sonst wird automatisch gelöscht (Abs. 11). Was gespeichert ist, wird spätestens nach vier Wochen gelöscht, außer es wird u. a. „zur Behebung einer bestehenden Beweisnot“ gebraucht (Abs. 10 S. 2). Statt zu löschen, muss die Polizei die Verarbeitung einschränken, wenn eine Löschung deine schutzwürdigen Interessen beeinträchtigen würde oder die Daten für Beweiszwecke gebraucht werden (§ 75 Abs. 5 S. 3 Nr. 1, 2; dein Recht darauf: § 92 Abs. 3). Später kannst du kostenlos Auskunft verlangen, was über dich gespeichert ist (§ 91 PolG BW). Die Bodycam macht deine eigene Tonaufnahme nicht sicher legal: Das LG Hanau hob deshalb zwar eine Beschlagnahme auf (1 Qs 23/22), verurteilte im selben Fall später aber doch (5 KLs 3350 Js 16251/22).",
  "src": [
   "https://www.landesrecht-bw.de/perma?d=jlr-NNLBW00007D29NN00000000058",
   "https://www.landesrecht-bw.de/perma?j=PolG_BW_!_75",
   "https://www.landesrecht-bw.de/perma?j=PolG_BW_!_2",
   "https://www.lareda.hessenrecht.hessen.de/perma?d=LARE230005211",
   "https://www.lareda.hessenrecht.hessen.de/perma?d=LARE240000089"
  ],
  "ru": {
   "cop": "Я сейчас включаю нательную камеру.",
   "say": "Хорошо. Прошу сохранить эту запись как доказательство и не удалять её (§ 44 Abs. 10 S. 2, § 75 Abs. 5 PolG BW).",
   "why": "Нательную камеру можно применять для предотвращения опасности (§ 44 Abs. 5 PolG BW). Помешать этому ты не вправе, возразить можешь. Дольше 60 секунд запись хранится, только если есть опасность для жизни или здоровья (Abs. 8), иначе она удаляется автоматически (Abs. 11). Сохранённое удаляется не позже чем через четыре недели, если оно не нужно, в том числе «для устранения нехватки доказательств» (Abs. 10 S. 2). Вместо удаления полиция обязана ограничить обработку, если удаление повредит твоим законным интересам или данные нужны как доказательство (§ 75 Abs. 5 S. 3 Nr. 1, 2). Камера полиции не делает твою собственную запись звука законной: LG Hanau из-за неё сначала отменил изъятие телефона (1 Qs 23/22), но в том же деле позже всё же осудил (5 KLs 3350 Js 16251/22)."
  }
 },
 {
  "id": "aufnahme-eigene-kamera",
  "g": "aufnahme",
  "v": "musst_nicht",
  "cop": "Wir filmen selbst mit der Bodycam, Sie müssen nicht filmen.",
  "say": "Ihre Bodycam löscht ohne Gefahr für Leib oder Leben nach 60 Sekunden. Ich filme nur Bild ohne Ton, behindere nicht und veröffentliche nichts.",
  "law": "§ 44 Abs. 8, 10, 11 PolG BW · BVerwG 6 C 12.11 · BVerfG 1 BvR 2501/13 · § 201 Abs. 1 Nr. 1 StGB",
  "why": "Eine Regel „nur eine Kamera“ gibt es nicht. Das Filmen darf die Polizei nur bei einer konkreten Gefahr verbieten, etwa konkreten Anhaltspunkten für eine rechtswidrige Veröffentlichung (BVerwG 6 C 12.11 Rn. 34 f.; BVerfG 1 BvR 2501/13 Rn. 14). Die Bodycam gehört der Polizei: Ihre Aufnahme wird nach 60 Sekunden automatisch gelöscht, außer Tatsachen sprechen für eine Gefahr für Leib oder Leben (§ 44 Abs. 8, 11 PolG BW); was gespeichert bleibt, spätestens nach vier Wochen, außer es wird etwa zur Strafverfolgung oder als Beweis gebraucht (Abs. 10). Dass sie eingeschaltet wird, kannst du nicht verlangen, und an die Aufnahme kommst du in der Regel nur über Akteneinsicht im Strafverfahren (§ 147 Abs. 4, § 406e StPO), am einfachsten über einen Anwalt. Deine eigene Aufnahme ist deshalb oft der einzige Beweis. Ton nimmst du trotzdem nur mit Einwilligung auf (§ 201 Abs. 1 Nr. 1 StGB).",
  "src": [
   "https://www.landesrecht-bw.de/perma?d=jlr-NNLBW00007D29NN00000000058",
   "https://www.bverwg.de/de/280312U6C12.11.0",
   "https://testphase.rechtsinformationen.bund.de/v1/case-law/KVRE411101501.html",
   "https://www.gesetze-im-internet.de/stgb/__201.html"
  ],
  "ru": {
   "cop": "Мы сами снимаем на нательную камеру, вам снимать не нужно.",
   "say": "Ваша камера без опасности для жизни или здоровья удаляет запись через 60 секунд. Я снимаю только изображение без звука, не мешаю и ничего не публикую.",
   "why": "Правила «только одна камера» нет. Запретить съёмку полиция может лишь при конкретных признаках незаконной публикации (BVerwG 6 C 12.11, п. 34 и след.; BVerfG 1 BvR 2501/13, п. 14). Нательная камера принадлежит полиции: её запись удаляется автоматически через 60 секунд, если факты не указывают на опасность для жизни или здоровья (§ 44 Abs. 8, 11 PolG BW); сохранённое — не позже чем через четыре недели (Abs. 10). Требовать её включения ты не можешь, а получить запись обычно можно только через ознакомление адвоката с делом. Поэтому твоя собственная запись часто единственное доказательство. Звук всё равно пишешь только с согласия (§ 201 Abs. 1 Nr. 1 StGB)."
  }
 },
 {
  "id": "aufnahme-platzverweis-filmer",
  "g": "aufnahme",
  "v": "musst",
  "cop": "Sie behindern den Einsatz. Gehen Sie weg – Platzverweis!",
  "say": "Ich gehe sofort. Bloßes Filmen ist keine Gefahr nach § 30 Abs. 1 PolG BW; ich filme außerhalb des Bereichs weiter und lasse den Platzverweis prüfen.",
  "law": "§ 30 Abs. 1 PolG BW · § 164 StPO · § 80 Abs. 2 S. 1 Nr. 2 VwGO · BVerwG 6 C 12.11 · VG Berlin 1 K 334/23",
  "why": "Ein Platzverweis setzt eine Gefahr oder Störung voraus (§ 30 Abs. 1 PolG BW). Wer nur am Rand filmt, stört nicht (VG Berlin 1 K 334/23 Rn. 20). Der Platzverweis ist aber gerade das mildere Mittel, um Abstand zu schaffen; aus der Distanz weiter zu beobachten bleibt erlaubt (BVerwG 6 C 12.11 Rn. 31). Recht hat der Beamte, wenn du tatsächlich störst, dich einmischst oder im Weg stehst. Dann darf er dich sogar festhalten (§ 164 StPO). Befolge den Platzverweis deshalb immer sofort (§ 80 Abs. 2 S. 1 Nr. 2 VwGO), sonst drohen Zwang und Gewahrsam.",
  "src": [
   "https://www.landesrecht-bw.de/perma?j=PolG_BW_!_30",
   "https://www.gesetze-im-internet.de/stpo/__164.html",
   "https://www.gesetze-im-internet.de/vwgo/__80.html",
   "https://www.bverwg.de/de/280312U6C12.11.0",
   "https://gesetze.berlin.de/bsbe/document/NJRE001624474"
  ],
  "ru": {
   "cop": "Вы мешаете операции. Уходите — Platzverweis!",
   "say": "Я сразу ухожу. Сама по себе съёмка — не опасность по § 30 Abs. 1 PolG BW; я продолжу снимать за пределами этой зоны и обжалую это требование.",
   "why": "Для Platzverweis нужна опасность или нарушение порядка (§ 30 Abs. 1 PolG BW). Кто просто снимает в стороне, не мешает (VG Berlin 1 K 334/23, п. 20). Но Platzverweis как раз более мягкая мера, чтобы создать дистанцию; продолжать наблюдать издалека можно (BVerwG 6 C 12.11, п. 31). Полицейский прав, если ты действительно мешаешь, вмешиваешься или стоишь на пути. Тогда он может тебя даже задержать (§ 164 StPO). Поэтому всегда сразу выполняй требование уйти (§ 80 Abs. 2 S. 1 Nr. 2 VwGO), иначе грозят принуждение и задержание."
  }
 },
 {
  "id": "aufnahme-ausweis-wegen-filmen",
  "g": "aufnahme",
  "v": "kommt_drauf_an",
  "cop": "Sie filmen uns? Dann zeigen Sie mir mal Ihren Ausweis.",
  "say": "Nennen Sie mir bitte den Grund. Bloßes Filmen ist keine Gefahr nach § 27 Abs. 1 Nr. 1 PolG BW. Meine Personalien nenne ich trotzdem (§ 111 OWiG).",
  "law": "§ 27 Abs. 1 Nr. 1, Abs. 2 PolG BW · § 163b Abs. 1 StPO · § 111 Abs. 1 OWiG · § 1 Abs. 1 PAuswG · BVerfG 1 BvR 2501/13",
  "why": "Eine Identitätsfeststellung nur wegen des Filmens verletzt ohne konkrete Gefahr Grundrechte (BVerfG 1 BvR 2501/13 Rn. 14 f.). Dort steht in Rn. 11 auch: Es gibt keine allgemeine Pflicht, sich ohne Grund auszuweisen. § 27 Abs. 1 Nr. 1 PolG BW verlangt eine Gefahr im einzelnen Falle. Recht hat der Beamte, wenn er dir eine Straftat vorwirft, etwa § 201 StGB wegen einer Tonaufnahme: Dann darf er deine Identität nach § 163b Abs. 1 StPO feststellen. An Orten nach § 27 Abs. 1 Nr. 2–7 PolG BW braucht er gar keine konkrete Gefahr. Personalien nennen, zur Sache nichts sagen.",
  "src": [
   "https://www.landesrecht-bw.de/perma?j=PolG_BW_!_27",
   "https://www.gesetze-im-internet.de/stpo/__163b.html",
   "https://www.gesetze-im-internet.de/owig_1968/__111.html",
   "https://www.gesetze-im-internet.de/pauswg/__1.html",
   "https://www.gesetze-im-internet.de/fev_2010/__4.html",
   "https://testphase.rechtsinformationen.bund.de/v1/case-law/KVRE411101501.html"
  ],
  "ru": {
   "cop": "Вы нас снимаете? Тогда покажите-ка документ.",
   "say": "Назовите, пожалуйста, основание. Сама по себе съёмка — не опасность по § 27 Abs. 1 Nr. 1 PolG BW. Свои данные я всё равно назову (§ 111 OWiG).",
   "why": "Установление личности только из-за съёмки без конкретной опасности нарушает основные права (BVerfG 1 BvR 2501/13, п. 14 и след.). Там же в п. 11 сказано: общей обязанности предъявлять документы без причины нет. § 27 Abs. 1 Nr. 1 PolG BW требует опасности в конкретном случае. Полицейский прав, если обвиняет тебя в преступлении, например по § 201 StGB из-за записи звука: тогда он может установить личность по § 163b Abs. 1 StPO. А в местах по § 27 Abs. 1 Nr. 2–7 PolG BW конкретная опасность ему вообще не нужна. Назови свои данные, но по существу ничего не говори."
  }
 },
 {
  "id": "aufnahme-livestream",
  "g": "aufnahme",
  "v": "musst",
  "cop": "Streamen Sie das etwa live? Hören Sie sofort damit auf!",
  "say": "Ich beende den Livestream und speichere nur privat. Verbreiten von Bildnissen ist nach §§ 22, 33 KUG eingeschränkt, das bloße Aufnehmen des Bildes nicht.",
  "law": "§§ 22, 23, 33 KUG · § 201 Abs. 1 Nr. 2 StGB · LG Hanau 5 KLs 3350 Js 16251/22",
  "why": "Ein Livestream zeigt Bild und Ton sofort Unbekannten. Das kann § 33 KUG erfüllen und beim Ton § 201 Abs. 1 Nr. 2 StGB („einem Dritten zugänglich macht“). Er schafft auch keine „faktische Öffentlichkeit“, die eine Tonaufnahme legal machen würde (LG Hanau 5 KLs 3350 Js 16251/22). Ausnahmen nach § 23 KUG (Zeitgeschichte, Versammlungen) sind Einzelfallfragen. Für die App gilt deshalb: sichern ja, senden nein.",
  "src": [
   "https://www.gesetze-im-internet.de/kunsturhg/__22.html",
   "https://www.gesetze-im-internet.de/kunsturhg/__23.html",
   "https://www.gesetze-im-internet.de/kunsturhg/__33.html",
   "https://www.gesetze-im-internet.de/stgb/__201.html",
   "https://www.lareda.hessenrecht.hessen.de/perma?d=LARE240000089",
   "https://www.lareda.hessenrecht.hessen.de/perma?d=LARE230005211"
  ],
  "ru": {
   "cop": "Вы что, ведёте прямую трансляцию? Немедленно прекратите!",
   "say": "Я прекращаю трансляцию и сохраняю запись только для себя. §§ 22, 33 KUG ограничивают распространение изображений людей, а не саму съёмку картинки.",
   "why": "Прямая трансляция сразу показывает картинку и звук незнакомым людям. Это может подпадать под § 33 KUG, а по звуку — под § 201 Abs. 1 Nr. 2 StGB («делает доступной третьему лицу»). И она не создаёт «фактической публичности», которая сделала бы запись звука законной (LG Hanau 5 KLs 3350 Js 16251/22). Исключения по § 23 KUG (события современности, собрания) решаются в каждом случае отдельно. Поэтому правило для приложения: сохранять да, транслировать нет."
  }
 },
 {
  "id": "aufnahme-zeuge-video-herausgeben",
  "g": "aufnahme",
  "v": "kommt_drauf_an",
  "cop": "Sie haben das gefilmt? Geben Sie uns Ihr Handy, Sie sind Zeuge.",
  "say": "Eine Kopie des Videos gebe ich Ihnen gern. Das Handy gebe ich nicht freiwillig heraus; einer Beschlagnahme widerspreche ich ohne Widerstand (§ 98 Abs. 2 StPO).",
  "law": "§§ 94, 95, 98 Abs. 2 StPO · § 52 StPO · § 70 StPO · BVerfG 1 BvR 975/25",
  "why": "Wer ein Beweismittel besitzt, muss es auf Verlangen vorlegen und ausliefern (§ 95 Abs. 1 StPO). Ordnungsmittel nach § 70 StPO kann aber nicht der Beamte vor Ort verhängen, und wer das Zeugnis verweigern darf, ist ausgenommen (§ 95 Abs. 2 S. 2 StPO). Beschlagnahmen darf die Polizei trotzdem (§§ 94 Abs. 2, 98 Abs. 1 StPO). Das BVerfG sieht es als milderes Mittel an, nur das relevante Video zu spiegeln und zu sichern, statt das ganze Handy einzubehalten (1 BvR 975/25 Rn. 13).",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__95.html",
   "https://www.gesetze-im-internet.de/stpo/__94.html",
   "https://www.gesetze-im-internet.de/stpo/__98.html",
   "https://www.gesetze-im-internet.de/stpo/__70.html",
   "https://www.gesetze-im-internet.de/stpo/__52.html",
   "https://testphase.rechtsinformationen.bund.de/v1/case-law/KVRE462712501.html"
  ],
  "ru": {
   "cop": "Вы это сняли? Дайте нам телефон, вы свидетель.",
   "say": "Копию видео я охотно вам дам. Телефон добровольно не отдаю; против изъятия возражаю, но без сопротивления (§ 98 Abs. 2 StPO).",
   "why": "Кто хранит доказательство, обязан по требованию предъявить и выдать его (§ 95 Abs. 1 StPO). Но меры принуждения по § 70 StPO полицейский на месте назначить не может, а люди с правом отказа от показаний от этой обязанности освобождены (§ 95 Abs. 2 S. 2 StPO). Изъять телефон полиция всё равно может (§§ 94 Abs. 2, 98 Abs. 1 StPO). BVerfG считает более мягкой мерой скопировать и сохранить только нужное видео, а не удерживать весь телефон (1 BvR 975/25, п. 13)."
  }
 },
 {
  "id": "aufnahme-vernehmung-wache",
  "g": "aufnahme",
  "v": "musst",
  "cop": "Handy weg – das hier ist eine Vernehmung, hier wird nichts aufgenommen.",
  "say": "In Ordnung, ich nehme nichts auf. Ich beantrage die Aufzeichnung der Vernehmung (§ 136 Abs. 4 StPO). Ohne Anwalt sage ich nichts zur Sache.",
  "law": "§ 136 Abs. 1 S. 2, Abs. 4 S. 1 StPO · § 163a Abs. 4 S. 2 StPO · § 201 Abs. 1 Nr. 1 StGB · BGH 3 StR 97/26",
  "why": "Der BGH hat am 10.06.2026 entschieden: Die heimliche private Tonaufnahme einer Vernehmung ist grundsätzlich unbefugt, wenn verfahrensrechtliche Möglichkeiten einer offenen Aufnahme nicht genutzt werden, etwa die Aufzeichnung nach § 136 Abs. 4 StPO (3 StR 97/26; die Verurteilung nach § 201 StGB wurde bestätigt). Die amtliche Aufzeichnung steht meist im Ermessen („kann“), einen Anspruch darauf hast du nicht. Aussagen musst du aber ohnehin nicht (§ 136 Abs. 1 S. 2 StPO).",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__136.html",
   "https://www.gesetze-im-internet.de/stpo/__163a.html",
   "https://www.gesetze-im-internet.de/stgb/__201.html",
   "https://testphase.rechtsinformationen.bund.de/v1/case-law/KORE300362026.html"
  ],
  "ru": {
   "cop": "Уберите телефон — это допрос, здесь ничего не записывается.",
   "say": "Хорошо, я ничего не записываю. Прошу вести запись допроса (§ 136 Abs. 4 StPO). Без адвоката по существу ничего не скажу.",
   "why": "BGH 10.06.2026 решил: тайная частная запись звука на допросе в принципе неправомерна, если не использованы процессуальные возможности открытой записи, например запись по § 136 Abs. 4 StPO (3 StR 97/26; приговор по § 201 StGB оставлен в силе). Официальная запись чаще всего на усмотрение полиции («может»), права на неё у тебя нет. Но давать показания ты в любом случае не обязан (§ 136 Abs. 1 S. 2 StPO)."
  }
 },
 {
  "id": "druck-aussagen-pflicht",
  "g": "druck",
  "v": "musst_nicht",
  "cop": "Sie müssen jetzt aussagen. Wer schweigt, macht sich verdächtig.",
  "say": "Ich mache keine Angaben zur Sache (§ 136 Abs. 1 Satz 2, § 163a Abs. 4 StPO). Mein Schweigen darf nicht gegen mich gewertet werden.",
  "law": "§ 136 Abs. 1 Satz 2 StPO · § 163a Abs. 4 Satz 2 StPO · § 46 Abs. 1 OWiG · § 40 Abs. 1 PolG BW · § 43 Abs. 1 Satz 3, 6 PolG BW · § 111 OWiG · BGH 3 StR 344/15",
  "why": "Als Beschuldigter, im Bußgeldverfahren als Betroffener (§ 46 Abs. 1 OWiG), darfst du zur Sache schweigen. Bei der Polizei gilt das über § 163a Abs. 4 Satz 2 StPO. Zwang zur Aussage ist auch polizeirechtlich verboten (§ 40 Abs. 1 PolG BW). Nach dem BGH darf weder durchgehendes noch anfängliches Schweigen gegen dich gewertet werden. Recht hat der Beamte bei den Personalien (§ 111 OWiG). Ebenso, wenn eine Auskunft eine unmittelbar bevorstehende Gefahr für Leben, Gesundheit oder Freiheit abwenden soll (§ 43 Abs. 1 Satz 3, 6 PolG BW).",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__136.html",
   "https://www.gesetze-im-internet.de/stpo/__163a.html",
   "https://www.gesetze-im-internet.de/owig_1968/__46.html",
   "https://www.gesetze-im-internet.de/owig_1968/__111.html",
   "https://www.landesrecht-bw.de/perma?j=PolG_BW_!_40",
   "https://www.landesrecht-bw.de/perma?j=PolG_BW_!_43",
   "https://www.bundesgerichtshof.de/SharedDocs/Entscheidungen/DE/Strafsenate/3_StS/2015/3_StR_344-15.pdf?__blob=publicationFile&v=1"
  ],
  "ru": {
   "cop": "Вы обязаны сейчас дать показания. Кто молчит, тот вызывает подозрение.",
   "say": "Я не даю показаний по делу (§ 136 абз. 1 предл. 2, § 163a абз. 4 StPO). Моё молчание нельзя толковать против меня.",
   "why": "Как подозреваемый, а в деле об административном правонарушении как лицо, против которого оно ведётся (§ 46 абз. 1 OWiG), ты вправе молчать по существу. В полиции это действует через § 163a абз. 4 предл. 2 StPO. Принуждать к показаниям запрещено и по полицейскому праву (§ 40 абз. 1 PolG BW). По практике BGH ни полное, ни первоначальное молчание нельзя толковать против тебя. Полицейский прав в отношении личных данных (§ 111 OWiG). Прав он и тогда, когда сведения нужны, чтобы предотвратить непосредственно грозящую опасность для жизни, здоровья или свободы (§ 43 абз. 1 предл. 3, 6 PolG BW)."
  }
 },
 {
  "id": "druck-fragen-zur-fahrt",
  "g": "druck",
  "v": "musst_nicht",
  "cop": "Wo kommen Sie her, wo wollen Sie hin? Haben Sie etwas getrunken? Das müssen Sie mir beantworten.",
  "say": "Meine Personalien gebe ich an. Weitere Fragen beantworte ich nicht – dazu bin ich nicht verpflichtet (§ 43 Abs. 1 S. 2 PolG BW, § 136 Abs. 1 S. 2 StPO).",
  "law": "§ 36 Abs. 5 StVO · § 111 Abs. 1 OWiG · § 43 Abs. 1 Satz 2, 3, 5, 6 PolG BW · § 136 Abs. 1 Satz 2, § 163a Abs. 4 StPO",
  "why": "§ 36 Abs. 5 StVO verpflichtet zum Anhalten und zum Befolgen von Anweisungen (Papiere zeigen, aussteigen), nicht zu Antworten über Fahrt, Ziel oder Alkohol. Bei der polizeirechtlichen Befragung sind nur Name, Vorname, Datum und Ort der Geburt, Wohnanschrift und Staatsangehörigkeit Pflicht (§ 43 Abs. 1 S. 2 PolG BW); § 111 OWiG ahndet zusätzlich falsche oder verweigerte Angaben zu Familienstand und Beruf. Recht hat der Beamte, wenn die Frage eine Gefahr für Leben, Gesundheit, Freiheit oder bedeutende fremde Sach- oder Vermögenswerte abwehren soll, z. B. ob jemand verletzt ist (§ 43 Abs. 1 S. 3 PolG BW). Dich selbst oder Angehörige belasten musst du auch dann nur bei unmittelbar bevorstehender Gefahr für Leben, Gesundheit oder Freiheit (S. 5, 6).",
  "src": [
   "https://www.gesetze-im-internet.de/stvo_2013/__36.html",
   "https://www.gesetze-im-internet.de/owig_1968/__111.html",
   "https://www.landesrecht-bw.de/perma?j=PolG_BW_!_43",
   "https://www.gesetze-im-internet.de/stpo/__136.html",
   "https://www.gesetze-im-internet.de/stpo/__163a.html"
  ],
  "ru": {
   "cop": "Откуда едете, куда направляетесь? Вы что-нибудь пили? На это вы обязаны ответить.",
   "say": "Свои личные данные назову. На другие вопросы не отвечаю — я не обязан (§ 43 абз. 1 предл. 2 PolG BW, § 136 абз. 1 предл. 2 StPO).",
   "why": "§ 36 абз. 5 StVO обязывает остановиться и выполнять указания (показать документы, выйти), но не отвечать на вопросы о поездке, цели или алкоголе. При полицейском опросе обязательны только имя, фамилия, дата и место рождения, адрес и гражданство (§ 43 абз. 1 предл. 2 PolG BW); § 111 OWiG дополнительно штрафует за ложные или не названные сведения о семейном положении и профессии. Полицейский прав, если вопрос нужен для отвращения опасности для жизни, здоровья, свободы или значительного чужого имущества, например ранен ли кто-то (§ 43 абз. 1 предл. 3 PolG BW). Изобличать себя или родственников и тогда нужно только при непосредственно грозящей опасности для жизни, здоровья или свободы (предл. 5, 6)."
  }
 },
 {
  "id": "druck-nur-ein-gespraech",
  "g": "druck",
  "v": "kommt_drauf_an",
  "cop": "Das ist keine Vernehmung, wir unterhalten uns nur. Erzählen Sie doch mal, was passiert ist.",
  "say": "Werde ich beschuldigt? Dann nennen Sie mir bitte den Vorwurf und belehren mich (§ 163a Abs. 4 StPO). Zur Sache sage ich nichts.",
  "law": "§ 163a Abs. 4 Satz 1, 2 StPO · § 136 Abs. 1 Satz 2 StPO · § 168b Abs. 3 StPO · BGH 1 StR 3/07 · BGH 1 StR 454/06",
  "why": "Vor einem konkreten Verdacht darf die Polizei „informatorisch“ fragen, ohne zu belehren; ist der Verdacht aber so stark, dass sie dich nur noch willkürlich als Nicht-Beschuldigten behandeln könnte, muss sie den Vorwurf nennen und belehren (BGH 1 StR 3/07), und die Belehrung ist zu dokumentieren (§ 168b Abs. 3 StPO). Aussagen ohne Belehrung sind regelmäßig unverwertbar, wenn später widersprochen wird (BGH 1 StR 454/06) – darauf nicht verlassen, einfach nichts sagen.",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__163a.html",
   "https://www.gesetze-im-internet.de/stpo/__136.html",
   "https://www.gesetze-im-internet.de/stpo/__168b.html",
   "https://www.bundesgerichtshof.de/SharedDocs/Entscheidungen/DE/Strafsenate/1_StS/2007/1_StR___3-07.pdf?__blob=publicationFile&v=1",
   "https://www.bundesgerichtshof.de/SharedDocs/Entscheidungen/DE/Strafsenate/1_StS/2006/1_StR_454-06.pdf?__blob=publicationFile&v=1"
  ],
  "ru": {
   "cop": "Это не допрос, мы просто беседуем. Расскажите-ка, что произошло.",
   "say": "Меня в чём-то подозревают? Тогда, пожалуйста, назовите обвинение и разъясните мои права (§ 163a абз. 4 StPO). По делу я ничего не скажу.",
   "why": "Пока нет конкретного подозрения, полиция может задавать «ознакомительные» вопросы без разъяснения прав; но если подозрение настолько сильное, что считать тебя не подозреваемым было бы произволом, она обязана назвать обвинение и разъяснить права (BGH 1 StR 3/07), а разъяснение должно быть задокументировано (§ 168b абз. 3 StPO). Показания без разъяснения прав, как правило, нельзя использовать, если позже заявить возражение (BGH 1 StR 454/06), — но не рассчитывай на это, просто молчи."
  }
 },
 {
  "id": "druck-vorteil-versprechen",
  "g": "druck",
  "v": "kommt_drauf_an",
  "cop": "Wenn Sie es jetzt zugeben, wird es billiger – und Sie dürfen gleich weiterfahren.",
  "say": "Ich mache keine Angaben zur Sache. Einen gesetzlich nicht vorgesehenen Vorteil für eine Aussage dürfen Sie nicht versprechen (§ 136a Abs. 1 Satz 3 StPO).",
  "law": "§ 136a Abs. 1 Satz 3, Abs. 3 Satz 2 StPO · § 163a Abs. 4 Satz 2 StPO · § 46 Abs. 1 OWiG · § 56 Abs. 2, 3 OWiG · § 57 Abs. 2 OWiG · OLG Köln 2 Ws 264/13 · BGH 5 StR 332/21",
  "why": "Verboten ist, eine Aussage gegen einen Vorteil zu tauschen, den das Gesetz nicht vorsieht. Beispiele: „kein Haftbefehl“, „gleich weiterfahren“ oder eine mildere Strafe, über die die Polizei gar nicht entscheidet. Eine so erlangte Aussage ist absolut unverwertbar (§ 136a Abs. 3 Satz 2 StPO; OLG Köln 2 Ws 264/13; BGH 5 StR 332/21). Erlaubt ist der wahre Hinweis auf gesetzliche Folgen: Ein Geständnis kann vor Gericht strafmildernd wirken. Ein Verwarnungsgeld löst keine Verfahrenskosten aus (§ 56 Abs. 3 Satz 2 OWiG). Dafür musst du nichts zugeben, es genügt dein Einverständnis (§ 56 Abs. 2 OWiG).",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__136a.html",
   "https://www.gesetze-im-internet.de/stpo/__163a.html",
   "https://www.gesetze-im-internet.de/owig_1968/__46.html",
   "https://www.gesetze-im-internet.de/owig_1968/__56.html",
   "https://www.gesetze-im-internet.de/owig_1968/__57.html",
   "https://nrwe.justiz.nrw.de/olgs/koeln/j2013/2_Ws_264_13_Beschluss_20130624.html",
   "https://www.bundesgerichtshof.de/SharedDocs/Entscheidungen/DE/Strafsenate/5_StS/2021/5_StR_332-21.pdf?__blob=publicationFile&v=1"
  ],
  "ru": {
   "cop": "Если сейчас признаетесь, выйдет дешевле — и сможете сразу ехать дальше.",
   "say": "Я не даю показаний по делу. Обещать за показания выгоду, не предусмотренную законом, вы не вправе (§ 136a абз. 1 предл. 3 StPO).",
   "why": "Запрещено обменивать показания на выгоду, которую закон не предусматривает. Например: «не будет ареста», «сразу поедете дальше» или более мягкое наказание, о котором полиция вообще не решает. Такие показания абсолютно нельзя использовать (§ 136a абз. 3 предл. 2 StPO; OLG Köln 2 Ws 264/13; BGH 5 StR 332/21). Разрешено правдиво указать на предусмотренные законом последствия: признание в суде может смягчить наказание. Предупредительный штраф (Verwarnungsgeld) не влечёт расходов по делу (§ 56 абз. 3 предл. 2 OWiG). Признавать для этого ничего не нужно, достаточно твоего согласия (§ 56 абз. 2 OWiG)."
  }
 },
 {
  "id": "druck-drohung-freiwillig",
  "g": "druck",
  "v": "kommt_drauf_an",
  "cop": "Reden ist freiwillig – aber wenn Sie schweigen, nehmen wir Sie mit, und dann wird es richtig teuer.",
  "say": "Meine Personalien haben Sie, zur Sache schweige ich. Drohen mit Mitnahme wegen Schweigens verbietet § 136a Abs. 1 Satz 3 StPO. Ich leiste keinen Widerstand.",
  "law": "§ 136a Abs. 1 Satz 3 StPO · § 163a Abs. 4 Satz 2 StPO · § 40 Abs. 2 PolG BW · § 163b Abs. 1 Satz 2 StPO · § 81a Abs. 2 Satz 2 StPO · § 46 Abs. 4 OWiG · § 113 StGB",
  "why": "Verboten ist, mit einer rechtlich unzulässigen Maßnahme zu drohen, um eine Aussage zu bekommen (§ 136a Abs. 1 Satz 3 StPO). Bei der Polizei gilt das über § 163a Abs. 4 Satz 2 StPO, bei rein polizeirechtlichen Befragungen über § 40 Abs. 2 PolG BW. Schweigen zur Sache ist kein Grund für eine Mitnahme. Recht hat der Beamte, wenn er eine ohnehin zulässige Maßnahme ankündigt. Beispiele: Mitnahme zur Identitätsfeststellung, wenn du keine Personalien angibst (§ 163b Abs. 1 Satz 2 StPO), oder eine Blutprobe bei Verdacht auf Trunkenheit am Steuer (§ 81a Abs. 2 Satz 2 StPO; bei § 24a StVG: § 46 Abs. 4 OWiG). Dann dulden, nicht wehren (§ 113 StGB).",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__136a.html",
   "https://www.gesetze-im-internet.de/stpo/__163a.html",
   "https://www.landesrecht-bw.de/perma?j=PolG_BW_!_40",
   "https://www.gesetze-im-internet.de/stpo/__163b.html",
   "https://www.gesetze-im-internet.de/stpo/__81a.html",
   "https://www.gesetze-im-internet.de/owig_1968/__46.html",
   "https://www.gesetze-im-internet.de/stgb/__113.html"
  ],
  "ru": {
   "cop": "Говорить — дело добровольное, но если будете молчать, заберём вас, и тогда обойдётся это дорого.",
   "say": "Мои личные данные у вас есть, по делу я молчу. Угрожать задержанием за молчание запрещает § 136a абз. 1 предл. 3 StPO. Я не сопротивляюсь.",
   "why": "Запрещено угрожать недопустимой мерой, чтобы получить показания (§ 136a абз. 1 предл. 3 StPO). В полиции это действует через § 163a абз. 4 предл. 2 StPO, при чисто полицейских опросах через § 40 абз. 2 PolG BW. Молчание по делу — не причина тебя забирать. Полицейский прав, если объявляет меру, которая и так допустима. Например: доставить в участок для установления личности, если ты не назвал данные (§ 163b абз. 1 предл. 2 StPO), или взять кровь при подозрении на вождение в нетрезвом виде (§ 81a абз. 2 предл. 2 StPO; при правонарушении по § 24a StVG — § 46 абз. 4 OWiG). Тогда подчиниться и не сопротивляться (§ 113 StGB)."
  }
 },
 {
  "id": "druck-nichts-zu-verbergen",
  "g": "druck",
  "v": "musst_nicht",
  "cop": "Wer nichts zu verbergen hat, macht den Test. Welcher normale Mensch lehnt denn ab?",
  "say": "Ich mache von meinem Recht Gebrauch und stimme nicht zu – das ist kein Schuldeingeständnis. Zur Sache sage ich nichts. Einer Anordnung folge ich ohne Widerstand.",
  "law": "§ 81a Abs. 1, Abs. 2 S. 2 StPO · § 136 Abs. 1 S. 2, § 163a Abs. 4 S. 2 StPO · § 136a Abs. 1 S. 3 StPO · § 46 Abs. 1, 4 OWiG · § 111 OWiG · BGH 2 StR 232/24 Rn. 32",
  "why": "Pusten, Urin- und Speicheltest sowie Übungen sind aktive Mitwirkung und freiwillig; einem Wischtest musst du nicht zustimmen. Erzwingbar ist nur das Dulden einer angeordneten Untersuchung oder Blutentnahme nach § 81a StPO; die Selbstbelastungsfreiheit schützt vor aktiver Mitwirkung, nicht vor dem Dulden (BGH 2 StR 232/24). Überreden darf der Beamte: „Wer nichts zu verbergen hat …“ ist Druck, aber keine Pflicht. Droht er für eine Aussage mit einer unzulässigen Maßnahme, ist das verboten (§ 136a Abs. 1 S. 3 StPO, siehe Antwort „Reden ist freiwillig – aber wenn Sie schweigen …“); spiegelt er beim Test eine Pflicht vor, ist ein Verwertungsverbot möglich (siehe Antwort „Pusten Sie mal kurz hier rein …“). Recht hat er, wenn schon bestimmte Tatsachen einen Verdacht begründen: Dann klärt er ihn ohne deinen Test mit einer Blutprobe, und die musst du dulden (§ 81a Abs. 2 S. 2 StPO, § 46 Abs. 4 OWiG). Mitmachen hat einen Preis: Ein positiver Vortest, auch ein falsch-positiver, liefert oft erst den Grund für die Blutprobe. Dasselbe gilt für Durchsuchung, Handy und Fragen zur Sache: Zustimmen ist freiwillig, Nein sagen ist dein Recht. Pflicht bleiben die Personalien (§ 111 OWiG).",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__81a.html",
   "https://www.gesetze-im-internet.de/stpo/__136.html",
   "https://www.gesetze-im-internet.de/stpo/__136a.html",
   "https://www.gesetze-im-internet.de/stpo/__163a.html",
   "https://www.gesetze-im-internet.de/owig_1968/__46.html",
   "https://www.gesetze-im-internet.de/owig_1968/__111.html",
   "https://www.bundesgerichtshof.de/SharedDocs/Entscheidungen/DE/Strafsenate/2_StS/2024/2_StR_232-24A.pdf?__blob=publicationFile&v=1"
  ],
  "ru": {
   "cop": "Кому нечего скрывать, тот проходит тест. Какой нормальный человек откажется?",
   "say": "Я пользуюсь своим правом и не соглашаюсь — это не признание вины. По существу ничего не скажу. Распоряжению подчинюсь без сопротивления.",
   "why": "Дуть в трубку, тесты мочи и слюны и упражнения — это активное участие, значит добровольно; на мазок (Wischtest) соглашаться ты не обязан. Заставить можно только терпеть назначенное обследование или взятие крови по § 81a StPO; право не свидетельствовать против себя защищает от активного участия, но не от обязанности терпеть (BGH 2 StR 232/24). Уговаривать полицейский может: «Кому нечего скрывать…» — это давление, но не обязанность. Если ради показаний он угрожает недопустимой мерой, это запрещено (§ 136a Abs. 1 S. 3 StPO, см. ответ «Говорить — дело добровольное, но если будете молчать…»); если выдаёт тест за обязанность, результат могут не допустить как доказательство (см. ответ «Дуньте-ка сюда…»). Прав он, если конкретные факты уже дают подозрение: тогда он проверит его без твоего теста — анализом крови, и его нужно терпеть (§ 81a Abs. 2 S. 2 StPO, § 46 Abs. 4 OWiG). У участия есть цена: положительный предварительный тест, даже ложноположительный, часто и даёт основание для анализа крови. То же с обыском, телефоном и вопросами по существу: соглашаться — добровольно, сказать «нет» — твоё право. Личные данные назвать обязательно (§ 111 OWiG)."
  }
 },
 {
  "id": "druck-taeuschung-beifahrer",
  "g": "druck",
  "v": "musst_nicht",
  "cop": "Ihr Beifahrer hat schon alles gesagt. Jetzt können Sie es auch zugeben.",
  "say": "Ich mache keine Angaben zur Sache (§ 136 Abs. 1 Satz 2 StPO). Das gilt unabhängig davon, was andere gesagt haben.",
  "law": "§ 136a Abs. 1 Satz 1, Abs. 3 StPO · § 163a Abs. 4 Satz 2 StPO · § 136 Abs. 1 Satz 2 StPO · BGH 2 StR 84/16",
  "why": "Kriminalistische List ist erlaubt. Eine bewusste Lüge über die Beweislage ist dagegen verbotene Täuschung, und die Aussage ist dann unverwertbar (§ 136a Abs. 1, 3 StPO; BGH 2 StR 84/16). Stimmt die Angabe über den anderen wirklich, darf der Beamte sie dir vorhalten. Dein Schweigerecht bleibt trotzdem.",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__136a.html",
   "https://www.gesetze-im-internet.de/stpo/__163a.html",
   "https://www.gesetze-im-internet.de/stpo/__136.html",
   "https://www.gesetze-im-internet.de/stpo/__69.html",
   "https://www.bundesgerichtshof.de/SharedDocs/Entscheidungen/DE/Strafsenate/2_StS/2016/2_StR__84-16.pdf?__blob=publicationFile&v=1"
  ],
  "ru": {
   "cop": "Ваш пассажир уже всё рассказал. Теперь можете и вы признаться.",
   "say": "Я не даю показаний по делу (§ 136 абз. 1 предл. 2 StPO). Это не зависит от того, что говорили другие.",
   "why": "Следственная хитрость допустима. Но сознательная ложь о доказательствах — запрещённый обман, и тогда показания нельзя использовать (§ 136a абз. 1, 3 StPO; BGH 2 StR 84/16). Если сказанное о другом человеке правда, полицейский вправе тебе это предъявить. Право молчать всё равно остаётся."
  }
 },
 {
  "id": "druck-ohne-anwalt",
  "g": "druck",
  "v": "musst_nicht",
  "cop": "Einen Anwalt brauchen Sie nicht. Ohne Anwalt geht es schneller, dann sind Sie gleich fertig.",
  "say": "Ich möchte vorher einen Verteidiger sprechen (§ 136 Abs. 1 Satz 2, § 137 Abs. 1 StPO). Bis dahin sage ich nichts zur Sache.",
  "law": "§ 136 Abs. 1 Satz 2–4 StPO · § 137 Abs. 1 Satz 1 StPO · § 163a Abs. 4 Satz 2 StPO · § 55 Abs. 2 OWiG · BGH 3 StR 435/12",
  "why": "Du darfst jederzeit, auch schon vor der Vernehmung, einen Verteidiger befragen; verlangst du ihn, ist die Vernehmung sofort zu unterbrechen und du darfst nicht zu Angaben gedrängt werden (BGH 3 StR 435/12). Bei Straftaten muss die Polizei dir Kontaktinformationen und den Anwaltsnotdienst nennen (§ 136 Abs. 1 Satz 3, 4 StPO); bei bloßen Ordnungswidrigkeiten entfällt diese Hinweispflicht (§ 55 Abs. 2 OWiG), das Recht auf Anwalt und Schweigen bleibt.",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__136.html",
   "https://www.gesetze-im-internet.de/stpo/__137.html",
   "https://www.gesetze-im-internet.de/stpo/__163a.html",
   "https://www.gesetze-im-internet.de/owig_1968/__55.html",
   "https://www.bundesgerichtshof.de/SharedDocs/Entscheidungen/DE/Strafsenate/3_StS/2012/3_StR_435-12.pdf?__blob=publicationFile&v=1"
  ],
  "ru": {
   "cop": "Адвокат вам не нужен. Без адвоката быстрее, и вы сразу свободны.",
   "say": "Я хочу сначала поговорить с защитником (§ 136 абз. 1 предл. 2, § 137 абз. 1 StPO). До этого я ничего не скажу по делу.",
   "why": "Ты вправе в любой момент, ещё до допроса, посоветоваться с защитником; если ты его требуешь, допрос нужно сразу прервать, и давить на тебя, чтобы ты говорил, нельзя (BGH 3 StR 435/12). При уголовных делах полиция обязана дать контакты и сообщить о дежурной адвокатской службе (§ 136 абз. 1 предл. 3, 4 StPO); при административных правонарушениях этой обязанности нет (§ 55 абз. 2 OWiG), но право на адвоката и на молчание сохраняется."
  }
 },
 {
  "id": "druck-zeuge-beifahrer",
  "g": "druck",
  "v": "musst_nicht",
  "cop": "Sie als Beifahrer sind Zeuge. Sie müssen aussagen, wer gefahren ist und ob er getrunken hat.",
  "say": "Hier sind meine Personalien. Aussagen muss ich bei der Polizei nur auf Ladung im Auftrag der Staatsanwaltschaft (§ 163 Abs. 3 Satz 1 StPO).",
  "law": "§ 163 Abs. 3 Satz 1, 2 StPO · § 52 Abs. 1 StPO · § 55 Abs. 1 StPO · § 69 Abs. 3 StPO · § 111 OWiG · § 161a Abs. 1, § 48 Abs. 1 StPO · § 43 Abs. 1 Satz 3, 5, 6 PolG BW",
  "why": "Gegenüber der Polizei müssen Zeugen nur aussagen, wenn die Ladung auf einem Auftrag der Staatsanwaltschaft beruht. Verlobte, Ehegatten, eingetragene Lebenspartner und nahe Verwandte (§ 52 StPO) dürfen auch dann schweigen, eine Freundin oder ein Freund ohne Verlobung nicht. Fragen, deren Antwort dich oder einen Angehörigen belasten würde, darfst du immer verweigern (§ 55 StPO). Recht hat der Beamte bei den Personalien (§ 111 OWiG). Vor Staatsanwaltschaft oder Gericht besteht Aussagepflicht (§ 161a Abs. 1, § 48 Abs. 1 StPO).",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__163.html",
   "https://www.gesetze-im-internet.de/stpo/__52.html",
   "https://www.gesetze-im-internet.de/stpo/__55.html",
   "https://www.gesetze-im-internet.de/stpo/__69.html",
   "https://www.gesetze-im-internet.de/stpo/__161a.html",
   "https://www.gesetze-im-internet.de/stpo/__48.html",
   "https://www.gesetze-im-internet.de/owig_1968/__111.html",
   "https://www.landesrecht-bw.de/perma?j=PolG_BW_!_43"
  ],
  "ru": {
   "cop": "Вы как пассажир — свидетель. Вы обязаны сказать, кто был за рулём и пил ли он.",
   "say": "Вот мои личные данные. Давать показания в полиции я обязан только по вызову по поручению прокуратуры (§ 163 абз. 3 предл. 1 StPO).",
   "why": "Свидетель обязан давать показания полиции, только если вызов основан на поручении прокуратуры. Жених или невеста, супруг, зарегистрированный партнёр и близкие родственники (§ 52 StPO) могут молчать и тогда. Просто подруга или друг без помолвки такого права не имеют. На вопросы, ответ на которые изобличил бы тебя или родственника, можно не отвечать всегда (§ 55 StPO). Полицейский прав насчёт личных данных (§ 111 OWiG). Перед прокуратурой или судом обязанность давать показания есть (§ 161a абз. 1, § 48 абз. 1 StPO)."
  }
 },
 {
  "id": "druck-unterschreiben",
  "g": "druck",
  "v": "musst_nicht",
  "cop": "Unterschreiben Sie hier, das ist Pflicht.",
  "say": "Ich unterschreibe nichts und äußere mich nicht zur Sache (§ 136 Abs. 1 Satz 2 StPO). Eine Pflicht zur Unterschrift gibt es nicht.",
  "law": "§ 168a Abs. 3, 6 StPO · § 168b Abs. 2 StPO · § 114b Abs. 1 Satz 4 StPO · § 56 Abs. 2 OWiG · § 136 Abs. 1 Satz 2 StPO",
  "why": "Kein Gesetz verpflichtet dich, Protokoll, Aussage oder Einverständnis zu unterschreiben: Das Vernehmungsprotokoll wird nur zur Genehmigung vorgelegt, Einwendungen werden vermerkt (§ 168a Abs. 3, 6, § 168b Abs. 2 StPO), die Belehrung bei Festnahme kann die Polizei selbst dokumentieren (§ 114b Abs. 1 Satz 4 StPO). Wer unterschreibt, stimmt oft zu, etwa einer Durchsuchung oder einem Verwarnungsgeld (§ 56 Abs. 2 OWiG) – nur unterschreiben, wenn du genau das willst.",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__168a.html",
   "https://www.gesetze-im-internet.de/stpo/__168b.html",
   "https://www.gesetze-im-internet.de/stpo/__114b.html",
   "https://www.gesetze-im-internet.de/owig_1968/__56.html",
   "https://www.gesetze-im-internet.de/stpo/__136.html"
  ],
  "ru": {
   "cop": "Подпишите здесь, это обязательно.",
   "say": "Я ничего не подписываю и не даю показаний по делу (§ 136 абз. 1 предл. 2 StPO). Обязанности подписывать нет.",
   "why": "Ни один закон не обязывает подписывать протокол, показания или согласие: протокол допроса лишь предъявляется для одобрения, возражения вносятся в него (§ 168a абз. 3, 6, § 168b абз. 2 StPO), а получение разъяснения прав при задержании полиция может задокументировать сама (§ 114b абз. 1 предл. 4 StPO). Подпись часто означает согласие — на обыск или на предупредительный штраф (§ 56 абз. 2 OWiG), — поэтому подписывай, только если хочешь именно этого."
  }
 },
 {
  "id": "druck-name-dienstnummer",
  "g": "druck",
  "v": "kommt_drauf_an",
  "cop": "Name und Dienstnummer? Das geht Sie nichts an.",
  "say": "Bitte nennen Sie mir Ihren Namen und Ihre Dienststelle – das sieht in BW eine Dienstvorschrift vor (LT-Drs. 17/4621). Ich notiere mir Kennzeichen und Uhrzeit.",
  "law": "§ 55 Abs. 5 LBG BW · LT-Drs. 17/4621, Begründung A und zu Buchstabe b (innerdienstliche Vorschrift) · § 57 Abs. 2 OWiG",
  "why": "In BW gibt es keine gesetzliche Namens- oder Nummernpflicht. Eine pseudonymisierte Kennzeichnung tragen Beamte nur beim Einsatz in stehenden geschlossenen Einheiten, also Bereitschaftspolizei und Einsatzhundertschaften (§ 55 Abs. 5 LBG BW; LT-Drs. 17/4621). Nach innerdienstlicher Vorschrift zeigen Beamte auf Verlangen den Dienstausweis und nennen Name und Dienststelle. In begründeten Fällen dürfen sie davon abweichen (LT-Drs. 17/4621). Durchsetzen kannst du das vor Ort nicht, für eine Beschwerde reichen Kennzeichen, Zeit und Ort. Wer ein Verwarnungsgeld erhebt, muss sich durch Dienstkleidung oder auf andere Weise ausweisen (§ 57 Abs. 2 OWiG).",
  "src": [
   "https://www.landesrecht-bw.de/perma?j=BG_BW_!_55",
   "https://www.landtag-bw.de/resource/blob/213732/894ab00a1eacedaec575c29bc5454a23/17_4621_D.pdf",
   "https://www.gesetze-im-internet.de/owig_1968/__57.html"
  ],
  "ru": {
   "cop": "Имя и служебный номер? Вас это не касается.",
   "say": "Пожалуйста, назовите ваше имя и подразделение — в BW это предусмотрено служебным предписанием (документ ландтага 17/4621). Я записываю номер машины и время.",
   "why": "В BW нет установленной законом обязанности называть имя или носить номер. Псевдонимизированный номер носят только полицейские при действиях в составе постоянных сводных подразделений, то есть оперативной полиции и оперативных сотен (§ 55 абз. 5 LBG BW; LT-Drs. 17/4621). По внутреннему служебному предписанию полицейские по запросу показывают удостоверение и называют имя и подразделение. В обоснованных случаях они могут от этого отступить (LT-Drs. 17/4621). На месте этого не добиться, для жалобы хватит номера машины, времени и места. Кто берёт предупредительный штраф, должен подтвердить полномочия формой или иным способом (§ 57 абз. 2 OWiG)."
  }
 },
 {
  "id": "druck-dolmetscher",
  "g": "druck",
  "v": "kommt_drauf_an",
  "cop": "Einen Dolmetscher brauchen Sie nicht, Sie verstehen doch Deutsch.",
  "say": "Ich verstehe nicht genug Deutsch und verlange einen kostenlosen Dolmetscher (§ 163a Abs. 5 StPO, § 187 Abs. 1 GVG). Bis dahin keine Angaben.",
  "law": "§ 163a Abs. 5 StPO · § 187 Abs. 1 GVG · § 114b Abs. 2 Satz 3 StPO · § 46 Abs. 1 OWiG · Art. 6 Abs. 3 lit. e EMRK",
  "why": "Wer als Beschuldigter die deutsche Sprache nicht ausreichend beherrscht, hat für die Vernehmung Anspruch auf einen unentgeltlichen Dolmetscher – auch bei der Polizei und im Bußgeldverfahren (§ 46 Abs. 1 OWiG; Art. 6 Abs. 3 lit. e EMRK). Bei einer bloßen Kontrolle der Personalien besteht kein Anspruch, und du solltest es nur sagen, wenn es stimmt.",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__163a.html",
   "https://www.gesetze-im-internet.de/gvg/__187.html",
   "https://www.gesetze-im-internet.de/stpo/__114b.html",
   "https://www.gesetze-im-internet.de/owig_1968/__46.html",
   "https://www.echr.coe.int/documents/d/echr/convention_deu"
  ],
  "ru": {
   "cop": "Переводчик вам не нужен, вы же понимаете по-немецки.",
   "say": "Я недостаточно понимаю по-немецки и требую бесплатного переводчика (§ 163a абз. 5 StPO, § 187 абз. 1 GVG). До этого — никаких показаний.",
   "why": "Подозреваемый, который недостаточно владеет немецким, имеет право на бесплатного переводчика при допросе — и в полиции, и по делам об административных правонарушениях (§ 46 абз. 1 OWiG; ст. 6 п. 3 «e» ЕКПЧ). При простой проверке личных данных такого права нет, и говори это, только если это правда."
  }
 },
 {
  "id": "druck-freiwillig-mitkommen",
  "g": "druck",
  "v": "kommt_drauf_an",
  "cop": "Kommen Sie doch freiwillig mit auf die Wache, dann geht es schneller.",
  "say": "Ist das eine Anordnung? Freiwillig komme ich nicht mit. Einer Anordnung folge ich ohne Widerstand – nennen Sie mir bitte den Grund (Art. 104 Abs. 1 GG).",
  "law": "Art. 104 Abs. 1 GG · § 163b Abs. 1 Satz 2, § 163c Abs. 2 StPO · § 81a StPO · § 27 Abs. 2 Satz 3 PolG BW · § 33 Abs. 1, 2 PolG BW · § 127 StPO · § 113 StGB",
  "why": "„Freiwillig“ heißt rechtlich: keine Festhaltung. Du kannst ablehnen, hast dann aber auch nicht die Fristen und Schutzrechte eines Festgehaltenen. Mitnehmen darf die Polizei dich nur mit Rechtsgrundlage. Dann folgen, etwa: wenn deine Identität sonst nicht feststellbar ist (§ 163b Abs. 1 Satz 2 StPO, bei Straftatverdacht höchstens 12 Stunden nach § 163c Abs. 2 StPO; polizeirechtlich § 27 Abs. 2 Satz 3 PolG BW), zur Blutprobe (§ 81a StPO), bei Gewahrsam (§ 33 PolG BW, der Grund ist bekanntzugeben, § 33 Abs. 2) oder bei Festnahme (§ 127 StPO).",
  "src": [
   "https://www.gesetze-im-internet.de/gg/art_104.html",
   "https://www.gesetze-im-internet.de/stpo/__163b.html",
   "https://www.gesetze-im-internet.de/stpo/__163c.html",
   "https://www.gesetze-im-internet.de/stpo/__81a.html",
   "https://www.landesrecht-bw.de/perma?j=PolG_BW_!_27",
   "https://www.landesrecht-bw.de/perma?j=PolG_BW_!_33",
   "https://www.gesetze-im-internet.de/stpo/__127.html",
   "https://www.gesetze-im-internet.de/stgb/__113.html"
  ],
  "ru": {
   "cop": "Пройдёмте добровольно в участок, так будет быстрее.",
   "say": "Это распоряжение? Добровольно я не пойду. Распоряжению подчинюсь без сопротивления — назовите, пожалуйста, причину (ст. 104 абз. 1 GG).",
   "why": "«Добровольно» юридически означает, что тебя не задерживают. Можно отказаться, но тогда у тебя нет ни сроков, ни прав задержанного. Забрать тебя полиция может только на законном основании. Тогда подчиняйся, например: если личность иначе не установить (§ 163b абз. 1 предл. 2 StPO, при подозрении в преступлении не дольше 12 часов по § 163c абз. 2 StPO; по полицейскому праву § 27 абз. 2 предл. 3 PolG BW), для взятия крови (§ 81a StPO), при превентивном задержании (§ 33 PolG BW, причину обязаны сообщить, § 33 абз. 2) или при аресте (§ 127 StPO)."
  }
 },
 {
  "id": "druck-festnahme-grund",
  "g": "druck",
  "v": "musst",
  "cop": "Sie sind vorläufig festgenommen. Telefonieren dürfen Sie jetzt nicht.",
  "say": "Ich leiste keinen Widerstand. Nennen Sie mir bitte den Grund (§ 127 Abs. 4, § 114a StPO). Ich will einen Anwalt sprechen und Angehörige benachrichtigen (§§ 114b, 114c StPO).",
  "law": "§ 127 Abs. 4 StPO · § 114a Satz 2 StPO · § 114b Abs. 2 Nr. 4, 6 StPO · § 114c Abs. 1, 2 StPO · § 128 Abs. 1 StPO · Art. 104 Abs. 3, 4 GG · Art. 5 Abs. 2 EMRK · § 33 Abs. 2 PolG BW · § 46 Abs. 3 OWiG · § 113 StGB",
  "why": "Der Festnahme musst du folgen, Widerstand ist strafbar (§ 113 StGB). Der Grund ist dir unverzüglich in verständlicher Sprache mitzuteilen (§ 127 Abs. 4 i. V. m. § 114a Satz 2 StPO; Art. 5 Abs. 2 EMRK). Du bist schriftlich zu belehren (§ 114b StPO) und spätestens am Tag nach der Festnahme dem Richter vorzuführen (§ 128 Abs. 1 StPO). Die Gelegenheit, Angehörige zu benachrichtigen, darf nur verweigert werden, wenn das die Ermittlungen erheblich gefährdet (§ 114c Abs. 1 StPO).",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__127.html",
   "https://www.gesetze-im-internet.de/stpo/__114a.html",
   "https://www.gesetze-im-internet.de/stpo/__114b.html",
   "https://www.gesetze-im-internet.de/stpo/__114c.html",
   "https://www.gesetze-im-internet.de/stpo/__128.html",
   "https://www.gesetze-im-internet.de/gg/art_104.html",
   "https://www.echr.coe.int/documents/d/echr/convention_deu",
   "https://www.landesrecht-bw.de/perma?j=PolG_BW_!_33",
   "https://www.gesetze-im-internet.de/owig_1968/__46.html",
   "https://www.gesetze-im-internet.de/stgb/__113.html"
  ],
  "ru": {
   "cop": "Вы временно задержаны. Звонить вам сейчас нельзя.",
   "say": "Я не сопротивляюсь. Назовите, пожалуйста, причину (§ 127 абз. 4, § 114a StPO). Я хочу поговорить с адвокатом и сообщить родственникам (§§ 114b, 114c StPO).",
   "why": "Задержанию нужно подчиниться, сопротивление наказуемо (§ 113 StGB). Причину должны сообщить незамедлительно на понятном тебе языке (§ 127 абз. 4 в связи с § 114a предл. 2 StPO; ст. 5 п. 2 ЕКПЧ). Права должны разъяснить письменно (§ 114b StPO), а к судье доставить не позднее следующего дня после задержания (§ 128 абз. 1 StPO). В возможности сообщить родственникам могут отказать, только если это серьёзно угрожает расследованию (§ 114c абз. 1 StPO)."
  }
 },
 {
  "id": "druck-aufnahme-vernehmung",
  "g": "druck",
  "v": "musst",
  "cop": "Machen Sie das Handy aus. Dieses Gespräch dürfen Sie nicht aufnehmen.",
  "say": "Gut, ich nehme keinen Ton auf. Ich beantrage, die Vernehmung nach § 136 Abs. 4 Satz 1 StPO aufzuzeichnen. Bis dahin keine Angaben zur Sache.",
  "law": "§ 136 Abs. 4 Satz 1 StPO · § 163a Abs. 4 Satz 2 StPO · § 201 Abs. 1 Nr. 1, Abs. 5 StGB · BGH 3 StR 97/26 · LG Hanau 5 KLs 3350 Js 16251/22 · OLG Zweibrücken 1 OLG 2 Ss 62/21",
  "why": "Beim Ton hat der Beamte recht. Nach dem BGH (Beschluss vom 10.06.2026, 3 StR 97/26) ist auch das dienstliche Wort von Beamten durch § 201 Abs. 1 Nr. 1 StGB geschützt; die heimliche private Tonaufnahme einer Vernehmung ist grundsätzlich unbefugt, der Wunsch, „etwas in der Hand zu haben“, rechtfertigt sie nicht. Richtig ist die Bitte um offizielle Aufzeichnung (§ 136 Abs. 4 S. 1 i. V. m. § 163a Abs. 4 S. 2 StPO); die Polizei muss nicht zustimmen („kann“), dann schweigst du. Am Straßenrand ohne Umstehende gilt nach einem Widerspruch dasselbe (LG Hanau, OLG Zweibrücken, siehe aufnahme-201-strafbar). Das Handy ganz auszuschalten verlangt § 201 StGB nicht; Bild ohne Ton ist außerhalb der Wache grundsätzlich erlaubt, solange du nicht störst (siehe aufnahme-filmen-stoppen).",
  "src": [
   "https://www.gesetze-im-internet.de/stpo/__136.html",
   "https://www.gesetze-im-internet.de/stpo/__163a.html",
   "https://www.gesetze-im-internet.de/stgb/__201.html",
   "https://testphase.rechtsinformationen.bund.de/v1/case-law/KORE300362026.html",
   "https://www.lareda.hessenrecht.hessen.de/perma?d=LARE240000089",
   "https://www.landesrecht.rlp.de/bsrp/document/NJRE001511713"
  ],
  "ru": {
   "cop": "Выключите телефон. Записывать этот разговор вам нельзя.",
   "say": "Хорошо, звук я не записываю. Прошу записать допрос по § 136 абз. 4 предл. 1 StPO. До этого — никаких показаний по делу.",
   "why": "Насчёт звука полицейский прав. По решению BGH от 10.06.2026 (3 StR 97/26) служебные слова полицейских тоже защищены § 201 абз. 1 п. 1 StGB; тайная частная аудиозапись допроса в принципе неправомерна, а желание «иметь что-то на руках» её не оправдывает. Правильно — попросить официальную запись (§ 136 абз. 4 предл. 1 в связи с § 163a абз. 4 предл. 2 StPO); полиция не обязана соглашаться (норма «может»), тогда просто молчи. На обочине без посторонних после возражения полицейского действует то же самое (LG Hanau, OLG Zweibrücken, см. aufnahme-201-strafbar). Выключать телефон полностью § 201 StGB не требует: снимать картинку без звука вне участка в принципе можно, если не мешаешь (см. aufnahme-filmen-stoppen)."
  }
 },
 {
  "id": "druck-widerstand-drohung",
  "g": "druck",
  "v": "musst_nicht",
  "cop": "Wenn Sie nicht mitmachen, ist das Widerstand gegen Vollstreckungsbeamte!",
  "say": "Ich leiste keinen Widerstand und wende keine Gewalt an. Ich stimme nur nicht zu – § 113 Abs. 1 StGB verlangt Gewalt oder Drohung mit Gewalt.",
  "law": "§ 113 Abs. 1, 3, 4 StGB · § 114 Abs. 1 StGB · § 111 OWiG · BGH 5 StR 157/20 Rn. 9",
  "why": "Strafbar ist nur, wer bei einer Diensthandlung „mit Gewalt oder durch Drohung mit Gewalt Widerstand leistet“ (§ 113 Abs. 1 StGB). Widerstand ist nach dem BGH eine aktive Tätigkeit gegen den Beamten, Gewalt ein tätiges Handeln mit körperlicher Kraft gegen seine Person (5 StR 157/20, Rn. 9). Nicht zustimmen, schweigen, nicht pusten oder nicht unterschreiben ist deshalb kein Widerstand. Wer die Personalien verweigert, begeht eine Ordnungswidrigkeit (§ 111 OWiG), keinen Widerstand. Recht hat der Beamte, sobald du dich losreißt, wegziehst, schubst oder sperrst; ein tätlicher Angriff ist eigens strafbar (§ 114 StGB).",
  "src": [
   "https://www.gesetze-im-internet.de/stgb/__113.html",
   "https://www.gesetze-im-internet.de/stgb/__114.html",
   "https://www.gesetze-im-internet.de/owig_1968/__111.html",
   "https://www.bundesgerichtshof.de/SharedDocs/Entscheidungen/DE/Strafsenate/5_StS/2020/5_StR_157-20.pdf?__blob=publicationFile&v=1"
  ],
  "ru": {
   "cop": "Если не будете содействовать, это сопротивление сотрудникам полиции!",
   "say": "Я не сопротивляюсь и не применяю силу. Я просто не даю согласия — § 113 Abs. 1 StGB требует насилия или угрозы насилием.",
   "why": "Наказуем только тот, кто при служебном действии «сопротивляется с применением насилия или угрозой насилия» (§ 113 Abs. 1 StGB). По BGH сопротивление — это активные действия против полицейского, а насилие — активное применение физической силы против него (5 StR 157/20, п. 9). Поэтому не соглашаться, молчать, не дуть в трубку или не подписывать — не сопротивление. Отказ назвать личные данные — административное нарушение (§ 111 OWiG), а не сопротивление. Полицейский прав, как только ты вырываешься, отдёргиваешься, толкаешься или упираешься; нападение наказуемо отдельно (§ 114 StGB)."
  }
 },
 {
  "id": "rad-regeln",
  "g": "fahrer",
  "v": "kommt_drauf_an",
  "cop": "Sie sind auf dem Gehweg gefahren – ohne Licht und mit Kopfhörern.",
  "say": "Ich folge Ihren Anweisungen zur Verkehrskontrolle (§ 36 Abs. 5 StVO) und gebe meine Personalien an. Zum Vorwurf mache ich keine Angaben (§ 136 Abs. 1 S. 2 StPO i. V. m. § 46 Abs. 1 OWiG).",
  "law": "§ 36 Abs. 1, 5 StVO · § 111 OWiG · § 136 Abs. 1 S. 2 StPO i.V.m. § 46 Abs. 1 OWiG · § 2 Abs. 1, 4, 5 StVO · § 41 Abs. 1 StVO i.V.m. Anlage 2 (Zeichen 220, 239, 242.1) · § 17 Abs. 1 StVO · § 23 Abs. 1 S. 1, Abs. 1a StVO · § 37 Abs. 2 StVO · § 56 Abs. 1, 2, § 57 Abs. 2 OWiG · § 107 Abs. 1, 3 OWiG · § 55 Abs. 1 OWiG · § 8, § 10 Abs. 1, 2, § 14 Nr. 4, 5 eKFV · BKat Nr. 2, 73, 107.1, 132a, 132a.3, 139.2, 141.4, 238, 246.1, 246.4 · FeV Anlage 13 Nr. 3.2.15, 3.2.19",
  "why": "Auch auf Rad oder E-Scooter musst du bei einer Verkehrskontrolle anhalten, Anweisungen befolgen und deine Personalien angeben (§ 36 Abs. 1, 5 StVO, § 111 OWiG). Zum Vorwurf musst du nichts sagen (§ 136 Abs. 1 S. 2 StPO i. V. m. § 46 Abs. 1 OWiG). Oft hat der Beamte recht: Ab 10 Jahren darfst du nicht auf dem Gehweg fahren, außer ein Zusatzzeichen erlaubt es oder du begleitest als Aufsichtsperson ein Kind unter 8 (§ 2 Abs. 1, 5 StVO). In der Fußgängerzone darfst du nur fahren, wenn ein Zusatzzeichen es erlaubt (§ 41 Abs. 1 StVO, Zeichen 242.1). Das kostet 25–55 €. Einbahnstraße in Gegenrichtung ohne Freigabe: 20 €. Ohne Licht bei Dunkelheit: 20 € (§ 17 Abs. 1 StVO). Handy in der Hand: 55 €, in der Halterung ist ein kurzer Blick erlaubt (§ 23 Abs. 1a StVO). Kopfhörer sind nur verboten, wenn sie das Gehör beeinträchtigen: 10 € (§ 23 Abs. 1 S. 1 StVO). Rotlicht: 60 €, war es schon länger als 1 Sekunde rot, 100 €, jeweils 1 Punkt (§ 37 Abs. 2 StVO). Nebeneinander fahren ist erlaubt, solange niemand behindert wird (§ 2 Abs. 4 S. 1 StVO). Mit dem Fahrrad musst du einen Radweg nur bei blauem Schild benutzen (§ 2 Abs. 4 S. 2 StVO), mit dem E-Scooter immer, wenn es einen gibt (§ 10 Abs. 1 eKFV). Weist dich ein Beamter an, befolge das trotzdem und lass es später prüfen. Bis 55 € wird eine Verwarnung nur wirksam, wenn du einverstanden bist (§ 56 Abs. 2 OWiG). Stimmt der Vorwurf, ist Zahlen meist günstiger: Ein Bußgeldbescheid kostet mindestens 25 € Gebühr plus Auslagen (§ 107 OWiG). Lehnst du ab oder liegt der Betrag über 55 €, kommt meist ein Anhörungsbogen: Angaben zur Person musst du machen (§ 111 OWiG), zur Sache nicht (§ 55 OWiG, § 136 Abs. 1 S. 2 StPO). E-Scooter: Gehweg ohne Zusatzzeichen 15 €, nie zu zweit (§§ 8, 10 eKFV), Handy 100 € und 1 Punkt.",
  "src": [
   "https://www.gesetze-im-internet.de/stvo_2013/__36.html",
   "https://www.gesetze-im-internet.de/stvo_2013/__2.html",
   "https://www.gesetze-im-internet.de/stvo_2013/__41.html",
   "https://www.gesetze-im-internet.de/stvo_2013/anlage_2.html",
   "https://www.gesetze-im-internet.de/stvo_2013/__17.html",
   "https://www.gesetze-im-internet.de/stvo_2013/__23.html",
   "https://www.gesetze-im-internet.de/stvo_2013/__37.html",
   "https://www.gesetze-im-internet.de/owig_1968/__46.html",
   "https://www.gesetze-im-internet.de/owig_1968/__55.html",
   "https://www.gesetze-im-internet.de/owig_1968/__56.html",
   "https://www.gesetze-im-internet.de/owig_1968/__57.html",
   "https://www.gesetze-im-internet.de/owig_1968/__107.html",
   "https://www.gesetze-im-internet.de/owig_1968/__111.html",
   "https://www.gesetze-im-internet.de/stpo/__136.html",
   "https://www.gesetze-im-internet.de/bkatv_2013/BJNR049800013.html",
   "https://www.gesetze-im-internet.de/fev_2010/anlage_13.html",
   "https://www.gesetze-im-internet.de/ekfv/__8.html",
   "https://www.gesetze-im-internet.de/ekfv/__10.html",
   "https://www.gesetze-im-internet.de/ekfv/__14.html"
  ],
  "ru": {
   "cop": "Вы ехали по тротуару — без света и в наушниках.",
   "say": "Выполняю ваши указания для дорожной проверки (§ 36 Abs. 5 StVO) и назову свои личные данные. По обвинению ничего не скажу (§ 136 Abs. 1 S. 2 StPO вместе с § 46 Abs. 1 OWiG).",
   "why": "И на велосипеде, и на электросамокате при дорожной проверке нужно остановиться, выполнять указания и назвать личные данные (§ 36 Abs. 1, 5 StVO, § 111 OWiG). По обвинению можно молчать (§ 136 Abs. 1 S. 2 StPO вместе с § 46 Abs. 1 OWiG). Часто полицейский прав: с 10 лет нельзя ездить по тротуару, если это не разрешено дополнительной табличкой и ты не сопровождаешь ребёнка до 8 лет, за которым присматриваешь (§ 2 Abs. 1, 5 StVO). В пешеходной зоне ездить можно, только если это разрешено дополнительной табличкой (§ 41 Abs. 1 StVO, знак 242.1). Штраф 25–55 €. Против движения по улице с односторонним движением без разрешающей таблички: 20 €. Без света в темноте: 20 € (§ 17 Abs. 1 StVO). Телефон в руке: 55 €, в держателе короткий взгляд разрешён (§ 23 Abs. 1a StVO). Наушники запрещены, только если мешают слышать: 10 € (§ 23 Abs. 1 S. 1 StVO). Красный свет: 60 €, если красный горел уже больше 1 секунды — 100 €, в обоих случаях 1 балл (§ 37 Abs. 2 StVO). Ехать рядом друг с другом можно, если это никому не мешает (§ 2 Abs. 4 S. 1 StVO). На велосипеде велодорожкой обязан пользоваться только при синем знаке (§ 2 Abs. 4 S. 2 StVO), на электросамокате — всегда, если она есть (§ 10 Abs. 1 eKFV). Если полицейский велит ехать по ней, всё равно выполняй и обжалуй потом. Предупреждение со штрафом до 55 € действует, только если ты согласен (§ 56 Abs. 2 OWiG). Если обвинение верно, заплатить обычно дешевле: постановление о штрафе стоит минимум 25 € пошлины плюс расходы (§ 107 OWiG). Если откажешься или сумма больше 55 €, обычно придёт анкета-опрос (Anhörungsbogen): личные данные указать нужно (§ 111 OWiG), по существу можно не отвечать (§ 55 OWiG, § 136 Abs. 1 S. 2 StPO). Электросамокат: по тротуару без разрешающей таблички — 15 €, никогда вдвоём (§§ 8, 10 eKFV), телефон — 100 € и 1 балл."
  }
 },
 {
  "id": "rad-rahmennummer",
  "g": "fahrer",
  "v": "kommt_drauf_an",
  "cop": "Ist das Ihr Fahrrad? Wir prüfen mal die Rahmennummer.",
  "say": "Die Rahmennummer zeige ich Ihnen gern selbst. Einen Kaufbeleg muss ich nicht dabeihaben. Weitere Angaben zur Sache mache ich nicht.",
  "law": "§ 47 Abs. 1 S. 2, 3 PolG BW · § 36 Abs. 5 StVO · § 1006 Abs. 1 BGB · §§ 94, 98 Abs. 1, 2 StPO · § 37 Abs. 1, 4 PolG BW · § 113 StGB · § 839 BGB · Art. 34 GG",
  "why": "Die Polizei darf die Rahmennummer mit dem Fahndungsbestand abgleichen, wenn Grund zu der Annahme besteht, dass das für ihre Aufgabe nötig ist, und dich für die Dauer des Abgleichs anhalten (§ 47 Abs. 1 S. 2, 3 PolG BW). Die Schwelle ist niedrig, meist hat sie hier recht. Einen Kaufbeleg oder Fahrradpass musst du nicht mitführen, das schreibt kein Gesetz vor. Zivilrechtlich wird vermutet, dass das Rad dem gehört, der es besitzt (§ 1006 Abs. 1 S. 1 BGB); gegenüber dem Bestohlenen gilt das nicht, und es hält die Polizei nicht davon ab, einem konkreten Diebstahlsverdacht nachzugehen. Ist das Rad als gestohlen gemeldet oder deuten Tatsachen auf einen Diebstahl hin, darf die Polizei es als Beweismittel beschlagnahmen (§§ 94, 98 Abs. 1 StPO) oder für den Eigentümer sicherstellen (§ 37 PolG BW). Dann ausdrücklich widersprechen, aber nicht festhalten (§ 113 StGB), und eine Bescheinigung über die Mitnahme verlangen. Gegen eine Beschlagnahme kannst du jederzeit die gerichtliche Entscheidung beantragen (§ 98 Abs. 2 S. 2 StPO); eine Sicherstellung ist aufzuheben, wenn der Eigentümer es verlangt, spätestens nach zwei Wochen (§ 37 Abs. 4 PolG BW). Beschädigt ein Beamter das Rad schuldhaft, etwa beim Umdrehen, haftet der Staat, also Land oder Bund (§ 839 BGB, Art. 34 GG): Schaden sofort fotografieren, Namen oder Dienststelle notieren und schriftlich Ersatz verlangen. Tipp: Rahmennummer, Foto und Kaufbeleg zu Hause oder im Handy aufbewahren. Zeigst du den Beleg auf dem Handy, gib das Handy nicht aus der Hand.",
  "src": [
   "https://www.landesrecht-bw.de/perma?j=PolG_BW_!_47",
   "https://www.landesrecht-bw.de/perma?j=PolG_BW_!_37",
   "https://www.gesetze-im-internet.de/stvo_2013/__36.html",
   "https://www.gesetze-im-internet.de/bgb/__1006.html",
   "https://www.gesetze-im-internet.de/stpo/__94.html",
   "https://www.gesetze-im-internet.de/stpo/__98.html",
   "https://www.gesetze-im-internet.de/stgb/__113.html",
   "https://www.gesetze-im-internet.de/bgb/__839.html",
   "https://www.gesetze-im-internet.de/gg/art_34.html"
  ],
  "ru": {
   "cop": "Это ваш велосипед? Проверим номер рамы.",
   "say": "Номер рамы охотно покажу сам. Чек носить с собой я не обязан. Других сведений по делу не даю.",
   "why": "Полиция может сверить номер рамы с базой розыска, если есть основания полагать, что это нужно для её задач, и на время сверки остановить тебя (§ 47 Abs. 1 S. 2, 3 PolG BW). Порог низкий, обычно здесь она права. Чек или паспорт велосипеда носить с собой не нужно, этого не требует ни один закон. По гражданскому праву предполагается, что велосипед принадлежит тому, у кого он находится (§ 1006 Abs. 1 S. 1 BGB); против того, у кого его украли, это не действует и не мешает полиции проверять конкретное подозрение в краже. Если велосипед числится украденным или факты указывают на кражу, полиция может изъять его как доказательство (§§ 94, 98 Abs. 1 StPO) или взять на хранение для собственника (§ 37 PolG BW). Тогда прямо возрази, но не удерживай велосипед (§ 113 StGB), и потребуй справку об изъятии. При изъятии (Beschlagnahme) можно в любое время потребовать судебного решения (§ 98 Abs. 2 S. 2 StPO); хранение (Sicherstellung) нужно прекратить, если этого требует собственник, самое позднее через две недели (§ 37 Abs. 4 PolG BW). Если полицейский по своей вине повредил велосипед, например переворачивая его, отвечает государство — федеральная земля или Федерация (§ 839 BGB, Art. 34 GG): сразу сфотографируй повреждение, запиши имя или отдел полиции и письменно потребуй возмещения. Совет: храни номер рамы, фото и чек дома или в телефоне. Если показываешь чек в телефоне, не выпускай телефон из рук."
  }
 }
];
