"use client";


import React, { useState } from "react";
import { ChevronRight, Star, Plus, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import DynamicPricingSection from "../components/DynamicPricingSection";
import FAQAccordion from "../components/Faq";
import SidebarCart from "../components/SidebarCart";
import PopularSearches from "../components/PopularSearches";
import Footer from "../components/Footer";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  hero: "/images/moa-hero.jpg",
  ledgers: "/images/ledgers.jpg",
  whatsapp: "/images/whatsapp.png",
  adRight1: "/images/company-compliance.jpg",
  dinEkyc: "/images/din.jpg",
  cartIcon: "/images/cart-icon.svg",
  indiaFlag: "/images/india-flag.png",
  companyCompliance: "/images/company-compliance.png",
};

export default function MOAAmendmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    "What is MOA?",
    "Why do companies need to amend their MOA periodically?",
    "What does the MOA define?",
    "What is an MOA Amendment?",
    "When can an MOA be amended?",
    "What are some clauses covered in the MOA?",
    "What is required to alter the name in the MOA?",
    "How is a change in the registered office location reflected in the MOA?",
    "What is the procedure for altering the Objects Clause in the MOA?",
    "How is the liability clause altered in the MOA?",
  ];

  const faqAnswers: Record<number, string> = {
    0: "MOA stands for Memorandum of Association. It is the foundational legal document of a company that defines its scope, objectives, and the relationship with its members.",
    1: "Companies amend their MOA to reflect changes in objectives, business activities, registered office, capital structure or other statutory requirements as the company evolves.",
    2: "The MOA defines the name clause, situation (registered office) clause, object clause, liability clause, capital clause and subscription clause among other foundational terms.",
    3: "An MOA Amendment is the legal process of changing provisions in the Memorandum of Association under Section 13 of the Companies Act, 2013, supported by the necessary resolution and filings.",
    4: "An MOA can be amended when changes to name, registered office, objects, liability, authorised capital or other clauses are required. Some changes require special resolution and additional approvals.",
    5: "Typical clauses include Name Clause, Situation Clause, Object Clause, Liability Clause, Capital Clause and Subscription Clause. The Subscription Clause cannot be altered.",
    6: "Altering the name clause requires a special resolution. For most private/public companies no central government approval is needed, but certain categories may need additional approvals.",
    7: "Changing the registered office to a different state requires a special resolution, board approval and filings with the Registrar of Companies in both states, and supporting forms such as INC-22.",
    8: "Altering the Objects Clause may require a special resolution and, for publicly-funded companies, publication in newspapers and compliance with SEBI exit/dissent procedures as applicable.",
    9: "Altering the liability clause generally requires a resolution and filing with the Registrar within prescribed timelines. Liability of members can be limited but cannot be made unlimited without proper procedure.",
  };

  return (
    <div className="min-h-screen bg-[#F4F3EE] font-sans text-gray-800">
      <Navbar />

      {/* Breadcrumb */}
      <div className="py-5 bg-[#F4F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-sm text-gray-500 font-bold">
          Home / MCA Services /{" "}
          <span className="text-amber-700 font-medium">MOA Amendment</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-3 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column */}
        <section className="lg:col-span-8 space-y-6">
          {/* Top Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-10 flex flex-col md:flex-row gap-8">
            {/* Left image card */}
            <div className="md:w-1/3 flex-shrink-0">
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <div className="bg-gradient-to-r from-amber-700 to-amber-800 rounded-t-xl p-4 text-white text-center">
                  <h2 className="text-xl font-bold">MOA AMENDMENT</h2>
                </div>
                <div className="bg-white px-4 py-8 flex justify-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden shadow-sm flex items-center justify-center -mt-4 border-4 border-white">
                    <img
                      src={ASSETS.hero}
                      alt="MOA hero"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <ul className="mt-6 text-sm space-y-3 text-gray-600 font-bold">
                <li className="hover:text-amber-700 cursor-pointer transition-colors flex items-center gap-2">
                  <ChevronRight size={14} className="text-amber-600" /> Notice and Explanatory Statement
                </li>
                <li className="hover:text-amber-700 cursor-pointer transition-colors flex items-center gap-2">
                  <ChevronRight size={14} className="text-amber-600" /> MOA
                </li>
                <li className="hover:text-amber-700 cursor-pointer transition-colors flex items-center gap-2">
                  <ChevronRight size={14} className="text-amber-600" /> Special Resolution
                </li>
              </ul>
            </div>

            {/* Right content */}
            <div className="md:w-2/3 flex-1">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-3">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                    <span className="text-[10px] font-bold text-amber-700 tracking-widest uppercase">MCA COMPLIANCE</span>
                  </div>
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
                    MOA Amendment
                  </h2>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-slate-500">(66 reviews)</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 mt-4 max-w-md font-bold leading-relaxed">
                MOA amendment for a private limited company. Our experts
                assist with drafting, resolutions and filing with ROC.
              </p>

              {/* Offer box */}
              <div className="relative mt-8">
                <div className="absolute -top-3 left-6 bg-white px-2 rounded-md text-xs font-bold text-amber-700 border border-amber-200 uppercase tracking-widest">
                  2 Exclusive Offers
                </div>
                <div className="border-2 border-dashed rounded-xl border-amber-200 p-5 bg-amber-50/30">
                  <div className="font-bold text-slate-900">Basic</div>
                  <ul className="mt-3 text-sm text-gray-600 font-bold space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight size={16} className="text-amber-600 mt-0.5" /> Application Filing in MCA
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight size={16} className="text-amber-600 mt-0.5" /> Provide Updated MOA & Approval Letter
                    </li>
                  </ul>
                  <div className="mt-5">
                    <button className="bg-white border-2 border-amber-600 text-amber-700 px-6 py-2 rounded-lg hover:bg-amber-50 transition-colors text-sm font-bold uppercase tracking-wide">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-gray-100 pt-4 text-sm flex justify-between items-center text-slate-600 font-bold">
                <a className="text-amber-700 hover:text-amber-800 cursor-pointer transition-colors">
                  Terms and conditions
                </a>
                <a className="text-amber-700 hover:text-amber-800 cursor-pointer transition-colors">Refer a Friend</a>
              </div>

              <div className="mt-8 border border-gray-100 rounded-xl p-4 hover:border-amber-200 transition-colors shadow-sm">
                <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Offers and discounts</h4>
                <div className="flex items-center gap-4">
                  <img
                    src={ASSETS.ledgers}
                    alt="ledgers"
                    className="h-10 w-10 object-contain rounded"
                  />
                  <div>
                    <div className="text-amber-700 font-bold text-sm">
                      LEDGERS - Compliance Platform
                    </div>
                    <div className="text-gray-500 font-bold text-xs mt-0.5">
                      Invoicing, GST Filing, Banking and Payroll
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Article */}
          <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-10">
            <h1 className="text-3xl font-extrabold text-slate-900 mb-8 border-b pb-4">
              MOA Amendment
            </h1>

            <div className="space-y-6 text-[15px] leading-relaxed text-gray-700 font-bold">
              <p>
                Companies may need to periodically amend their Memorandum of
                Association (MOA) to reflect changes in their operational,
                structural, or strategic directives. The MOA is the foundational
                legal document defining a company's scope, objectives, and
                operational boundaries. At DoStartup, we understand the
                significance of MOA amendments and offer expert guidance. From
                understanding the intricacies of MOA clauses to navigating the
                legal framework, our team ensures seamless compliance with
                regulatory requirements.
              </p>

              <h3 className="text-xl font-bold text-slate-900 pt-4 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-amber-600 rounded-full" />
                Memorandum of Association (MOA)
              </h3>
              <p>
                The "MOA" refers to the Memorandum of Association, which serves
                as the foundation document for a company. It is crafted during
                the company registration process and holds legal significance.
                The MOA outlines the company's objectives, operational
                boundaries, and internal regulations, establishing a framework
                for its operations and defining its relationship with
                shareholders. It sets the company's scope and legal parameters
                in clear terms.
              </p>

              <p>
                The Memorandum of Association covers many aspects of the
                company, encompassing its operations, delegation of
                responsibilities, policies, and guiding principles.
              </p>

              <h3 className="text-xl font-bold text-slate-900 pt-4 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-amber-600 rounded-full" />
                What is the MOA Amendment?
              </h3>
              <p>
                An MOA (Memorandum of Association) Amendment refers to the
                process through which a company amends the provisions outlined
                in its MOA. An amendment to the Memorandum of Association is
                permissible under Section 13 of The Companies Act, 2013, in
                conjunction with the Company Rules Act, which provides the legal
                framework for modifying the MOA.
              </p>

              <h3 className="text-xl font-bold text-slate-900 pt-4 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-amber-600 rounded-full" />
                When can an MOA be amended?
              </h3>
              <p>
                As mentioned above, the Memorandum of Association (MOA) is a
                critical document for any company, outlining the fundamental
                conditions under which it operates. The MOA contains several key
                clauses:
              </p>
              <ul className="list-none space-y-3 bg-gray-50 p-6 rounded-xl border border-gray-100">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-amber-600 shrink-0" /> <span><strong className="text-slate-900">Name Clause:</strong> Identifies the company's official name.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-amber-600 shrink-0" /> <span><strong className="text-slate-900">Situation Clause:</strong> Specifies the location of the company's registered office.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-amber-600 shrink-0" /> <span><strong className="text-slate-900">Object Clause:</strong> Describes the company's purposes and the scope of activities it can undertake.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-amber-600 shrink-0" /> <span><strong className="text-slate-900">Liability Clause:</strong> States the liability of the company's members, whether limited by shares or guarantees.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-amber-600 shrink-0" /> <span><strong className="text-slate-900">Capital Clause:</strong> Details the company's authorised capital, including the number and types of shares.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-amber-600 shrink-0" /> <span><strong className="text-slate-900">Subscription Clause:</strong> Includes the signatures of the initial subscribers to the MOA, indicating their agreement to form the company and take up shares.</span></li>
              </ul>

              <h3 className="text-xl font-bold text-slate-900 pt-4 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-amber-600 rounded-full" />
                Key Amendments to the Memorandum of Association (MOA)
              </h3>
              <p>
                An amendment to the MOA can be made to alter any or all of the
                above-mentioned clauses EXCEPT the Subscription Clause. These
                amendments can include:
              </p>
              
              <div className="pl-4 border-l-2 border-amber-200 mt-4 space-y-6">
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Altering Name in MOA</h4>
                  <p className="mt-2 text-sm">
                    The MOA will be altered by passing a special resolution to make
                    changes in the company's name. In the case of a name change for
                    a private or public limited company, no approval from the
                    central government is needed. However, in other cases, the
                    central government's consent is necessary.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Registered Office Change (State to State)</h4>
                  <p className="mt-2 text-sm">
                    A company must change the Memorandum of Association to transfer
                    the registered office to another state. Generally, the reasons
                    for changing the registration to another state include
                    conducting the business more professionally and economically,
                    developing operations in the current location, managing existing
                    objectives, selling the business enterprise wholly or partially,
                    or merging the business with another entity. If shifted from one
                    state to another, a special resolution and approvals must be
                    filed with the Registrars of both states.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Alteration of Objects Clause</h4>
                  <p className="mt-2 text-sm">
                    The changes to the object clause in the case of a Private
                    Limited Company can be made without any hassles. But if the same
                    is to be done for any company that has raised funds from the
                    public, then a special resolution is required to be passed.
                    Also, this must be published in an English and another
                    local-language newspaper where the company's registered office
                    is located.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Alteration of the Liability Clause</h4>
                  <p className="mt-2 text-sm">
                    A change in the clause needs to be made to limit the liability
                    of the Directors or members. A copy of the resolution must be
                    filed with the registrar within 30 days of the change.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Alteration of Capital Clause</h4>
                  <p className="mt-2 text-sm">
                    This change may be required as a subdivision of the shares or
                    consolidation of shares. Other reasons include conversion of
                    stock or annulment of unsubscribed capital. These alterations
                    must be filed with the registrar within 30 days.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 pt-6 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-amber-600 rounded-full" />
                Documents Required for MOA Amendment
              </h3>
              <ul className="list-none space-y-3 p-4">
                {[
                  "Revised MOA: A copy of the Memorandum of Association reflecting the proposed changes.",
                  "Certified Copy of Special Resolution: A certified copy of the resolution passed at the Extraordinary General Meeting (EGM) approving the MOA amendments.",
                  "Explanatory Statement: A document providing explanations and justifications for the proposed changes.",
                  "EGM Notice: A formal notice sent to all company members, announcing the EGM and detailing the agenda.",
                  "Form MGT-14: A form submitted to the Registrar of Companies to register the special resolution and amendments."
                ].map((doc, idx) => (
                   <li key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-amber-200 transition-colors">
                     <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                     <span className="text-sm font-bold text-slate-800">{doc}</span>
                   </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-slate-900 pt-4 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-amber-600 rounded-full" />
                Common Procedure for MOA Amendment
              </h3>
              <p>
                Amending the MOA involves a structured legal process as outlined
                by The Companies Act. Steps include preparing board and special
                resolutions, issuing meeting notices, conducting the EGM, filing
                Form MGT-14 and supporting documents with the Registrar, paying
                filing fees, and updating company records after Registrar
                approval.
              </p>

              <h3 className="text-xl font-bold text-slate-900 pt-4 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-amber-600 rounded-full" />
                Streamline Your MOA Amendment Process with DoStartup
              </h3>
              <p>
                Choosing DoStartup ensures a seamless process. Our experts
                guide you through drafting resolutions, preparing explanatory
                statements, handling EGM formalities and filing documents with
                the Registrar of Companies. Contact our experts today to get
                started!
              </p>
            </div>
          </article>

          {/* Documents + other registrations */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-bold mb-6 text-slate-900 border-b pb-3">
                Documents Required For MOA Amendment
              </h3>
              <ul className="space-y-4 text-sm text-gray-700 font-bold">
                <li className="flex items-center gap-3 hover:text-amber-700 cursor-pointer transition-colors">
                   <ChevronRight className="w-4 h-4 text-amber-500" /> Revised MOA reflecting proposed changes
                </li>
                <li className="flex items-center gap-3 hover:text-amber-700 cursor-pointer transition-colors">
                   <ChevronRight className="w-4 h-4 text-amber-500" /> Certified copy of special resolution
                </li>
                <li className="flex items-center gap-3 hover:text-amber-700 cursor-pointer transition-colors">
                   <ChevronRight className="w-4 h-4 text-amber-500" /> Explanatory statement
                </li>
              </ul>
              <button className="mt-6 px-6 py-2 border-2 border-slate-900 rounded-lg text-sm font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-all w-full">
                LOAD MORE
              </button>
            </div>

            <aside className="lg:col-span-5 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-bold mb-6 text-slate-900 border-b pb-3">
                Other Registrations
              </h3>
              <ul className="space-y-4 text-sm font-bold">
                {[
                  ["Documents Required for LLP Registration", 8],
                  ["Documents Required for Proprietorship Registration", 2],
                  ["Documents Required for Company Registration", 2],
                  ["Documents Required for Trademark Registration", 7],
                  ["Documents Required for GST Registration", 10],
                ].map(([label, count]) => (
                  <li
                    key={label as string}
                    className="flex justify-between items-start hover:text-amber-700 cursor-pointer transition-colors group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{label}</span>
                    <span className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 inline-flex items-center justify-center text-xs ml-3 shrink-0">
                      {count}
                    </span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {/* Right sidebar */}
        <aside className="lg:col-span-4 hidden lg:block relative">
          <div className="sticky top-28 z-30 mb-6">
            <SidebarCart />
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-gray-100">
            <h4 className="font-bold mb-4 text-slate-900 text-sm uppercase tracking-wider border-b pb-2">Related Guides</h4>
            <ul className="text-sm space-y-3 font-bold text-gray-700">
              <li className="hover:text-amber-700 cursor-pointer flex gap-3 group items-center">
                 <div className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-amber-600 transition-colors" />
                 <span className="group-hover:translate-x-1 transition-transform">Memorandum of Association of Company</span>
              </li>
              <li className="hover:text-amber-700 cursor-pointer flex gap-3 group items-center">
                 <div className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-amber-600 transition-colors" />
                 <span className="group-hover:translate-x-1 transition-transform">Procedure for Changing MOA Objects Clause</span>
              </li>
              <li className="hover:text-amber-700 cursor-pointer flex gap-3 group items-center">
                 <div className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-amber-600 transition-colors" />
                 <span className="group-hover:translate-x-1 transition-transform">Changes to MOA of Company</span>
              </li>
              <li className="hover:text-amber-700 cursor-pointer flex gap-3 group items-center">
                 <div className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-amber-600 transition-colors" />
                 <span className="group-hover:translate-x-1 transition-transform">Form INC-33 – SPICe MOA – Procedure</span>
              </li>
              <li className="hover:text-amber-700 cursor-pointer flex gap-3 group items-center">
                 <div className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-amber-600 transition-colors" />
                 <span className="group-hover:translate-x-1 transition-transform">MOA of Private Limited Company</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-sm mb-6 border border-gray-100 group cursor-pointer relative">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
            <img
              src="/images/company-compliance.jpg"
              alt="company compliance"
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-4 right-4 z-20">
               <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg text-center">
                  <h4 className="font-bold text-slate-900 text-sm">Company Compliance</h4>
               </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-sm mb-8 border border-gray-100 group cursor-pointer relative">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
            <img
              src={ASSETS.dinEkyc}
              alt="din ekyc"
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-4 right-4 z-20">
               <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg text-center">
                  <h4 className="font-bold text-slate-900 text-sm">DIN eKYC Filing</h4>
               </div>
            </div>
          </div>
        </aside>
      </main>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <DynamicPricingSection category="moa-amendment" />
      </div>

      <FAQAccordion category="moa-amendment" title="FAQs for MOA Amendment" />

      <PopularSearches />
      <Footer />

      {/* WhatsApp CTA */}
      <div className="fixed right-6 bottom-6 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:scale-105 transition-all cursor-pointer">
        <img src={ASSETS.whatsapp} alt="wa" className="w-5 h-5 brightness-0 invert" />
        <span className="font-bold text-sm tracking-wide">Expert Chat</span>
      </div>
    </div>
  );
}
