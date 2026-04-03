import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import UpdatesAndDueDates from "./components/Updates";
import OurStory from "./components/Ourstory";
import Partnerships from "./components/Partnerships";
import PopularSearches from "./components/PopularSearches";
import Footer from "./components/Footer";

export default function Home() {
 return (
 <main className="min-h-screen bg-white">
 <Navbar />
 <Hero />
 <Services />
 <UpdatesAndDueDates />
 <OurStory />
 <Partnerships />
 <PopularSearches />
 <Footer />
 </main>
 );
}