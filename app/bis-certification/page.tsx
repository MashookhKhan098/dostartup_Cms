import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/Hero2';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
        imageUrl="/images/bis-certification.png"
        title="BIS Certification"
        rating={4.9}
        description="Get BIS Certification with DoStartup to ensure your products meet Indian safety and quality standards. Our expert team guides you through lab testing and application filing for a seamless approval process."
        exclusiveOffersCount={3}
        badgeText="PRODUCT SAFETY"
        subHeading="Quality Standard"
        buttonText="GET CERTIFIED"
        features={[
          "Consult Senior Scientist",
          "Personalised Consultation",
          "Process & Pricing Finalisation",
          "100% Refund Guarantee",
          "Application Preparation",
          "Lab Testing Support",
          "Application Filing",
          "BIS Certification"
        ]}
        offers={[
          {
            icon: <div className="w-5 h-5 bg-[#C15F3C] rounded flex items-center justify-center text-[8px] text-white font-bold">HR</div>,
            title: "LEDGERS HR Software",
            description: "Attendance, Payroll, Employee Portal & HR Compliance"
          },
          {
            icon: <div className="text-[10px] font-bold text-[#C15F3C]">GST</div>,
            title: "Save 18% with GST Registration",
            description: "Get GST invoice with Input Tax Credit"
          }
        ]}
      />

      <DynamicTabContent category="bis-certification" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="bis-certification" />
      </div>
      <FAQAccordion category="bis-certification" />
      <Popularsearches />
      <Footer />
    </>
  );
}
