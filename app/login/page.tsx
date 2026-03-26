'use client'

import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            alert(error.message)
            return
        }

        router.push('/payment')
    }

    return (
        <div className="min-h-screen bg-[#F4F3EE] flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                {/* Main Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-[#E5E2DA] p-6 md:p-8">
                    {/* Header Section */}
                    <div className="text-center mb-8">
                        <h1 className="text-2xl md:text-3xl font-semibold text-[#2F2E2B] mb-2">
                            Welcome Back
                        </h1>
                        <p className="text-sm text-[#6F6B63]">
                            Sign in to continue to your account
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

                        {/* Password Input */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-[#2F2E2B] mb-2">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                className="w-full bg-[#F4F3EE] border border-[#E5E2DA] rounded-lg px-4 py-3 text-[#2F2E2B] placeholder:text-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] focus:border-[#C15F3C] transition-colors"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {/* Forgot Password Link */}
                        <div className="text-right">
                            <Link
                                href="/forgot-password"
                                className="text-sm text-[#C15F3C] hover:text-[#A94E30] hover:underline transition-colors"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        {/* Login Button */}
                        <button
                            onClick={handleLogin}
                            className="w-full bg-[#C15F3C] text-white hover:bg-[#A94E30] rounded-lg px-4 py-3 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#C15F3C] focus:ring-offset-2"
                        >
                            Sign In
                        </button>
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
                            <span className="text-xs text-[#B1ADA1]">Trusted by 10,000+ businesses</span>
                        </div>
                    </div>
                </div>

                {/* Sign Up Link */}
                <div className="text-center mt-6">
                    <p className="text-sm text-[#6F6B63]">
                        Don't have an account?{' '}
                        <Link
                            href="/signup"
                            className="text-[#C15F3C] hover:text-[#A94E30] hover:underline font-medium transition-colors"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}