import { Gift, HandHeart, HeartHandshake, WalletCards } from "lucide-react";
import { InfoCard } from "@/components/cards/InfoCard";
import { LeadForm } from "@/components/forms/LeadForm";
import { giftFields } from "@/components/forms/forms";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

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
      <PageHero
        body="Sponsor a Session lets people fund care for family, communities, and people who need support but may not be able to begin alone."
        eyebrow="Gift care"
        imageAlt="African mother holding a newborn in calm natural light"
        imageSrc="/assets/images/postpartum-care.png"
        primaryHref="#gift"
        primaryLabel="Gift a Session"
        title="Care can be carried together."
        visualBody="Based on Ubuntu: support can be practical, private, and deeply human."
        visualTitle="Sponsor a Session"
      />
      <section className="section-space">
        <Container>
          <SectionHeader
            body="Gift care is designed for diaspora families, sponsors, and communities that want to fund professional support with dignity."
            eyebrow="How gifting works"
            title="Fund care without taking over."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {giftOptions.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>
      <section className="section-space bg-cream/40" id="gift">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            body="The recipient can be named now, routed later, or supported through a community pool."
            eyebrow="Gift session"
            title="Send care credits."
          />
          <LeadForm
            fields={giftFields}
            intro="Choose a gift type and amount. Payment wiring can be connected during product buildout."
            submitLabel="Create gift request"
            title="Gift Session"
          />
        </Container>
      </section>
    </main>
  );
}
