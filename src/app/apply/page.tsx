"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_EMAIL, SITE_HOURS, SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/data/siteContact";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;
const SLOTS = [
  { label: "Morning", hint: "8am – 12pm" },
  { label: "Afternoon", hint: "12pm – 5pm" },
  { label: "Evening", hint: "5pm – 9pm" },
] as const;

const HOURS_OPTIONS = [
  "Up to 8 hours",
  "8 – 16 hours",
  "16 – 24 hours",
  "24 – 35 hours",
  "As much as you have",
];

const TRAVEL_OPTIONS = [
  "Walking or cycling distance only",
  "Up to 20 minutes",
  "Up to 40 minutes",
  "Happy to travel further",
];

const EXPERIENCE_OPTIONS = [
  "Paid care or support work",
  "Nursing or healthcare",
  "Looked after a relative or friend",
  "Volunteering with older people",
  "Hospitality or customer service",
  "None of these — but I would like to learn",
];

const HEARD_OPTIONS = [
  "Facebook",
  "Indeed or a job site",
  "A noticeboard or shop window",
  "Someone told me about you",
  "Somewhere else",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  postcode: string;
  rightToWork: string[];
  availability: string[];
  hoursWanted: string[];
  travel: string[];
  experience: string[];
  about: string;
  dbs: string[];
  drive: string[];
  references: string[];
  heardAbout: string[];
  adjustments: string;
  consent: boolean;
};

function initialForm(): FormState {
  return {
    name: "",
    email: "",
    phone: "",
    postcode: "",
    rightToWork: [],
    availability: [],
    hoursWanted: [],
    travel: [],
    experience: [],
    about: "",
    dbs: [],
    drive: [],
    references: [],
    heardAbout: [],
    adjustments: "",
    consent: false,
  };
}

function SectionTitle({ n, title }: { n: number; title: string }) {
  return (
    <div className="mb-6 flex items-center gap-3 border-b border-[#e8ecec] pb-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1F7A7A] text-sm font-bold text-white">
        {n}
      </span>
      <h2 className="font-heading text-xl font-bold text-[#1a3d3d]">{title}</h2>
    </div>
  );
}

