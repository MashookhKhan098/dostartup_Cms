// export default function PopularSearches() {
//   const searches = [
//     "Partnership", "Limited Liability Partnership", "Digital Signature", "Copyright Registration",
//     "Unified Portal", "PAN Card Download", "Nadakacheri", "Flipkart Seller", "Caste Certificate", "IAY",
//     "EPFO Passbook", "Domicile Certificate", "Udyog Aadhaar", "PF Withdrawal", "Karnataka One",
//     "Encumbrance Certificate", "Bonafide Certificate", "Instant PAN Card", "E PAN Card", "Income Certificate",
//     "Marriage Certificate", "Passport Renewal", "Nivesh Mitra", "MSME Registration", "Experience Certificate",
//     "Trademark Status", "Trade License", "Domicile", "eMitra", "UAN", "PICME",
//     "Resignation Letter Format", "Ration Card", "TNREGINET", "RAJSSP", "LLP Compliance", "Form 16",
//     "Police Clearance Certificate", "OBC Certificate", "Jamabandi", "Mee Bhoomi", "SC Certificate",
//     "UAN Login", "eAadhaar Download", "Linking Aadhaar To Bank Accounts", "mAadhaar", "Aadhaar Enrollment Centre",
//     "UAN Passbook", "Amazon How to Sell", "PAN Card Apply", "EPFO Unified Portal"
//   ];

//   return (
//     <section className="bg-white border-t">
//       <div className="max-w-7xl mx-auto px-6 py-10">
//         <h2 className="text-lg font-semibold text-slate-900 mb-6">Popular Searches</h2>

//         <div className="flex flex-wrap gap-3">
//           {searches.map((item, index) => (
//             <a
//               key={index}
//               href="#"
//               className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-md text-sm font-medium hover:bg-blue-100 transition"
//             >
//               {item}
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }









// app/components/PopularSearches.tsx

// export default function PopularSearches() {
//   const searches: string[] = [
//     "Partnership", "Limited Liability Partnership", "Digital Signature", "Copyright Registration", "Unified Portal",
//     "PAN Card Download", "Nadakacheri", "Flipkart Seller", "Caste Certificate", "IAY", "EPFO Passbook",
//     "Domicile Certificate", "Udyog Aadhaar", "PF Withdrawal", "Karnataka One", "Encumbrance Certificate",
//     "Bonafide Certificate", "Instant PAN Card", "E PAN Card", "Income Certificate", "Marriage Certificate",
//     "Passport Renewal", "Nivesh Mitra", "MSME Registration", "Experience Certificate", "Trademark Status",
//     "Trade License", "Domicile", "eMitra", "UAN", "PICME", "Resignation Letter Format", "Ration Card", "TNREGINET",
//     "RAJSSP", "LLP Compliance", "Form 16", "Police Clearance Certificate", "OBC Certificate", "Jamabandi",
//     "Mee Bhoomi", "SC Certificate", "UAN Login", "eAadhaar Download", "Linking Aadhaar To Bank Accounts",
//     "mAadhaar", "Aadhaar Enrollment Centre", "UAN Passbook", "Amazon How to Sell", "PAN Card Apply",
//     "EPFO Unified Portal"
//   ];

//   return (
//     <section className="bg-white">
//       <div className="max-w-7xl mx-auto px-6 py-8">
//         {/* rounded pale box */}
//         <div className="bg-white border rounded-xl shadow-sm p-6 md:p-8">
//           <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Searches</h3>

//           {/* Search items grid */}
//           <div className="flex flex-wrap gap-2">
//             {searches.map((item, index) => (
//               <span
//                 key={index}
//                 className="px-3 py-1.5 bg-slate-100 hover:bg-blue-100 text-blue-700 text-sm font-medium rounded cursor-pointer transition"
//               >
//                 {item}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




// app/components/PopularSearches.tsx

  
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

    { name: "GST Registration", link: "/gst-registration" },
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
    { name: "Drug License", link: "/drug-license" },

    { name: "Expedited TM Registration", link: "/expedited-tm-registration" },
    { name: "Halal License & Certification", link: "/halal-certificate" },
  
  ];

  return (
    <section className="">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
    <div className="bg-white border border-[#B1ADA1]/40 rounded-2xl shadow-md p-5 sm:p-6">

      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1 h-5 bg-gradient-to-b from-[#C15F3C] to-[#a94f30] rounded-full"></div>
        <h3 className="text-base font-semibold text-[#2f2f2f]">
          Popular Searches
        </h3>
        <div className="flex-1 h-px bg-gradient-to-r from-[#C15F3C]/30 to-transparent ml-2"></div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {searches.map((item, index) => (
          <Link key={index} href={item.link}>
            <span className="px-3 py-1.5 bg-[#F4F3EE] hover:bg-[#C15F3C]/10 text-[#C15F3C] text-xs font-medium rounded-lg cursor-pointer transition-all duration-200 hover:shadow-sm border border-[#B1ADA1]/40 hover:border-[#C15F3C]/50">
              {item.name}
            </span>
          </Link>
        ))}
      </div>

      {/* View More */}
      <div className="mt-4 text-right">
        <Link href="/all-searches">
          <span className="text-xs text-[#C15F3C] hover:text-[#a94f30] font-medium inline-flex items-center gap-1 group cursor-pointer">
            View All Searches
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </Link>
      </div>

    </div>
  </div>
</section>
  );
}