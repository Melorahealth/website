import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";

export type Faq = { question: string; answer: string };

/** Page colour behind the section: the intro card's button sits in a notch cut to it. */
const PAGE = "#fbf8f3";

/** The colour an answer opens into, taken in turn: pale gold, pale rose, mint. */
const openStyles = [
  { fill: "open:bg-[#f5e9cd]", badge: "group-open:bg-gold group-open:text-ink", numeral: "group-open:text-[#a98443]" },
  { fill: "open:bg-[#f6e1dc]", badge: "group-open:bg-rose group-open:text-ink", numeral: "group-open:text-[#a8635c]" },
  { fill: "open:bg-[#e6f1eb]", badge: "group-open:bg-accent group-open:text-white", numeral: "group-open:text-accent-deep" }
] as const;

/**
 * Home page FAQ: a green intro card that stays in view on the left while the
 * numbered questions scroll on the right. Each answer opens into its own colour.
 */
export function FaqSection({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-12 lg:items-start">
      <div className="lg:sticky lg:top-28 lg:col-span-5" data-reveal>
        <div className="relative flex min-h-[20rem] flex-col overflow-hidden rounded-[2rem] bg-sage p-8 text-white sm:p-10 lg:min-h-[27rem]">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-10 right-6 select-none font-serif text-[15rem] leading-none text-gold/25"
          >
            ?
          </span>
          <p className="relative self-start rounded-full bg-white/10 px-3.5 py-1.5 text-[13px] font-semibold">
            {faqs.length} questions, answered
          </p>
          <h2 className="relative mt-10 text-pretty font-serif text-4xl leading-[1.1] tracking-normal sm:text-5xl">
            Frequently asked questions.
          </h2>
          <p className="relative mt-5 max-w-sm flex-1 text-base leading-7 text-white/80">
            The things people ask before they trust someone with how they feel.
          </p>
          <Link
            className="mt-8 inline-flex items-center self-start pr-20 text-sm font-semibold underline-offset-4 after:absolute after:inset-0 after:z-20 hover:underline focus-visible:outline-none focus-visible:underline"
            href="/contact"
          >
            Can&rsquo;t find yours? Ask us
          </Link>
          <span
            aria-hidden
            className="absolute bottom-0 right-0 rounded-tl-[1.75rem] pl-3 pt-3"
            style={{ backgroundColor: PAGE }}
          >
            <span
              className="absolute -top-6 right-0 h-6 w-6 rounded-br-[1.5rem]"
              style={{ boxShadow: `8px 8px 0 8px ${PAGE}` }}
            />
            <span
              className="absolute -left-6 bottom-0 h-6 w-6 rounded-br-[1.5rem]"
              style={{ boxShadow: `8px 8px 0 8px ${PAGE}` }}
            />
            <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full bg-gold text-ink">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </span>
        </div>
      </div>

      <div className="grid gap-3 lg:col-span-7">
        {faqs.map((faq, index) => {
          const style = openStyles[index % openStyles.length]!;
          return (
            <details
              className={`group rounded-[1.5rem] bg-white/70 ring-1 ring-inset ring-sage/10 transition-colors duration-300 open:ring-0 hover:bg-white ${style.fill}`}
              data-reveal
              key={faq.question}
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 rounded-[1.5rem] p-5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/30 sm:gap-6 sm:p-6 [&::-webkit-details-marker]:hidden">
                <span
                  aria-hidden
                  className={`w-9 shrink-0 font-serif text-2xl leading-none text-sage/35 transition-colors duration-300 ${style.numeral}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-pretty font-serif text-xl leading-snug tracking-normal text-sage sm:text-2xl">
                  {faq.question}
                </span>
                <span
                  aria-hidden
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sage/[0.07] text-sage transition duration-300 group-open:rotate-45 ${style.badge}`}
                >
                  <Plus className="h-5 w-5" strokeWidth={1.8} />
                </span>
              </summary>
              <p className="px-5 pb-6 text-[15px] leading-7 text-ink/75 sm:pb-7 sm:pl-[5.25rem] sm:pr-20">
                {faq.answer}
              </p>
            </details>
          );
        })}
      </div>
    </div>
  );
}
