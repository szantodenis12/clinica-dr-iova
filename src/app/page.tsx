import type { CSSProperties } from "react";
import Link from "next/link";
import "@/styles/home.css";
import "@/styles/mobile.css"; // always last
import { buildMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import JsonLd from "@/components/JsonLd";
import Icon, { type IconName } from "@/components/Icon";
import Arrows from "@/components/Arrows";
import HeroEntrance from "@/components/home/HeroEntrance";
import DoctorsMarquee from "@/components/home/DoctorsMarquee";

const route = getRoute("/");

export const metadata = buildMetadata({ title: route.title, description: route.description, path: "/" });

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    ["Cum fac o programare la Clinica Dr. Iova?", "Online, din pagina Programare, sau telefonic la recepție, 0359 450 657, de luni până vineri între 08:00 și 20:00. Puteți scrie și la receptie@clinicadriova.ro."],
    ["Consultația este gratuită prin CAS?", "Da, dacă veniți cu bilet de trimitere de la medicul de familie sau de la alt medic specialist. Clinica are contract cu CAS Bihor. Fără bilet de trimitere, consultația se plătește la clinică."],
    ["Tratați și copii?", "Da. Dr. Roxana Samuila este medic specialist în psihiatrie pediatrică, iar la clinică lucrează și psiholog clinician și logoped pentru copii."],
    ["Ce evaluări psihologice faceți?", "Evaluări ale copiilor, evaluări pentru comisiile de handicap și de pensionare și avize psihologice pentru permisul de port-armă."],
    ["Unde este clinica?", "În Oradea, pe strada Ceyrat nr. 31, bl. WR12. Programul este de luni până vineri, 08:00–20:00."],
    ["Ce fac într-o urgență?", "În caz de urgență sunați la 112. Clinica nu are serviciu de urgență și este închisă în weekend."],
  ].map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

const services = [
  ["/servicii/psihiatrie-adulti/", "serv-psihiatrie-adulti.jpg", "Psihiatrie pentru adulți", "Consultație, diagnostic și urmărirea tratamentului în timp."],
  ["/servicii/psihiatrie-pediatrica/", "serv-psihiatrie-pediatrica.jpg", "Psihiatrie pediatrică", "Evaluarea copilului și planul de tratament, discutate cu părinții."],
  ["/servicii/neurologie/", "serv-neurologie.jpg", "Neurologie", "Consult neurologic în aceeași clinică, cu aceeași recepție."],
  ["/servicii/psihologie-clinica/", "serv-psihologie.jpg", "Psihologie și psihoterapie", "Evaluări psihologice, consiliere, psihoterapie integrativă și EMDR."],
  ["/servicii/logopedie/", "serv-logopedie.jpg", "Logopedie", "Evaluarea și terapia tulburărilor de limbaj la copii."],
];

const specs: [string, IconName, string][] = [
  ["/servicii/psihiatrie-adulti/", "brain", "Psihiatrie adulți"],
  ["/servicii/psihiatrie-pediatrica/", "baby", "Psihiatrie pediatrică"],
  ["/servicii/neurologie/", "activity", "Neurologie"],
  ["/servicii/psihologie-clinica/", "message-circle-heart", "Psihologie clinică"],
  ["/servicii/psihoterapie-integrativa/", "armchair", "Psihoterapie integrativă"],
  ["/servicii/terapie-emdr/", "eye", "Terapie EMDR"],
  ["/servicii/logopedie/", "audio-lines", "Logopedie"],
  ["/servicii/evaluarea-copiilor/", "puzzle", "Evaluarea copiilor"],
  ["/servicii/consiliere-psihologica/", "messages-square", "Consiliere psihologică"],
  ["/servicii/evaluari-comisii/", "file-check", "Evaluări pentru comisii"],
  ["/servicii/aviz-psihologic-port-arma/", "badge-check", "Aviz psihologic port‑armă"],
  ["/servicii/consultatii-cas/", "receipt", "Consultații prin CAS"],
];

