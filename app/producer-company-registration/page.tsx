import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Startup/Hero3';
import DynamicTabContent from '../components/DynamicTabContent';

export default function Home() {
 return (
 <>
 <Navbar />
 {/* <Hero defaultEntity = "Producer"/> */}
 <Hero
 imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
 title="Producer Company"
 rating={3}
 description="Easily register a Producer company registration through DoStartup including Incorporation kit and share certificates."
 exclusiveOffersCount={3}
 features={[
 "Incorporation",
 "MCA Name Approval",
 "10 Digital Signatures",
 "Incorporation Fee",
 "Company Incorporation",
 "Share Certificate",
 "Hyper Token",
 "DSC Support & Shipping",
 "Bank Account Assistance"
 ]}
/>
 <DynamicTabContent category="Proprietorship" />
 <DynamicPricingSection />
      <FAQAccordion />
 <Popularsearches />
 <Footer />
 </>
 );
}
