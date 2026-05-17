import Image from "next/image";

export function HeroImageStack() {
  return (
    <div className="hero-stack reveal reveal-delay lg:col-span-6">
      <div className="hero-stack-card hero-stack-card-main">
        <Image
          alt="African woman sitting calmly in reflective natural light"
          className="object-cover"
          fill
          priority
          sizes="(min-width: 1440px) 620px, (min-width: 1024px) 48vw, 100vw"
          src="/assets/images/individual-reflection.jpg"
          style={{ objectPosition: "64% center" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,27,23,0.01),rgba(17,27,23,0.2))]" />
      </div>
      <div className="hero-stack-card hero-stack-card-care" aria-hidden>
        <Image
          alt=""
          className="object-cover"
          fill
          sizes="220px"
          src="/assets/images/professional-care.jpg"
        />
      </div>
      <div className="hero-stack-card hero-stack-card-gift" aria-hidden>
        <Image
          alt=""
          className="object-cover"
          fill
          sizes="190px"
          src="/assets/images/postpartum-care.jpg"
        />
      </div>
      <div className="hero-stack-note">
        <p className="hero-stack-note-copy">A quiet first step toward being understood.</p>
        <p className="eyebrow mt-3">Understand. Heal. Become.</p>
      </div>
    </div>
  );
}
