"use client";
import { useState } from "react";
import Icon from "@/components/Icon";
import { DOCTORS, KEYS, SERVICES, getSettings, remove, save, type Settings } from "@/data/admin";
import { useAdmin } from "./context";

const WD = ["Luni", "Marți", "Miercuri", "Joi", "Vineri"];
const TPL: [keyof Settings["templates"], string, number][] = [
  ["confirmare", "Confirmare", 4], ["reminder", "Reamintire (cu o zi înainte)", 3], ["reprogramare", "Reprogramare", 3],
];

type Form = { sched: Record<string, string>; svc: Record<string, boolean>; cas: Record<string, string>; tpl: Record<string, string> };

const initForm = (S: Settings): Form => {
  const sched: Record<string, string> = {};
  DOCTORS.forEach((d) => [1, 2, 3, 4, 5].forEach((w) => {
    const h = (S.schedules[d.slug] || {})[w] || ["", ""];
    sched[`${d.slug}|${w}|0`] = String(h[0] ?? ""); sched[`${d.slug}|${w}|1`] = String(h[1] ?? "");
  }));
  const svc: Record<string, boolean> = {};
  SERVICES.filter((s) => s.slug !== "nu-stiu").forEach((s) => { svc[s.slug] = S.services[s.slug] !== false; });
  const cas: Record<string, string> = {};
  DOCTORS.forEach((d) => { cas[d.slug] = String(S.casSlots[d.slug] || 0); });
  return { sched, svc, cas, tpl: { ...S.templates } };
};

export default function SetariView({ onDataReset }: { onDataReset: () => void }) {
  const [ver, setVer] = useState(0);
  const { settings, setSettings, toast } = useAdmin();
  return <SetariForm key={ver} settings={settings} setSettings={setSettings} toast={toast} onDataReset={onDataReset} onReset={() => setVer((v) => v + 1)} />;
}

