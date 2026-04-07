import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PricingCards, { PricingPlan } from '../components/PricingCards';
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Startup/Hero';
import DynamicTabContent from '../components/DynamicTabContent';
import Faq from '../components/Faq';

const opcPlans = [
  {
    title: "Basic",
    price: "1,999",
    description: "Register your One Person Company with MCA and get incorporated legally.",
    features: [
      "MCA Name Approval",
      "OPC Incorporation (SPICe+)",
      "MOA & AOA Drafting",
      "PAN & TAN Registration",
      "Certificate of Incorporation"
    ]
  },
  {
    title: "Standard",
    price: "3,499",
    isPopular: true,
    description: "Complete OPC setup with GST, MSME registration, and bank account assistance.",
    features: [
      "Everything in Basic",
      "GST Registration",
      "Udyam / MSME Registration",
      "Digital Signature (Director)",
      "Bank Account Assistance",
      "Nominee Declaration (INC-3)"
    ]
  },
  {
    title: "Premium",
    price: "5,999",
    description: "All-in-one OPC package with first year compliance and CA support.",
    features: [
      "Everything in Standard",
      "First Year OPC Compliance",
      "Director KYC (DIN eKYC)",
      "ITR Filing (Company)",
      "Compliance Calendar",
      "Dedicated CA Support"
    ]
  }
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero defaultEntity="OPC" />
      <DynamicTabContent category="Proprietorship" />
      <PricingCards plans={opcPlans} />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}
