import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

function renderLogoSitemap() {
  const homepage = absoluteUrl("/");
  const logoUrl = absoluteUrl("/assets/logo/melora-logo.png");
  const iconUrl = absoluteUrl("/assets/logo/melora-logo-icon.png");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${homepage}</loc>
    <image:image>
      <image:loc>${logoUrl}</image:loc>
      <image:title>melorahealth logo</image:title>
      <image:caption>Official melorahealth brand logo</image:caption>
    </image:image>
    <image:image>
      <image:loc>${iconUrl}</image:loc>
      <image:title>melorahealth logo icon</image:title>
      <image:caption>Official melorahealth icon logo</image:caption>
    </image:image>
  </url>
</urlset>`;
}

export function GET() {
  return new Response(renderLogoSitemap(), {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
