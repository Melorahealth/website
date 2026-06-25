"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, CircleArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
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
          : "border-b border-sage/10 bg-white/85 shadow-[0_8px_30px_rgba(38,66,54,0.07)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/75"
      }`}
    >
      <div className="mx-auto w-full px-5 sm:px-8 lg:px-12 2xl:px-14">
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
            <span className="relative block h-10 w-10 shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Image
                alt=""
                className={`object-contain transition-[filter] duration-300 ${
                  isTransparent ? "[filter:brightness(0)_invert(1)]" : ""
                }`}
                fill
                sizes="40px"
                src="/assets/logo/melora-logo-icon.png"
              />
            </span>
            <span className="min-w-0">
              <span
                className={`block truncate font-serif text-[1.55rem] leading-none tracking-normal sm:text-[1.7rem] ${
                  isTransparent ? "text-white" : "text-sage"
                }`}
              >
                melora<span className={isTransparent ? "text-white" : "text-rose"}>health</span>
              </span>
              <span className="mt-1 hidden text-[0.54rem] font-semibold uppercase leading-none tracking-[0.28em] text-gold">
                Understand. Heal. Become.
              </span>
            </span>
          </Link>
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 transition-all duration-300 lg:flex"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 after:pointer-events-none after:absolute after:inset-x-3 after:-bottom-0.5 after:h-[2px] after:rounded-full after:bg-gold after:origin-left after:transition-transform after:duration-300 ${
                    isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
                  } ${
                    isActive
                      ? isTransparent
                        ? "text-white"
                        : "text-sage"
                      : isTransparent
                        ? "text-white/75 hover:text-white"
                        : "text-ink/65 hover:text-sage"
                  }`}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
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
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-[0_16px_44px_rgba(38,66,54,0.08)] backdrop-blur-2xl transition focus-visible:outline-none focus-visible:ring-4 lg:hidden ${
              isTransparent
                ? "border-white/40 bg-white/10 text-white hover:bg-white/20 focus-visible:ring-white/20"
                : "border-sage/10 bg-white/80 text-sage hover:bg-white focus-visible:ring-sage/15"
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
      </div>
    </header>
  );
}
