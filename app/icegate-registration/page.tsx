import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import IcegateHero from '../components/Registration/IcegateHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {
  const heroProps = {
    heading: "Fast & Secure",
    headingHighlight: "ICEGATE Registration",
    description: "Register on the ICEGATE portal easily to handle customs and trade compliance efficiently. Our experts guide you through the process for a smooth experience.",
    features: [
      { text: "Seamless Portal Registration Support" },
      { text: "Customs Compliance Guided by Experts" },
      { text: "Fully Online & Paperless Application" },
      { text: "Quick Turnaround Time" },
      { text: "Dedicated Support Team" },
    ],
  };

  return (
    <>
      <Navbar />
      <IcegateHero {...heroProps} />
      <DynamicTabContent category="E-Invoice" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="icegate-registration" />
      </div>
      <FAQAccordion category="icegate-registration" />
      <Popularsearches />
      <Footer />
    </>
  );
}
