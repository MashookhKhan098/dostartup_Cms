import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/ApedaRegistrationHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {

  const heroProps = {
    heading: "Easy & Fast ",
    headingHighlight: "APEDA Registration",
    description: "APEDA Registration is essential for exporters of agricultural and processed food products. Get your RCMC certificate quickly and start exporting with DoStartup expert assistance.",
    features: [
      { icon: "document", text: "End-to-End Assistance for APEDA Registrations" },
      { icon: "chart", text: "Fast RCMC Certificate Issuance" },
      { icon: "users", text: "100% Online and Paperless Process" },
      { icon: "plus", text: "Quick Turnaround with Zero Hassle" },
      { icon: "document", text: "Dedicated Export Compliance Experts" },
    ],
    buttonText: "Apply Now",
  };

  return (
    <>
      <Navbar />
      <Hero {...heroProps} />
      <DynamicTabContent category="apeda-registration" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="apeda-registration" />
      </div>
      <FAQAccordion category="apeda-registration" />
      <Popularsearches />
      <Footer />
    </>
  );
}
