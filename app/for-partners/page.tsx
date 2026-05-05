import { Building2, Landmark, Network, RadioTower, ShieldCheck, Users } from "lucide-react";
import { InfoCard } from "@/components/cards/InfoCard";
import { LeadForm } from "@/components/forms/LeadForm";
import { partnerFields } from "@/components/forms/forms";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const partners = [
  {
    title: "HMOs",
    body: "Extend member care with culturally aware therapy, psychiatry, and routed support.",
    icon: ShieldCheck
  },
  {
    title: "Employers",
    body: "Offer private support for stress, relationships, grief, identity, and work pressure.",
    icon: Building2
  },
  {
    title: "Banks and telcos",
    body: "Use gift credits and embedded access to support customer and community care.",
    icon: RadioTower
  },
  {
    title: "Institutions",
    body: "Route students, staff, or community members into support without stigma.",
    icon: Landmark
  },
  {
    title: "API partners",
    body: "Connect care routing, credits, eligibility, and reporting into existing products.",
    icon: Network
  },
  {
    title: "Sponsors",
    body: "Fund sessions for specific communities while protecting dignity and discretion.",
    icon: Users
  }
];

export default function PartnersPage() {
  return (
    <main>
      <PageHero
        body="MeloraHealth helps organizations fund, route, and embed mental health support for employees, members, customers, and communities."
        eyebrow="For partners"
        imageAlt="African professionals in a calm partnership meeting"
        imageSrc="/assets/images/partners-meeting.png"
        primaryHref="#partner-inquiry"
        primaryLabel="Send Partner Inquiry"
        title="Care access for the people you serve."
        visualBody="A B2B platform for care access, sponsored sessions, and API-ready routing."
        visualTitle="Access, sponsorship, and routing in one system."
      />
      <section className="section-space relative overflow-hidden">
        <Container>
          <SectionHeader
            body="Partner models can support direct access, sponsored care, workforce programs, member benefits, or embedded product flows."
            eyebrow="Partner paths"
            title="Built for organizations with responsibility."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>
          <div className="mt-14 grid gap-5 rounded-[28px] border border-sage/10 bg-white/70 p-5 shadow-soft backdrop-blur lg:grid-cols-4">
            {[
              ["01", "Sponsor sessions"],
              ["02", "Route care requests"],
              ["03", "Match professionals"],
              ["04", "Report without exposure"]
            ].map(([number, label]) => (
              <div className="rounded-2xl bg-cream/55 p-5" key={label}>
                <p className="font-serif text-3xl leading-none text-sage">{number}</p>
                <p className="mt-4 text-sm font-semibold text-ink/68">{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="section-space bg-cream/40" id="partner-inquiry">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            body="Share the population, product, or organization you want to support."
            eyebrow="Partner inquiry"
            title="Build a care access model."
          />
          <LeadForm
            fields={partnerFields}
            intro="A first step for HMOs, employers, banks, telcos, institutions, and sponsors."
            submitLabel="Send inquiry"
            title="Partner Inquiry"
          />
        </Container>
      </section>
      <CTASection
        body="Gift care credits can sit inside partner programs, diaspora sponsorships, or community support models."
        primaryHref="/gift-care"
        primaryLabel="Explore Gift Care"
        secondaryHref="/services"
        secondaryLabel="View Services"
        title="Sponsorship can become access."
      />
    </main>
  );
}
