import type { ReactNode } from "react";
import Icon from "@/components/Icon";
import Link from "next/link";

/** Values of the "Pe scurt" rows, in the same order as `kf` in src/data/servicii.ts. */
export const kf: ReactNode[] = [
  <>
    Toți medicii clinicii: psihiatrie adulți, psihiatrie pediatrică, neurologie. Pacienți asigurați,
    cu bilet de trimitere.
  </>,
  <>Clinica Dr. Iova, Str. Ceyrat nr. 31, bl. WR12, Oradea. Luni–vineri, 08:00–20:00.</>,
  <>
    Da. Consultația medicală este gratuită cu bilet de trimitere. Serviciile psihologice:{" "}
    <span className="todo">
      de cerut de la client: ce servicii de psihologie/logopedie se decontează
    </span>
  </>,
  <>
    Telefon <a href="tel:+40359450657">0359 450 657</a>, e-mail receptie@clinicadriova.ro sau{" "}
    <Link href="/programare/">cerere online</Link>. Programările prin CAS la Dr. Iova se fac cu
    minim o lună în avans.
  </>,
  <>
    Biletul de trimitere (în perioada de valabilitate), actul de identitate, cardul național de
    sănătate. Pentru copii: certificatul de naștere și actul părintelui.
  </>,
  <>
    Consultația prin CAS are aceeași durată ca o consultație plătită.{" "}
    <span className="todo">de cerut de la client: durata consultației</span>
  </>,
];

