import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import ImportExportHero from '../components/Registration/ImportExportHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {
  const heroProps = {
    heading: "Simple & Quick",
    headingHighlight: "Import Export Code",
    description: "Get your Import Export Code fast and start your import/export business with ease. Our experts guide you step by step for a smooth and compliant process.",
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
      <ImportExportHero {...heroProps} />
      <DynamicTabContent category="E-Invoice" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="import-export-code" />
      </div>
      <FAQAccordion category="import-export-code" />
      <Popularsearches />
      <Footer />
    </>
  );
}

