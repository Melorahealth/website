"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, CircleArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MELORA_APP_URL } from "@/lib/app-links";
import { serviceLandingPages } from "@/lib/service-landing-pages";

type NavLink = { href: string; label: string };
type NavItem = NavLink | { label: string; children: NavLink[] };

const lightTopRoutes = new Set([
  "/privacy-policy",
  "/refund-policy",
  "/terms-of-service"
]);

// Pages whose first section is light (PageHero / policy content). Everywhere
// else leads with the dark SplitHero, so the header can sit transparent over it
// like the home page. Over a light top, a transparent white-on-white header
// would be unreadable, so it stays solid there.
function hasLightTop(pathname: string) {
  if (lightTopRoutes.has(pathname)) return true;
  if (pathname.startsWith("/resources/")) return true;
  if (pathname.startsWith("/services/")) {
    const page = serviceLandingPages.find(
      (item) => item.slug === pathname.slice("/services/".length)
    );
    return page ? page.group !== "Specialized care" : false;
  }
  return false;
}

function toSlug(label: string) {
  return label.replace(/\s+/g, "-").toLowerCase();
}

// A plus that becomes a minus: the horizontal bar stays put while the vertical
// one rotates away, so opening and closing a group reads as one movement.
function PlusMinusIcon({ className = "", isOpen }: { className?: string; isOpen: boolean }) {
  return (
    <span aria-hidden className={`relative block h-4 w-4 shrink-0 ${className}`}>
      <span className="absolute left-1/2 top-1/2 h-[1.5px] w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />
      <span
        className={`absolute left-1/2 top-1/2 h-3 w-[1.5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
          isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
        }`}
      />
    </span>
  );
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
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const desktopNavRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isLightTop = hasLightTop(pathname);
  const isTransparent = !isLightTop && !hasScrolled && !isOpen;

  // The group holding the current page, so the sheet opens showing where you are.
  const activeGroup =
    navItems.find(
      (item) => "children" in item && item.children.some((child) => child.href === pathname)
    )?.label ?? null;

  useEffect(() => {
    const updateScrolled = () => setHasScrolled(window.scrollY > 16);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  // Close both menus whenever navigation lands on a new route.
  useEffect(() => {
    setIsOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  // An open desktop dropdown dismisses on Escape or a click outside the nav.
  useEffect(() => {
    if (!openMenu) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null);
    };
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!desktopNavRef.current?.contains(event.target as Node)) setOpenMenu(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    document.addEventListener("mousedown", closeOnOutsideClick);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("mousedown", closeOnOutsideClick);
    };
  }, [openMenu]);

  useEffect(() => {
    if (!isOpen) return;

    setOpenGroup(activeGroup);
  }, [activeGroup, isOpen]);

  // Hold the page still behind the open sheet and let Escape dismiss it.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <>
      <div
        aria-hidden
        className={`fixed inset-0 z-40 bg-ink/30 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />
      <header
        className={`top-0 z-50 transition-all duration-300 ${
          isLightTop ? "sticky" : "fixed inset-x-0"
        } ${
          isTransparent
            ? "border-b border-transparent bg-transparent"
            : "border-b border-sage/10 bg-white shadow-[0_8px_30px_rgba(38,66,54,0.07)]"
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
              <span
                aria-hidden
                className={`logo-mark block h-10 w-10 shrink-0 transition-[background-color,transform] duration-300 group-hover:scale-105 ${
                  isTransparent ? "bg-white" : "bg-sage"
                }`}
              />
              <span
                className={`block min-w-0 truncate font-serif text-[1.55rem] leading-none tracking-normal sm:text-[1.7rem] ${
                  isTransparent ? "text-white" : "text-sage"
                }`}
              >
                melorahealth
              </span>
            </Link>
            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-1 transition-all duration-300 lg:flex"
              ref={desktopNavRef}
            >
              {navItems.map((item) => {
                if ("children" in item) {
                  const isActive = item.children.some((child) => pathname === child.href);
                  const menuId = `desktop-menu-${toSlug(item.label)}`;
                  const isMenuOpen = openMenu === item.label;

                  return (
                    <div className="relative" key={item.label}>
                      <button
                        aria-controls={menuId}
                        aria-expanded={isMenuOpen}
                        aria-haspopup="menu"
                        className={`nav-underline relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                          isActive ? "is-active" : ""
                        } ${
                          isActive || isMenuOpen
                            ? isTransparent
                              ? "text-white"
                              : "text-sage"
                            : isTransparent
                              ? "text-white/75 hover:text-white"
                              : "text-ink/65 hover:text-sage"
                        }`}
                        onClick={() =>
                          setOpenMenu((current) => (current === item.label ? null : item.label))
                        }
                        type="button"
                      >
                        {item.label}
                        <PlusMinusIcon isOpen={isMenuOpen} />
                      </button>
                      <div
                        className={`absolute left-0 top-full z-50 pt-2 transition duration-200 ${
                          isMenuOpen
                            ? "visible translate-y-0 opacity-100"
                            : "invisible -translate-y-1 opacity-0"
                        }`}
                        id={menuId}
                      >
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
                              onClick={() => setOpenMenu(null)}
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
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-[0_16px_44px_rgba(38,66,54,0.08)] backdrop-blur-2xl transition duration-300 focus-visible:outline-none focus-visible:ring-4 active:scale-90 lg:hidden ${
                isTransparent
                  ? "border-white/40 bg-white/10 text-white hover:bg-white/20 focus-visible:ring-white/20"
                  : "border-sage/10 bg-white/80 text-sage hover:bg-white focus-visible:ring-sage/15"
              } ${isOpen ? "bg-sage/[0.06]" : ""}`}
              onClick={() => setIsOpen((value) => !value)}
              type="button"
            >
              {/* Three bars that morph into an X: the middle collapses while the
                  outer two travel to the centre and cross. */}
              <span aria-hidden className="relative block h-[0.875rem] w-[1.15rem]">
                <span
                  className={`absolute left-0 h-[2px] w-full rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                    isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0 rotate-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-current transition-all duration-200 ${
                    isOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-[2px] w-full rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                    isOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0 rotate-0"
                  }`}
                />
              </span>
            </button>
          </div>
          <div
            className={`grid overflow-hidden transition-[grid-template-rows,opacity,visibility] duration-300 ease-out lg:hidden ${
              isOpen
                ? "visible grid-rows-[1fr] opacity-100"
                : "invisible grid-rows-[0fr] opacity-0"
            }`}
            id="mobile-menu"
          >
            <div className="min-h-0">
              {/* Capped to the viewport with the links scrolling inside, so a long
                  menu can never push its last items off-screen. */}
              <div className="mb-4 flex max-h-[calc(100dvh-6.5rem)] flex-col overflow-hidden rounded-[26px] border border-white/[0.55] bg-white/60 shadow-[0_24px_70px_rgba(38,66,54,0.1),inset_0_1px_0_rgba(255,255,255,0.48)] backdrop-blur-2xl">
                <nav
                  aria-label="Mobile navigation"
                  className="grid min-h-0 flex-1 gap-1 overflow-y-auto overscroll-contain p-2"
                >
                  {navItems.map((item) => {
                    if ("children" in item) {
                      const panelId = `mobile-group-${toSlug(item.label)}`;
                      const isGroupOpen = openGroup === item.label;
                      const hasActiveChild = item.children.some(
                        (child) => child.href === pathname
                      );

                      return (
                        <div key={item.label}>
                          <button
                            aria-controls={panelId}
                            aria-expanded={isGroupOpen}
                            className={`flex min-h-12 w-full items-center justify-between rounded-[18px] px-4 text-sm font-bold transition ${
                              hasActiveChild
                                ? "text-sage"
                                : "text-ink/[0.72] hover:bg-white/[0.45] hover:text-sage"
                            }`}
                            onClick={() =>
                              setOpenGroup((current) =>
                                current === item.label ? null : item.label
                              )
                            }
                            type="button"
                          >
                            {item.label}
                            <PlusMinusIcon className="text-gold" isOpen={isGroupOpen} />
                          </button>
                          <div
                            className={`grid overflow-hidden transition-[grid-template-rows,visibility] duration-300 ease-out ${
                              isGroupOpen
                                ? "visible grid-rows-[1fr]"
                                : "invisible grid-rows-[0fr]"
                            }`}
                            id={panelId}
                          >
                            <div className="min-h-0">
                              <div className="grid gap-1 pb-1 pl-3 pt-1">
                                {item.children.map((child) => (
                                  <Link
                                    aria-current={pathname === child.href ? "page" : undefined}
                                    className={`group flex min-h-12 items-center justify-between rounded-[18px] px-4 text-sm font-semibold transition ${
                                      pathname === child.href
                                        ? "bg-white/[0.7] text-sage shadow-[inset_0_1px_0_rgba(255,255,255,0.48)]"
                                        : "text-ink/[0.72] hover:bg-white/[0.45] hover:text-sage"
                                    }`}
                                    href={child.href}
                                    key={child.href}
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {child.label}
                                    <ArrowUpRight
                                      aria-hidden
                                      className="h-4 w-4 shrink-0 text-gold opacity-45 transition group-hover:opacity-100"
                                      strokeWidth={1.7}
                                    />
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }

                    return (
                      <Link
                        aria-current={pathname === item.href ? "page" : undefined}
                        className={`group flex min-h-12 items-center justify-between rounded-[18px] px-4 text-sm font-bold transition ${
                          pathname === item.href
                            ? "bg-white/[0.7] text-sage shadow-[inset_0_1px_0_rgba(255,255,255,0.48)]"
                            : "text-ink/[0.72] hover:bg-white/[0.45] hover:text-sage"
                        }`}
                        href={item.href}
                        key={item.href}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                        <ArrowUpRight
                          aria-hidden
                          className="h-4 w-4 shrink-0 text-gold opacity-45 transition group-hover:opacity-100"
                          strokeWidth={1.7}
                        />
                      </Link>
                    );
                  })}
                </nav>
                {/* Outside the scroll area so the primary actions stay reachable. */}
                <div className="grid shrink-0 grid-cols-2 gap-2 border-t border-sage/10 bg-white/40 p-2">
                  <Link
                    className="flex min-h-12 items-center justify-center rounded-full border border-sage/15 bg-white/[0.55] px-4 text-sm font-bold text-sage transition hover:bg-white"
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
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
