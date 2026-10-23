"use client";
/* eslint-disable react-hooks/set-state-in-effect -- client-only init / mount animations that must run after first paint */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  EMPTY_FILTERS, KEYS, SESSION_KEY, STATUS, VIEWS, fmtTime, getBlocks, getRequests, getSettings, getToday, iso, mondayOf,
  seedBlocks, seedRequests, whenText, filterReqs, saveBlocks, saveRequests, svcName, docName, whoLabel, fmtDate, remove,
  type Block, type Filters, type Req, type Settings, type ViewKey,
} from "@/data/admin";
import { AdminContext, type AdminCtx, type ToastAction } from "./context";
import AdmIcon, { type AdmIconName } from "./AdmIcon";
import LoginScreen from "./LoginScreen";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import PanouView from "./PanouView";
import CereriView from "./CereriView";
import CalendarView from "./CalendarView";
import BlocariView from "./BlocariView";
import SetariView from "./SetariView";
import RequestDrawer from "./RequestDrawer";
import BlockDrawer from "./BlockDrawer";

type ToastState = { msg: string; icon: AdmIconName; action?: ToastAction; on: boolean };

const parseHash = (): { view: ViewKey; status: string | null } => {
  const h = location.hash.replace(/^#\/?/, "") || "panou";
  const parts = h.split("?");
  let v = parts[0] as ViewKey;
  if (!VIEWS[v]) v = "panou";
  let status: string | null = null;
  if (parts[1]) status = new URLSearchParams(parts[1]).get("status");
  return { view: v, status };
};

export default function AdminApp() {
  const [ready, setReady] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [reqs, setReqs] = useState<Req[]>([]);
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [settings, setSettingsState] = useState<Settings | null>(null);
  const reqsRef = useRef<Req[]>([]);
  const blocksRef = useRef<Block[]>([]);

  const [view, setView] = useState<ViewKey>("panou");
  const [q, setQ] = useState("");
  const [f, setF] = useState<Filters>(EMPTY_FILTERS);
  const [week, setWeek] = useState<Date | null>(null);
  const [wkDoc, setWkDoc] = useState("all");

  const [drawer, setDrawer] = useState<{ id: string | null; open: boolean; ver: number; resched: boolean }>({ id: null, open: false, ver: 0, resched: false });
  const [bd, setBd] = useState<{ key: number; pre: Partial<Block>; open: boolean }>({ key: 0, pre: {}, open: false });
  const [toastS, setToastS] = useState<ToastState>({ msg: "", icon: "check", on: false });
  const toastT = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // ---------- store helpers (refs keep synchronous read-after-write like the localStorage original) ----------
  const commitReqs = useCallback((next: Req[]) => { reqsRef.current = next; saveRequests(next); setReqs(next); }, []);
  const commitBlocks = useCallback((next: Block[]) => { blocksRef.current = next; saveBlocks(next); setBlocks(next); }, []);
  const reloadAll = useCallback(() => {
    reqsRef.current = getRequests(); blocksRef.current = getBlocks();
    setReqs(reqsRef.current); setBlocks(blocksRef.current); setSettingsState(getSettings());
  }, []);

  // ---------- toast ----------
  const toast = useCallback((msg: string, icon: AdmIconName = "check", action?: ToastAction) => {
    setToastS({ msg, icon, action, on: true });
    clearTimeout(toastT.current);
    toastT.current = setTimeout(() => setToastS((t) => ({ ...t, on: false })), action ? 6000 : 2600);
  }, []);

  // ---------- router ----------
  const route = useCallback(() => {
    const { view: v, status } = parseHash();
    if (status != null) setF((p) => ({ ...p, status }));
    setView(v);
  }, []);

  useEffect(() => {
    // init: seed + load from localStorage, restore session (client only)
    seedRequests(); seedBlocks();
    reloadAll();
    let li = false;
    try { li = sessionStorage.getItem(SESSION_KEY) === "1"; } catch { /* ignore */ }
    if (li) { setLoggedIn(true); route(); }
    setReady(true);
  }, [reloadAll, route]);

  useEffect(() => {
    if (!loggedIn) return;
    window.addEventListener("hashchange", route);
    return () => window.removeEventListener("hashchange", route);
  }, [loggedIn, route]);

  // ---------- auth ----------
  const login = () => {
    try { sessionStorage.setItem(SESSION_KEY, "1"); } catch { /* ignore */ }
    setLoggedIn(true); route();
    toast("Bun venit. Datele afișate sunt fictive.", "info");
  };
  const logout = () => {
    try { sessionStorage.removeItem(SESSION_KEY); } catch { /* ignore */ }
    location.hash = "";
    setView("panou");
    setLoggedIn(false);
  };

  // ---------- drawer (request) ----------
  const openDrawer = useCallback((id: string, resched = false) => {
    if (!reqsRef.current.some((r) => r.id === id)) return;
    setDrawer((d) => ({ id, open: true, ver: d.ver + 1, resched }));
  }, []);
  const closeDrawer = useCallback(() => setDrawer((d) => ({ ...d, open: false })), []);
  const updateRequest = useCallback((id: string, fn: (r: Req) => void) => {
    const next = reqsRef.current.map((r) => { if (r.id !== id) return r; const c = structuredClone(r); fn(c); return c; });
    commitReqs(next);
  }, [commitReqs]);
  const addRequest = useCallback((r: Req) => commitReqs([r, ...reqsRef.current]), [commitReqs]);

  // ---------- drawer (blocks / programare) ----------
  const openBlock = useCallback((pre: Partial<Block> = {}) => setBd((b) => ({ key: b.key + 1, pre, open: true })), []);
  const closeBlock = useCallback(() => setBd((b) => ({ ...b, open: false })), []);
  const deleteBlock = useCallback((id: string) => {
    const list = blocksRef.current, b = list.find((x) => x.id === id);
    if (!b) return;
    commitBlocks(list.filter((x) => x.id !== id));
    toast("Blocarea a fost ștearsă: " + whenText(b) + ".", "trash-2", {
      label: "Anulați",
      fn: () => { commitBlocks(blocksRef.current.concat([b])); toast("Blocarea a fost restaurată.", "undo-2"); },
    });
  }, [commitBlocks, toast]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (drawer.open) closeDrawer();
      if (bd.open) closeBlock();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [drawer.open, bd.open, closeDrawer, closeBlock]);

  const ctx: AdminCtx = useMemo(() => ({
    reqs, blocks, settings: settings as Settings, toast, openDrawer, closeDrawer, openBlock, closeBlock, updateRequest, addRequest,
    saveBlockList: commitBlocks, getBlockList: () => blocksRef.current, deleteBlock, setSettings: setSettingsState, reloadAll,
  }), [reqs, blocks, settings, toast, openDrawer, closeDrawer, openBlock, closeBlock, updateRequest, addRequest, commitBlocks, deleteBlock, reloadAll]);

  // ---------- top bar actions ----------
  const onSearch = (v: string) => { setQ(v); if (view !== "cereri") location.hash = "#/cereri"; };
  const exportCsv = () => {
    const rows = view === "cereri" ? filterReqs(reqs, q, f) : reqs;
    const head = ["Nr. cerere", "Creată", "Pacient", "Telefon", "E-mail", "Pentru", "Serviciu", "Medic", "Data", "Ora", "Tip", "Canal preferat", "Status", "Observații pacient", "Notă internă"];
    const csv = ([head] as (string | null | undefined)[][]).concat(rows.map((r) => [r.ref, fmtTime(r.createdAt), r.name, r.phone, r.email, whoLabel(r), svcName(r.service), docName(r.doctor), fmtDate(r.date), r.slot, r.type === "cas" ? "CAS" : "Privat", r.channel, STATUS[r.status], r.notes, r.internalNote]))
      .map((r) => r.map((c) => '"' + String(c == null ? "" : c).replace(/"/g, '""') + '"').join(";")).join("\r\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8" }));
    a.download = "cereri-programare-" + iso(getToday()) + ".csv";
    document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
    toast("Export CSV: " + rows.length + " rânduri. În producție, exportul este jurnalizat.", "download");
  };

  const dataReset = () => {
    if (!confirm("Ștergeți toate cererile și reîncărcați datele demo?")) return;
    remove(KEYS.cereri); remove(KEYS.seed); seedRequests();
    reloadAll(); route();
    toast("Datele demo au fost reîncărcate.", "rotate-ccw");
  };

  const showApp = ready && loggedIn && settings;

  return (
    <div className="adm" id="adm">
      {!showApp && <LoginScreen onLogin={login} />}
      {showApp && (
        <AdminContext.Provider value={ctx}>
          <div className="adm-app" id="adm-app">
            <Sidebar view={view} newCount={reqs.filter((r) => r.status === "noua").length} onLogout={logout} />
            <main className="adm-main">
              <TopBar view={view} q={q} onSearch={onSearch} onExport={exportCsv} />
              {view === "panou" && <PanouView onKpi={(s) => { setF((p) => ({ ...p, status: s })); location.hash = "#/cereri"; }} />}
              {view === "cereri" && <CereriView q={q} f={f} setF={setF} onReset={() => { setF(EMPTY_FILTERS); setQ(""); }} />}
              {view === "calendar" && <CalendarView week={week ?? mondayOf(getToday())} setWeek={setWeek} wkDoc={wkDoc} setWkDoc={setWkDoc} />}
              {view === "blocari" && <BlocariView />}
              {view === "setari" && <SetariView onDataReset={dataReset} />}
            </main>
            <RequestDrawer drawer={drawer} />
            <BlockDrawer key={bd.key} pre={bd.pre} open={bd.open} />
            <div className={"toast" + (toastS.on ? " is-on" : "")} id="toast" role="status" aria-live="polite">
              {toastS.msg && (<>
                <AdmIcon name={toastS.icon} />
                <span>{toastS.msg}</span>
                {toastS.action && (
                  <button type="button" className={"toast-act" + (toastS.action.cls ? " " + toastS.action.cls : "")}
                    onClick={() => { toastS.action?.fn(); setToastS((t) => ({ ...t, on: false })); }}>{toastS.action.label}</button>
                )}
              </>)}
            </div>
          </div>
        </AdminContext.Provider>
      )}
    </div>
  );
}

