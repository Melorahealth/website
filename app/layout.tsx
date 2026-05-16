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
      <Script id="google-tag-manager" strategy="beforeInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5HDWGTX8');`}
      </Script>
      <body>
        <noscript>
          <iframe
            height="0"
            src="https://www.googletagmanager.com/ns.html?id=GTM-5HDWGTX8"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
            width="0"
          />
        </noscript>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
