import { MELORA_BLOG_URL } from "@/lib/app-links";

export type BlogPost = {
  href: string;
  topic: string;
  title: string;
  excerpt: string;
  readTime: string;
};

const post = (slug: string) => `${MELORA_BLOG_URL}/posts/${slug}`;

/**
 * Articles featured on the home page. They live on the blog
 * (blog.melorahealth.io); this is a hand-picked list, so swap entries here when
 * newer articles deserve the spot. The first entry is the lead story: it gets
 * the large photo card, so pair it with `featuredBlogImage` below.
 */
export const featuredBlogPosts: BlogPost[] = [
  {
    href: post("how-to-find-a-qualified-therapist-in-nigeria"),
    topic: "Finding a therapist",
    title: "How to find a qualified therapist in Lagos, Abuja or anywhere in Nigeria",
    excerpt:
      "How to tell who is properly trained, what to ask before you pay, and the warning signs to walk away from.",
    readTime: "4 min read"
  },
  {
    href: post("how-much-does-therapy-cost-in-nigeria"),
    topic: "Cost",
    title: "How much does therapy cost in Nigeria in 2026?",
    excerpt:
      "Real price ranges for a session, what makes one cost more than another, and how to pay less.",
    readTime: "4 min read"
  },
  {
    href: post("faith-family-and-therapy-nigeria"),
    topic: "Faith and family",
    title: "Faith, family and therapy: can you do all three?",
    excerpt:
      "Seeing a therapist does not mean your faith is weak or your family has failed.",
    readTime: "4 min read"
  }
];

/** Photo behind the lead story. Decorative: the card's text carries the meaning. */
export const featuredBlogImage = {
  src: "/assets/images/professional-care.jpg",
  position: "50% 30%"
};
