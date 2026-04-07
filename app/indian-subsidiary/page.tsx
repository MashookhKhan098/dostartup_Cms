import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Startup/Hero2';
import PricingCards, { PricingPlan } from '../components/PricingCards';
import DynamicTabContent from '../components/DynamicTabContent';
import Faq from '../components/Faq';

const subsidiaryPlans: PricingPlan[] = [
  {
    title: "Incorporation", price: "9,899",
    description: "Setup & Operate a business in India from anywhere in the world in just 12-15 Days - Online & Hassle-Free! Fully managed incorporation...",
    features: [
      { text: "Unlimited Name Approval Attempts" },
      { text: "Company Incorporation" },
      { text: "MOA & AOA Drafting" },
      { text: "3 DINs for Directors" },
      { text: "Support for unlimited shareholders" },
      { text: "Digital Signatures" },
      { text: "PAN & TAN Registration" },
      { text: "Bank Account Opening Support" },
      { text: "FEMA Compliance Advice" }
    ]
  },
  {
    title: "Incorporation and Compliance", price: "39,899", isPopular: true,
    description: "Register your company in just 7-10 days with complete incorporation, compliance & accounting support. Government fees and DSC c...",
    features: [
      { text: "Unlimited Name Approval Attempts" },
      { text: "Company Incorporation" },
      { text: "MOA & AOA Drafting" },
      { text: "3 DINs for Directors" },
      { text: "Support for unlimited shareholders" },
      { text: "Digital Signatures" },
      { text: "PAN & TAN Registration" },
      { text: "Bank Account Opening Support" },
      { text: "Accounting & Bookkeeping" },
      { text: "Annual ROC Filing" },
      { text: "Income Tax Return Filing" },
      { text: "GST Registration" },
      { text: "FDI Reporting (FLA Return)" },
      { text: "Secretarial Audit Assistance" },
      { text: "Dedicated Foreign Desk Support" },
      { text: "RBI Compliance Guidance" },
      { text: "Year-long Advisory" },
      { text: "Virtual Office Address Support" }
    ]
  }
];

export default function Home() {
 return (
 <>
 <Navbar />
 <Hero defaultEntity = "Indian Subs."/>
 <DynamicTabContent category="Proprietorship" />
 <PricingCards plans={subsidiaryPlans} />
      <Faq />
 <Popularsearches />
 <Footer />
 </>
 );
}
