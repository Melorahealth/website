import Link from "next/link";
import { Container } from "@/components/ui/Container";

const footerLinks = [
  { href: "/for-you", label: "Find Support" },
  { href: "/for-professionals", label: "Join as Professional" },
  { href: "/for-partners", label: "Partner Inquiry" },
  { href: "/gift-care", label: "Gift Session" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" }
];

export function Footer() {
  return (
    <footer className="border-t border-sage/10 bg-[#f7f2eb]">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <p className="mb-5 font-serif text-4xl tracking-normal text-sage">
              melora<span className="text-rose">health</span>
            </p>
            <p className="eyebrow mb-4">Understand. Heal. Become.</p>
            <p className="max-w-xl text-sm leading-6 text-ink/60">
              Mental health infrastructure for people, professionals, and
              organizations across African and diaspora contexts.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-3">
            {footerLinks.map((link) => (
              <Link className="text-ink/60 transition hover:text-sage" href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-sage/10 pt-6 text-xs text-ink/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 melorahealth. All rights reserved.</span>
          <span>Care, access, and cultural understanding in one system.</span>
        </div>
      </Container>
    </footer>
  );
}
