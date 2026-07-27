/** Shared service content for listing and detail pages. */

const img = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export type ServiceIconName =
  | "chat"
  | "users"
  | "calendar"
  | "shopping"
  | "home"
  | "moon";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  details: string;
  pricing: string;
  image: { src: string; alt: string };
  icon: ServiceIconName;
  includes: string[];
  goodToKnow: string;
};

export const SERVICES: Service[] = [
  {
    slug: "companionship",
    title: "Companionship and Social Visits",
    summary:
      "Friendly visits for conversation, a cup of tea, a gentle walk, or simply the reassurance of kind and reliable company at home.",
    details:
      "We visit you at home for conversation, hobbies, reading, games, or a quiet cup of tea. This is support in your own space. We are not taking you out, so travel is not usually added to the cost.",
    pricing: "Guide: from £25 per hour · minimum 2 hours per visit.",
    image: {
      src: "/companionandsocialvisits.png",
      alt: "Friendly companionship visit at home with a cup of tea",
    },
    icon: "chat",
    includes: [
      "Conversation, hobbies and shared activities at home",
      "Reading, games or a quiet cup of tea together",
      "Short walks from your home if you feel up to it",
      "A familiar face who takes time to get to know you",
    ],
    goodToKnow:
      "This service is for company at home. If you need someone to take you to appointments or shops, see our appointment or errands services instead.",
  },
  {
    slug: "sitting-service",
    title: "Sitting Service for Family Carers",
    summary:
      "We can stay with your loved one while you rest, run errands, attend appointments, or take some much-needed time for yourself.",
    details:
      "A reliable person stays in the home while a family carer takes a break. We keep your loved one company and safe. We do not provide personal care.",
    pricing: "Guide: from £25 per hour · minimum 2 hours per visit.",
    image: {
      src: "/sittingservice.png",
      alt: "Family carer taking a break while a support worker stays with their loved one",
    },
    icon: "users",
    includes: [
      "Company and reassurance while a family carer is away",
      "Light supervision and conversation at home",
      "Help calling you if anything unexpected comes up",
      "Flexible visits so you can rest, shop or attend appointments",
    ],
    goodToKnow:
      "This is respite-style companionship, not nursing or personal care. Tell us about any routines we should follow while you are out.",
  },
  {
    slug: "appointment-support",
    title: "Support Getting to Appointments",
    summary:
      "Reliable company and practical assistance for GP, hospital, dental and other appointments, helping the day feel easier and less stressful.",
    details:
      "We travel with you to appointments and can wait with you in the waiting room. Because we go out with you, travel time and transport may be part of the cost. We confirm this before you agree.",
    pricing: "Guide: from around £30 per hour · travel costs discussed in advance.",
    image: {
      src: "/supportgettingappointments.png",
      alt: "Support worker accompanying someone to a medical appointment",
    },
    icon: "calendar",
    includes: [
      "Travel with you to GP, hospital, dental or other appointments",
      "Company in the waiting room and help finding your way",
      "Support getting home safely afterwards",
      "Clear discussion of travel time and transport costs upfront",
    ],
    goodToKnow:
      "We provide practical escort and company, not clinical care. Transport may be by car, taxi or public transport depending on what you arrange.",
  },
  {
    slug: "shopping-errands",
    title: "Shopping and Errands",
    summary:
      "Practical help with the weekly shop, prescriptions, post and everyday errands, carried out with care, patience and reliability.",
    details:
      "Help with grocery shopping (with you or on your behalf), prescriptions, posting parcels and other errands that are getting harder to manage alone.",
    pricing: "Guide: from £25 per hour · minimum 2 hours per visit.",
    image: {
      src: "/shopping.png",
      alt: "Help with grocery shopping and everyday errands",
    },
    icon: "shopping",
    includes: [
      "Grocery shopping with you or on your behalf",
      "Collecting prescriptions from the pharmacy",
      "Posting letters and parcels",
      "Other small errands that are becoming harder to manage",
    ],
    goodToKnow:
      "If we shop on your behalf, we agree a list and budget with you first. Shopping and travel time count towards the visit.",
  },
  {
    slug: "domestic-support",
    title: "Light Domestic Support",
    summary:
      "Gentle help around the home, including tidying, laundry, washing-up and simple meal preparation, so the home feels calm, comfortable and manageable.",
    details:
      "Practical help at home: tidying, laundry, changing beds, washing up and light meal preparation. Larger jobs may need more than the minimum visit. We agree hours with you first.",
    pricing: "Guide: from £25 per hour · minimum 2 hours; longer visits by agreement.",
    image: {
      src: "/lightdomestic.png",
      alt: "Light help with meals and tidying at home",
    },
    icon: "home",
    includes: [
      "Tidying, laundry, washing up and changing bed linen",
      "Simple meal preparation and clearing up afterwards",
      "Light housekeeping to keep the home comfortable",
      "Longer visits agreed when a bigger job needs more time",
    ],
    goodToKnow:
      "A full laundry load or deep clean may need more than 2 hours. We will be honest about how long a job is likely to take before you book.",
  },
  {
    slug: "live-in-support",
    title: "Live-In Home Support — No Personal Care",
    summary:
      "A reassuring presence in the home, day and night, offering companionship and practical support. This service does not include personal care, nursing or medical tasks.",
    details:
      "Short or long-term live-in support: companionship, light housework, meals, shopping and checks. Not personal care or nursing. You still cover your own rent and food at home, unlike a care home where those are included.",
    pricing: "Guide: from around £1,500 per week. Exact quote in writing before you commit.",
    image: {
      src: "/livein.png",
      alt: "Comfortable home with someone nearby day and night",
    },
    icon: "moon",
    includes: [
      "Someone staying in the home for companionship and reassurance",
      "Light housework, meals, shopping and routine checks",
      "Day and night presence for peace of mind",
      "A written quote before you agree to anything",
    ],
    goodToKnow:
      "You continue to pay your own rent, bills and food at home. This is not a care home package. We do not provide personal care or nursing.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getOtherServices(slug: string): Service[] {
  return SERVICES.filter((s) => s.slug !== slug);
}
