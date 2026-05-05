"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-[#fbf8f3]/[0.72] backdrop-blur-2xl">
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-4 lg:gap-6">
          <Link
            aria-label="melorahealth home"
            className="group flex min-w-0 items-center gap-3"
            href="/"
            onClick={() => setIsOpen(false)}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-sage/15 bg-white/70">
              <span className="h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_0_6px_rgba(200,164,107,0.12)]" />
            </span>
            <span className="truncate font-serif text-[1.55rem] leading-none tracking-normal text-sage sm:text-[1.7rem]">
              melora<span className="text-rose">health</span>
            </span>
          </Link>
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 rounded-full border border-sage/10 bg-white/[0.55] p-1.5 shadow-[0_18px_48px_rgba(38,66,54,0.08)] lg:flex"
          >
            {navItems.map((item) => (
              <Link
                className="rounded-full px-4 py-2 text-sm font-medium text-ink/[0.68] transition hover:bg-cream hover:text-sage"
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
          <button
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/[0.35] text-sage shadow-[0_16px_44px_rgba(38,66,54,0.08),inset_0_1px_0_rgba(255,255,255,0.54)] backdrop-blur-2xl transition hover:bg-white/50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sage/15 lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            type="button"
          >
            {isOpen ? <X aria-hidden className="h-5 w-5" strokeWidth={1.8} /> : <Menu aria-hidden className="h-5 w-5" strokeWidth={1.8} />}
          </button>
        </div>
        <div
          className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
          id="mobile-menu"
        >
          <nav aria-label="Mobile navigation" className="min-h-0">
            <div className="mb-4 rounded-[26px] border border-white/[0.55] bg-white/30 p-2 shadow-[0_24px_70px_rgba(38,66,54,0.1),inset_0_1px_0_rgba(255,255,255,0.48)] backdrop-blur-2xl">
              <div className="grid gap-1">
                {navItems.map((item) => (
                  <Link
                    className="group flex min-h-12 items-center justify-between rounded-[18px] px-4 text-sm font-semibold text-ink/[0.72] transition hover:bg-white/[0.45] hover:text-sage"
                    href={item.href}
                    key={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                    <ArrowUpRight
                      aria-hidden
                      className="h-4 w-4 text-gold opacity-0 transition group-hover:opacity-100"
                      strokeWidth={1.7}
                    />
                  </Link>
                ))}
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2 border-t border-sage/10 pt-2">
                <Link
                  className="flex min-h-12 items-center justify-center rounded-full border border-sage/15 bg-white/[0.35] px-4 text-sm font-bold text-sage transition hover:bg-white/[0.55]"
                  href="/for-professionals"
                  onClick={() => setIsOpen(false)}
                >
                  Join
                </Link>
                <Link
                  className="flex min-h-12 items-center justify-center rounded-full bg-sage px-4 text-sm font-bold text-white shadow-[0_16px_38px_rgba(38,66,54,0.18)] transition hover:bg-sage/90"
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                >
                  Find Support
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
