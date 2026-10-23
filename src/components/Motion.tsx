"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { zoomFactor } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger, SplitText);
ScrollTrigger.config({ ignoreMobileResize: true });

/**
 * Shared scroll motion. Renders nothing; works on DOM attributes, so pages stay declarative and
 * server-rendered. Re-initialised on every route change; everything it creates is undone in the cleanup.
 *
 * Reveals (one-shot, IntersectionObserver + CSS transitions in base.css):
 *   data-reveal="" | fade | left | right | scale | mask | rise   -> `.is-in` when scrolled into view
 *   data-reveal="lines"     heading: lines rise from behind a mask (GSAP SplitText, constructii-marcut SplitReveal)
 *   data-stagger="[kind]"   children get --i (transition delay) and data-reveal="[kind]"
 *   data-count="500" data-suffix=",0"   count-up when visible
 *
 * Depth (GSAP ScrollTrigger, scrubbed; Lenis provides the smoothing on desktop):
 *   data-parallax="0.15"        translate Y with scroll, relative to its root (positive = lags behind / further
 *                               away, negative = moves faster / closer). Root = closest [data-parallax-root], else parent.
 *   data-parallax-root="top"    on a root that starts at the top of the page (hero): layers start at 0 and
 *                               travel `speed * rootHeight` until the root has left the viewport
 *   data-parallax-fade="0.3"    (with a "top" root) opacity eases to this value as the root leaves
 *   data-parallax-prop="--wm"   write the offset into this CSS custom property instead of `translate`
 *                               (for pseudo-elements, e.g. the CTA band watermark)
 *   data-parallax-img="5"       image inside an overflow-hidden frame (its parent): scale 1.12 and drift
 *                               ±5% inside the frame, plus a soft zoom-settle when the frame enters
 *
 * Offsets use the independent CSS `translate` property, so they compose with any CSS/GSAP `transform`
 * (reveal transitions, hover lifts, the hero entrance) instead of fighting over it.
 * Desktop with a fine pointer: full effect. Touch / <768px: native scroll and half-strength depth.
 * Phones / touch (LITE): "lines" headings are a plain fade-up, no parallax inside horizontal swipe rows.
 * Never revealed by scroll: anything inside <details> (FAQ answers). A safety sweep releases every pending
 * reveal whose top is above the viewport bottom, so a flick or a layout jump can never leave text hidden.
 * Reduced motion (or JS off): no hidden states, no parallax, everything visible.
 */
const FULL = "(prefers-reduced-motion: no-preference) and (min-width: 768px) and (hover: hover) and (pointer: fine)";
const MOTION = "(prefers-reduced-motion: no-preference)";
/**
 * Phones / touch-first devices: lighter motion. `data-reveal="lines"` becomes a plain fade-up (no SplitText
 * masks, no ScrollTrigger) and nothing inside a horizontal swipe row gets a scroll-driven parallax.
 */
const LITE = "(max-width: 700px), (hover: none), (pointer: coarse)";

/** Closest ancestor that scrolls horizontally (.track, .gal, .marq and the mobile swipe rows), if any. */
function hScroller(el: Element) {
  for (let n = el.parentElement; n && n !== document.body; n = n.parentElement) {
    if (/auto|scroll/.test(getComputedStyle(n).overflowX)) return n;
  }
  return null;
}

