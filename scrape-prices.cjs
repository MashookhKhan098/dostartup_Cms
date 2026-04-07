const https = require('https');
const fs = require('fs');

const urls = [
  'https://www.indiafilings.com/company-registration',
  'https://www.indiafilings.com/trademark-registration',
  'https://www.indiafilings.com/gst-registration',
  'https://www.indiafilings.com/startup',
  'https://www.indiafilings.com/partnership',
  'https://www.indiafilings.com/proprietorship'
];

function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({url, data}));
    }).on('error', err => reject(err));
  });
}

async function scrape() {
  let output = '';
  for (const u of urls) {
    try {
      const {url, data} = await fetchHTML(u);
      
      output += `\n\n=== ${url} ===\n`;
      
      // Look for the pricing section roughly.
      // IndiaFilings usually has cards with class containing "pricing" or prices like ₹1,999 or ₹2,899
      // We will match a block around "₹" and capture text.
      const priceRegex = /<[^>]+>[^<]*₹\s*([0-9,]+)[^<]*<\/[^>]+>/g;
      const matches = [...data.matchAll(priceRegex)];
      
      if (matches.length > 0) {
        for (const match of matches) {
          const index = match.index;
          // extract an 800 char window around the price to capture title and features
          let windowStr = data.substring(Math.max(0, index - 500), Math.min(data.length, index + 1500));
          // Strip HTML tags for easier reading
          let cleanStr = windowStr.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                                  .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                                  .replace(/<[^>]+>/g, ' ')
                                  .replace(/\s+/g, ' ')
                                  .replace(/&amp;/g, '&')
                                  .replace(/&#39;/g, "'")
                                  .trim();
          output += `\nPrice found: ${match[1]}\nSnippet: ...${cleanStr}...\n`;
        }
      } else {
        output += "No prices found.\n";
      }
    } catch (e) {
      output += `Error fetching ${u}: ${e.message}\n`;
    }
  }
  fs.writeFileSync('pricing_dump.txt', output);
  console.log('done');
}
scrape();
