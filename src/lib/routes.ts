/**
 * Central page registry. sitemap.ts, llms.txt/route.ts (and robots) read from here.
 * EVERY page must have an entry (path with leading + trailing slash, title, description).
 * Keep title/description identical to the page's buildMetadata() call (or import from here:
 * `const r = getRoute("/despre/")`). Add `noindex: true` for pages that must stay out of sitemap/llms.
 * Order = order in sitemap and llms.txt groups.
 */
export type RouteEntry = {
  path: string;
  title: string;
  description: string;
  noindex?: boolean;
};

export const routes: RouteEntry[] = [
  { path: "/", title: "Clinica Dr. Iova | Psihiatrie, neurologie și psihologie în Oradea", description: "Trei generații, o singură clinică în Oradea: psihiatria copilului și a adultului, neurologie, psihologie clinică și logopedie. Gratuit prin CAS, cu bilet de trimitere." },
  { path: "/admin/", title: "Panou recepție (demo) | Clinica Dr. Iova", description: "Prototip de panou intern pentru recepție: cereri de programare, calendar pe medici, setări. Nu este indexat și nu conține date reale.", noindex: true },
  { path: "/blog/", title: "Articole despre sănătate mintală | Clinica Dr. Iova", description: "Articole scrise de echipa Clinicii Dr. Iova, Oradea: când mergeți la psihiatru, limbajul copiilor, evaluarea copilului, consultații prin CAS, aviz pentru armă." },
  { path: "/blog/aviz-psihologic-permis-arma-pasi/", title: "Avizul psihologic pentru permisul de armă: pașii | Dr. Iova", description: "Ce cere Legea 295/2004, cât este valabil avizul psihologic, cum decurge evaluarea și ce acte depuneți la poliție. Explicat de Clinica Dr. Iova, Oradea." },
  { path: "/blog/cand-mergem-la-psihiatru/", title: "Când este momentul pentru un consult psihiatric | Dr. Iova", description: "Semnele care merită luate în serios, ce se întâmplă la prima consultație psihiatrică și cum ajungeți la psihiatru prin CAS, în Oradea. Articol educativ." },
  { path: "/blog/consultatie-psihiatrie-cas-bilet-trimitere/", title: "Psihiatrie prin CAS: biletul de trimitere | Dr. Iova Oradea", description: "Cine eliberează biletul de trimitere pentru psihiatrie, câte consultații acoperă, cât este valabil și ce aduceți la clinică. Regulile CNAS, pe scurt." },
  { path: "/blog/evaluare-psihiatrica-copil-ce-presupune/", title: "Evaluarea psihiatrică a copilului: ce presupune | Dr. Iova", description: "Cum decurge prima întâlnire cu psihiatrul pediatru, ce întrebări primesc părinții, ce aduceți, ce urmează și ce decontează CAS. Clinica Dr. Iova, Oradea." },
  { path: "/blog/psihiatru-psiholog-psihoterapeut-diferente/", title: "Psihiatru, psiholog, psihoterapeut: diferențele | Dr. Iova", description: "Ce face psihiatrul, ce face psihologul clinician și ce face psihoterapeutul. Cine prescrie tratament, cine evaluează, la cine mergeți prima dată. Oradea." },
  { path: "/blog/repere-dezvoltare-limbaj-copii-0-5-ani/", title: "Repere de limbaj la copii, 0–5 ani | Clinica Dr. Iova", description: "Ce spun și ce înțeleg copiii la 1, 2, 3, 4 și 5 ani, după reperele CDC, și când merită o evaluare logopedică. Articol pentru părinți, Clinica Dr. Iova Oradea." },
  { path: "/cas/", title: "Programare prin CAS | Clinica Dr. Iova, Oradea", description: "Cum vă programați gratuit prin CAS la Clinica Dr. Iova: cine primește consultații decontate, biletul de trimitere, actele, așteptarea, varianta privată." },
  { path: "/confidentialitate/", title: "Politica de confidențialitate | Clinica Dr. Iova", description: "Cum prelucrează Clinica Dr. Iova datele personale și medicale: formular de programare, WhatsApp, cookie-uri, drepturi GDPR, contact ANSPDCP. Draft juridic." },
  { path: "/contact/", title: "Contact Clinica Dr. Iova | Str. Ceyrat 31, Oradea", description: "Clinica Dr. Iova, Str. Ceyrat nr. 31, bl. WR12, Oradea. Telefon 0359 450 657, receptie@clinicadriova.ro. Luni–vineri 08:00–20:00. Hartă și programare." },
  { path: "/cookies/", title: "Politica de cookie-uri | Clinica Dr. Iova", description: "Ce cookie-uri folosește site-ul Clinicii Dr. Iova din Oradea, de ce, cât timp sunt păstrate și cum vă puteți retrage acordul oricând, din setările de cookie-uri." },
  { path: "/despre/", title: "Despre Clinica Dr. Iova | Psihiatrie și psihologie Oradea", description: "Clinică privată din Oradea, deschisă în 2023, din 2025 pe Str. Ceyrat 31. Psihiatri pentru adulți și copii, neurolog, psihologi, logoped. Contract CAS Bihor." },
  { path: "/medici/", title: "Medicii clinicii | Psihiatri, neurolog, psiholog în Oradea", description: "Medicii Clinicii Dr. Iova din Oradea: psihiatri pentru adulți și copii, neurolog, psiholog clinician și logoped. Consultații gratuite prin CAS, cu bilet." },
  { path: "/medici/adriana-maties/", title: "Dr. Adriana Maties, medic specialist psihiatru | Oradea", description: "Dr. Adriana Maties, medic specialist psihiatru la Clinica Dr. Iova din Oradea. Consultații pentru adulți, gratuite prin CAS cu bilet. Tel. 0359 450 657." },
  { path: "/medici/mihaela-caba/", title: "Mihaela Caba, psiholog clinician, logoped | Clinica Dr. Iova", description: "Mihaela Caba, psiholog clinician și logoped la Clinica Dr. Iova din Oradea. Evaluări psihologice pentru copii și adulți, logopedie. Tel. 0359 450 657." },
  { path: "/medici/roxana-samuila/", title: "Dr. Roxana Samuila, psihiatrie pediatrică | Oradea", description: "Dr. Roxana Samuila, medic specialist psihiatrie pediatrică la Clinica Dr. Iova, Oradea. Consultații copii și adolescenți, gratuite prin CAS cu bilet." },
  { path: "/medici/sebastian-macrea/", title: "Dr. Sebastian Macrea, medic specialist psihiatru | Oradea", description: "Dr. Sebastian Macrea, medic specialist psihiatru la Clinica Dr. Iova din Oradea. Consultații pentru adulți, gratuite prin CAS cu bilet. Tel. 0359 450 657." },
  { path: "/medici/sorin-iova/", title: "Dr. Sorin Iova, medic primar psihiatru | Clinica Dr. Iova", description: "Dr. Sorin Iova, medic primar psihiatru, fondatorul Clinicii Dr. Iova din Oradea, șef de lucrări la Universitatea din Oradea. Consultații adulți, prin CAS." },
  { path: "/medici/theodor-nicolau/", title: "Dr. Theodor Nicolau, medic specialist psihiatru | Oradea", description: "Dr. Theodor Nicolau, medic specialist psihiatru la Clinica Dr. Iova din Oradea. Consultații pentru adulți, gratuite prin CAS cu bilet. Tel. 0359 450 657." },
  { path: "/medici/titus-moga/", title: "Dr. Titus Moga, medic specialist neurolog | Clinica Dr. Iova", description: "Dr. Titus Moga, medic specialist neurolog și asistent universitar, la Clinica Dr. Iova din Oradea. Consultații gratuite prin CAS cu bilet de trimitere." },
  { path: "/programare/", title: "Programare online | Clinica Dr. Iova Oradea", description: "Cerere de programare online la Clinica Dr. Iova, Oradea: alegeți serviciul, medicul și intervalul preferat. Recepția confirmă telefonic, luni–vineri 08:00–20:00." },
  { path: "/servicii/", title: "Servicii | Clinica Dr. Iova Oradea", description: "Serviciile Clinicii Dr. Iova, Oradea: psihiatrie adulți și copii, neurologie, psihologie, psihoterapie, EMDR, logopedie, evaluări, avize. Gratuit prin CAS." },
  { path: "/servicii/aviz-psihologic-port-arma/", title: "Aviz psihologic port-armă Oradea | Clinica Dr. Iova", description: "Aviz psihologic pentru permisul de armă la Clinica Dr. Iova, Oradea: evaluare conform Legii 295/2004, pași, acte, valabilitate. Programare la 0359 450 657." },
  { path: "/servicii/consiliere-psihologica/", title: "Consiliere psihologică Oradea | Clinica Dr. Iova", description: "Consiliere psihologică la Clinica Dr. Iova, Oradea: întâlniri pe termen scurt cu un psiholog clinician, pentru o dificultate concretă. Adulți și părinți." },
  { path: "/servicii/consultatii-cas/", title: "Consultații gratuite prin CAS | Clinica Dr. Iova Oradea", description: "Cum folosiți biletul de trimitere la Clinica Dr. Iova, Oradea: psihiatrie, psihiatrie pediatrică și neurologie gratuite prin CAS Bihor. Acte și valabilitate." },
  { path: "/servicii/evaluarea-copiilor/", title: "Evaluarea psihologică a copilului | Oradea | Dr. Iova", description: "Evaluarea psihologică a copilului la Clinica Dr. Iova, Oradea: dezvoltare, atenție, limbaj, comportament, pregătire pentru școală. Raport scris și recomandări." },
  { path: "/servicii/evaluari-comisii/", title: "Evaluări pentru comisii de handicap și pensionare | Oradea", description: "Documente medicale și psihologice pentru comisia de handicap și pensia de invaliditate, la Clinica Dr. Iova, Oradea. Pași, acte necesare, termene legale." },
  { path: "/servicii/logopedie/", title: "Logopedie Oradea | Terapia limbajului | Clinica Dr. Iova", description: "Logopedie pentru copii la Clinica Dr. Iova, Oradea: evaluarea și terapia tulburărilor de limbaj și pronunție, cu Forbrain. Logoped și psiholog, același loc." },
  { path: "/servicii/neurologie/", title: "Neurologie Oradea | Consult neurologic | Clinica Dr. Iova", description: "Consult neurologic pentru adulți la Clinica Dr. Iova, Oradea, cu Dr. Titus Moga, medic specialist neurolog. Gratuit prin CAS, cu bilet. Tel. 0359 450 657." },
  { path: "/servicii/psihiatrie-adulti/", title: "Psihiatrie adulți în Oradea | Clinica Dr. Iova", description: "Psihiatrie pentru adulți la Clinica Dr. Iova, Oradea: evaluare, diagnostic și urmărirea tratamentului. Gratuit prin CAS, cu bilet. Tel. 0359 450 657." },
  { path: "/servicii/psihiatrie-pediatrica/", title: "Psihiatrie pediatrică Oradea | Clinica Dr. Iova", description: "Psihiatrie pediatrică la Clinica Dr. Iova, Oradea: evaluarea copilului și a adolescentului împreună cu părinții. Gratuit prin CAS, cu bilet de trimitere." },
  { path: "/servicii/psihologie-clinica/", title: "Psihologie clinică Oradea | Evaluare | Clinica Dr. Iova", description: "Psihologie clinică la Clinica Dr. Iova, Oradea: evaluare psihologică și psihodiagnostic pentru copii și adulți, cu raport scris. Peste 400 de evaluări pe lună." },
  { path: "/servicii/psihoterapie-integrativa/", title: "Psihoterapie integrativă Oradea | Clinica Dr. Iova", description: "Psihoterapie integrativă la Clinica Dr. Iova, Oradea: ședințe individuale, cu metode alese după nevoile persoanei, alături de medicii psihiatri ai clinicii." },
  { path: "/servicii/terapie-emdr/", title: "Terapie EMDR Oradea | Clinica Dr. Iova", description: "Terapie EMDR la Clinica Dr. Iova, Oradea: metodă în opt faze pentru amintiri traumatice, recomandată de OMS pentru stresul posttraumatic. Terapeut format EMDR." },
  { path: "/termeni/", title: "Termeni și condiții | Clinica Dr. Iova", description: "Termenii de utilizare a site-ului Clinicii Dr. Iova din Oradea: informații cu caracter general, programări online, limite de răspundere și date de contact." },
];

export function getRoute(path: string): RouteEntry {
  const r = routes.find((x) => x.path === path);
  if (!r) throw new Error(`routes.ts: missing entry for ${path}`);
  return r;
}
