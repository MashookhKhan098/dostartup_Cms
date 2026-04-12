'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { X, CheckCircle, Upload, CreditCard, LogIn } from 'lucide-react'

// ─── Types ───────────────────────────────────────────────────────────────────
type Step = 'auth' | 'documents' | 'payment' | 'success'
type AuthMode = 'login' | 'signup'

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  registrationId: string
  packageName: string
  serviceName?: string
}

// ─── Constants ───────────────────────────────────────────────────────────────
const DOCUMENTS = [
  { key: 'aadhaar_card', label: 'Aadhaar Card', description: 'Front and back of Aadhaar card', required: true, icon: '🪪' },
  { key: 'pan_card', label: 'PAN Card', description: 'Clear copy of PAN card', required: true, icon: '💳' },
  { key: 'electricity_bill', label: 'Electricity Bill', description: 'Recent electricity bill (not older than 3 months)', required: true, icon: '⚡' },
  { key: 'rent_agreement', label: 'Rent Agreement', description: 'Registered rent agreement (if rented premises)', required: false, icon: '📄' },
  { key: 'logo', label: 'Business Logo', description: 'Company logo in PNG or JPG format', required: false, icon: '🏢' },
  { key: 'power_of_attorney', label: 'Power of Attorney', description: 'If applying on behalf of someone', required: false, icon: '📜' },
]

const PACKAGE_PRICES: Record<string, number> = {
  'Basic Package - ₹999': 999,
  'Standard Package - ₹1,999': 1999,
  'Premium Package - ₹2,999': 2999,
}

