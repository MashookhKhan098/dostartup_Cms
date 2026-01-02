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
  imageUrl="/images/apeda-registration.png"   // use your local image or CDN image
  title="APEDA Registration"
  rating={4.5}
  description="APEDA Registration is essential for exporters of agricultural and processed food products. Simplify the registration process and receive your RCMC certificate quickly with IndiaFilings expert assistance."
  exclusiveOffersCount={2}
  features={[
    "Application Preparation",
    "Application Filing",
    "RCMC Number",
    "RCMC Certificate"
  ]}
/>

      <DynamicTabContent category="E-Invoice" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}
