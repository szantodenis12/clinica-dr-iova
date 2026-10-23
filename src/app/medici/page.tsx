import Link from "next/link";
import "@/styles/medici.css";
import "@/styles/mobile.css"; // always last
import { buildMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Icon from "@/components/Icon";
import MediciFilter from "@/components/medici/MediciFilter";
import { DOCTORS, CAT_LABEL, SOON } from "@/data/medici";
import { BASE_URL } from "@/lib/site";

const route = getRoute("/medici/");
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path });

const itemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Medicii Clinicii Dr. Iova",
  itemListElement: DOCTORS.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${BASE_URL}/medici/${d.slug}/`,
    name: d.full,
  })),
};

export default function MediciPage() {
  return (
    <>
      <Breadcrumbs items={[["Medici", "/medici/"]]} />
      <JsonLd data={itemList} />
      <MediciFilter />

      <header className="phead">
        <div className="kicker" data-reveal="fade">Echipa clinicii · Oradea</div>
        <h1 data-reveal="lines">Medicii Clinicii Dr. Iova</h1>
        <p className="intro" data-reveal="">La Clinica Dr. Iova din Oradea (Str. Ceyrat nr. 31) lucrează șapte medici și psihologi: cinci psihiatri, dintre care unul pentru copii și adolescenți, un neurolog și un psiholog clinician care este și logoped. Programări la 0359 450 657, luni–vineri 08:00–20:00. Cu bilet de trimitere, consultațiile sunt gratuite prin CAS Bihor.</p>
        <div className="md-filters" role="group" aria-label="Filtrați medicii" data-stagger="fade">
          <button className="is-on" data-filter="all"><Icon name="users" />Toți <span className="cnt">{DOCTORS.length}</span></button>
          {CAT_LABEL.map(([k, v]) => (
            <button key={k} data-filter={k}>{v} <span className="cnt">{DOCTORS.filter((d) => d.cats.includes(k)).length}</span></button>
          ))}
        </div>
      </header>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="md-grid" id="mdGrid" data-stagger="scale">
            {DOCTORS.map((d) => (
              <Link key={d.slug} className="md-card" href={`/medici/${d.slug}/`} data-cat={d.cats.join(" ")}>
                <span className="tag">{d.tag}</span>
                <img src={`/img/trim/${d.slug}.png`} alt={`${d.full}, ${d.title.toLowerCase()}`} />
                <span className="info">
                  <h3>{d.h1}</h3>
                  <span className="role">{d.title}</span>
                  <span className="chips">
                    {d.chips.slice(0, 2).map((c) => (
                      <span key={c}>{c}</span>
                    ))}
                  </span>
                </span>
                <span className="go"><Icon name="chevron-right" /></span>
              </Link>
            ))}
          </div>
          <p className="md-empty">Niciun medic în această categorie.</p>

          <div className="md-soon" data-reveal="">
            <div className="h3">În curând în echipă</div>
            <p>Medici și psihologi care se alătură clinicii. Programările la aceștia se deschid după anunțul clinicii. <span className="todo">de cerut de la client: data de la care consultă fiecare, fotografii, fișa medicului</span></p>
            <ul data-stagger="">
              {SOON.map(([n, t]) => (
                <li key={n}><span className="ini">{n.split(" ").slice(-1)[0][0]}</span>{n}<small>{t}</small></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap md-how">
          <div>
            <h2 className="h2" data-reveal="lines">La ce medic<br />vă programați?</h2>
            <p className="lead" data-reveal="">Dacă nu știți sigur, sunați la recepție. Vi se spune la ce specialitate mergeți, ce acte aduceți și când este primul loc liber.</p>
            <div className="ctas" style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 28 }} data-reveal="">
              <a className="btn btn-dark" href="tel:+40359450657"><Icon name="phone" />0359 450 657</a>
              <Link className="btn btn-line" href="/programare/"><Icon name="calendar" />Programare online</Link>
            </div>
          </div>
          <div className="list" data-stagger="">
            <div className="row"><span className="ic"><Icon name="brain" /></span><div><b>Psihiatrie pentru adulți</b><p>Neliniște, tristețe sau insomnie care durează de săptămâni, schimbări de comportament. Cu bilet de trimitere, consultația este gratuită. <Link href="/servicii/psihiatrie-adulti/">Despre consultație</Link></p></div></div>
            <div className="row"><span className="ic"><Icon name="baby" /></span><div><b>Psihiatrie pediatrică</b><p>Copii și adolescenți, însoțiți de părinte. Probleme de atenție, comportament, somn sau dezvoltare. <Link href="/servicii/psihiatrie-pediatrica/">Despre consultație</Link></p></div></div>
            <div className="row"><span className="ic"><Icon name="activity" /></span><div><b>Neurologie</b><p>Dureri de cap repetate, amețeli, amorțeli, tremor, tulburări de memorie sau de echilibru. <Link href="/servicii/neurologie/">Despre consultație</Link></p></div></div>
            <div className="row"><span className="ic"><Icon name="message-circle-heart" /></span><div><b>Psihologie și logopedie</b><p>Evaluări psihologice pentru copii și adulți, evaluări pentru comisii, avize, consiliere, terapie logopedică. <Link href="/servicii/psihologie-clinica/">Despre evaluare</Link></p></div></div>
          </div>
        </div>
      </section>

      <div className="cta-band" data-reveal="" data-parallax="0.12" data-parallax-prop="--wm">
        <div className="in">
          <div>
            <h2>Programare la un medic al clinicii</h2>
            <p>Sunați la recepție, de luni până vineri, între 08:00 și 20:00, sau folosiți formularul de programare. Str. Ceyrat nr. 31, bl. WR12, Oradea.</p>
          </div>
          <div className="ctas">
            <a className="btn btn-light" href="tel:+40359450657"><Icon name="phone" />0359 450 657</a>
            <Link className="btn btn-ghost" href="/programare/"><Icon name="calendar" />Programare online</Link>
          </div>
        </div>
      </div>
    </>
  );
}
