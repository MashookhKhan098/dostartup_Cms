import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from '../components/Trademark/Hero2';
import DynamicTabContent from '../components/DynamicTabContent';
import Faq from '../components/Faq';

export default function TrademarkPage() {
  // MATCHING LOGIC: "trademark" will match "Trademark" in your CMS
  const serviceCategory = "trademark"; 

  const heroProps = {
    heading: "Protect Your Brand. File Your Trademark.",
    headingHighlight: "Brand",
    description: "AI-powered brand monitoring software trusted by India's top brands.",
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero features={undefined} tabs={undefined} defaultTab={undefined} tabDescriptions={undefined} formFields={undefined} buttonText={undefined} onSubmit={undefined} {...heroProps} />
      
      {/* Fetches long-form content from Cockpit */}
      <DynamicTabContent category={serviceCategory} />
      
      {/* Fetches FAQs from Cockpit */}
      <Faq category={serviceCategory} />
      
      <Footer />
    </main>
  );
}