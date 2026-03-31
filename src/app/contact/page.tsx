"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <section className="relative pt-12 pb-24 sm:pt-16 sm:pb-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center sm:text-left">
              <h1 className="font-heading text-3xl font-bold text-[#1a3d3d] sm:text-4xl">
                Contact us
              </h1>
              <p className="mt-2 text-[16px] leading-relaxed text-[#4a5568]">
                Ask a question or leave a message — we&apos;ll reply as soon as we can. For booking
                visits and full details, use{" "}
                <Link href="/book" className="font-semibold text-[#1F7A7A] hover:underline">
                  Book now
                </Link>
                .
              </p>
            </div>

            {submitted ? (
              <div className={cardClass}>
                <h2 className="font-heading mb-4 text-2xl font-bold text-[#1a3d3d]">
                  Message sent
                </h2>
                <p className="mb-8 text-[15px] leading-relaxed text-[#4a5568]">
                  Thank you — we&apos;ll get back to you with a friendly reply.
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
                    Send another message
                  </button>
                  <Link
                    href="/book"
                    className="inline-flex items-center rounded-xl border-2 border-[#1F7A7A] px-6 py-3 text-[15px] font-semibold text-[#1F7A7A] transition-colors hover:bg-[#1F7A7A]/5"
                  >
                    Book a visit
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={cardClass}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className={labelClass}>
                      First name *
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
                      Last name *
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
                      Email *
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
                      Phone *
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
                    Your message *
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
                </div>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className={`rounded-xl px-8 py-3.5 text-[15px] font-semibold transition-all ${
                      canSubmit
                        ? "bg-[#1F7A7A] text-white shadow-lg hover:bg-[#1a6565] hover:shadow-xl"
                        : "cursor-not-allowed bg-[#e8ecec] text-[#94a3b8]"
                    }`}
                  >
                    Send message
                  </button>
                  <Link
                    href="/book"
                    className="text-[15px] font-semibold text-[#1F7A7A] hover:underline"
                  >
                    Book a visit instead →
                  </Link>
                </div>
              </form>
            )}

            <div className="mt-10 rounded-2xl border border-[#e8ecec] bg-white p-6 text-center sm:text-left">
              <p className="text-[15px] font-semibold text-[#1a3d3d]">Prefer to call or email?</p>
              <p className="mt-2 text-[15px] text-[#4a5568]">
                <a href="mailto:hello@friendlysupport.co.uk" className="font-medium text-[#1F7A7A] hover:underline">
                  hello@friendlysupport.co.uk
                </a>
                {" · "}
                <span className="text-[#1a3d3d]">020 xxxx xxxx</span>
              </p>
              <p className="mt-2 text-[14px] text-[#64748b]">
                Barnet, Brent, Harrow &amp; Ealing
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
