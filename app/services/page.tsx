import type { Metadata } from "next";
import { Baby, Heart, Laptop, MapPin, MessageCircle, Shield, Stethoscope, Users } from "lucide-react";
import { InfoCard } from "@/components/cards/InfoCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createPageMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Mental Health Services",
  description:
    "Explore online and offline therapy, psychiatry, couples care, postpartum support, and identity-aware mental health services routed with context in one place.",
  path: "/services",
  image: "/assets/images/professional-care.png",
  imageAlt: "African therapist and client seated in a respectful care conversation"
});

const careFormats = [
  {
    title: "Online care",
    body: "Private video or audio sessions for people accessing support across cities and borders.",
    icon: Laptop
  },
  {
    title: "Offline care",
    body: "In-person care pathways where vetted professionals and local access are available.",
    icon: MapPin
  },
  {
    title: "Individual therapy",
    body: "One-to-one support for emotional clarity, stress, anxiety, grief, and life changes.",
    icon: MessageCircle
  },
  {
    title: "Women’s therapy",
    body: "Support for emotional load, identity shifts, relationships, and pressure held quietly.",
    icon: Heart
  },
  {
    title: "Postpartum therapy",
    body: "Care for adjustment after birth, mental load, exhaustion, and the private identity shift.",
    icon: Baby
  },
  {
    title: "Queer-affirming therapy",
    body: "Respectful care for queer people navigating identity, belonging, family, faith, and change.",
    icon: Shield
  },
  {
    title: "Couples therapy",
    body: "Guided support for communication, distance, trust, and difficult transitions.",
    icon: Users
  },
  {
    title: "Psychiatry",
    body: "Medical mental health support for assessment, medication, and ongoing review.",
    icon: Stethoscope
  },
];

export default function ServicesPage() {
  return (
    <main>
      <JsonLd
        data={createBreadcrumbJsonLd("/services", "Mental Health Services")}
        id="services-breadcrumb-jsonld"
      />
      <PageHero
        body="MeloraHealth brings online and offline care into one calm routing system, including women’s therapy, postpartum therapy, queer-affirming therapy, couples care, and psychiatry."
        eyebrow="Services"
        imageAlt="African therapist and client seated in a respectful care conversation"
        imageSrc="/assets/images/professional-care.png"
        primaryHref="/contact"
        primaryLabel="Find Support"
        title="Care that fits the moment."
        visualBody="The right format matters. So does the professional behind it."
        visualTitle="Online and offline access."
      />
      <section className="section-space">
        <Container>
          <SectionHeader
            body="Each service can be routed for individual users, professional referrals, sponsored sessions, or institutional programs."
            eyebrow="Care formats"
            title="Specialized care without unnecessary noise."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {careFormats.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        body="Tell us your location, preferred format, and the kind of support you need."
        primaryHref="/contact"
        primaryLabel="Find Support"
        secondaryHref="/gift-care"
        secondaryLabel="Sponsor a Session"
        title="Start with one clear request."
      />
    </main>
  );
}
