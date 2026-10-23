"use client";
import Icon from "@/components/Icon";
import { VIEWS, type ViewKey } from "@/data/admin";
import { useAdmin } from "./context";

export default function TopBar({ view, q, onSearch, onExport }: { view: ViewKey; q: string; onSearch: (v: string) => void; onExport: () => void }) {
  const { openBlock } = useAdmin();
  return (
    <header className="adm-top">
      <div><h1 id="view-title">{VIEWS[view][0]}</h1><p id="view-sub" className="sub">{VIEWS[view][1]}</p></div>
      <div className="top-actions">
        <label className="search"><Icon name="search" /><input type="search" id="q" placeholder="Căutați nume, telefon, număr cerere" aria-label="Căutare" value={q} onChange={(e) => onSearch(e.target.value)} /></label>
        <button type="button" className="tbtn" id="btn-export" hidden={view === "setari" || view === "blocari"} onClick={onExport}><Icon name="download" /><span>Export CSV</span></button>
        <button type="button" className="tbtn primary" id="btn-appt" onClick={() => openBlock({ reason: "programare" })}><Icon name="calendar-plus" /><span>Programare pacient</span></button>
        <button type="button" className="tbtn" id="btn-block" onClick={() => openBlock()}><Icon name="calendar-off" /><span>Blochează ore</span></button>
        <a className="tbtn primary" href="/programare/" target="_blank" rel="noopener"><Icon name="plus" /><span>Cerere nouă</span></a>
      </div>
    </header>
  );
}
