import { PartnerCarousel } from "@/components/sections/PartnerCarousel";
import { Container } from "@/components/ui/Container";
import { partnerLogos } from "@/lib/partners";

type PartnersSectionProps = {
  label?: string;
};

/**
 * A slim, auto-scrolling band of partner logos, shown below the hero on the
 * organization-facing "People We Serve" pages.
 */
export function PartnersSection({
  label = "Trusted by partners across the care ecosystem"
}: PartnersSectionProps) {
  return (
    <section className="border-b border-sage/10 bg-[#fbf8f3] py-10 sm:py-12">
      <Container>
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-sage/70">
          {label}
        </p>
        <PartnerCarousel logos={partnerLogos} />
      </Container>
    </section>
  );
}
