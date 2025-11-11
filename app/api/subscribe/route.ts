// app/api/subscribe/route.ts
import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const API_KEY = process.env.MAILCHIMP_API_KEY!;
const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX!; // e.g., "us21"
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;
const DOUBLE_OPT_IN =
  (process.env.MAILCHIMP_NEWSLETTER_DOUBLE_OPT_IN || "true").toLowerCase() ===
  "true";
const DEV_BYPASS =
  (process.env.MAILCHIMP_DEV_BYPASS || "").toLowerCase() === "true";
const MC_BASE = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0`;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);
const NOTIFICATION_EMAIL =
  process.env.RESEND_NOTIFICATION_EMAIL || "info@isectra.com";

function subscriberHash(email: string) {
  return crypto.createHash("md5").update(email.toLowerCase()).digest("hex");
}

async function mcFetch(path: string, init: RequestInit) {
  const headers = {
    Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString(
      "base64"
    )}`,
    "Content-Type": "application/json",
    ...(init.headers || {}),
  };
  const res = await fetch(`${MC_BASE}${path}`, { ...init, headers });
  const text = await res.text();
  const json = text ? JSON.parse(text) : {};
  if (!res.ok) {
    const message = json?.detail || json?.title || "Mailchimp request failed";
    const status = json?.status || res.status;
    const err = new Error(message) as any;
    err.status = status;
    err.raw = json;
    throw err;
  }
  return json;
}

async function sendNewsletterNotificationEmail(subscriberData: {
  email: string;
  firstName?: string;
  status: string;
}) {
  try {
    await resend.emails.send({
      from: "notifications@isectra.com", // Must be a verified domain in Resend
      to: NOTIFICATION_EMAIL,
      subject: `New Newsletter Subscription: ${subscriberData.email}`,
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> <a href="mailto:${subscriberData.email}">${
        subscriberData.email
      }</a></p>
        ${
          subscriberData.firstName
            ? `<p><strong>Name:</strong> ${subscriberData.firstName}</p>`
            : ""
        }
        <p><strong>Status:</strong> ${
          subscriberData.status === "pending"
            ? "Pending confirmation"
            : "Subscribed"
        }</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Submitted at ${new Date().toLocaleString()}</p>
      `,
    });
  } catch (error) {
    console.error("Failed to send newsletter notification email:", error);
    // Don't throw - we don't want email failure to break the form submission
  }
}

export async function POST(req: NextRequest) {
  try {
    const { email, firstName } = await req.json();
    if (!email)
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );

    if ((process.env.MAILCHIMP_DEV_BYPASS || "").toLowerCase() === "true") {
      return NextResponse.json(
        { message: "Dev bypass on. Skipped Mailchimp." },
        { status: 200 }
      );
    }

    const hash = subscriberHash(email);
    const status_if_new =
      (
        process.env.MAILCHIMP_NEWSLETTER_DOUBLE_OPT_IN || "true"
      ).toLowerCase() === "true"
        ? "pending"
        : "subscribed";

    // Upsert member
    const upsert = await mcFetch(`/lists/${AUDIENCE_ID}/members/${hash}`, {
      method: "PUT",
      body: JSON.stringify({
        email_address: email,
        status_if_new,
        merge_fields: { FNAME: firstName || "" },
        tags: ["Newsletter"],
      }),
    });

    // Read back the member to confirm final status/tags
    const verify = await mcFetch(`/lists/${AUDIENCE_ID}/members/${hash}`, {
      method: "GET",
    });

    // Log a concise summary (safe to log)
    console.log("Mailchimp subscribe verify:", {
      email: verify.email_address,
      status: verify.status,
      id: verify.id,
      tags: (verify.tags || []).map((t: any) => t.name),
    });

    // Send notification email (non-blocking)
    await sendNewsletterNotificationEmail({
      email: verify.email_address,
      firstName,
      status: verify.status,
    });

    const humanMsg =
      verify.status === "pending"
        ? "Thanks! Please check your email to confirm your subscription."
        : "Subscribed! You're on the list.";

    return NextResponse.json(
      {
        message: humanMsg,
        mailchimp: {
          email: verify.email_address,
          status: verify.status, // pending/subscribed/cleaned/unsubscribed
          id: verify.id,
          tags: (verify.tags || []).map((t: any) => t.name),
        },
      },
      { status: 200 }
    );
  } catch (err: any) {
    const status = typeof err?.status === "number" ? err.status : 500;
    console.error("Mailchimp subscribe error:", status, err?.message || err);
    return NextResponse.json(
      {
        error:
          status === 400
            ? err?.message || "Invalid email."
            : "Failed to subscribe.",
      },
      { status }
    );
  }
}