declare global { interface Window { Razorpay: any } }

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ServiceModal({ isOpen, onClose, registrationId, packageName, serviceName = 'Service' }: ServiceModalProps) {
  const [step, setStep] = useState<Step>('auth')
  const [authMode, setAuthMode] = useState<AuthMode>('login')

  // Auth state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [authLoading, setAuthLoading] = useState(false)
  const [authError, setAuthError] = useState('')

  // Document state
  const [files, setFiles] = useState<Record<string, File | null>>({})
  const [previews, setPreviews] = useState<Record<string, string>>({})
  const [uploading, setUploading] = useState(false)

  // Payment state
  const [payLoading, setPayLoading] = useState(false)
  const amount = PACKAGE_PRICES[packageName] || 999

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    document.body.appendChild(script)
    return () => { document.body.removeChild(script) }
  }, [])

  // Check if already logged in when modal opens
  useEffect(() => {
    if (!isOpen) return
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) setStep('documents')
    })
  }, [isOpen])

  // Reset on close
  const handleClose = () => {
    setStep('auth')
    setAuthError('')
    setEmail('')
    setPassword('')
    setName('')
    setFiles({})
    setPreviews({})
    onClose()
  }

  if (!isOpen) return null

  // ─── Step Labels ──────────────────────────────────────────────────────────
  const steps = [
    { key: 'auth', label: 'Login', icon: <LogIn className="w-4 h-4" /> },
    { key: 'documents', label: 'Documents', icon: <Upload className="w-4 h-4" /> },
    { key: 'payment', label: 'Payment', icon: <CreditCard className="w-4 h-4" /> },
  ]
  const stepIndex = steps.findIndex(s => s.key === step)

  // ─── Auth Handler ─────────────────────────────────────────────────────────
  const handleAuth = async () => {
    setAuthError('')
    if (!email || !password) { setAuthError('Please enter email and password'); return }

    setAuthLoading(true)
    try {
      if (authMode === 'login') {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) { setAuthError(error.message); return }
        
        // For login, ensure profile exists
        const { data: { session: loginSession } } = await supabase.auth.getSession()
        const loggedInUser = loginSession?.user
        if (loggedInUser) {
          const { data: existingProfile } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', loggedInUser.id)
            .single()
          
          // Only insert if profile doesn't exist
          if (!existingProfile) {
            await supabase.from('profiles').insert([{
              id: loggedInUser.id,
              name: loggedInUser.user_metadata?.full_name || email.split('@')[0],
              email: email
            }])
          }
        }
      } else {
        const { data, error } = await supabase.auth.signUp({
          email, password,
          options: { data: { full_name: name || email.split('@')[0] } }
        })
        if (error) { setAuthError(error.message); return }
        
        const user = data.user
        if (user) {
          // Save user data to the profiles table so it shows up in your database
          const { error: profileError } = await supabase
            .from('profiles')
            .insert([{ id: user.id, name: name || email.split('@')[0], email: email }])
            
          if (profileError && profileError.code !== '23505') { // Ignore unique constraint error if they signed up previously
            console.error('Profile creation error:', profileError.message)
          }
        }
      }

      const { data: { session: currentSession } } = await supabase.auth.getSession()
      if (currentSession?.user) {
        await supabase.from('gst_registrations').update({ user_id: currentSession.user.id }).eq('id', registrationId)
      }

      setStep('documents')
    } catch (err: any) {
      setAuthError(err.message)
    } finally {
      setAuthLoading(false)
    }
  }

  // ─── File Handler ─────────────────────────────────────────────────────────
  const handleFileChange = (key: string, file: File | null) => {
    if (!file) return
    setFiles(prev => ({ ...prev, [key]: file }))
    const reader = new FileReader()
    reader.onload = (e) => setPreviews(prev => ({ ...prev, [key]: e.target?.result as string }))
    reader.readAsDataURL(file)
  }

  // ─── Document Submit ──────────────────────────────────────────────────────
  const handleDocumentSubmit = async () => {
    const missing = DOCUMENTS.filter(d => d.required && !files[d.key])
    if (missing.length > 0) {
      alert(`Please upload: ${missing.map(d => d.label).join(', ')}`)
      return
    }

    setUploading(true)
    const uploadedUrls: Record<string, string> = {}

    const uploadPromises = Object.entries(files).map(async ([key, file]) => {
      if (!file) return null;
      const ext = file.name.split('.').pop();
      const path = `${registrationId}/${key}-${Date.now()}.${ext}`;
      const { error } = await supabase.storage.from('documents').upload(path, file, { upsert: true });
      if (error) {
        console.error(`Upload error for ${key}:`, error.message);
        return null;
      }
      const { data: urlData } = supabase.storage.from('documents').getPublicUrl(path);
      return { key, url: urlData.publicUrl };
    });

    const uploadResults = await Promise.all(uploadPromises);
    for (const res of uploadResults) {
      if (res) uploadedUrls[res.key] = res.url;
    }

    // Save to documents table (non-blocking)
    try {
      await supabase.from('documents').insert([{
        registration_id: registrationId,
        aadhaar_card: uploadedUrls['aadhaar_card'] || null,
        pan_card: uploadedUrls['pan_card'] || null,
        electricity_bill: uploadedUrls['electricity_bill'] || null,
        rent_agreement: uploadedUrls['rent_agreement'] || null,
        logo: uploadedUrls['logo'] || null,
        power_of_attorney: uploadedUrls['power_of_attorney'] || null,
        upload_status: 'completed',
      }])
    } catch (err) {
      console.error('DB save error:', err)
    }

    setUploading(false)
    setStep('payment')
  }

  // ─── Payment Handler ──────────────────────────────────────────────────────
  const handlePayment = async () => {
    setPayLoading(true)
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
        handler: async (response: any) => {
          try {
            const { data: { session: paySession } } = await supabase.auth.getSession();
            const user = paySession?.user ?? null;
            
            // Get user's name from auth metadata
            const userName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User';
            
            // Save payment record
            await supabase.from('payments').insert([{
              registration_id: registrationId,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              amount,
              package: packageName,
              payment_status: 'paid',
            }])
            
            // Update profile with user's name
            if (user) {
              console.log('💾 SAVING PROFILE:', { userId: user.id, name: userName, email: user.email })
              
              try {
                const { data, error } = await supabase
                  .from('profiles')
                  .upsert({
                    id: user.id,
                    name: userName,
                    email: user.email
                  })
                  .select()
                
                if (error) {
                  console.error('❌ PROFILE SAVE FAILED:', error.message)
                } else {
                  console.log('✅ PROFILE SAVED:', data)
                }
              } catch (err: any) {
                console.error('❌ PROFILE ERROR:', err.message)
              }
            }
            
            // Update registration status
            if (user) {
              await supabase.from('gst_registrations').update({ status: 'paid', user_id: user.id }).eq('id', registrationId)
              
              // Also update gst_returns if this is a GST Return Filing
              if (serviceName === 'GST Return Filing') {
                await supabase.from('gst_returns').update({ status: 'paid', user_id: user.id }).eq('id', registrationId)
              }
            }
          } catch (err) { console.error('Payment record error:', err) }
          setPayLoading(false)
          setStep('success')
        },
        prefill: { name: '', email: '', contact: '' },
        theme: { color: '#C15F3C' },
        modal: { ondismiss: () => setPayLoading(false) },
      }

      const rzp = new window.Razorpay(options)
      rzp.open()
    } catch (err: any) {
      alert('Payment error: ' + err.message)
      setPayLoading(false)
    }
  }

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <style>{`
        .transparent-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .transparent-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .transparent-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 3px;
        }
        .transparent-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.2);
        }
      `}</style>
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto transparent-scrollbar">

        {/* Header */}
        <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] rounded-t-2xl p-5 text-white sticky top-0 z-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold">{serviceName}</h2>
              <p className="text-xs opacity-75">Complete your registration</p>
            </div>
            <button onClick={handleClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Progress */}
          {step !== 'success' && (
            <div className="flex items-center gap-2">
              {steps.map((s, i) => (
                <div key={s.key} className="flex items-center gap-2 flex-1">
                  <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    i < stepIndex ? 'bg-white/30 text-white' :
                    i === stepIndex ? 'bg-white text-[#C15F3C]' :
                    'bg-white/10 text-white/50'
                  }`}>
                    {i < stepIndex ? <CheckCircle className="w-3 h-3" /> : s.icon}
                    {s.label}
                  </div>
                  {i < steps.length - 1 && <div className={`h-0.5 flex-1 rounded ${i < stepIndex ? 'bg-white/60' : 'bg-white/20'}`} />}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-6">

          {/* ─── Step 1: Auth ────────────────────────────────────────────── */}
          {step === 'auth' && (
            <div className="space-y-5">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-[#2F2E2B]">
                  {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
                </h3>
                <p className="text-sm text-[#6F6B63] mt-1">
                  {authMode === 'login' ? 'Sign in to continue with your application' : 'Create an account to track your application'}
                </p>
              </div>

              {authError && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
                  {authError}
                </div>
              )}

              <div className="space-y-3">
                {authMode === 'signup' && (
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:ring-1 focus:ring-[#C15F3C] outline-none"
                  />
                )}
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:ring-1 focus:ring-[#C15F3C] outline-none"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleAuth()}
                  className="w-full border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm text-[#2F2E2B] focus:ring-1 focus:ring-[#C15F3C] outline-none"
                />
              </div>

              <button
                onClick={handleAuth}
                disabled={authLoading}
                className="w-full bg-[#C15F3C] text-white font-semibold py-3 rounded-xl text-sm hover:bg-[#A94E30] transition disabled:opacity-60"
              >
                {authLoading ? 'Please wait...' : authMode === 'login' ? 'Sign In →' : 'Create Account →'}
              </button>

              <p className="text-center text-sm text-[#6F6B63]">
                {authMode === 'login' ? "Don't have an account? " : 'Already have an account? '}
                <button
                  onClick={() => { setAuthMode(authMode === 'login' ? 'signup' : 'login'); setAuthError('') }}
                  className="text-[#C15F3C] font-medium hover:underline"
                >
                  {authMode === 'login' ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            </div>
          )}

          {/* ─── Step 2: Documents ───────────────────────────────────────── */}
          {step === 'documents' && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-[#2F2E2B]">Upload Documents</h3>
                <p className="text-sm text-[#6F6B63] mt-1">Upload required documents to proceed</p>
              </div>

              <div className="space-y-3">
                {DOCUMENTS.map(doc => (
                  <div key={doc.key} className="border border-[#E5E2DA] rounded-xl p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{doc.icon}</span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-[#2F2E2B]">{doc.label}</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${doc.required ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-500'}`}>
                              {doc.required ? 'Required' : 'Optional'}
                            </span>
                          </div>
                          <p className="text-xs text-[#B1ADA1]">{doc.description}</p>
                        </div>
                      </div>
                      {previews[doc.key] && (
                        <img src={previews[doc.key]} alt="preview" className="w-10 h-10 object-cover rounded-lg border border-[#E5E2DA]" />
                      )}
                    </div>
                    <label className="block cursor-pointer">
                      <div className={`border-2 border-dashed rounded-lg p-3 text-center transition ${
                        files[doc.key] ? 'border-[#C15F3C] bg-orange-50' : 'border-[#E5E2DA] hover:border-[#C15F3C]'
                      }`}>
                        {files[doc.key] ? (
                          <p className="text-xs text-[#C15F3C] font-medium">✓ {files[doc.key]?.name}</p>
                        ) : (
                          <p className="text-xs text-[#B1ADA1]">Click to upload · PDF, JPG, PNG</p>
                        )}
                      </div>
                      <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden"
                        onChange={e => handleFileChange(doc.key, e.target.files?.[0] || null)} />
                    </label>
                  </div>
                ))}
              </div>

              <button
                onClick={handleDocumentSubmit}
                disabled={uploading}
                className="w-full bg-[#C15F3C] text-white font-semibold py-3 rounded-xl text-sm hover:bg-[#A94E30] transition disabled:opacity-60"
              >
                {uploading ? 'Uploading Documents...' : 'Submit Documents →'}
              </button>
              <p className="text-xs text-center text-[#B1ADA1]">🔒 Your documents are encrypted and stored securely</p>
            </div>
          )}

          {/* ─── Step 3: Payment ─────────────────────────────────────────── */}
          {step === 'payment' && (
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-[#2F2E2B]">Complete Payment</h3>
                <p className="text-sm text-[#6F6B63] mt-1">Secure payment powered by Razorpay</p>
              </div>

              <div className="border border-[#E5E2DA] rounded-xl p-5 space-y-3">
                <h4 className="font-semibold text-[#2F2E2B] text-sm">Order Summary</h4>
                <div className="flex justify-between text-sm text-[#6F6B63]">
                  <span>Service</span>
                  <span className="font-medium text-[#2F2E2B]">{serviceName}</span>
                </div>
                <div className="flex justify-between text-sm text-[#6F6B63]">
                  <span>Package</span>
                  <span className="font-medium text-[#2F2E2B]">{packageName}</span>
                </div>
                <div className="flex justify-between text-sm text-[#6F6B63]">
                  <span>Registration ID</span>
                  <span className="font-mono text-xs text-[#B1ADA1]">{registrationId.slice(0, 8)}...</span>
                </div>
                <div className="border-t border-[#E5E2DA] pt-3 flex justify-between font-semibold text-[#2F2E2B]">
                  <span>Total Amount</span>
                  <span className="text-[#C15F3C] text-lg">₹{amount.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={handlePayment}
                disabled={payLoading}
                className="w-full bg-[#C15F3C] text-white font-semibold py-3 rounded-xl text-sm hover:bg-[#A94E30] transition disabled:opacity-60"
              >
                {payLoading ? 'Processing...' : `Pay ₹${amount.toLocaleString()} →`}
              </button>
              <p className="text-xs text-center text-[#B1ADA1]">🔒 100% secure · Powered by Razorpay</p>
            </div>
          )}

          {/* ─── Step 4: Success ─────────────────────────────────────────── */}
          {step === 'success' && (
            <div className="text-center space-y-4 py-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-[#2F2E2B]">Payment Successful! 🎉</h3>
              <p className="text-sm text-[#6F6B63]">
                Your {serviceName} application is complete. Our team will contact you within 24 hours.
              </p>
              <p className="text-xs text-[#B1ADA1]">Registration ID: {registrationId.slice(0, 8)}...</p>
              <button
                onClick={handleClose}
                className="bg-[#C15F3C] text-white font-semibold px-8 py-3 rounded-xl text-sm hover:bg-[#A94E30] transition"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
