# Backend: Supabase + email

Form submissions are stored in **Supabase** and emailed via **Resend**.

## Architecture

```
Browser form → Next.js /api/enquiry or /api/booking
  → rate limit + Zod validation + spam checks
  → insert into Supabase (enquiries / booking_requests)
  → email office (Resend) + acknowledgement to enquirer
```

No public read access. Tables use RLS with **no anon policies**. The API uses the **service role** key on the server only.

## 1. Create a Supabase project

1. Go to [https://supabase.com](https://supabase.com) and create a project
2. Open **SQL Editor** and run the migration file:
   `supabase/migrations/20260802133017_create_enquiries_and_bookings.sql`
3. Or with the CLI (after `npx supabase login` and `npx supabase link`):

   ```bash
   npx supabase db push
   ```

## 2. Environment variables

Copy `.env.example` → `.env.local` and fill in:

| Variable | Where to find it |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Project Settings → API → Project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Project Settings → API → `service_role` (secret) |
| `RESEND_API_KEY` | [resend.com](https://resend.com) |
| `OFFICE_EMAIL` | Usually `info@friendlysupportlimited.co.uk` |
| `MAIL_FROM` | Must use a domain verified in Resend |

Also add these in **Vercel → Settings → Environment Variables**.

## 3. Tables

| Table | Purpose |
|---|---|
| `enquiries` | Contact / free consultation form |
| `booking_requests` | `/book` multi-step form (request only) |

Statuses: `new` → `contacted` / `closed` (bookings also `quoted`, `booked`).

## 4. Data protection

Enquiries can include health information about third parties (UK GDPR special category). Before launch:

- Agree a **retention period** and delete old rows
- Restrict who has the service role / dashboard access
- Update the **privacy policy** to say submissions are stored in Supabase and emailed to the office
- Prefer not to log message bodies in Vercel

## 5. Test

```bash
npm run test:backend
```

Then submit `/contact` and `/book` on a preview deploy and confirm:

1. A row appears in Supabase Table Editor
2. Office receives the notification email
3. Enquirer receives the acknowledgement (check spam)
