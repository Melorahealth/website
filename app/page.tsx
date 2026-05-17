import type { Metadata } from "next";
import Image from "next/image";
import {
  Check,
  CircleArrowRight,
  Gift,
  MessageCircle,
  Minus
} from "lucide-react";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTASection } from "@/components/sections/CTASection";
import { HeroImageStack } from "@/components/sections/HeroImageStack";
import { ImagePanel } from "@/components/sections/ImagePanel";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { LoopLine } from "@/components/ui/LoopLine";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createPageMetadata } from "@/lib/seo";
import { createHomeJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Therapy That Understands Your Context",
  description:
    "MeloraHealth connects people with culturally aware therapy, psychiatry, and care routes for emotional clarity, identity, postpartum, and life changes.",
  path: "/",
  image: "/assets/images/individual-reflection.jpg",
  imageAlt: "African woman sitting calmly in reflective natural light"
});

const howItWorks = [
  {
    title: "Tell us what is happening",
    body: "Start with a simple intake that makes space for your reality, location, preferences, and care goals."
  },
  {
    title: "Get routed to the right fit",
    body: "MeloraHealth connects you with a qualified professional or program path that matches the kind of support you need."
  },
  {
    title: "Meet in the way that works",
    body: "Use private online sessions, structured follow-up, and sponsor-backed credits where available."
  }
];

const careComparison = [
  {
    need: "Finding the right fit",
    melora: "A guided intake routes you by need, care level, preference, and cultural context.",
    offline: "You often rely on referrals, location, or trial and error."
  },
  {
    need: "Starting care",
    melora: "You move from intake to a recommended care path with clear next steps.",
    offline: "You may need calls, availability checks, and repeated explanation."
  },
  {
    need: "Paying for support",
    melora: "Sponsor credits and partner programs can fund care while privacy stays with the person receiving it.",
    offline: "Payment support is usually informal, exposed, or difficult to manage."
  },
  {
    need: "Continuing care",
    melora: "Care can continue across location, sponsors, organizations, and professional routes.",
    offline: "Continuity depends mostly on one office, one schedule, and one provider."
  }
];

const partnerLogos = [
  {
    name: "TAC Africa",
    href: "https://tacafrica.org/",
    src: "/assets/partners/tac-africa.png",
    width: 72,
    height: 72
  },
  {
    name: "Platview Technologies",
    href: "https://platview.com/",
    src: "/assets/partners/platview-provided.svg",
    width: 149,
    height: 45
  },
  {
    name: "BlazeTech",
    href: "https://blazetch.com/",
    src: "/assets/partners/blazetech.png",
    width: 72,
    height: 72
  }
];

const faqs = [
  {
    question: "Who is MeloraHealth for?",
    answer:
      "MeloraHealth is for anyone seeking emotional clarity and professional support, with deeper expertise for women, postpartum experiences, identity, relationships, and life changes."
  },
  {
    question: "Are the professionals qualified?",
    answer:
      "The platform is built around credentialed therapists, psychologists, and psychiatrists. Care routing is designed to match the need with the right level of professional support."
  },
  {
    question: "Can someone outside Africa sponsor care?",
    answer:
      "Yes. Diaspora sponsors can fund care credits while the person receiving care keeps privacy, choice, and dignity."
  },
  {
    question: "Is this only for individuals?",
    answer:
      "No. MeloraHealth also supports employers, HMOs, banks, telcos, institutions, and professional care providers."
  }
];

