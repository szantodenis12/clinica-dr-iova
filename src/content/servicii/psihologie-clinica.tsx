import type { ReactNode } from "react";
import Icon from "@/components/Icon";
import Link from "next/link";

/** Values of the "Pe scurt" rows, in the same order as `kf` in src/data/servicii.ts. */
export const kf: ReactNode[] = [
  <>Psih. Mihaela Caba, psiholog clinician și logoped. Copii și adulți.</>,
  <>Clinica Dr. Iova, Str. Ceyrat nr. 31, bl. WR12, Oradea. Luni–vineri, 08:00–20:00.</>,
  <>
    <span className="todo">
      de cerut de la client: dacă evaluările psihologice sunt decontate prin CAS și în ce condiții
    </span>
  </>,
  <>
    Telefon <a href="tel:+40359450657">0359 450 657</a>, e-mail receptie@clinicadriova.ro sau{" "}
    <Link href="/programare/">cerere online</Link>.
  </>,
  <>
    Actul de identitate, recomandarea medicului (dacă există), evaluări sau rapoarte anterioare,
    ochelarii de citit dacă îi folosiți. Pentru copii: certificatul de naștere și caracterizări de
    la școală.
  </>,
  <>
    <span className="todo">de cerut de la client: durata unei evaluări; număr de întâlniri</span>
  </>,
];

