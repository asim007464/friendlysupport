import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFA]">
      <Header />

      <main>
        <section className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading mb-8 text-4xl font-bold text-[#1a3d3d]">
              Privacy Policy
            </h1>
            <p className="mb-8 text-[15px] text-[#4a5568]">
              Last updated: {new Date().toLocaleDateString("en-GB")}
            </p>
            <div className="prose prose-[#4a5568] space-y-6 text-[15px] leading-relaxed">
              <p>
                Friendly Support Limited is committed to protecting your privacy. This policy
                explains how we collect, use and store your personal information when you contact
                us or use our services.
              </p>
              <h2 className="font-heading mt-12 text-xl font-bold text-[#1a3d3d]">
                Information we collect
              </h2>
              <p>
                When you fill in our contact or booking form, we collect your name, phone number,
                email address and the details you provide about the support you are looking for.
                We use this information solely to respond to your enquiry and, if you choose to
                proceed, to arrange and deliver our home support services.
              </p>
              <h2 className="font-heading mt-12 text-xl font-bold text-[#1a3d3d]">
                How we use your information
              </h2>
              <p>
                We use your details to reply to your enquiry, discuss your needs, arrange visits and
                keep in touch about your care. We do not share your information with third parties
                for marketing purposes.
              </p>
              <h2 className="font-heading mt-12 text-xl font-bold text-[#1a3d3d]">
                Your rights
              </h2>
              <p>
                You have the right to ask what information we hold about you, to correct it, or to
                request that we delete it. Please contact us using the details on our Contact page.
              </p>
              <p className="mt-12">
                If you have any questions about this privacy policy, please{" "}
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
