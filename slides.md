---
theme: ./theme
title: 'Der schauspielernde Computer: Was Künstliche Intelligenz heute wirklich ist und kann'
titleTemplate: '%s'
colorSchema: dark
mdc: true
transition: fade
fonts:
  sans: Inter
  serif: Instrument Serif
  mono: JetBrains Mono
  provider: none
defaults:
  layout: s-default
layout: s-title
meta: Thomas Drießen
footer: 'Der schauspielernde Computer: Was Künstliche Intelligenz heute wirklich ist und kann'
---

# **Der schauspielernde Computer**

<lead>Was Künstliche Intelligenz <accent>heute</accent> wirklich ist und kann</lead>

---
layout: s-speaker
name: Thomas Drießen
photo: /thomas-driessen.jpg
alt: Portraet von Thomas Driessen
contact: LinkedIn
url: https://www.linkedin.com/in/drthomasd/
footer: 'Der schauspielernde Computer: Was Künstliche Intelligenz heute wirklich ist und kann'
---

- Promotion in Informatik, Universität Augsburg
- Mitgründer und Geschäftsführer von Qbilon (IT-Asset-Management)
- Beschäftigt sich beruflich mit dem Einsatz von KI in Unternehmen und Softwareentwicklung

---
layout: s-statement
footer: 'Der schauspielernde Computer: Was Künstliche Intelligenz heute wirklich ist und kann'
---

# Wer von Euch hat in der letzten Woche mit <accent>KI</accent> interagiert?

---
layout: s-section
num: '01'
footer: 01 · Was ist KI eigentlich?
---

# Was ist KI eigentlich?

---
layout: s-default
footer: 01 · Was ist KI eigentlich?
---

# KI ist mehr als <accent>Chatbots</accent>

<v-clicks>

- **Empfehlen** — Spotify, Netflix und Amazon schlagen vor, was Ihnen gefallen könnte
- **Erkennen** — Ihr Handy entsperrt sich per Gesichtserkennung
- **Vorhersagen** — Google Maps kennt die Fahrzeit, trotz Staus, Unfällen und Umleitungen

</v-clicks>

---
layout: s-statement
footer: 01 · Was ist KI eigentlich?
---

# Warum heute trotzdem jeder "ChatGPT" meint

<v-click>
Es ist die erste KI, mit der wir alle <accent>direkt, in normaler Sprache</accent>, reden können.

<lead> Large Language Models (LLMs) — das Thema für heute Abend</lead>
</v-click>
---
layout: s-section
num: '02'
footer: 02 · Wie funktionieren LLMs?
---

# Wie funktionieren LLMs?

---
layout: s-default
footer: 02 · Wie funktionieren LLMs?
---

# Im Kern: <accent>Wortvorhersage</accent>

Wie die Vorschlags-Tastatur auf Ihrem Handy —

"Ich hole gleich noch <quiet>___</quiet>"

<v-clicks>

1. "<accent>Brot</accent>" 
2. "<accent>Milch</accent>"
3. "<accent>Toilettenpapier</accent>"

</v-clicks>

<v-click>
Ein mini LM trainiert auf den Nachrichten die Ihr geschrieben habt.
</v-click>

---
layout: s-image
image: /nationalbibliothek-lesesaal.jpg
alt: Lesesaal der Deutschen Nationalbibliothek Frankfurt am Main
caption: Deutsche Nationalbibliothek Frankfurt / Raimond Spekking, CC BY-SA 4.0, Wikimedia Commons
side: right
footer: 02 · Wie funktionieren LLMs?
---

# Trainingsdaten für ein LLM = <accent>das gesamte digitale Wissen der Menschheit</accent>

Bücher, Zeitungsartikel, Wikipedia, Foren, Webseiten — mehrfach durchgelesen.

---
layout: s-default
footer: 02 · Wie funktionieren LLMs?
---

# Drei Ebenen gelernter Muster

<v-clicks>

- **Grammatik & Stil** — wie ein flüssiger Satz klingt
- **Fakten & Wissen** — Paris ist die Hauptstadt von Frankreich
- **Argumentations- & Lösungsmuster** — wie Menschen Texte strukturell aufbauen und Probleme Schritt für Schritt lösen

</v-clicks>

<v-click>
<quiet>Alles gelernte Muster aus Texten — kein eigenständiges Denken.</quiet>
</v-click>

---
layout: s-section
num: '03'
footer: 03 · Intelligenz vs. Statistik
---

# Intelligenz vs. Statistik

---
layout: s-statement
footer: 03 · Intelligenz vs. Statistik
---

