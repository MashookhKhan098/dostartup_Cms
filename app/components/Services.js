const services = [
  { name: "Incorporation", icon: "🏢" },
  { name: "Trademark", icon: "™️" },
  { name: "Accounting", icon: "📊" },
  { name: "Income Tax", icon: "💰" },
  { name: "GST Services", icon: "📄" },
  { name: "Payroll", icon: "💼" },
];

export default function Services() {
  return (
    <section className="py-12 bg-white text-center">
      <h3 className="text-2xl font-semibold mb-6">Explore our digital services stack</h3>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <div key={i} className="p-4 border rounded-xl hover:shadow-lg transition">
            <div className="text-3xl mb-2">{s.icon}</div>
            <p className="font-medium text-gray-700">{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
