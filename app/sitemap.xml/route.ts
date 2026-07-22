import { resourceArticles } from "@/lib/resource-articles";
import { absoluteUrl, siteRoutes } from "@/lib/seo";
import { serviceLandingPages } from "@/lib/service-landing-pages";

// Custom sitemap route (instead of Next's app/sitemap.ts) so we can emit Google
// image-sitemap entries. Next 14's built-in sitemap renderer ignores the
// `images` field, so we build the XML ourselves with the image namespace.
export const dynamic = "force-static";

// OG/social image per top-level route, mirroring each page's metadata image.
// Routes without a meaningful image (policies) are omitted.
const routeImages: Record<string, string> = {
  "/": "/assets/og/melorahealth-home-og.jpg",
  "/for-you":
    "/assets/images/shot-of-a-young-businesswoman-looking-bored-while-2026-01-09-11-08-39-utc.jpg",
  "/services": "/assets/images/services-hero.png",
  "/gift-care": "/assets/images/gift-care-hero.png",
  "/for-professionals": "/assets/images/professional-care.jpg",
  "/for-partners": "/assets/images/partners-meeting.jpg",
  "/for-employers":
    "/assets/images/portrait-of-happy-multiracial-business-team-at-con-2026-01-09-11-29-22-utc.jpg",
  "/for-government": "/assets/images/jerry-harrow-XR8KV8V-NuM-unsplash.jpg",
  "/for-universities":
    "/assets/images/group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-studying-bench-with-school-items-laptops-notebooks.jpg",
  "/for-hmos":
    "/assets/images/business-leader-trying-eliminate-risks-unforeseen-obstacles-disruptions.jpg",
  "/about": "/assets/images/about-hero.png",
  "/resources": "/assets/images/hero-reflection.jpg",
  "/contact": "/assets/images/individual-reflection.jpg",
  "/book-demo":
    "/assets/images/portrait-of-happy-multiracial-business-team-at-con-2026-01-09-11-29-22-utc.jpg"
};

type SitemapEntry = {
  url: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
  image?: string;
};

function xmlEscape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function buildEntries(): SitemapEntry[] {
  return [
    ...siteRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      changeFrequency: route.path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: route.priority,
      image: routeImages[route.path] ? absoluteUrl(routeImages[route.path]) : undefined
    })),
    ...serviceLandingPages.map((page) => ({
      url: absoluteUrl(`/services/${page.slug}`),
      changeFrequency: "monthly" as const,
      priority: page.group === "Nigeria care" ? 0.84 : 0.78,
      image: absoluteUrl(page.imageSrc)
    })),
    ...resourceArticles.map((article) => ({
      url: absoluteUrl(`/resources/${article.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.72,
      image: absoluteUrl(article.imageSrc)
    }))
  ];
}

export function GET() {
  const lastModified = new Date().toISOString();
  const entries = buildEntries();

  const urls = entries
    .map((entry) => {
      const image = entry.image
        ? `\n    <image:image>\n      <image:loc>${xmlEscape(entry.image)}</image:loc>\n    </image:image>`
        : "";
      return `  <url>\n    <loc>${xmlEscape(entry.url)}</loc>\n    <lastmod>${lastModified}</lastmod>\n    <changefreq>${entry.changeFrequency}</changefreq>\n    <priority>${entry.priority}</priority>${image}\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" }
  });
}
