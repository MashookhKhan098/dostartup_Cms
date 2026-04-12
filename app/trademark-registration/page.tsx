"use client";

import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Trademark/Hero2';
import DynamicTabContent from '../components/DynamicTabContent';
import { handleWhatsAppSubmission } from "@/lib/form-utils";


export default function Home() {
 const heroProps = {
 // LEFT SIDE
 heading: "Protect Your Brand. File Your Trademark.",
 headingHighlight: "Brand",
 description:
 "AI-powered brand monitoring software and trademark filing platform trusted by India's top brands.",

 features: [
 {
 icon: "plus",
 text: "Instant, Digital Trademark Filing",
 },
 {
 icon: "chart",
 text: "AI-Powered Trademark Search & Monitoring",
 },
 {
 icon: "users",
 text: "Experienced Trademark Lawyers",
 },
 {
 icon: "document",
 text: "Over 1 Lakh Brands Registered",
 },
 ],

 // RIGHT SIDE TABS (Individuals/MSMEs & All Others)
 

  // FORM FIELDS
  formFields: [
    {
      type: "input",
      inputType: "text",
      name: "name",
      placeholder: "Your Name",
    },
    {
      type: "input",
      inputType: "email",
      name: "email",
      placeholder: "Your Email",
    },
    {
      type: "input",
      inputType: "tel",
      name: "phone",
      placeholder: "Phone Number",
    },
    {
      type: "input",
      inputType: "text",
      name: "brand_name",
      placeholder: "Brand Name",
    },
    {
      type: "select",
      name: "trademark_class",
      placeholder: "Select Class",
      options: [
        "Class 1 – Chemicals",
        "Class 9 – Electronics & Software",
        "Class 25 – Clothing",
        "Class 35 – Advertising & Business",
        "Class 41 – Education & Entertainment",
        "Class 42 – IT & Software Services",
      ],
    },
  ],
 
 tabs: [
 { name: "Individuals & MSMEs" },
 { name: "All Others" },
 ],
 defaultTab: "Individuals & MSMEs",

 tabDescriptions: {
 "Individuals & MSMEs":
 "Government fee is ₹4,500 for Individuals and valid UDYAM-registered MSMEs.",
 "All Others":
 "Applicable for companies, LLPs, foreign entities, and others. Government fees differ as per entity type.",
 },

 buttonText: "Register TM",

  onSubmit: (data: any) => {
    handleWhatsAppSubmission(data, "Trademark Registration");
  },
};

 return (
 <main className="min-h-screen bg-[#F4F3EE]">
 <Navbar />
 <Hero {...heroProps} />
 <DynamicTabContent category="Trademark" />

 <div className="bg-[#F4F3EE] py-8">
   <DynamicPricingSection category="trademark-registration" />
 </div>

 <FAQAccordion category="trademark-registration" />
 <Popularsearches />
 <Footer />
 </main>
 );
}
