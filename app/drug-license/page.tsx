import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/DrugLicenseHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {

  const heroProps = {
    heading: "Trusted & Legal ",
    headingHighlight: "Drug License",
    description: "Obtain your Drug License easily to start manufacturing or selling medicines legally and safely, ensuring compliance with the Drugs & Cosmetics Act.",
    features: [
      { icon: "document", text: "End-to-End Assistance for All Registrations" },
      { icon: "chart", text: "Smart Solutions Tailored to Your Business Needs" },
      { icon: "plus", text: "100% Online and Paperless Process" },
      { icon: "users", text: "Quick Turnaround with Zero Hassle" },
      { icon: "document", text: "Dedicated Experts to Guide You at Every Step" },
    ],
    buttonText: "Apply Now",
  };

  return (
    <main className="min-h-screen bg-[#F4F3EE]">
      <Navbar />
      <Hero {...heroProps} />
      <DynamicTabContent category="drug-license" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="drug-license" />
      </div>
      <FAQAccordion category="drug-license" />
      <Popularsearches />
      <Footer />
    </main>
  );
}
