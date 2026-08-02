/**
 * Abuse protection: rate limiting, honeypot, submission timing, and an
 * optional Cloudflare Turnstile check.
 */

const MIN_FILL_MS = 3_000;
const MAX_FORM_AGE_MS = 1000 * 60 * 60 * 6; // 6 hours

type Bucket = { count: number; resetAt: number };

/**
 * In-memory limiter. On Vercel this is per serverless instance and resets on
 * cold start — it slows abuse rather than stopping it. Swap for Upstash Redis
 * later if needed; keep this function signature.
 */
const buckets = new Map<string, Bucket>();

export type RateLimitResult = {
  ok: boolean;
  remaining: number;
  retryAfterSeconds: number;
};

export function rateLimit(
  key: string,
  limit = 5,
  windowMs = 60 * 60 * 1000
): RateLimitResult {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || now > existing.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1, retryAfterSeconds: 0 };
  }

  existing.count += 1;

  if (buckets.size > 5_000) {
    for (const [k, v] of buckets) if (now > v.resetAt) buckets.delete(k);
  }

  if (existing.count > limit) {
    return {
      ok: false,
      remaining: 0,
      retryAfterSeconds: Math.ceil((existing.resetAt - now) / 1000),
    };
  }

  return { ok: true, remaining: limit - existing.count, retryAfterSeconds: 0 };
}

export function clientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip")?.trim() || "unknown";
}

export type SpamCheckInput = {
  website?: string;
  formTs?: number;
  message?: string;
};

/**
 * Returns a reason when the submission looks automated, or null when human.
 * Routes fail these silently (success response, no email).
 */
export function spamReason(input: SpamCheckInput): string | null {
  if (input.website && input.website.trim().length > 0) return "honeypot";

  if (typeof input.formTs === "number" && input.formTs > 0) {
    const elapsed = Date.now() - input.formTs;
    if (elapsed < MIN_FILL_MS) return "submitted-too-fast";
    if (elapsed > MAX_FORM_AGE_MS) return "stale-form";
  }

  const message = input.message ?? "";
  if (message) {
    const linkCount = (message.match(/https?:\/\//gi) || []).length;
    if (linkCount >= 3) return "link-spam";
    if (/[\u0400-\u04FF\u4E00-\u9FFF]/.test(message)) return "unexpected-script";
  }

  return null;
}

/** Returns true when Turnstile is not configured so the site keeps working. */
export async function verifyTurnstile(token?: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;

  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: token }),
      }
    );
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return true;
  }
}
