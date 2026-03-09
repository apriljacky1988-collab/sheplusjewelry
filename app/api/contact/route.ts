import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, productInterest, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'SheplusJewelry <onboarding@resend.dev>',
      to: ['crossborderstar@gmail.com'],
      subject: `New Inquiry from ${name} - SheplusJewelry`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0d9488; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Jewelry Inquiry</h1>
            <p style="color: #ccfbf1; margin: 8px 0 0 0;">SheplusJewelry.com</p>
          </div>
          
          <div style="background: #f9fafb; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 140px; color: #374151;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">
                  <a href="mailto:${email}" style="color: #0d9488;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Company</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${company || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Interest</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${productInterest || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; vertical-align: top; color: #374151;">Message</td>
                <td style="padding: 12px 0; color: #111827; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</td>
              </tr>
            </table>
            
            <div style="margin-top: 24px; padding: 16px; background: #f0fdfa; border-radius: 8px; border-left: 4px solid #0d9488;">
              <p style="margin: 0; color: #0f766e; font-size: 14px;">
                <strong>Reply directly</strong> to this email to respond to ${name}.
              </p>
            </div>
          </div>
          
          <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 16px;">
            This inquiry was submitted via SheplusJewelry.com
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
