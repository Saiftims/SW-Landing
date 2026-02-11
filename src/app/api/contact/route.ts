import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Create transporter for email service
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number.parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER || 'contact@silentwitness.ai',
        pass: process.env.SMTP_PASS || 'andl gyrm hyik srij',
      },
    });

    // Send notification email to saif@silentwitness.ai
    const mailOptions = {
      from: process.env.SMTP_USER || 'contact@silentwitness.ai',
      to: 'saif@silentwitness.ai',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}${company ? ` — ${company}` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <!-- Logo Header -->
          <div style="text-align: center; padding: 20px 0; border-bottom: 1px solid #e2e8f0; margin-bottom: 20px;">
            <img src="https://silentwitness.ai/images/logos/Silent-Witness-Logo.png" alt="Silent Witness Logo" style="max-height: 40px; width: auto;" />
          </div>
          
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
            <p style="margin: 0; color: #1e40af; font-weight: 500;">
              📬 New lead from: <strong>${name}</strong>${company ? ` at <strong>${company}</strong>` : ''}
            </p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Contact Details</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 30%;">Name:</td>
                <td style="padding: 8px 0; color: #334155;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
                <td style="padding: 8px 0; color: #334155;">
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone:</td>
                <td style="padding: 8px 0; color: #334155;">
                  <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              ` : ''}
              ${company ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Company:</td>
                <td style="padding: 8px 0; color: #334155;">${company}</td>
              </tr>
              ` : ''}
            </table>
          </div>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Message</h3>
            <p style="color: #334155; white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
            <p style="margin: 0;">
              📧 Reply directly to this email to respond to <strong>${name}</strong><br>
              🌐 Submitted via the Silent Witness website contact form
            </p>
          </div>
        </div>
      `,
      text: `
SILENT WITNESS - New Contact Form Submission

Contact Details:
- Name: ${name}
- Email: ${email}${phone ? `\n- Phone: ${phone}` : ''}${company ? `\n- Company: ${company}` : ''}

Message:
${message}

Reply directly to this email to respond to ${name}.
Submitted via the Silent Witness website contact form.
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Contact form email sent to saif@silentwitness.ai');

    return NextResponse.json(
      { message: 'Message sent successfully', success: true },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending contact email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
