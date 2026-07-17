import type { Metadata } from "next";
import { Baby, Heart, MessageCircle, Shield, Stethoscope, UserRound } from "lucide-react";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTASection } from "@/components/sections/CTASection";
import { DecorSection } from "@/components/sections/DecorSection";
import { SplitHero } from "@/components/sections/SplitHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MELORA_GIFT_URL } from "@/lib/app-links";
import { createPageMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Find Therapy and Mental Health Support",
  description:
    "Find therapy, psychiatry, women’s mental health support, postpartum care, couples therapy, and identity-affirming care that meets you where you are — online, private, and ready when you are.",
  path: "/for-you",
  image: "/assets/images/individual-reflection.jpg",
  imageAlt: "African woman seated quietly in a calm home interior"
});

const supportTypes = [
  {
    title: "Therapy",
    body: "Talk things through with someone trained to listen — even the parts that are hard to put into words.",
    icon: MessageCircle
  },
  {
    title: "Psychiatry",
    body: "When what you're feeling needs medical care, a doctor can help with assessment and medication.",
    icon: Stethoscope
  },
  {
    title: "Women’s therapy",
    body: "A place for the weight you carry — relationships, change, and the parts of life that ask a lot of you.",
    icon: UserRound
  },
  {
    title: "Postpartum therapy",
    body: "Gentle support for the exhaustion, the mental load, and the quiet shift in who you are after birth.",
    icon: Baby
  },
  {
    title: "Couples therapy",
    body: "A steadier space to talk, close the distance, and decide what comes next — together.",
    icon: Heart
  },
  {
    title: "Queer-affirming therapy",
    body: "Affirming support for queer people working through belonging, family, faith, and being yourself.",
    icon: Shield
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
        imageAlt="African woman seated quietly in a calm home interior"
        imageSrc="/assets/images/individual-reflection.jpg"
        primaryHref="#find-support"
        primaryLabel="Find Support"
        title="Support that meets you where you are."
        variant={2}
      />
      <DecorSection variant="light">
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
      <DecorSection
        containerClassName="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"
        id="find-support"
        variant="cream"
      >
        <SectionHeader
          body="Start with a private conversation. From there, we'll point you toward the right professional — online or in person."
          title="Take the next step — no long forms."
        />
        <div className="rounded-2xl border border-sage/10 bg-white/55 p-6 shadow-[0_22px_70px_rgba(38,66,54,0.07)] backdrop-blur-xl sm:p-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {["Tell us what's going on", "Get matched to the right person", "Start, privately"].map((step, index) => (
              <div className="border-l border-gold/50 pl-4" key={step}>
                <p className="text-xs font-semibold uppercase tracking-normal text-gold">
                  Step {index + 1}
                </p>
                <p className="mt-2 font-serif text-2xl leading-tight tracking-normal text-sage">
                  {step}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Contact MeloraHealth</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              View Services
            </ButtonLink>
          </div>
        </div>
      </DecorSection>
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
