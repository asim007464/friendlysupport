import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_EMAIL } from "@/data/siteContact";

export const metadata: Metadata = {
  title: "Complaints & feedback | Friendly Support Limited",
  description: "How to raise a concern or complaint about Friendly Support Limited home support services.",
};

export default function ComplaintsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFA]">
      <Header />
      <main>
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading mb-8 text-4xl font-bold text-[#1a3d3d]">Complaints &amp; feedback</h1>
            <div className="space-y-6 text-[15px] leading-relaxed text-[#4a5568]">
              <p>
                We want every client and family to feel listened to. If something is not right, please
                tell us. We take concerns seriously and aim to put things right quickly.
              </p>
              <h2 className="font-heading pt-4 text-xl font-bold text-[#1a3d3d]">How to contact us</h2>
              <p>
                Email{" "}
                <a href={`mailto:${SITE_EMAIL}`} className="font-semibold text-[#1F7A7A] hover:underline">
                  {SITE_EMAIL}
                </a>{" "}
                or use our{" "}
                <Link href="/contact" className="font-semibold text-[#1F7A7A] hover:underline">
                  contact form
                </Link>
                . Please include your name, the person receiving support (if different), and what
                happened.
              </p>
              <h2 className="font-heading pt-4 text-xl font-bold text-[#1a3d3d]">What happens next</h2>
              <ol className="list-decimal space-y-2 pl-5">
                <li>We acknowledge your message within 2 working days.</li>
                <li>A senior member of our team reviews the concern and may call you to understand more.</li>
                <li>We agree actions and keep you updated until the matter is resolved.</li>
              </ol>
              <h2 className="font-heading pt-4 text-xl font-bold text-[#1a3d3d]">If you are not satisfied</h2>
              <p>
                If you remain unhappy after our response, we will explain any further options available
                to you. For safeguarding concerns, see our{" "}
                <Link href="/safeguarding" className="font-semibold text-[#1F7A7A] hover:underline">
                  safeguarding page
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
