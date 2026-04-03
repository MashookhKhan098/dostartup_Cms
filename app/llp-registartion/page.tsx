import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popularsearches from "../components/PopularSearches";
import Hero from "../components/Startup/Hero";
import Price from "../components/Price";
import DynamicTabContent from "../components/DynamicTabContent";
import Faq from "../components/Faq";

export default function Page() {
 const serviceCategory = "proprietorship";

 return (
 <main className="min-h-screen bg-white">
 <Navbar />

 <Hero defaultEntity="LLP" />

 <Price />

 <DynamicTabContent category={serviceCategory} />

 <Faq category={serviceCategory} />

 <Popularsearches />

 <Footer />
 </main>
 );
}