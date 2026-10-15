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

type PolicySection = {
  title: string;
  body: string;
  items?: string[];
  details?: { label: string; text: string }[];
  footnote?: string;
};

const sections: PolicySection[] = [
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
    title: "Health and fitness data (Apple Health, Health Connect and wearables)",
    body:
      "If you choose to turn on stress awareness in the Melora app, we ask permission to read the following from Apple Health (iOS) or Health Connect (Android), including data from a connected watch:",
    items: [
      "Heart rate, resting heart rate and heart-rate variability",
      "Steps and workouts"
    ],
    details: [
      {
        label: "Breathing sessions.",
        text:
          "We also save your breathing sessions to Apple Health or Health Connect as mindful minutes. We never read mindfulness data that other apps wrote."
      },
      {
        label: "Why we use it.",
        text:
          "To learn what is normal for you, notice when your heart rate stays high while you are resting, and offer a short breathing exercise or check-in. Steps and workouts are used only to tell resting apart from exercise, so exercise is never mistaken for stress."
      },
      {
        label: "Where it is processed.",
        text:
          "Detection runs on your device. Readings leave your phone only if you separately switch on Share with my therapist, which is off by default. While it is off, nothing is uploaded."
      },
      {
        label: "Who can see it.",
        text:
          "Only you, and your assigned psychologist if you turn sharing on. You can turn sharing off at any time and your psychologist loses access immediately."
      },
      {
        label: "Background reading.",
        text:
          "With your permission, Melora also checks recent readings about every 15 minutes while the app is closed. You can turn stress awareness off in the app, or remove access in Apple Health or Health Connect, at any time."
      },
      {
        label: "What we never do.",
        text:
          "We do not use health data for advertising, marketing or data mining, we do not sell it, and we do not share it with data brokers. It is not stored in iCloud or in Android cloud backups."
      },
      {
        label: "Protection.",
        text: "Data is encrypted in transit and stored securely on our servers."
      },
      {
        label: "Deleting it.",
        text:
          "In the app, go to Health, then \"Delete my wearable data\" to erase everything we hold from your devices and our servers. Deleting your Melora account also erases it."
      }
    ],
    footnote:
      "Melora supports, but does not replace, care from a qualified professional. If you are in crisis, contact your local emergency services."
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
            Last updated: October 15, 2026
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
              {section.items ? (
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-8 text-ink/68">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {section.details?.map((detail) => (
                <p className="mt-4 text-base leading-8 text-ink/68" key={detail.label}>
                  <strong className="font-semibold text-ink/80">{detail.label}</strong>{" "}
                  {detail.text}
                </p>
              ))}
              {section.footnote ? (
                <p className="mt-6 border-t border-sage/10 pt-4 text-sm leading-7 text-ink/55">
                  {section.footnote}
                </p>
              ) : null}
            </article>
          ))}
        </Container>
      </section>
    </main>
  );
}
