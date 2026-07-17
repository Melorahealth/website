import type { Metadata } from "next";
import { BadgeCheck, CalendarDays, Globe2, LockKeyhole, Users } from "lucide-react";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { DecorSection } from "@/components/sections/DecorSection";
import { SplitHero } from "@/components/sections/SplitHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createPageMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Join the MeloraHealth Care Network",
  description:
    "Qualified therapists, psychologists, psychiatrists, and care providers can join MeloraHealth to meet structured African and diaspora care demand with trust.",
  path: "/for-professionals",
  image: "/assets/images/professional-care.jpg",
  imageAlt: "African therapist and client in respectful conversation"
});

const benefits = [
  {
    title: "Structured demand",
    body: "Receive care requests from individuals, sponsors, and institutional partners.",
    icon: Users
  },
  {
    title: "Cross-border reach",
    body: "Serve African and diaspora clients through a marketplace designed around context.",
    icon: Globe2
  },
  {
    title: "Clinical trust",
    body: "Credential checks, routing, and quality signals protect both clients and professionals.",
    icon: BadgeCheck
  },
  {
    title: "Flexible availability",
    body: "Offer sessions around your schedule, specialty, and supported formats.",
    icon: CalendarDays
  },
  {
    title: "Privacy first",
    body: "Professional profiles and care handling are designed for discretion and clarity.",
    icon: LockKeyhole
  }
];

export default function ProfessionalsPage() {
  return (
    <main>
      <JsonLd
        data={createBreadcrumbJsonLd("/for-professionals", "Join as a Professional")}
        id="professionals-breadcrumb-jsonld"
      />
      <SplitHero
        body="MeloraHealth gives qualified therapists, psychologists, and psychiatrists a trusted place to meet structured care demand."
        imageAlt="African therapist and client in respectful conversation"
        imageSrc="/assets/images/professional-care.jpg"
        primaryHref="#join"
        primaryLabel="Join the Network"
        title="A marketplace for serious care work."
        variant={4}
      />
      <DecorSection variant="light">
        <SectionHeader
          body="The network is designed for clinical quality, clear routing, and sustainable access across borders."
          title="Built around professional standards."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </DecorSection>
      <DecorSection
        containerClassName="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"
        id="join"
        variant="cream"
      >
        <SectionHeader
          body="Professional onboarding is handled through a review conversation so credentials, specialty, location, and availability can be understood with care."
          title="Join as a professional."
        />
        <div className="rounded-2xl border border-sage/10 bg-white/55 p-6 shadow-[0_22px_70px_rgba(38,66,54,0.07)] backdrop-blur-xl sm:p-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {["Share your practice", "Complete review", "Receive routed clients"].map((step, index) => (
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
            <ButtonLink href="/contact">Contact Onboarding</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              View Care Areas
            </ButtonLink>
            <ButtonLink href="/for-government" variant="secondary">
              For Government
            </ButtonLink>
          </div>
        </div>
      </DecorSection>
    </main>
  );
}
