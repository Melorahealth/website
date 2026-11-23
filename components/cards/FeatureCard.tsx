import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  title: string;
  body: string;
  icon: LucideIcon;
  /** Optional short label shown in a chip (e.g. a category). */
  meta?: string;
  /** Kept for callers on dark sections; the colour block reads the same on light and dark. */
  dark?: boolean;
  /** When set, the whole card becomes a link to this destination. */
  href?: string;
};

/**
 * A colour-block card. Siblings in a grid take pale gold, rose, mint and white
 * in turn (the "tone" class in globals.css), with the icon in a solid badge and
 * a large faded copy of it in the corner.
 */
export function FeatureCard({ title, body, icon: Icon, meta, href }: FeatureCardProps) {
  const shell =
    "tone reveal group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-[var(--tone-bg)] p-7 text-sage ring-1 ring-inset ring-sage/[0.06] transition duration-500 hover:-translate-y-1";
  const content = (
    <>
      <Icon
        aria-hidden
        className="pointer-events-none absolute -right-4 -top-4 h-28 w-28 text-[color:var(--tone-mark)] transition duration-700 ease-out group-hover:rotate-6 group-hover:scale-105"
        strokeWidth={1}
      />
      <div className="relative flex items-center gap-3">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--tone-accent)] text-[color:var(--tone-on)]">
          <Icon aria-hidden className="h-5 w-5" strokeWidth={1.7} />
        </span>
        {meta ? (
          <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-sage">{meta}</span>
        ) : null}
      </div>
      <h3 className="relative mt-9 text-pretty font-serif text-2xl leading-tight tracking-normal">{title}</h3>
      <p className="relative mt-3 text-sm leading-6 text-ink/75">{body}</p>
    </>
  );

  if (href) {
    return (
      <Link
        className={`${shell} focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/40`}
        href={href}
      >
        {content}
      </Link>
    );
  }

  return <article className={shell}>{content}</article>;
}
