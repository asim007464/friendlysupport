"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const helpOptions = [
  "Friendly visits and companionship",
  "Someone to stay so a family carer can have a break",
  "Support getting to and from appointments",
  "Help with shopping and errands",
  "Light help at home (tidying, laundry, simple meals)",
  "Live‑in home support (no personal care) – short‑term or long‑term",
];

const howOftenOptions = [
  "Just a one‑off visit",
  "About once a week",
  "Several times a week",
  "I'm really not sure yet",
];

const visitLengthOptions = [
  "2 hours (minimum)",
  "3 hours",
  "4+ hours",
  "I'm not sure yet",
];

const careDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const STAGES = [
  { num: 1, title: "About you" },
  { num: 2, title: "What you'd like" },
  { num: 3, title: "Where support is needed" },
  { num: 4, title: "Kind of help" },
  { num: 5, title: "Timing" },
  { num: 6, title: "Anything else" },
  { num: 7, title: "Consent" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    whatWouldYouLike: "chat",
    whoIsSupportFor: "myself",
    address: "",
    borough: "barnet",
    helpOptions: [] as string[],
    howOften: "",
    visitLength: "",
    preferredDaysTimes: "",
    anythingElse: "",
    consent: false,
    howOftenLiveIn: "",
    careDays: [] as string[],
    liveInCarer: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const canProceed = () => {
    if (currentStage === 1) {
      return formData.fullName.trim() && formData.phone.trim() && formData.email.trim();
    }
    if (currentStage === 7) {
      return formData.consent;
    }
    return true;
  };

  const goNext = () => {
    if (currentStage < 7) setCurrentStage((s) => s + 1);
  };

  const goBack = () => {
    if (currentStage > 1) setCurrentStage((s) => s - 1);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    if (type === "checkbox") {
      if (name === "consent") {
        setFormData((prev) => ({ ...prev, consent: target.checked }));
      } else if (name === "helpOptions") {
        const opt = target.value;
        setFormData((prev) => ({
          ...prev,
          helpOptions: target.checked
            ? [...prev.helpOptions, opt]
            : prev.helpOptions.filter((o) => o !== opt),
        }));
      } else if (name === "careDays") {
        const day = target.value;
        setFormData((prev) => ({
          ...prev,
          careDays: target.checked ? [...prev.careDays, day] : prev.careDays.filter((d) => d !== day),
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const inputClass =
    "w-full rounded-xl border border-[#e0e6e8] bg-white px-4 py-3.5 text-[16px] text-[#1a3d3d] transition-all placeholder:text-[#94a3b8] focus:border-[#1F7A7A] focus:outline-none focus:ring-2 focus:ring-[#1F7A7A]/25";
  const labelClass = "mb-2 block text-[15px] font-semibold text-[#1a3d3d]";

  const cardClass =
    "rounded-2xl border border-[#e8ecec] bg-white p-6 shadow-[0_2px_12px_rgba(26,61,61,0.08)] sm:p-8";

  return (
    <div className="min-h-screen bg-[#F8FAFA]">
      <Header />

      <main>
        <section className="relative pt-12 pb-24 sm:pt-16 sm:pb-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Page heading */}
            <div className="mb-10">
              <h1 className="font-heading text-3xl font-bold text-[#1a3d3d] sm:text-4xl">
                Contact / Book
              </h1>
              <p className="mt-2 text-[16px] leading-relaxed text-[#4a5568]">
                Fill in what you can – we&apos;ll get back with a kind, honest reply.
              </p>
            </div>

            {/* Two columns – form | sidebar */}
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
                {/* Main form column */}
                <div className="flex-1 min-w-0">
                {submitted ? (
                  <div className={cardClass}>
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#7FBF7F]/20">
                      <svg
                        className="h-8 w-8 text-[#1F7A7A]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="font-heading mb-4 text-2xl font-bold text-[#1a3d3d]">
                      Thank you for getting in touch
                    </h2>
                    <p className="mb-8 text-[15px] leading-relaxed text-[#4a5568]">
                      We read every enquiry carefully. Someone from Friendly Support Limited will be
                      in touch as soon as we can with a warm, human reply – no scripts, no pressure,
                      just an honest chat about what might help next.
                    </p>
                    <button
                      type="button"
                      onClick={() => { setSubmitted(false); setCurrentStage(1); }}
                      className="rounded-xl bg-[#1F7A7A] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#1a6565]"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {/* Stage progress */}
                    <div className="mb-8 flex flex-wrap items-center gap-3">
                      <span className="rounded-lg bg-[#1a3d3d] px-4 py-2 text-sm font-bold text-white">
                        Step {currentStage} of 7
                      </span>
                      <span className="text-[15px] font-medium text-[#4a5568]">
                        {STAGES.find((s) => s.num === currentStage)?.title}
                      </span>
                      <div className="ml-auto h-1.5 flex-1 min-w-[80px] max-w-[140px] overflow-hidden rounded-full bg-[#e8ecec]">
                        <div
                          className="h-full rounded-full bg-[#1F7A7A] transition-all duration-300"
                          style={{ width: `${(currentStage / 7) * 100}%` }}
                        />
                      </div>
                    </div>

                    {/* Stage content */}
                    <div className={cardClass}>
                    {currentStage === 1 && (
                          <div className="space-y-6">
                            <div className="mb-2 flex items-center gap-3">
                              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1F7A7A] text-sm font-bold text-white">1</span>
                              <h3 className="font-heading text-xl font-bold text-[#1a3d3d]">About you</h3>
                            </div>
                            <p className="text-[15px] text-[#4a5568]">We need a few details so we can get back to you.</p>
                            <div className="grid gap-6 sm:grid-cols-2">
                              <div>
                                <label htmlFor="fullName" className={labelClass}>Your full name *</label>
                                <input type="text" id="fullName" name="fullName" required value={formData.fullName} onChange={handleChange} className={inputClass} />
                              </div>
                              <div>
                                <label htmlFor="phone" className={labelClass}>Phone number *</label>
                                <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className={inputClass} />
                              </div>
                              <div>
                                <label htmlFor="email" className={labelClass}>Email address *</label>
                                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} />
                              </div>
                            </div>
                          </div>
                    )}

                    {currentStage === 2 && (
                          <div className="space-y-6">
                            <div className="mb-2 flex items-center gap-3">
                              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1F7A7A] text-sm font-bold text-white">2</span>
                              <h3 className="font-heading text-xl font-bold text-[#1a3d3d]">What you&apos;d like from us</h3>
                            </div>
                            <p className="text-[15px] text-[#4a5568]">Tell us how we can help.</p>
                            <div className="space-y-6">
                              <div>
                                <label className={labelClass}>What would you like to do? *</label>
                                <div className="space-y-2">
                                  {[
                                    { value: "chat", label: "Ask a general question / have an initial chat" },
                                    { value: "support", label: "Talk about support at home" },
                                    { value: "book", label: "Book a first home visit (minimum 2 hours)" },
                                  ].map((opt) => (
                                    <label key={opt.value} className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition-all ${formData.whatWouldYouLike === opt.value ? "border-[#1F7A7A] bg-[#1F7A7A]/5" : "border-[#e8ecec] bg-white hover:border-[#1F7A7A]/50"}`}>
                                      <input type="radio" name="whatWouldYouLike" value={opt.value} checked={formData.whatWouldYouLike === opt.value} onChange={handleChange} className="h-4 w-4 border-[#1F7A7A] text-[#1F7A7A] focus:ring-[#1F7A7A]" />
                                      <span className="text-[15px] text-[#4a5568]">{opt.label}</span>
                                    </label>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <label className={labelClass}>Who is the support for?</label>
                                <select name="whoIsSupportFor" value={formData.whoIsSupportFor} onChange={handleChange} className={inputClass}>
                                  <option value="myself">Myself</option>
                                  <option value="family">A family member</option>
                                  <option value="professional">Someone I support professionally</option>
                                </select>
                              </div>
                            </div>
                          </div>
                    )}

                    {currentStage === 3 && (
                          <div className="space-y-6">
                            <div className="mb-2 flex items-center gap-3">
                              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1F7A7A] text-sm font-bold text-white">3</span>
                              <h3 className="font-heading text-xl font-bold text-[#1a3d3d]">Where support is needed</h3>
                            </div>
                            <p className="text-[15px] text-[#4a5568]">Address or area where visits would take place.</p>
                            <div className="space-y-6">
                              <div>
                                <label htmlFor="address" className={labelClass}>Address</label>
                                <textarea id="address" name="address" rows={2} value={formData.address} onChange={handleChange} className={inputClass} />
                              </div>
                              <div>
                                <label htmlFor="borough" className={labelClass}>Borough</label>
                                <select name="borough" value={formData.borough} onChange={handleChange} className={inputClass}>
                                  <option value="barnet">Barnet</option>
                                  <option value="brent">Brent</option>
                                  <option value="harrow">Harrow</option>
                                  <option value="ealing">Ealing</option>
                                  <option value="other">Other nearby</option>
                                </select>
                              </div>
                            </div>
                          </div>
                    )}

                    {currentStage === 4 && (
                          <div className="space-y-6">
                            <div className="mb-2 flex items-center gap-3">
                              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1F7A7A] text-sm font-bold text-white">4</span>
                              <h3 className="font-heading text-xl font-bold text-[#1a3d3d]">The kind of help you&apos;re hoping for</h3>
                            </div>
                            <p className="text-[15px] text-[#4a5568]">Tick all that apply – this helps us understand your needs.</p>
                            <div className="space-y-6">
                              <div>
                                <label className={labelClass}>What sort of help might be useful? (tick all that apply)</label>
                                <div className="mt-3 space-y-2">
                                  {helpOptions.map((opt) => (
                                    <label key={opt} className="flex cursor-pointer items-center gap-3 py-2">
                                      <input
                                        type="checkbox"
                                        name="helpOptions"
                                        value={opt}
                                        checked={formData.helpOptions.includes(opt)}
                                        onChange={handleChange}
                                        className="h-4 w-4 rounded border-[#cbd5e1] text-[#1F7A7A] focus:ring-[#1F7A7A]/30"
                                      />
                                      <span className="text-[15px] text-[#4a5568]">{opt}</span>
                                    </label>
                                  ))}
                                </div>
                              </div>
                              <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                  <label htmlFor="howOften" className={labelClass}>How often might support be needed?</label>
                                  <select name="howOften" id="howOften" value={formData.howOften} onChange={handleChange} className={inputClass}>
                                    <option value="">Select...</option>
                                    {howOftenOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                                  </select>
                                </div>
                                <div>
                                  <label htmlFor="visitLength" className={labelClass}>Preferred visit length</label>
                                  <select name="visitLength" id="visitLength" value={formData.visitLength} onChange={handleChange} className={inputClass}>
                                    <option value="">Select...</option>
                                    {visitLengthOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                                  </select>
                                </div>
                              </div>
                              {formData.helpOptions.some((o) => o.includes("Live")) && (
                                <div className="rounded-2xl border border-[#e8ecec] bg-white p-6 shadow-[0_1px_3px_rgba(26,61,61,0.08)]">
                                  <h4 className="font-heading mb-4 font-semibold text-[#1a3d3d]">Live‑in support – additional details</h4>
                                  <div className="space-y-4">
                                    <div>
                                      <label className={labelClass}>How often?</label>
                                      <div className="flex flex-wrap gap-4">
                                        {["Once a day", "Two times a day", "Three times a day"].map((opt) => (
                                          <label key={opt} className="flex cursor-pointer items-center gap-2">
                                            <input type="radio" name="howOftenLiveIn" value={opt} checked={formData.howOftenLiveIn === opt} onChange={handleChange} className="text-[#1F7A7A]" />
                                            <span className="text-[15px]">{opt}</span>
                                          </label>
                                        ))}
                                      </div>
                                    </div>
                                    <div>
                                      <label className={labelClass}>Compassionate care days</label>
                                      <div className="flex flex-wrap gap-3">
                                        {careDays.map((day) => (
                                          <label key={day} className="flex cursor-pointer items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm">
                                            <input type="checkbox" name="careDays" value={day} checked={formData.careDays.includes(day)} onChange={handleChange} className="text-[#1F7A7A]" />
                                            <span className="text-[14px]">{day}</span>
                                          </label>
                                        ))}
                                      </div>
                                    </div>
                                    <div>
                                      <label className={labelClass}>Live‑in carer</label>
                                      <div className="flex gap-6">
                                        <label className="flex cursor-pointer items-center gap-2">
                                          <input type="radio" name="liveInCarer" value="short" checked={formData.liveInCarer === "short"} onChange={handleChange} className="text-[#1F7A7A]" />
                                          <span className="text-[15px]">Short term</span>
                                        </label>
                                        <label className="flex cursor-pointer items-center gap-2">
                                          <input type="radio" name="liveInCarer" value="long" checked={formData.liveInCarer === "long"} onChange={handleChange} className="text-[#1F7A7A]" />
                                          <span className="text-[15px]">Long term</span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                    )}

                    {currentStage === 5 && (
                          <div className="space-y-6">
                            <div className="mb-2 flex items-center gap-3">
                              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1F7A7A] text-sm font-bold text-white">5</span>
                              <h3 className="font-heading text-xl font-bold text-[#1a3d3d]">Timing and preferences</h3>
                            </div>
                            <p className="text-[15px] text-[#4a5568]">When would support work best for you?</p>
                            <div>
                              <label htmlFor="preferredDaysTimes" className={labelClass}>Preferred days and times</label>
                              <input type="text" id="preferredDaysTimes" name="preferredDaysTimes" value={formData.preferredDaysTimes} onChange={handleChange} className={inputClass} />
                            </div>
                          </div>
                    )}

                    {currentStage === 6 && (
                          <div className="space-y-6">
                            <div className="mb-2 flex items-center gap-3">
                              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1F7A7A] text-sm font-bold text-white">6</span>
                              <h3 className="font-heading text-xl font-bold text-[#1a3d3d]">Anything else you&apos;d like us to know</h3>
                            </div>
                            <p className="text-[15px] text-[#4a5568]">Optional – share anything that would help us support you better.</p>
                            <div>
                              <label htmlFor="anythingElse" className={labelClass}>Share about the person or situation</label>
                              <textarea id="anythingElse" name="anythingElse" rows={4} value={formData.anythingElse} onChange={handleChange} className={inputClass} />
                            </div>
                          </div>
                    )}

                    {currentStage === 7 && (
                          <div className="space-y-6">
                            <div className="mb-2 flex items-center gap-3">
                              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1F7A7A] text-sm font-bold text-white">7</span>
                              <h3 className="font-heading text-xl font-bold text-[#1a3d3d]">Consent and pricing</h3>
                            </div>
                            <p className="text-[15px] text-[#4a5568]">Please confirm you&apos;re happy for us to use your details to reply.</p>
                            <div className="space-y-6">
                              <label className="flex cursor-pointer items-start gap-4 rounded-xl border border-[#e8ecec] bg-[#F8FAFA] p-5 transition-colors hover:border-[#1F7A7A]/30">
                                <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} required className="mt-0.5 h-5 w-5 shrink-0 rounded border-[#1F7A7A] text-[#1F7A7A] focus:ring-[#1F7A7A]" />
                                <span className="text-[15px] leading-relaxed text-[#4a5568]">
                                  I understand visits are <strong>£28 per hour</strong> with a <strong>2-hour minimum</strong>.
                                  I&apos;m happy for Friendly Support Limited to use my details to respond, in line with your{" "}
                                  <Link href="/privacy" className="font-semibold text-[#1F7A7A] hover:underline">
                                    privacy policy
                                  </Link>
                                  . *
                                </span>
                              </label>
                            </div>
                          </div>
                    )}

                    {/* Navigation buttons */}
                    <div className="mt-10 flex items-center justify-between gap-4 border-t border-[#e8ecec] pt-8">
                      <button
                        type="button"
                        onClick={goBack}
                        className={`rounded-xl px-6 py-3 text-[15px] font-semibold transition-all ${
                          currentStage === 1
                            ? "border border-[#e8ecec] bg-white text-[#94a3b8] cursor-not-allowed"
                            : "border border-[#1F7A7A] bg-white text-[#1F7A7A] hover:bg-[#1F7A7A]/5"
                        }`}
                        disabled={currentStage === 1}
                      >
                        Back
                      </button>
                      {currentStage < 7 ? (
                        <button
                          type="button"
                          onClick={goNext}
                          disabled={!canProceed()}
                          className={`rounded-xl px-8 py-3 text-[15px] font-semibold transition-all ${
                            canProceed()
                              ? "bg-[#1F7A7A] text-white hover:bg-[#1a6565]"
                              : "bg-[#e8ecec] text-[#94a3b8] cursor-not-allowed"
                          }`}
                        >
                          Next
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={!canProceed()}
                          className={`rounded-xl px-8 py-3 text-[15px] font-semibold transition-all ${
                            canProceed()
                              ? "bg-[#1F7A7A] text-white shadow-lg hover:bg-[#1a6565] hover:shadow-xl"
                              : "bg-[#e8ecec] text-[#94a3b8] cursor-not-allowed"
                          }`}
                        >
                          Send this to Friendly Support
                        </button>
                      )}
                    </div>
                    </div>
                  </form>
                )}
                </div>

                {/* Sidebar */}
                <aside className="w-full lg:w-[380px] lg:shrink-0">
                  <div className="sticky top-24 rounded-2xl border border-[#e8ecec] bg-white p-6 shadow-[0_2px_12px_rgba(26,61,61,0.08)] sm:p-8">
                    <h3 className="font-heading mb-3 text-lg font-bold text-[#1a3d3d]">
                      A friendly start
                    </h3>
                    <p className="mb-4 text-[15px] leading-relaxed text-[#4a5568]">
                      This form is just the start of a conversation. Fill in what you can and
                      we&apos;ll get back with a kind, honest reply – no scripts, no pressure.
                    </p>
                    <div className="mb-6 flex flex-wrap gap-2">
                      <span className="rounded-lg bg-[#1F7A7A]/10 px-3 py-1.5 text-sm font-semibold text-[#1F7A7A]">
                        £28/hr
                      </span>
                      <span className="rounded-lg bg-[#1F7A7A]/10 px-3 py-1.5 text-sm font-semibold text-[#1F7A7A]">
                        2hr min
                      </span>
                      <span className="rounded-lg bg-[#7FBF7F]/20 px-3 py-1.5 text-sm font-semibold text-[#1a3d3d]">
                        £56 typical first visit
                      </span>
                    </div>

                    <div className="border-t border-[#e8ecec] pt-6">
                      <h3 className="font-heading mb-3 text-base font-bold text-[#1a3d3d]">
                        Contact details
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wider text-[#94a3b8]">Email</p>
                          <a href="mailto:hello@friendlysupport.co.uk" className="mt-0.5 block text-[15px] font-medium text-[#1F7A7A] hover:underline">hello@friendlysupport.co.uk</a>
                        </div>
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wider text-[#94a3b8]">Phone</p>
                          <p className="mt-0.5 text-[15px] font-medium text-[#1a3d3d]">020 xxxx xxxx</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wider text-[#94a3b8]">Area</p>
                          <p className="mt-0.5 text-[15px] font-medium text-[#1a3d3d]">
                            Barnet, Brent, Harrow &amp; Ealing
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 border-t border-[#e8ecec] pt-6">
                      <h3 className="font-heading mb-3 text-base font-bold text-[#1a3d3d]">
                        What happens next?
                      </h3>
                      <ol className="space-y-3">
                        {[
                          "We reply within 24–48 hours",
                          "A friendly, no-pressure chat about your needs",
                          "Arrange a first visit if it feels right",
                        ].map((step, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1F7A7A]/15 text-xs font-bold text-[#1F7A7A]">
                              {i + 1}
                            </span>
                            <span className="text-[14px] leading-relaxed text-[#4a5568]">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
