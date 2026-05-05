# MELORAHEALTH — PROJECT REQUIREMENTS

This document defines the exact build scope, structure, flows, and technical requirements for the MeloraHealth website.

This MUST be used together with AGENTS.md.

---

# 🧠 PROJECT GOAL

Build a premium, scalable marketing website that:

- Serves B2C users (clients)
- Serves professionals (therapists, psychologists, psychiatrists)
- Serves B2B partners (HMOs, banks, telcos, organizations)
- Supports gifting (Sponsor a Session)
- Introduces API and marketplace vision
- Feels high-end, calm, and culturally grounded

This is NOT a basic landing page.
This is a **foundation for a mental health platform**.

---

# 🏗 TECH STACK

Framework:
- Next.js (App Router)

Styling:
- Tailwind CSS

Language:
- TypeScript

Deployment:
- Vercel (preferred)

---

# 📁 PROJECT STRUCTURE

/app
  /page.tsx (Home)
  /for-you
  /for-professionals
  /for-partners
  /gift-care
  /services
  /about
  /contact
  /resources

/components
  /ui
  /sections
  /forms
  /cards

/public
  /assets
    /logo
    /images
    /patterns

/styles

---

# 🌐 SITE MAP (MANDATORY)

## 1. Home
Main overview of brand, services, and CTAs.

## 2. For You (B2C)
- Therapy
- Psychiatry
- Postpartum care
- Couples therapy
- Identity-affirming care

## 3. For Professionals
- Marketplace explanation
- Benefits
- Join form

## 4. For Partners (B2B)
- HMOs
- Employers
- Banks / Telcos
- Institutions
- API

## 5. Gift Care
- Sponsor a session
- Gift credits
- Community care

## 6. Services
- Online care
- Offline care

## 7. About
- Mission
- Vision
- Philosophy

## 8. Contact
- General contact
- Inquiry routing

## 9. Resources (optional but recommended)
- Articles
- Mental health insights

---

# 🎯 CORE USER FLOWS

## FLOW 1 — FIND SUPPORT

User path:
Home → Find Support → Form

Form fields:
- Name
- Email
- Location
- Type of support
- Preferred format (Online / Offline)
- Optional message

Action:
- Submit → store or send to email (placeholder)

---

## FLOW 2 — PROFESSIONAL SIGN-UP

User path:
For Professionals → Join

Fields:
- Name
- Email
- Profession
- Country
- License
- Availability
- Upload credentials (placeholder)

---

## FLOW 3 — PARTNER INQUIRY

User path:
For Partners → Contact

Fields:
- Organization name
- Contact person
- Email
- Partner type
- Interest area
- Message

---

## FLOW 4 — GIFT SESSION

User path:
Gift Care → Gift

Fields:
- Sender name
- Recipient info
- Gift type
- Amount
- Message

---

# 🧩 COMPONENT REQUIREMENTS

## REQUIRED COMPONENTS

- Navbar
- Footer
- Hero section
- Card components
- CTA sections
- Forms
- Pattern overlays
- Image blocks
- Icon lists

---

# 🎨 DESIGN REQUIREMENTS

MUST follow AGENTS.md.

Key rules:
- Minimal design
- High whitespace
- No clutter
- Premium typography
- Subtle African patterns
- Calm imagery
- No wellness visuals

---

# 🖼 IMAGE SYSTEM

All images must:
- be African / diaspora representation
- be calm and reflective
- follow AGENTS.md image prompt system

Image location: