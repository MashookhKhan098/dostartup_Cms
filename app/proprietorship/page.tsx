import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Startup/Hero';
import Price from '../components/Price';
import DynamicTabContent from '../components/DynamicTabContent';
import Faq from '../components/Faq';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero defaultEntity = "Proprietorship"/>
      <Price category="registration"/>
      {/* gst, registration, startup, */}
      <DynamicTabContent category="GST" />
      {/* E-Invoice, GST, GST Registration, Partnership, Proprietorship, Startup, Trademark */}
      <Faq category="startup"/>
      {/* gst, registration, startup, trademark */}
      <Popularsearches />
      <Footer />
    </>
  );
}