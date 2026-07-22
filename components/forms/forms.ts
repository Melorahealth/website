export const findSupportFields = [
  { label: "Name", name: "name", placeholder: "Your full name" },
  { label: "Email", name: "email", type: "email" as const, placeholder: "you@example.com" },
  { label: "Location", name: "location", placeholder: "City, country" },
  {
    label: "Type of support",
    name: "support_type",
    options: [
      "Therapy",
      "Psychiatry",
      "Women’s therapy",
      "Postpartum therapy",
      "Couples therapy",
      "Queer-affirming therapy"
    ]
  },
  {
    label: "Preferred format",
    name: "format",
    options: ["Online", "Offline", "Either"]
  },
  {
    label: "Optional message",
    name: "message",
    textarea: true,
    placeholder: "Tell us what would help us route your request well."
  }
];

export const professionalFields = [
  { label: "Name", name: "name", placeholder: "Your full name" },
  { label: "Email", name: "email", type: "email" as const, placeholder: "you@example.com" },
  {
    label: "Profession",
    name: "profession",
    options: ["Therapist", "Psychologist", "Psychiatrist", "Clinical social worker"]
  },
  { label: "Country", name: "country", placeholder: "Country of practice" },
  { label: "License", name: "license", placeholder: "License or registration number" },
  {
    label: "Availability",
    name: "availability",
    options: ["Weekdays", "Evenings", "Weekends", "Flexible"]
  },
  { label: "Upload credentials", name: "credentials", type: "file" as const }
];

export const partnerFields = [
  { label: "Organization name", name: "organization", placeholder: "Company or institution" },
  { label: "Contact person", name: "contact_person", placeholder: "Full name" },
  { label: "Email", name: "email", type: "email" as const, placeholder: "name@company.com" },
  {
    label: "Partner type",
    name: "partner_type",
    options: ["HMO", "Employer", "Bank or telco", "Institution", "Sponsor"]
  },
  {
    label: "Interest area",
    name: "interest_area",
    options: ["Employee care", "Member access", "API", "Sponsored sessions", "Clinical network"]
  },
  {
    label: "Message",
    name: "message",
    textarea: true,
    placeholder: "Share the care model or population you want to support."
  }
];

export const employerFields = [
  { label: "Company name", name: "company", placeholder: "Your organization" },
  { label: "Contact person", name: "contact_person", placeholder: "Full name and role" },
  { label: "Work email", name: "email", type: "email" as const, placeholder: "name@company.com" },
  {
    label: "Number of employees",
    name: "employee_count",
    options: ["1–50", "51–200", "201–1,000", "1,001–5,000", "5,000+"]
  },
  {
    label: "What you're exploring",
    name: "interest_area",
    options: [
      "Employee therapy & psychiatry",
      "Confidential EAP",
      "Manager and HR support",
      "Sponsored access for staff",
      "Not sure yet"
    ]
  },
  {
    label: "Message",
    name: "message",
    textarea: true,
    placeholder: "Tell us about your team and what you're hoping to support."
  }
];

export const governmentFields = [
  { label: "Agency or ministry", name: "agency", placeholder: "Ministry, agency, or institution" },
  { label: "Contact person", name: "contact_person", placeholder: "Full name and role" },
  { label: "Official email", name: "email", type: "email" as const, placeholder: "name@gov.example" },
  {
    label: "Level of government",
    name: "government_level",
    options: [
      "National / federal",
      "State / regional",
      "Local / municipal",
      "Public university",
      "Public health agency"
    ]
  },
  {
    label: "Program focus",
    name: "program_focus",
    options: [
      "Maternal & postpartum health",
      "Workforce / public servants",
      "Community / student access",
      "Population mental health program",
      "Integration / API"
    ]
  },
  {
    label: "Message",
    name: "message",
    textarea: true,
    placeholder: "Share the population you want to reach and the outcomes you're accountable for."
  }
];

