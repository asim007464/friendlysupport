import { SITE_EMAIL, SITE_HOURS, SITE_PHONE_DISPLAY } from "@/data/siteContact";

export type FaqItem = { question: string; answer: string };

/** Full FAQ page content */
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What kind of support do you offer?",
    answer:
      "We provide non-regulated support at home and in the community, including companionship, errands, light domestic assistance, appointment support, and optional live-in support.\n\nPlease note that we do not provide regulated personal care, such as washing, dressing, continence care, medication administration, or nursing.",
  },
  {
    question: "Which areas do you cover?",
    answer: "We provide support to clients across London.",
  },
  {
    question: "How long does each visit last?",
    answer:
      "Our hourly visits are booked for a minimum of two hours. Longer visits and live-in support arrangements can also be discussed and agreed in writing before any commitment is made.",
  },
  {
    question: "How much does your support cost?",
    answer:
      "Our prices depend on the type and level of support required.\n\nAs a guide, companionship at home and light domestic support are usually quoted from £25 per hour, with a minimum booking of two hours. Support involving trips out or appointments may cost more, as travel time may need to be included.\n\nLive-in support is quoted on a weekly basis, usually from around £1,500 per week as a guide.\n\nWe will always confirm the exact cost clearly in writing before you agree to proceed.",
  },
  {
    question: "Are you CQC registered?",
    answer:
      "No. Friendly Support Limited provides non-regulated support only, which does not require CQC registration.\n\nWe do not provide regulated personal care or nursing. Where regulated care is required, we can help signpost you towards appropriate services.",
  },
  {
    question: "What are your office hours?",
    answer: `We are available ${SITE_HOURS}.\n\nYou can email us at ${SITE_EMAIL} or call ${SITE_PHONE_DISPLAY}. If we are unable to answer immediately, please leave a message and we will get back to you as soon as possible.`,
  },
  {
    question: "How do I make a booking or ask a question?",
    answer: `Ready to arrange support? Please use the Book Now option.\n\nStill considering your options or would like to ask a question first? Please choose Free Consultation, and we will be happy to talk things through with you.\n\nYou can also contact us by email at ${SITE_EMAIL} or by phone on ${SITE_PHONE_DISPLAY}. We are available ${SITE_HOURS}.`,
  },
  {
    question: "What happens after I submit the enquiry form?",
    answer:
      "Every enquiry is reviewed personally. A member of our team will contact you within 24 to 48 hours, and often sooner, to discuss your needs and explain the next steps.",
  },
  {
    question: "Can I change or cancel a visit?",
    answer:
      "Yes. Visit times are agreed in advance, but we understand that circumstances can change.\n\nPlease let us know as early as possible if you need to amend or cancel a visit, so that we can update your support worker’s schedule accordingly.",
  },
];

/** Homepage preview questions (wording tailored for the front page) */
export const HOME_FAQ_ITEMS: FaqItem[] = [
  {
    question: "What kind of support do you provide?",
    answer:
      "We provide non-regulated home and community support, including companionship, errands, light domestic help, appointment support and optional live-in support by arrangement. We do not provide personal care, medication administration, nursing or clinical services.",
  },
  {
    question: "Where do you work?",
    answer: "We provide support to clients across London.",
  },
  {
    question: "How long is a visit?",
    answer:
      "Hourly visits are booked for a minimum of two hours. Longer visits and live-in support arrangements can also be discussed and confirmed in writing before you decide to proceed.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Costs depend on the type of support required. As a guide, companionship at home and light domestic help are usually quoted from £25 per hour, with a minimum booking of two hours. Trips out and appointment support may cost more where travel time is involved. Live-in support is quoted weekly, from around £1,500 per week as a guide. We always confirm the exact cost in writing before you agree.",
  },
];
