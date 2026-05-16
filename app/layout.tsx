import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";

export const metadata: Metadata = {
  title: {
    default: "melorahealth | Understand. Heal. Become.",
    template: "%s | melorahealth"
  },
  description:
    "An African mental health infrastructure platform connecting people, professionals, and organizations through culturally aware care.",
  openGraph: {
    title: "melorahealth",
    description: "Make sense of what you feel.",
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
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
