import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";

export type FaqItem = { question: string; answer: string };

/**
 * Click-to-open questions. Each row has a number chip in gold, rose or mint (the
 * "tone" class in globals.css); the open row turns deep green. The first row
 * starts open, and a dashed row at the end links to the contact page.
 */
export function FaqList({ items, askHref = "/contact" }: { items: FaqItem[]; askHref?: string | null }) {
  return (
    <div className="mx-auto grid w-full max-w-3xl gap-3">
      {items.map((item, index) => (
        <details
          className="tone group w-full rounded-[1.75rem] bg-white ring-1 ring-inset ring-sage/10 transition-colors duration-300 open:bg-sage open:ring-0 hover:ring-sage/25"
          data-reveal
          key={item.question}
          open={index === 0}
        >
          <summary className="flex cursor-pointer list-none items-center gap-4 rounded-[1.75rem] p-4 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/30 sm:gap-5 sm:p-5 [&::-webkit-details-marker]:hidden">
            <span
              aria-hidden
              className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--tone-bg)] font-serif text-lg leading-none text-sage ring-1 ring-inset ring-sage/[0.06] transition-colors duration-300 group-open:bg-gold group-open:text-ink group-open:ring-0"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="flex-1 font-serif text-xl leading-snug tracking-normal text-sage transition-colors duration-300 group-open:text-white sm:text-2xl">
              {item.question}
            </span>
            <span
              aria-hidden
              className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-sage text-white transition duration-300 group-open:rotate-45 group-open:bg-white/15 group-hover:scale-105"
            >
              <Plus className="h-5 w-5" strokeWidth={1.8} />
            </span>
          </summary>
          <p className="px-5 pb-7 text-base leading-7 text-white/85 sm:pb-8 sm:pl-[5.5rem] sm:pr-24">
            {item.answer}
          </p>
        </details>
      ))}
      {askHref ? (
        <Link
          className="group mt-2 flex items-center justify-between gap-4 rounded-[1.75rem] border border-dashed border-sage/30 p-4 pl-6 text-sage transition duration-300 hover:border-sage/60 hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/30 sm:p-5 sm:pl-7"
          data-reveal
          href={askHref}
        >
          <span className="font-serif text-xl leading-snug sm:text-2xl">
            Can&rsquo;t find your question? Ask us.
          </span>
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold text-ink transition duration-300 group-hover:translate-x-1">
            <ArrowRight aria-hidden className="h-5 w-5" />
          </span>
        </Link>
      ) : null}
    </div>
  );
}
