import Link from "next/link";
import Icon from "@/components/Icon";

export default function PostBody() {
  return (
    <>
      <div className="pe-scurt" data-reveal="">
        <div className="lbl"><Icon name="zap" />Pe scurt</div>
        <p>Reperele de dezvoltare descriu ce fac majoritatea copiilor (cel puțin 75%) până la o anumită vârstă. După reperele CDC revizuite în 2022: la 1 an copilul face „pa” cu mâna și spune „mama” sau „tata”; la 18 luni încearcă să spună trei sau mai multe cuvinte; la 2 ani alătură două cuvinte („mai lapte”); la 3 ani poartă o conversație scurtă și este înțeles de străini în majoritatea timpului; la 4 ani spune propoziții de patru sau mai multe cuvinte; la 5 ani povestește o întâmplare cu două evenimente. Dacă un copil nu atinge un reper, a pierdut abilități pe care le avea sau nu reacționează la nume, o evaluare logopedică și a dezvoltării este pasul potrivit. Nu se așteaptă „să-i treacă”.</p>
      </div>
      <h2 id="ce-sunt-reperele">Ce sunt reperele de dezvoltare și cum le citiți?</h2>
      <p>Un reper de dezvoltare este o abilitate pe care cei mai mulți copii o au până la o vârstă dată. În 2022, Centrele pentru Controlul și Prevenirea Bolilor din SUA (CDC), împreună cu Academia Americană de Pediatrie, au revizuit lista astfel încât fiecare reper să descrie ce fac cel puțin 75% dintre copii la vârsta respectivă, nu media. Asta are o consecință practică: dacă un copil nu atinge un reper, nu este „puțin în urmă față de medie”, ci face parte din minoritatea care merită o privire mai atentă.</p>
      <p>Reperele nu sunt un test și nu sunt un diagnostic. Sunt un instrument de observare pentru părinți și medici de familie. Un copil se poate dezvolta perfect normal și să atingă un reper puțin mai târziu. Întrebarea este dacă există mai multe repere neatinse, dacă apar și alte semne și, mai ales, dacă copilul a pierdut abilități pe care le avea deja.</p>
      <h2 id="tabel">Ce spune și ce înțelege copilul, vârstă cu vârstă</h2>
      <p>Tabelul de mai jos redă reperele CDC pentru limbaj și comunicare. Am păstrat formularea cât mai apropiată de original.</p>
      <table>
        <thead>
          <tr>
            <th>Până la</th>
            <th>Repere de limbaj și comunicare (CDC, 2022)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12 luni</td>
            <td>Face „pa” cu mâna. Spune „mama”, „tata” sau alt nume special pentru un părinte. Înțelege „nu” (se oprește scurt sau face pauză când îl aude).</td>
          </tr>
          <tr>
            <td>18 luni</td>
            <td>Încearcă să spună trei sau mai multe cuvinte în afară de „mama” și „tata”. Urmează o indicație simplă fără gest („dă-mi jucăria”).</td>
          </tr>
          <tr>
            <td>2 ani</td>
            <td>Arată lucruri într-o carte când este întrebat („unde este ursul?”). Spune cel puțin două cuvinte împreună („mai lapte”). Arată cel puțin două părți ale corpului când i se cere. Folosește și alte gesturi decât „pa” și arătatul cu degetul (trimite un pupic, dă din cap „da”).</td>
          </tr>
          <tr>
            <td>30 luni</td>
            <td>Spune aproximativ 50 de cuvinte. Spune două sau mai multe cuvinte împreună, cu un verb („cuțu fuge”). Numește lucruri dintr-o carte când sunt arătate. Folosește cuvinte ca „eu”, „mie”, „noi”.</td>
          </tr>
          <tr>
            <td>3 ani</td>
            <td>Poartă o conversație cu cel puțin două schimburi de replici. Pune întrebări cu „cine”, „ce”, „unde”, „de ce”. Spune ce acțiune se întâmplă într-o imagine („fuge”, „mâncă”). Își spune prenumele când este întrebat. Vorbește suficient de clar încât ceilalți îl înțeleg în majoritatea timpului.</td>
          </tr>
          <tr>
            <td>4 ani</td>
            <td>Spune propoziții de patru sau mai multe cuvinte. Spune câteva cuvinte dintr-un cântec sau o poezie. Povestește cel puțin un lucru întâmplat în ziua respectivă. Răspunde la întrebări simple („la ce folosește o haină?”).</td>
          </tr>
          <tr>
            <td>5 ani</td>
            <td>Povestește o întâmplare auzită sau inventată, cu cel puțin două evenimente. Răspunde la întrebări simple despre o poveste citită. Ține o conversație cu mai mult de trei schimburi de replici. Folosește sau recunoaște rime simple.</td>
          </tr>
        </tbody>
      </table>
      <p>Reperele de mai sus privesc limbajul. CDC publică și repere pentru zona socială și emoțională, pentru gândire și pentru mișcare, iar logopedul le privește împreună. Un copil care spune puține cuvinte, dar arată cu degetul, aduce lucruri să le arate și răspunde la nume are un alt tablou decât un copil care spune puține cuvinte și nu face niciuna dintre acestea.</p>
      <blockquote className="pull">Înainte de primele cuvinte vin gesturile, privirea și răspunsul la nume. Acolo se uită un specialist mai întâi.</blockquote>
      <h2 id="semne">Ce semne merită o evaluare, indiferent de vârstă?</h2>
      <p>CDC are o regulă simplă în materialele pentru părinți: nu așteptați. Dacă copilul nu atinge unul sau mai multe repere, dacă a pierdut abilități pe care le avea sau dacă există alte îngrijorări, discutați cu medicul și cereți o evaluare a dezvoltării. Câteva semne pe care le întâlnim des în cabinet:</p>
      <ul className="checklist">
        <li>Nu reacționează la nume în mod constant, deși auzul pare bun</li>
        <li>Nu arată cu degetul lucruri care îl interesează, în jurul vârstei de 1 an și după</li>
        <li>Nu folosește gesturi (pa, dă din cap, întinde brațele)</li>
        <li>A spus cuvinte și apoi a încetat să le mai folosească</li>
        <li>La 2 ani nu alătură două cuvinte și nu are un vocabular în creștere</li>
        <li>La 3 ani vorbirea este greu de înțeles pentru persoane din afara familiei</li>
        <li>Repetă cuvinte sau fraze auzite fără să le folosească în context</li>
        <li>Părintele are o îngrijorare pe care nu o poate numi exact</li>
      </ul>
      <p>Ultimul punct nu este o glumă. Părinții petrec cel mai mult timp cu copilul și observă adesea lucruri înainte să le poată descrie. O evaluare este modul corect de a verifica o îngrijorare, nu de a o confirma.</p>
      <h2 id="cauze">De ce întârzie uneori limbajul?</h2>
      <p>Cauzele sunt diverse și, de multe ori, se suprapun. Unele țin de auz: otitele repetate sau o hipoacuzie nedepistată pot încetini dramatic limbajul, motiv pentru care evaluarea auzului este printre primele recomandări. Altele țin de dezvoltarea generală a copilului, de o tulburare de limbaj specifică, de o tulburare de neurodezvoltare sau de contextul în care copilul învață să vorbească.</p>
      <p>Există și „întârzieri simple de limbaj”, în care copilul recuperează fără intervenție. Problema este că, la 2 ani, nu se poate ști dinainte care copil recuperează singur și care nu. De aceea recomandarea profesională este evaluarea timpurie, nu așteptarea. Intervenția timpurie are rezultate mai bune tocmai pentru că prinde o perioadă în care creierul învață limbaj cu o ușurință pe care nu o va mai avea la fel mai târziu.</p>
      <h2 id="evaluarea">Cum decurge o evaluare logopedică la copil mic?</h2>
      <p>Pentru un copil de 2–4 ani, evaluarea arată în mare parte ca o joacă. Logopedul observă cum comunică copilul: dacă se uită la adult, dacă arată, dacă imită sunete și gesturi, cum răspunde la cereri simple, ce înțelege, ce spune și cât de clar. Folosește jucării, cărți ilustrate și, în funcție de vârstă, probe standardizate. Părinții sunt prezenți și sunt întrebați despre istoricul copilului: sarcină, naștere, auz, boli, când au apărut primele cuvinte, ce limbi se vorbesc în casă.</p>
      <p>La final, logopedul explică unde se situează copilul față de repere și ce recomandă: urmărire la 3–6 luni, ședințe de terapie logopedică, evaluarea auzului sau o evaluare mai amplă a dezvoltării, împreună cu psihologul clinician și medicul psihiatru pediatru. La Clinica Dr. Iova, aceste evaluări se fac în aceeași clinică, iar la logopedie se folosește și metoda Forbrain.{" "}<span className="todo">de cerut de la client: durata evaluării logopedice, vârsta minimă, dacă este decontată prin CAS</span></p>
      <p>Pentru copiii cu diagnostic de tulburare din spectrul autist stabilit de medicul psihiatru, CNAS decontează din 01.10.2023, printr-un subprogram național, ședințe de psihoterapie, consiliere psihologică și psihopedagogie specială-logopedie. Detalii în articolul despre{" "}<Link href="/blog/evaluare-psihiatrica-copil-ce-presupune/">evaluarea psihiatrică a copilului</Link>.</p>
      <h2 id="acasa">Ce puteți face acasă, în fiecare zi</h2>
      <ul>
        <li><strong>Vorbiți cu copilul, nu la copil.</strong>{" "}Numiți ce faceți și ce vede el, lăsați pauze în care poate răspunde cu un sunet, un gest sau un cuvânt.</li>
        <li><strong>Citiți împreună</strong>, aceleași cărți, de multe ori. Repetiția este modul în care copiii mici învață cuvinte.</li>
        <li><strong>Extindeți ce spune.</strong>{" "}Dacă spune „mașină”, răspundeți „da, o mașină roșie”.</li>
        <li><strong>Reduceți ecranele.</strong>{" "}OMS recomandă ca sub 2 ani copiii să nu petreacă timp în fața ecranelor, iar între 2 și 4 ani, cel mult o oră pe zi. Limbajul se învață din schimbul cu o persoană care răspunde.</li>
        <li><strong>Nu corectați, modelați.</strong>{" "}În loc de „nu se spune așa”, repetați corect cuvântul într-o propoziție.</li>
      </ul>
      <h2 id="ajutor">Când să cereți ajutor</h2>
      <p>Dacă ați ajuns la finalul acestui articol cu o îngrijorare, pasul potrivit este o discuție cu medicul de familie sau o programare la o evaluare logopedică. Evaluarea nu etichetează copilul. Îi măsoară punctul de plecare și, dacă este nevoie, îi dă un plan.</p>
      <div className="note warn"><b>În caz de urgență sunați la 112.</b>{" "}Pierderea bruscă a vorbirii, a mersului sau a altor abilități, mai ales după o boală cu febră, un traumatism sau o criză, este o urgență medicală, nu o problemă de dezvoltare.</div>
      <section className="art-faq">
        <h2 id="intrebari-frecvente">Întrebări frecvente</h2>
        <div className="faq">
          <details>
            <summary>Copilul meu are 2 ani și spune puține cuvinte. Este normal?<Icon name="chevron-down" /></summary>
            <p>Reperele CDC arată că, până la 2 ani, majoritatea copiilor spun cel puțin două cuvinte împreună și arată lucruri într-o carte când sunt întrebați. Dacă copilul nu face acestea, o evaluare logopedică este un pas rezonabil. Evaluarea nu înseamnă diagnostic, ci o măsurare a punctului în care se află copilul.</p>
          </details>
          <details>
            <summary>Băieții vorbesc mai târziu decât fetele?<Icon name="chevron-down" /></summary>
            <p>Există diferențe statistice mici, dar ele nu explică o întârziere semnificativă. Reperele CDC sunt aceleași pentru băieți și fete, iar o întârziere nu se amână pe motiv de gen.</p>
          </details>
          <details>
            <summary>Bilingvismul întârzie vorbirea?<Icon name="chevron-down" /></summary>
            <p>Copiii crescuți în două limbi își împart vocabularul între ele, așa că în fiecare limbă pot părea să știe mai puține cuvinte. Totalul este de regulă comparabil cu al copiilor monolingvi. La evaluare, logopedul ține cont de ambele limbi.</p>
          </details>
          <details>
            <summary>Ecranele afectează limbajul?<Icon name="chevron-down" /></summary>
            <p>Limbajul se învață prin interacțiune: copilul vorbește cu cineva care îi răspunde. Timpul petrecut pasiv la ecran înlocuiește acest schimb. OMS recomandă ca copiii sub 2 ani să nu petreacă timp în fața ecranelor, iar între 2 și 4 ani, cel mult o oră pe zi.</p>
          </details>
          <details>
            <summary>Cu ce începem: logoped, psiholog sau psihiatru pediatru?<Icon name="chevron-down" /></summary>
            <p>Dacă singura îngrijorare este vorbirea, logopedul este primul pas. Dacă apar și semne în zona contactului vizual, a jocului sau a răspunsului la nume, evaluarea se face împreună cu psihologul și psihiatrul pediatru. La Clinica Dr. Iova toți trei lucrează în aceeași clinică.</p>
          </details>
        </div>
      </section>
      <div className="surse">
        <h2>Surse</h2>
        <ol>
          <li>CDC, „Learn the Signs. Act Early.&quot;, reperele de dezvoltare revizuite 2022, paginile pentru 1 an, 18 luni, 2 ani, 30 de luni, 3, 4 și 5 ani:{" "}<a href="https://www.cdc.gov/ncbddd/actearly/milestones/index.html" rel="noopener" target="_blank">cdc.gov</a></li>
          <li>Zubler JM et al., „Evidence-Informed Milestones for Developmental Surveillance Tools&quot;, Pediatrics, 2022 (pragul de 75% pentru reperele CDC/AAP)</li>
          <li>Organizația Mondială a Sănătății, „Guidelines on physical activity, sedentary behaviour and sleep for children under 5 years of age&quot;, 2019 (recomandări privind timpul la ecran)</li>
          <li>CNAS, Subprogramul național de servicii conexe pentru persoanele cu tulburări din spectrul autist, în vigoare din 01.10.2023 (Ordinul 1857/441/2023, Anexa 7, notă la lit. c)</li>
        </ol>
        <p className="art-disclaimer">Articol cu scop informativ, scris de echipa clinicii. Nu înlocuiește evaluarea copilului de către un specialist.</p>
      </div>
    </>
  );
}
