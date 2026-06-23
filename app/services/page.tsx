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
    "Explore online and in-person therapy, psychiatry, couples care, postpartum support, and identity-affirming mental health care — all in one place, matched to what you actually need.",
  path: "/services",
  image: "/assets/images/professional-care.jpg",
  imageAlt: "African therapist and client seated in a respectful care conversation"
});

const careFormats = [
  {
    title: "Online care",
    body: "Private video or voice sessions you can join from anywhere — across the city or across borders.",
    icon: Laptop
  },
  {
    title: "In-person care",
    body: "When you'd rather sit in the same room, we'll help you find a vetted professional near you.",
    icon: MapPin
  },
  {
    title: "Individual therapy",
    body: "One-to-one support for stress, anxiety, grief, and the changes life asks you to carry.",
    icon: MessageCircle
  },
  {
    title: "Women's therapy",
    body: "A place for the load you hold quietly — relationships, identity, and the pressure no one sees.",
    icon: Heart
  },
  {
    title: "Postpartum therapy",
    body: "Care for the exhaustion, the mental load, and the private shift in who you are after birth.",
    icon: Baby
  },
  {
    title: "Queer-affirming therapy",
    body: "Affirming care for queer people working through identity, belonging, family, faith, and change.",
    icon: Shield
  },
  {
    title: "Couples therapy",
    body: "Support to talk honestly, rebuild trust, and move through the hard transitions together.",
    icon: Users
  },
  {
    title: "Psychiatry",
    body: "Medical support when you need it — assessment, medication, and someone checking in over time.",
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
        body="MeloraHealth brings online and in-person care together in one calm place — women's therapy, postpartum care, queer-affirming therapy, couples support, and psychiatry."
        eyebrow="Services"
        imageAlt="African therapist and client seated in a respectful care conversation"
        imageSrc="/assets/images/professional-care.jpg"
        primaryHref="/contact"
        primaryLabel="Find Support"
        title="Care that fits the moment."
        visualBody="How you meet matters. So does the person on the other side of it."
        visualTitle="Online or in person."
      />
      <section className="section-space">
        <Container>
          <SectionHeader
            body="Each kind of care can come to you directly, through a referral, as a gifted session, or through your employer or community."
            eyebrow="Care formats"
            title="Specialized care, without the noise."
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
            body="Some people start with a place, a way of meeting, or someone they want to help. These shortcuts make that first step a little easier."
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
