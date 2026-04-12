import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/Hero2';
import DynamicTabContent from '../components/DynamicTabContent';
// 
export default function Home() {

 return (
 <>
 <Navbar />
 <Hero
 imageUrl="/images/apeda-registration.png" // use your local image or CDN image
 title="APEDA Registration"
 rating={4.5}
 description="APEDA Registration is essential for exporters of agricultural and processed food products. Simplify the registration process and receive your RCMC certificate quickly with DoStartup expert assistance."
 exclusiveOffersCount={2}
 features={[
 "Application Preparation",
 "Application Filing",
 "RCMC Number",
 "RCMC Certificate"
 ]}
/>

 <DynamicTabContent category="E-Invoice" />
 <div className="bg-[#F4F3EE] py-8">
   <DynamicPricingSection category="apeda-registration" />
 </div>
 <FAQAccordion category="apeda-registration" />
 <Popularsearches />
 <Footer />
 </>
 );
}

