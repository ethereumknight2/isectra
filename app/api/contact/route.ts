// app/api/contact/route.ts
import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";

// Ensure this runs on Node, not Edge
export const runtime = "nodejs";

const API_KEY = process.env.MAILCHIMP_API_KEY!;
const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX!; // e.g. "us21"
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;
const DOUBLE_OPT_IN =
  (process.env.MAILCHIMP_ENABLE_DOUBLE_OPT_IN || "true").toLowerCase() ===
  "true";

const MC_BASE = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0`;

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
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    const message = json?.detail || json?.title || "Mailchimp request failed";
    const status = json?.status || res.status;
    throw new Error(`Mailchimp ${status}: ${message}`);
  }
  return json;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      message,
      source, // optional: "Contact Form"
    } = body || {};

    if (!email || !firstName) {
      return NextResponse.json(
        { error: "First name and email are required." },
        { status: 400 }
      );
    }

    const hash = subscriberHash(email);
    const status_if_new = DOUBLE_OPT_IN ? "pending" : "subscribed";

    // Map UI → Mailchimp merge fields (make sure these MERGE tags exist in Mailchimp)
    const upsertPayload = {
      email_address: email,
      status_if_new, // "pending" triggers confirm email if double opt-in enabled
      merge_fields: {
        FNAME: firstName || "",
        LNAME: lastName || "",
        PHONE: phone || "",
        COMPANY: company || "",
        MESSAGE: message || "",
      },
      tags: ["Contact Form"],
    };

    // PUT is idempotent: create or update member by subscriber hash
    await mcFetch(`/lists/${AUDIENCE_ID}/members/${hash}`, {
      method: "PUT",
      body: JSON.stringify(upsertPayload),
    });

    // Optional: add a Note to the contact
    try {
      await mcFetch(`/lists/${AUDIENCE_ID}/members/${hash}/notes`, {
        method: "POST",
        body: JSON.stringify({
          note: `Submitted via ${
            source || "Website Form"
          } on ${new Date().toISOString()}

Message:
${message || "(none)"}`,
        }),
      });
    } catch {
      // Notes may require plan capabilities; ignore if it fails
    }

    const msg = DOUBLE_OPT_IN
      ? "Thanks! Please check your email to confirm your subscription."
      : "Thanks! Your details were received.";
    return NextResponse.json({ message: msg }, { status: 200 });
  } catch (err: any) {
    console.error("Mailchimp error:", err?.message || err);
    return NextResponse.json(
      { error: "Failed to submit. Please try again later." },
      { status: 500 }
    );
  }
}
