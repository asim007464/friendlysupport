import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCards from "@/components/services/ServiceCards";

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
                We offer non-regulated home support: practical and social help at home, not personal
                care or nursing. Visits are unhurried (minimum 2 hours). Click a service for full
                details and a price guide.
              </p>
            </div>
          </div>
        </section>

        <section className="relative py-14 sm:py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFA] via-white to-[#F8FAFA]" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="mb-3 inline-block h-1 w-16 rounded-full bg-[#1F7A7A]" />
              <h2 className="font-heading text-2xl font-bold text-[#1a3d3d] sm:text-3xl">
                Our services
              </h2>
              <p className="mt-2 max-w-2xl text-[16px] leading-relaxed text-[#4a5568]">
                Click any service card to open its full details page. We confirm exact costs in writing before
                you agree.
              </p>
            </div>
            <ServiceCards />
          </div>
        </section>

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

        <section className="relative overflow-hidden py-14 sm:py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1F7A7A] via-[#1a6565] to-[#1F7A7A]" />
          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-heading mb-4 text-3xl font-bold text-white sm:text-4xl">
              Ready to talk about support?
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-white/90">
              Book a visit or ask a question. We&apos;re happy to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-[#1F7A7A] shadow-xl transition-all hover:-translate-y-0.5 hover:bg-white/95"
              >
                Book now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl border-2 border-white px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
              >
                Free consultation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
