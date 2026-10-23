"use client";

import { useEffect } from "react";
import gsap from "gsap";

/**
 * Homepage hero entrance animation (port of the GSAP part of home.js). Renders nothing; targets the
 * server-rendered `.page-home .hero` markup. Skipped for prefers-reduced-motion. Reverted on unmount.
 */
export default function HeroEntrance() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".page-home .hero");
    if (!hero || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const ease = "power3.out";
      const q = (s: string) => hero.querySelectorAll(s);
      const lines = q("h1 .ln");
      const chip = q("h1 .brain");
      const eyebrow = q(".eyebrow");
      const ctas = q(".ctas .btn");
      const doc = q(".hero-doc");
      const stats = q(".stats > div");
      const bottom = q(".bottom > *");
      const blobs = q(".hero-bg .blob");

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

      // gentle count-up on the hero numbers, after the stats fade in
      hero.querySelectorAll<HTMLElement>("[data-stat]").forEach((el, i) => {
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

      // breathing background blobs: slow drift, never bouncy
      blobs.forEach((b, i) => {
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
    }, hero);
    return () => {
      ctx.revert();
      hero.querySelectorAll<HTMLElement>("[data-stat]").forEach((el) => {
        el.textContent = el.dataset.stat || "";
      });
    };
  }, []);
  return null;
}
