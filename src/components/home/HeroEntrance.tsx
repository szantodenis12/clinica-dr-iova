"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DESKTOP = "(min-width: 701px)";
/** Phones: the layered "magazine cover" hero of mobile.css (H1 lines 1+2 behind Dr. Iova, line 3 in front). */
const PHONE = "(max-width: 700px)";

/**
 * Homepage hero motion. Renders nothing; targets the server-rendered `.page-home .hero` markup.
 * Skipped for prefers-reduced-motion (the CSS composition is static and complete). Reverted on unmount.
 *
 * Desktop/tablet (>700px): the original entrance (port of the GSAP part of home.js), unchanged.
 * Phones (<=700px): depth intro + scroll weave.
 *   intro  the headline lines wipe in from alternating sides and converge, then the doctor fades and rises in
 *          in front of them, then the kicker and the buttons (~1.5s). If the JS arrives after the CSS failsafe has
 *          already shown the hero (slow phone / network), a gentle re-entrance plays on the visible content instead.
 *   scroll scrubbed while the first screen leaves: line 1 slides left and line 2 right, behind his silhouette,
 *          line 3 (in front) slides left; the doctor rises and scales slightly, the type lags a little and the
 *          backdrop lags most (depth). Transforms only; will-change only while the hero is on screen.
 */
