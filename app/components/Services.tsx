// // app/components/ServicesSection.tsx
// import {
//   Briefcase,
//   Stamp,
//   Calculator,
//   FileText,
//   Receipt,
//   Wallet,
// } from "lucide-react";

// const services = [
//   { name: "Incorporation", icon: Briefcase },
//   { name: "Trademark", icon: Stamp },
//   { name: "Accounting", icon: Calculator },
//   { name: "Income Tax", icon: FileText },
//   { name: "GST Services", icon: Receipt },
//   { name: "Payroll", icon: Wallet },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="bg-white">
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
//           Explore our digital services stack
//         </h3>
//         <p className="text-gray-600 mb-8 text-sm md:text-base">
//           Grow your business and remain compliant by partnering with DoStartup
//           for a range of high-quality, business services from incorporation to
//           payroll delivered through a seamless online platform.
//         </p>

//         <div className="bg-white border rounded-xl shadow-sm p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
//           {services.map((service, idx) => (
//             <div
//               key={idx}
//               className="flex flex-col items-center text-center cursor-pointer hover:bg-slate-50 p-3 rounded transition"
//             >
//               <service.icon className="h-8 w-8 text-blue-600 mb-2" />
//               <span className="text-sm font-medium text-gray-800">
//                 {service.name}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// import {
//   Briefcase,
//   Stamp,
//   Calculator,
//   FileText,
//   Receipt,
//   Wallet,
// } from "lucide-react";

// const ICON_MAP: any = {
//   Briefcase: Briefcase,
//   Stamp: Stamp,
//   Calculator: Calculator,
//   FileText: FileText,
//   Receipt: Receipt,
//   Wallet: Wallet,
// };

// const STRAPI_URL = "http://localhost:1337";

// async function getServicesData() {
//   const [sectionRes, servicesRes] = await Promise.all([
//     fetch(`${STRAPI_URL}/api/services-section`, { cache: "no-store" }),
//     fetch(`${STRAPI_URL}/api/services`, { cache: "no-store" }),
//   ]);

//   const section = (await sectionRes.json()).data;
//   const services = (await servicesRes.json()).data;

//   return { section, services };
// }

// export default async function ServicesSection() {
//   const { section, services } = await getServicesData();

//   return (
//     <section className="bg-white">
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
//           {section.title}
//         </h3>

//         <p className="text-gray-600 mb-8 text-sm md:text-base">
//           {section.description}
//         </p>

//         <div className="bg-white border rounded-xl shadow-sm p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
//           {services.map((service: any, idx: number) => {
//             const Icon = ICON_MAP[service.icon];

//             return (
//               <div
//                 key={idx}
//                 className="flex flex-col items-center text-center cursor-pointer hover:bg-slate-50 p-3 rounded transition"
//               >
//                 {Icon && <Icon className="h-8 w-8 text-blue-600 mb-2" />}
//                 <span className="text-sm font-medium text-gray-800">
//                   {service.name}
//                 </span>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import {
  Briefcase,
  Stamp,
  Calculator,
  FileText,
  Receipt,
  Wallet,
} from "lucide-react";

const ICON_MAP: any = {
  Briefcase,
  Stamp,
  Calculator,
  FileText,
  Receipt,
  Wallet,
};

const TOKEN = "API-d969d00908e5d49261dc97c71fdd75794712b377";

const API =
  `https://cms.dostartup.in/api/content/items/service?token=${TOKEN}`;

export default function ServicesSection() {
  const [services, setServices] = useState<any[]>([]);
  const [title, setTitle] = useState("Our Services");
  const [description, setDescription] = useState(
    "Explore our professional solutions designed to help your business grow."
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await fetch(API);
        const json = await res.json();

        if (Array.isArray(json)) {
          setServices(json);

          // OPTIONAL: if cockpit stores section info in first record
          if (json[0]?.sectionTitle) setTitle(json[0].sectionTitle);
          if (json[0]?.sectionDescription)
            setDescription(json[0].sectionDescription);
        }
      } catch (err) {
        console.error("Cockpit services fetch error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="py-12 text-center text-gray-500">
        Loading services...
      </div>
    );
  }

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header with orange gradient */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-4">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-orange-600">WHAT WE OFFER</span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            {title}
          </h3>

          <p className="text-gray-600 text-sm md:text-base">
            {description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-4 sm:p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {services.map((service: any, idx: number) => {
              const iconName = service.icon || service.ICON;
              const serviceName = service.name || service.NAME;
              const Icon = ICON_MAP[iconName];

              return (
                <div
                  key={service._id || idx}
                  className="group flex flex-col items-center text-center cursor-pointer hover:bg-orange-50/50 p-4 rounded-xl transition-all duration-300 hover:shadow-md"
                >
                  {Icon && (
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-orange-600" />
                    </div>
                  )}

                  <span className="text-sm font-medium text-gray-800 group-hover:text-orange-600 transition-colors">
                    {serviceName}
                  </span>

                  {/* Simple underline effect on hover */}
                  <div className="w-0 h-0.5 bg-gradient-to-r from-orange-600 to-orange-400 group-hover:w-8 transition-all duration-300 mt-1"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Need help choosing?{" "}
            <span className="text-orange-600 font-medium cursor-pointer hover:underline">
              Talk to an expert →
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}