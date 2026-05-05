type TestimonialCardProps = {
  quote: string;
  source: string;
  context: string;
};

export function TestimonialCard({ quote, source, context }: TestimonialCardProps) {
  return (
    <figure className="reveal rounded-lg border border-sage/10 bg-cream/50 p-7 transition duration-500 hover:-translate-y-1 hover:bg-cream/70">
      <blockquote className="font-serif text-2xl leading-snug tracking-normal text-sage">
        "{quote}"
      </blockquote>
      <figcaption className="mt-8 border-t border-sage/10 pt-5 text-sm text-ink/60">
        <strong className="block text-ink">{source}</strong>
        {context}
      </figcaption>
    </figure>
  );
}
