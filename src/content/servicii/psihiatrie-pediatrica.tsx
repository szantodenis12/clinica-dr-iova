import type { ReactNode } from "react";
import Icon from "@/components/Icon";
import Link from "next/link";

/** Values of the "Pe scurt" rows, in the same order as `kf` in src/data/servicii.ts. */
export const kf: ReactNode[] = [
  <>
    Dr. Roxana Samuila, medic specialist psihiatrie pediatrică. Copii și adolescenți până la 18 ani,
    însoțiți de părinte sau reprezentant legal.
  </>,
  <>Clinica Dr. Iova, Str. Ceyrat nr. 31, bl. WR12, Oradea. Luni–vineri, 08:00–20:00.</>,
  <>
    Da. Consultația este gratuită cu bilet de trimitere de la medicul de familie sau de la alt
    specialist. Fără bilet se plătește.
  </>,
  <>
    Telefon <a href="tel:+40359450657">0359 450 657</a>, e-mail receptie@clinicadriova.ro sau{" "}
    <Link href="/programare/">cerere online</Link>.
  </>,
  <>
    Actul de identitate al părintelui, certificatul de naștere sau cartea de identitate a copilului,
    cardul de sănătate (dacă există), biletul de trimitere, caracterizări de la școală sau grădiniță
    și evaluări anterioare, dacă aveți.
  </>,
  <>
    <span className="todo">de cerut de la client: durata primei consultații</span>
  </>,
];

