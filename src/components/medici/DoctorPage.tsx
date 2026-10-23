import { Fragment } from "react";
import Link from "next/link";
import Icon, { type IconName } from "@/components/Icon";
import Rich from "@/components/medici/Rich";
import { DOCTORS, SERV, STEPS, FAQS, KIND_WHO, KIND_H2, KIND_FAQ_H2, type Doctor } from "@/data/medici";

const TEL = "tel:+40359450657";
const PHONE = "0359 450 657";
const TODO = (t: string) => (
  <span className="todo">de cerut de la client (fișa medicului): {t}</span>
);

/** Shared template for /medici/<slug>/ (body of the fragment, without breadcrumb / JSON-LD). */
export default function DoctorPage({ d }: { d: Doctor }) {
  const others = DOCTORS.filter((o) => o.slug !== d.slug);
  const faq = FAQS[d.kind];
  const steps = STEPS[d.kind];
  const who = KIND_WHO[d.kind];
  const titleWord = d.typ === "Person" ? "Psihologul" : "Medicul";
  const progHref = `/programare/?medic=${d.slug}`;

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="md-hero" style={{ paddingTop: 30 }}>
        <div>
          <div className="kicker" data-reveal="fade">{d.kicker}</div>
          <h1 data-reveal="mask">
            {d.h1}
            {d.full !== d.h1 && <small>{d.full}</small>}
          </h1>
          <p className="intro" data-reveal="">{d.intro}</p>
          <div className="chips" data-stagger="scale">
            {d.chips.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
          <div className="ctas" data-reveal="">
            <Link className="btn btn-dark" href={progHref}><Icon name="calendar" />Programare</Link>
            <a className="btn btn-line" href={TEL}><Icon name="phone" />{PHONE}</a>
          </div>
        </div>
        <figure className="md-fig" data-reveal="scale">
          <span className="pin">{d.tag}</span>
          <img src={`/img/${d.slug}.png`} alt={`${d.full}, ${d.title.toLowerCase()}`} data-reveal="rise" />
        </figure>
      </section>

      {/* ================= PE SCURT ================= */}
      <section>
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: 32 }}><h2 className="h2" data-reveal="mask">Pe scurt</h2></div>
          <div className="md-facts" data-stagger="">
            <div className="md-fact"><span className="lbl"><Icon name="stethoscope" />Specialitate</span><span className="val">{d.title}</span></div>
            <div className="md-fact"><span className="lbl"><Icon name="users" />Consultă</span><span className="val">{who}</span></div>
            <div className="md-fact"><span className="lbl"><Icon name="receipt" />Prin CAS Bihor</span><span className="val"><Rich value={d.casVal} /></span></div>
            <div className="md-fact"><span className="lbl"><Icon name="calendar-days" />Zile la clinică</span><span className="val">{TODO("zilele și orele de consultații; zilele CAS")}</span></div>
            <div className="md-fact"><span className="lbl"><Icon name="languages" />Limbi</span><span className="val">Română · {TODO("alte limbi (maghiară, engleză)")}</span></div>
            <div className="md-fact"><span className="lbl"><Icon name="map-pin" />Unde</span><span className="val">Str. Ceyrat nr. 31, bl. WR12, Oradea</span></div>
            <div className="md-fact"><span className="lbl"><Icon name="clock" />Program clinică</span><span className="val">Luni–vineri, 08:00–20:00</span></div>
            <div className="md-fact"><span className="lbl"><Icon name="phone" />Programare</span><span className="val"><a href={TEL}>{PHONE}</a></span></div>
          </div>
        </div>
      </section>

      {/* ================= CE CONSULTĂ ================= */}
      <section>
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: 32 }}>
            <div>
              <h2 className="h2" data-reveal="mask">Ce consultă<br />{d.h1}</h2>
              <p className="lead" data-reveal="">Serviciile clinicii la care vă puteți programa la {d.h1}. Recepția vă spune dacă este nevoie de bilet de trimitere.</p>
            </div>
          </div>
          <div className="md-serv" data-stagger="">
            {d.serv.map((s) => (
              <Link key={s} className="pill" href={`/servicii/${s}/`}>
                <Icon name={SERV[s][1] as IconName} />
                {SERV[s][0]}
                <Icon name="arrow-up-right" className="arr" />
              </Link>
            ))}
          </div>
          {d.servNote && (
            <p className="lead" style={{ maxWidth: "none", marginTop: 18 }}><Rich value={d.servNote} /></p>
          )}
        </div>
      </section>

      {/* ================= FOTO + PREGĂTIRE ================= */}
      <section>
        <div className="wrap md-two">
          <div className="side">
            <figure className="md-photo md-brain" data-reveal="scale" aria-hidden="true">
              <span className="glow"></span><span className="light"></span>
              <img src="/img/gen/brain.png" alt="" />
            </figure>
          </div>
          <div>
            <h2 className="h2" data-reveal="mask">Pregătire<br />și activitate</h2>
            <p className="lead" data-reveal="">Titluri, locuri de muncă și activitate academică, așa cum ne-au fost confirmate.</p>
            <ul className="md-tl" style={{ marginTop: 32 }}>
              {d.tl.map(([y, t], i) => (
                <li key={i} data-reveal="left"><span className="yr">{y}</span><span className="tx"><Rich value={t} /></span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= PRIMA CONSULTAȚIE ================= */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <h2 className="h2" data-reveal="mask">{KIND_H2[d.kind]}</h2>
              <p className="lead" data-reveal="">Ce se întâmplă, în general, la o primă consultație la Clinica Dr. Iova. Detaliile pot diferi de la caz la caz.</p>
            </div>
          </div>
          <div className="steps" data-stagger="">
            {steps.map(([t, x], i) => (
              <div key={t} className="step">
                <div className="num">{i + 1}</div>
                <p><b>{t}</b>{x}</p>
                <div className="foot"><span>Pasul {i + 1}</span><i>{t}</i></div>
              </div>
            ))}
          </div>
          <div className="md-notes" data-stagger="">
            <div className="note">{titleWord} vă poate îndruma, în aceeași clinică, către <Link href="/servicii/">celelalte specialități</Link>: psihiatrie pentru adulți și copii, neurologie, psihologie clinică și logopedie.</div>
            <div className="note warn">În caz de urgență, sunați la 112. Clinica nu funcționează ca serviciu de urgență.</div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section>
        <div className="wrap faq">
          <h2 className="h2" data-reveal="mask">
            {KIND_FAQ_H2[d.kind].split("\n").map((line, i) => (
              <Fragment key={i}>{i > 0 && <br />}{line}</Fragment>
            ))}
          </h2>
          <div data-stagger="fade">
            {faq.map(([q, a]) => (
              <details key={q}><summary>{q}<Icon name="chevron-down" /></summary><p><Rich value={a} /></p></details>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ALȚI MEDICI ================= */}
      <section>
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: 32 }}>
            <div>
              <h2 className="h2" data-reveal="mask">Ceilalți medici<br />ai clinicii</h2>
              <p className="lead" data-reveal="">Psihiatri pentru adulți și copii, neurolog și psiholog clinician, la aceeași recepție. <Link href="/#recenzii" style={{ color: "var(--blue-deep)", textDecoration: "underline", textUnderlineOffset: 3 }}>Recenziile clinicii pe Google</Link>.</p>
            </div>
            <Link className="btn btn-line" href="/medici/"><Icon name="users" />Toți medicii</Link>
          </div>
          <div className="md-others" data-stagger="scale">
            {others.map((o) => (
              <Link key={o.slug} className="md-mini" href={`/medici/${o.slug}/`}>
                <img src={`/img/trim/${o.slug}.png`} alt="" />
                <span className="n">{o.h1}<small>{o.title}</small></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <div className="cta-band" data-reveal="">
        <div className="in">
          <div>
            <h2>Programare la {d.h1}</h2>
            <p>Sunați la recepție, de luni până vineri, între 08:00 și 20:00. Cu bilet de trimitere, consultația este gratuită prin CAS Bihor.</p>
          </div>
          <div className="ctas">
            <a className="btn btn-light" href={TEL}><Icon name="phone" />{PHONE}</a>
            <Link className="btn btn-ghost" href={progHref}><Icon name="calendar" />Programare online</Link>
          </div>
        </div>
      </div>
    </>
  );
}
