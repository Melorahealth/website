import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MELORA_GIFT_URL } from "@/lib/app-links";
import { socialLinks } from "@/lib/seo";

const footerLinks = [
  { href: "/for-you", label: "Find Support" },
  { href: "/services", label: "Services" },
  { href: "/for-professionals", label: "Join as Professional" },
  { href: "/for-partners", label: "Partner Inquiry" },
  { href: MELORA_GIFT_URL, label: "Gift Session" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund Policy" }
];

export function Footer() {
  return (
    <footer className="border-t border-sage/10 bg-[#f7f2eb]">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="relative block h-12 w-12 overflow-hidden">
                <Image
                  alt=""
                  className="object-contain"
                  fill
                  sizes="48px"
                  src="/assets/logo/melora-logo-icon.png"
                />
              </span>
              <div>
                <p className="font-serif text-4xl leading-none tracking-normal text-sage">
                  melora<span className="text-rose">health</span>
                </p>
                <p className="mt-2 text-[0.62rem] font-semibold uppercase leading-none tracking-[0.32em] text-gold">
                  Understand. Heal. Become.
                </p>
              </div>
            </div>
            <p className="max-w-xl text-sm leading-6 text-ink/60">
              Mental health infrastructure for people, professionals, and
              organizations across African and diaspora contexts.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
              {socialLinks.map((link) => (
                <a
                  className="text-sage transition hover:text-rose"
                  href={link.href}
                  key={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-3">
            {footerLinks.map((link) => (
              <Link className="text-ink/60 transition hover:text-sage" href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-sage/10 pt-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            About MeloraHealth
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-ink/60">
            MeloraHealth is a digital mental healthcare platform that connects
            individuals across African and diaspora communities with licensed
            therapists, psychiatrists, and culturally aware mental health support
            through private online sessions. After a short guided intake, you are
            matched with a qualified professional and can book, reschedule, and
            manage your therapy appointments in one place. With your explicit
            permission, MeloraHealth uses Google Calendar to schedule your
            sessions and add appointment reminders to your calendar, so you never
            lose track of upcoming care. MeloraHealth only accesses the calendar
            data needed to manage your appointments and never sells your personal
            information.
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-sage/10 pt-6 text-xs text-ink/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 melorahealth. All rights reserved.</span>
          <span>Care, access, and cultural understanding in one system.</span>
        </div>
      </Container>
    </footer>
  );
}
