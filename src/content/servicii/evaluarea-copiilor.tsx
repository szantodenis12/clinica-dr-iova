import type { ReactNode } from "react";
import Icon from "@/components/Icon";
import Link from "next/link";

/** Values of the "Pe scurt" rows, in the same order as `kf` in src/data/servicii.ts. */
export const kf: ReactNode[] = [
  <>
    Psih. Mihaela Caba, psiholog clinician și logoped. Copii și adolescenți, însoțiți de părinte.
  </>,
  <>Clinica Dr. Iova, Str. Ceyrat nr. 31, bl. WR12, Oradea. Luni–vineri, 08:00–20:00.</>,
  <>
    <span className="todo">
      de cerut de la client: dacă evaluarea psihologică a copilului este decontată și în ce
      condiții; tarif
    </span>
  </>,
  <>
    Telefon <a href="tel:+40359450657">0359 450 657</a>, e-mail receptie@clinicadriova.ro sau{" "}
    <Link href="/programare/">cerere online</Link>.
  </>,
  <>
    Certificatul de naștere al copilului, actul de identitate al părintelui, recomandarea medicului
    (dacă există), evaluări anterioare, caracterizări sau fișe de la grădiniță ori școală, ochelarii
    copilului dacă îi folosește.
  </>,
  <>
    <span className="todo">de cerut de la client: durata evaluării; număr de întâlniri</span>
  </>,
];

