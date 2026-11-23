import type { Metadata } from "next";
import Image from "next/image";
import {
  BadgeCheck,
  CalendarCheck,
  CalendarClock,
  ClipboardList,
  EyeOff,
  Globe2,
  HeartHandshake,
  Languages,
  Lock,
  MessagesSquare,
  Network,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  Video
} from "lucide-react";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTASection } from "@/components/sections/CTASection";
import { DecorSection } from "@/components/sections/DecorSection";
import { ReportingSection } from "@/components/sections/ReportingSection";
import { SplitHero } from "@/components/sections/SplitHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createPageMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";
import { FaqList } from "@/components/sections/FaqList";

export const metadata: Metadata = createPageMetadata({
  title: "Mental Health Benefits for HMOs & Health Plans",
  description:
    "Extend your members' care with confidential, licensed, culturally aware therapy and psychiatry. Add a mental health benefit HMOs can offer without building a network from scratch.",
  path: "/for-hmos",
  image: "/assets/images/business-leader-trying-eliminate-risks-unforeseen-obstacles-disruptions.jpg",
  imageAlt: "A business leader working thoughtfully to manage risk and keep care running smoothly"
});

const included = [
  {
    title: "Therapy and psychiatry",
    body: "One-to-one sessions with licensed therapists, psychologists, and psychiatrists, online or in person.",
    icon: Stethoscope
  },
  {
    title: "A ready provider network",
    body: "Extend member care without recruiting, credentialing, and managing a mental health panel yourself.",
    icon: Network
  },
  {
    title: "Culturally aware care",
    body: "Providers who understand the realities your members carry, not a westernized script.",
    icon: Globe2
  },
  {
    title: "Routed access",
    body: "Members are matched and booked without the friction that keeps most people from ever starting.",
    icon: BadgeCheck
  },
  {
    title: "Care in many languages",
    body: "Support that meets a diverse member base where they actually are.",
    icon: Languages
  },
  {
    title: "Simple to roll out",
    body: "A clear onboarding path and one point of contact, so a benefit is live in weeks, not quarters.",
    icon: Sparkles
  }
];

const signals = [
  {
    title: "A benefit members ask for",
    body: "Mental health is now a headline expectation, and a plan without it looks thinner every year.",
    icon: ShieldCheck
  },
  {
    title: "Care that is hard to source",
    body: "Building and managing a licensed mental health panel is slow, costly, and easy to get wrong.",
    icon: ClipboardList
  },
  {
    title: "Untreated cost downstream",
    body: "Distress left alone surfaces later as physical claims, absence, and members who churn.",
    icon: Users
  }
];

const flowSteps = [
  {
    head: "You add the benefit",
    text: "Choose the member tiers to cover and the level of mental health access you want to offer.",
    icon: BadgeCheck
  },
  {
    head: "Members reach out privately",
    text: "Each person books on their own, without their employer or the plan being told why.",
    icon: CalendarCheck
  },
  {
    head: "We match a provider",
    text: "They are paired with a licensed professional who fits their needs and context.",
    icon: Video
  },
  {
    head: "Care continues",
    text: "Support does not stop after one call. Members keep going for as long as they need.",
    icon: HeartHandshake
  }
];

const protections = [
  {
    title: "Confidential by default",
    body: "What a member shares in a session stays between them and their provider. Not their employer, not the plan, not us.",
    icon: EyeOff
  },
  {
    title: "Sessions are encrypted",
    body: "Calls and messages are secured end to end, so conversations cannot be listened in on or leaked.",
    icon: Lock
  },
  {
    title: "Member data stays protected",
    body: "You get the eligibility and utilisation you need to run the benefit, never the clinical detail behind it.",
    icon: Users
  },
  {
    title: "Reporting without exposure",
    body: "You see whether the benefit is used and helping, never who used it or what they discussed.",
    icon: MessagesSquare
  }
];

const faqs = [
  {
    q: "Do we need to build our own provider network?",
    a: "No. That is the point. Members get licensed therapists and psychiatrists through our network, so you can offer a mental health benefit without recruiting, credentialing, and managing a panel yourself."
  },
  {
    q: "How does this fit our claims and reporting?",
    a: "You get the eligibility and utilisation data you need to run and price the benefit at a group level. Clinical detail stays between the member and their provider, so you report on usage without exposing anyone."
  },
  {
    q: "Can we scope it to certain member tiers?",
    a: "Yes. You decide which members or plans to include and the level of access to fund, and can widen it over time as the benefit proves itself."
  },
  {
    q: "Is the care right for our members?",
    a: "Providers are licensed and culturally aware, so support fits the realities your members actually carry. Sessions run online or in person, in more than one language."
  },
  {
    q: "How quickly can we roll it out?",
    a: "A benefit can be live in weeks. You decide who to cover and the level of access, we handle onboarding and matching, and you get one point of contact throughout."
  }
];

