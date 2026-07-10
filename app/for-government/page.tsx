import type { Metadata } from "next";
import Image from "next/image";
import {
  Building2,
  CalendarCheck,
  Check,
  EyeOff,
  GraduationCap,
  HeartHandshake,
  HeartPulse,
  Landmark,
  Lock,
  ShieldCheck,
  UserCheck,
  Users,
  Video
} from "lucide-react";
import { LeadForm } from "@/components/forms/LeadForm";
import { governmentFields } from "@/components/forms/forms";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTASection } from "@/components/sections/CTASection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createPageMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Mental Health Support for Government and Parastatals",
  description:
    "MeloraHealth helps Nigerian ministries, parastatals, and public institutions give their staff and communities licensed, private, and culturally aware mental health care. See what it is, who it is for, how it works, and how we keep every person protected.",
  path: "/for-government",
  image: "/assets/images/government-boardroom.jpg",
  imageAlt: "MeloraHealth presenting digital health solutions to government officials in a boardroom"
});

const flowSteps = [
  {
    head: "Book a session",
    text: "A person reaches out privately, on their own terms.",
    icon: CalendarCheck
  },
  {
    head: "Get matched",
    text: "We pair them with a licensed provider who fits their needs.",
    icon: UserCheck
  },
  {
    head: "Meet online",
    text: "They talk from wherever they are. No waiting room, no exposure.",
    icon: Video
  },
  {
    head: "Ongoing follow up",
    text: "Care continues for as long as they need it.",
    icon: HeartHandshake
  }
];

const audiences = [
  {
    title: "Ministries and agencies",
    body: "Give the people who run public services a private place to look after their own mental health.",
    icon: Landmark
  },
  {
    title: "Parastatals and corporations",
    body: "From energy to finance to infrastructure, support staff who carry heavy, high pressure work.",
    icon: Building2
  },
  {
    title: "Tertiary institutions",
    body: "Help students and staff at universities and polytechnics get support before things get worse.",
    icon: GraduationCap
  },
  {
    title: "Public health programs",
    body: "Add real mental health care to maternal, primary, and community health work already underway.",
    icon: HeartPulse
  },
  {
    title: "State and local programs",
    body: "Reach citizens directly with funded care that respects who they are and where they come from.",
    icon: Users
  },
  {
    title: "Frontline and uniformed services",
    body: "Support people who see hard things at work with confidential care that stays confidential.",
    icon: ShieldCheck
  }
];

const protections = [
  {
    title: "Confidential by default",
    body: "What someone shares in a session stays between them and their provider. Not their oga, not their department, not anyone.",
    icon: EyeOff
  },
  {
    title: "Sessions are encrypted",
    body: "Calls and messages are secured end to end, so conversations cannot be listened in on or leaked.",
    icon: Lock
  },
  {
    title: "Built around the Nigeria Data Protection Act",
    body: "We handle personal data in line with the Nigeria Data Protection Act 2023, and we only collect what care actually needs.",
    icon: ShieldCheck
  },
  {
    title: "Your staff are protected from you",
    body: "An employee can seek help without their employer ever seeing who booked, what was said, or why.",
    icon: Users
  }
];

