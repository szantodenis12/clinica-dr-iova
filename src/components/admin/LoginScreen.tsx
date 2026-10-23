"use client";
import Link from "next/link";
import Icon from "@/components/Icon";

export default function LoginScreen({ onLogin }: { onLogin: () => void }) {
  return (
    <section className="adm-login" id="adm-login" aria-labelledby="h-login">
      <div className="login-card" data-reveal="scale">
        <div className="login-logo"><img src="/img/logo-driova-icon.png" alt="" />Clinica Dr. Iova</div>
        <span className="demo-badge"><Icon name="flask-conical" />Prototip DEMO</span>
        <h1 id="h-login">Panou recepție</h1>
        <p>Acces intern pentru recepție și medici. În acest prototip orice parolă funcționează, iar datele sunt fictive și rămân în acest browser.</p>
        <form id="login-form" noValidate onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <label htmlFor="login-user">Utilizator</label>
          <input id="login-user" type="text" defaultValue="receptie" autoComplete="username" />
          <label htmlFor="login-pass">Parolă</label>
          <input id="login-pass" type="password" placeholder="orice parolă (demo)" autoComplete="current-password" />
          <button type="submit" className="btn btn-dark"><Icon name="log-in" />Intrați</button>
        </form>
        <small className="login-foot"><Icon name="lock" />În producție: parolă + cod 2FA, roluri separate, jurnal de acces.</small>
        <Link className="login-back" href="/">Înapoi la site</Link>
      </div>
    </section>
  );
}
