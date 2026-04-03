"use client";

import React from "react";
import { Play, Pause } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SLIDER_IMAGES = [
  "/images/FDI-filing-RBI.jpg",
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/company-compliance.jpg",
  "/images/Director-Change.jpg",
  "/images/our-story.jpg",
];

const PUBLIC_NOTICES = [
  "The format of Security Clearance form has been changed and is available on the portal. Kindly upload the new form else your application will not be entertained.",
  "No physical document is required to be submitted at the time of application. All documents shall be checked at the port of final disposal.",
  "Please upload the complete application with all required documents and forms in single PDF/DOC file else it will be rejected.",
  "All FDI proposals must be submitted through the online portal only.",
];

const MENU_ITEMS = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Comprehensive Corner", href: "#" },
  { label: "Publications", href: "#" },
  { label: "Related Link", href: "#" },
  { label: "Statistics Corner", href: "#" },
  { label: "Notice", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Services", href: "#" },
];

export default function FdiFilingRbiPage(): React.ReactElement {
  const [isPaused, setIsPaused] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isHoveringNotice, setIsHoveringNotice] = React.useState(false);

  // Auto-advance slider
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 4000); // 4 second pause between transitions
    return () => clearInterval(interval);
  }, [currentSlide]);

  // Public notices are now handled via CSS animation for continuous movement
  // but we still keep isPaused logic for the animation-play-state


  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Navbar - Imported */}
      <Navbar />

      {/* FDI Portal Heading - Starts below navbar in alignment */}
      <div className="w-full bg-gradient-to-r from-blue-800 to-blue-700 text-white py-6">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-2xl font-bold">Foreign Investment Facilitation Portal</h1>
        </div>
      </div>

      {/* Orange Menu Bar */}
      <div className="w-full bg-orange-500">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex flex-wrap items-center list-none m-0 p-0">
            {MENU_ITEMS.map((item, index) => (
              <li key={index} className="border-r border-orange-400 last:border-r-0">
                <a 
                  href={item.href}
                  className="block px-4 py-2.5 text-xs font-medium text-gray-800 hover:bg-orange-600 hover:text-white transition-all"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Red Public Notice Banner - Scrolling */}
      <div 
        className="w-full bg-gray-100 border-b border-gray-300 px-6 py-1.5 overflow-hidden"
      >
        <div className={`text-red-600 font-semibold text-sm whitespace-nowrap transition-transform duration-1000 ${
          !isPaused ? "animate-marquee" : ""
        }`}>
          📢 Public Notice: 1. No physical document is required • 2. Security Clearance form format changed • 3. Upload complete application in single PDF file
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
        
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll-up {
          animation: scroll-up 10s linear infinite;
        }
      `}</style>

      {/* Full-Width Slider Section - Improved spacing and fit */}
      <div className="relative w-full bg-gray-900 h-[750px] overflow-hidden group border-b border-gray-200 shadow-inner">
        {/* Slider Container */}
        <div 
          className="flex h-full transition-transform ease-in-out"
          style={{ 
            transform: `translateX(-${(currentSlide * 100) / SLIDER_IMAGES.length}%)`,
            width: `${SLIDER_IMAGES.length * 100}%`,
            transitionDuration: '2000ms'
          }}
        >
          {SLIDER_IMAGES.map((image, index) => (
            <div
              key={index}
              className="h-full flex-shrink-0 bg-black overflow-hidden"
              style={{ width: `${100 / SLIDER_IMAGES.length}%` }}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Slide Indicators - Modern minimalist style on dark background */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-2xl">
          {SLIDER_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-10 shadow-[0_0_10px_rgba(255,255,255,0.4)]" : "bg-white/30 hover:bg-white/60 w-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Public Notice and Welcome Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Public Notice - Left Column */}
          <div className="lg:col-span-1">
            <div
              className="bg-white border border-gray-200 rounded-lg p-6 h-full"
              onMouseEnter={() => setIsHoveringNotice(true)}
              onMouseLeave={() => setIsHoveringNotice(false)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">Public Notice</h3>
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium flex items-center gap-2"
                >
                  {isPaused ? <Play size={14} /> : <Pause size={14} />}
                  {isPaused ? "Play" : "Pause"}
                </button>
              </div>

              {/* Auto-scrolling Notice Container */}
              <div 
                className="h-64 mt-2 overflow-hidden relative border-t border-gray-100 pt-4"
                onMouseEnter={() => setIsHoveringNotice(true)}
                onMouseLeave={() => setIsHoveringNotice(false)}
              >
                <div 
                  className={`flex flex-col gap-6 animate-scroll-up`}
                  style={{ 
                    animationPlayState: (isPaused || isHoveringNotice) ? 'paused' : 'running',
                    // Total duration adjusted to feel like ~1.5s per notice transition
                    animationDuration: `${PUBLIC_NOTICES.length * 1.5}s` 
                  }}
                >
                  {[...PUBLIC_NOTICES, ...PUBLIC_NOTICES].map((notice, index) => (
                    <div key={index} className="pr-4 border-b border-gray-50 pb-4 last:border-0">
                      <p className="font-semibold mb-1 text-gray-900 text-sm">
                        {(index % PUBLIC_NOTICES.length) + 1}. {notice.split(' ').slice(0, 8).join(' ')}...
                      </p>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        {notice}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Welcome Content - Right Column (2 cols) */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Welcome to Foreign Investment Facilitation Portal (FIFP), INDIA
              </h2>

              <div className="text-gray-700 leading-relaxed space-y-4 text-sm">
                <p>
                  The Foreign Investment Facilitation Portal{" "}
                  <span className="font-bold">(FIFP)</span> is the new online
                  single point interface of the Government of India for investors
                  to facilitate Foreign Direct Investment. This portal is being
                  administered by the Department for Promotion of Industry and
                  Internal Trade (DPIIT), Ministry of Commerce & Industry. This
                  portal will continue to facilitate the single window clearance
                  of applications which are through approval route. Upon receipt
                  of the FDI application, the Competent Administrative
                  Ministry/Department shall process the application as per the
                  <span className="font-bold">
                    {" "}
                    Standard Operation Procedure (SOP)
                  </span>
                  . The additional features such as e-communication, quicker
                  processing, reduced paperwork, SMS/email alert and many more
                  continue to exist. Before you log in for the online application
                  form, please take some time off to{" "}
                  <span className="text-blue-600 cursor-pointer underline">
                    register on portal
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Red Banner Section */}
        <div className="mb-12 py-6 border-t-4 border-b-4 border-red-600 bg-red-50">
          <h3 className="text-center text-lg font-bold text-red-600">
            List of Competent Authority of Administrative Ministries for FDI Proposals
          </h3>
        </div>

        {/* About Us and Featured Links */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">About Us</h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              The Foreign Investment Facilitation Portal (FIFP) is the new online
              single point interface of the Government of India for investors to
              facilitate Foreign Direct Investment.
            </p>
          </div>

          {/* Featured Links */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Featured Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Home Page
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  RBI Notifications
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
