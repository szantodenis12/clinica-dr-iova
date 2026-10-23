import "@/styles/mobile.css"; // always last
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CookieSettingsLink from "@/components/info/CookieSettingsLink";

const route = getRoute("/cookies/");

export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path });

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Politica de cookie-uri",
  url: "https://clinicadriova.ro/cookies/",
  publisher: { "@id": "https://clinicadriova.ro/#clinica" },
};

export default function CookiesPage() {
  return (
    <>
      <Breadcrumbs items={[["Politica de cookie-uri", "/cookies/"]]} />
      <JsonLd data={webPageSchema} />

      <header className="phead">
        <div className="kicker" data-reveal="fade">
          Informații legale
        </div>
        <h1 data-reveal="">Politica de cookie-uri</h1>
        <p className="intro" data-reveal="">
          Ce cookie-uri folosim, de ce și cum vă puteți schimba acordul. Ultima actualizare: <span className="todo">de completat la lansare</span>.
        </p>
      </header>
      <section>
        <div className="wrap">
          <div className="note warn" style={{ maxWidth: 720, marginBottom: 36 }}>
            <strong>Draft pentru revizuire juridică.</strong> Lista finală de cookie-uri depinde de instrumentele alese la lansare (analytics, hartă, formular).
          </div>
          <div className="prose">
            <h2>Ce sunt cookie-urile?</h2>
            <p>
              Cookie-urile sunt fișiere mici pe care un site le salvează în browserul dumneavoastră. Unele sunt necesare ca site-ul să funcționeze. Altele ne ajută să înțelegem cum este folosit site-ul și se activează doar cu acordul dumneavoastră.
            </p>

            <h2>Ce categorii folosim?</h2>
            <h3>Necesare (mereu active)</h3>
            <p>
              Păstrează alegerea dumneavoastră privind cookie-urile și permit funcționarea formularului de programare. Nu pot fi dezactivate din site, dar le puteți șterge din setările browserului.
            </p>
            <h3>Măsurare (doar cu acord)</h3>
            <p>
              Ne arată, în mod agregat, ce pagini sunt vizitate și de pe ce dispozitive, ca să îmbunătățim informațiile de pe site. Exemplu: Google Analytics 4, cu IP anonimizat <span className="todo">de confirmat instrumentul ales</span>.
            </p>
            <h3>Marketing (doar cu acord)</h3>
            <p>
              Măsoară rezultatele campaniilor de promovare ale clinicii (de exemplu Meta sau Google Ads). <strong>Aceste cookie-uri nu se încarcă pe paginile despre afecțiuni și servicii medicale</strong>, deoarece navigarea pe astfel de pagini poate dezvălui informații despre sănătate.
            </p>

            <h2>Lista cookie-urilor</h2>
            <table>
              <thead>
                <tr>
                  <th>Denumire</th>
                  <th>Categorie</th>
                  <th>Scop</th>
                  <th>Durată</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>driova_consent_v1 (stocare locală)</td>
                  <td>Necesar</td>
                  <td>Păstrează alegerea privind cookie-urile</td>
                  <td>Până la ștergere</td>
                </tr>
                <tr>
                  <td>driova_* (stocare locală, formular)</td>
                  <td>Necesar</td>
                  <td>Păstrează pașii formularului de programare pe dispozitiv</td>
                  <td>Până la ștergere</td>
                </tr>
                <tr>
                  <td>_ga, _ga_*</td>
                  <td>Măsurare</td>
                  <td>Statistici de vizitare (Google Analytics)</td>
                  <td>
                    Până la 2 ani <span className="todo">de confirmat</span>
                  </td>
                </tr>
                <tr>
                  <td>_fbp</td>
                  <td>Marketing</td>
                  <td>Măsurarea campaniilor Meta</td>
                  <td>
                    3 luni <span className="todo">de confirmat</span>
                  </td>
                </tr>
                <tr>
                  <td>Cookie-uri Google Maps</td>
                  <td>Terță parte</td>
                  <td>Afișarea hărții pe pagina de contact</td>
                  <td>
                    <span className="todo">de confirmat</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <h2>Cum vă schimbați acordul?</h2>
            <p>
              Oricând, din butonul <CookieSettingsLink /> din subsolul fiecărei pagini. Retragerea acordului nu afectează legalitatea prelucrării făcute înainte de retragere.
            </p>
            <p>
              Puteți șterge sau bloca cookie-urile și din setările browserului. Dacă blocați cookie-urile necesare, unele funcții ale site-ului pot să nu meargă corect.
            </p>

            <h2>Mai multe informații</h2>
            <p>
              Despre datele personale și drepturile dumneavoastră: <Link href="/confidentialitate/">Politica de confidențialitate</Link>. Pentru întrebări:{" "}
              <a href="mailto:receptie@clinicadriova.ro">receptie@clinicadriova.ro</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
