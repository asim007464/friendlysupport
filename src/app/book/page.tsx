"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TOTAL_STEPS = 6;

const STAGES = [
  { num: 1, title: "About you" },
  { num: 2, title: "Client details" },
  { num: 3, title: "Emergency contacts" },
  { num: 4, title: "Services needed" },
  { num: 5, title: "Schedule & frequency" },
  { num: 6, title: "Additional info & consent" },
];

const fillerRoles = [
  "I am the Client",
  "I am a Relative of the Client",
  "I am a Friend of the Client",
  "I am a Legal Guardian / Power of Attorney",
  "Other",
];

const titleOptions = ["Mr", "Mrs", "Ms", "Dr", "Other"];

const serviceCategories = [
  {
    heading: "Companionship & Social Support",
    items: [
      "Companionship — friendly conversation and social interaction",
      "Befriending visits — regular visits to reduce loneliness and isolation",
      "Sitting service — company while family/carers take a break",
      "Accompanying to social events, clubs, or community activities",
      "Accompanying to religious services or places of worship",
      "Accompanying to family functions, parties, or celebrations",
      "Reading to the client (books, newspapers, letters)",
      "Playing games, puzzles, or engaging in hobbies together",
      "Support with letter writing and correspondence",
    ],
  },
  {
    heading: "Household & Domestic Support",
    items: [
      "Light housekeeping — dusting, vacuuming, mopping, tidying",
      "Laundry — washing, drying, ironing, putting away clothes",
      "Changing bed linen and making beds",
      "Washing up and keeping the kitchen clean and tidy",
      "General tidying and organising of living spaces",
      "Decluttering and organising wardrobes, cupboards, drawers",
      "Taking out rubbish and recycling",
      "Watering indoor plants",
    ],
  },
  {
    heading: "Meal Preparation & Nutrition Support",
    items: [
      "Meal preparation — cooking breakfast, lunch, dinner, snacks",
      "Help with cooking — assisting the client in preparing their own meals",
      "Meal planning and creating shopping lists",
      "Preparing meals according to dietary requirements or preferences",
      "Making hot and cold drinks throughout the visit",
      "Ensuring client has adequate food and drink supplies",
      "Washing up and cleaning the kitchen after meals",
    ],
  },
  {
    heading: "Shopping & Errands",
    items: [
      "Grocery shopping — accompanying or on their behalf",
      "General shopping — clothes, household items, gifts, etc.",
      "Collecting prescriptions from the pharmacy",
      "Posting letters and parcels",
      "Picking up dry cleaning or other items",
      "Running other errands as required",
      "Online shopping assistance — helping order items online",
    ],
  },
  {
    heading: "Transport & Escort Services",
    items: [
      "Taking client to GP appointments",
      "Taking client to hospital appointments or visits",
      "Taking client to dental or optician appointments",
      "Accompanying to shops or shopping centres",
      "Escorting to social events and functions",
      "Accompanying on walks or outings",
      "Taking client to visit friends or family",
      "Airport, train station, or bus station drop-off and pick-up",
    ],
  },
  {
    heading: "Pet Care",
    items: [
      "Dog walking",
      "Feeding pets (dogs, cats, birds, fish, etc.)",
      "Cleaning pet areas, litter trays, and cages",
      "Taking pets to the vet",
      "General pet care and companionship for client's animals",
    ],
  },
  {
    heading: "Technology & Administrative Assistance",
    items: [
      "Help with using mobile phones, tablets, or computers",
      "Assistance with video calls to family and friends",
      "Help with emails and social media",
      "Assistance with online banking (non-financial advice)",
      "Help with filling in forms and paperwork",
      "Organising and filing documents and correspondence",
      "Reminding about appointments and important dates",
    ],
  },
  {
    heading: "Light Garden & Home Maintenance",
    items: [
      "Light gardening — watering plants, weeding, sweeping paths",
      "Bringing in post and parcels",
      "Putting out and bringing in bins on collection days",
      "Waiting in for deliveries or tradespeople",
      "Checking the home is safe and secure (windows, doors, lights)",
    ],
  },
  {
    heading: "Wellbeing & Lifestyle Support",
    items: [
      "Encouraging and supporting gentle exercise and mobility",
      "Prompting and reminding about medication (NOT administering)",
      "Supporting daily routines and structure",
      "Providing emotional support and a listening ear",
      "Encouraging hobbies, interests, and creative activities",
    ],
  },
];

