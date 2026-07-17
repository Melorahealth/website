import type { Metadata } from "next";
import { Mail, MapPin, MessagesSquare, Route } from "lucide-react";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { LeadForm } from "@/components/forms/LeadForm";
import { contactFields } from "@/components/forms/forms";
import { JsonLd } from "@/components/seo/JsonLd";
import { CareNotice } from "@/components/sections/CareNotice";
import { DecorSection } from "@/components/sections/DecorSection";
import { SplitHero } from "@/components/sections/SplitHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createPageMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Contact MeloraHealth",
  description:
    "Contact MeloraHealth for therapy requests, professional onboarding, partner inquiries, sponsorships, and culturally aware mental health access programs.",
  path: "/contact",
  image: "/assets/images/individual-reflection.jpg",
  imageAlt: "African woman in a calm reflective interior"
});

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
      <JsonLd
        data={createBreadcrumbJsonLd("/contact", "Contact MeloraHealth")}
        id="contact-breadcrumb-jsonld"
      />
      <SplitHero
        body="Use the route that matches your need. Each inquiry is structured so it can be sent to the right care or partnership path."
        bullets={["Care requests", "Professional onboarding", "Partner inquiries"]}
        eyebrow="Contact"
        imageAlt="African woman in a calm reflective interior"
        imageSrc="/assets/images/individual-reflection.jpg"
        title="Start in the right place."
        variant={1}
      />
      <DecorSection variant="light">
        <SectionHeader
          body="MeloraHealth supports direct care, professional onboarding, and organization-level access."
          eyebrow="Routes"
          title="Choose your path."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {contactRoutes.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </DecorSection>
      <DecorSection
        containerClassName="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start"
        variant="cream"
      >
        <div className="reveal">
          <h2 className="font-serif text-4xl leading-tight tracking-normal text-sage sm:text-5xl">
            Tell us what you need. We’ll route it from there.
          </h2>
          <p className="mt-5 text-base leading-7 text-ink/[0.64]">
            Whether you are looking for care, joining as a qualified
            professional, sponsoring access, or building a partnership, one
            inquiry is enough to start the right conversation.
          </p>
          <div className="mt-8 grid gap-3 text-sm font-semibold text-sage">
            {["Care requests", "Professional onboarding", "Partner and grant inquiries"].map((item) => (
              <div
                className="rounded-2xl border border-white/[0.45] bg-white/30 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.38)] backdrop-blur-2xl"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
          <CareNotice className="mt-6" />
        </div>
        <LeadForm
          fields={contactFields}
          intro="Choose the route that best matches your request. If you are unsure, share what you can and the team can direct the next step."
          submitLabel="Send inquiry"
          title="Contact MeloraHealth"
        />
      </DecorSection>
    </main>
  );
}