export default function Home() {
  return (
    <main>
      <JsonLd data={createHomeJsonLd()} id="melorahealth-home-jsonld" />
      <section className="relative overflow-hidden border-b border-sage/10 bg-[#fbf8f3]">
        <div aria-hidden className="heritage-panel right-0 top-16 hidden h-[70%] w-14 lg:block xl:w-16" />
        <div aria-hidden className="soft-pulse absolute -left-24 top-32 h-72 w-72 rounded-full border border-gold/20" />
        <LoopLine className="-bottom-8 right-0" />
        <Container className="relative z-10 flex min-h-[calc(100svh-72px)] flex-col justify-center py-16 sm:py-18 lg:min-h-[calc(112svh-92px)] lg:py-16 xl:min-h-[calc(118svh-92px)]">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10 xl:gap-12 2xl:gap-14">
            <div className="reveal lg:col-span-6">
              <h1 className="display hero-display max-w-[720px]">
                Therapy that
                <br />
                understands your
                <br />
                <span className="mark-highlight">context.</span>
              </h1>
              <p className="mt-7 max-w-[590px] text-lg leading-8 text-ink/70">
                MeloraHealth connects people to qualified therapists and
                culturally aware mental health support, with deeper care for
                women, postpartum transitions, queer-affirming therapy, and
                communities often left out of access.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" icon={CircleArrowRight}>
                  Get Started
                </ButtonLink>
                <ButtonLink href="/gift-care" icon={Gift} variant="secondary">
                  Gift a Session
                </ButtonLink>
              </div>
              <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-sage">
                <span className="h-px w-10 bg-gold" />
                <span className="hero-words" aria-label="Find care, meet therapists, widen access">
                  <span>Find care</span>
                  <span>Meet therapists</span>
                  <span>Widen access</span>
                </span>
              </div>
            </div>
            <HeroImageStack />
          </div>
        </Container>
      </section>

      <section className="border-y border-sage/10 bg-[#f7f2ea] py-12 sm:py-14">
        <Container>
          <div className="mx-auto max-w-5xl">
            <p className="text-center text-xs font-semibold uppercase tracking-normal text-ink/42">
              Trusted by leading organizations
            </p>
            <div className="partner-grid mt-8" aria-label="MeloraHealth partners">
              {partnerLogos.map((logo) => (
                <a
                  className="partner-mark"
                  href={logo.href}
                  key={logo.name}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    alt={logo.name}
                    className="partner-logo"
                    height={logo.height}
                    src={logo.src}
                    width={logo.width}
                  />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* <section className="section-space relative overflow-hidden bg-cream/40">
        <div aria-hidden className="pattern-band" />
        <div aria-hidden className="signal-grid absolute inset-0 opacity-35" />
        <Container>
          <SectionHeader
            align="center"
            body="MeloraHealth is open to all, with specialist routes for moments that are often misunderstood or made too heavy to explain."
            eyebrow="Care paths"
            title="Choose the kind of support you need."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {careTypes.map((type) => (
              <InfoCard key={type.title} {...type} />
            ))}
          </div>
        </Container>
      </section> */}

      <section className="section-space">
        <Container>
          <div className="section-grid lg:items-center">
            <div className="lg:col-span-5">
              <SectionHeader
                body="The first step should not feel like searching through noise. MeloraHealth helps translate what is happening into a care route: the right professional, the right format, and a next step that respects your context."
                eyebrow="Professional care"
                title="Qualified support, without losing cultural meaning."
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/services">Explore Services</ButtonLink>
                <ButtonLink href="/for-professionals" variant="secondary">
                  Join as Professional
                </ButtonLink>
              </div>
            </div>
            <ImagePanel
              alt="African therapist and client in a calm professional care conversation"
              className="lg:col-span-7"
              height="large"
              label="Respectful care"
              objectPosition="center"
              src="/assets/images/professional-care.jpg"
              title="A care conversation that feels human, not clinical and cold."
            />
          </div>
        </Container>
      </section>

      <section className="section-space bg-sage text-white">
        <Container>
          <div className="section-grid">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-5">How it works</p>
              <h2 className="font-serif text-4xl leading-tight tracking-normal sm:text-5xl">
                A clear route into care.
              </h2>
              <p className="mt-5 text-base leading-7 text-white/70">
                Inspired by simple matching flows, rebuilt for African context,
                diaspora funding, and professional care standards.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3 lg:col-span-8">
              {howItWorks.map((step, index) => (
                <article
                  className="rounded-xl border border-white/12 bg-white/[0.06] p-6"
                  key={step.title}
                >
                  <span className="font-serif text-5xl leading-none text-gold">
                    0{index + 1}
                  </span>
                  <h3 className="mt-8 font-serif text-3xl leading-tight tracking-normal">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-white/68">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <div className="section-grid mb-10 lg:items-end">
            <div className="lg:col-span-6">
              <SectionHeader
                body="Offline therapy can be valuable. MeloraHealth changes the experience around it: the matching, the access, the funding, and the continuity."
                eyebrow="Why MeloraHealth"
                title="Less searching. More structure."
              />
            </div>
            <p className="max-w-2xl text-base leading-7 text-ink/62 lg:col-span-5 lg:col-start-8">
              Answer a few careful questions, get routed to the right kind of
              professional support, and keep the path clear after care begins.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-sage/10 bg-white/35 shadow-[0_22px_60px_rgba(38,66,54,0.07)] backdrop-blur-2xl">
            <div className="grid gap-px bg-sage/10 md:grid-cols-3">
              {[
                ["01", "Share what is happening"],
                ["02", "Get routed with context"],
                ["03", "Begin care with support"]
              ].map(([number, label]) => (
                <div className="bg-cream/55 px-5 py-4" key={number}>
                  <span className="font-serif text-2xl leading-none text-gold">{number}</span>
                  <span className="ml-3 text-sm font-semibold text-sage">{label}</span>
                </div>
              ))}
            </div>

            <div className="hidden grid-cols-[1fr_1.25fr_1.1fr] border-b border-sage/10 bg-sage px-5 py-4 text-sm font-semibold text-white md:grid">
              <span>Need</span>
              <span>MeloraHealth</span>
              <span>Typical offline path</span>
            </div>

            <div>
              {careComparison.map((row) => (
                <div
                  className="grid gap-0 border-b border-sage/10 last:border-b-0 md:grid-cols-[1fr_1.25fr_1.1fr]"
                  key={row.need}
                >
                  <div className="bg-white/40 px-5 py-5">
                    <p className="text-xs font-semibold uppercase tracking-normal text-gold md:hidden">
                      Need
                    </p>
                    <p className="font-serif text-2xl leading-tight tracking-normal text-sage md:text-xl">
                      {row.need}
                    </p>
                  </div>
                  <div className="border-t border-sage/10 bg-white/30 px-5 py-5 md:border-l md:border-t-0">
                    <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-sage">
                      <Check aria-hidden className="h-4 w-4 text-gold" strokeWidth={1.8} />
                      <span>MeloraHealth</span>
                    </p>
                    <p className="text-sm leading-6 text-ink/62">{row.melora}</p>
                  </div>
                  <div className="border-t border-sage/10 bg-cream/25 px-5 py-5 md:border-l md:border-t-0">
                    <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-ink/68">
                      <Minus aria-hidden className="h-4 w-4 text-rose" strokeWidth={1.8} />
                      <span>Often offline</span>
                    </p>
                    <p className="text-sm leading-6 text-ink/58">{row.offline}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-4 border-t border-sage/10 bg-[#fbf8f3] px-5 py-5 text-sm text-ink/62 md:grid-cols-[1fr_auto] md:items-center">
              <p>
                The goal is not to make therapy feel automated. It is to make
                access calmer, clearer, and easier to trust.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <ButtonLink href="/contact">Find Support</ButtonLink>
                <ButtonLink href="/services" variant="secondary">
                  Explore Services
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <div className="section-grid lg:items-center">
            <ImagePanel
              alt="African mother holding a newborn in calm natural light"
              className="lg:col-span-6"
              height="large"
              label="Sponsor a Session"
              src="/assets/images/postpartum-care.jpg"
              title="Give care without taking over the person's story."
            />
            <div className="lg:col-span-5 lg:col-start-8">
              <SectionHeader
                body="Gift care credits let families, diaspora sponsors, employers, and community partners fund therapy while the recipient keeps privacy and choice. It is support with dignity, shaped by Ubuntu."
                eyebrow="Gift care credits"
                title="A meaningful way to protect someone you love."
              />
              <div className="mt-8">
                <ButtonLink href="/gift-care">Gift a Session</ButtonLink>
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
            <div className="grid gap-5 md:grid-cols-3 lg:col-span-8">
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
              <TestimonialCard
                context="Diaspora sponsor"
                quote="I wanted to help without making it feel like charity."
                source="Sponsor interview"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space bg-[#fbf8f3]">
        <Container>
          <div className="section-grid">
            <div className="lg:col-span-4">
              <SectionHeader
                body="Simple answers for the questions people ask before they trust a care platform."
                eyebrow="FAQ"
                title="Before you begin."
              />
            </div>
            <div className="grid gap-3 lg:col-span-8">
              {faqs.map((faq) => (
                <details
                  className="group rounded-xl border border-sage/10 bg-white/45 p-6 shadow-[0_14px_38px_rgba(38,66,54,0.04)]"
                  key={faq.question}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-2xl leading-tight tracking-normal text-sage">
                    {faq.question}
                    <MessageCircle
                      aria-hidden
                      className="h-5 w-5 shrink-0 text-gold transition group-open:rotate-6"
                      strokeWidth={1.6}
                    />
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-6 text-ink/64">
                    {faq.answer}
                  </p>
                </details>
              ))}
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
