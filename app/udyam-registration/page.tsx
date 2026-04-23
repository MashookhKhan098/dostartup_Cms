import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/UdyamRegistrationHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {

  const heroProps = {
    heading: "Get Your ",
    headingHighlight: "Udyam Registration",
    description: "Register your business easily with Udyam Registration (MSME). Our expert team ensures a seamless process, helping you establish your business under the Government of India's Udyam scheme and unlock exclusive benefits.",
    features: [
      { icon: "document", text: "Online Paperless Process" },
      { icon: "chart", text: "Expert Guidance at Every Step" },
      { icon: "users", text: "Dedicated Business Experts" },
      { icon: "plus", text: "Fast & Hassle-Free Processing" },
      { icon: "document", text: "100% Genuine & Verified Certification" },
    ],
    buttonText: "Apply Now",
  };

  return (
    <>
      <Navbar />
      <Hero {...heroProps} />
      <DynamicTabContent category="udyam-registration" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="udyam-registration" />
      </div>
      <FAQAccordion category="udyam-registration" />
      <Popularsearches />
      <Footer />
    </>
  );
}
