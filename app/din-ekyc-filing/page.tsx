"use client";

import React, { useState } from "react";
import {
  ChevronRight,
  ShoppingBag,
  Star,
  Plus,
  Check,
  Search,
} from "lucide-react";
import Navbar from "../components/Navbar";

/**
 * DIR-3 KYC Page with amber theme and imported Navbar
 */

const ASSETS = {
  logo: "/images/india-logo.jpg",
  heroBg: "/images/din-ekyc-hero.jpg",
  heroPortrait:
    "https://img.indiafilings.com/catalog/mca-compliance-simplified-india.webp",
  ledgers: "https://img.indiafilings.com/catalog/ledgers.png",
  whatsapp: "/images/whatsapp.svg",
  adRight1: "/images/company-compliance-ad.png",
  dinEkyc: "/images/din-ekyc-ad.png",
  cartIcon: "/images/cart-icon.svg",
  indiaFlag: "/images/india-flag.png",
  heroImage: "/images/hero.png",
  portraitImage: "/images/remove.png",
};

const POPULAR_SEARCHES = [
  "Partnership",
  "Limited Liability Partnership",
  "Digital Signature",
  "Copyright Registration",
  "Unified Portal",
  "PAN Card Download",
  "Nadakacheri",
  "Flipkart Seller",
  "Caste Certificate",
  "IAY",
  "EPFO Passbook",
  "Domicile Certificate",
  "Udyog Aadhaar",
  "PF Withdrawal",
  "Karnataka One",
  "Encumbrance Certificate",
  "Bonafide Certificate",
  "Instant PAN Card",
  "E PAN Card",
  "Income Certificate",
  "Marriage Certificate",
  "Passport Renewal",
  "Nivesh Mitra",
  "MSME Registration",
  "Experience Certificate",
  "Trademark Status",
  "Trade License",
  "Domicile",
  "eMitra",
  "UAN",
  "PICME",
  "Resignation Letter Format",
];

