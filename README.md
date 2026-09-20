# Der schauspielernde Computer

Slidev-Präsentation: *Der schauspielernde Computer — Was Künstliche Intelligenz heute wirklich ist und kann.*

- `slides.md` — Foliendeck
- `manuskript.md` — Redemanuskript (ca. 40 Minuten)
- `theme/` — lokales Slidev-Theme (Layouts, Komponenten, Styles, GSAP-Animationen)
- `public/` — Bild-Assets der Folien

## Lokal starten

```sh
npm install
npm run dev
```

## Build & Export

```sh
npm run build    # statische SPA nach dist/
npm run export   # PDF inkl. aller Klick-Zustände
```

## Veröffentlichung

Der Workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) baut die Folien bei jedem Push nach `main` und veröffentlicht sie automatisch über GitHub Pages (Repository-Einstellungen → *Pages* → *Build and deployment* → Quelle **GitHub Actions**).
