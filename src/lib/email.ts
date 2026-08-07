import { Resend } from "resend";
import type { Booking, Enquiry } from "./validation";
import { SUPPORT_TYPE_LABELS } from "./validation";

/**
 * Email transport and templates.
 *
 * Two messages go out per submission:
 *   1. Office notification (Reply-To = enquirer)
 *   2. Acknowledgement to the enquirer (copy-deck wording + 999 line)
 *
 * No database — special-category health data in enquiries must not be stored
 * on the server by default. See docs/BACKEND.md.
 */

const OFFICE_EMAIL =
  process.env.OFFICE_EMAIL || "info@friendlysupportlimited.co.uk";

const FROM_ADDRESS =
  process.env.MAIL_FROM ||
  "Friendly Support Limited <no-reply@friendlysupportlimited.co.uk>";

const PHONE = "07384 440748";
const HOURS = "Monday to Sunday, 10am\u20139pm";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(key);
}

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escMultiline(value: string): string {
  return esc(value).replace(/\r?\n/g, "<br>");
}

function shell(title: string, inner: string): string {
  return `<!doctype html>
<html lang="en"><body style="margin:0;padding:24px;background:#f4f6f9;font-family:Arial,Helvetica,sans-serif;color:#1a1a1a;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:8px;">
    <tr><td style="padding:28px 32px;">
      <h1 style="margin:0 0 18px;font-size:19px;color:#0D2F6B;">${esc(title)}</h1>
      ${inner}
    </td></tr>
  </table>
</body></html>`;
}

function row(label: string, value: string): string {
  if (!value.trim()) return "";
  return `<p style="margin:0 0 10px;font-size:14px;line-height:1.5;">
    <strong style="color:#6B7280;font-size:12px;text-transform:uppercase;letter-spacing:.04em;">${esc(label)}</strong><br>
    ${escMultiline(value)}
  </p>`;
}

export async function sendEnquiryNotification(data: Enquiry) {
  const fullName = `${data.firstName} ${data.lastName}`;
  const resend = getResend();

  const html = shell(
    "New enquiry from the website",
    [
      row("Name", fullName),
      row("Email", data.email),
      row("Phone", data.phone),
      row("Message", data.message),
      `<p style="margin:22px 0 0;padding-top:16px;border-top:1px solid #e3e6ea;font-size:12px;color:#6B7280;">
        Reply directly to this email to respond to ${esc(fullName)}.
        Target response time is 24\u201348 hours.
      </p>`,
    ].join("")
  );

  return resend.emails.send({
    from: FROM_ADDRESS,
    to: OFFICE_EMAIL,
    replyTo: data.email,
    subject: `Website enquiry \u2014 ${fullName}`,
    html,
    text: [
      "New enquiry from the website",
      "",
      `Name:    ${fullName}`,
      `Email:   ${data.email}`,
      `Phone:   ${data.phone}`,
      "",
      "Message:",
      data.message,
    ].join("\n"),
  });
}

