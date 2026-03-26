'use client'

import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import Link from 'next/link'

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleReset = async () => {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: 'http://localhost:3000/reset-password',
        })

        if (error) {
            setMessage(error.message)
        } else {
            setMessage('Check your email for reset link')
        }
    }

    return (
        <div className="min-h-screen bg-[#F4F3EE] flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                {/* Main Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-[#E5E2DA] p-6 md:p-8">
                    {/* Header Section */}
                    <div className="text-center mb-8">
                        <h1 className="text-2xl md:text-3xl font-semibold text-[#2F2E2B] mb-2">
                            Forgot Password?
                        </h1>
                        <p className="text-sm text-[#6F6B63]">
                            No worries! Enter your email and we'll send you a reset link
                        </p>
                    </div>

                    {/* Form */}
                    <div className="space-y-5">
                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-[#2F2E2B] mb-2">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="w-full bg-[#F4F3EE] border border-[#E5E2DA] rounded-lg px-4 py-3 text-[#2F2E2B] placeholder:text-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] focus:border-[#C15F3C] transition-colors"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Reset Button */}
                        <button
                            onClick={handleReset}
                            className="w-full bg-[#C15F3C] text-white hover:bg-[#A94E30] rounded-lg px-4 py-3 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#C15F3C] focus:ring-offset-2"
                        >
                            Send Reset Link
                        </button>

                        {/* Message Display */}
                        {message && (
                            <div className={`text-sm text-center p-3 rounded-lg ${message.includes('Check')
                                    ? 'bg-green-50 text-green-700 border border-green-200'
                                    : 'bg-red-50 text-red-700 border border-red-200'
                                }`}>
                                {message}
                            </div>
                        )}
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-6 pb-0">
                        <div className="flex items-center justify-center gap-4">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 fill-[#C15F3C] text-[#C15F3C]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-xs text-[#B1ADA1]">Secure password reset • 24/7 support</span>
                        </div>
                    </div>
                </div>

                {/* Back to Login Link */}
                <div className="text-center mt-6">
                    <Link
                        href="/login"
                        className="inline-flex items-center gap-2 text-sm text-[#C15F3C] hover:text-[#A94E30] hover:underline transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Sign In
                    </Link>
                </div>
            </div>
        </div>
    )
}