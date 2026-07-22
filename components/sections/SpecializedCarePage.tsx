import { Compass, Gift, HeartHandshake, MessageCircle, ShieldCheck } from "lucide-react";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTASection } from "@/components/sections/CTASection";
import { DecorSection } from "@/components/sections/DecorSection";
import { NextStepSection } from "@/components/sections/NextStepSection";
import { SplitHero } from "@/components/sections/SplitHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MELORA_GIFT_URL } from "@/lib/app-links";
import type { ServiceLandingPage as ServiceLandingPageData } from "@/lib/service-landing-pages";
import { createBreadcrumbJsonLd, createServiceJsonLd } from "@/lib/structured-data";

const cardIcons = [MessageCircle, HeartHandshake, ShieldCheck];

// Deterministic hero variant per slug so each care page gets a distinct blob
// mark arrangement while staying stable across builds.
function heroVariant(slug: string) {
  const sum = slug.split("").reduce((total, char) => total + char.charCodeAt(0), 0);
  return sum % 6;
}

type SpecializedCarePageProps = {
  page: ServiceLandingPageData;
};

/**
 * Renders a specialized-care page in the "People We Serve" layout
 * (SplitHero → care-type grid → next-step → CTA), driven by the shared
 * service landing data. Regional service pages keep the ServiceLandingPage
 * template.
 */
export function SpecializedCarePage({ page }: SpecializedCarePageProps) {
  const path = `/services/${page.slug}`;

  return (
    <main>
      <JsonLd
        data={createBreadcrumbJsonLd(path, page.linkLabel)}
        id={`${page.slug}-breadcrumb-jsonld`}
      />
      <JsonLd
        data={createServiceJsonLd({
          path,
          name: page.linkLabel,
          description: page.metaDescription,
          image: page.imageSrc
        })}
        id={`${page.slug}-service-jsonld`}
      />

      <SplitHero
        body={page.body}
        imageAlt={page.imageAlt}
        imageSrc={page.imageSrc}
        primaryHref="#find-support"
        primaryLabel="Find Support"
        secondaryHref="/services"
        secondaryLabel="Explore all care"
        title={page.title}
        variant={heroVariant(page.slug)}
      />

      <DecorSection variant="light">
        <SectionHeader body={page.introBody} title={page.introTitle} />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {page.cards.map((card, index) => (
            <FeatureCard
              body={card.body}
              icon={cardIcons[index] ?? Compass}
              key={card.title}
              title={card.title}
            />
          ))}
        </div>
      </DecorSection>

      <NextStepSection body={page.nextStepBody} />

      <CTASection
        body="Tell us what's going on, and we'll help you find the right professional, online or in person, privately."
        primaryHref="/contact"
        primaryLabel="Find Support"
        secondaryHref={MELORA_GIFT_URL}
        secondaryIcon={Gift}
        secondaryLabel="Gift a Session"
        title="Care can start with one message."
      />
    </main>
  );
}
