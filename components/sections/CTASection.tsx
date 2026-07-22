import type { LucideIcon } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { LoopLine } from "@/components/ui/LoopLine";

type CTASectionProps = {
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  /** Optional icon for the primary button (defaults to an arrow). */
  primaryIcon?: LucideIcon;
  secondaryHref?: string;
  secondaryLabel?: string;
  /** Optional icon for the secondary button (defaults to an arrow). */
  secondaryIcon?: LucideIcon;
};

export function CTASection({
  title,
  body,
  primaryHref,
  primaryLabel,
  primaryIcon,
  secondaryHref,
  secondaryLabel,
  secondaryIcon
}: CTASectionProps) {
  return (
    <section className="section-space">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] bg-sage px-6 py-16 text-white sm:px-10 lg:px-16">
          <LoopLine className="bottom-0 right-0 opacity-30" />
          <div className="relative max-w-3xl">
            <h2 className="font-serif text-4xl leading-tight tracking-normal sm:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">{body}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                className="!bg-white !text-sage hover:!bg-cream"
                href={primaryHref}
                icon={primaryIcon}
              >
                {primaryLabel}
              </ButtonLink>
              {secondaryHref && secondaryLabel ? (
                <ButtonLink
                  className="!border-white/20 !bg-transparent !text-white hover:!border-white/50 hover:!bg-white/10"
                  href={secondaryHref}
                  icon={secondaryIcon}
                  variant="secondary"
                >
                  {secondaryLabel}
                </ButtonLink>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
