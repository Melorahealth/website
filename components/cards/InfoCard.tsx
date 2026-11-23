import type { LucideIcon } from "lucide-react";

type InfoCardProps = {
  title: string;
  body: string;
  icon: LucideIcon;
  meta?: string;
};

/** A colour-block card; siblings take pale gold, rose, mint and white in turn (see "tone" in globals.css). */
export function InfoCard({ title, body, icon: Icon, meta }: InfoCardProps) {
  return (
    <article className="tone reveal group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-[var(--tone-bg)] p-7 text-sage ring-1 ring-inset ring-sage/[0.06] transition duration-500 hover:-translate-y-1">
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
    </article>
  );
}
