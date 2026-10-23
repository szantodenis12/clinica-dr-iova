import type { ReactNode } from "react";
import Icon from "@/components/Icon";
import Link from "next/link";

/** Values of the "Pe scurt" rows, in the same order as `kf` in src/data/servicii.ts. */
export const kf: ReactNode[] = [
  <>As. Univ. Dr. Titus Moga, medic specialist neurolog. Adulți.</>,
  <>Clinica Dr. Iova, Str. Ceyrat nr. 31, bl. WR12, Oradea. Luni–vineri, 08:00–20:00.</>,
  <>Da. Consultația este gratuită cu bilet de trimitere. Fără bilet se plătește.</>,
  <>
    Telefon <a href="tel:+40359450657">0359 450 657</a>, e-mail receptie@clinicadriova.ro sau{" "}
    <Link href="/programare/">cerere online</Link>.
  </>,
  <>
    Actul de identitate, cardul de sănătate, biletul de trimitere, rezultate de imagistică (CT,
    RMN), EEG sau EMG dacă aveți, bilete de externare și lista tratamentelor.
  </>,
  <>
    <span className="todo">
      de cerut de la client: durata consultației; investigații disponibile în clinică (EEG, EMG
      etc.)
    </span>
  </>,
];

/** Page body (div.prose): sections, steps, signs, doctors, CAS, FAQ. */
export function Body() {
  return (
    <>
      <h2 id="ce-este" data-reveal="">
        Ce face un medic neurolog?
      </h2>
      <p className="lead-in">
        Neurologul este medicul care diagnostichează și tratează bolile sistemului nervos: creier,
        măduva spinării, nervi periferici și mușchi. Lucrează cu examinarea clinică și cu
        investigații precum imagistica (CT, RMN), electroencefalograma (EEG) sau electromiografia
        (EMG).
      </p>
      <p>
        Neurologia și psihiatria sunt specialități diferite, dar vecine. Unele simptome, de exemplu
        tulburările de memorie, de somn sau modificările de comportament, pot avea cauze
        neurologice, psihiatrice sau ambele. Faptul că cele două specialități funcționează în
        aceeași clinică ajută: medicii pot cere unul altuia un consult, iar dumneavoastră nu reluați
        istoricul de la zero. Mai multe în articolul{" "}
        <Link href="/blog/psihiatru-psiholog-psihoterapeut-diferente/">
          Psihiatru, psiholog, psihoterapeut
        </Link>
        .
      </p>
      <h2 id="ce-tratam" data-reveal="">
        Cu ce probleme se prezintă pacienții la neurolog?
      </h2>
      <p>Motive frecvente de consult neurologic la adulți, în general:</p>
      <ul>
        <li>dureri de cap repetate, migrene;</li>
        <li>amețeli, tulburări de echilibru, leșinuri;</li>
        <li>crize epileptice sau episoade de pierdere a cunoștinței;</li>
        <li>urmărirea după un accident vascular cerebral;</li>
        <li>tremor, rigiditate, încetinirea mișcărilor (de exemplu în boala Parkinson);</li>
        <li>scleroză multiplă și alte boli ale substanței albe;</li>
        <li>furnicături, amorțeli, slăbiciune musculară, neuropatii (inclusiv în diabet);</li>
        <li>tulburări de memorie, demențe;</li>
        <li>dureri de coloană cu iradiere pe membre (sciatică, hernii de disc);</li>
        <li>tulburări de somn.</li>
      </ul>
      <h2 id="investigatii" data-reveal="">
        Ce investigații pot fi recomandate?
      </h2>
      <p>
        În funcție de simptome, neurologul poate recomanda analize de sânge, imagistică (CT sau RMN
        cerebral ori de coloană), EEG pentru activitatea electrică a creierului, EMG pentru nervi și
        mușchi, ecografie Doppler a vaselor gâtului sau alte investigații. Unele se fac cu bilet de
        trimitere în ambulatoriu, altele în spital.
      </p>
      <div className="note" data-reveal="fade">
        Investigațiile care se efectuează chiar în clinică:{" "}
        <span className="todo">
          de cerut de la client: lista investigațiilor neurologice disponibile pe loc
        </span>
        . Pentru restul, medicul vă eliberează recomandarea și vă explică unde le puteți face.
      </div>
      <h2 id="prima-consultatie" data-reveal="">
        Ce se întâmplă la prima consultație?
      </h2>
      <ol className="steps-v" data-stagger="">
        <li>
          <div>
            <b>Programarea</b>
            <p>
              Sunați la 0359 450 657 sau trimiteți o cerere online. Recepția vă spune ce acte să
              aduceți și când este primul loc liber.
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Istoricul</b>
            <p>
              Medicul vă întreabă despre simptome: când au apărut, cât durează, ce le declanșează,
              ce boli aveți, ce tratamente urmați, ce boli există în familie.
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Examenul neurologic</b>
            <p>
              Medicul verifică reflexele, forța musculară, sensibilitatea, echilibrul, coordonarea,
              vederea și mișcările ochilor, vorbirea. Nu este dureros.
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Concluzii</b>
            <p>
              Primiți un diagnostic sau o listă de investigații de făcut, o rețetă dacă este cazul
              și data controlului. Dacă este nevoie, medicul vă poate trimite către psihiatrie, în
              aceeași clinică.
            </p>
          </div>
        </li>
      </ol>
      <h2 id="cand-merita" data-reveal="">
        Când merită o programare?
      </h2>
      <p>
        Un consult neurologic programat este potrivit pentru simptome care durează sau se repetă.
        Simptomele bruște (vezi caseta de mai jos) sunt urgențe și nu așteaptă o programare.
      </p>
      <ul className="signs" data-stagger="fade">
        <li>
          <Icon name="check" />
          Dureri de cap frecvente, care se schimbă ca intensitate sau nu răspund la tratamentul
          obișnuit
        </li>
        <li>
          <Icon name="check" />
          Amețeli repetate, dezechilibru, căderi
        </li>
        <li>
          <Icon name="check" />
          Furnicături, amorțeli sau slăbiciune într-un membru, persistente
        </li>
        <li>
          <Icon name="check" />
          Tremor al mâinilor, mișcări încetinite, rigiditate
        </li>
        <li>
          <Icon name="check" />
          Episoade de pierdere a cunoștinței sau crize
        </li>
        <li>
          <Icon name="check" />
          Pierderi de memorie observate de familie, dezorientare
        </li>
        <li>
          <Icon name="check" />
          Control după un accident vascular cerebral sau după externarea din neurologie
        </li>
        <li>
          <Icon name="check" />
          Recomandarea medicului de familie sau a altui specialist
        </li>
      </ul>
      <div className="note urgent" data-reveal="fade">
        <Icon name="phone-call" />
        <p>
          <b>Semne de urgență neurologică, sunați la 112:</b> slăbiciune sau amorțeală bruscă pe o
          parte a corpului, față asimetrică, vorbire încurcată apărută brusc, durere de cap foarte
          puternică apărută brusc, criză convulsivă la o persoană care nu a mai avut, pierderea
          bruscă a vederii. În accidentul vascular cerebral fiecare minut contează.
        </p>
      </div>
      <h2 id="cine-va-consulta" data-reveal="">
        Cine vă consultă?
      </h2>
      <p>
        Consultațiile de neurologie sunt susținute de As. Univ. Dr. Titus Moga, medic specialist
        neurolog și asistent universitar.
      </p>
      <div className="doc-row" data-stagger="scale">
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
      </div>
      <h2 id="cas" data-reveal="">
        Cum funcționează prin CAS?
      </h2>
      <p>
        Clinica Dr. Iova are contract cu CAS Bihor. Potrivit informațiilor comunicate de clinică,
        consultația este <strong>gratuită dacă veniți cu bilet de trimitere</strong> de la medicul
        de familie sau de la un alt medic specialist aflat în contract cu casa de asigurări. Aveți
        nevoie de bilet, de actul de identitate și de cardul național de sănătate (sau de o dovadă
        că sunteți asigurat).
      </p>
      <div className="note cas" data-reveal="fade">
        <Icon name="receipt" />
        <div>
          <b>Fără bilet de trimitere, consultația se plătește la clinică.</b>
          Tariful îl aflați de la recepție înainte de programare:{" "}
          <span className="todo">de cerut de la client: tarif consultație</span>. Biletul de
          trimitere are o valabilitate limitată în timp (de regulă 30 de zile de la emitere), așa că
          întrebați recepția înainte să îl folosiți. Detalii complete pe pagina{" "}
          <Link href="/servicii/consultatii-cas/">Consultații prin CAS</Link> și{" "}
          <Link href="/cas/">Programare CAS</Link>.
        </div>
      </div>
      <h2 id="intrebari" data-reveal="">
        Întrebări frecvente
      </h2>
      <div className="faq faq-1">
        <details>
          <summary>
            Am nevoie de bilet de trimitere la neurolog?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Pentru consultația gratuită prin CAS, da: bilet de la medicul de familie sau de la alt
            medic specialist în contract cu casa de asigurări. Fără bilet, consultația se plătește
            la clinică.
          </p>
        </details>
        <details>
          <summary>
            Se fac investigații (EEG, EMG, RMN) în clinică?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Medicul recomandă investigațiile necesare și vă spune unde le puteți face. Lista
            investigațiilor disponibile pe loc: <span className="todo">de cerut de la client</span>.
          </p>
        </details>
        <details>
          <summary>
            Durerea de cap este motiv de consult neurologic?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Da, atunci când durerile sunt frecvente, se schimbă ca intensitate sau caracter, sau nu
            răspund la tratamentul obișnuit. O durere de cap foarte puternică apărută brusc este o
            urgență: sunați la 112.
          </p>
        </details>
        <details>
          <summary>
            Ce aduc la consultație?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Actul de identitate, cardul de sănătate, biletul de trimitere, rezultate anterioare (CT,
            RMN, EEG, analize), bilete de externare și lista medicamentelor pe care le luați.
          </p>
        </details>
        <details>
          <summary>
            Consultați și copii la neurologie?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Consultul neurologic la Clinica Dr. Iova se adresează adulților. Pentru copii, clinica
            oferă <Link href="/servicii/psihiatrie-pediatrica/">psihiatrie pediatrică</Link>,{" "}
            <Link href="/servicii/evaluarea-copiilor/">evaluare psihologică</Link> și{" "}
            <Link href="/servicii/logopedie/">logopedie</Link>. Neurologie pediatrică:{" "}
            <span className="todo">de confirmat cu clientul</span>.
          </p>
        </details>
        <details>
          <summary>
            Când merg la neurolog și când la psihiatru?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Dacă nu sunteți sigur, sunați la recepție și descrieți pe scurt problema. Medicii celor
            două specialități lucrează în aceeași clinică și își pot trimite reciproc pacienții.
          </p>
        </details>
      </div>
    </>
  );
}
