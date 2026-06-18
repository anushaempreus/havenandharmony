import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/siteConfig";

export async function POST(req: Request) {
  try {
    const { name, email, phone, interest, message } = await req.json();

    const isNewsletter = interest === "Newsletter";
    if (!email || (!isNewsletter && (!name || !message))) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    // Allow local dev without a key — log instead of failing the form.
    if (!apiKey) {
      console.warn("[contact] RESEND_API_KEY not set — enquiry not emailed:", {
        name,
        email,
        interest,
      });
      return NextResponse.json({ ok: true, delivered: false });
    }

    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "enquiries@havenharmony.com.au",
      to: process.env.CONTACT_TO_EMAIL ?? siteConfig.email,
      replyTo: email,
      subject: isNewsletter
        ? `Newsletter signup — ${email}`
        : `Website enquiry — ${interest ?? "General"} (${name})`,
      text: isNewsletter
        ? `New newsletter signup: ${email}`
        : [
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone: ${phone ?? "—"}`,
            `Interest: ${interest ?? "—"}`,
            "",
            message,
          ].join("\n"),
    });

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] send failed:", err);
    return NextResponse.json({ error: "Send failed" }, { status: 500 });
  }
}
