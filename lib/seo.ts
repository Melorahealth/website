import type { Metadata } from "next";

export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.melorahealth.io");

export const siteName = "melorahealth";

export const siteAlternateNames = ["MeloraHealth", "Melora Health", "melorahealth.io"];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/122164443"
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61589667252883"
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/melorahealth"
  }
] as const;

export const siteDescription =
  "MeloraHealth connects people, professionals, sponsors, and organizations through culturally aware mental health care across African and diaspora contexts.";

export const siteRoutes = [
  {
    path: "/",
    label: "MeloraHealth",
    description: "Culturally aware mental health care for people, professionals, sponsors, and organizations.",
    priority: 1
  },
  {
    path: "/for-you",
    label: "Find Support",
    description: "Find therapy, psychiatry, couples care, postpartum support, and identity-aware care.",
    priority: 0.9
  },
  {
    path: "/services",
    label: "Mental Health Services",
    description: "Explore online and offline therapy, psychiatry, couples care, postpartum support, and identity-aware services.",
    priority: 0.88
  },
  {
    path: "/gift-care",
    label: "Gift a Session",
    description: "Sponsor therapy sessions and care credits with privacy and dignity.",
    priority: 0.82
  },
  {
    path: "/for-professionals",
    label: "Join as a Professional",
    description: "Qualified therapists, psychologists, psychiatrists, and care providers can join the network.",
    priority: 0.8
  },
  {
    path: "/for-partners",
    label: "Partner Inquiry",
    description: "Build mental health access programs for employers, HMOs, institutions, sponsors, banks, and telcos.",
    priority: 0.8
  },
  {
    path: "/for-government",
    label: "Mental Health Support for Government and Parastatals",
    description: "Licensed, private, and culturally aware mental health care for the staff and communities of Nigerian ministries, parastatals, and public institutions, built with privacy at the centre.",
    priority: 0.8
  },
  {
    path: "/about",
    label: "About MeloraHealth",
    description: "Learn how MeloraHealth builds culturally aware mental health access across people and institutions.",
    priority: 0.7
  },
  {
    path: "/resources",
    label: "Mental Health Resources",
    description: "Read grounded guides on stress, postpartum adjustment, relationships, psychiatry, and access.",
    priority: 0.68
  },
  {
    path: "/contact",
    label: "Contact MeloraHealth",
    description: "Send care requests, professional onboarding requests, partner inquiries, and sponsorship messages.",
    priority: 0.76
  },
  {
    path: "/privacy-policy",
    label: "Privacy Policy",
    description: "Read how MeloraHealth handles personal information, care inquiries, cookies, analytics, and privacy choices.",
    priority: 0.35
  },
  {
    path: "/refund-policy",
    label: "Refund Policy",
    description: "Read MeloraHealth's no-refund policy for payments, sessions, care credits, sponsorships, and partner services.",
    priority: 0.32
  }
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  image: string;
  imageAlt: string;
  imageHeight?: number;
  imageWidth?: number;
};

export function createPageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  imageHeight,
  imageWidth
}: PageMetadata): Metadata {
  return {
    title,
    description,
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
          alt: imageAlt,
          ...(imageHeight ? { height: imageHeight } : {}),
          ...(imageWidth ? { width: imageWidth } : {})
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
