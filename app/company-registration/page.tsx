import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from '../components/PopularSearches';
import Hero from '../components/Startup/Hero';
import Price from '../components/Price';
import DynamicTabContent from '../components/DynamicTabContent';
import FAQAccordion from '../components/Faq';

export default function Home() {
  // Pass the identifier here. 
  // Code now handles 'GST' vs 'gst' automatically.
  const serviceCategory = "GST"; 

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero defaultEntity="GST Registration" />
      <Price />
      
      {/* Content from Cockpit */}
      <DynamicTabContent category={serviceCategory} />
      
      {/* FAQ from Cockpit */}
      <FAQAccordion category={serviceCategory} />
      
      <Popularsearches />
      <Footer />
    </main>
  );
}