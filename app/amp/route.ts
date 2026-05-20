import { absoluteUrl, siteDescription, siteName } from "@/lib/seo";

export const dynamic = "force-static";

const carePaths = [
  {
    title: "Find support",
    body: "A guided first step for therapy, psychiatry, relationships, identity, postpartum adjustment, and life changes.",
    href: "/contact"
  },
  {
    title: "Join as professional",
    body: "A network for qualified therapists, psychologists, psychiatrists, and care providers.",
    href: "/for-professionals"
  },
  {
    title: "Partner inquiry",
    body: "Mental health access for employers, HMOs, institutions, banks, telcos, and care sponsors.",
    href: "/for-partners"
  },
  {
    title: "Gift a session",
    body: "Sponsor care credits for someone else while protecting privacy, choice, and dignity.",
    href: "/gift-care"
  }
] as const;

const serviceCards = [
  "Culturally aware therapy",
  "Postpartum support",
  "Couples care",
  "Identity-aware care",
  "Psychiatry routes",
  "Organization programs"
] as const;

const faqItems = [
  {
    question: "Who is MeloraHealth for?",
    answer:
      "MeloraHealth is for anyone seeking emotional clarity and professional care, with deeper expertise for women, postpartum experiences, identity, relationships, and life changes."
  },
  {
    question: "Can someone sponsor care from abroad?",
    answer:
      "Yes. Diaspora sponsors can fund care credits while the person receiving care keeps privacy, choice, and dignity."
  },
  {
    question: "Is this only for individuals?",
    answer:
      "No. MeloraHealth also supports professionals, employers, HMOs, institutions, sponsors, banks, and telcos."
  }
] as const;

function renderJsonLd() {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: siteName,
    url: absoluteUrl("/"),
    description: siteDescription,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/assets/logo/melora-logo.png"),
      contentUrl: absoluteUrl("/assets/logo/melora-logo.png"),
      width: 1254,
      height: 1254
    },
    image: absoluteUrl("/assets/og/melorahealth-home-og.jpg"),
    areaServed: ["Nigeria", "United Kingdom", "United States", "African diaspora"],
    medicalSpecialty: ["MentalHealth", "Psychiatry", "Psychology"],
    sameAs: [
      "https://www.linkedin.com/company/122164443",
      "https://www.facebook.com/profile.php?id=61589667252883",
      "https://www.instagram.com/melorahealth"
    ],
    potentialAction: [
      {
        "@type": "CommunicateAction",
        name: "Find Support",
        target: absoluteUrl("/contact")
      },
      {
        "@type": "RegisterAction",
        name: "Join as Professional",
        target: absoluteUrl("/for-professionals")
      },
      {
        "@type": "DonateAction",
        name: "Gift a Session",
        target: absoluteUrl("/gift-care")
      }
    ]
  });
}

function renderCarePaths() {
  return carePaths
    .map(
      (path) => `<article class="card flow-card">
        <div>
          <p class="eyebrow">Flow</p>
          <h3>${path.title}</h3>
          <p>${path.body}</p>
        </div>
        <a class="text-link" href="${absoluteUrl(path.href)}">Continue</a>
      </article>`
    )
    .join("");
}

function renderServiceCards() {
  return serviceCards
    .map((service) => `<li><span></span>${service}</li>`)
    .join("");
}

function renderFaqs() {
  return faqItems
    .map(
      (item) => `<details>
        <summary>${item.question}</summary>
        <p>${item.answer}</p>
      </details>`
    )
    .join("");
}

