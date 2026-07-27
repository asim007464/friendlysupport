import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCards from "@/components/services/ServiceCards";

const whatWeDontDo = [
  {
    title: "Personal Care",
    text: "This includes washing, bathing, dressing, toileting or continence support.",
  },
  {
    title: "Medication or Dressings",
    text: "We do not administer medication, apply dressings, or provide wound care.",
  },
  {
    title: "Nursing or Medical Procedures",
    text: "We do not provide nursing, clinical care, medical treatment or regulated healthcare services.",
  },
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
                Our Support
              </p>
              <h1 className="font-heading mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                What We Can Help With
              </h1>
              <p className="mx-auto mb-5 max-w-2xl text-lg leading-relaxed text-white/90">
                Warm, practical and non-regulated support at home and in the
                community, helping everyday life feel easier, calmer and less
                lonely.
              </p>
              <p className="mx-auto mb-5 max-w-2xl text-[16px] leading-relaxed text-white/85">
                We provide friendly support for adults across London, including
                companionship, errands, appointment support, light domestic help
                and optional live-in support by arrangement. Our visits are
                unhurried, with a minimum booking of two hours.
              </p>
              <p className="mx-auto max-w-2xl text-[16px] leading-relaxed text-white/85">
                Please note that we do not provide personal care, medication
                administration, nursing or medical procedures. Full details and
                guide prices are available on each service page, and all costs
                are confirmed clearly in writing before you agree to proceed.
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
                Our Services
              </h2>
              <p className="mt-2 max-w-2xl text-[16px] leading-relaxed text-[#4a5568]">
                Choose the support that best suits you or your loved one. Each
                service can be arranged on its own or combined with others,
                depending on your needs.
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
                What We Do Not Provide
              </h2>
              <p className="mt-2 text-[16px] leading-relaxed text-[#4a5568]">
                Friendly Support Limited provides non-regulated support only. To
                keep our service safe, clear and properly defined, we do not
                offer:
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {whatWeDontDo.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border-2 border-[#e8ecec] bg-white p-6 shadow-[0_2px_8px_rgba(26,61,61,0.1)] transition-all hover:border-[#cbd5e1] hover:shadow-[0_4px_16px_rgba(26,61,61,0.12)]"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fef2f2] text-[#b91c1c]">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                    <h3 className="font-heading text-lg font-bold text-[#1a3d3d]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[15px] leading-relaxed text-[#374151]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-[#4a5568]">
              Not sure whether your needs fall within our service? Please{" "}
              <Link
                href="/contact"
                className="font-semibold text-[#1F7A7A] hover:underline"
              >
                get in touch
              </Link>
              . We will be happy to talk things through and, where necessary,
              point you towards a more appropriate service.
            </p>
          </div>
        </section>

        <section className="relative overflow-hidden py-14 sm:py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1F7A7A] via-[#1a6565] to-[#1F7A7A]" />
          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-heading mb-4 text-3xl font-bold text-white sm:text-4xl">
              Ready to Talk About Support?
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-white/90">
              Tell us what you need, or what you are concerned about, and we
              will help you decide the next step with care, clarity and no
              pressure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-[#1F7A7A] shadow-xl transition-all hover:-translate-y-0.5 hover:bg-white/95"
              >
                Book Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl border-2 border-white px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
