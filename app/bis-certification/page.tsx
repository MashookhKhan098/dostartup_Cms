import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Registration/Hero2';
import DynamicTabContent from '../components/DynamicTabContent';
import Faq from '../components/Faq';
// import Price from '../components/Price';

export default function Home() {

  return (
    <>
      <Navbar />
      <Hero
  imageUrl="/images/apeda-registration.png"   // replace with your actual image path or CDN URL
  title="BIS Registration"
  rating={5}
  description="Get BIS Certification with IndiaFilings to ensure your products meet Indian safety and quality standards."
  exclusiveOffersCount={2}
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
/>

      <DynamicTabContent category="E-Invoice" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}
