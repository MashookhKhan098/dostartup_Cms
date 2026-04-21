import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, subject, message } = body;

    // Name and phone are optional - continue even if not provided
    const finalService = service || subject || 'General Enquiry';
    const finalMessage = message || 'Interested in your services.';
    const finalName = name || email?.split('@')[0] || 'Anonymous';
    const finalPhone = phone || 'Not provided';

    // --- Send Email via Gmail SMTP ---
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_APP_PASSWORD,
      },
    });

    const htmlMessage = finalMessage.replace(/\n/g, '<br/>');

    const mailOptions = {
      from: `"DoStartup Enquiry" <${process.env.SMTP_EMAIL}>`,
      to: process.env.NOTIFICATION_EMAIL,
      subject: `New Lead: ${finalService} - ${finalName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #E5E2DA; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #C15F3C, #A94E30); padding: 20px; border-radius: 8px; margin-bottom: 24px;">
            <h1 style="color: white; margin: 0; font-size: 22px;">New Lead Received 🎉</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0 0; font-size: 14px;">via DoStartup Website</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #F4F3EE; font-size: 14px; color: #6F6B63; width: 140px;">👤 Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #F4F3EE; font-size: 14px; color: #2F2E2B; font-weight: 600;">${finalName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #F4F3EE; font-size: 14px; color: #6F6B63;">📧 Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #F4F3EE; font-size: 14px; color: #2F2E2B;">${email || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #F4F3EE; font-size: 14px; color: #6F6B63;">📞 Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #F4F3EE; font-size: 14px; color: #2F2E2B; font-weight: 600;">${finalPhone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #F4F3EE; font-size: 14px; color: #6F6B63;">🎯 Service</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #F4F3EE; font-size: 14px; color: #C15F3C; font-weight: 600;">${finalService}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-size: 14px; color: #6F6B63;">💬 Message</td>
              <td style="padding: 10px 0; font-size: 14px; color: #2F2E2B; line-height: 1.5;">${htmlMessage}</td>
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

    const userMailOptions = {
      from: `"DoStartup" <${process.env.SMTP_EMAIL}>`,
      to: email,
      subject: `Enquiry Received: ${finalService}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #E5E2DA; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 24px;">
            <div style="width: 50px; height: 50px; background: #C15F3C; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">
              <span style="color: white; font-size: 24px;">✓</span>
            </div>
            <h1 style="color: #2F2E2B; margin: 0; font-size: 22px;">Thank You for Reaching Out!</h1>
            <p style="color: #6F6B63; margin: 4px 0 0 0; font-size: 14px;">We've received your enquiry for ${finalService}</p>
          </div>

          <div style="background: #F9F8F6; padding: 20px; border-radius: 8px; border-left: 4px solid #C15F3C; margin-bottom: 24px;">
            <h4 style="margin: 0 0 10px 0; color: #2F2E2B; font-size: 15px;">Your Details:</h4>
            <p style="margin: 5px 0; color: #6F6B63; font-size: 14px;"><strong>Service:</strong> ${finalService}</p>
            <p style="margin: 5px 0; color: #6F6B63; font-size: 14px; line-height: 1.5;"><strong>Information Provided:</strong><br/>${htmlMessage}</p>
          </div>

          <p style="color: #2F2E2B; font-size: 15px; line-height: 1.6;">Our team will review your requirements and get back to you shortly.</p>
          
          <p style="margin-top: 24px; font-size: 14px; color: #6F6B63;">
            If you need immediate assistance, feel free to contact us on WhatsApp:<br/>
            <a href="https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}" style="color: #C15F3C; font-weight: 600; text-decoration: none;">Chat with us</a>
          </p>

          <p style="margin-top: 30px; font-size: 12px; color: #B1ADA1; text-align: center; border-top: 1px solid #F4F3EE; padding-top: 20px;">
            This is an automated confirmation from DoStartup.in
          </p>
        </div>
      `,
    };

    try {
      if (process.env.SMTP_EMAIL && process.env.SMTP_APP_PASSWORD !== 'your_gmail_app_password_here') {
        await transporter.sendMail(mailOptions);
        if (email) {
          await transporter.sendMail(userMailOptions);
        }
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

    const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

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

