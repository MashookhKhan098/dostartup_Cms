import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/DigitalSignatureHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {

  const heroProps = {
    heading: "Digital Signature Certificate ",
    headingHighlight: "Made Easy",
    description: "Secure your Digital Signature Certificate quickly and reliably for smooth e-filing, compliance, and global acceptance. Authorized eMudhra Partner.",
    features: [
      { icon: "document", text: "Digital & Paperless Process" },
      { icon: "chart", text: "Secure & Verified Class 3 DSC" },
      { icon: "plus", text: "Fast Delivery Across India & Worldwide" },
      { icon: "users", text: "Authorized eMudhra Partner" },
      { icon: "document", text: "Fast & Secure DSC Processing" },
    ],
    buttonText: "Apply Now",
  };

  return (
    <>
      <Navbar />
      <Hero {...heroProps} />
      <DynamicTabContent category="digital-signature" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="digital-signature" />
      </div>
      <FAQAccordion category="digital-signature" />
      <Popularsearches />
      <Footer />
    </>
  );
}
