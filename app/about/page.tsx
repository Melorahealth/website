import type { Metadata } from "next";
import { Compass, Globe2, Layers3, ShieldCheck } from "lucide-react";
import { InfoCard } from "@/components/cards/InfoCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTASection } from "@/components/sections/CTASection";
import { ImagePanel } from "@/components/sections/ImagePanel";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createPageMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "About MeloraHealth",
  description:
    "Learn how MeloraHealth builds culturally aware mental health access for individuals, professionals, sponsors, employers, and diaspora communities worldwide.",
  path: "/about",
  image: "/assets/images/hero-reflection.jpg",
  imageAlt: "African professional sitting in quiet reflection by a window"
});

const beliefs = [
  {
    title: "Mission",
    body: "Make mental health care easier to understand, access, and trust.",
    icon: Compass
  },
  {
    title: "Vision",
    body: "A global care platform grounded in African realities and diaspora connection.",
    icon: Globe2
  },
  {
    title: "Philosophy",
    body: "Clinical trust should feel human, emotionally precise, and culturally aware.",
    icon: ShieldCheck
  },
  {
    title: "Infrastructure",
    body: "Care access, professional supply, sponsorship, and API routes belong in one system.",
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
      <PageHero
        body="MeloraHealth is a mental health infrastructure platform for people, professionals, and organizations."
        eyebrow="About"
        imageAlt="African professional sitting in quiet reflection by a window"
        imageSrc="/assets/images/hero-reflection.jpg"
        title="A platform for everyone that deeply understands specific people."
        visualBody="Global in language. African in grounding. Specialized where it matters."
        visualTitle="Understand. Heal. Become."
      />
      <section className="section-space">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionHeader
                body="The platform is not a content brand or a narrow niche. It is a care system designed for direct support, professional access, sponsorship, and institutional partnerships."
                eyebrow="Position"
                title="Calm infrastructure for emotional clarity."
              />
            </div>
            <ImagePanel
              alt="African professionals in a calm modern care infrastructure meeting"
              height="medium"
              label="Care system"
              src="/assets/images/partners-meeting.jpg"
              title="Global in language. African in grounding."
            />
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {beliefs.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        body="Whether you need care, want to provide care, or want to fund access, MeloraHealth can route the next step."
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="/for-partners"
        secondaryLabel="Partner Inquiry"
        title="Build care with the right structure."
      />
    </main>
  );
}
