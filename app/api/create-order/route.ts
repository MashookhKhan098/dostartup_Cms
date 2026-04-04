import Razorpay from 'razorpay'
import { NextResponse } from 'next/server'

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

export async function POST(req: Request) {
  try {
    const { amount, packageName } = await req.json()

    const order = await razorpay.orders.create({
      amount: amount * 100, // paise
      currency: 'INR',
      notes: { package: packageName }
    })

    return NextResponse.json({ orderId: order.id })
  } catch (error: any) {
    console.error("Razorpay error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
