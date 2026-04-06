import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DoStartupPricing from '../components/DoStartupPricing';
import Popularsearches from "../components/PopularSearches";
import Hero from "../components/Startup/Hero";
import DynamicTabContent from "../components/DynamicTabContent";
import Faq from "../components/Faq";

const llpPlans = [
  {
    title: "Basic",
    price: "2,499",
    description: "Register your LLP with MCA and get the LLP Agreement drafted.",
    features: [
      "MCA Name Approval",
      "LLP Incorporation (FiLLiP)",
      "LLP Agreement Drafting",
      "PAN & TAN Registration",
      "Certificate of Incorporation"
    ]
  },
  {
    title: "Standard",
    price: "4,499",
    isPopular: true,
    description: "Complete LLP setup with GST, MSME, and DSC for all partners.",
    features: [
      "Everything in Basic",
      "GST Registration",
      "Udyam / MSME Registration",
      "Digital Signature (2 Partners)",
      "Bank Account Assistance",
      "Commencement Filing"
    ]
  },
  {
    title: "Premium",
    price: "7,499",
    description: "End-to-end LLP setup with first-year compliance and ongoing CA support.",
    features: [
      "Everything in Standard",
      "LLP Annual Compliance (1 Year)",
      "LLP Form 11 Filing",
      "Income Tax Return (ITR-5)",
      "Compliance Calendar",
      "Dedicated CA & CS Support"
    ]
  }
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero defaultEntity="LLP" />
      <DoStartupPricing plans={llpPlans} />
      <DynamicTabContent category="proprietorship" />
      <Faq category="proprietorship" />
      <Popularsearches />
      <Footer />
    </main>
  );
}
