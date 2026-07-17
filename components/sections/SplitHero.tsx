import type { CSSProperties } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

type SplitHeroProps = {
  eyebrow?: string;
  title: string;
  /** Optional trailing phrase rendered in gold as an accent within the headline. */
  highlight?: string;
  body: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  bullets?: string[];
  imageSrc: string;
  imageAlt: string;
  /** Selects the blob shape + decorative mark arrangement. Vary it across pages. */
  variant?: number;
};

/* ---- Organic blob generator (deterministic per seed, fills the box) ---- */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Smooth closed curve (Catmull-Rom → cubic bézier) through radial points that
// reach ~99 of a 100 half-extent, so the shape fills its 200×200 box edge-to-edge.
function makeBlobPath(seed: number) {
  const rand = mulberry32(seed + 1);
  const n = 8;
  const cx = 100;
  const cy = 100;
  const pts: [number, number][] = [];
  for (let i = 0; i < n; i++) {
    const ang = (i / n) * Math.PI * 2 + (rand() - 0.5) * 0.62;
    const r = 69 + rand() * 30; // 69–99 → deeper bays + near-edge bulges
    pts.push([cx + Math.cos(ang) * r, cy + Math.sin(ang) * r]);
  }
  const f = (v: number) => Math.round(v * 10) / 10;
  let d = `M${f(pts[0][0])},${f(pts[0][1])}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C${f(c1x)},${f(c1y)} ${f(c2x)},${f(c2y)} ${f(p2[0])},${f(p2[1])}`;
  }
  return `${d} Z`;
}

