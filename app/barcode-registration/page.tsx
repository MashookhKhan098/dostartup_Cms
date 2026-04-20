import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import BarcodeRegistrationHero from '../components/Registration/BarcodeRegistrationHero';
import DynamicTabContent from '../components/DynamicTabContent';
// 
export default function Home() {
const heroProps = {
  // ================= LEFT SIDE =================
  heading: "Barcode Registration ",
  headingHighlight: "for Businesses",
  description:
  "Get your products globally recognized with seamless Barcode Registration. Ensure faster market entry, product authenticity, and compliance with expert-assisted GS1 barcode services.",

  features: [
  {
  icon: "document",
  text: "Affordable & Transparent Registration Plans",
  },
  {
  icon: "chart",
  text: "GS1-Compliant Barcode Generation with Expert Support",
  },
  {
  icon: "users",
  text: "End-to-End Documentation & Application Handling",
  },
  {
  icon: "plus",
  text: "Quick Approval & Digital Delivery of Barcodes",
  },
  {
  icon: "document",
  text: "Trusted by Over 1 Lakh Manufacturers and Retailers",
  },
  ],

  buttonText: "Apply Now",
};






  return (
  <>
  <Navbar />
  <BarcodeRegistrationHero {...heroProps}/>
 <DynamicTabContent category="E-Invoice" />
 <div className="bg-[#F4F3EE] py-8">
   <DynamicPricingSection category="barcode-registration" />
 </div>
 <FAQAccordion category="barcode-registration" />
 <Popularsearches />
 <Footer />
 </>
 );
}

