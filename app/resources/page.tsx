import type { Metadata } from "next";
import { BookOpen, Clock, FileText, HeartPulse, Layers3, UserRound } from "lucide-react";
import { InfoCard } from "@/components/cards/InfoCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createPageMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Mental Health Resources and Guides",
  description:
    "Read grounded mental health guides on stress, postpartum adjustment, relationships, psychiatry, workplace care, and diaspora-supported access with clarity.",
  path: "/resources",
  image: "/assets/images/hero-reflection.png",
  imageAlt: "African professional in quiet reflection near a city window"
});

const resources = [
  {
    title: "When stress becomes a signal",
    body: "How to notice the difference between a difficult week and a pattern that needs support.",
    icon: HeartPulse,
    meta: "Guide"
  },
  {
    title: "After birth, identity changes too",
    body: "A calm look at postpartum adjustment, mental load, and the private shift many parents face.",
    icon: UserRound,
    meta: "Postpartum"
  },
  {
    title: "What couples bring into the room",
    body: "Distance, silence, repair, family pressure, and the work of speaking clearly again.",
    icon: BookOpen,
    meta: "Relationships"
  },
  {
    title: "For employers measuring care",
    body: "Why privacy, access, and structured support matter more than surface-level benefits.",
    icon: Layers3,
    meta: "B2B"
  },
  {
    title: "The first psychiatry appointment",
    body: "What assessment can look like and why medical support is sometimes the right step.",
    icon: FileText,
    meta: "Clinical"
  },
  {
    title: "Care across time zones",
    body: "How diaspora families can fund care while letting the recipient keep agency.",
    icon: Clock,
    meta: "Gift care"
  }
];

export default function ResourcesPage() {
  return (
    <main>
      <JsonLd
        data={createBreadcrumbJsonLd("/resources", "Mental Health Resources")}
        id="resources-breadcrumb-jsonld"
      />
      <PageHero
        body="Short, grounded insights for people, families, professionals, and organizations thinking about mental health care."
        eyebrow="Resources"
        imageAlt="African professional in quiet reflection near a city window"
        imageSrc="/assets/images/hero-reflection.png"
        title="Clear language for complex feelings."
        visualBody="Resources should make care easier to approach, not turn pain into content."
        visualTitle="Read with steadiness."
      />
      <section className="section-space">
        <Container>
          <SectionHeader
            body="These are editorial placeholders ready for a content system, CMS, or published article pages."
            eyebrow="Insights"
            title="Mental health without noise."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        body="If what you are reading feels close to your life, you can move from insight into support."
        primaryHref="/contact"
        primaryLabel="Find Support"
        secondaryHref="/gift-care"
        secondaryLabel="Gift Care"
        title="Understanding can lead to care."
      />
    </main>
  );
}
