"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, CircleArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { MELORA_APP_URL } from "@/lib/app-links";

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
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isTransparent = isHome && !hasScrolled && !isOpen;

  useEffect(() => {
    const updateScrolled = () => setHasScrolled(window.scrollY > 16);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <header
      className={`top-0 z-50 transition-all duration-300 ${
        isHome ? "fixed inset-x-0" : "sticky"
      } ${
        isTransparent
          ? "border-b border-transparent bg-transparent"
          : "border-b border-sage/10 bg-[#fbf8f3]/80 shadow-[0_8px_30px_rgba(38,66,54,0.07)] backdrop-blur-xl supports-[backdrop-filter]:bg-[#fbf8f3]/70"
      }`}
    >
      <Container>
        <div
          className={`flex items-center justify-between gap-4 transition-all duration-300 lg:gap-6 ${
            isTransparent ? "min-h-[5rem]" : "min-h-[4.25rem]"
          }`}
        >
          <Link
            aria-label="melorahealth home"
            className="group flex min-w-0 shrink-0 items-center gap-2.5"
            href="/"
            onClick={() => setIsOpen(false)}
          >
            <span className="relative block h-10 w-10 shrink-0 overflow-hidden rounded-xl ring-1 ring-sage/10 transition-transform duration-300 group-hover:scale-105">
              <Image
                alt=""
                className="object-contain"
                fill
                sizes="40px"
                src="/assets/logo/melora-logo-icon.png"
              />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-serif text-[1.55rem] leading-none tracking-normal text-sage sm:text-[1.7rem]">
                melora<span className="text-rose">health</span>
              </span>
              <span className="mt-1 hidden text-[0.54rem] font-semibold uppercase leading-none tracking-[0.28em] text-gold sm:block">
                Understand. Heal. Become.
              </span>
            </span>
          </Link>
          <nav
            aria-label="Main navigation"
            className={`hidden items-center gap-0.5 rounded-full border border-sage/10 p-1 backdrop-blur-xl transition-all duration-300 lg:flex ${
              isTransparent
                ? "bg-white/55 shadow-[0_10px_30px_rgba(38,66,54,0.05)]"
                : "bg-white/70 shadow-[0_10px_30px_rgba(38,66,54,0.06)]"
            }`}
          >
            {navItems.map((item) => (
              <Link
                aria-current={pathname === item.href ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? "bg-sage text-white shadow-[0_6px_16px_rgba(38,66,54,0.18)]"
                    : "text-ink/70 hover:bg-cream hover:text-sage"
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden sm:block">
            <ButtonLink href={MELORA_APP_URL} icon={CircleArrowRight}>
              Get Started
            </ButtonLink>
          </div>
          <button
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-[0_16px_44px_rgba(38,66,54,0.08),inset_0_1px_0_rgba(255,255,255,0.54)] backdrop-blur-2xl transition hover:bg-white/50 focus-visible:outline-none focus-visible:ring-4 lg:hidden ${
              isTransparent
                ? "border-white/60 bg-white/[0.45] text-sage focus-visible:ring-sage/15"
                : "border-sage/10 bg-white/75 text-sage focus-visible:ring-sage/15"
            }`}
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
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={`group flex min-h-12 items-center justify-between rounded-[18px] px-4 text-sm font-semibold transition ${
                      pathname === item.href
                        ? "bg-white/[0.5] text-sage shadow-[inset_0_1px_0_rgba(255,255,255,0.48)]"
                        : "text-ink/[0.72] hover:bg-white/[0.45] hover:text-sage"
                    }`}
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
                  className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-sage px-4 text-sm font-bold text-white shadow-[0_16px_38px_rgba(38,66,54,0.18)] transition hover:bg-sage/90"
                  href={MELORA_APP_URL}
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                  <CircleArrowRight aria-hidden className="h-4 w-4" strokeWidth={1.8} />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