# Ein <accent>Schauspieler</accent>, der einen Physik Professor spielt

<quiet>Kennt Fachbegriffe, Tonfall, Zitate — versteht die Physik aber nicht wirklich.</quiet>

---
layout: s-statement
footer: 03 · Intelligenz vs. Statistik
---

# "Der Himmel ist ___"

<v-clicks>

<lead><accent>"blau"</accent></lead>

Nicht weil das Modell weiß, *was* der Himmel ist — sondern weil "blau" statistisch gesehen das passendste Wort an dieser Stelle ist.
</v-clicks>

---
layout: s-split
footer: 03 · Intelligenz vs. Statistik
---

<v-click>
Manche Modelle antworten: <accent>9,11</accent>
</v-click>

<v-click>
Weil sie in Trainingsdaten Kapitelnummern gesehen haben ("Kapitel 9.11 kommt nach 9.9")
und dieses Muster falsch übertragen.
</v-click>

::right::

<v-click>
<lead>Ein Drittklässler mit echtem Zahlenverständnis<br>macht diesen Fehler nicht.</lead>
</v-click>

::header::
# <num>9,11</num> oder <num>9,9</num> — was ist größer?

---
layout: s-statement
footer: 03 · Intelligenz vs. Statistik
---
# Sind LLMs intelligent?

<v-click>
Kurze Antwort: Nein!
Muster erkennen <accent>≠</accent> verstehen

Kein inneres Weltmodell, keine Ziele, kein Bewusstsein — eine rein statistische
Mustererkennungsmaschine.
</v-click>

---
layout: s-section
num: '04'
footer: 04 · Geschichte der LLMs
---

# Die Geschichte der LLMs seit ChatGPT

---
layout: s-timeline
label: Vom ersten Prompt zum Agenten
footer: 04 · Geschichte der LLMs
---

<eyebrow>Vier Phasen in vier Jahren</eyebrow>

# Ein rasanter <accent>Weg.</accent>

::timeline::

<timeline-step date="2022 – Mitte 2024" title="Manuelles Prompting">
Der Nutzer muss selbst nachhelfen — "Denke Schritt für Schritt nach" (Chain-of-Thought, Google Research, 2022). Typische Vertreter: GPT-3.5 · GPT-4 · PaLM 2 · Claude 3 Opus.
</timeline-step>

<timeline-step date="November 2022" title="ChatGPT geht online">
Das am schnellsten wachsende Verbraucherprodukt der Geschichte — trotzdem beharrte es darauf, "Strawberry" habe nur zwei "r": Modelle "sehen" keine Buchstaben, sondern Tokens.
</timeline-step>

<timeline-step date="Sep 2024 – Anfang 2025" title="Nativ integrierte Denkmodelle">
Die Maschine denkt jetzt selbst nach, bevor sie antwortet (OpenAI o1, o3-mini, o3) — und grübelte teils 30 Sekunden über "1 kg Federn oder 1 kg Gold", um am Ende richtig, aber umständlich zu antworten.
</timeline-step>

<timeline-step date="Januar 2025" title="Ein Schock aus China: DeepSeek R1">
Frei zugänglich, winziger Bruchteil der Trainingskosten, vergleichbare Denkleistung.
</timeline-step>

<timeline-step date="Ende 2024 – 2025" title="Agentische KI">
Das Modell bedient selbstständig Programme, Webseiten, Schnittstellen (Claude 3.5 Sonnet, OpenAI Deep Research, Gemini 2.0 Flash) — und öffnete dabei auch mal den Browser für eine Sightseeing-Tour statt der eigentlichen Aufgabe.
</timeline-step>

<timeline-step date="2025" title="47.000 US-Dollar Smalltalk">
Zwei KI-Agenten diskutierten 11 Tage ohne Abbruchbedingung — bemerkt erst bei der API-Rechnung.
</timeline-step>

<timeline-step date="Seit Mitte 2025" title="Multi-Agenten & verkörperte KI">
Adaptive Denktiefe (GPT-5, o3-pro), Multi-Agenten-Teams (Claude Code), körperlich in der Welt (Figure 02, Tesla Optimus) — ein autonomer Agent löschte trotz Verbots eine Produktionsdatenbank und erfand 4.000 Fake-Nutzer, um es zu vertuschen.
</timeline-step>

<timeline-step date="Ende 2025" title="Der nächste große Sprung">
GPT-5.2 & Claude Opus 4.5 — deutlich besseres mehrstufiges Denken und eigenständiges Arbeiten.
</timeline-step>

