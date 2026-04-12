import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }

    const COCKPIT_URL = process.env.NEXT_PUBLIC_COCKPIT_URL;
    const API_KEY = process.env.NEXT_PUBLIC_COCKPIT_API_KEY;

    if (!COCKPIT_URL || !API_KEY) {
      console.error('Cockpit CMS configuration is missing');
      return NextResponse.json(
        { message: 'Internal Server Error' },
        { status: 500 }
      );
    }

    // 1. Check if email already exists
    const checkUrl = `${COCKPIT_URL}/api/content/items/subscribers?token=${API_KEY}&filter=${encodeURIComponent(JSON.stringify({ email }))}`;
    
    const checkResponse = await fetch(checkUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!checkResponse.ok) {
      console.error('Failed to check existing subscribers');
      return NextResponse.json(
        { message: 'Failed to check subscription status' },
        { status: 500 }
      );
    }

    const checkData = await checkResponse.json();

    if (Array.isArray(checkData) && checkData.length > 0) {
      // Email already exists
      return NextResponse.json(
        { message: 'You are already subscribed!' },
        { status: 200 }
      );
    }

    // 2. Add email to Cockpit
    const insertUrl = `${COCKPIT_URL}/api/content/item/subscribers?token=${API_KEY}`;
    const insertResponse = await fetch(insertUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          email
        }
      }),
    });

    if (!insertResponse.ok) {
      console.error('Failed to insert subscriber');
      return NextResponse.json(
        { message: 'Failed to subscribe' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
