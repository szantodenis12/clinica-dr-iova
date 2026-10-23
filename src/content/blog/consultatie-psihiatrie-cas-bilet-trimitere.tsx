import Link from "next/link";
import Icon from "@/components/Icon";

export default function PostBody() {
  return (
    <>
      <div className="pe-scurt" data-reveal="">
        <div className="lbl"><Icon name="zap" />Pe scurt</div>
        <p>Consultația de psihiatrie (adulți și copii) este gratuită pentru asigurați la furnizorii aflați în contract cu casa de asigurări, pe baza biletului de trimitere eliberat de medicul de familie sau de alt medic specialist în contract. Pe un bilet se decontează maximum 3 consultații în 60 de zile pentru o problemă acută, sau maximum 4 pe trimestru pentru o afecțiune cronică. Persoanele cu anumite diagnostice psihiatrice deja stabilite pot merge direct, fără bilet (Anexa 13 din Normele CNAS). Clinica Dr. Iova din Oradea are contract cu CAS Bihor; aduceți biletul și cardul de sănătate.</p>
      </div>
      <h2 id="ce-este">Ce este biletul de trimitere și de ce contează?</h2>
      <p>Sistemul public de asigurări de sănătate funcționează pe trepte. Medicul de familie este prima treaptă și are rolul de a orienta pacientul către specialistul potrivit. Biletul de trimitere este documentul prin care face asta: el spune casei de asigurări „acest pacient are nevoie de un consult la specialitatea X” și permite clinicii să deconteze consultația, adică să o primească plătită de la casă, nu de la dumneavoastră.</p>
      <p>Regula se aplică la fel într-un ambulatoriu de spital și într-o clinică privată, cu o singură condiție: clinica să aibă contract cu casa de asigurări. Clinica Dr. Iova are contract cu CAS Bihor, așa că biletul de trimitere este valabil aici.</p>
      <h2 id="cine">Cine eliberează biletul de trimitere?</h2>
      <p>Conform Normelor metodologice ale Contractului-cadru (Ordinul MS/CNAS nr. 1857/441/2023, Anexa 7), consultația de specialitate se acordă pe baza biletului de trimitere de la{" "}<strong>medicul de familie</strong>{" "}sau de la{" "}<strong>alt medic de specialitate</strong>, cu două condiții: pacientul să fi avut biletul inițial de la medicul de familie, iar medicul trimițător să fie în relație contractuală cu casa de asigurări.</p>
      <p>În practică, asta înseamnă că, pentru o primă consultație de psihiatrie, drumul obișnuit începe la medicul de familie. Un neurolog, un endocrinolog sau un pediatru în contract cu casa pot și ei elibera bilet către psihiatrie, dacă pacientul a ajuns la ei tot pe un bilet de la medicul de familie.</p>
      <p>Pentru copii, biletul vine de regulă de la medicul de familie sau de la pediatru. Pentru persoanele fără medic de familie, primul pas este înscrierea la unul: fără medic de familie, accesul la ambulatoriul de specialitate prin CAS este limitat la urgențe și la excepțiile prevăzute de norme.</p>
      <h2 id="cate">Câte consultații acoperă un bilet?</h2>
      <p>Depinde de tipul problemei, așa cum o încadrează medicul.</p>
      <table>
        <thead>
          <tr>
            <th>Situație</th>
            <th>Ce se decontează pe un bilet</th>
            <th>Sursa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Episod acut sau subacut, sau acutizarea unei boli cronice</td>
            <td>Maximum 3 consultații, în cel mult 60 de zile de la prima consultație, pentru diagnostic, tratament și urmărirea evoluției</td>
            <td>Anexa 7, pct. 1.2.1</td>
          </tr>
          <tr>
            <td>Afecțiune cronică urmărită la aceeași specialitate</td>
            <td>Maximum 4 consultații pe trimestru, nu mai mult de 2 pe lună</td>
            <td>Anexa 7, pct. 1.3.1</td>
          </tr>
          <tr>
            <td>Consultațiile a doua, a treia și a patra, la solicitarea medicului</td>
            <td>Se fac direct, fără alt bilet de trimitere</td>
            <td>Anexa 7, pct. 1.3.3</td>
          </tr>
          <tr>
            <td>După externare, cu diagnostic confirmat în spital</td>
            <td>Maximum 2 consultații pentru urmărirea tratamentului stabilit la internare</td>
            <td>Anexa 7, pct. 1.3.4</td>
          </tr>
        </tbody>
      </table>
      <p>Concret: dacă veniți prima dată cu un bilet de trimitere și medicul vă programează un control peste trei săptămâni, nu aveți nevoie de un bilet nou pentru control. Dacă urmărirea continuă pe termen lung, medicul vă spune când este nevoie de un bilet nou de la medicul de familie, de regulă o dată pe trimestru.</p>
      <h2 id="valabilitate">Cât timp este valabil biletul?</h2>
      <p>Biletul de trimitere are un termen de valabilitate de la data emiterii, în care trebuie să vă prezentați la prima consultație. Pentru specialitățile clinice, termenul uzual este de 30 de zile calendaristice, cu termene mai lungi pentru anumite boli cronice.{" "}<span className="todo">de verificat la revizuire: termenele exacte conform formularului de bilet de trimitere în vigoare (Ordinul MS/CNAS 868/2011, cu modificările ulterioare)</span>{" "}Întrebați medicul care îl eliberează sau recepția clinicii dacă nu sunteți siguri.</p>
      <p>Dacă programarea pe care o primiți depășește termenul de valabilitate al biletului, spuneți acest lucru la recepție atunci când vă programați. Soluția obișnuită este să cereți biletul de la medicul de familie mai aproape de data consultației.</p>
      <blockquote className="pull">Biletul se cere în funcție de data programării, nu invers. Întâi programarea, apoi biletul.</blockquote>
      <h2 id="fara-bilet">Când puteți merge la psihiatru fără bilet, prin CAS?</h2>
      <p>Normele prevăd o listă de afecțiuni (Anexa 13) pentru care prezentarea la medicul specialist se face direct, fără bilet de trimitere. Punctul 22 al listei cuprinde „tulburări psihice”: grupul diagnostic al schizofreniei, al tulburărilor schizotipale și delirante, grupul tulburărilor dispoziției, autismul, ADHD, bolile psihice la copii, tulburarea obsesiv-compulsivă, tulburările de neurodezvoltare la copii și adulți, tulburarea posttraumatică de stres și tulburările specifice de personalitate.</p>
      <p>Excepția se aplică persoanelor care au deja un astfel de diagnostic stabilit și documentat. Pentru o primă consultație, fără diagnostic anterior, biletul de trimitere rămâne necesar. Clinica Dr. Iova comunică în prezent consultațiile gratuite prin CAS pe bază de bilet de trimitere; dacă aveți un diagnostic din lista de mai sus și doriți să veniți fără bilet, întrebați la recepție înainte.{" "}<span className="todo">de confirmat cu clinica: cum aplică excepția din Anexa 13 și ce document solicită drept dovadă a diagnosticului</span></p>
      <h2 id="ce-aduceti">Ce aduceți în ziua consultației?</h2>
      <ul className="checklist">
        <li>Biletul de trimitere, în original, în termen de valabilitate</li>
        <li>Cardul național de sănătate (sau adeverința de asigurat, dacă nu aveți card); pentru copii, certificatul de naștere sau actul de identitate</li>
        <li>Actul de identitate</li>
        <li>Scrisori medicale, analize și investigații recente, dacă există</li>
        <li>Lista tratamentelor pe care le urmați în prezent</li>
        <li>Pentru copii: documente de la școală sau grădiniță, evaluări anterioare, dacă există</li>
      </ul>
      <p>Cardul de sănătate este folosit pentru validarea serviciului în sistemul casei. Dacă l-ați pierdut sau nu l-ați primit, adeverința eliberată de casa de asigurări ține locul lui.</p>
      <h2 id="programare">Cum vă programați prin CAS la Clinica Dr. Iova?</h2>
      <p>Sunați la recepție,{" "}<a href="tel:+40359450657">0359 450 657</a>, de luni până vineri între 08:00 și 20:00, sau folosiți{" "}<Link href="/programare/">formularul de programare</Link>. Spuneți că veniți prin CAS și la ce specialitate. Recepția vă propune medicul și data disponibilă.</p>
      <p>Pentru consultațiile prin CAS la Șef lucr. Dr. Sorin Iova, clinica recomandă programarea cu minim o lună în avans (postare din 31.05.2026). Pentru ceilalți medici psihiatri ai clinicii, termenele pot fi mai scurte.{" "}<span className="todo">de cerut de la client: timpii de așteptare actuali pe medic și pe specialitate</span></p>
      <p>Dacă nu aveți bilet de trimitere sau nu puteți aștepta, consultația se poate face în regim privat.{" "}<span className="todo">de cerut de la client: tarifele consultațiilor private pe specialitate</span></p>
      <h2 id="ajutor">Când să cereți ajutor fără să așteptați biletul</h2>
      <p>Biletul de trimitere este o regulă administrativă, nu o barieră medicală. Dacă o persoană se află într-o situație care nu poate aștepta o programare, sistemul are alte căi.</p>
      <div className="note warn"><b>În caz de urgență sunați la 112</b>{" "}sau mergeți la unitatea de primiri urgențe. Urgențele medico-chirurgicale, inclusiv cele psihiatrice, se acordă fără bilet de trimitere, indiferent de calitatea de asigurat.</div>
      <section className="art-faq">
        <h2 id="intrebari-frecvente">Întrebări frecvente</h2>
        <div className="faq">
          <details>
            <summary>Cine poate elibera biletul de trimitere pentru psihiatrie?<Icon name="chevron-down" /></summary>
            <p>Medicul de familie sau alt medic de specialitate aflat în contract cu casa de asigurări, cu condiția ca pacientul să fi avut biletul inițial de la medicul de familie. Medicul trimițător trebuie să fie în relație contractuală cu casa.</p>
          </details>
          <details>
            <summary>Câte consultații acoperă un bilet de trimitere?<Icon name="chevron-down" /></summary>
            <p>Pentru un episod acut sau subacut: maximum 3 consultații în 60 de zile de la prima. Pentru afecțiuni cronice urmărite la aceeași specialitate: maximum 4 consultații pe trimestru, nu mai mult de 2 pe lună. Consultațiile următoare, la solicitarea medicului, se fac fără alt bilet.</p>
          </details>
          <details>
            <summary>Pot merge la psihiatru fără bilet de trimitere, prin CAS?<Icon name="chevron-down" /></summary>
            <p>Normele CNAS (Anexa 13, pct. 22) permit prezentarea directă pentru persoanele cu anumite diagnostice deja stabilite. Pentru o primă consultație, fără diagnostic anterior, biletul este necesar.</p>
          </details>
          <details>
            <summary>Ce se întâmplă dacă nu am bilet de trimitere?<Icon name="chevron-down" /></summary>
            <p>Consultația se poate face în regim privat, cu plată. La Clinica Dr. Iova, recepția vă poate spune tariful și cel mai apropiat loc disponibil.</p>
          </details>
          <details>
            <summary>Biletul de trimitere este valabil și la o clinică privată?<Icon name="chevron-down" /></summary>
            <p>Da, dacă clinica are contract cu casa de asigurări. Clinica Dr. Iova are contract cu CAS Bihor, așa că biletul este valabil aici la fel ca într-un ambulatoriu de spital.</p>
          </details>
        </div>
      </section>
      <div className="surse">
        <h2>Surse</h2>
        <ol>
          <li>Ordinul MS/CNAS nr. 1857/441/2023 privind aprobarea Normelor metodologice de aplicare a HG nr. 521/2023 (Contractul-cadru), versiunea în vigoare de la 01.04.2025, Anexa 7 pct. 1.2.1–1.3.4 și Anexa 13 pct. 22, Nota 1:{" "}<a href="https://cnas.ro" rel="noopener" target="_blank">cnas.ro</a></li>
          <li>HG nr. 521/2023 pentru aprobarea pachetelor de servicii și a Contractului-cadru, forma actualizată 14.08.2025:{" "}<a href="https://cnas.ro/wp-content/uploads/2025/08/COCA-actualizata-14.08.2025.pdf" rel="noopener" target="_blank">cnas.ro (PDF)</a></li>
          <li>Ordinul MS/CNAS nr. 868/542/2011 privind modelul unic al biletului de trimitere, cu modificările ulterioare (termene de valabilitate):{" "}<a href="https://legislatie.just.ro/Public/DetaliiDocument/167697" rel="noopener" target="_blank">legislatie.just.ro</a></li>
          <li>Lista furnizorilor CNAS, ambulatoriu clinic, 30.10.2024 (Clinica Dr. Iova, contract CAS Bihor nr. 1389)</li>
        </ol>
        <p className="art-disclaimer">Articol cu scop informativ. Regulile CNAS se modifică periodic; informațiile au fost verificate la 21.10.2026. Pentru situația dumneavoastră, întrebați medicul de familie, CAS Bihor sau recepția clinicii.</p>
      </div>
    </>
  );
}
