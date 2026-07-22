import type { Metadata } from "next";
import { Building2, Landmark, Network, RadioTower, ShieldCheck, Users } from "lucide-react";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { LeadForm } from "@/components/forms/LeadForm";
import { partnerFields } from "@/components/forms/forms";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTASection } from "@/components/sections/CTASection";
import { DecorSection } from "@/components/sections/DecorSection";
import { SplitHero } from "@/components/sections/SplitHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MELORA_GIFT_URL } from "@/lib/app-links";
import { createPageMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Mental Health Access for Organizations",
  description:
    "Partner with MeloraHealth to fund, route, and embed culturally aware mental health access for employees, members, customers, and communities at scale.",
  path: "/for-partners",
  image: "/assets/images/partners-meeting.jpg",
  imageAlt: "African professionals in a calm partnership meeting"
});

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
      <JsonLd
        data={createBreadcrumbJsonLd("/for-partners", "Partner Inquiry")}
        id="partners-breadcrumb-jsonld"
      />
      <SplitHero
        body="MeloraHealth helps organizations fund, route, and embed mental health support for employees, members, customers, and communities."
        imageAlt="African professionals in a calm partnership meeting"
        imageSrc="/assets/images/partners-meeting.jpg"
        primaryHref="#partner-inquiry"
        primaryLabel="Send Partner Inquiry"
        secondaryHref="/for-employers"
        secondaryLabel="For employers"
        title="Care access for the people you serve."
        variant={3}
      />
      <DecorSection variant="light">
        <SectionHeader
          body="Partner models can support direct access, sponsored care, workforce programs, member benefits, or embedded product flows."
          title="Built for organizations with responsibility."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
        <div className="mt-14 grid gap-5 rounded-[28px] border border-sage/10 bg-white/70 p-5 shadow-soft backdrop-blur lg:grid-cols-4">
          {[
            ["01", "Sponsor sessions"],
            ["02", "Route care requests"],
            ["03", "Match professionals"],
            ["04", "Report without exposure"]
          ].map(([number, label]) => (
            <div className="rounded-2xl bg-cream/[0.55] p-5" key={label}>
              <p className="font-serif text-3xl leading-none text-sage">{number}</p>
              <p className="mt-4 text-sm font-semibold text-ink/[0.68]">{label}</p>
            </div>
          ))}
        </div>
      </DecorSection>
      <DecorSection
        containerClassName="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start"
        id="partner-inquiry"
        variant="cream"
      >
        <SectionHeader
          body="Share the population, product, or organization you want to support."
          title="Build a care access model."
        />
        <LeadForm
          fields={partnerFields}
          intro="A first step for HMOs, employers, banks, telcos, institutions, and sponsors."
          submitLabel="Send inquiry"
          title="Partner Inquiry"
        />
      </DecorSection>
      <CTASection
        body="Gift care credits can sit inside partner programs, diaspora sponsorships, or community support models."
        primaryHref={MELORA_GIFT_URL}
        primaryLabel="Explore Gift Care"
        secondaryHref="/services"
        secondaryLabel="View Services"
        title="Sponsorship can become access."
      />
    </main>
  );
}
