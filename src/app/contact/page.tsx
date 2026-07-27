"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactBar from "@/components/ContactBar";
import { SITE_EMAIL, SITE_HOURS, SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/data/siteContact";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value ?? "" }));
  };

  const canSubmit =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    formData.email.trim() &&
    formData.phone.trim() &&
    formData.message.trim();

  const inputClass =
    "w-full rounded-xl border border-[#e0e6e8] bg-white px-4 py-3.5 text-[16px] text-[#1a3d3d] transition-all focus:border-[#1F7A7A] focus:outline-none focus:ring-2 focus:ring-[#1F7A7A]/25";
  const labelClass = "mb-2 block text-[15px] font-semibold text-[#1a3d3d]";
  const cardClass =
    "rounded-2xl border border-[#e8ecec] bg-white p-6 shadow-[0_2px_12px_rgba(26,61,61,0.08)] sm:p-8";

  return (
    <div className="min-h-screen bg-[#F8FAFA]">
      <Header />

      <main>
        <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <h1 className="font-heading text-3xl font-bold text-[#1a3d3d] sm:text-4xl">
                Free Consultation
              </h1>
              <p className="mt-4 text-[16px] leading-relaxed text-[#4a5568]">
                Whether you are ready to arrange support or simply wish to ask a
                question, we would be pleased to hear from you.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-[#4a5568]">
                Tell us a little about your situation, what kind of support you
                may need, and the best way to contact you. A member of our team
                will respond personally and help you consider the next step,
                with no pressure and no obligation.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-[#4a5568]">
                You can also email us at{" "}
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="font-semibold text-[#1F7A7A] hover:underline"
                >
                  {SITE_EMAIL}
                </a>{" "}
                or call{" "}
                <a
                  href={`tel:${SITE_PHONE_TEL}`}
                  className="font-semibold text-[#1F7A7A] hover:underline"
                >
                  {SITE_PHONE_DISPLAY}
                </a>
                .
              </p>
            </div>

            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
              <aside className="w-full lg:w-[340px] lg:shrink-0">
                <div className="sticky top-24 rounded-2xl border border-[#e8ecec] bg-white p-6 shadow-sm sm:p-8">
                  <h2 className="font-heading mb-4 text-lg font-bold text-[#1a3d3d]">
                    Contact Details
                  </h2>
                  <ContactBar />
                </div>
              </aside>

              <div className="min-w-0 flex-1">
                {submitted ? (
                  <div className={cardClass}>
                    <h2 className="font-heading mb-4 text-2xl font-bold text-[#1a3d3d]">
                      Thank You — Your Message Has Been Sent
                    </h2>
                    <p className="mb-4 text-[15px] leading-relaxed text-[#4a5568]">
                      Thank you for contacting Friendly Support Limited. We have
                      received your enquiry and will respond as soon as
                      possible, usually within 24 to 48 hours, and often sooner.
                    </p>
                    <p className="mb-8 text-[15px] leading-relaxed text-[#4a5568]">
                      If your enquiry is urgent, please call{" "}
                      <a
                        href={`tel:${SITE_PHONE_TEL}`}
                        className="font-semibold text-[#1F7A7A] hover:underline"
                      >
                        {SITE_PHONE_DISPLAY}
                      </a>{" "}
                      during our office hours, {SITE_HOURS}.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            firstName: "",
                            lastName: "",
                            email: "",
                            phone: "",
                            message: "",
                          });
                        }}
                        className="rounded-xl bg-[#1F7A7A] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#1a6565]"
                      >
                        Send Another Message
                      </button>
                      <Link
                        href="/book"
                        className="inline-flex items-center rounded-xl border-2 border-[#1F7A7A] px-6 py-3 text-[15px] font-semibold text-[#1F7A7A] transition-colors hover:bg-[#1F7A7A]/5"
                      >
                        Book a Visit
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={cardClass}>
                    <h2 className="font-heading mb-3 text-xl font-bold text-[#1a3d3d] sm:text-2xl">
                      Send Us a Message
                    </h2>
                    <p className="mb-8 text-[15px] leading-relaxed text-[#4a5568]">
                      Please use the form below to ask a question or request a
                      free consultation. The more detail you can provide, the
                      easier it will be for us to understand how we may be able
                      to help.
                    </p>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="firstName" className={labelClass}>
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          autoComplete="given-name"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className={labelClass}>
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          autoComplete="family-name"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClass}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className={labelClass}>
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                      <label htmlFor="message" className={labelClass}>
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className={inputClass}
                      />
                      <p className="mt-2 text-[14px] leading-relaxed text-[#718096]">
                        In your message, please tell us what kind of support you
                        are looking for, where in London support is needed, and
                        whether this is for yourself, a relative or someone you
                        care for.
                      </p>
                    </div>

                    <p className="mt-6 text-[13px] leading-relaxed text-[#718096]">
                      By submitting this form, you agree that Friendly Support
                      Limited may contact you about your enquiry. We will use
                      your details only to respond to your message and discuss
                      the support you have requested.
                    </p>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                      <button
                        type="submit"
                        disabled={!canSubmit}
                        className={`rounded-xl px-8 py-3.5 text-[15px] font-semibold transition-all ${
                          canSubmit
                            ? "bg-[#1F7A7A] text-white shadow-lg hover:bg-[#1a6565] hover:shadow-xl"
                            : "cursor-not-allowed bg-[#e8ecec] text-[#94a3b8]"
                        }`}
                      >
                        Send My Enquiry
                      </button>
                      <Link
                        href="/book"
                        className="text-[15px] font-semibold text-[#1F7A7A] hover:underline"
                      >
                        Ready to book? Book a visit →
                      </Link>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        <section
          className="border-y border-[#fde68a] bg-[#fffbeb] py-6"
          aria-label="Important emergency notice"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading mb-2 text-base font-bold text-[#92400e]">
              Important Emergency Notice
            </h2>
            <p className="text-[14px] leading-relaxed text-[#92400e]">
              Please note: Friendly Support Limited is not an emergency service.
              If there is a medical emergency, or if someone is in immediate
              danger, please call 999 straight away.
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-[#92400e]">
              For urgent safeguarding concerns during our office hours, please
              contact us as soon as possible.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
