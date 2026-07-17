import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, FileText, HeartPulse, Layers3, UserRound } from "lucide-react";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTASection } from "@/components/sections/CTASection";
import { DecorSection } from "@/components/sections/DecorSection";
import { SplitHero } from "@/components/sections/SplitHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MELORA_GIFT_URL } from "@/lib/app-links";
import { resourceArticles } from "@/lib/resource-articles";
import { createPageMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Mental Health Resources and Guides",
  description:
    "Read grounded mental health guides on stress, postpartum adjustment, relationships, psychiatry, workplace care, and diaspora-supported access with clarity.",
  path: "/resources",
  image: "/assets/images/hero-reflection.jpg",
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
      <SplitHero
        body="Short, grounded insights for people, families, professionals, and organizations thinking about mental health care."
        bullets={["Grounded", "Plain language", "Never pain as content"]}
        eyebrow="Resources"
        imageAlt="African professional in quiet reflection near a city window"
        imageSrc="/assets/images/hero-reflection.jpg"
        title="Clear language for complex feelings."
        variant={6}
      />
      <DecorSection variant="light">
        <SectionHeader
          body="Grounded guides for the questions people ask before they are ready to begin care."
          eyebrow="Insights"
          title="Mental health without noise."
        />
        <div className="mt-10 grid gap-4">
          {resourceArticles.map((article) => (
            <Link
              className="group block rounded-2xl border border-sage/10 bg-white/55 p-6 shadow-[0_22px_70px_rgba(38,66,54,0.07)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-gold/40 hover:bg-white"
              href={`/resources/${article.slug}`}
              key={article.slug}
            >
              <p className="text-xs font-semibold uppercase tracking-normal text-gold">
                {article.category}
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight tracking-normal text-sage">
                {article.title}
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-ink/60">
                {article.summary}
              </p>
            </Link>
          ))}
        </div>
      </DecorSection>
      <DecorSection variant="cream">
        <SectionHeader
          body="More grounded reading, grouped by the moments people tend to search for."
          eyebrow="More guides"
          title="Read by what you're facing."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </DecorSection>
      <CTASection
        body="If what you are reading feels close to your life, you can move from insight into support."
        primaryHref="/contact"
        primaryLabel="Find Support"
        secondaryHref={MELORA_GIFT_URL}
        secondaryLabel="Gift Care"
        title="Understanding can lead to care."
      />
    </main>
  );
}
