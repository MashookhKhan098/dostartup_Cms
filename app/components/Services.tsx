// const services = [
//   { name: "Incorporation", icon: "🏢" },
//   { name: "Trademark", icon: "™️" },
//   { name: "Accounting", icon: "📊" },
//   { name: "Income Tax", icon: "💰" },
//   { name: "GST Services", icon: "📄" },
//   { name: "Payroll", icon: "💼" },
// ];

// export default function Services() {
//   return (
//     <section className="py-12 bg-white text-center">
//       <h3 className="text-2xl font-semibold mb-6">Explore our digital services stack</h3>
//       <div className="grid grid-cols-2 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
//         {services.map((s, i) => (
//           <div key={i} className="p-4 border rounded-xl hover:shadow-lg transition">
//             <div className="text-3xl mb-2">{s.icon}</div>
//             <p className="font-medium text-gray-700">{s.name}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }







// app/components/ServicesSection.tsx

import {
  Briefcase,
  Stamp,
  Calculator,
  FileText,
  Receipt,
  Wallet,
} from "lucide-react";

const services = [
  { name: "Incorporation", icon: Briefcase },
  { name: "Trademark", icon: Stamp },
  { name: "Accounting", icon: Calculator },
  { name: "Income Tax", icon: FileText },
  { name: "GST Services", icon: Receipt },
  { name: "Payroll", icon: Wallet },
];

export default function ServicesSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
          Explore our digital services stack
        </h3>
        <p className="text-gray-600 mb-8 text-sm md:text-base">
          Grow your business and remain compliant by partnering with DoStartup
          for a range of high-quality, business services from incorporation to
          payroll delivered through a seamless online platform.
        </p>

        <div className="bg-white border rounded-xl shadow-sm p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center cursor-pointer hover:bg-slate-50 p-3 rounded transition"
            >
              <service.icon className="h-8 w-8 text-blue-600 mb-2" />
              <span className="text-sm font-medium text-gray-800">
                {service.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


