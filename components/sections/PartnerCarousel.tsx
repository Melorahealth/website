"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";

type PartnerLogo = {
  name: string;
  href: string;
  src: string;
  width: number;
  height: number;
};

export function PartnerCarousel({ logos }: { logos: PartnerLogo[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const directionRef = useRef(1);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let frame = 0;
    const tick = () => {
      const max = el.scrollWidth - el.clientWidth;
      if (!pausedRef.current && max > 0) {
        el.scrollLeft += 0.5 * directionRef.current;
        if (el.scrollLeft >= max) {
          el.scrollLeft = max;
          directionRef.current = -1;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft = 0;
          directionRef.current = 1;
        }
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const nudge = (direction: number) => {
    scrollRef.current?.scrollBy({ left: direction * 240, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <button
        aria-label="Previous partners"
        className="absolute left-0 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-sage/15 bg-[#fbf8f3] text-sage shadow-sm transition hover:border-sage/30 hover:text-ink"
        onClick={() => nudge(-1)}
        type="button"
      >
        <ChevronLeft aria-hidden className="h-5 w-5" strokeWidth={1.8} />
      </button>

      <div
        aria-label="MeloraHealth partners"
        className="flex items-center justify-center gap-12 overflow-x-auto px-14 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
        ref={scrollRef}
      >
        {logos.map((logo) => (
          <a
            className="block shrink-0 opacity-65 transition hover:opacity-100"
            href={logo.href}
            key={logo.name}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              alt={logo.name}
              className="h-7 w-auto object-contain sm:h-8"
              height={logo.height}
              src={logo.src}
              width={logo.width}
            />
          </a>
        ))}
      </div>

      <button
        aria-label="Next partners"
        className="absolute right-0 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-sage/15 bg-[#fbf8f3] text-sage shadow-sm transition hover:border-sage/30 hover:text-ink"
        onClick={() => nudge(1)}
        type="button"
      >
        <ChevronRight aria-hidden className="h-5 w-5" strokeWidth={1.8} />
      </button>
    </div>
  );
}
