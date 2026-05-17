import type { MetadataRoute } from "next";
import { resourceArticles } from "@/lib/resource-articles";
import { absoluteUrl, siteRoutes } from "@/lib/seo";
import { serviceLandingPages } from "@/lib/service-landing-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...siteRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified,
      changeFrequency: route.path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: route.priority
    })),
    ...serviceLandingPages.map((page) => ({
      url: absoluteUrl(`/services/${page.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: page.group === "Nigeria care" ? 0.84 : 0.78
    })),
    ...resourceArticles.map((article) => ({
      url: absoluteUrl(`/resources/${article.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.72
    }))
  ];
}
