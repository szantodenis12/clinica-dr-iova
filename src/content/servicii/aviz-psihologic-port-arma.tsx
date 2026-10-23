import type { ReactNode } from "react";
import Icon from "@/components/Icon";
import Link from "next/link";

/** Values of the "Pe scurt" rows, in the same order as `kf` in src/data/servicii.ts. */
export const kf: ReactNode[] = [
  <>
    <span className="todo">
      de cerut de la client: psihologul care eliberează avizele de port-armă (nume, atestat CoPsi în
      specialitatea cerută)
    </span>{" "}
    Persoane peste 18 ani.
  </>,
  <>Clinica Dr. Iova, Str. Ceyrat nr. 31, bl. WR12, Oradea. Luni–vineri, 08:00–20:00.</>,
  <>
    Nu. Avizele psihologice nu se decontează prin CAS; serviciul se plătește. Tarif:{" "}
    <span className="todo">de cerut de la client: tarif aviz port-armă</span>
  </>,
  <>
    Telefon <a href="tel:+40359450657">0359 450 657</a>, e-mail receptie@clinicadriova.ro sau{" "}
    <Link href="/programare/">cerere online</Link>. Spuneți că aveți nevoie de aviz pentru permis de
    armă și pentru ce categorie (vânătoare, tir sportiv, autoapărare, colecție, serviciu).
  </>,
  <>
    Actul de identitate în original. Dacă este o reexaminare cerută de poliție, aduceți solicitarea.
    Veniți odihnit; evaluarea presupune probe de atenție.
  </>,
  <>
    <span className="todo">
      de cerut de la client: durata evaluării; dacă avizul se eliberează pe loc
    </span>
  </>,
];

