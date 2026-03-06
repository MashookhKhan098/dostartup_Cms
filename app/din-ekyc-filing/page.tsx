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

/**
 * DIR-3 KYC Page (replica style) with Director Management hero
 *
 * Copy-paste ready — drop into your Next.js / React project as a page/component.
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
  // hero/portrait used in replacement hero:
  heroImage: "/images/hero.png",
  portraitImage: "/images/remove.png",
};

const NAV_ITEMS = [
  "IndiaFilings",
  "Startup",
  "Registrations",
  "Trademark",
  "GST",
  "Income Tax",
  "MCA",
  "Compliance",
  "Personal",
  "Global",
  "Cities",
  "Guides",
  "Login",
];

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

  // NEW: companyName for Director Management hero
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
    "Can I get assistance from IndiaFilings for DIR-3 KYC?",
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
    9: "Yes — IndiaFilings provides assisted filing, document checks, and end-to-end support.",
  };

  // Handler for Add Director button in the new hero
  const handleAddDirector = (e?: React.MouseEvent | React.FormEvent) => {
    e?.preventDefault();
    // Demo/fallback behavior: replace with real action (navigate, API call etc.)
    if (!companyName.trim()) {
      window.alert("Please enter a company name before adding a director.");
      return;
    }
    window.alert(`Add Director for company: ${companyName}`);
    // Reset if desired:
    // setCompanyName("");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-[1180px] mx-auto px-6 py-3 flex items-center gap-6">
          <div className="flex-shrink-0">
            <img src={ASSETS.logo} alt="IndiaFilings" className="h-10 w-auto" />
          </div>

          <nav className="hidden lg:flex gap-6 items-center text-sm text-gray-700">
            {NAV_ITEMS.slice(1, NAV_ITEMS.length - 1).map((item) => (
              <a key={item} href="#" className="hover:text-indigo-700">
                {item}
              </a>
            ))}
            <a className="hover:text-indigo-700">{NAV_ITEMS.at(-1)}</a>
          </nav>

          <div className="ml-auto flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 border rounded-full px-3 py-1 text-sm text-slate-500">
              <Search size={14} />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="outline-none text-sm bg-transparent w-40"
              />
            </div>
            <button className="px-3 py-1 border rounded-md text-sm">
              Login
            </button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-white to-slate-50 py-4">
        <div className="max-w-[1180px] mx-auto px-6 text-sm text-gray-500">
          IndiaFilings / MCA Services /{" "}
          <span className="text-indigo-600 font-medium">DIR 3 KYC Filing</span>
        </div>
      </div>

      {/* Main */}
      <main className="max-w-[1180px] mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left content */}
        <section className="lg:col-span-8 space-y-6">
          {/* === REPLACED HERO: Director Management HERO START === */}
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
              <div className="w-full px-8">
                <div className="mx-auto max-w-[1180px] flex items-center gap-8">
                  {/* Left - text card */}
                  <div className="w-7/12">
                    <div
                      className="bg-[rgba(0,0,0,0.45)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-10 backdrop-blur-sm shadow-[0_20px_50px_rgba(2,6,23,0.6)]"
                      role="region"
                      aria-label="Director management hero"
                    >
                      <h1 className="text-white text-[34px] leading-tight font-semibold mb-4">
                        Director Management
                      </h1>

                      <p className="text-slate-200 text-[15px] leading-relaxed mb-6">
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
                            className="w-full max-w-[640px] px-6 py-4 rounded-full bg-transparent text-white placeholder:text-slate-300 border border-[rgba(255,255,255,0.12)] focus:outline-none focus:ring-0"
                          />

                          {/* Add button (positioned inside input area) */}
                          <div className="absolute right-2 top-1/2 -translate-y-1/2">
                            <button
                              type="submit"
                              onClick={handleAddDirector}
                              className="px-5 py-[10px] bg-white rounded-full text-sm font-medium shadow-[0_6px_20px_rgba(0,0,0,0.25)]"
                              aria-label="Add Director"
                            >
                              Add Director
                            </button>
                          </div>

                          {/* decorative inset shadow */}
                          <div
                            className="absolute left-0 top-0 bottom-0 w-full rounded-full pointer-events-none"
                            style={{
                              boxShadow:
                                "inset 0 0 0 1px rgba(255,255,255,0.06), 0 8px 36px rgba(2,6,23,0.45)",
                            }}
                          />
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* Right - portrait / image */}
                  <div className="w-5/12 flex justify-end pr-6">
                    <div className="relative w-[340px]">
                      <img
                        src={ASSETS.portraitImage}
                        alt="portrait"
                        className="w-full h-auto rounded-2xl shadow-2xl"
                      />
                      {/* optional decorative element */}
                      <div
                        className="absolute -right-4 top-1/4 w-32 h-20 rounded-lg"
                        style={{ filter: "blur(0px)" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* soft gradient at bottom for depth */}
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
          {/* === REPLACED HERO: Director Management HERO END === */}

          {/* Pricing */}
          <section>
            <h2 className="text-2xl text-center font-semibold">
              Simple, Transparent DIN eKYC Filing Pricing
            </h2>
            <p className="text-center text-sm text-gray-600 mt-2">
              Apply for your DIR 3 KYC filing online with expert assistance and
              complete end-to-end tracking.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border-2 border-[#e6f0ff] p-6 shadow-sm">
                <div className="inline-block bg-indigo-800 text-white px-3 py-1 rounded-full text-xs mb-3">
                  Most popular
                </div>
                <h3 className="font-semibold text-lg">DIN eKYC Filing</h3>
                <div className="mt-3 text-3xl font-bold">₹1,899</div>
                <button className="mt-4 w-full bg-slate-900 text-white py-3 rounded-full">
                  Complete eKYC
                </button>

                <ul className="mt-5 space-y-3 text-sm text-gray-600">
                  <li className="flex items-center gap-3">
                    <Check size={16} /> LEDGERS Accounting Software - 1 Year
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={16} /> LEDGERS Compliance Platform
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={16} /> Dedicated Accountant
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border p-6 shadow-sm">
                <h3 className="font-semibold text-lg">Dual DIN eKYC Filing</h3>
                <div className="mt-3 text-3xl font-bold">₹2,899</div>
                <button className="mt-4 w-full bg-slate-900 text-white py-3 rounded-full">
                  Complete eKYC
                </button>

                <ul className="mt-5 space-y-3 text-sm text-gray-600">
                  <li className="flex items-center gap-3">
                    <Check size={16} /> LEDGERS Accounting Software - 1 Year
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={16} /> Dedicated Compliance Advisor
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={16} /> DIN KYC for 2 Directors
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Article content */}
          <article className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-semibold text-center">
              DIR 3 KYC — Application for KYC of Directors
            </h1>

            <div className="mt-4 text-[15px] leading-7 text-gray-700">
              <p>
                A Director Identification Number (DIN) is a unique number
                assigned to an individual who wishes to become a director or is
                already serving as a director of a company. With MCA updates,
                every director holding a DIN must annually submit KYC details
                through Form DIR-3 KYC.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                What is DIR-3 KYC Form?
              </h3>
              <p className="mt-2">
                Form DIR-3 KYC is an electronic form mandated by the Ministry of
                Corporate Affairs for updating the KYC details (Know Your
                Customer) of individuals who have been allotted a DIN.
              </p>

              <h3 className="mt-6 text-lg font-semibold">Applicability</h3>
              <p className="mt-2">
                It is mandatory for directors allotted with a DIN whose status
                is approved to file DIR-3 KYC annually.
              </p>

              <h3 className="mt-6 text-lg font-semibold">DIR-3 KYC Due Date</h3>
              <p className="mt-2">
                Generally, every director must file DIR-3 KYC by 30th September
                of the immediately following financial year. Late filing
                penalties may apply.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                Types of e-Form DIR-3 KYC
              </h3>
              <p className="mt-2">
                DIR-3 KYC (Form) - First-time filing after a DIN is allotted or
                whenever change is required. DIR-3 KYC WEB - For directors who
                previously submitted DIR-3 KYC and only require no-change
                re-filing.
              </p>

              <h3 className="mt-6 text-lg font-semibold">
                Checkpoints for Filing
              </h3>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Personal contact details (mobile and email) for OTPs</li>
                <li>
                  Director's digital signature (DSC) for signing as required
                </li>
                <li>Accuracy & certification by professional (CA/CS/CMA)</li>
              </ul>

              <h3 className="mt-6 text-lg font-semibold">Documents Required</h3>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>PAN Card</li>
                <li>Aadhaar Card</li>
                <li>Passport</li>
                <li>Other supporting documents (if applicable)</li>
              </ul>

              <h3 className="mt-6 text-lg font-semibold">
                How to File DIR 3 KYC: Step-by-Step Guide
              </h3>
              <ol className="mt-3 list-decimal list-inside text-sm text-gray-600 space-y-2">
                <li>Visit the MCA portal and login with your credentials.</li>
                <li>
                  Provide mobile and email for OTP verification and proceed.
                </li>
                <li>Enter personal and identification details.</li>
                <li>Upload attachments & certify the e-Form using DSC.</li>
              </ol>
            </div>
          </article>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">FAQ's on DIR-3 KYC</h3>
            <div className="space-y-0">
              {faqQuestions.map((q, i) => (
                <div key={i} className="border-b last:border-b-0">
                  <button
                    className="w-full text-left py-4 flex justify-between items-center text-sm"
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    aria-expanded={faqOpen === i}
                    aria-controls={`faq-${i}`}
                  >
                    <span className="text-slate-800">{q}</span>
                    <span className="text-indigo-600 flex items-center gap-2">
                      {faqOpen === i ? "-" : <Plus size={14} />}
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
                <a className="text-indigo-600 underline">Login</a>
              </div>
            </div>

            <form
              className="mt-4 space-y-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-200"
                placeholder="Name"
              />
              <input
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-200"
                placeholder="Email"
              />
              <div className="flex gap-2">
                <div className="flex items-center gap-2 border border-gray-200 rounded-md px-2">
                  <img src={ASSETS.indiaFlag} alt="flag" className="h-4" />
                  <span className="text-sm">+91</span>
                </div>
                <input
                  className="flex-1 border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-200"
                  placeholder="Phone"
                />
              </div>

              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={gstChecked}
                  onChange={() => setGstChecked((s) => !s)}
                  className="w-4 h-4"
                />
                <span>Enter GSTIN to get 18% GST Credit</span>
              </label>

              {gstChecked && (
                <input
                  className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-200"
                  placeholder="GSTIN"
                />
              )}

              <button className="w-full bg-green-500 text-white py-2 rounded-md font-medium flex items-center justify-center gap-2">
                <ShoppingBag size={16} /> Get Started
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <h4 className="font-semibold mb-3">Related Guides</h4>
            <ul className="text-sm text-indigo-600 space-y-2">
              <li>A Complete Guide on Director Identification Number (DIN)</li>
              <li>DIN Number Registration and Search</li>
              <li>How to Obtain DIN?</li>
              <li>Company Compliance</li>
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
                  className="text-xs px-3 py-1 border rounded bg-white text-gray-700"
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
        <div className="max-w-[1180px] mx-auto px-6 text-sm text-gray-600">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">IndiaFilings</h5>
              <a className="block">About IndiaFilings</a>
              <a className="block">Careers</a>
              <a className="block">Contact Us</a>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Platforms</h5>
              <a className="block">Business Search</a>
              <a className="block">Trademark Search</a>
              <a className="block">Filings.AE for UAE</a>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Usage</h5>
              <a className="block">Terms & Conditions</a>
              <a className="block">Privacy Policy</a>
              <a className="block">Refund Policy</a>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Policies</h5>
              <a className="block">Confidentiality Policy</a>
              <a className="block">Disclaimer Policy</a>
              <a className="block">IndiaFilings Review</a>
            </div>
          </div>

          <div className="text-center text-gray-500 mt-6">
            © {new Date().getFullYear()} IndiaFilings - Sample replica footer
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp CTA */}
      <div className="fixed right-6 bottom-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50">
        <img src={ASSETS.whatsapp} alt="wa" className="w-5 h-5" />
        <span className="font-semibold text-sm">Live Chat with Experts</span>
      </div>
    </div>
  );
}
