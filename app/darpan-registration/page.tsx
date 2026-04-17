import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import DarpanRegistrationHero from '../components/Registration/DarpanRegistrationHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {
  const heroProps = {
    heading: "Darpan Registration ",
    headingHighlight: "for NGOs",
    description: "Register your NGO on the Darpan portal easily to gain recognition and transparency.",
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
    <>
      <Navbar />
      <DarpanRegistrationHero {...heroProps} />
      <DynamicTabContent category="Trademark" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="darpan-registration" />
      </div>
      <FAQAccordion category="darpan-registration" />
      <Popularsearches />
      <Footer />
    </>
  );
}
