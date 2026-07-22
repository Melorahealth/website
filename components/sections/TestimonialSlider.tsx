"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export type Testimonial = {
  quote: string;
  source: string;
  context: string;
};

/**
 * Modern testimonial slider for the sage "Built from real conversations" band.
 *
 * Native scroll-snap powers touch swipe + smooth scrolling; prev/next buttons and
 * dots drive it on desktop. Autoplays, pausing on hover/focus and for users who
 * prefer reduced motion. The active slide is derived from scroll position so the
 * controls stay in sync with manual swipes.
 */
export function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const slideRefs = useRef<Array<HTMLLIElement | null>>([]);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      const len = items.length;
      const idx = ((index % len) + len) % len;
      const track = trackRef.current;
      const slide = slideRefs.current[idx];
      if (!track || !slide) return;
      track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
    },
    [items.length]
  );

  // Keep `active` in sync with the scroll position (covers swipes + button nav).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const center = track.scrollLeft + track.clientWidth / 2;
        let best = 0;
        let bestDist = Number.POSITIVE_INFINITY;
        slideRefs.current.forEach((slide, i) => {
          if (!slide) return;
          const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
          const dist = Math.abs(slideCenter - center);
          if (dist < bestDist) {
            bestDist = dist;
            best = i;
          }
        });
        activeRef.current = best;
        setActive(best);
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Autoplay, paused on interaction and disabled for reduced-motion users.
  useEffect(() => {
    if (paused || items.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => goTo(activeRef.current + 1), 5500);
    return () => window.clearInterval(id);
  }, [paused, goTo, items.length]);

  return (
    <div
      className="relative"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
      onFocus={() => setPaused(true)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <ul
        className="-mx-2 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-2 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        ref={trackRef}
      >
        {items.map((item, i) => (
          <li
            className="w-[85%] shrink-0 snap-start sm:w-[55%] md:w-[42%] lg:w-[calc((100%-3.75rem)/4)]"
            key={item.quote}
            ref={(el) => {
              slideRefs.current[i] = el;
            }}
          >
            <figure className="flex h-full flex-col rounded-2xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur-sm transition duration-500 hover:border-white/25 hover:bg-white/[0.1] sm:p-8">
              <Quote aria-hidden className="h-8 w-8 text-gold" strokeWidth={1.5} />
              <blockquote className="mt-5 flex-1 font-serif text-xl leading-snug tracking-normal text-white sm:text-2xl lg:text-xl">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-7 border-t border-white/10 pt-5">
                <strong className="block text-base font-semibold text-white">
                  {item.source}
                </strong>
                <span className="text-sm text-white/55">{item.context}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className="mt-7 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2" role="tablist" aria-label="Testimonials">
          {items.map((item, i) => (
            <button
              aria-label={`Go to testimonial ${i + 1}`}
              aria-selected={active === i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                active === i ? "w-7 bg-gold" : "w-3 bg-white/25 hover:bg-white/40"
              }`}
              key={item.quote}
              onClick={() => goTo(i)}
              role="tab"
              type="button"
            />
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <button
            aria-label="Previous testimonial"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition duration-300 hover:border-white/45 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
            onClick={() => goTo(active - 1)}
            type="button"
          >
            <ChevronLeft aria-hidden className="h-5 w-5" />
          </button>
          <button
            aria-label="Next testimonial"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition duration-300 hover:border-white/45 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
            onClick={() => goTo(active + 1)}
            type="button"
          >
            <ChevronRight aria-hidden className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
