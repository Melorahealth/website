import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  title: string;
  body: string;
  icon: LucideIcon;
  /** Optional short uppercase label shown by the icon (e.g. a category). */
  meta?: string;
  /** Render the card on a dark section. */
  dark?: boolean;
  /** When set, the whole card becomes a link to this destination. */
  href?: string;
};

export function FeatureCard({ title, body, icon: Icon, meta, dark = false, href }: FeatureCardProps) {
  const card = dark ? (
    <article className="reveal group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur transition duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-white/[0.09]">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
        />
        <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-gold transition duration-500 group-hover:border-gold/40 group-hover:bg-gold/10">
          <Icon aria-hidden className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.6} />
        </span>
        <div className="relative">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-serif text-xl leading-tight tracking-normal">{title}</h3>
            {meta ? (
              <span className="text-xs font-semibold uppercase tracking-normal text-gold">{meta}</span>
            ) : null}
          </div>
          <p className="mt-2 text-sm leading-6 text-white/70">{body}</p>
        </div>
      </article>
  ) : (
    <article className="reveal group relative overflow-hidden rounded-2xl border border-sage/12 bg-white/55 p-7 shadow-[0_18px_48px_rgba(38,66,54,0.06)] backdrop-blur-xl transition duration-500 hover:-translate-y-1.5 hover:border-gold/30 hover:bg-white/70">
      {/* Corner glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(200,164,107,0.22),transparent_70%)] transition duration-700 group-hover:scale-125"
      />
      {/* Oversized bleeding icon */}
      <Icon
        aria-hidden
        className="pointer-events-none absolute -right-3 -top-3 h-24 w-24 text-sage/[0.06] transition duration-700 ease-out group-hover:rotate-6 group-hover:scale-110 group-hover:text-gold/20"
        strokeWidth={1}
      />
      {/* Icon badge */}
      <div className="relative flex items-center justify-between gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sage/10 bg-gradient-to-br from-white/85 to-cream/40 text-sage shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] transition duration-500 group-hover:border-gold/40">
          <Icon aria-hidden className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.5} />
        </span>
        {meta ? (
          <span className="relative text-xs font-semibold uppercase tracking-normal text-gold">{meta}</span>
        ) : null}
      </div>
      <h3 className="relative mt-7 font-serif text-2xl leading-tight tracking-normal text-sage">
        {title}
      </h3>
      <p className="relative mt-3 text-sm leading-6 text-ink/[0.62]">{body}</p>
      {/* Bottom drawn-line motif */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-6 bottom-3 h-3 w-[calc(100%-3rem)] text-gold/35"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 200 12"
      >
        <path
          d="M0 9 C40 9 40 3 80 3 C120 3 120 9 160 9 C180 9 190 6 200 6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.5"
        />
        <circle cx="200" cy="6" fill="currentColor" r="2" />
      </svg>
    </article>
  );

  if (href) {
    return (
      <Link
        className="block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2"
        href={href}
      >
        {card}
      </Link>
    );
  }

  return card;
}
