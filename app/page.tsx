import {
  Building2,
  CircleDollarSign,
  Globe2,
  Landmark,
  RadioTower,
  ShieldCheck,
} from "lucide-react";
import { InfoCard } from "@/components/cards/InfoCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { CareNetwork3D } from "@/components/sections/CareNetwork3D";
import { CTASection } from "@/components/sections/CTASection";
import { HeroImageStack } from "@/components/sections/HeroImageStack";
import { ImagePanel } from "@/components/sections/ImagePanel";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { LoopLine } from "@/components/ui/LoopLine";
import { SectionHeader } from "@/components/ui/SectionHeader";

const platformCards = [
  {
    title: "USD-pegged pricing",
    body: "Internal pricing is held against USD while users pay local equivalents.",
    icon: CircleDollarSign
  },
  {
    title: "Cross-border care",
    body: "Diaspora sponsors, local users, and African professionals can meet in one system.",
    icon: Globe2
  }
];

const partnerTypes = [
  {
    title: "HMOs",
    body: "Expand member care with culturally aware mental health access and clear routing.",
    icon: ShieldCheck,
    meta: "Coverage"
  },
  {
    title: "Employers",
    body: "Give teams private support before pressure becomes absence, conflict, or burnout.",
    icon: Building2,
    meta: "Workforce"
  },
  {
    title: "Banks and telcos",
    body: "Embed sponsored care credits into products, loyalty programs, and community initiatives.",
    icon: RadioTower,
    meta: "Access"
  },
  {
    title: "Institutions",
    body: "Route students, staff, and communities into professional support with dignity.",
    icon: Landmark,
    meta: "Public trust"
  }
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-sage/10 bg-[#fbf8f3]">
        <div aria-hidden className="heritage-panel right-0 top-16 hidden h-[70%] w-14 lg:block xl:w-16" />
        <div aria-hidden className="soft-pulse absolute -left-24 top-32 h-72 w-72 rounded-full border border-gold/20" />
        <LoopLine className="-bottom-8 right-0" />
        <Container className="relative z-10 grid gap-12 py-12 sm:py-14 lg:min-h-[calc(100svh-92px)] lg:grid-cols-12 lg:items-center lg:gap-14 lg:py-12 xl:gap-16 2xl:gap-20">
          <div className="reveal lg:col-span-5 xl:col-span-5">
            <p className="eyebrow mb-5">African mental health infrastructure</p>
            <h1 className="display max-w-[720px]">
              Care that understands <span className="mark-highlight">context.</span>
            </h1>
            <p className="mt-7 max-w-[590px] text-lg leading-8 text-ink/70">
              For the things you feel but cannot easily explain, MeloraHealth
              helps you find culturally aware care, with focused support for
              women, postpartum transitions, queer-affirming therapy, and care
              funded through family or organizations.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Find Support</ButtonLink>
              <ButtonLink href="/for-partners" variant="secondary">
                Partner With Us
              </ButtonLink>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-sage">
              <span className="h-px w-10 bg-gold" />
              <span className="hero-words" aria-label="Find care, fund care, scale care">
                <span>Find care</span>
                <span>Fund care</span>
                <span>Scale care</span>
              </span>
            </div>
          </div>
          <HeroImageStack />
        </Container>
      </section>

      <section className="section-space relative overflow-hidden">
        <div aria-hidden className="pattern-band" />
        <div aria-hidden className="signal-grid absolute inset-0 opacity-40" />
        <Container>
          <div className="section-grid relative mb-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="modern-section-header">
                <p className="eyebrow mb-5">Care infrastructure</p>
                <h2>
                  From need to support, with less confusion.
                </h2>
                <p>
                  MeloraHealth helps people find care, families fund support,
                  and partners extend access through one clear system,
                  including women’s therapy, postpartum support, and
                  queer-affirming care.
                </p>
              </div>
            </div>
          </div>

          <div className="bento-grid">
            <article className="bento-card dark md:col-span-6 lg:col-span-5 lg:row-span-2">
              <div className="flex h-full min-h-[470px] flex-col justify-between p-7 sm:p-9">
                <div>
                  <p className="eyebrow mb-5">Care routing</p>
                  <h3 className="font-serif text-5xl leading-none tracking-normal">
                    From feeling to fit.
                  </h3>
                  <p className="mt-5 max-w-sm text-base leading-7 text-white/70">
                    The first step should not feel confusing. MeloraHealth
                    turns a personal need into a clear care route.
                  </p>
                </div>
                <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                  {["What is happening", "Where you are", "Who can help", "How care happens"].map((item, index) => (
                    <div className="grid grid-cols-[52px_1fr] items-center bg-sage/[0.86] px-4 py-4" key={item}>
                      <span className="font-serif text-2xl text-gold">0{index + 1}</span>
                      <span className="text-sm text-white/[0.76]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <article className="bento-card md:col-span-6 lg:col-span-4 lg:row-span-2">
              <div className="flex h-full min-h-[470px] flex-col p-6 sm:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="eyebrow mb-4">Care network</p>
                    <h3 className="font-serif text-4xl leading-tight tracking-normal text-sage">
                      People, professionals, partners.
                    </h3>
                  </div>
                  <span className="h-3 w-3 rounded-full bg-gold soft-pulse" />
                </div>
                <div className="mt-4 flex-1">
                  <CareNetwork3D />
                </div>
              </div>
            </article>

            <article className="bento-card md:col-span-3 lg:col-span-3">
              <div className="p-6">
                <p className="eyebrow mb-5">Gift care</p>
                <h3 className="font-serif text-3xl leading-tight tracking-normal text-sage">
                  Fund care without taking over.
                </h3>
                <p className="mt-4 text-sm leading-6 text-ink/60">
                  Sponsor sessions or care credits for family, communities, or
                  people who need a way to begin.
                </p>
              </div>
            </article>

            <article className="bento-card md:col-span-3 lg:col-span-3">
              <div className="p-6">
                <p className="eyebrow mb-5">Partners</p>
                <h3 className="font-serif text-3xl leading-tight tracking-normal text-sage">
                  Access for the people you serve.
                </h3>
                <p className="mt-4 text-sm leading-6 text-ink/60">
                  HMOs, employers, banks, telcos, institutions, and sponsors can
                  build care into existing systems.
                </p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <div className="section-grid lg:items-center">
            <ImagePanel
              alt="African mother holding a newborn in calm natural light"
              className="lg:col-span-7"
              height="large"
              label="Ubuntu-based support"
              src="/assets/images/postpartum-care.png"
              title="Sponsor a Session"
            />
            <div className="lg:col-span-5">
              <SectionHeader
                body="Diaspora families, sponsors, and communities can fund professional support without making care feel transactional."
                eyebrow="Gift care"
                title="Care can be given without taking over."
              />
              <div className="mt-8">
                <ButtonLink href="/gift-care">Gift a Session</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space relative overflow-hidden bg-[#fbf8f3]">
        <Container>
          <div className="section-grid relative mb-12 lg:items-end">
            <div className="lg:col-span-5">
              <SectionHeader
                body="Pricing, routing, credentialing, and access can work across local currencies, diaspora funding, and institutional contracts."
                eyebrow="Platform logic"
                title="Built to move across borders."
              />
            </div>
            <p className="max-w-2xl text-base leading-7 text-ink/62 lg:col-span-5 lg:col-start-8">
              MeloraHealth is structured for people in Nigeria, diaspora
              sponsors in the UK or US, African professionals, and institutions
              that need dependable mental health access.
            </p>
          </div>

          <div className="bento-grid relative">
            <article className="bento-card dark md:col-span-6 lg:col-span-5 lg:row-span-2">
              <div className="flex h-full min-h-[430px] flex-col justify-between p-7 sm:p-9">
                <div>
                  <p className="eyebrow mb-5">Cross-border engine</p>
                  <h3 className="font-serif text-5xl leading-none tracking-normal">
                    Local access. Stable logic.
                  </h3>
                  <p className="mt-5 max-w-sm text-base leading-7 text-white/70">
                    Users pay local equivalents while internal pricing stays
                    anchored for sponsors, partners, and professional payouts.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-semibold text-white">
                  {["Nigeria", "UK diaspora", "US diaspora"].map((item) => (
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            <article className="bento-card md:col-span-6 lg:col-span-4 lg:row-span-2">
              <div className="relative h-full min-h-[430px] overflow-hidden rounded-[28px]">
                <ImagePanel
                  alt="African professionals in a calm modern partnership meeting"
                  className="h-full !min-h-[430px] !rounded-none !shadow-none"
                  height="medium"
                  label="B2B infrastructure"
                  src="/assets/images/partners-meeting.png"
                  title="For employers, HMOs, banks, telcos, and institutions."
                />
              </div>
            </article>

            {platformCards.map((card) => {
              const Icon = card.icon;

              return (
                <article className="bento-card md:col-span-3 lg:col-span-3" key={card.title}>
                  <div className="p-6">
                    <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full border border-sage/15 bg-cream/50 text-sage">
                      <Icon aria-hidden className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    <h3 className="font-serif text-3xl leading-tight tracking-normal text-sage">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-ink/60">{card.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-space relative overflow-hidden bg-cream/40">
        <Container>
          <div className="section-grid">
            <div className="lg:col-span-4">
              <SectionHeader
                body="MeloraHealth gives organizations a care layer they can sponsor, embed, or contract, while preserving clinical trust and cultural context."
                eyebrow="Partners"
                title="For institutions that carry people."
              />
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:col-span-8">
              {partnerTypes.map((partner) => (
                <InfoCard key={partner.title} {...partner} />
              ))}
            </div>
          </div>
          <div className="mt-12 grid overflow-hidden rounded-[28px] border border-white/[0.45] bg-white/30 shadow-[0_26px_74px_rgba(38,66,54,0.08),inset_0_1px_0_rgba(255,255,255,0.42)] backdrop-blur-2xl lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-7 sm:p-10">
              <p className="eyebrow mb-5">Partner model</p>
              <h3 className="font-serif text-4xl leading-tight tracking-normal text-sage">
                Sponsor access. Route demand. Measure support.
              </h3>
              <p className="mt-5 max-w-xl text-base leading-7 text-ink/64">
                Organizations can fund care credits, provide employee access,
                embed API routes, or sponsor specific communities while keeping
                care private and professionally held.
              </p>
              <div className="mt-8">
                <ButtonLink href="/for-partners">Explore Partners</ButtonLink>
              </div>
            </div>
            <div className="relative min-h-[320px] overflow-hidden bg-sage">
              <div aria-hidden className="absolute right-0 top-0 h-full w-24 opacity-[0.18] heritage-pattern" />
              <div className="relative grid h-full min-h-[320px] grid-cols-2 gap-px p-px text-white">
                {["HMOs", "Employers", "Banks", "Telcos"].map((item) => (
                  <div className="flex items-end bg-sage/[0.78] p-6" key={item}>
                    <span className="font-serif text-3xl">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space bg-sage text-white">
        <Container>
          <div className="section-grid">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-5">What people need</p>
              <h2 className="font-serif text-4xl leading-tight tracking-normal sm:text-5xl">
                Clear support. Real structure.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:col-span-8">
              <TestimonialCard
                context="Individual client"
                quote="I needed language for what was happening, not a speech."
                source="Early user interview"
              />
              <TestimonialCard
                context="Employer care lead"
                quote="Our teams need access that respects privacy and culture."
                source="Partner discovery"
              />
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        body="Choose the path that matches what you need now. MeloraHealth can route the next step."
        primaryHref="/contact"
        primaryLabel="Find Support"
        secondaryHref="/for-professionals"
        secondaryLabel="Join as Professional"
        title="Begin with clarity."
      />
    </main>
  );
}
