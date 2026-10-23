import Link from "next/link";
import Icon from "@/components/Icon";

export default function PostBody() {
  return (
    <>
      <div className="pe-scurt" data-reveal="">
        <div className="lbl"><Icon name="zap" />Pe scurt</div>
        <p><strong>Psihiatrul</strong>{" "}este medic: pune diagnostic medical și prescrie tratament.{" "}<strong>Psihologul clinician</strong>{" "}are studii de psihologie și atestat de la Colegiul Psihologilor: evaluează prin interviu și teste, consiliază, scrie rapoarte de evaluare.{" "}<strong>Psihoterapeutul</strong>{" "}are, pe lângă studii, o formare de lungă durată într-o metodă de psihoterapie și atestat separat: lucrează prin ședințe regulate, pe termen mediu sau lung. Un psihiatru poate fi și psihoterapeut, dacă are această formare, dar nu automat. La Clinica Dr. Iova din Oradea lucrează toate cele trei profesii.</p>
      </div>
      <h2 id="psihiatrul">Ce face psihiatrul?</h2>
      <p>Psihiatrul a absolvit Facultatea de Medicină, apoi rezidențiatul în psihiatrie (sau psihiatrie pediatrică, pentru copii și adolescenți). Este medic, cu toate drepturile și obligațiile medicului: diagnostic, prescripție, bilet de internare, concediu medical, scrisoare medicală către medicul de familie.</p>
      <p>Pregătirea medicală contează în mod special într-un domeniu în care simptomele pot avea cauze multiple. Oboseala, tulburările de somn, schimbările de dispoziție sau de memorie pot ține de o tulburare psihică, dar și de tiroidă, de anemie, de o boală neurologică sau de un tratament în curs. Psihiatrul este pregătit să gândească în ambele direcții și să trimită la alt specialist atunci când este cazul.</p>
      <p>Gradele profesionale pe care le vedeți lângă nume au un sens precis.{" "}<strong>Medic specialist</strong>{" "}înseamnă rezidențiat încheiat și examen de specialitate promovat.{" "}<strong>Medic primar</strong>{" "}înseamnă și cel puțin cinci ani de practică în specialitate și un examen de grad.{" "}<strong>Șef de lucrări</strong>{" "}sau{" "}<strong>asistent universitar</strong>{" "}sunt titluri didactice: medicul predă la o facultate de medicină.</p>
      <h2 id="psihologul">Ce face psihologul clinician?</h2>
      <p>Psihologul a absolvit Facultatea de Psihologie și, pentru a practica, are nevoie de un atestat de liberă practică eliberat de Colegiul Psihologilor din România, pe o specialitate anume. Psihologia clinică este una dintre aceste specialități. Psihologul clinician lucrează cu evaluarea: interviu clinic, teste psihologice standardizate, scale pentru simptome, probe de atenție și memorie, evaluarea dezvoltării la copii.</p>
      <p>Rezultatul este un raport de evaluare psihologică, folosit de medicul psihiatru pentru diagnostic, de comisiile de evaluare (handicap, pensionare), de școală sau de alte instituții. Tot psihologul clinician face consiliere psihologică: un număr limitat de întâlniri, centrate pe o problemă clară, cu obiective concrete.</p>
      <p>Ce nu face psihologul: nu pune diagnostic medical, nu prescrie medicamente, nu eliberează concediu medical. Nu este o limitare a competenței, ci o împărțire a rolurilor.</p>
      <blockquote className="pull">Psihiatrul răspunde la întrebarea „ce este și cum se tratează”. Psihologul măsoară și descrie. Psihoterapeutul lucrează, în timp, la schimbare.</blockquote>
      <h2 id="psihoterapeutul">Ce face psihoterapeutul?</h2>
      <p>Psihoterapia este o specialitate separată în nomenclatorul Colegiului Psihologilor. Cine o practică are, pe lângă studiile de bază, o formare de lungă durată într-o școală de psihoterapie (de regulă câțiva ani de cursuri, practică și supervizare), apoi atestat în specialitatea respectivă. Formarea este obligatorie indiferent de profesia de bază: și un psiholog, și un medic trebuie să o parcurgă pentru a practica legal psihoterapie.</p>
      <p>Există numeroase metode: cognitiv-comportamentală, integrativă, sistemică, psihodinamică, EMDR și altele. Fiecare are un cadru și o durată tipică. Ce au în comun este structura: ședințe regulate, de obicei săptămânale, pe o perioadă de luni sau ani, cu obiective stabilite împreună cu persoana.</p>
      <p>La Clinica Dr. Iova se oferă{" "}<Link href="/servicii/psihoterapie-integrativa/">psihoterapie integrativă</Link>{" "}și{" "}<Link href="/servicii/terapie-emdr/">terapie EMDR</Link>.{" "}<span className="todo">de cerut de la client: care dintre psihologi au atestat de psihoterapeut și în ce metode</span></p>
      <h2 id="tabel">Comparație pe scurt</h2>
      <table>
        <thead>
          <tr>
            <th>Întrebare</th>
            <th>Psihiatru</th>
            <th>Psiholog clinician</th>
            <th>Psihoterapeut</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Studii de bază</td>
            <td>Medicină + rezidențiat</td>
            <td>Psihologie + atestat CPR</td>
            <td>Psihologie sau medicină + formare în psihoterapie + atestat CPR</td>
          </tr>
          <tr>
            <td>Diagnostic medical</td>
            <td>Da</td>
            <td>Nu (evaluare psihologică)</td>
            <td>Nu</td>
          </tr>
          <tr>
            <td>Prescrie medicamente</td>
            <td>Da</td>
            <td>Nu</td>
            <td>Nu</td>
          </tr>
          <tr>
            <td>Evaluare prin teste</td>
            <td>Uneori, scale clinice</td>
            <td>Da, acesta este rolul principal</td>
            <td>La începutul terapiei</td>
          </tr>
          <tr>
            <td>Ședințe regulate, pe termen lung</td>
            <td>Controale periodice</td>
            <td>Consiliere, număr limitat</td>
            <td>Da</td>
          </tr>
          <tr>
            <td>Decontare CAS</td>
            <td>Da, cu bilet de trimitere</td>
            <td>Anumite servicii, la recomandarea psihiatrului</td>
            <td>Anumite servicii, la recomandarea psihiatrului</td>
          </tr>
        </tbody>
      </table>
      <p>CPR = Colegiul Psihologilor din România. Decontarea prin CAS a serviciilor psihologice se face în condițiile Normelor CNAS, ca servicii conexe actului medical, la recomandarea medicului psihiatru sau psihiatru pediatru. Detalii pe pagina{" "}<Link href="/cas/">Programare prin CAS</Link>.</p>
      <h2 id="cine-primul">La cine mergeți prima dată?</h2>
      <p>Nu există un răspuns universal, dar există câteva repere care ajută.</p>
      <ul>
        <li><strong>Simptome intense, apărute brusc, care afectează somnul, alimentația sau funcționarea</strong>: psihiatrul. El poate exclude cauze medicale și poate decide dacă este nevoie de tratament.</li>
        <li><strong>Nevoie de un document</strong>{" "}(evaluare pentru comisie, aviz, raport pentru școală): psihologul clinician, de regulă la recomandarea sau în colaborare cu medicul.</li>
        <li><strong>O problemă cu care vreți să lucrați în timp</strong>{" "}(relații, anxietate de performanță, doliu, stres cronic): psihoterapeutul, eventual după o evaluare inițială.</li>
        <li><strong>Nu știți</strong>: medicul de familie sau recepția clinicii. Amândoi pot face o primă orientare, fără să vă pună un diagnostic.</li>
      </ul>
      <p>În practică, drumurile se intersectează des. Un psihiatru poate recomanda psihoterapie în paralel cu tratamentul. Un psihoterapeut poate recomanda un consult psihiatric atunci când observă că simptomele depășesc ce se poate lucra în ședințe. Un psiholog clinician poate fi primul care observă, la evaluare, că este nevoie de medic. Faptul că toți trei lucrează în aceeași clinică scurtează acest drum.</p>
      <h2 id="verificare">Cum verificați pregătirea unui specialist?</h2>
      <ul className="checklist">
        <li>Medicii: Colegiul Medicilor din România publică registrul medicilor cu drept de liberă practică (cmr.ro). Verificați specialitatea și gradul.</li>
        <li>Psihologii și psihoterapeuții: Colegiul Psihologilor din România ține Registrul Unic al Psihologilor (copsi.ro), unde apare specialitatea și treapta de specializare.</li>
        <li>Titlurile universitare (șef de lucrări, asistent universitar) pot fi verificate pe site-ul facultății.</li>
        <li>Întrebați direct. Un specialist bine pregătit răspunde fără ezitare la întrebarea „ce formare aveți?”.</li>
      </ul>
      <h2 id="ajutor">Când să cereți ajutor</h2>
      <p>Indiferent de profesia la care ajungeți prima dată, momentul potrivit este atunci când o stare durează de săptămâni și începe să vă costeze: somn, relații, muncă, plăcerea lucrurilor obișnuite. Nu trebuie să știți dinainte ce aveți. Asta este, de fapt, treaba specialistului.</p>
      <div className="note warn"><b>În caz de urgență sunați la 112.</b>{" "}Dacă o persoană vorbește despre a-și face rău, a pierdut contactul cu realitatea sau se află în pericol, nu așteptați o programare.</div>
      <section className="art-faq">
        <h2 id="intrebari-frecvente">Întrebări frecvente</h2>
        <div className="faq">
          <details>
            <summary>Psihologul poate prescrie medicamente?<Icon name="chevron-down" /></summary>
            <p>Nu. În România, tratamentul medicamentos este prescris exclusiv de medic. Psihologul clinician evaluează, consiliază și, dacă are atestat, face psihoterapie.</p>
          </details>
          <details>
            <summary>Un psihiatru poate face psihoterapie?<Icon name="chevron-down" /></summary>
            <p>Doar dacă are o formare separată în psihoterapie și atestat de la Colegiul Psihologilor din România. Specialitatea medicală de psihiatrie nu include automat dreptul de a practica psihoterapie.</p>
          </details>
          <details>
            <summary>Evaluarea psihologică este decontată prin CAS?<Icon name="chevron-down" /></summary>
            <p>Anumite servicii ale psihologului clinician (evaluare psihologică clinică, consiliere, psihoterapie) sunt incluse în pachetul de bază ca servicii conexe actului medical, la recomandarea medicului psihiatru sau psihiatru pediatru, în condițiile stabilite de CNAS.</p>
          </details>
          <details>
            <summary>Cum verific dacă un psiholog are drept de practică?<Icon name="chevron-down" /></summary>
            <p>Colegiul Psihologilor din România ține Registrul Unic al Psihologilor cu drept de liberă practică, consultabil public pe copsi.ro.</p>
          </details>
          <details>
            <summary>La Clinica Dr. Iova găsesc toate cele trei profesii?<Icon name="chevron-down" /></summary>
            <p>Da. În clinică lucrează medici psihiatri pentru adulți și copii, psihologi clinicieni și se oferă psihoterapie integrativă și EMDR, la aceeași recepție.</p>
          </details>
        </div>
      </section>
      <div className="surse">
        <h2>Surse</h2>
        <ol>
          <li>Legea nr. 213/2004 privind exercitarea profesiei de psiholog cu drept de liberă practică; Colegiul Psihologilor din România, Registrul Unic al Psihologilor:{" "}<a href="https://www.copsi.ro" rel="noopener" target="_blank">copsi.ro</a></li>
          <li>Colegiul Psihologilor din România, Norme privind formarea profesională și atestarea (specialitățile psihologie clinică, consiliere psihologică, psihoterapie):{" "}<a href="https://copsi.ro/images/Anexa_6_-_Norma_privind_atestarea_varianta_consolidata_feedback_CNRED.pdf" rel="noopener" target="_blank">copsi.ro (PDF)</a></li>
          <li>Ordinul MS/CNAS nr. 1857/441/2023, Normele Contractului-cadru, Anexa 7, lit. c) „Psihiatrie, inclusiv psihiatrie pediatrică&quot;, servicii conexe furnizate de psiholog:{" "}<a href="https://cnas.ro" rel="noopener" target="_blank">cnas.ro</a></li>
          <li>Colegiul Medicilor din România, registrul medicilor:{" "}<a href="https://www.cmr.ro" rel="noopener" target="_blank">cmr.ro</a></li>
        </ol>
        <p className="art-disclaimer">Articol cu scop informativ, scris de echipa clinicii. Nu înlocuiește consultația medicală și nu stabilește diagnostice.</p>
      </div>
    </>
  );
}
