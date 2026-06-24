import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import {
  absoluteUrl,
  siteAlternateNames,
  siteDescription,
  siteName,
  siteUrl
} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: siteName,
  keywords: siteAlternateNames,
  title: {
    default: "melorahealth | Understand. Heal. Become.",
    template: "%s | melorahealth"
  },
  description: siteDescription,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "melorahealth",
    description: siteDescription,
    url: "/",
    siteName,
    type: "website",
    images: ["/assets/images/hero-thoughtful-woman.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "melorahealth",
    description: siteDescription,
    images: ["/assets/images/hero-thoughtful-woman.jpg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href={absoluteUrl("/amp")} rel="amphtml" />
        {/* Mark motion support before first paint so GSAP-revealed elements
            start hidden (no flash). No-JS users keep content visible. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('has-motion')"
          }}
        />
      </head>
      <Script
        id="secureprivacy"
        src="https://app.secureprivacy.ai/script/6a095b468a3ce9234365d3db.js"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics-src"
        src="https://www.googletagmanager.com/gtag/js?id=G-1LCTFSKLD0"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-1LCTFSKLD0');`}
      </Script>
      <body>
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
