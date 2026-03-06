import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const requests = new Map<string, number>();

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'unknown';

    const now = Date.now();
    const lastRequest = requests.get(ip);

    // limit 1 request for every 15 seconds
    if (lastRequest && now - lastRequest < 15000) {
      return NextResponse.json(
        {
          error: `Too many requests. try again later after ${now - lastRequest}/1000 seconds later.`,
        },
        { status: 429 },
      );
    }

    requests.set(ip, now);

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'shashikira4124@gmail.com',
      subject: `New message from ${name}`,
      replyTo: email,
      html: `
                <h2>New Contact Message</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        error: `Failed to send email, ${error}`
      },
      { status: 500 },
    );
  }
}