/** Page body (div.prose): sections, steps, signs, doctors, CAS, FAQ. */
export function Body() {
  return (
    <>
      <h2 id="ce-este" data-reveal="">
        Ce este avizul psihologic pentru armă?
      </h2>
      <p className="lead-in">
        Este un document prin care un psiholog atestat certifică, după o evaluare, că persoana este
        aptă din punct de vedere psihologic să dețină, să poarte și să folosească arme și muniții
        supuse autorizării. Legea îl cere la prima autorizare, la prelungirea permisului și ori de
        câte ori poliția solicită, motivat, o reexaminare.
      </p>
      <p>
        Avizul psihologic este distinct de <strong>certificatul medical</strong>, eliberat de o
        unitate sanitară autorizată pentru examinarea persoanelor în vederea deținerii armelor.
        Ambele documente trebuie emise cu cel mult 6 luni înainte de depunerea cererii la poliție.
      </p>
      <p>
        Evaluarea pentru port-armă poate fi făcută doar de psihologi cu atestat în specialitatea
        cerută de lege și înscriși în Registrul unic al psihologilor al Colegiului Psihologilor din
        România. Asociația Psihologilor din România a publicat în noiembrie 2022 un ghid pentru
        pregătirea și desfășurarea acestei evaluări.
      </p>
      <h2 id="evaluarea" data-reveal="">
        Ce presupune evaluarea psihologică?
      </h2>
      <p>
        Evaluarea nu este o simplă adeverință. Conform practicii profesionale și ghidului APR, ea
        cuprinde, în general:
      </p>
      <ul>
        <li>
          <strong>interviul</strong>: motivul solicitării, istoricul personal și medical, consumul
          de alcool sau substanțe, situații de conflict, antecedente;
        </li>
        <li>
          <strong>probe de personalitate</strong>: chestionare standardizate pentru stabilitate
          emoțională, impulsivitate, agresivitate, control;
        </li>
        <li>
          <strong>probe de atenție și reactivitate</strong>: concentrare, timp de reacție, decizie
          sub presiune;
        </li>
        <li>
          <strong>observația clinică</strong> pe durata evaluării.
        </li>
      </ul>
      <p>
        Concluzia psihologului este „apt” sau „inapt” pentru categoria de arme solicitată. Avizul
        reflectă rezultatul evaluării; psihologul nu poate elibera un aviz favorabil dacă probele nu
        îl susțin. În caz de aviz nefavorabil, persoana are dreptul la explicații și la o
        reevaluare, în condițiile stabilite de Colegiul Psihologilor.
      </p>
      <h2 id="pasii" data-reveal="">
        Care sunt pașii pentru permisul de armă?
      </h2>
      <p>
        Procedura completă se desfășoară la Serviciul Arme, Explozivi și Substanțe Periculoase din
        cadrul Inspectoratului de Poliție Județean Bihor. Pe scurt, conform normelor de aplicare a
        Legii 295/2004:
      </p>
      <ol>
        <li>
          Verificați că îndepliniți condițiile legale (vârsta de 18 ani, lipsa antecedentelor penale
          relevante, un motiv legal: vânătoare, tir sportiv, colecție, autoapărare în condițiile
          legii, serviciu);
        </li>
        <li>
          Absolviți cursul teoretic și practic de instruire în domeniul armelor (nu este necesar
          pentru armele neletale în toate cazurile);
        </li>
        <li>
          Obțineți <strong>certificatul medical</strong> de la o unitate sanitară autorizată și{" "}
          <strong>avizul psihologic</strong> de la un psiholog atestat, ambele emise cu cel mult 6
          luni înainte;
        </li>
        <li>
          Depuneți cererea la poliție, cu actul de identitate, cele două documente, certificatul de
          absolvire a cursului, fotografii, dovada spațiului de depozitare și, după caz, documentul
          care atestă calitatea (permis de vânătoare, legitimație de sportiv etc.);
        </li>
        <li>Poliția verifică dosarul și eliberează autorizația, apoi permisul de armă.</li>
      </ol>
      <p>
        Lista exactă a actelor și taxele le aflați de la IPJ Bihor. Pașii, cu detalii, în articolul{" "}
        <Link href="/blog/aviz-psihologic-permis-arma-pasi/">
          Avizul psihologic pentru permisul de armă
        </Link>
        .
      </p>
      <h2 id="prima-consultatie" data-reveal="">
        Cum decurge evaluarea la clinică?
      </h2>
      <ol className="steps-v" data-stagger="">
        <li>
          <div>
            <b>Programarea</b>
            <p>
              Sunați la 0359 450 657. Spuneți pentru ce categorie de arme aveți nevoie de aviz și
              dacă este prima autorizare, prelungire sau reexaminare.
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Identificarea și interviul</b>
            <p>
              Prezentați actul de identitate. Psihologul discută cu dumneavoastră despre motivul
              solicitării, istoric, stare de sănătate, situații de risc.
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Probele</b>
            <p>
              Completați chestionare de personalitate și probe de atenție și reactivitate, pe hârtie
              sau pe calculator. Veniți odihnit și fără consum de alcool.
            </p>
          </div>
        </li>
        <li>
          <div>
            <b>Avizul</b>
            <p>
              Psihologul interpretează rezultatele și eliberează avizul, cu concluzia „apt” sau
              „inapt” pentru categoria solicitată. Termen de eliberare:{" "}
              <span className="todo">de cerut de la client: pe loc sau în câte zile</span>
            </p>
          </div>
        </li>
      </ol>
      <h2 id="cand-merita" data-reveal="">
        Când aveți nevoie de aviz psihologic?
      </h2>
      <ul className="signs" data-stagger="fade">
        <li>
          <Icon name="check" />
          Prima autorizare pentru procurarea unei arme letale sau neletale supuse autorizării
        </li>
        <li>
          <Icon name="check" />
          Prelungirea valabilității permisului de armă
        </li>
        <li>
          <Icon name="check" />
          Reexaminare solicitată motivat de poliție
        </li>
        <li>
          <Icon name="check" />
          Permis de vânătoare, legitimație de tir sportiv, colecție de arme
        </li>
        <li>
          <Icon name="check" />
          Angajare în pază și protecție sau alte funcții care cer deținerea armei de serviciu
        </li>
        <li>
          <Icon name="check" />
          Dobândirea unei arme prin moștenire sau donație, care necesită autorizare
        </li>
      </ul>
      <h2 id="cine-va-consulta" data-reveal="">
        Cine eliberează avizul?
      </h2>
      <p>
        <span className="todo">
          de cerut de la client: psihologul care eliberează avizele de port-armă: nume, atestat
          CoPsi în specialitatea cerută (psihologie aplicată în domeniul securității naționale sau
          altă specialitate acceptată), înscriere în Registrul unic
        </span>
        . Psih. Mihaela Caba este psiholog clinician al clinicii; competența pentru avizele de
        port-armă trebuie confirmată.
      </p>
      <div className="doc-row" data-stagger="scale" />
      <h2 id="cas" data-reveal="">
        Se decontează prin CAS?
      </h2>
      <p>
        Avizele psihologice nu fac parte din serviciile decontate de casa de asigurări. Evaluarea
        pentru port-armă se plătește.
      </p>
      <div className="note cas" data-reveal="fade">
        <Icon name="receipt" />
        <div>
          <b>Tarif</b>
          <span className="todo">
            de cerut de la client: tarif aviz psihologic port-armă; modalități de plată
          </span>
          . Recepția vă spune costul la programare. Celelalte servicii ale clinicii decontate prin
          CAS: <Link href="/servicii/consultatii-cas/">Consultații prin CAS</Link>.
        </div>
      </div>
      <h2 id="intrebari" data-reveal="">
        Întrebări frecvente
      </h2>
      <div className="faq faq-1">
        <details>
          <summary>
            Cât timp este valabil avizul psihologic?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Normele de aplicare a Legii 295/2004 cer ca avizul să fie emis cu cel mult 6 luni
            înainte de depunerea cererii la poliție. Verificați cerințele actuale la IPJ Bihor,
            Serviciul Arme, Explozivi și Substanțe Periculoase.
          </p>
        </details>
        <details>
          <summary>
            Avizul psihologic ține loc de certificat medical?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Nu. Sunt două documente distincte: avizul psihologic de la psiholog și certificatul
            medical de la o unitate sanitară autorizată pentru examinarea persoanelor în vederea
            deținerii armelor. Dacă clinica eliberează și certificatul medical:{" "}
            <span className="todo">de cerut de la client</span>.
          </p>
        </details>
        <details>
          <summary>
            Cât durează evaluarea?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Evaluarea cuprinde interviu și probe psihologice și durează, în general, peste o oră.
            Durata la clinică și termenul de eliberare:{" "}
            <span className="todo">de cerut de la client</span>.
          </p>
        </details>
        <details>
          <summary>
            Ce se întâmplă dacă rezultatul este „inapt”?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Psihologul vă explică rezultatul. Aveți dreptul la o reevaluare, în condițiile stabilite
            de Colegiul Psihologilor. Avizul reflectă rezultatul probelor și nu poate fi modificat
            la cerere.
          </p>
        </details>
        <details>
          <summary>
            Pot face evaluarea dacă urmez un tratament psihiatric?
            <Icon name="chevron-down" />
          </summary>
          <p>
            Spuneți psihologului ce tratament urmați. Evaluarea ține cont de starea actuală și de
            documentele medicale. Poliția poate cere și documente medicale suplimentare.
          </p>
        </details>
        <details>
          <summary>
            Eliberați avize și pentru alte scopuri (angajare, permis auto)?
            <Icon name="chevron-down" />
          </summary>
          <p>
            <span className="todo">de cerut de la client: alte avize psihologice eliberate</span>
          </p>
        </details>
      </div>
    </>
  );
}
