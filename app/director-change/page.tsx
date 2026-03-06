"use client";

import React from "react";

export default function AppointmentOfDirectorReplica() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      <header className="w-full border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <img
              src="/images/india-logo.jpg"
              alt="logo"
              className="w-25 h-auto object-contain"
            />
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
              <a className="hover:underline">Startup</a>
              <a className="hover:underline">Registrations</a>
              <a className="hover:underline">Trademark</a>
              <a className="hover:underline">GST</a>
              <a className="hover:underline">Income Tax</a>
              <a className="hover:underline">MCA</a>
              <a className="hover:underline">Compliance</a>
              <a className="hover:underline">Personal</a>
              <a className="hover:underline">Global</a>
              <a className="hover:underline">Cities</a>
              <a className="hover:underline">Guides</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden lg:inline-flex items-center justify-center px-4 py-2 border border-slate-200 rounded-md text-sm">
              🔍
            </button>
            <button className="px-4 py-2 bg-white border border-slate-200 rounded-md text-sm">
              Login
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <section
          className="relative rounded-2xl overflow-hidden"
          style={{ minHeight: 420 }}
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <img
              src="/images/hero.png"
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

          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-8">
              <div className="mx-auto max-w-[1180px] flex items-center gap-8">
                <div className="w-7/12">
                  <div className="bg-[rgba(0,0,0,0.45)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-10 backdrop-blur-sm shadow-[0_20px_50px_rgba(2,6,23,0.6)]">
                    <h1 className="text-white text-[34px] leading-tight font-semibold mb-4">
                      Director Management
                    </h1>
                    <p className="text-slate-200 text-[15px] leading-relaxed mb-6">
                      Manage your company's directors effortlessly with
                      AI-assisted MCA compliance. Our intelligent system ensures
                      complete legal adherence, auto-checks documentation, and
                      provides end-to-end support for a hassle-free experience.
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="relative flex items-center w-full">
                        <input
                          placeholder="ENTER COMPANY NAME"
                          className="w-full max-w-[640px] px-6 py-4 rounded-full bg-transparent text-white placeholder:text-slate-300 border border-[rgba(255,255,255,0.12)] focus:outline-none focus:ring-0"
                        />
                        <div className="absolute right-2 top-1/2 -translate-y-1/2">
                          <button className="px-5 py-[10px] bg-white rounded-full text-sm font-medium shadow-[0_6px_20px_rgba(0,0,0,0.25)]">
                            Add Director
                          </button>
                        </div>
                        <div
                          className="absolute left-0 top-0 bottom-0 w-full rounded-full pointer-events-none"
                          style={{
                            boxShadow:
                              "inset 0 0 0 1px rgba(255,255,255,0.06), 0 8px 36px rgba(2,6,23,0.45)",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-5/12 flex justify-end pr-6">
                  <div className="relative w-[340px]">
                    <img
                      src="/images/remove.png"
                      alt="phone"
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                    <div
                      className="absolute -right-4 top-1/4 w-32 h-20 rounded-lg"
                      style={{ filter: "blur(0px)" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.18) 100%)",
              borderRadius: "1rem",
            }}
          />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-slate-50 grid place-items-center text-indigo-500">
                👥
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-slate-800">
                  Dedicated support, flexible cost
                </h3>
                <p className="text-sm text-slate-600">
                  Get an experienced accountant to manage your ledgers, vendor
                  &amp; customer reconciliations, bank reconciliations, and
                  monthly close with precision and reliability - all at a
                  fraction of the cost of a full-time hire.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-slate-50 grid place-items-center text-emerald-500">
                ✔
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-slate-800">
                  Accurate & timely compliance
                </h3>
                <p className="text-sm text-slate-600">
                  End-to-end Director Management for Pvt Ltd Companies &amp;
                  LLPs – filing of DIR-3 KYC, Director Appointments (DIR-12),
                  Director Resignations (DIR-12), Director Disclosures (MGT-6),
                  and DIN Allotment.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-slate-50 grid place-items-center text-purple-500">
                ⚡
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-slate-800">
                  Powered by LEDGERS
                </h3>
                <p className="text-sm text-slate-600">
                  Experience seamless automation with real-time bank feeds,
                  smart reconciliations, integrated e-invoice/e-way bill
                  generation, secure document vault, and fully audit-ready
                  financial reports.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-8 mt-10">
          <article className="flex-1 bg-white p-8 rounded-xl border border-slate-100">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">
                Addition of New Directors
              </h2>
              <p className="text-sm text-slate-600">
                In a Private Limited Company, directors are pivotal to the
                business's seamless operation and strategic direction, managing
                daily activities and making crucial decisions that affect the
                company's future. As businesses evolve and expand, a need may
                arise to appoint additional directors to meet growing demands or
                to satisfy shareholder expectations. This process must be
                carried out strictly to the regulations outlined in the
                Companies Act of 2013 to ensure the company remains compliant
                and maintains proper governance.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Who Is a Director in a Company?
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                A director in a company serves as a key figure appointed by
                shareholders to oversee the company's operations, in alignment
                with the guidelines set out in the Memorandum of Association
                (MOA) and Articles of Association (AOA). Since a company is a
                legal entity and cannot act independently, it operates through
                natural persons, namely the directors.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Types of Directors of a Company
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Directors within a company are differentiated into several
                categories, reflecting their distinct functions and duties. The
                principal types are:
              </p>

              <div className="mb-4">
                <h4 className="font-semibold">Executive Directors</h4>
                <p className="text-sm text-slate-600">
                  These individuals are deeply engaged in the company's routine
                  operations and management. They typically occupy specific
                  executive positions like CEO, CFO, or COO.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold">Non-Executive Directors</h4>
                <p className="text-sm text-slate-600">
                  Non-executive directors do not partake in the day-to-day
                  management and provide objective oversight and strategic
                  direction.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Independent Directors</h4>
                <p className="text-sm text-slate-600">
                  Independent directors are distinguished by independence from
                  the company management and ensure unbiased judgments and
                  governance.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">
                Key Sections of the Companies Act, 2013 for Director Appointment
              </h3>
              <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
                <li>
                  Section 149: Outlines the Board composition requirements.
                </li>
                <li>
                  Section 152: Governs the appointment procedure and DIN
                  requirement.
                </li>
                <li>
                  Section 161: Offers directives on appointment of additional
                  directors.
                </li>
                <li>Section 164: Conditions of disqualification.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">
                Reasons for Adding or Changing Directors
              </h3>
              <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
                <li>Incorporating Fresh Expertise</li>
                <li>Maintaining Strategic Control</li>
                <li>Revitalizing Board Performance</li>
                <li>Legal Compliance</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">
                Qualifications for Director
              </h3>
              <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
                <li>Age Requirement: Candidate must be 18 or older.</li>
                <li>
                  Compliance with the Companies Act: Must not be disqualified.
                </li>
                <li>
                  Consensual Agreement: Appointment must be approved by
                  shareholders/board.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Documents Required for Director Appointment
              </h3>
              <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
                <li>PAN Card</li>
                <li>Proof of Identity (Aadhaar/Voter ID/Driving license)</li>
                <li>Residential Proof</li>
                <li>Recent Passport-Sized Photograph</li>
                <li>Digital Signature Certificate (DSC)</li>
              </ul>
            </div>
          </article>

          <aside className="w-full lg:w-80">
            <div className="bg-white p-6 rounded-xl border border-slate-100 mb-6">
              <h4 className="font-semibold mb-3">Related Guides</h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li className="hover:text-indigo-600 cursor-pointer">
                  DIN Number Registration and Search
                </li>
                <li className="hover:text-indigo-600 cursor-pointer">
                  Articles of Association (AOA)
                </li>
                <li className="hover:text-indigo-600 cursor-pointer">
                  Guide to Annual General Meeting
                </li>
              </ul>
            </div>

            <div className="sticky top-28 bg-white p-4 rounded-xl border border-slate-100">
              <img
                src="/images/Screenshot (489).png"
                alt="ad"
                className="w-full rounded-lg"
              />
            </div>
          </aside>
        </div>

        <section className="mt-10 bg-white p-6 rounded-xl border border-slate-100">
          <h3 className="text-xl font-semibold mb-4">
            FAQ's on Director Change
          </h3>
          <ul className="divide-y divide-slate-100">
            <li className="py-4 flex justify-between items-center">
              <div>
                <div className="font-medium">
                  What is the role of a director in a Private Limited Company?
                </div>
                <div className="text-sm text-slate-600">
                  Directors oversee company operations and strategy on behalf of
                  shareholders.
                </div>
              </div>
              <div className="text-slate-400">+</div>
            </li>
            <li className="py-4 flex justify-between items-center">
              <div>
                <div className="font-medium">
                  Why might a company need to add new directors?
                </div>
                <div className="text-sm text-slate-600">
                  To add expertise, meet regulatory requirements, or support
                  growth.
                </div>
              </div>
              <div className="text-slate-400">+</div>
            </li>
            <li className="py-4 flex justify-between items-center">
              <div>
                <div className="font-medium">
                  How does IndiaFilings assist with director appointments?
                </div>
                <div className="text-sm text-slate-600">
                  End-to-end filing, DIN/DSC assistance, compliance checks, and
                  documentation support.
                </div>
              </div>
              <div className="text-slate-400">+</div>
            </li>
            <li className="py-4 flex justify-between items-center">
              <div>
                <div className="font-medium">
                  What are the types of directors?
                </div>
                <div className="text-sm text-slate-600">
                  Executive, Non-Executive, Independent, Nominee directors.
                </div>
              </div>
              <div className="text-slate-400">+</div>
            </li>
          </ul>
          <div className="mt-4">
            <button className="px-4 py-2 bg-white border border-slate-200 rounded-md">
              Load More
            </button>
          </div>
        </section>

        <section className="mt-10 bg-white p-6 rounded-xl border border-slate-100">
          <h4 className="font-semibold mb-4">Popular Searches</h4>
          <div className="flex flex-wrap gap-3">
            {[
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
              "MSME Registration",
              "Trademark Status",
              "Trade License",
              "Domicile",
              "eMitra",
              "UAN",
              "PICME",
            ].map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-2 border border-slate-200 rounded-full bg-slate-50"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-slate-100 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h5 className="font-semibold mb-4">IndiaFilings</h5>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>About IndiaFilings</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Platforms</h5>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>Business Search</li>
              <li>Trademark Search</li>
              <li>Filings.AE for UAE</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Usage</h5>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>Terms &amp; Conditions</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
            </ul>
          </div>
        </div>
        <div className="bg-white border-t border-slate-200 py-6">
          <div className="max-w-7xl mx-auto px-6 text-sm text-slate-500">
            Copyright © 2025 IndiaFilings Private Limited. All rights reserved.
          </div>
        </div>
      </footer>

      <div className="fixed right-6 bottom-6 z-50">
        <button className="px-5 py-3 rounded-full bg-emerald-500 text-white shadow-lg">
          Live Chat with Experts
        </button>
      </div>
    </div>
  );
}