const careTypeOptions = [
  "Hourly Visiting Care (£25/hour, minimum 2 hours per visit)",
  "Daytime Care — 8:00 AM to 8:00 PM (12 hours)",
  "Night-Time Care — 8:00 PM to 8:00 AM (12 hours)",
  "24-Hour Care — round-the-clock care (day and night)",
  "Live-In Carer — carer lives in the client's home",
  "Full-Time Care — 7 days a week (from £1,200/week)",
];

const visitFrequencyOptions = [
  "Once a day",
  "Twice a day",
  "Three times a day",
  "Other",
];

const hoursPerVisitOptions = [
  "2 hours (minimum)",
  "3 hours",
  "4 hours",
  "5 hours",
  "6 hours",
  "Other",
];

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Every Day (7 days a week)"];

const visitTimeSlots = [
  "Early Morning (6:00 AM – 9:00 AM)",
  "Morning (9:00 AM – 12:00 PM)",
  "Afternoon (12:00 PM – 5:00 PM)",
  "Evening (5:00 PM – 8:00 PM)",
  "Night (8:00 PM – 8:00 AM)",
  "Flexible — no specific time preference",
];

const hearAboutUsOptions = [
  "Internet / Website Search",
  "Social Media (Facebook, Instagram, etc.)",
  "Recommendation from Friend or Family",
  "GP / Hospital / Healthcare Professional",
  "Local Authority / Social Services",
  "Leaflet / Flyer / Advertisement",
  "Other",
];

