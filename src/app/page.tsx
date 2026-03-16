import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChatIcon,
  ShoppingIcon,
  HomeIcon,
  MoonIcon,
  ClockIcon,
  HeartIcon,
} from "@/components/ServiceIcons";

const keyPoints = [
  {
    title: "Companionship and social visits",
    description: "A cuppa, a chat, a walk – whatever makes the day feel brighter.",
    icon: ChatIcon,
  },
  {
    title: "Shopping, errands and appointments",
    description: "Help with the weekly shop, prescriptions and getting to appointments.",
    icon: ShoppingIcon,
  },
  {
    title: "Light domestic support",
    description: "Tidying, laundry, washing up and simple meal preparation at home.",
    icon: HomeIcon,
  },
  {
    title: "Live‑in home support",
    description: "Short or long-term – someone in the house day and night for peace of mind.",
    icon: MoonIcon,
  },
  {
    title: "Visits from 2 hours upwards",
    description: "Unhurried visits with time to get things done and have a proper chat.",
    icon: ClockIcon,
  },
  {
    title: "NHS experience at the heart",
    description: "Founded by someone with many years working with adults and older people.",
    icon: HeartIcon,
  },
];

export default function Home() {

  return (
    <div className="min-h-screen bg-[#F5F7F7]">
      <Header />

      <main>
        {/* Hero Section - care image, dark overlay, light text */}
        <section className="relative min-h-[60vh] overflow-hidden">
          {/* Care-related background image - elderly with caregiver */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1773227060446-93239a553f1f?w=1200&q=80')`,
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#1a3d3d]/75 backdrop-blur-[1px]" />
          <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
            <div className="text-center">
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-[#7FBF7F]">
                Barnet & Enfield
              </p>
              <h1 className="font-heading mb-8 text-4xl font-bold leading-[1.2] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Friendly Support Limited
              </h1>
              <p className="mb-4 text-xl font-medium text-[#6BAED6] sm:text-2xl">
                Home Help in Barnet & Enfield
              </p>
              <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-white/95">
                Friendly faces, practical help and time to talk – so you or your
                loved one can stay happily at home.
              </p>
              <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-white/85">
                At Friendly Support Limited, we give adults in Barnet and Enfield
                the kind of everyday support most families wish they had more
                time for. We&apos;re here for companionship, errands, light help
                around the house – and, when needed, live‑in home support – so
                life feels easier and a lot less lonely.
              </p>
              <div className="mb-12 flex flex-wrap justify-center gap-6 text-sm text-white/90">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7FBF7F]" />
                  From 2 hours per visit
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7FBF7F]" />
                  NHS experience
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7FBF7F]" />
                  Local to Barnet & Enfield
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-[#1F7A7A] transition-colors hover:bg-white/95"
                >
                  Get in touch
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center rounded-lg border-2 border-white px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Our services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How We Can Help */}
        <section className="relative bg-[#F5F7F7] py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-20 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#1F7A7A]">
                How we can help
              </p>
              <h2 className="font-heading mb-5 text-3xl font-bold text-[#1a3d3d] sm:text-4xl lg:text-5xl">
                Support That Makes a Difference
              </h2>
              <div className="mx-auto h-1 w-16 rounded-full bg-[#7FBF7F]" />
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#4a5568]">
                Practical help and warm companionship – so life at home feels easier and less lonely.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {keyPoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <div
                    key={index}
                    className="group relative rounded-2xl bg-[#1F7A7A] p-8 shadow-sm transition-all duration-300 ease-out hover:bg-white hover:shadow-xl"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/15 transition-all duration-300 group-hover:bg-[#1F7A7A]/10 group-hover:rounded-2xl text-white group-hover:text-[#1F7A7A]">
                      <IconComponent className="w-7 h-7" color="currentColor" />
                    </div>
                    <h3 className="mb-3 text-lg font-semibold text-white transition-colors group-hover:text-[#1a3d3d]">
                      {point.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-white/90 transition-colors group-hover:text-[#5a6575]">
                      {point.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative overflow-hidden py-24 sm:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1F7A7A] via-[#1a6565] to-[#1F7A7A]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-heading mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Not sure where to start?
            </h2>
            <p className="mb-10 text-xl leading-relaxed text-white/90">
              Use our simple form to ask a question, talk about support at home,
              or book a first visit.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-[#1F7A7A] shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/95 hover:shadow-2xl"
            >
              Get in touch
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
