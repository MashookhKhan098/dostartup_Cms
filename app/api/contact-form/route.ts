import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, subject, message } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 });
    }

    const finalService = service || subject || 'General Enquiry';
    const finalMessage = message || 'Interested in your services.';

    // --- Send Email via Gmail SMTP ---
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"DoStartup Enquiry" <${process.env.SMTP_EMAIL}>`,
      to: process.env.NOTIFICATION_EMAIL,
      subject: `New Lead: ${finalService} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #E5E2DA; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #C15F3C, #A94E30); padding: 20px; border-radius: 8px; margin-bottom: 24px;">
            <h1 style="color: white; margin: 0; font-size: 22px;">New Lead Received 🎉</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0 0; font-size: 14px;">via DoStartup Website</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #F4F3EE; font-size: 14px; color: #6F6B63; width: 140px;">👤 Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #F4F3EE; font-size: 14px; color: #2F2E2B; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #F4F3EE; font-size: 14px; color: #6F6B63;">📧 Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #F4F3EE; font-size: 14px; color: #2F2E2B;">${email || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #F4F3EE; font-size: 14px; color: #6F6B63;">📞 Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #F4F3EE; font-size: 14px; color: #2F2E2B; font-weight: 600;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #F4F3EE; font-size: 14px; color: #6F6B63;">🎯 Service</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #F4F3EE; font-size: 14px; color: #C15F3C; font-weight: 600;">${finalService}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-size: 14px; color: #6F6B63;">💬 Message</td>
              <td style="padding: 10px 0; font-size: 14px; color: #2F2E2B;">${finalMessage}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 16px; background: #F9F8F6; border-radius: 8px; border-left: 4px solid #C15F3C;">
            <p style="margin: 0; font-size: 13px; color: #6F6B63;">
              📱 You can also contact this lead on WhatsApp:<br/>
              <a href="https://wa.me/91${phone}?text=Hi%20${encodeURIComponent(name)}%2C%20thank%20you%20for%20your%20enquiry%20on%20DoStartup%21" 
                 style="color: #C15F3C; font-weight: 600; text-decoration: none;">
                Click to open WhatsApp chat
              </a>
            </p>
          </div>

          <p style="margin-top: 20px; font-size: 12px; color: #B1ADA1; text-align: center;">
            This email was generated automatically by DoStartup.in
          </p>
        </div>
      `,
    };

    try {
      if (process.env.SMTP_EMAIL && process.env.SMTP_APP_PASSWORD !== 'your_gmail_app_password_here') {
        await transporter.sendMail(mailOptions);
      }
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
    }

    // --- WhatsApp message formatting ---
    const whatsappMessage = 
      `🔔 *New Lead - DoStartup*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📧 *Email:* ${email || 'Not provided'}\n` +
      `📞 *Phone:* ${phone}\n` +
      `🎯 *Service:* ${finalService}\n` +
      `💬 *Message:* ${finalMessage}\n\n` +
      `Please follow up at your earliest.`;

    const whatsappUrl = `https://wa.me/${process.env.WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully!',
      whatsappUrl 
    });

  } catch (err: any) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}

