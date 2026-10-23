import type { ReactNode } from "react";
import Icon from "@/components/Icon";
import Link from "next/link";

/** Values of the "Pe scurt" rows, in the same order as `kf` in src/data/servicii.ts. */
export const kf: ReactNode[] = [
  <>
    Medicii psihiatri, medicul neurolog și psihologul clinician al clinicii. Adulți și copii.{" "}
    <span className="todo">
      de cerut de la client: care medic/psiholog face evaluările pentru comisii
    </span>
  </>,
  <>Clinica Dr. Iova, Str. Ceyrat nr. 31, bl. WR12, Oradea. Luni–vineri, 08:00–20:00.</>,
  <>
    Consultația medicală este gratuită prin CAS cu bilet de trimitere. Evaluarea psihologică:{" "}
    <span className="todo">de cerut de la client: decontată/plătită; tarif</span>
  </>,
  <>
    Telefon <a href="tel:+40359450657">0359 450 657</a>, e-mail receptie@clinicadriova.ro sau{" "}
    <Link href="/programare/">cerere online</Link>.
  </>,
  <>
    Actul de identitate, cardul de sănătate, biletul de trimitere, toate documentele medicale
    existente (bilete de externare, scrisori medicale, investigații), certificatul anterior de
    încadrare dacă este o reevaluare, lista tratamentelor.
  </>,
  <>
    <span className="todo">
      de cerut de la client: durata consultației și a evaluării; termen de eliberare a documentelor
    </span>
  </>,
];

