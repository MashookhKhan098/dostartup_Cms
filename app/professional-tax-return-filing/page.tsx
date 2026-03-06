"use client";

import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, CheckCircle } from "lucide-react";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "/images/professional-tax-hero.png",
  whatsapp: "/images/whatsapp.svg",
  footerBg: "/images/footer-bg.png",
};

const STATES_UTS = [
  "Andhra Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Gujarat",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "West Bengal",
  "Delhi",
  "Puducherry",
  "Chandigarh",
  "Andaman and Nicobar Islands",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Ladakh",
  "Jammu & Kashmir",
];

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
  handler: () => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref?.current;
      if (!el || el.contains(event.target as Node)) return;
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, ref]);
}

const StateDropdown: React.FC<{
  value: string | null;
  onChange: (v: string) => void;
}> = ({ value, onChange }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<string[]>(STATES_UTS);

  useOnClickOutside(ref, () => {
    setOpen(false);
    setQuery("");
    setFiltered(STATES_UTS);
  });

  useEffect(() => {
    setFiltered(
      STATES_UTS.filter((s) =>
        s.toLowerCase().includes(query.trim().toLowerCase())
      )
    );
  }, [query]);

  return (
    <div ref={ref} className="relative">
      <label className="block text-sm font-medium text-slate-700 mb-2">
        State
      </label>
      <div>
        <button
          onClick={() => setOpen((s) => !s)}
          className="w-full text-left px-4 py-2 border border-gray-200 rounded bg-white flex items-center justify-between"
          aria-haspopup
          aria-expanded={open}
        >
          <span className="truncate text-slate-600">
            {value ?? "Select State/UT"}
          </span>
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </button>
      </div>

      {open && (
        <div className="absolute mt-2 w-full bg-white border border-slate-200 rounded shadow-lg z-40">
          <div className="p-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-3 py-2 border rounded text-sm"
              placeholder="Search State/UT..."
            />
          </div>
          <div className="max-h-40 overflow-auto divide-y">
            {filtered.map((s) => (
              <button
                key={s}
                onClick={() => {
                  onChange(s);
                  setOpen(false);
                  setQuery("");
                }}
                className="w-full text-left px-4 py-2 hover:bg-slate-50 text-sm text-slate-700"
                role="option"
                aria-selected={value === s}
              >
                {s}
              </button>
            ))}
            {filtered.length === 0 && (
              <div className="px-4 py-3 text-sm text-slate-500">No results</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const ProfessionalTaxDropdown: React.FC<{
  value: string | null;
  onChange: (v: string) => void;
}> = ({ value, onChange }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const OPTIONS = [
    "Professional Tax Registration Certificate",
    "Professional Tax Registration Return Filing",
    "Professional Tax Registration Cancellation",
  ];
  useOnClickOutside(ref, () => setOpen(false));
  return (
    <div ref={ref} className="relative">
      <label className="block text-sm font-medium text-slate-700 mb-2">
        Professional Tax
      </label>
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full text-left px-4 py-2 border border-gray-200 rounded bg-white flex items-center justify-between"
        aria-haspopup
        aria-expanded={open}
      >
        <span className="truncate text-slate-600">
          {value ?? "Select Professional Tax..."}
        </span>
        <ChevronDown className="w-4 h-4 text-slate-400" />
      </button>
      {open && (
        <div className="absolute z-40 mt-2 w-full bg-white border border-slate-200 rounded shadow-lg">
          <div className="px-3 py-2 text-xs text-slate-400">
            Select Professional Tax...
          </div>
          <div className="py-1 max-h-48 overflow-auto">
            {OPTIONS.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                // IMPORTANT: only apply hover blue; selected displays as font-medium + a subtle indicator
                className={`w-full text-left px-4 py-3 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-between ${
                  value === opt
                    ? "font-medium text-slate-800"
                    : "text-slate-700"
                }`}
                role="option"
                aria-selected={value === opt}
              >
                <span>{opt}</span>
                {value === opt && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Header: React.FC = () => (
  <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-3">
          <img src={ASSETS.logo} alt="IndiaFilings" className="h-10 w-auto" />
          <span className="hidden sm:inline font-semibold text-slate-800">
            IndiaFilings
          </span>
        </a>
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/registrations"
            className="text-sm text-slate-700 hover:text-slate-900"
          >
            Registrations
          </a>
          <a href="/login" className="text-sm border px-3 py-1 rounded">
            Login
          </a>
        </div>
      </div>
    </div>
  </header>
);

const Footer: React.FC = () => (
  <footer className="pt-10 pb-6 bg-[#f8fafc]">
    <div className="max-w-[1200px] mx-auto px-4 text-sm text-slate-600">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          © {new Date().getFullYear()} IndiaFilings. All Rights Reserved.
        </div>
        <div className="flex gap-4">
          <a href="/termsconditions">Terms &amp; Conditions</a>
          <a href="/privacypolicy">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function ProfessionalTaxReturnPage(): React.ReactElement {
  const [state, setState] = useState<string | null>(null);
  const [panOrGstin, setPanOrGstin] = useState("");
  const [ptNumber, setPtNumber] = useState("");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [professionalTaxOption, setProfessionalTaxOption] = useState<
    string | null
  >("Professional Tax Registration Return Filing");

  function handleApplyNow() {
    if (!state) {
      alert("Please select State/UT");
      return;
    }
    if (!panOrGstin.trim()) {
      alert("Please enter PAN / GSTIN");
      return;
    }
    alert(
      `Apply Now submitted\nType: ${professionalTaxOption}\nState: ${state}\nPAN/GSTIN: ${panOrGstin}\nPT No: ${ptNumber}`
    );
  }

  const faqList = [
    "What is a professional tax return?",
    "How often do I need to file professional tax returns?",
    "When is the professional tax return due date?",
    "What happens if I fail to file professional tax returns on time?",
    "Can I file professional tax returns online?",
    "What documents are required for filing professional tax returns?",
    "How do I calculate the professional tax payable for a particular period?",
    "Is there any penalty for the late filing of professional tax returns?",
    "Can I revise my professional tax returns?",
    "What happens if I overpay professional tax?",
  ];

  return (
    <div className="min-h-screen bg-[#f3f4f6]">
      <Head>
        <title>Professional Tax Return Filing - IndiaFilings</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <section className="pt-10 pb-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="pt-6">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-[#0b2545]">
                File Your{" "}
                <span className="text-blue-600 underline decoration-yellow-300">
                  Professional
                </span>
                <br />
                Tax Return On Time
              </h1>

              <p className="text-slate-600 mb-6 max-w-xl">
                Stay compliant with expert-assisted PT Return Filing. Ensure
                timely submission, avoid penalties, and keep your business
                compliant with state PT regulations.
              </p>

              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-400 text-white">
                    ✓
                  </div>
                  <span className="font-medium">
                    Accurate &amp; On-Time Filing
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-400 text-white">
                    ✓
                  </div>
                  <span className="font-medium">
                    PTEC &amp; PTRC Return Assistance
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-400 text-white">
                    ✓
                  </div>
                  <span className="font-medium">
                    Simplified Filing with Expert Support
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-400 text-white">
                    ✓
                  </div>
                  <span className="font-medium">
                    Ensure Error-Free Government Submissions
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-400 text-white">
                    ✓
                  </div>
                  <span className="font-medium">
                    Trusted by 1 Lakh+ Businesses
                  </span>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div
                className="absolute -top-6 left-0 right-0 h-[220px] rounded-xl overflow-hidden hidden lg:block"
                aria-hidden
              >
                <img
                  src={ASSETS.hero}
                  alt="Professional Tax hero"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 relative z-20 lg:mt-36">
                <div
                  className="absolute -top-4 left-6 right-6 h-4 rounded-t-xl"
                  style={{
                    background:
                      "linear-gradient(90deg,#2563eb,#06b6d4,#06b6d4)",
                  }}
                />

                <div className="space-y-4 mt-3">
                  <ProfessionalTaxDropdown
                    value={professionalTaxOption}
                    onChange={(v) => setProfessionalTaxOption(v)}
                  />

                  <div>
                    <p className="text-xs text-slate-500 mt-2">
                      File your Professional Tax Return on time by reporting
                      employee deductions or nil returns. Submit payment details
                      for the selected period to stay compliant.
                    </p>
                  </div>

                  <StateDropdown value={state} onChange={(v) => setState(v)} />

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      PAN or GSTIN
                    </label>
                    <input
                      type="text"
                      value={panOrGstin}
                      onChange={(e) => setPanOrGstin(e.target.value)}
                      placeholder="PAN or GSTIN"
                      className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-blue-400 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      PT Number (optional)
                    </label>
                    <input
                      type="text"
                      value={ptNumber}
                      onChange={(e) => setPtNumber(e.target.value)}
                      placeholder="PT Number (optional)"
                      className="w-full px-4 py-2 border border-gray-200 rounded bg-white text-slate-700"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleApplyNow}
                      className="px-6 py-3 rounded bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-semibold shadow"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block absolute right-0 top-full w-8 h-8 rounded-full bg-white opacity-40 transform translate-y-8 -z-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <main className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <nav className="text-sm text-gray-500 mb-2">
                  IndiaFilings / MCA Services /{" "}
                  <span className="text-indigo-600">
                    Professional Tax Return Filing
                  </span>
                </nav>

                <h2 className="text-2xl font-bold mb-3">
                  Professional Tax Return Filing
                </h2>

                <p className="text-slate-700 mb-4">
                  Professional Tax Return Filing is mandatory for individuals
                  and businesses liable to pay Professional Tax. Professional
                  Tax is a tax levied by the State Government on salaried
                  individuals, professionals, or persons engaged in any trade,
                  calling, or employment. In contrast, Professional Tax Return
                  is a document filed with the state government containing
                  details of the Tax paid by the individual or business.
                </p>

                <p className="text-slate-700 mb-4">
                  Filing Professional Tax Returns can be a complex and
                  time-consuming process. IndiaFilings provides Professional Tax
                  Return Filing services to assist clients in fulfilling their
                  tax obligations. Our team of experts at IndiaFilings ensures
                  that the entire process of PT return filing is completed
                  promptly and hassle-free. We provide end-to-end assistance for
                  PT annual return, from the collection of documents to the
                  submission of the tax return and payment of Professional Tax.
                  Contact us today to avail of our PT return filing service and
                  ensure compliance with the rules and regulations of the state
                  government.
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Professional Tax
                </h3>
                <p className="text-slate-700 mb-4">
                  Professional Tax is a form of direct taxation imposed on
                  individuals who earn an income through employment, profession,
                  calling, or trade. Unlike the income tax levied by the Central
                  Government, Professional Tax is imposed by the government of a
                  particular state or union territory in India.
                </p>

                <p className="text-slate-700 mb-4">
                  For salaried and wage-earning individuals, the employer is
                  responsible for deducting the professional Tax from the salary
                  or wages and depositing it with the state government. However,
                  in the case of other individuals, they must pay the
                  professional Tax themselves. The calculation of Tax and the
                  amount collected may differ from one state to another, but
                  there is a maximum limit of Rs. 2500 per year (subject to
                  state rules).
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Professional Tax Return
                </h3>
                <p className="text-slate-700 mb-4">
                  A professional Tax Return is a document that must be filed by
                  individuals or businesses liable to pay Professional Tax. It
                  is a form that contains details of the Income earned by the
                  individual or business and the Tax paid during the financial
                  year, applicable for PT annual return. The Professional Tax
                  Return filing is filed with the relevant state government
                  department.
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Professional Tax Return Applicability
                </h3>
                <p className="text-slate-700 mb-4">
                  PT return filing is mandatory for all individuals and
                  businesses liable to pay Professional Tax as per the rules and
                  regulations of the state government. The tax liability and
                  filing frequency may vary from state to state.
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Professional Tax/Return Applicable States across India
                </h3>
                <p className="text-slate-700 mb-4">
                  Professional Tax is a state-level tax, and it is applicable in
                  various states across India, including Andhra Pradesh, Assam,
                  Bihar, Chhattisgarh, Gujarat, Karnataka, Kerala, Madhya
                  Pradesh, Maharashtra, Manipur, Meghalaya, Mizoram, Nagaland,
                  Odisha, Punjab, Rajasthan, Tamil Nadu, Telangana, Tripura,
                  Uttar Pradesh and West Bengal, among others. Taxpayers in
                  these states must file their Professional Tax return within
                  the specified time to avoid penalties and legal consequences.
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Professional Tax slab rate
                </h3>
                <p className="text-slate-700 mb-4">
                  The Professional Tax slab rate varies from state to state in
                  India. Each state has its slab and rate for Professional Tax
                  based on the taxpayer's Income. Generally, slabs are split
                  across income bands such as monthly income less than Rs.
                  15,000, between Rs. 15,001 to Rs. 25,000 and above Rs. 25,000.
                  Taxpayers must comply with their respective state's
                  regulations.
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Who Files Professional Tax Returns?
                </h3>
                <p className="text-slate-700 mb-4">
                  For salaried and wage earners, the employer deducts the
                  Professional Tax from salaries and deposits it with the state
                  government and is responsible for filing returns.
                  Self-employed individuals must pay and file Professional Tax
                  Returns themselves. In some states employers may be required
                  to file returns covering self-employed persons under their
                  employment.
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  PTRC Return Filing: Employer’s Obligations
                </h3>
                <p className="text-slate-700 mb-4">
                  Employers must deduct professional Tax from employees'
                  salaries, remit the collected amount to the relevant
                  government department and file the prescribed Professional Tax
                  Return within stipulated timeframes, enclosing proof of
                  payment.
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Exemption for Filing Professional Tax
                </h3>
                <p className="text-slate-700 mb-4">
                  Certain individuals are exempt from filing PT returns,
                  including those with liability below prescribed limits,
                  persons with permanent disabilities, armed forces members,
                  parents/guardians of persons with disabilities, some women
                  under specific government schemes, and persons above 65 years
                  of age — subject to state rules.
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  PT Return Due Date
                </h3>
                <p className="text-slate-700 mb-4">
                  PT return due dates vary by state. Persons with Professional
                  Tax Registration must file returns within dates specified by
                  their respective state government.
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Benefits of PT Return Filing
                </h3>
                <ul className="list-disc pl-5 text-slate-700 space-y-2 mb-4">
                  <li>Avoidance of penalties and legal consequences</li>
                  <li>Compliance with applicable laws</li>
                  <li>Improved creditworthiness</li>
                  <li>Access to social security benefits</li>
                  <li>Easy and convenient online filing</li>
                  <li>Increased government revenue and accurate records</li>
                </ul>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Documents required for Professional Tax Return filing
                </h3>
                <ul className="list-disc pl-5 text-slate-700 space-y-2 mb-4">
                  <li>PAN Card</li>
                  <li>Aadhaar Card</li>
                  <li>Voter ID or Passport</li>
                  <li>Bank account details</li>
                  <li>Salary details or income proof</li>
                  <li>
                    Registration Certificate or Shop &amp; Establishment
                    Certificate
                  </li>
                  <li>
                    Challans or payment receipts for Professional Tax payment
                  </li>
                  <li>Details of TDS from salary (if any)</li>
                </ul>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Procedure for Professional Tax Return Filing
                </h3>
                <ol className="list-decimal pl-5 text-slate-700 space-y-2 mb-4">
                  <li>
                    Obtain the Professional Tax Registration Certificate from
                    the state authority.
                  </li>
                  <li>
                    Determine the applicable slab and rate for the taxpayer.
                  </li>
                  <li>
                    Collect necessary documents such as salary slips and payment
                    receipts.
                  </li>
                  <li>Prepare the return in the prescribed format.</li>
                  <li>
                    Submit the return along with supporting documents and pay
                    any tax due.
                  </li>
                  <li>Obtain acknowledgment for filing and payment.</li>
                </ol>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Penalties for failing to File Professional Tax Return
                </h3>
                <p className="text-slate-700 mb-4">
                  Penalties vary by state. For example, some states impose daily
                  penalties for not registering, flat penalties for late filing
                  and interest + penalties on late payments. (State rules vary;
                  consult state authority for specifics.)
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Why Choose IndiaFilings for Professional Tax Return Filing
                  Service?
                </h3>
                <p className="text-slate-700 mb-4">
                  IndiaFilings provides end-to-end assistance, timely filing to
                  avoid penalties, affordable pricing, and expert support to
                  ensure compliance with state regulations.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-2xl font-bold mb-4">
                  FAQ's on Professional Tax Return Filing
                </h3>
                <div className="divide-y">
                  {faqList.map((q, i) => (
                    <div key={i} className="py-3">
                      <button
                        onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                        className="w-full text-left flex justify-between items-center py-3"
                      >
                        <span className="font-medium text-slate-800">{q}</span>
                        <span className="text-slate-400">
                          {activeFaq === i ? "-" : "+"}
                        </span>
                      </button>
                      {activeFaq === i && (
                        <div className="mt-2 text-slate-600">
                          <p>{`Answer for: ${q}. For step-by-step guidance, document templates or state-specific due dates, contact our experts.`}</p>
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="py-4">
                    <button className="px-4 py-2 border rounded text-sm text-blue-600">
                      Load More
                    </button>
                  </div>
                </div>
              </div>
            </main>

            <aside className="space-y-6">
              <div className="bg-white rounded-lg shadow p-5">
                <h4 className="font-semibold mb-3">Related Guides</h4>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>
                    <a className="text-blue-600" href="#">
                      Gujarat Professional Tax
                    </a>
                  </li>
                  <li>
                    <a className="text-blue-600" href="#">
                      Telangana Professional Tax
                    </a>
                  </li>
                  <li>
                    <a className="text-blue-600" href="#">
                      Professional Tax in Andhra Pradesh
                    </a>
                  </li>
                  <li>
                    <a className="text-blue-600" href="#">
                      Kerala Professional Tax
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow p-4 text-center">
                <img
                  src="/images/company-compliance-ad.png"
                  alt="Company Compliance"
                  className="rounded"
                />
                <div className="mt-3 font-medium">Company Compliance</div>
              </div>

              <div className="bg-white rounded-lg shadow p-4">
                <h4 className="font-semibold mb-3">Popular Searches</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Partnership",
                    "LLP",
                    "Digital Signature",
                    "PAN Card Download",
                    "MSME Registration",
                    "Trademark Status",
                  ].map((t) => (
                    <span
                      key={t}
                      className="text-xs border rounded px-2 py-1 bg-slate-50 text-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />

      <div
        className="fixed right-5 bottom-5 bg-green-600 text-white px-4 py-2 rounded-full flex items-center gap-3 shadow-lg cursor-pointer z-40"
        onClick={() => alert("Open WhatsApp chat")}
        role="button"
      >
        <img src={ASSETS.whatsapp} alt="whatsapp" className="w-5 h-5" />
        <span className="text-sm">Live Chat with Experts</span>
      </div>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto,
            "Helvetica Neue", Arial;
        }
        h1,
        h2,
        h3 {
          color: #0b2545;
        }
        .max-w-[1200px] {
          max-width: 1200px;
        }
        /* ensure hover blue shows as requested and selected is not permanently blue */
        .hover\\:bg-blue-600:hover {
          background-color: #2563eb;
        }
        .hover\\:text-white:hover {
          color: #fff;
        }
        @media (min-width: 1024px) {
          section > div > .relative > div.absolute img {
            object-position: center top;
          }
        }
      `}</style>
    </div>
  );
}
