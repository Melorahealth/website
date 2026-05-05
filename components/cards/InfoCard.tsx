import type { LucideIcon } from "lucide-react";

type InfoCardProps = {
  title: string;
  body: string;
  icon: LucideIcon;
  meta?: string;
};

export function InfoCard({ title, body, icon: Icon, meta }: InfoCardProps) {
  return (
    <article className="pattern-card reveal group relative overflow-hidden rounded-xl border border-white/[0.45] bg-white/30 p-6 shadow-[0_18px_48px_rgba(38,66,54,0.06)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-white/[0.65] hover:bg-white/[0.45] hover:shadow-soft">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/[0.45] to-transparent opacity-0 transition group-hover:opacity-100" />
      <div aria-hidden className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-rose/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
      <div className="relative z-10 mb-8 flex items-center justify-between gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-sage/15 bg-cream/50 text-sage transition group-hover:border-gold/[0.45] group-hover:bg-gold/10">
          <Icon aria-hidden className="h-5 w-5" strokeWidth={1.6} />
        </span>
        {meta ? <span className="text-xs font-semibold uppercase tracking-normal text-gold">{meta}</span> : null}
      </div>
      <h3 className="relative z-10 font-serif text-2xl leading-tight tracking-normal text-sage">{title}</h3>
      <p className="relative z-10 mt-4 text-sm leading-6 text-ink/60">{body}</p>
    </article>
  );
}