const doctors: { slug: string; dy: string; tag: string; name: string; role: string; chips: string[] }[] = [
  { slug: "sorin-iova", dy: "-5%", tag: "Fondator", name: "Dr. Sorin Iova", role: "Medic primar psihiatru", chips: ["Șef de lucrări", "39 de studii clinice"] },
  { slug: "sebastian-macrea", dy: "-9%", tag: "Adulți", name: "Dr. Sebastian Macrea", role: "Medic specialist psihiatru", chips: ["Psihiatrie adulți"] },
  { slug: "titus-moga", dy: "-9%", tag: "Neurologie", name: "Dr. Titus Moga", role: "Medic specialist neurolog", chips: ["Asistent universitar", "Neurologie"] },
  { slug: "adriana-maties", dy: "-5%", tag: "Adulți", name: "Dr. Adriana Maties", role: "Medic specialist psihiatru", chips: ["Psihiatrie adulți"] },
  { slug: "theodor-nicolau", dy: "-4%", tag: "Adulți", name: "Dr. Theodor Nicolau", role: "Medic specialist psihiatru", chips: ["Psihiatrie adulți"] },
  { slug: "roxana-samuila", dy: "-5%", tag: "Copii", name: "Dr. Roxana Samuila", role: "Medic specialist psihiatrie pediatrică", chips: ["Evaluarea copilului"] },
  { slug: "mihaela-caba", dy: "-5%", tag: "Psihologie", name: "Psih. Mihaela Caba", role: "Psiholog clinician, logoped", chips: ["Evaluări psihologice", "Logopedie"] },
];