function renderAmpHtml() {
  return `<!doctype html>
<html amp lang="en">
  <head>
    <meta charset="utf-8">
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <title>melorahealth | AMP</title>
    <link rel="canonical" href="${absoluteUrl("/")}">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <meta name="description" content="${siteDescription}">
    <meta property="og:title" content="melorahealth">
    <meta property="og:description" content="${siteDescription}">
    <meta property="og:image" content="${absoluteUrl("/assets/og/melorahealth-home-og.jpg")}">
    <meta property="og:url" content="${absoluteUrl("/amp")}">
    <script type="application/ld+json">${renderJsonLd()}</script>
    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
    <style amp-custom>
      :root{--ink:#111b17;--cream:#f2ede6;--paper:#fbf8f3;--sage:#264236;--soft-sage:#7a8f7f;--rose:#c98f8a;--gold:#c8a46b}
      *{box-sizing:border-box}
      html{scroll-behavior:smooth}
      body{margin:0;background:var(--paper);color:var(--ink);font-family:Inter,Manrope,Arial,sans-serif;line-height:1.6}
      a{color:inherit;text-decoration:none}
      .shell{width:min(1120px,calc(100% - 40px));margin-inline:auto}
      .nav{border-bottom:1px solid rgba(38,66,54,.1);background:rgba(251,248,243,.96)}
      .nav-inner{min-height:76px;display:flex;align-items:center;justify-content:space-between;gap:24px}
      .brand{display:flex;align-items:center;gap:12px;min-width:0}
      .brand-mark{width:42px;height:42px;border-radius:8px;overflow:hidden;display:block}
      .brand-name{font-family:Georgia,serif;font-size:30px;line-height:1;color:var(--sage);letter-spacing:0}
      .brand-name span{color:var(--rose)}
      .tagline{margin-top:5px;font-size:9px;font-weight:700;line-height:1;letter-spacing:.26em;text-transform:uppercase;color:var(--gold)}
      .nav-links{display:flex;align-items:center;gap:18px;font-size:14px;font-weight:650;color:rgba(17,27,23,.68)}
      .button{display:inline-flex;min-height:46px;align-items:center;justify-content:center;border-radius:999px;background:var(--sage);color:white;padding:0 22px;font-size:14px;font-weight:750;box-shadow:0 18px 40px rgba(38,66,54,.16)}
      .button.secondary{border:1px solid rgba(38,66,54,.16);background:rgba(255,255,255,.48);color:var(--sage);box-shadow:none}
      .hero{position:relative;overflow:hidden;border-bottom:1px solid rgba(38,66,54,.1);background:linear-gradient(180deg,#fbf8f3 0%,#f4eee6 100%)}
      .hero:before{content:"";position:absolute;right:-80px;top:80px;width:260px;height:520px;opacity:.06;background:repeating-linear-gradient(45deg,var(--sage) 0 2px,transparent 2px 18px),repeating-linear-gradient(-45deg,var(--gold) 0 2px,transparent 2px 18px);border-radius:160px}
      .hero-grid{position:relative;display:grid;grid-template-columns:1.02fr .98fr;gap:56px;align-items:center;min-height:calc(100svh - 76px);padding:90px 0}
      .eyebrow{margin:0 0 14px;color:var(--gold);font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
      h1,h2,h3{font-family:Georgia,"Times New Roman",serif;letter-spacing:0;color:var(--sage)}
      h1{margin:0;font-size:clamp(56px,8vw,92px);line-height:.98;font-weight:500}
      h2{margin:0;font-size:clamp(38px,5vw,62px);line-height:1.04;font-weight:500}
      h3{margin:0;font-size:28px;line-height:1.12;font-weight:500}
      p{margin:0;color:rgba(17,27,23,.66)}
      .lead{margin-top:28px;max-width:610px;font-size:19px;line-height:1.78}
      .actions{margin-top:34px;display:flex;flex-wrap:wrap;gap:12px}
      .hero-media{position:relative}
      .image-frame{position:relative;overflow:hidden;border:1px solid rgba(242,237,230,.7);background:var(--sage);box-shadow:0 30px 80px rgba(38,66,54,.14);clip-path:polygon(0 0,calc(100% - 38px) 0,100% 38px,100% 100%,38px 100%,0 calc(100% - 38px))}
      .image-frame:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(17,27,23,0),rgba(17,27,23,.18))}
      .note{position:absolute;left:-22px;bottom:24px;width:min(285px,80%);border:1px solid rgba(255,255,255,.5);background:rgba(251,248,243,.9);padding:20px;box-shadow:0 22px 50px rgba(38,66,54,.14)}
      .note p:first-child{font-family:Georgia,serif;font-size:22px;line-height:1.18;color:var(--sage)}
      section{padding:96px 0}
      .section-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:56px;align-items:start}
      .section-copy{max-width:520px}
      .section-copy p:not(.eyebrow){margin-top:20px;font-size:17px;line-height:1.78}
      .card-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}
      .card{border:1px solid rgba(38,66,54,.1);background:rgba(255,255,255,.45);padding:26px;box-shadow:0 18px 42px rgba(38,66,54,.05)}
      .flow-card{min-height:238px;display:flex;flex-direction:column;justify-content:space-between}
      .card p{margin-top:14px;font-size:15px;line-height:1.68}
      .text-link{margin-top:22px;display:inline-flex;color:var(--sage);font-size:14px;font-weight:800;border-bottom:1px solid var(--gold);width:max-content}
      .sage-band{background:var(--sage);color:white}
      .sage-band h2,.sage-band h3{color:white}
      .sage-band p{color:rgba(255,255,255,.7)}
      .service-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;list-style:none;margin:0;padding:0}
      .service-list li{display:flex;gap:12px;align-items:flex-start;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.06);padding:18px;color:rgba(255,255,255,.84);font-weight:650}
      .service-list span{margin-top:9px;width:22px;height:1px;background:var(--gold);flex:0 0 auto}
      .split-media{display:grid;grid-template-columns:1fr 1fr;gap:0;border:1px solid rgba(38,66,54,.1);background:rgba(255,255,255,.38);overflow:hidden}
      .split-media-content{padding:42px}
      .split-media-content p{margin-top:18px}
      details{border-bottom:1px solid rgba(38,66,54,.12);padding:22px 0}
      summary{cursor:pointer;font-family:Georgia,serif;font-size:26px;line-height:1.2;color:var(--sage)}
      details p{margin-top:12px;max-width:720px}
      .cta{padding:92px 0;background:#f7f2eb;border-top:1px solid rgba(38,66,54,.1)}
      .cta-box{display:flex;align-items:center;justify-content:space-between;gap:28px}
      .cta-box p{margin-top:14px;max-width:590px}
      .footer{padding:44px 0;border-top:1px solid rgba(38,66,54,.1);background:var(--paper);font-size:13px;color:rgba(17,27,23,.55)}
      .footer-inner{display:flex;align-items:center;justify-content:space-between;gap:24px}
      @media (max-width: 860px){
        .shell{width:min(100% - 32px,1120px)}
        .nav-inner{min-height:70px}
        .nav-links{display:none}
        .brand-name{font-size:26px}
        .tagline{display:none}
        .hero-grid,.section-grid,.split-media{grid-template-columns:1fr}
        .hero-grid{min-height:auto;padding:58px 0 72px;gap:36px}
        .lead{font-size:17px}
        .note{position:relative;left:auto;bottom:auto;width:100%;margin-top:14px}
        section{padding:70px 0}
        .card-grid,.service-list{grid-template-columns:1fr}
        .split-media-content{padding:28px}
        .cta-box,.footer-inner{align-items:flex-start;flex-direction:column}
      }
    </style>
  </head>
  <body>
    <header class="nav">
      <div class="shell nav-inner">
        <a class="brand" href="${absoluteUrl("/")}">
          <span class="brand-mark">
            <amp-img alt="melorahealth logo" height="84" layout="responsive" src="${absoluteUrl("/assets/logo/melora-logo.png")}" width="84"></amp-img>
          </span>
          <span>
            <span class="brand-name">melora<span>health</span></span>
            <span class="tagline">Understand. Heal. Become.</span>
          </span>
        </a>
        <nav class="nav-links" aria-label="Primary">
          <a href="${absoluteUrl("/for-you")}">For You</a>
          <a href="${absoluteUrl("/for-professionals")}">Professionals</a>
          <a href="${absoluteUrl("/for-partners")}">Partners</a>
          <a href="${absoluteUrl("/gift-care")}">Gift Care</a>
        </nav>
        <a class="button" href="${absoluteUrl("/contact")}">Get Started</a>
      </div>
    </header>
    <main>
      <section class="hero">
        <div class="shell hero-grid">
          <div>
            <p class="eyebrow">Premium mental health infrastructure</p>
            <h1>Therapy that understands your context.</h1>
            <p class="lead">MeloraHealth connects people to qualified therapists and culturally aware mental health support, with deeper care for women, postpartum transitions, identity, relationships, and life changes.</p>
            <div class="actions">
              <a class="button" href="${absoluteUrl("/contact")}">Find Support</a>
              <a class="button secondary" href="${absoluteUrl("/gift-care")}">Gift a Session</a>
            </div>
          </div>
          <div class="hero-media">
            <div class="image-frame">
              <amp-img alt="African woman sitting calmly in reflective natural light" height="1024" layout="responsive" src="${absoluteUrl("/assets/images/individual-reflection.jpg")}" width="1536"></amp-img>
            </div>
            <div class="note">
              <p>A quiet first step toward being understood.</p>
              <p class="eyebrow">Understand. Heal. Become.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="shell section-grid">
          <div class="section-copy">
            <p class="eyebrow">Care paths</p>
            <h2>A platform for everyone that deeply understands specific people.</h2>
            <p>Designed for people navigating life changes, identity, and emotional complexity, with specialized care for women, postpartum experiences, and diverse identities.</p>
          </div>
          <div class="card-grid">${renderCarePaths()}</div>
        </div>
      </section>
      <section class="sage-band">
        <div class="shell section-grid">
          <div class="section-copy">
            <p class="eyebrow">What MeloraHealth connects</p>
            <h2>Clear routes into professional care.</h2>
            <p>The platform makes access calmer, clearer, and easier to trust across individuals, professionals, sponsors, and organizations.</p>
          </div>
          <ul class="service-list">${renderServiceCards()}</ul>
        </div>
      </section>
      <section>
        <div class="shell split-media">
          <amp-img alt="African therapist and client in a calm professional care conversation" height="909" layout="responsive" src="${absoluteUrl("/assets/images/professional-care.jpg")}" width="1731"></amp-img>
          <div class="split-media-content">
            <p class="eyebrow">Professional care</p>
            <h2>Qualified support, without losing cultural meaning.</h2>
            <p>The first step should not feel like searching through noise. MeloraHealth helps translate what is happening into the right professional, the right format, and a next step that respects context.</p>
            <div class="actions">
              <a class="button" href="${absoluteUrl("/services")}">Explore Services</a>
              <a class="button secondary" href="${absoluteUrl("/for-professionals")}">Join as Professional</a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="shell section-grid">
          <div class="section-copy">
            <p class="eyebrow">Gift care credits</p>
            <h2>A meaningful way to protect someone you love.</h2>
            <p>Gift care credits let families, diaspora sponsors, employers, and community partners fund therapy while the recipient keeps privacy and choice.</p>
            <div class="actions">
              <a class="button" href="${absoluteUrl("/gift-care")}">Gift a Session</a>
            </div>
          </div>
          <div class="image-frame">
            <amp-img alt="African mother holding a newborn in calm natural light" height="1024" layout="responsive" src="${absoluteUrl("/assets/images/postpartum-care.jpg")}" width="1536"></amp-img>
          </div>
        </div>
      </section>
      <section>
        <div class="shell section-grid">
          <div class="section-copy">
            <p class="eyebrow">FAQ</p>
            <h2>Before you begin.</h2>
          </div>
          <div>${renderFaqs()}</div>
        </div>
      </section>
      <section class="cta">
        <div class="shell cta-box">
          <div>
            <p class="eyebrow">Begin with clarity</p>
            <h2>Choose the path that matches what you need now.</h2>
            <p>MeloraHealth can route the next step for support, professional onboarding, partnerships, and care sponsorship.</p>
          </div>
          <div class="actions">
            <a class="button" href="${absoluteUrl("/contact")}">Find Support</a>
            <a class="button secondary" href="${absoluteUrl("/for-partners")}">Partner Inquiry</a>
          </div>
        </div>
      </section>
    </main>
    <footer class="footer">
      <div class="shell footer-inner">
        <span>© 2026 melorahealth. All rights reserved.</span>
        <span>Care, access, and cultural understanding in one system.</span>
      </div>
    </footer>
  </body>
</html>`;
}

export function GET() {
  return new Response(renderAmpHtml(), {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}
