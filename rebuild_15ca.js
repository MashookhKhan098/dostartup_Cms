import fs from 'fs';

let content = fs.readFileSync('app/15ca-15cb-filing/page.tsx', 'utf8');

// 1. Add DoStartupPricing import
if(!content.includes('import DoStartupPricing')) {
  content = content.replace('import Footer from "../components/Footer";', 'import Footer from "../components/Footer";\nimport DoStartupPricing from "../components/DoStartupPricing";');
}

// 2. Remove "Offers box with two cards" (lines 221-263 roughly)
const offersStart = '{/* Offers box with two cards */}';
const offersEndMarker = '<div className="mt-4 border-t pt-4 text-sm flex justify-between items-center text-slate-600">';
const offersStartIdx = content.indexOf(offersStart);
const offersEndIdx = content.indexOf(offersEndMarker);
if(offersStartIdx !== -1 && offersEndIdx !== -1) {
  content = content.replace(content.substring(offersStartIdx, offersEndIdx), '');
}

// 3. Extract Related Guides & FAQ grid
const relatedStart = '{/* Related Guides + long content placeholders */}';
const relatedEndMarker = '</section>'; // Start of <aside className="lg:col-span-4 hidden lg:block">
const relatedStartIdx = content.indexOf(relatedStart);
const relatedEndIdx = content.indexOf('{/* Right column (sidebar) */}');

// The block to remove is between relatedStart to relatedEndIdx, except there's `</section>` closing the left col.
const blockToRemoveStr = content.substring(content.indexOf('<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">', relatedStartIdx), content.substring(0, relatedEndIdx).lastIndexOf('</section>'));

// Extract FAQ HTML manually to put at bottom
const faqOuterMatch = blockToRemoveStr.match(/<aside className="lg:col-span-5 bg-white rounded-lg shadow-sm p-6">([\s\S]*?)<\/aside>/);
const faqHtml = faqOuterMatch ? faqOuterMatch[1] : '';

// Remove the whole related/faq block from left column
content = content.replace(blockToRemoveStr, '');

// 4. Inject Related Guides into Right column just under Cart
const relatedHtmlStr = `
 <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
 <h3 className="text-lg font-semibold mb-4">Related Guides</h3>
 <ul className="space-y-3 text-sm text-[#C15F3C]">
 <li>cbdt Grants Relaxation in Electronic Filing of Forms 15ca 15cb</li>
 <li>Form 15cb</li>
 <li>Income Tax Returns Forms</li>
 <li>Form 15ca</li>
 </ul>
 </div>
`;
const formEndMarker = '</form>\n </div>';
content = content.replace(formEndMarker, formEndMarker + `\n` + relatedHtmlStr);

// 5. Inject complete Pricing and FAQ after </main>
const p = `
<DoStartupPricing
  title="Simple packages. Transparent pricing."
  subtitle="Registration fees are charged at cost. Upgrade or add services anytime."
  plans={[
    {
      title: "15CA",
      price: "",
      subtitle: "",
      description: "Filing of the income tax form 15 CA & 15CB by an expert.",
      features: [
        "Income tax form 15 CA pertaining to remittance of money from India to abroad."
      ],
      buttonText: "Start Filing Now"
    },
    {
      title: "15CB",
      price: "",
      subtitle: "",
      description: "Filing of the income tax form 15 CA & 15CB by an expert.",
      isPopular: true,
      features: [
        "Income tax form 15 CB pertaining to remittance of money from India to abroad."
      ],
      buttonText: "Start Filing Now"
    },
    {
      title: "1 Year GST Filing + ITR",
      price: "",
      subtitle: "",
      description: "DoStartup seamlessly provides customized accounting services for businesses with turnover up to 40 lakhs, ensuring compliance, tax ... Read more",
      features: [
        "Dedicated Accountant",
        "GSTR-1 Filing - 12 Months",
        "GSTR-3B Filing - 12 Months",
        "Income Tax Filing",
        "Financial Statements",
        "LEDGERS Software - 1 Year"
      ],
      buttonText: "Start Filing Now"
    }
  ]}
/>

<section className="max-w-[1180px] mx-auto px-6 py-8">
  <div className="bg-white rounded-lg shadow-sm p-6">
    ${faqHtml}
  </div>
</section>
`;

content = content.replace('</main>', '</main>\n' + p);

fs.writeFileSync('app/15ca-15cb-filing/page.tsx', content, 'utf8');
console.log('Restructured 15ca effectively!');
