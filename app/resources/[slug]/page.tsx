import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { CareNotice } from "@/components/sections/CareNotice";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MELORA_GIFT_URL } from "@/lib/app-links";
import { getResourceArticle, resourceArticles } from "@/lib/resource-articles";
import { createArticleJsonLd, createBreadcrumbJsonLd } from "@/lib/structured-data";

type ResourceArticlePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return resourceArticles.map((article) => ({
    slug: article.slug
  }));
}

export function generateMetadata({ params }: ResourceArticlePageProps): Metadata {
  const article = getResourceArticle(params.slug);

  if (!article) {
    return {
      title: "Resource Not Found | melorahealth"
    };
  }

  const path = `/resources/${article.slug}`;

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: path
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: path,
      siteName: "melorahealth",
      type: "article",
      images: [
        {
          url: article.imageSrc,
          alt: article.imageAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
      images: [article.imageSrc]
    }
  };
}

export default function ResourceArticlePage({ params }: ResourceArticlePageProps) {
  const article = getResourceArticle(params.slug);

  if (!article) {
    notFound();
  }

  const path = `/resources/${article.slug}`;

  return (
    <main>
      <JsonLd
        data={createBreadcrumbJsonLd(path, article.title)}
        id={`${article.slug}-breadcrumb-jsonld`}
      />
      <JsonLd
        data={createArticleJsonLd({
          path,
          headline: article.title,
          description: article.metaDescription,
          image: article.imageSrc,
          datePublished: article.publishedAt,
          dateModified: article.updatedAt
        })}
        id={`${article.slug}-article-jsonld`}
      />
      <PageHero
        body={article.summary}
        eyebrow={article.category}
        imageAlt={article.imageAlt}
        imageSrc={article.imageSrc}
        primaryHref="/contact"
        primaryLabel="Ask About Care"
        title={article.title}
        visualTitle="Clear information before the next step."
      />

      <section className="section-space">
        <Container className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
          <SectionHeader
            body={`This guide is general information, not medical advice. Published ${article.publishedAt}; last updated ${article.updatedAt}.`}
            eyebrow="Guide"
            title="What to know before you begin."
          />
          <article className="rounded-2xl border border-sage/10 bg-white/50 p-6 shadow-[0_22px_70px_rgba(38,66,54,0.07)] sm:p-8">
            <div className="grid gap-8">
              {article.sections.map((section) => (
                <section className="border-b border-sage/10 pb-8 last:border-b-0 last:pb-0" key={section.heading}>
                  <h2 className="font-serif text-3xl leading-tight tracking-normal text-sage">
                    {section.heading}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-ink/68">{section.body}</p>
                </section>
              ))}
            </div>
            <div className="mt-10 rounded-xl bg-cream/45 p-5">
              <h2 className="font-serif text-2xl leading-tight tracking-normal text-sage">
                Related care routes
              </h2>
              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                {article.relatedLinks.map((link) => (
                  <Link
                    className="group flex min-h-12 items-center justify-between rounded-xl border border-sage/10 bg-white/45 px-4 text-sm font-semibold text-ink/70 transition hover:border-gold/40 hover:bg-white hover:text-sage"
                    href={link.href}
                    key={link.href}
                  >
                    <span>{link.label}</span>
                    <ArrowRight
                      aria-hidden
                      className="h-4 w-4 shrink-0 text-gold transition group-hover:translate-x-0.5"
                      strokeWidth={1.7}
                    />
                  </Link>
                ))}
              </div>
            </div>
            <CareNotice className="mt-8" />
          </article>
        </Container>
      </section>

      <CTASection
        body="If cost is the barrier, share what kind of care is needed. MeloraHealth can discuss direct care, gift credits, or partner-supported routes where available."
        primaryHref="/contact"
        primaryLabel="Start a Request"
        secondaryHref={MELORA_GIFT_URL}
        secondaryLabel="Gift Care"
        title="Care should have a clear route."
      />
    </main>
  );
}