export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const anim = root.classList.contains("has-anim") && matchMedia(MOTION).matches;
    const lite = matchMedia(LITE).matches;
    root.classList.toggle("motion-lite", anim && lite);
    const cleanups: (() => void)[] = [];
    const showAll = () => document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((e) => e.classList.add("is-in"));

    // ---------------- reveals ----------------
    // Progressive enhancement: whatever goes wrong here, content must end up visible.
    let sweep = () => {};
    try {
      // stagger -> per-child reveal
      document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((p) => {
        Array.from(p.children).forEach((c, i) => {
          const el = c as HTMLElement;
          el.style.setProperty("--i", String(i));
          if (!el.hasAttribute("data-reveal")) el.setAttribute("data-reveal", p.dataset.stagger || "");
        });
      });

      const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
      if (!anim || !("IntersectionObserver" in window)) {
        showAll();
      } else {
        // target -> the reveal elements it releases (mask reveals and swipe-row items share one target)
        const map = new Map<Element, HTMLElement[]>();
        const release = (t: Element) => {
          (map.get(t) || []).forEach((x) => x.classList.add("is-in"));
          map.delete(t);
          io.unobserve(t);
        };
        const io = new IntersectionObserver(
          (en) => {
            en.forEach((e) => {
              // also release targets that are already ABOVE the viewport: a fast flick can carry an element
              // from below to above the viewport between two observer samples (WebKit / iOS momentum scroll),
              // and it would then never report an intersection and stay hidden
              const above = e.boundingClientRect.bottom <= (e.rootBounds ? e.rootBounds.top : 0);
              if (e.isIntersecting || above) release(e.target);
            });
          },
          { rootMargin: "0px 0px -6% 0px", threshold: 0 }, // threshold 0: tall elements / mask parents must still fire
        );
        els.forEach((e) => {
          if (e.classList.contains("is-in")) return;
          // FAQ answers (anything inside a <details>) never scroll-reveal: hidden while closed, so the observer
          // cannot see them, and opening one must show the text at once
          if (e.parentElement?.closest("details")) {
            e.classList.add("is-in");
            return;
          }
          if (e.dataset.reveal === "lines" && !lite) return; // lines: SplitText below (phones: plain fade-up)
          const p = e.parentElement;
          // mask: clipped to zero area -> parent. Items of a horizontal swipe row (.track, .gal, mobile rows):
          // the off-screen ones would never intersect -> the row reveals them together (stagger still applies).
          const t = hScroller(e) ?? (p && e.dataset.reveal === "mask" ? p : e);
          map.set(t, (map.get(t) || []).concat(e));
          io.observe(t);
        });

        // Safety pass: release every pending target whose top is above the viewport bottom (covers flicks,
        // stale observer state after layout jumps, FAQ toggles, iOS toolbar resizes). Throttled, cheap.
        sweep = () => {
          if (!map.size) return;
          const vb = window.innerHeight;
          map.forEach((_, t) => {
            if (!t.getClientRects().length) return; // display:none (filtered cards, hidden breakpoints)
            if (t.getBoundingClientRect().top < vb) release(t);
          });
        };
        let st = 0;
        let last = 0;
        const onScroll = () => {
          const now = performance.now();
          if (now - last > 200) {
            last = now;
            sweep();
          }
          window.clearTimeout(st);
          st = window.setTimeout(sweep, 140); // trailing pass once the momentum stops
        };
        addEventListener("scroll", onScroll, { passive: true });
        addEventListener("resize", onScroll, { passive: true });
        document.addEventListener("toggle", onScroll, true); // <details> open/close (toggle does not bubble)
        const timers = [700, 1600, 3200].map((ms) => window.setTimeout(sweep, ms));
        cleanups.push(() => {
          io.disconnect();
          removeEventListener("scroll", onScroll);
          removeEventListener("resize", onScroll);
          document.removeEventListener("toggle", onScroll, true);
          window.clearTimeout(st);
          timers.forEach((x) => window.clearTimeout(x));
        });
      }
    } catch (err) {
      showAll();
      console.error(err);
    }
    root.classList.add("motion-ready"); // cancels the boot script's safety timeout (reveals are wired up)

    // ---------------- count-up ----------------
    document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
      const end = parseFloat(el.dataset.count || "0");
      const suf = el.dataset.suffix || "";
      if (!anim) {
        el.textContent = end + suf;
        return;
      }
      let raf = 0;
      const run = () => {
        const t0 = performance.now();
        const f = (t: number) => {
          const k = Math.min(1, (t - t0) / 1600);
          el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))) + suf;
          if (k < 1) raf = requestAnimationFrame(f);
        };
        f(t0);
      };
      const io = new IntersectionObserver((en, o) => {
        if (en[0].isIntersecting) {
          run();
          o.disconnect();
        }
      });
      io.observe(el);
      cleanups.push(() => {
        io.disconnect();
        cancelAnimationFrame(raf);
        el.textContent = end + suf;
      });
    });

    // ---------------- GSAP: headings, parallax, framed images ----------------
    const mm = gsap.matchMedia();
    if (anim) {
      mm.add({ full: FULL, motion: MOTION }, (ctx) => {
        const { full, motion } = ctx.conditions as { full: boolean; motion: boolean };
        if (!motion) return;
        const k = full ? 1 : 0.5; // touch / small screens: half-strength depth
        const undo: (() => void)[] = [];

        // headings: lines rise from behind a mask (not on phones / touch: they get a plain fade-up, see LITE)
        if (!lite) document.querySelectorAll<HTMLElement>('[data-reveal="lines"]').forEach((el) => {
          if (el.parentElement?.closest("details")) return;
          const split = SplitText.create(el, {
            type: "lines",
            mask: "lines",
            linesClass: "rl",
            autoSplit: true,
            onSplit(self) {
              el.classList.add("is-in");
              return gsap.from(self.lines, {
                yPercent: 110,
                duration: 1.1,
                ease: "expo.out",
                stagger: 0.08,
                scrollTrigger: { trigger: el, start: "top 90%", once: true },
              });
            },
          });
          undo.push(() => split.revert());
        });

        // free parallax layers
        document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
          const speed = parseFloat(el.dataset.parallax || "") * k;
          if (!Number.isFinite(speed) || !speed) return;
          if (lite && hScroller(el)) return; // no per-scroll style writes inside swipe rows on touch
          const prop = el.dataset.parallaxProp;
          // a CSS-variable layer moves a pseudo-element of `el` itself, so `el` is its own root
          const rootEl = prop ? el : (el.parentElement?.closest<HTMLElement>("[data-parallax-root]") ?? el.parentElement ?? el);
          const fromTop = rootEl !== el && rootEl.dataset.parallaxRoot === "top";
          const fade = parseFloat(el.dataset.parallaxFade || "");
          const fades = fromTop && Number.isFinite(fade);
          let h = 0;
          let vh = 0;
          const apply = (p: number) => {
            const y = fromTop ? speed * h * p : speed * ((vh + h) / 2) * (2 * p - 1);
            if (prop) el.style.setProperty(prop, `${y.toFixed(1)}px`);
            else el.style.translate = `0 ${y.toFixed(1)}px`;
            if (fades) el.style.opacity = (1 - (1 - fade) * p).toFixed(3);
          };
          const st = ScrollTrigger.create({
            trigger: rootEl,
            start: fromTop ? "top top" : "top bottom",
            end: "bottom top",
            onRefresh: (self) => {
              h = rootEl.offsetHeight; // layout px (unzoomed), same space as `translate`
              vh = window.innerHeight / zoomFactor();
              apply(self.progress);
            },
            onUpdate: (self) => apply(self.progress),
            onToggle: (self) => {
              if (!prop) el.style.willChange = self.isActive ? "translate" : "";
            },
          });
          undo.push(() => {
            st.kill();
            if (prop) el.style.removeProperty(prop);
            el.style.translate = "";
            el.style.willChange = "";
            if (fades) el.style.opacity = "";
          });
        });

        // image inside an overflow-hidden frame (merci-bistro: scale + drift that stays inside the overscan)
        document.querySelectorAll<HTMLElement>("[data-parallax-img]").forEach((el) => {
          const frame = el.parentElement;
          if (!frame) return;
          if (lite && hScroller(frame)) return; // cards / gallery photos in swipe rows stay still on touch
          const travel = (parseFloat(el.dataset.parallaxImg || "") || 5) * (full ? 1 : 0.6);
          const scale = full ? 1.12 : 1.08; // drift stays covered while travel% <= (scale - 1) / 2
          // zoom-settle on entry (merci data-zoom / marcut RevealImage), then rest at `scale`.
          // Tweened through a proxy: GSAP would otherwise take over the element's transform and pin the
          // independent `scale`/`translate` properties to `none` (breaking the CSS hover zooms and the drift).
          const z = { s: scale + 0.08 };
          const setScale = () => {
            el.style.transform = `scale(${z.s.toFixed(4)})`;
          };
          setScale();
          gsap.to(z, {
            s: scale,
            duration: 1.6,
            ease: "power2.out",
            onUpdate: setScale,
            scrollTrigger: { trigger: frame, start: "top 92%", once: true },
          });
          const apply = (p: number) => {
            el.style.translate = `0 ${(travel * (2 * p - 1)).toFixed(2)}%`;
          };
          const st = ScrollTrigger.create({
            trigger: frame,
            start: "top bottom",
            end: "bottom top",
            onRefresh: (self) => apply(self.progress),
            onUpdate: (self) => apply(self.progress),
            onToggle: (self) => {
              el.style.willChange = self.isActive ? "translate, transform" : "";
            },
          });
          undo.push(() => {
            st.kill();
            el.style.translate = "";
            el.style.transform = "";
            el.style.willChange = "";
          });
        });

        return () => undo.forEach((f) => f());
      });
    }
    cleanups.push(() => mm.revert());

    // ---------------- keep trigger positions right while the page settles ----------------
    // Any change of the page height (late images / fonts, a FAQ opening or closing, filtered card grids) moves
    // every trigger below it: re-measure, debounced, and never in the middle of a (momentum) scroll, where a
    // refresh would cost a long frame on a phone. The iOS toolbar resize is ignored (ignoreMobileResize above).
    let to = 0;
    let lastScroll = 0;
    const onAnyScroll = () => {
      lastScroll = performance.now();
    };
    const refresh = () => {
      window.clearTimeout(to);
      to = window.setTimeout(function run() {
        if (performance.now() - lastScroll < 150) {
          to = window.setTimeout(run, 150);
          return;
        }
        ScrollTrigger.refresh();
        sweep();
      }, 120);
    };
    addEventListener("scroll", onAnyScroll, { passive: true });
    const pending = Array.from(document.querySelectorAll<HTMLImageElement>("#continut img")).filter((i) => !i.complete);
    pending.forEach((i) => i.addEventListener("load", refresh, { once: true }));
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);
    document.addEventListener("toggle", refresh, true); // <details> (FAQ) open / close
    let lastH = document.body.offsetHeight;
    const ro =
      "ResizeObserver" in window
        ? new ResizeObserver(() => {
            const h = document.body.offsetHeight;
            if (Math.abs(h - lastH) < 2) return;
            lastH = h;
            refresh();
          })
        : null;
    ro?.observe(document.body);
    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());
    cleanups.push(() => {
      cancelAnimationFrame(raf);
      window.clearTimeout(to);
      ro?.disconnect();
      removeEventListener("scroll", onAnyScroll);
      window.removeEventListener("load", refresh);
      document.removeEventListener("toggle", refresh, true);
      pending.forEach((i) => i.removeEventListener("load", refresh));
    });

    return () => cleanups.forEach((c) => c());
  }, [pathname]);

  return null;
}
