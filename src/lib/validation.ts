import { z } from "zod";

/**
 * Validation schemas for Friendly Support Limited.
 *
 * Written against Zod 4. Everything is trimmed and length-capped before it
 * reaches the mail transport. Field names match the frontend form inputs.
 */

const shortText = (label: string, max = 80) =>
  z
    .string({ error: `${label} is required` })
    .trim()
    .min(1, `${label} is required`)
    .max(max, `${label} is too long`);

/**
 * Deliberately permissive. UK callers write numbers a dozen different ways
 * and rejecting a real enquiry because of a space is far more costly than
 * accepting a slightly odd one.
 */
const ukPhone = z
  .string({ error: "Phone number is required" })
  .trim()
  .min(7, "Please enter a valid phone number")
  .max(24, "Please enter a valid phone number")
  .regex(/^[0-9+()\s-]+$/, "Please enter a valid phone number");

/**
 * Normalise BEFORE validating. In Zod 4 the format check runs first if you
 * chain `.trim()` after `z.email()`, so a pasted address with a trailing space
 * would be rejected. Piping means the value is cleaned up first.
 */
const email = z
  .string({ error: "Email address is required" })
  .trim()
  .toLowerCase()
  .pipe(
    z
      .email({ error: "Please enter a valid email address" })
      .max(160, "Email address is too long")
  );

const antiSpam = {
  website: z.string().max(200).optional().default(""),
  formTs: z.coerce.number().int().nonnegative().optional(),
  turnstileToken: z.string().max(4096).optional(),
};

export const enquirySchema = z.object({
  firstName: shortText("First name", 60),
  lastName: shortText("Last name", 60),
  email,
  phone: ukPhone,
  message: z
    .string({ error: "Please tell us how we can help" })
    .trim()
    .min(10, "Please tell us a little more so we can help properly")
    .max(4000, "Please keep your message under 4000 characters"),
  ...antiSpam,
});

export type Enquiry = z.infer<typeof enquirySchema>;

export const SUPPORT_TYPE_VALUES = [
  "hourly",
  "livein-day",
  "livein-night",
  "livein-24",
] as const;

export const SUPPORT_TYPE_LABELS: Record<
  (typeof SUPPORT_TYPE_VALUES)[number],
  string
> = {
  hourly: "Hourly visits (8am–8pm)",
  "livein-day": "Live-in: full day",
  "livein-night": "Live-in: night (8pm–8am)",
  "livein-24": "Live-in: 24 hours",
};

/** Booking request — field names match /book page form state. */
export const bookingSchema = z
  .object({
    firstName: shortText("First name", 60),
    lastName: shortText("Last name", 60),
    email,
    phone: ukPhone,

    supportFor: shortText("Who needs support", 80),
    supportForOther: z.string().trim().max(120).optional().default(""),
    clientFirstName: z.string().trim().max(60).optional().default(""),
    clientLastName: z.string().trim().max(60).optional().default(""),

    addressLine1: shortText("Address", 160),
    addressLine2: z.string().trim().max(160).optional().default(""),
    postcode: shortText("Postcode", 20),

    helpTypes: z
      .array(z.string().trim().min(1).max(160))
      .min(1, "Please choose at least one kind of help")
      .max(12, "Please choose fewer kinds of help"),
    helpTypesOther: z.string().trim().max(200).optional().default(""),

    frequency: shortText("How often", 80),
    frequencyOther: z.string().trim().max(120).optional().default(""),

    supportType: z.enum(SUPPORT_TYPE_VALUES, {
      error: "Please choose the type of support",
    }),
    selectedDates: z
      .array(z.string().max(32))
      .max(60)
      .optional()
      .default([]),
    timeFrom: z.string().trim().max(40).optional().default(""),
    timeTo: z.string().trim().max(40).optional().default(""),
    timingNotes: z.string().trim().max(1000).optional().default(""),

    consent: z.literal(true, {
      error: "Please confirm you agree before submitting",
    }),

    ...antiSpam,
  })
  .superRefine((data, ctx) => {
    if (data.supportFor === "Other" && !data.supportForOther.trim()) {
      ctx.addIssue({
        code: "custom",
        path: ["supportForOther"],
        message: "Please tell us who the support is for",
      });
    }
    if (data.supportFor !== "Myself") {
      if (!data.clientFirstName.trim()) {
        ctx.addIssue({
          code: "custom",
          path: ["clientFirstName"],
          message: "Please enter the person’s first name",
        });
      }
      if (!data.clientLastName.trim()) {
        ctx.addIssue({
          code: "custom",
          path: ["clientLastName"],
          message: "Please enter the person’s last name",
        });
      }
    }
    if (data.helpTypes.includes("Other") && !data.helpTypesOther.trim()) {
      ctx.addIssue({
        code: "custom",
        path: ["helpTypesOther"],
        message: "Please describe the other kind of help needed",
      });
    }
    if (data.frequency === "Other" && !data.frequencyOther.trim()) {
      ctx.addIssue({
        code: "custom",
        path: ["frequencyOther"],
        message: "Please describe how often support is needed",
      });
    }
    if (data.supportType === "hourly") {
      if (!data.timeFrom.trim()) {
        ctx.addIssue({
          code: "custom",
          path: ["timeFrom"],
          message: "Please choose a start time",
        });
      }
      if (!data.timeTo.trim()) {
        ctx.addIssue({
          code: "custom",
          path: ["timeTo"],
          message: "Please choose an end time",
        });
      }
    }
  });

export type Booking = z.infer<typeof bookingSchema>;

/** Flattens a ZodError into { fieldName: "message" } for the frontend. */
export function fieldErrors(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}
