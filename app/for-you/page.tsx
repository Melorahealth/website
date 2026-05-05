import { Baby, Heart, MessageCircle, Shield, Stethoscope, UserRound } from "lucide-react";
import { InfoCard } from "@/components/cards/InfoCard";
import { LeadForm } from "@/components/forms/LeadForm";
import { findSupportFields } from "@/components/forms/forms";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

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
      <PageHero
        body="For anyone seeking emotional clarity, with deeper expertise in women’s therapy, postpartum therapy, relationships, and queer-affirming care."
        eyebrow="For you"
        imageAlt="African woman seated quietly in a calm home interior"
        imageSrc="/assets/images/individual-reflection.png"
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
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            body="Share the basics. The next layer can route you toward online or offline care with an appropriate professional."
            eyebrow="Find support"
            title="Tell us what you are carrying."
          />
          <LeadForm
            fields={findSupportFields}
            intro="A calm first step for matching your request to the right care path."
            submitLabel="Submit request"
            title="Find Support"
          />
        </Container>
      </section>
      <CTASection
        body="A gifted session can help someone begin without carrying the cost alone."
        primaryHref="/gift-care"
        primaryLabel="Sponsor a Session"
        secondaryHref="/services"
        secondaryLabel="View Services"
        title="Care can be funded with dignity."
      />
    </main>
  );
}
