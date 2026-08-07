import { NextResponse } from "next/server";
import { enquirySchema, fieldErrors } from "@/lib/validation";
import {
  clientIp,
  rateLimit,
  spamReason,
  verifyTurnstile,
} from "@/lib/protection";
import { sendAcknowledgement, sendEnquiryNotification } from "@/lib/email";
import {
  hashIp,
  markEnquiryEmailed,
  saveEnquiry,
} from "@/lib/supabaseAdmin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * POST /api/enquiry
 * Validates → stores in Supabase → emails office + acknowledgement.
 * Never log message bodies.
 */
export async function POST(req: Request) {
  const ip = clientIp(req);
  const limit = rateLimit(`enquiry:${ip}`, 5, 60 * 60 * 1000);
  if (!limit.ok) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "You have sent several messages already. Please wait a little while, or call us on 07384 440748.",
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

  const parsed = enquirySchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: fieldErrors(parsed.error) },
      { status: 400 }
    );
  }
  const data = parsed.data;

  const reason = spamReason(data);
  if (reason) {
    console.warn(`[enquiry] discarded as spam (${reason})`);
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

  let enquiryId: string | undefined;
  try {
    const saved = await saveEnquiry({
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone: data.phone,
      message: data.message,
      ip_hash: hashIp(ip),
      status: "new",
    });
    enquiryId = saved.id;
  } catch (err) {
    console.error("[enquiry] supabase insert failed", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Sorry, we could not send your message just now. Please email info@friendlysupportlimited.co.uk or call 07384 440748.",
      },
      { status: 500 }
    );
  }

  try {
    await sendEnquiryNotification(data);
    if (enquiryId) await markEnquiryEmailed(enquiryId);
  } catch (err) {
    console.error("[enquiry] office notification failed", err);
    // Row is already saved — still tell the user to phone/email as backup
    return NextResponse.json(
      {
        ok: false,
        error:
          "Sorry, we could not send your message just now. Please email info@friendlysupportlimited.co.uk or call 07384 440748.",
      },
      { status: 500 }
    );
  }

  try {
    await sendAcknowledgement(data.email, data.firstName, "enquiry");
  } catch (err) {
    console.error("[enquiry] acknowledgement failed", err);
  }

  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json(
    { ok: false, error: "Method not allowed" },
    { status: 405 }
  );
}
