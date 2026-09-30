/**
 * FAQ Data Source (M19)
 *
 * PRODUCTION SAFETY RULE:
 * 1. Questions marked `confirmed: true` are answered ONLY from verified PRD facts.
 * 2. Questions marked `confirmed: false` display `[CONFIRM: ...]` in development,
 *    and are strictly HIDDEN in production builds.
 * 3. FAQPage Schema LD+JSON must include ONLY the questions displayed in production.
 */

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  confirmed: boolean;
}

// Confirmed PRD FAQs (Included in Production & FAQPage Schema)
const CONFIRMED_FAQS: FaqItem[] = [
  {
    id: "faq-areas-served",
    question: "Which geographical areas does Kwality Interiors serve?",
    answer:
      "We directly execute projects across Hyderabad and throughout Telangana state for industrial construction, structural fabrication, sheds, and commercial site execution.",
    confirmed: true,
  },
  {
    id: "faq-drawings-boq",
    question:
      "Can you execute works directly from client-supplied drawings and BOQ?",
    answer:
      "Yes. Our execution begins with a thorough review of your provided engineering drawings, Bill of Quantities (BOQ), and site conditions to structure quotations and mobilization.",
    confirmed: true,
  },
  {
    id: "faq-licences-held",
    question:
      "What statutory registrations and contractor licences does Kwality Interiors hold?",
    answer:
      "Kwality Interiors operates under active statutory registrations including GST (GSTIN: 36DAPPA9150R1ZY), Ministry of MSME Udyam Registration, Telangana Labour Licence, and a Construction Licence.",
    confirmed: true,
  },
  {
    id: "faq-site-visit",
    question: "How can we arrange an on-site visit or technical assessment?",
    answer:
      "You can arrange a site visit by calling direct at +91 98491 83165, messaging via WhatsApp, or submitting your site location and requirements through the enquiry form on this page.",
    confirmed: true,
  },
  {
    id: "faq-services-offered",
    question:
      "What trades and specialized scopes are executed by Kwality Interiors?",
    answer:
      "Our documented scope includes industrial shed construction, structural steel framing, pipe racks, civil works, industrial & exterior painting, protective coating / cylinder painting, ceiling systems (including graded ceilings), glass works, uPVC windows, and aluminium structures.",
    confirmed: true,
  },
  {
    id: "faq-commercial-jobs",
    question:
      "Do you execute small-to-medium commercial facilities alongside industrial plants?",
    answer:
      "Yes. In addition to heavy industrial site execution, we deliver commercial interiors, civil works, specialized ceilings, aluminium framing, and glass installations.",
    confirmed: true,
  },
  {
    id: "faq-send-drawings",
    question: "How should tender drawings or project specifications be shared?",
    answer:
      "You can share CAD files, PDF drawing sets, and BOQ documents directly via WhatsApp to +91 98491 83165 or email them to Kwality9849@gmail.com for technical review.",
    confirmed: true,
  },
];

// Unconfirmed questions (Dev only; tree-shaken and excluded in production per PRD Section 8)
const DEV_ONLY_FAQS: FaqItem[] =
  process.env.NODE_ENV !== "production"
    ? [
        {
          id: "faq-pricing-rates",
          question: "What are your standard square-foot or tonnage pricing rates?",
          answer:
            "[CONFIRM: pricing structure per square foot or metric ton based on steel grade and scope]",
          confirmed: false,
        },
        {
          id: "faq-turnaround-timelines",
          question: "What is the typical completion timeline for structural shed fabrication?",
          answer:
            "[CONFIRM: standard fabrication and site erection schedule ranges]",
          confirmed: false,
        },
        {
          id: "faq-safety-protocols",
          question: "What specific safety compliance protocols and certifications are applied?",
          answer:
            "[CONFIRM: certified safety management protocols and on-site PPE compliance systems]",
          confirmed: false,
        },
        {
          id: "faq-maintenance-contracts",
          question: "Do you offer post-construction AMC and preventive maintenance contracts?",
          answer:
            "[CONFIRM: annual maintenance contract terms and facility upkeep packages]",
          confirmed: false,
        },
      ]
    : [];

export const FAQS: FaqItem[] = [...CONFIRMED_FAQS, ...DEV_ONLY_FAQS];
