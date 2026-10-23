import "@/styles/info.css";
import "@/styles/mobile.css"; // always last
import { buildMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Icon from "@/components/Icon";

const route = getRoute("/confidentialitate/");

export const metadata = buildMetadata({ title: route.title, description: route.description, path: route.path });

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Politica de confidențialitate",
  url: "https://clinicadriova.ro/confidentialitate/",
  inLanguage: "ro",
  isPartOf: { "@id": "https://clinicadriova.ro/#clinica" },
  dateModified: "2026-10-21",
};

export default function ConfidentialitatePage() {
  return (
    <>
      <Breadcrumbs items={[["Politica de confidențialitate", "/confidentialitate/"]]} />
      <JsonLd data={webPageSchema} />

      <header className="phead">
        <div data-reveal="">
          <div className="kicker">Documente legale</div>
          <h1>Politica de confidențialitate</h1>
          <p className="intro">
            Cum prelucrează Cabinete de Psihiatrie Dr. Iova S.R.L. datele dumneavoastră personale, inclusiv datele privind sănătatea, atunci când folosiți site-ul, formularul de programare, WhatsApp-ul recepției sau veniți la clinică.
          </p>
        </div>
      </header>

      <div className="draft-banner" data-reveal="">
        <div className="in">
          <Icon name="file-warning" />
          <div>
            <b>Draft pentru revizuire juridică</b>Acest text este o propunere pregătită pentru machetă. Înainte de publicare trebuie verificat de un consilier juridic sau de responsabilul cu protecția datelor al clinicii, iar câmpurile marcate „de cerut de la client” trebuie completate.
          </div>
        </div>
      </div>

      <div className="legal">
        <aside className="toc" data-reveal="fade">
          <div className="lbl">Cuprins</div>
          <ol>
            <li>
              <a href="#operator">1. Operatorul</a>
            </li>
            <li>
              <a href="#date">2. Ce date prelucrăm</a>
            </li>
            <li>
              <a href="#scopuri">3. Scopuri și temeiuri</a>
            </li>
            <li>
              <a href="#sanatate">4. Datele privind sănătatea</a>
            </li>
            <li>
              <a href="#formular">5. Formularul de programare</a>
            </li>
            <li>
              <a href="#whatsapp">6. WhatsApp și telefon</a>
            </li>
            <li>
              <a href="#cookie">7. Cookie-uri și măsurare</a>
            </li>
            <li>
              <a href="#destinatari">8. Cui transmitem datele</a>
            </li>
            <li>
              <a href="#pastrare">9. Cât păstrăm datele</a>
            </li>
            <li>
              <a href="#drepturi">10. Drepturile dumneavoastră</a>
            </li>
            <li>
              <a href="#minori">11. Datele copiilor</a>
            </li>
            <li>
              <a href="#securitate">12. Securitate</a>
            </li>
            <li>
              <a href="#anspdcp">13. Plângeri: ANSPDCP</a>
            </li>
            <li>
              <a href="#modificari">14. Modificări</a>
            </li>
          </ol>
        </aside>

        <div className="prose" data-reveal="">
          <h2 id="operator">1. Cine este operatorul datelor</h2>
          <p>
            Operatorul este <strong>Cabinete de Psihiatrie Dr. Iova S.R.L.</strong>, CUI 46237987, cu sediul în Oradea, Str. Ceyrat nr. 31, bl. WR12, județul Bihor („clinica”, „noi”). Ne puteți contacta la{" "}
            <a href="mailto:receptie@clinicadriova.ro">receptie@clinicadriova.ro</a> sau la 0359 450 657.
          </p>
          <p>
            Responsabilul cu protecția datelor (DPO): <span className="todo">de cerut de la client: dacă există DPO desemnat, nume și adresă de e-mail dedicată</span>
          </p>
          <p>
            Această politică se aplică site-ului clinicadriova.ro, formularului de programare, comunicării prin telefon, e-mail și WhatsApp, precum și datelor colectate la recepție. Prelucrarea datelor medicale în cadrul actului medical propriu-zis (fișa pacientului, rețete, scrisori medicale) este reglementată și de legislația specifică din sănătate și face obiectul informării pe care o primiți la clinică.
          </p>

          <h2 id="date">2. Ce date prelucrăm</h2>
          <table>
            <thead>
              <tr>
                <th>Categorie</th>
                <th>Exemple</th>
                <th>De unde provin</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Date de identificare și contact</td>
                <td>Nume, prenume, telefon, e-mail, data nașterii, CNP (doar la clinică, pentru validarea serviciilor CAS)</td>
                <td>De la dumneavoastră, prin formular, telefon, WhatsApp sau la recepție</td>
              </tr>
              <tr>
                <td>Date despre programare</td>
                <td>Specialitatea sau medicul dorit, dacă veniți prin CAS sau privat, intervalul preferat, mesajul liber</td>
                <td>Formularul de programare, telefon, WhatsApp</td>
              </tr>
              <tr>
                <td>Date privind sănătatea</td>
                <td>Motivul vizitei pe scurt (dacă alegeți să îl scrieți), bilet de trimitere, documente medicale, informații din consultație</td>
                <td>De la dumneavoastră și din actul medical</td>
              </tr>
              <tr>
                <td>Date pentru copii</td>
                <td>Numele și vârsta copilului, datele părintelui sau ale reprezentantului legal</td>
                <td>De la părinte sau reprezentantul legal</td>
              </tr>
              <tr>
                <td>Date tehnice</td>
                <td>Adresa IP, tipul dispozitivului și al browserului, paginile vizitate, cookie-uri</td>
                <td>Automat, la vizitarea site-ului (măsurarea doar cu consimțământ)</td>
              </tr>
            </tbody>
          </table>
          <p>
            Formularul de programare <strong>nu cere diagnosticul</strong> și nu vă cere să descrieți simptome. Câmpul de mesaj este opțional. Vă rugăm să nu transmiteți detalii medicale prin e-mail sau WhatsApp; ele se discută la consultație.
          </p>

          <h2 id="scopuri">3. Scopurile și temeiurile prelucrării</h2>
          <table>
            <thead>
              <tr>
                <th>Scop</th>
                <th>Temei legal (GDPR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Preluarea și confirmarea programărilor, reprogramări, reamintiri</td>
                <td>Art. 6 alin. (1) lit. b): demersuri la cererea dumneavoastră înainte de încheierea contractului de servicii medicale</td>
              </tr>
              <tr>
                <td>Acordarea serviciilor medicale, întocmirea documentelor medicale</td>
                <td>Art. 9 alin. (2) lit. h) coroborat cu art. 6 alin. (1) lit. c) și legislația din sănătate (Legea nr. 95/2006, Legea nr. 46/2003 privind drepturile pacientului)</td>
              </tr>
              <tr>
                <td>Decontarea serviciilor prin CAS, raportări către casa de asigurări</td>
                <td>Art. 6 alin. (1) lit. c) și art. 9 alin. (2) lit. h): obligații legale ale furnizorului de servicii medicale aflat în contract cu CAS</td>
              </tr>
              <tr>
                <td>Informațiile medicale pe care alegeți să le scrieți în formular sau în mesaje</td>
                <td>Art. 9 alin. (2) lit. a): consimțământul dumneavoastră explicit, exprimat prin bifa separată din formular</td>
              </tr>
              <tr>
                <td>Răspuns la întrebări, solicitări, reclamații</td>
                <td>Art. 6 alin. (1) lit. f): interesul nostru legitim de a răspunde solicitărilor</td>
              </tr>
              <tr>
                <td>Cookie-uri de măsurare a traficului</td>
                <td>Art. 6 alin. (1) lit. a): consimțământ, prin bannerul de cookie-uri</td>
              </tr>
              <tr>
                <td>Obligații fiscale, contabile, de arhivare</td>
                <td>Art. 6 alin. (1) lit. c): obligație legală</td>
              </tr>
            </tbody>
          </table>

          <h2 id="sanatate">4. Datele privind sănătatea</h2>
          <p>
            Datele privind sănătatea sunt o categorie specială de date (art. 9 GDPR). Le prelucrăm numai în măsura necesară acordării serviciilor medicale, de către personal medical și administrativ supus secretului profesional, și pentru obligațiile legale legate de decontarea prin CAS și de arhivarea documentelor medicale.
          </p>
          <p>
            Pe site, nu colectăm date privind sănătatea fără consimțământul dumneavoastră explicit. Formularul de programare conține o bifă separată pentru situația în care alegeți să scrieți informații medicale în câmpul de mesaj. Fără această bifă, formularul se poate trimite doar cu datele de contact și cu specialitatea dorită.
          </p>
          <p>
            Simpla vizitare a paginilor despre afecțiuni sau servicii de pe un site medical poate spune ceva despre starea de sănătate a vizitatorului. Din acest motiv, nu folosim instrumente de publicitate (de exemplu pixeli de urmărire) pe paginile dedicate afecțiunilor și nu activăm nicio măsurare a traficului fără consimțământul dumneavoastră.
          </p>

          <h2 id="formular">5. Formularul de programare</h2>
          <p>
            Datele trimise prin formular ajung la recepția clinicii și sunt folosite exclusiv pentru a vă contacta și a stabili programarea. Nu sunt folosite în scop de marketing. Cererea de programare nu este o programare confirmată: recepția vă contactează telefonic sau prin mesaj pentru confirmare.
          </p>
          <p>
            Formularul este găzduit pe <span className="todo">de cerut de la client / dezvoltator: platforma de găzduire și, dacă există, serviciul terț care procesează trimiterile (nume, sediu, acord de prelucrare)</span>. Datele din formular sunt șterse sau anonimizate după finalizarea programării, în termenul indicat la secțiunea 9.
          </p>

          <h2 id="whatsapp">6. WhatsApp și telefon</h2>
          <p>
            Dacă ne scrieți pe WhatsApp, conversația este procesată de WhatsApp (Meta Platforms Ireland Ltd.), conform politicii sale de confidențialitate, iar unele date pot fi transferate în afara Uniunii Europene, în condițiile mecanismelor prevăzute de GDPR. Folosim WhatsApp numai pentru programări și întrebări administrative. Vă rugăm să nu transmiteți pe WhatsApp diagnostice, documente medicale sau descrieri ale simptomelor; acestea se discută la consultație.
          </p>
          <p>
            Apelurile telefonice la recepție nu sunt înregistrate. <span className="todo">de confirmat cu clinica</span>
          </p>

          <h2 id="cookie">7. Cookie-uri și măsurarea traficului</h2>
          <p>Site-ul folosește două categorii de cookie-uri și tehnologii similare:</p>
          <ul>
            <li>
              <strong>Strict necesare</strong>: păstrează preferința dumneavoastră privind cookie-urile și asigură funcționarea de bază a site-ului. Nu necesită consimțământ.
            </li>
            <li>
              <strong>De măsurare (statistice)</strong>: ne ajută să înțelegem câți vizitatori avem și ce pagini sunt citite. Se activează <strong>numai după ce acceptați</strong> din bannerul de cookie-uri. Dacă refuzați, site-ul funcționează la fel. <span className="todo">de cerut de la client / dezvoltator: instrumentul de măsurare ales (de exemplu, o soluție fără cookie-uri sau cu IP anonimizat), furnizorul și durata cookie-urilor</span>
            </li>
          </ul>
          <p>
            Nu folosim cookie-uri de publicitate și nu transmitem date despre vizitatori către rețele de publicitate. Vă puteți schimba alegerea oricând din linkul „Setări cookie-uri” din josul paginii. <span className="todo">de implementat: bannerul de consimțământ și linkul de setări</span>
          </p>
          <p>
            Harta de pe pagina de contact este încărcată de Google Maps (Google Ireland Ltd.). La afișarea hărții, Google poate seta cookie-uri proprii și poate prelucra adresa IP conform politicii sale. <span className="todo">de decis la implementare: încărcarea hărții doar după consimțământ sau înlocuirea cu o imagine statică și link</span>
          </p>

          <h2 id="destinatari">8. Cui transmitem datele</h2>
          <ul>
            <li>
              <strong>Casa de Asigurări de Sănătate Bihor</strong> și sistemele informatice CNAS, pentru validarea și decontarea serviciilor medicale acordate prin CAS;
            </li>
            <li>
              <strong>Medicul de familie</strong> sau alți medici implicați în îngrijirea dumneavoastră, prin scrisoare medicală, conform legii;
            </li>
            <li>
              <strong>Furnizori de servicii</strong> care lucrează pentru noi pe baza unor contracte de prelucrare: găzduire web, soluția de programări, e-mail, contabilitate <span className="todo">de cerut de la client: lista furnizorilor</span>;
            </li>
            <li>
              <strong>Autorități publice</strong>, atunci când legea ne obligă (instanțe, organe de control, Colegiul Medicilor, ANSPDCP).
            </li>
          </ul>
          <p>
            Nu vindem date personale și nu le transmitem în scop de marketing către terți. Transferuri în afara Uniunii Europene au loc doar prin furnizori care oferă garanțiile prevăzute de GDPR (de exemplu, WhatsApp, Google), în măsura în care alegeți să folosiți aceste canale.
          </p>

          <h2 id="pastrare">9. Cât timp păstrăm datele</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Durată</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cereri de programare neconfirmate sau anulate</td>
                <td>
                  Până la 30 de zile de la trimitere <span className="todo">de confirmat</span>
                </td>
              </tr>
              <tr>
                <td>Date de contact ale pacienților</td>
                <td>Pe durata relației cu clinica și apoi conform termenelor de arhivare a documentelor medicale</td>
              </tr>
              <tr>
                <td>Documente medicale (fișa pacientului, documente CAS)</td>
                <td>
                  Termenele prevăzute de legislația din sănătate și de normele de arhivare <span className="todo">de completat de consilierul juridic: termenele exacte aplicabile ambulatoriului de specialitate</span>
                </td>
              </tr>
              <tr>
                <td>Documente financiar-contabile</td>
                <td>Termenele prevăzute de legislația fiscală și contabilă</td>
              </tr>
              <tr>
                <td>Conversații WhatsApp</td>
                <td>
                  Șterse după finalizarea programării <span className="todo">de confirmat procedura internă</span>
                </td>
              </tr>
              <tr>
                <td>Cookie-uri de măsurare</td>
                <td>Conform duratei indicate în bannerul de cookie-uri</td>
              </tr>
            </tbody>
          </table>

          <h2 id="drepturi">10. Drepturile dumneavoastră</h2>
          <p>În legătură cu datele dumneavoastră, aveți următoarele drepturi, în condițiile GDPR:</p>
          <ul>
            <li>
              <strong>Acces</strong>: să aflați ce date prelucrăm despre dumneavoastră și să primiți o copie;
            </li>
            <li>
              <strong>Rectificare</strong>: să corectați datele inexacte sau incomplete;
            </li>
            <li>
              <strong>Ștergere</strong>, în cazurile prevăzute de lege (nu se aplică documentelor medicale pe durata obligației legale de păstrare);
            </li>
            <li>
              <strong>Restricționarea prelucrării</strong>, în anumite situații;
            </li>
            <li>
              <strong>Portabilitate</strong>: să primiți datele furnizate de dumneavoastră într-un format structurat, atunci când prelucrarea se bazează pe consimțământ sau contract;
            </li>
            <li>
              <strong>Opoziție</strong> față de prelucrările bazate pe interes legitim;
            </li>
            <li>
              <strong>Retragerea consimțământului</strong>, oricând, fără a afecta prelucrările anterioare;
            </li>
            <li>
              <strong>Plângere</strong> la autoritatea de supraveghere (secțiunea 13).
            </li>
          </ul>
          <p>
            Pentru exercitarea drepturilor, scrieți-ne la <a href="mailto:receptie@clinicadriova.ro">receptie@clinicadriova.ro</a> sau depuneți o cerere la recepție. Răspundem în cel mult o lună; termenul poate fi prelungit cu două luni în cazuri complexe, cu informarea dumneavoastră. Pentru protecția datelor, putem cere verificarea identității. Accesul la documentele medicale se face și conform Legii nr. 46/2003 privind drepturile pacientului.
          </p>

          <h2 id="minori">11. Datele copiilor</h2>
          <p>
            Programarea și consultația unui copil sub 18 ani se fac prin părinte sau reprezentantul legal, care furnizează datele și își exprimă consimțământul acolo unde este necesar. Datele copilului sunt prelucrate în același cadru de confidențialitate ca ale adulților. Adolescenții au dreptul la o discuție confidențială cu medicul, în limitele prevăzute de lege și de deontologia medicală.
          </p>

          <h2 id="securitate">12. Securitatea datelor</h2>
          <p>
            Aplicăm măsuri tehnice și organizatorice pentru protecția datelor: acces la datele medicale doar pentru personalul implicat în îngrijire și administrare, obligația de confidențialitate a angajaților și colaboratorilor, transmisie criptată (HTTPS) pentru site și formular, parole și drepturi de acces diferențiate, copii de siguranță. În cazul unui incident de securitate care vă poate afecta, vă informăm și notificăm ANSPDCP în termenele prevăzute de lege.
          </p>

          <h2 id="anspdcp">13. Plângeri: Autoritatea Națională de Supraveghere</h2>
          <p>
            Dacă considerați că drepturile dumneavoastră au fost încălcate, vă puteți adresa Autorității Naționale de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP): B-dul G-ral. Gheorghe Magheru nr. 28–30, Sector 1, cod poștal 010336, București; telefon +40 318 059 211 / +40 318 059 212; e-mail{" "}
            <a href="mailto:anspdcp@dataprotection.ro">anspdcp@dataprotection.ro</a>;{" "}
            <a href="https://www.dataprotection.ro" target="_blank" rel="noopener">
              www.dataprotection.ro
            </a>
            . Vă încurajăm să ne scrieți mai întâi nouă, ca să putem rezolva problema direct.
          </p>

          <h2 id="modificari">14. Modificări ale politicii</h2>
          <p>
            Putem actualiza această politică atunci când se schimbă serviciile, furnizorii sau legislația. Versiunea curentă este publicată pe această pagină, cu data ultimei actualizări. Ultima actualizare: 21.10.2026 (draft).
          </p>
          <p className="art-disclaimer">
            Temeiuri: Regulamentul (UE) 2016/679 (GDPR); Legea nr. 190/2018 privind măsuri de punere în aplicare a GDPR; Legea nr. 95/2006 privind reforma în domeniul sănătății; Legea nr. 46/2003 privind drepturile pacientului; Legea nr. 506/2004 privind prelucrarea datelor cu caracter personal și protecția vieții private în sectorul comunicațiilor electronice (cookie-uri).
          </p>
        </div>
      </div>

      <section className="cta-band">
        <div className="in" data-reveal="scale">
          <div>
            <h2>Întrebări despre datele dumneavoastră?</h2>
            <p>Scrieți-ne la receptie@clinicadriova.ro sau sunați la recepție, de luni până vineri, între 08:00 și 20:00.</p>
          </div>
          <div className="ctas">
            <a className="btn btn-light" href="mailto:receptie@clinicadriova.ro">
              <Icon name="mail" />
              receptie@clinicadriova.ro
            </a>
            <a className="btn btn-ghost" href="tel:+40359450657">
              <Icon name="phone" />
              0359 450 657
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