export default function GovernmentPage() {
  return (
    <main>
      <JsonLd
        data={createBreadcrumbJsonLd("/for-government", "Government")}
        id="government-breadcrumb-jsonld"
      />

      {/* 1. Intent, in plain language */}
      <section className="relative overflow-hidden bg-sage text-white bg-stripes-on-dark">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-gold/15 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-rose/20 blur-[120px]"
        />
        <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:gap-14 lg:py-24">
          <div className="reveal relative">
            <h1 className="font-serif text-5xl leading-[1.03] tracking-normal sm:text-6xl lg:text-[4.5rem]">
              Mental health care your people can actually{" "}
              <span className="text-gold">trust</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
              A simple, private way for Nigerian ministries, parastatals, and public institutions to give their staff and communities real mental health support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink className="!bg-white !text-sage hover:!bg-cream" href="#talk-to-us">
                Talk to our team
              </ButtonLink>
              <ButtonLink
                className="!border-white/25 !bg-transparent !text-white hover:!border-white/50 hover:!bg-white/10"
                href="#how-it-works"
                variant="secondary"
              >
                See how it works
              </ButtonLink>
            </div>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
              {[
                "Licensed providers",
                "Confidential by default",
                "Built around the Nigeria Data Protection Act"
              ].map((point) => (
                <li className="flex items-center gap-2" key={point}>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold">
                    <Check aria-hidden className="h-3 w-3" strokeWidth={2.4} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal reveal-delay relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-gold/20 blur-[90px]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-8 -top-8 h-44 w-44 rounded-full bg-rose/15 blur-[90px]"
            />
            <Image
              alt="MeloraHealth presenting digital health solutions to government officials in a boardroom"
              className="image-fade-edges relative h-full w-full rounded-[28px] object-cover"
              height={1024}
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              src="/assets/images/government-boardroom.jpg"
              width={1535}
            />
          </div>
        </Container>
      </section>

      {/* 2. What it is */}
      <section className="section-space bg-stripes relative overflow-hidden">
        {/* Soft floating glows */}
        <div
          aria-hidden
          className="animate-float-soft pointer-events-none absolute -left-16 top-12 h-64 w-64 rounded-full bg-gold/10 blur-[110px]"
        />
        <div
          aria-hidden
          className="animate-float-soft-alt pointer-events-none absolute -right-20 bottom-4 h-64 w-64 rounded-full bg-rose/10 blur-[110px]"
        />
        {/* SVG splatter: dots + health crosses */}
        <svg
          aria-hidden
          className="animate-float-soft pointer-events-none absolute right-6 top-10 hidden h-36 w-36 text-sage/20 lg:block"
          fill="none"
          viewBox="0 0 200 200"
        >
          <circle cx="30" cy="34" fill="currentColor" r="4" />
          <circle cx="66" cy="22" fill="currentColor" r="2.5" />
          <circle cx="22" cy="78" fill="currentColor" r="2.5" />
          <circle cx="92" cy="66" fill="currentColor" r="3" />
          <g stroke="currentColor" strokeLinecap="round" strokeWidth="3">
            <path d="M150 42h18M159 33v18" />
            <path d="M124 96h12M130 90v12" />
          </g>
        </svg>
        <svg
          aria-hidden
          className="animate-float-soft-alt pointer-events-none absolute -left-2 bottom-10 hidden h-32 w-32 text-gold/30 lg:block"
          fill="none"
          viewBox="0 0 200 200"
        >
          <circle cx="40" cy="150" fill="currentColor" r="3.5" />
          <circle cx="74" cy="168" fill="currentColor" r="2.5" />
          <circle cx="24" cy="120" fill="currentColor" r="2.5" />
          <g stroke="currentColor" strokeLinecap="round" strokeWidth="3">
            <path d="M96 140h14M103 133v14" />
          </g>
        </svg>

        <Container className="relative z-10">
          {/* Header */}
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Start here</p>
            <h2 className="font-serif text-4xl leading-tight tracking-normal text-sage sm:text-5xl">
              What MeloraHealth actually is.
            </h2>
            <p className="mt-6 text-lg leading-8 text-ink/[0.66]">
              A digital mental health platform where your people book a private session, get matched with a{" "}
              <span className="font-semibold text-sage">licensed provider</span> who understands them, and get real care online. No referral chains. No waiting rooms. No exposure.
            </p>
          </div>

          {/* Animated step flow */}
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

      {/* 3. Who it is for */}
      <section className="section-space bg-cream/40 bg-stripes">
        <Container>
          <SectionHeader
            body="If you are responsible for people, whether that is a workforce, a student body, or a whole community, this is built with you in mind."
            title="Made for institutions that carry responsibility."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {audiences.map((item) => {
              const AudienceIcon = item.icon;
              return (
                <article
                  className="reveal group relative overflow-hidden rounded-2xl border border-sage/12 bg-white/55 p-7 shadow-[0_18px_48px_rgba(38,66,54,0.06)] backdrop-blur-xl transition duration-500 hover:-translate-y-1.5 hover:border-gold/30 hover:bg-white/70"
                  key={item.title}
                >
                  {/* Corner glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(200,164,107,0.22),transparent_70%)] transition duration-700 group-hover:scale-125"
                  />
                  {/* Oversized bleeding icon */}
                  <AudienceIcon
                    aria-hidden
                    className="pointer-events-none absolute -right-3 -top-3 h-24 w-24 text-sage/[0.06] transition duration-700 ease-out group-hover:rotate-6 group-hover:scale-110 group-hover:text-gold/20"
                    strokeWidth={1}
                  />
                  {/* Icon badge */}
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-sage/10 bg-gradient-to-br from-white/85 to-cream/40 text-sage shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] transition duration-500 group-hover:border-gold/40">
                    <AudienceIcon aria-hidden className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.5} />
                  </span>
                  <h3 className="relative mt-7 font-serif text-2xl leading-tight tracking-normal text-sage">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-6 text-ink/[0.62]">{item.body}</p>
                  {/* Bottom drawn-line motif */}
                  <svg
                    aria-hidden
                    className="pointer-events-none absolute inset-x-6 bottom-3 h-3 w-[calc(100%-3rem)] text-gold/35"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 200 12"
                  >
                    <path
                      d="M0 9 C40 9 40 3 80 3 C120 3 120 9 160 9 C180 9 190 6 200 6"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                    />
                    <circle cx="200" cy="6" fill="currentColor" r="2" />
                  </svg>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 5. Security and privacy */}
      <section className="section-space bg-sage text-white bg-stripes-on-dark relative overflow-hidden">
        {/* Floating glows */}
        <div
          aria-hidden
          className="animate-float-soft pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-gold/15 blur-[120px]"
        />
        <div
          aria-hidden
          className="animate-float-soft-alt pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-rose/15 blur-[120px]"
        />
        {/* SVG splatter: dots + locks/crosses */}
        <svg
          aria-hidden
          className="animate-float-soft-alt pointer-events-none absolute right-8 top-12 hidden h-32 w-32 text-white/[0.08] lg:block"
          fill="none"
          viewBox="0 0 200 200"
        >
          <circle cx="34" cy="30" fill="currentColor" r="3.5" />
          <circle cx="70" cy="20" fill="currentColor" r="2.5" />
          <circle cx="24" cy="72" fill="currentColor" r="2.5" />
          <g stroke="currentColor" strokeLinecap="round" strokeWidth="3">
            <path d="M150 40h18M159 31v18" />
            <path d="M120 90h12M126 84v12" />
          </g>
        </svg>

        <Container className="relative z-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="reveal">
            {/* Shield emblem with concentric rings */}
            <div className="relative mb-8 inline-flex">
              <span
                aria-hidden
                className="animate-glow-pulse absolute inset-0 rounded-full bg-gold/25 blur-2xl"
              />
              <span aria-hidden className="absolute inset-0 -m-3 rounded-2xl border border-white/10" />
              <span aria-hidden className="absolute inset-0 -m-6 rounded-2xl border border-white/[0.06]" />
              <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/30 bg-white/[0.08] text-gold backdrop-blur">
                <ShieldCheck aria-hidden className="h-7 w-7" strokeWidth={1.5} />
              </span>
            </div>
            <h2 className="font-serif text-4xl leading-tight tracking-normal sm:text-5xl">
              Private means private.
              <span className="mt-1 block text-white/75">Even from you.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
              Mental health is personal, and in our context it can carry real stigma. So we build for one simple promise: a person can get help without anyone using it against them. Not their employer, not their colleagues, not us.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {[
                "Nigeria Data Protection Act 2023",
                "End to end encryption",
                "No data ever sold"
              ].map((chip) => (
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2 text-xs font-semibold text-white/85 backdrop-blur"
                  key={chip}
                >
                  <Check aria-hidden className="h-3 w-3 text-gold" strokeWidth={2.6} />
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="reveal reveal-delay grid gap-4 sm:grid-cols-2">
            {protections.map((item) => (
              <div
                className="card-stripes-on-dark group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur transition duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-white/[0.09]"
                key={item.title}
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
                />
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-gold transition duration-500 group-hover:border-gold/40 group-hover:bg-gold/10">
                  <item.icon aria-hidden className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="font-serif text-xl leading-tight tracking-normal">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. How it works */}
      <section className="section-space bg-stripes" id="how-it-works">
        <Container>
          <SectionHeader
            body="From your side it is simple. You decide who you want to reach and how much access to fund. We take it from there."
            eyebrow="How it works"
            title="Four steps, start to finish."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {[
              ["01", "You fund access", "Decide the group you want to cover and the level of access you want to sponsor."],
              ["02", "People reach out privately", "Staff or community members book a session on their own, without anyone signing off on it."],
              ["03", "We match a licensed provider", "Each person is paired with a vetted therapist or psychiatrist who fits their needs and context."],
              ["04", "Care continues with follow up", "Support does not stop after one call. People can keep going for as long as they need."]
            ].map(([number, head, text]) => (
              <div
                className="card-stripes reveal overflow-hidden rounded-2xl border border-sage/10 bg-gradient-to-br from-white/70 to-cream/25 p-6 shadow-soft backdrop-blur"
                key={head}
              >
                <p className="font-serif text-3xl leading-none text-sage">{number}</p>
                <h3 className="mt-4 font-serif text-xl leading-tight tracking-normal text-sage">
                  {head}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink/[0.62]">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. Talk to us */}
      <section className="section-space bg-stripes" id="talk-to-us">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            body="There is no pressure and no hard pitch here. Tell us who you want to support and what you are trying to solve, and we will walk you through what a programme could look like for your institution."
            eyebrow="Let us talk"
            title="Start a conversation with us."
          />
          <LeadForm
            fields={governmentFields}
            intro="A first step for ministries, parastatals, public health agencies, state and local programmes, and public universities."
            submitLabel="Send message"
            title="Talk to MeloraHealth"
          />
        </Container>
      </section>

      <CTASection
        body="Whether you are ready to plan a programme or just have questions, we are happy to talk it through with you. No commitment needed."
        primaryHref="#talk-to-us"
        primaryLabel="Ask us anything"
        secondaryHref="/for-partners"
        secondaryLabel="See how we work with organizations"
        title="Good care for your people can start with one conversation."
      />
    </main>
  );
}
