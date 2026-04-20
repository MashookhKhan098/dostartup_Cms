"use client";

import { useState, Suspense, useEffect } from 'react';
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Gst/Hero2';
import DynamicTabContent from '../components/DynamicTabContent';
import { handleWhatsAppSubmission } from "@/lib/form-utils";
import ServiceModal from '../components/ServiceModal';
import { supabase } from '@/lib/supabase';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [registrationId, setRegistrationId] = useState('');
  const [packageName, setPackageName] = useState('');
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUserId(session?.user?.id || null);
    };
    getUser();
  }, []);

  const handleFormSubmit = async (formData: Record<string, FormDataEntryValue>) => {
    try {
      const dataToSubmit = {
        ...formData,
        user_id: userId,
      };

      const response = await fetch('/api/gst-foreign-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSubmit),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Server error occurred');
      }

      // Send lead silently
      handleWhatsAppSubmission(formData, 'GST Registration for Foreigners', undefined, false);

      // Open modal
      setRegistrationId(result.data[0].id);
      setPackageName(String(formData.package || 'Basic Package - ₹999'));
      setModalOpen(true);
    } catch (error: any) {
      console.error('Submission Error:', error);
      alert(`Submission failed: ${error.message}`);
    }
  };

  const heroProps = {
    heading: "GST Registration for Foreigners",
    headingHighlight: "Foreigners",
    description: "Register your foreign business for GST in India and manage returns, invoices, and compliance effortlessly in one place.",
    features: [
      { icon: "wallet", text: "Affordable & Cost-Effective Service" },
      { icon: "document", text: "Digital & Paperless Process" },
      { icon: "users", text: "Over 1 Lakh Businesses Registered" },
      { icon: "education", text: "Expert Guidance on GST Compliance" },
    ],
    tabs: [
      { name: "New Registration" },
      { name: "New State" },
    ],
    defaultTab: "New Registration",
    tabDescriptions: {
      "New Registration": "For foreign businesses applying for GST in India for the first time.",
      "New State": "For businesses already registered in one state and expanding to another state.",
    },
    formFields: [
      { type: "select", name: "state", placeholder: "Select State", options: ["Andhra Pradesh", "Delhi", "Gujarat", "Karnataka", "Maharashtra", "Tamil Nadu", "Uttar Pradesh", "West Bengal"], required: true },
      { type: "input", inputType: "text", name: "pan", placeholder: "PAN", required: true },
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
        serviceName="GST Registration for Foreigners"
      />
    </>
  );
}
