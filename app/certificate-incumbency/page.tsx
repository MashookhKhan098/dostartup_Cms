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
        imageUrl="/images/certificate-of-incumbency.png"
        title="Certificate of Incumbency"
        rating={4.9}
        description="Apply for your Certificate of Incumbency effortlessly with the help of professional experts. We'll ensure promptly issued certificates to meet all your corporate compliance and international legal requirements."
        exclusiveOffersCount={2}
        badgeText="CORPORATE COMPLIANCE"
        subHeading="Official Verification"
        buttonText="REQUEST CERTIFICATE"
        features={[
          "Certificate Signed by CA/CS",
          "Board Resolution Drafting",
          "Document Verification",
          "International Compliance Check",
          "Priority Processing",
          "Expert Legal Support",
          "100% Refund Guarantee"
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

      <DynamicTabContent category="certificate-incumbency" />
      <div className="bg-[#F4F3EE] py-8">
        <DynamicPricingSection category="certificate-incumbency" />
      </div>
      <FAQAccordion category="certificate-incumbency" />
      <Popularsearches />
      <Footer />
    </>
  );
}
