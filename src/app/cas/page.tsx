import Link from "next/link";
import "@/styles/info.css";
import "@/styles/mobile.css"; // always last
import { buildMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Icon from "@/components/Icon";

const route = getRoute("/cas/");
export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path, ogImage: "/img/Image7.jpg" });

const faqs: [string, string][] = [
  ["Cine poate beneficia de consultații gratuite prin CAS la Clinica Dr. Iova?", "Persoanele asigurate în sistemul public de sănătate, cu bilet de trimitere valabil de la medicul de familie sau de la alt medic specialist aflat în contract cu casa de asigurări. Clinica are contract cu CAS Bihor."],
  ["Ce specialități sunt decontate prin CAS la clinică?", "Clinica comunică consultațiile gratuite prin CAS pe bază de bilet de trimitere. Specialitățile și medicii care consultă prin CAS sunt de confirmat cu recepția."],
  ["Cât timp se așteaptă pentru o programare prin CAS?", "Pentru consultațiile prin CAS la Șef lucr. Dr. Sorin Iova, clinica recomandă programarea cu minim o lună în avans. Pentru ceilalți medici, întrebați recepția."],
  ["Pot veni fără bilet de trimitere?", "Da, în regim privat, cu plată. Normele CNAS prevăd și acces direct prin CAS pentru persoanele cu anumite diagnostice psihiatrice deja stabilite (Anexa 13); întrebați recepția înainte."],
  ["Copilul meu are nevoie de bilet de trimitere?", "Da, pentru consultația gratuită prin CAS. Biletul vine de la medicul de familie sau de la pediatru. Copiii sub 18 ani sunt asigurați fără plata contribuției."],
  ["Biletul de trimitere acoperă și controlul?", "Da. Pe un bilet se decontează până la 3 consultații în 60 de zile pentru un episod acut, sau până la 4 pe trimestru pentru o afecțiune cronică, iar controalele cerute de medic se fac fără alt bilet."],
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Programare prin CAS la Clinica Dr. Iova",
    url: "https://clinicadriova.ro/cas/",
    inLanguage: "ro",
    about: { "@id": "https://clinicadriova.ro/#clinica" },
    audience: { "@type": "MedicalAudience", audienceType: "Patient" },
    lastReviewed: "2026-10-21",
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cum vă programați prin CAS la Clinica Dr. Iova",
    totalTime: "P30D",
    step: [
      { "@type": "HowToStep", name: "Programarea", text: "Sunați la 0359 450 657 sau completați formularul online și spuneți că veniți prin CAS. Primiți medicul, ziua și ora." },
      { "@type": "HowToStep", name: "Biletul de trimitere", text: "Cereți biletul de trimitere de la medicul de familie sau de la alt medic specialist în contract cu casa, astfel încât să fie valabil la data consultației." },
      { "@type": "HowToStep", name: "Actele", text: "Pregătiți cardul de sănătate, actul de identitate, biletul în original și documentele medicale relevante." },
      { "@type": "HowToStep", name: "Consultația", text: "Veniți cu 10 minute înainte. Recepția validează serviciul pe card, iar consultația nu se plătește." },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  },
];

