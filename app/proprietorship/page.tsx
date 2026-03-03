import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from '../components/Startup/Hero';
import DynamicTabContent from '../components/DynamicTabContent';
import Faq from '../components/Faq';

export default function Page() {
  // Change this to "gst", "trademark", or "startup" as needed
  const serviceCategory = "proprietorship"; 

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero defaultEntity="Proprietorship"/>
      
      {/* Both components now use the same variable */}
      <DynamicTabContent category={serviceCategory} />
      <Faq category={serviceCategory} />
      
      <Footer />
    </main>
  );
}