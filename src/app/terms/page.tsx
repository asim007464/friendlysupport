import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFA]">
      <Header />

      <main>
        <section className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading mb-8 text-4xl font-bold text-[#1a3d3d]">
              Terms of Use
            </h1>
            <p className="mb-8 text-[15px] text-[#4a5568]">
              Last updated: {new Date().toLocaleDateString("en-GB")}
            </p>
            <div className="prose prose-[#4a5568] space-y-6 text-[15px] leading-relaxed">
              <p>
                By using this website, you agree to these terms of use. Friendly Support Limited
                provides this site for information about our home support services in Barnet and
                Enfield.
              </p>
              <h2 className="font-heading mt-12 text-xl font-bold text-[#1a3d3d]">
                Use of the website
              </h2>
              <p>
                You may use this website for lawful purposes only. The content is for general
                information and does not constitute professional advice. Please contact us
                directly to discuss your specific needs.
              </p>
              <h2 className="font-heading mt-12 text-xl font-bold text-[#1a3d3d]">
                Services
              </h2>
              <p>
                Our services are subject to separate terms and conditions, which we will discuss
                with you when you enquire or book. Our standard rate is £28 per hour with a
                minimum visit of 2 hours.
              </p>
              <h2 className="font-heading mt-12 text-xl font-bold text-[#1a3d3d]">
                Contact
              </h2>
              <p>
                For any questions about these terms, please{" "}
                <Link href="/contact" className="text-[#1F7A7A] font-semibold hover:underline">
                  get in touch
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