function blobUrl(seed: number) {
  const d = makeBlobPath(seed);
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><path d='${d}' fill='#000'/></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

/* ---- Decorative marks (aspect kept via preserveAspectRatio) ---- */
const markBase = "pointer-events-none absolute z-10";

function Dashes({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden className={`${markBase} ${className}`} fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" viewBox="0 0 60 60">
      <path d="M6 22l9-4M11 33l9-4M18 44l9-4" />
    </svg>
  );
}

function DotGrid({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden className={`${markBase} ${className}`} fill="currentColor" viewBox="0 0 60 60">
      {[8, 26, 44].map((y) => [8, 26, 44].map((x) => <circle cx={x} cy={y} key={`${x}-${y}`} r="3" />))}
    </svg>
  );
}

function Zigzag({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden className={`${markBase} ${className}`} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" viewBox="0 0 60 40">
      <path d="M6 14l10-8 10 8 10-8 10 8" />
      <path d="M6 30l10-8 10 8 10-8 10 8" />
    </svg>
  );
}

function Hatch({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden className={`${markBase} ${className}`} fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" viewBox="0 0 60 60">
      <path d="M8 40L40 8M18 48L50 16M28 54L58 24" />
    </svg>
  );
}

function Crosses({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden className={`${markBase} ${className}`} fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" viewBox="0 0 60 60">
      <path d="M12 8v10M7 13h10M42 28v12M36 34h12M22 46v9M17.5 50.5h9" />
    </svg>
  );
}

function Rings({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden className={`${markBase} ${className}`} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 60 60">
      <circle cx="20" cy="22" r="9" />
      <circle cx="42" cy="42" r="6" />
    </svg>
  );
}

function Wavy({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden className={`${markBase} ${className}`} fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" viewBox="0 0 70 20">
      <path d="M4 12 Q14 2 24 12 T44 12 T64 12" />
    </svg>
  );
}

const marks = { Dashes, DotGrid, Zigzag, Hatch, Crosses, Rings, Wavy };
type MarkName = keyof typeof marks;

/* ---- Corner slots: nestled into the blob's corner bays, close to its edge ---- */
const TL = "left-[3%] top-[6%] h-12 w-12 sm:h-14 sm:w-14";
const TR = "right-[3%] top-[6%] h-12 w-12 sm:h-14 sm:w-14";
const BL = "left-[3%] bottom-[7%] h-14 w-14 sm:h-16 sm:w-16";
const BR = "right-[3%] bottom-[7%] h-14 w-14 sm:h-16 sm:w-16";

/* ---- Mark arrangements, one per variant (type + tone rotate) ---- */
const doodleSets: { mark: MarkName; className: string }[][] = [
  [
    { mark: "Dashes", className: `${TL} text-gold/70` },
    { mark: "Hatch", className: `${TR} text-white/30` },
    { mark: "DotGrid", className: `${BL} text-white/30` },
    { mark: "Zigzag", className: `${BR} text-gold/80` }
  ],
  [
    { mark: "Crosses", className: `${TL} text-white/35` },
    { mark: "Rings", className: `${TR} text-gold/65` },
    { mark: "Zigzag", className: `${BL} text-white/30` },
    { mark: "Hatch", className: `${BR} text-gold/70` }
  ],
  [
    { mark: "Zigzag", className: `${TL} text-gold/75` },
    { mark: "Crosses", className: `${TR} text-white/30` },
    { mark: "Dashes", className: `${BL} text-white/35` },
    { mark: "DotGrid", className: `${BR} text-gold/60` }
  ],
  [
    { mark: "Hatch", className: `${TL} text-white/30` },
    { mark: "DotGrid", className: `${TR} text-gold/60` },
    { mark: "Rings", className: `${BL} text-gold/60` },
    { mark: "Dashes", className: `${BR} text-white/35` }
  ],
  [
    { mark: "Rings", className: `${TL} text-gold/60` },
    { mark: "Dashes", className: `${TR} text-white/35` },
    { mark: "Crosses", className: `${BL} text-gold/70` },
    { mark: "Zigzag", className: `${BR} text-white/30` }
  ],
  [
    { mark: "DotGrid", className: `${TL} text-white/30` },
    { mark: "Zigzag", className: `${TR} text-gold/75` },
    { mark: "Hatch", className: `${BL} text-white/30` },
    { mark: "Wavy", className: `${BR} text-gold/70` }
  ]
];

export function SplitHero({
  title,
  highlight,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  bullets,
  imageSrc,
  imageAlt,
  variant = 0
}: SplitHeroProps) {
  const doodles = doodleSets[variant % doodleSets.length];

  return (
    <section className="relative overflow-hidden bg-sage text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-gold/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-rose/20 blur-[120px]"
      />
      <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:gap-14 lg:py-24">
        <div className="reveal relative">
          <h1 className="font-serif text-5xl leading-[1.03] tracking-normal sm:text-6xl lg:text-[4.5rem]">
            {title}
            {highlight ? (
              <>
                {" "}
                <span className="text-gold">{highlight}</span>
              </>
            ) : null}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">{body}</p>
          {(primaryHref && primaryLabel) || (secondaryHref && secondaryLabel) ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryHref && primaryLabel ? (
                <ButtonLink className="!bg-white !text-sage hover:!bg-cream" href={primaryHref}>
                  {primaryLabel}
                </ButtonLink>
              ) : null}
              {secondaryHref && secondaryLabel ? (
                <ButtonLink
                  className="!border-white/25 !bg-transparent !text-white hover:!border-white/50 hover:!bg-white/10"
                  href={secondaryHref}
                  variant="secondary"
                >
                  {secondaryLabel}
                </ButtonLink>
              ) : null}
            </div>
          ) : null}
          {bullets && bullets.length > 0 ? (
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
              {bullets.map((point) => (
                <li className="flex items-center gap-2" key={point}>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold">
                    <Check aria-hidden className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="reveal reveal-delay relative">
          {/* Soft depth glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-gold/20 blur-[90px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-8 -top-8 h-44 w-44 rounded-full bg-rose/15 blur-[90px]"
          />

          {/* Decorative marks (arrangement varies by variant) */}
          {doodles.map(({ mark, className }, index) => {
            const Mark = marks[mark];
            return <Mark className={className} key={`${mark}-${index}`} />;
          })}

          <div
            className="hero-blob relative z-[1] aspect-square w-full"
            style={{ ["--blob"]: blobUrl(variant) } as CSSProperties}
          >
            <Image
              alt={imageAlt}
              className="object-contain"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              src={imageSrc}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
