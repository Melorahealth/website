import type { Metadata } from "next";
import { CalendarClock, EyeOff, Sparkles, Video } from "lucide-react";
import { LeadForm } from "@/components/forms/LeadForm";
import { demoFields } from "@/components/forms/forms";
import { JsonLd } from "@/components/seo/JsonLd";
import { DecorSection } from "@/components/sections/DecorSection";
import { SplitHero } from "@/components/sections/SplitHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createPageMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Book a Demo",
  description:
    "Book a demo of MeloraHealth for your organization. See how employers, HMOs, government institutions, and universities give their people confidential, licensed, culturally aware mental health care.",
  path: "/book-demo",
  image: "/assets/images/portrait-of-happy-multiracial-business-team-at-con-2026-01-09-11-29-22-utc.jpg",
  imageAlt: "A diverse team of smiling colleagues with lanyards in a bright modern office"
});

const expectations = [
  {
    title: "A short, no-pressure call",
    body: "Tell us who you want to support and what you're trying to solve. No hard pitch.",
    icon: Video
  },
  {
    title: "A program shaped to you",
    body: "We walk you through what access could look like for your team, members, or community.",
    icon: Sparkles
  },
  {
    title: "Privacy from the start",
    body: "Your inquiry is routed privately, and any program is built confidential by default.",
    icon: EyeOff
  }
];

export default function BookDemoPage() {
  return (
    <main>
      <JsonLd
        data={createBreadcrumbJsonLd("/book-demo", "Book a Demo")}
        id="book-demo-breadcrumb-jsonld"
      />

      <SplitHero
        body="See how MeloraHealth gives your people confidential, licensed, culturally aware mental health care. Tell us a little about your organization and we'll walk you through a program that fits."
        eyebrow="Book a demo"
        highlight="one conversation."
        imageAlt="A diverse team of smiling colleagues with lanyards in a bright modern office"
        imageSrc="/assets/images/portrait-of-happy-multiracial-business-team-at-con-2026-01-09-11-29-22-utc.jpg"
        primaryHref="#book-demo-form"
        primaryIcon={CalendarClock}
        primaryLabel="Book a demo"
        title="Good care for your people can start with"
        variant={2}
      />

      <DecorSection
        containerClassName="grid gap-12 lg:grid-cols-3 lg:gap-8"
        variant="light"
      >
        {expectations.map((item) => (
          <div className="reveal" key={item.title}>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sage/10 bg-gradient-to-br from-white/85 to-cream/40 text-sage shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
              <item.icon aria-hidden className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.5} />
            </span>
            <h3 className="mt-6 font-serif text-xl leading-tight tracking-normal text-sage">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-ink/[0.62]">{item.body}</p>
          </div>
        ))}
      </DecorSection>

      <section className="section-space" id="book-demo-form">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            body="Share a few details about your organization and what you're hoping to support. We'll reach out to set up a time and walk you through what a program could look like."
            title="Tell us about your organization."
          />
          <LeadForm
            fields={demoFields}
            formEndpoint={process.env.NEXT_PUBLIC_FORMSPREE_DEMO_ENDPOINT}
            intro="A first step for employers, HMOs, government institutions, and universities."
            subject="New demo request"
            submitLabel="Book a demo"
            title="Book a demo"
          />
        </Container>
      </section>
    </main>
  );
}
