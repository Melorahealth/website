import {
  absoluteUrl,
  siteAlternateNames,
  siteDescription,
  siteName,
  siteRoutes,
  socialLinks
} from "@/lib/seo";

export function createHomeJsonLd() {
  const keyPages = siteRoutes.filter((route) => route.path !== "/");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${absoluteUrl("/")}#website`,
        name: siteName,
        alternateName: siteAlternateNames,
        url: absoluteUrl("/"),
        description: siteDescription,
        publisher: {
          "@id": `${absoluteUrl("/")}#organization`
        },
        inLanguage: "en"
      },
      {
        "@type": "Organization",
        "@id": `${absoluteUrl("/")}#organization`,
        name: siteName,
        alternateName: siteAlternateNames,
        url: absoluteUrl("/"),
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/assets/logo/melora-logo.png"),
          contentUrl: absoluteUrl("/assets/logo/melora-logo.png"),
          width: 1254,
          height: 1254
        },
        description: siteDescription,
        sameAs: socialLinks.map((link) => link.href)
      },
      {
        "@type": "ItemList",
        "@id": `${absoluteUrl("/")}#main-pages`,
        name: "MeloraHealth main pages",
        itemListElement: keyPages.map((route, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: route.label,
          description: route.description,
          url: absoluteUrl(route.path)
        }))
      }
    ]
  };
}

export function createBreadcrumbJsonLd(path: string, name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/")
      },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: absoluteUrl(path)
      }
    ]
  };
}

type ServiceJsonLdInput = {
  path: string;
  name: string;
  description: string;
  image: string;
};

export function createServiceJsonLd({
  path,
  name,
  description,
  image
}: ServiceJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: "Mental health care",
    url: absoluteUrl(path),
    image: absoluteUrl(image),
    areaServed: ["Nigeria", "Africa", "African diaspora"],
    provider: {
      "@id": `${absoluteUrl("/")}#organization`,
      name: siteName,
      url: absoluteUrl("/")
    }
  };
}

type ArticleJsonLdInput = {
  path: string;
  headline: string;
  description: string;
  image: string;
};

export function createArticleJsonLd({
  path,
  headline,
  description,
  image
}: ArticleJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: absoluteUrl(path),
    image: absoluteUrl(image),
    author: {
      "@id": `${absoluteUrl("/")}#organization`,
      name: siteName
    },
    publisher: {
      "@id": `${absoluteUrl("/")}#organization`,
      name: siteName
    },
    inLanguage: "en"
  };
}