export default function HmosPage() {
  return (
    <main>
      <JsonLd
        data={createBreadcrumbJsonLd("/for-hmos", "HMOs")}
        id="hmos-breadcrumb-jsonld"
      />

      {/* 1. Hero */}
      <SplitHero
        body="A confidential, licensed, culturally aware way to give your members real mental health care, without building and managing a provider network from scratch."
        highlight="rely on you."
        imageAlt="A business leader working thoughtfully to manage risk and keep care running smoothly"
        imageSrc="/assets/images/business-leader-trying-eliminate-risks-unforeseen-obstacles-disruptions.jpg"
        primaryHref="/book-demo"
        primaryIcon={CalendarClock}
        primaryLabel="Book a demo"
        secondaryHref="#how-it-works"
        secondaryLabel="See how it works"
        title="A mental health benefit for the members who"
        variant={5}
      />

      {/* 2. Why a benefit */}
      <DecorSection
        containerClassName="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20"
        motif={false}
        variant="light"
      >
        <div className="reveal relative aspect-[4/5] overflow-hidden rounded-[20px] bg-sage sm:aspect-[5/6]">
          <Image
            alt="A Black family together in a warm studio portrait"
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
            src="/assets/images/medium-shot-black-family-posing-studio.jpg"
            style={{ objectPosition: "center 30%" }}
          />
        </div>
        <div className="reveal reveal-delay max-w-md">
          <h2 className="font-serif text-4xl leading-[1.12] tracking-normal text-sage sm:text-5xl">
            Members expect more than physical cover.
          </h2>
          <p className="mt-6 text-base leading-7 text-ink/70 sm:text-lg">
            Stress, burnout, grief, and quiet struggle are now part of what a
            plan is judged on. Left uncovered, they surface later as physical
            claims and members who move on.
          </p>
          <dl className="mt-10 border-t border-sage/10">
            {signals.map((item) => (
              <div className="border-b border-sage/10 py-5" key={item.title}>
                <dt className="font-serif text-lg leading-tight tracking-normal text-sage">
                  {item.title}
                </dt>
                <dd className="mt-1.5 text-sm leading-6 text-ink/[0.6]">{item.body}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-base leading-7 text-ink/70">
            A benefit gives members somewhere to turn before that point.
          </p>
        </div>
      </DecorSection>

      {/* 3. What's included */}
      <DecorSection variant="cream">
        <SectionHeader
          body="One benefit, built around real care rather than content. Everything your members need to actually get support, and everything you need to run it without friction."
          title="What the benefit includes."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {included.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </DecorSection>

      {/* 4. How it works */}
      <section className="section-space relative overflow-hidden" id="how-it-works">
        <div
          aria-hidden
          className="animate-float-soft pointer-events-none absolute -left-16 top-12 h-64 w-64 rounded-full bg-gold/10 blur-[110px]"
        />
        <div
          aria-hidden
          className="animate-float-soft-alt pointer-events-none absolute -right-20 bottom-4 h-64 w-64 rounded-full bg-rose/10 blur-[110px]"
        />
        <Container className="relative z-10">
          <SectionHeader
            align="center"
            body="From your side it is simple. You decide who to cover and how much access to offer. We take it from there."
            title="Four steps, start to finish."
          />

          <div className="relative mt-16">
            <div
              aria-hidden
              className="absolute inset-x-[10%] top-10 hidden h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent lg:block"
            />
            <span
              aria-hidden
              className="animate-travel-x absolute top-10 hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_14px_rgba(200,164,107,0.85)] lg:block"
            />
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {flowSteps.map((step, index) => (
                <div
                  className="tone reveal group relative flex flex-col items-center text-center"
                  key={step.head}
                >
                  <div className="relative">
                    <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[var(--tone-bg)] text-sage ring-1 ring-inset ring-sage/[0.06] transition duration-500 group-hover:-translate-y-1.5">
                      <step.icon aria-hidden className="h-7 w-7" strokeWidth={1.4} />
                      <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-[var(--tone-accent)] text-xs font-bold text-[color:var(--tone-on)]">
                        {index + 1}
                      </span>
                    </span>
                  </div>
                  <h3 className="mt-6 font-serif text-xl leading-tight tracking-normal text-sage">
                    {step.head}
                  </h3>
                  <p className="mt-2 max-w-[15rem] text-sm leading-6 text-ink/[0.6]">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 4b. Dashboard & reporting */}
      <ReportingSection
        activeUnit="members"
        coverage={[
          { name: "Premium plan", pct: 90 },
          { name: "Standard plan", pct: 84 },
          { name: "Family plan", pct: 77 },
          { name: "Corporate plan", pct: 69 }
        ]}
        coverageLabel="Adoption by member plan"
        subject="your members"
        viewerLabel="benefits and product teams"
      />

      {/* 5. Privacy / trust */}
      <section className="section-space relative overflow-hidden bg-cream/40">
        <div
          aria-hidden
          className="animate-float-soft pointer-events-none absolute -right-16 top-12 h-64 w-64 rounded-full bg-gold/10 blur-[110px]"
        />
        <Container className="relative z-10">
          <SectionHeader
            body="Mental health is personal, and in our context it can carry real stigma. So we build for one simple promise: a member can get help without anyone using it against them."
            title="Private means private. Even from the plan."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {protections.map((item) => (
              <div
                className="tone reveal group relative flex flex-col overflow-hidden rounded-[2rem] bg-[var(--tone-bg)] p-7 ring-1 ring-inset ring-sage/[0.06] transition duration-500 hover:-translate-y-1"
                key={item.title}
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--tone-accent)] text-[color:var(--tone-on)]">
                  <item.icon aria-hidden className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-serif text-xl leading-tight tracking-normal text-sage">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink/75">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. FAQ */}
      <DecorSection variant="light">
        <SectionHeader
          align="center"
          body="The questions plan and partnerships teams ask us most often."
          title="Good questions, answered plainly."
        />
        <div className="mt-12">
          <FaqList items={faqs.map((item) => ({ question: item.q, answer: item.a }))} />
        </div>
      </DecorSection>

      <CTASection
        body="Whether you are ready to plan a benefit or just have questions, we are happy to talk it through. No commitment needed."
        primaryHref="/book-demo"
        primaryIcon={CalendarClock}
        primaryLabel="Book a demo"
        secondaryHref="/for-partners"
        secondaryLabel="Explore all partner models"
        title="A stronger member benefit can start with one conversation."
      />
    </main>
  );
}
