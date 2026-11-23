import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";

export type Faq = { question: string; answer: string };

/** Card colours, taken in turn: pale gold, pale rose, mint, white, deep green. */
const cardStyles = [
  { card: "bg-[#f5e9cd] text-sage", numeral: "text-gold/45", answer: "text-ink/80" },
  { card: "bg-[#f6e1dc] text-sage", numeral: "text-rose/45", answer: "text-ink/80" },
  { card: "bg-[#e6f1eb] text-sage", numeral: "text-accent/25", answer: "text-ink/80" },
  { card: "bg-white text-sage ring-1 ring-inset ring-sage/10", numeral: "text-sage/10", answer: "text-ink/80" },
  { card: "bg-sage text-white", numeral: "text-gold/30", answer: "text-white/85" }
] as const;

/**
 * Home page FAQ. Every question is shown with its answer, nothing to click
 * open: two wide cards on the first row, the rest three across.
 */
export function FaqSection({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between" data-reveal>
        <div>
          <h2 className="font-serif text-4xl leading-tight tracking-normal text-sage sm:text-5xl">
            Frequently asked questions.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-ink/70">
            The things people ask before they trust someone with how they feel.
          </p>
        </div>
        <ButtonLink className="shrink-0 self-start sm:self-auto" href="/contact" icon={ArrowRight} variant="secondary">
          Ask your own question
        </ButtonLink>
      </div>

      <dl className="grid gap-5 md:grid-cols-6">
        {faqs.map((faq, index) => {
          const style = cardStyles[index % cardStyles.length]!;
          return (
            <div
              className={`relative flex flex-col overflow-hidden rounded-[2rem] p-7 sm:p-8 ${style.card} ${
                index < 2 ? "md:col-span-3" : "md:col-span-2"
              }`}
              data-reveal
              key={faq.question}
            >
              <span
                aria-hidden
                className={`pointer-events-none absolute right-5 -top-4 select-none font-serif text-[7.5rem] leading-none ${style.numeral}`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <dt className="relative text-pretty pt-24 font-serif text-[1.7rem] leading-tight tracking-normal sm:text-[1.85rem]">
                {faq.question}
              </dt>
              <dd className={`relative mt-4 text-[15px] leading-7 ${style.answer}`}>{faq.answer}</dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
