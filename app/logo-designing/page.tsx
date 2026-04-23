import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/LogoDesignHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {

  const heroProps = {
    heading: "Build your brand with a ",
    headingHighlight: "Unique Logo Design",
    description: "Your logo is the face of your business. Our creative designers craft custom, iconic logos that capture your brand's essence and leave a lasting impression. From minimalist icons to complex emblems, we provide professional branding solutions tailored to your vision.",
    features: [
      { icon: "document", text: "100% Custom & Original Designs" },
      { icon: "chart", text: "Multiple Design Concepts" },
      { icon: "users", text: "Unlimited Revisions" },
      { icon: "plus", text: "High-Resolution Source Files" },
      { icon: "document", text: "Full Copyright Ownership" },
    ],
    buttonText: "Start Your Design",
  };

  return (
    <>
      <Navbar />
      <Hero {...heroProps} />
      <DynamicTabContent category="logo-designing" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="logo-designing" />
      </div>
      <FAQAccordion category="logo-designing" />
      <Popularsearches />
      <Footer />
    </>
  );
}
