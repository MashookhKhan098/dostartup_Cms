"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ChevronRight,
  ShoppingBag,
  Star,
  Plus,
  ChevronDown,
} from "lucide-react";
import Navbar from "../components/Navbar";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "/images/FDI-filing-RBI.jpg",
  ledgers: "https://img.indiafilings.com/catalog/ledgers.png",
  whatsapp: "/images/whatsapp.svg",
  adRight1: "/images/company-compliance-ad.png",
  dinEkyc: "/images/din-ekyc-ad.png",
  cartIcon: "/images/cart-icon.svg",
  indiaFlag: "/images/india-flag.png",
  assuredBadge: "/images/assured-ledgers.png",
};

const INCOME_TAX_DROPDOWN_LINKS = [
  { title: "Income Tax E-Filing", href: "/income-tax/e-filing" },
  { title: "Business Tax Filing", href: "/income-tax/business-tax-filing" },
  {
    title: "Partnership Firm / LLP ITR",
    href: "/income-tax/partnership-llp-itr",
  },
  { title: "Company ITR Filing", href: "/income-tax/company-itr-filing" },
  { title: "Trust / NGO Tax Filing", href: "/income-tax/trust-ngo-tax-filing" },
  { title: "15CA - 15CB Filing", href: "/income-tax/15ca-15cb-filing" },
  { title: "TAN Registration", href: "/income-tax/tan-registration" },
  { title: "TDS Return Filing", href: "/income-tax/tds-return-filing" },
  { title: "Income Tax Notice", href: "/income-tax/income-tax-notice" },
];

const MCA_DROPDOWN_LINKS = [
  { title: "Company Compliance", href: "/MCA/company-compliance" },
  { title: "Director Change", href: "/MCA/director-change" },
  { title: "AOA Amendment", href: "/MCA/aoa-amendment" },
  { title: "LLP Compliance", href: "/MCA/llp-compliance" },
  { title: "Remove Director", href: "/MCA/remove-director" },
  {
    title: "Authorized Capital Increase",
    href: "/MCA/authorized-capital-increase",
  },
  { title: "OPC Compliance", href: "/MCA/opc-compliance" },
  { title: "ADT-1 Filing", href: "/MCA/adt-1-filing" },
  { title: "Share Transfer", href: "/MCA/share-transfer" },
  { title: "Name Change - Company", href: "/MCA/name-change-company" },
  { title: "DPT-3 Filing", href: "/MCA/dpt-3-filing" },
  { title: "Demat of Shares", href: "/MCA/demat-of-shares" },
  { title: "Registered Office Change", href: "/MCA/registered-office-change" },
  { title: "LLP Form 11 Filing", href: "/MCA/llp-form-11-filing" },
  { title: "Winding Up - LLP", href: "/MCA/winding-up-llp" },
  { title: "DIN eKYC Filing", href: "/MCA/din-ekyc-filing" },
  { title: "Dormant Status Filing", href: "/MCA/dormant-status-filing" },
  { title: "Winding Up - Company", href: "/MCA/winding-up-company" },
  { title: "DIN Reactivation", href: "/MCA/din-reactivation" },
  { title: "MOA Amendment", href: "/MCA/moa-amendment" },
  { title: "Commencement (INC-20A)", href: "/MCA/commencement-inc-20a" },
];

