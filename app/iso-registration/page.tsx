import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import IsoRegistrationHero from '../components/Registration/IsoRegistrationHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {

  const heroProps = {
    // ================= LEFT SIDE =================
    heading: "ISO Registration ",
    headingHighlight: "for Businesses",
    description:
      "Boost your business credibility and global recognition with professional ISO Registration services. Ensure compliance with international quality standards through expert guidance and end-to-end certification support.",

    features: [
      {
        icon: "document",
        text: "Transparent & Competitive Pricing",
      },
      {
        icon: "chart",
        text: "Assistance for All ISO Standards (9001, 14001, 45001 & more)",
      },
      {
        icon: "users",
        text: "Document Preparation & Audit Support",
      },
      {
        icon: "plus",
        text: "Fast Processing & Digital Certificate Delivery",
      },
      {
        icon: "document",
        text: "Trusted by 50,000+ Certified Businesses",
      },
    ],

    // ================= BUTTONS =================
    buttonText: "Pay INR 4,999 Online",
  };

  return (
    <>
      <Navbar />
      <IsoRegistrationHero {...heroProps}/>
      <DynamicTabContent category="Proprietorship" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="iso-registration" />
      </div>
      <FAQAccordion category="iso-registration" />
      <Popularsearches />
      <Footer />
    </>
  );
}
