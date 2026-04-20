"use client";
import Navbar from "../components/Navbar";

import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/Hero';
import DynamicTabContent from '../components/DynamicTabContent';
import { handleWhatsAppSubmission } from "@/lib/form-utils";

export default function Home() {

const heroProps = {
 // ================= LEFT SIDE =================
 heading: "Get Your ",
 headingHighlight: "Udyam Registration",
 description:
 "Register your business easily with Udyam Registration (MSME). Our expert team ensures a seamless process, helping you establish your business under the Government of India's Udyam scheme and unlock exclusive benefits.",

 features: [
 {
 icon: "document",
 text: "Online Paperless Process",
 },
 {
 icon: "chart",
 text: "Expert Guidance at Every Step",
 },
 {
 icon: "users",
 text: "Dedicated Business Experts",
 },
 {
 icon: "plus",
 text: "Fast & Hassle-Free Processing",
 },
 {
 icon: "document",
 text: "100% Genuine & Verified Certification",
 },
 ],

 // ================= RIGHT SIDE =================
 tabs: [],
 defaultTab: null,
 tabDescriptions: null,

 // ================= FORM FIELDS =================
 formFields: [
 {
 type: "text",
 content: "Service",
 },
 {
 type: "text",
 content:
 "Udyam Registration\nRegister your business under the Government of India's Udyam scheme for MSME recognition and benefits.",
 },

 // 🔹 INPUT & SELECT FIELDS
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
 name: "pan_gstin",
 placeholder: "PAN / GSTIN",
 },
 {
 type: "input",
 inputType: "text",
 name: "aadhaar_number",
 placeholder: "Aadhaar Number",
 },
 {
 type: "select",
 name: "state",
 placeholder: "Select State / UT",
 options: [
 "Andaman & Nicobar Islands",
 "Delhi",
 "Gujarat",
 "Karnataka",
 "Maharashtra",
 "Tamil Nadu",
 "Telangana",
 "Uttar Pradesh",
 "West Bengal",
 ],
 },
 {
 type: "select",
 name: "nic_division",
 placeholder: "Select NIC Division",
 options: [
 "Agriculture",
 "Manufacturing",
 "Construction",
 "Services",
 "Trade",
 "Transportation",
 "Information Technology",
 ],
 },
 ],

  buttonText: "Apply Now",
  onSubmit: (data: any) => handleWhatsAppSubmission(data, "Udyam Registration"),
  offers: [
    {
      icon: <div className="w-5 h-5 bg-[#A94E30] rounded" />,
      title: "MSME Benefits Access",
      description: "Unlock collateral-free loans, subsidies, and government tenders."
    },
    {
      icon: <div className="w-5 h-5 bg-[#A94E30] rounded opacity-80" />,
      title: "LEDGERS HR Software",
      description: "Attendance, Payroll, Employee Portal & HR Compliance"
    },
    {
      icon: <div className="text-[10px] font-bold text-[#C15F3C]">GST</div>,
      title: "Save 18% with GST Registration",
      description: "Get GST invoice with Input Tax Credit"
    }
  ]
};

 return (
 <>
 <Navbar />
 <Hero {...heroProps}/>
 <DynamicTabContent category="udyam-registration" />
 <div className="bg-[#F4F3EE] py-8">
   <DynamicPricingSection category="udyam-registration" />
 </div>
 <FAQAccordion category="udyam-registration" />
 <Popularsearches />
 <Footer />
 </>
 );
}
