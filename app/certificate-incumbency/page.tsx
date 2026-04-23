import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/IncumbencyCertificateHero';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {

  const heroProps = {
    heading: "Official Corporate ",
    headingHighlight: "Certificate of Incumbency",
    description: "Apply for your Certificate of Incumbency effortlessly with the help of professional experts. We'll ensure promptly issued certificates to meet all your corporate compliance and international legal requirements.",
    features: [
      { icon: "document", text: "Certificate Signed by CA/CS" },
      { icon: "chart", text: "Board Resolution Drafting" },
      { icon: "users", text: "Document Verification" },
      { icon: "plus", text: "International Compliance Check" },
      { icon: "document", text: "Expert Legal Support" },
    ],
    buttonText: "Request Certificate",
  };

  return (
    <main className="min-h-screen bg-[#F4F3EE]">
      <Navbar />
      <Hero {...heroProps} />
      <DynamicTabContent category="certificate-incumbency" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="certificate-incumbency" />
      </div>
      <FAQAccordion category="certificate-incumbency" />
      <Popularsearches />
      <Footer />
    </main>
  );
}
