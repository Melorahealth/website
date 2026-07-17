type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  title,
  body,
  align = "left"
}: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2 className="font-serif text-4xl leading-tight tracking-normal text-sage sm:text-5xl">
        {title}
      </h2>
      {body ? <p className="mt-5 text-base leading-7 text-ink/70 sm:text-lg">{body}</p> : null}
    </div>
  );
}
