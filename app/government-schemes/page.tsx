"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiArrowRight, FiCheckCircle, FiGift } from "react-icons/fi";

export default function GovernmentSchemes() {
  return (
    <main className="min-h-screen bg-[#F4F3EE]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C15F3C]/10 border border-[#C15F3C]/20 text-[#C15F3C] text-sm font-medium">
                <FiGift size={14} /> NSWS Benefits Section
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#2F2E2B] leading-tight">
                Government Schemes <br />
                <span className="text-[#C15F3C]">for Businesses</span>
              </h1>
              <p className="text-lg text-[#6F6B63] max-w-xl">
                Explore various central and state government schemes designed to support startups and SMEs in India. 
                Avail benefits easily via the NSWS portal.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 bg-[#C15F3C] text-white rounded-xl font-semibold hover:bg-[#A94E30] transition-all shadow-lg flex items-center gap-2 group">
                  Explore Schemes <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="w-full h-[400px] bg-[#F4F3EE] rounded-3xl shadow-2xl overflow-hidden border border-[#E5E2DA] flex items-center justify-center p-8">
                <img 
                  src="https://www.nsws.gov.in/assets/images/logo.png" 
                  alt="Government Schemes"
                  className="max-w-full h-auto object-contain opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-[#F4F3EE]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2F2E2B] mb-8">About Government Schemes</h2>
          <div className="space-y-6 text-[#6F6B63] leading-relaxed">
            <p>
              The Government of India and various state governments offer attractive schemes, subsidies, and incentives to promote entrepreneurship and innovation.
            </p>
            <p>
              Through the National Single Window System, identifying relevant schemes for your business category and sector has become significantly easier. Our platform helps you navigate these opportunities effectively.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
