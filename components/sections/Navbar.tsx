"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, CircleArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MELORA_APP_URL } from "@/lib/app-links";
import { serviceLandingPages } from "@/lib/service-landing-pages";

type NavLink = { href: string; label: string };
type NavItem = NavLink | { label: string; children: NavLink[] };

// Pages whose first section is light (PageHero / policy content). Everywhere
// else leads with the dark SplitHero, so the header can sit transparent over it
// like the home page. Over a light top, a transparent white-on-white header
// would be unreadable, so it stays solid there.
function hasLightTop(pathname: string) {
  if (pathname === "/privacy-policy" || pathname === "/refund-policy") return true;
  if (pathname.startsWith("/resources/")) return true;
  if (pathname.startsWith("/services/")) {
    const page = serviceLandingPages.find(
      (item) => item.slug === pathname.slice("/services/".length)
    );
    return page ? page.group !== "Specialized care" : false;
  }
  return false;
}

const navItems: NavItem[] = [
  {
    label: "Specialized care",
    children: [
      { href: "/services/individual-therapy", label: "Individual therapy" },
      { href: "/services/couples-therapy", label: "Couples therapy" },
      { href: "/services/group-therapy", label: "Group therapy" },
      { href: "/services/womens-therapy", label: "Women's therapy" },
      { href: "/services/postpartum-therapy", label: "Postpartum therapy" },
      { href: "/services/queer-affirming-therapy", label: "Queer-affirming therapy" },
      { href: "/services/psychiatry", label: "Psychiatry" }
    ]
  },
  {
    label: "People We Serve",
    children: [
      { href: "/for-you", label: "For You" },
      { href: "/for-employers", label: "Employers" },
      { href: "/for-hmos", label: "HMOs" },
      { href: "/for-government", label: "Government" },
      { href: "/for-universities", label: "Universities" }
    ]
  },
  { href: "/gift-care", label: "Gift Care" },
  { href: "/about", label: "About" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();
  const isLightTop = hasLightTop(pathname);
  const isTransparent = !isLightTop && !hasScrolled && !isOpen;

  useEffect(() => {
    const updateScrolled = () => setHasScrolled(window.scrollY > 16);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <header
      className={`top-0 z-50 transition-all duration-300 ${
        isLightTop ? "sticky" : "fixed inset-x-0"
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
              if ("children" in item) {
                const isActive = item.children.some((child) => pathname === child.href);
                return (
                  <div className="group relative" key={item.label}>
                    <button
                      aria-haspopup="menu"
                      className={`nav-underline relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        isActive ? "is-active" : ""
                      } ${
                        isActive
                          ? isTransparent
                            ? "text-white"
                            : "text-sage"
                          : isTransparent
                            ? "text-white/75 hover:text-white"
                            : "text-ink/65 hover:text-sage"
                      }`}
                      type="button"
                    >
                      {item.label}
                      <ChevronDown
                        aria-hidden
                        className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
                        strokeWidth={1.8}
                      />
                    </button>
                    <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <div
                        className="grid min-w-[15rem] gap-1 rounded-[22px] border border-white/[0.55] bg-white/90 p-2 shadow-[0_24px_70px_rgba(38,66,54,0.14),inset_0_1px_0_rgba(255,255,255,0.48)] backdrop-blur-2xl"
                        role="menu"
                      >
                        {item.children.map((child) => (
                          <Link
                            aria-current={pathname === child.href ? "page" : undefined}
                            className={`group/link flex min-h-11 items-center justify-between rounded-[16px] px-4 text-sm font-semibold transition ${
                              pathname === child.href
                                ? "bg-cream/60 text-sage"
                                : "text-ink/[0.72] hover:bg-cream/50 hover:text-sage"
                            }`}
                            href={child.href}
                            key={child.href}
                            role="menuitem"
                          >
                            {child.label}
                            <ArrowUpRight
                              aria-hidden
                              className="h-4 w-4 text-gold opacity-0 transition group-hover/link:opacity-100"
                              strokeWidth={1.7}
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              const isActive = pathname === item.href;
              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={`nav-underline relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? "is-active" : ""
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
                {navItems.map((item) => {
                  if ("children" in item) {
                    return (
                      <div className="mt-1" key={item.label}>
                        <p className="px-4 pb-1 pt-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-gold">
                          {item.label}
                        </p>
                        <div className="grid gap-1">
                          {item.children.map((child) => (
                            <Link
                              aria-current={pathname === child.href ? "page" : undefined}
                              className={`group flex min-h-12 items-center justify-between rounded-[18px] px-4 text-sm font-semibold transition ${
                                pathname === child.href
                                  ? "bg-white/[0.5] text-sage shadow-[inset_0_1px_0_rgba(255,255,255,0.48)]"
                                  : "text-ink/[0.72] hover:bg-white/[0.45] hover:text-sage"
                              }`}
                              href={child.href}
                              key={child.href}
                              onClick={() => setIsOpen(false)}
                            >
                              {child.label}
                              <ArrowUpRight
                                aria-hidden
                                className="h-4 w-4 text-gold opacity-0 transition group-hover:opacity-100"
                                strokeWidth={1.7}
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  return (
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
                  );
                })}
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
