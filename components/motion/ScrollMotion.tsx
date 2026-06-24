"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Scroll-driven motion layer for the home page.
 *
 * Renders nothing. On mount it wires GSAP + ScrollTrigger to elements tagged
 * with data attributes in the markup:
 *   - [data-hero]          hero wrapper (parallax trigger)
 *   - [data-hero-bg]       hero background image (scrubbed parallax + scale)
 *   - [data-hero-item]     hero children, revealed in a staggered entrance
 *   - [data-reveal]        any element that fades/rises in as it scrolls in
 *   - [data-reveal-group]  container whose [data-reveal] children stagger together
 *
 * Initial hidden state is set in CSS via `.has-motion` (see globals.css) so there
 * is no flash before hydration. Honors `prefers-reduced-motion`.
 */
export function ScrollMotion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Full motion --------------------------------------------------------
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Hero entrance timeline
        const heroItems = gsap.utils.toArray<HTMLElement>("[data-hero-item]");
        if (heroItems.length) {
          gsap.set(heroItems, { y: 26, opacity: 0 });
          gsap.to(heroItems, {
            y: 0,
            opacity: 1,
            duration: 1.05,
            ease: "power3.out",
            stagger: 0.12,
            delay: 0.12,
            clearProps: "transform"
          });
        }

        // Hero background parallax + slow scale
        const heroBg = document.querySelector<HTMLElement>("[data-hero-bg]");
        const hero = document.querySelector<HTMLElement>("[data-hero]");
        if (heroBg && hero) {
          gsap.set(heroBg, { scale: 1.18, transformOrigin: "50% 50%" });
          gsap.to(heroBg, {
            yPercent: 14,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: true
            }
          });
        }

        // Scroll reveals — batched so neighbours animate together with stagger
        const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");
        gsap.set(reveals, { y: 34, opacity: 0 });
        ScrollTrigger.batch("[data-reveal]", {
          start: "top 86%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              y: 0,
              opacity: 1,
              duration: 0.85,
              ease: "power3.out",
              stagger: 0.1,
              overwrite: true,
              clearProps: "transform"
            })
        });

        ScrollTrigger.refresh();
      });

      // Reduced motion — show everything, no transforms ---------------------
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-hero-item], [data-reveal]", {
          opacity: 1,
          y: 0,
          clearProps: "all"
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
