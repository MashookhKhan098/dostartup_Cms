import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/TrademarkRegistrationHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {

  const heroProps = {
    heading: "Protect Your Brand with ",
    headingHighlight: "Trademark Registration",
    description: "AI-powered brand monitoring and trademark filing platform trusted by India's top brands. File your trademark quickly with expert guidance across all 45 classes.",
    features: [
      { icon: "plus", text: "Instant, Digital Trademark Filing" },
      { icon: "chart", text: "AI-Powered Trademark Search & Monitoring" },
      { icon: "users", text: "Experienced Trademark Lawyers" },
      { icon: "document", text: "Over 1 Lakh Brands Registered" },
      { icon: "document", text: "All 45 Trademark Classes Covered" },
    ],
    buttonText: "Register TM",
  };

  return (
    <main className="min-h-screen bg-[#F4F3EE]">
      <Navbar />
      <Hero {...heroProps} />
      <DynamicTabContent category="trademark-registration" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="trademark-registration" />
      </div>
      <FAQAccordion category="trademark-registration" />
      <Popularsearches />
      <Footer />
    </main>
  );
}
