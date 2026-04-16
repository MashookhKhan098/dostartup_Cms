'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { supabase } from '@/lib/supabase'

export default function SignupPage() {
 const [step, setStep] = useState(1)
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [name, setName] = useState('')
 const [otp, setOtp] = useState('')
 const [isLoading, setIsLoading] = useState(false)
 const router = useRouter()

 const insertProfile = async (userId: string) => {
   const { error: profileError } = await supabase
     .from('profiles')
     .insert([
       {
         id: userId,
         name: name,
         email: email,
       },
     ])

   if (profileError) {
     console.error('Error inserting profile:', profileError.message)
   }
 }

 const handleSignup = async () => {
  if (!name || !email || !password) {
    alert("Please fill all fields")
    return
  }

  setIsLoading(true)

  // Step 1: Create user in Supabase Auth
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  setIsLoading(false)

  if (error) {
    alert(error.message)
    return
  }

  if (data.session) {
    // If confirmation is off, automatically logged in
    await insertProfile(data.user!.id)
    alert('Signup successful!')
    router.push('/')
  } else {
    // If confirmation is on, move to the OTP step
    setStep(2)
  }
}

  const handleVerifyOtp = async () => {
    if (!otp) {
      alert("Please enter the verification code")
      return
    }

    setIsLoading(true)

    const { data, error } = await supabase.auth.verifyOtp({
      email,
      token: otp,
      type: 'signup'
    })

    setIsLoading(false)

    if (error) {
      alert(error.message)
      return
    }

    if (data.session && data.user) {
      await insertProfile(data.user.id)
      alert("Signup successful! You are now logged in.")
      router.push('/')
    }
  }

 return (
 <div className="min-h-screen bg-[#F4F3EE] flex flex-col">
 <Navbar />
 <div className="flex-grow flex items-center justify-center p-4">
 <div className="max-w-md w-full my-8">
 {/* Main Card */}
 <div className="bg-[#F4F3EE] rounded-2xl shadow-sm border border-[#E5E2DA] p-6 md:p-8">
 {/* Header Section */}
 <div className="text-center mb-8">
 <h1 className="text-2xl md:text-3xl font-semibold text-[#2F2E2B] mb-2">
   {step === 1 ? 'Create an Account' : 'Verify Your Email'}
 </h1>
 <p className="text-sm text-[#6F6B63]">
   {step === 1 ? 'Join us and start your journey today' : `We've sent an 8-digit code to ${email}`}
 </p>
 </div>

 {/* Form */}
 <div className="space-y-5">
 
 {step === 1 && (
   <>
   {/* Name Input */}
   <div>
   <label htmlFor="name" className="block text-sm font-medium text-[#2F2E2B] mb-2">
   Full Name
   </label>
   <input
   id="name"
   type="text"
   className="w-full bg-[#F4F3EE] border border-[#E5E2DA] rounded-lg px-4 py-3 text-[#2F2E2B] placeholder:text-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] focus:border-[#C15F3C] transition-colors"
   placeholder="John Doe"
   value={name}
   onChange={(e) => setName(e.target.value)}
   disabled={isLoading}
   />
   </div>

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
   disabled={isLoading}
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
   placeholder="Create a strong password"
   value={password}
   onChange={(e) => setPassword(e.target.value)}
   disabled={isLoading}
   />
   </div>

   {/* Signup Button */}
   <button
   onClick={handleSignup}
   disabled={isLoading}
   className="w-full bg-[#C15F3C] text-white hover:bg-[#A94E30] rounded-lg px-4 py-3 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#C15F3C] focus:ring-offset-2 disabled:opacity-50"
   >
   {isLoading ? 'Creating Account...' : 'Create Account'}
   </button>
   </>
 )}

 {step === 2 && (
   <>
    {/* OTP Input */}
    <div>
    <label htmlFor="otp" className="block text-sm font-medium text-[#2F2E2B] mb-2">
    Verification Code
    </label>
    <input
    id="otp"
    type="text"
    maxLength={8}
    className="w-full bg-[#F4F3EE] border border-[#E5E2DA] rounded-lg px-4 py-3 text-[#2F2E2B] placeholder:text-[#B1ADA1] focus:outline-none focus:ring-1 focus:ring-[#C15F3C] focus:border-[#C15F3C] transition-colors text-center tracking-[0.5em] text-lg font-mono"
    placeholder="00000000"
    value={otp}
    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
    disabled={isLoading}
    />
    </div>

    {/* Verify Button */}
    <button
    onClick={handleVerifyOtp}
    disabled={isLoading}
    className="w-full bg-[#C15F3C] text-white hover:bg-[#A94E30] rounded-lg px-4 py-3 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#C15F3C] focus:ring-offset-2 disabled:opacity-50"
    >
    {isLoading ? 'Verifying...' : 'Verify Email and Login'}
    </button>
    <div className="text-center mt-4">
      <button 
        onClick={() => setStep(1)} 
        disabled={isLoading}
        className="text-sm text-[#C15F3C] hover:text-[#A94E30] hover:underline"
      >
        Go back
      </button>
    </div>
   </>
 )}

 </div>

 {step === 1 && (
   <div className="mt-6 pb-0">
     <div className="flex items-center justify-center gap-4">
     <div className="flex items-center gap-1">
     {[...Array(5)].map((_, i) => (
     <svg key={i} className="w-4 h-4 fill-[#C15F3C] text-[#C15F3C]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
     </svg>
     ))}
     </div>
     <span className="text-xs text-[#B1ADA1]">Free trial • No credit card required</span>
     </div>
   </div>
 )}

 </div>

 {/* Login Link */}
 <div className="text-center mt-6">
 <p className="text-sm text-[#6F6B63]">
 Already have an account?{' '}
 <Link
 href="/login"
 className="text-[#C15F3C] hover:text-[#A94E30] hover:underline font-medium transition-colors"
 >
 Sign in
 </Link>
 </p>
 </div>
 </div>
 </div>
 <Footer />
 </div>
 )
}
