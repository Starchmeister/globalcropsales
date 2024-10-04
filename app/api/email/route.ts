import { Resend } from "resend";
import WelcomeEmail from "@/react-email-starter/emails/contact";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, reason } = await request.json();

  try {
    // Send email using Resend
    await resend.emails.send({
      from: "Automated Sales Funnel <automatedsalesfunnel@globalcropsales.com>",
      to: ["info@globalcropsales.com", "william.kumwenda@globalcropsales.com"],
      subject: "Customer Funnel",
      react: WelcomeEmail({ name: name, email: email, reason: reason }), // Pass props to the component
    });

    return NextResponse.json({
      status: "success",
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json({
      status: "error",
      message: "Failed to send email.",
    });
  }
}