function createInitialFormData() {
  return {
    fillerRole: "",
    fillerRoleOther: "",
    fillerTitle: "",
    fillerFirstName: "",
    fillerSurname: "",
    fillerRelationship: "",
    fillerAddress1: "",
    fillerAddress2: "",
    fillerCity: "",
    fillerCounty: "",
    fillerPostcode: "",
    fillerPhone: "",
    fillerMobile: "",
    fillerEmail: "",

    clientTitle: "",
    clientFirstName: "",
    clientSurname: "",
    clientDob: "",
    clientGender: "",
    clientAddress1: "",
    clientAddress2: "",
    clientCity: "",
    clientCounty: "",
    clientPostcode: "",
    clientPhone: "",
    clientMobile: "",
    clientEmail: "",
    gpName: "",
    gpSurgery: "",
    gpPhone: "",

    nokTitle: "",
    nokFirstName: "",
    nokSurname: "",
    nokRelationship: "",
    nokAddress1: "",
    nokAddress2: "",
    nokCity: "",
    nokCounty: "",
    nokPostcode: "",
    nokPhone: "",
    nokMobile: "",
    nokEmail: "",

    emergencyName: "",
    emergencyRelationship: "",
    emergencyPhone: "",
    emergencyMobile: "",

    selectedServices: [] as string[],
    otherServices: "",

    careTypes: [] as string[],
    visitFrequency: "",
    visitFrequencyOther: "",
    hoursPerVisit: "",
    hoursPerVisitOther: "",
    careDays: [] as string[],
    visitTimes: [] as string[],
    startDate: "",
    ongoingOrTemp: "",
    endDate: "",

    medicalConditions: "",
    allergies: "",
    mobilityIssues: "",
    dietaryRequirements: "",
    communicationNeeds: "",
    petsInHome: "",
    keyAccess: "",
    carerPreferences: "",
    otherInfo: "",
    hearAboutUs: "",
    hearAboutUsOther: "",

    consentTruth: false,
    consentGdpr: false,
    consentContact: false,
    consentPricing: false,
    consentNonRegulated: false,
  };
}

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [formData, setFormData] = useState(createInitialFormData);
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (heading: string) => {
    setOpenCategories((prev) => ({ ...prev, [heading]: !prev[heading] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const canProceed = () => {
    if (currentStage === 1) {
      return !!formData.fillerRole && !!formData.fillerFirstName.trim() && !!formData.fillerEmail.trim();
    }
    if (currentStage === 2) {
      return !!formData.clientFirstName.trim() && !!formData.clientSurname.trim();
    }
    if (currentStage === 6) {
      return formData.consentTruth && formData.consentGdpr && formData.consentContact && formData.consentPricing && formData.consentNonRegulated;
    }
    return true;
  };

  const goNext = () => {
    if (currentStage < TOTAL_STEPS) setCurrentStage((s) => s + 1);
  };
  const goBack = () => {
    if (currentStage > 1) setCurrentStage((s) => s - 1);
  };

  const updateField = (name: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleArrayItem = (name: string, item: string) => {
    setFormData((prev) => {
      const arr = (prev as Record<string, unknown>)[name] as string[];
      return {
        ...prev,
        [name]: arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item],
      };
    });
  };

  const inputClass =
    "w-full rounded-lg border border-[#d1d5db] bg-white px-4 py-3 text-[15px] text-[#1a3d3d] transition-all focus:border-[#1F7A7A] focus:outline-none focus:ring-2 focus:ring-[#1F7A7A]/20";
  const labelClass = "mb-1.5 block text-[14px] font-semibold text-[#1a3d3d]";
  const sectionTitle = "mb-1 text-lg font-bold text-[#1a3d3d] font-heading";
  const sectionSub = "text-[14px] text-[#64748b] mb-5";

  const isClient = formData.fillerRole === "I am the Client";

  return (
    <div className="min-h-screen bg-[#F8FAFA]">
      <Header />

      <main>
        <section className="relative pt-10 pb-20 sm:pt-14 sm:pb-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h1 className="font-heading text-3xl font-bold text-[#1a3d3d] sm:text-4xl">
                Care Request Booking Form
              </h1>
              <p className="mt-2 text-[15px] text-[#4a5568]">
                Please complete this form to request non-regulated care services. A member of our
                team will contact you to discuss your requirements. Only have a quick question?{" "}
                <Link href="/contact" className="font-semibold text-[#1F7A7A] hover:underline">
                  Contact us
                </Link>{" "}
                instead.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-2xl border border-[#e8ecec] bg-white p-8 text-center shadow-sm">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#1F7A7A]/10">
                  <svg className="h-8 w-8 text-[#1F7A7A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-heading mb-3 text-2xl font-bold text-[#1a3d3d]">
                  Thank you for your booking request
                </h2>
                <p className="mb-6 text-[15px] text-[#4a5568]">
                  We&apos;ve received your details. A member of our team will be in touch within 24–48
                  hours to discuss your care requirements — no pressure, just a friendly chat.
                </p>
                <button
                  type="button"
                  onClick={() => { setSubmitted(false); setCurrentStage(1); setFormData(createInitialFormData()); }}
                  className="rounded-lg bg-[#1F7A7A] px-6 py-3 text-[15px] font-semibold text-white hover:bg-[#1a6565]"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Progress bar */}
                <div className="mb-6 flex items-center gap-3">
                  <span className="rounded-md bg-[#1a3d3d] px-3 py-1.5 text-sm font-bold text-white">
                    Step {currentStage} of {TOTAL_STEPS}
                  </span>
                  <span className="text-[14px] font-medium text-[#4a5568]">
                    {STAGES[currentStage - 1].title}
                  </span>
                  <div className="ml-auto h-1.5 flex-1 max-w-[160px] overflow-hidden rounded-full bg-[#e8ecec]">
                    <div
                      className="h-full rounded-full bg-[#1F7A7A] transition-all duration-300"
                      style={{ width: `${(currentStage / TOTAL_STEPS) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="rounded-2xl border border-[#e8ecec] bg-white p-6 shadow-sm sm:p-8">

                  {/* ───── STEP 1: About You ───── */}
                  {currentStage === 1 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className={sectionTitle}>Person completing this form</h3>
                        <p className={sectionSub}>Please indicate who is filling in this form.</p>
                      </div>

                      <div>
                        <label className={labelClass}>I am... *</label>
                        <div className="mt-1 space-y-2">
                          {fillerRoles.map((role) => (
                            <label
                              key={role}
                              className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-2.5 transition-all ${
                                formData.fillerRole === role
                                  ? "border-[#1F7A7A] bg-[#1F7A7A]/5"
                                  : "border-[#e5e7eb] hover:border-[#1F7A7A]/40"
                              }`}
                            >
                              <input
                                type="radio"
                                name="fillerRole"
                                value={role}
                                checked={formData.fillerRole === role}
                                onChange={() => updateField("fillerRole", role)}
                                className="h-4 w-4 text-[#1F7A7A] focus:ring-[#1F7A7A]"
                              />
                              <span className="text-[15px] text-[#374151]">{role}</span>
                            </label>
                          ))}
                        </div>
                        {formData.fillerRole === "Other" && (
                          <input
                            type="text"
                            value={formData.fillerRoleOther}
                            onChange={(e) => updateField("fillerRoleOther", e.target.value)}
                            className={`${inputClass} mt-2`}
                            placeholder="Please specify"
                          />
                        )}
                      </div>

                      <div className="border-t border-[#f0f0f0] pt-5">
                        <h4 className="mb-4 text-[15px] font-bold text-[#1a3d3d]">Your details</h4>
                        {!isClient && (
                          <p className="mb-4 text-[13px] text-[#64748b]">
                            If you are the client, you may skip to the next step after filling your name and email.
                          </p>
                        )}
                        <div className="grid gap-4 sm:grid-cols-3">
                          <div>
                            <label className={labelClass}>Title</label>
                            <select value={formData.fillerTitle} onChange={(e) => updateField("fillerTitle", e.target.value)} className={inputClass}>
                              <option value="">Select…</option>
                              {titleOptions.map((t) => <option key={t} value={t}>{t}</option>)}
                            </select>
                          </div>
                          <div>
                            <label className={labelClass}>First name *</label>
                            <input type="text" value={formData.fillerFirstName} onChange={(e) => updateField("fillerFirstName", e.target.value)} className={inputClass} required />
                          </div>
                          <div>
                            <label className={labelClass}>Surname</label>
                            <input type="text" value={formData.fillerSurname} onChange={(e) => updateField("fillerSurname", e.target.value)} className={inputClass} />
                          </div>
                        </div>

                        {!isClient && (
                          <div className="mt-4">
                            <label className={labelClass}>Relationship to Client</label>
                            <input type="text" value={formData.fillerRelationship} onChange={(e) => updateField("fillerRelationship", e.target.value)} className={inputClass} />
                          </div>
                        )}

                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                          <div>
                            <label className={labelClass}>Address Line 1</label>
                            <input type="text" value={formData.fillerAddress1} onChange={(e) => updateField("fillerAddress1", e.target.value)} className={inputClass} />
                          </div>
                          <div>
                            <label className={labelClass}>Address Line 2</label>
                            <input type="text" value={formData.fillerAddress2} onChange={(e) => updateField("fillerAddress2", e.target.value)} className={inputClass} />
                          </div>
                        </div>
                        <div className="mt-4 grid gap-4 sm:grid-cols-3">
                          <div>
                            <label className={labelClass}>Town / City</label>
                            <input type="text" value={formData.fillerCity} onChange={(e) => updateField("fillerCity", e.target.value)} className={inputClass} />
                          </div>
                          <div>
                            <label className={labelClass}>County</label>
                            <input type="text" value={formData.fillerCounty} onChange={(e) => updateField("fillerCounty", e.target.value)} className={inputClass} />
                          </div>
                          <div>
                            <label className={labelClass}>Postcode</label>
                            <input type="text" value={formData.fillerPostcode} onChange={(e) => updateField("fillerPostcode", e.target.value)} className={inputClass} />
                          </div>
                        </div>
                        <div className="mt-4 grid gap-4 sm:grid-cols-3">
                          <div>
                            <label className={labelClass}>Telephone</label>
                            <input type="tel" value={formData.fillerPhone} onChange={(e) => updateField("fillerPhone", e.target.value)} className={inputClass} />
                          </div>
                          <div>
                            <label className={labelClass}>Mobile</label>
                            <input type="tel" value={formData.fillerMobile} onChange={(e) => updateField("fillerMobile", e.target.value)} className={inputClass} />
                          </div>
                          <div>
                            <label className={labelClass}>Email *</label>
                            <input type="email" value={formData.fillerEmail} onChange={(e) => updateField("fillerEmail", e.target.value)} className={inputClass} required />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ───── STEP 2: Client Details ───── */}
                  {currentStage === 2 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className={sectionTitle}>Client details</h3>
                        <p className={sectionSub}>Full details of the person who will receive care.</p>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-3">
                        <div>
                          <label className={labelClass}>Title</label>
                          <select value={formData.clientTitle} onChange={(e) => updateField("clientTitle", e.target.value)} className={inputClass}>
                            <option value="">Select…</option>
                            {titleOptions.map((t) => <option key={t} value={t}>{t}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className={labelClass}>First name *</label>
                          <input type="text" value={formData.clientFirstName} onChange={(e) => updateField("clientFirstName", e.target.value)} className={inputClass} required />
                        </div>
                        <div>
                          <label className={labelClass}>Surname *</label>
                          <input type="text" value={formData.clientSurname} onChange={(e) => updateField("clientSurname", e.target.value)} className={inputClass} required />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className={labelClass}>Date of Birth</label>
                          <input type="date" value={formData.clientDob} onChange={(e) => updateField("clientDob", e.target.value)} className={inputClass} />
                        </div>
                        <div>
                          <label className={labelClass}>Gender</label>
                          <select value={formData.clientGender} onChange={(e) => updateField("clientGender", e.target.value)} className={inputClass}>
                            <option value="">Select…</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                            <option value="Prefer not to say">Prefer not to say</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className={labelClass}>Address Line 1</label>
                          <input type="text" value={formData.clientAddress1} onChange={(e) => updateField("clientAddress1", e.target.value)} className={inputClass} />
                        </div>
                        <div>
                          <label className={labelClass}>Address Line 2</label>
                          <input type="text" value={formData.clientAddress2} onChange={(e) => updateField("clientAddress2", e.target.value)} className={inputClass} />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-3">
                        <div>
                          <label className={labelClass}>Town / City</label>
                          <input type="text" value={formData.clientCity} onChange={(e) => updateField("clientCity", e.target.value)} className={inputClass} />
                        </div>
                        <div>
                          <label className={labelClass}>County</label>
                          <input type="text" value={formData.clientCounty} onChange={(e) => updateField("clientCounty", e.target.value)} className={inputClass} />
                        </div>
                        <div>
                          <label className={labelClass}>Postcode</label>
                          <input type="text" value={formData.clientPostcode} onChange={(e) => updateField("clientPostcode", e.target.value)} className={inputClass} />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-3">
                        <div>
                          <label className={labelClass}>Telephone</label>
                          <input type="tel" value={formData.clientPhone} onChange={(e) => updateField("clientPhone", e.target.value)} className={inputClass} />
                        </div>
                        <div>
                          <label className={labelClass}>Mobile</label>
                          <input type="tel" value={formData.clientMobile} onChange={(e) => updateField("clientMobile", e.target.value)} className={inputClass} />
                        </div>
                        <div>
                          <label className={labelClass}>Email</label>
                          <input type="email" value={formData.clientEmail} onChange={(e) => updateField("clientEmail", e.target.value)} className={inputClass} />
                        </div>
                      </div>

                      <div className="border-t border-[#f0f0f0] pt-5">
                        <h4 className="mb-4 text-[15px] font-bold text-[#1a3d3d]">GP information</h4>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label className={labelClass}>GP Name</label>
                            <input type="text" value={formData.gpName} onChange={(e) => updateField("gpName", e.target.value)} className={inputClass} />
                          </div>
                          <div>
                            <label className={labelClass}>GP Telephone</label>
                            <input type="tel" value={formData.gpPhone} onChange={(e) => updateField("gpPhone", e.target.value)} className={inputClass} />
                          </div>
                        </div>
                        <div className="mt-4">
                          <label className={labelClass}>GP Surgery Name & Address</label>
                          <textarea value={formData.gpSurgery} onChange={(e) => updateField("gpSurgery", e.target.value)} rows={2} className={inputClass} />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ───── STEP 3: Emergency Contacts ───── */}
                  {currentStage === 3 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className={sectionTitle}>Next of kin / emergency contact</h3>
                        <p className={sectionSub}>Emergency contact or next of kin information.</p>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-3">
                        <div>
                          <label className={labelClass}>Title</label>
                          <select value={formData.nokTitle} onChange={(e) => updateField("nokTitle", e.target.value)} className={inputClass}>
                            <option value="">Select…</option>
                            {titleOptions.map((t) => <option key={t} value={t}>{t}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className={labelClass}>First name</label>
                          <input type="text" value={formData.nokFirstName} onChange={(e) => updateField("nokFirstName", e.target.value)} className={inputClass} />
                        </div>
                        <div>
                          <label className={labelClass}>Surname</label>
                          <input type="text" value={formData.nokSurname} onChange={(e) => updateField("nokSurname", e.target.value)} className={inputClass} />
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>Relationship to Client</label>
                        <input type="text" value={formData.nokRelationship} onChange={(e) => updateField("nokRelationship", e.target.value)} className={inputClass} />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className={labelClass}>Address Line 1</label>
                          <input type="text" value={formData.nokAddress1} onChange={(e) => updateField("nokAddress1", e.target.value)} className={inputClass} />
                        </div>
                        <div>
                          <label className={labelClass}>Address Line 2</label>
                          <input type="text" value={formData.nokAddress2} onChange={(e) => updateField("nokAddress2", e.target.value)} className={inputClass} />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-3">
                        <div>
                          <label className={labelClass}>Town / City</label>
                          <input type="text" value={formData.nokCity} onChange={(e) => updateField("nokCity", e.target.value)} className={inputClass} />
                        </div>
                        <div>
                          <label className={labelClass}>County</label>
                          <input type="text" value={formData.nokCounty} onChange={(e) => updateField("nokCounty", e.target.value)} className={inputClass} />
                        </div>
                        <div>
                          <label className={labelClass}>Postcode</label>
                          <input type="text" value={formData.nokPostcode} onChange={(e) => updateField("nokPostcode", e.target.value)} className={inputClass} />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-3">
                        <div>
                          <label className={labelClass}>Telephone</label>
                          <input type="tel" value={formData.nokPhone} onChange={(e) => updateField("nokPhone", e.target.value)} className={inputClass} />
                        </div>
                        <div>
                          <label className={labelClass}>Mobile</label>
                          <input type="tel" value={formData.nokMobile} onChange={(e) => updateField("nokMobile", e.target.value)} className={inputClass} />
                        </div>
                        <div>
                          <label className={labelClass}>Email</label>
                          <input type="email" value={formData.nokEmail} onChange={(e) => updateField("nokEmail", e.target.value)} className={inputClass} />
                        </div>
                      </div>

                      <div className="border-t border-[#f0f0f0] pt-5">
                        <h4 className="mb-1 text-[15px] font-bold text-[#1a3d3d]">Second emergency contact (optional)</h4>
                        <p className="mb-4 text-[13px] text-[#64748b]">Leave blank if not applicable.</p>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label className={labelClass}>Full Name</label>
                            <input type="text" value={formData.emergencyName} onChange={(e) => updateField("emergencyName", e.target.value)} className={inputClass} />
                          </div>
                          <div>
                            <label className={labelClass}>Relationship to Client</label>
                            <input type="text" value={formData.emergencyRelationship} onChange={(e) => updateField("emergencyRelationship", e.target.value)} className={inputClass} />
                          </div>
                          <div>
                            <label className={labelClass}>Telephone</label>
                            <input type="tel" value={formData.emergencyPhone} onChange={(e) => updateField("emergencyPhone", e.target.value)} className={inputClass} />
                          </div>
                          <div>
                            <label className={labelClass}>Mobile</label>
                            <input type="tel" value={formData.emergencyMobile} onChange={(e) => updateField("emergencyMobile", e.target.value)} className={inputClass} />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ───── STEP 4: Services Needed ───── */}
                  {currentStage === 4 && (
                    <div className="space-y-5">
                      <div>
                        <h3 className={sectionTitle}>Non-regulated care services</h3>
                        <p className={sectionSub}>
                          Please tick all the services you require. These services do not require CQC
                          registration and do not include personal care (such as bathing, dressing, or
                          administering medication).
                        </p>
                      </div>

                      {serviceCategories.map((cat) => {
                        const isOpen = openCategories[cat.heading] ?? false;
                        const count = cat.items.filter((i) => formData.selectedServices.includes(i)).length;
                        return (
                          <div key={cat.heading} className="rounded-lg border border-[#e5e7eb] overflow-hidden">
                            <button
                              type="button"
                              onClick={() => toggleCategory(cat.heading)}
                              className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-[#F8FAFA]"
                            >
                              <span className="text-[14px] font-bold text-[#1a3d3d]">{cat.heading}</span>
                              <span className="flex items-center gap-2">
                                {count > 0 && (
                                  <span className="rounded-full bg-[#1F7A7A] px-2 py-0.5 text-[11px] font-bold text-white">
                                    {count}
                                  </span>
                                )}
                                <svg
                                  className={`h-4 w-4 text-[#64748b] transition-transform ${isOpen ? "rotate-180" : ""}`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </span>
                            </button>
                            {isOpen && (
                              <div className="border-t border-[#f0f0f0] px-4 py-3 space-y-1.5">
                                {cat.items.map((item) => (
                                  <label key={item} className="flex cursor-pointer items-start gap-2.5 py-1">
                                    <input
                                      type="checkbox"
                                      checked={formData.selectedServices.includes(item)}
                                      onChange={() => toggleArrayItem("selectedServices", item)}
                                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#d1d5db] text-[#1F7A7A] focus:ring-[#1F7A7A]/30"
                                    />
                                    <span className="text-[14px] text-[#374151]">{item}</span>
                                  </label>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}

                      <div>
                        <label className={labelClass}>Other services required (please describe)</label>
                        <textarea value={formData.otherServices} onChange={(e) => updateField("otherServices", e.target.value)} rows={3} className={inputClass} />
                      </div>
                    </div>
                  )}

                  {/* ───── STEP 5: Schedule & Frequency ───── */}
                  {currentStage === 5 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className={sectionTitle}>Care schedule & frequency</h3>
                        <p className={sectionSub}>Please indicate your preferred care schedule.</p>
                      </div>

                      <div>
                        <label className={labelClass}>Type of care required</label>
                        <div className="mt-1 space-y-2">
                          {careTypeOptions.map((opt) => (
                            <label
                              key={opt}
                              className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-2.5 transition-all ${
                                formData.careTypes.includes(opt)
                                  ? "border-[#1F7A7A] bg-[#1F7A7A]/5"
                                  : "border-[#e5e7eb] hover:border-[#1F7A7A]/40"
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={formData.careTypes.includes(opt)}
                                onChange={() => toggleArrayItem("careTypes", opt)}
                                className="h-4 w-4 shrink-0 rounded border-[#d1d5db] text-[#1F7A7A] focus:ring-[#1F7A7A]/30"
                              />
                              <span className="text-[14px] text-[#374151]">{opt}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className={labelClass}>How often do you need a carer to visit?</label>
                          <select value={formData.visitFrequency} onChange={(e) => updateField("visitFrequency", e.target.value)} className={inputClass}>
                            <option value="">Select…</option>
                            {visitFrequencyOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                          </select>
                          {formData.visitFrequency === "Other" && (
                            <input type="text" value={formData.visitFrequencyOther} onChange={(e) => updateField("visitFrequencyOther", e.target.value)} className={`${inputClass} mt-2`} placeholder="Please specify" />
                          )}
                        </div>
                        <div>
                          <label className={labelClass}>Number of hours per visit</label>
                          <select value={formData.hoursPerVisit} onChange={(e) => updateField("hoursPerVisit", e.target.value)} className={inputClass}>
                            <option value="">Select…</option>
                            {hoursPerVisitOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                          </select>
                          {formData.hoursPerVisit === "Other" && (
                            <input type="text" value={formData.hoursPerVisitOther} onChange={(e) => updateField("hoursPerVisitOther", e.target.value)} className={`${inputClass} mt-2`} placeholder="Please specify hours" />
                          )}
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>Which days of the week do you require care?</label>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {daysOfWeek.map((day) => (
                            <label
                              key={day}
                              className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-[13px] transition-all ${
                                formData.careDays.includes(day)
                                  ? "border-[#1F7A7A] bg-[#1F7A7A]/5 font-semibold text-[#1a3d3d]"
                                  : "border-[#e5e7eb] text-[#374151] hover:border-[#1F7A7A]/40"
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={formData.careDays.includes(day)}
                                onChange={() => toggleArrayItem("careDays", day)}
                                className="h-3.5 w-3.5 rounded border-[#d1d5db] text-[#1F7A7A] focus:ring-[#1F7A7A]/30"
                              />
                              {day}
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>Preferred visit times</label>
                        <div className="mt-2 space-y-2">
                          {visitTimeSlots.map((slot) => (
                            <label
                              key={slot}
                              className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-2.5 transition-all ${
                                formData.visitTimes.includes(slot)
                                  ? "border-[#1F7A7A] bg-[#1F7A7A]/5"
                                  : "border-[#e5e7eb] hover:border-[#1F7A7A]/40"
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={formData.visitTimes.includes(slot)}
                                onChange={() => toggleArrayItem("visitTimes", slot)}
                                className="h-4 w-4 shrink-0 rounded border-[#d1d5db] text-[#1F7A7A] focus:ring-[#1F7A7A]/30"
                              />
                              <span className="text-[14px] text-[#374151]">{slot}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className={labelClass}>Preferred start date</label>
                          <input type="date" value={formData.startDate} onChange={(e) => updateField("startDate", e.target.value)} className={inputClass} />
                        </div>
                        <div>
                          <label className={labelClass}>Ongoing or temporary?</label>
                          <select value={formData.ongoingOrTemp} onChange={(e) => updateField("ongoingOrTemp", e.target.value)} className={inputClass}>
                            <option value="">Select…</option>
                            <option value="Ongoing">Ongoing</option>
                            <option value="Temporary">Temporary</option>
                          </select>
                        </div>
                      </div>
                      {formData.ongoingOrTemp === "Temporary" && (
                        <div>
                          <label className={labelClass}>Expected end date</label>
                          <input type="date" value={formData.endDate} onChange={(e) => updateField("endDate", e.target.value)} className={inputClass} />
                        </div>
                      )}
                    </div>
                  )}

                  {/* ───── STEP 6: Additional Info & Consent ───── */}
                  {currentStage === 6 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className={sectionTitle}>Additional information</h3>
                        <p className={sectionSub}>
                          Please provide any details that will help us provide the best care.
                        </p>
                      </div>

                      <div className="space-y-4">
                        {[
                          { key: "medicalConditions", label: "Does the client have any medical conditions we should be aware of?" },
                          { key: "allergies", label: "Does the client have any allergies?" },
                          { key: "mobilityIssues", label: "Does the client have any mobility issues or use any mobility aids?" },
                          { key: "dietaryRequirements", label: "Are there any dietary requirements or food preferences?" },
                          { key: "communicationNeeds", label: "Does the client have any communication needs (e.g. hearing, language)?" },
                          { key: "petsInHome", label: "Are there any pets in the home? If yes, please provide details." },
                          { key: "keyAccess", label: "Key safe / access arrangements (how will the carer access the property?)" },
                          { key: "carerPreferences", label: "Any specific preferences for the carer (e.g. gender, language, interests)?" },
                          { key: "otherInfo", label: "Any other information or special requests?" },
                        ].map((field) => (
                          <div key={field.key}>
                            <label className={labelClass}>{field.label}</label>
                            <textarea
                              value={(formData as Record<string, unknown>)[field.key] as string}
                              onChange={(e) => updateField(field.key, e.target.value)}
                              rows={2}
                              className={inputClass}
                            />
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-[#f0f0f0] pt-5">
                        <h4 className="mb-3 text-[15px] font-bold text-[#1a3d3d]">How did you hear about us?</h4>
                        <select value={formData.hearAboutUs} onChange={(e) => updateField("hearAboutUs", e.target.value)} className={inputClass}>
                          <option value="">Select…</option>
                          {hearAboutUsOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                        {formData.hearAboutUs === "Other" && (
                          <input type="text" value={formData.hearAboutUsOther} onChange={(e) => updateField("hearAboutUsOther", e.target.value)} className={`${inputClass} mt-2`} placeholder="Please specify" />
                        )}
                      </div>

                      <div className="border-t border-[#f0f0f0] pt-5">
                        <h4 className="mb-1 text-[15px] font-bold text-[#1a3d3d]">Declaration & consent</h4>
                        <p className="mb-4 text-[13px] text-[#64748b]">
                          By submitting this form, I confirm that the information provided is accurate
                          and complete to the best of my knowledge. I understand that Friendly Support
                          Limited provides non-regulated care services only, which do not include
                          personal care. These services are charged at £25 per hour with a minimum of 2
                          hours per visit, and that full-time care starts from £1,200 per week.
                        </p>
                        <div className="space-y-3">
                          {[
                            { key: "consentTruth", label: "I confirm that the information provided in this form is true and accurate" },
                            { key: "consentGdpr", label: "I consent to Friendly Support Limited storing my personal data in accordance with GDPR" },
                            { key: "consentContact", label: "I consent to being contacted by Friendly Support Limited regarding my care request" },
                            { key: "consentPricing", label: "I understand the pricing structure and agree to the terms outlined above" },
                            { key: "consentNonRegulated", label: "I understand that Friendly Support Limited provides non-regulated care services only" },
                          ].map((item) => (
                            <label key={item.key} className="flex cursor-pointer items-start gap-3 rounded-lg border border-[#e5e7eb] bg-[#fafafa] px-4 py-3 transition-colors hover:border-[#1F7A7A]/30">
                              <input
                                type="checkbox"
                                checked={!!(formData as Record<string, unknown>)[item.key]}
                                onChange={(e) => updateField(item.key, (e.target as HTMLInputElement).checked)}
                                className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#d1d5db] text-[#1F7A7A] focus:ring-[#1F7A7A]/30"
                              />
                              <span className="text-[14px] leading-relaxed text-[#374151]">{item.label} *</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="mt-8 flex items-center justify-between gap-4 border-t border-[#f0f0f0] pt-6">
                    <button
                      type="button"
                      onClick={goBack}
                      disabled={currentStage === 1}
                      className={`rounded-lg px-6 py-2.5 text-[14px] font-semibold transition-all ${
                        currentStage === 1
                          ? "border border-[#e5e7eb] text-[#94a3b8] cursor-not-allowed"
                          : "border border-[#1F7A7A] text-[#1F7A7A] hover:bg-[#1F7A7A]/5"
                      }`}
                    >
                      Back
                    </button>
                    {currentStage < TOTAL_STEPS ? (
                      <button
                        type="button"
                        onClick={goNext}
                        disabled={!canProceed()}
                        className={`rounded-lg px-8 py-2.5 text-[14px] font-semibold transition-all ${
                          canProceed()
                            ? "bg-[#1F7A7A] text-white hover:bg-[#1a6565]"
                            : "bg-[#e5e7eb] text-[#94a3b8] cursor-not-allowed"
                        }`}
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={!canProceed()}
                        className={`rounded-lg px-8 py-2.5 text-[14px] font-semibold transition-all ${
                          canProceed()
                            ? "bg-[#1F7A7A] text-white shadow-md hover:bg-[#1a6565]"
                            : "bg-[#e5e7eb] text-[#94a3b8] cursor-not-allowed"
                        }`}
                      >
                        Submit Booking Request
                      </button>
                    )}
                  </div>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
