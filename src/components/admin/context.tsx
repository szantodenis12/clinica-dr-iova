"use client";
import { createContext, useContext } from "react";
import type { Block, Req, Settings } from "@/data/admin";
import type { AdmIconName } from "./AdmIcon";

export type ToastAction = { label: string; cls?: string; fn: () => void };

export type AdminCtx = {
  reqs: Req[];
  blocks: Block[];
  settings: Settings;
  toast: (msg: string, icon?: AdmIconName, action?: ToastAction) => void;
  openDrawer: (id: string, resched?: boolean) => void;
  closeDrawer: () => void;
  openBlock: (pre?: Partial<Block>) => void;
  closeBlock: () => void;
  updateRequest: (id: string, fn: (r: Req) => void) => void;
  addRequest: (r: Req) => void;
  saveBlockList: (list: Block[]) => void;
  getBlockList: () => Block[];
  deleteBlock: (id: string) => void;
  setSettings: (s: Settings) => void;
  reloadAll: () => void;
};

export const AdminContext = createContext<AdminCtx | null>(null);
export const useAdmin = (): AdminCtx => {
  const c = useContext(AdminContext);
  if (!c) throw new Error("AdminContext missing");
  return c;
};

export const reducedMotion = () => typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