export async function sendBookingNotification(data: Booking) {
  const fullName = `${data.firstName} ${data.lastName}`;
  const resend = getResend();
  const supportForLabel =
    data.supportFor === "Other" && data.supportForOther
      ? `Other — ${data.supportForOther}`
      : data.supportFor;
  const clientName =
    data.supportFor === "Myself"
      ? "Same as enquirer"
      : `${data.clientFirstName} ${data.clientLastName}`.trim();
  const helpList = data.helpTypes
    .map((h) =>
      h === "Other" && data.helpTypesOther ? `Other — ${data.helpTypesOther}` : h
    )
    .join("\n");
  const frequencyLabel =
    data.frequency === "Other" && data.frequencyOther
      ? `Other — ${data.frequencyOther}`
      : data.frequency;
  const address = [data.addressLine1, data.addressLine2, data.postcode]
    .filter(Boolean)
    .join(", ");
  const times =
    data.supportType === "hourly"
      ? `${data.timeFrom} – ${data.timeTo}`
      : SUPPORT_TYPE_LABELS[data.supportType];
  const dates =
    data.selectedDates.length > 0
      ? data.selectedDates.join(", ")
      : "Not specified";

  const html = shell(
    "New booking request",
    [
      row("Name", fullName),
      row("Email", data.email),
      row("Phone", data.phone),
      row("Support is for", supportForLabel),
      row("Person needing support", clientName),
      row("Visit address", address),
      row("Kind of help", helpList),
      row("Frequency", frequencyLabel),
      row("Support type", SUPPORT_TYPE_LABELS[data.supportType]),
      row("Preferred dates", dates),
      row("Preferred times", times),
      data.timingNotes ? row("Timing notes", data.timingNotes) : "",
      `<p style="margin:22px 0 0;padding-top:16px;border-top:1px solid #e3e6ea;font-size:12px;color:#6B7280;">
        Nothing is confirmed until costs and visit times have been agreed in writing.
      </p>`,
    ].join("")
  );

  return resend.emails.send({
    from: FROM_ADDRESS,
    to: OFFICE_EMAIL,
    replyTo: data.email,
    subject: `Booking request \u2014 ${fullName}`,
    html,
    text: [
      "New booking request",
      "",
      `Name:       ${fullName}`,
      `Email:      ${data.email}`,
      `Phone:      ${data.phone}`,
      `Support for:${supportForLabel}`,
      `Client:     ${clientName}`,
      `Address:    ${address}`,
      `Help:       ${helpList.replace(/\n/g, "; ")}`,
      `Frequency:  ${frequencyLabel}`,
      `Type:       ${SUPPORT_TYPE_LABELS[data.supportType]}`,
      `Dates:      ${dates}`,
      `Times:      ${times}`,
      "",
      "Notes:",
      data.timingNotes || "—",
    ].join("\n"),
  });
}

export async function sendAcknowledgement(
  to: string,
  firstName: string,
  kind: "enquiry" | "booking"
) {
  const resend = getResend();
  const opening =
    kind === "booking"
      ? "Thank you for your booking request. We have received it and will be in touch to confirm the details."
      : "Thank you for contacting Friendly Support Limited. We have received your enquiry and will respond as soon as possible, usually within 24 to 48 hours, and often sooner.";

  const html = shell(
    "Thank you \u2014 your message has been sent",
    `
    <p style="margin:0 0 14px;font-size:15px;line-height:1.6;">Dear ${esc(firstName)},</p>
    <p style="margin:0 0 14px;font-size:15px;line-height:1.6;">${esc(opening)}</p>
    <p style="margin:0 0 14px;font-size:15px;line-height:1.6;">
      If your enquiry is urgent, please call ${PHONE} during our office hours, ${HOURS}.
    </p>
    <p style="margin:0 0 20px;font-size:15px;line-height:1.6;">
      Nothing is agreed at this stage. We will talk things through with you first, and confirm
      any support and costs clearly in writing before you decide to proceed.
    </p>
    <p style="margin:0 0 20px;padding:14px 16px;background:#fff5f5;border-left:3px solid #c0392b;font-size:13px;line-height:1.6;">
      <strong>Please note:</strong> Friendly Support Limited is not an emergency service.
      If there is a medical emergency, or if someone is in immediate danger, please call 999 straight away.
    </p>
    <p style="margin:0;font-size:15px;line-height:1.6;">
      With kind regards,<br>
      <strong>Friendly Support Limited</strong><br>
      <span style="color:#6B7280;font-size:13px;">Compassionate Support at Home &middot; Supporting clients across London</span>
    </p>
    `
  );

  return resend.emails.send({
    from: FROM_ADDRESS,
    to,
    replyTo: OFFICE_EMAIL,
    subject: "Thank you \u2014 we have received your message",
    html,
    text: [
      `Dear ${firstName},`,
      "",
      opening,
      "",
      `If your enquiry is urgent, please call ${PHONE} during our office hours, ${HOURS}.`,
      "",
      "Nothing is agreed at this stage. We will talk things through with you first, and confirm any support and costs clearly in writing before you decide to proceed.",
      "",
      "Please note: Friendly Support Limited is not an emergency service. If there is a medical emergency, or if someone is in immediate danger, please call 999 straight away.",
      "",
      "With kind regards,",
      "Friendly Support Limited",
      "Compassionate Support at Home - Supporting clients across London",
    ].join("\n"),
  });
}
