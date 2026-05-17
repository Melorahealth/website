import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createPageMetadata } from "@/lib/seo";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Refund Policy",
  description:
    "Read MeloraHealth's refund policy for session payments, care credits, sponsorships, and partner payments.",
  path: "/refund-policy",
  image: "/assets/images/hero-reflection.jpg",
  imageAlt: "African professional sitting in quiet reflection by a window"
});

const sections = [
  {
    title: "No refunds",
    body:
      "All payments made to MeloraHealth are non-refundable. This includes session payments, care credits, gift care credits, sponsorship payments, professional onboarding fees where applicable, partner payments, and any other paid access or service fee."
  },
  {
    title: "Gift care credits",
    body:
      "Gift care credits and sponsored care credits cannot be exchanged for cash, transferred outside the approved care route, or refunded after payment."
  },
  {
    title: "Missed or unused sessions",
    body:
      "Missed sessions, late cancellations, unused credits, or failure to attend a scheduled appointment do not qualify for a refund. Rescheduling may be considered only where the relevant professional, care route, or partner terms allow it."
  },
  {
    title: "Service changes",
    body:
      "If MeloraHealth or a care professional needs to change a session time, care route, or service arrangement, we may offer a reasonable alternative where possible. A refund will not be provided unless required by law or specifically confirmed in writing by MeloraHealth."
  },
  {
    title: "Legal exceptions",
    body:
      "Nothing in this policy limits any refund or consumer right that cannot legally be excluded. Where applicable law requires a refund, MeloraHealth will comply with that requirement."
  },
  {
    title: "Questions",
    body:
      "For payment or policy questions, contact MeloraHealth through the contact page with your name, payment reference, and the care route or service connected to the payment."
  }
];

export default function RefundPolicyPage() {
  return (
    <main>
      <JsonLd
        data={createBreadcrumbJsonLd("/refund-policy", "Refund Policy")}
        id="refund-policy-breadcrumb-jsonld"
      />
      <section className="section-space bg-[#fbf8f3]">
        <Container>
          <SectionHeader
            body="This policy explains MeloraHealth's no-refund position for payments, session access, care credits, sponsorships, and partner services."
            eyebrow="Payments"
            title="Refund Policy"
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
