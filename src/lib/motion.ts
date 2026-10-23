import type Lenis from "lenis";

/**
 * Shared motion helpers (same contract as the agency's other sites: merci-bistro `lib/motion.ts`).
 * The Lenis instance is created by <SmoothScroll /> in the root layout and is `null` when smooth scroll
 * is off (prefers-reduced-motion, /admin*, before hydration). Every helper falls back to native scrolling.
 */
let lenisInstance: Lenis | null = null;
const listeners = new Set<() => void>();

export const setLenis = (l: Lenis | null) => {
  lenisInstance = l;
  listeners.forEach((f) => f());
};
export const getLenis = () => lenisInstance;
/** useSyncExternalStore subscription (used by useLenis()). */
export const subscribeLenis = (cb: () => void) => {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
};

export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

/**
 * Space (in viewport px) to leave above an anchor target: the element's own `scroll-margin-top` when it has
 * one (prose headings use 110px), otherwise the fixed nav's bottom edge + 24px.
 */
export function headerOffset(target?: Element | null) {
  const sm = target ? parseFloat(getComputedStyle(target).scrollMarginTop) : 0;
  if (sm > 0) return sm * zoomFactor();
  const nav = document.querySelector(".nav");
  const bottom = nav ? nav.getBoundingClientRect().bottom : 84;
  return Math.round(bottom + 24);
}

/** CSS `zoom` on <html> (base.css sets 1.15 at >=1400px). Computed lengths are unzoomed, rects are zoomed. */
export function zoomFactor() {
  return parseFloat(getComputedStyle(document.documentElement).zoom) || 1;
}

type ScrollOpts = { offset?: number; immediate?: boolean; duration?: number; onComplete?: () => void };

/**
 * Smooth-scroll the window to an element, a selector or a Y position. Lenis when available,
 * native `window.scrollTo` otherwise (instant under reduced motion).
 * For elements, `offset` defaults to headerOffset(el) (space for the fixed nav).
 */
export function scrollToTarget(target: Element | string | number, opts: ScrollOpts = {}) {
  const el = typeof target === "string" ? document.querySelector(target) : typeof target === "number" ? null : target;
  if (typeof target !== "number" && !el) return;
  const offset = opts.offset ?? (el ? headerOffset(el) : 0);
  // Absolute layout position. Not getBoundingClientRect: a target inside a not-yet-revealed [data-reveal]
  // block is still translated 28px down; and not Lenis' own element lookup, which reads its animated value
  // (one frame behind a native scroll) and re-applies scroll-margin-top without the html zoom.
  const top = el ? layoutTop(el as HTMLElement) - offset : (target as number);
  const l = getLenis();
  if (l) {
    l.scrollTo(Math.max(0, top), { immediate: opts.immediate, duration: opts.duration ?? 1.2, force: true, onComplete: opts.onComplete });
    return;
  }
  window.scrollTo({ top, behavior: opts.immediate || prefersReducedMotion() ? "auto" : "smooth" });
  opts.onComplete?.();
}

/** Document Y of an element from offsetTop (ignores transforms), in viewport px (html zoom applied). */
export function layoutTop(el: HTMLElement) {
  let y = 0;
  let n: HTMLElement | null = el;
  while (n) {
    y += n.offsetTop;
    n = n.offsetParent as HTMLElement | null;
  }
  return y * zoomFactor();
}

/** Lock / unlock page scroll (mobile menu, dialogs). Works with and without Lenis. */
export function lockScroll(locked: boolean) {
  const l = getLenis();
  if (locked) {
    l?.stop();
    document.documentElement.classList.add("is-scroll-locked");
  } else {
    l?.start();
    document.documentElement.classList.remove("is-scroll-locked");
  }
}
