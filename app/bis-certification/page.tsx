import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/BisCertificationHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {

  const heroProps = {
    heading: "Trusted Product Quality ",
    headingHighlight: "BIS Certification",
    description: "Get BIS Certification with DoStartup to ensure your products meet Indian safety and quality standards. Our expert team guides you through lab testing and application filing for a seamless approval process.",
    features: [
      { icon: "document", text: "Consult Senior Scientist" },
      { icon: "chart", text: "Personalised Consultation" },
      { icon: "plus", text: "Process & Pricing Finalisation" },
      { icon: "users", text: "Application Preparation & Filing" },
      { icon: "document", text: "Lab Testing Support & BIS Certification" },
    ],
    buttonText: "Get Certified",
  };

  return (
    <>
      <Navbar />
      <Hero {...heroProps} />
      <DynamicTabContent category="bis-certification" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="bis-certification" />
      </div>
      <FAQAccordion category="bis-certification" />
      <Popularsearches />
      <Footer />
    </>
  );
}
