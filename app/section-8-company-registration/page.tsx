import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Startup/Hero2';
import DynamicTabContent from '../components/DynamicTabContent';
import Faq from '../components/Faq';

const section8Plans: PricingPlan[] = [
  {
    title: "Incorporation", price: "2,899",
    description: "Register Your Company in Just 7-10 Days - Online & Hassle-Free! Fully managed incorporation with complete documentation support. Go ...",
    features: [
      { text: "Unlimited Name Approval Attempts" },
      { text: "Company Incorporation" },
      { text: "MOA & AOA Drafting" },
      { text: "3 DINs for Directors" },
      { text: "RD License" },
      { text: "Digital Signatures" },
      { text: "PAN & TAN Registration" },
      { text: "Bank Account Opening Assistance" },
      { text: "Custom Document Drafting" },
      { text: "Section 8 Compliance Advice" }
    ]
  },
  {
    title: "Incorporation and Compliance", price: "19,899", isPopular: true,
    description: "Register your company in just 7-10 days with complete incorporation, compliance & accounting support. Government fees and DSC c...",
    features: [
      { text: "Unlimited Name Approval Attempts" },
      { text: "Company Incorporation" },
      { text: "MOA & AOA Drafting" },
      { text: "3 DINs for Directors" },
      { text: "RD License" },
      { text: "Digital Signatures" },
      { text: "PAN & TAN Registration" },
      { text: "Bank Account Opening Assistance" },
      { text: "Accounting & Bookkeeping" },
      { text: "Annual ROC Filing" },
      { text: "Income Tax Return Filing" },
      { text: "GST Registration" },
      { text: "Dedicated Compliance Manager" },
      { text: "Year-long Support" },
      { text: "Priority Support" },
      { text: "12A and 80G Support" }
    ]
  }
];

export default function Home() {
 return (
 <>
 <Navbar />
 <Hero defaultEntity = "Section 8"/>
 <DynamicTabContent category="Proprietorship" />
 <DynamicPricingSection />
      <FAQAccordion />
 <Popularsearches />
 <Footer />
 </>
 );
}
