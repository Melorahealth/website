import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import type { BlogPost } from "@/lib/blog-posts";

/** Page colour behind the cards: the arrow button sits in a notch cut to it. */
const PAGE = "#fbf8f3";

/**
 * The round arrow button, set into a notch cut out of the card's bottom-right
 * corner. The two small spans draw the inward curves either side of the notch.
 */
function NotchArrow({ tone }: { tone: "light" | "dark" }) {
  return (
    <span
      aria-hidden
      className="absolute bottom-0 right-0 rounded-tl-[1.75rem] pl-3 pt-3"
      style={{ backgroundColor: PAGE }}
    >
      <span
        className="absolute -top-6 right-0 h-6 w-6 rounded-br-[1.5rem]"
        style={{ boxShadow: `8px 8px 0 8px ${PAGE}` }}
      />
      <span
        className="absolute -left-6 bottom-0 h-6 w-6 rounded-br-[1.5rem]"
        style={{ boxShadow: `8px 8px 0 8px ${PAGE}` }}
      />
      <span
        className={`relative z-10 grid h-14 w-14 place-items-center rounded-full transition duration-300 group-hover:rotate-45 ${
          tone === "dark" ? "bg-sage text-white" : "bg-gold text-ink"
        }`}
      >
        <ArrowUpRight className="h-5 w-5" />
      </span>
    </span>
  );
}

const sideStyles = [
  { card: "bg-[#f5e9cd]", numeral: "text-gold/40" },
  { card: "bg-[#f6e1dc]", numeral: "text-rose/40" }
] as const;

/**
 * Home page blog section: the newest article as a lead card whose cover sits on
 * a small stack of coloured sheets, and the next two as colour-blocked cards.
 */
export function BlogHighlights({ posts }: { posts: BlogPost[] }) {
  const [lead, ...rest] = posts;
  if (!lead) return null;

  return (
    <div className="grid gap-5 lg:grid-cols-12">
      <a
        className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-sage p-7 text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/40 sm:p-9 lg:col-span-7"
        data-reveal
        href={lead.href}
      >
        <p className="flex items-center justify-between">
          <span className="flex items-center gap-2.5 text-[13px] font-semibold">
            <span aria-hidden className="h-2 w-2 rounded-full bg-gold" />
            Latest article
          </span>
          <span className="rounded-full bg-white/10 px-3.5 py-1.5 text-[13px] font-semibold">
            {lead.topic}
          </span>
        </p>

        {/* The cover as a printed card on two coloured sheets; they square up on hover. */}
        <span className="relative mx-auto mt-9 block w-[92%] sm:mt-10 sm:w-[86%]">
          <span
            aria-hidden
            className="absolute inset-0 rotate-[5deg] rounded-[1.25rem] bg-gold transition duration-500 ease-out group-hover:rotate-[2deg]"
          />
          <span
            aria-hidden
            className="absolute inset-0 -rotate-[4deg] rounded-[1.25rem] bg-rose transition duration-500 ease-out group-hover:-rotate-[1.5deg]"
          />
          <span className="relative block aspect-[1200/630] -rotate-1 overflow-hidden rounded-[1.25rem] bg-[#0f1b17] shadow-[0_18px_40px_-12px_rgba(0,0,0,0.5)] transition duration-500 ease-out group-hover:rotate-0">
            {lead.cover ? (
              <Image
                alt=""
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 46vw, 86vw"
                src={lead.cover}
                // Covers on the blog are served straight to the browser, already at card size.
                unoptimized={lead.cover.startsWith("http")}
              />
            ) : (
              <span className="flex h-full items-center p-6 font-serif text-2xl leading-tight sm:p-9 sm:text-4xl">
                {lead.title}
              </span>
            )}
          </span>
        </span>

        <h3 className="sr-only">{lead.title}</h3>
        <div className="mt-10 flex flex-1 flex-col justify-end pr-16 sm:mt-12 sm:pr-20">
          <p className="max-w-xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            {lead.excerpt}
          </p>
          <p className="mt-5 text-[13px] font-medium text-white/75">{lead.readTime}</p>
        </div>
        <NotchArrow tone="light" />
      </a>

      <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
        {rest.slice(0, 2).map((post, index) => {
          const style = sideStyles[index % sideStyles.length]!;
          return (
            <a
              className={`group relative flex flex-col overflow-hidden rounded-[2rem] p-7 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/30 sm:p-8 ${style.card}`}
              data-reveal
              href={post.href}
              // Keyed by position so the card stays in place when live posts replace the first list.
              key={index}
            >
              <span
                aria-hidden
                className={`pointer-events-none absolute right-5 -top-4 select-none font-serif text-[7.5rem] leading-none transition duration-500 group-hover:-translate-y-1 ${style.numeral}`}
              >
                0{index + 2}
              </span>
              <p className="relative self-start rounded-full bg-white/80 px-3.5 py-1.5 text-[13px] font-semibold text-sage">
                {post.topic}
              </p>
              <h3 className="relative mt-10 flex-1 text-pretty font-serif text-2xl leading-snug tracking-normal text-sage sm:text-[1.7rem]">
                {post.title}
              </h3>
              <p className="relative mt-3 pr-14 text-sm leading-6 text-ink/75">{post.excerpt}</p>
              <p className="relative mt-5 text-[13px] font-medium text-ink/65">{post.readTime}</p>
              <NotchArrow tone="dark" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
