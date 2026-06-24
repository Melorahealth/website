import type { Metadata } from "next";
import Image from "next/image";
import {
  Check,
  CircleArrowRight,
  ClipboardList,
  Gift,
  MessageCircle,
  Minus,
  Sparkles,
  Video
} from "lucide-react";
import { ScrollMotion } from "@/components/motion/ScrollMotion";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
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
    icon: ClipboardList,
    title: "Tell us what you're going through",
    body: "A short, private intake that makes room for your story. Your life, your location, and what you actually need right now."
  },
  {
    icon: Sparkles,
    title: "Get matched to the right therapist",
    body: "We connect you with a qualified professional who fits your needs, your preferences, and your cultural background."
  },
  {
    icon: Video,
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

const testimonials = [
  {
    quote: "I needed language for what was happening, not a speech.",
    source: "Early user interview",
    context: "Individual client"
  },
  {
    quote: "Our teams need access that respects privacy and culture.",
    source: "Partner discovery",
    context: "Employer care lead"
  },
  {
    quote: "I wanted to help without making it feel like charity.",
    source: "Sponsor interview",
    context: "Diaspora sponsor"
  },
  {
    quote: "Being matched to someone who just got it changed everything.",
    source: "Early user interview",
    context: "Returning client"
  },
  {
    quote: "For the first time, paying for therapy didn't mean choosing between care and rent.",
    source: "Sponsor program pilot",
    context: "Care credit recipient"
  },
  {
    quote: "I could finally talk about home without translating every feeling first.",
    source: "Early user interview",
    context: "Diaspora client"
  },
  {
    quote: "Our staff actually use it because it respects how private this is.",
    source: "Workplace rollout",
    context: "HR partner"
  },
  {
    quote: "Booking felt calm, not clinical. That mattered more than I expected.",
    source: "Onboarding feedback",
    context: "First-time client"
  },
  {
    quote: "Knowing my therapist understood the culture meant I didn't have to brace myself.",
    source: "Partner discovery",
    context: "Maternal care client"
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
      <ScrollMotion />
      <section
        className="relative isolate overflow-hidden border-b border-sage/10"
        data-hero
      >
        <Image
          alt="Two pairs of friends in warm, relaxed conversation in a sunlit, plant-filled living room"
          className="object-cover object-center"
          data-hero-bg
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
          <div className="flex max-w-3xl flex-col items-center">
            <p
              className="mb-5 flex items-center gap-3 text-sm font-semibold tracking-wide text-sage/90"
              data-hero-item
            >
              <span aria-hidden className="kicker-rule is-left h-px w-6 bg-gold" />
              You don&apos;t have to figure this out alone
              <span aria-hidden className="kicker-rule is-right h-px w-6 bg-gold" />
            </p>
            <h1
              className="display hero-display [text-shadow:0_1px_3px_rgba(251,248,243,0.7)]"
              data-hero-item
            >
              Find a culturally
              <br />
              aware <span className="mark-highlight">therapist.</span>
            </h1>
            <p
              className="mt-7 max-w-[600px] text-lg leading-8 text-ink/80"
              data-hero-item
            >
              Mental healthcare matched to you. Private, online, and built for
              real life, with specialized care for women, maternal mental
              health, and communities standard care too often overlooks.
            </p>
            <div
              className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
              data-hero-item
            >
              <ButtonLink href={MELORA_APP_URL} icon={CircleArrowRight}>
                Get Matched
              </ButtonLink>
              <ButtonLink href={MELORA_GIFT_URL} icon={Gift} variant="secondary">
                Gift a Session
              </ButtonLink>
            </div>
            {/* <ul
              aria-label="Why people trust MeloraHealth"
              className="reveal mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-semibold text-sage"
              style={{ animationDelay: "340ms" }}
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
            </ul> */}
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
            <div className="lg:col-span-5" data-reveal>
              <SectionHeader
                body="The first step shouldn't feel like searching through noise. We help you go from 'I don't even know where to start' to talking with the right professional. Someone who respects your story instead of flattening it."
                // eyebrow="Professional care"
                title="Real therapists who understand where you come from."
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={MELORA_APP_URL}>Get Matched Now</ButtonLink>
                {/* <ButtonLink href="/for-professionals" variant="secondary">
                  Join as Professional
                </ButtonLink> */}
              </div>
            </div>
            <div className="lg:col-span-7" data-reveal>
              <Image
                alt="A community of culturally aware African therapists and clients on MeloraHealth"
                className="h-auto w-full object-contain"
                height={1024}
                sizes="(min-width: 1024px) 56vw, 100vw"
                src="/assets/images/professionals.png"
                width={1536}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space bg-sage text-white">
        <Container>
          <div className="section-grid">
            <div className="lg:col-span-4" data-reveal>
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
              {howItWorks.map((step, index) => {
                const StepIcon = step.icon;
                return (
                  <article
                    className="group relative overflow-hidden rounded-xl border border-white/12 bg-white/[0.06] p-6 transition duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.1]"
                    data-reveal
                    key={step.title}
                  >
                    {/* Edge SVGs: corner glow + bleeding outline icon */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(200,164,107,0.22),transparent_70%)] transition duration-700 group-hover:scale-125"
                    />
                    <StepIcon
                      aria-hidden
                      className="pointer-events-none absolute -right-3 -top-3 h-24 w-24 text-gold/20 transition duration-700 ease-out group-hover:rotate-6 group-hover:scale-110 group-hover:text-gold/30"
                      strokeWidth={1}
                    />

                    <span className="relative font-serif text-5xl leading-none text-gold">
                      0{index + 1}
                    </span>
                    <h3 className="relative mt-8 font-serif text-3xl leading-tight tracking-normal">
                      {step.title}
                    </h3>
                    <p className="relative mt-4 text-sm leading-6 text-white/68">
                      {step.body}
                    </p>

                    {/* Bottom-edge drawn line motif */}
                    <svg
                      aria-hidden
                      className="pointer-events-none absolute inset-x-5 bottom-3 h-3 w-[calc(100%-2.5rem)] text-gold/35"
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
          </div>
        </Container>
      </section>

      <section className="section-space relative overflow-hidden">
        {/* Cool sage wash — keeps this band calm and cool against the warm page */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(122,143,127,0.16)_0%,rgba(122,143,127,0.06)_42%,transparent_88%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(38,66,54,0.18),transparent)]"
        />
        {/* Line artwork — soft organic flourish, top-right */}
        <svg
          aria-hidden
          className="line-draw pointer-events-none absolute -right-10 top-10 hidden h-40 w-72 text-sage/25 lg:block"
          fill="none"
          viewBox="0 0 280 160"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 118C72 54 116 56 156 108C186 146 226 138 260 88"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.4"
          />
          <path
            d="M44 140C100 92 144 100 178 134"
            stroke="#C8A46B"
            strokeLinecap="round"
            strokeOpacity="0.55"
            strokeWidth="1.2"
          />
          <circle cx="260" cy="88" fill="#C8A46B" fillOpacity="0.6" r="3" />
        </svg>
        {/* Line artwork — botanical sprig, lower-left (diagonal balance) */}
        <svg
          aria-hidden
          className="line-draw pointer-events-none absolute -left-6 bottom-8 hidden h-52 w-52 text-sage/15 lg:block"
          fill="none"
          viewBox="0 0 160 160"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 150C36 110 48 70 86 44C104 32 128 26 150 28"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.4"
          />
          <path
            d="M64 92C58 78 60 62 72 52C82 62 84 80 74 92"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.2"
          />
          <path
            d="M58 118C50 106 48 90 58 78C70 86 74 104 66 118"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.2"
          />
        </svg>

        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end" data-reveal>
            <div className="lg:col-span-7">
              {/* <p className="eyebrow mb-5 flex items-center gap-3">
                <span aria-hidden className="h-px w-8 bg-gold" />
                Why MeloraHealth
              </p> */}
              <h2 className="font-serif text-[2.6rem] leading-[1.04] tracking-normal text-sage sm:text-6xl">
                Stop searching.
                <span className="mt-1 block italic text-sage/85">
                  Start <span className="mark-highlight not-italic">healing.</span>
                </span>
              </h2>
            </div>
            {/* <p className="text-base leading-7 text-ink/68 sm:text-lg lg:col-span-5 lg:pb-2">
              In-person therapy can be valuable. We change everything around it:
              how you get matched, how you reach care, how it&apos;s funded, and
              how it stays with you.
            </p> */}
          </div>

          <div className="mt-12 [perspective:1800px]" data-reveal>
            <div
              className="group/panel overflow-hidden rounded-2xl border border-white/60 bg-white/55 shadow-[0_2px_0_rgba(255,255,255,0.7)_inset,0_50px_90px_-30px_rgba(38,66,54,0.4),0_18px_40px_-18px_rgba(38,66,54,0.28)] backdrop-blur-xl transition-transform duration-500 ease-out [transform-origin:50%_100%] will-change-transform lg:[transform:rotateX(4deg)] lg:hover:[transform:rotateX(0deg)_translateY(-8px)]"
            >
              {/* Column headers (md and up) */}
              <div className="hidden md:grid md:grid-cols-[1.1fr_1fr_1fr]">
                <div aria-hidden />
                <div className="flex items-center gap-2 border-l border-t-2 border-sage/10 border-t-gold/45 bg-gold/[0.07] px-6 py-4">
                  <Check aria-hidden className="h-4 w-4 text-gold" strokeWidth={2.4} />
                  <span className="text-sm font-semibold text-sage">MeloraHealth</span>
                </div>
                <div className="flex items-center gap-2 border-l border-sage/10 px-6 py-4">
                  <Minus aria-hidden className="h-4 w-4 text-rose" strokeWidth={2.4} />
                  <span className="text-sm font-semibold text-sage-soft">
                    Typical in-person path
                  </span>
                </div>
              </div>

              {careComparison.map((row) => (
                <div
                  className="grid grid-cols-1 border-t border-sage/10 md:grid-cols-[1.1fr_1fr_1fr]"
                  key={row.need}
                >
                  <div className="px-6 py-5">
                    <p className="font-serif text-xl leading-snug tracking-normal text-sage">
                      {row.need}
                    </p>
                  </div>
                  <div className="border-t border-sage/10 bg-gold/[0.06] px-6 py-5 md:border-l md:border-t-0">
                    <p className="mb-1.5 flex items-center gap-2 text-xs font-semibold text-gold md:hidden">
                      <Check aria-hidden className="h-3.5 w-3.5" strokeWidth={2.6} />
                      MeloraHealth
                    </p>
                    <p className="text-sm leading-6 text-ink/80">{row.melora}</p>
                  </div>
                  <div className="border-t border-sage/10 px-6 py-5 md:border-l md:border-t-0">
                    <p className="mb-1.5 flex items-center gap-2 text-xs font-semibold text-rose md:hidden">
                      <Minus aria-hidden className="h-3.5 w-3.5" strokeWidth={2.6} />
                      Typical in-person
                    </p>
                    <p className="text-sm leading-6 text-sage-soft">{row.offline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
            data-reveal
          >
            <p className="max-w-xl text-sm leading-6 text-ink/60">
              We&apos;re not here to automate therapy. We&apos;re here to make
              getting help calmer, clearer, and easier to trust.
            </p>
            <div className="flex flex-col gap-3 sm:shrink-0 sm:flex-row">
              <ButtonLink href="/contact">Get Matched</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                Explore Services
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <div className="section-grid lg:items-center">
            <div className="lg:col-span-6" data-reveal>
              <Image
                alt="Two people exchanging a thoughtfully wrapped gift, symbolizing sponsored care"
                className="h-auto w-full object-contain"
                height={1122}
                sizes="(min-width: 1024px) 48vw, 100vw"
                src="/assets/images/gift-feature.png"
                width={1402}
              />
            </div>
            <div className="lg:col-span-5 lg:col-start-8" data-reveal>
              <SectionHeader
                body="Gift care credits let families, diaspora sponsors, employers, and community partners fund therapy while the recipient keeps privacy and choice. It is support with dignity, shaped by Ubuntu."
                // eyebrow="Gift care credits"
                title="A meaningful way to protect someone you love."
              />
              <div className="mt-8">
                <ButtonLink href={MELORA_GIFT_URL}>Gift a Session</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space relative overflow-hidden bg-sage text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(200,164,107,0.16),transparent_60%)]"
        />
        <Container className="relative">
          <div className="flex flex-col gap-10">
            <div className="col-span-4" data-reveal>
              {/* <p className="eyebrow mb-5">What people told us</p> */}
              <h2 className="font-serif text-4xl leading-tight tracking-normal sm:text-5xl">
                What people told us
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-white/65">
                Every decision starts with the people we serve. Here is some of
                what they have told us.
              </p>
            </div>
            <div className="lg:col-span-8" data-reveal>
              <TestimonialSlider items={testimonials} />
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space bg-[#fbf8f3]">
        <Container>
          <div className="flex flex-col gap-10">
            <div className="flex justify-center" data-reveal>
              <SectionHeader
                // body="Straight answers to the questions people ask before they trust someone with their mental health."
                // eyebrow="FAQ"
                title="Frequently asked questions."
              />
            </div>
            <div className="flex justify-center gap-3 max-w-3xl w-full mx-auto">
              <div className="grid gap-3 col-span-8 w-full">
                {faqs.map((faq) => (
                  <details
                    className="group rounded-xl border border-sage/10 bg-white/45 p-6 shadow-[0_14px_38px_rgba(38,66,54,0.04)] w-full"
                    data-reveal
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

          </div>
        </Container>
      </section>

      <div data-reveal>
        <CTASection
          body="Take the first step today. We'll match you with the right support, for you or someone you love."
          primaryHref="/contact"
          primaryLabel="Get Matched"
          secondaryHref="/for-professionals"
          secondaryLabel="Join as Professional"
          title="Ready to talk to someone who gets it?"
        />
      </div>
    </main>
  );
}
