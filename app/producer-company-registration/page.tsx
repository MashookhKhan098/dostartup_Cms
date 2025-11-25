import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Startup/Hero3';
import Price from '../components/Startup/Price';
import DynamicTabContent from '../components/Startup/DynamicTabContent';
import Faq from '../components/Startup/Faq';

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Hero defaultEntity = "Producer"/> */}
      <Hero
  imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
  title="Producer Company"
  rating={3}
  description="Easily register a Producer company registration through IndiaFilings including Incorporation kit and share certificates."
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
      <Price />
      <DynamicTabContent tabName="Proprietorship" />
      <Faq />
      <Popularsearches />
      <Footer />
    </>
  );
}