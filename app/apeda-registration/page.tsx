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
        imageUrl="/images/apeda-registration.png"
        title="APEDA Registration"
        rating={4.5}
        description="APEDA Registration is essential for exporters of agricultural and processed food products. Simplify the registration process and receive your RCMC certificate quickly with DoStartup expert assistance."
        exclusiveOffersCount={2}
        badgeText="GST INVOICING"
        subHeading="1 Year License"
        buttonText="ADD TO CART"
        features={[
          "Application Preparation",
          "Application Filing",
          "RCMC Number",
          "RCMC Certificate"
        ]}
        offers={[
          {
            icon: <div className="w-5 h-5 bg-[#A94E30] rounded" />,
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

      <DynamicTabContent category="apeda-registration" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="apeda-registration" />
      </div>
      <FAQAccordion category="apeda-registration" />
      <Popularsearches />
      <Footer />
    </>
  );
}
