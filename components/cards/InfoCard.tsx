import type { LucideIcon } from "lucide-react";

type InfoCardProps = {
  title: string;
  body: string;
  icon: LucideIcon;
  meta?: string;
};

export function InfoCard({ title, body, icon: Icon, meta }: InfoCardProps) {
  return (
    <article className="pattern-card reveal group relative overflow-hidden rounded-[22px] border border-sage/[0.08] bg-gradient-to-br from-white/75 to-cream/25 p-7 shadow-[0_18px_48px_rgba(38,66,54,0.06)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1.5 hover:border-gold/25 hover:shadow-soft">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-40 transition duration-500 group-hover:opacity-100" />
      <div aria-hidden className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-gold/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
      <div className="relative z-10 mb-8 flex items-center justify-between gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sage/10 bg-gradient-to-br from-white/85 to-cream/40 text-sage shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] transition duration-500 group-hover:border-gold/40 group-hover:from-gold/[0.12] group-hover:to-white/45">
          <Icon aria-hidden className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.5} />
        </span>
        {meta ? <span className="text-xs font-semibold uppercase tracking-normal text-gold">{meta}</span> : null}
      </div>
      <h3 className="relative z-10 font-serif text-2xl leading-tight tracking-normal text-sage">{title}</h3>
      <p className="relative z-10 mt-4 text-sm leading-6 text-ink/60">{body}</p>
    </article>
  );
}