export default function CasPage() {
  return (
    <>
      <Breadcrumbs items={[["Programare prin CAS", "/cas/"]]} />
      {schemas.map((s, i) => (
        <JsonLd key={i} data={s} />
      ))}

      <header className="cas-hero">
        <div data-reveal="">
          <div className="kicker">Programare prin CAS</div>
          <h1>Consultații gratuite, cu bilet de trimitere</h1>
        </div>
        <p className="intro" data-reveal="left">Clinica Dr. Iova are contract cu CAS Bihor. Dacă sunteți asigurat și aveți bilet de trimitere de la medicul de familie, consultația de specialitate nu se plătește. Pagina explică pașii, actele și ce se întâmplă dacă nu aveți bilet.</p>
      </header>

      <section className="answer" style={{ padding: 0 }}>
        <div className="in" data-reveal="">
          <div>
            <div className="lbl">Pe scurt</div>
            <p>Consultațiile de specialitate la Clinica Dr. Iova sunt gratuite pentru asigurați, pe baza biletului de trimitere eliberat de medicul de familie sau de alt medic specialist aflat în contract cu casa de asigurări. Aduceți biletul în original, cardul de sănătate și actul de identitate. Fără bilet, consultația se face în regim privat, cu plată. Programările se fac la 0359 450 657 sau online; pentru Dr. Iova, cu minim o lună în avans.</p>
          </div>
          <div className="side" data-stagger="">
            <div><b>Contract</b>CAS Bihor</div>
            <div><b>Fără bilet</b>Consultație privată, cu plată</div>
            <div><b>Program</b>Luni–vineri, 08:00–20:00</div>
          </div>
        </div>
      </section>

      <section className="two" style={{ padding: 0 }}>
        <div className="path cas" data-reveal="left">
          <span className="tag">Prin CAS</span>
          <h2>Gratuit, cu bilet de trimitere</h2>
          <p>Pentru asigurați, consultația de specialitate este decontată de casa de asigurări. Condițiile vin din Normele CNAS, nu de la clinică.</p>
          <ul data-stagger="">
            <li><Icon name="check" /><span>Bilet de trimitere de la medicul de familie sau de la alt medic specialist în contract cu casa</span></li>
            <li><Icon name="check" /><span>Card de sănătate (sau adeverință de asigurat) și act de identitate</span></li>
            <li><Icon name="check" /><span>Pe un bilet: până la 3 consultații în 60 de zile (episod acut) sau 4 pe trimestru (afecțiune cronică)</span></li>
            <li><Icon name="check" /><span>Controalele cerute de medic, fără alt bilet</span></li>
            <li><Icon name="clock" /><span>Programare cu minim o lună în avans la Dr. Iova; pentru ceilalți medici, întrebați recepția</span></li>
          </ul>
          <Link className="btn btn-light" href="/programare/"><Icon name="calendar" />Programare prin CAS</Link>
        </div>
        <div className="path priv" data-reveal="right">
          <span className="tag">Privat</span>
          <h2>Fără bilet de trimitere</h2>
          <p>Dacă nu aveți bilet, nu sunteți asigurat sau nu puteți aștepta, consultația se face în regim privat, la aceiași medici.</p>
          <ul data-stagger="">
            <li><Icon name="check" /><span>Fără bilet de trimitere și fără card de sănătate</span></li>
            <li><Icon name="check" /><span>Aceiași medici, același cabinet</span></li>
            <li><Icon name="check" /><span>Programare în funcție de disponibilitate</span></li>
            <li><Icon name="banknote" /><span>Tarif pe consultație: <span className="todo">de cerut de la client: tarifele consultațiilor private pe specialitate</span></span></li>
            <li><Icon name="file-text" /><span>Primiți scrisoare medicală pentru medicul de familie</span></li>
          </ul>
          <Link className="btn btn-dark" href="/programare/"><Icon name="calendar" />Programare privată</Link>
        </div>
      </section>

      <section className="cas-steps" style={{ padding: 0 }}>
        <div className="sec-head" data-reveal="">
          <div>
            <h2 className="h2">Pașii, în ordine</h2>
            <p className="lead">Întâi programarea, apoi biletul. Așa evitați un bilet expirat la data consultației.</p>
          </div>
        </div>
        <div className="steps" data-stagger="">
          <div className="step"><span className="num">1</span><p><b>Programarea</b>Sunați la <a href="tel:+40359450657" style={{ textDecoration: "underline" }}>0359 450 657</a> sau completați <Link href="/programare/" style={{ textDecoration: "underline" }}>formularul</Link>. Spuneți că veniți prin CAS și la ce specialitate. Primiți medicul, ziua și ora.</p><span className="foot"><span>Durată</span><i>5 minute</i></span></div>
          <div className="step"><span className="num">2</span><p><b>Biletul de trimitere</b>Mergeți la medicul de familie (sau la specialistul care vă urmărește) și cereți bilet către specialitatea programată, astfel încât să fie valabil la data consultației.</p><span className="foot"><span>Valabilitate</span><i>De la emitere</i></span></div>
          <div className="step"><span className="num">3</span><p><b>Actele</b>Pregătiți biletul în original, cardul de sănătate, actul de identitate și documentele medicale relevante: scrisori, analize, lista tratamentelor.</p><span className="foot"><span>Pentru copii</span><i>Certificat de naștere</i></span></div>
          <div className="step"><span className="num">4</span><p><b>Consultația</b>Veniți cu 10 minute înainte. Recepția validează serviciul pe card, apoi intrați la medic. Consultația nu se plătește. Controlul următor se stabilește pe loc.</p><span className="foot"><span>Plată</span><i>0 lei</i></span></div>
        </div>
      </section>

      <section className="docs" style={{ padding: 0 }}>
        <div data-reveal="">
          <h2 className="h2">Ce aduceți la clinică</h2>
          <p className="lead">Lista completă pentru o consultație prin CAS. Dacă lipsește ceva, sunați înainte; recepția vă spune dacă se poate rezolva pe loc.</p>
        </div>
        <ul className="doclist" data-stagger="">
          <li><span className="ic"><Icon name="file-text" /></span><div><b>Biletul de trimitere, în original</b><p>De la medicul de familie sau de la alt medic specialist în contract cu casa, în termen de valabilitate. Pentru specialitățile clinice, termenul uzual este de 30 de zile de la emitere, cu termene mai lungi pentru bolile cronice. <span className="todo">de verificat la revizuire: termenele exacte conform formularului în vigoare</span></p></div></li>
          <li><span className="ic"><Icon name="credit-card" /></span><div><b>Cardul național de sănătate</b><p>Sau adeverința de asigurat, dacă nu aveți card. Serviciul se validează în sistemul casei cu cardul.</p></div></li>
          <li><span className="ic"><Icon name="id-card" /></span><div><b>Actul de identitate</b><p>Pentru copii sub 18 ani: certificatul de naștere sau actul de identitate al copilului și actul părintelui.</p></div></li>
          <li><span className="ic"><Icon name="folder-open" /></span><div><b>Documente medicale</b><p>Scrisori medicale, bilete de externare, analize, investigații, evaluări anterioare, lista tratamentelor în curs.</p></div></li>
        </ul>
      </section>

      <section className="cas-faq" style={{ padding: 0 }}>
        <div className="sec-head" data-reveal="">
          <div>
            <h2 className="h2">Întrebări frecvente despre CAS</h2>
            <p className="lead">Răspunsuri pe baza Normelor CNAS în vigoare și a informațiilor publicate de clinică.</p>
          </div>
        </div>
        <div className="faq" data-stagger="fade">
          <details><summary>Cine poate beneficia de consultații gratuite prin CAS la clinică?<Icon name="chevron-down" /></summary><p>Persoanele asigurate în sistemul public de sănătate, cu bilet de trimitere valabil de la medicul de familie sau de la alt medic specialist aflat în contract cu casa de asigurări. Clinica are contract cu CAS Bihor.</p></details>
          <details><summary>Ce specialități sunt decontate prin CAS la clinică?<Icon name="chevron-down" /></summary><p>Clinica comunică consultațiile gratuite prin CAS pe bază de bilet de trimitere. Specialitățile și medicii care consultă prin CAS sunt de confirmat cu recepția. <span className="todo">de cerut de la client: lista specialităților și a medicilor cu consultații prin CAS</span></p></details>
          <details><summary>Cât timp se așteaptă pentru o programare prin CAS?<Icon name="chevron-down" /></summary><p>Pentru consultațiile prin CAS la Șef lucr. Dr. Sorin Iova, clinica recomandă programarea cu minim o lună în avans (postare din 31.05.2026). Pentru ceilalți medici, întrebați recepția. <span className="todo">de cerut de la client: timpii de așteptare actuali pe medic</span></p></details>
          <details><summary>Pot veni fără bilet de trimitere?<Icon name="chevron-down" /></summary><p>Da, în regim privat, cu plată. Normele CNAS (Anexa 13, pct. 22) prevăd și acces direct prin CAS, fără bilet, pentru persoanele cu anumite diagnostice psihiatrice deja stabilite; întrebați recepția înainte. <span className="todo">de confirmat cu clinica: aplicarea excepției din Anexa 13</span></p></details>
          <details><summary>Copilul meu are nevoie de bilet de trimitere?<Icon name="chevron-down" /></summary><p>Da, pentru consultația gratuită prin CAS. Biletul vine de la medicul de familie sau de la pediatru. Copiii sub 18 ani sunt asigurați fără plata contribuției.</p></details>
          <details><summary>Biletul de trimitere acoperă și controlul?<Icon name="chevron-down" /></summary><p>Da. Pe un bilet se decontează până la 3 consultații în 60 de zile pentru un episod acut, sau până la 4 pe trimestru (maximum 2 pe lună) pentru o afecțiune cronică, iar controalele cerute de medic se fac fără alt bilet.</p></details>
          <details><summary>Evaluările psihologice și logopedia sunt decontate?<Icon name="chevron-down" /></summary><p>Anumite servicii ale psihologului (evaluare psihologică clinică, consiliere, psihoterapie) sunt decontate ca servicii conexe, la recomandarea medicului psihiatru sau psihiatru pediatru, în condițiile CNAS. Pentru copiii cu diagnostic de tulburare din spectrul autist există din 01.10.2023 un subprogram național separat. <span className="todo">de cerut de la client: care servicii psihologice și de logopedie se decontează efectiv în clinică</span></p></details>
          <details><summary>Ce fac dacă biletul expiră înainte de programare?<Icon name="chevron-down" /></summary><p>Spuneți la recepție când vă programați. De regulă, soluția este să cereți biletul de la medicul de familie mai aproape de data consultației.</p></details>
        </div>
      </section>

      <div className="cas-sources" data-reveal="fade">
        Surse: Ordinul MS/CNAS nr. 1857/441/2023 (Normele Contractului-cadru), versiunea în vigoare de la 01.04.2025, Anexa 7 pct. 1.2.1–1.3.4 și Anexa 13 pct. 22; HG nr. 521/2023 (Contractul-cadru); lista furnizorilor CNAS, ambulatoriu clinic, 30.10.2024 (contract CAS Bihor nr. 1389); informații publicate de Clinica Dr. Iova (31.05.2026). Verificate la 21.10.2026. Regulile se pot modifica; pentru situația dumneavoastră, întrebați medicul de familie, CAS Bihor sau recepția.
      </div>

      <section className="cta-band">
        <div className="in" data-reveal="scale">
          <div>
            <h2>Programare prin CAS, la Clinica Dr. Iova</h2>
            <p>Str. Ceyrat nr. 31, bl. WR12, Oradea. Luni–vineri, 08:00–20:00. Spuneți la recepție că veniți cu bilet de trimitere.</p>
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