export const universityFields = [
  { label: "Institution name", name: "institution", placeholder: "University, polytechnic, or college" },
  { label: "Contact person", name: "contact_person", placeholder: "Full name and role" },
  { label: "Official email", name: "email", type: "email" as const, placeholder: "name@institution.edu" },
  {
    label: "Institution type",
    name: "institution_type",
    options: ["University", "Polytechnic", "College of education", "Other"]
  },
  {
    label: "What you're exploring",
    name: "interest_area",
    options: [
      "Student counselling",
      "Staff & faculty wellbeing",
      "Overflow referrals",
      "Campus-wide program",
      "Not sure yet"
    ]
  },
  {
    label: "Message",
    name: "message",
    textarea: true,
    placeholder: "Tell us about your campus and the students or staff you want to support."
  }
];

export const hmoFields = [
  { label: "HMO or plan name", name: "organization", placeholder: "Your HMO or health plan" },
  { label: "Contact person", name: "contact_person", placeholder: "Full name and role" },
  { label: "Work email", name: "email", type: "email" as const, placeholder: "name@company.com" },
  {
    label: "Approximate member count",
    name: "member_count",
    options: ["Under 5,000", "5,000–25,000", "25,000–100,000", "100,000–500,000", "500,000+"]
  },
  {
    label: "What you're exploring",
    name: "interest_area",
    options: [
      "Member mental-health benefit",
      "Extend provider network",
      "Therapy & psychiatry",
      "Routed access / referrals",
      "API / integration"
    ]
  },
  {
    label: "Message",
    name: "message",
    textarea: true,
    placeholder: "Share the member population and the kind of mental-health access you want to offer."
  }
];

export const demoFields = [
  { label: "Organization name", name: "organization", placeholder: "Company, institution, or agency" },
  { label: "Contact person", name: "contact_person", placeholder: "Full name and role" },
  { label: "Work email", name: "email", type: "email" as const, placeholder: "name@organization.com" },
  {
    label: "Organization type",
    name: "organization_type",
    options: [
      "Employer",
      "HMO or health plan",
      "Government or parastatal",
      "University or institution",
      "Other"
    ]
  },
  {
    label: "Approximate size",
    name: "size",
    options: ["Under 200", "200–1,000", "1,000–5,000", "5,000–50,000", "50,000+"]
  },
  {
    label: "What you'd like to cover",
    name: "message",
    textarea: true,
    placeholder: "Tell us who you want to support and what you're hoping to solve."
  }
];

export const contactFields = [
  { label: "Name", name: "name", placeholder: "Your full name" },
  { label: "Email", name: "email", type: "email" as const, placeholder: "you@example.com" },
  {
    label: "I’m reaching out about",
    name: "inquiry_type",
    options: [
      "Finding support",
      "Joining as a professional",
      "Partnering with MeloraHealth",
      "Sponsoring access",
      "Grant or access program"
    ]
  },
  { label: "Location", name: "location", placeholder: "City, country" },
  {
    label: "Care or access area",
    name: "care_area",
    options: [
      "General therapy",
      "Women’s therapy",
      "Postpartum therapy",
      "Queer-affirming therapy",
      "Psychiatry",
      "Workforce or member access",
      "Community sponsorship"
    ]
  },
  { label: "Organization, if any", name: "organization", placeholder: "Company, fund, institution, or community" },
  {
    label: "Message",
    name: "message",
    textarea: true,
    placeholder: "Tell us what you need, who you want to support, or the kind of access you want to build."
  }
];

export const giftFields = [
  { label: "Sender name", name: "sender_name", placeholder: "Your full name" },
  { label: "Recipient info", name: "recipient", placeholder: "Name or email" },
  {
    label: "Gift type",
    name: "gift_type",
    options: ["Single session", "Care credits", "Community pool", "Family support"]
  },
  { label: "Amount", name: "amount", type: "number" as const, placeholder: "Amount in local currency" },
  {
    label: "Message",
    name: "message",
    textarea: true,
    placeholder: "A short note, if you want to include one."
  }
];
