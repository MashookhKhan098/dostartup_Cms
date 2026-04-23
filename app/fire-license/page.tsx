import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/FireLicenseHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {

  const heroProps = {
    heading: "Secure & Fast ",
    headingHighlight: "Fire License",
    description: "Stay compliant with safety standards by obtaining your Fire License quickly and efficiently. Our experts handle the entire application process with the fire department on your behalf.",
    features: [
      { icon: "document", text: "End-to-End Assistance for All Registrations" },
      { icon: "chart", text: "Smart Solutions Tailored to Your Business Needs" },
      { icon: "users", text: "100% Online and Paperless Process" },
      { icon: "plus", text: "Quick Turnaround with Zero Hassle" },
      { icon: "document", text: "Dedicated Experts to Guide You at Every Step" },
    ],
    buttonText: "Apply Now",
  };

  return (
    <main className="min-h-screen bg-[#F4F3EE]">
      <Navbar />
      <Hero {...heroProps} />
      <DynamicTabContent category="fire-license" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="fire-license" />
      </div>
      <FAQAccordion category="fire-license" />
      <Popularsearches />
      <Footer />
    </main>
  );
}