const COMPLIANCE_DROPDOWN_LINKS = [
  { title: "FDI Filing with RBI", href: "/compliance/fdi-filing-rbi" },
  { title: "FLA Return Filing", href: "/compliance/fla-return-filing" },
  { title: "FSSAI Renewal", href: "/compliance/fssai-renewal" },
  { title: "FSSAI Return Filing", href: "/compliance/fssai-return-filing" },
  { title: "Business Plan", href: "/compliance/business-plan" },
  { title: "HR & Payroll", href: "/compliance/hr-payroll" },
  { title: "PF Return Filing", href: "/compliance/pf-return-filing" },
  { title: "ESI Return Filing", href: "/compliance/esi-return-filing" },
  {
    title: "Professional Tax Return Filing",
    href: "/compliance/professional-tax-return-filing",
  },
  {
    title: "Partnership Compliance",
    href: "/compliance/partnership-compliance",
  },
  {
    title: "Proprietorship Compliance",
    href: "/compliance/proprietorship-compliance",
  },
  { title: "Bookkeeping", href: "/compliance/bookkeeping" },
  { title: "CA Support", href: "/compliance/ca-support" },
];

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
  "Ration Card",
  "TNREGINET",
  "RAJSSP",
  "LLP Compliance",
  "Form 16",
  "Police Clearance Certificate",
  "OBC Certificate",
  "Jamabandi",
  "Mee Bhoomi",
  "SC Certificate",
  "UAN Login",
  "eAadhaar Download",
  "Linking Aadhaar To Bank Accounts",
  "mAadhaar",
  "Aadhaar Enrollment Centre",
  "UAN Passbook",
  "Amazon How to Sell",
  "PAN Card Apply",
  "EPFO Unified Portal",
];

function useOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
  handler: () => void
) {
  useEffect(() => {
    const listener = (e: MouseEvent | TouchEvent) => {
      const el = ref?.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default function FdiFilingRbiPage(): React.ReactElement {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [gstChecked, setGstChecked] = useState(false);
  const [showIncomeDropdown, setShowIncomeDropdown] = useState(false);
  const [showMcaDropdown, setShowMcaDropdown] = useState(false);
  const [showComplianceDropdown, setShowComplianceDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const compRef = useRef<HTMLDivElement | null>(null);
  const incomeRef = useRef<HTMLDivElement | null>(null);
  const mcaRef = useRef<HTMLDivElement | null>(null);
  const mobileNavRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(compRef, () => setShowComplianceDropdown(false));
  useOutsideClick(incomeRef, () => setShowIncomeDropdown(false));
  useOutsideClick(mcaRef, () => setShowMcaDropdown(false));
  useOutsideClick(mobileNavRef, () => setMobileMenuOpen(false));

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setShowComplianceDropdown(false);
        setShowIncomeDropdown(false);
        setShowMcaDropdown(false);
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const faqItems = [
    "What is FDI filing with RBI?",
    "What is the purpose of FDI filing with RBI?",
    "Who is required to file for FDI with RBI?",
    "What is the format for FDI reporting to RBI?",
    "What is the timeline for FDI filing with RBI?",
    "What information is required to be submitted for FDI filing with RBI?",
    "Is there any fee for FDI filing with RBI?",
    "Can FDI filing with RBI be done online?",
    "What are the consequences of non-compliance with FDI filing with RBI?",
    "Is there any limit on the amount of FDI an Indian company can receive?",
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      {/* Navbar - Imported */}
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-5">
        <div className="max-w-[1180px] mx-auto px-6 text-sm text-gray-500">
          IndiaFilings / MCA Services /{" "}
          <span className="text-amber-700 font-medium">
            FDI filing with RBI
          </span>
        </div>
      </div>

      <main className="max-w-[1180px] mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <section className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3 flex-shrink-0">
              <div className="rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-amber-700 to-amber-800 rounded-t-lg p-4 text-white text-center">
                  <h2 className="text-2xl font-bold tracking-wide">
                    FDI filing with RBI
                  </h2>
                  <div className="text-xs mt-1 opacity-90">
                    FDI filing with RBI
                  </div>
                </div>
                <div className="bg-white px-4 py-6 flex justify-center">
                  <div className="w-44 h-44 rounded-md overflow-hidden bg-white shadow-sm flex items-center justify-center -mt-4">
                    <img
                      src={ASSETS.hero}
                      alt="FDI filing hero"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <ul className="mt-4 text-sm space-y-2 text-gray-600">
                <li className="hover:text-amber-700 cursor-pointer transition-colors">FDI filing with RBI</li>
                <li className="text-amber-700 hover:text-amber-800 cursor-pointer transition-colors">FDI filing with RBI</li>
                <li className="hover:text-amber-700 cursor-pointer transition-colors">
                  FCGPR for filing Convertible Note including CS certificate
                </li>
                <li className="text-amber-700 underline cursor-pointer hover:text-amber-800">Load More</li>
              </ul>
            </div>

            <div className="md:w-2/3 flex-1">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-2">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                    <span className="text-xs font-medium text-amber-700">RBI COMPLIANCE</span>
                  </div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    FDI filing with RBI
                  </h2>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500">(5)</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 max-w-md">
                  FCGPR for filing Convertible Note including CS certificate
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="border-2 border-dashed rounded-md border-amber-200 p-4 bg-amber-50/30 relative">
                  <div className="absolute -top-3 left-6 bg-white px-2 rounded-md text-xs text-amber-700 border border-amber-200">
                    2 Exclusive Offers
                  </div>
                  <div className="font-semibold text-slate-900">Basic</div>
                  <div className="mt-2 text-sm text-gray-600">
                    FDI Compliance Report Preparation
                    <div>Issuance and Submission</div>
                    <div>Approval and Acknowledgement Copy</div>
                  </div>
                  <div className="mt-3">
                    <button className="bg-white border-2 border-amber-600 text-amber-700 px-4 py-1.5 rounded hover:bg-amber-50 transition-colors text-sm font-medium">
                      ADD
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 border-t pt-4 text-sm flex justify-between items-center text-slate-600">
                <a className="text-amber-700 underline hover:text-amber-800 cursor-pointer">
                  Terms and conditions
                </a>
                <a className="text-amber-700 underline hover:text-amber-800 cursor-pointer">Refer a Friend</a>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-2">Offers and discounts</h4>
                <div className="p-3 border border-gray-200 rounded-lg hover:border-amber-200 transition-colors">
                  <div className="flex items-center gap-3">
                    <img
                      src={ASSETS.ledgers}
                      alt="ledgers"
                      className="h-8 w-8 object-contain"
                    />
                    <div className="text-sm">
                      <div className="text-amber-700 font-medium">
                        LEDGERS - Compliance Platform
                      </div>
                      <div className="text-gray-500 text-xs">
                        Invoicing, GST Filing, Banking and Payroll
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 p-3 border border-gray-200 rounded-lg hover:border-amber-200 transition-colors flex items-center gap-3">
                  <img
                    src={ASSETS.logo}
                    alt="save gst"
                    className="h-8 w-8 object-contain"
                  />
                  <div className="text-sm">
                    <div className="font-medium">
                      Save 18% with GST Registration
                    </div>
                    <div className="text-gray-500 text-xs">
                      Get GST eInvoice with Input Tax Credit
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <article className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-semibold text-center">
              FDI filing with RBI
            </h1>
            <div className="mt-4 text-[15px] leading-7 text-gray-700 space-y-4">
              <p>
                When a business entity in India receives Foreign Direct
                Investment (FDI) and issues shares to a foreign investor, it
                must adhere to the RBI's FDI filing requirements. This involves
                submitting the Form FCGPR through the online Foreign Investment
                Reporting and Management System (FIRMS) portal.
              </p>
              <p>
                IndiaFilings can assist you in efficiently navigating the FDI
                filing with the RBI. Our expertise ensures that your business
                complies seamlessly with all regulatory requirements. Reach out
                to us today for professional support in managing your FDI
                Filings.
              </p>
              <h3 className="mt-4 font-semibold">FDI filing with RBI</h3>
              <p>
                Foreign Direct Investment (FDI) filing refers to reporting the
                inflow of foreign investment in an Indian company to the Reserve
                Bank of India (RBI). This reporting is mandatory for Indian
                companies that receive foreign investments in equity shares,
                compulsorily convertible preference shares or debentures, and
                warrants or partly-paid shares. The reporting process involves
                submitting the Foreign Currency and General Permission Route
                (FCGPR) form and a Company Secretary (CS) certificate.
              </p>
              <h4 className="mt-4 font-semibold">
                Purpose of FDI Reporting with RBI
              </h4>
              <p>
                FDI reporting with RBI aims to ensure compliance with the FDI
                policy and provide a transparent and efficient regulatory
                framework for foreign investments in India. This helps the
                government and the RBI monitor and regulate foreign investments
                and ensure compliance with the FDI policy and regulations.
              </p>
              <h4 className="mt-4 font-semibold">
                Applicable Regulation on FDI filing with RBI
              </h4>
              <p>
                The regulations applicable to FDI filing with RBI are primarily
                governed by the Foreign Exchange Management Act, 1999 (FEMA) and
                its regulations.
              </p>
              <h4 className="mt-4 font-semibold">FCGPR Form for FDI Filing</h4>
              <p>
                The FCGPR form is used to report the receipt of foreign
                investments in the form of equity shares, warrants, or
                partly-paid shares and compulsorily convertible preference
                shares or debentures. The FCGPR form must be filed
                electronically on the RBI's FIRMS portal within 30 days of the
                receipt of the FDI.
              </p>
              <h4 className="mt-4 font-semibold">
                Due Date for Filing Form FCGPR
              </h4>
              <p>
                Form FCGPR must be filed within 30 days of the allotment of
                shares, CCPS or CCD.
              </p>
              <h4 className="mt-4 font-semibold">Documents Required</h4>
              <p>The following documents are typically required:</p>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-2">
                <li>Copy of KYC report of the remitter</li>
                <li>
                  Declaration by an authorized representative of the Indian
                  Company
                </li>
                <li>CS Certificate stating compliance</li>
                <li>Valuation report (if required)</li>
                <li>FIPB approval copy (if required)</li>
                <li>Board Resolution for allotment and list of allottees</li>
                <li>Any other documents as requested by RBI or AD bank</li>
              </ul>
              <h4 className="mt-4 font-semibold">
                Penalty for Non-Filing of Form FCGPR with RBI
              </h4>
              <p>
                Delayed reporting penalty example: 1% of the total investment
                amount (min INR 5,000, max INR 5 lakhs) per month for the first
                six months; increases thereafter. Always check RBI notifications
                for current penalty rules.
              </p>
              <h4 className="mt-4 font-semibold">Process for Filing FCGPR</h4>
              <ol className="list-decimal list-inside text-sm text-gray-600 mt-2 space-y-2">
                <li>Obtain AD (Authorized Dealer) Code from a bank.</li>
                <li>
                  Register entity on FIRMS portal and create Entity Master.
                </li>
                <li>
                  Register business users, prepare and sign the FCGPR form.
                </li>
                <li>
                  Submit the form electronically within 30 days of
                  receipt/allotment.
                </li>
                <li>
                  Download acknowledgement and follow up with the AD bank.
                </li>
              </ol>
              <p className="mt-4">
                Simplify your FDI filing with IndiaFilings — end-to-end support
                from document preparation to submission and follow-up.
              </p>
            </div>
          </article>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Related Guides</h3>
              <ul className="space-y-3 text-sm">
                <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">FDI Reporting to RBI using Form FC-GPR</li>
                <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">RBI Retail Direct Scheme</li>
                <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">Foreign Exchange Management Act, 1999</li>
                <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">Reserve Bank of India (RBI)</li>
                <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">
                  RBI allows International Trade Settlement in Indian Rupees
                </li>
                <li className="text-amber-700 hover:text-amber-800 cursor-pointer hover:underline">Foreign Investment Facilitation Portal (FIFP)</li>
              </ul>
            </div>

            <aside className="lg:col-span-5 bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">
                FAQ's on FDI filing with RBI
              </h3>
              <div className="space-y-0 text-sm">
                {faqItems.map((q, i) => (
                  <div key={q} className="border-b last:border-b-0">
                    <button
                      className="w-full text-left py-4 flex justify-between items-center text-sm"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                    >
                      <span className="text-slate-800">{q}</span>
                      <span className="text-amber-700 flex items-center gap-2">
                        {openFaq === i ? "−" : <Plus size={14} />}
                      </span>
                    </button>
                    {openFaq === i && (
                      <div className="px-2 pb-4 text-sm text-gray-600">
                        Please contact our advisors for a tailored reply or
                        consult the RBI / FEMA guidance for authoritative rules.
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-4">
                  <button className="px-4 py-2 border-2 border-amber-600 text-amber-700 rounded-md text-sm hover:bg-amber-50 transition-colors font-medium">
                    Load More
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </section>

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
            <h4 className="font-semibold mb-3">Offers and discounts</h4>
            <div className="p-3 border border-gray-200 rounded-lg hover:border-amber-200 transition-colors flex items-center gap-3">
              <img
                src={ASSETS.ledgers}
                alt="ledgers"
                className="h-8 w-8 object-contain"
              />
              <div className="text-sm">
                <div className="text-amber-700 font-medium">
                  LEDGERS - Compliance Platform
                </div>
                <div className="text-gray-500 text-xs">
                  Invoicing, GST Filing, Banking and Payroll
                </div>
              </div>
            </div>
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
              {POPULAR_SEARCHES.slice(0, 20).map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 border border-gray-200 rounded bg-white text-gray-700 hover:border-amber-300 hover:text-amber-700 cursor-pointer transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4 mt-4">
            <h4 className="font-semibold mb-3">Contact Advisor</h4>
            <p className="text-sm text-gray-600">
              Need help with FDI filings? Our advisors can assist with
              end-to-end filing and documentation.
            </p>
            <div className="mt-3">
              <button className="w-full bg-gradient-to-r from-amber-700 to-amber-800 text-white py-2 rounded-md text-sm hover:from-amber-800 hover:to-amber-900 transition-all shadow-md hover:shadow-lg">
                Schedule a Call
              </button>
            </div>
          </div>
        </aside>
      </main>

      <footer className="bg-white mt-12 py-8 border-t">
        <div className="max-w-[1180px] mx-auto px-6 text-sm text-gray-600">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">IndiaFilings</h5>
              <a className="block hover:text-amber-600">About IndiaFilings</a>
              <a className="block hover:text-amber-600">Careers</a>
              <a className="block hover:text-amber-600">Contact Us</a>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Platforms</h5>
              <a className="block hover:text-amber-600">Business Search</a>
              <a className="block hover:text-amber-600">Trademark Search</a>
              <a className="block hover:text-amber-600">Filings.AE for UAE</a>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Usage</h5>
              <a className="block hover:text-amber-600">Terms & Conditions</a>
              <a className="block hover:text-amber-600">Privacy Policy</a>
              <a className="block hover:text-amber-600">Refund Policy</a>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Policies</h5>
              <a className="block hover:text-amber-600">Confidentiality Policy</a>
              <a className="block hover:text-amber-600">Disclaimer Policy</a>
              <a className="block hover:text-amber-600">IndiaFilings Review</a>
            </div>
          </div>

          <div className="text-center text-gray-500 mt-6">
            © {new Date().getFullYear()} IndiaFilings - FDI filing with RBI
          </div>
        </div>
      </footer>

      <div className="fixed right-6 bottom-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:from-amber-700 hover:to-amber-800 transition-all cursor-pointer">
        <img src={ASSETS.whatsapp} alt="wa" className="w-5 h-5" />
        <span className="font-semibold text-sm">Live Chat with Experts</span>
      </div>
    </div>
  );
}