import type { Metadata } from "next";
import Image from "next/image";
import {
  BriefcaseBusiness,
  CalendarCheck,
  CalendarClock,
  CalendarX2,
  DoorOpen,
  EyeOff,
  Globe2,
  HeartHandshake,
  Languages,
  Lock,
  MessagesSquare,
  Sparkles,
  Stethoscope,
  TrendingDown,
  UserCheck,
  Users,
  Video
} from "lucide-react";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTASection } from "@/components/sections/CTASection";
import { DecorSection } from "@/components/sections/DecorSection";
import { ImagePanel } from "@/components/sections/ImagePanel";
import { ReportingSection } from "@/components/sections/ReportingSection";
import { SplitHero } from "@/components/sections/SplitHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createPageMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Employee Mental Health & Wellbeing Programs for Employers",
  description:
    "Give your team confidential, licensed, culturally aware mental health care. Build an employee wellbeing program that lowers burnout and absenteeism, and helps you keep the people you rely on.",
  path: "/for-employers",
  image: "/assets/images/portrait-of-happy-multiracial-business-team-at-con-2026-01-09-11-29-22-utc.jpg",
  imageAlt: "A diverse team of smiling colleagues with lanyards in a bright modern office"
});

const included = [
  {
    title: "Therapy and psychiatry",
    body: "One-to-one sessions with licensed therapists, psychologists, and psychiatrists, online or in person.",
    icon: Stethoscope
  },
  {
    title: "Confidential access",
    body: "Employees reach out on their own terms. No approvals, no paper trail back to their manager.",
    icon: EyeOff
  },
  {
    title: "Culturally aware care",
    body: "Providers who understand the realities your people carry, not a westernized script.",
    icon: Globe2
  },
  {
    title: "Manager and HR support",
    body: "Practical guidance for the people who hold teams together and often notice distress first.",
    icon: UserCheck
  },
  {
    title: "Care in many languages",
    body: "Support that meets a distributed, multilingual workforce where they actually are.",
    icon: Languages
  },
  {
    title: "Simple to roll out",
    body: "A clear onboarding path and one point of contact, so a program is running in weeks, not quarters.",
    icon: Sparkles
  }
];

const signals = [
  {
    title: "Missed days",
    body: "Absence that has less to do with the body than with everything being carried underneath it.",
    icon: CalendarX2
  },
  {
    title: "Thinning focus",
    body: "People still show up, but the sharpness, the follow-through, and the steady judgement quietly slip.",
    icon: TrendingDown
  },
  {
    title: "Quiet exits",
    body: "Good people leave before anyone knew they were struggling, and take hard-won experience with them.",
    icon: DoorOpen
  }
];

const flowSteps = [
  {
    head: "You fund access",
    text: "Choose the team you want to cover and the level of support you want to sponsor.",
    icon: BriefcaseBusiness
  },
  {
    head: "Staff reach out privately",
    text: "Each person books on their own, without anyone signing off or being told.",
    icon: CalendarCheck
  },
  {
    head: "We match a provider",
    text: "They are paired with a licensed professional who fits their needs and context.",
    icon: Video
  },
  {
    head: "Care continues",
    text: "Support does not stop after one call. People keep going for as long as they need.",
    icon: HeartHandshake
  }
];

// Research-backed figures. Framed as the general case for workplace mental
// health investment, NOT as MeloraHealth's own results.
const businessCase = [
  {
    stat: "$1tn",
    label: "drains from the global economy every year",
    note: "in reduced productivity from depression and anxiety alone.",
    source: "WHO, 2022"
  },
  {
    stat: "12bn",
    label: "working days disappear each year",
    note: "to depression and anxiety across the world's workforce.",
    source: "WHO, 2022"
  },
  {
    stat: "~4x",
    label: "comes back for every $1 invested",
    note: "in scaled-up treatment for common mental health conditions.",
    source: "WHO / Lancet Commission"
  }
];

