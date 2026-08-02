import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Friendly Support Limited",
  description:
    "Kind, practical support for everyday life at home. Learn about Friendly Support Limited, our purpose, team, values and non-regulated home support across London.",
};

const valueIconAccents = [
  "bg-[#fef2f2] text-[#dc2626]",
  "bg-[#1F7A7A]/15 text-[#1F7A7A]",
  "bg-[#7FBF7F]/20 text-[#2d7a2d]",
  "bg-[#6BAED6]/15 text-[#2a7a9e]",
];

const values = [
  {
    title: "Kindness",
    description:
      "We treat every person with warmth, patience and compassion. We aim to support people as we would want our own family members to be supported.",
  },
  {
    title: "Honesty",
    description:
      "We are clear about what we can and cannot provide. If your needs fall outside our non-regulated support service, we will say so and, where possible, point you in the right direction.",
  },
  {
    title: "Reliability",
    description:
      "We understand how important dependable support is. We aim to arrive on time, keep our promises and provide a consistent, reassuring service.",
  },
  {
    title: "Respect",
    description:
      "We work with people, not over them. We respect personal routines, preferences, privacy and independence.",
  },
];

const teamPoints = [
  "Properly interviewed and DBS-checked",
  "Insured and appropriately trained",
  "Selected for their patience, warmth and professionalism",
  "Committed to treating every person with dignity and respect",
  "Matched, wherever possible, with the same clients so trust can grow over time",
];

const canHelpWith = [
  "Companionship and social visits",
  "Sitting service for family carers",
  "Support getting to appointments",
  "Shopping and errands",
  "Light domestic help",
  "Simple meal preparation",
  "Laundry, tidying and washing up",
  "Live-in home support by arrangement, without personal care",
];

const doNotProvide = [
  "Washing, bathing or dressing",
  "Toileting or continence care",
  "Medication administration",
  "Wound care or dressings",
  "Nursing or medical procedures",
  "Regulated personal care services",
];

const sectionTitle =
  "font-heading mb-4 text-2xl font-bold text-[#1a3d3d] sm:text-3xl";
