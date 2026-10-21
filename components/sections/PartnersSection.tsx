import { PartnerCarousel } from "@/components/sections/PartnerCarousel";
import { Container } from "@/components/ui/Container";
import { partnerLogos } from "@/lib/partners";

/**
 * A slim, auto-scrolling band of partner and program logos, shown below the
 * home page hero.
 */
export function PartnersSection() {
  return (
    <section className="bg-[#fbf8f3] py-6 sm:py-8">
      <Container>
        <PartnerCarousel logos={partnerLogos} />
      </Container>
    </section>
  );
}
