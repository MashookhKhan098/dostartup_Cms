import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PricingCards, { PricingPlan } from '../components/PricingCards';
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Startup/Hero';
import DynamicTabContent from '../components/DynamicTabContent';
import Faq from '../components/Faq';

const companyRegistrationPlans: PricingPlan[] = [
  {
    title: "Incorporation", price: "2,899",
    description: "Register Your Company in Just 7-10 Days - Online & Hassle-Free! Fully managed incorporation with complete documentation support.",
    features: [
      { text: "Unlimited Name Approval Attempts" },
      { text: "Company Incorporation" },
      { text: "MOA & AOA Drafting" },
      { text: "2 DINs for Directors" },
      { text: "Authorized Capital with No Limit" },
      { text: "Digital Signature Certificate" },
      { text: "PAN & TAN Registration" },
      { text: "Bank Account Opening Assistance" },
      { text: "Custom Document Drafting" }
    ]
  },
  {
    title: "Incorporation and Compliance", price: "19,899", isPopular: true,
    description: "Register your company in just 7-10 days with complete incorporation, compliance & accounting support.",
    features: [
      { text: "Unlimited Name Approval Attempts" },
      { text: "Company Incorporation" },
      { text: "MOA & AOA Drafting" },
      { text: "2 DINs for Directors" },
      { text: "Authorized Capital with No Limit" },
      { text: "Digital Signature Certificate" },
      { text: "PAN & TAN Registration" },
      { text: "Bank Account Opening Assistance" },
      { text: "Accounting & Bookkeeping" },
      { text: "Annual ROC Filing" },
      { text: "Income Tax Return Filing" },
      { text: "GST Registration" },
      { text: "Dedicated Compliance Manager" },
      { text: "Year-long Support" }
    ]
  }
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero defaultEntity="Company" />
      <DynamicTabContent category="Proprietorship" />
      <PricingCards plans={companyRegistrationPlans} />
      <Faq category="Proprietorship" />
      <Popularsearches />
      <Footer />
    </>
  );
}
