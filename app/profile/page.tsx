'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FiUser, FiMail, FiLogOut, FiArrowLeft } from 'react-icons/fi'

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [payments, setPayments] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      const session = user ? { user } : null;

      if (!user) {
        router.push('/login')
        return
      }
      setUser(user)

      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()
      
      if (profileError) {
        console.log('Profile not found, using auth data:', profileError.message)
        // Fallback to auth metadata if profile doesn't exist
        setProfile({
          name: user.user_metadata?.full_name || user.email?.split('@')[0],
          email: user.email,
          id: user.id
        })
      } else if (profileData) {
        console.log('Profile found:', profileData)
        setProfile(profileData)
      } else {
        // Profile row exists but no data
        setProfile({
          name: user.user_metadata?.full_name || user.email?.split('@')[0],
          email: user.email,
          id: user.id
        })
      }

      // Fetch user's registrations from gst_registrations
      let userRegistrations: any[] = []
      const { data: regData, error: regError } = await supabase
        .from('gst_registrations')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
      
      console.log('GST Registrations Query - Error:', regError, 'Data:', regData)
      
      if (!regError && regData) {
        userRegistrations = regData
      } else if (regError) {
        // Fallback without sort if needed
        const { data: fallbackData } = await supabase.from('gst_registrations').select('*').eq('user_id', user.id)
        if (fallbackData) userRegistrations = fallbackData
      }

      // Fetch user's GST returns from gst_returns
      let userReturns: any[] = []
      const { data: returnsData, error: returnsError } = await supabase
        .from('gst_returns')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
      
      console.log('GST Returns Query - User ID:', user.id)
      console.log('GST Returns Query - Error:', returnsError?.message, 'Data count:', returnsData?.length)
      
      if (returnsError) {
        console.error('Error fetching GST returns:', returnsError)
      } else if (returnsData && returnsData.length > 0) {
        console.log('GST Returns fetched:', returnsData)
        userReturns = returnsData.map(r => ({
          ...r,
          registration_type: r.form_type || 'GST Return Filing',
          id: r.id,
          status: r.status || 'pending'
        }))
      } else {
        console.log('No GST returns found for user')
      }

      // Fetch user's Proprietorship registrations
      let userProprietorship: any[] = []
      const { data: propData, error: propError } = await supabase
        .from('proprietorship')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
      
      if (!propError && propData) {
        userProprietorship = propData.map(p => ({
          ...p,
          registration_type: 'Proprietorship Registration',
          id: p.id,
          status: p.status || 'paid'
        }))
      }

      // Fetch user's Partnership registrations (Table: parternership)
      let userPartnership: any[] = []
      const { data: partData, error: partError } = await supabase
        .from('parternership')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

      if (!partError && partData) {
        userPartnership = partData.map(p => ({
          ...p,
          registration_type: 'Partnership Registration',
          id: p.id,
          status: p.payment_state || 'paid' // Use payment_state from schema
        }))
      }

      // Fetch user's OPC registrations
      let userOPC: any[] = []
      const { data: opcData, error: opcError } = await supabase
        .from('one_person_company')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
      
      if (!opcError && opcData) {
        userOPC = opcData.map(p => ({
          ...p,
          registration_type: 'OPC Registration',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's LLP registrations
      let userLLP: any[] = []
      const { data: llpData, error: llpError } = await supabase
        .from('limited_liability_partnership')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
      
      if (!llpError && llpData) {
        userLLP = llpData.map(p => ({
          ...p,
          registration_type: 'LLP Registration',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Private Limited Company registrations
      let userPvtLtd: any[] = []
      const { data: pvtLtdData, error: pvtLtdError } = await supabase
        .from('private_limited_company')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
      
      if (!pvtLtdError && pvtLtdData) {
        userPvtLtd = pvtLtdData.map(p => ({
          ...p,
          registration_type: 'Private Limited Company',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Section 8 registrations
      let userSection8: any[] = []
      const { data: s8Data, error: s8Error } = await supabase
        .from('section_8_company')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
      
      if (!s8Error && s8Data) {
        userSection8 = s8Data.map(p => ({
          ...p,
          registration_type: 'Section 8 Company',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Trust registrations
      let userTrust: any[] = []
      const { data: trustData, error: trustError } = await supabase
        .from('trust_registration')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
      
      if (!trustError && trustData) {
        userTrust = trustData.map(p => ({
          ...p,
          registration_type: 'Trust Registration',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Public Limited Company registrations
      let userPublicLimited: any[] = []
      const { data: pubLtdData, error: pubLtdError } = await supabase
        .from('public_limited_company')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
      
      if (!pubLtdError && pubLtdData) {
        userPublicLimited = pubLtdData.map(p => ({
          ...p,
          registration_type: 'Public Limited Company',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Indian Subsidiary registrations
      let userIndianSubs: any[] = []
      const { data: indianSubsData, error: indianSubsError } = await supabase
        .from('indian_subsidiary')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
      
      if (!indianSubsError && indianSubsData) {
        userIndianSubs = indianSubsData.map(p => ({
          ...p,
          registration_type: 'Indian Subsidiary',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Producer Company registrations
      let userProducerCompany: any[] = []
      const { data: prodCoData, error: prodCoError } = await supabase
        .from('producer_company')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
      
      if (!prodCoError && prodCoData) {
        userProducerCompany = prodCoData.map(p => ({
          ...p,
          registration_type: 'Producer Company',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Startup India registrations (using email)
      let userStartupIndia: any[] = []
      const { data: startupData, error: startupError } = await supabase
        .from('startup_india')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      if (!startupError && startupData) {
        userStartupIndia = startupData.map(p => ({
          ...p,
          registration_type: 'Startup India Registration',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Trade License registrations (using email)
      let userTradeLicense: any[] = []
      const { data: tradeData, error: tradeError } = await supabase
        .from('trade_license')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      if (!tradeError && tradeData) {
        userTradeLicense = tradeData.map(p => ({
          ...p,
          registration_type: 'Trade License Registration',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's FSSAI registrations (using email)
      let userFssai: any[] = []
      const { data: fssaiData, error: fssaiError } = await supabase
        .from('fssai_registration')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      if (!fssaiError && fssaiData) {
        userFssai = fssaiData.map(p => ({
          ...p,
          registration_type: 'FSSAI Registration',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's FSSAI License registrations (using email)
      let userFssaiLicense: any[] = []
      const { data: fssaiLicenseData, error: fssaiLicenseError } = await supabase
        .from('fssai_license')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      if (!fssaiLicenseError && fssaiLicenseData) {
        userFssaiLicense = fssaiLicenseData.map(p => ({
          ...p,
          registration_type: 'FSSAI License',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Halal Certificate registrations (using email)
      let userHalal: any[] = []
      const { data: halalData, error: halalError } = await supabase
        .from('halal_certificate')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      if (!halalError && halalData) {
        userHalal = halalData.map(p => ({
          ...p,
          registration_type: 'Halal Certification',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's ICEGATE registrations (using email)
      let userIcegate: any[] = []
      const { data: icegateData, error: icegateError } = await supabase
        .from('icegate_registration')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      if (!icegateError && icegateData) {
        userIcegate = icegateData.map(p => ({
          ...p,
          registration_type: 'ICEGATE Registration',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's IEC registrations (using email)
      let userIEC: any[] = []
      const { data: iecData, error: iecError } = await supabase
        .from('import_export_code')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      if (!iecError && iecData) {
        userIEC = iecData.map(p => ({
          ...p,
          registration_type: 'Import Export Code',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Combine all
      const allRegistrations = [
        ...userRegistrations, 
        ...userReturns, 
        ...userProprietorship,
        ...userPartnership,
        ...userOPC,
        ...userLLP,
        ...userPvtLtd,
        ...userSection8,
        ...userTrust,
        ...userPublicLimited,
        ...userIndianSubs,
        ...userProducerCompany,
        ...userStartupIndia,
        ...userTradeLicense,
        ...userFssai,
        ...userFssaiLicense,
        ...userHalal,
        ...userIcegate,
        ...userIEC
      ]
      console.log('Final combined registrations:', allRegistrations)
      setPayments(allRegistrations)

      setLoading(false)
    }

    fetchUser()
  }, [router])

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut()
      setUser(null)
      window.location.href = "/login"
    } catch (error) {
      window.location.href = "/login"
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F4F3EE] flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#C15F3C]"></div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F4F3EE] flex flex-col">
      <Navbar />
      <div className="flex-grow py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex items-center gap-2 text-sm text-[#6F6B63] hover:text-[#C15F3C] cursor-pointer mb-4 w-fit" onClick={() => router.push('/')}>
            <FiArrowLeft /> Back to Home
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-[#E5E2DA] overflow-hidden">
            <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] h-32 relative"></div>
            
            <div className="px-8 pb-8 relative">
              <div className="absolute -top-12 bg-white p-2 rounded-full border border-[#E5E2DA] shadow-sm">
                <div className="w-20 h-20 bg-[#Fdf1ec] text-[#C15F3C] rounded-full flex items-center justify-center text-3xl font-semibold">
                  {profile?.name?.charAt(0) || user?.email?.charAt(0) || <FiUser />}
                </div>
              </div>
              
              <div className="pt-14 mt-2">
                <h1 className="text-2xl font-bold text-[#2F2E2B]">
                  {profile?.name ? profile.name : 'My Profile'}
                </h1>
                <p className="text-[#6F6B63] flex items-center gap-2 mt-1">
                  <FiMail className="w-4 h-4" /> {user?.email || 'Email not available'}
                </p>
              </div>

              <div className="mt-8 border-t border-[#E5E2DA] pt-8">
                <h2 className="text-lg font-semibold text-[#2F2E2B] mb-4">Account Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#F4F3EE] p-4 rounded-xl border border-[#E5E2DA]">
                    <p className="text-xs text-[#B1ADA1] uppercase font-semibold mb-1">Account ID</p>
                    <p className="text-sm text-[#2F2E2B] font-mono">{user.id}</p>
                  </div>
                  
                  <div className="bg-[#F4F3EE] p-4 rounded-xl border border-[#E5E2DA]">
                    <p className="text-xs text-[#B1ADA1] uppercase font-semibold mb-1">Joined On</p>
                    <p className="text-sm text-[#2F2E2B]">
                      {new Date(user.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-[#E5E2DA] pt-8">
                <h2 className="text-lg font-semibold text-[#2F2E2B] mb-4">My Registrations & Payments</h2>
                
                {payments.length === 0 ? (
                  <div className="bg-[#F4F3EE] p-8 rounded-xl border border-[#E5E2DA] text-center">
                    <p className="text-[#6F6B63] mb-4">You have not completed any payments yet.</p>
                    <Link href="/" className="px-5 py-2.5 bg-white border border-[#E5E2DA] rounded-lg text-sm font-medium text-[#2F2E2B] hover:bg-[#F5F5F5] transition-colors">
                      Browse Services
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {payments.map((reg, idx) => (
                      <div key={idx} className="bg-white p-5 rounded-xl border border-[#E5E2DA] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h3 className="font-semibold text-[#2F2E2B]">{reg.registration_type || reg.form_type || 'Registration'}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`text-xs px-2 py-1 font-medium rounded-full ${reg.status === 'paid' ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'}`}>
                              {(reg.status || 'pending').toUpperCase()}
                            </span>
                            <span className="text-xs text-[#B1ADA1] font-mono">Reg ID: {reg.id?.slice(0, 8) || 'N/A'}</span>
                          </div>
                          {reg.created_at && (
                             <p className="text-xs text-[#6F6B63] mt-2">
                               Date: {new Date(reg.created_at).toLocaleDateString()}
                             </p>
                          )}
                          {reg.gstin && (
                            <p className="text-xs text-[#6F6B63] mt-1">GSTIN: {reg.gstin}</p>
                          )}
                          {reg.username && (
                            <p className="text-xs text-[#6F6B63] mt-1">Username: {reg.username}</p>
                          )}
                        </div>
                        <div className="text-left md:text-right">
                          {(reg.package || reg.amount) && (
                            <p className="text-lg font-semibold text-[#C15F3C]">
                              {reg.package ? reg.package.split('-').pop()?.trim() : `₹${reg.amount}`}
                            </p>
                          )}
                          {reg.state && (
                            <p className="text-xs text-[#B1ADA1] font-mono mt-1 w-full truncate md:w-auto">State: {reg.state}</p>
                          )}
                          {reg.category && (
                            <p className="text-xs text-[#B1ADA1] mt-1 font-mono">Business: {reg.category}</p>
                          )}
                          {reg.pan && (
                            <p className="text-xs text-[#B1ADA1] mt-1 font-mono">PAN: {reg.pan}</p>
                          )}
                          {reg.proposed_name1 && (
                            <div className="mt-1">
                              <p className="text-[10px] text-[#B1ADA1] uppercase font-bold tracking-wider">Proposed Names</p>
                              <p className="text-xs text-[#6F6B63]">1. {reg.proposed_name1}</p>
                              {reg.proposed_name2 && <p className="text-xs text-[#6F6B63]">2. {reg.proposed_name2}</p>}
                            </div>
                          )}
                          {/* FSSAI Specific Details */}
                          {reg.licence_type && (
                            <p className="text-xs text-[#B1ADA1] mt-1 font-mono">Type: {reg.licence_type}</p>
                          )}
                          {reg.bussiness_activity && (
                            <p className="text-xs text-[#B1ADA1] mt-1 font-mono">Activity: {reg.bussiness_activity}</p>
                          )}
                          {reg.year && (
                            <p className="text-xs text-[#B1ADA1] mt-1 font-mono">Validity: {reg.year}</p>
                          )}
                          {reg.pan_gstin && (
                             <p className="text-xs text-[#B1ADA1] mt-1 font-mono">PAN/GST: {reg.pan_gstin}</p>
                          )}
                          {reg.variant && (
                             <p className="text-xs text-[#B1ADA1] mt-1 font-mono">Variant: {reg.variant}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-10 pt-6 border-t border-[#E5E2DA] flex justify-end">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 font-medium transition-all"
                >
                  <FiLogOut /> Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
