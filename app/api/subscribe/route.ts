// app/api/subscribe/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAILS = ["sarisitizabal@isectra.com", "rbanerjee@isectra.com"];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { email, firstName, lastName, phone, company } = body || {};

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required." },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "notifications@isectra.com",
      to: TO_EMAILS,
      subject: `New Subscriber: ${email}`,
      html: `
        <h2 style="color:#07588a;">New Newsletter Subscriber</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;font-size:15px;">
          <tr><td style="padding:8px 12px;font-weight:bold;width:140px;">Email</td><td style="padding:8px 12px;"><a href="mailto:${email}">${email}</a></td></tr>
          ${firstName ? `<tr style="background:#f5f5f5;"><td style="padding:8px 12px;font-weight:bold;">First Name</td><td style="padding:8px 12px;">${firstName}</td></tr>` : ""}
          ${lastName ? `<tr><td style="padding:8px 12px;font-weight:bold;">Last Name</td><td style="padding:8px 12px;">${lastName}</td></tr>` : ""}
          ${phone ? `<tr style="background:#f5f5f5;"><td style="padding:8px 12px;font-weight:bold;">Phone</td><td style="padding:8px 12px;">${phone}</td></tr>` : ""}
          ${company ? `<tr><td style="padding:8px 12px;font-weight:bold;">Company</td><td style="padding:8px 12px;">${company}</td></tr>` : ""}
        </table>
        <div style="margin-top:24px;padding:16px;background:#fff8e1;border-left:4px solid #f59e0b;font-family:sans-serif;font-size:14px;">
          <strong>Action needed:</strong> Please manually add this contact to the newsletter list.
        </div>
        <p style="color:#999;font-size:12px;margin-top:24px;">Submitted at ${new Date().toLocaleString()}</p>
      `,
    });

    return NextResponse.json(
      { message: "Thanks for subscribing!" },
      { status: 200 },
    );
  } catch (err: any) {
    console.error("Subscribe form error:", err?.message || err);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again later." },
      { status: 500 },
    );
  }
}