export default function DIR3KycPage(): React.ReactElement {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [gstChecked, setGstChecked] = useState(false);
  const [din, setDin] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [companyName, setCompanyName] = useState("");

  const faqQuestions = [
    "What is DIR-3 KYC (Application for KYC of Directors)?",
    "Who must file Form DIR-3 KYC?",
    "What is the due date for filing DIR-3 KYC?",
    "What are the types of DIR-3 KYC forms?",
    "What are the consequences of not filing DIR-3 KYC?",
    "What documents are required for filing DIR-3 KYC?",
    "How can I file DIR-3 KYC form online?",
    "What is the Service Request Number (SRN)?",
    "How can I verify if my DIR-3 KYC filing has been successful?",
    "Can I get assistance for DIR-3 KYC?",
  ];

  const faqAnswers: Record<number, string> = {
    0: "Form DIR-3 KYC is the electronic form mandated by MCA for updating KYC details of directors holding a DIN.",
    1: "Directors allotted a DIN (approved status) must file DIR-3 KYC annually.",
    2: "Generally, DIR-3 KYC must be filed by 30th September of the immediately following financial year. Late filing penalties may apply.",
    3: "DIR-3 KYC (first time or when details change) and DIR-3 KYC WEB (re-filing when no changes are required).",
    4: "Non-filing may attract penalties, DIN deactivation, and other compliance consequences.",
    5: "Typical documents: PAN card, Aadhaar, Passport (if applicable), and any supporting proofs required by MCA.",
    6: "File via MCA portal: login, provide mobile/email for OTP, fill personal details, attach DSC and submit.",
    7: "SRN (Service Request Number) is generated on successful submission — save it for tracking.",
    8: "Verify via MCA portal SRN tracking and acknowledgement emails. You can also check DIN status on MCA.",
    9: "Yes — we provide assisted filing, document checks, and end-to-end support.",
  };

  const handleAddDirector = (e?: React.MouseEvent | React.FormEvent) => {
    e?.preventDefault();
    if (!companyName.trim()) {
      window.alert("Please enter a company name before adding a director.");
      return;
    }
    window.alert(`Add Director for company: ${companyName}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Imported Navbar */}
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-white to-slate-50 py-4">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 text-sm text-gray-500">
          Home / MCA Services /{" "}
          <span className="text-amber-700 font-medium">DIR 3 KYC Filing</span>
        </div>
      </div>

      {/* Main */}
      <main className="max-w-[1180px] mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left content */}
        <section className="lg:col-span-8 space-y-6">
          {/* Director Management HERO */}
          <section
            className="relative rounded-2xl overflow-hidden"
            style={{ minHeight: 420 }}
          >
            {/* Background image + overlay */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <img
                src={ASSETS.heroImage}
                alt="hero-bg"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, rgba(2,6,23,0.7) 100%)",
                  opacity: 0.95,
                }}
              />
            </div>

            {/* Foreground content */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-4 sm:px-8">
                <div className="mx-auto max-w-[1180px] flex flex-col lg:flex-row items-center gap-8">
                  {/* Left - text card */}
                  <div className="w-full lg:w-7/12">
                    <div
                      className="bg-[rgba(0,0,0,0.45)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-6 sm:p-10 backdrop-blur-sm shadow-[0_20px_50px_rgba(2,6,23,0.6)]"
                      role="region"
                      aria-label="Director management hero"
                    >
                      {/* Badge */}
                      <div className="inline-flex items-center gap-1.5 bg-amber-500/20 border border-amber-400/30 rounded-full px-3 py-1 mb-4">
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                        <span className="text-xs font-medium text-amber-300">MCA COMPLIANCE</span>
                      </div>

                      <h1 className="text-white text-2xl sm:text-3xl lg:text-[34px] leading-tight font-semibold mb-4">
                        Director Management
                      </h1>

                      <p className="text-slate-200 text-sm sm:text-[15px] leading-relaxed mb-6">
                        Manage your company's directors effortlessly with
                        AI-assisted MCA compliance. Our intelligent system
                        ensures complete legal adherence, auto-checks
                        documentation, and provides end-to-end support for a
                        hassle-free experience.
                      </p>

                      <form
                        className="flex items-center gap-4"
                        onSubmit={handleAddDirector}
                      >
                        <div className="relative flex items-center w-full">
                          <input
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            placeholder="ENTER COMPANY NAME"
                            aria-label="Enter company name"
                            className="w-full max-w-[640px] px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-transparent text-white placeholder:text-slate-300 border border-[rgba(255,255,255,0.12)] focus:outline-none focus:ring-1 focus:ring-amber-500 text-sm sm:text-base"
                          />

                          {/* Add button */}
                          <div className="absolute right-2 top-1/2 -translate-y-1/2">
                            <button
                              type="submit"
                              onClick={handleAddDirector}
                              className="px-4 sm:px-5 py-2 sm:py-[10px] bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full text-xs sm:text-sm font-medium shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:from-amber-700 hover:to-amber-800 transition-all"
                              aria-label="Add Director"
                            >
                              Add Director
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* Right - portrait */}
                  <div className="w-full lg:w-5/12 flex justify-center lg:justify-end pr-0 lg:pr-6 mt-6 lg:mt-0">
                    <div className="relative w-[280px] sm:w-[340px]">
                      <img
                        src={ASSETS.portraitImage}
                        alt="portrait"
                        className="w-full h-auto rounded-2xl shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* soft gradient at bottom */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.18) 100%)",
                borderRadius: "1rem",
              }}
              aria-hidden
            />
          </section>

          {/* Pricing */}
          <section>
            <h2 className="text-xl sm:text-2xl text-center font-semibold">
              Simple, Transparent DIN eKYC Filing Pricing
            </h2>
            <p className="text-center text-xs sm:text-sm text-gray-600 mt-2">
              Apply for your DIR 3 KYC filing online with expert assistance and
              complete end-to-end tracking.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border-2 border-amber-200 p-6 shadow-sm hover:border-amber-300 transition-colors">
                <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-700 text-white px-3 py-1 rounded-full text-xs mb-3">
                  Most popular
                </div>
                <h3 className="font-semibold text-lg">DIN eKYC Filing</h3>
                <div className="mt-3 text-3xl font-bold">₹1,899</div>
                <button className="mt-4 w-full bg-gradient-to-r from-amber-700 to-amber-800 text-white py-3 rounded-full hover:from-amber-800 hover:to-amber-900 transition-all shadow-md hover:shadow-lg">
                  Complete eKYC
                </button>

                <ul className="mt-5 space-y-3 text-sm text-gray-600">
                  <li className="flex items-center gap-3">
                    <Check size={16} className="text-amber-600" /> LEDGERS Accounting Software - 1 Year
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={16} className="text-amber-600" /> LEDGERS Compliance Platform
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={16} className="text-amber-600" /> Dedicated Accountant
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:border-amber-200 transition-colors">
                <h3 className="font-semibold text-lg">Dual DIN eKYC Filing</h3>
                <div className="mt-3 text-3xl font-bold">₹2,899</div>
                <button className="mt-4 w-full bg-gradient-to-r from-amber-700 to-amber-800 text-white py-3 rounded-full hover:from-amber-800 hover:to-amber-900 transition-all shadow-md hover:shadow-lg">
                  Complete eKYC
                </button>

                <ul className="mt-5 space-y-3 text-sm text-gray-600">
                  <li className="flex items-center gap-3">
                    <Check size={16} className="text-amber-600" /> LEDGERS Accounting Software - 1 Year
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={16} className="text-amber-600" /> Dedicated Compliance Advisor
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={16} className="text-amber-600" /> DIN KYC for 2 Directors
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Article content */}
          <article className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <h1 className="text-xl sm:text-2xl font-semibold text-center">
              DIR 3 KYC — Application for KYC of Directors
            </h1>

            <div className="mt-4 text-sm sm:text-[15px] leading-7 text-gray-700">
              <p>
                A Director Identification Number (DIN) is a unique number
                assigned to an individual who wishes to become a director or is
                already serving as a director of a company. With MCA updates,
                every director holding a DIN must annually submit KYC details
                through Form DIR-3 KYC.
              </p>

              <h3 className="mt-6 text-base sm:text-lg font-semibold">
                What is DIR-3 KYC Form?
              </h3>
              <p className="mt-2">
                Form DIR-3 KYC is an electronic form mandated by the Ministry of
                Corporate Affairs for updating the KYC details (Know Your
                Customer) of individuals who have been allotted a DIN.
              </p>

              <h3 className="mt-6 text-base sm:text-lg font-semibold">Applicability</h3>
              <p className="mt-2">
                It is mandatory for directors allotted with a DIN whose status
                is approved to file DIR-3 KYC annually.
              </p>

              <h3 className="mt-6 text-base sm:text-lg font-semibold">DIR-3 KYC Due Date</h3>
              <p className="mt-2">
                Generally, every director must file DIR-3 KYC by 30th September
                of the immediately following financial year. Late filing
                penalties may apply.
              </p>

              <h3 className="mt-6 text-base sm:text-lg font-semibold">
                Types of e-Form DIR-3 KYC
              </h3>
              <p className="mt-2">
                DIR-3 KYC (Form) - First-time filing after a DIN is allotted or
                whenever change is required. DIR-3 KYC WEB - For directors who
                previously submitted DIR-3 KYC and only require no-change
                re-filing.
              </p>

              <h3 className="mt-6 text-base sm:text-lg font-semibold">
                Checkpoints for Filing
              </h3>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
                <li className="hover:text-amber-700 cursor-pointer transition-colors">Personal contact details (mobile and email) for OTPs</li>
                <li className="hover:text-amber-700 cursor-pointer transition-colors">
                  Director's digital signature (DSC) for signing as required
                </li>
                <li className="hover:text-amber-700 cursor-pointer transition-colors">
                  Accuracy & certification by professional (CA/CS/CMA)
                </li>
              </ul>

              <h3 className="mt-6 text-base sm:text-lg font-semibold">Documents Required</h3>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
                <li className="hover:text-amber-700 cursor-pointer transition-colors">PAN Card</li>
                <li className="hover:text-amber-700 cursor-pointer transition-colors">Aadhaar Card</li>
                <li className="hover:text-amber-700 cursor-pointer transition-colors">Passport</li>
                <li className="hover:text-amber-700 cursor-pointer transition-colors">Other supporting documents (if applicable)</li>
              </ul>

              <h3 className="mt-6 text-base sm:text-lg font-semibold">
                How to File DIR 3 KYC: Step-by-Step Guide
              </h3>
              <ol className="mt-3 list-decimal list-inside text-sm text-gray-600 space-y-2">
                <li className="hover:text-amber-700 cursor-pointer transition-colors">Visit the MCA portal and login with your credentials.</li>
                <li className="hover:text-amber-700 cursor-pointer transition-colors">
                  Provide mobile and email for OTP verification and proceed.
                </li>
                <li className="hover:text-amber-700 cursor-pointer transition-colors">Enter personal and identification details.</li>
                <li className="hover:text-amber-700 cursor-pointer transition-colors">Upload attachments & certify the e-Form using DSC.</li>
              </ol>
            </div>
          </article>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">FAQ's on DIR-3 KYC</h3>
            <div className="space-y-0">
              {faqQuestions.map((q, i) => (
                <div key={i} className="border-b last:border-b-0">
                  <button
                    className="w-full text-left py-4 flex justify-between items-center text-sm"
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    aria-expanded={faqOpen === i}
                    aria-controls={`faq-${i}`}
                  >
                    <span className="text-slate-800 hover:text-amber-700 transition-colors">{q}</span>
                    <span className="text-amber-700 flex items-center gap-2">
                      {faqOpen === i ? "−" : <Plus size={14} />}
                    </span>
                  </button>
                  {faqOpen === i && (
                    <div
                      id={`faq-${i}`}
                      className="px-2 pb-4 text-sm text-gray-600"
                    >
                      {faqAnswers[i]}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sidebar */}
        <aside className="lg:col-span-4 hidden lg:block">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-28">
            <div className="text-center text-gray-600">
              <img
                src={ASSETS.cartIcon}
                alt="cart"
                className="mx-auto h-12 w-auto mb-3"
              />
              <h3 className="font-semibold">Your cart is empty</h3>
              <p className="text-sm mt-2">
                Browse our services and add some services in cart!
              </p>
            </div>

            <div className="mt-6 text-center">
              <div className="text-sm text-gray-500">
                Existing User?{" "}
                <a className="text-amber-700 underline hover:text-amber-800 font-medium cursor-pointer">Login</a>
              </div>
            </div>

            <form
              className="mt-4 space-y-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
                placeholder="Name"
              />
              <input
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
                placeholder="Email"
              />
              <div className="flex gap-2">
                <div className="flex items-center gap-2 border border-gray-200 rounded-md px-2">
                  <img src={ASSETS.indiaFlag} alt="flag" className="h-4" />
                  <span className="text-sm">+91</span>
                </div>
                <input
                  className="flex-1 border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
                  placeholder="Phone"
                />
              </div>

              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={gstChecked}
                  onChange={() => setGstChecked((s) => !s)}
                  className="w-4 h-4 accent-amber-600"
                />
                <span>Enter GSTIN to get 18% GST Credit</span>
              </label>

              {gstChecked && (
                <input
                  className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
                  placeholder="GSTIN"
                />
              )}

              <button className="w-full bg-gradient-to-r from-amber-700 to-amber-800 text-white py-2 rounded-md font-medium flex items-center justify-center gap-2 hover:from-amber-800 hover:to-amber-900 transition-all shadow-md hover:shadow-lg">
                <ShoppingBag size={16} /> Get Started
              </button>

              <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 pt-1">
                <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Secure · No spam · Instant confirmation</span>
              </div>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <h4 className="font-semibold mb-3">Related Guides</h4>
            <ul className="text-sm space-y-2">
              <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">A Complete Guide on Director Identification Number (DIN)</li>
              <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">DIN Number Registration and Search</li>
              <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">How to Obtain DIN?</li>
              <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">Company Compliance</li>
            </ul>
          </div>

          <div className="rounded-lg overflow-hidden shadow-sm mb-4">
            <img
              src={ASSETS.adRight1}
              alt="company compliance"
              className="w-full h-56 object-cover"
            />
          </div>

          <div className="rounded-lg overflow-hidden shadow-sm mb-6">
            <img
              src={ASSETS.dinEkyc}
              alt="din ekyc"
              className="w-full h-56 object-cover"
            />
          </div>

          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold mb-3">Popular Searches</h4>
            <div className="flex flex-wrap gap-2">
              {POPULAR_SEARCHES.slice(0, 14).map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 border border-gray-200 rounded bg-white text-gray-700 hover:border-amber-300 hover:text-amber-700 cursor-pointer transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12 py-8 border-t">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 text-sm text-gray-600">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Company</h5>
              <a className="block hover:text-amber-700 cursor-pointer transition-colors">About Us</a>
              <a className="block hover:text-amber-700 cursor-pointer transition-colors">Careers</a>
              <a className="block hover:text-amber-700 cursor-pointer transition-colors">Contact Us</a>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Platforms</h5>
              <a className="block hover:text-amber-700 cursor-pointer transition-colors">Business Search</a>
              <a className="block hover:text-amber-700 cursor-pointer transition-colors">Trademark Search</a>
              <a className="block hover:text-amber-700 cursor-pointer transition-colors">Filings.AE for UAE</a>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Usage</h5>
              <a className="block hover:text-amber-700 cursor-pointer transition-colors">Terms & Conditions</a>
              <a className="block hover:text-amber-700 cursor-pointer transition-colors">Privacy Policy</a>
              <a className="block hover:text-amber-700 cursor-pointer transition-colors">Refund Policy</a>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Policies</h5>
              <a className="block hover:text-amber-700 cursor-pointer transition-colors">Confidentiality Policy</a>
              <a className="block hover:text-amber-700 cursor-pointer transition-colors">Disclaimer Policy</a>
              <a className="block hover:text-amber-700 cursor-pointer transition-colors">Reviews</a>
            </div>
          </div>

          <div className="text-center text-gray-500 mt-6">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp CTA */}
      <div className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:from-amber-700 hover:to-amber-800 transition-all cursor-pointer">
        <img src={ASSETS.whatsapp} alt="wa" className="w-5 h-5" />
        <span className="font-semibold text-xs sm:text-sm">Live Chat with Experts</span>
      </div>
    </div>
  );
}