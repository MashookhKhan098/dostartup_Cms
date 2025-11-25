

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Updates from "./components/Updates";
import Footer from "./components/Footer";
import Popularsearches from './components/PopularSearches';
import Partnerships from './components/Partnerships';
import Ourstory from './components/Ourstory';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Updates />
      <Ourstory />
      <Partnerships />
      <Popularsearches />
      <Footer />
      {/* More sections will go here */}
    </>
  );
}