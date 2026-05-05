import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

const navItems = [
  { href: "/for-you", label: "For You" },
  { href: "/for-professionals", label: "Professionals" },
  { href: "/for-partners", label: "Partners" },
  { href: "/gift-care", label: "Gift Care" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-[#fbf8f3]/78 backdrop-blur-2xl">
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-6">
          <Link aria-label="melorahealth home" className="group flex items-center gap-3" href="/">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-sage/15 bg-white/70">
              <span className="h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_0_6px_rgba(200,164,107,0.12)]" />
            </span>
            <span className="font-serif text-[1.7rem] leading-none tracking-normal text-sage">
              melora<span className="text-rose">health</span>
            </span>
          </Link>
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 rounded-full border border-sage/10 bg-white/55 p-1.5 shadow-[0_18px_48px_rgba(38,66,54,0.08)] lg:flex"
          >
            {navItems.map((item) => (
              <Link
                className="rounded-full px-4 py-2 text-sm font-medium text-ink/68 transition hover:bg-cream hover:text-sage"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden sm:block">
            <ButtonLink href="/contact">Find Support</ButtonLink>
          </div>
        </div>
        <nav
          aria-label="Mobile navigation"
          className="flex gap-2 overflow-x-auto border-t border-sage/10 py-3 text-sm text-ink/70 lg:hidden"
        >
          {navItems.map((item) => (
            <Link className="shrink-0 rounded-full bg-white/50 px-3 py-1.5" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="shrink-0 rounded-full bg-sage px-3 py-1.5 font-semibold text-white" href="/contact">
            Find Support
          </Link>
        </nav>
      </Container>
    </header>
  );
}