const bodyText = "text-[15px] leading-relaxed text-[#4a5568] sm:text-[16px]";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFA]">
      <Header />

      <main>
        <section className="relative py-16 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading mb-3 text-4xl font-bold leading-tight tracking-tight text-[#1a3d3d] sm:text-5xl">
              About Friendly Support Limited
            </h1>
            <p className="font-heading mb-8 text-xl font-semibold text-[#1F7A7A] sm:mb-10 sm:text-2xl">
              Kind, practical support for everyday life at home
            </p>

            <div className="mb-16 space-y-5">
              <p className={bodyText}>
                Friendly Support Limited was created to offer adults across
                London the kind of everyday help that can make life feel easier,
                calmer and less lonely.
              </p>
              <p className={bodyText}>
                We provide non-regulated support, including companionship,
                errands, light domestic assistance, appointment support and
                live-in support by arrangement. Our role is to offer a friendly
                presence, practical help and reliable company — whether that
                means sharing conversation over a cup of tea, helping with
                shopping, accompanying someone to an appointment, or simply
                making the day feel more manageable.
              </p>
              <p className={bodyText}>
                We understand that asking for support can feel like a big step.
                That is why we keep our service personal, respectful and
                straightforward. We listen carefully, agree everything clearly
                in writing, and aim to provide support that feels familiar,
                reassuring and dignified.
              </p>
            </div>

            <div className="mb-16">
              <span className="mb-3 inline-block h-1 w-16 rounded-full bg-[#1F7A7A]" />
              <h2 className={sectionTitle}>Our Purpose</h2>
              <div className="space-y-5">
                <p className={bodyText}>
                  Our purpose is simple: to help people feel more comfortable,
                  connected and supported at home.
                </p>
                <p className={bodyText}>
                  Many families want to do more for their loved ones, but work,
                  distance and daily responsibilities can make that difficult.
                  Friendly Support Limited is here to provide the extra time,
                  presence and practical help that families often wish they
                  could give themselves.
                </p>
                <p className={bodyText}>
                  We are not a personal care or nursing provider. Instead, we
                  focus on the everyday support that helps people remain
                  socially connected, practically supported and less alone.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <span className="mb-3 inline-block h-1 w-16 rounded-full bg-[#1F7A7A]" />
              <h2 className={sectionTitle}>Our Team</h2>
              <p className={`mb-6 ${bodyText}`}>
                We work with a small group of carefully selected support workers
                who are chosen for their kindness, reliability and good
                judgement.
              </p>
              <p className={`mb-4 font-semibold text-[#1a3d3d]`}>
                Our support workers are:
              </p>
              <ul className="mb-6 space-y-3">
                {teamPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1F7A7A]" />
                    <span className={bodyText}>{point}</span>
                  </li>
                ))}
              </ul>
              <p className={bodyText}>
                We believe that good support is not only about completing tasks.
                It is about turning up on time, listening properly, noticing the
                small things, and making people feel valued.
              </p>
            </div>

            <div className="mb-16">
              <span className="mb-3 inline-block h-1 w-16 rounded-full bg-[#1F7A7A]" />
              <h2 className={sectionTitle}>Our Approach</h2>
              <div className="space-y-5">
                <p className={bodyText}>
                  We take time to understand what each person needs and what
                  would make the greatest difference to their day.
                </p>
                <p className={bodyText}>
                  Some clients may want regular companionship. Others may need
                  help getting to appointments, completing errands, doing light
                  household tasks or feeling more confident at home. Families
                  may simply want the reassurance that someone kind and
                  dependable is visiting their loved one.
                </p>
                <p className={bodyText}>
                  Before support begins, we agree the type of support, visit
                  times and costs clearly in writing. There are no hidden
                  charges and no pressure. We want every client and family to
                  feel informed, comfortable and confident before making a
                  decision.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <span className="mb-3 inline-block h-1 w-16 rounded-full bg-[#1F7A7A]" />
              <h2 className={sectionTitle}>Our Values</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {values.map((value, index) => {
                  const accent = valueIconAccents[index];
                  return (
                    <div
                      key={value.title}
                      className="group rounded-2xl border border-[#e8ecec] bg-white p-6 shadow-[0_1px_3px_rgba(26,61,61,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1F7A7A]/30 hover:shadow-[0_12px_40px_rgba(26,61,61,0.15)]"
                    >
                      <div
                        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${accent}`}
                      >
                        {index === 0 && (
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                        )}
                        {index === 1 && (
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                            />
                          </svg>
                        )}
                        {index === 2 && (
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        )}
                        {index === 3 && (
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        )}
                      </div>
                      <h3 className="font-heading mb-2 text-lg font-bold text-[#1a3d3d]">
                        {value.title}
                      </h3>
                      <p className="text-[15px] leading-relaxed text-[#4a5568]">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mb-16">
              <span className="mb-3 inline-block h-1 w-16 rounded-full bg-[#1F7A7A]" />
              <h2 className={sectionTitle}>What We Can Help With</h2>
              <p className={`mb-4 ${bodyText}`}>
                Friendly Support Limited can assist with:
              </p>
              <ul className="mb-5 space-y-3">
                {canHelpWith.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1F7A7A]" />
                    <span className={bodyText}>{item}</span>
                  </li>
                ))}
              </ul>
              <p className={bodyText}>
                Our visits are unhurried, with a minimum booking of two hours.
              </p>
            </div>

            <div className="mb-16">
              <span className="mb-3 inline-block h-1 w-16 rounded-full bg-[#1F7A7A]" />
              <h2 className={sectionTitle}>What We Do Not Provide</h2>
              <p className={`mb-4 ${bodyText}`}>
                Friendly Support Limited provides non-regulated support only.
              </p>
              <p className={`mb-4 font-semibold text-[#1a3d3d]`}>
                We do not provide:
              </p>
              <ul className="mb-5 space-y-3">
                {doNotProvide.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#94a3b8]" />
                    <span className={bodyText}>{item}</span>
                  </li>
                ))}
              </ul>
              <p className={bodyText}>
                If you are unsure whether your needs fall within our service,
                please{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-[#1F7A7A] hover:underline"
                >
                  get in touch
                </Link>
                . We will be happy to talk things through with you and, if we
                are not the right service, help guide you towards a more
                suitable option.
              </p>
            </div>

            <div className="mb-16">
              <span className="mb-3 inline-block h-1 w-16 rounded-full bg-[#1F7A7A]" />
              <h2 className={sectionTitle}>Why Families Choose Us</h2>
              <div className="space-y-5">
                <p className={bodyText}>
                  Families choose Friendly Support Limited because we offer
                  support that is personal, practical and reassuring.
                </p>
                <p className={bodyText}>
                  We are here for people who may not need medical care, but who
                  would benefit from companionship, encouragement and reliable
                  help with everyday life. Our service is designed to give
                  clients greater comfort at home and families greater peace of
                  mind.
                </p>
                <p className={bodyText}>
                  We believe that small acts of support can make a very real
                  difference: a friendly conversation, a steady arm on the way
                  to an appointment, help with errands, or simply knowing that
                  someone kind is there.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#e8ecec] bg-white p-8 shadow-[0_2px_12px_rgba(26,61,61,0.08)] sm:p-10">
              <h2 className={sectionTitle}>Ready to Talk?</h2>
              <p className={`mb-4 ${bodyText}`}>
                If you are looking for support for yourself or someone you care
                about, we would be pleased to hear from you.
              </p>
              <p className={`mb-8 ${bodyText}`}>
                You can book a visit, request a free consultation, or simply ask
                a question. We will listen carefully, explain your options
                clearly, and help you decide the next step without pressure.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/book"
                  className="rounded-xl bg-[#1F7A7A] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#1a6565]"
                >
                  Book Now
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl border-2 border-[#1F7A7A] px-6 py-3.5 text-[15px] font-semibold text-[#1F7A7A] transition-colors hover:bg-[#1F7A7A]/5"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
