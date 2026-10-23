"use client";
import Icon, { type IconName } from "@/components/Icon";
import type { ViewKey } from "@/data/admin";

const NAV: [ViewKey, IconName, string][] = [
  ["panou", "layout-dashboard", "Panou"],
  ["cereri", "inbox", "Cereri"],
  ["calendar", "calendar-days", "Calendar"],
  ["blocari", "calendar-off", "Blocări"],
  ["setari", "settings", "Setări"],
];

export default function Sidebar({ view, newCount, onLogout }: { view: ViewKey; newCount: number; onLogout: () => void }) {
  return (
    <aside className="adm-side">
      <a className="adm-brand" href="/admin/"><img src="/img/logo-driova-icon.png" alt="" />Clinica Dr. Iova</a>
      <nav className="adm-nav" aria-label="Secțiuni">
        {NAV.map(([v, ic, label]) => (
          <a key={v} href={"#/" + v} data-view={v} className={view === v ? "is-active" : undefined}>
            <Icon name={ic} /><span>{label}</span>
            {v === "cereri" && <b className="cnt" id="nav-cnt">{newCount || ""}</b>}
          </a>
        ))}
      </nav>
      <div className="adm-user">
        <span className="av"><Icon name="user-round" /></span>
        <div><b>Recepție</b><small>rol: recepție (demo)</small></div>
        <button type="button" id="btn-logout" aria-label="Deconectare" title="Deconectare" onClick={onLogout}><Icon name="log-out" /></button>
      </div>
    </aside>
  );
}
