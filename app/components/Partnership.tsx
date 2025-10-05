
// app/components/Partnerships.tsx

export default function Partnerships() {
  const partners = [
    { name: "ICICI Bank", logo: "/logos/icici.png" },
    { name: "Axis Bank", logo: "/logos/axis.png" },
    { name: "HDFC Bank", logo: "/logos/hdfc.png" },
    { name: "Kotak", logo: "/logos/kotak.png" },
    { name: "Yes Bank", logo: "/logos/yes.png" },
    { name: "AU Small Finance Bank", logo: "/logos/au.png" },
    { name: "South Indian Bank", logo: "/logos/southindian.png" },
    { name: "DBS", logo: "/logos/dbs.png" },
    { name: "Standard Chartered", logo: "/logos/standardchartered.png" },
    { name: "IndusInd Bank", logo: "/logos/indusind.png" },
    { name: "Shriram Finance", logo: "/logos/shriram.png" },
    { name: "Aditya Birla Finance", logo: "/logos/adityabirla.png" },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
          Industry leading partnerships
        </h2>
        <p className="text-gray-600 mt-1 mb-6">
          We work with top Indian Institutions to further our shared mission of
          improving ease of doing business and promoting Entrepreneurship in India.
        </p>

        {/* Partners Logos */}
        <div className="bg-white border rounded-xl shadow-sm p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
          {partners.map((partner, idx) => (
            <img
              key={idx}
              src={partner.logo}
              alt={partner.name}
              className="max-h-10 object-contain"
            />
          ))}
        </div>

        {/* Enterprise Partnership CTA */}
        <div className="mt-10 relative rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-black/70"></div>
          <img
            src="/hero.jpg"
            alt="Enterprise background"
            className="w-full h-full object-cover"
          />

          <div className="relative p-8 md:p-12 text-white max-w-xl">
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Enterprise Partnership
            </h3>
            <p className="text-sm md:text-base mb-5 leading-relaxed">
              If you're an independent professional, firm, enterprise client, bank, 
              or government organization, we invite you to reach out to our Enterprise 
              Partnership Team. Our dedicated Enterprise Team is committed to collaborating 
              with a diverse range of clients including professionals, banks, enterprise clients, 
              and government departments to create customized solutions that meet specific 
              requirements. Contact us today to explore partnership opportunities to work 
              together and create value.
            </p>
            <button className="px-5 py-2.5 bg-pink-600 hover:bg-pink-700 text-white font-medium text-sm rounded-lg shadow transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
