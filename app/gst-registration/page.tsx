'use client'

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Popularsearches from '@/app/components/PopularSearches';
import Hero from '@/app/components/Gst/Hero2';
import DynamicTabContent from '@/app/components/DynamicTabContent';
import FAQAccordion from '@/app/components/Faq';
import DynamicPricingSection from "@/app/components/DynamicPricingSection";
import { handleWhatsAppSubmission } from "@/lib/form-utils";
import ServiceModal from '@/app/components/ServiceModal';
import { useState, Suspense } from 'react';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [registrationId, setRegistrationId] = useState('');
  const [packageName, setPackageName] = useState('');

  const handleFormSubmit = async (formData: Record<string, FormDataEntryValue>) => {
    try {
      const response = await fetch('/api/gst-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Server error occurred');
      }

      // Send lead silently (no WhatsApp popup)
      handleWhatsAppSubmission(formData, 'GST Registration', undefined, false);

      // Open modal instead of redirecting
      setRegistrationId(result.data[0].id);
      setPackageName(String(formData.package || 'Basic Package - ₹999'));
      setModalOpen(true);
    } catch (error: any) {
      console.error('Network Error:', error);
      alert(`Submission failed: ${error.message}`);
    }
  };

  const heroProps = {
    heading: "GST Registration",
    headingHighlight: "GST",
    description: "Register your business for GST and manage returns, invoices, and compliance effortlessly in one place.",
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
      "New Registration": "For businesses or individuals applying for GST for the first time. This is the initial GST number required to legally collect GST and claim input tax credit.",
      "New State": "For businesses already registered in one state and expanding to another state. You need to register separately in each state where you have a business presence.",
    },
    formFields: [
      { type: "select", name: "state", placeholder: "Select State", options: ["Andhra Pradesh", "Delhi", "Gujarat", "Karnataka", "Maharashtra", "Tamil Nadu", "Uttar Pradesh", "West Bengal"] },
      { type: "input", inputType: "text", name: "pan", placeholder: "PAN", showVerify: true },
      { type: "input", inputType: "tel", name: "phone", placeholder: "Phone Number" },
      { type: "select", name: "nature_of_business", placeholder: "Nature of Business", options: ["Manufacturer", "Trader", "Service Provider", "Retailer", "Wholesaler", "E-commerce", "Others"] },
      { type: "select", name: "package", placeholder: "Select Package", options: ["Basic Package - ₹999", "Standard Package - ₹1,999", "Premium Package - ₹2,999"] },
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
        serviceName="GST Registration"
        tableName="gst_registrations"
      />
    </>
  );
}
