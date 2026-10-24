"use client";

import { Fragment, useCallback, useEffect, useRef, useState, type CSSProperties, type FormEvent } from "react";
import { flushSync } from "react-dom";
import SiteLink from "@/components/SiteLink";
import Icon from "@/components/Icon";
import Todo from "@/components/Todo";
import { isDemo } from "@/lib/site-mode";
import { waLink } from "@/lib/whatsapp";
import { scrollToTarget } from "@/lib/motion";
import {
  DOCTORS,
  MONTHS,
  SERVICES,
  dayBlocked,
  fmtDate,
  fmtLong,
  getDoctor,
  getRequests,
  getService,
  getSettings,
  iso,
  newRef,
  pad,
  saveRequests,
  slotsFor,
  type BookingRequest,
  type Settings,
} from "@/data/programare";

type Dir = "fwd" | "back";
type Who = "me" | "child" | "other" | null;
type ContactErrors = Partial<Record<"name" | "phone" | "email" | "c1" | "c2", string>>;

const STEP_IDS = ["who", "service", "doctor", "type", "when", "contact"] as const;
const LABELS = ["Pentru cine", "Serviciu", "Medic", "Tip consultație", "Dată și interval", "Date de contact"];
const N = STEP_IDS.length;
const AGES = Array.from({ length: 18 }, (_, i) => String(i));

const validPhone = (v: string) => /^(\+40|0040|0)[237]\d{8}$/.test(v.replace(/[\s.\-()]/g, ""));

function startOfToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

function downloadIcs(r: BookingRequest) {
  const date = r.date as string;
  const slot = r.slot as string;
  const st = date.replace(/-/g, "") + "T" + slot.replace(":", "") + "00";
  const h = +slot.slice(0, 2);
  const m = +slot.slice(3);
  const end = new Date(2000, 0, 1, h, m + 60);
  const et = date.replace(/-/g, "") + "T" + pad(end.getHours()) + pad(end.getMinutes()) + "00";
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Clinica Dr. Iova//Programare//RO",
    "BEGIN:VEVENT",
    "UID:" + r.ref + "@clinicadriova.ro",
    "DTSTAMP:" + new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d+Z$/, "Z"),
    "DTSTART:" + st,
    "DTEND:" + et,
    "SUMMARY:Clinica Dr. Iova: programare (de confirmat de recepție)",
    "LOCATION:Str. Ceyrat nr. 31\\, bl. WR12\\, Oradea",
    "DESCRIPTION:Cerere " + r.ref + ". Recepția confirmă telefonic. Telefon 0359 450 657.",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar;charset=utf-8" }));
  a.download = "programare-" + r.ref + ".ics";
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    URL.revokeObjectURL(a.href);
    a.remove();
  }, 500);
}

