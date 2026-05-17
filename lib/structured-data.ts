import { absoluteUrl, siteDescription, siteName, siteRoutes } from "@/lib/seo";

export function createHomeJsonLd() {
  const keyPages = siteRoutes.filter((route) => route.path !== "/");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${absoluteUrl("/")}#website`,
        name: siteName,
        alternateName: ["MeloraHealth", "melorahealth.com"],
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
        alternateName: "MeloraHealth",
        url: absoluteUrl("/"),
        logo: absoluteUrl("/assets/logo/melora-logo.png"),
        description: siteDescription,
        sameAs: []
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
