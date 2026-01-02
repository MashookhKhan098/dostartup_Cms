

// "use client";
// import { Bell, CalendarDays } from "lucide-react"; // icons

// export default function UpdatesAndDueDates() {
//   return (
//     <section className="bg-white">
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         <div className="grid md:grid-cols-2 gap-6">

//           {/* Left - Updates & Alerts */}
//           <div className="bg-white border rounded-xl shadow-sm p-6 md:p-8">
//             <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
//               <Bell className="w-5 h-5 text-blue-600" />
//               Updates & Alerts
//             </h3>

//             <div className="space-y-4 max-h-64 overflow-y-auto pr-2 scrollbar-hide">
              
//               {[
//                 {
//                   title: "FLA Return Due Date is Approaching! File on or before July 15, 2025 to stay compliant!",
//                   date: "Published on: 04-Jul-2025",
//                   tag: "FLA Return",
//                 },
//                 {
//                   title: "GSTR-3B Auto-Populated Fields will be Hard-Locked from July – No Manual Edits Allowed!",
//                   date: "Published on: 30-Jun-2025",
//                   tag: "GSTR 3B",
//                 },
//                 {
//                   title: "CBDT Extends Deadline to Process Delayed ITRs Filed Under Condonation till March 2026!",
//                   date: "Published on: 27-Jun-2025",
//                   tag: "ITR",
//                 },
//               ].map((item, idx) => (
//                 <div
//                   key={idx}
//                   className="relative pl-4 border-l border-gray-200 hover:border-blue-400 transition-all duration-300"
//                 >
//                   <div className="absolute -left-[5px] top-2 w-2 h-2 bg-blue-500 rounded-full transition-all duration-300"></div>
                  
//                   <div className="p-2 rounded-lg hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-300">
//                     <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
//                       {item.title}
//                     </a>
//                     <p className="text-xs text-gray-500 mt-1">{item.date}</p>
//                     <span className="inline-block text-[10px] bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded mt-1">
//                       {item.tag}
//                     </span>
//                   </div>
//                 </div>
//               ))}

//             </div>
//           </div>

//           {/* Right - Due Dates */}
//           <div className="bg-white border rounded-xl shadow-sm p-6 md:p-8">
//             <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
//               <CalendarDays className="w-5 h-5 text-blue-600" />
//               Due Dates
//             </h3>

//             <div className="space-y-4 max-h-64 overflow-y-auto pr-2 scrollbar-hide">
//               {[
//                 {
//                   title: "TDS Payment in Form 26QB (Property), 26QC (Rent), 26QD (Contractor Payments), 26QE (Crypto Assets) for Sep 2025",
//                   due: "Due Date: 30-Oct-2025",
//                 },
//                 {
//                   title: "Income Tax Returns for Non Corporate’s who needs Audit and Corporates for FY 2024-25",
//                   due: "Due Date: 31-Oct-2025",
//                 },
//                 {
//                   title: "TDS Returns in Form 24Q, 26Q, 27Q for July to Sep 2025",
//                   due: "Due Date: 31-Oct-2025",
//                 },
//               ].map((item, idx) => (
//                 <div
//                   key={idx}
//                   className="relative pl-4 border-l border-gray-200 hover:border-blue-400 transition-all duration-300"
//                 >
//                   <div className="absolute -left-[5px] top-2 w-2 h-2 bg-blue-500 rounded-full transition-all duration-300"></div>

//                   <div className="p-2 rounded-lg hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-300">
//                     <p className="text-gray-800 text-sm font-medium">{item.title}</p>
//                     <p className="text-xs text-gray-500 mt-1">{item.due}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { Bell, CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";

const STRAPI_URL = "http://localhost:1337";

export default function UpdatesAndDueDates() {
  const [updates, setUpdates] = useState<any[]>([]);
  const [dueDates, setDueDates] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${STRAPI_URL}/api/updates?sort=publishedDate:desc`)
      .then((res) => res.json())
      .then((json) => setUpdates(json.data || []));

    fetch(`${STRAPI_URL}/api/due-dates?sort=dueDate`)
      .then((res) => res.json())
      .then((json) => setDueDates(json.data || []));
  }, []);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-6">

          {/* Updates & Alerts */}
          <div className="bg-white border rounded-xl shadow-sm p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Bell className="w-5 h-5 text-blue-600" />
              Updates & Alerts
            </h3>

            <div className="space-y-4 max-h-64 overflow-y-auto pr-2 scrollbar-hide">
              {updates.map((item, idx) => (
                <div
                  key={idx}
                  className="relative pl-4 border-l border-gray-200 hover:border-blue-400 transition-all"
                >
                  <div className="absolute -left-[5px] top-2 w-2 h-2 bg-blue-500 rounded-full"></div>

                  <div className="p-2 rounded-lg hover:bg-blue-50 transition-all">
                    <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
                      {item.title}
                    </a>
                    <p className="text-xs text-gray-500 mt-1">
                      Published on: {item.publishedDate}
                    </p>
                    <span className="inline-block text-[10px] bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded mt-1">
                      {item.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Due Dates */}
          <div className="bg-white border rounded-xl shadow-sm p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-blue-600" />
              Due Dates
            </h3>

            <div className="space-y-4 max-h-64 overflow-y-auto pr-2 scrollbar-hide">
              {dueDates.map((item, idx) => (
                <div
                  key={idx}
                  className="relative pl-4 border-l border-gray-200 hover:border-blue-400 transition-all"
                >
                  <div className="absolute -left-[5px] top-2 w-2 h-2 bg-blue-500 rounded-full"></div>

                  <div className="p-2 rounded-lg hover:bg-blue-50 transition-all">
                    <p className="text-gray-800 text-sm font-medium">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Due Date: {item.dueDate}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
