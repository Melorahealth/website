import type { Metadata } from "next";
import Image from "next/image";
import { Baby, Heart, MessageCircle, Shield, Stethoscope, UserRound } from "lucide-react";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTASection } from "@/components/sections/CTASection";
import { DecorSection } from "@/components/sections/DecorSection";
import { NextStepSection } from "@/components/sections/NextStepSection";
import { SplitHero } from "@/components/sections/SplitHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MELORA_GIFT_URL } from "@/lib/app-links";
import { createPageMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Find Therapy and Mental Health Support",
  description:
    "Find therapy, psychiatry, women’s mental health support, postpartum care, couples therapy, and identity-affirming care that meets you where you are, online, private, and ready when you are.",
  path: "/for-you",
  image: "/assets/images/shot-of-a-young-businesswoman-looking-bored-while-2026-01-09-11-08-39-utc.jpg",
  imageAlt: "A young woman sitting quietly, looking thoughtful and a little worn"
});

const supportTypes = [
  {
    title: "Therapy",
    body: "Talk things through with someone trained to listen, even the parts that are hard to put into words.",
    icon: MessageCircle
  },
  {
    title: "Psychiatry",
    body: "When what you're feeling needs medical care, a doctor can help with assessment and medication.",
    icon: Stethoscope
  },
  {
    title: "Women’s therapy",
    body: "A place for the weight you carry, relationships, change, and the parts of life that ask a lot of you.",
    icon: UserRound
  },
  {
    title: "Postpartum therapy",
    body: "Gentle support for the exhaustion, the mental load, and the quiet shift in who you are after birth.",
    icon: Baby
  },
  {
    title: "Couples therapy",
    body: "A steadier space to talk, close the distance, and decide what comes next, together.",
    icon: Heart
  },
  {
    title: "Queer-affirming therapy",
    body: "Affirming support for queer people working through belonging, family, faith, and being yourself.",
    icon: Shield
  }
];

const reasons = [
  {
    title: "Matched to you",
    body: "We consider your needs, language, culture, and what you're comfortable with, then point you to the right person."
  },
  {
    title: "Private by default",
    body: "What you share stays between you and your professional. No judgement, and no exposure."
  },
  {
    title: "Online or in person",
    body: "Meet by video from home, or sit with someone near you. Whichever feels right."
  },
  {
    title: "At your own pace",
    body: "Start when you're ready, and keep going for as long as it helps."
  }
];

const faqs = [
  {
    q: "Is it really private?",
    a: "Yes. Sessions are confidential and secure. What you share stays between you and your professional, never your family, your employer, or anyone else."
  },
  {
    q: "How am I matched?",
    a: "After a short, private conversation about what's going on, we point you to a professional who fits your needs, language, and context, so you skip the endless searching."
  },
  {
    q: "Can I meet online or in person?",
    a: "Both. You can meet by video from wherever you are, or sit with someone in person where that's available."
  },
  {
    q: "What kinds of care can I get?",
    a: "Therapy, psychiatry, women's and postpartum care, couples therapy, and queer-affirming support, matched to what you actually need."
  },
  {
    q: "What if I can't afford it right now?",
    a: "Someone can gift you a session, and sponsored care credits can help you begin without carrying the cost alone."
  }
];

export default function ForYouPage() {
  return (
    <main>
      <JsonLd
        data={createBreadcrumbJsonLd("/for-you", "Find Support")}
        id="for-you-breadcrumb-jsonld"
      />
      <SplitHero
        body="Whatever you’re going through, you’ll find real expertise in women’s mental health, postpartum care, relationships, and queer-affirming therapy."
        imageAlt="A young woman sitting quietly, looking thoughtful and a little worn"
        imageSrc="/assets/images/shot-of-a-young-businesswoman-looking-bored-while-2026-01-09-11-08-39-utc.jpg"
        primaryHref="#find-support"
        primaryLabel="Find Support"
        title="Support that meets you where you are."
        variant={2}
      />
      <DecorSection
        containerClassName="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20"
        motif={false}
        variant="light"
      >
        <div className="reveal relative aspect-[4/5] overflow-hidden rounded-[20px] bg-sage sm:aspect-[5/6]">
          <Image
            alt="An African woman in a calm, reflective moment"
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
            src="/assets/images/francis-odeyemi-GaXP0fSlVRM-unsplash.jpg"
            style={{ objectPosition: "center 30%" }}
          />
        </div>
        <div className="reveal reveal-delay max-w-md">
          <h2 className="font-serif text-4xl leading-[1.12] tracking-normal text-sage sm:text-5xl">
            Care that fits your life, not the other way around.
          </h2>
          <p className="mt-6 text-base leading-7 text-ink/70 sm:text-lg">
            You shouldn&apos;t have to explain your whole world before someone
            understands it. We start from where you already are.
          </p>
          <dl className="mt-10 border-t border-sage/10">
            {reasons.map((item) => (
              <div className="border-b border-sage/10 py-5" key={item.title}>
                <dt className="font-serif text-lg leading-tight tracking-normal text-sage">
                  {item.title}
                </dt>
                <dd className="mt-1.5 text-sm leading-6 text-ink/[0.6]">{item.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </DecorSection>
      <DecorSection variant="cream">
        <SectionHeader
          body="We match you by what you need, how you'd like to meet, where you are, and the kind of professional who'll feel right."
          title="Find the kind of support that fits."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {supportTypes.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </DecorSection>
      <DecorSection variant="light">
        <SectionHeader
          align="center"
          body="The questions people ask us most before they start."
          title="Good questions, answered plainly."
        />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-sage/10 border-y border-sage/10">
          {faqs.map((item) => (
            <details className="group py-5" key={item.q}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl leading-snug tracking-normal text-sage">
                {item.q}
                <span
                  aria-hidden
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-sage/15 text-gold transition duration-300 group-open:rotate-45"
                >
                  <span className="text-lg leading-none">+</span>
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/[0.66]">{item.a}</p>
            </details>
          ))}
        </div>
      </DecorSection>
      <NextStepSection
        body="Start with a private conversation. From there, we'll point you toward the right professional, online or in person."
        steps={[
          {
            title: "Tell us what's going on",
            body: "A short, private conversation, no long forms."
          },
          {
            title: "Get matched to the right person",
            body: "We point you to a professional who fits your needs and context."
          },
          {
            title: "Start, privately",
            body: "Begin online or in person, whenever you're ready."
          }
        ]}
      />
      <CTASection
        body="A gifted session can help someone begin without carrying the cost alone."
        primaryHref={MELORA_GIFT_URL}
        primaryLabel="Sponsor a Session"
        secondaryHref="/services"
        secondaryLabel="View Services"
        title="Help someone begin, with dignity."
      />
    </main>
  );
}