export default function HeroEntrance() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".page-home .hero");
    if (!hero || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const q = (s: string) => hero.querySelectorAll<HTMLElement>(s);
    const mm = gsap.matchMedia(hero);

    // shared ambience: hero numbers count up after they fade in, background blobs drift slowly (never bouncy)
    const ambience = () => {
      q("[data-stat]").forEach((el, i) => {
        const end = parseFloat(el.dataset.stat || "0");
        const o = { v: 0 };
        gsap.to(o, {
          v: end,
          duration: 1.6,
          delay: 1.15 + i * 0.1,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = String(Math.round(o.v));
          },
        });
      });
      q(".hero-bg .blob").forEach((b, i) => {
        gsap.to(b, {
          x: (i % 2 ? -1 : 1) * (40 + i * 10),
          y: (i % 3 ? 1 : -1) * (30 + i * 8),
          scale: 1.08,
          duration: 14 + i * 3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: -i * 3,
        });
      });
    };

    mm.add(DESKTOP, () => {
      const ease = "power3.out";
      const lines = q("h1 .ln");
      const chip = q("h1 .brain");
      const eyebrow = q(".eyebrow");
      const ctas = q(".ctas .btn");
      const doc = q(".hero-doc");
      const stats = q(".stats > div");
      const bottom = q(".bottom > *");

      gsap.set(lines, { yPercent: 112 });
      gsap.set(chip, { scale: 0.5, rotate: -6, transformOrigin: "50% 50%" });
      gsap.set([eyebrow, ctas, bottom], { autoAlpha: 0, y: 18 });
      gsap.set(doc, { autoAlpha: 0, y: 46 });
      gsap.set(stats, { autoAlpha: 0, x: 22 });

      const tl = gsap.timeline({ defaults: { ease }, delay: 0.15 });
      tl.to(doc, { autoAlpha: 1, y: 0, duration: 1.8, ease: "power2.out" }, 0)
        .to(eyebrow, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.25)
        .to(lines, { yPercent: 0, duration: 1.2, stagger: 0.13 }, 0.35)
        .to(chip, { scale: 1, rotate: 0, duration: 1.1, ease: "power2.out" }, 0.7)
        .to(ctas, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.1 }, 1.05)
        .to(stats, { autoAlpha: 1, x: 0, duration: 0.9, stagger: 0.1 }, 1.0)
        .to(bottom, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.1 }, 1.3);
      ambience();
    });

    mm.add(PHONE, () => {
      const rows = q("h1 .row");
      const lns = q("h1 .ln");
      const chip = q("h1 .brain");
      const eyebrow = q(".eyebrow");
      const ctas = q(".ctas .btn");
      const doc = hero.querySelector<HTMLElement>(".hero-doc");
      const img = hero.querySelector<HTMLElement>(".hero-doc img");
      const bg = hero.querySelector<HTMLElement>(".hero-bg");
      if (rows.length < 3 || !doc || !img || !bg) {
        hero.classList.add("is-depth");
        return () => hero.classList.remove("is-depth");
      }

      const hh = () => doc.offsetHeight;
      // The CSS keeps the intro elements hidden until .is-depth (JS on). On a slow phone / network the JS can arrive
      // after the CSS failsafe (3s) has already shown everything: then, if the hero is still in view, play a gentle
      // re-entrance on the visible content instead (no hide-and-show flash). Scrolled away: nothing to replay.
      const pending = parseFloat(getComputedStyle(lns[0]).opacity) < 0.05;
      const inView = window.scrollY < hh() * 0.6 && document.visibilityState !== "hidden";
      if (!pending && inView) {
        const ease = "expo.out";
        gsap
          .timeline({ delay: 0.05 })
          .fromTo(lns[0], { xPercent: 7 }, { xPercent: 0, duration: 1.2, ease }, 0)
          .fromTo(lns[1], { xPercent: -7 }, { xPercent: 0, duration: 1.2, ease }, 0.07)
          .fromTo(lns[2], { xPercent: 6 }, { xPercent: 0, duration: 1.2, ease }, 0.14)
          .fromTo(doc, { y: 16 }, { y: 0, duration: 1.1, ease: "power3.out" }, 0.1)
          .fromTo([...eyebrow, ...ctas], { y: 8 }, { y: 0, duration: 0.8, ease: "power3.out", stagger: 0.05 }, 0.3);
      }
      if (pending) {
        const ease = "expo.out";
        // alternating sides: line 1 from the right (out from behind his head), line 2 from the left, line 3 from the right
        // (vertical insets < 0 keep glyph overshoot, the outline and the brain, which floats above line 2, unclipped)
        gsap.set(lns[0], { xPercent: 26, clipPath: "inset(-30% 0% -30% 100%)", autoAlpha: 0 });
        gsap.set(lns[1], { xPercent: -26, clipPath: "inset(-220% 100% -30% 0%)", autoAlpha: 0 });
        gsap.set(lns[2], { xPercent: 20, clipPath: "inset(-30% 0% -30% 100%)", autoAlpha: 0 });
        gsap.set(chip, { scale: 0.7, autoAlpha: 0, transformOrigin: "50% 50%" });
        gsap.set(doc, { autoAlpha: 0, y: 36 });
        gsap.set([eyebrow, ctas], { autoAlpha: 0, y: 14 });
        const tl = gsap.timeline({
          delay: 0.1,
          onComplete: () => gsap.set(lns, { clearProps: "clipPath" }),
        });
        tl.to(lns[0], { xPercent: 0, clipPath: "inset(-30% 0% -30% 0%)", autoAlpha: 1, duration: 1.05, ease }, 0)
          .to(lns[1], { xPercent: 0, clipPath: "inset(-220% 0% -30% 0%)", autoAlpha: 1, duration: 1.05, ease }, 0.09)
          .to(lns[2], { xPercent: 0, clipPath: "inset(-30% 0% -30% 0%)", autoAlpha: 1, duration: 1.05, ease }, 0.18)
          .to(doc, { autoAlpha: 1, duration: 0.55, ease: "power1.out" }, 0.3)
          .to(doc, { y: 0, duration: 1.0, ease: "power3.out" }, 0.3)
          .to(chip, { scale: 1, autoAlpha: 1, duration: 0.9, ease: "power3.out" }, 0.5)
          .to(eyebrow, { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.72)
          .to(ctas, { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.08 }, 0.8);
      }
      hero.classList.add("is-depth"); // same task as the gsap.set calls above: no unstyled frame in between

      // scroll weave, scrubbed over the first screen (the doctor's box = the visible hero, without the stats strip)
      const vw = () => window.innerWidth;
      const layers = [...rows, img, bg];
      const weave = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: hero, // not the doctor's box: its intro offset would skew a refresh taken mid-intro
          start: "top top",
          end: () => `+=${hh()}`,
          scrub: 0.7,
          invalidateOnRefresh: true,
          onToggle: (self) => layers.forEach((el) => (el.style.willChange = self.isActive ? "transform" : "")),
          // the brain's glow/tint keyframes repaint every frame: hold them while the weave moves (mobile.css)
          onUpdate: (self) => hero.classList.toggle("is-weaving", self.progress > 0.002),
        },
      });
      // horizontal: lines 1+2 part behind him while they are still on screen (line 1 leaves under the bar first)
      weave
        .fromTo(rows[0], { x: 0 }, { x: () => -0.4 * vw(), duration: 0.16 }, 0)
        .fromTo(rows[1], { x: 0 }, { x: () => 0.4 * vw(), duration: 0.42 }, 0)
        .fromTo(rows[2], { x: 0 }, { x: () => -0.3 * vw(), duration: 1 }, 0)
        // depth: type behind him lags (further away), the backdrop lags most, the front line leads, he rises + grows
        .fromTo([rows[0], rows[1]], { y: 0 }, { y: () => 0.22 * hh(), duration: 1 }, 0)
        .fromTo(bg, { y: 0 }, { y: () => 0.3 * hh(), duration: 1 }, 0)
        .fromTo(rows[2], { y: 0 }, { y: () => -0.06 * hh(), duration: 1 }, 0)
        .fromTo(img, { scale: 1, yPercent: 0 }, { scale: 1.06, yPercent: -2, transformOrigin: "50% 100%", duration: 1 }, 0);

      ambience();
      return () => {
        hero.classList.remove("is-depth", "is-weaving");
        layers.forEach((el) => (el.style.willChange = ""));
      };
    });

    return () => {
      mm.revert();
      q("[data-stat]").forEach((el) => {
        el.textContent = el.dataset.stat || "";
      });
    };
  }, []);
  return null;
}
