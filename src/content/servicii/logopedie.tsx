import type { ReactNode } from "react";
import Icon from "@/components/Icon";
import Link from "next/link";

/** Values of the "Pe scurt" rows, in the same order as `kf` in src/data/servicii.ts. */
export const kf: ReactNode[] = [
  <>
    Psih. Mihaela Caba, psiholog clinician și logoped. Copii; adulți{" "}
    <span className="todo">de cerut de la client: da/nu</span>
  </>,
  <>Clinica Dr. Iova, Str. Ceyrat nr. 31, bl. WR12, Oradea. Luni–vineri, 08:00–20:00.</>,
  <>
    <span className="todo">
      de cerut de la client: dacă logopedia este decontată (subprogram TSA) sau se plătește; tarif
      ședință
    </span>
  </>,
  <>
    Telefon <a href="tel:+40359450657">0359 450 657</a>, e-mail receptie@clinicadriova.ro sau{" "}
    <Link href="/programare/">cerere online</Link>.
  </>,
  <>
    Certificatul de naștere al copilului, actul de identitate al părintelui, evaluări anterioare
    (psihologice, audiologice, ORL), caracterizări de la grădiniță sau școală.
  </>,
  <>
    <span className="todo">
      de cerut de la client: durata ședinței de logopedie și frecvența recomandată
    </span>
  </>,
];

