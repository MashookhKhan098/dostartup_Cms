import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Startup/Hero2';
import PricingCards, { PricingPlan } from '../components/PricingCards';
import DynamicTabContent from '../components/DynamicTabContent';
import Faq from '../components/Faq';

const trustPlans: PricingPlan[] = [
  {
    title: "Trust Deed", price: "2,899",
    description: "Get Your Trust Registered in Just 5-7 Days - Online & Hassle-Free! Start your Trust registration with an expert-drafted deed prepared by our...",
    features: [
      { text: "Trust Deed Draft" },
      { text: "PAN Card Registration" },
      { text: "Bank Account Opening Assistance" }
    ]
  },
  {
    title: "Trust- Deed & ITR", price: "10,899", isPopular: true,
    description: "Get Your Trust Registered in Just 5-7 Days - Online & Hassle-Free! Expert-drafted trust deed, ITR filing and 1-year access to Ledger account...",
    features: [
      { text: "Trust Deed Draft" },
      { text: "PAN Card Registration" },
      { text: "ITR-7 Return Filing" },
      { text: "Bank Account Opening Assistance" },
      { text: "LEDGERS Software - 1 Year" }
    ]
  },
  {
    title: "Trust- Deed, ITR, 12A & 80G", price: "26,899",
    description: "Get Your Trust Registered in Just 5-7 Days - Online & Hassle-Free! Expert-drafted trust deed, ITR filing, 12A & 80G registration, and 1-year ac...",
    features: [
      { text: "Trust Deed Draft" },
      { text: "PAN Card Registration" },
      { text: "ITR-7 Return Filing" },
      { text: "12A Registration" },
      { text: "80G Registration" },
      { text: "Darpan NGO Registration" },
      { text: "Priority Filing Support" }
    ]
  }
];

export default function Home() {
 return (
 <>
 <Navbar />
 <Hero defaultEntity = "Trust"/>
 <DynamicTabContent category="Startup" />
 <PricingCards plans={trustPlans} />
      <Faq />
 <Popularsearches />
 <Footer />
 </>
 );
}
