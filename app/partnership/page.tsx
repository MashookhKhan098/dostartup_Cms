import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Startup/Hero';
import PricingCards, { PricingPlan } from '../components/PricingCards';
import DynamicTabContent from '../components/DynamicTabContent';
import Faq from '../components/Faq';

const partnershipPlans: PricingPlan[] = [
  {
    title: "Partnership Deed", price: "2,899",
    description: "Get Your Partnership Firm in Just 5-7 Days - Online & Hassle-Free! Start your partnership firm registration with an expert-drafted deed...",
    features: [
      { text: "Partnership Deed Draft" },
      { text: "PAN Card Registration" },
      { text: "Shipping and Handling" },
      { text: "Bank Account Opening Assistance" },
      { text: "LEDGERS Software - 1 Year" }
    ]
  },
  {
    title: "Partnership- Deed & GST", price: "10,899", isPopular: true,
    description: "Get Your Partnership Firm in Just 5-7 Days - Online & Hassle-Free! Start your partnership firm registration with an expert-drafted deed...",
    features: [
      { text: "Partnership deed draft" },
      { text: "PAN Card Registration" },
      { text: "Shipping and Handling" },
      { text: "GST Registration" },
      { text: "GSTR-1 Filing - 12 Months" },
      { text: "GSTR-3B Filing - 12 Months" },
      { text: "LEDGERS GST Software Access - 12 Months" },
      { text: "Bank Account Opening Assistance" }
    ]
  },
  {
    title: "Partnership- Deed, GST & ITR", price: "14,899",
    description: "Get Your Partnership Firm in Just 5-7 Days - Online & Hassle-Free! Start your partnership firm registration with an expert-drafted deed...",
    features: [
      { text: "Partnership deed draft" },
      { text: "PAN Card Registration" },
      { text: "Shipping and Handling" },
      { text: "GST Registration" },
      { text: "GSTR-1 Filing - 12 Months" },
      { text: "GSTR-3B Filing - 12 Months" },
      { text: "Income Tax Filing" },
      { text: "Financial Statements" },
      { text: "Dedicated Accountant" }
    ]
  }
];

export default function Home() {
 return (
 <>
 <Navbar />
 <Hero defaultEntity = "Partnership"/>
 <DynamicTabContent category="Partnership" />
  <PricingCards plans={partnershipPlans} />
  <Faq category="Partnership" blogCategory="partnership" />
 <Popularsearches />
 <Footer />
 </>
 );
}
