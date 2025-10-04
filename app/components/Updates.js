export default function Updates() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6">
        <div className="bg-white p-6 shadow rounded-lg">
          <h4 className="text-lg font-semibold mb-4">Updates & Alerts</h4>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>📢 MCA extends DIR-3 KYC without filing fee till Oct 15, 2025</li>
            <li>📢 File TDS/TCS corrections FY 2018-19 to FY 2023-24</li>
            <li>📢 CBDT extends Tax Audit deadline to Oct 31, 2025</li>
          </ul>
        </div>

        <div className="bg-white p-6 shadow rounded-lg">
          <h4 className="text-lg font-semibold mb-4">Due Dates</h4>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>🗓️ TDS/TCS Payment — 07 Oct 2025</li>
            <li>🗓️ GSTR-1 Monthly — 11 Oct 2025</li>
            <li>🗓️ ADT-1 Filing — 13 Oct 2025</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
