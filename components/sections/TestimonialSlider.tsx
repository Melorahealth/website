"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Baby,
  Building2,
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

/** The sage band behind the cards: the speaker badge sits in a notch cut to it. */
const BAND = "#264236";

/** Card colours, taken in turn: pale gold, pale rose, mint, cream. */
const palettes = [
  { card: "bg-[#f5e9cd]", mark: "text-gold/45", badge: "bg-gold text-ink" },
  { card: "bg-[#f6e1dc]", mark: "text-rose/45", badge: "bg-rose text-ink" },
  { card: "bg-[#e6f1eb]", mark: "text-accent/25", badge: "bg-accent text-white" },
  { card: "bg-[#fbf8f3]", mark: "text-gold/35", badge: "bg-cream text-sage" }
] as const;

/**
 * Testimonial slider for the sage "What people told us" band.
 *
 * Native scroll-snap powers touch swipe and smooth scrolling. The bar under the
 * cards mirrors the scroll position, and the arrows move one card at a time,
 * wrapping at either end. Autoplays, pausing on hover/focus and for people who
 * prefer reduced motion.
 */
export function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef<number>();
  // Where the visible window sits in the whole track, both as fractions (0-1).
  const [thumb, setThumb] = useState({ start: 0, size: 1 });

  const step = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    const first = track?.querySelector("li");
    if (!track || !first) return;
    const max = track.scrollWidth - track.clientWidth;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const distance = first.clientWidth + gap;
    if (direction > 0 && track.scrollLeft >= max - 4) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else if (direction < 0 && track.scrollLeft <= 4) {
      track.scrollTo({ left: max, behavior: "smooth" });
    } else {
      track.scrollBy({ left: direction * distance, behavior: "smooth" });
    }
  }, []);

  // Keep the bar in step with the scroll position (swipes, arrows, autoplay, resize).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const measure = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const size = Math.min(1, track.clientWidth / track.scrollWidth);
        const max = track.scrollWidth - track.clientWidth;
        const start = max > 0 ? (track.scrollLeft / max) * (1 - size) : 0;
        setThumb({ start, size });
      });
    };
    measure();
    track.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      track.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => () => window.clearTimeout(resumeTimer.current), []);

  // Autoplay, paused on interaction and disabled for reduced-motion users.
  useEffect(() => {
    if (paused || items.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => step(1), 4500);
    return () => window.clearInterval(id);
  }, [paused, step, items.length]);

  return (
    <div
      className="relative"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
      onFocus={() => setPaused(true)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchEnd={() => {
        // A phone has no "mouse leave", so start sliding again shortly after a swipe or tap.
        window.clearTimeout(resumeTimer.current);
        resumeTimer.current = window.setTimeout(() => setPaused(false), 4000);
      }}
      onTouchStart={() => {
        window.clearTimeout(resumeTimer.current);
        setPaused(true);
      }}
    >
      <ul
        aria-label="What people told us"
        className="-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-5 overflow-x-auto scroll-smooth px-6 pb-10 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        ref={trackRef}
        tabIndex={0}
      >
        {items.map((item, i) => {
          const Icon = speakerIcon(item.context);
          const palette = palettes[i % palettes.length]!;
          return (
            // Every other card sits a little lower, so the row reads as a rhythm, not a grid.
            <li
              className={`w-[86%] shrink-0 snap-start sm:w-[58%] md:w-[46%] lg:w-[calc((100%-2.5rem)/3)] ${
                i % 2 === 1 ? "sm:translate-y-7" : ""
              }`}
              key={item.quote}
            >
              <figure
                className={`group relative flex h-full min-h-[21rem] flex-col overflow-hidden rounded-[2rem] p-7 sm:p-8 ${palette.card}`}
              >
                <span
                  aria-hidden
                  className={`pointer-events-none absolute -top-3 right-6 select-none font-serif text-[10rem] leading-none transition duration-500 group-hover:-translate-y-1 ${palette.mark}`}
                >
                  &rdquo;
                </span>
                <figcaption className="relative self-start rounded-full bg-white/80 px-3.5 py-1.5 text-[13px] font-semibold text-sage">
                  {item.context}
                </figcaption>
                <blockquote className="relative mt-9 flex-1 text-pretty font-serif text-[1.45rem] leading-[1.36] tracking-normal text-sage sm:text-[1.6rem]">
                  {item.quote}
                </blockquote>
                <p className="relative mt-8 pr-16 text-[13px] font-medium text-ink/65">{item.source}</p>

                {/* Speaker badge in a notch cut from the corner; the two spans draw its inward curves. */}
                <span
                  aria-hidden
                  className="absolute bottom-0 right-0 rounded-tl-[1.75rem] pl-3 pt-3"
                  style={{ backgroundColor: BAND }}
                >
                  <span
                    className="absolute -top-6 right-0 h-6 w-6 rounded-br-[1.5rem]"
                    style={{ boxShadow: `8px 8px 0 8px ${BAND}` }}
                  />
                  <span
                    className="absolute -left-6 bottom-0 h-6 w-6 rounded-br-[1.5rem]"
                    style={{ boxShadow: `8px 8px 0 8px ${BAND}` }}
                  />
                  <span
                    className={`relative z-10 grid h-14 w-14 place-items-center rounded-full ${palette.badge}`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                </span>
              </figure>
            </li>
          );
        })}
      </ul>

      <div className="mt-6 flex items-center gap-6">
        <div aria-hidden className="relative h-1 flex-1 overflow-hidden rounded-full bg-white/15">
          <span
            className="absolute inset-y-0 rounded-full bg-gold transition-[left] duration-150 ease-out"
            style={{ left: `${thumb.start * 100}%`, width: `${thumb.size * 100}%` }}
          />
        </div>
        <div className="flex items-center gap-2.5">
          <button
            aria-label="Previous testimonial"
            className="grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white transition duration-300 hover:border-white/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/25"
            onClick={() => step(-1)}
            type="button"
          >
            <ArrowLeft aria-hidden className="h-5 w-5" />
          </button>
          <button
            aria-label="Next testimonial"
            className="grid h-12 w-12 place-items-center rounded-full bg-gold text-ink transition duration-300 hover:bg-[#d9b981] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/40"
            onClick={() => step(1)}
            type="button"
          >
            <ArrowRight aria-hidden className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
