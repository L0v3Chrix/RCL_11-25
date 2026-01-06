import { NextRequest, NextResponse } from 'next/server';

// Email to send form submissions to
// TODO: Integrate with SendGrid/Resend/GoHighLevel for actual email delivery
const RECIPIENT_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL || 'recoverycenteredliving@gmail.com';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, email, phone, subject, message, preferredContact } = data;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format the subject line mapping
    const subjectMap: Record<string, string> = {
      general: 'General Question',
      application: 'Application Process',
      availability: 'House Availability',
      family: 'Family/Support Person Inquiry',
      partnership: 'Professional Partnership',
      other: 'Other Inquiry'
    };

    // Build the email content
    const emailSubject = `RCL Website Contact: ${subjectMap[subject] || subject}`;
    const emailBody = `
New Contact Form Submission
===========================

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Subject: ${subjectMap[subject] || subject}
Preferred Contact: ${preferredContact}

Message:
${message}

---
Submitted via Recovery Centered Living website
    `.trim();

    // For now, log the submission (in production, integrate with email service)
    console.log('=== CONTACT FORM SUBMISSION ===');
    console.log(`To: ${RECIPIENT_EMAIL}`);
    console.log(`Subject: ${emailSubject}`);
    console.log(emailBody);
    console.log('================================');

    // In production, you would integrate with:
    // - SendGrid
    // - Resend
    // - AWS SES
    // - Or forward to a GoHighLevel webhook

    // Example SendGrid integration (uncomment when ready):
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    await sgMail.send({
      to: RECIPIENT_EMAIL,
      from: 'noreply@recoverycenteredliving.com',
      replyTo: email,
      subject: emailSubject,
      text: emailBody,
    });
    */

    // Return success
    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
}
