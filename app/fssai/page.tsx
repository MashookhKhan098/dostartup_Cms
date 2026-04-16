import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import FssaiHero from '../components/Registration/FssaiHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {
  const heroProps = {
    heading: "Launch Your Food Business with",
    headingHighlight: "FSSAI Registration",
    description: "Ensure food safety compliance, build customer trust, and operate legally across India with a valid FSSAI license. IndiaFilings helps you obtain your registration quickly and hassle-free.",
    features: [
      { text: "Free Consultation & License Selection" },
      { text: "Document Preparation & Verification" },
      { text: "100% Online & Paperless Process" },
      { text: "Expert Guidance at Every Step" },
      { text: "FoSCoS Portal Filing Assistance" },
    ],
  };

  return (
    <>
      <Navbar />
      <FssaiHero {...heroProps} tableName="fssai_registration" />
      <DynamicTabContent category="Trademark" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="fssai" />
      </div>
      <FAQAccordion category="fssai" />
      <Popularsearches />
      <Footer />
    </>
  );
}

