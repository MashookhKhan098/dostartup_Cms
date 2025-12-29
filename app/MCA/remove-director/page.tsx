"use client";

import React from "react";

export default function RemoveDirectorPage() {
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
                            Remove Director
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
                  and DIN Allotment. Stay updated with MCA regulations,
                  automatic due date reminders, proactive compliance management,
                  and expert guidance—so your business avoids penalties and
                  stays legally compliant, always.
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
                  financial reports—all in one powerful, unified platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-8 mt-10">
          <article className="flex-1 bg-white p-8 rounded-xl border border-slate-100">
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-2">
                IndiaFilings / MCA Services /{" "}
                <span className="text-indigo-600">Remove Director</span>
              </div>
              <h2 className="text-2xl font-semibold mb-4">
                Removal of Director from a Company
              </h2>
              <p className="text-sm text-slate-600">
                Company Directors oversee the management and operations of a
                business, while shareholders own the company. Situations may
                arise where shareholders opt to remove a director due to
                inadequate performance or other concerns, or a director may
                choose to resign. Removing a director is a significant corporate
                action that requires careful deliberation and strict compliance
                with the legal framework provided by the Companies Act 2013 or
                applicable local laws. Whether initiated by an ordinary
                resolution, board resolution, or judicial order, the process
                must be conducted fairly, transparently, and in the company's
                best interest.
              </p>
              <p className="text-sm text-slate-600 mt-4">
                IndiaFilings specialises in navigating the intricacies of the
                director removal or resignation process, ensuring full
                compliance with legal standards and meticulous attention to
                detail. Let our experts assist you in navigating this critical
                corporate transition smoothly and effectively. Contact us today
                to get started.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Reasons for Director Removal
              </h3>
              <p className="text-sm text-slate-600">
                Under The Companies Act 2013, it's mandatory for a private
                limited company to appoint at least two directors to commence
                its operations.
              </p>
              <ul className="list-disc pl-5 mt-3 text-sm text-slate-600 space-y-2">
                <li>
                  Being disqualified as per the criteria set out in the
                  Companies Act.
                </li>
                <li>Not attending board meetings for more than a year.</li>
                <li>
                  Violating the terms of Section 184 by engaging in prohibited
                  transactions.
                </li>
                <li>
                  Being prohibited from participating due to a court or Tribunal
                  order.
                </li>
                <li>
                  Conviction by a court for a criminal offence with a sentence
                  of at least six months.
                </li>
                <li>
                  Non-compliance with the regulations and requirements of the
                  Companies Act, 2013.
                </li>
                <li>Choosing to resign voluntarily from the board.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Methods for Director Removal from a Company
              </h3>
              <p className="text-sm text-slate-600">
                There are three primary methods to remove a director from a
                company:
              </p>
              <ul className="list-disc pl-5 mt-3 text-sm text-slate-600 space-y-2">
                <li>
                  Resignation by Directors: Directors resign voluntarily by
                  giving notice to the company.
                </li>
                <li>
                  Director Absence from Board Meetings: A director who fails to
                  attend board meetings for 12 months may be deemed to have
                  vacated office.
                </li>
                <li>
                  Shareholder-initiated Removal: Shareholders may remove a
                  director through an ordinary resolution at a General Meeting,
                  following statutory procedure.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Law Governing the Director Removal
              </h3>
              <ul className="list-disc pl-5 mt-3 text-sm text-slate-600 space-y-2">
                <li>
                  Section 169: Explains how a company can legally remove a
                  director and the required steps.
                </li>
                <li>
                  Section 115: Relevant for special notices and related
                  procedural requirements.
                </li>
                <li>
                  Section 163: Relates to representation and procedural fairness
                  in director selection and removal.
                </li>
                <li>
                  Rule 23 of the Companies (Management and Administration)
                  Rules, 2014: Specific procedural guidelines for proper
                  removal.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Essential Requirements for Director Removal
              </h3>
              <ul className="list-disc pl-5 mt-3 text-sm text-slate-600 space-y-2">
                <li>
                  Issuance of Special Notice: A special notice must be issued to
                  initiate the removal process.
                </li>
                <li>
                  Notice Period to Director: The director must receive the
                  special notice at least 14 days before the resolution is voted
                  on.
                </li>
                <li>
                  Right to be Heard: The director facing removal must be allowed
                  to make written representations or speak at the meeting.
                </li>
                <li>
                  Restriction on Reappointment: Once removed, the director is
                  typically ineligible for immediate reappointment.
                </li>
                <li>
                  Filing of Form DIR-12: The company must file Form DIR-12 to
                  officially notify the Registrar of Companies.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Procedure for Director Removal
              </h3>
              <p className="text-sm text-slate-600">
                The procedure involves multiple steps depending on the method
                used. Below are key procedural elements for common scenarios.
              </p>

              <h4 className="font-semibold mt-4">
                Director's Voluntary Resignation
              </h4>
              <p className="text-sm text-slate-600 mt-2">
                A director's resignation becomes effective on the date the
                company receives the notice or on a later date specified by the
                director, whichever is later. Even after stepping down, a
                resigned director remains accountable for any offences committed
                during their term.
              </p>

              <h4 className="font-semibold mt-4">
                Mandatory Steps on Resignation
              </h4>
              <ul className="list-disc pl-5 mt-3 text-sm text-slate-600 space-y-2">
                <li>
                  Schedule a Board Meeting in line with Section 173 and
                  Secretarial Standard-1 (SS-1).
                </li>
                <li>
                  Send Board Meeting notices to all directors at least 7 days
                  before the meeting (shorter notice in urgent cases).
                </li>
                <li>
                  Prepare meeting documents including agenda, explanatory notes
                  and draft resolutions.
                </li>
                <li>
                  Acknowledge resignation in the Board Meeting and assign
                  responsibility for ROC filings.
                </li>
                <li>
                  Public companies must notify stock exchanges per Regulation 30
                  &amp; 46(3) of the SEBI LODR Regulations, 2015.
                </li>
                <li>
                  Circulate draft minutes to directors within 15 days after the
                  meeting.
                </li>
              </ul>

              <h4 className="font-semibold mt-4">Submission of Forms</h4>
              <p className="text-sm text-slate-600 mt-2">
                File Form DIR-12 with the Registrar of Companies within 30 days
                of the director's resignation, attaching a certified copy of the
                Board Resolution, the resignation notice and proof of cessation.
                The resigning director may also file Form DIR-11 within 30 days
                to notify the Registrar.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Director Absence from Board Meetings for 12 Months
              </h3>
              <p className="text-sm text-slate-600">
                If a director fails to attend any board meetings for twelve
                months without leave, their office may be vacated under Section
                167. Companies should acknowledge the vacancy, file DIR-12 and
                update the MCA database to reflect the change.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Director Removal by Shareholders
              </h3>
              <p className="text-sm text-slate-600">
                To remove a director via shareholder resolution, the company
                should follow a transparent process including convening board
                and general meetings, issuing proper notices (21 days), allowing
                the director to be heard, and filing DIR-11 and DIR-12 after the
                resolution passes.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Penalties for Delayed Submission of Form DIR-12
              </h3>
              <p className="text-sm text-slate-600">
                Penalties escalate with delay: 30–60 days — double the
                government fees; 60–90 days — four times the fees; beyond 90
                days — ten times; beyond 180 days — twelve times and potential
                legal action. Timely filing is essential to avoid these
                consequences.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Impacts and Considerations of Director Removal
              </h3>
              <ul className="list-disc pl-5 mt-3 text-sm text-slate-600 space-y-2">
                <li>
                  End of Directorial Responsibilities and revocation of
                  authority.
                </li>
                <li>
                  Potential legal ramifications if procedural requirements are
                  not met.
                </li>
                <li>
                  Impact on company reputation; handle removal discreetly and
                  professionally.
                </li>
                <li>
                  Possible need to file amendments under GST, Shops &amp;
                  Establishment, EPF/ESI and other applicable laws.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Why choose IndiaFilings for Director removal?
              </h3>
              <ul className="list-disc pl-5 mt-3 text-sm text-slate-600 space-y-2">
                <li>
                  Expertise and Experience: Professionals well-versed in
                  corporate law and director removal procedures.
                </li>
                <li>
                  Compliance Assurance: Steps executed to minimize legal risk
                  and ensure statutory compliance.
                </li>
                <li>
                  End-to-End Support: From consultation to submission of DIR-12,
                  IndiaFilings handles the full process.
                </li>
                <li>
                  Customized Solutions: Tailored advice based on the company's
                  unique circumstances.
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Related Guides</h4>
              <ul className="text-sm text-indigo-600 space-y-2">
                <li>
                  Companies Rules – Appointment and Qualification of Director
                </li>
                <li>Independent Director – Companies Act 2013</li>
                <li>Alternate Director – Companies Act 2013</li>
                <li>Women Directors</li>
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
            FAQ's on Remove Director
          </h3>
          <ul className="divide-y divide-slate-100">
            <li className="py-4 flex justify-between items-center">
              <div>
                <div className="font-medium">
                  What prompts the removal of a director in a company?
                </div>
                <div className="text-sm text-slate-600">
                  Reasons include disqualification, misconduct, non-attendance
                  or voluntary resignation.
                </div>
              </div>
              <div className="text-slate-400">+</div>
            </li>

            <li className="py-4 flex justify-between items-center">
              <div>
                <div className="font-medium">
                  What governs the director removal process?
                </div>
                <div className="text-sm text-slate-600">
                  The Companies Act 2013 and related rules govern the removal
                  procedure.
                </div>
              </div>
              <div className="text-slate-400">+</div>
            </li>

            <li className="py-4 flex justify-between items-center">
              <div>
                <div className="font-medium">
                  Can a director be removed for not attending meetings?
                </div>
                <div className="text-sm text-slate-600">
                  Yes — absence for 12 consecutive months can result in vacation
                  of office under Section 167.
                </div>
              </div>
              <div className="text-slate-400">+</div>
            </li>

            <li className="py-4 flex justify-between items-center">
              <div>
                <div className="font-medium">
                  What is the role of shareholders in director removal?
                </div>
                <div className="text-sm text-slate-600">
                  Shareholders can remove directors by passing resolutions in
                  general meetings, following statutory notice and hearing
                  requirements.
                </div>
              </div>
              <div className="text-slate-400">+</div>
            </li>

            <li className="py-4 flex justify-between items-center">
              <div>
                <div className="font-medium">
                  What are the steps for voluntary director resignation?
                </div>
                <div className="text-sm text-slate-600">
                  Submit resignation in writing, Board acknowledgement, file
                  DIR-12 within 30 days, and update statutory registers.
                </div>
              </div>
              <div className="text-slate-400">+</div>
            </li>

            <li className="py-4 flex justify-between items-center">
              <div>
                <div className="font-medium">
                  What is an Ordinary Resolution in the context of director
                  removal?
                </div>
                <div className="text-sm text-slate-600">
                  An Ordinary Resolution is a shareholder vote passed by a
                  simple majority used for standard corporate actions including
                  removal in many cases.
                </div>
              </div>
              <div className="text-slate-400">+</div>
            </li>

            <li className="py-4 flex justify-between items-center">
              <div>
                <div className="font-medium">
                  What is the significance of Form DIR-12?
                </div>
                <div className="text-sm text-slate-600">
                  Form DIR-12 is the statutory form to notify the Registrar of
                  Companies about appointment or cessation of directors.
                </div>
              </div>
              <div className="text-slate-400">+</div>
            </li>

            <li className="py-4 flex justify-between items-center">
              <div>
                <div className="font-medium">
                  Are there penalties for late filing of Form DIR-12?
                </div>
                <div className="text-sm text-slate-600">
                  Yes — penalties increase with delay; timely filing avoids
                  escalated government fees and legal consequences.
                </div>
              </div>
              <div className="text-slate-400">+</div>
            </li>

            <li className="py-4 flex justify-between items-center">
              <div>
                <div className="font-medium">
                  How does director removal affect the company?
                </div>
                <div className="text-sm text-slate-600">
                  It affects governance, authority, and potentially reputation;
                  proper procedure helps minimise disruption.
                </div>
              </div>
              <div className="text-slate-400">+</div>
            </li>

            <li className="py-4 flex justify-between items-center">
              <div>
                <div className="font-medium">
                  What is the importance of a Board Meeting in director removal?
                </div>
                <div className="text-sm text-slate-600">
                  The Board Meeting is required to acknowledge resignation, pass
                  necessary resolutions and initiate filings to the ROC.
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
            Copyright © {new Date().getFullYear()} IndiaFilings Private Limited.
            All rights reserved.
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