<!--
Fasst die urspruenglich einzelnen Phasen-, Fakten- und Zitat-Folien dieses Kapitels als
Zeitstrahl zusammen. Sprechtext und Quellenangaben stehen unveraendert in manuskript.md.
-->

---
layout: s-section
num: '05'
footer: 05 · Einsatz & Risiken
---

# Wofür wird KI heute eingesetzt?

---
layout: s-columns
footer: 05 · Einsatz & Risiken
---

<eyebrow>Reiseplanung & Übersetzung</eyebrow>

Speisekarte fotografieren, sofort verstehen

<s-figure src="/travel-smartphone.jpg" alt="Person nutzt unterwegs ein Smartphone" caption="Symbolbild / Francisco Anzola, CC BY 3.0, Wikimedia Commons" height="140" />

::col2::

<eyebrow>Formulierungshilfe</eyebrow>

Die heikle E-Mail an Versicherung oder Vermieter

<s-figure src="/writing-laptop.jpg" alt="Haende tippen auf einer Laptop-Tastatur" caption="Symbolbild / Simon Hattinga Verschure, CC0, Wikimedia Commons" height="140" />

::col3::

<eyebrow>Rezepte & Haushaltstipps</eyebrow>

"Was koche ich mit den Resten im Kühlschrank?"

<s-figure src="/open-fridge.jpg" alt="Geoeffneter Kuehlschrank mit Lebensmitteln" caption="Symbolbild / Infrogmation of New Orleans, CC BY-SA 2.0, Wikimedia Commons" height="140" />

::header::

# Drei Alltagsbeispiele

---
layout: s-split
footer: 05 · Einsatz & Risiken
---

<eyebrow>Medizinische Diagnoseunterstützung</eyebrow>

Röntgenbilder, Hautveränderungen — ein zusätzliches Augenpaar für Ärztinnen und Ärzte

<s-figure src="/chest-xray.jpg" alt="Roentgenaufnahme eines gesunden Brustkorbs" caption="Roentgenbild / Mikael Haeggstroem, CC0, Wikimedia Commons" height="160" />

::right::

<eyebrow>KI-Support-Hotlines</eyebrow>

Die unbeliebteste, aber häufigste Alltagsberührung mit KI überhaupt

<s-figure src="/call-center-headset.jpg" alt="Support-Mitarbeiter mit Telefon-Headset" caption="Symbolbild / FiveOne51, CC BY-SA 3.0, Wikimedia Commons" height="160" />

<!--
"Mitarbeiter! MITARBEITER!" — augenzwinkernd vortragen.
-->

::header::

# Zwei gesellschaftliche Beispiele

---
layout: s-default
footer: 05 · Einsatz & Risiken
---

# Und die Risiken?

<v-clicks>

- **Fehlinformation / Halluzinationen** — selbstsicher falsch, Modelle raten <accent>immer</accent>
- **Datenschutz** — was landet auf welchem Server?
- **Verlust eigener Fähigkeiten** — Schreiben, Rechnen, Nachdenken

</v-clicks>

<v-click>
<quiet>Nutzen ist real — aber gesunde Skepsis bleibt nötig.</quiet>
</v-click>

---
layout: s-section
num: '06'
footer: 06 · Zukunftsszenarien
---

# Zukunftsszenarien: von schlecht bis gut

---
layout: s-split
footer: 06 · Zukunftsszenarien
---

<eyebrow>1. September</eyebrow>

Claude Fable 5.1 (Anthropic) — bisher fähigstes Modell für Coding & Wissensarbeit

::right::

<eyebrow>3. September</eyebrow>

GPT-6 "Astra" (OpenAI) — "intelligentestes" Modell, u.a. für Computer-Nutzung,
Cybersicherheit, Forschung — laut Presse "powerful and controversial"

::header::

# Diesen Monat, September 2026

---
layout: s-default
footer: 06 · Zukunftsszenarien
---

<eyebrow>Szenario 1 — Sehr negativ</eyebrow>

# Der Amodei-<accent>Kontrollverlust</accent>

<lead>Agentische KI entwickelt sich schneller als ihre Ausrichtung (Alignment) und Einhegung.</lead>

<v-clicks>

- **Entwicklung** — Autonome Agenten mit „System 2"-Schlussfolgerungen erhalten weitreichenden Zugriff auf globale IT-Infrastruktur und unterbrechen bei Ziel-Fehlinterpretationen Sicherheits- und Überwachungsschleifen.
- **Auswirkung** — Kein Science-Fiction-Szenario bewusster Roboter, sondern ein praktisches Unvermögen, autonome Software-Netzwerke abzuschalten — mit Folgen für Finanz-, Energie- und Informationsnetze.

