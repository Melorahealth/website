import { CircleArrowRight, Gift } from "lucide-react";
import { DecorSection } from "@/components/sections/DecorSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MELORA_APP_URL, MELORA_GIFT_URL } from "@/lib/app-links";

type Step = { title: string; body: string };

const defaultSteps: Step[] = [
  {
    title: "Answer a few quick questions",
    body: "A short, private intake, no long forms and no waiting rooms."
  },
  {
    title: "Get matched to the right professional",
    body: "We route you to someone who fits your needs, context, and preferences."
  },
  {
    title: "Book and start, privately",
    body: "Choose a time that works and begin, online or in person."
  }
];

type NextStepSectionProps = {
  body: string;
  steps?: Step[];
};

/**
 * The "Take the next step, no long forms." band. Sends people straight to
 * Get Started (the app), never a contact form. Shared by the care pages and
 * the individual "For You" page.
 */
export function NextStepSection({ body, steps = defaultSteps }: NextStepSectionProps) {
  return (
    <DecorSection
      containerClassName="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
      id="find-support"
      variant="cream"
    >
      <div>
        <SectionHeader body={body} title="Take the next step, no long forms." />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={MELORA_APP_URL} icon={CircleArrowRight}>
            Get Started
          </ButtonLink>
          <ButtonLink href={MELORA_GIFT_URL} icon={Gift} variant="secondary">
            Gift a Session
          </ButtonLink>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-[26px] border border-sage/10 bg-white/60 p-7 shadow-[0_22px_70px_rgba(38,66,54,0.07)] backdrop-blur-xl sm:p-9">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gold/10 blur-[70px]"
        />
        <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-gold">
          Getting started
        </p>
        <p className="relative mt-2 font-serif text-2xl leading-tight tracking-normal text-sage">
          Three simple steps.
        </p>
        <ol className="relative mt-7 space-y-5">
          {steps.map((step, index) => (
            <li className="flex gap-4" key={step.title}>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage text-sm font-bold text-white shadow-soft">
                {index + 1}
              </span>
              <div>
                <p className="font-serif text-lg leading-snug tracking-normal text-sage">
                  {step.title}
                </p>
                <p className="mt-1 text-sm leading-6 text-ink/[0.62]">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </DecorSection>
  );
}
