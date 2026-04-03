"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, Flame, Truck, CircleDot, ShieldAlert } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SLIDER_IMAGES = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
];

const PUBLIC_NOTICES = [
  "User Instruction Manual for Issue of fireworks store license up to 500 Kg is available in Download Section",
  "Revised testing/inspection charges for ISO tank containers w.e.f 15-06-2023",
  "All correspondence/applications regarding Petroleum Class C will only be accepted through online portal",
  "Integration of PESO online system with NSWS (National Single Window System) completed",
  "Aadhaar e-KYC has been made mandatory for all online applications for faster processing"
];

const MENU_ITEMS = [
  { label: "Home", href: "#" },
  { label: "About PESO", href: "#" },
  { label: "Acts & Rules", href: "#" },
  { label: "Dashboard", href: "#" },
  { label: "Services", href: "#" },
  { label: "Publications", href: "#" },
  { label: "Public Grievances", href: "#" },
  { label: "Contact Us", href: "#" }
];

const SERVICES = [
  {
    title: "Explosives",
    description: "Approval, Licensing & renewals for explosives manufacturing, storage, transport & use.",
    icon: <Flame size={24} className="text-[#C15F3C]" />
  },
  {
    title: "Petroleum",
    description: "Installations, pipelines, refining, storage and transportation of petroleum products.",
    icon: <Truck size={24} className="text-[#C15F3C]" />
  },
  {
    title: "Gas Cylinders",
    description: "Licensing for filling, storage, and import of compressed gas cylinders.",
    icon: <CircleDot size={24} className="text-[#C15F3C]" />
  },
  {
    title: "Fireworks",
    description: "Licensing for manufacturing, storage, and sale of fireworks displays.",
    icon: <ShieldAlert size={24} className="text-[#C15F3C]" />
  }
];

export default function PesoPage(): React.ReactElement {
  const [isPaused, setIsPaused] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHoveringNotice, setIsHoveringNotice] = useState(false);

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Navbar />

      {/* Main Header / Banner */}
      <div className="w-full bg-[#1e2a38] text-white py-6">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-2xl md:text-3xl font-bold">
            Petroleum and Explosives Safety Organization (PESO)
          </h1>
          <p className="text-sm mt-2 text-gray-300">
            Ensure Safety and Security of Public and Property from Fire and Explosion
          </p>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="w-full bg-[#C15F3C]">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex flex-wrap items-center list-none m-0 p-0">
            {MENU_ITEMS.map((item, index) => (
              <li key={index} className="border-r border-[#D37C5A] last:border-r-0">
                <a 
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-white hover:bg-[#A84F2E] transition-all"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Public Notice Marquee - Horizontal */}
      <div className="w-full bg-orange-50 border-b border-orange-100 px-6 py-2 overflow-hidden">
        <div className={`text-[#B14E29] font-medium text-sm whitespace-nowrap transition-transform duration-1000 ${
          !isPaused ? "animate-marquee" : ""
        }`}>
          📢 Updates: • {PUBLIC_NOTICES.join(" • ")}
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

      {/* Hero Image / Slider */}
      <div className="relative w-full bg-gray-900 h-[400px] md:h-[500px] overflow-hidden group">
        <div 
          className="flex h-full transition-transform ease-in-out"
          style={{ 
            transform: `translateX(-${(currentSlide * 100) / SLIDER_IMAGES.length}%)`,
            width: `${SLIDER_IMAGES.length * 100}%`,
            transitionDuration: '1500ms'
          }}
        >
          {SLIDER_IMAGES.map((image, index) => (
            <div
              key={index}
              className="h-full flex-shrink-0 bg-black overflow-hidden relative"
              style={{ width: `${100 / SLIDER_IMAGES.length}%` }}
            >
              <div className="absolute inset-0 bg-black/40 z-10" />
              <img
                src={image}
                alt={`PESO Slider ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
          {SLIDER_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-[#C15F3C] w-8" : "bg-white/50 hover:bg-white w-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar - Public Notices */}
          <div className="lg:col-span-1 border border-gray-200 rounded-xl overflow-hidden shadow-sm h-fit">
            <div className="bg-gray-50 border-b border-gray-200 p-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-800">Public Notices</h3>
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="text-[#C15F3C] bg-orange-100 hover:bg-orange-200 p-1.5 rounded-md transition-colors"
                title={isPaused ? "Play" : "Pause"}
              >
                {isPaused ? <Play size={16} /> : <Pause size={16} />}
              </button>
            </div>
            
            <div 
              className="h-80 overflow-hidden relative p-4 bg-white"
              onMouseEnter={() => setIsHoveringNotice(true)}
              onMouseLeave={() => setIsHoveringNotice(false)}
            >
              <div 
                className={`flex flex-col gap-6 animate-scroll-up`}
                style={{ 
                  animationPlayState: (isPaused || isHoveringNotice) ? 'paused' : 'running',
                  animationDuration: `${PUBLIC_NOTICES.length * 1.5}s` 
                }}
              >
                {[...PUBLIC_NOTICES, ...PUBLIC_NOTICES].map((notice, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {notice}
                    </p>
                    <span className="text-xs text-[#C15F3C] font-medium mt-2 inline-block">New Update</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 p-3 border-t border-gray-200 text-center">
              <a href="#" className="text-sm text-blue-600 font-medium hover:underline">View All Notices</a>
            </div>
          </div>

          {/* Right Content - About & Services */}
          <div className="lg:col-span-3 space-y-10">
            
            {/* About PESO */}
            <div className="bg-white rounded-xl">
              <h2 className="text-2xl font-bold text-[#1e2a38] mb-4 flex items-center gap-3">
                <span className="w-8 h-1 bg-[#C15F3C] rounded-full inline-block"></span>
                Welcome to PESO Online Portal
              </h2>
              <div className="text-gray-600 leading-relaxed text-sm space-y-4">
                <p>
                  The Petroleum and Explosives Safety Organization (PESO), formerly known as Department of Explosives, is the nodal organization to look after safety requirements in manufacture, storage, transport, and use of explosives and petroleum.
                </p>
                <p>
                  This portal provides a unified interface for businesses and citizens to apply for, manage, and track various licenses and approvals under the Explosives Act 1884 and Petroleum Act 1934, now integrated with the National Single Window System (NSWS) for ease of doing business.
                </p>
                <div className="pt-4 flex gap-4">
                  <button className="bg-[#C15F3C] text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-[#A84F2E] transition-colors shadow-sm">
                    Apply for License
                  </button>
                  <button className="bg-white text-[#1e2a38] border border-[#1e2a38] px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors">
                    Track Status
                  </button>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div>
              <h2 className="text-2xl font-bold text-[#1e2a38] mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-[#C15F3C] rounded-full inline-block"></span>
                Key Services & Approvals
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SERVICES.map((service, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow group bg-white">
                    <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#C15F3C] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <a href="#" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800">
                      View Documents & Fees <span className="ml-1">→</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
