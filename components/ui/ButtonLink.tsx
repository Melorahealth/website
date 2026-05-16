import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
  className?: string;
  icon?: LucideIcon;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  icon: Icon = ArrowRight
}: ButtonLinkProps) {
  const variants = {
    primary:
      "bg-sage text-white shadow-[0_14px_34px_rgba(38,66,54,0.18)] hover:bg-sage/90 focus-visible:ring-sage/25",
    secondary:
      "border border-sage/20 bg-white/70 text-sage backdrop-blur hover:border-sage/50 hover:bg-white focus-visible:ring-sage/20",
    text: "px-0 text-sage hover:text-rose focus-visible:ring-sage/20"
  };

  return (
    <Link
      className={`group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-4 ${variants[variant]} ${className}`}
      href={href}
    >
      <span>{children}</span>
      <Icon aria-hidden className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
    </Link>
  );
}
