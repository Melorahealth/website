"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Baby,
  Building2,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
  UserRound
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Testimonial = {
  quote: string;
  source: string;
  context: string;
};

/** A small glyph for who is speaking, picked from the speaker's description. */
function speakerIcon(context: string): LucideIcon {
  const who = context.toLowerCase();
  if (/(employer|hr|partner|team|lead)/.test(who)) return Building2;
  if (/(sponsor|recipient|credit)/.test(who)) return HeartHandshake;
  if (/(maternal|mother|postpartum)/.test(who)) return Baby;
  return UserRound;
}

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
        className="-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-5 overflow-x-auto scroll-smooth px-6 pb-2 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        ref={trackRef}
      >
        {items.map((item, i) => {
          const Icon = speakerIcon(item.context);
          return (
            <li
              className="w-[86%] shrink-0 snap-start sm:w-[58%] md:w-[46%] lg:w-[calc((100%-2.5rem)/3)]"
              key={item.quote}
              ref={(el) => {
                slideRefs.current[i] = el;
              }}
            >
              {/* Who is speaking, what they said, where it came from: in that order. */}
              <figure className="flex h-full flex-col rounded-[1.5rem] bg-[#fefcf9] p-7 transition duration-500 hover:-translate-y-1 sm:p-8">
                <figcaption className="inline-flex items-center gap-2 self-start rounded-full bg-accent-soft py-1.5 pl-2 pr-3.5 text-[13px] font-semibold text-accent-deep">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-accent text-white">
                    <Icon aria-hidden className="h-3.5 w-3.5" strokeWidth={2} />
                  </span>
                  {item.context}
                </figcaption>
                <blockquote className="mt-7 flex-1 text-pretty font-serif text-[1.4rem] leading-[1.4] tracking-normal text-sage sm:text-[1.5rem]">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <p className="mt-9 flex items-center gap-3 text-[13px] font-medium text-ink/55">
                  <span aria-hidden className="h-0.5 w-7 rounded-full bg-gold" />
                  {item.source}
                </p>
              </figure>
            </li>
          );
        })}
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
