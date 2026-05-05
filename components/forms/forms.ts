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
