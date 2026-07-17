import type { Metadata } from "next";
import { Gift, HandHeart, HeartHandshake, WalletCards } from "lucide-react";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { DecorSection } from "@/components/sections/DecorSection";
import { SplitHero } from "@/components/sections/SplitHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MELORA_GIFT_URL } from "@/lib/app-links";
import { createPageMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Gift Therapy Sessions and Care Credits",
  description:
    "Sponsor therapy sessions or send care credits so family, communities, and people who need support can begin professional mental health care with dignity.",
  path: "/gift-care",
  image: "/assets/images/postpartum-care.jpg",
  imageAlt: "African mother holding a newborn in calm natural light"
});

const giftOptions = [
  {
    title: "Single session",
    body: "Fund one session for a person you know or someone routed through the platform.",
    icon: Gift
  },
  {
    title: "Care credits",
    body: "Give flexible credits that can be applied to therapy or specialist support.",
    icon: WalletCards
  },
  {
    title: "Family support",
    body: "Help a loved one access care without making the support feel transactional.",
    icon: HeartHandshake
  },
  {
    title: "Community pool",
    body: "Sponsor sessions for people in a group, program, or community context.",
    icon: HandHeart
  }
];

export default function GiftCarePage() {
  return (
    <main>
      <JsonLd
        data={createBreadcrumbJsonLd("/gift-care", "Gift a Session")}
        id="gift-care-breadcrumb-jsonld"
      />
      <SplitHero
        body="Sponsor a Session lets people fund care for family, communities, and people who need support but may not be able to begin alone."
        bullets={["Private and dignified", "Diaspora-friendly", "Flexible care credits"]}
        eyebrow="Gift care"
        imageAlt="African mother holding a newborn in calm natural light"
        imageSrc="/assets/images/postpartum-care.jpg"
        primaryHref={MELORA_GIFT_URL}
        primaryLabel="Gift a Session"
        title="Care can be carried together."
        variant={5}
      />
      <DecorSection variant="light">
        <SectionHeader
          body="Gift care is designed for diaspora families, sponsors, and communities that want to fund professional support with dignity."
          eyebrow="How gifting works"
          title="Fund care without taking over."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {giftOptions.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </DecorSection>
      <DecorSection
        containerClassName="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"
        id="gift"
        variant="cream"
      >
        <SectionHeader
          body="The recipient can be named now, routed later, or supported through a community pool. MeloraHealth can guide the credit setup through a private conversation."
          eyebrow="Gift session"
          title="Send care credits."
        />
        <div className="rounded-2xl border border-sage/10 bg-white/55 p-6 shadow-[0_22px_70px_rgba(38,66,54,0.07)] backdrop-blur-xl sm:p-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {["Choose the support", "Fund care credits", "Keep care private"].map((step, index) => (
              <div className="border-l border-gold/50 pl-4" key={step}>
                <p className="text-xs font-semibold uppercase tracking-normal text-gold">
                  Step {index + 1}
                </p>
                <p className="mt-2 font-serif text-2xl leading-tight tracking-normal text-sage">
                  {step}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={MELORA_GIFT_URL}>Gift a Session</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              View Care Options
            </ButtonLink>
          </div>
        </div>
      </DecorSection>
    </main>
  );
}
