export default function Hero() {
  return (
    <section className="bg-green-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center py-12 px-6">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            TDS Filing & Form 16 Issuance
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Simplify with IndiaFilings
          </p>
          <button className="bg-green-700 text-white px-6 py-3 rounded-lg">
            Get Started
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/hero.jpg" alt="Hero" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}
