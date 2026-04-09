'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

const PACKAGE_PRICES: Record<string, number> = {
  'Basic Package - ₹999': 999,
  'Standard Package - ₹1,999': 1999,
  'Premium Package - ₹2,999': 2999,
}

declare global {
  interface Window { Razorpay: any }
}

export default function PaymentPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const registrationId = searchParams.get('id')
  const packageName = searchParams.get('package') || ''
  const amount = PACKAGE_PRICES[packageName] || 999

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  const handlePayment = async () => {
    setLoading(true)

    try {
      const res = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, packageName }),
      })
      const { orderId } = await res.json()

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: amount * 100,
        currency: 'INR',
        name: 'DoStartup',
        description: packageName,
        order_id: orderId,
        handler: async function (response: any) {
          // Record payment in Supabase
          const { error: paymentError } = await supabase.from('payments').insert([{
            registration_id: registrationId,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            amount: amount,
            package: packageName,
            payment_status: 'paid',
          }])

          if (paymentError) {
            console.error('Payment Record Error:', paymentError);
            alert(`Payment was successful but we couldn't record it: ${paymentError.message}\nPlease contact support with your Payment ID: ${response.razorpay_payment_id}`);
            setLoading(false);
            return;
          }

          // Update registration status
          const { error: regError } = await supabase
            .from('gst_registrations')
            .update({ status: 'paid' })
            .eq('id', registrationId)

          if (regError) {
            console.error('Registration Update Error:', regError);
            alert(`Payment recorded but registration status update failed: ${regError.message}`);
          }

          setLoading(false)
          router.push(`/`)
        },
        prefill: { name: '', email: '', contact: '' },
        theme: { color: '#C15F3C' },
        modal: { ondismiss: () => setLoading(false) }
      }

      const rzp = new window.Razorpay(options)
      rzp.open()
    } catch (err: any) {
      console.error("Payment error:", err);
      alert("Something went wrong with the payment: " + err.message);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#F4F3EE] flex items-center justify-center">
      <div className="bg-[#F4F3EE] rounded-2xl shadow-sm border border-[#E5E2DA] p-8 max-w-md w-full">

        <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] rounded-xl p-6 text-white mb-6">
          <h2 className="text-xl font-semibold">Complete Payment</h2>
          <p className="text-sm opacity-80 mt-1">Secure payment powered by Razorpay</p>
        </div>

        <div className="bg-[#F4F3EE] rounded-xl p-5 mb-6 space-y-3">
          <h3 className="font-semibold text-[#2F2E2B]">Order Summary</h3>
          <div className="flex justify-between text-sm text-[#6F6B63]">
            <span>Package</span>
            <span className="font-medium text-[#2F2E2B]">{packageName}</span>
          </div>
          <div className="flex justify-between text-sm text-[#6F6B63]">
            <span>Registration ID</span>
            <span className="font-mono text-xs text-[#B1ADA1]">{registrationId?.slice(0, 8)}...</span>
          </div>
          <div className="border-t border-[#E5E2DA] pt-3 flex justify-between font-semibold text-[#2F2E2B]">
            <span>Total Amount</span>
            <span className="text-[#C15F3C]">₹{amount.toLocaleString()}</span>
          </div>
        </div>

        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full bg-[#C15F3C] text-white font-semibold py-4 rounded-xl text-sm hover:bg-[#A94E30] transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? 'Processing...' : `Pay ₹${amount.toLocaleString()} →`}
        </button>

        <p className="text-xs text-center text-[#B1ADA1] mt-4">
          🔒 100% secure · Powered by Razorpay
        </p>
      </div>
    </div>
  )
}
