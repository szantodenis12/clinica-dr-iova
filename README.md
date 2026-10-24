# Clinica Dr. Iova – site (Next.js 16)

Site-ul clinicii (psihiatrie, neurologie, psihologie, logopedie, Oradea): Next.js 16 App Router, React 19, TypeScript, CSS simplu.
Portat 1:1 din site-ul static Python (`clinica-dr-iova-site`). Convențiile de lucru sunt în `NOTES-PORTING.md`.

## Pornire locală

```bash
npm install
npm run dev      # http://localhost:3000
```

Local se vede mereu **site-ul complet** (fișierul `.env.local`, care nu intră în git, setează `NEXT_PUBLIC_SITE_MODE=full`).
Dacă nu ai `.env.local`, `npm run dev` pornește varianta **demo**; ca să lucrezi pe site-ul complet creează fișierul cu:

```
NEXT_PUBLIC_SITE_MODE=full
```

## Demo sau complet

Același repo poate publica două variante, alese la build prin `NEXT_PUBLIC_SITE_MODE`:

| Valoare | Ce se publică |
|---|---|
| `demo` | doar 3 pagini: `/`, `/medici/sorin-iova/`, `/programare/`. Restul rutelor dau 404, meniul are 3 elemente, fără cookie-uri/subsol cu linkuri, `noindex, nofollow`, `robots.txt` blochează tot, fără `sitemap.xml` și `llms.txt`. |
| `full` | toate cele 37 de pagini, SEO normal. |

Valoarea implicită este în fișierul `.env` (inclus în git, fără secrete): acum `NEXT_PUBLIC_SITE_MODE=demo`.

### Cum trec site-ul publicat de la demo la complet

Oricare dintre variante, apoi un deploy nou (variabila se citește la build):

1. în `.env` schimbă în `NEXT_PUBLIC_SITE_MODE=full`, commit și push; sau
2. în Vercel: Project Settings, Environment Variables, adaugă `NEXT_PUBLIC_SITE_MODE=full` (are prioritate față de `.env`), apoi Redeploy.

## Deploy pe Vercel

Fără nicio setare: importă repo-ul din GitHub, Vercel detectează Next.js, rulează `npm run build` și, pentru că `.env` este în repo, publică direct varianta demo.

## Verificări

```bash
npx tsc --noEmit
npx eslint src
npm run build
```