/** Page body (div.prose): sections, steps, signs, doctors, CAS, FAQ. */
export function Body() {
  return (
    <>
      <h2 id="ce-este" data-reveal="">
        Ce face un medic psihiatru pediatru?
      </h2>
      <p className="lead-in">
        Psihiatrul pediatru este medic specializat în tulburările emoționale, de comportament și de
        dezvoltare ale copilului și adolescentului. Evaluează, pune diagnostic, recomandă
        intervenții și, atunci când este nevoie, prescrie tratament.
      </p>
      <p>
        În multe situații, planul include și alți specialiști: psiholog clinician pentru{" "}
        <Link href="/servicii/evaluarea-copiilor/">evaluarea psihologică</Link>, logoped pentru{" "}
        <Link href="/servicii/logopedie/">tulburările de limbaj</Link>, psihoterapeut pentru ședințe
        cu copilul sau cu familia. La Clinica Dr. Iova aceștia lucrează în același loc, ceea ce
        ușurează coordonarea.
      </p>
      <p>
        Diagnosticul la copil se pune cu grijă și, de multe ori, în timp. O singură consultație nu
        este întotdeauna suficientă, iar medicul poate cere observații suplimentare de la părinți
        sau de la școală.
      </p>
      <h2 id="ce-tratam" data-reveal="">
        Cu ce probleme vin părinții?
      </h2>
      <p>Motive frecvente de prezentare la psihiatria pediatrică, în general:</p>
      <ul>
        <li>
          întârzieri în dezvoltare: copilul nu vorbește, nu răspunde la nume, nu caută contactul cu
          ceilalți;
        </li>
        <li>
          suspiciunea unei tulburări din spectrul autist sau a ADHD (deficit de atenție,
          hiperactivitate, impulsivitate);
        </li>
        <li>dificultăți de învățare și de adaptare la grădiniță sau la școală;</li>
        <li>anxietate: frică de separare, refuzul școlii, îngrijorări intense;</li>
        <li>ticuri, enurezis, tulburări de somn sau de alimentație;</li>
        <li>la adolescenți: stări depresive, izolare, autovătămare, consum de substanțe;</li>
        <li>schimbări bruște de comportament după un eveniment dificil din familie.</li>
      </ul>
      <p>
        Din 2023, screeningul pentru autism face parte din controalele preventive gratuite de la
        medicul de familie. Dacă medicul de familie observă semne, poate elibera bilet de trimitere
        către psihiatria pediatrică.
      </p>
      <h2 id="autism" data-reveal="">
        Ce se întâmplă după un diagnostic din spectrul autist?
      </h2>
      <p>
        Diagnosticul de tulburare din spectrul autist se stabilește de medicul psihiatru sau
        psihiatru pediatru. După diagnostic, copilul are nevoie de intervenție specializată: terapie
        comportamentală, logopedie, consiliere pentru părinți.
      </p>
      <p>
        Din 1 octombrie 2023, CNAS decontează, printr-un subprogram al Programului național de
        sănătate mintală, ședințe de psihoterapie, consiliere psihologică clinică și logopedie
        pentru persoanele diagnosticate cu tulburări din spectrul autist, la furnizori aflați în
        contract cu casa de asigurări. Condiția este diagnosticul pus de medicul psihiatru /
        psihiatru pediatru.
      </p>
      <div className="note" data-reveal="fade">
        Dacă Clinica Dr. Iova furnizează terapiile din acest subprogram:{" "}
        <span className="todo">de cerut de la client: terapii TSA decontate prin CAS, da/nu</span>.
        În orice caz, medicul vă explică la consultație ce pași urmează și unde puteți continua
        intervenția.
      </div>
      <h2 id="prima-consultatie" data-reveal="">
        Ce se întâmplă la prima consultație?
      </h2>
      <ol className="steps-v" data-stagger="">
        <li>
          <div>
            <b>Programarea</b>
            <p>
              Sunați la 0359 450 657. Spuneți vârsta copilului și, pe scurt, motivul. Recepția vă
              spune dacă aveți nevoie de bilet de trimitere.
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Discuția cu părinții</b>
            <p>
              Medicul vorbește mai întâi cu părinții: istoricul sarcinii și al nașterii, etapele de
              dezvoltare, comportamentul acasă și la școală, bolile din familie.
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Întâlnirea cu copilul</b>
            <p>
              Copilul este observat în cabinet: joc, limbaj, atenție, felul în care interacționează.
              La adolescenți, medicul poate discuta și singur cu tânărul, cu acordul părinților.
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Concluzii și plan</b>
            <p>
              Medicul explică ce a observat, ce mai este de evaluat (de exemplu o evaluare
              psihologică sau logopedică) și care sunt pașii următori.
            </p>
          </div>
        </li>
      </ol>
      <p>
        Pregătiți copilul spunându-i, în cuvinte simple, că merge la un doctor care stă de vorbă și
        se joacă cu el. Nu este nevoie să îi spuneți că are o problemă.
      </p>
      <h2 id="cand-merita" data-reveal="">
        Când merită o programare?
      </h2>
      <p>
        Fiecare copil se dezvoltă în ritmul lui. O programare la psihiatria pediatrică are sens
        atunci când părinții, educatorii sau medicul de familie observă dificultăți care persistă.
        Exemple:
      </p>
      <ul className="signs" data-stagger="fade">
        <li>
          <Icon name="check" />
          Copilul nu spune cuvinte la 18 luni sau nu formează propoziții scurte la 3 ani
        </li>
        <li>
          <Icon name="check" />
          Nu răspunde la nume, evită privirea, nu caută jocul cu alți copii
        </li>
        <li>
          <Icon name="check" />
          Agitație și neatenție care îl împiedică să urmărească activitățile de la grădiniță sau
          școală
        </li>
        <li>
          <Icon name="check" />
          Frici intense, refuzul de a merge la școală, dureri fizice fără cauză medicală
        </li>
        <li>
          <Icon name="check" />
          Tristețe, retragere sau iritabilitate care durează de câteva săptămâni la un adolescent
        </li>
        <li>
          <Icon name="check" />
          Ticuri, enurezis peste vârsta așteptată, probleme de somn repetate
        </li>
        <li>
          <Icon name="check" />
          Schimbări bruște de comportament după un eveniment dificil
        </li>
        <li>
          <Icon name="check" />
          Recomandarea medicului de familie, a educatorului sau a psihologului școlar
        </li>
      </ul>
      <p>
        Ce presupune concret o evaluare, pas cu pas:{" "}
        <Link href="/blog/evaluare-psihiatrica-copil-ce-presupune/">
          Evaluarea psihiatrică a copilului
        </Link>
        . Repere de limbaj pe vârste:{" "}
        <Link href="/blog/repere-dezvoltare-limbaj-copii-0-5-ani/">0–5 ani</Link>.
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
        Consultațiile de psihiatrie pediatrică sunt susținute de Dr. Roxana Samuila. Evaluarea
        psihologică și logopedia copiilor sunt făcute de Psih. Mihaela Caba, în aceeași clinică.
      </p>
      <div className="doc-row" data-stagger="scale">
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
        Cum funcționează prin CAS?
      </h2>
      <p>
        Clinica Dr. Iova are contract cu CAS Bihor. Potrivit informațiilor comunicate de clinică,
        consultația este <strong>gratuită dacă veniți cu bilet de trimitere</strong> de la medicul
        de familie sau de la un alt medic specialist aflat în contract cu casa de asigurări. Aveți
        nevoie de bilet, de actul de identitate al părintelui, de certificatul de naștere sau cartea
        de identitate a copilului și de cardul de sănătate, dacă există. Copiii sunt asigurați fără
        plata contribuției.
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
            De la ce vârstă se poate face o consultație de psihiatrie pediatrică?
            <Icon name="chevron-down" />
          </summary>
          <p>
            De la vârste mici, atunci când există îngrijorări legate de dezvoltare, până la 18 ani.
            Pentru copiii foarte mici, evaluarea se bazează mult pe observație și pe discuția cu
            părinții.
          </p>
        </details>
        <details>
          <summary>
            Trebuie să vină ambii părinți?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Nu este obligatoriu, dar este util: fiecare părinte observă alte lucruri. Copilul
            trebuie însoțit de un părinte sau de reprezentantul legal.
          </p>
        </details>
        <details>
          <summary>
            Copilul primește medicamente?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Nu neapărat. La copii, prima recomandare este de multe ori o intervenție
            nemedicamentoasă: terapie, logopedie, consiliere pentru părinți. Medicul discută cu
            dumneavoastră fiecare opțiune.
          </p>
        </details>
        <details>
          <summary>
            Ce este diferit față de o evaluare psihologică?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Psihiatrul pediatru este medic și stabilește diagnosticul medical. Psihologul clinician
            face <Link href="/servicii/evaluarea-copiilor/">evaluarea psihologică</Link>: testează
            dezvoltarea, atenția, limbajul, emoțiile și scrie un raport. Deseori sunt necesare
            amândouă.
          </p>
        </details>
        <details>
          <summary>
            Avem nevoie de bilet de trimitere?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Pentru consultația gratuită prin CAS, da: de la medicul de familie sau de la alt medic
            specialist. Fără bilet, consultația se plătește la clinică.
          </p>
        </details>
        <details>
          <summary>
            Puteți elibera documente pentru școală sau pentru comisie?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Da. Medicul poate elibera, după evaluare, documentele medicale necesare pentru
            orientarea școlară sau pentru{" "}
            <Link href="/servicii/evaluari-comisii/">comisia de evaluare</Link>, atunci când
            situația o cere.
          </p>
        </details>
      </div>
    </>
  );
}
