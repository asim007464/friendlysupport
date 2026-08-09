import { SITE_EMAIL, SITE_PHONE_DISPLAY } from "@/data/siteContact";

export type FaqItem = { question: string; answer: string };

/** Full FAQ page content (18 questions) */
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What kind of support do you provide?",
    answer:
      "We provide non-regulated home and community support for adults across London. This may include companionship, errands, light domestic help, support getting to appointments, sitting services for family carers, and live-in support by arrangement.\n\nOur role is to offer practical help, friendly company and reassuring support, so that everyday life at home feels easier, calmer and less lonely.",
  },
  {
    question: "What support do you not provide?",
    answer:
      "We do not provide regulated personal care, nursing or medical services.\n\nThis means we do not assist with washing, bathing, dressing, toileting, continence care, medication administration, wound care, dressings or medical procedures.\n\nWhere a person needs regulated care, we will be honest about this and can help signpost you towards a more appropriate service.",
  },
  {
    question: "Where do you work?",
    answer:
      "We provide support to clients across London.\n\nWhen you contact us, we will confirm whether we can cover your area and whether there is a suitable support worker available for the days and times you need.",
  },
  {
    question: "How long is each visit?",
    answer:
      "Hourly visits are booked for a minimum of two hours.\n\nLonger visits, regular weekly support and live-in support arrangements can also be discussed. We will always confirm the agreed visit times and costs in writing before support begins.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Prices depend on the type of support required, the length of the visit, and whether travel or additional time is involved.\n\nAs a guide, companionship at home and light domestic help are usually quoted from £25 per hour, with a minimum booking of two hours. Support for trips out or appointments may cost more where travel time is required.\n\nLive-in support is quoted weekly, usually from around £1,500 per week as a guide.\n\nWe always confirm the exact cost clearly in writing before you agree to proceed.",
  },
  {
    question: "Are you CQC registered?",
    answer:
      "No. Friendly Support Limited provides non-regulated support only, which does not require CQC registration.\n\nWe do not provide regulated personal care, medication administration, nursing or clinical services. If your needs fall into those areas, we can help point you towards suitable regulated providers.",
  },
  {
    question: "Are your support workers checked?",
    answer:
      "Yes. We work with a small group of carefully selected support workers who are interviewed and DBS-checked.\n\nWe also look for qualities that matter deeply in this kind of work: kindness, patience, reliability, good judgement and respect for each person’s dignity and independence.",
  },
  {
    question: "Will I have the same support worker each time?",
    answer:
      "Wherever possible, we aim to provide the same familiar support worker, particularly for regular visits.\n\nWe believe consistency matters. Seeing the same friendly face helps trust to grow and makes support feel more personal, comfortable and reassuring.",
  },
  {
    question: "What are your office hours?",
    answer: `We are available Monday to Sunday, from 10am to 9pm.\n\nYou can email ${SITE_EMAIL} or call ${SITE_PHONE_DISPLAY}. If we are unable to answer immediately, please leave a message and we will get back to you as soon as possible.`,
  },
  {
    question: "How do I book or ask a question?",
    answer: `Ready to arrange support? Please use Book Now.\n\nStill thinking things through or not sure what you need? Please choose Free Consultation, and we will be happy to talk with you before anything is arranged.\n\nYou can also email ${SITE_EMAIL} or call ${SITE_PHONE_DISPLAY}. We are available Monday to Sunday, 10am to 9pm.`,
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "Every enquiry is reviewed personally.\n\nA member of our team will contact you within 24 to 48 hours to understand your needs, answer your questions and explain the next steps.\n\nThere is no pressure to proceed. The first conversation is simply an opportunity to understand what kind of support may be helpful.",
  },
  {
    question: "Can I change or cancel a visit?",
    answer:
      "Yes. We understand that plans and circumstances can change.\n\nVisit times are agreed in advance, but if you need to amend or cancel a visit, please let us know as early as possible. This allows us to update the support worker’s schedule and make any necessary arrangements.",
  },
  {
    question: "Can family members be involved in arranging support?",
    answer:
      "Yes. Many enquiries come from family members who are arranging support for a parent, relative or loved one.\n\nWe are happy to speak with family members, provided the person receiving support is comfortable with this and appropriate consent is in place. Our aim is to keep communication clear, respectful and helpful for everyone involved.",
  },
  {
    question: "Do you provide support for appointments?",
    answer:
      "Yes. We can provide friendly company and practical support for GP, hospital, dental and other appointments.\n\nThis may include accompanying the person to and from the appointment, helping them feel reassured during the outing, and making the day feel less stressful.\n\nWe do not provide medical advice, clinical care or medication management.",
  },
  {
    question: "Do you offer shopping and errand support?",
    answer:
      "Yes. We can help with everyday errands such as shopping, collecting prescriptions, posting letters, or accompanying someone on a short local trip.\n\nThis support can be arranged as a one-off visit or as part of a regular weekly routine.",
  },
  {
    question: "Do you provide live-in support?",
    answer:
      "Yes, live-in support may be available by arrangement.\n\nOur live-in support is non-regulated and does not include personal care, medication administration, nursing or medical procedures. It is intended for companionship, reassurance and practical everyday support at home.\n\nThe exact arrangement and cost will be discussed and confirmed clearly in writing.",
  },
  {
    question: "What if I am not sure whether your service is right for me?",
    answer:
      "Please get in touch. We will be happy to listen, ask a few simple questions and help you understand whether our service is suitable.\n\nIf your needs fall outside our non-regulated support, we will tell you honestly and, where possible, point you towards a more appropriate service.",
  },
];

/** Homepage preview — short set only (full set is on /faq) */
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
