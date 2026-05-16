import type { Metadata } from "next";

export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://melorahealth.com");

export const siteName = "melorahealth";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  image: string;
  imageAlt: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  image,
  imageAlt
}: PageMetadata): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      type: "website",
      images: [
        {
          url: image,
          alt: imageAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: image,
          alt: imageAlt
        }
      ]
    }
  };
}
