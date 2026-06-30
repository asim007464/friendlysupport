"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookSidebar from "@/components/booking/BookSidebar";
import TwoMonthCalendar from "@/components/booking/TwoMonthCalendar";
import { HOURLY_MINIMUM_HOURS, HOURLY_RATE } from "@/data/pricingCopy";

const TOTAL_STEPS = 6;

const STAGES = [
  { num: 1, title: "About you" },
  { num: 2, title: "Who needs support" },
  { num: 3, title: "Visit address" },
  { num: 4, title: "Kind of help" },
  { num: 5, title: "When" },
  { num: 6, title: "Consent" },
];

const supportForOptions = [
  "Myself",
  "My parent",
  "My spouse or partner",
  "Another family member",
  "A friend",
  "Other",
];

const helpOptions = [
  "Friendly visits and companionship",
  "Someone to stay so a family carer can have a break",
  "Support getting to and from appointments",
  "Help with shopping and errands",
  "Light help at home (tidying, laundry, simple meals)",
  "Live-in home support (no personal care)",
  "Other",
];

const frequencyOptions = [
  "About once a week",
  "A few times a week",
  "Every day",
  "Live-in support",
  "Not sure yet",
  "Other",
];

const supportTypeOptions = [
  { value: "hourly", label: "Hourly visits (8am–8pm)" },
  { value: "livein-day", label: "Live-in: full day" },
  { value: "livein-night", label: "Live-in: night (8pm–8am)" },
  { value: "livein-24", label: "Live-in: 24 hours" },
];

function buildTimeOptions() {
  const times: string[] = [];
  for (let h = 8; h <= 20; h++) {
    times.push(`${h === 12 ? 12 : h % 12}:00 ${h < 12 ? "am" : "pm"}`);
    if (h < 20) times.push(`${h === 12 ? 12 : h % 12}:30 ${h < 12 ? "am" : "pm"}`);
  }
  return times;
}

const TIME_OPTIONS = buildTimeOptions();

function StepHeader({ n, title, sub }: { n: number; title: string; sub: string }) {
  return (
    <div className="mb-8">
      <div className="mb-2 flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1F7A7A] text-sm font-bold text-white">
          {n}
        </span>
        <h3 className="font-heading text-xl font-bold text-[#1a3d3d] sm:text-2xl">{title}</h3>
      </div>
      <p className="text-[15px] text-[#64748b]">{sub}</p>
    </div>
  );
}

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  supportFor: string;
  supportForOther: string;
  clientFirstName: string;
  clientLastName: string;
  addressLine1: string;
  addressLine2: string;
  postcode: string;
  helpTypes: string[];
  helpTypesOther: string;
  frequency: string;
  frequencyOther: string;
  supportType: string;
  selectedDates: string[];
  timeFrom: string;
  timeTo: string;
  timingNotes: string;
  consent: boolean;
};