function Checkbox({
  checked,
  onChange,
  label,
  strong,
}: {
  checked: boolean;
  onChange: () => void;
  label: ReactNode;
  strong?: boolean;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3 py-1.5">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="mt-1 h-[18px] w-[18px] shrink-0 rounded border-[#d1d5db] text-[#1F7A7A] focus:ring-[#1F7A7A]/25"
      />
      <span className={`text-[15px] leading-relaxed text-[#374151] ${strong ? "font-semibold" : ""}`}>
        {label}
      </span>
    </label>
  );
}

function toggleValue(list: string[], value: string, exclusive = false): string[] {
  if (exclusive) {
    return list.includes(value) ? [] : [value];
  }
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

export default function ApplyPage() {
  const formTs = useRef(Date.now());
  const formSectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormState>(initialForm);
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    // Land on the form when arriving via Apply Now
    if (!submitted) {
      const id = window.setTimeout(() => {
        formSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
      return () => window.clearTimeout(id);
    }
  }, [submitted]);

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const inputClass =
    "w-full rounded-xl border border-[#e0e6e8] bg-white px-4 py-3.5 text-[16px] text-[#1a3d3d] transition-all focus:border-[#1F7A7A] focus:outline-none focus:ring-2 focus:ring-[#1F7A7A]/25";
  const labelClass = "mb-2 block text-[15px] font-semibold text-[#1a3d3d]";
  const hintClass = "mb-3 block text-[14px] text-[#64748b]";

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setFormError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          website: honeypot,
          formTs: formTs.current,
        }),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        error?: string;
        errors?: Record<string, string>;
      };

      if (data.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "auto" });
        return;
      }

      const firstFieldError = data.errors ? Object.values(data.errors)[0] : undefined;
      setFormError(
        firstFieldError ||
          data.error ||
          "Sorry, we could not send your application just now. Please email info@friendlysupportlimited.co.uk or call 07384 440748."
      );
    } catch {
      setFormError(
        "Sorry, we could not send your application just now. Please email info@friendlysupportlimited.co.uk or call 07384 440748."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFA]">
      <Header />

      <main id="main-content">
        {/* Job advert */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1a3d3d] via-[#1F7A7A] to-[#16403E] py-14 sm:py-20">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mx-auto mb-6 inline-flex rounded-xl bg-white p-3 shadow-lg sm:p-4">
              <Image
                src="/fs-logo.png"
                alt="Friendly Support Limited"
                width={220}
                height={80}
                className="h-auto w-[180px] object-contain sm:w-[220px]"
                priority
              />
            </div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-white/70">
              Now hiring across London
            </p>
            <h1 className="font-heading mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem]">
              Companion &amp; Home Support Worker
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-white/85">
              Friendly company, conversation, shopping, walks and a little help around the house.
              No personal care. No medication. No nursing tasks.
            </p>

            <div className="mx-auto mt-8 grid max-w-xl gap-3 text-left sm:grid-cols-2">
              {[
                "Visits from 2 hours",
                "Flexible hours that suit you",
                "Work close to home",
                "Training provided",
                "No CV needed to apply",
                "Reply within 3 working days",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 rounded-lg bg-white/10 px-3 py-2.5 text-[14px] text-white backdrop-blur-sm"
                >
                  <span className="mt-0.5 text-[#A7F3D0]" aria-hidden>
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {!submitted && (
              <div className="mt-10">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-[16px] font-bold text-[#1F7A7A] shadow-lg transition-all hover:bg-[#F0FDFA] hover:shadow-xl"
                >
                  Apply Now
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>
                <p className="mt-4 text-[14px] text-white/70">
                  Takes about four minutes · Or call{" "}
                  <a href={`tel:${SITE_PHONE_TEL}`} className="font-semibold text-white underline">
                    {SITE_PHONE_DISPLAY}
                  </a>
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="pt-10 pb-20 sm:pt-12 sm:pb-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {!submitted && (
              <div className="mb-8 rounded-2xl border border-[#e8ecec] bg-white p-6 shadow-sm sm:p-8">
                <h2 className="font-heading text-xl font-bold text-[#1a3d3d]">
                  What the job involves
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-[#4a5568]">
                  You will spend time with adults in their homes and in the community — company,
                  conversation, a walk, shopping, light help around the house. Kindness and
                  reliability matter far more than experience, and we train you properly.
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-[#4a5568]">
                  This is <strong className="text-[#1a3d3d]">not personal care</strong>. You will
                  never be asked to wash or dress anyone, handle medication, or do any nursing task.
                </p>
              </div>
            )}

            <div ref={formSectionRef} className="scroll-mt-24">
            {submitted ? (
              <div className="rounded-2xl border border-[#e8ecec] bg-white p-8 shadow-sm">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#7FBF7F]/20">
                  <svg className="h-7 w-7 text-[#2d7a2d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-heading mb-3 text-2xl font-bold text-[#1a3d3d]">
                  Application received
                </h2>
                <p className="text-[16px] leading-relaxed text-[#1a3d3d]">
                  Thank you. Your application has been sent to{" "}
                  <strong>{SITE_EMAIL}</strong>. Someone from our team will read it properly and get
                  back to you within three working days.
                </p>
                <p className="mt-4 text-[15px] text-[#4a5568]">
                  Prefer to talk? Call{" "}
                  <a href={`tel:${SITE_PHONE_TEL}`} className="font-semibold text-[#1F7A7A] hover:underline">
                    {SITE_PHONE_DISPLAY}
                  </a>
                  , {SITE_HOURS}.
                </p>
                <Link
                  href="/"
                  className="mt-6 inline-flex rounded-xl bg-[#1F7A7A] px-6 py-3 text-[15px] font-semibold text-white hover:bg-[#1a6565]"
                >
                  Back to home
                </Link>
              </div>
            ) : (
              <>
              <div className="mb-6 rounded-xl border-l-4 border-[#1F7A7A] bg-[#EEF3F1] px-4 py-3 text-[15px] leading-relaxed text-[#1a3d3d]">
                <strong>Application form</strong> — about four minutes. No CV or covering letter
                needed. We would rather hear from you in your own words.
              </div>
              <form
                onSubmit={handleSubmit}
                className="relative space-y-10 rounded-2xl border border-[#e8ecec] bg-white p-6 shadow-sm sm:p-8"
              >
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute left-[-9999px] h-px w-px overflow-hidden"
                />

                {formError && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-800">
                    {formError}
                  </div>
                )}

                {/* 1 About you */}
                <section>
                  <SectionTitle n={1} title="About you" />
                  <div className="space-y-5">
                    <div>
                      <label className={labelClass} htmlFor="name">
                        Your name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        className={inputClass}
                        required
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="email">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className={inputClass}
                        required
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="phone">
                        Phone *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className={`${inputClass} max-w-xs`}
                        required
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="postcode">
                        Your postcode *
                      </label>
                      <span className={hintClass}>
                        We use this to find you work close to home, so you are not crossing London
                        between visits.
                      </span>
                      <input
                        id="postcode"
                        type="text"
                        autoComplete="postal-code"
                        value={form.postcode}
                        onChange={(e) => update("postcode", e.target.value)}
                        className={`${inputClass} max-w-[10rem] uppercase`}
                        required
                      />
                    </div>
                    <div>
                      <p className={labelClass}>Do you have the right to work in the UK?</p>
                      <span className={hintClass}>We are not able to offer visa sponsorship.</span>
                      <div className="flex flex-wrap gap-x-6">
                        {["Yes", "Not yet"].map((opt) => (
                          <Checkbox
                            key={opt}
                            checked={form.rightToWork.includes(opt)}
                            onChange={() =>
                              update("rightToWork", toggleValue(form.rightToWork, opt, true))
                            }
                            label={opt}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* 2 Availability */}
                <section>
                  <SectionTitle n={2} title="When could you work?" />
                  <p className={hintClass}>
                    Tick every block you could usually manage. Nothing here is a commitment — it just
                    tells us which clients might suit you. Our visits are a minimum of two hours.
                  </p>

                  <div className="mb-6 overflow-x-auto rounded-xl border border-[#e8ecec]">
                    <table className="w-full min-w-[520px] border-collapse text-center text-[13px]">
                      <thead>
                        <tr className="bg-[#EEF3F1] text-[#1a3d3d]">
                          <th className="px-3 py-2.5 text-left font-semibold" />
                          {DAYS.map((d) => (
                            <th key={d} className="px-1 py-2.5 font-semibold">
                              {d}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {SLOTS.map((slot) => (
                          <tr key={slot.label} className="border-t border-[#e8ecec]">
                            <th className="px-3 py-3 text-left font-semibold text-[#1a3d3d]">
                              {slot.label}
                              <span className="mt-0.5 block text-[11px] font-normal text-[#64748b]">
                                {slot.hint}
                              </span>
                            </th>
                            {DAYS.map((day) => {
                              const value = `${day} ${slot.label}`;
                              const checked = form.availability.includes(value);
                              return (
                                <td key={value} className="px-1 py-2">
                                  <label className="inline-flex cursor-pointer items-center justify-center">
                                    <input
                                      type="checkbox"
                                      checked={checked}
                                      onChange={() =>
                                        update(
                                          "availability",
                                          toggleValue(form.availability, value)
                                        )
                                      }
                                      className="h-[18px] w-[18px] rounded border-[#d1d5db] text-[#1F7A7A]"
                                      aria-label={`${day} ${slot.label}`}
                                    />
                                  </label>
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mb-5">
                    <p className={labelClass}>Roughly how many hours a week would suit you?</p>
                    {HOURS_OPTIONS.map((opt) => (
                      <Checkbox
                        key={opt}
                        checked={form.hoursWanted.includes(opt)}
                        onChange={() =>
                          update("hoursWanted", toggleValue(form.hoursWanted, opt, true))
                        }
                        label={opt}
                      />
                    ))}
                  </div>

                  <div>
                    <p className={labelClass}>How far would you be willing to travel to a visit?</p>
                    <span className={hintClass}>
                      You cover your own travel, so we will only offer you work within reach.
                    </span>
                    {TRAVEL_OPTIONS.map((opt) => (
                      <Checkbox
                        key={opt}
                        checked={form.travel.includes(opt)}
                        onChange={() => update("travel", toggleValue(form.travel, opt, true))}
                        label={opt}
                      />
                    ))}
                  </div>
                </section>

                {/* 3 Experience */}
                <section>
                  <SectionTitle n={3} title="Your experience" />
                  <p className={hintClass}>
                    Tick anything that applies. None of it is essential — kindness and reliability
                    matter far more, and we train you properly.
                  </p>
                  <div className="mb-5">
                    {EXPERIENCE_OPTIONS.map((opt) => (
                      <Checkbox
                        key={opt}
                        checked={form.experience.includes(opt)}
                        onChange={() =>
                          update("experience", toggleValue(form.experience, opt))
                        }
                        label={opt}
                      />
                    ))}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="about">
                      Tell us a little about yourself *
                    </label>
                    <span className={hintClass}>
                      Why does this appeal to you? A few honest sentences is all we are after.
                    </span>
                    <textarea
                      id="about"
                      rows={6}
                      value={form.about}
                      onChange={(e) => update("about", e.target.value)}
                      className={inputClass}
                      required
                    />
                  </div>
                </section>

                {/* 4 Practical */}
                <section>
                  <SectionTitle n={4} title="A few practical things" />
                  <div className="space-y-5">
                    <div>
                      <p className={labelClass}>
                        Do you already have a DBS certificate on the Update Service?
                      </p>
                      <span className={hintClass}>
                        Not a problem at all if you do not — we arrange the check.
                      </span>
                      <div className="flex flex-wrap gap-x-6">
                        {["Yes", "No", "Not sure"].map((opt) => (
                          <Checkbox
                            key={opt}
                            checked={form.dbs.includes(opt)}
                            onChange={() => update("dbs", toggleValue(form.dbs, opt, true))}
                            label={opt}
                          />
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className={labelClass}>Do you drive, with use of a car?</p>
                      <span className={hintClass}>
                        Optional. The job does not require it — it just occasionally helps.
                      </span>
                      <div className="flex flex-wrap gap-x-6">
                        {["Yes", "No"].map((opt) => (
                          <Checkbox
                            key={opt}
                            checked={form.drive.includes(opt)}
                            onChange={() => update("drive", toggleValue(form.drive, opt, true))}
                            label={opt}
                          />
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className={labelClass}>Could you provide two references?</p>
                      <div className="flex flex-wrap gap-x-6">
                        {["Yes", "I would need to check"].map((opt) => (
                          <Checkbox
                            key={opt}
                            checked={form.references.includes(opt)}
                            onChange={() =>
                              update("references", toggleValue(form.references, opt, true))
                            }
                            label={opt}
                          />
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className={labelClass}>How did you hear about us?</p>
                      {HEARD_OPTIONS.map((opt) => (
                        <Checkbox
                          key={opt}
                          checked={form.heardAbout.includes(opt)}
                          onChange={() =>
                            update("heardAbout", toggleValue(form.heardAbout, opt))
                          }
                          label={opt}
                        />
                      ))}
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="adjust">
                        Is there anything that would make applying easier for you?
                      </label>
                      <span className={hintClass}>
                        Optional. If you would prefer a phone conversation to a written form, or need
                        us to adjust anything, just say.
                      </span>
                      <textarea
                        id="adjust"
                        rows={3}
                        value={form.adjustments}
                        onChange={(e) => update("adjustments", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>
                </section>

                {/* 5 Consent */}
                <section>
                  <SectionTitle n={5} title="Your permission" />
                  <div className="rounded-xl bg-[#EEF3F1] p-5">
                    <Checkbox
                      checked={form.consent}
                      onChange={() => update("consent", !form.consent)}
                      strong
                      label="I am happy for Friendly Support Limited to hold these details in order to consider my application. *"
                    />
                    <p className="mt-3 text-[14px] leading-relaxed text-[#64748b]">
                      We keep applications for six months and then delete them. We never share them
                      with anyone else, and you can ask us to remove yours at any time by emailing{" "}
                      <a
                        href={`mailto:${SITE_EMAIL}`}
                        className="font-semibold text-[#1F7A7A] hover:underline"
                      >
                        {SITE_EMAIL}
                      </a>
                      .
                    </p>
                  </div>
                </section>

                <div className="border-t-2 border-[#1F7A7A] pt-6">
                  <p className="text-[15px] font-semibold text-[#1a3d3d]">
                    Send your application
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#64748b]">
                    Someone from our small team will read this properly and get back to you within
                    three working days. Would rather talk? Call{" "}
                    <a
                      href={`tel:${SITE_PHONE_TEL}`}
                      className="font-semibold text-[#1F7A7A] hover:underline"
                    >
                      {SITE_PHONE_DISPLAY}
                    </a>
                    , any day between 10am and 9pm.
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`mt-5 rounded-xl px-8 py-3.5 text-[15px] font-semibold transition-all ${
                      submitting
                        ? "cursor-not-allowed bg-[#e5e7eb] text-[#94a3b8]"
                        : "bg-[#1F7A7A] text-white shadow-md hover:bg-[#1a6565]"
                    }`}
                  >
                    {submitting ? "Sending…" : "Send application"}
                  </button>
                </div>
              </form>
              </>
            )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