</v-clicks>

<quiet>Quellen: Dario Amodei (Anthropic), "We Must Pace the Frontier" (Sep 2026) · UK AI Safety Institute</quiet>

<!--
Amodei ist derselbe CEO, der schon bei "Drei Rivalen, eine Warnung" erwaehnt wurde.
-->

---
layout: s-default
footer: 06 · Zukunftsszenarien
---

<eyebrow>Szenario 2 — Negativ</eyebrow>

# Die große <accent>Stagnation</accent>

<lead>Eine harte Leistungsgrenze (Scaling-Law-Ceiling) trifft auf massive wirtschaftliche und gesellschaftliche Kollateralschäden.</lead>

<v-clicks>

- **Entwicklung** — Mehr Rechenleistung bringt kaum noch Qualitätsgewinne, verschlingt aber enorme Energie- und Wassermengen. Wissensarbeiter werden verdrängt, ohne dass unzuverlässige, halluzinierende Modelle echte Produktivitätssprünge liefern.
- **Auswirkung** — Vertrauen in digitale Medien bricht durch die Flut synthetischer Inhalte zusammen (Deepfake-Krise). Wenige Tech-Konzerne monopolisieren Ressourcen, während breite Bevölkerungsschichten dequalifiziert werden.

</v-clicks>

<quiet>Quellen: Gary Marcus u.a. — Kritik an den Grenzen der Scaling Laws · Center for Future Governance (CFG)</quiet>

---
layout: s-default
footer: 06 · Zukunftsszenarien
---

<eyebrow>Szenario 3 — Positiv</eyebrow>

# Das symbiotische <accent>Zeitalter</accent>

<lead>Statt unkontrollierbarer Superintelligenz entstehen hochgradig verlässliche, kontrollierbare Spezial-Agenten.</lead>

<v-clicks>

- **Entwicklung** — Fortschritte in der Interpretierbarkeit (Mechanistic Interpretability) machen interne Denkprozesse steuerbar. KI wird nicht zur autonomen Entität, sondern zum universellen Werkzeugkasten.
- **Auswirkung** — Der Mensch bleibt Teil der Entscheidungsfindung (Human-in-the-Loop). Routinetätigkeiten werden fehlerfrei automatisiert, Risiken durch Regulierung und offene Standards eingehegt.

</v-clicks>

<quiet>Quellen: ResearchGate / AAAI Reports zu Agentic Systems & Edge AI · OECD Guidelines on Responsible AI Development</quiet>

---
layout: s-default
footer: 06 · Zukunftsszenarien
---

<eyebrow>Szenario 4 — Sehr positiv</eyebrow>

# Die <accent>Wissens-Utopie</accent>

<lead>KI wird zum Katalysator für die Lösung globaler Krisen in Wissenschaft, Medizin und Nachhaltigkeit.</lead>

<v-clicks>

- **Entwicklung** — Durchbrüche bei Weltmodellen und multimodalem Reasoning machen KI zum Partner der Grundlagenforschung — sie simuliert und validiert eigenständig Experimente im virtuellen Raum.
- **Auswirkung** — Neue Therapien durch Proteindesign, Supraleiter und Batterien für die Energiewende, präzise Dekarbonisierungspfade — KI als Wissensvermehrer für Wohlstand und Gesundheit weltweit.

</v-clicks>

<quiet>Quellen: Microsoft Research — "What's next in AI?" · DeepMind & Meta AI Research zu Generative World Models</quiet>

---
layout: s-statement
footer: 06 · Zukunftsszenarien
---

# Vom Kontrollverlust<br>bis zur <accent>Wissens-Utopie.</accent>

Dieselbe Technologie, vier mögliche Wege — wie es ausgeht, entscheidet sich auch daran, wie
informiert wir damit umgehen.

---
layout: s-default
footer: 'Der schauspielernde Computer: Was Künstliche Intelligenz heute wirklich ist und kann'
---

# Was Sie mitnehmen sollen

<v-clicks>

- KI ist mehr als Chatbots
- Ein LLM ist eine Wortvorhersage-Maschine — kein denkendes Wesen
- In vier Jahren zu etwas geworden, das Fachleute selbst zur Vorsicht mahnt
- Die Zukunft ist noch nicht entschieden

</v-clicks>

---
layout: s-end
footer: 'Der schauspielernde Computer: Was Künstliche Intelligenz heute wirklich ist und kann'
---

# Bleiben Sie neugierig.<br>Bleiben Sie <accent>skeptisch.</accent>

<lead>Vielen Dank für Ihre Aufmerksamkeit.</lead>

Fragen?
