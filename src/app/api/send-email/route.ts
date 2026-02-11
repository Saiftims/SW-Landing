import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { 
      firstName, 
      lastName, 
      email, 
      phoneNumber, 
      lawFirm,
      meetingTopic
    } = await request.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !phoneNumber || !lawFirm) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Create transporter for email service
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number.parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports like 587
      auth: {
        user: process.env.SMTP_USER || 'contact@silentwitness.ai',
        pass: process.env.SMTP_PASS || 'andl gyrm hyik srij',
      },
    });

    // Send business notification email
    const mailOptions = {
      from: process.env.SMTP_USER || 'contact@silentwitness.ai',
      to: 'contact@silentwitness.ai',
      replyTo: email, // User's email for easy reply
      subject: `New Meeting Request from ${firstName} ${lastName} - ${lawFirm}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <!-- Logo Header -->
          <div style="text-align: center; padding: 20px 0; border-bottom: 1px solid #e2e8f0; margin-bottom: 20px;">
            <img src="https://silentwitness.ai/images/logos/Silent-Witness-Logo.png" alt="Silent Witness Logo" style="max-height: 40px; width: auto;" />
          </div>
          
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Meeting Request
          </h2>
          
          <div style="background-color: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
            <p style="margin: 0; color: #1e40af; font-weight: 500;">
              📧 Meeting request from: <strong>${firstName} ${lastName}</strong> at <strong>${lawFirm}</strong>
            </p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Contact Information</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 30%;">Name:</td>
                <td style="padding: 8px 0; color: #334155;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
                <td style="padding: 8px 0; color: #334155;">
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone:</td>
                <td style="padding: 8px 0; color: #334155;">
                  <a href="tel:${phoneNumber}" style="color: #2563eb; text-decoration: none;">${phoneNumber}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Law Firm:</td>
                <td style="padding: 8px 0; color: #334155;">${lawFirm}</td>
              </tr>
              ${meetingTopic ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Meeting Topic:</td>
                <td style="padding: 8px 0; color: #334155;">${meetingTopic}</td>
              </tr>
              ` : ''}
            </table>
          </div>

          <div style="background-color: #fff7ed; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
            <p style="margin: 0; color: #92400e; font-weight: 500;">
              ⏰ <strong>Next Step:</strong> They will use Calendly to schedule their preferred time.
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
            <p style="margin: 0;">
              📧 Reply directly to this email to contact <strong>${firstName} ${lastName}</strong><br>
              🌐 This request was submitted via the Silent Witness contact form
            </p>
          </div>
        </div>
      `,
      text: `
SILENT WITNESS - New Meeting Request

Contact Information:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Phone: ${phoneNumber}
- Law Firm: ${lawFirm}${meetingTopic ? `
- Meeting Topic: ${meetingTopic}` : ''}

Next Step: They will use Calendly to schedule their preferred time.

Reply directly to this email to contact ${firstName} ${lastName}.
This request was submitted via the Silent Witness contact form.
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Business notification email sent successfully');

    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        success: true
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}