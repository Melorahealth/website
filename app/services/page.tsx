import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Baby, Heart, Laptop, MapPin, MessageCircle, Shield, Stethoscope, Users, UsersRound } from "lucide-react";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTASection } from "@/components/sections/CTASection";
import { DecorSection } from "@/components/sections/DecorSection";
import { SplitHero } from "@/components/sections/SplitHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MELORA_GIFT_URL } from "@/lib/app-links";
import { createPageMetadata } from "@/lib/seo";
import { serviceLandingPageGroups, serviceLandingPages } from "@/lib/service-landing-pages";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Mental Health Services",
  description:
    "Explore online and in-person therapy, psychiatry, couples care, postpartum support, and identity-affirming mental health care, all in one place, matched to what you actually need.",
  path: "/services",
  image: "/assets/images/services-hero.png",
  imageAlt: "A calm, welcoming moment that captures culturally aware mental health care"
});

const careFormats = [
  {
    title: "Individual therapy",
    body: "One-to-one support for stress, anxiety, grief, and the changes life asks you to carry.",
    icon: MessageCircle,
    href: "/services/individual-therapy"
  },
  {
    title: "Couples therapy",
    body: "Support to talk honestly, rebuild trust, and move through the hard transitions together.",
    icon: Users,
    href: "/services/couples-therapy"
  },
  {
    title: "Group therapy",
    body: "Shared, guided support with others facing something similar, so you don't carry it alone.",
    icon: UsersRound,
    href: "/services/group-therapy"
  },
  {
    title: "Women's therapy",
    body: "A place for the load you hold quietly, relationships, identity, and the pressure no one sees.",
    icon: Heart,
    href: "/services/womens-therapy"
  },
  {
    title: "Postpartum therapy",
    body: "Care for the exhaustion, the mental load, and the private shift in who you are after birth.",
    icon: Baby,
    href: "/services/postpartum-therapy"
  },
  {
    title: "Queer-affirming therapy",
    body: "Affirming care for queer people working through identity, belonging, family, faith, and change.",
    icon: Shield,
    href: "/services/queer-affirming-therapy"
  },
  {
    title: "Psychiatry",
    body: "Medical support when you need it, assessment, medication, and someone checking in over time.",
    icon: Stethoscope,
    href: "/services/psychiatry"
  },
  {
    title: "Online care",
    body: "Private video or voice sessions you can join from anywhere, across the city or across borders.",
    icon: Laptop
  },
  {
    title: "In-person care",
    body: "When you'd rather sit in the same room, we'll help you find a vetted professional near you.",
    icon: MapPin
  }
];

export default function ServicesPage() {
  return (
    <main>
      <JsonLd
        data={createBreadcrumbJsonLd("/services", "Mental Health Services")}
        id="services-breadcrumb-jsonld"
      />
      <SplitHero
        body="MeloraHealth brings online and in-person care together in one calm place, women's therapy, postpartum care, queer-affirming therapy, couples support, and psychiatry."
        eyebrow="Services"
        imageAlt="A calm, welcoming moment that captures culturally aware mental health care"
        imageSrc="/assets/images/services-hero.png"
        primaryHref="/contact"
        primaryLabel="Find Support"
        title="Care that fits the moment."
        variant={7}
      />
      <DecorSection variant="light">
        <SectionHeader
          body="Each kind of care can come to you directly, through a referral, as a gifted session, or through your employer or community."
          eyebrow="Care formats"
          title="Specialized care, without the noise."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {careFormats.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </DecorSection>
      <DecorSection variant="cream">
        <SectionHeader
          body="Some people start with a place, a way of meeting, or someone they want to help. These shortcuts make that first step a little easier."
          eyebrow="Focused care routes"
          title="Find support by region or need."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {serviceLandingPageGroups.map((group) => (
            <div
              className="rounded-2xl border border-sage/10 bg-white/55 p-6 shadow-[0_22px_70px_rgba(38,66,54,0.07)] backdrop-blur-xl"
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
      </DecorSection>
      <CTASection
        body="Tell us where you are, how you'd like to meet, and what you're going through."
        primaryHref="/contact"
        primaryLabel="Find Support"
        secondaryHref={MELORA_GIFT_URL}
        secondaryLabel="Sponsor a Session"
        title="Start with one simple message."
      />
    </main>
  );
}