const protections = [
  {
    title: "Confidential by default",
    body: "What someone shares in a session stays between them and their provider. Not their manager, not HR, not us.",
    icon: EyeOff
  },
  {
    title: "Sessions are encrypted",
    body: "Calls and messages are secured end to end, so conversations cannot be listened in on or leaked.",
    icon: Lock
  },
  {
    title: "Protected from their employer",
    body: "An employee can seek help without you ever seeing who booked, what was said, or why.",
    icon: Users
  },
  {
    title: "Reporting without exposure",
    body: "You see whether the program is used and helping, never who used it or what they discussed.",
    icon: MessagesSquare
  }
];

const faqs = [
  {
    q: "How is this different from a wellness app?",
    a: "Apps hand people content. This connects them to real, licensed therapists and psychiatrists for actual sessions. The support is human, private, and continuous, not a library of tips."
  },
  {
    q: "Will we see who uses it?",
    a: "No. Access is confidential by default. You can see whether the program is being used and whether it is helping at a group level, but never who booked, what was discussed, or why."
  },
  {
    q: "How quickly can we roll it out?",
    a: "A program can be live in weeks. You decide who to cover and the level of access to fund, we handle onboarding, and your team gets one point of contact throughout."
  },
  {
    q: "Is the care right for our people?",
    a: "Providers are licensed and culturally aware, so support fits the realities your team actually carries rather than a westernized script. Sessions run online or in person, in more than one language."
  },
  {
    q: "How do we pay for it?",
    a: "You sponsor access for the group you want to cover. Pricing scales with headcount and the level of support, and we will walk you through a model that fits your budget in the first conversation."
  }
];