/** Page body (div.prose): sections, steps, signs, doctors, CAS, FAQ. */
export function Body() {
  return (
    <>
      <h2 id="ce-este" data-reveal="">
        Ce este evaluarea psihologică a copilului?
      </h2>
      <p className="lead-in">
        Este un proces structurat în care psihologul clinician răspunde la o întrebare concretă: cum
        se dezvoltă copilul față de vârsta lui, ce îl ajută și ce îl încurcă, de ce fel de sprijin
        are nevoie. Răspunsul vine dintr-un interviu cu părinții, observarea copilului și probe
        standardizate.
      </p>
      <p>
        Evaluarea nu pune diagnostic medical; acesta este rolul medicului{" "}
        <Link href="/servicii/psihiatrie-pediatrica/">psihiatru pediatru</Link>. În practică însă,
        cele două merg împreună: medicul cere evaluarea pentru a preciza diagnosticul, iar
        psihologul recomandă consultul medical când observă semne care îl cer. Faptul că ambele se
        fac în aceeași clinică scurtează drumul părinților.
      </p>
      <h2 id="ce-evaluam" data-reveal="">
        Ce se evaluează, în funcție de vârstă?
      </h2>
      <ul>
        <li>
          <strong>Copilul mic (1–3 ani)</strong>: etapele de dezvoltare (motricitate, limbaj, joc,
          interacțiune), semne timpurii ale tulburărilor de dezvoltare, inclusiv screening pentru
          autism;
        </li>
        <li>
          <strong>Preșcolarul (3–6 ani)</strong>: limbaj, atenție, gândire, autonomie, comportament
          în grup, pregătirea pentru școală (maturitate școlară);
        </li>
        <li>
          <strong>Școlarul (6–12 ani)</strong>: inteligență, atenție și hiperactivitate (ADHD),
          dificultăți de învățare (citit, scris, calcul), anxietate, relația cu colegii;
        </li>
        <li>
          <strong>Adolescentul (12–18 ani)</strong>: stare emoțională, stimă de sine, anxietate,
          dispoziție, consum de substanțe, orientare școlară.
        </li>
      </ul>
      <p>
        Instrumentele folosite sunt alese de psiholog după vârstă și după întrebarea evaluării:
        scale de dezvoltare, chestionare completate de părinți și de profesori, teste de inteligență
        și de atenție, probe de desen și de joc. Toate sunt adaptate copiilor și se desfășoară în
        ritmul copilului.
      </p>
      <h2 id="pentru-ce" data-reveal="">
        La ce folosește raportul?
      </h2>
      <p>
        Raportul psihologic este un document scris, cu rezultate, interpretare și recomandări.
        Părinții îl pot folosi:
      </p>
      <ul>
        <li>la medicul psihiatru pediatru, pentru precizarea diagnosticului;</li>
        <li>
          la grădiniță sau la școală, pentru adaptarea cerințelor sau pentru orientarea școlară
          (certificat de orientare școlară și profesională, prin CJRAE Bihor, pentru copiii cu
          cerințe educaționale speciale);
        </li>
        <li>
          la <Link href="/servicii/evaluari-comisii/">comisia de evaluare</Link> din cadrul DGASPC,
          când se solicită încadrarea în grad de handicap;
        </li>
        <li>
          pentru a decide intervenția potrivită: <Link href="/servicii/logopedie/">logopedie</Link>,
          terapie, consiliere pentru părinți.
        </li>
      </ul>
      <p>
        Evaluarea se poate repeta după un timp, pentru a măsura progresul. Psihologul vă spune când
        are sens o reevaluare.
      </p>
      <h2 id="prima-consultatie" data-reveal="">
        Cum decurge evaluarea?
      </h2>
      <ol className="steps-v" data-stagger="">
        <li>
          <div>
            <b>Programarea</b>
            <p>
              Sunați la 0359 450 657. Spuneți vârsta copilului și scopul evaluării (recomandarea
              medicului, școală, comisie, propria îngrijorare).
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Interviul cu părinții</b>
            <p>
              Psihologul discută cu părinții: sarcina și nașterea, etapele de dezvoltare,
              comportamentul acasă și la grădiniță sau școală, istoricul medical, ce vă
              îngrijorează.
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Întâlnirile cu copilul</b>
            <p>
              Copilul lucrează cu psihologul prin joc și probe adaptate vârstei. În funcție de
              vârstă și de scop, pot fi necesare una sau mai multe întâlniri.
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Raportul și recomandările</b>
            <p>
              Primiți raportul scris și o discuție în care psihologul explică rezultatele și pașii
              următori: consult medical, logopedie, terapie sau doar urmărire în timp.
            </p>
          </div>
        </li>
      </ol>
      <p>
        Spuneți copilului că merge la o doamnă cu care se va juca și va rezolva câteva „ghicitori”.
        Veniți odihniți și, dacă se poate, nu imediat după o zi lungă de școală.
      </p>
      <h2 id="cand-merita" data-reveal="">
        Când este utilă o evaluare?
      </h2>
      <ul className="signs" data-stagger="fade">
        <li>
          <Icon name="check" />
          Medicul de familie sau medicul psihiatru pediatru a recomandat o evaluare
        </li>
        <li>
          <Icon name="check" />
          Copilul nu atinge etapele de dezvoltare așteptate pentru vârsta lui
        </li>
        <li>
          <Icon name="check" />
          Educatoarea sau învățătoarea semnalează neatenție, agitație sau dificultăți de învățare
        </li>
        <li>
          <Icon name="check" />
          Școala sau comisia cere un raport psihologic
        </li>
        <li>
          <Icon name="check" />
          Copilul are frici intense, refuză școala, are schimbări de dispoziție care durează
        </li>
        <li>
          <Icon name="check" />
          Vreți să știți dacă copilul este pregătit pentru clasa pregătitoare
        </li>
      </ul>
      <p>
        Ce presupune, pas cu pas, evaluarea la medic:{" "}
        <Link href="/blog/evaluare-psihiatrica-copil-ce-presupune/">
          Evaluarea psihiatrică a copilului
        </Link>
        .
      </p>
      <h2 id="cine-va-consulta" data-reveal="">
        Cine evaluează copilul?
      </h2>
      <p>
        Evaluarea psihologică este realizată de Psih. Mihaela Caba, psiholog clinician și logoped.
        Consultul medical, atunci când este necesar, este făcut de Dr. Roxana Samuila, medic
        specialist psihiatrie pediatrică.
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
        <Link className="doc-mini card-lift" href="/medici/roxana-samuila/">
          <span className="ph">
            <img src="/img/roxana-samuila.png" alt="Dr. Roxana Samuila" />
          </span>
          <span>
            <b>Dr. Roxana Samuila</b>
            <span>Medic specialist psihiatrie pediatrică</span>
            <span className="go">
              Pagina medicului <Icon name="arrow-right" />
            </span>
          </span>
        </Link>
      </div>
      <p className="doc-soon">
        În curând în echipă, potrivit site-ului clinicii: Psih. Bianca Gliga (psiholog clinician,
        psihoterapeut, logoped) și Psih. Paula Lazăr (psiholog clinician).
      </p>
      <h2 id="cas" data-reveal="">
        Se decontează prin CAS?
      </h2>
      <p>
        Consultația de psihiatrie pediatrică este gratuită prin CAS Bihor, cu bilet de trimitere de
        la medicul de familie. Evaluarea psihologică este un serviciu distinct, cu reguli de
        decontare diferite de cele pentru consultațiile medicale.
      </p>
      <div className="note cas" data-reveal="fade">
        <Icon name="receipt" />
        <div>
          <b>Evaluarea psihologică a copilului</b>
          <span className="todo">
            de cerut de la client: dacă evaluarea psihologică este decontată prin CAS și în ce
            condiții; tarif
          </span>
          . Recepția vă spune costul înainte de programare. Detalii generale pe pagina{" "}
          <Link href="/servicii/consultatii-cas/">Consultații prin CAS</Link>.
        </div>
      </div>
      <h2 id="intrebari" data-reveal="">
        Întrebări frecvente
      </h2>
      <div className="faq faq-1">
        <details>
          <summary>
            De la ce vârstă se poate evalua un copil?
            <Icon name="chevron-down" />
          </summary>
          <p>
            De la 1–2 ani, dacă există îngrijorări legate de dezvoltare. La vârste mici, evaluarea
            se bazează mai mult pe observație și pe informațiile de la părinți.
          </p>
        </details>
        <details>
          <summary>
            Cât durează evaluarea?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Depinde de vârstă și de scop: de la o întâlnire la două sau trei. Durata orientativă la
            clinică: <span className="todo">de cerut de la client</span>.
          </p>
        </details>
        <details>
          <summary>
            Evaluarea pune diagnostic de autism sau ADHD?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Evaluarea psihologică descrie dezvoltarea și comportamentul copilului și poate indica
            semne ale unei tulburări. Diagnosticul medical este stabilit de medicul psihiatru
            pediatru, care lucrează în aceeași clinică.
          </p>
        </details>
        <details>
          <summary>
            Raportul este valabil pentru școală și pentru comisie?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Raportul psihologic este un document oficial, semnat de psihologul clinician atestat.
            Pentru orientarea școlară și pentru comisia de evaluare, întrebați psihologul ce formă
            trebuie să aibă documentul cerut de instituția respectivă.
          </p>
        </details>
        <details>
          <summary>
            Trebuie să vină ambii părinți?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Nu este obligatoriu, dar este util. Copilul trebuie însoțit de un părinte sau de
            reprezentantul legal.
          </p>
        </details>
        <details>
          <summary>
            Ce se întâmplă după evaluare?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Primiți raportul și recomandări: urmărire în timp, logopedie, consult medical, terapie
            sau consiliere pentru părinți. Psihologul vă explică fiecare opțiune.
          </p>
        </details>
      </div>
    </>
  );
}
