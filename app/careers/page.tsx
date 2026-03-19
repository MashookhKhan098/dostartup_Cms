"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function CareersPage() {
  return (
    <>
      <Navbar />

      <section className="bg-[#F4F3EE] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Careers at DoStartup
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our team and help simplify business compliance for thousands of startups across India.
            </p>
          </div>

          {/* Intro */}
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mb-8">
            <p className="text-gray-700 leading-relaxed">
              At <span className="text-[#C15F3C] font-semibold">DoStartup</span>, we’re building a platform that empowers entrepreneurs. 
              We’re looking for passionate, driven individuals who want to make an impact in the startup ecosystem.
            </p>
          </div>

          {/* Why Work With Us */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#B1ADA1]/40">
              <h3 className="text-lg font-semibold text-[#C15F3C] mb-2">
                Growth Opportunities
              </h3>
              <p className="text-sm text-gray-600">
                Learn, grow, and advance your career with real-world challenges.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#B1ADA1]/40">
              <h3 className="text-lg font-semibold text-[#C15F3C] mb-2">
                Startup Environment
              </h3>
              <p className="text-sm text-gray-600">
                Work in a fast-paced environment where your ideas matter.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#B1ADA1]/40">
              <h3 className="text-lg font-semibold text-[#C15F3C] mb-2">
                Meaningful Impact
              </h3>
              <p className="text-sm text-gray-600">
                Help thousands of entrepreneurs start and grow their businesses.
              </p>
            </div>

          </div>

          {/* Open Positions */}
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Open Positions
            </h2>

            <div className="space-y-4">

              {/* Job 1 */}
              <div className="border border-[#B1ADA1]/40 rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    Frontend Developer
                  </h4>
                  <p className="text-xs text-gray-500">
                    Remote • Full Time
                  </p>
                </div>
                <button className="bg-[#C15F3C] hover:bg-[#a94f30] text-white text-xs px-4 py-2 rounded-lg">
                  Apply Now
                </button>
              </div>

              {/* Job 2 */}
              <div className="border border-[#B1ADA1]/40 rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    Business Consultant
                  </h4>
                  <p className="text-xs text-gray-500">
                    On-site • Full Time
                  </p>
                </div>
                <button className="bg-[#C15F3C] hover:bg-[#a94f30] text-white text-xs px-4 py-2 rounded-lg">
                  Apply Now
                </button>
              </div>

              {/* Job 3 */}
              <div className="border border-[#B1ADA1]/40 rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    Customer Support Executive
                  </h4>
                  <p className="text-xs text-gray-500">
                    Remote • Part Time
                  </p>
                </div>
                <button className="bg-[#C15F3C] hover:bg-[#a94f30] text-white text-xs px-4 py-2 rounded-lg">
                  Apply Now
                </button>
              </div>

            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Don’t see a role that fits?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Send us your resume and we’ll get in touch when a suitable opportunity opens up.
            </p>

            <button className="bg-[#C15F3C] hover:bg-[#a94f30] text-white text-sm font-medium px-6 py-2 rounded-lg transition">
              Send Resume
            </button>
          </div>

        </div>
      </section>
       <Footer />

    </>
  );
}