export default function EmployersPage() {
  return (
    <main>
      <JsonLd
        data={createBreadcrumbJsonLd("/for-employers", "Employers")}
        id="employers-breadcrumb-jsonld"
      />

      {/* 1. Hero */}
      <SplitHero
        body="A confidential, licensed, culturally aware way to support your team's mental health, and to protect the focus, retention, and steadiness that carry your business."
        highlight="show up."
        imageAlt="A diverse team of smiling colleagues with lanyards in a bright modern office"
        imageSrc="/assets/images/portrait-of-happy-multiracial-business-team-at-con-2026-01-09-11-29-22-utc.jpg"
        primaryHref="/book-demo"
        primaryIcon={CalendarClock}
        primaryLabel="Book a demo"
        secondaryHref="#how-it-works"
        secondaryLabel="See how it works"
        title="Support the people who help your business"
        variant={2}
      />

      {/* 2. Why a program */}
      <DecorSection
        containerClassName="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20"
        motif={false}
        variant="light"
      >
        <div className="reveal relative aspect-[4/5] overflow-hidden rounded-[20px] bg-sage sm:aspect-[5/6]">
          <Image
            alt="A woman at her office desk looking drained and overwhelmed at her laptop"
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
            src="/assets/images/frustrated-woman-working-at-office-desk-with-lapto-2026-03-19-02-13-12-utc.JPG"
            style={{ objectPosition: "center 30%" }}
          />
        </div>
        <div className="reveal reveal-delay max-w-md">
          <h2 className="font-serif text-4xl leading-[1.12] tracking-normal text-sage sm:text-5xl">
            Your people carry more than the work.
          </h2>
          <p className="mt-6 text-base leading-7 text-ink/70 sm:text-lg">
            Stress, burnout, grief, and quiet struggle do not stay at home. Left
            alone, they build, one quiet week at a time, until it costs you the
            person.
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
            A program gives people somewhere to turn before that point.
          </p>
        </div>
      </DecorSection>

      {/* 3. What's included */}
      <DecorSection variant="cream">
        <SectionHeader
          body="One program, built around real care rather than content. Everything your team needs to actually get support, and everything you need to run it without friction."
          title="What your program includes."
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
            body="From your side it is simple. You decide who to cover and how much access to fund. We take it from there."
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
                  className="reveal group relative flex flex-col items-center text-center"
                  key={step.head}
                >
                  <div className="relative">
                    <span
                      aria-hidden
                      className="animate-glow-pulse absolute inset-0 rounded-[22px] bg-gold/25 blur-xl"
                    />
                    <span className="relative flex h-20 w-20 items-center justify-center rounded-[22px] border border-sage/10 bg-gradient-to-br from-white/90 to-cream/45 text-sage shadow-soft backdrop-blur transition duration-500 group-hover:-translate-y-1.5 group-hover:border-gold/40">
                      <step.icon aria-hidden className="h-7 w-7" strokeWidth={1.4} />
                      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-sage text-[0.7rem] font-bold text-white shadow-soft">
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

      {/* 5. The business case (research-backed stats) */}
      <DecorSection variant="dark">
        <div className="reveal max-w-3xl">
          <h2 className="font-serif text-4xl leading-tight tracking-normal sm:text-5xl">
            You already know the cost.
            <span className="mt-1 block text-white/75">Here it is in numbers.</span>
          </h2>
          <p className="mt-6 text-base leading-7 text-white/70 sm:text-lg">
            You feel it in your own team already, the quiet days, the good people
            who leave. The research only puts numbers to it. Everything below is
            drawn from global studies, not our own data.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {businessCase.map((item) => (
            <div
              className="reveal group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur transition duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-white/[0.09]"
              key={item.label}
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
              />
              <p className="font-serif text-5xl leading-none text-gold">{item.stat}</p>
              <p className="mt-4 font-serif text-xl leading-snug tracking-normal">{item.label}</p>
              <p className="mt-2 text-sm leading-6 text-white/70">{item.note}</p>
              <p className="mt-5 border-t border-white/10 pt-4 text-xs font-semibold uppercase tracking-normal text-white/45">
                Source: {item.source}
              </p>
            </div>
          ))}
        </div>
        <p className="reveal mt-10 max-w-2xl text-base leading-7 text-white/70">
          The cost is already on your books, in sick days, lost focus, and the
          people you have to replace. A program simply moves that spend toward
          something that helps.
        </p>
      </DecorSection>

      {/* 5b. Dashboard & reporting */}
      <ReportingSection
        activeUnit="employees"
        coverage={[
          { name: "Engineering", pct: 92 },
          { name: "Operations", pct: 88 },
          { name: "Sales", pct: 79 },
          { name: "Support", pct: 71 }
        ]}
        coverageLabel="Adoption by department"
        subject="your team"
        viewerLabel="HR and People teams"
      />

      {/* 6. Privacy / trust */}
      <section className="section-space relative overflow-hidden bg-cream/40">
        <div
          aria-hidden
          className="animate-float-soft pointer-events-none absolute -right-16 top-12 h-64 w-64 rounded-full bg-gold/10 blur-[110px]"
        />
        <Container className="relative z-10">
          <SectionHeader
            body="Mental health is personal, and in our context it can carry real stigma. So we build for one simple promise: a person can get help without anyone using it against them."
            title="Private means private. Even from you."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {protections.map((item) => (
              <div
                className="reveal group relative overflow-hidden rounded-2xl border border-sage/12 bg-white/60 p-7 shadow-[0_18px_48px_rgba(38,66,54,0.06)] backdrop-blur-xl transition duration-500 hover:-translate-y-1.5 hover:border-gold/30 hover:bg-white/75"
                key={item.title}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sage/10 bg-gradient-to-br from-white/85 to-cream/40 text-sage shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] transition duration-500 group-hover:border-gold/40">
                  <item.icon aria-hidden className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-serif text-xl leading-tight tracking-normal text-sage">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink/[0.62]">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. FAQ */}
      <DecorSection variant="light">
        <SectionHeader
          align="center"
          body="The questions People and HR teams ask us most often."
          title="Good questions, answered plainly."
        />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-sage/10 border-y border-sage/10">
          {faqs.map((item) => (
            <details className="group py-5" key={item.q}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl leading-snug tracking-normal text-sage">
                {item.q}
                <span
                  aria-hidden
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-sage/15 text-gold transition duration-300 group-open:rotate-45"
                >
                  <span className="text-lg leading-none">+</span>
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/[0.66]">{item.a}</p>
            </details>
          ))}
        </div>
      </DecorSection>

      <CTASection
        body="Whether you are ready to plan a program or just have questions, we are happy to talk it through. No commitment needed."
        primaryHref="/book-demo"
        primaryIcon={CalendarClock}
        primaryLabel="Book a demo"
        secondaryHref="/for-partners"
        secondaryLabel="Explore all partner models"
        title="Good care for your team can start with one conversation."
      />
    </main>
  );
}
