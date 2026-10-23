import Link from "next/link";
import "@/styles/info.css";
import "@/styles/mobile.css"; // always last
import { buildMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Icon from "@/components/Icon";

const route = getRoute("/contact/");
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path, ogImage: "/img/Image4.jpg" });

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Clinica Dr. Iova",
  url: "https://clinicadriova.ro/contact/",
  inLanguage: "ro",
  mainEntity: { "@id": "https://clinicadriova.ro/#clinica" },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[["Contact", "/contact/"]]} />
      <JsonLd data={schema} />

      <header className="phead">
        <div data-reveal="">
          <div className="kicker">Contact</div>
          <h1>Str. Ceyrat nr. 31, Oradea</h1>
          <p className="intro">Clinica Dr. Iova se află pe Str. Ceyrat nr. 31, bl. WR12, Oradea. Recepția răspunde la 0359 450 657 de luni până vineri, între 08:00 și 20:00. Programările se fac telefonic sau prin formularul online.</p>
        </div>
      </header>

      <div className="contact-grid">
        <div className="ccard" data-reveal="left">
          <div className="crow">
            <span className="ic"><Icon name="map-pin" /></span>
            <div><small>Adresă</small><b>Str. Ceyrat nr. 31, bl. WR12<br />Oradea, Bihor</b><p>Spațiu la parter, cu intrare de la stradă. <span className="todo">de confirmat cu clinica: accesul pentru cărucioare și persoane cu mobilitate redusă</span></p></div>
          </div>
          <div className="crow">
            <span className="ic"><Icon name="phone" /></span>
            <div><small>Telefon recepție</small><b><a href="tel:+40359450657">0359 450 657</a></b><p>Programări, reprogramări, întrebări despre bilet de trimitere și acte.</p></div>
          </div>
          <div className="crow">
            <span className="ic"><Icon name="mail" /></span>
            <div><small>E-mail</small><b><a href="mailto:receptie@clinicadriova.ro">receptie@clinicadriova.ro</a></b><p>Pentru documente și întrebări care nu sunt urgente. Nu trimiteți detalii medicale prin e-mail.</p></div>
          </div>
          <div className="crow">
            <span className="ic"><Icon name="clock" /></span>
            <div><small>Program</small><div className="hours"><span>Luni–vineri</span><span>08:00–20:00</span><span>Sâmbătă–duminică</span><span>Închis</span></div></div>
          </div>
          <div className="ctas">
            <Link className="btn btn-dark" href="/programare/"><Icon name="calendar" />Programare online</Link>
            <Link className="btn btn-line" href="/cas/"><Icon name="receipt" />Programare prin CAS</Link>
          </div>
        </div>
        <div className="map" data-reveal="mask">
          <iframe title="Harta: Clinica Dr. Iova, Str. Ceyrat 31, Oradea" src="https://www.google.com/maps?q=Strada+Ceyrat+31+Oradea&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen></iframe>
          <a className="pin" href="https://www.google.com/maps/search/Clinica+Dr.+Iova+Oradea" target="_blank" rel="noopener"><Icon name="navigation" />Deschideți în Google Maps</a>
        </div>
      </div>

      <section className="ways" style={{ padding: 0 }}>
        <div className="sec-head" data-reveal="">
          <div>
            <h2 className="h2">Cum ajungeți</h2>
            <p className="lead">Informațiile de orientare (zonă, parcare, transport public) se completează împreună cu clinica înainte de publicare.</p>
          </div>
        </div>
        <div className="grid" data-stagger="">
          <div className="way card-lift"><span className="ic"><Icon name="car" /></span><h3>Cu mașina</h3><p>Str. Ceyrat nr. 31, bl. WR12. Introduceți adresa în aplicația de navigație sau folosiți butonul de deschidere în Google Maps de pe hartă.</p><p><span className="todo">de cerut de la client: unde se parchează (parcare proprie, locuri la stradă, parcare cu plată în apropiere)</span></p></div>
          <div className="way card-lift"><span className="ic"><Icon name="bus" /></span><h3>Cu transportul public</h3><p><span className="todo">de cerut de la client: liniile de autobuz sau tramvai și stația cea mai apropiată</span></p></div>
          <div className="way card-lift"><span className="ic"><Icon name="footprints" /></span><h3>Repere în zonă</h3><p><span className="todo">de cerut de la client: repere cunoscute din apropiere (magazin, școală, biserică, intersecție) pentru orientarea pacienților care vin prima dată</span></p></div>
        </div>
      </section>

      <section className="ways" style={{ padding: 0 }}>
        <div className="sec-head" data-reveal="">
          <div>
            <h2 className="h2">Înainte să ne sunați</h2>
            <p className="lead">Câteva răspunsuri scurte la întrebările pe care recepția le primește cel mai des.</p>
          </div>
        </div>
        <div className="grid" data-stagger="">
          <div className="way"><span className="ic"><Icon name="receipt" /></span><h3>Veniți prin CAS?</h3><p>Aveți nevoie de bilet de trimitere de la medicul de familie sau de la alt medic specialist în contract cu casa, plus cardul de sănătate. Detalii pe pagina <Link href="/cas/" style={{ textDecoration: "underline" }}>Programare prin CAS</Link>.</p></div>
          <div className="way"><span className="ic"><Icon name="message-circle" /></span><h3>WhatsApp</h3><p>Butonul de WhatsApp din colțul paginii deschide o conversație cu recepția, pentru programări. Nu trimiteți detalii medicale pe WhatsApp. <span className="todo">de cerut de la client: numărul de WhatsApp al recepției</span></p></div>
          <div className="way"><span className="ic"><Icon name="siren" /></span><h3>Urgențe</h3><p>Clinica nu are serviciu de urgență. În caz de urgență sunați la 112 sau mergeți la cea mai apropiată unitate de primiri urgențe.</p></div>
        </div>
      </section>

      <section className="contact-photos" style={{ padding: 0 }}>
        <div className="sec-head" data-reveal="">
          <div>
            <h2 className="h2">Așa arată recepția</h2>
            <p className="lead">Ca să recunoașteți locul când ajungeți.</p>
          </div>
        </div>
        <div className="strip" data-stagger="scale">
          <div className="img-zoom"><img src="/img/Image4.jpg" alt="Recepția clinicii și ușa cabinetului 1, cu sigla Dr. Iova" loading="lazy" /></div>
          <div className="img-zoom"><img src="/img/Image7.jpg" alt="Biroul recepției" loading="lazy" /></div>
          <div className="img-zoom"><img src="/img/Image2.jpg" alt="Sala de așteptare" loading="lazy" /></div>
        </div>
      </section>

      <section className="cta-band">
        <div className="in" data-reveal="scale">
          <div>
            <h2>Programare la Clinica Dr. Iova</h2>
            <p>Completați formularul sau sunați la recepție. Vă confirmăm ziua, ora și medicul.</p>
          </div>
          <div className="ctas">
            <Link className="btn btn-light" href="/programare/"><Icon name="calendar" />Programare</Link>
            <a className="btn btn-ghost" href="tel:+40359450657"><Icon name="phone" />0359 450 657</a>
          </div>
        </div>
      </section>
    </>
  );
}
