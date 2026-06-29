import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_EMAIL, SITE_HOURS } from "@/data/siteContact";

export const metadata: Metadata = {
  title: "Accessibility | Friendly Support Limited",
  description: "Our commitment to an accessible website and how to report accessibility issues.",
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFA]">
      <Header />
      <main>
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading mb-8 text-4xl font-bold text-[#1a3d3d]">Accessibility statement</h1>
            <div className="space-y-6 text-[15px] leading-relaxed text-[#4a5568]">
              <p>
                Friendly Support Limited is committed to making our website accessible to as many people
                as possible, including older adults, people with visual impairments, and those using
                assistive technology.
              </p>
              <h2 className="font-heading pt-4 text-xl font-bold text-[#1a3d3d]">What we aim for</h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>Clear, plain English and readable font sizes</li>
                <li>Sufficient colour contrast on text and buttons</li>
                <li>Keyboard focus styles on interactive elements</li>
                <li>Descriptive labels on forms and navigation</li>
                <li>Mobile-friendly layout on phones and tablets</li>
              </ul>
              <h2 className="font-heading pt-4 text-xl font-bold text-[#1a3d3d]">Known limitations</h2>
              <p>
                We are continually improving the site. Some third-party content (such as stock images)
                may not fully meet every accessibility guideline. If something is difficult to use,
                please tell us.
              </p>
              <h2 className="font-heading pt-4 text-xl font-bold text-[#1a3d3d]">Report a problem</h2>
              <p>
                Email{" "}
                <a href={`mailto:${SITE_EMAIL}`} className="font-semibold text-[#1F7A7A] hover:underline">
                  {SITE_EMAIL}
                </a>{" "}
                with the page address and what you found difficult. We will try to fix it promptly.
              </p>
              <p>
                You can also{" "}
                <Link href="/contact" className="font-semibold text-[#1F7A7A] hover:underline">
                  contact us by phone
                </Link>{" "}
                if you prefer not to use the website. We are available {SITE_HOURS}.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
