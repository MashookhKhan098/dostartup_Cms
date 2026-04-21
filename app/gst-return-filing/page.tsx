'use client'

import { useRouter } from 'next/navigation';
import { useState, Suspense, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Gst/Hero2';
import DynamicTabContent from '../components/DynamicTabContent';
import FAQAccordion from '../components/Faq';
import DynamicPricingSection from '../components/DynamicPricingSection';
import ServiceModal from '../components/ServiceModal';
import { handleWhatsAppSubmission } from "@/lib/form-utils";
import { supabase } from '@/lib/supabase';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [registrationId, setRegistrationId] = useState('');
  const [packageName, setPackageName] = useState('');
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data: { user }, error } = await supabase.auth.getUser();
        if (error) throw error;
        setUserId(user?.id || null);
      } catch (err: any) {
        console.warn("GST Return Filing auth check failed gracefully:", err.message);
      }
    };
    checkUser();
  }, []);

  const handleFormSubmit = async (formData: Record<string, FormDataEntryValue>) => {
    try {
      const dataToSubmit = {
        ...formData,
        user_id: userId,
      };

      const response = await fetch('/api/gst-returns', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSubmit),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Server error occurred');
      }

      // Send lead silently
      handleWhatsAppSubmission(formData, 'GST Return Filing', undefined, false);

      // Open modal
      setRegistrationId(result.data[0].id);
      setPackageName(String(formData.package || 'Basic Package - ₹999'));
      setModalOpen(true);
    } catch (error: any) {
      console.error('Network Error:', error);
      alert(`Submission failed: ${error.message}`);
    }
  };

  const heroProps = {
    heading: "Accountant for GST Filings",
    headingHighlight: "GST Filings",
    description: "File GST returns, manage invoices, and reconcile bank statements effortlessly using our Accountants & LEDGERS platform.",
    features: [
      { icon: "document", text: "Automated GST Return Filing" },
      { icon: "wallet", text: "Invoice Management & Reconciliation" },
      { icon: "users", text: "Dedicated Expert Accountant Support" },
      { icon: "education", text: "Real-time Compliance Monitoring" },
    ],
    tabs: [
      { name: "Existing GST" },
      { name: "GST Registration" },
    ],
    defaultTab: "Existing GST",
    tabDescriptions: {
      "Existing GST": "For businesses that already have a GST number and need assistance with filing returns, managing invoices, and maintaining compliance.",
      "GST Registration": "For businesses or individuals applying for GST for the first time.",
    },
    formFields: [
      { type: "input", inputType: "text", name: "username", placeholder: "Username", required: true },
      { type: "input", inputType: "text", name: "gstin", placeholder: "Enter GSTIN", showOnTab: "Existing GST", required: true },
      { type: "select", name: "state", placeholder: "Select State", options: ["Andhra Pradesh", "Delhi", "Gujarat", "Karnataka", "Maharashtra", "Tamil Nadu", "Uttar Pradesh", "West Bengal"], showOnTab: "GST Registration", required: true },
      { type: "input", inputType: "text", name: "pan", placeholder: "PAN", showOnTab: "GST Registration", required: true },
      { type: "select", name: "nature_of_business", placeholder: "Nature of Business", options: ["Manufacturer", "Trader", "Service Provider", "Retailer", "Wholesaler", "E-commerce", "Others"], required: true },
      { type: "select", name: "package", placeholder: "Select Package", options: ["Basic Package - ₹999", "Standard Package - ₹1,999", "Premium Package - ₹2,999"], required: true },
    ],
    buttonText: "Submit",
    onSubmit: handleFormSubmit,
  };

  return (
    <>
      <Navbar />
      <Hero {...heroProps} />
      <Suspense fallback={<div className="py-8 text-center text-[#B1ADA1] text-sm">Loading content...</div>}>
        <DynamicTabContent category="GST" />
      </Suspense>
      <DynamicPricingSection />
      <FAQAccordion />
      <Popularsearches />
      <Footer />

      <ServiceModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        registrationId={registrationId}
        packageName={packageName}
        serviceName="GST Return Filing"
        tableName="gst_returns"
      />
    </>
  );
}
