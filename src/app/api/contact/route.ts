import { NextResponse } from "next/server";

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

    // Simulate backend delivery (e.g. Resend, Sendgrid, Slack Webhook)
    // In production, insert provider call here with process.env.API_KEY
    console.log("[Contact Submission Received]:", {
      name: name.trim(),
      email: email.trim(),
      subject: cleanSubject,
      messageLength: message.trim().length,
      receivedAt: new Date().toISOString(),
    });

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
