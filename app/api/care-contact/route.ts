import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_HL2qon9m_9m6FTBXrpZUaTvSUNAnS2u8V");

export async function POST(req: NextRequest) {
  try {
    const { name, email, orderId, issue } = await req.json();

    if (!name || !email || !issue) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Sheplus Customer Care <anna@sheplusjewelry.com>",
      to: ["service@sheplusjewelry.com"],
      replyTo: email,
      subject: `🚨 Customer Issue: ${name} - Order ${orderId || "N/A"}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1c1917;">New Customer Care Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; background: #f5f0e8; font-weight: bold; width: 140px;">Customer Name</td>
              <td style="padding: 8px; border-bottom: 1px solid #e8e0d0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; background: #f5f0e8; font-weight: bold;">Email</td>
              <td style="padding: 8px; border-bottom: 1px solid #e8e0d0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; background: #f5f0e8; font-weight: bold;">Order ID</td>
              <td style="padding: 8px; border-bottom: 1px solid #e8e0d0;">${orderId || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px; background: #f5f0e8; font-weight: bold; vertical-align: top;">Issue</td>
              <td style="padding: 8px;">${issue.replace(/\n/g, "<br>")}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 12px; background: #fef9ee; border-radius: 8px;">
            <p style="margin: 0; font-size: 13px; color: #6b5d45;">
              ⚡ Please reply within 24 hours. Offer replacement or full refund to prevent negative review.
            </p>
          </div>
        </div>
      `,
    });

    // 同时发确认邮件给买家
    await resend.emails.send({
      from: "Sheplus Jewelry <service@sheplusjewelry.com>",
      to: [email],
      subject: "We received your message — Sheplus Jewelry",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1c1917;">Hi ${name}, we got your message! 💎</h2>
          <p>Thank you for reaching out to us. We've received your message and our team will get back to you within <strong>24 hours</strong>.</p>
          <p>We're committed to making this right for you — whether that's a free replacement or a full refund.</p>
          <div style="margin: 20px 0; padding: 16px; background: #f5f0e8; border-radius: 8px;">
            <p style="margin: 0; font-size: 13px; color: #6b5d45;">
              Your Order ID: <strong>${orderId || "Not provided"}</strong><br>
              Our email: service@sheplusjewelry.com
            </p>
          </div>
          <p style="color: #6b5d45;">Best regards,<br><strong>Anna & The Sheplus Team</strong></p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Care contact error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
