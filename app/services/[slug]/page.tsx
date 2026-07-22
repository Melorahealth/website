import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLandingPage } from "@/components/sections/ServiceLandingPage";
import { SpecializedCarePage } from "@/components/sections/SpecializedCarePage";
import { getServiceLandingPage, serviceLandingPages } from "@/lib/service-landing-pages";

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return serviceLandingPages.map((page) => ({
    slug: page.slug
  }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const page = getServiceLandingPage(params.slug);

  if (!page) {
    return {
      title: "Service Not Found | melorahealth"
    };
  }

  const path = `/services/${page.slug}`;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
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
      title: page.metaTitle,
      description: page.metaDescription,
      url: path,
      siteName: "melorahealth",
      type: "website",
      images: [
        {
          url: page.imageSrc,
          alt: page.imageAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [page.imageSrc]
    }
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const page = getServiceLandingPage(params.slug);

  if (!page) {
    notFound();
  }

  if (page.group === "Specialized care") {
    return <SpecializedCarePage page={page} />;
  }

  return <ServiceLandingPage page={page} />;
}
