import Link from "next/link";

export default function PopularSearches() {
 const searches = [
 { name: "Partnership", link: "/partnership" },
 { name: "Limited Liability Partnership", link: "/llp-registartion" },
 { name: "Digital Signature", link: "/digital-signature" },
 { name: "Copyright Registration", link: "/copyright-registration" },
 { name: "Logo Designing", link: "/logo-designing" },
 { name: "GST Registration", link: "/gst-registration" },
 { name: "Virtual Office + GSTIN", link: "/virtual-office" },
 { name: "ICEGATE Registration", link: "/icegate-registration" },
 { name: "PF Registration", link: "/pf-registration" },
 { name: "HR Payroll", link: "/hr-payroll" },
 { name: "Public Limited Company", link: "/public-limited-company" },
 { name: "Indian Subsidiarys", link: "/indian-subsidiary" },
 { name: "Proprietorship", link: "/proprietorship" },
 { name: "Private Limited Company", link: "/company-registration" },
 { name: "FSSAI Registration", link: "/fssai" },
 { name: "FSSAI Licenses", link: "/fssai-license" },
 { name: "Drug License", link: "/drug-license" },
 { name: "Trademark Hearing", link: "/trademark-hearing" },
 { name: "TN RERA Registration for Agents", link: "/rera-registration-agents" },
 { name: "Copyright Objection", link: "/copyright-objection" },
 { name: "Patent Registration", link: "/patent-registration" },
 { name: "Trademark Protection", link: "/trademark-protection" },
 { name: "GST Return Filing by Accountant", link: "/gst-return-filing" },
 { name: "GST NIL Return Filing", link: "/gst-return-filing-nil-filing" },
 { name: "Income Tax E-Filing", link: "/income-tax-efiling" },
 { name: "ITR-1 Return Filing", link: "/itr-1-return-filing" },
 { name: "ITR-3 Return Filing", link: "/itr-3-return-filing" },
 { name: "ADT-1 Filing", link: "/adt-1-filing" },
 { name: "Commencement INC-20A", link: "/commencement-inc-20a" },
 { name: "Share Transfer", link: "/share-transfer" },
 { name: "AOA Amendment", link: "/aoa-amendment" },
 { name: "Authorized Capital Increase", link: "/authorized-capital-increase" },
 { name: "Demat of Shares", link: "/demat-of-shares" },
 { name: "Company Compliance", link: "/company-compliance" },
 { name: "DIN Reactivation", link: "/din-reactivation" },
 { name: "Registered Office Change", link: "/registered-office-change" },
 { name: "LLP Compliance", link: "/llp-compliance" },
 { name: "Remove Director", link: "/remove-director" },
 { name: "Windup Company", link: "/windup-company" },
 { name: "Business Plan", link: "/business-plan" },
 { name: "CA Support", link: "/ca-support" },
 { name: "Proprietorship Compliance", link: "/proprietorship-compliance" },
 { name: "Fire License", link: "/fire-license" },
 { name: "ISO Registration", link: "/iso-registration" },
 { name: "Expedited TM Registration", link: "/expedited-tm-registration" },
 { name: "Halal License & Certification", link: "/halal-certificate" },
 ];

 return (
 <section className="bg-[#F4F3EE] py-2 lg:py-3">
 <div className="max-w-7xl mx-auto px-4 sm:px-6">

 {/* Header Section */}
 <div className="text-center mb-6">
 <div className="inline-flex items-center gap-2 bg-white border border-[#E5E2DA] rounded-full px-4 py-1.5 mb-3">
 <div className="w-2 h-2 bg-[#C15F3C] rounded-full animate-pulse" />
 <span className="text-xs font-medium text-[#C15F3C] uppercase ">
 Quick Access
 </span>
 </div>
 <h2 className="text-2xl sm:text-3xl font-bold text-[#2F2E2B] mb-2">
 Popular Searches
 </h2>
 <p className="text-sm text-[#6F6B63] max-w-2xl mx-auto">
 Most commonly searched services by our users
 </p>
 <div className="h-0.5 w-16 bg-gradient-to-r from-[#C15F3C] to-[#A94E30] rounded-full mx-auto mt-3"></div>
 </div>

 {/* Main Container */}
 <div className="bg-white rounded-2xl shadow-sm border border-[#E5E2DA] overflow-hidden">

 {/* Header with Gradient Bar */}
 <div className="relative">
 <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C15F3C] via-[#C15F3C]/50 to-transparent"></div>
 <div className="px-6 pt-6 pb-4">
 <div className="flex items-center gap-3">
 <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C15F3C]/10 to-[#A94E30]/10 flex items-center justify-center">
 <svg className="w-5 h-5 text-[#C15F3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
 </svg>
 </div>
 <div>
 <h3 className="text-lg font-semibold text-[#2F2E2B]">
 Explore Our Services
 </h3>
 <p className="text-xs text-[#6F6B63]">
 {searches.length}+ topics to explore
 </p>
 </div>
 </div>
 </div>
 </div>

 {/* Tags Cloud */}
 <div className="px-6 pb-4">
 <div className="flex flex-wrap gap-2.5">
 {searches.slice(0, 24).map((item, index) => (
 <Link key={index} href={item.link}>
 <span className="group relative inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#F4F3EE] hover:bg-white text-[#C15F3C] text-xs font-medium rounded-xl cursor-pointer transition-all duration-200 border border-[#E5E2DA] hover:border-[#C15F3C] hover:shadow-sm hover:-translate-y-0.5">
 <span className="w-1 h-1 rounded-full bg-[#C15F3C] opacity-60 group-hover:opacity-100"></span>
 {item.name}
 </span>
 </Link>
 ))}
 </div>
 </div>

 {/* Divider */}
 <div className="mx-6 h-px bg-gradient-to-r from-transparent via-[#E5E2DA] to-transparent"></div>

 {/* More Tags Section */}
 <div className="px-6 py-4">
 <details className="group">
 <summary className="flex items-center justify-between cursor-pointer list-none">
 <div className="flex items-center gap-2">
 <svg className="w-4 h-4 text-[#C15F3C] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
 </svg>
 <span className="text-sm font-medium text-[#C15F3C] hover:text-[#A94E30] transition-colors">
 Show More Services
 </span>
 </div>
 <span className="text-xs text-[#6F6B63]">
 +{searches.length - 24} more
 </span>
 </summary>
 <div className="mt-4 pt-2 border-t border-[#E5E2DA]">
 <div className="flex flex-wrap gap-2.5">
 {searches.slice(24).map((item, index) => (
 <Link key={index} href={item.link}>
 <span className="group relative inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#F4F3EE] hover:bg-white text-[#C15F3C] text-xs font-medium rounded-xl cursor-pointer transition-all duration-200 border border-[#E5E2DA] hover:border-[#C15F3C] hover:shadow-sm hover:-translate-y-0.5">
 <span className="w-1 h-1 rounded-full bg-[#C15F3C] opacity-60 group-hover:opacity-100"></span>
 {item.name}
 </span>
 </Link>
 ))}
 </div>
 </div>
 </details>
 </div>

 {/* Footer - Removed View All Button */}
 <div className="px-6 py-4 bg-gradient-to-r from-[#F4F3EE] to-white border-t border-[#E5E2DA]">
 <div className="flex items-center justify-center gap-2 text-xs text-[#6F6B63]">
 <svg className="w-4 h-4 text-[#C15F3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
 </svg>
 <span>Popular topics updated weekly</span>
 </div>
 </div>

 </div>

 {/* Decorative Element */}
 <div className="mt-6 text-center">
 <p className="text-xs text-[#B1ADA1]">
 Can't find what you're looking for?{' '}
 <Link href="/contact">
 <span className="text-[#C15F3C] hover:text-[#A94E30] font-medium hover:underline cursor-pointer">
 Contact our support
 </span>
 </Link>
 </p>
 </div>

 </div>
 </section>
 );
}