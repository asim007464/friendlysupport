-- Friendly Support Limited — form submissions
-- Enquiries may contain special-category (health) data under UK GDPR.
-- Access is restricted: anon cannot read; only service_role (API) can insert/select.
-- Agree a retention schedule before going live.

create extension if not exists pgcrypto;

-- ---------------------------------------------------------------------------
-- Contact / free-consultation enquiries
-- ---------------------------------------------------------------------------
create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  message text not null,
  source text not null default 'website',
  ip_hash text,
  status text not null default 'new'
    check (status in ('new', 'contacted', 'closed', 'spam')),
  email_sent_at timestamptz,
  notes text
);

create index if not exists enquiries_created_at_idx on public.enquiries (created_at desc);
create index if not exists enquiries_email_idx on public.enquiries (email);
create index if not exists enquiries_status_idx on public.enquiries (status);

comment on table public.enquiries is
  'Website contact form submissions. May include health-related content about third parties. Restrict access and apply retention.';

-- ---------------------------------------------------------------------------
-- Booking requests (not confirmed bookings)
-- ---------------------------------------------------------------------------
create table if not exists public.booking_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  support_for text not null,
  support_for_other text,
  client_first_name text,
  client_last_name text,
  address_line1 text not null,
  address_line2 text,
  postcode text not null,
  help_types text[] not null default '{}',
  help_types_other text,
  frequency text not null,
  frequency_other text,
  support_type text not null,
  selected_dates text[] not null default '{}',
  time_from text,
  time_to text,
  timing_notes text,
  source text not null default 'website',
  ip_hash text,
  status text not null default 'new'
    check (status in ('new', 'contacted', 'quoted', 'booked', 'closed', 'spam')),
  email_sent_at timestamptz,
  notes text
);

create index if not exists booking_requests_created_at_idx
  on public.booking_requests (created_at desc);
create index if not exists booking_requests_email_idx
  on public.booking_requests (email);
create index if not exists booking_requests_status_idx
  on public.booking_requests (status);

comment on table public.booking_requests is
  'Website booking *requests*. Nothing is confirmed until costs/times are agreed in writing.';

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------
alter table public.enquiries enable row level security;
alter table public.booking_requests enable row level security;

-- No policies for anon/authenticated = no public read/write.
-- The Next.js API uses the service_role key, which bypasses RLS.

-- Optional: allow authenticated staff (if you later add Supabase Auth for an admin UI)
-- create policy "staff_read_enquiries" on public.enquiries
--   for select to authenticated using (true);
