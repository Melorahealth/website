import { Mail, MapPin, MessagesSquare, Route } from "lucide-react";
import { InfoCard } from "@/components/cards/InfoCard";
import { LeadForm } from "@/components/forms/LeadForm";
import { findSupportFields, partnerFields, professionalFields } from "@/components/forms/forms";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const contactRoutes = [
  {
    title: "Find support",
    body: "For individuals, couples, postpartum support, psychiatry, and identity-aware care.",
    icon: Route
  },
  {
    title: "Professional network",
    body: "For therapists, psychologists, psychiatrists, and qualified care providers.",
    icon: MessagesSquare
  },
  {
    title: "Partner inquiries",
    body: "For HMOs, employers, banks, telcos, institutions, and sponsors.",
    icon: Mail
  },
  {
    title: "Current regions",
    body: "Designed for Nigeria, UK diaspora, US diaspora, and broader global access.",
    icon: MapPin
  }
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        body="Use the route that matches your need. Each inquiry is structured so it can be sent to the right care or partnership path."
        eyebrow="Contact"
        imageAlt="African woman in a calm reflective interior"
        imageSrc="/assets/images/individual-reflection.png"
        title="Start in the right place."
        visualBody="The first message should make the next step clearer, not heavier."
        visualTitle="Inquiry routing."
      />
      <section className="section-space">
        <Container>
          <SectionHeader
            body="MeloraHealth supports direct care, professional onboarding, and organization-level access."
            eyebrow="Routes"
            title="Choose your path."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {contactRoutes.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>
      <section className="section-space bg-cream/40">
        <Container className="grid gap-8 lg:grid-cols-3">
          <LeadForm
            fields={findSupportFields}
            intro="For individuals seeking care or guidance on the right service."
            submitLabel="Submit request"
            title="Find Support"
          />
          <LeadForm
            fields={professionalFields}
            intro="For qualified professionals who want to join the marketplace."
            submitLabel="Submit profile"
            title="Join as Professional"
          />
          <LeadForm
            fields={partnerFields}
            intro="For organizations building care access, sponsorship, or API partnerships."
            submitLabel="Send inquiry"
            title="Partner Inquiry"
          />
        </Container>
      </section>
    </main>
  );
}
