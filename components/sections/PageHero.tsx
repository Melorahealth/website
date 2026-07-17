import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { ImagePanel } from "@/components/sections/ImagePanel";
import { LoopLine } from "@/components/ui/LoopLine";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  body: string;
  primaryHref?: string;
  primaryLabel?: string;
  visualTitle?: string;
  visualBody?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function PageHero({
  title,
  body,
  primaryHref,
  primaryLabel,
  visualTitle,
  visualBody,
  imageSrc = "/assets/images/hero-thoughtful-woman.jpg",
  imageAlt = "African woman sitting in quiet reflection"
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-sage/10 bg-[#fbf8f3]">
      <LoopLine className="-bottom-10 right-0" />
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-24">
        <div className="reveal">
          <h1 className="font-serif text-5xl leading-[1] tracking-normal text-sage sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/70">{body}</p>
          {primaryHref && primaryLabel ? (
            <div className="mt-9">
              <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
            </div>
          ) : null}
        </div>
        <ImagePanel
          alt={imageAlt}
          className="reveal reveal-delay"
          height="large"
          label="Care context"
          priority
          src={imageSrc}
          title={visualTitle ?? visualBody ?? "Make sense of what you feel."}
        />
      </Container>
    </section>
  );
}
