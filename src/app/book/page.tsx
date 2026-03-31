"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TwoMonthCalendar from "@/components/booking/TwoMonthCalendar";
import { LIVE_IN_WEEK_GUIDE_SHORT } from "@/data/pricingCopy";
import { buildVisitTimeOptions, FULL_WEEKDAYS } from "@/lib/bookingTimeSlots";

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

const visitTimeOptions = buildVisitTimeOptions();

const hoursPerVisitOptions = [
  { value: "2", label: "2 hours (minimum)" },
  { value: "3", label: "3 hours" },
  { value: "4", label: "4 hours" },
  { value: "5", label: "5 hours" },
  { value: "6+", label: "6+ hours" },
];

const STAGES = [
  { num: 1, title: "About you" },
  { num: 2, title: "What you'd like" },
  { num: 3, title: "Property address" },
  { num: 4, title: "Kind of help" },
  { num: 5, title: "When & how long" },
  { num: 6, title: "Access & special notes" },
  { num: 7, title: "Consent" },
];

function createInitialFormData() {
  return {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    whatWouldYouLike: "chat",
    whoIsSupportFor: "myself",
    addressLine1: "",
    addressLine2: "",
    city: "London",
    postcode: "",
    borough: "barnet",
    helpOptions: [] as string[],
    howOften: "",
    visitLength: "",
    preferredDaysTimes: "",
    accessInstructions: "",
    specialRequirementsNotes: "",
    consent: false,
    scheduleMode: "hourly" as
      | "hourly"
      | "livein_full_day"
      | "livein_night"
      | "livein_24",
    selectedDates: [] as string[],
    needDaily: false,
    scheduleWeekdays: [] as string[],
    visitTimeFrom: "",
    visitTimeTo: "",
    hoursPerVisit: "2",
    liveIn24Pattern: "" as "" | "one" | "several" | "full_week",
    liveInDaysPerWeek: "",
  };
}

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [formData, setFormData] = useState(createInitialFormData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const canProceed = () => {
    if (currentStage === 1) {
      return (
        formData.firstName.trim() &&
        formData.lastName.trim() &&
        formData.phone.trim() &&
        formData.email.trim()
      );
    }
    if (currentStage === 3) {
      return (
        !!formData.addressLine1?.trim() &&
        !!formData.city?.trim() &&
        !!formData.postcode?.trim()
      );
    }
    if (currentStage === 5) {
      const mode = formData.scheduleMode;
      if (mode === "hourly") {
        const hasPattern =
          formData.needDaily ||
          formData.scheduleWeekdays.length > 0 ||
          formData.selectedDates.length > 0;
        return (
          !!formData.visitTimeFrom &&
          !!formData.visitTimeTo &&
          !!formData.hoursPerVisit &&
          hasPattern &&
          formData.visitTimeFrom < formData.visitTimeTo
        );
      }
      if (mode === "livein_24") {
        if (!formData.liveIn24Pattern) return false;
        if (formData.liveIn24Pattern === "several") {
          const n = Number(formData.liveInDaysPerWeek);
          return n >= 1 && n <= 7;
        }
        return true;
      }
      return true;
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
      } else if (name === "scheduleWeekdays") {
        const day = target.value;
        setFormData((prev) => ({
          ...prev,
          scheduleWeekdays: target.checked
            ? [...prev.scheduleWeekdays, day]
            : prev.scheduleWeekdays.filter((d) => d !== day),
        }));
      } else if (name === "needDaily") {
        setFormData((prev) => ({ ...prev, needDaily: target.checked }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value ?? "" }));
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
                Book now
              </h1>
              <p className="mt-2 text-[16px] leading-relaxed text-[#4a5568]">
                Full booking form — visits, address, timing and consent. Only have a quick question?{" "}
                <Link href="/contact" className="font-semibold text-[#1F7A7A] hover:underline">
                  Contact us
                </Link>{" "}
                instead.
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
                      onClick={() => {
                        setSubmitted(false);
                        setCurrentStage(1);
                        setFormData(createInitialFormData());
                      }}
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
                                <label htmlFor="firstName" className={labelClass}>First name *</label>
                                <input
                                  type="text"
                                  id="firstName"
                                  name="firstName"
                                  required
                                  autoComplete="given-name"
                                  value={formData.firstName ?? ""}
                                  onChange={handleChange}
                                  className={inputClass}
                                />
                              </div>
                              <div>
                                <label htmlFor="lastName" className={labelClass}>Last name *</label>
                                <input
                                  type="text"
                                  id="lastName"
                                  name="lastName"
                                  required
                                  autoComplete="family-name"
                                  value={formData.lastName ?? ""}
                                  onChange={handleChange}
                                  className={inputClass}
                                />
                              </div>
                              <div>
                                <label htmlFor="email" className={labelClass}>Email address *</label>
                                <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  required
                                  autoComplete="email"
                                  value={formData.email ?? ""}
                                  onChange={handleChange}
                                  className={inputClass}
                                />
                              </div>
                              <div>
                                <label htmlFor="phone" className={labelClass}>Phone number *</label>
                                <input
                                  type="tel"
                                  id="phone"
                                  name="phone"
                                  required
                                  autoComplete="tel"
                                  value={formData.phone ?? ""}
                                  onChange={handleChange}
                                  className={inputClass}
                                />
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
                                <select name="whoIsSupportFor" value={formData.whoIsSupportFor ?? ""} onChange={handleChange} className={inputClass}>
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
                              <h3 className="font-heading text-xl font-bold text-[#1a3d3d]">Property address</h3>
                            </div>
                            <p className="text-[15px] text-[#4a5568]">Where visits would take place.</p>
                            <div className="space-y-6">
                              <div>
                                <label htmlFor="addressLine1" className={labelClass}>Property address line 1 *</label>
                                <input
                                  type="text"
                                  id="addressLine1"
                                  name="addressLine1"
                                  autoComplete="address-line1"
                                  required
                                  value={formData.addressLine1 ?? ""}
                                  onChange={handleChange}
                                  className={inputClass}
                                />
                              </div>
                              <div>
                                <label htmlFor="addressLine2" className={labelClass}>Property address line 2</label>
                                <input
                                  type="text"
                                  id="addressLine2"
                                  name="addressLine2"
                                  autoComplete="address-line2"
                                  value={formData.addressLine2 ?? ""}
                                  onChange={handleChange}
                                  className={inputClass}
                                />
                              </div>
                              <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                  <label htmlFor="city" className={labelClass}>City *</label>
                                  <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    autoComplete="address-level2"
                                    required
                                    value={formData.city ?? ""}
                                    onChange={handleChange}
                                    className={inputClass}
                                  />
                                </div>
                                <div>
                                  <label htmlFor="postcode" className={labelClass}>Postcode *</label>
                                  <input
                                    type="text"
                                    id="postcode"
                                    name="postcode"
                                    autoComplete="postal-code"
                                    required
                                    value={formData.postcode ?? ""}
                                    onChange={handleChange}
                                    className={inputClass}
                                  />
                                </div>
                              </div>
                              <div>
                                <label htmlFor="borough" className={labelClass}>Borough</label>
                                <select id="borough" name="borough" value={formData.borough ?? ""} onChange={handleChange} className={inputClass}>
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
                                        checked={(formData.helpOptions ?? []).includes(opt)}
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
                                  <select name="howOften" id="howOften" value={formData.howOften ?? ""} onChange={handleChange} className={inputClass}>
                                    <option value="">Select...</option>
                                    {howOftenOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                                  </select>
                                </div>
                                <div>
                                  <label htmlFor="visitLength" className={labelClass}>Preferred visit length</label>
                                  <select name="visitLength" id="visitLength" value={formData.visitLength ?? ""} onChange={handleChange} className={inputClass}>
                                    <option value="">Select...</option>
                                    {visitLengthOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                                  </select>
                                </div>
                              </div>
                              <p className="text-[14px] leading-relaxed text-[#64748b]">
                                You&apos;ll choose hourly visits or live‑in options in the next step
                                (when, how often, and times).
                              </p>
                            </div>
                          </div>
                    )}

                    {currentStage === 5 && (
                          <div className="space-y-6">
                            <div className="mb-2 flex items-center gap-3">
                              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1F7A7A] text-sm font-bold text-white">5</span>
                              <h3 className="font-heading text-xl font-bold text-[#1a3d3d]">When, how often & how long</h3>
                            </div>

                            <p className="text-[14px] font-bold leading-relaxed text-[#1a3d3d]">
                              Hourly: £25/hr, minimum 2 hours, visits 8am–8pm. Live-in: full day, night, or 24 hours (day
                              and night) — we confirm in writing.
                            </p>

                            <div>
                              <label className={labelClass}>Type of support</label>
                              <div className="mt-2 space-y-2">
                                {[
                                  {
                                    value: "hourly" as const,
                                    label: "Hourly visits (8am–8pm)",
                                  },
                                  {
                                    value: "livein_full_day" as const,
                                    label: "Live-in — full day",
                                  },
                                  {
                                    value: "livein_night" as const,
                                    label: "Live-in — night (8pm–8am)",
                                  },
                                  {
                                    value: "livein_24" as const,
                                    label: "Live-in — 24 hours",
                                  },
                                ].map((opt) => (
                                  <label
                                    key={opt.value}
                                    className={`flex cursor-pointer items-center gap-3 rounded-lg border px-3 py-2.5 transition-all ${
                                      formData.scheduleMode === opt.value
                                        ? "border-[#1F7A7A] bg-[#1F7A7A]/5"
                                        : "border-[#e8ecec] bg-white hover:border-[#1F7A7A]/40"
                                    }`}
                                  >
                                    <input
                                      type="radio"
                                      name="scheduleMode"
                                      value={opt.value}
                                      checked={formData.scheduleMode === opt.value}
                                      onChange={(e) =>
                                        setFormData((prev) => ({
                                          ...prev,
                                          scheduleMode: e.target.value as typeof prev.scheduleMode,
                                        }))
                                      }
                                      className="h-4 w-4 shrink-0 border-[#1F7A7A] text-[#1F7A7A] focus:ring-[#1F7A7A]"
                                    />
                                    <span className="text-[15px] text-[#374151]">{opt.label}</span>
                                  </label>
                                ))}
                              </div>
                            </div>

                            {formData.scheduleMode === "hourly" && (
                              <>
                                <div>
                                  <label className={labelClass}>Dates (optional)</label>
                                  <p className="mb-2 text-[13px] text-[#64748b]">
                                    Tap days on the calendar, or use every day / weekdays below.
                                  </p>
                                  <TwoMonthCalendar
                                    selectedDates={formData.selectedDates}
                                    onChange={(dates) => setFormData((prev) => ({ ...prev, selectedDates: dates }))}
                                  />
                                </div>

                                <div className="flex flex-wrap items-center gap-6">
                                  <label className="flex cursor-pointer items-center gap-2">
                                    <input
                                      type="checkbox"
                                      name="needDaily"
                                      checked={!!formData.needDaily}
                                      onChange={handleChange}
                                      className="h-4 w-4 rounded border-[#cbd5e1] text-[#1F7A7A] focus:ring-[#1F7A7A]/30"
                                    />
                                    <span className="text-[15px] font-medium text-[#374151]">I need help every day</span>
                                  </label>
                                </div>

                                <div>
                                  <label className={labelClass}>Days of the week</label>
                                  <div className="mt-3 flex flex-wrap gap-2">
                                    {FULL_WEEKDAYS.map((day) => (
                                      <label
                                        key={day}
                                        className="flex cursor-pointer items-center gap-2 rounded-lg border border-[#e8ecec] bg-white px-3 py-2 shadow-sm"
                                      >
                                        <input
                                          type="checkbox"
                                          name="scheduleWeekdays"
                                          value={day}
                                          checked={(formData.scheduleWeekdays ?? []).includes(day)}
                                          onChange={handleChange}
                                          className="h-4 w-4 rounded border-[#cbd5e1] text-[#1F7A7A] focus:ring-[#1F7A7A]/30"
                                        />
                                        <span className="text-[14px] text-[#374151]" title={day}>
                                          {day.slice(0, 3)}
                                        </span>
                                      </label>
                                    ))}
                                  </div>
                                </div>

                                <div className="grid gap-6 sm:grid-cols-2">
                                  <div>
                                    <label htmlFor="visitTimeFrom" className={labelClass}>
                                      From (8am–8pm) *
                                    </label>
                                    <select
                                      id="visitTimeFrom"
                                      name="visitTimeFrom"
                                      value={formData.visitTimeFrom ?? ""}
                                      onChange={handleChange}
                                      className={inputClass}
                                      required={formData.scheduleMode === "hourly"}
                                    >
                                      <option value="">Select…</option>
                                      {visitTimeOptions
                                        .filter((t) => t < "20:00")
                                        .map((t) => (
                                          <option key={t} value={t}>
                                            {t}
                                          </option>
                                        ))}
                                    </select>
                                  </div>
                                  <div>
                                    <label htmlFor="visitTimeTo" className={labelClass}>
                                      To (8am–8pm) *
                                    </label>
                                    <select
                                      id="visitTimeTo"
                                      name="visitTimeTo"
                                      value={formData.visitTimeTo ?? ""}
                                      onChange={handleChange}
                                      className={inputClass}
                                      required={formData.scheduleMode === "hourly"}
                                    >
                                      <option value="">Select…</option>
                                      {visitTimeOptions.map((t) => (
                                        <option key={t} value={t}>
                                          {t}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>

                                <div>
                                  <label htmlFor="hoursPerVisit" className={labelClass}>
                                    How many hours per visit? *
                                  </label>
                                  <select
                                    id="hoursPerVisit"
                                    name="hoursPerVisit"
                                    value={formData.hoursPerVisit ?? "2"}
                                    onChange={handleChange}
                                    className={inputClass}
                                  >
                                    {hoursPerVisitOptions.map((opt) => (
                                      <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </>
                            )}

                            {formData.scheduleMode === "livein_24" && (
                              <div className="space-y-3 rounded-lg border border-[#e8ecec] bg-[#F8FAFA] p-4">
                                <p className="text-[14px] font-semibold text-[#1a3d3d]">How often (24-hour live-in)</p>
                                <div className="space-y-2">
                                  {[
                                    { value: "one" as const, label: "One day per week" },
                                    { value: "several" as const, label: "Several days per week" },
                                    { value: "full_week" as const, label: "Full week (Monday–Sunday)" },
                                  ].map((opt) => (
                                    <label key={opt.value} className="flex cursor-pointer items-center gap-3">
                                      <input
                                        type="radio"
                                        name="liveIn24Pattern"
                                        value={opt.value}
                                        checked={formData.liveIn24Pattern === opt.value}
                                        onChange={(e) =>
                                          setFormData((prev) => ({
                                            ...prev,
                                            liveIn24Pattern: e.target.value as typeof prev.liveIn24Pattern,
                                          }))
                                        }
                                        className="h-4 w-4 border-[#1F7A7A] text-[#1F7A7A] focus:ring-[#1F7A7A]"
                                      />
                                      <span className="text-[15px] text-[#4a5568]">{opt.label}</span>
                                    </label>
                                  ))}
                                </div>
                                {formData.liveIn24Pattern === "several" && (
                                  <div>
                                    <label htmlFor="liveInDaysPerWeek" className={labelClass}>
                                      How many days per week?
                                    </label>
                                    <select
                                      id="liveInDaysPerWeek"
                                      name="liveInDaysPerWeek"
                                      value={formData.liveInDaysPerWeek ?? ""}
                                      onChange={handleChange}
                                      className={inputClass}
                                    >
                                      <option value="">Select…</option>
                                      {[1, 2, 3, 4, 5, 6].map((n) => (
                                        <option key={n} value={String(n)}>
                                          {n} days
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                )}
                              </div>
                            )}

                            {(formData.scheduleMode === "livein_full_day" ||
                              formData.scheduleMode === "livein_night") && (
                              <div className="rounded-lg border border-[#e8ecec] bg-[#F8FAFA] p-4">
                                <p className="text-[14px] leading-relaxed text-[#4a5568]">
                                  {formData.scheduleMode === "livein_night"
                                    ? "Nights: 8pm–8am. Add which nights in the box below."
                                    : "Add any details you already know below."}
                                </p>
                                <div className="mt-4">
                                  <label htmlFor="preferredDaysTimesLivein" className={labelClass}>
                                    Which days / extra notes (optional)
                                  </label>
                                  <textarea
                                    key="preferredDaysTimes-livein"
                                    id="preferredDaysTimesLivein"
                                    name="preferredDaysTimes"
                                    rows={3}
                                    value={formData.preferredDaysTimes ?? ""}
                                    onChange={handleChange}
                                    className={inputClass}
                                  />
                                </div>
                              </div>
                            )}

                            {formData.scheduleMode === "hourly" && (
                              <div>
                                <label htmlFor="preferredDaysTimesHourly" className={labelClass}>
                                  Anything else about timing? (optional)
                                </label>
                                <textarea
                                  key="preferredDaysTimes-hourly"
                                  id="preferredDaysTimesHourly"
                                  name="preferredDaysTimes"
                                  rows={3}
                                  value={formData.preferredDaysTimes ?? ""}
                                  onChange={handleChange}
                                  className={inputClass}
                                />
                              </div>
                            )}
                          </div>
                    )}

                    {currentStage === 6 && (
                          <div className="space-y-6">
                            <div className="mb-2 flex items-center gap-3">
                              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1F7A7A] text-sm font-bold text-white">6</span>
                              <h3 className="font-heading text-xl font-bold text-[#1a3d3d]">Access &amp; special notes</h3>
                            </div>
                            <p className="text-[15px] text-[#4a5568]">
                              Help us visit safely and understand anything important — all optional.
                            </p>
                            <div>
                              <label htmlFor="accessInstructions" className={labelClass}>Access instructions</label>
                              <textarea
                                id="accessInstructions"
                                name="accessInstructions"
                                rows={4}
                                value={formData.accessInstructions ?? ""}
                                onChange={handleChange}
                                className={inputClass}
                              />
                            </div>
                            <div>
                              <label htmlFor="specialRequirementsNotes" className={labelClass}>
                                Special requirements / notes
                              </label>
                              <textarea
                                id="specialRequirementsNotes"
                                name="specialRequirementsNotes"
                                rows={4}
                                value={formData.specialRequirementsNotes ?? ""}
                                onChange={handleChange}
                                className={inputClass}
                              />
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
                                <input type="checkbox" name="consent" checked={!!formData.consent} onChange={handleChange} required className="mt-0.5 h-5 w-5 shrink-0 rounded border-[#1F7A7A] text-[#1F7A7A] focus:ring-[#1F7A7A]" />
                                <span className="text-[15px] leading-relaxed text-[#4a5568]">
                                  I understand <strong>hourly visits</strong> are <strong>£25 per hour</strong> with a{" "}
                                  <strong>minimum of 2 hours</strong> per booking, and that live‑in support is priced
                                  separately (we will confirm in writing). I&apos;m happy for Friendly Support Limited to use my details to respond, in line with your{" "}
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
                        £25/hr
                      </span>
                      <span className="rounded-lg bg-[#1F7A7A]/10 px-3 py-1.5 text-sm font-semibold text-[#1F7A7A]">
                        2hr min
                      </span>
                    </div>
                    <p className="mb-6 text-[13px] leading-relaxed text-[#64748b]">{LIVE_IN_WEEK_GUIDE_SHORT}</p>

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
