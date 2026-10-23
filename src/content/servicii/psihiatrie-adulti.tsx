import type { ReactNode } from "react";
import Icon from "@/components/Icon";
import Link from "next/link";

/** Values of the "Pe scurt" rows, in the same order as `kf` in src/data/servicii.ts. */
export const kf: ReactNode[] = [
  <>Un medic primar psihiatru și patru medici specialiști psihiatri. Pentru adulți de la 18 ani.</>,
  <>Clinica Dr. Iova, Str. Ceyrat nr. 31, bl. WR12, Oradea. Luni–vineri, 08:00–20:00.</>,
  <>Da. Consultația este gratuită cu bilet de trimitere. Fără bilet se plătește.</>,
  <>
    Telefon <a href="tel:+40359450657">0359 450 657</a>, e-mail receptie@clinicadriova.ro sau{" "}
    <Link href="/programare/">cerere online</Link>. Programările prin CAS la Dr. Iova se fac cu
    minim o lună în avans.
  </>,
  <>
    Actul de identitate, cardul de sănătate, biletul de trimitere (pentru CAS), documente medicale
    anterioare și lista tratamentelor pe care le urmați.
  </>,
  <>
    <span className="todo">de cerut de la client: durata primei consultații și a controlului</span>
  </>,
];

/** Page body (div.prose): sections, steps, signs, doctors, CAS, FAQ. */
export function Body() {
  return (
    <>
      <h2 id="ce-este" data-reveal="">
        Ce face un medic psihiatru?
      </h2>
      <p className="lead-in">
        Psihiatrul este medic. A absolvit medicina generală, apoi rezidențiatul în psihiatrie. Poate
        pune un diagnostic, poate prescrie medicamente și poate trimite către psiholog,
        psihoterapeut sau alte specialități.
      </p>
      <p>
        Această pregătire îl deosebește de psiholog și de psihoterapeut, care nu prescriu
        medicamente. În practică, cele trei profesii lucrează adesea împreună: medicul stabilește
        diagnosticul și tratamentul medicamentos, iar psihologul sau psihoterapeutul lucrează cu
        persoana în ședințe. Diferențele sunt explicate pe larg în articolul{" "}
        <Link href="/blog/psihiatru-psiholog-psihoterapeut-diferente/">
          Psihiatru, psiholog, psihoterapeut: care este diferența
        </Link>
        .
      </p>
      <p>
        O consultație de psihiatrie nu înseamnă automat un tratament medicamentos. Uneori rezultatul
        este o recomandare de psihoterapie, de analize sau de consult la altă specialitate, de
        exemplu la <Link href="/servicii/neurologie/">neurologie</Link>.
      </p>
      <h2 id="ce-tratam" data-reveal="">
        Cu ce probleme se prezintă pacienții?
      </h2>
      <p>
        Medicii psihiatri ai clinicii consultă adulți cu o gamă largă de dificultăți. Printre
        motivele frecvente de prezentare, în general, în psihiatria adultului:
      </p>
      <ul>
        <li>
          tulburări de dispoziție: stări depresive persistente, variații mari ale dispoziției;
        </li>
        <li>
          tulburări anxioase: îngrijorare permanentă, atacuri de panică, fobii, gânduri și ritualuri
          repetitive;
        </li>
        <li>tulburări de somn care durează de săptămâni;</li>
        <li>reacții după evenimente dificile: pierderi, accidente, violență;</li>
        <li>tulburări psihotice: percepții sau convingeri care nu corespund realității;</li>
        <li>tulburări cognitive la vârstnici: pierderi de memorie, dezorientare;</li>
        <li>
          tulburări psihice care apar în bolile neurologice. Dr. Iova are doctorat pe tema
          tulburărilor psihice din scleroza multiplă.
        </li>
      </ul>
      <p>
        Lista este orientativă. Dacă nu știți dacă problema dumneavoastră ține de psihiatrie, puteți
        suna la recepție: vă îndrumă către medicul potrivit.
      </p>
      <h2 id="tratament" data-reveal="">
        Cum se desfășoară tratamentul în timp?
      </h2>
      <p>
        După prima consultație, medicul propune un plan: tratament medicamentos, psihoterapie,
        investigații sau o combinație. Controalele sunt stabilite de medic, în funcție de situație.
        La fiecare control se discută cum vă simțiți, efectele tratamentului și eventualele
        ajustări.
      </p>
      <p>
        Deciziile despre tratament se iau împreună cu dumneavoastră. Puteți pune întrebări despre
        orice recomandare și puteți cere explicații în cuvinte simple. Dacă urmați deja un tratament
        prescris de alt medic, aduceți lista medicamentelor la consultație.
      </p>
      <div className="note" data-reveal="fade">
        Tot ce discutați cu medicul este confidențial. Informațiile medicale nu se transmit altor
        persoane, nici membrilor familiei, fără acordul dumneavoastră, cu excepțiile prevăzute de
        lege.
      </div>
      <h2 id="prima-consultatie" data-reveal="">
        Ce se întâmplă la prima consultație?
      </h2>
      <ol className="steps-v" data-stagger="">
        <li>
          <div>
            <b>Programarea</b>
            <p>
              Sunați la 0359 450 657 sau trimiteți o cerere online. Recepția vă spune dacă aveți
              nevoie de bilet de trimitere și când este primul loc liber.
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Discuția cu medicul</b>
            <p>
              Medicul vă întreabă ce vă aduce la consultație, de când au apărut dificultățile, cum
              vă afectează somnul, munca și relațiile, ce boli și tratamente aveți.
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Evaluarea</b>
            <p>
              Pe baza discuției și, dacă este nevoie, a unor chestionare sau analize, medicul
              formulează un diagnostic sau stabilește ce mai este de clarificat.
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Planul</b>
            <p>
              Primiți explicații despre diagnostic și opțiunile de tratament, o rețetă dacă este
              cazul și data următorului control. Întrebările sunt binevenite.
            </p>
          </div>
        </li>
      </ol>
      <p>
        Puteți veni însoțit de o persoană apropiată, dacă doriți. Medicul poate discuta cu
        dumneavoastră și separat.
      </p>
      <h2 id="cand-merita" data-reveal="">
        Când merită o programare?
      </h2>
      <p>
        Nu există o listă de simptome care să impună un consult. În general, o programare la
        psihiatru este rezonabilă atunci când o dificultate durează, se repetă sau afectează viața
        de zi cu zi. Câteva situații frecvente:
      </p>
      <ul className="signs" data-stagger="fade">
        <li>
          <Icon name="check" />
          Stări de tristețe sau lipsă de energie care durează de mai multe săptămâni
        </li>
        <li>
          <Icon name="check" />
          Îngrijorare sau teamă greu de controlat, atacuri de panică
        </li>
        <li>
          <Icon name="check" />
          Somn afectat în mod repetat, cu oboseală în timpul zilei
        </li>
        <li>
          <Icon name="check" />
          Dificultăți de concentrare care afectează munca sau studiile
        </li>
        <li>
          <Icon name="check" />
          Schimbări bruște de comportament observate de cei din jur
        </li>
        <li>
          <Icon name="check" />
          Gânduri sau percepții care îngrijorează persoana sau familia
        </li>
        <li>
          <Icon name="check" />
          Pierderi de memorie și dezorientare la o persoană în vârstă
        </li>
        <li>
          <Icon name="check" />
          Recomandarea medicului de familie sau a altui specialist
        </li>
      </ul>
      <p>
        Mai multe repere, în articolul{" "}
        <Link href="/blog/cand-mergem-la-psihiatru/">Când mergem la psihiatru</Link>.
      </p>
      <div className="note urgent" data-reveal="fade">
        <Icon name="phone-call" />
        <p>
          <b>În caz de urgență sunați la 112.</b> Clinica nu are serviciu de urgență. Dacă o
          persoană este în pericol imediat, sunați la 112 sau mergeți la cea mai apropiată unitate
          de primiri urgențe.
        </p>
      </div>
      <h2 id="cine-va-consulta" data-reveal="">
        Cine vă consultă?
      </h2>
      <p>
        Consultațiile de psihiatrie pentru adulți sunt susținute de medicii de mai jos. Puteți cere
        un anumit medic la programare, în limita locurilor disponibile.
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
        <Link className="doc-mini card-lift" href="/medici/sebastian-macrea/">
          <span className="ph">
            <img src="/img/sebastian-macrea.png" alt="Dr. Sebastian Macrea" />
          </span>
          <span>
            <b>Dr. Sebastian Macrea</b>
            <span>Medic specialist psihiatru</span>
            <span className="go">
              Pagina medicului <Icon name="arrow-right" />
            </span>
          </span>
        </Link>
        <Link className="doc-mini card-lift" href="/medici/adriana-maties/">
          <span className="ph">
            <img src="/img/adriana-maties.png" alt="Dr. Adriana Maties" />
          </span>
          <span>
            <b>Dr. Adriana Maties</b>
            <span>Medic specialist psihiatru</span>
            <span className="go">
              Pagina medicului <Icon name="arrow-right" />
            </span>
          </span>
        </Link>
        <Link className="doc-mini card-lift" href="/medici/theodor-nicolau/">
          <span className="ph">
            <img src="/img/theodor-nicolau.png" alt="Dr. Theodor Nicolau" />
          </span>
          <span>
            <b>Dr. Theodor Nicolau</b>
            <span>Medic specialist psihiatru</span>
            <span className="go">
              Pagina medicului <Icon name="arrow-right" />
            </span>
          </span>
        </Link>
      </div>
      <p className="doc-soon">
        În curând în echipă, potrivit site-ului clinicii: Dr. Dorina Petriș și Dr. Simona Zancu,
        medici primari psihiatri, și Dr. Florina Mîndru, medic specialist psihiatru.
      </p>
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
            Am nevoie de bilet de trimitere pentru psihiatru?
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
            Cât durează până primesc o programare?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Depinde de medic și de perioadă. Programările prin CAS la Dr. Iova se fac cu minim o
            lună în avans. Pentru ceilalți medici, întrebați recepția la 0359 450 657.
          </p>
        </details>
        <details>
          <summary>
            Consultația la psihiatru înseamnă obligatoriu medicamente?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Nu. Medicul recomandă tratament medicamentos doar când consideră că este necesar. Uneori
            recomandarea este psihoterapie, investigații sau un control la altă specialitate.
          </p>
        </details>
        <details>
          <summary>
            Pot veni cu cineva la consultație?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Da. Puteți fi însoțit de o persoană apropiată. Medicul poate discuta cu dumneavoastră și
            separat, dacă doriți.
          </p>
        </details>
        <details>
          <summary>
            Diagnosticul meu rămâne confidențial?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Da. Informațiile medicale sunt protejate de secretul profesional și de regulile de
            protecție a datelor. Nu se comunică angajatorului, familiei sau altor persoane fără
            acordul dumneavoastră, cu excepțiile prevăzute de lege.
          </p>
        </details>
        <details>
          <summary>
            Tratați și adolescenți?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Pentru copii și adolescenți sub 18 ani există{" "}
            <Link href="/servicii/psihiatrie-pediatrica/">psihiatrie pediatrică</Link>, cu Dr.
            Roxana Samuila.
          </p>
        </details>
        <details>
          <summary>
            Ce fac într-o situație de urgență?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Sunați la 112 sau mergeți la cea mai apropiată unitate de primiri urgențe. Clinica
            funcționează pe bază de programare și nu are serviciu de urgență.
          </p>
        </details>
      </div>
    </>
  );
}
