'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'

const DOCUMENTS = [
  {
    key: 'aadhaar_card',
    label: 'Aadhaar Card',
    description: 'Front and back of Aadhaar card',
    required: true,
    icon: '🪪'
  },
  {
    key: 'pan_card',
    label: 'PAN Card',
    description: 'Clear copy of PAN card',
    required: true,
    icon: '💳'
  },
  {
    key: 'electricity_bill',
    label: 'Electricity Bill',
    description: 'Recent electricity bill (not older than 3 months)',
    required: true,
    icon: '⚡'
  },
  {
    key: 'rent_agreement',
    label: 'Rent Agreement',
    description: 'Registered rent agreement (if rented premises)',
    required: false,
    icon: '📄'
  },
  {
    key: 'logo',
    label: 'Business Logo',
    description: 'Company logo in PNG or JPG format',
    required: false,
    icon: '🏢'
  },
  {
    key: 'power_of_attorney',
    label: 'Power of Attorney',
    description: 'If applying on behalf of someone',
    required: false,
    icon: '📜'
  },
]

function DocumentsContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const registrationId = searchParams.get('id')
  const packageName = searchParams.get('package') || 'Basic Package - ₹999'

  const [files, setFiles] = useState<Record<string, File | null>>({})
  const [previews, setPreviews] = useState<Record<string, string>>({})
  const [uploading, setUploading] = useState(false)
  const [done, setDone] = useState(false)
  const [isLoadingAuth, setIsLoadingAuth] = useState(true)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
      setIsLoadingAuth(false)
    }).catch(err => {
      console.warn("Document page auth check inner error:", err);
      setIsLoadingAuth(false);
    });
  }, [])

  const handleFileChange = (key: string, file: File | null) => {
    if (!file) return
    setFiles(prev => ({ ...prev, [key]: file }))
    // Show preview
    const reader = new FileReader()
    reader.onload = (e) => {
      setPreviews(prev => ({ ...prev, [key]: e.target?.result as string }))
    }
    reader.readAsDataURL(file)
  }

  const handleSubmit = async () => {
    setUploading(true)

    // Check if required docs are present in state
    const missingRequired = DOCUMENTS
      .filter(d => d.required)
      .filter(d => !files[d.key]);

    if (missingRequired.length > 0) {
      const names = missingRequired.map(d => d.label).join(', ');
      alert(`Please upload the following required documents before proceeding:\n\n${names}`);
      setUploading(false);
      return;
    }

    const uploadedUrls: Record<string, string> = {}

    const uploadPromises = Object.entries(files).map(async ([key, file]) => {
      if (!file) return null;
      const fileExt = file.name.split('.').pop();
      const fileName = `${registrationId}/${key}-${Date.now()}.${fileExt}`;
      const { data, error } = await supabase.storage.from('documents').upload(fileName, file, { upsert: true });
      if (error) {
        console.error(`Error uploading ${key}:`, error.message);
        return { error: error.message, key };
      }
      const { data: urlData } = supabase.storage.from('documents').getPublicUrl(fileName);
      return { key, url: urlData.publicUrl };
    });

    const uploadResults = await Promise.all(uploadPromises);

    for (const res of uploadResults) {
      if (!res) continue;
      if (res.error) {
        alert(`Failed to upload ${res.key}: ${res.error}`);
        setUploading(false);
        return;
      }
      if (res.url) {
        uploadedUrls[res.key] = res.url;
      }
    }

    // Check if required docs are uploaded
    const uploadedKeys = Object.keys(uploadedUrls)
    const allRequired = DOCUMENTS
      .filter(d => d.required)
      .every(d => uploadedKeys.includes(d.key))

    // Save to documents table
    const { error: dbError } = await supabase
      .from('documents')
      .insert([{
        registration_id: registrationId,
        aadhaar_card: uploadedUrls['aadhaar_card'] || null,
        pan_card: uploadedUrls['pan_card'] || null,
        electricity_bill: uploadedUrls['electricity_bill'] || null,
        rent_agreement: uploadedUrls['rent_agreement'] || null,
        logo: uploadedUrls['logo'] || null,
        power_of_attorney: uploadedUrls['power_of_attorney'] || null,
        upload_status: allRequired ? 'completed' : 'partial',
      }])

    if (dbError) {
      console.error('DB error:', dbError.message)
      alert('Error saving documents: ' + dbError.message)
      setUploading(false)
      return
    }

    setDone(true)
    setUploading(false)
  }

  if (isLoadingAuth) {
    return (
      <div className="min-h-screen bg-[#F4F3EE] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#C15F3C]"></div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#F4F3EE] flex items-center justify-center">
        <div className="bg-[#F4F3EE] rounded-2xl shadow-sm border border-[#E5E2DA] p-10 text-center max-w-md">
          <h2 className="text-2xl font-semibold text-[#2F2E2B] mb-2">Authentication Required</h2>
          <p className="text-[#6F6B63] mb-6">Please log in to upload your documents.</p>
          <button
            onClick={() => router.push(`/login?redirect=${encodeURIComponent(`/document?id=${registrationId}&package=${packageName}`)}`)}
            className="bg-[#C15F3C] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#A94E30] transition"
          >
            Log in to continue →
          </button>
        </div>
      </div>
    )
  }

  if (done) {
    return (
      <div className="min-h-screen bg-[#F4F3EE] flex items-center justify-center">
        <div className="bg-[#F4F3EE] rounded-2xl shadow-sm border border-[#E5E2DA] p-10 text-center max-w-md">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-[#2F2E2B] mb-2">Documents Submitted!</h2>
          <p className="text-[#6F6B63] mb-4">Your documents have been uploaded successfully. Please proceed with payment.</p>
          <p className="text-sm text-[#B1ADA1] mb-6">Registration ID: {registrationId}</p>
          <button
            onClick={() => router.push(`/payment?id=${registrationId}&package=${encodeURIComponent(packageName)}`)}
            className="bg-[#C15F3C] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#A94E30] transition"
          >
            Proceed to Payment →
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F4F3EE] py-10 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="bg-gradient-to-r from-[#C15F3C] to-[#A94E30] rounded-2xl p-6 text-white mb-6">
          <h1 className="text-2xl font-semibold">Upload Documents</h1>
          <p className="text-sm opacity-80 mt-1">Upload required documents for GST Registration</p>
          <p className="text-xs opacity-60 mt-1">Registration ID: {registrationId?.slice(0, 8)}...</p>
        </div>

        {/* Document Upload Cards */}
        <div className="space-y-4">
          {DOCUMENTS.map((doc) => (
            <div
              key={doc.key}
              className="bg-[#F4F3EE] rounded-xl border border-[#E5E2DA] p-5"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{doc.icon}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-[#2F2E2B] text-sm">{doc.label}</h3>
                      {doc.required && (
                        <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">Required</span>
                      )}
                      {!doc.required && (
                        <span className="text-xs bg-[#F4F3EE] text-[#6F6B63] px-2 py-0.5 rounded-full">Optional</span>
                      )}
                    </div>
                    <p className="text-xs text-[#B1ADA1] mt-0.5">{doc.description}</p>
                  </div>
                </div>
                {/* Preview thumbnail */}
                {previews[doc.key] && (
                  <img
                    src={previews[doc.key]}
                    alt="preview"
                    className="w-12 h-12 object-cover rounded-lg border border-[#E5E2DA]"
                  />
                )}
              </div>

              {/* Upload area */}
              <label className="block cursor-pointer">
                <div className={`border-2 border-dashed rounded-lg p-4 text-center transition ${
                  files[doc.key]
                    ? 'border-[#C15F3C] bg-[#FDF5F2]'
                    : 'border-[#E5E2DA] hover:border-[#C15F3C] bg-[#F4F3EE]'
                }`}>
                  {files[doc.key] ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 text-[#C15F3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-[#C15F3C] font-medium">{files[doc.key]?.name}</span>
                    </div>
                  ) : (
                    <div>
                      <svg className="w-6 h-6 text-[#B1ADA1] mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="text-xs text-[#B1ADA1]">Click to upload · PDF, JPG, PNG</p>
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                  onChange={(e) => handleFileChange(doc.key, e.target.files?.[0] || null)}
                />
              </label>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={uploading}
          className="w-full mt-6 bg-[#C15F3C] text-white font-semibold py-4 rounded-xl text-sm hover:bg-[#A94E30] transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {uploading ? 'Uploading Documents...' : 'Submit Documents →'}
        </button>

        <p className="text-xs text-center text-[#B1ADA1] mt-4">
          🔒 Your documents are encrypted and stored securely
        </p>
      </div>
    </div>
  )
}

export default function DocumentsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F4F3EE] flex items-center justify-center">Loading...</div>}>
      <DocumentsContent />
    </Suspense>
  )
}
