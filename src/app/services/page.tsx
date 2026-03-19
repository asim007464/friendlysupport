import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChatIcon,
  ShoppingIcon,
  HomeIcon,
  MoonIcon,
  CalendarIcon,
  UsersIcon,
} from "@/components/ServiceIcons";

const iconAccents = [
  "bg-[#1F7A7A]/15 text-[#1F7A7A]",
  "bg-[#6BAED6]/15 text-[#2a7a9e]",
  "bg-[#7FBF7F]/20 text-[#2d7a2d]",
  "bg-[#1F7A7A]/15 text-[#1F7A7A]",
  "bg-[#6BAED6]/15 text-[#2a7a9e]",
];

const regularServices = [
  {
    title: "Companionship and social visits",
    description:
      "Friendly visits at home or a short trip out – a cuppa, a chat, a walk, a game or whatever makes the day feel brighter.",
    icon: ChatIcon,
  },
  {
    title: "Sitting service for family carers",
    description:
      "We stay with your loved one so you can have a break, run errands or simply rest, knowing someone reliable is there.",
    icon: UsersIcon,
  },
  {
    title: "Support getting to appointments",
    description:
      "Help with getting to and from GP, hospital or other appointments, including company in the waiting room if needed.",
    icon: CalendarIcon,
  },
  {
    title: "Shopping and errands",
    description:
      "A hand with the weekly shop, collecting prescriptions, posting parcels and other everyday jobs that are getting harder to manage alone.",
    icon: ShoppingIcon,
  },
  {
    title: "Light domestic support",
    description:
      "Gentle help at home – tidying, laundry, washing up and simple meal preparation – to keep things comfortable and safe.",
    icon: HomeIcon,
  },
];

const whatWeDontDo = [
  "Personal care such as washing, dressing or continence support",
  "Giving medication or doing dressings",
  "Any nursing or medical procedures",
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFA]">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1a3d3d] via-[#1F7A7A] to-[#1a6565]">
          <div className="absolute inset-0 bg-[#1a3d3d]/60" />
          <div className="relative mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="text-center">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#7FBF7F]">
                Our support
              </p>
              <h1 className="font-heading mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                What we can help with
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/90">
                We offer non‑regulated home support. That means we help with the practical and
                social side of life, but we don&apos;t provide personal care or any nursing procedures.
                Our visits are unhurried (minimum 2 hours), and we can also arrange live‑in home
                support for people who feel safer with someone in the house.
              </p>
            </div>
          </div>
        </section>

        {/* Regular visits */}
        <section className="relative py-14 sm:py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFA] via-white to-[#F8FAFA]" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="mb-3 inline-block h-1 w-16 rounded-full bg-[#1F7A7A]" />
              <h2 className="font-heading text-2xl font-bold text-[#1a3d3d] sm:text-3xl">
                Regular visits
              </h2>
              <p className="mt-2 text-[16px] leading-relaxed text-[#4a5568]">
                Unhurried visits, minimum 2 hours – we take time to get to know you.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {regularServices.map((service, index) => {
                const IconComponent = service.icon;
                const accent = iconAccents[index % iconAccents.length];
                return (
                  <div
                    key={index}
                    className="group rounded-2xl border border-[#e8ecec] bg-white p-6 shadow-[0_1px_3px_rgba(26,61,61,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1F7A7A]/30 hover:shadow-[0_12px_40px_rgba(26,61,61,0.15)]"
                  >
                    <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300 group-hover:scale-105 ${accent}`}>
                      <IconComponent className="h-7 w-7" color="currentColor" />
                    </div>
                    <h3 className="font-heading mb-2 text-lg font-bold text-[#1a3d3d]">
                      {service.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[#4a5568]">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Live-in home support */}
        <section className="relative overflow-hidden py-14 sm:py-20">
          <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-[#1F7A7A]/8 blur-3xl" />
          <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-[#7FBF7F]/10 blur-3xl" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-[#e8ecec] bg-white p-6 shadow-[0_1px_3px_rgba(26,61,61,0.08)] sm:p-8">
            <div className="mb-6 flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1F7A7A]/20 to-[#1F7A7A]/10 text-[#1F7A7A]">
                <MoonIcon className="h-8 w-8" color="currentColor" />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold text-[#1a3d3d] sm:text-3xl">
                  Live‑in home support (non‑personal care)
                </h2>
                <p className="mt-1 text-[15px] font-semibold text-[#1F7A7A]">
                  Short‑term or long‑term
                </p>
              </div>
            </div>
            <div className="space-y-4 text-[15px] leading-relaxed text-[#4a5568]">
              <p>
                For some people, knowing there is someone in the house day and night makes all the
                difference. We can arrange short‑term or longer‑term live‑in home support, where a
                carefully chosen support worker stays in the home to offer company and practical help.
              </p>
              <p>
                Live‑in support can include companionship, light housework, simple meal preparation,
                shopping, errands and support around appointments. It does <strong>not</strong>{" "}
                include personal care (such as washing, dressing or continence support) or any nursing
                procedures, and is therefore a non‑regulated service with no CQC involvement.
              </p>
            </div>
            <div className="mt-6 rounded-xl border border-[#1F7A7A]/20 bg-[#F8FAFA] p-5">
              <p className="font-semibold text-[#1a3d3d]">
                Price guide: Live‑in home support (no personal care) starts from around £1,150 per
                week.
              </p>
              <p className="mt-2 text-sm text-[#4a5568]">
                Covers: live‑in worker, companionship, light household help, shopping/errands,
                appointment support, matching, checks and oversight.
              </p>
            </div>
            </div>
          </div>
        </section>

        {/* What we don't do */}
        <section className="relative overflow-hidden py-14 sm:py-20">
          <div className="absolute inset-0 bg-[#F8FAFA]" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="mb-3 inline-block h-1 w-16 rounded-full bg-[#cbd5e1]" />
              <h2 className="font-heading text-2xl font-bold text-[#1a3d3d] sm:text-3xl">
                What we don&apos;t do
              </h2>
              <p className="mt-2 text-[16px] leading-relaxed text-[#4a5568]">
                We currently provide non‑regulated support only. We don&apos;t offer:
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {whatWeDontDo.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 rounded-2xl border-2 border-[#e8ecec] bg-white p-6 shadow-[0_2px_8px_rgba(26,61,61,0.1)] transition-all hover:border-[#cbd5e1] hover:shadow-[0_4px_16px_rgba(26,61,61,0.12)]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fef2f2] text-[#b91c1c]">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  <p className="text-[15px] font-medium leading-relaxed text-[#374151]">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-[#4a5568]">
              If you&apos;re not sure which side your needs fall on, we&apos;re happy to talk it
              through and point you in the right direction if we&apos;re not the right fit.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-14 sm:py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1F7A7A] via-[#1a6565] to-[#1F7A7A]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-heading mb-4 text-3xl font-bold text-white sm:text-4xl">
              Ready to talk about support?
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-white/90">
              Use our simple form to ask a question, talk about support at home, or book a first
              visit.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-[#1F7A7A] shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/95 hover:shadow-2xl"
            >
              Get in touch
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
