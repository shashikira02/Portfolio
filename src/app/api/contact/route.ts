import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const requests = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60000; 
const MAX_REQUESTS = 3;

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

function cleanupOldRequests() {
  const now = Date.now();
  for (const [ip, data] of requests.entries()) {
    if (now - data.timestamp > RATE_LIMIT_WINDOW) {
      requests.delete(ip);
    }
  }
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0] ||
      req.headers.get('x-real-ip') ||
      'unknown';

    const userAgent = req.headers.get('user-agent') || 'unknown';
    const now = Date.now();

    cleanupOldRequests();

    const requestData = requests.get(ip);

    if (requestData) {
      if (now - requestData.timestamp < RATE_LIMIT_WINDOW) {
        if (requestData.count >= MAX_REQUESTS) {
          return NextResponse.json(
            {
              error: 'Too many requests. Please try again later.',
            },
            { status: 429 },
          );
        }
        requestData.count++;
      } else {
        requests.set(ip, { count: 1, timestamp: now });
      }
    } else {
      requests.set(ip, { count: 1, timestamp: now });
    }

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
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

    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID!,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
        Date: {
          date: {
            start: new Date().toISOString(),
          },
        },
        Status: {
          select: {
            name: 'New',
          },
        },
        IP: {
          rich_text: [
            {
              text: {
                content: ip,
              },
            },
          ],
        },
        UserAgent: {
          rich_text: [
            {
              text: {
                content: userAgent,
              },
            },
          ],
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        error: `Failed to send email, ${error}`,
      },
      { status: 500 },
    );
  }
}
