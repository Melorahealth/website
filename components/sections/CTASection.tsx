import type { LucideIcon } from "lucide-react";
import Image from "next/image";
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
  /** Optional editorial photo, faded in from the green on wide screens. */
  image?: { src: string; alt?: string; position?: string };
};

export function CTASection({
  title,
  body,
  primaryHref,
  primaryLabel,
  primaryIcon,
  secondaryHref,
  secondaryLabel,
  secondaryIcon,
  image
}: CTASectionProps) {
  return (
    <section className="section-space">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] bg-sage px-6 py-16 text-white sm:px-10 lg:px-16">
          {image ? (
            <div aria-hidden={!image.alt} className="cta-photo hidden lg:block">
              <Image
                alt={image.alt ?? ""}
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 50vw, 0px"
                src={image.src}
                style={{ objectPosition: image.position ?? "50% 50%" }}
              />
            </div>
          ) : null}
          <LoopLine className="bottom-0 right-0 opacity-30" />
          <div className="relative max-w-3xl lg:max-w-2xl">
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
