const fs = require('fs');

function fix(filepath) {
    let txt = fs.readFileSync(filepath, 'utf8');
    const lines = txt.split('\n');

    // Find the line that should be the end of the file from the FIRST occurrence of the actual table end
    const lastValidLineText = "        {/* ── PRICING SECTION ── */}";
    
    // We expect the original file to be around line 822. If we see hundreds of extra lines, we have a duplicate.
    // So let's search for "        {/* ── PRICING SECTION ── */}" from top to bottom.
    // The FIRST occurrence is exactly what we want. We'll cut the rest, and append our target lines.
    
    let firstOccur = -1;
    for (let i = 0; i < lines.length; i++) {
         if (lines[i].includes("── PRICING SECTION ──")) {
              firstOccur = i;
              break;
         }
    }
    
    if (firstOccur === -1) {
         console.log("Could not find PRICING SECTION marker in", filepath);
         return;
    }
    
    let goodLines = lines.slice(0, firstOccur);
    
    const ending = `        {/* ── PRICING SECTION ── */}
        <DynamicPricingSection category="income-tax-efiling" />
        <FAQAccordion category="income-tax-filing" />
      </main>
      <Footer />
    </>
  );
}`;

    goodLines.push(...ending.split('\n'));
    fs.writeFileSync(filepath, goodLines.join('\n'));
    console.log('Fixed:', filepath);
}

const p1 = 'c:\\\\Users\\\\yaswa\\\\OneDrive\\\\dostartup\\\\dostartup_Cms\\\\app\\\\income-tax-efiling\\\\page.tsx';
const p2 = 'c:\\\\Users\\\\yaswa\\\\OneDrive\\\\dostartup\\\\dostartup_Cms\\\\app\\\\itr-6-return-filing\\\\page.tsx';
const p3 = 'c:\\\\Users\\\\yaswa\\\\OneDrive\\\\dostartup\\\\dostartup_Cms\\\\app\\\\itr-7-return-filing\\\\page.tsx';
const p4 = 'c:\\\\Users\\\\yaswa\\\\OneDrive\\\\dostartup\\\\dostartup_Cms\\\\app\\\\itr-5-return-filing\\\\page.tsx';
const p5 = 'c:\\\\Users\\\\yaswa\\\\OneDrive\\\\dostartup\\\\dostartup_Cms\\\\app\\\\itr-4-return-filing\\\\page.tsx';

// All these could have been affected because the user was jumping between them.
try { fix(p1); } catch (e) { console.log(e); }
try { fix(p2); } catch (e) { console.log(e); }
try { fix(p3); } catch (e) { console.log(e); }
try { fix(p4); } catch (e) { console.log(e); }
try { fix(p5); } catch (e) { console.log(e); }
