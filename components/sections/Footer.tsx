import Link from "next/link";
import { ArrowUpRight, CircleArrowRight, Gift } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { MELORA_APP_URL, MELORA_GIFT_URL } from "@/lib/app-links";
import { socialLinks } from "@/lib/seo";

const linkGroups = [
  {
    title: "Care",
    links: [
      { href: "/for-you", label: "Find Support" },
      { href: "/services", label: "Services" },
      { href: MELORA_GIFT_URL, label: "Gift Session" },
      { href: "/resources", label: "Resources" }
    ]
  },
  {
    title: "Partners",
    links: [
      { href: "/for-employers", label: "For Employers" },
      { href: "/for-hmos", label: "For HMOs" },
      { href: "/for-government", label: "For Government" },
      { href: "/for-universities", label: "For Universities" },
      { href: "/for-partners", label: "Partner Inquiry" }
    ]
  },
  {
    title: "Company",
    links: [
      { href: "/for-professionals", label: "Join as Professional" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" }
    ]
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-of-service", label: "Terms of Service" },
      { href: "/refund-policy", label: "Refund Policy" }
    ]
  }
];

const taglineWords = ["Understand", "Heal", "Become"];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[linear-gradient(165deg,#2f4f40_0%,#26453a_48%,#1f3a2d_100%)] text-white">
      {/* Texture and pattern, kept quiet. */}
      <div aria-hidden className="hero-grain absolute inset-0" />
      <div
        aria-hidden
        className="heritage-pattern absolute -right-20 -top-24 h-[26rem] w-[26rem] opacity-[0.06] [mask-image:radial-gradient(circle_at_65%_35%,#000_15%,transparent_70%)]"
      />
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 w-full opacity-20"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1440 160"
      >
        <path
          d="M-40 40C260 130 480 10 760 70S1220 150 1480 60"
          stroke="#C98F8A"
          strokeLinecap="round"
          strokeWidth="1.5"
        />
      </svg>

      <Container className="relative pb-10 pt-20 sm:pt-24">
        {/* Statement row */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-4xl leading-[1.05] tracking-normal sm:text-5xl lg:text-6xl">
              {taglineWords.map((word, index) => (
                <span className="inline-flex items-baseline" key={word}>
                  <span className={index === 1 ? "italic text-cream/90" : ""}>{word}.</span>
                  {index < taglineWords.length - 1 ? (
                    <span
                      aria-hidden
                      className="mx-4 inline-block h-2 w-2 translate-y-[-0.35em] rounded-full bg-gold sm:mx-5"
                    />
                  ) : null}
                </span>
              ))}
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
            <ButtonLink
              className="!bg-white !text-sage hover:!bg-cream"
              href={MELORA_APP_URL}
              icon={CircleArrowRight}
            >
              Get Matched
            </ButtonLink>
            <ButtonLink
              className="!border-white/25 !bg-white/5 !text-white hover:!border-white/60 hover:!bg-white/10"
              href={MELORA_GIFT_URL}
              icon={Gift}
              variant="secondary"
            >
              Gift a Session
            </ButtonLink>
          </div>
        </div>

        <div aria-hidden className="my-14 h-px w-full bg-[linear-gradient(90deg,rgba(200,164,107,0.5),rgba(255,255,255,0.08)_40%,transparent)]" />

        {/* Brand and link columns */}
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link aria-label="melorahealth home" className="inline-flex items-center gap-3" href="/">
              <span aria-hidden className="logo-mark block h-10 w-10 shrink-0 bg-white" />
              <span className="font-serif text-3xl leading-none tracking-normal">melorahealth</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
              Mental health infrastructure for people, professionals, and
              organizations across African and diaspora contexts.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    className="group inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-semibold text-white/80 transition hover:border-gold/60 hover:text-white"
                    href={link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {link.label}
                    <ArrowUpRight
                      aria-hidden
                      className="h-3 w-3 text-gold transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:col-span-8"
          >
            {linkGroups.map((group) => (
              <div key={group.title}>
                <p className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                  {group.title}
                </p>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        className="text-sm text-white/70 transition hover:text-white"
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 melorahealth. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <span aria-hidden className="h-px w-6 bg-gold/70" />
            Care, access, and cultural understanding in one system.
          </span>
        </div>
      </Container>

      {/* Oversized wordmark, clipped at the base, as a quiet signature. */}
      <div
        aria-hidden
        className="pointer-events-none relative -mb-[0.32em] select-none overflow-hidden text-center font-serif leading-none tracking-normal text-white/[0.06]"
        style={{ fontSize: "clamp(3.8rem, 17vw, 17rem)" }}
      >
        melorahealth
      </div>
    </footer>
  );
}
