import { NextResponse } from "next/server";
import { applicationSchema, fieldErrors } from "@/lib/validation";
import {
  clientIp,
  rateLimit,
  spamReason,
  verifyTurnstile,
} from "@/lib/protection";
import {
  sendApplicationAcknowledgement,
  sendApplicationNotification,
} from "@/lib/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * POST /api/application
 * Validates → emails office + acknowledgement.
 */
export async function POST(req: Request) {
  const ip = clientIp(req);
  const limit = rateLimit(`application:${ip}`, 5, 60 * 60 * 1000);
  if (!limit.ok) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "You have sent several applications already. Please wait a little while, or call us on 07384 440748.",
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

  const parsed = applicationSchema.safeParse(payload);
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
    message: data.about,
  });
  if (reason) {
    console.warn(`[application] discarded as spam (${reason})`);
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

  try {
    await sendApplicationNotification(data);
    try {
      await sendApplicationAcknowledgement(data.email, data.name);
    } catch (ackErr) {
      console.error("[application] acknowledgement email failed", ackErr);
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[application] send failed", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Sorry, we could not send your application just now. Please email info@friendlysupportlimited.co.uk or call 07384 440748.",
      },
      { status: 500 }
    );
  }
}
