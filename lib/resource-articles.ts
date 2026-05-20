export type ResourceArticle = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  publishedAt: string;
  updatedAt: string;
  summary: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  sections: {
    heading: string;
    body: string;
  }[];
  relatedLinks: {
    href: string;
    label: string;
  }[];
};

export const resourceArticles: ResourceArticle[] = [
  {
    slug: "cost-of-therapy-in-nigeria",
    title: "How much does therapy cost in Nigeria?",
    metaTitle: "Cost of Therapy in Nigeria",
    metaDescription:
      "A grounded guide to the cost of therapy in Nigeria, what affects session pricing, and how MeloraHealth helps people find the right care route.",
    publishedAt: "2026-05-20",
    updatedAt: "2026-05-20",
    summary:
      "Therapy pricing in Nigeria can vary by professional qualification, session format, location, specialty, and whether care is private, sponsored, or part of an organization program.",
    category: "Cost guide",
    imageSrc: "/assets/images/professional-care.jpg",
    imageAlt: "African therapist and client seated in a respectful care conversation",
    sections: [
      {
        heading: "There is no single price for therapy",
        body:
          "The cost of therapy in Nigeria depends on the professional, the type of care, the session length, and whether support happens online or in person. A first session may also be priced differently from ongoing care."
      },
      {
        heading: "What affects the price",
        body:
          "Therapists, psychologists, psychiatrists, and specialist providers may charge differently because their training and role are not the same. Couples therapy, psychiatry, postpartum support, and trauma-informed care may also require different levels of preparation and follow-up."
      },
      {
        heading: "Online care may reduce some barriers",
        body:
          "Online therapy can make care easier to begin when travel, location, traffic, or privacy is a concern. It does not automatically make care cheap, but it can reduce some of the hidden costs around access."
      },
      {
        heading: "Sponsored care can help",
        body:
          "Some people begin therapy through gift care credits, family sponsorship, employer support, HMO access, or partner programs. The person receiving care should still keep privacy and choice."
      },
      {
        heading: "The right question is fit, not only price",
        body:
          "Cost matters, but the lowest price is not always the safest or most useful route. The better question is whether the professional, format, and care level fit what the person is dealing with."
      }
    ],
    relatedLinks: [
      {
        href: "/services/therapy-in-nigeria",
        label: "Therapy in Nigeria"
      },
      {
        href: "/services/online-therapy-nigeria",
        label: "Online therapy in Nigeria"
      },
      {
        href: "/services/gift-therapy-session-africa",
        label: "Gift therapy sessions"
      }
    ]
  }
];

export function getResourceArticle(slug: string) {
  return resourceArticles.find((article) => article.slug === slug);
}