export default function BookingFlow() {
  // ---- wizard state (was the `state` object)
  const [who, setWho] = useState<Who>(null);
  const [childAge, setChildAge] = useState("");
  const [service, setService] = useState<string | null>(null);
  const [doctor, setDoctor] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [slot, setSlot] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [channel, setChannel] = useState("telefon");
  const [c1, setC1] = useState(false);
  const [c2, setC2] = useState(false);

  // ---- UI state
  const [S, setS] = useState<Settings | null>(null);
  const [today] = useState(startOfToday);
  const [cur, setCur] = useState(0);
  const [enter, setEnter] = useState<{ idx: number; dir: Dir } | null>(null);
  const [leave, setLeave] = useState<{ idx: number; dir: Dir } | null>(null);
  const [hint, setHint] = useState("");
  const [errs, setErrs] = useState<ContactErrors>({});
  const [maxStep, setMaxStep] = useState(0); // furthest step reached (the original renders step content lazily on entry)
  const [view, setView] = useState<Date | null>(null);
  const [bar, setBar] = useState(0);
  const [nav, setNav] = useState(0);
  const [doneReq, setDoneReq] = useState<BookingRequest | null>(null);
  const [isIn, setIsIn] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const ageRef = useRef<HTMLSelectElement>(null);
  const h2Refs = useRef<(HTMLHeadingElement | null)[]>([]);
  const doneH2Ref = useRef<HTMLHeadingElement>(null);
  const fieldRefs = useRef<Partial<Record<keyof ContactErrors, HTMLInputElement | HTMLTextAreaElement | null>>>({});
  const reduceRef = useRef(false);
  const timers = useRef<number[]>([]);
  const goRef = useRef<(i: number, dir?: Dir) => void>(() => {});

  const later = useCallback((fn: () => void, ms: number) => {
    timers.current.push(window.setTimeout(fn, ms));
  }, []);
  const delay = () => (reduceRef.current ? 0 : 260);

  // ---- init (settings, reduced motion, query string, progress bar kick-off)
  useEffect(() => {
    reduceRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const settings = getSettings();
    const q = new URLSearchParams(location.search);
    const qs = q.get("serviciu");
    const qm = q.get("medic");
    /* eslint-disable react-hooks/set-state-in-effect */
    setS(settings);
    if (qs === "consultatii-cas") setType("cas");
    else if (qs && getService(qs) && settings.services[qs]) setService(qs);
    if (qm && getDoctor(qm)) setDoctor(qm);
    /* eslint-enable react-hooks/set-state-in-effect */
    later(() => setBar((0.5 / N) * 100), 300);
    const list = timers.current;
    return () => {
      list.forEach((id) => window.clearTimeout(id));
      list.length = 0;
    };
  }, [later]);

  // ---- derived
  const selService = getService(service);
  const selDoctor = doctor && doctor !== "any" ? getDoctor(doctor) : undefined;
  const casNote = !!(type === "cas" && selDoctor && selDoctor.casMinDays);

  const minDate = () => {
    const d = new Date(today);
    d.setDate(d.getDate() + (type === "cas" && selDoctor && selDoctor.casMinDays ? selDoctor.casMinDays : 1));
    return d;
  };
  const maxDate = () => {
    const d = new Date(today);
    d.setDate(d.getDate() + 120);
    return d;
  };

  // ---- contact validation
  const validateContact = () => {
    const e: ContactErrors = {};
    if (name.trim().length < 3) e.name = "Scrieți numele și prenumele.";
    if (!validPhone(phone)) e.phone = "Scrieți un număr de telefon valid din România, de exemplu 0745 123 456.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Adresa de e-mail nu pare corectă.";
    if (!c1) e.c1 = "Pentru a prelua cererea avem nevoie de acordul dumneavoastră.";
    if (!c2) e.c2 = "Programarea la o clinică de psihiatrie este o informație despre sănătate. Avem nevoie de acordul dumneavoastră explicit.";
    setErrs(e);
    const first = (["name", "phone", "email", "c1", "c2"] as const).find((k) => e[k]);
    if (first) fieldRefs.current[first]?.focus();
    return !first;
  };
  const clearErr = (k: keyof ContactErrors) => setErrs((e) => (e[k] ? { ...e, [k]: undefined } : e));

  // ---- navigation
  const canLeave = (i: number) => {
    let msg = "";
    if (i === 0 && !who) msg = "Alegeți pentru cine este programarea.";
    if (i === 0 && who === "child" && !childAge) msg = "Alegeți vârsta copilului.";
    if (i === 1 && !service) msg = "Alegeți un serviciu.";
    if (i === 2 && !doctor) msg = "Alegeți un medic sau „Primul medic disponibil”.";
    if (i === 3 && !type) msg = "Alegeți tipul consultației.";
    if (i === 4 && (!date || !slot)) msg = "Alegeți o zi și un interval.";
    if (i === 5 && !validateContact()) return false;
    setHint(msg);
    return !msg;
  };

  const go = (i: number, dirArg?: Dir) => {
    if (i > cur && !canLeave(cur)) return;
    const dir: Dir = dirArg || (i > cur ? "fwd" : "back");
    setHint("");
    if (i === 4) {
      setView((v) => {
        if (v) return v;
        const mn = minDate();
        return new Date(mn.getFullYear(), mn.getMonth(), 1);
      });
    }
    if (i !== cur) {
      const from = cur;
      setLeave({ idx: from, dir });
      later(() => setLeave((l) => (l && l.idx === from ? null : l)), reduceRef.current ? 0 : 320);
      setEnter({ idx: i, dir });
      later(() => setEnter((l) => (l && l.idx === i ? null : l)), reduceRef.current ? 0 : 500);
    }
    setMaxStep((m) => Math.max(m, i));
    setCur(i);
    setBar((i / N) * 100);
    setNav((n) => n + 1);
  };
  useEffect(() => {
    goRef.current = go;
  });

  // focus the new step heading and scroll the form into view (after the step is displayed)
  useEffect(() => {
    if (!nav) return;
    h2Refs.current[cur]?.focus({ preventScroll: true });
    const root = rootRef.current;
    if (root) {
      // Lenis-aware (smooth with Lenis, native otherwise; instant for reduced motion)
      const top = root.getBoundingClientRect().top + window.scrollY - 90;
      if (window.scrollY > top + 10) scrollToTarget(root, { offset: 90, immediate: reduceRef.current, duration: 0.9 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nav]);

  // ---- step handlers
  const pickWho = (v: Exclude<Who, null>) => {
    flushSync(() => setWho(v));
    if (v !== "child") later(() => goRef.current(1), delay());
    else ageRef.current?.focus();
  };
  const pickService = (s: (typeof SERVICES)[number]) => {
    setService(s.slug);
    if (doctor && doctor !== "any" && (getDoctor(doctor)?.services ?? []).indexOf(s.slug) < 0) setDoctor(null);
    if (s.cas === "nu") setType("privat");
    setDate(null);
    setSlot(null);
    later(() => goRef.current(2), delay());
  };
  const pickDoctor = (v: string) => {
    setDoctor(v);
    setDate(null);
    setSlot(null);
    later(() => goRef.current(3), delay());
  };
  const pickType = (v: string) => {
    setType(v);
    setDate(null);
    setSlot(null);
    later(() => goRef.current(4), delay());
  };

  // ---- submit
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!canLeave(5)) return;
    const nowIso = new Date().toISOString();
    const r: BookingRequest = {
      id: "r" + Date.now(),
      ref: newRef(),
      createdAt: nowIso,
      who,
      childAge,
      service,
      doctor,
      type,
      date,
      slot,
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      notes: notes.trim(),
      channel,
      consentData: true,
      consentHealth: true,
      consentAt: nowIso,
      status: "noua",
      internalNote: "",
      history: [{ at: nowIso, text: "Cerere trimisă din site" }],
    };
    const list = getRequests();
    list.unshift(r);
    saveRequests(list);
    setDoneReq(r);
  };

  // confirmation screen: fade in, scroll, focus heading
  useEffect(() => {
    if (!doneReq) return;
    const raf = requestAnimationFrame(() => setIsIn(true));
    const root = rootRef.current;
    if (root) scrollToTarget(root, { offset: 100, immediate: reduceRef.current, duration: 0.9 });
    doneH2Ref.current?.focus({ preventScroll: true });
    return () => cancelAnimationFrame(raf);
  }, [doneReq]);

  // ---- summary (sidebar)
  const sumDoc = doctor === "any" ? { short: "Primul medic disponibil" } : doctor ? getDoctor(doctor) : null;
  const sumRows: [string, string | null][] = [
    ["Pentru cine", who === "me" ? "Pentru mine" : who === "child" ? "Pentru copilul meu" + (childAge ? ", " + childAge + " ani" : "") : who === "other" ? "Pentru altcineva" : null],
    ["Serviciu", selService ? selService.name : null],
    ["Medic", sumDoc ? sumDoc.short : null],
    ["Tip", type === "cas" ? "Prin CAS, cu bilet de trimitere" : type === "privat" ? "Privat" : null],
    ["Când", date ? fmtDate(date, true) + (slot ? ", " + slot : "") : null],
  ];

  // ---- doctors list for step 3
  const docList = DOCTORS.filter((d) => (service && service !== "nu-stiu" ? d.services.indexOf(service) >= 0 : true));

  // ---- calendar (step 5)
  const renderCalendar = () => {
    if (maxStep < 4 || !view) return null;
    const mn = minDate();
    const mx = maxDate();
    const offset = (new Date(view).getDay() + 6) % 7; // Monday first
    const days = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < offset; i++) cells.push(<span key={"e" + i} className="cal-empty"></span>);
    for (let d = 1; d <= days; d++) {
      const dt = new Date(view.getFullYear(), view.getMonth(), d);
      const is = iso(dt);
      const dow = dt.getDay();
      const off = dow === 0 || dow === 6 || dt < mn || dt > mx;
      const full = !off && slotsFor(doctor || "any", is).length === 0;
      const blocked = full && (doctor && doctor !== "any" ? dayBlocked(doctor, is) : DOCTORS.every((x) => dayBlocked(x.slug, is)));
      const cls = ["cal-day"];
      if (off || full) {
        if (full) cls.push("is-full");
        if (blocked) cls.push("is-blocked");
        if (dow === 0 || dow === 6) cls.push("is-weekend");
      }
      const selected = is === date;
      if (selected) cls.push("is-selected");
      cells.push(
        <button
          key={is}
          type="button"
          className={cls.join(" ")}
          data-d={is}
          disabled={off || full}
          title={(off || full) && blocked ? "Medicul nu consultă în această zi" : undefined}
          aria-pressed={selected ? "true" : undefined}
          aria-label={fmtLong(is) + (off ? ", indisponibil" : blocked ? ", medicul nu consultă în această zi" : full ? ", ocupat" : "")}
          onClick={() => {
            setDate(is);
            setSlot(null);
          }}
        >
          {d}
        </button>,
      );
    }
    return cells;
  };

  const renderSlots = () => {
    if (!date) return null;
    const list = slotsFor(doctor || "any", date);
    const am = list.filter((t) => +t.slice(0, 2) < 13);
    const pm = list.filter((t) => +t.slice(0, 2) >= 13);
    return (
      [
        ["Dimineață", am],
        ["După-amiază", pm],
      ] as [string, string[]][]
    ).map(([label, ts]) =>
      ts.length ? (
        <Fragment key={label}>
          <div className="slot-grp">{label}</div>
          <div className="slot-grid" data-stagger-slots="">
            {ts.map((t, i) => (
              <button
                key={t}
                type="button"
                className={"slot" + (slot === t ? " is-selected" : "")}
                style={{ "--i": i } as CSSProperties}
                aria-pressed={slot === t}
                onClick={() => setSlot(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </Fragment>
      ) : null,
    );
  };

  const stepCls = (k: number) =>
    ["step", k === cur && "is-active", k === cur && enter?.idx === k && enter.dir, leave?.idx === k && "is-leaving " + leave.dir].filter(Boolean).join(" ");
  const stepAria = (k: number) => (k === cur ? undefined : "true");

  const calMin = minDate();
  const calMax = maxDate();
  const calTitle = view ? MONTHS[view.getMonth()].charAt(0).toUpperCase() + MONTHS[view.getMonth()].slice(1) + " " + view.getFullYear() : "";
  const prevDisabled = view ? view <= new Date(calMin.getFullYear(), calMin.getMonth(), 1) : false;
  const nextDisabled = view ? new Date(view.getFullYear(), view.getMonth() + 1, 1) > calMax : false;

  const casOff = !!(selService && selService.cas === "nu");

  const doneService = doneReq ? getService(doneReq.service) : undefined;
  const doneDoctor = doneReq ? (doneReq.doctor === "any" ? "Primul medic disponibil" : (getDoctor(doneReq.doctor)?.name ?? "")) : "";
  const doneChannel = doneReq ? (doneReq.channel === "whatsapp" ? "WhatsApp" : doneReq.channel === "email" ? "e-mail" : "telefon") : "";
  const doneRows: [string, string][] = doneReq
    ? [
        ["Serviciu", doneService ? doneService.name : ""],
        ["Medic", doneDoctor],
        ["Tip", doneReq.type === "cas" ? "Prin CAS, cu bilet de trimitere" : "Privat"],
        ["Interval preferat", fmtLong(doneReq.date as string) + ", ora " + doneReq.slot],
        ["Contact", doneReq.name + ", " + doneReq.phone + (doneReq.email ? ", " + doneReq.email : "") + " (" + doneChannel + ")"],
      ]
    : [];
  const waMsg = doneReq
    ? "Bună ziua. Am trimis o cerere de programare pe site, numărul " + doneReq.ref + " (" + fmtDate(doneReq.date as string) + ", ora " + doneReq.slot + "). Vă rog să îmi confirmați."
    : "";

  return (
    <>
      <div className="phead prog-phead" id="prog-head" hidden={!!doneReq}>
        <div className="kicker" data-reveal="fade">Programare online</div>
        <h1 data-reveal="">Trimiteți cererea, recepția vă sună pentru confirmare.</h1>
        <p className="intro" data-reveal="">Programarea online la Clinica Dr. Iova din Oradea durează două–trei minute: alegeți serviciul, medicul și intervalul care vă convine. Recepția vă contactează pentru confirmare, luni–vineri, între 08:00 și 20:00. Pentru consultațiile prin CAS aveți nevoie de bilet de trimitere.</p>
        <p className="prog-urgent" data-reveal="fade"><Icon name="alert-triangle" /><span>În caz de urgență sunați la <a href="tel:112">112</a>. Formularul nu este pentru situații urgente.</span></p>
      </div>

      <div className={"wrap prog" + (doneReq ? " is-done" : "")} id="prog" ref={rootRef}>
        <aside className="prog-side" id="prog-side" data-reveal="left" aria-label="Rezumatul cererii" hidden={!!doneReq}>
          <div className="side-card">
            <h3>Cererea dumneavoastră</h3>
            <ul className="sum" id="sum-list">
              {sumRows.map(([label, val], i) => {
                const interactive = !!val && i < N - 1;
                return (
                  <li
                    key={label}
                    className={val ? "is-set" : ""}
                    {...(interactive
                      ? {
                          role: "button",
                          tabIndex: 0,
                          title: "Modificați",
                          onClick: () => go(i),
                          onKeyDown: (e: React.KeyboardEvent) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              go(i);
                            }
                          },
                        }
                      : {})}
                  >
                    <span>{label}</span>
                    <b>{val ? val : "…"}</b>
                  </li>
                );
              })}
            </ul>
            <p className="side-note"><Icon name="info" />Alegerile de aici nu sunt o rezervare fermă. Recepția confirmă ora în funcție de locurile libere.</p>
          </div>
          <div className="side-contact">
            <span>Preferați telefonul?</span>
            <a href="tel:+40359450657"><Icon name="phone" />0359 450 657</a>
            <small>Luni–vineri, 08:00–20:00</small>
          </div>
        </aside>

        <form className="prog-form" id="prog-form" noValidate data-reveal="" hidden={!!doneReq} onSubmit={onSubmit}>
          <div className="prog-top">
            <ol className="prog-steps" aria-label="Pașii programării">
              {LABELS.map((label, k) => (
                <li
                  key={label}
                  className={[k === cur && "is-current", k < cur && "is-done"].filter(Boolean).join(" ")}
                  onClick={() => {
                    if (k < cur) go(k);
                  }}
                >
                  <i></i><span>{label}</span>
                </li>
              ))}
            </ol>
            <div className="prog-track" aria-hidden="true"><div className="prog-bar" id="prog-bar" style={{ width: bar + "%" }}></div></div>
            <div className="prog-count" id="prog-count" aria-live="polite">Pasul {cur + 1} din {N}</div>
          </div>

          <div className="prog-stage">

            {/* a) pentru cine */}
            <section className={stepCls(0)} id="step-who" aria-labelledby="h-who" aria-hidden={stepAria(0)}>
              <h2 id="h-who" tabIndex={-1} ref={(el) => { h2Refs.current[0] = el; }}>Pentru cine este programarea?</h2>
              <p className="step-sub">Așa știm dacă vă îndrumăm către medicii pentru adulți sau către cei pentru copii.</p>
              <div className="choices who" data-stagger-choices="">
                {([
                  ["me", "user", "Pentru mine", "Sunt persoana care vine la consultație."],
                  ["child", "baby", "Pentru copilul meu", "Copil sau adolescent, până la 18 ani."],
                  ["other", "users", "Pentru altcineva", "Un părinte, partener sau altă persoană adultă."],
                ] as const).map(([v, icon, b, small], i) => (
                  <button key={v} type="button" className={"choice" + (who === v ? " is-selected" : "")} data-v={v} aria-pressed={who === v} style={{ "--i": i } as CSSProperties} onClick={() => pickWho(v)}>
                    <span className="ic"><Icon name={icon} /></span>
                    <span className="tx"><b>{b}</b><small>{small}</small></span>
                    <span className="chk"><Icon name="check" /></span>
                  </button>
                ))}
              </div>
              <div className="field inline" id="who-child" hidden={who !== "child"}>
                <label htmlFor="child-age">Vârsta copilului</label>
                <select id="child-age" ref={ageRef} value={childAge} onChange={(e) => setChildAge(e.target.value)}>
                  <option value="">Alegeți</option>
                  {AGES.map((a) => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
                <small className="help">La consultație copilul vine însoțit de un părinte sau de reprezentantul legal.</small>
              </div>
              <p className="note" id="who-other" hidden={who !== "other"}>Persoana pentru care faceți programarea trebuie să știe și să fie de acord. Datele ei le completați la pasul „Date de contact”, iar recepția poate cere să vorbească și cu ea.</p>
            </section>

            {/* b) serviciu */}
            <section className={stepCls(1)} id="step-service" aria-labelledby="h-service" aria-hidden={stepAria(1)}>
              <h2 id="h-service" tabIndex={-1} ref={(el) => { h2Refs.current[1] = el; }}>Ce serviciu doriți?</h2>
              <p className="step-sub">Dacă nu sunteți sigur, alegeți ultima variantă și recepția vă îndrumă.</p>
              <div className="choices grid" id="svc-grid">
                {S &&
                  SERVICES.map((s, i) =>
                    S.services[s.slug] === false ? null : (
                      <button key={s.slug} type="button" className={"choice svc" + (service === s.slug ? " is-selected" : "")} data-v={s.slug} style={{ "--i": i } as CSSProperties} aria-pressed={service === s.slug} onClick={() => pickService(s)}>
                        <span className="ic"><Icon name={s.icon} /></span>
                        <span className="tx"><b>{s.name}</b><small>{s.desc}</small></span>
                        <span className="chk"><Icon name="check" /></span>
                      </button>
                    ),
                  )}
              </div>
            </section>

            {/* c) medic */}
            <section className={stepCls(2)} id="step-doctor" aria-labelledby="h-doctor" aria-hidden={stepAria(2)}>
              <h2 id="h-doctor" tabIndex={-1} ref={(el) => { h2Refs.current[2] = el; }}>La care medic?</h2>
              <p className="step-sub">Lista arată medicii care oferă serviciul ales. Puteți lăsa recepția să aleagă primul loc liber.</p>
              <div className="choices list" id="doc-grid">
                {maxStep >= 2 ? (
                  <>
                    <button type="button" className={"choice doc any" + (doctor === "any" ? " is-selected" : "")} data-v="any" style={{ "--i": 0 } as CSSProperties} aria-pressed={doctor === "any"} onClick={() => pickDoctor("any")}>
                      <span className="av"><Icon name="clock" /></span>
                      <span className="tx"><b>{docList.length ? "Primul medic disponibil" : "Primul specialist disponibil"}</b><small>Recepția alege în funcție de primul loc liber.</small></span>
                      <span className="chk"><Icon name="check" /></span>
                    </button>
                    {docList.map((d, i) => (
                      <button key={d.slug} type="button" className={"choice doc" + (doctor === d.slug ? " is-selected" : "")} data-v={d.slug} style={{ "--i": i + 1 } as CSSProperties} aria-pressed={doctor === d.slug} onClick={() => pickDoctor(d.slug)}>
                        <span className="av"><img src={`/img/avatar/${d.slug}.png`} alt="" /></span>
                        <span className="tx"><b>{d.name}</b><small>{d.role}</small></span>
                        <span className="chk"><Icon name="check" /></span>
                      </button>
                    ))}
                  </>
                ) : null}
              </div>
              <p className="note" id="doc-none" hidden={!!docList.length || !service || service === "nu-stiu"}>Pentru acest serviciu, specialistul este stabilit de recepție la confirmare. <Todo>de cerut de la client: cine susține ședințele de psihoterapie și EMDR</Todo></p>
              {!isDemo && <p className="side-note" id="doc-todo" hidden={!docList.length}><Todo>de confirmat cu clinica: repartizarea medicilor pe servicii</Todo></p>}
            </section>

            {/* d) tip */}
            <section className={stepCls(3)} id="step-type" aria-labelledby="h-type" aria-hidden={stepAria(3)}>
              <h2 id="h-type" tabIndex={-1} ref={(el) => { h2Refs.current[3] = el; }}>Cum doriți consultația?</h2>
              <p className="step-sub">Clinica are contract cu CAS Bihor. Cu bilet de trimitere, consultația este decontată de casa de asigurări.</p>
              <div className="choices type">
                <button type="button" className={"choice big" + (casOff ? " is-disabled" : "") + (type === "cas" ? " is-selected" : "")} id="type-cas" data-v="cas" aria-pressed={type === "cas"} style={{ "--i": 0 } as CSSProperties} disabled={casOff} onClick={() => pickType("cas")}>
                  <span className="ic"><Icon name="file-text" /></span>
                  <span className="tx"><b>Prin CAS, cu bilet de trimitere</b>
                    <small>Aveți nevoie de un bilet de trimitere de la medicul de familie sau de la alt medic specialist, valabil la data consultației. Locurile prin CAS sunt limitate, iar recepția confirmă data în funcție de locurile rămase.</small>
                    <em className="price">Gratuit, decontat de CAS Bihor</em>
                  </span><span className="chk"><Icon name="check" /></span>
                </button>
                <button type="button" className={"choice big" + (type === "privat" ? " is-selected" : "")} id="type-privat" data-v="privat" aria-pressed={type === "privat"} style={{ "--i": 1 } as CSSProperties} onClick={() => pickType("privat")}>
                  <span className="ic"><Icon name="wallet" /></span>
                  <span className="tx"><b>Privat, cu plată</b>
                    <small>Nu aveți nevoie de bilet de trimitere. Recepția vă comunică tariful la confirmare.</small>
                    {!isDemo && <em className="price">Tarif: <Todo>de cerut de la client</Todo></em>}
                  </span><span className="chk"><Icon name="check" /></span>
                </button>
              </div>
              <p className="note" id="cas-cond" hidden={!(selService && selService.cas === "conditionat")}>Pentru serviciile psihologice, decontarea prin CAS depinde de recomandarea medicului specialist și de contractul clinicii pentru luna respectivă. Recepția vă spune exact la confirmare.</p>
              <p className="note warn" id="cas-only-privat" hidden={!casOff}>Avizul psihologic pentru port armă nu se decontează prin CAS. Se face doar privat.</p>
              <p className="note" id="cas-iova" hidden={!(selDoctor && selDoctor.casMinDays)}>Pentru Dr. Iova, programările prin CAS se fac cu minim o lună în avans. Calendarul de la pasul următor ține cont de acest lucru.</p>
              <p className="step-foot"><span>Detalii despre bilet de trimitere și pași: <SiteLink href="/cas/">Programare prin CAS</SiteLink>.</span></p>
            </section>

            {/* e) când */}
            <section className={stepCls(4)} id="step-when" aria-labelledby="h-when" aria-hidden={stepAria(4)}>
              <h2 id="h-when" tabIndex={-1} ref={(el) => { h2Refs.current[4] = el; }}>Când v-ar conveni?</h2>
              <p className="step-sub">Alegeți un interval preferat. Nu este o rezervare fermă: recepția vă sună și confirmă ora. Programul clinicii este de luni până vineri, 08:00–20:00.</p>
              <div className="when">
                <div className="cal" role="group" aria-label="Calendar">
                  <div className="cal-head">
                    <button type="button" className="cal-nav" id="cal-prev" aria-label="Luna anterioară" disabled={prevDisabled} onClick={() => view && setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))}><Icon name="chevron-left" /></button>
                    <strong id="cal-title">{calTitle}</strong>
                    <button type="button" className="cal-nav" id="cal-next" aria-label="Luna următoare" disabled={nextDisabled} onClick={() => view && setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))}><Icon name="chevron-right" /></button>
                  </div>
                  <div className="cal-dow" aria-hidden="true"><span>Lu</span><span>Ma</span><span>Mi</span><span>Jo</span><span>Vi</span><span>Sâ</span><span>Du</span></div>
                  <div className="cal-grid" id="cal-grid">{renderCalendar()}</div>
                  <div className="cal-legend"><span><i className="l-free"></i>locuri libere</span><span><i className="l-full"></i>ocupat</span><span><i className="l-off"></i>închis</span><span><i className="l-blk"></i>medicul nu consultă</span></div>
                  <p className="note" id="cal-note" hidden={!casNote}>Programare prin CAS la Dr. Iova: prima zi disponibilă este peste o lună.</p>
                </div>
                <div className="slots-wrap">
                  <h3 id="slots-head">{date ? fmtLong(date) : "Alegeți mai întâi o zi."}</h3>
                  <div className="slots" id="slots">{renderSlots()}</div>
                  <small className="help">Intervalele afișate sunt orientative și se actualizează după disponibilitatea medicilor.</small>
                </div>
              </div>
            </section>

            {/* f) contact */}
            <section className={stepCls(5)} id="step-contact" aria-labelledby="h-contact" aria-hidden={stepAria(5)}>
              <h2 id="h-contact" tabIndex={-1} ref={(el) => { h2Refs.current[5] = el; }}>Datele dumneavoastră de contact</h2>
              <p className="step-sub">Avem nevoie doar de ce ne ajută să vă sunăm. Nu cerem și nu notăm aici informații despre starea de sănătate.</p>
              <div className="fields">
                <div className={"field" + (errs.name ? " has-err" : "")}>
                  <label htmlFor="f-name">Nume și prenume <span aria-hidden="true">*</span></label>
                  <input id="f-name" type="text" autoComplete="name" required ref={(el) => { fieldRefs.current.name = el; }} value={name} aria-invalid={errs.name ? "true" : undefined} onChange={(e) => { setName(e.target.value); clearErr("name"); }} />
                  <small className="err" role="alert">{errs.name}</small>
                </div>
                <div className={"field" + (errs.phone ? " has-err" : "")}>
                  <label htmlFor="f-phone">Telefon <span aria-hidden="true">*</span></label>
                  <input id="f-phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="07xx xxx xxx" required ref={(el) => { fieldRefs.current.phone = el; }} value={phone} aria-invalid={errs.phone ? "true" : undefined} onChange={(e) => { setPhone(e.target.value); clearErr("phone"); }} />
                  <small className="err" role="alert">{errs.phone}</small>
                </div>
                <div className={"field" + (errs.email ? " has-err" : "")}>
                  <label htmlFor="f-email">E-mail <span className="opt">(opțional)</span></label>
                  <input id="f-email" type="email" autoComplete="email" ref={(el) => { fieldRefs.current.email = el; }} value={email} aria-invalid={errs.email ? "true" : undefined} onChange={(e) => { setEmail(e.target.value); clearErr("email"); }} />
                  <small className="err" role="alert">{errs.email}</small>
                </div>
                <div className="field">
                  <span className="lbl" id="lbl-channel">Cum preferați să vă contactăm?</span>
                  <div className="radios" role="radiogroup" aria-labelledby="lbl-channel">
                    <label><input type="radio" name="channel" value="telefon" checked={channel === "telefon"} onChange={() => setChannel("telefon")} /><span><Icon name="phone" />Telefon</span></label>
                    <label><input type="radio" name="channel" value="whatsapp" checked={channel === "whatsapp"} onChange={() => setChannel("whatsapp")} /><span><Icon name="message-circle" />WhatsApp</span></label>
                    <label><input type="radio" name="channel" value="email" checked={channel === "email"} onChange={() => setChannel("email")} /><span><Icon name="mail" />E-mail</span></label>
                  </div>
                </div>
                <div className="field full">
                  <label htmlFor="f-notes">Observații <span className="opt">(opțional)</span></label>
                  <textarea id="f-notes" rows={3} maxLength={300} placeholder="De exemplu: prefer după ora 16, am nevoie de interpret. Vă rugăm să NU scrieți aici detalii medicale." value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
                  <small className="help">Maximum 300 de caractere. Detaliile medicale le discutați direct cu medicul, la consultație.</small>
                </div>
                <div className={"field full check" + (errs.c1 ? " has-err" : "")}>
                  <label><input type="checkbox" id="f-c1" ref={(el) => { fieldRefs.current.c1 = el; }} checked={c1} aria-invalid={errs.c1 ? "true" : undefined} onChange={(e) => { setC1(e.target.checked); clearErr("c1"); }} /><span>Sunt de acord ca Clinica Dr. Iova să prelucreze datele de contact de mai sus pentru a gestiona această cerere de programare (nume, telefon, e-mail, data preferată). <SiteLink href="/confidentialitate/">Politica de confidențialitate</SiteLink>. <span aria-hidden="true">*</span></span></label>
                  <small className="err" role="alert">{errs.c1}</small>
                </div>
                <div className={"field full check" + (errs.c2 ? " has-err" : "")}>
                  <label><input type="checkbox" id="f-c2" ref={(el) => { fieldRefs.current.c2 = el; }} checked={c2} aria-invalid={errs.c2 ? "true" : undefined} onChange={(e) => { setC2(e.target.checked); clearErr("c2"); }} /><span>Îmi dau acordul explicit pentru prelucrarea datelor privind sănătatea (art. 9 GDPR). Simplul fapt că solicitați o programare la o clinică de psihiatrie, neurologie sau psihologie este o informație despre sănătate. Acest acord este necesar pentru a înregistra cererea. Îl puteți retrage oricând la receptie@clinicadriova.ro. <span aria-hidden="true">*</span></span></label>
                  <small className="err" role="alert">{errs.c2}</small>
                </div>
              </div>
              <p className="step-foot"><Icon name="lock" /><span>Datele sunt folosite doar pentru această programare și nu sunt transmise pentru reclame. Detalii în <SiteLink href="/confidentialitate/">politica de confidențialitate</SiteLink>.</span></p>
            </section>

          </div>

          <p className="step-hint" id="step-hint" role="alert" hidden={!hint}>{hint}</p>
          <div className="prog-actions">
            <button type="button" className="btn btn-line" id="btn-back" hidden={cur === 0} onClick={() => { if (cur > 0) go(cur - 1, "back"); }}><Icon name="arrow-left" />Înapoi</button>
            <button type="button" className="btn btn-dark" id="btn-next" hidden={cur === N - 1} onClick={() => { if (cur < N - 1) go(cur + 1, "fwd"); }}>Continuați<Icon name="arrow-right" /></button>
            <button type="submit" className="btn btn-dark" id="btn-send" hidden={cur !== N - 1}><Icon name="send" />Trimiteți cererea</button>
          </div>
        </form>

        {/* g) confirmare */}
        <section className={"done" + (isIn ? " is-in" : "")} id="done" hidden={!doneReq} aria-live="polite">
          <div className="done-mark" aria-hidden="true">
            <svg viewBox="0 0 96 96" fill="none"><circle className="ring" cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="2.5" /><path className="tick" d="M30 49l12 12 24-26" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div className="done-body">
            <div className="kicker">Cerere trimisă</div>
            <h2 tabIndex={-1} ref={doneH2Ref}>Mulțumim. Recepția vă sună pentru confirmare.</h2>
            <p className="done-lead">Numărul cererii: <b id="done-ref">{doneReq?.ref}</b>. Vă contactăm în programul recepției, luni–vineri 08:00–20:00. Până la confirmare, locul nu este rezervat ferm.</p>
            <ul className="sum done-sum" id="done-sum">
              {doneRows.map(([k, v]) => (
                <li key={k}><span>{k}</span><b>{v}</b></li>
              ))}
            </ul>

            <div className="done-cols">
              <div>
                <h3>Ce aduceți la consultație</h3>
                <ul className="bring">
                  <li className="bring-cas" hidden={!!doneReq && doneReq.type !== "cas"}><Icon name="file-text" />Biletul de trimitere, valabil la data consultației</li>
                  <li><Icon name="user-round" />Actul de identitate</li>
                  <li><Icon name="credit-card" />Cardul național de sănătate (dacă îl aveți, pentru validarea serviciului prin CAS)</li>
                  <li><Icon name="folder-open" />Documente medicale anterioare: scrisori medicale, rezultate, tratamente în curs</li>
                </ul>
              </div>
              <div>
                <h3>Ce urmează</h3>
                <ol className="next">
                  <li>Recepția verifică locurile libere și vă sună.</li>
                  <li>Stabiliți împreună ora finală. Pentru CAS, verificați că biletul de trimitere este valabil.</li>
                  <li>Cu o zi înainte primiți un mesaj de reamintire.</li>
                </ol>
              </div>
            </div>

            <div className="done-actions">
              <a className="btn btn-dark" id="done-ics" href="#" onClick={(e) => { e.preventDefault(); if (doneReq) downloadIcs(doneReq); }}><Icon name="calendar-plus" />Adăugați în calendar</a>
              <a className="btn btn-line" id="done-wa" href={doneReq ? waLink(waMsg) : "#"} target="_blank" rel="noopener"><Icon name="message-circle" />Scrieți-ne pe WhatsApp</a>
              <SiteLink className="btn btn-line" href="/"><Icon name="house" />Prima pagină</SiteLink>
            </div>
            <p className="prog-urgent"><Icon name="alert-triangle" /><span>Dacă starea dumneavoastră sau a persoanei pentru care ați făcut programarea se agravează, nu așteptați confirmarea. În caz de urgență sunați la <a href="tel:112">112</a>.</span></p>
          </div>
        </section>

      </div>
    </>
  );
}