/** Page body (div.prose): sections, steps, signs, doctors, CAS, FAQ. */
export function Body() {
  return (
    <>
      <h2 id="ce-este" data-reveal="">
        Ce documente cer comisiile?
      </h2>
      <p className="lead-in">
        Comisiile nu evaluează ele însele starea medicală: decid pe baza documentelor din dosar. De
        aceea, calitatea și completitudinea actelor medicale și psihologice contează.
      </p>
      <p>Pentru afecțiunile psihice și neurologice, documentele cerute de regulă sunt:</p>
      <ul>
        <li>
          <strong>Referatul medical</strong> (sau certificatul medical tip, la copii) întocmit de
          medicul specialist psihiatru sau neurolog: diagnostic, istoric, tratament, evoluție, grad
          de afectare funcțională;
        </li>
        <li>
          <strong>Scrisoarea medicală tip</strong> de la medicul de familie, cu data luării în
          evidență a diagnosticului;
        </li>
        <li>
          <strong>Evaluarea psihologică</strong>: raport al psihologului clinician cu rezultatele
          probelor cerute pentru afecțiunea respectivă (de exemplu funcții cognitive, nivel de
          funcționare), atunci când comisia o solicită;
        </li>
        <li>bilete de externare, rezultate de investigații, documente anterioare.</li>
      </ul>
      <p>
        Ce anume se cere depinde de afecțiune și de comisie. Lista exactă o primiți de la instituția
        la care depuneți dosarul; medicul și psihologul clinicii întocmesc documentele în forma
        cerută.
      </p>
      <h2 id="handicap-adulti" data-reveal="">
        Cum decurge încadrarea în grad de handicap pentru adulți?
      </h2>
      <p>
        Pentru adulți, dosarul se depune la Direcția Generală de Asistență Socială și Protecția
        Copilului (DGASPC) Bihor, la Serviciul de Evaluare Complexă a Persoanelor Adulte cu Handicap
        (SECPAH). Decizia aparține Comisiei de Evaluare a Persoanelor Adulte cu Handicap (CEPAH).
      </p>
      <ol>
        <li>
          Obțineți de la medicul specialist referatul medical și, dacă este cerută, evaluarea
          psihologică; de la medicul de familie, scrisoarea medicală tip.
        </li>
        <li>
          Depuneți dosarul (cerere tip, acte de identitate, documente medicale, anchetă socială de
          la primărie, acte de venit) la registratura DGASPC sau a primăriei.
        </li>
        <li>
          Serviciul de evaluare verifică dosarul și vă comunică data evaluării; evaluarea are loc în
          cel mult 60 de zile de la înregistrare și poate fi făcută la domiciliu dacă persoana nu se
          poate deplasa.
        </li>
        <li>
          Comisia decide în cel mult 15 zile lucrătoare de la referire și trimite certificatul prin
          poștă.
        </li>
      </ol>
      <p>
        Gradele sunt: ușor, mediu, accentuat și grav. Valabilitatea certificatului este stabilită de
        comisie; pentru reevaluare, dosarul se depune cu aproximativ 60 de zile înainte de expirare.
        Cadrul legal: Legea 448/2006 și HG 430/2008, cu modificările ulterioare.
      </p>
      <h2 id="handicap-copii" data-reveal="">
        Cum decurge încadrarea pentru copii?
      </h2>
      <p>
        Pentru copii, încadrarea în grad de handicap se face de Comisia pentru Protecția Copilului,
        pe baza evaluării realizate de Serviciul de Evaluare Complexă (SEC) din cadrul DGASPC Bihor.
        Dosarul include, de regulă, certificatul medical tip A5 de la medicul specialist (recent, de
        obicei nu mai vechi de două luni la depunere), fișa psihologică, ancheta socială, adeverința
        de la școală și actele părinților.
      </p>
      <p>
        Separat de gradul de handicap, pentru copiii cu cerințe educaționale speciale există{" "}
        <strong>orientarea școlară</strong>, decisă de Comisia de Orientare Școlară și Profesională
        din cadrul CJRAE Bihor, tot pe bază de documente medicale și psihologice. Medicul psihiatru
        pediatru și psihologul clinicii pot elibera documentele pentru ambele proceduri. Detalii
        despre evaluarea copilului pe pagina{" "}
        <Link href="/servicii/evaluarea-copiilor/">Evaluarea copiilor</Link>.
      </p>
      <h2 id="pensionare" data-reveal="">
        Ce este expertiza pentru pensia de invaliditate?
      </h2>
      <p>
        Pensia de invaliditate se acordă persoanelor care și-au pierdut total sau cel puțin jumătate
        din capacitatea de muncă din cauza unei boli. Decizia aparține medicului expert al
        asigurărilor sociale de la Casa Județeană de Pensii Bihor, nu clinicii.
      </p>
      <p>
        Rolul clinicii este să furnizeze documentația medicală: referatul medical de la medicul
        specialist (psihiatru sau neurolog), cu diagnosticul, evoluția, tratamentul și gradul de
        afectare funcțională, plus evaluarea psihologică atunci când este cerută. Cu aceste
        documente, persoana se prezintă la cabinetul de expertiză medicală. Gradele de invaliditate
        (I, II, III) și revizuirile periodice sunt stabilite de medicul expert, conform Legii
        360/2023 privind sistemul public de pensii.
      </p>
      <h2 id="prima-consultatie" data-reveal="">
        Ce se întâmplă la consultația pentru comisie?
      </h2>
      <ol className="steps-v" data-stagger="">
        <li>
          <div>
            <b>Programarea</b>
            <p>
              Sunați la 0359 450 657 și spuneți că aveți nevoie de documente pentru comisia de
              handicap sau pentru pensionare. Recepția vă spune ce acte să aduceți.
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Consultația medicală</b>
            <p>
              Medicul specialist consultă persoana, revede documentele medicale existente și
              stabilește diagnosticul și gradul de afectare.
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Evaluarea psihologică</b>
            <p>
              Dacă este cerută pentru afecțiunea respectivă, psihologul clinician aplică probele
              necesare și întocmește raportul.
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Documentele</b>
            <p>
              Primiți referatul medical și raportul psihologic, în forma cerută de comisie. Le
              atașați dosarului împreună cu scrisoarea de la medicul de familie și restul actelor.
            </p>
          </div>
        </li>
      </ol>
      <p>
        Veniți cu toate documentele medicale existente, chiar și vechi. Istoricul complet ajută
        medicul să descrie corect evoluția bolii.
      </p>
      <h2 id="cand-merita" data-reveal="">
        Când este nevoie de aceste evaluări?
      </h2>
      <ul className="signs" data-stagger="fade">
        <li>
          <Icon name="check" />O afecțiune psihică sau neurologică limitează de mult timp
          activitățile zilnice ale persoanei
        </li>
        <li>
          <Icon name="check" />
          Medicul curant a recomandat încadrarea în grad de handicap
        </li>
        <li>
          <Icon name="check" />
          Certificatul de handicap existent expiră și este nevoie de reevaluare
        </li>
        <li>
          <Icon name="check" />
          Persoana nu mai poate munci din cauza bolii și dorește expertiza pentru pensia de
          invaliditate
        </li>
        <li>
          <Icon name="check" />
          Un copil cu tulburare de dezvoltare are nevoie de certificat de handicap sau de orientare
          școlară
        </li>
        <li>
          <Icon name="check" />
          Instituția la care ați depus dosarul cere completarea cu documente de la medicul
          specialist sau de la psiholog
        </li>
      </ul>
      <h2 id="cine-va-consulta" data-reveal="">
        Cine întocmește documentele?
      </h2>
      <p>
        Referatele medicale sunt întocmite de medicii specialiști ai clinicii (psihiatrie,
        psihiatrie pediatrică, neurologie), iar rapoartele psihologice de psihologul clinician.{" "}
        <span className="todo">
          de cerut de la client: care medici fac evaluările pentru comisii; dacă toți medicii
          psihiatri eliberează referate
        </span>
      </p>
      <div className="doc-row" data-stagger="scale">
        <Link className="doc-mini card-lift" href="/medici/sorin-iova/">
          <span className="ph">
            <img src="/img/sorin-iova.png" alt="Șef lucr. Dr. Sorin Iova" />
          </span>
          <span>
            <b>Șef lucr. Dr. Sorin Iova</b>
            <span>Medic primar psihiatru, fondatorul clinicii</span>
            <span className="go">
              Pagina medicului <Icon name="arrow-right" />
            </span>
          </span>
        </Link>
        <Link className="doc-mini card-lift" href="/medici/titus-moga/">
          <span className="ph">
            <img src="/img/titus-moga.png" alt="As. Univ. Dr. Titus Moga" />
          </span>
          <span>
            <b>As. Univ. Dr. Titus Moga</b>
            <span>Medic specialist neurolog</span>
            <span className="go">
              Pagina medicului <Icon name="arrow-right" />
            </span>
          </span>
        </Link>
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
      <h2 id="cas" data-reveal="">
        Ce este gratuit prin CAS?
      </h2>
      <p>
        Consultația medicală la psihiatrie, psihiatrie pediatrică sau neurologie este gratuită prin
        CAS Bihor, cu bilet de trimitere de la medicul de familie. Referatul medical se eliberează
        în urma consultației. Evaluarea psihologică are reguli de decontare diferite.
      </p>
      <div className="note cas" data-reveal="fade">
        <Icon name="receipt" />
        <div>
          <b>Costuri pentru dosarul de comisie</b>
          <span className="todo">
            de cerut de la client: dacă evaluarea psihologică pentru comisie este decontată sau se
            plătește; tarif; termen de eliberare
          </span>
          . Recepția vă spune costurile înainte de programare. Detalii generale pe pagina{" "}
          <Link href="/servicii/consultatii-cas/">Consultații prin CAS</Link>.
        </div>
      </div>
      <h2 id="intrebari" data-reveal="">
        Întrebări frecvente
      </h2>
      <div className="faq faq-1">
        <details>
          <summary>
            Clinica decide gradul de handicap?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Nu. Decizia aparține comisiei din cadrul DGASPC (pentru handicap) sau medicului expert
            al asigurărilor sociale (pentru pensia de invaliditate). Clinica furnizează documentele
            medicale și psihologice pe baza cărora se decide.
          </p>
        </details>
        <details>
          <summary>
            Ce documente primesc de la clinică?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Referatul medical de la medicul specialist și, dacă este cerut pentru afecțiunea
            respectivă, raportul de evaluare psihologică. Scrisoarea medicală tip o obțineți de la
            medicul de familie.
          </p>
        </details>
        <details>
          <summary>
            Cât durează până primesc documentele?
            <Icon name="chevron-down" />
          </summary>
          <p>
            <span className="todo">
              de cerut de la client: termen de eliberare a referatului și a raportului
            </span>
          </p>
        </details>
        <details>
          <summary>
            Unde depun dosarul în Bihor?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Pentru adulți, la DGASPC Bihor (Serviciul de Evaluare Complexă a Persoanelor Adulte cu
            Handicap) sau la registratura primăriei de domiciliu. Pentru copii, la Serviciul de
            Evaluare Complexă pentru copii din cadrul DGASPC Bihor. Pentru pensia de invaliditate,
            la cabinetul de expertiză medicală al Casei Județene de Pensii Bihor.
          </p>
        </details>
        <details>
          <summary>
            Persoana nu se poate deplasa la clinică. Ce facem?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Evaluarea comisiei poate fi făcută la domiciliu, pe baza anchetei sociale și a scrisorii
            medicului de familie. Pentru consultația medicală la clinică:{" "}
            <span className="todo">
              de cerut de la client: dacă se fac consultații la domiciliu
            </span>
            .
          </p>
        </details>
        <details>
          <summary>
            Documentele sunt valabile și pentru orientarea școlară a copilului?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Medicul psihiatru pediatru și psihologul pot elibera documentele cerute și pentru
            orientarea școlară (CJRAE Bihor). Spuneți la programare pentru ce procedură aveți nevoie
            de ele, pentru a fi întocmite în forma potrivită.
          </p>
        </details>
      </div>
    </>
  );
}
