"use client";
import type { CSSProperties, Dispatch, SetStateAction } from "react";
import Icon from "@/components/Icon";
import { DOCTORS, channelLabel, docName, filterReqs, fmtDate, svcName, waHref, whoLabel, type Filters } from "@/data/admin";
import { useAdmin } from "./context";
import Badge from "./Badge";

export default function CereriView({ q, f, setF, onReset }: { q: string; f: Filters; setF: Dispatch<SetStateAction<Filters>>; onReset: () => void }) {
  const { reqs, settings, openDrawer } = useAdmin();
  const rows = filterReqs(reqs, q, f);
  const set = (k: keyof Filters) => (e: { target: { value: string } }) => setF((p) => ({ ...p, [k]: e.target.value }));
  return (
    <section className="view" id="view-cereri">
      <div className="filters">
        <label>Status<select id="f-status" value={f.status} onChange={set("status")}><option value="">Toate</option><option value="noua">Nouă</option><option value="confirmata">Confirmată</option><option value="reprogramata">Reprogramată</option><option value="anulata">Anulată</option></select></label>
        <label>Medic<select id="f-doc" value={f.doc} onChange={set("doc")}><option value="">Toți</option>{DOCTORS.map((d) => <option key={d.slug} value={d.slug}>{d.short}</option>)}</select></label>
        <label>Tip<select id="f-type" value={f.type} onChange={set("type")}><option value="">Toate</option><option value="cas">CAS</option><option value="privat">Privat</option></select></label>
        <label>Data<input type="date" id="f-date" value={f.date} onChange={set("date")} /></label>
        <button type="button" className="tbtn" id="f-reset" onClick={onReset}><Icon name="rotate-ccw" /><span>Resetați</span></button>
        <span className="count" id="f-count">{rows.length + (rows.length === 1 ? " cerere" : " cereri")}</span>
      </div>
      <div className="table-wrap">
        <table className="tbl" id="tbl" hidden={!rows.length}>
          <thead><tr><th>Nr.</th><th>Pacient</th><th>Serviciu</th><th>Medic</th><th>Data, ora</th><th>Tip</th><th>Canal</th><th>Status</th><th><span className="sr">Acțiuni</span></th></tr></thead>
          <tbody id="tbody">
            {rows.map((r, i) => (
              <tr key={r.id} data-id={r.id} tabIndex={0} style={{ "--i": Math.min(i, 12) } as CSSProperties}
                onClick={(e) => { if ((e.target as Element).closest("[data-stop]")) return; openDrawer(r.id); }}
                onKeyDown={(e) => { if (e.key === "Enter") openDrawer(r.id); }}>
                <td className="ref">{r.ref}</td>
                <td className="who"><b>{r.name}{r.source === "receptie" && <span className="src">recepție</span>}</b><small>{r.phone + " · " + whoLabel(r)}</small></td>
                <td className="svc">{svcName(r.service)}</td><td className="doc">{docName(r.doctor)}</td>
                <td className="dt">{fmtDate(r.date) + ", " + r.slot}</td>
                <td className="typ"><span className="chip">{r.type === "cas" ? "CAS" : "Privat"}</span></td>
                <td className="ch">{channelLabel(r.channel)}</td>
                <td className="st"><Badge st={r.status} /></td>
                <td className="act">
                  <a href={"tel:" + r.phone.replace(/\s/g, "")} aria-label="Sunați" title="Sunați" data-stop=""><Icon name="phone" /></a>
                  <a href={waHref(r, "confirmare", settings)} target="_blank" rel="noopener" aria-label="WhatsApp" title="WhatsApp" data-stop=""><Icon name="message-circle" /></a>
                  <button type="button" aria-label="Detalii" title="Detalii"><Icon name="chevron-right" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="empty" id="tbl-empty" hidden={!!rows.length}>Nicio cerere pentru filtrele alese.</p>
      </div>
    </section>
  );
}
