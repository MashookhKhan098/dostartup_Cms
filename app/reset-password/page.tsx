// 'use client'

// import { useState } from 'react'
// import { supabase } from '../../lib/supabase'
// import { useRouter } from 'next/navigation'
// import Link from 'next/link'

// export default function ResetPasswordPage() {
// const [password, setPassword] = useState('')
// const router = useRouter()

// const handleUpdate = async () => {
// const { error } = await supabase.auth.updateUser({
// password,
// })

// if (error) {
// alert(error.message)
// } else {
// alert('Password updated successfully')
// router.push('/login')
// }
// }

// return (
// <div className="min-h-screen bg-[#F4F3EE] flex items-center justify-center p-4">
// <div className="max-w-md w-full">
// {/* Main Card */}
// <div className="bg-[#F4F3EE] rounded-2xl shadow-sm border border-[#E5E2DA] p-6 md:p-8">
// {/* Header Section */}
// <div className="text-center mb-8">
// <h1 className="text-2xl md:text-3xl font-semibold text-[#2F2E2B] mb-2">
// Reset Password
// </h1>
// <p className="text-sm text-[#6F6B63]">
// Enter your new password below
// </p>
// </div>

// {/* Form */}
// <div className="space-y-5">
// {/* Password Input */}
// <div>
// <label htmlFor="password" className="block text-sm font-medium text-[#2F2E2B] mb-2">
// New Password
// </label>
// <input
// id="password"
// type="password"
// className="w-full bg-[#F4F3EE] border border-[#E5E2DA] rounded-lg px-4 py-3 text-[#2F2E2B] placeholder:text-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] focus:border-[#C15F3C] transition-colors"
// placeholder="Enter your new password"
// value={password}
// onChange={(e) => setPassword(e.target.value)}
// />
// </div>

// {/* Password Requirements Hint */}
// <div className="text-xs text-[#B1ADA1] space-y-1">
// <p>Password should contain:</p>
// <ul className="list-disc list-inside space-y-0.5">
// <li>At least 8 characters</li>
// <li>Mix of letters and numbers</li>
// </ul>
// </div>

// {/* Update Button */}
// <button
// onClick={handleUpdate}
// className="w-full bg-[#C15F3C] text-white hover:bg-[#A94E30] rounded-lg px-4 py-3 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#C15F3C] focus:ring-offset-2"
// disabled={!password}
// >
// Update Password
// </button>
// </div>

// {/* Trust Badges */}
// <div className="mt-6 pb-0">
// <div className="flex items-center justify-center gap-4">
// <div className="flex items-center gap-1">
// {[...Array(5)].map((_, i) => (
// <svg key={i} className="w-4 h-4 fill-[#C15F3C] text-[#C15F3C]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
// <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// </svg>
// ))}
// </div>
// <span className="text-xs text-[#B1ADA1]">Secure encryption • Industry standard</span>
// </div>
// </div>
// </div>

// {/* Back to Login Link */}
// <div className="text-center mt-6">
// <Link
// href="/login"
// className="inline-flex items-center gap-2 text-sm text-[#C15F3C] hover:text-[#A94E30] hover:underline transition-colors"
// >
// <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
// </svg>
// Back to Sign In
// </Link>
// </div>
// </div>
// </div>
// )
// }


import React from 'react'

const page = () => {
 return (
 <div>
 

 reset
 </div>
 )
}

export default page
