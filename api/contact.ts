import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, service, details } = req.body;

  if (!name || !email || !service || !details) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const GMAIL_USER = process.env.GMAIL_USER;
  const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
  const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL;

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.error('Missing email configuration');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const nodemailer = await import('nodemailer');
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD
      }
    });

    const mailOptions = {
      from: GMAIL_USER,
      to: RECIPIENT_EMAIL || GMAIL_USER,
      subject: `New Contact Form: ${service} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong style="color: #1e293b;">Name:</strong> ${name}</p>
            <p><strong style="color: #1e293b;">Email:</strong> ${email}</p>
            <p><strong style="color: #1e293b;">Service:</strong> ${service}</p>
          </div>
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px;">
            <h3 style="color: #1e293b; margin-top: 0;">Project Details:</h3>
            <p style="color: #475569; line-height: 1.6;">${details.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="color: #94a3b8; font-size: 12px; margin-top: 20px;">
            Sent from Bestricky website contact form
          </p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
