import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { error: "Email address is required." },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const cleanSubject =
      subject && typeof subject === "string" && subject.trim()
        ? subject.trim()
        : "Portfolio Contact Inquiry";

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("[Contact API]: RESEND_API_KEY is not defined in environment variables (.env.local).");
      return NextResponse.json(
        { error: "Email service is temporarily not configured. Please contact me directly via WhatsApp or email." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || "anfasarshad@gmail.com";

    const { error: sendError } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [recipientEmail],
      replyTo: email.trim(),
      subject: `[Portfolio Inquiry] ${cleanSubject} - from ${name.trim()}`,
      text: `New message from your portfolio contact form:\n\nName: ${name.trim()}\nEmail: ${email.trim()}\nSubject: ${cleanSubject}\n\nMessage:\n${message.trim()}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #1e293b;">
          <div style="border-bottom: 2px solid #6366f1; padding-bottom: 16px; margin-bottom: 20px;">
            <h2 style="margin: 0; color: #0f172a; font-size: 20px;">New Portfolio Contact Submission</h2>
            <p style="margin: 4px 0 0 0; color: #64748b; font-size: 13px;">Received from your personal website</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; width: 80px; font-weight: 600;">Name:</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 500;">${name.trim()}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Email:</td>
              <td style="padding: 8px 0; color: #4f46e5;"><a href="mailto:${email.trim()}" style="color: #4f46e5; text-decoration: none;">${email.trim()}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Subject:</td>
              <td style="padding: 8px 0; color: #0f172a;">${cleanSubject}</td>
            </tr>
          </table>

          <div style="background-color: #f8fafc; border-left: 4px solid #6366f1; padding: 16px; border-radius: 6px; margin-bottom: 24px;">
            <h3 style="margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b;">Message:</h3>
            <p style="margin: 0; color: #1e293b; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message.trim()}</p>
          </div>

          <div style="text-align: center; border-top: 1px solid #f1f5f9; padding-top: 16px; font-size: 12px; color: #94a3b8;">
            <p style="margin: 0;">Clicking &quot;Reply&quot; in your email client will reply directly to <strong>${email.trim()}</strong>.</p>
          </div>
        </div>
      `,
    });

    if (sendError) {
      console.error("[Resend Delivery Error]:", sendError);
      return NextResponse.json(
        { error: "Failed to deliver email. Please reach out via WhatsApp or email directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message received successfully! I will respond within 24 business hours.",
    });
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      { error: "Failed to process message. Please try again or email me directly." },
      { status: 500 }
    );
  }
}
