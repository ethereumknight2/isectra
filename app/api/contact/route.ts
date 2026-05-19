// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const BREVO_API_KEY = process.env.BREVO_API_KEY!;
const TO_EMAILS = ["saristizabal@isectra.com", "rbanerjee@isectra.com"];

async function sendEmail(payload: object) {
  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": BREVO_API_KEY,
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error?.message || "Brevo API error");
  }

  return res.json();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { firstName, lastName, email, phone, company, message, source } =
      body || {};

    if (!email || !firstName) {
      return NextResponse.json(
        { error: "First name and email are required." },
        { status: 400 }
      );
    }

    await sendEmail({
      sender: { name: "iSectra Notifications", email: "notifications@isectra.com" },
      to: TO_EMAILS.map((e) => ({ email: e })),
      subject: `New Lead: ${firstName}${lastName ? " " + lastName : ""}${company ? " — " + company : ""}`,
      htmlContent: `
        <h2 style="color:#07588a;">New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;font-size:15px;">
          <tr><td style="padding:8px 12px;font-weight:bold;width:140px;">Name</td><td style="padding:8px 12px;">${firstName} ${lastName || ""}</td></tr>
          <tr style="background:#f5f5f5;"><td style="padding:8px 12px;font-weight:bold;">Email</td><td style="padding:8px 12px;"><a href="mailto:${email}">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding:8px 12px;font-weight:bold;">Phone</td><td style="padding:8px 12px;">${phone}</td></tr>` : ""}
          ${company ? `<tr style="background:#f5f5f5;"><td style="padding:8px 12px;font-weight:bold;">Company</td><td style="padding:8px 12px;">${company}</td></tr>` : ""}
          ${source ? `<tr><td style="padding:8px 12px;font-weight:bold;">Source</td><td style="padding:8px 12px;">${source}</td></tr>` : ""}
          <tr style="background:#f5f5f5;"><td style="padding:8px 12px;font-weight:bold;vertical-align:top;">Message</td><td style="padding:8px 12px;white-space:pre-wrap;">${message || "(No message provided)"}</td></tr>
        </table>
        <p style="color:#999;font-size:12px;margin-top:24px;">Submitted at ${new Date().toLocaleString()}</p>
      `,
    });

    return NextResponse.json(
      { message: "Thanks! We'll be in touch soon." },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Contact form error:", err?.message || err);
    return NextResponse.json(
      { error: "Failed to submit. Please try again later." },
      { status: 500 }
    );
  }
}