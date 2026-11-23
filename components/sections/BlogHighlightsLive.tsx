"use client";

import { useEffect, useState } from "react";

import { BlogHighlights } from "@/components/sections/BlogHighlights";
import { LATEST_POSTS_URL, toBlogPosts } from "@/lib/blog-posts";
import type { BlogPost } from "@/lib/blog-posts";

/**
 * Shows the posts the page was built with, then asks the blog for its newest
 * posts from the visitor's browser and swaps them in. If that request fails
 * the built-in list simply stays.
 */
export function BlogHighlightsLive({ initial }: { initial: BlogPost[] }) {
  const [posts, setPosts] = useState(initial);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${LATEST_POSTS_URL}?limit=${initial.length}`, { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((body) => {
        const latest = toBlogPosts(body, initial.length);
        if (latest) setPosts(latest);
      })
      .catch(() => {});
    return () => controller.abort();
  }, [initial.length]);

  return <BlogHighlights posts={posts} />;
}
