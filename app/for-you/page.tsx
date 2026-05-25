import type { Metadata } from "next";
import { Baby, Heart, MessageCircle, Shield, Stethoscope, UserRound } from "lucide-react";
import { InfoCard } from "@/components/cards/InfoCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MELORA_GIFT_URL } from "@/lib/app-links";
import { createPageMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Find Therapy and Mental Health Support",
  description:
    "Find therapy, psychiatry, women’s mental health support, postpartum care, couples therapy, and identity-aware care that respects your context online now.",
  path: "/for-you",
  image: "/assets/images/individual-reflection.jpg",
  imageAlt: "African woman seated quietly in a calm home interior"
});

const supportTypes = [
  {
    title: "Therapy",
    body: "Talk with a trained professional about what is heavy, confusing, or hard to name.",
    icon: MessageCircle
  },
  {
    title: "Psychiatry",
    body: "Assessment and medication support when symptoms need medical attention.",
    icon: Stethoscope
  },
  {
    title: "Women’s therapy",
    body: "Support for emotional load, relationships, identity shifts, and life changes.",
    icon: UserRound
  },
  {
    title: "Postpartum therapy",
    body: "Support for identity shift, mental load, and emotional adjustment after birth.",
    icon: Baby
  },
  {
    title: "Couples therapy",
    body: "A steadier space for communication, distance, repair, and decision-making.",
    icon: Heart
  },
  {
    title: "Queer-affirming therapy",
    body: "Respectful support for queer people navigating belonging, family, faith, and personal truth.",
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
      <PageHero
        body="For anyone seeking emotional clarity, with deeper expertise in women’s therapy, postpartum therapy, relationships, and queer-affirming care."
        eyebrow="For you"
        imageAlt="African woman seated quietly in a calm home interior"
        imageSrc="/assets/images/individual-reflection.jpg"
        primaryHref="#find-support"
        primaryLabel="Find Support"
        title="Support that respects your context."
        visualBody="You can come with what is clear, or with what still has no name."
        visualTitle="A private route into care."
      />
      <section className="section-space relative overflow-hidden">
        <div aria-hidden className="pattern-band" />
        <Container>
          <SectionHeader
            body="Care is routed by need, format, location, and the kind of professional support that fits."
            eyebrow="Available care"
            title="Choose the support you need."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {supportTypes.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>
      <section className="section-space bg-cream/40" id="find-support">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeader
            body="Begin with a private conversation. MeloraHealth can route you toward online or offline care with an appropriate professional."
            eyebrow="Find support"
            title="Take the next step without filling a form."
          />
          <div className="rounded-2xl border border-sage/10 bg-white/45 p-6 shadow-[0_22px_70px_rgba(38,66,54,0.07)] sm:p-8">
            <div className="grid gap-4 sm:grid-cols-3">
              {["Share what is happening", "Get matched with care", "Begin privately"].map((step, index) => (
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
        </Container>
      </section>
      <CTASection
        body="A gifted session can help someone begin without carrying the cost alone."
        primaryHref={MELORA_GIFT_URL}
        primaryLabel="Sponsor a Session"
        secondaryHref="/services"
        secondaryLabel="View Services"
        title="Care can be funded with dignity."
      />
    </main>
  );
}
