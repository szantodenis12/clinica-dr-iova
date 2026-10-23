import "@/styles/mobile.css"; // always last
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";

const route = getRoute("/termeni/");

export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path });

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Termeni și condiții",
  url: "https://clinicadriova.ro/termeni/",
  publisher: { "@id": "https://clinicadriova.ro/#clinica" },
};

export default function TermeniPage() {
  return (
    <>
      <Breadcrumbs items={[["Termeni și condiții", "/termeni/"]]} />
      <JsonLd data={webPageSchema} />

      <header className="phead">
        <div className="kicker" data-reveal="fade">
          Informații legale
        </div>
        <h1 data-reveal="">Termeni și condiții</h1>
        <p className="intro" data-reveal="">
          Regulile de folosire a site-ului clinicadriova.ro. Ultima actualizare: <span className="todo">de completat la lansare</span>.
        </p>
      </header>
      <section>
        <div className="wrap">
          <div className="note warn" style={{ maxWidth: 720, marginBottom: 36 }}>
            <strong>Draft pentru revizuire juridică.</strong>
          </div>
          <div className="prose">
            <h2>1. Cine suntem</h2>
            <p>
              Site-ul clinicadriova.ro aparține CABINETE DE PSIHIATRIE DR. IOVA S.R.L., CUI 46237987, cu sediul în Oradea, Str. Ceyrat nr. 31, bl. WR12. Telefon: 0359 450 657. E-mail: receptie@clinicadriova.ro.
            </p>

            <h2>2. Informațiile de pe site</h2>
            <p>
              Textele de pe site, inclusiv articolele, au caracter general și informativ. Ele nu înlocuiesc consultația medicală și nu reprezintă un diagnostic sau o recomandare de tratament pentru o persoană anume.
            </p>
            <p>
              <strong>În caz de urgență sunați la 112.</strong> Formularul de programare și mesajele pe WhatsApp nu sunt monitorizate continuu și nu sunt potrivite pentru situații urgente.
            </p>

            <h2>3. Programările online</h2>
            <p>
              Cererea trimisă prin formular nu este o programare confirmată. Recepția vă contactează în programul de lucru, de luni până vineri între 08:00 și 20:00, pentru confirmarea zilei și a orei.
            </p>
            <p>
              Pentru consultațiile prin CAS sunt necesare documentele cerute de casa de asigurări. Pentru consultațiile private, tariful vă este comunicat de recepție înainte de programare.
            </p>
            <p>
              Vă rugăm să anunțați recepția dacă nu puteți ajunge, ca locul să poată fi oferit altui pacient. <span className="todo">de cerut de la client: regula de anulare, dacă există</span>
            </p>

            <h2>4. Datele dumneavoastră</h2>
            <p>
              Datele trimise prin site sunt prelucrate conform <Link href="/confidentialitate/">Politicii de confidențialitate</Link> și <Link href="/cookies/">Politicii de cookie-uri</Link>.
            </p>

            <h2>5. Drepturi de autor</h2>
            <p>
              Textele, fotografiile și elementele grafice de pe site aparțin clinicii sau sunt folosite cu acordul autorilor. Nu pot fi copiate sau folosite în scop comercial fără acord scris.
            </p>

            <h2>6. Răspundere</h2>
            <p>
              Facem tot posibilul ca informațiile de pe site să fie corecte și actuale, dar ele se pot schimba (de exemplu programul medicilor sau regulile CAS). Pentru informații sigure, vă rugăm să confirmați cu recepția.
            </p>

            <h2>7. Reclamații și soluționarea litigiilor</h2>
            <p>
              Ne puteți scrie la receptie@clinicadriova.ro. Consumatorii pot apela și la Autoritatea Națională pentru Protecția Consumatorilor, prin{" "}
              <a href="https://reclamatiisal.anpc.ro/" target="_blank" rel="noopener">
                platforma de soluționare alternativă a litigiilor (SAL)
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
