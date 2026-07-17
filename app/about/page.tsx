import type { Metadata } from "next";
import { Compass, Globe2, Layers3, ShieldCheck } from "lucide-react";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTASection } from "@/components/sections/CTASection";
import { DecorSection } from "@/components/sections/DecorSection";
import { ImagePanel } from "@/components/sections/ImagePanel";
import { SplitHero } from "@/components/sections/SplitHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createPageMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "About MeloraHealth",
  description:
    "MeloraHealth makes mental health care easier to find and trust — for people seeking support, the professionals who give it, and the communities and sponsors who make it possible.",
  path: "/about",
  image: "/assets/images/hero-reflection.jpg",
  imageAlt: "African professional sitting in quiet reflection by a window"
});

const beliefs = [
  {
    title: "Mission",
    body: "We want care that's easy to understand, easy to reach, and genuinely worth your trust.",
    icon: Compass
  },
  {
    title: "Vision",
    body: "Care that reaches across the world while staying rooted in African life and the people who carry it with them.",
    icon: Globe2
  },
  {
    title: "Philosophy",
    body: "Good care should feel human first — seen, understood, and never out of touch with where you come from.",
    icon: ShieldCheck
  },
  {
    title: "All in one place",
    body: "Finding care, becoming a provider, and helping fund someone's healing all live together, not scattered across the internet.",
    icon: Layers3
  }
];

export default function AboutPage() {
  return (
    <main>
      <JsonLd
        data={createBreadcrumbJsonLd("/about", "About MeloraHealth")}
        id="about-breadcrumb-jsonld"
      />
      <SplitHero
        body="MeloraHealth is where people, therapists, and organizations come together around one thing: care that actually reaches the people who need it."
        bullets={["Spoken in your language", "Rooted in African life", "Personal where it counts"]}
        eyebrow="About"
        imageAlt="African professional sitting in quiet reflection by a window"
        imageSrc="/assets/images/hero-reflection.jpg"
        title="Care for everyone, with real attention to who you are."
        variant={0}
      />
      <DecorSection
        containerClassName="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
        variant="light"
      >
        <div>
          <SectionHeader
            body="We're not a wellness blog or a one-size service. We're a place built for real support — whether you need care, give care, fund it, or want to bring it to your community."
            eyebrow="Who we are"
            title="A steady place to feel like yourself again."
          />
        </div>
        <ImagePanel
          alt="African professionals in a calm modern care infrastructure meeting"
          height="medium"
          label="How we work"
          src="/assets/images/partners-meeting.jpg"
          title="Spoken in your language. Rooted in African life."
        />
      </DecorSection>
      <DecorSection variant="cream">
        <SectionHeader
          align="center"
          body="A few beliefs shape everything we build."
          eyebrow="What we stand for"
          title="Care, held together in one place."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {beliefs.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </DecorSection>
      <CTASection
        body="Whether you're looking for care, ready to offer it, or want to help someone else afford it, we'll help you take the next step."
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="/for-partners"
        secondaryLabel="Partner Inquiry"
        title="Let's build something that helps people."
      />
    </main>
  );
}
