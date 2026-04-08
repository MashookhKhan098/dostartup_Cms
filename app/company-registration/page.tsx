import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DoStartupPricing from '../components/DoStartupPricing';
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Startup/Hero';
import DynamicTabContent from '../components/DynamicTabContent';
import Faq from '../components/Faq';

const companyRegistrationPlans = [
  {
    title: "Basic",
    price: "1,999",
    description: "Ideal for first-time founders looking to register a Private Limited Company quickly.",
    features: [
      "MCA Name Approval",
      "Company Incorporation (SPICe+)",
      "MOA & AOA Drafting",
      "PAN & TAN Registration",
      "Certificate of Incorporation"
    ]
  },
  {
    title: "Standard",
    price: "3,999",
    isPopular: true,
    description: "Most popular — includes GST registration, Udyam, and bank account opening assistance.",
    features: [
      "Everything in Basic",
      "GST Registration",
      "Udyam / MSME Registration",
      "Bank Account Assistance",
      "Digital Signature (2 Directors)",
      "Commencement of Business (INC-20A)"
    ]
  },
  {
    title: "Premium",
    price: "6,999",
    description: "Full launch package with first-year compliance, CA support, and secretarial services.",
    features: [
      "Everything in Standard",
      "First Year MCA Compliance",
      "Director KYC (DIN eKYC)",
      "Share Certificate Preparation",
      "Compliance Calendar",
      "Dedicated CA & CS Support"
    ]
  }
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero defaultEntity="Company" />
      <DoStartupPricing plans={companyRegistrationPlans} />
      <DynamicTabContent category="Company Registration" />
      <Faq category="Company Registration" blogCategory="company-registration" />
      <Popularsearches />
      <Footer />
    </>
  );
}
