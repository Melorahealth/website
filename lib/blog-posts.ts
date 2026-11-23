import { MELORA_BLOG_URL } from "@/lib/app-links";

export type BlogPost = {
  href: string;
  topic: string;
  title: string;
  excerpt: string;
  readTime: string;
  /** The article's cover (1200x630). A site path for the fallback list, a blog URL for live posts; null if the article has none. */
  cover: string | null;
};

const post = (slug: string) => `${MELORA_BLOG_URL}/posts/${slug}`;
const cover = (slug: string) => `/assets/blog/${slug}.png`;

/**
 * Shown only if the blog cannot be reached when the page is built: the home
 * page normally lists the latest posts live (see `getLatestBlogPosts`).
 */
export const fallbackBlogPosts: BlogPost[] = [
  {
    href: post("how-to-find-a-qualified-therapist-in-nigeria"),
    cover: cover("how-to-find-a-qualified-therapist-in-nigeria"),
    topic: "Finding a therapist",
    title: "How to find a qualified therapist in Lagos, Abuja or anywhere in Nigeria",
    excerpt:
      "How to tell who is properly trained, what to ask before you pay, and the warning signs to walk away from.",
    readTime: "4 min read"
  },
  {
    href: post("how-much-does-therapy-cost-in-nigeria"),
    cover: cover("how-much-does-therapy-cost-in-nigeria"),
    topic: "Cost",
    title: "How much does therapy cost in Nigeria in 2026?",
    excerpt:
      "Real price ranges for a session, what makes one cost more than another, and how to pay less.",
    readTime: "4 min read"
  },
  {
    href: post("faith-family-and-therapy-nigeria"),
    cover: cover("faith-family-and-therapy-nigeria"),
    topic: "Faith and family",
    title: "Faith, family and therapy: can you do all three?",
    excerpt:
      "Seeing a therapist does not mean your faith is weak or your family has failed.",
    readTime: "4 min read"
  }
];

type LatestPost = {
  url: string;
  title: string;
  excerpt: string;
  topic: { label: string } | null;
  cover: string | null;
  readingMinutes: number;
};

export const LATEST_POSTS_URL = `${MELORA_BLOG_URL}/latest.json`;

/** Turns the blog feed's JSON into cards, dropping anything that does not point at the blog. */
export function toBlogPosts(body: unknown, count: number): BlogPost[] | null {
  const items = (body as { posts?: LatestPost[] } | null)?.posts;
  if (!Array.isArray(items)) return null;
  const posts = items
    .filter((item) => item?.title && item.url?.startsWith(MELORA_BLOG_URL))
    .map((item) => ({
      href: item.url,
      topic: item.topic?.label ?? "Article",
      title: item.title,
      excerpt: item.excerpt ?? "",
      readTime: `${Math.max(1, Math.round(item.readingMinutes || 1))} min read`,
      cover: item.cover?.startsWith(MELORA_BLOG_URL) ? item.cover : null
    }));
  return posts.length >= count ? posts.slice(0, count) : null;
}

/**
 * The newest published posts, read from the blog's public feed when the page
 * is built. The blog sits behind bot protection that can turn a server away,
 * so this may return the hand-picked fallback; the page then refreshes the
 * list in the visitor's browser (see BlogHighlightsLive).
 */
export async function getLatestBlogPosts(count = 3): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${LATEST_POSTS_URL}?limit=${count}`, {
      next: { revalidate: 600 },
      signal: AbortSignal.timeout(5000)
    });
    if (!response.ok) return fallbackBlogPosts;
    return toBlogPosts(await response.json(), count) ?? fallbackBlogPosts;
  } catch {
    return fallbackBlogPosts;
  }
}