function DoctorCard({ d, clone }: { d: (typeof doctors)[number]; clone?: boolean }) {
  return (
    <Link
      className={`dcard${clone ? " is-clone" : ""}`}
      href={`/medici/${d.slug}/`}
      style={{ "--dy": d.dy } as CSSProperties}
      {...(clone ? { "aria-hidden": true, tabIndex: -1 } : {})}
    >
      <span className="tag">{d.tag}</span>
      <img src={`/img/${d.slug}.png`} alt="" data-parallax="0.04" />
      <div className="info">
        <h3>{d.name}</h3>
        <div className="role">{d.role}</div>
        <div className="chips">
          {d.chips.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
        <span className="go">
          <Icon name="chevron-right" />
        </span>
      </div>
    </Link>
  );
}

const pills: [IconName, string][] = [
  ["clock", "Luni–vineri, 08:00–20:00"],
  ["calendar-check", "Programare online"],
  ["receipt", "Consultații gratuite cu bilet"],
  ["users", "Copii și adulți, o recepție"],
  ["shield-check", "Confidențialitate medicală"],
  ["map-pin", "Clinică nouă, din 2025"],
  ["graduation-cap", "Medici cadre universitare"],
  ["phone", "Recepție: 0359 450 657"],
];

const themes: [IconName, string, string][] = [
  ["ear", "Timpul acordat la consultație", "Tema care revine cel mai des: medicul ascultă și explică, iar Dr. Iova este menționat nominal în multe recenzii."],
  ["heart-handshake", "Echipa de la recepție", "Amabilitatea personalului, de la primul telefon până la plecarea din clinică."],
  ["sun", "Spațiul clinicii", "Cabinete separate, sală de așteptare liniștită, clinică nouă din 2025."],
  ["users", "Familii întregi", "Mai multe recenzii vin de la familii care au consultat la clinică și copiii, și adulții."],
];

const steps: [string, string, string, string, string][] = [
  ["1", "Online sau la recepție", "Alegeți serviciul și intervalul pe site sau sunați la 0359 450 657, de luni până vineri, între 08:00 și 20:00.", "Pasul 1", "Online sau telefon"],
  ["2", "Cu bilet de trimitere", "Consultația este gratuită, prin contractul clinicii cu CAS Bihor. Recepția vă spune ce acte să aduceți.", "Pasul 2", "Prin CAS"],
  ["3", "Fără bilet de trimitere", "Consultația se plătește la clinică. Prețul fiecărui serviciu îl aflați de la recepție, înainte de programare.", "Pasul 3", "Consultație privată"],
];

const GOOGLE = "https://www.google.com/maps/search/Clinica+Dr.+Iova+Oradea";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <HeroEntrance />

      {/* ================= HERO ================= */}
      <header className="hero" id="acasa" data-parallax-root="top">
        <div className="hero-bg" aria-hidden="true" data-parallax="0.22">
          <span className="blob b1"></span>
          <span className="blob b2"></span>
          <span className="blob b3"></span>
          <span className="light"></span>
          <span className="beam"></span>
        </div>
        <div className="hero-frame">
          <div className="hero-doc" data-parallax="0.07">
            <img src="/img/sorin-iova.png" alt="Șef lucr. Dr. Sorin Iova, medic primar psihiatru" />
          </div>
          <div className="hero-inner" data-parallax="-0.08" data-parallax-fade="0.35">
            <div className="eyebrow">Clinică pentru copii și adulți · Oradea</div>
            <h1>
              <span className="row"><span className="ln">Psihiatrie,</span></span>
              <span className="row">
                <span className="ln">
                  <span className="brain"><img src="/img/gen/brain.png" alt="" /></span>Neurologie,
                </span>
              </span>
              <span className="row"><span className="ln">Psihologie</span></span>
            </h1>
            <div className="ctas">
              <Link className="btn btn-dark" href="/programare/"><Icon name="calendar" />Programare</Link>
              <Link className="btn btn-light" href="/medici/"><Icon name="search" />Găsiți un medic</Link>
            </div>
            <div className="bottom">
              <p>Psihiatrie pentru adulți și copii, neurologie, psihologie clinică și logopedie, la aceeași recepție din Oradea. Cu bilet de trimitere, consultațiile sunt gratuite prin CAS.</p>
            </div>
          </div>
          <div className="stats" data-parallax="-0.05">
            <div><b><span data-stat="500">500</span>+</b><span>Pacienți consultați lunar</span></div>
            <div><b><span data-stat="400">400</span>+</b><span>Evaluări psihologice lunar</span></div>
            <div><b><span data-stat="5">5</span></b><span>Specialități</span></div>
            <div><b>08–20</b><span>Program de luni până vineri</span></div>
          </div>
        </div>
      </header>

      {/* ================= SERVICII (carusel foto) ================= */}
      <section id="servicii">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <h2 className="h2" data-reveal="lines">Trei generații. Nevoi diferite.<br />O singură clinică.</h2>
              <p className="lead" data-reveal="">La Clinica Dr. Iova, reunim specialiști în psihiatria copilului și a adultului, neurologie, psihologie clinică și logopedie.</p>
              <p className="lead" data-reveal="">O echipă multidisciplinară, cu servicii de evaluare și îngrijire adaptate fiecărei etape a vieții.</p>
            </div>
            <Arrows forId="t1" />
          </div>
        </div>
        <div className="wrap" style={{ paddingRight: 0 }}>
          <div className="track" id="t1" data-stagger="">
            {services.map(([href, img, h, p]) => (
              <Link key={href} className="pcard" href={href}>
                <img src={`/img/gen/${img}`} alt="" data-parallax-img="" />
                <div className="t"><h3>{h}</h3><p>{p}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SPECIALITĂȚI ================= */}
      <section id="specialitati">
        <span className="bgb b-a" data-parallax="0.25" aria-hidden="true"><i></i><img src="/img/gen/brain.png" alt="" /></span>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <h2 className="h2" data-reveal="lines">Ce puteți face<br />la Clinica Dr. Iova</h2>
              <p className="lead" data-reveal="">Consultații, evaluări și terapii pentru copii și adulți. Recepția vă spune la ce medic să mergeți.</p>
            </div>
            <div className="sec-cta" data-reveal="">
              <Link className="btn btn-dark" href="/programare/"><Icon name="calendar" />Programare</Link>
              <Link className="btn btn-line" href="/medici/"><Icon name="search" />Găsiți un medic</Link>
            </div>
          </div>
          <div className="grid4" data-stagger="">
            {specs.map(([href, icon, label]) => (
              <Link key={href} className="spec" href={href}>
                <span className="ic"><Icon name={icon} /></span>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MEDICI (marquee) ================= */}
      <section id="medici">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <h2 className="h2" data-reveal="lines">Medicii<br />clinicii</h2>
              <p className="lead" data-reveal="">Medici primari și specialiști, cadre universitare și psihologi clinicieni.</p>
            </div>
            <Link className="btn btn-line" href="/medici/" data-reveal="">Toți medicii<Icon name="arrow-right" /></Link>
          </div>
        </div>
        <DoctorsMarquee count={doctors.length}>
          {doctors.map((d) => (
            <DoctorCard key={d.slug} d={d} />
          ))}
          {doctors.map((d) => (
            <DoctorCard key={d.slug + "-clone"} d={d} clone />
          ))}
        </DoctorsMarquee>
      </section>

      {/* ================= PILLS ================= */}
      <section>
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: 40 }}>
            <h2 className="h2" data-reveal="lines">Gândită pentru pacient<br />și pentru familie</h2>
          </div>
          <div className="grid4" data-stagger="">
            {pills.map(([icon, label]) => (
              <div key={label} className="pill"><Icon name={icon} />{label}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RECENZII ================= */}
      <section id="recenzii">
        <span className="bgb b-b" data-parallax="0.2" aria-hidden="true"><i></i><img src="/img/gen/brain.png" alt="" /></span>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <h2 className="h2" data-reveal="lines">Ce apreciază pacienții,<br />pe Google</h2>
              <p className="lead" data-reveal="">Nu preluăm recenziile pacienților pe site, din respect pentru confidențialitate. Le puteți citi direct pe Google. Mai jos sunt temele care revin cel mai des.</p>
            </div>
          </div>
          <div className="rev">
            <div className="rev-score" data-reveal="scale">
              <div className="num"><span data-count="5" data-suffix=",0">5,0</span></div>
              <div className="stars" aria-label="5 din 5 stele">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Icon key={i} name="star" />
                ))}
              </div>
              <div className="of">din 16 recenzii pe Google</div>
              <small>Datele Google din 19.10.2026 <span className="todo">de actualizat la lansare</span></small>
              <div className="rev-ctas">
                <a className="btn btn-dark" href={GOOGLE} target="_blank" rel="noopener">Citiți recenziile pe Google<Icon name="arrow-up-right" /></a>
                <a className="btn btn-line" href={GOOGLE} target="_blank" rel="noopener"><Icon name="pen-line" />Lăsați o recenzie</a>
              </div>
            </div>
            <div className="rev-themes" data-stagger="">
              {themes.map(([icon, h, p]) => (
                <div key={h} className="theme card-lift">
                  <span className="ic"><Icon name={icon} /></span>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROGRAMARE ================= */}
      <section id="programare">
        <div className="wrap">
          <div className="sec-head">
            <h2 className="h2" data-reveal="lines">Programarea,<br />în trei pași</h2>
            <div className="sec-cta" data-reveal="">
              <Link className="btn btn-dark" href="/programare/"><Icon name="calendar" />Programare online</Link>
              <Link className="btn btn-line" href="/cas/"><Icon name="book-open" />Ghid CAS</Link>
            </div>
          </div>
          <div className="steps" data-stagger="">
            {steps.map(([n, b, p, f1, f2]) => (
              <div key={n} className="step">
                <div className="num">{n}</div>
                <p><b>{b}</b>{p}</p>
                <div className="foot"><span>{f1}</span><i>{f2}</i></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GALERIE ================= */}
      <section id="clinica">
        <span className="bgb b-c" data-parallax="0.25" aria-hidden="true"><i></i><img src="/img/gen/brain.png" alt="" /></span>
        <div className="wrap">
          <div className="sec-head">
            <h2 className="h2" data-reveal="lines">Un spațiu luminos,<br />cu cabinete separate</h2>
            <Arrows forId="t3" small />
          </div>
        </div>
        <div className="wrap" style={{ paddingRight: 0 }}>
          <div className="gal" id="t3" data-stagger="">
            <div className="img-zoom"><img src="/img/Image4.jpg" alt="Recepția clinicii" data-parallax-img="" /></div>
            <div className="blob">Pe strada Ceyrat,<br />din 2025</div>
            <div className="img-zoom"><img src="/img/Image2.jpg" alt="Sala de așteptare" data-parallax-img="" /></div>
            <div className="img-zoom"><img src="/img/Image8.jpeg" alt="" data-parallax-img="" /></div>
            <div className="img-zoom"><img src="/img/Image5.jpeg" alt="" data-parallax-img="" /></div>
            <div className="img-zoom"><img src="/img/Image10.jpeg" alt="" data-parallax-img="" /></div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="faq-sec">
        <span className="bgb b-d" data-parallax="0.2" aria-hidden="true"><i></i><img src="/img/gen/brain.png" alt="" /></span>
        <div className="wrap faq">
          <h2 className="h2" data-reveal="lines">Întrebări<br />frecvente</h2>
          <div data-stagger="">
            <details><summary>Cum fac o programare?<Icon name="chevron-down" /></summary><p>Online, din pagina <Link href="/programare/">Programare</Link>, sau telefonic la recepție, 0359 450 657, de luni până vineri între 08:00 și 20:00. Puteți scrie și la receptie@clinicadriova.ro.</p></details>
            <details><summary>Consultația este gratuită prin CAS?<Icon name="chevron-down" /></summary><p>Da, dacă veniți cu bilet de trimitere. Clinica are contract cu CAS Bihor. Fără bilet, consultația se plătește.</p></details>
            <details><summary>Tratați și copii?<Icon name="chevron-down" /></summary><p>Da. Dr. Roxana Samuila este medic specialist în psihiatrie pediatrică, iar la clinică lucrează și psiholog clinician și logoped pentru copii.</p></details>
            <details><summary>Ce evaluări psihologice faceți?<Icon name="chevron-down" /></summary><p>Evaluări ale copiilor, evaluări pentru comisiile de handicap și pensionare, avize psihologice pentru permisul de port-armă.</p></details>
            <details><summary>Unde este clinica?<Icon name="chevron-down" /></summary><p>Pe strada Ceyrat nr. 31, bl. WR12, în Oradea.</p></details>
            <details><summary>Ce fac într-o urgență?<Icon name="chevron-down" /></summary><p>În caz de urgență sunați la 112. Clinica nu are serviciu de urgență și este închisă în weekend.</p></details>
          </div>
        </div>
      </section>

      {/* ================= BANNER ================= */}
      <div className="banner">
        <img src="/img/about-hero.jpg" alt="Echipa Clinicii Dr. Iova" data-parallax-img="7" />
        <div className="in">
          <div>
            <h2 data-reveal="lines">Puteți suna<br />și doar pentru<br />o întrebare.</h2>
            <p data-reveal="">Recepția vă spune la ce medic să mergeți, ce acte vă trebuie și când este primul loc liber.</p>
          </div>
          <div className="ctas" data-reveal="right">
            <a className="btn btn-light" href="tel:+40359450657"><Icon name="phone" />0359 450 657</a>
            <Link className="btn btn-ghost" href="/medici/"><Icon name="search" />Găsiți un medic</Link>
          </div>
        </div>
      </div>
    </>
  );
}
