export type ServiceLandingPage = {
  slug: string;
  group: "Africa-wide care" | "Nigeria care" | "Diaspora and sponsorship";
  linkLabel: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  visualTitle: string;
  introTitle: string;
  introBody: string;
  cards: {
    title: string;
    body: string;
  }[];
  suitedFor: string[];
  nextStepBody: string;
};

export const serviceLandingPages: ServiceLandingPage[] = [
  {
    slug: "online-therapy-africa",
    group: "Africa-wide care",
    linkLabel: "Online therapy in Africa",
    metaTitle: "Online Therapy in Africa",
    metaDescription:
      "Access online therapy across Africa with culturally aware care routing for individuals, couples, families, and people navigating life changes.",
    title: "Online therapy across Africa.",
    body:
      "MeloraHealth helps people across African contexts begin care through private online sessions, with routing that considers need, location, preference, and cultural context.",
    imageSrc: "/assets/images/individual-reflection.jpg",
    imageAlt: "African woman seated quietly in a calm home interior",
    visualTitle: "Private care, wherever support begins.",
    introTitle: "A calmer route into online support.",
    introBody:
      "Online care should not feel like a directory you have to decode alone. MeloraHealth is built to help translate what is happening into the right care route.",
    cards: [
      {
        title: "Private online sessions",
        body: "Access therapy by video or audio when in-person care is difficult, unavailable, or not the right fit."
      },
      {
        title: "Context-aware matching",
        body: "Care routing considers emotional need, specialty, language, location, and the kind of professional support required."
      },
      {
        title: "Built for continuity",
        body: "Support can continue across cities, time zones, sponsors, and professional care routes where available."
      }
    ],
    suitedFor: [
      "People seeking therapy from home",
      "Africans living between cities or countries",
      "Couples and families needing flexible access",
      "People who want privacy before they are ready to speak openly"
    ],
    nextStepBody:
      "Share your location, preferred format, and what you need support with. MeloraHealth can route the next step from there."
  },
  {
    slug: "therapists-in-africa",
    group: "Africa-wide care",
    linkLabel: "Therapists in Africa",
    metaTitle: "Therapists in Africa",
    metaDescription:
      "Find culturally aware therapists and mental health professionals across Africa through MeloraHealth care routing.",
    title: "Find therapists across Africa.",
    body:
      "MeloraHealth connects people with qualified therapists and care professionals who understand that mental health support has to respect context, not only symptoms.",
    imageSrc: "/assets/images/professional-care.jpg",
    imageAlt: "African therapist and client seated in a respectful care conversation",
    visualTitle: "Professional care with cultural meaning.",
    introTitle: "The right therapist should feel possible to find.",
    introBody:
      "Searching for support can become heavy when every option looks the same. MeloraHealth is designed to make the first step clearer and more structured.",
    cards: [
      {
        title: "Qualified professionals",
        body: "The care network is built around therapists, psychologists, psychiatrists, and trained mental health providers."
      },
      {
        title: "Specialty-aware routing",
        body: "Requests can be routed by care need, including stress, grief, identity, relationships, postpartum care, and psychiatry."
      },
      {
        title: "Respectful access",
        body: "The platform supports private care requests without forcing people to explain their life in a public way."
      }
    ],
    suitedFor: [
      "Individuals looking for therapy",
      "People comparing online and offline support",
      "Families helping someone begin care",
      "Organizations seeking trusted professional access"
    ],
    nextStepBody:
      "Tell us the kind of care you are looking for and where support is needed. We will help route the request."
  },
  {
    slug: "therapy-in-africa",
    group: "Africa-wide care",
    linkLabel: "Therapy in Africa",
    metaTitle: "Therapy in Africa",
    metaDescription:
      "Therapy in Africa through MeloraHealth, with online and offline care routes for emotional clarity, relationships, identity, and life changes.",
    title: "Therapy in Africa, with context.",
    body:
      "Therapy should make room for real life: family systems, work pressure, faith, identity, money, distance, and silence around mental health.",
    imageSrc: "/assets/images/hero-reflection.jpg",
    imageAlt: "African professional sitting in quiet reflection by a window",
    visualTitle: "Care that understands where people live.",
    introTitle: "Support that does not flatten your reality.",
    introBody:
      "MeloraHealth is built for people who need professional care without losing the meaning of where they come from and what they carry.",
    cards: [
      {
        title: "Individual therapy",
        body: "One-to-one support for stress, anxiety, grief, identity, relationships, and emotional overload."
      },
      {
        title: "Specialist routes",
        body: "Care paths can include women's therapy, postpartum therapy, couples care, queer-affirming support, and psychiatry."
      },
      {
        title: "Cross-border access",
        body: "Online care and sponsor-backed routes can help support continue across borders where available."
      }
    ],
    suitedFor: [
      "People seeking emotional clarity",
      "People navigating change or identity",
      "Couples and families under pressure",
      "Sponsors and partners funding access"
    ],
    nextStepBody:
      "Start with what is happening. MeloraHealth can help identify the kind of therapy route that fits."
  },
  {
    slug: "mental-health-support-africa",
    group: "Africa-wide care",
    linkLabel: "Mental health support in Africa",
    metaTitle: "Mental Health Support in Africa",
    metaDescription:
      "Mental health support in Africa for individuals, families, professionals, sponsors, and organizations through culturally aware care access.",
    title: "Mental health support for African realities.",
    body:
      "MeloraHealth brings people, professionals, sponsors, and organizations into one care access system for support that is practical, private, and culturally aware.",
    imageSrc: "/assets/images/partners-meeting.jpg",
    imageAlt: "African professionals in a calm partnership meeting",
    visualTitle: "Access, routing, and care in one system.",
    introTitle: "Mental health support should be easier to reach.",
    introBody:
      "The need is often clear before the path is. MeloraHealth helps route care requests for people and groups without reducing support to a generic program.",
    cards: [
      {
        title: "For individuals",
        body: "Therapy, psychiatry, couples care, postpartum support, and identity-aware routes for people seeking help."
      },
      {
        title: "For sponsors",
        body: "Gift care credits can help family or community members begin support while protecting privacy."
      },
      {
        title: "For organizations",
        body: "Employers, HMOs, institutions, banks, and telcos can build structured mental health access models."
      }
    ],
    suitedFor: [
      "Individuals and families",
      "Diaspora sponsors",
      "Employers and HMOs",
      "Institutions and community programs"
    ],
    nextStepBody:
      "Share the population or person you want to support. MeloraHealth can help shape the right access route."
  },
  {
    slug: "therapy-in-kenya",
    group: "Africa-wide care",
    linkLabel: "Therapy in Kenya",
    metaTitle: "Therapy in Kenya",
    metaDescription:
      "Therapy in Kenya through MeloraHealth, with private online care routing for stress, relationships, postpartum support, identity, and specialist mental health care.",
    title: "Therapy in Kenya.",
    body:
      "MeloraHealth supports people in Kenya seeking therapy and mental health care that respects context, privacy, and the realities of modern African life.",
    imageSrc: "/assets/images/individual-reflection.jpg",
    imageAlt: "African woman seated quietly in a calm home interior",
    visualTitle: "A private route into support.",
    introTitle: "Care that can begin with what is actually happening.",
    introBody:
      "People seek therapy for many reasons: stress, anxiety, relationships, grief, identity, postpartum adjustment, burnout, or a sense that life has become harder to hold alone.",
    cards: [
      {
        title: "Online therapy access",
        body: "Private online sessions can make care easier to begin when location, schedule, or discretion matters."
      },
      {
        title: "Specialist care routes",
        body: "Requests can be routed toward individual therapy, couples care, postpartum support, psychology, or psychiatry where appropriate."
      },
      {
        title: "Context-aware support",
        body: "Care routing considers the person, the setting, and the kind of support that fits the need."
      }
    ],
    suitedFor: [
      "People looking for therapy in Kenya",
      "Africans seeking private online care",
      "Couples and families needing support",
      "People navigating stress, identity, or life changes"
    ],
    nextStepBody:
      "Share where you are in Kenya, the format you prefer, and what you need support with. MeloraHealth can route the next step."
  },
  {
    slug: "therapy-in-rwanda",
    group: "Africa-wide care",
    linkLabel: "Therapy in Rwanda",
    metaTitle: "Therapy in Rwanda",
    metaDescription:
      "Therapy in Rwanda through MeloraHealth, with private online care routing for emotional support, relationships, postpartum adjustment, identity, and psychiatry.",
    title: "Therapy in Rwanda.",
    body:
      "MeloraHealth helps people in Rwanda find a clearer route into therapy and mental health support, with care that is private, structured, and culturally aware.",
    imageSrc: "/assets/images/hero-reflection.jpg",
    imageAlt: "African professional sitting in quiet reflection by a window",
    visualTitle: "Support with steadiness and discretion.",
    introTitle: "A calmer way to begin care.",
    introBody:
      "Therapy can help people name what has been difficult to carry: pressure, grief, relationship strain, identity questions, postpartum adjustment, anxiety, or emotional exhaustion.",
    cards: [
      {
        title: "Private first step",
        body: "Begin with a care request that helps clarify the need before choosing the right professional route."
      },
      {
        title: "Online care routes",
        body: "Online therapy can support access when privacy, distance, or availability shapes how care begins."
      },
      {
        title: "Professional support",
        body: "Requests can be routed toward therapy, psychology, couples support, postpartum care, or psychiatry where needed."
      }
    ],
    suitedFor: [
      "People looking for therapy in Rwanda",
      "People seeking private online support",
      "Couples, parents, and families",
      "People navigating grief, stress, or major life changes"
    ],
    nextStepBody:
      "Tell us where support is needed and what kind of care may fit. MeloraHealth can help route the request."
  },
  {
    slug: "online-therapy-nigeria",
    group: "Nigeria care",
    linkLabel: "Online therapy in Nigeria",
    metaTitle: "Online Therapy in Nigeria",
    metaDescription:
      "Find online therapy in Nigeria through MeloraHealth, with private care routing for individuals, couples, postpartum support, and psychiatry.",
    title: "Online therapy in Nigeria.",
    body:
      "Access private online therapy in Nigeria with a care route that respects your context, schedule, location, and the kind of support you need.",
    imageSrc: "/assets/images/individual-reflection.jpg",
    imageAlt: "African woman seated quietly in a calm home interior",
    visualTitle: "A private way to begin.",
    introTitle: "Start therapy without searching through noise.",
    introBody:
      "MeloraHealth helps people in Nigeria move from uncertainty to a clearer care path, whether the need is individual therapy, couples care, postpartum support, or psychiatry.",
    cards: [
      {
        title: "Online access",
        body: "Begin care through private video or audio sessions when location, time, or discretion matters."
      },
      {
        title: "Care matching",
        body: "Requests are routed by need, specialty, preferred format, and the kind of professional support required."
      },
      {
        title: "Flexible support",
        body: "Online care can support people in Lagos, Abuja, other Nigerian cities, and Nigerians abroad."
      }
    ],
    suitedFor: [
      "People looking for therapy from home",
      "Busy professionals",
      "Couples needing flexible sessions",
      "People who want privacy before starting care"
    ],
    nextStepBody:
      "Tell us what is happening and your preferred format. We will help route you toward the right next step."
  },
  {
    slug: "therapists-in-nigeria",
    group: "Nigeria care",
    linkLabel: "Therapists in Nigeria",
    metaTitle: "Therapists in Nigeria",
    metaDescription:
      "Find therapists in Nigeria through MeloraHealth, with culturally aware routing for therapy, psychiatry, couples care, and specialist support.",
    title: "Find therapists in Nigeria.",
    body:
      "MeloraHealth helps people find qualified mental health support in Nigeria without turning the first step into guesswork.",
    imageSrc: "/assets/images/professional-care.jpg",
    imageAlt: "African therapist and client seated in a respectful care conversation",
    visualTitle: "The right professional matters.",
    introTitle: "A more structured way to find support.",
    introBody:
      "The search for a therapist can feel unclear when you are already carrying a lot. MeloraHealth routes requests by need, care level, format, and context.",
    cards: [
      {
        title: "Therapists and specialists",
        body: "Care routes can include therapists, psychologists, psychiatrists, and qualified mental health professionals."
      },
      {
        title: "Matched to need",
        body: "Support can be routed for stress, anxiety, grief, relationships, identity, postpartum care, and medical review."
      },
      {
        title: "Online or offline paths",
        body: "Where available, care can begin online or move toward in-person support through trusted routes."
      }
    ],
    suitedFor: [
      "People searching for a therapist in Nigeria",
      "Families helping someone access care",
      "People unsure what type of professional they need",
      "Professionals and partners making referrals"
    ],
    nextStepBody:
      "Share your location, preferred format, and what you want help with. MeloraHealth can guide the route."
  },
  {
    slug: "therapy-in-nigeria",
    group: "Nigeria care",
    linkLabel: "Therapy in Nigeria",
    metaTitle: "Therapy in Nigeria",
    metaDescription:
      "Therapy in Nigeria for individuals, couples, women, postpartum experiences, identity, stress, and psychiatric care through MeloraHealth.",
    title: "Therapy in Nigeria, without guesswork.",
    body:
      "MeloraHealth helps people in Nigeria access professional therapy and mental health support with privacy, structure, and cultural understanding.",
    imageSrc: "/assets/images/hero-thoughtful-woman.jpg",
    imageAlt: "African professional sitting calmly in thoughtful natural light",
    visualTitle: "Make sense of what you feel.",
    introTitle: "Care for real life, not a perfect version of it.",
    introBody:
      "People seek therapy for different reasons: pressure, grief, conflict, identity, exhaustion, numbness, or a sense that something has become too heavy to carry alone.",
    cards: [
      {
        title: "Individual therapy",
        body: "One-to-one support for emotional clarity, stress, anxiety, grief, and life changes."
      },
      {
        title: "Specialized care",
        body: "Routes include women's mental health, postpartum support, couples therapy, queer-affirming care, and psychiatry."
      },
      {
        title: "Clear next steps",
        body: "MeloraHealth helps turn a broad need into a practical care path with the right professional."
      }
    ],
    suitedFor: [
      "Individuals seeking therapy",
      "Couples navigating distance or conflict",
      "Parents adjusting after birth",
      "People seeking identity-aware support"
    ],
    nextStepBody:
      "You do not need perfect words before asking for help. Start with what you can name."
  },
  {
    slug: "couples-therapy-nigeria",
    group: "Nigeria care",
    linkLabel: "Couples therapy in Nigeria",
    metaTitle: "Couples Therapy in Nigeria",
    metaDescription:
      "Couples therapy in Nigeria through MeloraHealth, with guided support for communication, distance, trust, family pressure, and transitions.",
    title: "Couples therapy in Nigeria.",
    body:
      "A steadier space for couples navigating distance, silence, conflict, trust, family pressure, or decisions that have become hard to make alone.",
    imageSrc: "/assets/images/hero-reflection.jpg",
    imageAlt: "African professional sitting in quiet reflection by a window",
    visualTitle: "A careful space for difficult conversations.",
    introTitle: "Support for what sits between two people.",
    introBody:
      "Couples therapy is not only for crisis. It can help partners speak more clearly, understand patterns, and decide what repair or change requires.",
    cards: [
      {
        title: "Communication",
        body: "Work through silence, repeated arguments, emotional distance, and conversations that keep closing too early."
      },
      {
        title: "Trust and repair",
        body: "Support for betrayal, disappointment, resentment, and the slow work of rebuilding safety."
      },
      {
        title: "Transitions",
        body: "Care for couples facing marriage, parenting, relocation, family pressure, grief, or financial stress."
      }
    ],
    suitedFor: [
      "Couples feeling distant",
      "Partners preparing for a major decision",
      "Married or unmarried couples",
      "Couples who want support before things become worse"
    ],
    nextStepBody:
      "Share what has become difficult between you. MeloraHealth can route a private couples care request."
  },
  {
    slug: "postpartum-therapy-nigeria",
    group: "Nigeria care",
    linkLabel: "Postpartum therapy in Nigeria",
    metaTitle: "Postpartum Therapy in Nigeria",
    metaDescription:
      "Postpartum therapy in Nigeria for emotional adjustment, identity shift, mental load, exhaustion, anxiety, and support after birth.",
    title: "Postpartum therapy in Nigeria.",
    body:
      "Support for the emotional adjustment after birth: the identity shift, mental load, exhaustion, anxiety, and private feelings many parents carry quietly.",
    imageSrc: "/assets/images/postpartum-care.jpg",
    imageAlt: "African mother holding a newborn in calm natural light",
    visualTitle: "Care for the person who gave care.",
    introTitle: "After birth, the parent changes too.",
    introBody:
      "Postpartum support should make room for love and difficulty at the same time. MeloraHealth routes care for parents who need steadiness after birth.",
    cards: [
      {
        title: "Emotional adjustment",
        body: "Support for mood changes, overwhelm, worry, sadness, irritability, and feeling unlike yourself."
      },
      {
        title: "Mental load",
        body: "A space to name the pressure of care, sleep loss, family expectations, and invisible responsibility."
      },
      {
        title: "Specialist support",
        body: "Where needed, care can be routed toward therapy, psychiatric review, or additional professional support."
      }
    ],
    suitedFor: [
      "New mothers and birthing parents",
      "Parents feeling emotionally unlike themselves",
      "Families worried about someone after birth",
      "Partners seeking a better way to support"
    ],
    nextStepBody:
      "Tell us what the adjustment has felt like. MeloraHealth can help route postpartum support with care."
  },
  {
    slug: "psychiatrist-in-nigeria",
    group: "Nigeria care",
    linkLabel: "Psychiatrist in Nigeria",
    metaTitle: "Psychiatrist in Nigeria",
    metaDescription:
      "Find psychiatric support in Nigeria through MeloraHealth for assessment, medication review, and medical mental health care routing.",
    title: "Psychiatry support in Nigeria.",
    body:
      "Some mental health needs require medical assessment, medication review, or psychiatric support. MeloraHealth helps route those requests with clarity.",
    imageSrc: "/assets/images/professional-care.jpg",
    imageAlt: "African therapist and client seated in a respectful care conversation",
    visualTitle: "Medical support, handled with care.",
    introTitle: "Know when medical mental health support may help.",
    introBody:
      "Psychiatric care can be part of a wider support plan. It may be appropriate when symptoms affect sleep, work, safety, concentration, mood, or daily functioning.",
    cards: [
      {
        title: "Assessment",
        body: "Support for understanding symptoms, history, risk, and the kind of care that may be appropriate."
      },
      {
        title: "Medication review",
        body: "Where clinically needed, psychiatric care can support medication decisions and ongoing review."
      },
      {
        title: "Care coordination",
        body: "Psychiatry can sit alongside therapy and follow-up support rather than feeling like a separate path."
      }
    ],
    suitedFor: [
      "People considering psychiatric assessment",
      "People with symptoms affecting daily life",
      "Families seeking medical mental health guidance",
      "People already in therapy who may need review"
    ],
    nextStepBody:
      "Describe what has been happening and whether there is any urgency. MeloraHealth can route the request appropriately."
  },
  {
    slug: "therapy-for-african-diaspora",
    group: "Diaspora and sponsorship",
    linkLabel: "Therapy for African diaspora",
    metaTitle: "Therapy for African Diaspora",
    metaDescription:
      "Therapy for African diaspora communities navigating identity, family distance, migration, relationships, grief, and care across borders.",
    title: "Therapy for the African diaspora.",
    body:
      "Support for people living between cultures, families, expectations, countries, and versions of themselves that can be difficult to explain.",
    imageSrc: "/assets/images/hero-reflection.jpg",
    imageAlt: "African professional sitting in quiet reflection by a window",
    visualTitle: "Care across distance and identity.",
    introTitle: "Some experiences need more context, not more explanation.",
    introBody:
      "Diaspora life can hold pressure, opportunity, loneliness, duty, family distance, identity questions, and the work of belonging in more than one place.",
    cards: [
      {
        title: "Identity and belonging",
        body: "Support for cultural tension, family expectations, faith, sexuality, race, migration, and personal change."
      },
      {
        title: "Care across borders",
        body: "Online therapy and sponsor-supported care can help people access support across time zones where available."
      },
      {
        title: "Family and responsibility",
        body: "A space to work through duty, money pressure, grief, distance, and the emotional weight of being relied on."
      }
    ],
    suitedFor: [
      "Africans living abroad",
      "First-generation and second-generation diaspora communities",
      "People supporting family back home",
      "People navigating identity or belonging"
    ],
    nextStepBody:
      "Share where you are and what support needs to hold. MeloraHealth can help identify the right care route."
  },
  {
    slug: "gift-therapy-session-africa",
    group: "Diaspora and sponsorship",
    linkLabel: "Gift therapy sessions in Africa",
    metaTitle: "Gift Therapy Sessions in Africa",
    metaDescription:
      "Gift therapy sessions in Africa through MeloraHealth care credits for family, communities, and people who need professional mental health support.",
    title: "Gift therapy sessions in Africa.",
    body:
      "Fund care for someone you know, or support a community care pool, without taking over the recipient's privacy or choices.",
    imageSrc: "/assets/images/postpartum-care.jpg",
    imageAlt: "African mother holding a newborn in calm natural light",
    visualTitle: "Support can be practical and private.",
    introTitle: "A gift that protects dignity.",
    introBody:
      "MeloraHealth gift care credits are designed for families, diaspora sponsors, partners, and communities that want to make therapy easier to begin.",
    cards: [
      {
        title: "Care credits",
        body: "Sponsor flexible credits that can be applied toward therapy or specialist support through the platform."
      },
      {
        title: "Recipient privacy",
        body: "Funding support does not need to expose the details of someone's care."
      },
      {
        title: "Community support",
        body: "Sponsors and partners can fund sessions for a group, program, or population with a clear access route."
      }
    ],
    suitedFor: [
      "Diaspora family members",
      "Community sponsors",
      "Employers and institutions",
      "People funding support for someone else"
    ],
    nextStepBody:
      "Tell us who or what community you want to support. MeloraHealth can guide the gift care setup."
  },
  {
    slug: "sponsor-therapy-nigeria",
    group: "Diaspora and sponsorship",
    linkLabel: "Sponsor therapy in Nigeria",
    metaTitle: "Sponsor Therapy in Nigeria",
    metaDescription:
      "Sponsor therapy in Nigeria through MeloraHealth care credits for family members, communities, employees, and people who need support.",
    title: "Sponsor therapy in Nigeria.",
    body:
      "Diaspora families, sponsors, employers, and community partners can fund therapy access in Nigeria while allowing the person receiving care to keep privacy and agency.",
    imageSrc: "/assets/images/partners-meeting.jpg",
    imageAlt: "African professionals in a calm partnership meeting",
    visualTitle: "Funding care without taking over.",
    introTitle: "Support can become access.",
    introBody:
      "Sponsorship should not make care feel exposed or transactional. MeloraHealth structures sponsored therapy through care credits and routed access.",
    cards: [
      {
        title: "Family sponsorship",
        body: "Help a loved one begin therapy without forcing them to manage the full cost alone."
      },
      {
        title: "Program sponsorship",
        body: "Fund sessions for a group, workforce, school, community, or care initiative."
      },
      {
        title: "Private routing",
        body: "Sponsors can fund access while care details remain with the person receiving support."
      }
    ],
    suitedFor: [
      "Diaspora sponsors",
      "Families supporting loved ones in Nigeria",
      "Employers and HMOs",
      "Community programs and institutions"
    ],
    nextStepBody:
      "Share who you want to support and the kind of funding route you have in mind. We will shape the next step."
  },
  {
    slug: "counselling-in-nigeria",
    group: "Nigeria care",
    linkLabel: "Counselling in Nigeria",
    metaTitle: "Counselling in Nigeria",
    metaDescription:
      "Find counselling in Nigeria through MeloraHealth for stress, relationships, grief, identity, postpartum support, and mental health care routing.",
    title: "Counselling in Nigeria.",
    body:
      "For many people, counselling is the word that feels closest to the help they are looking for. MeloraHealth routes counselling requests into professional support that fits the need.",
    imageSrc: "/assets/images/professional-care.jpg",
    imageAlt: "African therapist and client seated in a respectful care conversation",
    visualTitle: "A clear conversation can become care.",
    introTitle: "Counselling without losing context.",
    introBody:
      "People look for counselling when something needs to be spoken through with care: stress, grief, relationships, family pressure, identity, exhaustion, or a season that has become difficult to carry.",
    cards: [
      {
        title: "Talk support",
        body: "A private space to make sense of what is happening with a trained professional."
      },
      {
        title: "Care routing",
        body: "Requests can be directed toward counselling, therapy, psychology, psychiatry, or specialist support when needed."
      },
      {
        title: "Online access",
        body: "Counselling can begin online where available, making support easier to reach across Nigerian cities."
      }
    ],
    suitedFor: [
      "People searching for counselling in Nigeria",
      "People carrying stress, grief, or relationship pressure",
      "Families looking for professional support",
      "People unsure whether they need counselling or therapy"
    ],
    nextStepBody:
      "Share what you want to talk through and where you are located. MeloraHealth can help route the right support."
  },
  {
    slug: "psychologist-in-nigeria",
    group: "Nigeria care",
    linkLabel: "Psychologist in Nigeria",
    metaTitle: "Psychologist in Nigeria",
    metaDescription:
      "Find a psychologist in Nigeria through MeloraHealth for assessment, therapy routing, emotional support, and specialist mental health care.",
    title: "Find a psychologist in Nigeria.",
    body:
      "MeloraHealth helps people looking for a psychologist in Nigeria move toward the right professional care route, whether the need is assessment, therapy, or specialist support.",
    imageSrc: "/assets/images/professional-care.jpg",
    imageAlt: "African therapist and client seated in a respectful care conversation",
    visualTitle: "Professional support, matched to need.",
    introTitle: "Know what kind of professional support fits.",
    introBody:
      "A psychologist may support assessment, therapy, behaviour patterns, emotional difficulty, and the work of understanding what is happening beneath the surface.",
    cards: [
      {
        title: "Assessment and clarity",
        body: "Support for understanding symptoms, patterns, emotional changes, and the care level that may be appropriate."
      },
      {
        title: "Therapy routes",
        body: "Psychology support can sit alongside individual therapy, couples care, postpartum support, or psychiatric review."
      },
      {
        title: "Private matching",
        body: "MeloraHealth routes requests with discretion so people do not have to sort through every option alone."
      }
    ],
    suitedFor: [
      "People searching for a psychologist in Nigeria",
      "People unsure if they need therapy or assessment",
      "Parents, couples, and individuals seeking clarity",
      "People looking for professional mental health guidance"
    ],
    nextStepBody:
      "Tell us what you are noticing and the kind of support you have in mind. We can help route the request."
  },
  {
    slug: "therapist-in-lagos",
    group: "Nigeria care",
    linkLabel: "Therapist in Lagos",
    metaTitle: "Therapist in Lagos",
    metaDescription:
      "Find a therapist in Lagos through MeloraHealth for online and available local mental health care routes across stress, relationships, postpartum support, and psychiatry.",
    title: "Find a therapist in Lagos.",
    body:
      "Lagos can make pressure feel normal until it becomes too much. MeloraHealth helps people in Lagos find a clearer route into therapy and mental health support.",
    imageSrc: "/assets/images/individual-reflection.jpg",
    imageAlt: "African woman seated quietly in a calm home interior",
    visualTitle: "Support that respects the pace of Lagos life.",
    introTitle: "Therapy for people carrying more than they say.",
    introBody:
      "Whether you are dealing with work pressure, relationship strain, grief, anxiety, family expectations, or emotional exhaustion, the first step should be simple and private.",
    cards: [
      {
        title: "Online therapy",
        body: "Private sessions can begin online when traffic, schedule, or discretion makes in-person care difficult."
      },
      {
        title: "Local context",
        body: "Care routing considers the realities of living and working in Lagos, without reducing the need to stress alone."
      },
      {
        title: "Specialist support",
        body: "Routes can include individual therapy, couples care, postpartum support, psychology, and psychiatry."
      }
    ],
    suitedFor: [
      "People searching for a therapist in Lagos",
      "Busy professionals",
      "Couples and parents in Lagos",
      "People who prefer online support before in-person care"
    ],
    nextStepBody:
      "Share where you are in Lagos, your preferred format, and what you need help with. MeloraHealth can guide the next step."
  },
  {
    slug: "therapy-in-lagos",
    group: "Nigeria care",
    linkLabel: "Therapy in Lagos",
    metaTitle: "Therapy in Lagos",
    metaDescription:
      "Therapy in Lagos through MeloraHealth, with private online and available local care routing for stress, anxiety, couples, postpartum support, and psychiatry.",
    title: "Therapy in Lagos.",
    body:
      "MeloraHealth supports people in Lagos seeking therapy for stress, relationships, grief, identity, postpartum adjustment, anxiety, burnout, and difficult life changes.",
    imageSrc: "/assets/images/hero-thoughtful-woman.jpg",
    imageAlt: "African professional sitting calmly in thoughtful natural light",
    visualTitle: "A steadier route into care.",
    introTitle: "When Lagos keeps moving, care still matters.",
    introBody:
      "Therapy gives people a place to slow down, understand what is happening, and work with a professional who can hold the details with care.",
    cards: [
      {
        title: "Stress and burnout",
        body: "Support for pressure that has started affecting sleep, focus, mood, relationships, or daily functioning."
      },
      {
        title: "Relationships and family",
        body: "A route into therapy for communication, distance, conflict, grief, and family expectations."
      },
      {
        title: "Private access",
        body: "Care can begin online and move through the right professional path where available."
      }
    ],
    suitedFor: [
      "People looking for therapy in Lagos",
      "People navigating work and family pressure",
      "Couples seeking support",
      "People who need therapy but want a private first step"
    ],
    nextStepBody:
      "Begin with what feels heavy or unclear. MeloraHealth can help route care in a way that fits."
  },
  {
    slug: "therapy-in-abuja",
    group: "Nigeria care",
    linkLabel: "Therapy in Abuja",
    metaTitle: "Therapy in Abuja",
    metaDescription:
      "Therapy in Abuja through MeloraHealth, with private online and available local care routing for stress, relationships, postpartum support, anxiety, and psychiatry.",
    title: "Therapy in Abuja.",
    body:
      "MeloraHealth supports people in Abuja seeking therapy for stress, relationships, grief, anxiety, postpartum adjustment, identity, and difficult life changes.",
    imageSrc: "/assets/images/hero-reflection.jpg",
    imageAlt: "African professional sitting in quiet reflection by a window",
    visualTitle: "Private support in a city that carries responsibility.",
    introTitle: "Care for the pressure people often manage quietly.",
    introBody:
      "Abuja holds many kinds of pressure: work, public responsibility, family expectations, transition, distance, and the need to keep functioning even when things feel heavy.",
    cards: [
      {
        title: "Private therapy access",
        body: "Begin with online therapy where available, especially when schedule, privacy, or location makes in-person care harder."
      },
      {
        title: "Relationship and family support",
        body: "A route into care for communication, distance, conflict, grief, parenting, and family expectations."
      },
      {
        title: "Specialist routing",
        body: "Requests can be directed toward therapy, psychology, postpartum support, couples care, or psychiatry when needed."
      }
    ],
    suitedFor: [
      "People looking for therapy in Abuja",
      "Professionals carrying stress or burnout",
      "Couples and families seeking support",
      "People who want a private first step into care"
    ],
    nextStepBody:
      "Share where you are in Abuja, the format you prefer, and what kind of support you need. MeloraHealth can route the next step."
  }
];

export const serviceLandingPageGroups = [
  "Africa-wide care",
  "Nigeria care",
  "Diaspora and sponsorship"
] as const;

export function getServiceLandingPage(slug: string) {
  return serviceLandingPages.find((page) => page.slug === slug);
}
