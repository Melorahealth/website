import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Gift, Globe2, Layers3, Search, ShieldCheck, Stethoscope, Users } from "lucide-react";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTASection } from "@/components/sections/CTASection";
import { DecorSection } from "@/components/sections/DecorSection";
import { SplitHero } from "@/components/sections/SplitHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createPageMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "About MeloraHealth",
  description:
    "MeloraHealth makes mental health care easier to find and trust, for people seeking support, the professionals who give it, and the communities and sponsors who make it possible.",
  path: "/about",
  image: "/assets/images/about-hero.png",
  imageAlt: "MeloraHealth's people and care coming together"
});

const entryPoints = [
  {
    title: "Find care",
    body: "Get matched to the right professional for you.",
    icon: Search
  },
  {
    title: "Give care",
    body: "Join the network as a licensed provider.",
    icon: Stethoscope
  },
  {
    title: "Fund care",
    body: "Sponsor sessions so someone else can begin.",
    icon: Gift
  },
  {
    title: "Bring it to your community",
    body: "Set up access for a team, campus, or group.",
    icon: Users
  }
];

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
    body: "Good care should feel human first, seen, understood, and never out of touch with where you come from.",
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
        eyebrow="About"
        imageAlt="MeloraHealth's people and care coming together"
        imageSrc="/assets/images/about-hero.png"
        title="Care for everyone, with real attention to who you are."
        variant={0}
      />
      <DecorSection
        containerClassName="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16"
        variant="light"
      >
        <div>
          <SectionHeader
            body="We're not a wellness blog or a one-size service. We're one place built for real support, however you come to it."
            eyebrow="Who we are"
            title="A steady place to feel like yourself again."
          />
          <ul className="mt-9 divide-y divide-sage/10 border-y border-sage/10">
            {entryPoints.map((item, index) => (
              <li className="group flex items-start gap-4 py-4" key={item.title}>
                <span className="relative mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-sage/10 bg-gradient-to-br from-white/90 to-cream/45 text-sage shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition duration-300 group-hover:border-gold/40 group-hover:text-gold">
                  <item.icon aria-hidden className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.6} />
                  <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-sage text-[0.62rem] font-bold text-white shadow-soft">
                    {index + 1}
                  </span>
                </span>
                <div>
                  <p className="font-serif text-lg leading-tight tracking-normal text-sage">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-ink/[0.62]">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="reveal relative aspect-[4/5] overflow-hidden rounded-[28px] bg-sage sm:aspect-[5/6]">
            <Image
              alt="A calm, grounding moment that feels like coming back to yourself"
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              src="/assets/images/about-steady-place.png"
            />
          </div>
          <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/45 bg-white/85 p-5 shadow-[0_24px_60px_rgba(17,27,23,0.2)] backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:max-w-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              How we work
            </p>
            <p className="mt-2 font-serif text-xl leading-snug tracking-normal text-sage">
              Spoken in your language. Rooted in African life.
            </p>
          </div>
        </div>
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
