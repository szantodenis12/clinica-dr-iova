"use client";
import { useState, type CSSProperties } from "react";
import Icon from "@/components/Icon";
import { DOCTORS, REASONS, docName, doctor, getToday, iso, whenText, type Block, type ReasonKey } from "@/data/admin";
import AdmIcon from "./AdmIcon";
import { useAdmin } from "./context";

export default function BlocariView() {
  const { blocks, openBlock, deleteBlock } = useAdmin();
  const TODAY = iso(getToday());
  const [fDoc, setFDoc] = useState("");
  const [when, setWhen] = useState("upcoming");

  const list = blocks.filter((b) => {
    if (fDoc && !(b.doctors.indexOf("all") >= 0 || b.doctors.indexOf(fDoc) >= 0)) return false;
    if (when === "upcoming") { const end = b.kind === "recurent" ? (b.dateEnd || "9999") : (b.dateEnd || b.date); return end >= TODAY; }
    return true;
  }).sort((a, b) => ((a.date || "") < (b.date || "") ? -1 : 1));

  const groups: Record<string, Block[]> = {};
  list.forEach((b) => { (b.doctors.indexOf("all") >= 0 ? ["all"] : b.doctors).forEach((sl) => { (groups[sl] = groups[sl] || []).push(b); }); });
  const order = ["all"].concat(DOCTORS.map((d) => d.slug)).filter((k) => groups[k]);

  return (
    <section className="view" id="view-blocari">
      <div className="filters">
        <label>Medic<select id="bl-doc" value={fDoc} onChange={(e) => setFDoc(e.target.value)}><option value="">Toți medicii</option>{DOCTORS.map((d) => <option key={d.slug} value={d.slug}>{d.short}</option>)}</select></label>
        <label>Perioadă<select id="bl-when" value={when} onChange={(e) => setWhen(e.target.value)}><option value="upcoming">Viitoare</option><option value="all">Toate</option></select></label>
        <span className="count" id="bl-count">{list.length + (list.length === 1 ? " blocare" : " blocări")}</span>
      </div>
      <div className="bl-groups" id="bl-list">
        {order.length ? order.map((k, gi) => {
          const d = doctor(k);
          return (
            <div key={k} className="card bl-group" style={{ "--i": gi } as CSSProperties}>
              <div className="card-head">
                <h2>{d ? <><span className="av"><img src={"/img/avatar/" + d.slug + ".png"} alt="" /></span>{d.name}</> : <><span className="av all"><Icon name="users" /></span>Toți medicii</>}</h2>
                <span className="sub">{groups[k].length + (groups[k].length === 1 ? " interval" : " intervale")}</span>
              </div>
              <ul className="bl-items">
                {groups[k].map((b) => {
                  const R = REASONS[b.reason as ReasonKey];
                  return (
                    <li key={b.id}>
                      <span className="ic"><AdmIcon name={R.icon as never} /></span>
                      <div className="tx"><b>{whenText(b)}</b><small>{R.label + (b.note ? " · " + b.note : "") + (b.doctors.length > 1 && b.doctors.indexOf("all") < 0 ? " · și " + (b.doctors.length - 1) + (b.doctors.length === 2 ? " alt medic" : " alți medici") : "")}</small></div>
                      <div className="act">
                        <button type="button" data-edit={b.id} aria-label="Modificați" title="Modificați" onClick={() => openBlock(b)}><Icon name="pencil" /></button>
                        <button type="button" data-del={b.id} aria-label="Ștergeți" title="Ștergeți" onClick={() => deleteBlock(b.id as string)}><Icon name="trash-2" /></button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        }) : <p className="empty">{"Nicio blocare " + (when === "upcoming" ? "viitoare" : "") + (fDoc ? " pentru " + docName(fDoc) : "") + ". Apăsați „Blochează ore” ca să adăugați una."}</p>}
      </div>
    </section>
  );
}
