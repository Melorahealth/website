import { Check, Compass, Globe2, MessageCircle, Route, ShieldCheck } from "lucide-react";
import { InfoCard } from "@/components/cards/InfoCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { ServiceLandingPage as ServiceLandingPageData } from "@/lib/service-landing-pages";
import { createBreadcrumbJsonLd, createServiceJsonLd } from "@/lib/structured-data";

const cardIcons = [MessageCircle, Route, ShieldCheck];

type ServiceLandingPageProps = {
  page: ServiceLandingPageData;
};

export function ServiceLandingPage({ page }: ServiceLandingPageProps) {
  const path = `/services/${page.slug}`;

  return (
    <main>
      <JsonLd
        data={createBreadcrumbJsonLd(path, page.linkLabel)}
        id={`${page.slug}-breadcrumb-jsonld`}
      />
      <JsonLd
        data={createServiceJsonLd({
          path,
          name: page.linkLabel,
          description: page.metaDescription,
          image: page.imageSrc
        })}
        id={`${page.slug}-service-jsonld`}
      />
      <PageHero
        body={page.body}
        eyebrow={page.group}
        imageAlt={page.imageAlt}
        imageSrc={page.imageSrc}
        primaryHref="/contact"
        primaryLabel="Find Support"
        title={page.title}
        visualTitle={page.visualTitle}
      />

      <section className="section-space">
        <Container>
          <div className="section-grid lg:items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                body={page.introBody}
                eyebrow="Care route"
                title={page.introTitle}
              />
            </div>
            <div className="grid gap-5 md:grid-cols-3 lg:col-span-7">
              {page.cards.map((card, index) => (
                <InfoCard
                  body={card.body}
                  icon={cardIcons[index] ?? Compass}
                  key={card.title}
                  title={card.title}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space bg-cream/40">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            body="The first message does not need to be perfect. It only needs to be honest enough to help route care well."
            eyebrow="Who it supports"
            title="A clear path for the people who need it."
          />
          <div className="rounded-2xl border border-sage/10 bg-white/45 p-6 shadow-[0_22px_70px_rgba(38,66,54,0.07)] sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {page.suitedFor.map((item) => (
                <div className="flex gap-3 rounded-xl bg-cream/40 p-4" key={item}>
                  <Check aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.8} />
                  <p className="text-sm font-semibold leading-6 text-ink/70">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-4 border-t border-sage/10 pt-6 sm:grid-cols-2">
              <div className="flex gap-3">
                <Globe2 aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-sage" strokeWidth={1.7} />
                <p className="text-sm leading-6 text-ink/60">
                  Built for African contexts and global access, including people at home and across the diaspora.
                </p>
              </div>
              <div className="flex gap-3">
                <ShieldCheck aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-sage" strokeWidth={1.7} />
                <p className="text-sm leading-6 text-ink/60">
                  Care requests are handled with privacy, professional standards, and a clear route forward.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        body={page.nextStepBody}
        primaryHref="/contact"
        primaryLabel="Start a Request"
        secondaryHref="/services"
        secondaryLabel="View Services"
        title="Start with one clear request."
      />
    </main>
  );
}