/** Page body (div.prose): sections, steps, signs, doctors, CAS, FAQ. */
export function Body() {
  return (
    <>
      <h2 id="ce-este" data-reveal="">
        Ce face un psiholog clinician?
      </h2>
      <p className="lead-in">
        Psihologul clinician este atestat de Colegiul Psihologilor din România în specialitatea
        psihologie clinică. Evaluează, cu interviu și instrumente standardizate, cum funcționează o
        persoană din punct de vedere cognitiv, emoțional și comportamental, și scrie un raport cu
        concluzii și recomandări.
      </p>
      <p>
        Nu este medic: nu prescrie medicamente și nu pune diagnostic medical. Lucrează însă strâns
        cu medicul psihiatru: evaluarea psihologică ajută medicul să precizeze diagnosticul, iar
        medicul poate cere o evaluare înainte sau după consultație. Pe scurt, diferențele:{" "}
        <Link href="/blog/psihiatru-psiholog-psihoterapeut-diferente/">
          Psihiatru, psiholog, psihoterapeut
        </Link>
        .
      </p>
      <h2 id="evaluari" data-reveal="">
        Ce evaluări psihologice se fac la clinică?
      </h2>
      <ul>
        <li>
          <strong>Evaluarea copilului</strong>: dezvoltare, atenție, limbaj, inteligență,
          comportament, emoții, pregătirea pentru școală. Detalii pe pagina{" "}
          <Link href="/servicii/evaluarea-copiilor/">Evaluarea copiilor</Link>.
        </li>
        <li>
          <strong>Evaluarea adultului</strong>: funcții cognitive (memorie, atenție), personalitate,
          stare emoțională, la cererea medicului psihiatru sau a persoanei.
        </li>
        <li>
          <strong>Evaluarea persoanelor vârstnice</strong>: screening cognitiv în cazul tulburărilor
          de memorie, la recomandarea medicului.
        </li>
        <li>
          <strong>Evaluări pentru comisii</strong>: documentele psihologice cerute de comisiile de
          evaluare a persoanelor cu handicap. Detalii pe pagina{" "}
          <Link href="/servicii/evaluari-comisii/">Evaluări pentru comisii</Link>.
        </li>
        <li>
          <strong>Avize psihologice</strong>: pentru permisul de armă, pe pagina{" "}
          <Link href="/servicii/aviz-psihologic-port-arma/">Aviz psihologic port-armă</Link>. Alte
          avize (de exemplu pentru angajare sau pentru permisul auto):{" "}
          <span className="todo">de cerut de la client: ce alte avize se eliberează</span>.
        </li>
      </ul>
      <p>
        Instrumentele folosite sunt alese de psiholog în funcție de vârstă și de întrebarea la care
        trebuie să răspundă evaluarea. Rezultatul este un raport scris, pe care îl primiți și pe
        care îl puteți prezenta medicului, școlii sau comisiei.
      </p>
      <h2 id="interventie" data-reveal="">
        Ce fel de intervenție oferă psihologul clinician?
      </h2>
      <p>
        Pe lângă evaluare, psihologul clinician poate oferi{" "}
        <Link href="/servicii/consiliere-psihologica/">consiliere psihologică clinică</Link>:
        întâlniri pe termen scurt, orientate către o problemă concretă. Pentru lucrul în profunzime,
        pe termen mai lung, recomandarea este{" "}
        <Link href="/servicii/psihoterapie-integrativa/">psihoterapia</Link>, inclusiv{" "}
        <Link href="/servicii/terapie-emdr/">EMDR</Link> pentru amintiri traumatice.
      </p>
      <p>
        Psihologul vă spune, la finalul evaluării, care dintre aceste forme de intervenție are sens
        în cazul dumneavoastră, sau dacă este nevoie de un consult la medicul psihiatru.
      </p>
      <h2 id="prima-consultatie" data-reveal="">
        Cum se desfășoară o evaluare psihologică?
      </h2>
      <ol className="steps-v" data-stagger="">
        <li>
          <div>
            <b>Programarea</b>
            <p>
              Sunați la 0359 450 657. Spuneți dacă veniți cu o recomandare de la medic și care este
              scopul evaluării (raport pentru medic, pentru școală, pentru comisie).
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Interviul</b>
            <p>
              Psihologul discută cu dumneavoastră (sau cu părinții, în cazul copiilor) despre
              motivul evaluării, istoric, dificultăți actuale.
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Testarea</b>
            <p>
              Aplică probe standardizate: chestionare, teste de atenție, memorie, inteligență sau
              personalitate, în funcție de scop. Pot fi necesare una sau mai multe întâlniri.
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Raportul</b>
            <p>
              Primiți un raport scris cu rezultatele, interpretarea lor și recomandări. Psihologul
              vă explică concluziile și pașii următori.
            </p>
          </div>
        </li>
      </ol>
      <h2 id="cand-merita" data-reveal="">
        Când este utilă o evaluare psihologică?
      </h2>
      <ul className="signs" data-stagger="fade">
        <li>
          <Icon name="check" />
          Medicul psihiatru sau medicul de familie a recomandat o evaluare psihologică
        </li>
        <li>
          <Icon name="check" />
          Un copil are dificultăți de învățare, de atenție sau de comportament la școală
        </li>
        <li>
          <Icon name="check" />
          Școala, grădinița sau comisia cere un raport psihologic
        </li>
        <li>
          <Icon name="check" />
          Tulburări de memorie la un adult sau la o persoană în vârstă
        </li>
        <li>
          <Icon name="check" />
          Vreți să înțelegeți mai bine o dificultate emoțională înainte de a decide ce formă de
          ajutor căutați
        </li>
        <li>
          <Icon name="check" />
          Aveți nevoie de un aviz psihologic (de exemplu pentru permisul de armă)
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
        Cine vă consultă?
      </h2>
      <p>
        Evaluările psihologice sunt realizate de Psih. Mihaela Caba, psiholog clinician și logoped.
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
        În curând în echipă, potrivit site-ului clinicii: Psih. Bianca Gliga (psiholog clinician,
        psihoterapeut, logoped) și Psih. Paula Lazăr (psiholog clinician).
      </p>
      <h2 id="cas" data-reveal="">
        Cum funcționează prin CAS?
      </h2>
      <p>
        Clinica Dr. Iova are contract cu CAS Bihor pentru consultațiile medicale. Pentru serviciile
        de psihologie, regulile de decontare sunt diferite de cele pentru consultațiile medicale și
        depind de tipul serviciului și de contractul furnizorului.
      </p>
      <div className="note cas" data-reveal="fade">
        <Icon name="receipt" />
        <div>
          <b>Evaluările psihologice prin CAS</b>
          <span className="todo">
            de cerut de la client: dacă evaluările psihologice sunt decontate prin CAS și în ce
            condiții; tarif evaluare
          </span>
          . Recepția vă spune, înainte de programare, dacă serviciul de care aveți nevoie este
          decontat sau se plătește, și cât costă. Detalii generale pe pagina{" "}
          <Link href="/servicii/consultatii-cas/">Consultații prin CAS</Link>.
        </div>
      </div>
      <h2 id="intrebari" data-reveal="">
        Întrebări frecvente
      </h2>
      <div className="faq faq-1">
        <details>
          <summary>
            Care este diferența dintre psiholog și psihiatru?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Psihiatrul este medic: pune diagnostic medical și poate prescrie medicamente. Psihologul
            clinician evaluează cu instrumente standardizate și oferă consiliere sau psihoterapie,
            dar nu prescrie medicamente. Deseori lucrează împreună.
          </p>
        </details>
        <details>
          <summary>
            Am nevoie de trimitere de la medic pentru o evaluare psihologică?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Puteți veni și fără recomandare. Dacă evaluarea este cerută de un medic, de școală sau
            de o comisie, aduceți documentul care o solicită, ca psihologul să știe la ce întrebare
            trebuie să răspundă raportul.
          </p>
        </details>
        <details>
          <summary>
            Cât durează o evaluare?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Depinde de scop și de vârstă. Unele evaluări se fac într-o singură întâlnire, altele în
            două sau trei. Durata orientativă la clinică:{" "}
            <span className="todo">de cerut de la client</span>.
          </p>
        </details>
        <details>
          <summary>
            Primesc un document scris?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Da. Rezultatul evaluării este un raport psihologic scris, cu concluzii și recomandări,
            pe care îl puteți prezenta medicului, școlii sau comisiei.
          </p>
        </details>
        <details>
          <summary>
            Evaluarea este confidențială?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Da. Rezultatele se comunică doar dumneavoastră (sau părinților, în cazul copiilor) și,
            cu acordul dumneavoastră, medicului care a cerut evaluarea.
          </p>
        </details>
        <details>
          <summary>
            Faceți evaluări și pentru copii?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Da. Evaluarea copiilor este una dintre activitățile principale ale clinicii: dezvoltare,
            atenție, limbaj, comportament. Detalii pe pagina{" "}
            <Link href="/servicii/evaluarea-copiilor/">Evaluarea copiilor</Link>.
          </p>
        </details>
      </div>
    </>
  );
}
