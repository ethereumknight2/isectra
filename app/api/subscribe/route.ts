// app/api/subscribe/route.ts
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
    const { email, firstName, lastName, phone, company } = body || {};

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required." },
        { status: 400 }
      );
    }

    const displayName = firstName ? firstName : "there";

    // Send internal notification
    await sendEmail({
      sender: { name: "iSectra Notifications", email: "notifications@isectra.com" },
      to: TO_EMAILS.map((e) => ({ email: e })),
      subject: `New Subscriber: ${email}`,
      htmlContent: `
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

    // Send welcome email to subscriber
    await sendEmail({
      sender: { name: "iSectra", email: "notifications@isectra.com" },
      to: [{ email }],
      subject: "Welcome to the iSectra Newsletter",
      htmlContent: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Welcome to iSectra</title>
        </head>
        <body style="margin:0;padding:0;background-color:#f0f4f8;font-family:'Segoe UI',Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f4f8;padding:40px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

                  <!-- Header -->
                  <tr>
                    <td style="background:#ffffff;padding:0;text-align:center;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="background:#07588a;height:6px;width:75%;"></td>
                          <td style="background:#7dca00;height:6px;width:25%;"></td>
                        </tr>
                      </table>
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding:36px 40px 28px;text-align:center;">
                            <img src="https://isectra.com/images/logo.svg" alt="iSectra" width="120" height="auto" style="display:block;margin:0 auto;max-width:160px;"/>
                          </td>
                        </tr>
                      </table>
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="background:#07588a;padding:16px 40px;text-align:center;">
                            <p style="margin:0;font-size:12px;color:#a8cce0;letter-spacing:3px;text-transform:uppercase;font-weight:600;">Managed IT Services</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding:40px 40px 32px;">
                      <h2 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#07588a;">Hey ${displayName}, welcome aboard!</h2>
                      <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#444;">
                        Thanks for subscribing to the iSectra newsletter. You're now part of a community of businesses that take IT seriously — without the enterprise price tag.
                      </p>
                      <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#444;">
                        Here's what you can expect from us:
                      </p>

                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                        <tr>
                          <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                            <table cellpadding="0" cellspacing="0"><tr>
                              <td style="width:32px;vertical-align:top;padding-top:2px;">
                                <div style="width:20px;height:20px;background:#7dca00;border-radius:50%;text-align:center;line-height:20px;font-size:12px;color:#fff;font-weight:bold;">&#10003;</div>
                              </td>
                              <td style="font-size:14px;color:#333;line-height:1.6;padding-left:8px;"><strong>IT tips &amp; best practices</strong> to keep your business secure and running smoothly</td>
                            </tr></table>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                            <table cellpadding="0" cellspacing="0"><tr>
                              <td style="width:32px;vertical-align:top;padding-top:2px;">
                                <div style="width:20px;height:20px;background:#7dca00;border-radius:50%;text-align:center;line-height:20px;font-size:12px;color:#fff;font-weight:bold;">&#10003;</div>
                              </td>
                              <td style="font-size:14px;color:#333;line-height:1.6;padding-left:8px;"><strong>Cybersecurity alerts</strong> and what they mean for small and mid-size businesses</td>
                            </tr></table>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:10px 0;">
                            <table cellpadding="0" cellspacing="0"><tr>
                              <td style="width:32px;vertical-align:top;padding-top:2px;">
                                <div style="width:20px;height:20px;background:#7dca00;border-radius:50%;text-align:center;line-height:20px;font-size:12px;color:#fff;font-weight:bold;">&#10003;</div>
                              </td>
                              <td style="font-size:14px;color:#333;line-height:1.6;padding-left:8px;"><strong>Updates from iSectra</strong> — new services, industry news, and exclusive offers</td>
                            </tr></table>
                          </td>
                        </tr>
                      </table>

                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                        <tr>
                          <td align="center">
                            <a href="https://isectra.com" style="display:inline-block;background:linear-gradient(135deg,#07588a,#054a75);color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;padding:14px 36px;border-radius:8px;letter-spacing:0.3px;">
                              Visit iSectra.com
                            </a>
                          </td>
                        </tr>
                      </table>

                      <p style="margin:0;font-size:15px;line-height:1.7;color:#444;">
                        In the meantime, if you have any IT questions or just want to chat about what we can do for your business, reply to this email or give us a call — we're always happy to help.
                      </p>
                      <p style="margin:20px 0 0;font-size:15px;color:#444;">— The iSectra Team</p>
                    </td>
                  </tr>

                  <!-- Stats bar -->
                  <tr>
                    <td style="background:#f8fbff;border-top:1px solid #e8f0f8;border-bottom:1px solid #e8f0f8;padding:24px 40px;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center" style="width:33%;padding:0 8px;">
                            <p style="margin:0;font-size:22px;font-weight:700;color:#07588a;">99.97%</p>
                            <p style="margin:4px 0 0;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:1px;">Uptime</p>
                          </td>
                          <td align="center" style="width:33%;padding:0 8px;border-left:1px solid #dde8f0;border-right:1px solid #dde8f0;">
                            <p style="margin:0;font-size:22px;font-weight:700;color:#07588a;">&lt;10 min</p>
                            <p style="margin:4px 0 0;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:1px;">Response Time</p>
                          </td>
                          <td align="center" style="width:33%;padding:0 8px;">
                            <p style="margin:0;font-size:22px;font-weight:700;color:#07588a;">20+</p>
                            <p style="margin:4px 0 0;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:1px;">Years Experience</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding:28px 40px;text-align:center;">
                      <p style="margin:0 0 8px;font-size:13px;color:#999;">
                        iSectra &middot; Jacksonville, FL &middot; <a href="https://isectra.com" style="color:#07588a;text-decoration:none;">isectra.com</a>
                      </p>
                      <p style="margin:0;font-size:12px;color:#bbb;">
                        You're receiving this because you subscribed at isectra.com.<br/>
                        <a href="https://isectra.com/unsubscribe" style="color:#bbb;">Unsubscribe</a>
                      </p>
                    </td>
                  </tr>

                  <!-- Bottom accent bar -->
                  <tr>
                    <td style="padding:0;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="background:#7dca00;height:4px;width:25%;"></td>
                          <td style="background:#07588a;height:4px;width:75%;"></td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    return NextResponse.json(
      { message: "Thanks for subscribing!" },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Subscribe form error:", err?.message || err);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again later." },
      { status: 500 }
    );
  }
}