function SetariForm({ settings, setSettings, toast, onDataReset, onReset }: {
  settings: Settings; setSettings: (s: Settings) => void; toast: ReturnType<typeof useAdmin>["toast"]; onDataReset: () => void; onReset: () => void;
}) {
  const [form, setForm] = useState<Form>(() => initForm(settings));

  const doSave = () => {
    const S = getSettings();
    // same algorithm as the original: walks inputs in DOM order (doctor, weekday, start then end)
    DOCTORS.forEach((d) => [1, 2, 3, 4, 5].forEach((w) => [0, 1].forEach((k) => {
      const val = form.sched[`${d.slug}|${w}|${k}`];
      S.schedules[d.slug] = S.schedules[d.slug] || {};
      const cur = (S.schedules[d.slug][w] || [8, 20]) as [number | null, number | null];
      cur[k] = val === "" ? null : +val;
      S.schedules[d.slug][w] = (cur[0] == null || cur[1] == null || cur[0] >= cur[1]) ? null : cur;
    })));
    Object.keys(form.svc).forEach((s) => { S.services[s] = form.svc[s]; });
    Object.keys(form.cas).forEach((s) => { S.casSlots[s] = +form.cas[s] || 0; });
    (["confirmare", "reminder", "reprogramare"] as const).forEach((k) => { S.templates[k] = form.tpl[k]; });
    save(KEYS.setari, S);
    setSettings(getSettings());
    toast("Setările au fost salvate.");
  };
  const doReset = () => {
    remove(KEYS.setari);
    setSettings(getSettings());
    onReset();
    toast("Setările au revenit la valorile implicite.", "rotate-ccw");
  };

  return (
    <section className="view" id="view-setari">
      <div className="set-grid">
        <div className="card">
          <div className="card-head"><h2>Program medici</h2><span className="sub">ore de început și sfârșit, luni–vineri</span></div>
          <p className="todo">de cerut de la client: programul real al fiecărui medic</p>
          <div className="table-wrap"><table className="tbl sched" id="sched">
            <thead><tr><th>Medic</th>{WD.map((d) => <th key={d}>{d}</th>)}</tr></thead>
            <tbody>
              {DOCTORS.map((d) => (
                <tr key={d.slug}>
                  <td className="dn">{d.short}<small>{d.role}</small></td>
                  {[1, 2, 3, 4, 5].map((w) => (
                    <td key={w}><span className="hrs">
                      <input type="number" min={8} max={20} value={form.sched[`${d.slug}|${w}|0`]} data-d={d.slug} data-w={w} data-k={0} aria-label={`${d.short}, început ${w}`}
                        onChange={(e) => setForm((f) => ({ ...f, sched: { ...f.sched, [`${d.slug}|${w}|0`]: e.target.value } }))} />–
                      <input type="number" min={8} max={20} value={form.sched[`${d.slug}|${w}|1`]} data-d={d.slug} data-w={w} data-k={1} aria-label={`${d.short}, sfârșit ${w}`}
                        onChange={(e) => setForm((f) => ({ ...f, sched: { ...f.sched, [`${d.slug}|${w}|1`]: e.target.value } }))} />
                    </span></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table></div>
        </div>
        <div className="card">
          <div className="card-head"><h2>Servicii afișate în formular</h2><span className="sub">dezactivați ce nu se programează online</span></div>
          <ul className="toggles" id="svc-toggles">
            {SERVICES.filter((s) => s.slug !== "nu-stiu").map((s) => (
              <li key={s.slug}><span>{s.name}</span><label className="switch"><input type="checkbox" data-svc={s.slug} checked={form.svc[s.slug]} aria-label={s.name}
                onChange={(e) => setForm((f) => ({ ...f, svc: { ...f.svc, [s.slug]: e.target.checked } }))} /><span></span></label></li>
            ))}
          </ul>
        </div>
        <div className="card">
          <div className="card-head"><h2>Locuri CAS pe săptămână</h2><span className="sub">per medic</span></div>
          <p className="todo">de cerut de la client: numărul real de consultații CAS pe săptămână</p>
          <ul className="numlist" id="cas-set">
            {DOCTORS.map((d) => (
              <li key={d.slug}><span>{d.short}</span><input type="number" min={0} max={60} value={form.cas[d.slug]} data-cas={d.slug} aria-label={"Locuri CAS " + d.short}
                onChange={(e) => setForm((f) => ({ ...f, cas: { ...f.cas, [d.slug]: e.target.value } }))} /></li>
            ))}
          </ul>
        </div>
        <div className="card">
          <div className="card-head"><h2>Șabloane WhatsApp / SMS</h2><span className="sub">variabile: {"{nume} {data} {ora} {medic} {ref}"}</span></div>
          <p className="note">Mesajele conțin doar date de organizare: nume, dată, oră, adresă. Nu scrieți serviciul, medicul psihiatru sau orice detaliu medical.</p>
          {TPL.map(([k, label, rows]) => (
            <div className="tpl" key={k}><label htmlFor={"tpl-" + k}>{label}</label>
              <textarea id={"tpl-" + k} rows={rows} value={form.tpl[k]} onChange={(e) => setForm((f) => ({ ...f, tpl: { ...f.tpl, [k]: e.target.value } }))} /></div>
          ))}
          <p className="todo">număr WhatsApp Business al clinicii: de cerut de la client</p>
        </div>
      </div>
      <div className="set-actions">
        <button type="button" className="tbtn" id="set-reset" onClick={doReset}><Icon name="rotate-ccw" /><span>Valori implicite</span></button>
        <button type="button" className="tbtn danger" id="data-reset" onClick={onDataReset}><Icon name="trash-2" /><span>Resetați datele demo</span></button>
        <button type="button" className="tbtn primary" id="set-save" onClick={doSave}><Icon name="save" /><span>Salvați setările</span></button>
      </div>
    </section>
  );
}
