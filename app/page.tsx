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
import { ImagePanel } from "@/components/sections/ImagePanel";
import { PartnerCarousel } from "@/components/sections/PartnerCarousel";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MELORA_APP_URL, MELORA_GIFT_URL } from "@/lib/app-links";
import { createPageMetadata } from "@/lib/seo";
import { createHomeJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Culturally Aware Therapy, Online",
  description:
    "Mental healthcare matched to you. Private, online, and built for real life, with specialized care for women, maternal mental health, and communities standard care too often overlooks.",
  path: "/",
  image: "/assets/og/melorahealth-home-og.jpg",
  imageAlt: "MeloraHealth care platform showing culturally aware therapy and connected support routes",
  imageHeight: 630,
  imageWidth: 1200
});

const howItWorks = [
  {
    title: "Tell us what you're going through",
    body: "A short, private intake that makes room for your story. Your life, your location, and what you actually need right now."
  },
  {
    title: "Get matched to the right therapist",
    body: "We connect you with a qualified professional who fits your needs, your preferences, and your cultural background."
  },
  {
    title: "Start talking, your way",
    body: "Private online sessions and steady follow-up, with sponsor-backed credits where available."
  }
];

const careComparison = [
  {
    need: "Finding the right fit",
    melora: "A guided intake matches you by need, care level, preference, and culture. No guesswork.",
    offline: "You often rely on referrals, location, or trial and error."
  },
  {
    need: "Starting care",
    melora: "You go straight from intake to a clear care plan with real next steps.",
    offline: "You may need calls, availability checks, and repeated explanation."
  },
  {
    need: "Paying for support",
    melora: "Sponsor credits and partner programs can fund your care, while your privacy stays yours.",
    offline: "Payment support is usually informal, exposed, or difficult to manage."
  },
  {
    need: "Continuing care",
    melora: "Your care follows you across cities, sponsors, organizations, and providers.",
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
      "Anyone who wants to feel understood and get real professional support, with deeper expertise for women, postpartum experiences, identity, relationships, and big life changes."
  },
  {
    question: "How do sessions work?",
    answer:
      "Sessions are private and online, with structured follow-up in between. You can start from anywhere you have a connection, in a way that fits your schedule."
  },
  {
    question: "Are the professionals qualified?",
    answer:
      "Yes. The platform is built around credentialed therapists, psychologists, and psychiatrists, and we match you with the right level of professional support for what you're facing."
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
      <section className="relative isolate overflow-hidden border-b border-sage/10">
        <Image
          alt="Two pairs of friends in warm, relaxed conversation in a sunlit, plant-filled living room"
          className="object-cover object-center"
          fill
          priority
          sizes="100vw"
          src="/assets/images/hero-.png"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(85%_85%_at_50%_50%,rgba(251,248,243,0.62)_0%,rgba(251,248,243,0.58)_45%,rgba(251,248,243,0.42)_70%,rgba(251,248,243,0.22)_100%)]"
        />
        <Container className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center py-28 text-center">
          <div className="reveal flex max-w-3xl flex-col items-center">
            <h1 className="display hero-display [text-shadow:0_1px_3px_rgba(251,248,243,0.7)]">
              Find a culturally
              <br />
              aware <span className="mark-highlight">therapist.</span>
            </h1>
            <p className="mt-7 max-w-[600px] text-lg leading-8 text-ink/80">
              Mental healthcare matched to you. Private, online, and built for
              real life, with specialized care for women, maternal mental
              health, and communities standard care too often overlooks.
            </p>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
              <ButtonLink href={MELORA_APP_URL} icon={CircleArrowRight}>
                Get Matched
              </ButtonLink>
              <ButtonLink href={MELORA_GIFT_URL} icon={Gift} variant="secondary">
                Gift a Session
              </ButtonLink>
            </div>
            <ul
              aria-label="Why people trust MeloraHealth"
              className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-semibold text-sage"
            >
              <li className="flex items-center gap-2">
                <Check aria-hidden className="h-4 w-4 text-gold" strokeWidth={1.8} />
                Credentialed therapists
              </li>
              <li className="flex items-center gap-2">
                <Check aria-hidden className="h-4 w-4 text-gold" strokeWidth={1.8} />
                100% private &amp; online
              </li>
              <li className="flex items-center gap-2">
                <Check aria-hidden className="h-4 w-4 text-gold" strokeWidth={1.8} />
                Culturally aware care
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* <section className="py-9">
        <Container>
          <PartnerCarousel logos={partnerLogos} />
        </Container>
      </section> */}

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
                body="The first step shouldn't feel like searching through noise. We help you go from 'I don't even know where to start' to talking with the right professional. Someone who respects your story instead of flattening it."
                eyebrow="Professional care"
                title="Real therapists who understand where you come from."
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
                From struggling to supported, in three steps.
              </h2>
              <p className="mt-5 text-base leading-7 text-white/70">
                Built for African realities, diaspora funding, and real
                professional care standards, so help is easy to reach and easy
                to trust.
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
                body="Offline therapy can be valuable. We change everything around it: how you get matched, how you reach care, how it's funded, and how it stays with you."
                eyebrow="Why MeloraHealth"
                title="Stop searching. Start healing."
              />
            </div>
            <p className="max-w-2xl text-base leading-7 text-ink/62 lg:col-span-5 lg:col-start-8">
              Answer a few careful questions, get matched with the right
              professional, and keep your path clear long after the first
              session.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-sage/10 bg-white/35 shadow-[0_22px_60px_rgba(38,66,54,0.07)] backdrop-blur-2xl">
            <div className="grid gap-px bg-sage/10 md:grid-cols-3">
              {[
                ["01", "Share what you're going through"],
                ["02", "Get matched to the right fit"],
                ["03", "Start care with real support"]
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
                We&apos;re not here to automate therapy. We&apos;re here to make
                getting help calmer, clearer, and easier to trust.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <ButtonLink href="/contact">Get Matched</ButtonLink>
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
                <ButtonLink href={MELORA_GIFT_URL}>Gift a Session</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space bg-sage text-white">
        <Container>
          <div className="section-grid">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-5">What people told us</p>
              <h2 className="font-serif text-4xl leading-tight tracking-normal sm:text-5xl">
                Built from real conversations.
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
                body="Straight answers to the questions people ask before they trust someone with their mental health."
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
        body="Take the first step today. We'll match you with the right support, for you or someone you love."
        primaryHref="/contact"
        primaryLabel="Get Matched"
        secondaryHref="/for-professionals"
        secondaryLabel="Join as Professional"
        title="Ready to talk to someone who gets it?"
      />
    </main>
  );
}
