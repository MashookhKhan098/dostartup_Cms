import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import LeiCodeHero from '../components/Registration/LeiCodeHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {

const heroProps = {
  heading: "Quick & Global",
  headingHighlight: "LEI Registration",
  description:
    "Get your Legal Entity Identifier (LEI) code to meet global financial compliance standards effortlessly.",
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
      <LeiCodeHero {...heroProps}/>
      <DynamicTabContent category="Proprietorship" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="lei-code" />
      </div>
      <FAQAccordion category="lei-code" />
      <Popularsearches />
      <Footer />
    </>
  );
}

