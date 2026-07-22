import type { Metadata } from "next";
import {
  Building2,
  CalendarCheck,
  CalendarClock,
  EyeOff,
  GraduationCap,
  HeartHandshake,
  HeartPulse,
  Landmark,
  Lock,
  ShieldCheck,
  UserCheck,
  Users
} from "lucide-react";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTASection } from "@/components/sections/CTASection";
import { DecorSection } from "@/components/sections/DecorSection";
import { SplitHero } from "@/components/sections/SplitHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createPageMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Mental Health Support for Government and Parastatals",
  description:
    "MeloraHealth helps Nigerian ministries, parastatals, and public institutions give their staff and communities licensed, private, and culturally aware mental health care.",
  path: "/for-government",
  image: "/assets/images/jerry-harrow-XR8KV8V-NuM-unsplash.jpg",
  imageAlt: "A Nigerian public institution building"
});

const flowSteps = [
  {
    head: "You fund access",
    text: "Choose the group you want to cover and the level of care to sponsor.",
    icon: Landmark
  },
  {
    head: "People reach out privately",
    text: "Staff or community members book on their own, without anyone signing off.",
    icon: CalendarCheck
  },
  {
    head: "We match a provider",
    text: "Each person is paired with a licensed professional who fits their needs.",
    icon: UserCheck
  },
  {
    head: "Care continues",
    text: "Support does not stop after one call. People keep going for as long as they need.",
    icon: HeartHandshake
  }
];

const audiences = [
  {
    title: "Ministries and agencies",
    body: "A private place for the people who run public services to look after their own mental health.",
    icon: Building2
  },
  {
    title: "Parastatals and corporations",
    body: "Support staff who carry heavy, high-pressure work, from energy to finance to infrastructure.",
    icon: Landmark
  },
  {
    title: "Universities and polytechnics",
    body: "Help students and staff get support before things get worse.",
    icon: GraduationCap
  },
  {
    title: "Public health programs",
    body: "Add real mental health care to maternal, primary, and community health work already underway.",
    icon: HeartPulse
  }
];

const protections = [
  {
    title: "Confidential by default",
    body: "What someone shares stays between them and their provider. Not their department, not anyone.",
    icon: EyeOff
  },
  {
    title: "Sessions are encrypted",
    body: "Calls and messages are secured end to end, so conversations cannot be listened in on or leaked.",
    icon: Lock
  },
  {
    title: "Built around the NDPA 2023",
    body: "We handle personal data in line with the Nigeria Data Protection Act, and collect only what care needs.",
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

      {/* 1. Hero */}
      <SplitHero
        body="A simple, private way for Nigerian ministries, parastatals, and public institutions to give their staff and communities real mental health support."
        highlight="trust."
        imageAlt="A Nigerian public institution building"
        imageSrc="/assets/images/jerry-harrow-XR8KV8V-NuM-unsplash.jpg"
        primaryHref="/book-demo"
        primaryIcon={CalendarClock}
        primaryLabel="Book a demo"
        secondaryHref="#how-it-works"
        secondaryLabel="See how it works"
        title="Mental health care your people can actually"
        variant={8}
      />

      {/* 2. How it works */}
      <DecorSection id="how-it-works" variant="light">
        <SectionHeader
          align="center"
          body="Your people book a private session, get matched with a licensed provider who understands them, and get real care online. No referral chains, no waiting rooms, no exposure."
          title="How it works."
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
      </DecorSection>

      {/* 3. Who it is for */}
      <DecorSection variant="cream">
        <SectionHeader
          body="If you are responsible for people, whether a workforce, a student body, or a whole community, this is built with you in mind."
          title="Made for institutions that carry responsibility."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {audiences.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </DecorSection>

      {/* 4. Privacy */}
      <section className="section-space relative overflow-hidden bg-sage text-white">
        <div
          aria-hidden
          className="animate-float-soft pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-gold/15 blur-[120px]"
        />
        <div
          aria-hidden
          className="animate-float-soft-alt pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-rose/15 blur-[120px]"
        />
        <Container className="relative z-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="reveal">
            <span className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/30 bg-white/[0.08] text-gold backdrop-blur">
              <ShieldCheck aria-hidden className="h-7 w-7" strokeWidth={1.5} />
            </span>
            <h2 className="font-serif text-4xl leading-tight tracking-normal sm:text-5xl">
              Private means private.
              <span className="mt-1 block text-white/75">Even from you.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
              Mental health is personal, and in our context it can carry real stigma. So we build for
              one simple promise: a person can get help without anyone using it against them.
            </p>
          </div>
          <div className="reveal reveal-delay grid gap-4 sm:grid-cols-2">
            {protections.map((item) => (
              <div
                className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur transition duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-white/[0.09]"
                key={item.title}
              >
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

      <CTASection
        body="Whether you are ready to plan a programme or just have questions, we are happy to talk it through. No commitment needed."
        primaryHref="/book-demo"
        primaryIcon={CalendarClock}
        primaryLabel="Book a demo"
        secondaryHref="/for-partners"
        secondaryLabel="See how we work with organizations"
        title="Good care for your people can start with one conversation."
      />
    </main>
  );
}
