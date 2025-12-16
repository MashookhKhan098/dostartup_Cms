import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Updates from "./components/Updates";
import Footer from "./components/Footer";
import Popularsearches from "./components/PopularSearches";
import Partnership from "./components/Partnership";
import Ourstory from "./components/Ourstory";
import MCA from "./MCA/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Updates />
      <Ourstory />
      <Partnership />
      <Popularsearches />
      {/* Uncomment if you want to render the MCA page component here */}
      {/* <MCA /> */}
      <Footer />
      {/* More sections will go here */}
    </>
  );
}
