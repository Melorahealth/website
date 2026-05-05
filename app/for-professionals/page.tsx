import { BadgeCheck, CalendarDays, Globe2, LockKeyhole, Users } from "lucide-react";
import { InfoCard } from "@/components/cards/InfoCard";
import { LeadForm } from "@/components/forms/LeadForm";
import { professionalFields } from "@/components/forms/forms";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

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
      <PageHero
        body="MeloraHealth gives qualified therapists, psychologists, and psychiatrists a trusted place to meet structured care demand."
        eyebrow="For professionals"
        imageAlt="African therapist and client in respectful conversation"
        imageSrc="/assets/images/professional-care.png"
        primaryHref="#join"
        primaryLabel="Join the Network"
        title="A marketplace for serious care work."
        visualBody="Built for professionals who want reach without losing standards."
        visualTitle="Practice with structure."
      />
      <section className="section-space">
        <Container>
          <SectionHeader
            body="The network is designed for clinical quality, clear routing, and sustainable access across borders."
            eyebrow="Why join"
            title="Built around professional standards."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>
      <section className="section-space bg-cream/40" id="join">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            body="Submit your details for review. Credential upload is included as a product placeholder."
            eyebrow="Professional sign-up"
            title="Join as a professional."
          />
          <LeadForm
            fields={professionalFields}
            intro="Tell us about your practice, license, country, and availability."
            submitLabel="Submit profile"
            title="Professional Sign-Up"
          />
        </Container>
      </section>
    </main>
  );
}
