"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import type { PartnerLogo } from "@/lib/partners";


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

  return (
    <div className="relative">
      <div
        aria-label="MeloraHealth partners"
        className="flex items-center gap-10 overflow-x-auto px-4 [--logo-scale:0.8] [scrollbar-width:none] sm:gap-14 sm:[--logo-scale:1] [&::-webkit-scrollbar]:hidden"
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
            className="block shrink-0 opacity-65 transition first:ml-auto last:mr-auto hover:opacity-100"
            href={logo.href}
            key={logo.name}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              alt={logo.name}
              className="w-auto max-w-none object-contain"
              height={logo.height}
              src={logo.src}
              style={{
                height: `calc(${logo.displayHeight}px * var(--logo-scale))`
              }}
              width={logo.width}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
