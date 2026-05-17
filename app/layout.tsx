import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { siteName, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: siteName,
  title: {
    default: "melorahealth | Understand. Heal. Become.",
    template: "%s | melorahealth"
  },
  description:
    "MeloraHealth connects people, professionals, sponsors, and organizations through culturally aware mental health care across African and diaspora contexts.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "melorahealth",
    description:
      "MeloraHealth connects people, professionals, sponsors, and organizations through culturally aware mental health care across African and diaspora contexts.",
    url: "/",
    siteName,
    type: "website",
    images: ["/assets/images/hero-thoughtful-woman.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "melorahealth",
    description:
      "MeloraHealth connects people, professionals, sponsors, and organizations through culturally aware mental health care across African and diaspora contexts.",
    images: ["/assets/images/hero-thoughtful-woman.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        id="secureprivacy"
        src="https://app.secureprivacy.ai/script/6a095b468a3ce9234365d3db.js"
        strategy="beforeInteractive"
      />
      <Script
        id="google-analytics-src"
        src="https://www.googletagmanager.com/gtag/js?id=G-1LCTFSKLD0"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-1LCTFSKLD0');`}
      </Script>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
