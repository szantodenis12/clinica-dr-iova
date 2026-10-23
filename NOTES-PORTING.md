`# NOTES-PORTING: conventions for porting pages from the Python site
`
`Source (read-only): `D:\clinica dr. iova website\clinica-dr-iova-site` (`src/pages/**.html`, `assets/`, `site/` = built HTML).
`Goal: pixel-identical output, real JSX (no `dangerouslySetInnerHTML` for page content), all Romanian copy unchanged.
`Stack: Next 16 App Router, React 19, TypeScript, plain CSS (no Tailwind), `trailingSlash: true`.
`
`## 1. Where things go
`| Original | New |
`|---|---|
`| `src/pages/foo/bar.html` -> `/foo/bar/` | `src/app/foo/bar/page.tsx` |
`| `src/pages/foo/index.html` -> `/foo/` | `src/app/foo/page.tsx` |
`| page CSS (`assets/css/servicii.css` ...) | already in `src/styles/` (home, servicii, medici, blog, info, programare, admin) |
`| page JS (`assets/js/blog.js` ...) | client component(s) in `src/components/<area>/` |
`| images | `public/img/...` (already copied; CSS `url(/img/...)` works as is) |
`
`Layout (nav, footer, WhatsApp, cookie banner, mobile bar, motion) is in `src/app/layout.tsx`. Do not duplicate it in pages.
`A page renders only what the fragment had: breadcrumb (if any) then the content, which goes inside `<main id="continut">`.
`
`## 2. Page skeleton
````tsx
`import "@/styles/servicii.css";   // the page's own CSS (as listed in the fragment's meta "css")
`import "@/styles/mobile.css";     // ALWAYS LAST (see below)
`import { buildMetadata } from "@/lib/seo";
`import { getRoute } from "@/lib/routes";
`import Breadcrumbs from "@/components/Breadcrumbs";
`import JsonLd from "@/components/JsonLd";
`
`const route = getRoute("/servicii/logopedie/");
`export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path /*, ogImage: "/img/x.jpg" */ });
`
`export default function Page() {
`  return (<>
`    <Breadcrumbs items={[["Servicii", "/servicii/"], ["Logopedie", "/servicii/logopedie/"]]} />
`    <JsonLd data={{ "@context": "https://schema.org", "@type": "MedicalWebPage", /* meta.schema[0] */ }} />
`    {/* fragment body as JSX */}
`  </>);
`}
````
`
`### CSS order rule (important)
`In the original, `mobile.css` loads AFTER the page CSS and relies on that. Next orders CSS by import order, root layout first.
`Therefore `mobile.css` is NOT imported in the root layout; **every `page.tsx` imports its page CSS first and `@/styles/mobile.css` last.**
``base.css` and `whatsapp.css` are global (root layout). Verified on the homepage: base/whatsapp chunk, then home+mobile chunk.
`Pages that share a CSS file just import it again (deduped). Multi-CSS pages: keep the order from the fragment's `css` array.
`
`## 3. Metadata / SEO
`- `buildMetadata({title, description, path, ogImage?, noindex?})` in `src/lib/seo.ts`: title (absolute, no suffix), description, canonical
`  `https://clinicadriova.ro` + path, og:type website / locale ro_RO / site_name / title / description / url / image (default `/img/about-hero.jpg`,
`  `ogImage` is a root-relative path), `noindex` -> robots noindex.
`- `<JsonLd data={obj} />` for each entry of the fragment's `schema` array. The Organization schema (`ORG_SCHEMA` in `src/lib/site.ts`) is already rendered in the root layout `<head>`.
`- `<Breadcrumbs items={meta.breadcrumb} />`: same HTML as build.py (`nav.crumbs > ol > li`, last item `aria-current="page"`), "Acasă" auto-prepended,
`  emits BreadcrumbList JSON-LD itself (do not add it again). Place it as the first element of the page.
`- Dynamic routes: use `generateMetadata` and call `buildMetadata` inside it.
`
`## 4. routes.ts (sitemap / llms.txt / robots)
``src/lib/routes.ts` holds ALL 37 URLs of the original (path, title, description, `noindex`), already filled from the fragment metas.
``sitemap.ts` and `llms.txt/route.ts` read it (noindex entries are skipped; `/admin/` is the only noindex one; robots disallows `/admin/`).
`Porting a page: nothing to register unless the URL is new. For new URLs append an entry. Use `getRoute(path)` in the page so title/description stay in one place.
`If you generate dynamic routes (blog posts, doctors) make sure each one has an entry (or derive entries from the data file and spread them into `routes`).
`
`## 5. Page wrapper class ("body class")
`The original `<body class="{{body_class}}">` is replaced by a wrapper `<div class="site page-xxx">` (`components/SiteShell.tsx`) around nav/main/footer/widgets.
`The class is derived from the pathname in `src/lib/body-class.ts` (`/` -> `page-home`, `/admin*` -> `page-admin`, `/programare*` -> `page-inner page-programare`,
`everything else `page-inner`), so it is correct in server HTML. If a fragment has a special `body_class`, add a rule in `bodyClassFor()`.
`CSS: selectors written `.page-xxx ...` work unchanged. Selectors that were written `body.page-xxx` / `body:not(.page-xxx)` were rewritten to `.page-xxx` / `.site:not(.page-xxx)`
`(done in mobile.css and admin.css). If you find another `body.<class>` selector in a CSS file, rewrite it the same way and mention it in your report.
`(The wrapper is NOT `body`, so `document.body.classList` no longer carries page classes: never port JS that checks it; use `usePathname()`.)
`
`## 6. Icons
``<i data-lucide="calendar"></i>` -> `<Icon name="calendar" />` (`src/components/Icon.tsx`, lucide-react, same kebab-case names).
`It renders the same `<svg class="lucide lucide-calendar" 24x24 stroke-width 2>` that lucide.createIcons made, so existing CSS (`.btn svg{...}`) applies.
`Original `<i data-lucide="x" class="foo">` -> `<Icon name="x" className="foo" />`.
`All icon names found in the whole source tree are already registered. For a new name: import it from `lucide-react` in `Icon.tsx` and add it to `ICONS`.
`Dynamic names (e.g. from data) are typed `IconName`.
`
`## 7. Images
`Plain `<img src="/img/..." alt="...">` with the same attributes as the original (keeps layout identical; the lint rule is off on purpose).
`Use `next/image` only if you pass explicit sizing that cannot change layout.
`
`## 8. Shared client behaviour (already done, just use the attributes/components)
`- `components/Motion.tsx` (root layout): `data-reveal` (`""|fade|left|right|scale|mask`), `data-stagger`, `data-parallax="0.15"`, `data-count="500" data-suffix=",0"`.
`  Write the same attributes in JSX (`data-reveal=""`, `data-stagger=""`). It re-runs on route change and works on server-rendered markup.
`- `components/Arrows.tsx`: `<Arrows forId="t1" />` / `<Arrows forId="t3" small />` replaces `<div class="arrows" data-for="t1">`. The track needs `id="t1"`.
`- Nav (active state, scroll state, burger), footer, footer wordmark crossfade, WhatsApp fab/panel, cookie banner (+ footer "Setari cookie-uri" button), mobile bottom bar: done.
`- `src/lib/whatsapp.ts` exports `WHATSAPP_NUMBER` and `waLink(msg)` (was `window.DRIOVA_WA_NUMBER` / `DRIOVA_WA_LINK`; programare must import these instead of window globals).
`- Cookie consent: `window.DRIOVA_CONSENT` and the `driova:consent` document event still exist (see `CookieConsent.tsx`).
`- The mobile bar WhatsApp button and anything else can open the WhatsApp panel with `document.dispatchEvent(new CustomEvent("driova:wa-toggle"))`.
`
`## 9. Porting page JS (`assets/js/*.js`)
`- Prefer React state/props over DOM querying. One `"use client"` component per interactive widget; keep the server-rendered markup in server components and pass it as `children`
`  when the widget only adds behaviour (see `components/home/DoctorsMarquee.tsx`).
`- If a script only animates existing markup (like the hero), a render-null client component that queries the DOM inside `useEffect` is acceptable (see `components/home/HeroEntrance.tsx`,
`  uses `gsap.context(...).revert()` for cleanup). Always clean up listeners/intervals/observers; honour `prefers-reduced-motion` as the original did.
`- No `window.lucide.createIcons()` calls anywhere; icons are components. Where JS swapped icons, render a different `<Icon>` by state.
`- `gsap` and `lenis` are installed; a later phase will add smooth scroll/parallax. Do not add them to pages now beyond what the original JS did.
`
`## 10. Data-driven pages (medici / servicii / blog)
`Recommended: `src/data/medici.ts`, `src/data/servicii.ts`, `src/data/blog.ts` (typed arrays: slug, title, description, breadcrumb, hero fields, sections...), then
``src/app/medici/[slug]/page.tsx` with `generateStaticParams()` (from the data) and `generateMetadata()` using `buildMetadata`. The index page maps the same data to cards
`(the homepage doctor/service cards currently use local consts in `src/app/page.tsx`; switch them to the shared data when it exists).
`Keep a `routes.ts` entry per slug (or derive: `...doctors.map(d => ({path: \`/medici/${d.slug}/\`, ...}))` spread into `routes`).
`Generator scripts (`_gen_*.py`) show the structure of the fragments; port their data, not their HTML strings. Long article bodies may live as JSX per post or as structured blocks;
`either way no `dangerouslySetInnerHTML`.
`
`## 11. Checklist per page
`1. Fragment meta -> `getRoute()` + `buildMetadata` (+ `ogImage`, `noindex` if present), schema -> `JsonLd`, breadcrumb -> `Breadcrumbs`.
`2. CSS imports: page css..., then `mobile.css` last.
`3. Body copy 1:1 (use `\u2011` for `&#8209;`, `{" "}` for significant spaces, `<br />`).
`4. Compare structure with `site/<path>/index.html` (tags/classes), run `npm run build` (must pass type-check) and `npx eslint`.
`5. Don't edit shared files (`layout.tsx`, `base.css`, `Icon.tsx` additions excepted) without noting it in your report.
