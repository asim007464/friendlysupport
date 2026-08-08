import { NextResponse } from "next/server";
import { bookingSchema, fieldErrors } from "@/lib/validation";
import {
  clientIp,
  rateLimit,
  spamReason,
  verifyTurnstile,
} from "@/lib/protection";
import { sendAcknowledgement, sendBookingNotification } from "@/lib/email";
import {
  hashIp,
  markBookingEmailed,
  saveBookingRequest,
} from "@/lib/supabaseAdmin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * POST /api/booking
 * Validates → stores in Supabase → emails office + acknowledgement.
 * This is a request, not a confirmed booking.
 */
export async function POST(req: Request) {
  const ip = clientIp(req);
  const limit = rateLimit(`booking:${ip}`, 5, 60 * 60 * 1000);
  if (!limit.ok) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "You have sent several requests already. Please wait a little while, or call us on 07384 440748.",
      },
      {
        status: 429,
        headers: { "Retry-After": String(limit.retryAfterSeconds) },
      }
    );
  }

  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "We could not read that submission. Please try again.",
      },
      { status: 400 }
    );
  }

  const parsed = bookingSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: fieldErrors(parsed.error) },
      { status: 400 }
    );
  }
  const data = parsed.data;

  const reason = spamReason({
    website: data.website,
    formTs: data.formTs,
    message: data.timingNotes,
  });
  if (reason) {
    console.warn(`[booking] discarded as spam (${reason})`);
    return NextResponse.json({ ok: true });
  }

  if (!(await verifyTurnstile(data.turnstileToken))) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "We could not verify that submission. Please refresh the page and try again, or call us on 07384 440748.",
      },
      { status: 400 }
    );
  }

  let bookingId: string | undefined;
  try {
    const saved = await saveBookingRequest({
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone: data.phone,
      support_for: data.supportFor,
      support_for_other: data.supportForOther || null,
      client_first_name: data.clientFirstName || null,
      client_last_name: data.clientLastName || null,
      address_line1: data.addressLine1,
      address_line2: data.addressLine2 || null,
      postcode: data.postcode,
      help_types: data.helpTypes,
      help_types_other: data.helpTypesOther || null,
      frequency: data.frequency,
      frequency_other: data.frequencyOther || null,
      support_type: data.supportType,
      selected_dates: data.selectedDates,
      time_from: data.timeFrom || null,
      time_to: data.timeTo || null,
      timing_notes: data.timingNotes || null,
      ip_hash: hashIp(ip),
      status: "new",
    });
    bookingId = saved?.id;
  } catch (err) {
    // Storage is optional — still try to email the office.
    console.error("[booking] supabase insert failed", err);
  }

  try {
    await sendBookingNotification(data);
    if (bookingId) await markBookingEmailed(bookingId);
  } catch (err) {
    console.error("[booking] office notification failed", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Sorry, we could not send your request just now. Please email info@friendlysupportlimited.co.uk or call 07384 440748.",
      },
      { status: 500 }
    );
  }

  try {
    await sendAcknowledgement(data.email, data.firstName, "booking");
  } catch (err) {
    console.error("[booking] acknowledgement failed", err);
  }

  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json(
    { ok: false, error: "Method not allowed" },
    { status: 405 }
  );
}
