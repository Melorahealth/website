import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createPageMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Read how MeloraHealth handles personal information, care inquiries, analytics, cookies, and privacy across its mental health access platform.",
  path: "/privacy-policy",
  image: "/assets/images/hero-reflection.jpg",
  imageAlt: "African professional sitting in quiet reflection by a window"
});

const sections = [
  {
    title: "Information we collect",
    body:
      "We may collect information you choose to share with us, including your name, contact details, location, inquiry type, care preferences, organization details, and messages submitted through forms or direct communication. If you request support, you may also share sensitive information about your wellbeing or care needs."
  },
  {
    title: "How we use information",
    body:
      "We use information to respond to inquiries, route care requests, support professional onboarding, manage partner conversations, process sponsored care requests, improve the platform, protect privacy, and maintain service quality."
  },
  {
    title: "Sensitive care information",
    body:
      "Mental health information is handled with additional care. MeloraHealth does not sell personal care information. Care-related details are used only to help route support, communicate with you, or provide services through appropriate professionals and partners."
  },
  {
    title: "Cookies and analytics",
    body:
      "We may use cookies, consent tools, and analytics services to understand site usage, improve performance, and manage privacy preferences. You may be able to control cookies through the consent banner or your browser settings."
  },
  {
    title: "Sharing information",
    body:
      "We may share information with trusted service providers, care professionals, payment or operations partners, and technology providers when needed to operate the platform. We may also share information if required by law, safety obligations, or legal process."
  },
  {
    title: "Data security",
    body:
      "We use reasonable technical and organizational measures to protect information. No digital service can guarantee absolute security, but we design our handling of care requests around discretion, access control, and professional standards."
  },
  {
    title: "Data retention",
    body:
      "We keep information for as long as needed to respond to requests, provide services, meet operational needs, comply with legal obligations, resolve disputes, and maintain appropriate records."
  },
  {
    title: "Your choices",
    body:
      "You may contact us to ask about access, correction, deletion, or restriction of your personal information, subject to legal, safety, professional, or operational limits."
  },
  {
    title: "Children and young people",
    body:
      "MeloraHealth is not designed for unsupervised use by children. Where care involves a minor, appropriate consent and professional safeguards may be required."
  },
  {
    title: "Contact",
    body:
      "For privacy questions, contact MeloraHealth through the contact page and include enough detail for us to understand the request."
  }
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      <JsonLd
        data={createBreadcrumbJsonLd("/privacy-policy", "Privacy Policy")}
        id="privacy-policy-breadcrumb-jsonld"
      />
      <section className="section-space bg-[#fbf8f3]">
        <Container>
          <SectionHeader
            body="This policy explains how MeloraHealth handles personal information shared through the website, inquiry forms, care routing, sponsorship, professional onboarding, and partner conversations."
            eyebrow="Privacy"
            title="Privacy Policy"
          />
          <p className="mt-6 text-sm font-semibold text-ink/50">
            Last updated: May 17, 2026
          </p>
        </Container>
      </section>
      <section className="section-space">
        <Container className="grid gap-5">
          {sections.map((section) => (
            <article
              className="rounded-2xl border border-sage/10 bg-white/45 p-6 shadow-[0_18px_48px_rgba(38,66,54,0.06)]"
              key={section.title}
            >
              <h2 className="font-serif text-3xl leading-tight tracking-normal text-sage">
                {section.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-ink/68">{section.body}</p>
            </article>
          ))}
        </Container>
      </section>
    </main>
  );
}
