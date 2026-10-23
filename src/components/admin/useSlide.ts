"use client";
/* eslint-disable react-hooks/set-state-in-effect -- client-only init / mount animations that must run after first paint */
import { useEffect, useState } from "react";
import { reducedMotion } from "./context";

/** Drawer slide state: `shown` (not hidden) and `on` (.is-open). Mirrors hidden=false + rAF add class / remove class + hide after 450ms. */
export function useSlide(open: boolean) {
  const [shown, setShown] = useState(open);
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (open) {
      setShown(true);
      let id2 = 0;
      const id1 = requestAnimationFrame(() => { id2 = requestAnimationFrame(() => setOn(true)); });
      return () => { cancelAnimationFrame(id1); cancelAnimationFrame(id2); };
    }
    setOn(false);
    const t = setTimeout(() => setShown(false), reducedMotion() ? 0 : 450);
    return () => clearTimeout(t);
  }, [open]);
  return { shown, on };
}
