import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import HalalHero from '../components/Registration/HalalHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {
  const heroProps = {
    heading: "Trusted",
    headingHighlight: "HALAL Certification",
    description: "Get your HALAL certification quickly to expand your market reach and build global consumer trust. Our experts ensure a smooth, compliant, and hassle-free certification process.",
    features: [
      { text: "End-to-End Assistance for All Registrations" },
      { text: "Smart Solutions Tailored to Your Business Needs" },
      { text: "100% Online and Paperless Process" },
      { text: "Quick Turnaround with Zero Hassle" },
      { text: "Dedicated Experts to Guide You at Every Step" },
    ],
  };

  return (
    <>
      <Navbar />
      <HalalHero {...heroProps} />
      <DynamicTabContent category="E-Invoice" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="halal-certificate" />
      </div>
      <FAQAccordion category="halal-certificate" />
      <Popularsearches />
      <Footer />
    </>
  );
}

