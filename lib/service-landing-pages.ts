export type ServiceLandingPage = {
  slug: string;
  group: "Africa-wide care" | "Nigeria care" | "Diaspora and sponsorship" | "Specialized care";
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
    slug: "individual-therapy",
    group: "Specialized care",
    linkLabel: "Individual therapy",
    metaTitle: "Individual Therapy",
    metaDescription:
      "One-to-one therapy with culturally aware professionals for stress, anxiety, grief, identity, and the changes life asks you to carry.",
    title: "Individual therapy, one-to-one.",
    body:
      "Private, one-to-one support for stress, anxiety, grief, identity, and the quiet weight of changes life asks you to carry, with a professional who understands your context.",
    imageSrc: "/assets/images/hero-reflection.jpg",
    imageAlt: "African professional sitting in quiet reflection by a window",
    visualTitle: "A steady space that is only yours.",
    introTitle: "Somewhere to think clearly, out loud.",
    introBody:
      "Individual therapy is not only for crisis. It is a place to make sense of what you feel, understand your patterns, and find steadier ground at your own pace.",
    cards: [
      {
        title: "Space for what is heavy",
        body: "Work through stress, anxiety, grief, anger, numbness, or a sense that something has become too much to hold alone."
      },
      {
        title: "Understand your patterns",
        body: "See the habits, fears, and stories underneath how you react, and where you would like to respond differently."
      },
      {
        title: "Support over time",
        body: "Care that continues session to session, so progress builds rather than resetting each time."
      }
    ],
    suitedFor: [
      "People carrying stress or anxiety",
      "Anyone navigating grief or change",
      "People questioning identity or direction",
      "People who want privacy before speaking openly"
    ],
    nextStepBody:
      "Start with whatever you can name. MeloraHealth can route you to an individual therapist who fits your needs."
  },
  {
    slug: "womens-therapy",
    group: "Specialized care",
    linkLabel: "Women's therapy",
    metaTitle: "Women's Therapy",
    metaDescription:
      "Therapy for women navigating relationships, identity, expectation, and the load carried quietly, with culturally aware, affirming professionals.",
    title: "Women's therapy, for the load you hold.",
    body:
      "A place for the pressure no one sees: relationships, identity, expectation, and the load many women carry quietly, held by a professional who understands it.",
    imageSrc: "/assets/images/claudia-wolff-owBcefxgrIE-unsplash.jpg",
    imageAlt: "A woman in a quiet, reflective moment",
    visualTitle: "Room for the part you rarely say out loud.",
    introTitle: "Care that sees the whole weight.",
    introBody:
      "Women often hold work, family, care, and expectation at once. Therapy can be a space where that load is named, understood, and made lighter to carry.",
    cards: [
      {
        title: "Relationships and roles",
        body: "Support for family expectation, partnership, motherhood, boundaries, and the pull of being relied on."
      },
      {
        title: "Identity and self",
        body: "A place to reconnect with who you are beneath the roles, and what you actually need."
      },
      {
        title: "Pressure and burnout",
        body: "Care for exhaustion, resentment, guilt, and the quiet strain of holding everything together."
      }
    ],
    suitedFor: [
      "Women under family or work pressure",
      "Women navigating identity or change",
      "Mothers carrying a heavy mental load",
      "Women who put themselves last"
    ],
    nextStepBody:
      "Tell us what has felt heavy. MeloraHealth can route you to affirming, culturally aware women's therapy."
  },
  {
    slug: "postpartum-therapy",
    group: "Specialized care",
    linkLabel: "Postpartum therapy",
    metaTitle: "Postpartum Therapy",
    metaDescription:
      "Postpartum therapy for the emotional adjustment after birth: identity shift, mental load, exhaustion, and anxiety, with culturally aware care.",
    title: "Postpartum therapy, after birth.",
    body:
      "Support for the emotional adjustment after birth: the identity shift, mental load, exhaustion, and private feelings many parents carry quietly.",
    imageSrc: "/assets/images/postpartum-care.jpg",
    imageAlt: "African mother holding a newborn in calm natural light",
    visualTitle: "Care for the person who gave care.",
    introTitle: "After birth, the parent changes too.",
    introBody:
      "Postpartum support should make room for love and difficulty at the same time. Therapy can steady you through the adjustment, without judgement.",
    cards: [
      {
        title: "Emotional adjustment",
        body: "Support for mood changes, overwhelm, worry, sadness, irritability, and feeling unlike yourself."
      },
      {
        title: "The mental load",
        body: "A space to name sleep loss, family expectation, and the invisible responsibility of care."
      },
      {
        title: "When more help is needed",
        body: "Where appropriate, care can be routed toward psychiatric review or added professional support."
      }
    ],
    suitedFor: [
      "New mothers and birthing parents",
      "Parents feeling unlike themselves",
      "Families worried about someone after birth",
      "Partners seeking a way to help"
    ],
    nextStepBody:
      "Tell us what the adjustment has felt like. MeloraHealth can route postpartum support with care."
  },
  {
    slug: "queer-affirming-therapy",
    group: "Specialized care",
    linkLabel: "Queer-affirming therapy",
    metaTitle: "Queer-Affirming Therapy",
    metaDescription:
      "Affirming therapy for queer people working through identity, belonging, family, faith, and change, private and culturally aware.",
    title: "Queer-affirming therapy.",
    body:
      "Affirming care for queer people working through identity, belonging, family, faith, relationships, and change, with professionals who affirm who you are.",
    imageSrc: "/assets/images/african-american-woman-standing-pink-background-mouth-lips-shut-as-zip-with-fingers-secret-silent-taboo-talking.jpg",
    imageAlt: "A woman holding her lips shut like a zip, a gesture of silence and taboo",
    visualTitle: "Care that starts by affirming you.",
    introTitle: "Support without having to explain your existence.",
    introBody:
      "Affirming therapy means the work is not about justifying who you are. It is a private space to hold identity, relationships, safety, and belonging with care.",
    cards: [
      {
        title: "Identity and belonging",
        body: "Space for coming out, self-understanding, faith, culture, and the tension of belonging in more than one world."
      },
      {
        title: "Family and relationships",
        body: "Support for acceptance, boundaries, chosen family, and relationships under pressure."
      },
      {
        title: "Safety and privacy",
        body: "Care routed with discretion, in contexts where privacy and safety genuinely matter."
      }
    ],
    suitedFor: [
      "Queer people exploring identity",
      "People navigating family or faith tension",
      "Anyone wanting affirming, private care",
      "People who have felt unseen by other services"
    ],
    nextStepBody:
      "Share what you would like support with. MeloraHealth can route you to a queer-affirming professional, privately."
  },
  {
    slug: "couples-therapy",
    group: "Specialized care",
    linkLabel: "Couples therapy",
    metaTitle: "Couples Therapy",
    metaDescription:
      "Couples therapy for communication, trust, distance, and the transitions two people face, with guided, culturally aware support.",
    title: "Couples therapy, together.",
    body:
      "A steadier space for two people navigating distance, silence, conflict, trust, or decisions that have become hard to make alone.",
    imageSrc: "/assets/images/couples-therapy-hero.png",
    imageAlt: "A couple sitting together in a calm, supportive moment",
    visualTitle: "A careful space for hard conversations.",
    introTitle: "Support for what sits between two people.",
    introBody:
      "Couples therapy is not only for crisis. It can help partners speak more clearly, understand patterns, and decide what repair or change requires.",
    cards: [
      {
        title: "Communication",
        body: "Work through silence, repeated arguments, and conversations that keep closing too early."
      },
      {
        title: "Trust and repair",
        body: "Support for betrayal, disappointment, resentment, and the slow work of rebuilding safety."
      },
      {
        title: "Transitions",
        body: "Care for couples facing marriage, parenting, relocation, family pressure, grief, or money stress."
      }
    ],
    suitedFor: [
      "Couples feeling distant",
      "Partners facing a major decision",
      "Married or unmarried couples",
      "Couples wanting help before things worsen"
    ],
    nextStepBody:
      "Share what has become difficult between you. MeloraHealth can route a private couples care request."
  },
  {
    slug: "psychiatry",
    group: "Specialized care",
    linkLabel: "Psychiatry",
    metaTitle: "Psychiatry",
    metaDescription:
      "Psychiatric support for assessment, medication review, and ongoing medical mental health care, routed with clarity and cultural understanding.",
    title: "Psychiatry, when care is medical.",
    body:
      "Some mental health needs call for medical assessment, medication review, or psychiatric support. MeloraHealth helps route those requests with clarity.",
    imageSrc: "/assets/images/psychiatry-hero.png",
    imageAlt: "A psychiatrist in a calm, professional consultation setting",
    visualTitle: "Medical support, handled with care.",
    introTitle: "Know when medical support may help.",
    introBody:
      "Psychiatric care can be part of a wider plan. It may help when symptoms affect sleep, work, safety, concentration, mood, or daily functioning.",
    cards: [
      {
        title: "Assessment",
        body: "Support for understanding symptoms, history, risk, and the kind of care that may be appropriate."
      },
      {
        title: "Medication review",
        body: "Where clinically needed, psychiatric care can guide medication decisions and ongoing review."
      },
      {
        title: "Care coordination",
        body: "Psychiatry can sit alongside therapy and follow-up, rather than feeling like a separate path."
      }
    ],
    suitedFor: [
      "People considering psychiatric assessment",
      "People with symptoms affecting daily life",
      "Families seeking medical guidance",
      "People in therapy who may need review"
    ],
    nextStepBody:
      "Describe what has been happening and any urgency. MeloraHealth can route the request appropriately."
  },
  {
    slug: "group-therapy",
    group: "Specialized care",
    linkLabel: "Group therapy",
    metaTitle: "Group Therapy",
    metaDescription:
      "Group therapy with culturally aware facilitators, where shared experience, support, and being understood help you feel less alone.",
    title: "Group therapy, held together.",
    body:
      "A guided, private space where people carrying something similar meet, share, and support one another, led by a professional who keeps it safe.",
    imageSrc: "/assets/images/group-therapy-hero.png",
    imageAlt: "A small, calm group seated together in a supportive conversation",
    visualTitle: "You are not the only one carrying this.",
    introTitle: "Healing that happens alongside others.",
    introBody:
      "Some things ease when they are spoken among people who understand. Group therapy pairs professional guidance with the relief of not being alone in it.",
    cards: [
      {
        title: "Shared experience",
        body: "Sit with others facing something similar, and feel the weight lift a little in being understood."
      },
      {
        title: "Guided and safe",
        body: "A trained facilitator keeps the space respectful, confidential, and steady for everyone in it."
      },
      {
        title: "Support that sticks",
        body: "Encouragement, perspective, and accountability that carry on between sessions, not just during them."
      }
    ],
    suitedFor: [
      "People who feel alone in what they carry",
      "Anyone healing from grief, stress, or change",
      "People who learn from shared experience",
      "Those wanting support beyond one-to-one care"
    ],
    nextStepBody:
      "Tell us what you are working through. MeloraHealth can route you toward a group that fits."
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
