import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createPageMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service",
  description:
    "Read the terms that govern use of MeloraHealth by individuals, care professionals, sponsors, and partner organizations.",
  path: "/terms-of-service",
  image: "/assets/images/hero-reflection.jpg",
  imageAlt: "African professional sitting in quiet reflection by a window"
});

const sections = [
  {
    title: "Acceptance of these terms",
    body:
      "By using the MeloraHealth website, forms, care routes, or services, you agree to these terms. If you do not agree with any part of them, please do not use the platform. Where you use MeloraHealth on behalf of an organization, you confirm that you are authorized to accept these terms for that organization."
  },
  {
    title: "Who can use MeloraHealth",
    body:
      "MeloraHealth is intended for adults. It is not designed for unsupervised use by children. Where care involves a minor, appropriate consent from a parent or guardian and professional safeguards may be required before support can be arranged."
  },
  {
    title: "What MeloraHealth is",
    body:
      "MeloraHealth is infrastructure that connects individuals, care professionals, sponsors, and organizations. We help route care requests, arrange access, and support the operations around care. MeloraHealth does not itself provide diagnosis or treatment. Clinical judgment and responsibility rest with the independent professional you are connected to."
  },
  {
    title: "Not an emergency service",
    body:
      "MeloraHealth helps route mental health support and care inquiries. It is not an emergency service, crisis line, or a place for immediate diagnosis or treatment decisions. If someone may be in immediate danger, contact local emergency services or the nearest hospital."
  },
  {
    title: "Your information and account use",
    body:
      "You agree to give accurate information when you submit a care request, onboarding form, or partner inquiry, and to keep it current. You are responsible for activity that happens through any access credentials issued to you. How we handle the information you share is set out in the Privacy Policy."
  },
  {
    title: "Care professionals",
    body:
      "Professionals who join MeloraHealth must hold and maintain valid licensing or registration for the jurisdiction where they practice, provide accurate credentials on request, work within their scope of practice, and follow the professional and regulatory standards that apply to them. Professionals engage through MeloraHealth as independent practitioners, not as employees of MeloraHealth."
  },
  {
    title: "Organizations, sponsors, and partners",
    body:
      "Employers, HMOs, universities, government bodies, and other partners access MeloraHealth under the care route and commercial arrangement agreed with them. Sponsors and gift senders fund access to care; they do not gain access to a beneficiary's clinical information, session content, or care records."
  },
  {
    title: "Payments and pricing",
    body:
      "Session fees, care credits, sponsorships, and partner fees are payable in advance unless a written arrangement says otherwise. Pricing is set internally in USD, and you may be charged the local equivalent at the applicable rate. Taxes, bank charges, and currency conversion costs may apply. Refund treatment is set out separately in the Refund Policy."
  },
  {
    title: "Cancellations and rescheduling",
    body:
      "Cancellation and rescheduling are subject to the terms of the professional, care route, or partner arrangement involved. Missed sessions and late cancellations may still be charged. The Refund Policy explains what does and does not qualify for a refund."
  },
  {
    title: "Acceptable use",
    body:
      "You agree not to misuse the platform. That includes misrepresenting your identity, qualifications, or licensing; harassing or endangering another person; attempting to gain unauthorized access; scraping or copying platform data; interfering with the service or its security; or using MeloraHealth for anything unlawful. We may suspend or end access where these terms are breached."
  },
  {
    title: "Intellectual property",
    body:
      "The MeloraHealth name, brand, platform, site content, and design remain the property of MeloraHealth or its licensors. You are given a limited, personal, non-transferable right to use the site and services as intended. Nothing here transfers ownership or grants a right to reuse our content commercially without written permission."
  },
  {
    title: "Third-party services",
    body:
      "MeloraHealth relies on third parties for things like analytics, consent management, form handling, payment processing, and operational support. Where you interact with a third-party service, that provider's own terms and policies apply alongside these terms."
  },
  {
    title: "Service availability and changes",
    body:
      "We may add, change, suspend, or withdraw parts of the platform, and access may be interrupted for maintenance or reasons outside our control. We do not guarantee uninterrupted or error-free availability."
  },
  {
    title: "Disclaimers and limitation of liability",
    body:
      "The platform is provided on an as-available basis. To the fullest extent permitted by law, MeloraHealth is not liable for indirect or consequential loss, or for the clinical decisions, conduct, or outcomes of independent professionals accessed through the platform. Nothing in these terms limits any right or remedy that cannot legally be excluded, and where applicable law imposes an obligation on us, we will comply with it."
  },
  {
    title: "Changes to these terms",
    body:
      "We may update these terms as the platform and its services develop. The date at the top of this page reflects the current version, and continuing to use MeloraHealth after an update means you accept the revised terms."
  },
  {
    title: "Contact",
    body:
      "For questions about these terms, contact MeloraHealth through the contact page and include enough detail for us to understand the request."
  }
];

export default function TermsOfServicePage() {
  return (
    <main>
      <JsonLd
        data={createBreadcrumbJsonLd("/terms-of-service", "Terms of Service")}
        id="terms-of-service-breadcrumb-jsonld"
      />
      <section className="section-space bg-[#fbf8f3]">
        <Container>
          <SectionHeader
            body="These terms govern how individuals, care professionals, sponsors, and partner organizations use MeloraHealth's website, care routing, and related services."
            eyebrow="Legal"
            title="Terms of Service"
          />
          <p className="mt-6 text-sm font-semibold text-ink/50">
            Last updated: August 2, 2026
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
