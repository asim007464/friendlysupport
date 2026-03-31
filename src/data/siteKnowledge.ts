import { HOURLY_PRICING_EXPLANATION, LIVE_IN_WEEK_GUIDE } from "@/data/pricingCopy";

/** Text used by the site assistant — keep in sync with public page copy. */
export type KnowledgeChunk = {
  id: string;
  /** Extra terms to improve matching (lowercase). */
  keywords: string[];
  /** Answer shown to the user (plain text). */
  answer: string;
};

export const SITE_KNOWLEDGE: KnowledgeChunk[] = [
  {
    id: "intro",
    keywords: [
      "who",
      "what",
      "friendly support",
      "company",
      "about",
      "help",
      "home",
      "service",
    ],
    answer:
      "Friendly Support Limited offers warm, practical home support for adults who want to stay happily at home. We provide companionship, errands, light help around the house, and optional live‑in home support (without personal care). We keep things personal and flexible — no call centres.",
  },
  {
    id: "areas",
    keywords: [
      "where",
      "area",
      "local",
      "cover",
      "borough",
      "barnet",
      "brent",
      "harrow",
      "ealing",
      "location",
      "serve",
    ],
    answer:
      "We support people local to Barnet, Brent, Harrow and Ealing.",
  },
  {
    id: "visit-length",
    keywords: [
      "hour",
      "hours",
      "long",
      "length",
      "minimum",
      "visit",
      "duration",
    ],
    answer:
      "Regular visits are unhurried, with a minimum of 2 hours — we take time to get to know you and get things done properly.",
  },
  {
    id: "hourly-rate",
    keywords: [
      "cost",
      "price",
      "how much",
      "fee",
      "charge",
      "25",
      "pound",
      "hourly",
    ],
    answer: HOURLY_PRICING_EXPLANATION,
  },
  {
    id: "services-overview",
    keywords: [
      "services",
      "offer",
      "provide",
      "regulated",
      "non-regulated",
      "cqc",
      "what do you do",
    ],
    answer:
      "We offer non‑regulated home support: practical and social help at home. We do not provide personal care or nursing. Visits are unhurried, with a minimum of 2 hours. We can also arrange live‑in home support for peace of mind.",
  },
  {
    id: "companionship",
    keywords: [
      "companionship",
      "visit",
      "chat",
      "lonely",
      "social",
      "company",
      "cuppa",
    ],
    answer:
      "We offer companionship and social visits — a cuppa, a chat, a walk, or whatever makes the day feel brighter. Visits can be at home or a short trip out.",
  },
  {
    id: "sitting",
    keywords: [
      "sitting",
      "carer",
      "family",
      "break",
      "respite",
    ],
    answer:
      "We provide a sitting service for family carers: we stay with your loved one so you can have a break, run errands or rest, knowing someone reliable is there.",
  },
  {
    id: "appointments",
    keywords: [
      "appointment",
      "gp",
      "hospital",
      "doctor",
      "transport",
    ],
    answer:
      "We can help with getting to and from GP, hospital or other appointments, including company in the waiting room if needed.",
  },
  {
    id: "shopping",
    keywords: [
      "shop",
      "shopping",
      "errand",
      "prescription",
      "parcel",
    ],
    answer:
      "We help with the weekly shop, collecting prescriptions, posting parcels and other everyday errands that are getting harder to manage alone.",
  },
  {
    id: "domestic",
    keywords: [
      "clean",
      "tidying",
      "laundry",
      "meal",
      "cooking",
      "housework",
      "domestic",
    ],
    answer:
      "We offer light domestic support: tidying, laundry, washing up and simple meal preparation — to keep things comfortable and safe.",
  },
  {
    id: "live-in",
    keywords: [
      "live-in",
      "live in",
      "overnight",
      "night",
      "24",
      "stay",
      "resident",
      "price",
      "cost",
      "fee",
      "week",
      "1150",
      "how much",
    ],
    answer: LIVE_IN_WEEK_GUIDE,
  },
  {
    id: "not-offered",
    keywords: [
      "personal care",
      "washing",
      "dressing",
      "continence",
      "medication",
      "nursing",
      "dont",
      "don't",
      "cannot",
    ],
    answer:
      "We do not provide personal care (washing, dressing, continence), medication tasks, dressings, or any nursing or medical procedures. If you are unsure, we are happy to talk it through and signpost you if we are not the right fit.",
  },
  {
    id: "medical",
    keywords: [
      "doctor",
      "diagnose",
      "medical",
      "nhs",
      "treatment",
      "prescribe",
    ],
    answer:
      "Friendly Support Limited does not offer medical care or medical advice. We do not diagnose, prescribe or provide treatments. We offer practical and social support alongside your usual NHS and social care services.",
  },
  {
    id: "team",
    keywords: [
      "team",
      "staff",
      "worker",
      "hca",
      "interview",
      "training",
      "background",
    ],
    answer:
      "We work with a small group of self‑employed home support workers who are interviewed and background‑checked, trained in communication and dignity, and given clear guidance and check‑ins. Where possible we match you with the same familiar faces.",
  },
  {
    id: "values",
    keywords: [
      "values",
      "kindness",
      "honesty",
      "reliable",
      "respect",
    ],
    answer:
      "Our values are kindness (as we would for family), honesty about what we can do, reliability on time as agreed, and respect — working with you, not over you.",
  },
  {
    id: "contact",
    keywords: [
      "contact",
      "book",
      "form",
      "phone",
      "email",
      "get in touch",
      "enquiry",
    ],
    answer:
      "Use Contact for a quick message (name, email, phone, message). Use Book now for the full booking form with address, timing and visits. We reply with a kind, honest answer either way.",
  },
];
