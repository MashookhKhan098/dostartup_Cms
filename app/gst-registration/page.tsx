'use client'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Gst/Hero2';
import DynamicTabContent from '../components/DynamicTabContent';
import FAQAccordion from '../components/Faq';
import DynamicPricingSection from "../components/DynamicPricingSection";
import { supabase } from '../../lib/supabase';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleFormSubmit = async (formData: Record<string, FormDataEntryValue>) => {
    const { data, error } = await supabase
      .from('gst_registrations')
      .insert([{
        state: formData.state,
        pan: String(formData.pan).toUpperCase(),
        nature_of_business: formData.nature_of_business,
        package: formData.package,
        phone: String(formData.phone),
        registration_type: 'New Registration',
        status: 'pending_payment'
      }])
      .select()

    if (error) {
      console.error('Error:', error.message);
      alert('Something went wrong: ' + error.message);
      return;
    }

    const registrationId = data[0].id;
    const packageName = String(formData.package);
    router.push(`/document?id=${registrationId}&package=${encodeURIComponent(packageName)}`);
  };

  const heroProps = {
    // Left side content
    heading: "GST Registration",
    headingHighlight: "GST",
    description: "Register your business for GST and manage returns, invoices, and compliance effortlessly in one place.",
    features: [
      {
        icon: "wallet",
        text: "Affordable & Cost-Effective Service"
      },
      {
        icon: "document",
        text: "Digital & Paperless Process"
      },
      {
        icon: "users",
        text: "Over 1 Lakh Businesses Registered"
      },
      {
        icon: "education",
        text: "Expert Guidance on GST Compliance"
      }
    ],
    
    // Right side form - Tabs
    tabs: [
      { name: "New Registration" },
      { name: "New State" }
    ],
    defaultTab: "New Registration",
    tabDescriptions: {
      "New Registration": "For businesses or individuals applying for GST for the first time. This is the initial GST number required to legally collect GST and claim input tax credit.",
      "New State": "For businesses already registered in one state and expanding to another state. You need to register separately in each state where you have a business presence."
    },
    
    // Form fields
    formFields: [
      {
        type: "select",
        name: "state",
        placeholder: "Select State",
        options: [
          "Andhra Pradesh",
          "Delhi",
          "Gujarat",
          "Karnataka",
          "Maharashtra",
          "Tamil Nadu",
          "Uttar Pradesh",
          "West Bengal"
        ]
      },
      {
        type: "input",
        inputType: "text",
        name: "pan",
        placeholder: "PAN",
        showVerify: true
      },
      {
        type: "input",
        inputType: "tel",
        name: "phone",
        placeholder: "Phone Number"
      },
      {
        type: "select",
        name: "nature_of_business",
        placeholder: "Nature of Business",
        options: [
          "Manufacturer",
          "Trader",
          "Service Provider",
          "Retailer",
          "Wholesaler",
          "E-commerce",
          "Others"
        ]
      },
      {
        type: "select",
        name: "package",
        placeholder: "Select Package",
        options: [
          "Basic Package - ₹999",
          "Standard Package - ₹1,999",
          "Premium Package - ₹2,999"
        ]
      }
    ],
    
    buttonText: "Submit",
    onSubmit: handleFormSubmit,
  };

  return (
    <>
      <Navbar />
      <Hero {...heroProps} />
      <DynamicTabContent category="GST" />
      <DynamicPricingSection />
      <FAQAccordion />
      <Popularsearches />
      <Footer />
    </>
  );
}
