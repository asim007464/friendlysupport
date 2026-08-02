import { bookingSchema, enquirySchema, fieldErrors } from "../src/lib/validation";
import { rateLimit, spamReason } from "../src/lib/protection";

let pass = 0;
let fail = 0;
function check(name: string, cond: boolean, extra?: unknown) {
  if (cond) {
    pass++;
    console.log(`  ok   ${name}`);
  } else {
    fail++;
    console.log(`  FAIL ${name}`, extra ?? "");
  }
}

console.log("\nenquirySchema");
const goodEnquiry = enquirySchema.safeParse({
  firstName: "  Sam  ",
  lastName: "Jones",
  email: "  SAM@Example.COM ",
  phone: "+44 7384 443845",
  message: "I am looking for companionship visits for my mother in Harrow.",
  formTs: Date.now() - 20000,
});
check(
  "accepts a valid enquiry",
  goodEnquiry.success,
  goodEnquiry.success ? "" : goodEnquiry.error.issues
);
if (goodEnquiry.success) {
  check(
    "trims names",
    goodEnquiry.data.firstName === "Sam",
    goodEnquiry.data.firstName
  );
  check(
    "lowercases email",
    goodEnquiry.data.email === "sam@example.com",
    goodEnquiry.data.email
  );
  check(
    "defaults honeypot to empty",
    goodEnquiry.data.website === "",
    goodEnquiry.data.website
  );
}

const badEnquiry = enquirySchema.safeParse({
  firstName: "",
  lastName: "Jones",
  email: "not-an-email",
  phone: "abc",
  message: "hi",
});
check("rejects invalid enquiry", !badEnquiry.success);
if (!badEnquiry.success) {
  const errs = fieldErrors(badEnquiry.error);
  check("returns per-field errors", Object.keys(errs).length === 4, errs);
  check(
    "email message is user-facing",
    errs.email === "Please enter a valid email address",
    errs.email
  );
  console.log("       ", JSON.stringify(errs));
}

console.log("\nphone formats");
for (const p of [
  "07384 443845",
  "+447384443845",
  "(020) 7946 0000",
  "020-7946-0000",
]) {
  const r = enquirySchema.safeParse({
    firstName: "A",
    lastName: "B",
    email: "a@b.com",
    phone: p,
    message: "A message long enough to pass validation.",
  });
  check(`accepts ${p}`, r.success);
}
const badPhone = enquirySchema.safeParse({
  firstName: "A",
  lastName: "B",
  email: "a@b.com",
  phone: "call me!!",
  message: "A message long enough to pass validation.",
});
check("rejects non-numeric phone", !badPhone.success);

console.log("\nbookingSchema");
const goodBooking = bookingSchema.safeParse({
  firstName: "Ann",
  lastName: "Patel",
  email: "ann@example.com",
  phone: "07000 000000",
  supportFor: "My parent",
  clientFirstName: "Raj",
  clientLastName: "Patel",
  addressLine1: "12 Example Road",
  postcode: "HA3 1AA",
  helpTypes: ["Friendly visits and companionship"],
  frequency: "About once a week",
  supportType: "hourly",
  timeFrom: "10:00 am",
  timeTo: "12:00 pm",
  consent: true,
  formTs: Date.now() - 30000,
});
check(
  "accepts a valid booking",
  goodBooking.success,
  goodBooking.success ? "" : goodBooking.error.issues
);

const badConsent = bookingSchema.safeParse({
  firstName: "Ann",
  lastName: "Patel",
  email: "ann@example.com",
  phone: "07000 000000",
  supportFor: "Myself",
  addressLine1: "12 Example Road",
  postcode: "HA3 1AA",
  helpTypes: ["Friendly visits and companionship"],
  frequency: "About once a week",
  supportType: "hourly",
  timeFrom: "10:00 am",
  timeTo: "12:00 pm",
  consent: false,
});
check("rejects without consent", !badConsent.success);

console.log("\nspam heuristics");
check("honeypot caught", spamReason({ website: "http://spam" }) === "honeypot");
check(
  "too fast caught",
  spamReason({ formTs: Date.now() - 500 }) === "submitted-too-fast"
);
check(
  "stale form caught",
  spamReason({ formTs: Date.now() - 1000 * 60 * 60 * 24 }) === "stale-form"
);
check(
  "link spam caught",
  spamReason({ message: "http://a http://b http://c" }) === "link-spam"
);
check(
  "genuine message passes",
  spamReason({
    website: "",
    formTs: Date.now() - 30000,
    message:
      "Could you help my father get to his hospital appointment on Thursday?",
  }) === null
);
check(
  "one link is fine",
  spamReason({ message: "See https://example.com for details" }) === null
);

console.log("\nrate limiting");
const key = "test:1.2.3.4";
let blocked = 0;
for (let i = 0; i < 7; i++) if (!rateLimit(key, 5, 60000).ok) blocked++;
check("blocks after 5 in the window", blocked === 2, blocked);
check("a different IP is unaffected", rateLimit("test:9.9.9.9", 5, 60000).ok);

console.log(`\n${pass} passed, ${fail} failed\n`);
process.exit(fail === 0 ? 0 : 1);
