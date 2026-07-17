import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type DecorSectionProps = {
  children: ReactNode;
  /** Background treatment. Alternate these down a page for rhythm. */
  variant?: "light" | "cream" | "dark";
  /** Anchor id for in-page links. */
  id?: string;
  /** Show the decorative dot/health-cross SVG motifs. Defaults to true. */
  motif?: boolean;
  /** Extra classes for the inner Container (e.g. grid layout). */
  containerClassName?: string;
};

const backgrounds = {
  light: "",
  cream: "bg-cream/40",
  dark: "bg-sage text-white"
} as const;

export function DecorSection({
  children,
  variant = "light",
  id,
  motif = true,
  containerClassName = ""
}: DecorSectionProps) {
  const dark = variant === "dark";
  const glowGold = dark ? "bg-gold/15" : "bg-gold/10";
  const glowRose = dark ? "bg-rose/15" : "bg-rose/10";
  const motifColor = dark ? "text-white/[0.08]" : "text-sage/20";

  return (
    <section
      className={`section-space relative overflow-hidden ${backgrounds[variant]}`}
      id={id}
    >
      {/* Soft floating glows */}
      <div
        aria-hidden
        className={`animate-float-soft pointer-events-none absolute -left-16 top-12 h-64 w-64 rounded-full ${glowGold} blur-[110px]`}
      />
      <div
        aria-hidden
        className={`animate-float-soft-alt pointer-events-none absolute -right-20 bottom-4 h-64 w-64 rounded-full ${glowRose} blur-[110px]`}
      />

      {motif ? (
        <>
          {/* SVG splatter: dots + health crosses */}
          <svg
            aria-hidden
            className={`animate-float-soft pointer-events-none absolute right-6 top-10 hidden h-36 w-36 ${motifColor} lg:block`}
            fill="none"
            viewBox="0 0 200 200"
          >
            <circle cx="30" cy="34" fill="currentColor" r="4" />
            <circle cx="66" cy="22" fill="currentColor" r="2.5" />
            <circle cx="22" cy="78" fill="currentColor" r="2.5" />
            <circle cx="92" cy="66" fill="currentColor" r="3" />
            <g stroke="currentColor" strokeLinecap="round" strokeWidth="3">
              <path d="M150 42h18M159 33v18" />
              <path d="M124 96h12M130 90v12" />
            </g>
          </svg>
          <svg
            aria-hidden
            className={`animate-float-soft-alt pointer-events-none absolute -left-2 bottom-10 hidden h-32 w-32 ${
              dark ? "text-white/[0.06]" : "text-gold/30"
            } lg:block`}
            fill="none"
            viewBox="0 0 200 200"
          >
            <circle cx="40" cy="150" fill="currentColor" r="3.5" />
            <circle cx="74" cy="168" fill="currentColor" r="2.5" />
            <circle cx="24" cy="120" fill="currentColor" r="2.5" />
            <g stroke="currentColor" strokeLinecap="round" strokeWidth="3">
              <path d="M96 140h14M103 133v14" />
            </g>
          </svg>
        </>
      ) : null}

      <Container className={`relative z-10 ${containerClassName}`}>{children}</Container>
    </section>
  );
}
