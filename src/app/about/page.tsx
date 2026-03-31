import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const valueIconAccents = [
  "bg-[#fef2f2] text-[#dc2626]",
  "bg-[#1F7A7A]/15 text-[#1F7A7A]",
  "bg-[#7FBF7F]/20 text-[#2d7a2d]",
  "bg-[#6BAED6]/15 text-[#2a7a9e]",
];

const values = [
  {
    title: "Kindness",
    description: "Turning up as we would for our own family.",
  },
  {
    title: "Honesty",
    description: "Being upfront about what we can and can't do.",
  },
  {
    title: "Reliability",
    description: "On time, as agreed, every visit.",
  },
  {
    title: "Respect",
    description: "Working with you, not over you.",
  },
];

const teamPoints = [
  "Properly interviewed and background-checked",
  "Given training in communication, dignity and supporting people who may be frail, anxious or forgetful",
  "Given clear guidance for each visit and regular check-ins",
  "Wherever possible, we match you with the same familiar faces so trust can build over time",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFA]">
      <Header />

      <main>
        <section className="relative py-16 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#1F7A7A]">
              Our story
            </p>
            <h1 className="font-heading mb-10 text-4xl font-bold leading-tight tracking-tight text-[#1a3d3d] sm:mb-12 sm:text-5xl lg:text-6xl">
              A bit about us
            </h1>

            <h2 className="font-heading mb-6 text-2xl font-bold text-[#1a3d3d] sm:text-3xl">
              Who we are
            </h2>
            <div className="mb-8 space-y-6 text-[15px] leading-relaxed text-[#4a5568]">
              <p>
                Friendly Support Limited is a small, local service for people in Barnet, Brent, Harrow
                and Ealing who want to stay in their own homes but would value a bit of extra help and
                company. We keep things simple, personal and flexible – no call centres, no rushed
                15‑minute visits.
              </p>
              <p>
                Friendly Support Limited was started by someone who has spent many years working in the
                NHS with adults and older people living with long‑term health conditions. That
                experience means we understand how health problems can affect everyday life, and how
                important it is to feel listened to and treated with respect.
              </p>
              <p>
                Through Friendly Support Limited we are <strong>not</strong> offering medical care or
                medical advice. We don&apos;t diagnose, prescribe or provide treatments, and we&apos;re
                not acting in the capacity of a doctor or specialist. Our role here is purely to offer
                practical and social support alongside your usual NHS and social care services.
              </p>
            </div>

            <h2 className="font-heading mb-6 mt-16 text-2xl font-bold text-[#1a3d3d] sm:text-3xl">
              Our team
            </h2>
            <p className="mb-6 text-[15px] leading-relaxed text-[#4a5568]">
              We work with a small group of self‑employed home support workers (HCAs) who are:
            </p>
            <ul className="mb-16 space-y-4">
              {teamPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1F7A7A]" />
                  <span className="text-[15px] text-[#4a5568]">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mb-8">
              <span className="mb-3 inline-block h-1 w-16 rounded-full bg-[#1F7A7A]" />
              <h2 className="font-heading text-2xl font-bold text-[#1a3d3d] sm:text-3xl">
                Our values
              </h2>
              <p className="mt-2 text-[16px] leading-relaxed text-[#4a5568]">
                What guides us in every visit.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => {
                const accent = valueIconAccents[index];
                return (
                  <div
                    key={index}
                    className="group rounded-2xl border border-[#e8ecec] bg-white p-6 shadow-[0_1px_3px_rgba(26,61,61,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1F7A7A]/30 hover:shadow-[0_12px_40px_rgba(26,61,61,0.15)]"
                  >
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${accent}`}>
                      {index === 0 && (
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {index === 3 && (
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      )}
                    </div>
                    <h3 className="font-heading mb-2 text-lg font-bold text-[#1a3d3d]">
                      {value.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[#4a5568]">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-24 sm:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1F7A7A] via-[#1a6565] to-[#1F7A7A]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-heading mb-6 text-3xl font-bold text-white sm:text-4xl">
              Ready to talk?
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-white/90">
              Use our simple form to ask a question, talk about support at home, or book a first
              visit.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-[#1F7A7A] shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/95 hover:shadow-2xl"
            >
              Book now
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
