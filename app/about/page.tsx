"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function AboutPage() {
  return (
    <>
      <Navbar />

      <section className="bg-[#F4F3EE] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About DoStartup
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simplifying business registration, compliance, and legal processes
              for startups and growing businesses across India.
            </p>
          </div>

          {/* Intro */}
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mb-8">
            <p className="text-gray-700 leading-relaxed">
              At <span className="text-[#C15F3C] font-semibold">DoStartup</span>, we are dedicated to helping entrepreneurs
              start, manage, and grow their businesses without the stress of legal
              and regulatory complexities. Our platform provides expert guidance,
              fast processing, and reliable support to ensure your business stays
              compliant and efficient.
            </p>
          </div>

          {/* Mission / Vision / Values */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#B1ADA1]/40">
              <h3 className="text-lg font-semibold text-[#C15F3C] mb-2">
                Our Mission
              </h3>
              <p className="text-sm text-gray-600">
                To simplify business compliance so entrepreneurs can focus on
                building and scaling their ventures.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#B1ADA1]/40">
              <h3 className="text-lg font-semibold text-[#C15F3C] mb-2">
                Our Vision
              </h3>
              <p className="text-sm text-gray-600">
                To become India’s most trusted platform for business registration
                and compliance services.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#B1ADA1]/40">
              <h3 className="text-lg font-semibold text-[#C15F3C] mb-2">
                Our Values
              </h3>
              <p className="text-sm text-gray-600">
                Transparency, expertise, customer-first approach, and continuous
                innovation.
              </p>
            </div>

          </div>

          {/* Stats */}
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mb-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

              <div>
                <p className="text-2xl font-bold text-[#C15F3C]">2000+</p>
                <p className="text-xs text-gray-500 mt-1">Startups Registered</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[#C15F3C]">1500+</p>
                <p className="text-xs text-gray-500 mt-1">MSME / IEC Certifications</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[#C15F3C]">500+</p>
                <p className="text-xs text-gray-500 mt-1">GST Filings</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[#C15F3C]">100+</p>
                <p className="text-xs text-gray-500 mt-1">Licenses Delivered</p>
              </div>

            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Why Choose Us
            </h2>

            <div className="grid md:grid-cols-4 gap-6">

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#B1ADA1]/40 text-center">
                <h4 className="text-sm font-semibold text-[#C15F3C] mb-2">
                  Expert Guidance
                </h4>
                <p className="text-xs text-gray-600">
                  Experienced professionals to guide you at every step.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#B1ADA1]/40 text-center">
                <h4 className="text-sm font-semibold text-[#C15F3C] mb-2">
                  Fast Processing
                </h4>
                <p className="text-xs text-gray-600">
                  Quick turnaround time without compromising quality.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#B1ADA1]/40 text-center">
                <h4 className="text-sm font-semibold text-[#C15F3C] mb-2">
                  Affordable Pricing
                </h4>
                <p className="text-xs text-gray-600">
                  Transparent pricing with no hidden charges.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#B1ADA1]/40 text-center">
                <h4 className="text-sm font-semibold text-[#C15F3C] mb-2">
                  Reliable Support
                </h4>
                <p className="text-xs text-gray-600">
                  Dedicated support team ready to assist you anytime.
                </p>
              </div>

            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Ready to Start Your Business?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Get expert help and make your business legally compliant today.
            </p>

            <button className="bg-[#C15F3C] hover:bg-[#a94f30] text-white text-sm font-medium px-6 py-2 rounded-lg transition">
              Get Started
            </button>
          </div>

        </div>
      </section>
        <Footer />
    </>
  );
}