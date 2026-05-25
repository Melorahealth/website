import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Baby, Heart, Laptop, MapPin, MessageCircle, Shield, Stethoscope, Users } from "lucide-react";
import { InfoCard } from "@/components/cards/InfoCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MELORA_GIFT_URL } from "@/lib/app-links";
import { createPageMetadata } from "@/lib/seo";
import { serviceLandingPageGroups, serviceLandingPages } from "@/lib/service-landing-pages";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Mental Health Services",
  description:
    "Explore online and offline therapy, psychiatry, couples care, postpartum support, and identity-aware mental health services routed with context in one place.",
  path: "/services",
  image: "/assets/images/professional-care.jpg",
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
    title: "Women's therapy",
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
        body="MeloraHealth brings online and offline care into one calm routing system, including women's therapy, postpartum therapy, queer-affirming therapy, couples care, and psychiatry."
        eyebrow="Services"
        imageAlt="African therapist and client seated in a respectful care conversation"
        imageSrc="/assets/images/professional-care.jpg"
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
      <section className="section-space bg-cream/40">
        <Container>
          <SectionHeader
            body="Some people begin with a country, a care format, or someone they want to support. These routes make that first step more precise."
            eyebrow="Focused care routes"
            title="Find support by region or need."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {serviceLandingPageGroups.map((group) => (
              <div
                className="rounded-2xl border border-sage/10 bg-white/45 p-6 shadow-[0_22px_70px_rgba(38,66,54,0.07)]"
                key={group}
              >
                <h2 className="font-serif text-2xl leading-tight tracking-normal text-sage">
                  {group}
                </h2>
                <div className="mt-6 grid gap-2">
                  {serviceLandingPages
                    .filter((page) => page.group === group)
                    .map((page) => (
                      <Link
                        className="group flex min-h-12 items-center justify-between rounded-xl border border-sage/10 bg-cream/35 px-4 text-sm font-semibold text-ink/70 transition hover:border-gold/40 hover:bg-white hover:text-sage"
                        href={`/services/${page.slug}`}
                        key={page.slug}
                      >
                        <span>{page.linkLabel}</span>
                        <ArrowRight
                          aria-hidden
                          className="h-4 w-4 shrink-0 text-gold transition group-hover:translate-x-0.5"
                          strokeWidth={1.7}
                        />
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        body="Tell us your location, preferred format, and the kind of support you need."
        primaryHref="/contact"
        primaryLabel="Find Support"
        secondaryHref={MELORA_GIFT_URL}
        secondaryLabel="Sponsor a Session"
        title="Start with one clear request."
      />
    </main>
  );
}
