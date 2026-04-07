import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from '../components/Startup/Hero';
import DynamicTabContent from '../components/DynamicTabContent';
import Faq from '../components/Faq';
import PricingCards, { PricingPlan } from '../components/PricingCards';

export default function Page() {
  const serviceCategory = "proprietorship"; 

  const proprietorshipPlans = [
    {
      title: "GST Registration + Monthly Filing",
      price: "1,499",
      description: "Get complete GST registration and monthly filing services, ensuring compliance and smooth processing.",
      features: [
        "GST Registration Support",
        "GST Certificate",
        "Dedicated Accountant",
        "GSTR-1 Monthly Filing",
        "GSTR-3B Monthly Filing",
        "Business Service Personal Assistant"
      ]
    },
    {
      title: "Proprietorship - GST",
      price: "7,899",
      isPopular: true,
      description: "For proprietorship businesses looking for complete GST compliance, get GST registration, UDYAM registration.",
      features: [
        "GST Registration for Proprietorship",
        "UDYAM Registration",
        "GSTR-1 Filing – 12 Months",
        "GSTR-3B Filing – 12 Months",
        "LEDGERS GST Software Access – 12 Months"
      ]
    },
    {
      title: "1 Year GST Filing + ITR",
      price: "19,899",
      description: "DoStartup seamlessly provides customized accounting services for businesses with turnover up to 40 lakhs.",
      features: [
        "Dedicated Accountant",
        "GSTR-1 Filing – 12 Months",
        "GSTR-3B Filing – 12 Months",
        "Income Tax Filing",
        "Financial Statements",
        "LEDGERS Software Access – 12 Months"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero defaultEntity="Proprietorship"/>

      <DynamicTabContent category={serviceCategory} />
      <PricingCards plans={proprietorshipPlans} />
      <Faq category={serviceCategory} />
      
      <Footer />
    </main>
  );
}