function initialForm(): FormData {
  return {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    supportFor: "",
    supportForOther: "",
    clientFirstName: "",
    clientLastName: "",
    addressLine1: "",
    addressLine2: "",
    postcode: "",
    helpTypes: [],
    helpTypesOther: "",
    frequency: "",
    frequencyOther: "",
    supportType: "hourly",
    selectedDates: [],
    timeFrom: "",
    timeTo: "",
    timingNotes: "",
    consent: false,
  };
}

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(initialForm);

  const isHourly = form.supportType === "hourly";
  const isSelf = form.supportFor === "Myself";

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleHelp = (item: string) => {
    setForm((prev) => {
      const isSelected = prev.helpTypes.includes(item);
      const helpTypes = isSelected
        ? prev.helpTypes.filter((h) => h !== item)
        : [...prev.helpTypes, item];
      return {
        ...prev,
        helpTypes,
        helpTypesOther: item === "Other" && isSelected ? "" : prev.helpTypesOther,
      };
    });
  };

  const canProceed = (): boolean => {
    switch (step) {
      case 1:
        return !!(form.firstName.trim() && form.lastName.trim() && form.email.trim() && form.phone.trim());
      case 2:
        return !!(
          form.supportFor &&
          (form.supportFor !== "Other" || form.supportForOther.trim()) &&
          (isSelf || (form.clientFirstName.trim() && form.clientLastName.trim()))
        );
      case 3:
        return !!(form.addressLine1.trim() && form.postcode.trim());
      case 4:
        return !!(
          form.helpTypes.length > 0 &&
          (!form.helpTypes.includes("Other") || form.helpTypesOther.trim()) &&
          form.frequency &&
          (form.frequency !== "Other" || form.frequencyOther.trim())
        );
      case 5:
        if (!form.supportType) return false;
        if (!isHourly) return true;
        return !!(form.timeFrom && form.timeTo);
      case 6:
        return form.consent;
      default:
        return false;
    }
  };

  const inputClass =
    "w-full rounded-xl border border-[#e0e6e8] bg-white px-4 py-3.5 text-[16px] text-[#1a3d3d] transition-all focus:border-[#1F7A7A] focus:outline-none focus:ring-2 focus:ring-[#1F7A7A]/25";
  const labelClass = "mb-2 block text-[15px] font-semibold text-[#1a3d3d]";
  const selectClass = inputClass;

  const selectEveryWeekday = () => {
    const dates: string[] = [];
    const start = new Date();
    for (let i = 0; i < 28; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      const day = d.getDay();
      if (day >= 1 && day <= 5) {
        dates.push(d.toISOString().slice(0, 10));
      }
    }
    update("selectedDates", [...new Set(dates)].sort());
  };

  const selectEveryDay = () => {
    const dates: string[] = [];
    const start = new Date();
    for (let i = 0; i < 14; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      dates.push(d.toISOString().slice(0, 10));
    }
    update("selectedDates", dates);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFA]">
      <Header />

      <main id="main-content">
        <section className="pt-10 pb-20 sm:pt-14 sm:pb-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h1 className="font-heading text-3xl font-bold text-[#1a3d3d] sm:text-4xl">Book now</h1>
              <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-[#4a5568]">
                Full booking form for visits, address, timing and consent. Only have a quick question?{" "}
                <Link href="/contact" className="font-semibold text-[#1F7A7A] hover:underline">
                  Contact us
                </Link>{" "}
                instead.
              </p>
            </div>

            {submitted ? (
              <div className="max-w-2xl rounded-2xl border border-[#e8ecec] bg-white p-8 shadow-sm">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#7FBF7F]/20">
                  <svg className="h-7 w-7 text-[#2d7a2d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-heading mb-3 text-2xl font-bold text-[#1a3d3d]">
                  Booking request received
                </h2>
                <p className="mb-4 text-[16px] font-medium leading-relaxed text-[#1a3d3d]">
                  A member of our team will get back to you within 24 hours.
                </p>
                <p className="mb-6 text-[15px] leading-relaxed text-[#4a5568]">
                  Thank you for your booking request. We read every enquiry carefully and will
                  contact you with a warm, human reply. No scripts, no pressure — just an honest
                  chat about what might help next.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                    setForm(initialForm());
                  }}
                  className="rounded-lg bg-[#1F7A7A] px-6 py-3 text-[15px] font-semibold text-white hover:bg-[#1a6565]"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
                <div className="min-w-0 flex-1">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="rounded-md bg-[#1a3d3d] px-3 py-1.5 text-sm font-bold text-white">
                      Step {step} of {TOTAL_STEPS}
                    </span>
                    <span className="text-[14px] font-medium text-[#4a5568]">
                      {STAGES[step - 1].title}
                    </span>
                    <div className="ml-auto hidden h-1.5 w-24 overflow-hidden rounded-full bg-[#e8ecec] sm:block">
                      <div
                        className="h-full rounded-full bg-[#1F7A7A] transition-all duration-300"
                        style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                      />
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="rounded-2xl border border-[#e8ecec] bg-white p-6 shadow-sm sm:p-8">
                      {step === 1 && (
                        <>
                          <StepHeader
                            n={1}
                            title="About you"
                            sub="We need a few details so we can get back to you."
                          />
                          <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                              <label className={labelClass}>First name *</label>
                              <input
                                type="text"
                                value={form.firstName}
                                onChange={(e) => update("firstName", e.target.value)}
                                className={inputClass}
                                autoComplete="given-name"
                              />
                            </div>
                            <div>
                              <label className={labelClass}>Last name *</label>
                              <input
                                type="text"
                                value={form.lastName}
                                onChange={(e) => update("lastName", e.target.value)}
                                className={inputClass}
                                autoComplete="family-name"
                              />
                            </div>
                            <div>
                              <label className={labelClass}>Email address *</label>
                              <input
                                type="email"
                                value={form.email}
                                onChange={(e) => update("email", e.target.value)}
                                className={inputClass}
                                autoComplete="email"
                              />
                            </div>
                            <div>
                              <label className={labelClass}>Phone number *</label>
                              <input
                                type="tel"
                                value={form.phone}
                                onChange={(e) => update("phone", e.target.value)}
                                className={inputClass}
                                autoComplete="tel"
                              />
                            </div>
                          </div>
                        </>
                      )}

                      {step === 2 && (
                        <>
                          <StepHeader
                            n={2}
                            title="Who needs support"
                            sub="Tell us who the visit is for. This is a booking form, not a general enquiry."
                          />
                          <div className="space-y-5">
                            <div>
                              <label className={labelClass}>Who is the support for? *</label>
                              <select
                                value={form.supportFor}
                                onChange={(e) => update("supportFor", e.target.value)}
                                className={selectClass}
                              >
                                <option value="">Select…</option>
                                {supportForOptions.map((o) => (
                                  <option key={o} value={o}>
                                    {o}
                                  </option>
                                ))}
                              </select>
                            </div>
                            {form.supportFor === "Other" && (
                              <div>
                                <label className={labelClass}>Please specify</label>
                                <input
                                  type="text"
                                  value={form.supportForOther}
                                  onChange={(e) => update("supportForOther", e.target.value)}
                                  className={inputClass}
                                />
                              </div>
                            )}
                            {!isSelf && form.supportFor && (
                              <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                  <label className={labelClass}>Their first name *</label>
                                  <input
                                    type="text"
                                    value={form.clientFirstName}
                                    onChange={(e) => update("clientFirstName", e.target.value)}
                                    className={inputClass}
                                  />
                                </div>
                                <div>
                                  <label className={labelClass}>Their last name *</label>
                                  <input
                                    type="text"
                                    value={form.clientLastName}
                                    onChange={(e) => update("clientLastName", e.target.value)}
                                    className={inputClass}
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </>
                      )}

                      {step === 3 && (
                        <>
                          <StepHeader
                            n={3}
                            title="Visit address"
                            sub="Where should we visit? We support people across London."
                          />
                          <div className="space-y-5">
                            <div>
                              <label className={labelClass}>Address line 1 *</label>
                              <input
                                type="text"
                                value={form.addressLine1}
                                onChange={(e) => update("addressLine1", e.target.value)}
                                className={inputClass}
                                autoComplete="address-line1"
                              />
                            </div>
                            <div>
                              <label className={labelClass}>Address line 2</label>
                              <input
                                type="text"
                                value={form.addressLine2}
                                onChange={(e) => update("addressLine2", e.target.value)}
                                className={inputClass}
                                autoComplete="address-line2"
                              />
                            </div>
                            <div className="sm:w-1/2">
                              <label className={labelClass}>Postcode *</label>
                              <input
                                type="text"
                                value={form.postcode}
                                onChange={(e) => update("postcode", e.target.value)}
                                className={inputClass}
                                autoComplete="postal-code"
                              />
                            </div>
                          </div>
                        </>
                      )}

                      {step === 4 && (
                        <>
                          <StepHeader
                            n={4}
                            title="The kind of help you're hoping for"
                            sub="Tick all that apply. This helps us understand your needs."
                          />
                          <div className="space-y-5">
                            <div>
                              <p className={labelClass}>What sort of help might be useful? *</p>
                              <div className="mt-3 space-y-2.5">
                                {helpOptions.map((item) => (
                                  <label
                                    key={item}
                                    className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 px-4 py-3.5 transition-all ${
                                      form.helpTypes.includes(item)
                                        ? "border-[#1F7A7A] bg-[#1F7A7A]/5"
                                        : "border-[#e5e7eb] hover:border-[#1F7A7A]/40"
                                    }`}
                                  >
                                    <input
                                      type="checkbox"
                                      checked={form.helpTypes.includes(item)}
                                      onChange={() => toggleHelp(item)}
                                      className="mt-1 h-[18px] w-[18px] rounded border-[#d1d5db] text-[#1F7A7A]"
                                    />
                                    <span className="text-[15px] text-[#374151]">{item}</span>
                                  </label>
                                ))}
                              </div>
                              {form.helpTypes.includes("Other") && (
                                <div className="mt-4">
                                  <label className={labelClass}>Please specify</label>
                                  <input
                                    type="text"
                                    value={form.helpTypesOther}
                                    onChange={(e) => update("helpTypesOther", e.target.value)}
                                    className={inputClass}
                                  />
                                </div>
                              )}
                            </div>
                            <div>
                              <label className={labelClass}>How often might support be needed? *</label>
                              <select
                                value={form.frequency}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  setForm((prev) => ({
                                    ...prev,
                                    frequency: value,
                                    frequencyOther: value === "Other" ? prev.frequencyOther : "",
                                  }));
                                }}
                                className={selectClass}
                              >
                                <option value="">Select…</option>
                                {frequencyOptions.map((o) => (
                                  <option key={o} value={o}>
                                    {o}
                                  </option>
                                ))}
                              </select>
                            </div>
                            {form.frequency === "Other" && (
                              <div>
                                <label className={labelClass}>Please specify</label>
                                <input
                                  type="text"
                                  value={form.frequencyOther}
                                  onChange={(e) => update("frequencyOther", e.target.value)}
                                  className={inputClass}
                                />
                              </div>
                            )}
                            <p className="text-[14px] text-[#64748b]">
                              You will choose visit times in the next step.
                            </p>
                          </div>
                        </>
                      )}

                      {step === 5 && (
                        <>
                          <StepHeader
                            n={5}
                            title="When & visit times"
                            sub={
                              isHourly
                                ? `Hourly visits are ${HOURLY_MINIMUM_HOURS} hours minimum, between 8am and 8pm. Live-in is priced separately and confirmed in writing.`
                                : "Live-in support is quoted weekly. We confirm everything in writing before you agree."
                            }
                          />
                          <div className="space-y-6">
                            <div>
                              <p className={labelClass}>Type of support *</p>
                              <div className="mt-3 space-y-2.5">
                                {supportTypeOptions.map((opt) => (
                                  <label
                                    key={opt.value}
                                    className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 px-4 py-3.5 transition-all ${
                                      form.supportType === opt.value
                                        ? "border-[#1F7A7A] bg-[#1F7A7A]/5"
                                        : "border-[#e5e7eb] hover:border-[#1F7A7A]/40"
                                    }`}
                                  >
                                    <input
                                      type="radio"
                                      name="supportType"
                                      checked={form.supportType === opt.value}
                                      onChange={() => update("supportType", opt.value)}
                                      className="h-[18px] w-[18px] text-[#1F7A7A]"
                                    />
                                    <span className="text-[15px] text-[#374151]">{opt.label}</span>
                                  </label>
                                ))}
                              </div>
                            </div>

                            {isHourly && (
                              <>
                                <div>
                                  <p className={labelClass}>Dates (optional)</p>
                                  <p className="mb-3 text-[14px] text-[#64748b]">
                                    Tap days on the calendar, or use the shortcuts below.
                                  </p>
                                  <div className="mb-3 flex flex-wrap gap-2">
                                    <button
                                      type="button"
                                      onClick={selectEveryDay}
                                      className="rounded-lg border border-[#e8ecec] bg-white px-3 py-1.5 text-[13px] font-medium text-[#1F7A7A] hover:bg-[#1F7A7A]/5"
                                    >
                                      Next 2 weeks, every day
                                    </button>
                                    <button
                                      type="button"
                                      onClick={selectEveryWeekday}
                                      className="rounded-lg border border-[#e8ecec] bg-white px-3 py-1.5 text-[13px] font-medium text-[#1F7A7A] hover:bg-[#1F7A7A]/5"
                                    >
                                      Weekdays only
                                    </button>
                                  </div>
                                  <TwoMonthCalendar
                                    selectedDates={form.selectedDates}
                                    onChange={(dates) => update("selectedDates", dates)}
                                  />
                                </div>

                                <div className="grid gap-5 sm:grid-cols-2">
                                  <div>
                                    <label className={labelClass}>From (8am–8pm) *</label>
                                    <select
                                      value={form.timeFrom}
                                      onChange={(e) => update("timeFrom", e.target.value)}
                                      className={selectClass}
                                    >
                                      <option value="">Select…</option>
                                      {TIME_OPTIONS.map((t) => (
                                        <option key={`from-${t}`} value={t}>
                                          {t}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                  <div>
                                    <label className={labelClass}>To (8am–8pm) *</label>
                                    <select
                                      value={form.timeTo}
                                      onChange={(e) => update("timeTo", e.target.value)}
                                      className={selectClass}
                                    >
                                      <option value="">Select…</option>
                                      {TIME_OPTIONS.map((t) => (
                                        <option key={`to-${t}`} value={t}>
                                          {t}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>

                                <div>
                                  <label className={labelClass}>
                                    Anything else we should know? (optional)
                                  </label>
                                  <p className="mb-2 text-[14px] text-[#64748b]">
                                    Key safe code, how to get in if you are out, drop shopping at the
                                    door, or anything else about the visit.
                                  </p>
                                  <textarea
                                    value={form.timingNotes}
                                    onChange={(e) => update("timingNotes", e.target.value)}
                                    rows={3}
                                    className={inputClass}
                                    placeholder="e.g. key safe code, drop shopping if I am out…"
                                  />
                                </div>
                              </>
                            )}
                          </div>
                        </>
                      )}

                      {step === 6 && (
                        <>
                          <StepHeader
                            n={6}
                            title="Consent and pricing"
                            sub="Please confirm you are happy for us to use your details to reply."
                          />
                          <div className="rounded-xl border-2 border-[#e5e7eb] bg-[#F8FAFA] p-5">
                            <label className="flex cursor-pointer items-start gap-3">
                              <input
                                type="checkbox"
                                checked={form.consent}
                                onChange={(e) => update("consent", e.target.checked)}
                                className="mt-1 h-[18px] w-[18px] rounded border-[#d1d5db] text-[#1F7A7A]"
                              />
                              <span className="text-[15px] leading-relaxed text-[#374151]">
                                I understand hourly visits are {HOURLY_RATE} with a minimum of{" "}
                                {HOURLY_MINIMUM_HOURS} hours per booking, and that live-in support
                                is priced separately (from around £1,500 per week as a guide). We
                                will confirm exact costs in writing. I am happy for Friendly Support
                                Limited to use my details to respond, in line with your{" "}
                                <Link href="/privacy" className="font-semibold text-[#1F7A7A] hover:underline">
                                  privacy policy
                                </Link>
                                . *
                              </span>
                            </label>
                          </div>
                        </>
                      )}

                      <div className="mt-10 flex items-center justify-between gap-4 border-t border-[#f0f0f0] pt-8">
                        <button
                          type="button"
                          onClick={() => setStep((s) => s - 1)}
                          disabled={step === 1}
                          className={`rounded-xl px-7 py-3 text-[15px] font-semibold transition-all ${
                            step === 1
                              ? "cursor-not-allowed border border-[#e5e7eb] text-[#94a3b8]"
                              : "border-2 border-[#1F7A7A] text-[#1F7A7A] hover:bg-[#1F7A7A]/5"
                          }`}
                        >
                          Back
                        </button>
                        {step < TOTAL_STEPS ? (
                          <button
                            type="button"
                            onClick={() => setStep((s) => s + 1)}
                            disabled={!canProceed()}
                            className={`rounded-xl px-10 py-3 text-[15px] font-semibold transition-all ${
                              canProceed()
                                ? "bg-[#1F7A7A] text-white shadow-md hover:bg-[#1a6565]"
                                : "cursor-not-allowed bg-[#e5e7eb] text-[#94a3b8]"
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
                                ? "bg-[#1F7A7A] text-white shadow-md hover:bg-[#1a6565]"
                                : "cursor-not-allowed bg-[#e5e7eb] text-[#94a3b8]"
                            }`}
                          >
                            Send this to Friendly Support
                          </button>
                        )}
                      </div>
                    </div>
                  </form>
                </div>

                <BookSidebar />
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