/** Page body (div.prose): sections, steps, signs, doctors, CAS, FAQ. */
export function Body() {
  return (
    <>
      <h2 id="ce-este" data-reveal="">
        Ce înseamnă „consultație gratuită prin CAS”?
      </h2>
      <p className="lead-in">
        Clinica are contract cu CAS Bihor (contract nr. 1389, în lista CNAS a furnizorilor din
        ambulatoriul de specialitate). Pentru consultațiile din contract, casa de asigurări plătește
        clinica, iar pacientul asigurat nu plătește nimic, cu condiția să aibă bilet de trimitere
        valabil.
      </p>
      <p>
        Biletul de trimitere este documentul prin care medicul de familie sau un alt medic
        specialist aflat în contract cu casa de asigurări vă trimite la o anumită specialitate. Îl
        primiți tipărit sau electronic; recepția îl verifică la programare sau la sosire.
      </p>
      <p>
        Consultația prin CAS este aceeași consultație, cu același medic și aceeași durată, ca și cea
        plătită. Diferența este doar cine o plătește.
      </p>
      <h2 id="servicii" data-reveal="">
        Ce servicii sunt gratuite cu bilet de trimitere?
      </h2>
      <ul>
        <li>
          <strong>
            <Link href="/servicii/psihiatrie-adulti/">Consultația de psihiatrie pentru adulți</Link>
          </strong>
          : consultație inițială și controale, la medicul primar sau la medicii specialiști
          psihiatri;
        </li>
        <li>
          <strong>
            <Link href="/servicii/psihiatrie-pediatrica/">
              Consultația de psihiatrie pediatrică
            </Link>
          </strong>
          : pentru copii și adolescenți, cu bilet de la medicul de familie;
        </li>
        <li>
          <strong>
            <Link href="/servicii/neurologie/">Consultul neurologic</Link>
          </strong>
          : la medicul specialist neurolog.
        </li>
      </ul>
      <p>
        Serviciile de psihologie (evaluare, consiliere, psihoterapie), logopedia și avizele
        psihologice au reguli diferite. În pachetul de bază din ambulatoriu, ele nu sunt în general
        decontate, cu excepția subprogramului CNAS pentru persoanele diagnosticate cu tulburări din
        spectrul autist, la furnizori cu contract pentru acest subprogram.
      </p>
      <div className="note" data-reveal="fade">
        Servicii de psihologie și logopedie decontate la Clinica Dr. Iova:{" "}
        <span className="todo">
          de cerut de la client: lista exactă a serviciilor decontate și a celor cu plată; tarife
        </span>
        . Recepția vă spune, înainte de programare, dacă serviciul de care aveți nevoie este gratuit
        sau se plătește.
      </div>
      <h2 id="bilet" data-reveal="">
        De unde iau biletul de trimitere și cât este valabil?
      </h2>
      <p>Biletul de trimitere îl eliberează:</p>
      <ul>
        <li>
          <strong>medicul de familie</strong>, în urma unei consultații, dacă consideră necesar
          consultul de specialitate;
        </li>
        <li>
          <strong>un alt medic specialist</strong> aflat în contract cu casa de asigurări, de
          exemplu neurologul care vă trimite la psihiatru sau invers.
        </li>
      </ul>
      <p>
        Biletul are o perioadă de valabilitate limitată: ca regulă generală, 30 de zile
        calendaristice de la emitere, în care trebuie să ajungeți la prima consultație. După prima
        consultație, controalele recomandate de medicul specialist în același episod nu mai au
        nevoie de bilet nou, în limitele stabilite de normele CNAS. Pentru anumite situații (control
        după externare, boli cronice), regulile pot diferi; recepția vă lămurește.
      </p>
      <p>
        Programați-vă înainte să cereți biletul sau imediat după ce îl primiți, ca să nu expire.
        Pentru programările prin CAS la Dr. Iova, locurile se dau cu minim o lună în avans, așa că
        întrebați întâi recepția când este primul loc liber.
      </p>
      <h2 id="fara-bilet" data-reveal="">
        Ce se întâmplă dacă nu am bilet de trimitere?
      </h2>
      <p>
        Puteți veni la consultație și fără bilet, dar consultația se plătește la clinică. Tarifele:{" "}
        <span className="todo">
          de cerut de la client: tarife consultații private: psihiatrie, psihiatrie pediatrică,
          neurologie
        </span>
        . Le aflați de la recepție înainte de programare.
      </p>
      <p>
        Persoanele neasigurate pot beneficia gratuit doar de pachetul minimal (urgențe) și de
        serviciile din programele naționale de sănătate pentru care sunt eligibile; restul
        consultațiilor se plătesc.
      </p>
      <h2 id="prima-consultatie" data-reveal="">
        Cum decurge o consultație prin CAS, pas cu pas?
      </h2>
      <ol className="steps-v" data-stagger="">
        <li>
          <div>
            <b>Programarea</b>
            <p>
              Sunați la 0359 450 657 sau trimiteți o cerere online. Spuneți la ce specialitate și,
              dacă doriți, la ce medic. Recepția vă spune primul loc liber.
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Biletul de trimitere</b>
            <p>
              Mergeți la medicul de familie (sau la medicul specialist care vă trimite) și cereți
              biletul de trimitere pentru specialitatea respectivă. Verificați ca data programării
              să fie în perioada de valabilitate.
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>La clinică</b>
            <p>
              Prezentați la recepție biletul, actul de identitate și cardul de sănătate. Recepția
              validează serviciul în sistemul casei de asigurări.
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Consultația și controalele</b>
            <p>
              Consultația decurge normal. Medicul vă spune dacă și când este nevoie de control și
              dacă pentru control aveți nevoie de bilet nou.
            </p>
          </div>
        </li>
      </ol>
      <h2 id="cand-merita" data-reveal="">
        Când folosiți consultația prin CAS?
      </h2>
      <ul className="signs" data-stagger="fade">
        <li>
          <Icon name="check" />
          Medicul de familie v-a recomandat un consult de psihiatrie sau de neurologie
        </li>
        <li>
          <Icon name="check" />
          Aveți un diagnostic psihiatric sau neurologic și aveți nevoie de controale periodice
        </li>
        <li>
          <Icon name="check" />
          Copilul are nevoie de un consult de psihiatrie pediatrică, la recomandarea medicului de
          familie
        </li>
        <li>
          <Icon name="check" />
          Ați fost externat din spital cu recomandare de control în ambulatoriu
        </li>
        <li>
          <Icon name="check" />
          Aveți nevoie de referat medical pentru comisia de handicap sau pentru pensionare
        </li>
        <li>
          <Icon name="check" />
          Alt medic specialist v-a trimis către psihiatrie sau neurologie
        </li>
      </ul>
      <div className="note urgent" data-reveal="fade">
        <Icon name="phone-call" />
        <p>
          <b>În caz de urgență sunați la 112.</b> Clinica nu are serviciu de urgență. Dacă o
          persoană este în pericol imediat, sunați la 112 sau mergeți la cea mai apropiată unitate
          de primiri urgențe.
        </p>
      </div>
      <h2 id="cine-va-consulta" data-reveal="">
        La care medici puteți veni prin CAS?
      </h2>
      <p>
        Consultațiile medicale din contractul cu CAS Bihor sunt susținute de toți medicii clinicii.
        Mai jos, câte un medic din fiecare specialitate; lista completă pe pagina{" "}
        <Link href="/medici/">Medici</Link>.
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
      </div>
      <p className="doc-soon">
        Psihiatrie adulți: Dr. Sorin Iova, Dr. Sebastian Macrea, Dr. Adriana Maties, Dr. Theodor
        Nicolau. Psihiatrie pediatrică: Dr. Roxana Samuila. Neurologie: Dr. Titus Moga.
      </p>
      <h2 id="cas" data-reveal="">
        Ce aduceți la recepție?
      </h2>
      <p>
        Pe scurt: aveți nevoie de trei lucruri la recepție,{" "}
        <strong>biletul de trimitere valabil</strong>, <strong>actul de identitate</strong> și{" "}
        <strong>cardul național de sănătate</strong> (sau o dovadă că sunteți asigurat). Copiii sunt
        asigurați fără plata contribuției; aduceți certificatul de naștere și actul părintelui.
      </p>
      <div className="note cas" data-reveal="fade">
        <Icon name="receipt" />
        <div>
          <b>Întrebări despre CAS înainte de programare?</b>
          Sunați la recepție, la 0359 450 657, de luni până vineri între 08:00 și 20:00. Vă spunem
          dacă biletul dumneavoastră este valabil pentru specialitatea dorită și când este primul
          loc liber. Pagina de programare prin CAS: <Link href="/cas/">Programare CAS</Link>.
        </div>
      </div>
      <h2 id="intrebari" data-reveal="">
        Întrebări frecvente
      </h2>
      <div className="faq faq-1">
        <details>
          <summary>
            Cine poate elibera biletul de trimitere?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Medicul de familie sau un alt medic specialist aflat în contract cu casa de asigurări.
            Biletul trebuie să fie pentru specialitatea la care veniți (psihiatrie, psihiatrie
            pediatrică sau neurologie).
          </p>
        </details>
        <details>
          <summary>
            Cât este valabil biletul de trimitere?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Ca regulă generală, 30 de zile calendaristice de la emitere, în care trebuie să ajungeți
            la prima consultație. Pentru anumite situații regulile diferă; întrebați recepția.
          </p>
        </details>
        <details>
          <summary>
            Pentru control am nevoie de bilet nou?
            <Icon name="chevron-down" />
          </summary>
          <p>
            De regulă nu, dacă controlul este recomandat de medicul specialist în același episod de
            boală, în limitele stabilite de normele CNAS. Medicul vă spune la consultație.
          </p>
        </details>
        <details>
          <summary>
            Cât timp aștept o programare prin CAS?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Depinde de medic și de perioadă. Programările prin CAS la Dr. Iova se fac cu minim o
            lună în avans. Pentru ceilalți medici, întrebați recepția.
          </p>
        </details>
        <details>
          <summary>
            Sunt asigurat în alt județ. Pot veni la Clinica Dr. Iova?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Da. Contractul cu casa de asigurări este valabil pentru toți asigurații din România,
            indiferent de județul în care sunt înscriși la medicul de familie.
          </p>
        </details>
        <details>
          <summary>
            Evaluarea psihologică sau psihoterapia sunt gratuite prin CAS?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Pentru aceste servicii regulile sunt diferite de cele pentru consultațiile medicale. Ce
            se decontează la clinică: <span className="todo">de cerut de la client</span>. Recepția
            vă spune înainte de programare.
          </p>
        </details>
        <details>
          <summary>
            Nu am card de sănătate. Ce fac?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Puteți dovedi calitatea de asigurat și cu adeverința de asigurat eliberată de casa de
            asigurări sau prin verificarea în sistem la recepție, pe baza CNP-ului. Pentru copii nu
            este nevoie de card.
          </p>
        </details>
      </div>
    </>
  );
}
