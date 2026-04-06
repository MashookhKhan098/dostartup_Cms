const fs = require('fs');
const file = 'app/income-tax/page.tsx';
try {
    let content = fs.readFileSync(file, 'utf8');

    // Use a more relaxed regex to find the offers block
    const offersMarker = '<div className="font-semibold text-slate-800 mb-3">\n  Offers and discounts';
    const startIdx = content.indexOf('<div className="mt-5">\n  <div className="font-semibold text-slate-800 mb-3">\n  Offers and discounts');
    
    if (startIdx > -1) {
        // Find the matching closing divs (it's nested 2 deep)
        let endIdx = content.indexOf('</div>\n  </div>', startIdx) + 14;
        
        const offersHtml = `
  <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12 my-10">
    <h2 className="text-2xl font-bold text-slate-900 mb-8">Exclusive Offers & Discounts</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="flex items-center gap-5 p-6 bg-[#F4F3EE] rounded-2xl border border-slate-100 hover:border-[#C15F3C] transition-all group">
        <img src="/images/ledgers.png" alt="LEDGERS" className="w-16 h-16 object-contain grayscale group-hover:grayscale-0 transition-all" />
        <div>
          <div className="font-bold text-slate-900 text-lg mb-1">LEDGERS Compliance Platform</div>
          <p className="text-slate-600 text-sm">Managed Invoicing, GST, Banking and Payroll with expert guidance.</p>
        </div>
      </div>
      <div className="flex items-center gap-5 p-6 bg-[#F4F3EE] rounded-2xl border border-slate-100 hover:border-[#C15F3C] transition-all group">
        <img src="/images/gstin.png" alt="GST" className="w-16 h-16 object-contain grayscale group-hover:grayscale-0 transition-all" />
        <div>
          <div className="font-bold text-slate-900 text-lg mb-1">Save 18% with GST Registration</div>
          <p className="text-slate-600 text-sm">Claim input tax credit and professional e-invoicing for your business.</p>
        </div>
      </div>
    </div>
  </div>`;
        
        content = content.substring(0, startIdx) + content.substring(endIdx);
        
        const insertPos = content.indexOf('<div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 my-8">');
        if (insertPos > -1) {
            content = content.substring(0, insertPos) + offersHtml + '\n\n  ' + content.substring(insertPos);
            fs.writeFileSync(file, content);
            console.log('Successfully moved offers in income-tax');
        } else {
            console.log('Could not find insert position');
        }
    } else {
        console.log('Could not find offers block');
    }
} catch (e) {
    console.error('Error: ' + e.message);
}
