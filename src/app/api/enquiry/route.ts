import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Simple in-memory rate limiting map: IP -> array of timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, validTimestamps);
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

function sanitize(input: unknown, maxLength = 1000): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/[<>]/g, "") // strip angle brackets
    .trim()
    .slice(0, maxLength);
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "anonymous";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many enquiries submitted from this network. Please reach us directly via phone or WhatsApp.",
          fallbackToWhatsapp: true,
        },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Honeypot check - bots tend to fill hidden fields
    if (body.website_check) {
      // Silently return success to mislead bots
      return NextResponse.json({ success: true, message: "Enquiry received." });
    }

    const name = sanitize(body.name, 100);
    const company = sanitize(body.company, 150);
    const phone = sanitize(body.phone, 30);
    const email = sanitize(body.email, 120);
    const location = sanitize(body.location, 150);
    const workType = sanitize(body.workType, 120);
    const approxSize = sanitize(body.approxSize, 80);
    const timeline = sanitize(body.timeline, 80);
    const requirement = sanitize(body.requirement, 2500);

    // Validation
    if (!name || !company || !phone || !location || !workType || !requirement) {
      return NextResponse.json(
        {
          success: false,
          error: "Please complete all mandatory fields marked with an asterisk (*).",
        },
        { status: 400 }
      );
    }

    // Phone validation regex (Indian 10-digit mobile or international dial)
    const phoneClean = phone.replace(/[\s\-().+]/g, "");
    if (phoneClean.length < 10 || phoneClean.length > 15 || !/^\d+$/.test(phoneClean)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid 10-digit phone number.",
        },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // Key is not configured yet in environment
      return NextResponse.json({
        success: false,
        fallbackToWhatsapp: true,
        message:
          "Email service is currently initializing. Please proceed on WhatsApp with your pre-filled brief so your requirement is received immediately.",
      });
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Kwality Interiors <onboarding@resend.dev>",
      to: ["Kwality9849@gmail.com"],
      replyTo: email && email.includes("@") ? email : undefined,
      subject: `New Project Enquiry: ${name} - ${company} (${workType})`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #1e293b;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #f59e0b; padding-bottom: 8px;">
            New Kwality Interiors Project Enquiry
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 6px 0; font-weight: bold; width: 180px;">Client Name:</td><td>${name}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Company / Contractor:</td><td>${company}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Phone:</td><td><a href="tel:${phone}">${phone}</a></td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Email:</td><td>${email ? `<a href="mailto:${email}">${email}</a>` : "Not provided"}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Project Location:</td><td>${location}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Work Type / Service:</td><td>${workType}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Approximate Size / Span:</td><td>${approxSize || "Not specified"}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Target Timeline:</td><td>${timeline || "Not specified"}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #f59e0b;">
            <p style="margin: 0; font-weight: bold;">Scope & Project Requirement:</p>
            <p style="margin-top: 8px; white-space: pre-wrap;">${requirement}</p>
          </div>
          <p style="margin-top: 24px; font-size: 11px; color: #64748b;">
            Submitted from kwalityinteriors.in enquiry form · IP: ${ip} · Timestamp: ${new Date().toISOString()}
          </p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({
        success: false,
        fallbackToWhatsapp: true,
        message:
          "Email dispatch could not complete. Please send your pre-filled brief on WhatsApp to connect immediately.",
      });
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you. Your project requirement has been delivered to Kwality Interiors. Enquiries are reviewed on the same business day.",
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json(
      {
        success: false,
        fallbackToWhatsapp: true,
        error: errorMsg,
        message: "An unexpected error occurred. You can hand off directly to WhatsApp.",
      },
      { status: 500 }
    );
  }
}
