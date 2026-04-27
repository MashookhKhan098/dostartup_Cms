'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FiUser, FiMail, FiLogOut, FiArrowLeft, FiPhone } from 'react-icons/fi'

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [payments, setPayments] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchUser = async () => {
      let user: any = null;
      try {
        const { data } = await supabase.auth.getUser();
        user = data.user;
      } catch {
        // Lock contention — fall back to cached session
        const { data: sessionData } = await supabase.auth.getSession();
        user = sessionData.session?.user ?? null;
      }

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

      // Fetch user's LEI Code registrations (using email)
      let userLEI: any[] = []
      const { data: leiData, error: leiError } = await supabase
        .from('legal_entity_identifier_code')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      if (!leiError && leiData) {
        userLEI = leiData.map(p => ({
          ...p,
          registration_type: 'LEI Code Registration',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's ISO registrations (using email)
      let userISO: any[] = []
      const { data: isoData, error: isoError } = await supabase
        .from('iso_registration')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      if (!isoError && isoData) {
        userISO = isoData.map(p => ({
          ...p,
          registration_type: 'ISO Registration',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's PF registrations (using email)
      let userPF: any[] = []
      const { data: pfData, error: pfError } = await supabase
        .from('pf_registration')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      if (!pfError && pfData) {
        userPF = pfData.map(p => ({
          ...p,
          registration_type: 'PF Registration',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's ESI registrations (using email)
      let userESI: any[] = []
      const { data: esiData, error: esiError } = await supabase
        .from('esi_registration')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      if (!esiError && esiData) {
        userESI = esiData.map(p => ({
          ...p,
          registration_type: 'ESI Registration',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Professional Tax registrations (using email)
      let userProfTax: any[] = []
      const { data: profTaxData, error: profTaxError } = await supabase
        .from('professional_tax_registration')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      if (!profTaxError && profTaxData) {
        userProfTax = profTaxData.map(p => ({
          ...p,
          state: p.state_region,
          pan_gstin: p.cin_gstin,
          registration_type: 'Professional Tax Registration',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's RCMC registrations (using email)
      let userRCMC: any[] = []
      const { data: rcmcData, error: rcmcError } = await supabase
        .from('rcmc_registration')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      if (!rcmcError && rcmcData) {
        userRCMC = rcmcData.map(p => ({
          ...p,
          state: p.state_region,
          pan_gstin: p.cin_gstin,
          registration_type: 'RCMC Registration',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's RERA registrations (using email)
      let userRERA: any[] = []
      const { data: reraData, error: reraError } = await supabase
        .from('tn_rera_registration')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      if (!reraError && reraData) {
        userRERA = reraData.map(p => ({
          ...p,
          state: p.state_region,
          pan_gstin: p.pan_gstin,
          registration_type: 'RERA Agent Registration',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's 12A registrations (using email)
      let userA12: any[] = []
      const { data: a12Data, error: a12Error } = await supabase
        .from('a12_registration')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      if (!a12Error && a12Data) {
        userA12 = a12Data.map(p => ({
          ...p,
          registration_type: '12A Registration',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's 80G registrations (using email)
      let userA80G: any[] = []
      const { data: a80gData, error: a80gError } = await supabase
        .from('registration_80g')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      if (!a80gError && a80gData) {
        userA80G = a80gData.map(p => ({
          ...p,
          registration_type: '80G Registration',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's 12A & 80G registrations (using email)
      let userA1280G: any[] = []
      const { data: a1280gData, error: a1280gError } = await supabase
        .from('a12_80g_registration')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      if (!a1280gError && a1280gData) {
        userA1280G = a1280gData.map(p => ({
          ...p,
          state: p.state,
          pan_gstin: p.pan_gstin,
          registration_type: '12A & 80G Registration',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Barcode registrations (using email)
      let userBarcode: any[] = []
      const { data: barcodeData, error: barcodeError } = await supabase
        .from('barcode_registration')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      if (!barcodeError && barcodeData) {
        userBarcode = barcodeData.map(p => ({
          ...p,
          registration_type: 'Barcode Registration',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Darpan registrations (using email)
      let userDarpan: any[] = []
      const { data: darpanData, error: darpanError } = await supabase
        .from('darpan_registration')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      if (!darpanError && darpanData) {
        userDarpan = darpanData.map(p => ({
          ...p,
          registration_type: 'NGO Darpan Registration',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Shop & Establishment Act registrations (using email)
      let userShopEstablishment: any[] = []
      const { data: shopEstablishmentData, error: shopEstablishmentError } = await supabase
        .from('shop_establishment_act_registration')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      if (!shopEstablishmentError && shopEstablishmentData) {
        userShopEstablishment = shopEstablishmentData.map(p => ({
          ...p,
          registration_type: 'Shop & Establishment Act Registration',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's FCRA registrations (using email)
      let userFcra: any[] = []
      const { data: fcraData, error: fcraError } = await supabase
        .from('fcra_registration')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      if (!fcraError && fcraData) {
        userFcra = fcraData.map(p => ({
          ...p,
          registration_type: 'FCRA Registration',
          id: p.id,
          created_at: p.created_at,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's BIS Certification registrations (using email)
      let userBis: any[] = []
      const { data: bisData, error: bisError } = await supabase
        .from('bis_registration')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      if (!bisError && bisData) {
        userBis = bisData.map(p => ({
          ...p,
          registration_type: 'BIS Certification',
          id: p.id,
          created_at: p.created_at,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Udyam registrations (using email)
      let userUdyam: any[] = []
      const { data: udyamData, error: udyamError } = await supabase
        .from('udyam_registration')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      if (!udyamError && udyamData) {
        userUdyam = udyamData.map(p => ({
          ...p,
          registration_type: 'Udyam Registration',
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Drug License registrations (using email)
      let userDrugLicense: any[] = []
      const { data: drugData, error: drugError } = await supabase
        .from('drug_license')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      if (!drugError && drugData) {
        userDrugLicense = drugData.map(p => ({
          ...p,
          registration_type: 'Drug License',
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Digital Signature registrations (using email)
      let userDigitalSignature: any[] = []
      const { data: dsData, error: dsError } = await supabase
        .from('digital_signature')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      if (!dsError && dsData) {
        userDigitalSignature = dsData.map(p => ({
          ...p,
          registration_type: 'Digital Signature Certificate',
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's APEDA registrations (using email)
      let userApeda: any[] = []
      const { data: apedaData, error: apedaError } = await supabase
        .from('apeda_registration')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      if (!apedaError && apedaData) {
        userApeda = apedaData.map(p => ({
          ...p,
          registration_type: 'APEDA Registration',
          id: p.id,
          created_at: p.created_at,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Trademark registrations (using email)
      let userTrademark: any[] = []
      const { data: trademarkData, error: trademarkError } = await supabase
        .from('trademark_registration')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      if (!trademarkError && trademarkData) {
        userTrademark = trademarkData.map(p => ({
          ...p,
          registration_type: 'Trademark Registration',
          id: p.id,
          created_at: p.created_at,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Trademark Objection registrations (using email)
      let userTMObjection: any[] = []
      const { data: tmObjectionData, error: tmObjectionError } = await supabase
        .from('trademar_objection')
        .select('*')
        .eq('email', user.email)

      if (!tmObjectionError && tmObjectionData) {
        userTMObjection = tmObjectionData.map(p => ({
          ...p,
          registration_type: 'Trademark Objection Reply',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Fire License registrations (using email)
      let userFireLicense: any[] = []
      const { data: fireLicenseData, error: fireLicenseError } = await supabase
        .from('fire_license')
        .select('*')
        .eq('email', user.email)

      if (!fireLicenseError && fireLicenseData) {
        userFireLicense = fireLicenseData.map(p => ({
          ...p,
          registration_type: 'Fire License',
          id: p.id,
          created_at: p.created_at,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Incumbency Certificate registrations (using email)
      let userIncumbency: any[] = []
      const { data: incumbencyData, error: incumbencyError } = await supabase
        .from('incumbency_certificate')
        .select('*')
        .eq('email', user.email)

      if (!incumbencyError && incumbencyData) {
        userIncumbency = incumbencyData.map(p => ({
          ...p,
          registration_type: 'Certificate of Incumbency',
          id: p.id,
          created_at: p.created_at,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Trademark Certificate registrations (using email)
      let userTMCertificate: any[] = []
      const { data: tmCertData, error: tmCertError } = await supabase
        .from('trademark_certificate')
        .select('*')
        .eq('email', user.email)

      if (!tmCertError && tmCertData) {
        userTMCertificate = tmCertData.map(p => ({
          ...p,
          registration_type: 'Trademark Registration Certificate',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Trademark Opposition registrations (using email)
      let userTMOpposition: any[] = []
      const { data: tmOppData, error: tmOppError } = await supabase
        .from('trademark_opposition')
        .select('*')
        .eq('email', user.email)

      if (!tmOppError && tmOppData) {
        userTMOpposition = tmOppData.map(p => ({
          ...p,
          registration_type: 'Trademark Opposition Filing',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Trademark Hearing registrations (using email)
      let userTMHearing: any[] = []
      const { data: tmHearingData, error: tmHearingError } = await supabase
        .from('trademark_hearing')
        .select('*')
        .eq('email', user.email)

      if (!tmHearingError && tmHearingData) {
        userTMHearing = tmHearingData.map(p => ({
          ...p,
          registration_type: 'Trademark Hearing Representation',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Trademark Rectification registrations (using email)
      let userTMRectification: any[] = []
      const { data: tmRectData, error: tmRectError } = await supabase
        .from('trademark_rectification')
        .select('*')
        .eq('email', user.email)

      if (!tmRectError && tmRectData) {
        userTMRectification = tmRectData.map(p => ({
          ...p,
          registration_type: 'Trademark Rectification',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's TM Infringement Notice registrations (using email)
      let userTMInfringement: any[] = []
      const { data: tmInfData, error: tmInfError } = await supabase
        .from('trademark_infringement_notice')
        .select('*')
        .eq('email', user.email)

      if (!tmInfError && tmInfData) {
        userTMInfringement = tmInfData.map(p => ({
          ...p,
          registration_type: 'Trademark Infringement Notice',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Trademark Renewal registrations (using email)
      let userTMRenewal: any[] = []
      const { data: tmRenData, error: tmRenError } = await supabase
        .from('trademark_renewal')
        .select('*')
        .eq('email', user.email)

      if (!tmRenError && tmRenData) {
        userTMRenewal = tmRenData.map(p => ({
          ...p,
          registration_type: 'Trademark Renewal',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Trademark Transfer registrations (using email)
      let userTMTransfer: any[] = []
      const { data: tmTransData, error: tmTransError } = await supabase
        .from('trademark_transfer')
        .select('*')
        .eq('email', user.email)

      if (!tmTransError && tmTransData) {
        userTMTransfer = tmTransData.map(p => ({
          ...p,
          registration_type: 'Trademark Transfer',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Expedited TM registrations (using email)
      let userTMExpedited: any[] = []
      const { data: tmExpData, error: tmExpError } = await supabase
        .from('expedited_trademark_registration')
        .select('*')
        .eq('email', user.email)

      if (!tmExpError && tmExpData) {
        userTMExpedited = tmExpData.map(p => ({
          ...p,
          registration_type: 'Expedited Trademark Registration',
          id: p.id,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Logo Design orders (using email - requires email column)
      let userLogoDesign: any[] = []
      const { data: logoData, error: logoError } = await supabase
        .from('logo_design')
        .select('*')
        .eq('email', user.email)

      if (!logoError && logoData) {
        userLogoDesign = logoData.map(p => ({
          ...p,
          registration_type: 'Logo Design',
          package: p.package_name || 'Standard Plan',
          amount: p.amount,
          id: p.id,
          created_at: p.created_at,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Design Registration orders
      let userDesignRegistration: any[] = []
      const { data: designData, error: designError } = await supabase
        .from('design_registration')
        .select('*')
        .eq('email', user.email)

      if (!designError && designData) {
        userDesignRegistration = designData.map(p => ({
          ...p,
          registration_type: 'Design Registration',
          package: p.design_service_type,
          amount: p.amount,
          id: p.id,
          created_at: p.created_at,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Design Objection orders
      let userDesignObjection: any[] = []
      const { data: objectionData, error: objectionError } = await supabase
        .from('design_objection')
        .select('*')
        .eq('email', user.email)

      if (!objectionError && objectionData) {
        userDesignObjection = objectionData.map(p => ({
          ...p,
          registration_type: 'Design Objection Reply',
          package: 'Objection Reply',
          amount: p.amount,
          id: p.id,
          created_at: p.created_at,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Copyright Registration orders
      let userCopyrightRegistration: any[] = []
      const { data: copyrightData, error: copyrightError } = await supabase
        .from('copyright_registration')
        .select('*')
        .eq('email', user.email)

      if (!copyrightError && copyrightData) {
        userCopyrightRegistration = copyrightData.map(p => ({
          ...p,
          registration_type: 'Copyright Registration',
          package: p.copyright_filing_type,
          brand_name: p.title_of_work,
          amount: p.amount,
          id: p.id,
          created_at: p.created_at,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Copyright Objection orders
      let userCopyrightObjection: any[] = []
      const { data: copyObjData, error: copyObjError } = await supabase
        .from('copyright_objection')
        .select('*')
        .eq('email', user.email)

      if (!copyObjError && copyObjData) {
        userCopyrightObjection = copyObjData.map(p => ({
          ...p,
          registration_type: 'Copyright Objection Reply',
          package: p.copyright_objection_type,
          brand_name: `CC: ${p.cc_number}`,
          amount: p.amount,
          id: p.id,
          created_at: p.created_at,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Patent orders
      let userPatentRegistration: any[] = []
      const { data: patentData, error: patentError } = await supabase
        .from('patent_registration')
        .select('*')
        .eq('email', user.email)

      console.log('Patent Query - Data:', patentData, 'Error:', patentError)
      if (!patentError && patentData) {
        userPatentRegistration = patentData.map(p => ({
          ...p,
          registration_type: 'Patent Registration',
          package: p.patent_search_type,
          brand_name: p.invention,
          amount: p.amount,
          id: p.id,
          created_at: p.created_at,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's TM Protection orders
      let userTMProtection: any[] = []
      const { data: tmProtData, error: tmProtError } = await supabase
        .from('trademark_protection')
        .select('*')
        .eq('email', user.email)

      console.log('TM Protection Query - Data:', tmProtData, 'Error:', tmProtError)
      if (!tmProtError && tmProtData) {
        userTMProtection = tmProtData.map(p => ({
          ...p,
          registration_type: 'Trademark Protection',
          package: p.service_type,
          brand_name: p.brand_name,
          amount: p.amount,
          id: p.id,
          created_at: p.created_at,
          status: p.payment_state || 'paid'
        }))
      }

      // Fetch user's Income Tax E-Filing records (using email)
      let userIncomeTaxFiling: any[] = []
      const { data: itfData, error: itfError } = await supabase
        .from('income_tax_filing')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      console.log('Income Tax Filing Query - Data:', itfData, 'Error:', itfError)

      if (!itfError && itfData) {
        userIncomeTaxFiling = itfData.map(p => ({
          ...p,
          registration_type: 'Income Tax E-Filing',
          brand_name: `PAN: ${p.pan}`,
          package: p.state_ut,
          amount: p.amount,
          id: p.id,
          created_at: p.created_at,
          status: p.payment_state || 'paid'
        }))
      } else if (itfError) {
        console.error('Income Tax Filing fetch error:', itfError.message, itfError.code)
        // Fallback: try without ordering in case created_at column is missing
        const { data: itfFallback } = await supabase
          .from('income_tax_filing')
          .select('*')
          .eq('email', user.email)
        if (itfFallback) {
          userIncomeTaxFiling = itfFallback.map(p => ({
            ...p,
            registration_type: 'Income Tax E-Filing',
            brand_name: `PAN: ${p.pan}`,
            package: p.state_ut,
            amount: p.amount,
            id: p.id,
            created_at: p.created_at,
            status: p.payment_state || 'paid'
          }))
        }
      }

      // Fetch user's Business Tax Filing records (using email)
      let userBusinessTaxFiling: any[] = []
      const { data: btfData, error: btfError } = await supabase
        .from('bussiness_tax_filing')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      console.log('Business Tax Filing Query - Data:', btfData, 'Error:', btfError)

      if (!btfError && btfData) {
        userBusinessTaxFiling = btfData.map(p => ({
          ...p,
          registration_type: 'Business Tax Filing',
          brand_name: `GSTIN: ${p.gstin}`,
          package: p.package || 'Business ITR',
          amount: p.amount,
          id: p.id,
          created_at: p.created_at,
          status: p.payment_state || 'paid'
        }))
      } else if (btfError) {
        console.error('Business Tax Filing fetch error:', btfError.message, btfError.code)
        // Fallback: try without ordering in case created_at column is missing
        const { data: btfFallback } = await supabase
          .from('bussiness_tax_filing')
          .select('*')
          .eq('email', user.email)
        if (btfFallback) {
          userBusinessTaxFiling = btfFallback.map(p => ({
            ...p,
            registration_type: 'Business Tax Filing',
            brand_name: `GSTIN: ${p.gstin}`,
            package: p.package || 'Business ITR',
            amount: p.amount,
            id: p.id,
            created_at: p.created_at,
            status: p.payment_state || 'paid'
          }))
        }
      }

      // Fetch user's ITR-1 Return Filing records (using email)
      let userITR1Return: any[] = []
      const { data: itr1Data, error: itr1Error } = await supabase
        .from('itr1_return')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      console.log('ITR-1 Return Query - Data:', itr1Data, 'Error:', itr1Error)

      if (!itr1Error && itr1Data) {
        userITR1Return = itr1Data.map(p => ({
          ...p,
          registration_type: 'ITR-1 Return Filing',
          package: 'Salaried ITR',
          amount: p.amount,
          created_at: p.created_at,
          status: p.payment_state || 'paid'
        }))
      } else if (itr1Error) {
        console.error('ITR-1 Return fetch error:', itr1Error.message, itr1Error.code)
        const { data: itr1Fallback } = await supabase
          .from('itr1_return')
          .select('*')
          .eq('email', user.email)
        if (itr1Fallback) {
          userITR1Return = itr1Fallback.map(p => ({
            ...p,
            registration_type: 'ITR-1 Return Filing',
            package: 'Salaried ITR',
            amount: p.amount,
            created_at: p.created_at,
            status: p.payment_state || 'paid'
          }))
        }
      }

      // Fetch user's ITR-2 Return Filing records (using email)
      let userITR2Return: any[] = []
      const { data: itr2Data, error: itr2Error } = await supabase
        .from('itr2_return')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      console.log('ITR-2 Return Query - Data:', itr2Data, 'Error:', itr2Error)

      if (!itr2Error && itr2Data) {
        userITR2Return = itr2Data.map(p => ({
          ...p,
          registration_type: 'ITR-2 Return Filing',
          package: 'Capital Gains ITR',
          amount: p.amount,
          created_at: p.created_at,
          status: p.payment_state || 'paid'
        }))
      } else if (itr2Error) {
        console.error('ITR-2 Return fetch error:', itr2Error.message, itr2Error.code)
        const { data: itr2Fallback } = await supabase
          .from('itr2_return')
          .select('*')
          .eq('email', user.email)
        if (itr2Fallback) {
          userITR2Return = itr2Fallback.map(p => ({
            ...p,
            registration_type: 'ITR-2 Return Filing',
            package: 'Capital Gains ITR',
            amount: p.amount,
            created_at: p.created_at,
            status: p.payment_state || 'paid'
          }))
        }
      }

      // Fetch user's ITR-3 Return Filing records (using email)
      let userITR3Return: any[] = []
      const { data: itr3Data, error: itr3Error } = await supabase
        .from('itr3_return')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      console.log('ITR-3 Return Query - Data:', itr3Data, 'Error:', itr3Error)

      if (!itr3Error && itr3Data) {
        userITR3Return = itr3Data.map(p => ({
          ...p,
          registration_type: 'ITR-3 Return Filing',
          package: 'Business ITR',
          amount: p.amount,
          created_at: p.created_at,
          status: p.payment_state || 'paid'
        }))
      } else if (itr3Error) {
        console.error('ITR-3 Return fetch error:', itr3Error.message, itr3Error.code)
        const { data: itr3Fallback } = await supabase
          .from('itr3_return')
          .select('*')
          .eq('email', user.email)
        if (itr3Fallback) {
          userITR3Return = itr3Fallback.map(p => ({
            ...p,
            registration_type: 'ITR-3 Return Filing',
            package: 'Business ITR',
            amount: p.amount,
            created_at: p.created_at,
            status: p.payment_state || 'paid'
          }))
        }
      }

      // Fetch user's ITR-4 Return Filing records (using email)
      let userITR4Return: any[] = []
      const { data: itr4Data, error: itr4Error } = await supabase
        .from('itr4_return')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      console.log('ITR-4 Return Query - Data:', itr4Data, 'Error:', itr4Error)

      if (!itr4Error && itr4Data) {
        userITR4Return = itr4Data.map(p => ({
          ...p,
          registration_type: 'ITR-4 Return Filing',
          package: 'Presumptive ITR',
          amount: p.amount,
          created_at: p.created_at,
          status: p.payment_state || 'paid'
        }))
      } else if (itr4Error) {
        console.error('ITR-4 Return fetch error:', itr4Error.message, itr4Error.code)
        const { data: itr4Fallback } = await supabase
          .from('itr4_return')
          .select('*')
          .eq('email', user.email)
        if (itr4Fallback) {
          userITR4Return = itr4Fallback.map(p => ({
            ...p,
            registration_type: 'ITR-4 Return Filing',
            package: 'Presumptive ITR',
            amount: p.amount,
            created_at: p.created_at,
            status: p.payment_state || 'paid'
          }))
        }
      }

      // Fetch user's ITR-5 Return Filing records
      let userITR5Return: any[] = []
      const { data: itr5Data, error: itr5Error } = await supabase
        .from('itr5_return')
        .select('*')
        .or(`user_id.eq.${user.id},email.eq.${user.email}`)
        .order('created_at', { ascending: false })

      if (!itr5Error && itr5Data) {
        userITR5Return = itr5Data.map(p => ({
          ...p,
          registration_type: 'ITR-5 Return Filing',
          package: 'Firm/LLP ITR',
          amount: p.amount,
          created_at: p.created_at,
          status: p.payment_state || 'paid'
        }))
      } else {
        // Fallback for missing user_id or created_at
        const { data: itr5Fallback } = await supabase.from('itr5_return').select('*').eq('email', user.email)
        if (itr5Fallback) {
          userITR5Return = itr5Fallback.map(p => ({
            ...p,
            registration_type: 'ITR-5 Return Filing',
            package: 'Firm/LLP ITR',
            amount: p.amount,
            created_at: p.created_at,
            status: p.payment_state || 'paid'
          }))
        }
      }

      // Fetch user's ITR-6 Return Filing records (using email)
      let userITR6Return: any[] = []
      const { data: itr6Data, error: itr6Error } = await supabase
        .from('itr6_return')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      if (!itr6Error && itr6Data) {
        userITR6Return = itr6Data.map(p => ({
          ...p,
          registration_type: 'ITR-6 Return Filing',
          package: 'Corporate ITR',
          amount: p.amount,
          created_at: p.created_at,
          status: p.payment_state || 'paid'
        }))
      } else if (itr6Error) {
        const { data: itr6Fallback } = await supabase.from('itr6_return').select('*').eq('email', user.email)
        if (itr6Fallback) {
          userITR6Return = itr6Fallback.map(p => ({
            ...p,
            registration_type: 'ITR-6 Return Filing',
            package: 'Corporate ITR',
            amount: p.amount,
            created_at: p.created_at,
            status: p.payment_state || 'paid'
          }))
        }
      }

      // Fetch user's ITR-7 Return Filing records (using email)
      let userITR7Return: any[] = []
      const { data: itr7Data, error: itr7Error } = await supabase
        .from('itr7_return')
        .select('*')
        .eq('email', user.email)
        .order('created_at', { ascending: false })

      if (!itr7Error && itr7Data) {
        userITR7Return = itr7Data.map(p => ({
          ...p,
          registration_type: 'ITR-7 Return Filing',
          package: 'Trust/NGO ITR',
          amount: p.amount,
          created_at: p.created_at,
          status: p.payment_state || 'paid'
        }))
      } else if (itr7Error) {
        const { data: itr7Fallback } = await supabase.from('itr7_return').select('*').eq('email', user.email)
        if (itr7Fallback) {
          userITR7Return = itr7Fallback.map(p => ({
            ...p,
            registration_type: 'ITR-7 Return Filing',
            package: 'Trust/NGO ITR',
            amount: p.amount,
            created_at: p.created_at,
            status: p.payment_state || 'paid'
          }))
        }
      }

      // Fetch user's 15CA-15CB Filing records
      let user15CA15CB: any[] = []
      const { data: ca15Data, error: ca15Error } = await supabase
        .from('ca15_cb15_filing')
        .select('*')
        .or(`user_id.eq.${user.id},email.eq.${user.email}`)
        .order('created_at', { ascending: false })

      if (!ca15Error && ca15Data) {
        user15CA15CB = ca15Data.map(p => ({
          ...p,
          registration_type: '15CA-15CB Filing',
          package: 'Foreign Remittance',
          amount: p.amount,
          created_at: p.created_at,
          status: p.payment_state || 'paid'
        }))
      } else {
        const { data: ca15Fallback } = await supabase.from('ca15_cb15_filing').select('*').eq('email', user.email)
        if (ca15Fallback) {
          user15CA15CB = ca15Fallback.map(p => ({
            ...p,
            registration_type: '15CA-15CB Filing',
            package: 'Foreign Remittance',
            amount: p.amount,
            created_at: p.created_at,
            status: p.payment_state || 'paid'
          }))
        }
      }

      // Fetch user's TAN Registration records
      let userTAN: any[] = []
      const { data: tanData, error: tanError } = await supabase
        .from('tan_registration')
        .select('*')
        .or(`user_id.eq.${user.id},email.eq.${user.email}`)
        .order('created_at', { ascending: false })

      if (!tanError && tanData) {
        userTAN = tanData.map(p => ({
          ...p,
          registration_type: 'TAN Registration',
          package: p.package || 'TAN Allocation',
          amount: p.amount,
          created_at: p.created_at,
          status: p.payment_state || 'paid'
        }))
      } else {
        const { data: tanFallback } = await supabase.from('tan_registration').select('*').eq('email', user.email)
        if (tanFallback) {
          userTAN = tanFallback.map(p => ({
            ...p,
            registration_type: 'TAN Registration',
            package: p.package || 'TAN Allocation',
            amount: p.amount,
            created_at: p.created_at,
            status: p.payment_state || 'paid'
          }))
        }
      }

      // Fetch user's TDS Return Filing records
      let userTDSReturn: any[] = []
      const { data: tdsData, error: tdsError } = await supabase
        .from('tds_return_filing')
        .select('*')
        .or(`user_id.eq.${user.id},email.eq.${user.email}`)
        .order('created_at', { ascending: false })

      if (!tdsError && tdsData) {
        userTDSReturn = tdsData.map(p => ({
          ...p,
          registration_type: 'TDS Return Filing',
          package: p.package || 'Quarterly TDS Filing',
          amount: p.amount,
          created_at: p.created_at,
          status: p.payment_state || 'paid'
        }))
      } else {
        const { data: tdsFallback } = await supabase.from('tds_return_filing').select('*').eq('email', user.email)
        if (tdsFallback) {
          userTDSReturn = tdsFallback.map(p => ({
            ...p,
            registration_type: 'TDS Return Filing',
            package: p.package || 'Quarterly TDS Filing',
            amount: p.amount,
            created_at: p.created_at,
            status: p.payment_state || 'paid'
          }))
        }
      }

      // Fetch user's Income Tax Notice Response records
      let userITNotice: any[] = []
      const { data: itnData, error: itnError } = await supabase
        .from('income_tax_notic')
        .select('*')
        .or(`user_id.eq.${user.id},email.eq.${user.email}`)
        .order('created_at', { ascending: false })

      if (!itnError && itnData) {
        userITNotice = itnData.map(p => ({
          ...p,
          registration_type: 'Income Tax Notice Response',
          package: p.package || 'Notice Review',
          amount: p.amount,
          created_at: p.created_at,
          status: p.payment_state || 'paid',
          notice_file: p.Notice_file
        }))
      } else {
        const { data: itnFallback } = await supabase.from('income_tax_notic').select('*').eq('email', user.email)
        if (itnFallback) {
          userITNotice = itnFallback.map(p => ({
            ...p,
            registration_type: 'Income Tax Notice Response',
            package: p.package || 'Notice Review',
            amount: p.amount,
            created_at: p.created_at,
            status: p.payment_state || 'paid',
            notice_file: p.Notice_file
          }))
        }
      }

      // Combine all available registrations
      const allRegistrations = [
        ...(userRegistrations || []), 
        ...(userReturns || []), 
        ...(userProprietorship || []),
        ...(userPartnership || []),
        ...(userOPC || []),
        ...(userLLP || []),
        ...(userPvtLtd || []),
        ...(userSection8 || []),
        ...(userTrust || []),
        ...(userPublicLimited || []),
        ...(userIndianSubs || []),
        ...(userProducerCompany || []),
        ...(userStartupIndia || []),
        ...(userTradeLicense || []),
        ...(userFssai || []),
        ...(userFssaiLicense || []),
        ...(userHalal || []),
        ...(userIcegate || []),
        ...(userIEC || []),
        ...(userLEI || []),
        ...(userISO || []),
        ...(userPF || []),
        ...(userESI || []),
        ...(userProfTax || []),
        ...(userRCMC || []),
        ...(userRERA || []),
        ...(userA12 || []),
        ...(userA80G || []),
        ...(userA1280G || []),
        ...(userBarcode || []),
        ...(userDarpan || []),
        ...(userShopEstablishment || []),
        ...(userApeda || []),
        ...(userTrademark || []),
        ...(userFireLicense || []),
        ...(userIncumbency || []),
        ...(userDrugLicense || []),
        ...(userUdyam || []),
        ...(userBis || []),
        ...(userFcra || []),
        ...(userDigitalSignature || []),
        ...(userTMObjection || []),
        ...(userTMCertificate || []),
        ...(userTMOpposition || []),
        ...(userTMHearing || []),
        ...(userTMRectification || []),
        ...(userTMInfringement || []),
        ...(userTMRenewal || []),
        ...(userTMTransfer || []),
        ...(userTMExpedited || []),
        ...(userLogoDesign || []),
        ...(userDesignRegistration || []),
        ...(userDesignObjection || []),
        ...(userCopyrightRegistration || []),
        ...(userCopyrightObjection || []),
        ...(userPatentRegistration || []),
        ...(userTMProtection || []),
        ...(userIncomeTaxFiling || []),
        ...(userBusinessTaxFiling || []),
        ...(userITR1Return || []),
        ...(userITR2Return || []),
        ...(userITR3Return || []),
        ...(userITR4Return || []),
        ...(userITR5Return || []),
        ...(userITR6Return || []),
        ...(userITR7Return || []),
        ...(user15CA15CB || []),
        ...(userTAN || []),
        ...(userTDSReturn || []),
        ...(userITNotice || [])
      ].filter(Boolean); // Remove any null/undefined entries

      console.log('Total registrations found:', allRegistrations.length)
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
                {profile?.phone && (
                  <p className="text-[#6F6B63] flex items-center gap-2 mt-1">
                    <FiPhone className="w-4 h-4" /> {profile.phone}
                  </p>
                )}
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
                            <span className="text-xs text-[#B1ADA1] font-mono">Reg ID: {String(reg.id || '').slice(0, 8) || 'N/A'}</span>
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
                          <div className="flex flex-col items-start md:items-end">
                            {reg.package && (
                              <p className="text-sm font-semibold text-[#6F6B63] mb-1">
                                {reg.package.includes('–') ? reg.package.split('–')[0].trim() : reg.package.split('-')[0].trim()}
                              </p>
                            )}
                            {reg.amount && (
                              <p className="text-lg font-bold text-[#C15F3C]">
                                ₹{Number(reg.amount).toLocaleString('en-IN')}
                              </p>
                            )}
                          </div>
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
                          {reg.brand_name && (
                             <p className="text-xs text-[#B1ADA1] mt-1 font-mono">Brand: {reg.brand_name}</p>
                          )}
                          {reg.application_number && (
                             <p className="text-xs text-[#B1ADA1] mt-1 font-mono">App No: {reg.application_number}</p>
                          )}
                          {reg.class && (
                             <p className="text-xs text-[#B1ADA1] mt-1 font-mono">Class: {reg.class}</p>
                          )}
                          {reg.cin_gstin && (
                             <p className="text-xs text-[#B1ADA1] mt-1 font-mono">CIN/GSTIN: {reg.cin_gstin}</p>
                          )}
                          {reg.employee_count && (
                             <p className="text-xs text-[#B1ADA1] mt-1 font-mono">Employees: {reg.employee_count}</p>
                          )}
                          {reg.state_region && (
                             <p className="text-xs text-[#B1ADA1] mt-1 font-mono">Region: {reg.state_region}</p>
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
