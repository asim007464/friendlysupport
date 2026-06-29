import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_EMAIL, SITE_EMERGENCY, SITE_HOURS } from "@/data/siteContact";

export const metadata: Metadata = {
  title: "Safeguarding | Friendly Support Limited",
  description: "Safeguarding information for clients and families using Friendly Support Limited.",
};

export default function SafeguardingPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFA]">
      <Header />
      <main>
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading mb-8 text-4xl font-bold text-[#1a3d3d]">Safeguarding</h1>
            <div className="space-y-6 text-[15px] leading-relaxed text-[#4a5568]">
              <p>
                Everyone has the right to feel safe at home. Our support workers are trained to treat
                people with dignity and to raise concerns if they see something that worries them.
              </p>
              <div className="rounded-xl border border-[#fde68a] bg-[#fffbeb] p-5">
                <p className="font-semibold text-[#92400e]">{SITE_EMERGENCY}</p>
              </div>
              <h2 className="font-heading pt-4 text-xl font-bold text-[#1a3d3d]">Report a concern to us</h2>
              <p>
                Contact{" "}
                <a href={`mailto:${SITE_EMAIL}`} className="font-semibold text-[#1F7A7A] hover:underline">
                  {SITE_EMAIL}
                </a>{" "}
                or use our{" "}
                <Link href="/contact" className="font-semibold text-[#1F7A7A] hover:underline">
                  contact form
                </Link>
                . We treat safeguarding reports confidentially and respond urgently ({SITE_HOURS}).
              </p>
              <h2 className="font-heading pt-4 text-xl font-bold text-[#1a3d3d]">What we do not provide</h2>
              <p>
                We provide non-regulated support only, not personal care, medication administration, or
                nursing. If regulated care is needed, we will help you find appropriate services.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
