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

export default function PopularSearches() {
  const searches: string[] = [
    "Partnership", "Limited Liability Partnership", "Digital Signature", "Copyright Registration", "Unified Portal",
    "PAN Card Download", "Nadakacheri", "Flipkart Seller", "Caste Certificate", "IAY", "EPFO Passbook",
    "Domicile Certificate", "Udyog Aadhaar", "PF Withdrawal", "Karnataka One", "Encumbrance Certificate",
    "Bonafide Certificate", "Instant PAN Card", "E PAN Card", "Income Certificate", "Marriage Certificate",
    "Passport Renewal", "Nivesh Mitra", "MSME Registration", "Experience Certificate", "Trademark Status",
    "Trade License", "Domicile", "eMitra", "UAN", "PICME", "Resignation Letter Format", "Ration Card", "TNREGINET",
    "RAJSSP", "LLP Compliance", "Form 16", "Police Clearance Certificate", "OBC Certificate", "Jamabandi",
    "Mee Bhoomi", "SC Certificate", "UAN Login", "eAadhaar Download", "Linking Aadhaar To Bank Accounts",
    "mAadhaar", "Aadhaar Enrollment Centre", "UAN Passbook", "Amazon How to Sell", "PAN Card Apply",
    "EPFO Unified Portal"
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="bg-white border rounded-xl shadow-sm p-6 md:p-8">
          <h3 className="text-base font-semibold text-gray-900 mb-4">
            Popular Searches
          </h3>

          <div className="flex flex-wrap gap-2">
            {searches.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-slate-100 hover:bg-blue-100 text-blue-700 text-xs font-medium rounded cursor-pointer transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
