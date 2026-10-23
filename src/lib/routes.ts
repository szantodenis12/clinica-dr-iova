/**
 * Central page registry. sitemap.ts, llms.txt/route.ts (and robots) read from here.
 *
 * - STATIC pages (home, contact, cookies...) are hardcoded in `staticRoutes` below.
 * - DYNAMIC pages are derived from their data file, so adding one needs no edit here:
 *     /blog/<slug>/     <- src/data/blog.ts    (metaTitle / metaDescription)
 *     /medici/<slug>/   <- src/data/medici.ts  (metaTitle / metaDescription)
 *     /servicii/<slug>/ <- src/data/servicii.ts (metaTitle / metaDescription)
 * Final order = alphabetical by path (this is the order of sitemap.xml and llms.txt groups).
 * Static pages: `const r = getRoute("/despre/")`. Add `noindex: true` to keep a page out of sitemap/llms.
 * Do not import this file from the data files (would be circular).
 */
import { blogPosts } from "@/data/blog";
import { DOCTORS } from "@/data/medici";
import { servicii } from "@/data/servicii";

export type RouteEntry = {
  path: string;
  title: string;
  description: string;
  noindex?: boolean;
};

const staticRoutes: RouteEntry[] = [
  { path: "/", title: "Clinica Dr. Iova | Psihiatrie, neurologie și psihologie în Oradea", description: "Trei generații, o singură clinică în Oradea: psihiatria copilului și a adultului, neurologie, psihologie clinică și logopedie. Gratuit prin CAS, cu bilet de trimitere." },
  { path: "/admin/", title: "Panou recepție (demo) | Clinica Dr. Iova", description: "Prototip de panou intern pentru recepție: cereri de programare, calendar pe medici, setări. Nu este indexat și nu conține date reale.", noindex: true },
  { path: "/blog/", title: "Articole despre sănătate mintală | Clinica Dr. Iova", description: "Articole scrise de echipa Clinicii Dr. Iova, Oradea: când mergeți la psihiatru, limbajul copiilor, evaluarea copilului, consultații prin CAS, aviz pentru armă." },
  { path: "/cas/", title: "Programare prin CAS | Clinica Dr. Iova, Oradea", description: "Cum vă programați gratuit prin CAS la Clinica Dr. Iova: cine primește consultații decontate, biletul de trimitere, actele, așteptarea, varianta privată." },
  { path: "/confidentialitate/", title: "Politica de confidențialitate | Clinica Dr. Iova", description: "Cum prelucrează Clinica Dr. Iova datele personale și medicale: formular de programare, WhatsApp, cookie-uri, drepturi GDPR, contact ANSPDCP. Draft juridic." },
  { path: "/contact/", title: "Contact Clinica Dr. Iova | Str. Ceyrat 31, Oradea", description: "Clinica Dr. Iova, Str. Ceyrat nr. 31, bl. WR12, Oradea. Telefon 0359 450 657, receptie@clinicadriova.ro. Luni–vineri 08:00–20:00. Hartă și programare." },
  { path: "/cookies/", title: "Politica de cookie-uri | Clinica Dr. Iova", description: "Ce cookie-uri folosește site-ul Clinicii Dr. Iova din Oradea, de ce, cât timp sunt păstrate și cum vă puteți retrage acordul oricând, din setările de cookie-uri." },
  { path: "/despre/", title: "Despre Clinica Dr. Iova | Psihiatrie și psihologie Oradea", description: "Clinică privată din Oradea, deschisă în 2023, din 2025 pe Str. Ceyrat 31. Psihiatri pentru adulți și copii, neurolog, psihologi, logoped. Contract CAS Bihor." },
  { path: "/medici/", title: "Medicii clinicii | Psihiatri, neurolog, psiholog în Oradea", description: "Medicii Clinicii Dr. Iova din Oradea: psihiatri pentru adulți și copii, neurolog, psiholog clinician și logoped. Consultații gratuite prin CAS, cu bilet." },
  { path: "/programare/", title: "Programare online | Clinica Dr. Iova Oradea", description: "Cerere de programare online la Clinica Dr. Iova, Oradea: alegeți serviciul, medicul și intervalul preferat. Recepția confirmă telefonic, luni–vineri 08:00–20:00." },
  { path: "/servicii/", title: "Servicii | Clinica Dr. Iova Oradea", description: "Serviciile Clinicii Dr. Iova, Oradea: psihiatrie adulți și copii, neurologie, psihologie, psihoterapie, EMDR, logopedie, evaluări, avize. Gratuit prin CAS." },
  { path: "/termeni/", title: "Termeni și condiții | Clinica Dr. Iova", description: "Termenii de utilizare a site-ului Clinicii Dr. Iova din Oradea: informații cu caracter general, programări online, limite de răspundere și date de contact." },
];

const dynamicRoutes: RouteEntry[] = [
  ...blogPosts.map((p) => ({ path: `/blog/${p.slug}/`, title: p.metaTitle, description: p.metaDescription })),
  ...DOCTORS.map((d) => ({ path: `/medici/${d.slug}/`, title: d.metaTitle, description: d.metaDescription })),
  ...servicii.map((s) => ({ path: `/servicii/${s.slug}/`, title: s.metaTitle, description: s.metaDescription })),
];

export const routes: RouteEntry[] = [...staticRoutes, ...dynamicRoutes].sort((a, b) => (a.path < b.path ? -1 : a.path > b.path ? 1 : 0));

export function getRoute(path: string): RouteEntry {
  const r = routes.find((x) => x.path === path);
  if (!r) throw new Error(`routes.ts: missing entry for ${path}`);
  return r;
}