/** Page body (div.prose): sections, steps, signs, doctors, CAS, FAQ. */
export function Body() {
  return (
    <>
      <h2 id="ce-este" data-reveal="">
        Ce face un logoped?
      </h2>
      <p className="lead-in">
        Logopedul evaluează cum vorbește, cum înțelege și cum comunică un copil, identifică
        tulburarea și lucrează, prin exerciții structurate, la corectarea ei. Colaborează cu
        părinții, cu educatorii și, când este nevoie, cu medicul psihiatru pediatru, cu medicul ORL
        sau cu audiologul.
      </p>
      <p>
        Un copil care nu vorbește sau vorbește greu poate avea cauze foarte diferite: o simplă
        întârziere, o problemă de auz, o tulburare de dezvoltare. De aceea, evaluarea logopedică
        merge adesea împreună cu{" "}
        <Link href="/servicii/evaluarea-copiilor/">evaluarea psihologică</Link> și, dacă este cazul,
        cu un consult de <Link href="/servicii/psihiatrie-pediatrica/">psihiatrie pediatrică</Link>.
        La Clinica Dr. Iova toate trei se fac în același loc.
      </p>
      <h2 id="ce-tratam" data-reveal="">
        Ce tulburări de limbaj se tratează?
      </h2>
      <ul>
        <li>
          <strong>Întârzierea în dezvoltarea limbajului</strong>: copilul vorbește puțin sau deloc
          față de vârsta lui;
        </li>
        <li>
          <strong>Dislalia</strong>: pronunția greșită sau omiterea unor sunete (de exemplu „r”,
          „s”, „ș”);
        </li>
        <li>
          <strong>Bâlbâiala</strong> (balbismul): întreruperi, repetări sau blocaje în vorbire;
        </li>
        <li>
          <strong>Tulburările de citit și scris</strong>: dislexie, disgrafie, la copiii de vârstă
          școlară;
        </li>
        <li>
          <strong>Tulburările de limbaj din tulburările de dezvoltare</strong>: autism, ADHD,
          dizabilitate intelectuală;
        </li>
        <li>
          <strong>Dificultățile de înțelegere și de exprimare</strong> (tulburări de limbaj receptiv
          și expresiv);
        </li>
        <li>
          <strong>Tulburările de voce și de ritm</strong>.
        </li>
      </ul>
      <p>
        Terapia se face în ședințe individuale, prin joc și exerciții adaptate vârstei. Părinții
        primesc indicații pentru acasă, pentru că exersarea zilnică face diferența.
      </p>
      <h2 id="forbrain" data-reveal="">
        Ce este Forbrain și cum se folosește în logopedie?
      </h2>
      <p>
        Forbrain este o cască cu conducție osoasă și microfon, produsă de Sound for Life. Când
        copilul vorbește, propria voce îi este redată prin oasele temporale, filtrată printr-un
        egalizator dinamic care accentuează anumite frecvențe. Rezultatul este un feedback auditiv
        modificat: copilul își aude vocea mai clar și mai imediat.
      </p>
      <p>
        În ședințele de logopedie, Forbrain se folosește ca instrument complementar, în timpul
        exercițiilor de pronunție, citire sau repetare, pentru a susține atenția la propria vorbire.
        Nu înlocuiește terapia și nu este un tratament în sine.
      </p>
      <p>
        Despre dovezi: un studiu randomizat publicat în 2018 (Escera și colab., Journal of Speech,
        Language, and Hearing Research) a arătat că dispozitivul produce într-adevăr un feedback
        auditiv modificat, cu efecte măsurabile asupra vocii, și a concluzionat că utilitatea
        clinică în diferite tulburări trebuie confirmată prin studii suplimentare. Logopedul vă
        explică pentru ce exerciții are sens în cazul copilului dumneavoastră.
      </p>
      <h2 id="repere" data-reveal="">
        Care sunt reperele normale ale vorbirii?
      </h2>
      <p>
        Reperele de mai jos sunt orientative. Fiecare copil are ritmul lui, dar întârzierile mari
        față de aceste repere merită o evaluare.
      </p>
      <ul>
        <li>
          <strong>12 luni</strong>: gângurit variat, primele cuvinte simple („mama”, „tata”),
          răspunde la nume;
        </li>
        <li>
          <strong>18 luni</strong>: aproximativ 10–20 de cuvinte, arată cu degetul ce vrea, înțelege
          indicații simple;
        </li>
        <li>
          <strong>24 de luni</strong>: aproximativ 50 de cuvinte, combinații de două cuvinte („vreau
          apă”);
        </li>
        <li>
          <strong>3 ani</strong>: propoziții de trei sau mai multe cuvinte, este înțeles în mare
          parte de persoane din afara familiei;
        </li>
        <li>
          <strong>4–5 ani</strong>: povestește, pune întrebări, pronunță corect majoritatea
          sunetelor; sunetele „r” și „s” se pot corecta până la 5–6 ani.
        </li>
      </ul>
      <p>
        Detalii pe vârste în articolul{" "}
        <Link href="/blog/repere-dezvoltare-limbaj-copii-0-5-ani/">
          Repere în dezvoltarea limbajului la copii, 0–5 ani
        </Link>
        .
      </p>
      <h2 id="prima-consultatie" data-reveal="">
        Ce se întâmplă la evaluarea logopedică?
      </h2>
      <ol className="steps-v" data-stagger="">
        <li>
          <div>
            <b>Programarea</b>
            <p>Sunați la 0359 450 657. Spuneți vârsta copilului și ce v-a îngrijorat.</p>
          </div>
        </li>
        <li>
          <div>
            <b>Discuția cu părinții</b>
            <p>
              Logopedul întreabă despre dezvoltarea copilului, când a început să vorbească, dacă a
              avut otite repetate, ce limbă se vorbește acasă, cum se înțelege cu alți copii.
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Evaluarea copilului</b>
            <p>
              Prin joc și probe adaptate vârstei: pronunție, vocabular, înțelegere, construcția
              propozițiilor, auz fonematic, motricitatea aparatului fonator.
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Planul de terapie</b>
            <p>
              Primiți concluziile, un plan cu obiective și frecvența ședințelor, plus exerciții
              pentru acasă. Dacă este nevoie, logopedul recomandă consult ORL, audiologic sau de
              psihiatrie pediatrică.
            </p>
          </div>
        </li>
      </ol>
      <h2 id="cand-merita" data-reveal="">
        Când merită o programare?
      </h2>
      <ul className="signs" data-stagger="fade">
        <li>
          <Icon name="check" />
          Copilul nu spune cuvinte la 18 luni sau nu formează propoziții din două cuvinte la 2 ani
        </li>
        <li>
          <Icon name="check" />
          La 3 ani vorbește greu de înțeles pentru persoane din afara familiei
        </li>
        <li>
          <Icon name="check" />
          Pronunță greșit sau omite anumite sunete după vârsta de 4–5 ani
        </li>
        <li>
          <Icon name="check" />
          Se bâlbâie de mai mult de câteva luni sau se încordează când vorbește
        </li>
        <li>
          <Icon name="check" />
          Are dificultăți la citit și scris în clasa pregătitoare sau în clasa I
        </li>
        <li>
          <Icon name="check" />
          Educatorul, medicul de familie sau psihologul a recomandat un consult logopedic
        </li>
      </ul>
      <h2 id="cine-va-consulta" data-reveal="">
        Cine lucrează cu copilul?
      </h2>
      <p>
        Ședințele de logopedie sunt susținute de Psih. Mihaela Caba, psiholog clinician și logoped.
        Pentru copiii care au nevoie și de un consult medical, Dr. Roxana Samuila, medic specialist
        psihiatrie pediatrică, lucrează în aceeași clinică.
      </p>
      <div className="doc-row" data-stagger="scale">
        <Link className="doc-mini card-lift" href="/medici/mihaela-caba/">
          <span className="ph">
            <img src="/img/mihaela-caba.png" alt="Psih. Mihaela Caba" />
          </span>
          <span>
            <b>Psih. Mihaela Caba</b>
            <span>Psiholog clinician, logoped</span>
            <span className="go">
              Pagina medicului <Icon name="arrow-right" />
            </span>
          </span>
        </Link>
      </div>
      <p className="doc-soon">
        În curând în echipă, potrivit site-ului clinicii: Psih. Bianca Gliga, psiholog clinician,
        psihoterapeut și logoped.
      </p>
      <h2 id="cas" data-reveal="">
        Se decontează prin CAS?
      </h2>
      <p>
        Consultațiile medicale de la clinică (psihiatrie pediatrică, psihiatrie, neurologie) sunt
        gratuite prin CAS Bihor cu bilet de trimitere. Pentru logopedie, situația este diferită:
        ședințele nu fac parte, în general, din pachetul de bază, cu excepția subprogramului CNAS
        pentru persoanele diagnosticate cu tulburări din spectrul autist, în vigoare din 1 octombrie
        2023, care include intervenția de logopedie la furnizori cu contract pentru acest
        subprogram.
      </p>
      <div className="note cas" data-reveal="fade">
        <Icon name="receipt" />
        <div>
          <b>Logopedia la Clinica Dr. Iova</b>
          <span className="todo">
            de cerut de la client: dacă ședințele de logopedie se decontează (subprogram TSA) sau se
            plătesc; tarif
          </span>
          . Recepția vă spune costul înainte de prima ședință. Detalii generale pe pagina{" "}
          <Link href="/servicii/consultatii-cas/">Consultații prin CAS</Link>.
        </div>
      </div>
      <h2 id="intrebari" data-reveal="">
        Întrebări frecvente
      </h2>
      <div className="faq faq-1">
        <details>
          <summary>
            De la ce vârstă se poate începe logopedia?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Evaluarea se poate face de la vârste mici, în jur de 2 ani, dacă există îngrijorări.
            Terapia propriu-zisă se adaptează vârstei: la copiii mici se lucrează prin joc și cu
            implicarea părinților.
          </p>
        </details>
        <details>
          <summary>
            Copilul meu nu vorbește la 2 ani. Este autism?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Nu neapărat. Lipsa vorbirii poate avea multe cauze, de la o simplă întârziere până la o
            problemă de auz. De aceea evaluarea logopedică se face adesea împreună cu evaluarea
            psihologică și, dacă este cazul, cu un consult de psihiatrie pediatrică.
          </p>
        </details>
        <details>
          <summary>
            Cât durează terapia logopedică?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Depinde de tulburare și de vârstă. O dislalie simplă se corectează de regulă în câteva
            luni; întârzierile de limbaj din tulburările de dezvoltare cer un lucru mai lung.
            Logopedul vă dă o estimare după evaluare. Frecvența ședințelor la clinică:{" "}
            <span className="todo">de cerut de la client</span>.
          </p>
        </details>
        <details>
          <summary>
            Ce este Forbrain și este obligatoriu?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Forbrain este o cască cu conducție osoasă care redă copilului propria voce, filtrată, în
            timp ce vorbește. Se folosește ca instrument complementar în unele exerciții. Nu este
            obligatoriu și nu înlocuiește terapia.
          </p>
        </details>
        <details>
          <summary>
            Trebuie să exersăm și acasă?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Da. Exersarea zilnică, câteva minute, a exercițiilor primite de la logoped este partea
            cea mai importantă a progresului. Veți primi indicații clare.
          </p>
        </details>
        <details>
          <summary>
            Faceți logopedie și pentru adulți?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Logopedia se adresează în principal copiilor. Pentru adulți (de exemplu după un accident
            vascular cerebral): <span className="todo">de cerut de la client</span>.
          </p>
        </details>
      </div>
    </>
  );
}
