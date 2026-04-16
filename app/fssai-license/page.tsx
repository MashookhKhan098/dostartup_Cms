import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import FssaiHero from '../components/Registration/FssaiHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {
  const heroProps = {
    heading: "Get Your",
    headingHighlight: "FSSAI License",
    description: "Ensure your food business is fully compliant with FSSAI regulations. Our expert team provides step-by-step guidance for fast, secure, and hassle-free FSSAI registration, so you can focus on growing your business with confidence.",
    features: [
      { text: "Fully Online & Paperless" },
      { text: "Expert Guidance at Every Step" },
      { text: "Dedicated FSSAI Experts for Your Business" },
      { text: "Quick & Hassle-Free Processing" },
      { text: "100% Genuine & Verified Certification" },
    ],
  };

  return (
    <>
      <Navbar />
      <FssaiHero {...heroProps} tableName="fssai_license" />
      <DynamicTabContent category="Trademark" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="fssai-license" />
      </div>
      <FAQAccordion category="fssai-license" />
      <Popularsearches />
      <Footer />
    </>
  );
}

