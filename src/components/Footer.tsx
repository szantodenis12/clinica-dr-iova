import Link from "next/link";
import Icon from "./Icon";
import FooterWordmark from "./FooterWordmark";
import CookieSettingsButton from "./CookieSettingsButton";

export default function Footer() {
  return (
    <footer id="contact-footer" className="ft">
      <span className="ft-glow g1" aria-hidden="true"></span>
      <span className="ft-glow g2" aria-hidden="true"></span>
      <div className="ft-in">
        <div className="ft-top">
          <div className="ft-intro">
            <Link className="ft-logo" href="/">
              <img src="/img/logo-driova-icon.png" alt="" />
              Clinica Dr. Iova
            </Link>
            <p className="ft-say">Trei generații. Nevoi diferite. O singură clinică, în Oradea.</p>
            <div className="ft-ctas">
              <Link className="btn btn-light" href="/programare/">
                <Icon name="calendar" />
                Programare online
              </Link>
              <a className="btn btn-ghost" href="tel:+40359450657">
                <Icon name="phone" />
                0359 450 657
              </a>
            </div>
          </div>
          <div className="ft-card">
            <div className="ft-row">
              <Icon name="map-pin" />
              <div>
                <small>Adresă</small>Str. Ceyrat nr. 31, bl. WR12, Oradea
              </div>
            </div>
            <div className="ft-row">
              <Icon name="mail" />
              <div>
                <small>E-mail</small>
                <a href="mailto:receptie@clinicadriova.ro">receptie@clinicadriova.ro</a>
              </div>
            </div>
            <div className="ft-row">
              <Icon name="clock" />
              <div>
                <small>Program</small>
                <span className="ft-hours">
                  <span>Luni–vineri</span>
                  <b>08:00–20:00</b>
                  <span>Sâmbătă–duminică</span>
                  <b>Închis</b>
                </span>
              </div>
            </div>
            <div className="ft-urg">
              <Icon name="siren" />
              În caz de urgență sunați la <b>112</b>
            </div>
          </div>
        </div>
        <div className="ft-cols">
          <div>
            <h4>Clinica</h4>
            <ul>
              <li><Link href="/despre/">Despre clinică</Link></li>
              <li><Link href="/medici/">Medici</Link></li>
              <li><Link href="/blog/">Articole</Link></li>
              <li><Link href="/contact/">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Psihiatrie și neurologie</h4>
            <ul>
              <li><Link href="/servicii/psihiatrie-adulti/">Psihiatrie adulți</Link></li>
              <li><Link href="/servicii/psihiatrie-pediatrica/">Psihiatrie pediatrică</Link></li>
              <li><Link href="/servicii/neurologie/">Neurologie</Link></li>
              <li><Link href="/servicii/consultatii-cas/">Consultații prin CAS</Link></li>
            </ul>
          </div>
          <div>
            <h4>Psihologie și terapie</h4>
            <ul>
              <li><Link href="/servicii/psihologie-clinica/">Psihologie clinică</Link></li>
              <li><Link href="/servicii/psihoterapie-integrativa/">Psihoterapie</Link></li>
              <li><Link href="/servicii/logopedie/">Logopedie</Link></li>
              <li><Link href="/servicii/evaluarea-copiilor/">Evaluarea copiilor</Link></li>
            </ul>
          </div>
          <div>
            <h4>Pentru pacienți</h4>
            <ul>
              <li><Link href="/programare/">Programare online</Link></li>
              <li><Link href="/cas/">Ghid programare CAS</Link></li>
              <li><Link href="/servicii/evaluari-comisii/">Evaluări pentru comisii</Link></li>
              <li><Link href="/servicii/aviz-psihologic-port-arma/">Aviz port-armă</Link></li>
            </ul>
          </div>
        </div>
        <FooterWordmark />
        <div className="flegal">
          <span>© 2026 Cabinete de Psihiatrie Dr. Iova S.R.L. · CUI 46237987</span>
          <nav aria-label="Informații legale">
            <Link href="/confidentialitate/">Confidențialitate</Link>
            <Link href="/cookies/">Cookie-uri</Link>
            <Link href="/termeni/">Termeni și condiții</Link>
            <CookieSettingsButton />
            <a href="https://reclamatiisal.anpc.ro/" target="_blank" rel="noopener">ANPC · SAL</a>
          </nav>
          <a className="made" href="https://epicdigitalhub.ro" target="_blank" rel="noopener">
            <span>Realizat de</span>
            <b>Epic Digital Hub</b>
            <Icon name="arrow-up-right" />
          </a>
        </div>
      </div>
    </footer>
  );
}
