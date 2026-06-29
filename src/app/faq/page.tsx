import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import { FAQ_ITEMS } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ | Friendly Support Limited",
  description: "Answers about our home support services, pricing, areas, and how to book across London.",
};

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFA]">
      <Header />
      <main>
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading mb-4 text-4xl font-bold text-[#1a3d3d]">Frequently asked questions</h1>
            <p className="mb-10 text-[16px] leading-relaxed text-[#4a5568]">
              Plain answers about our non-regulated home support. Still unsure?{" "}
              <Link href="/contact" className="font-semibold text-[#1F7A7A] hover:underline">
                Request a free consultation
              </Link>
              .
            </p>
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
