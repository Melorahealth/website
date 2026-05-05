import Image from "next/image";

type ImagePanelProps = {
  src: string;
  alt: string;
  label?: string;
  title?: string;
  className?: string;
  priority?: boolean;
  height?: "medium" | "large" | "tall" | "hero";
  objectPosition?: string;
};

const heights = {
  medium: "min-h-[420px]",
  large: "min-h-[560px]",
  tall: "min-h-[680px]",
  hero: "min-h-[420px] sm:min-h-[500px] lg:min-h-[600px] xl:min-h-[640px] 2xl:min-h-[680px]"
};

export function ImagePanel({
  src,
  alt,
  label,
  title,
  className = "",
  priority = false,
  height = "medium",
  objectPosition = "center"
}: ImagePanelProps) {
  return (
    <figure
      className={`image-shell group relative h-full overflow-hidden rounded-[18px] bg-sage ${heights[height]} ${className}`}
    >
      <Image
        alt={alt}
        className="object-cover transition duration-[1400ms] ease-out group-hover:scale-[1.035]"
        fill
        priority={priority}
        sizes="(min-width: 1440px) 760px, (min-width: 1024px) 56vw, 100vw"
        src={src}
        style={{ objectPosition }}
      />
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,27,23,0.02),rgba(17,27,23,0.38))]" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(circle_at_20%_100%,rgba(200,164,107,0.28),transparent_42%)]" />
      {(label || title) && (
        <figcaption className="absolute inset-x-0 bottom-0 z-[4] p-6 text-white sm:p-8">
          {label ? <p className="eyebrow mb-3 text-gold">{label}</p> : null}
          {title ? (
            <p className="max-w-md font-serif text-3xl leading-tight tracking-normal">
              {title}
            </p>
          ) : null}
        </figcaption>
      )}
      <div
        aria-hidden
        className="absolute right-5 top-5 z-[3] h-16 w-16 rounded-full border border-white/[0.32] bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.34),0_18px_42px_rgba(17,27,23,0.13)] backdrop-blur-2xl transition duration-700 group-hover:scale-110"
      />
    </figure>
  );
}
