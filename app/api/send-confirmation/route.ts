import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, details, paymentId } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_APP_PASSWORD,
      },
    });

    // --- Email to Admin ---
    const adminMailOptions = {
      from: `"DoStartup Payment" <${process.env.SMTP_EMAIL}>`,
      to: process.env.NOTIFICATION_EMAIL,
      subject: `New Payment Received: ${service} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E5E2DA; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #C15F3C, #A94E30); padding: 30px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 24px;">Payment Success! 💰</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">New registration for ${service}</p>
          </div>
          <div style="padding: 24px;">
            <h3 style="color: #2F2E2B; border-bottom: 2px solid #F4F3EE; padding-bottom: 10px;">Customer Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email || 'Not provided'}</p>
            <p><strong>Payment ID:</strong> <code style="background: #F4F3EE; padding: 2px 6px; border-radius: 4px;">${paymentId}</code></p>
            
            <h3 style="color: #2F2E2B; border-bottom: 2px solid #F4F3EE; padding-bottom: 10px; margin-top: 24px;">Service Details</h3>
            ${Object.entries(details).map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`).join('')}
          </div>
        </div>
      `,
    };

    // --- Email to User ---
    const userMailOptions = {
      from: `"DoStartup" <${process.env.SMTP_EMAIL}>`,
      to: email,
      subject: `Confirmation: Registration for ${service} Received`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E5E2DA; border-radius: 12px; overflow: hidden;">
          <div style="background: #F9F8F6; padding: 40px; text-align: center; border-bottom: 1px solid #E5E2DA;">
            <div style="width: 60px; height: 60px; background: #C15F3C; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px;">
              <span style="color: white; font-size: 30px;">✓</span>
            </div>
            <h1 style="color: #2F2E2B; margin: 0; font-size: 24px;">Thank You, ${name}!</h1>
            <p style="color: #6F6B63; margin-top: 10px;">We've received your registration for ${service}.</p>
          </div>
          <div style="padding: 30px;">
            <p style="color: #2F2E2B; font-size: 16px; line-height: 1.6;">Our team will review your details and contact you within 24 hours to proceed with the next steps.</p>
            <div style="background: #F4F3EE; padding: 20px; border-radius: 8px; margin-top: 20px;">
              <p style="margin: 0; color: #6F6B63; font-size: 14px;"><strong>Payment ID:</strong> ${paymentId}</p>
              <p style="margin: 5px 0 0 0; color: #6F6B63; font-size: 14px;"><strong>Service:</strong> ${service}</p>
            </div>
            <p style="color: #6F6B63; font-size: 14px; margin-top: 20px;">If you have any questions, feel free to reply to this email or contact us on WhatsApp at ${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}.</p>
          </div>
        </div>
      `,
    };

    if (process.env.SMTP_EMAIL && process.env.SMTP_APP_PASSWORD && process.env.SMTP_APP_PASSWORD !== 'your_gmail_app_password_here') {
      try {
        await transporter.sendMail(adminMailOptions);
        if (email) await transporter.sendMail(userMailOptions);
      } catch (smtpErr) {
        console.error('SMTP Send Error (Check credentials):', smtpErr);
        // We don't want to throw 500 if only email fails but payment was successful
      }
    } else {
      console.warn('Skipping emails: SMTP credentials missing or placeholder.');
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Confirmation Email Error:', err);
    return NextResponse.json({ error: 'Failed to send confirmation' }, { status: 500 });
  }
}
