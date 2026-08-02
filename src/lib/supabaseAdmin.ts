import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { createHash } from "crypto";

/**
 * Server-only Supabase client (service role).
 * Never import this into client components — it bypasses RLS.
 */

let adminClient: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error(
      "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY."
    );
  }

  if (!adminClient) {
    adminClient = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }

  return adminClient;
}

/** One-way hash of IP for rate/abuse review — not reversible identity. */
export function hashIp(ip: string): string {
  const salt = process.env.IP_HASH_SALT || "friendly-support";
  return createHash("sha256").update(`${salt}:${ip}`).digest("hex").slice(0, 32);
}

export type EnquiryInsert = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
  ip_hash?: string | null;
  status?: string;
  email_sent_at?: string | null;
};

export type BookingInsert = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  support_for: string;
  support_for_other?: string | null;
  client_first_name?: string | null;
  client_last_name?: string | null;
  address_line1: string;
  address_line2?: string | null;
  postcode: string;
  help_types: string[];
  help_types_other?: string | null;
  frequency: string;
  frequency_other?: string | null;
  support_type: string;
  selected_dates: string[];
  time_from?: string | null;
  time_to?: string | null;
  timing_notes?: string | null;
  ip_hash?: string | null;
  status?: string;
  email_sent_at?: string | null;
};

export async function saveEnquiry(row: EnquiryInsert) {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("enquiries")
    .insert(row)
    .select("id")
    .single();

  if (error) throw error;
  return data;
}

export async function saveBookingRequest(row: BookingInsert) {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("booking_requests")
    .insert(row)
    .select("id")
    .single();

  if (error) throw error;
  return data;
}

export async function markEnquiryEmailed(id: string) {
  const supabase = getSupabaseAdmin();
  await supabase
    .from("enquiries")
    .update({ email_sent_at: new Date().toISOString() })
    .eq("id", id);
}

export async function markBookingEmailed(id: string) {
  const supabase = getSupabaseAdmin();
  await supabase
    .from("booking_requests")
    .update({ email_sent_at: new Date().toISOString() })
    .eq("id", id);
}
