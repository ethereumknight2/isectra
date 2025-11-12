// app/api/subscribe/route.ts
import { NextResponse } from "next/server";

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
const MAILCHIMP_DC = process.env.MAILCHIMP_SERVER_PREFIX; // e.g., 'us21'

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    const response = await fetch(
      `https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(
            `anystring:${MAILCHIMP_API_KEY}`
          ).toString("base64")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed", // or 'pending' for double opt-in
          tags: ["AltStreet Website"],
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json(
        { message: "Successfully subscribed!" },
        { status: 200 }
      );
    } else if (data.title === "Member Exists") {
      return NextResponse.json(
        { error: "Email already subscribed" },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        { error: data.detail || "Subscription failed" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Mailchimp error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
