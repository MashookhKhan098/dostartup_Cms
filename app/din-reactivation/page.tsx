"use client";

/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import { ChevronRight, ShoppingBag, Star, Plus, CheckCircle, ShoppingCart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PopularSearches from "../components/PopularSearches";
import SidebarCart from "../components/SidebarCart";

const ASSETS = {
  logo: "/images/india-logo.jpg",
  heroImage: "/images/din.jpg",
  man: "https://img.indiafilings.com/catalog/mca-compliance-simplified-india.webp",
  ledgers: "/images/ledgers.jpg",
  whatsapp: "/images/whatsapp.png",
  companyCompliance: "/images/company-compliance.jpg",
  cartIcon: "/images/cart.png",
  indiaFlag: "/images/india-flag.png",
};

export default function DINReactivationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    { q: "What is Director Identification Number (DIN)?", a: "A Director Identification Number (DIN) is an 8-digit unique identifier assigned to directors. Once issued, it remains valid for the lifetime of the director." },
    { q: "What is Form DIR-3 KYC?", a: "Form DIR-3 KYC is an electronic form mandated by MCA to update KYC details of directors." },
    { q: "When is the deadline for DIR-3 KYC filing?", a: "The deadline is set as September 30th of each year (subject to MCA extensions)." },
    { q: "What happens if I don't file DIR-3 KYC?", a: "Failure to file leads to deactivation of the DIN, and a late fee may be imposed for reactivation." },
    { q: "Can I reactivate my deactivated DIN?", a: "Yes ΓÇö to reactivate, file the appropriate DIR-3 KYC form and follow MCA approvals." }
  ];

  const DOCUMENTS_REQUIRED = [
    { name: "Digital Signature Certificate (DSC) (self-attested copy of PAN)" },
    { name: "PAN Card (self-attested)" },
    { name: "Proof of Address (Aadhaar / Voter ID / DL)" },
    { name: "Photograph (Self-attestation passport photo)" },
    { name: "Mobile & Email for OTP verification" }
  ];

  const OTHER_REGISTRATIONS = [
    { name: "Documents Required for LLP Registration", count: 8 },
    { name: "Documents Required for Proprietorship Registration", count: 2 },
    { name: "Documents Required for Company Registration", count: 2 },
    { name: "Documents Required for Trademark Registration", count: 7 },
    { name: "Documents Required for GST Registration", count: 10 },
  ];

  return (
    <div className="min-h-screen bg-[#ffffff] text-slate-800">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-white to-slate-50 py-3 text-slate-800 border-b border-slate-100 font-bold">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-sm text-gray-500">
          Home / MCA Services / <span className="text-amber-700 font-medium">DIN Reactivation</span>
        </div>
      </div>

      {/* Main Container: Persistent Sticky Sidebar */}
      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 py-8 flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Left Section: All main content */}
        <section className="flex-1 space-y-12 overflow-hidden">
          
          {/* Header Block: 2-Col Hero Area */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
             {/* Col 1: Hero Image Card */}
             <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-lg flex flex-col h-full overflow-hidden">
               <div className="rounded-lg overflow-hidden border border-gray-200 flex-1 flex flex-col">
                <div className="bg-[#9e4a2d] p-6 text-center">
                  <h2 className="text-white text-xl font-bold uppercase">DIN REACTIVATION</h2>
                  <div className="mt-2 text-sm text-amber-100 uppercase font-bold">Director Compliance Recovery</div>
                </div>
                <div className="bg-[rgb(243,246,249)] p-8 flex justify-center items-center flex-1">
                   <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10 scale-110">
                      <img src={ASSETS.man} alt="DIN Reactivation" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/5" />
                   </div>
                </div>
              </div>
              <ul className="mt-4 text-[13px] space-y-2 text-gray-600 font-bold px-2 pb-2">
                {["Digital Signature Certificate (DSC)", "PAN Card (self-attested)", "Proof of Address"].map(s => (
                  <li key={s} className="hover:text-amber-700 transition-colors flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-600/30 rounded-full" /> {s}
                  </li>
                ))}
                <li className="text-amber-700 underline hover:text-amber-800 cursor-pointer font-bold pl-3.5">Load More</li>
              </ul>
            </div>

            {/* Col 2: Info Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg flex flex-col h-full">
               <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-2 w-fit">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                    <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest">MCA COMPLIANCE</span>
               </div>
               <h1 className="text-2xl font-bold text-slate-900 mb-1">DIN Reactivation</h1>
               <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />)}
                  <span className="text-[11px] text-slate-400 ml-1">(2,709 reviews)</span>
               </div>

               <p className="text-[14px] text-slate-500 leading-relaxed mb-6 font-bold">
                 Director Identification Number (DIN) is an essential identifier for directors. Reactivate your deactivated DIN through DIR-3 KYC filing.
               </p>

               <div className="border-2 border-dashed border-amber-200 rounded-xl p-5 bg-amber-50/10 relative mt-auto">
                  <div className="absolute -top-3 left-4 bg-white px-2 text-[10px] uppercase font-bold text-amber-700 rounded border border-amber-200 tracking-wider">Expert Help</div>
                  <ul className="space-y-3 mt-1">
                    <li className="flex items-start gap-2 text-[13px] text-slate-600 font-bold">
                      <ChevronRight className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" /> Application Filing in MCA
                    </li>
                    <li className="flex items-start gap-2 text-[13px] text-slate-600 font-bold">
                      <ChevronRight className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" /> Provide DIN-eKYC & Acknowledgement Copy
                    </li>
                  </ul>
                  <button className="mt-4 w-full bg-[#9e4a2d] text-white py-3 rounded-lg font-bold hover:bg-[#8b4127] transition-all shadow-md uppercase text-sm tracking-wide">Add to Cart</button>
               </div>

               <div className="mt-6 flex flex-col gap-3 font-bold">
                  <div className="flex items-center justify-between text-[11px] text-amber-700 border-b border-gray-50 pb-2">
                     <span className="underline cursor-pointer">Terms and conditions</span>
                     <span className="underline cursor-pointer">Refer a Friend</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 border border-gray-100 rounded-xl hover:border-amber-200 transition-colors">
                    <img src={ASSETS.ledgers} alt="ledgers" className="w-10 h-10 object-contain" />
                    <div>
                      <div className="text-[11px] font-bold text-amber-700 uppercase">LEDGERS Platform</div>
                      <div className="text-[10px] text-slate-400 font-bold">Automatic KYC Reminders</div>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          <div className="space-y-12">
             <article className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h1 className="text-2xl font-bold text-[#9e4a2d] mb-8 border-b-2 border-amber-600/10 pb-4 text-center uppercase">
                   DIN Reactivation Guide (DIR-3 KYC)
                </h1>

                <div className="prose prose-sm max-w-none text-slate-600 space-y-6 leading-relaxed font-bold">
                   <p>
                    Director Identification Number (DIN) is an essential identifier for anyone aspiring to be a director in Indian companies, issued by the Ministry of Corporate Affairs (MCA). Directors are required to update their KYC details annually through the DIR-3 KYC form with the MCA. Failure to do so leads to the deactivation of the DIN, which restricts their ability to function in corporate roles. To reactivate a deactivated DIN, directors must file the DIR-3 KYC form, sometimes with a late fee, depending on the delay.
                   </p>
                   
                   <h3 className="text-xl font-bold text-slate-900 pt-4 uppercase">Director Identification Number (DIN)</h3>
                   <p>A Director Identification Number (DIN) is an 8-digit unique identifier assigned to directors. Once issued, it remains valid for the lifetime of the director.</p>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase">What is Form DIR-3 KYC?</h3>
                   <p>Form DIR-3 KYC is an electronic form mandated by MCA to update KYC details of directors.</p>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase">Applicability</h3>
                   <p>Form DIR-3 KYC is mandatory for directors allotted DIN by or before March 31, 2018 and with status 'approved'.</p>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase">Purpose of DIR-3 KYC (Know Your Customer)</h3>
                   <p>The purpose is to maintain current and accurate director information with the ROC including addresses, contact numbers and email addresses.</p>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase underline">Annual Deadline for Filing Form DIR-3 KYC</h3>
                   <p>Deadline is set as September 30th of each year (subject to MCA extensions).</p>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase">Types of DIR-3 KYC Forms</h3>
                   <p>DIR-3 KYC eForm (for first-time filers) and DIR-3-KYC-WEB (simplified web form for returning filers).</p>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase">DIN Deactivation & Reactivation</h3>
                   <p>If a director does not file, their DIN may be marked 'Deactivated due to Non-filing of DIR-3 KYC'. To reactivate, file the appropriate form and follow MCA approvals.</p>

                   <h3 className="text-lg font-bold text-slate-900 pt-6 uppercase underline">Streamline Your DIN Reactivation Process</h3>
                   <p>We offer comprehensive assistance at every stage ΓÇö application support, form completion guidance, PAN verification, DSC help, document attachment and SRN generation & follow-up.</p>
                </div>
             </article>

             {/* Documents Sections */}
             <div className="space-y-8">
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                   <h3 className="text-xl font-bold text-[#9e4a2d] mb-6 border-b border-gray-50 pb-3 uppercase text-[16px]">Documents Required For DIN Reactivation</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {DOCUMENTS_REQUIRED.map((doc, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-white/50 rounded-xl border border-gray-100 font-bold group hover:border-amber-200 transition-colors">
                           <span className="text-sm text-slate-700 group-hover:text-amber-800">{doc.name}</span>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                   <h3 className="text-xl font-bold text-[#9e4a2d] mb-6 border-b border-gray-50 pb-3 uppercase text-[16px]">Documents Required for Other Registrations</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {OTHER_REGISTRATIONS.map((doc, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 font-bold group hover:border-amber-300 transition-all hover:shadow-md">
                           <span className="text-[13px] text-slate-700 group-hover:text-amber-800">{doc.name}</span>
                           <span className="bg-amber-100 text-amber-700 w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold">{doc.count}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>

             {/* FAQ Section */}
             <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h3 className="text-xl font-bold text-[#9e4a2d] mb-8 border-b border-gray-50 pb-4 uppercase tracking-widest text-[16px]">FAQ's</h3>
                <div className="space-y-4 font-bold">
                  {faqItems.map((faq, idx) => (
                    <div key={idx} className="border border-slate-100 rounded-xl overflow-hidden hover:border-amber-200 transition-colors shadow-sm bg-white">
                      <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-center justify-between p-5 text-left hover:bg-amber-50/10 transition-colors group">
                        <span className="text-sm font-bold text-slate-800 group-hover:text-amber-700">{faq.q}</span>
                        <div className={`p-1.5 rounded-full bg-amber-50 transition-all shrink-0 ${openFaq === idx ? 'rotate-45' : ''}`}>
                           <Plus className="w-4 h-4 text-amber-600" />
                        </div>
                      </button>
                      {openFaq === idx && (
                        <div className="p-5 bg-amber-50/5 text-sm text-slate-500 border-t border-slate-100 leading-relaxed font-bold">{faq.a}</div>
                      )}
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </section>

        {/* Global Sidebar: Persistent Sticky Content */}
        <aside className="lg:w-80 flex-shrink-0 space-y-6">
           <div className="sticky top-28 space-y-6">
              <SidebarCart />
              
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm font-bold">
                <h4 className="font-bold text-slate-900 mb-5 text-[14px] border-b pb-3 uppercase tracking-wider">Related Guides</h4>
                <ul className="text-[13px] space-y-4 text-amber-700">
                  {["Complete Guide on DIN", "How to Obtain DIN?", "DIN Number Search"].map((item) => (
                    <li key={item} className="hover:text-amber-800 cursor-pointer flex gap-3 group items-center">
                       <div className="w-1.5 h-1.5 bg-amber-600/50 rounded-full group-hover:scale-125 transition-transform" />
                       <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:scale-[1.02] transition-transform">
                <img src={ASSETS.companyCompliance} alt="compliance" className="w-full h-auto object-cover" />
                <div className="p-5 bg-white font-bold">
                  <div className="text-[14px] text-slate-800 uppercase">Director Compliance</div>
                  <div className="text-[11px] text-slate-400 mt-1 font-bold">Stay active in MCA records</div>
                </div>
              </div>
           </div>
        </aside>
      </main>

      <PopularSearches />
      <Footer />

      {/* WhatsApp CTA */}
      <div className="fixed right-6 bottom-6 bg-gradient-to-r from-[#9e4a2d] to-[#8b4127] text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 z-50 hover:scale-105 transition-all cursor-pointer group">
        <img src={ASSETS.whatsapp} alt="wa" className="w-6 h-6" />
        <span className="font-bold text-[15px]">Expert Chat</span>
      </div>
    </div>
  );
}
