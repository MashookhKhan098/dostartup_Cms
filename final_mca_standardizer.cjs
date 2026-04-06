const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
    const fullPath = path.resolve(__dirname, filePath);
    try {
        if (!fs.existsSync(fullPath)) return;
        let content = fs.readFileSync(fullPath, 'utf8');
        
        // 1. STANDARD IMPORTS (Add SidebarCart and Footer)
        if (!content.includes('import SidebarCart')) {
            content = content.replace('import Navbar from "../components/Navbar";', 'import Navbar from "../components/Navbar";\nimport SidebarCart from "../components/SidebarCart";\nimport Footer from "../components/Footer";');
        }

        // 2. REPLACE ASIDE CONTENT WITH SIDEBARCART
        // Find the aside tag and replace everything INSIDE it
        const asideRegex = /(<aside[\s\S]*?>)[\s\S]*?(<\/aside>)/g;
        content = content.replace(asideRegex, (match, p1, p2) => {
            return p1 + '\n          <SidebarCart />\n        ' + p2;
        });

        // 3. INTEGRATE GLOBAL FOOTER
        // If there's a local Footer component defined, delete it first
        content = content.replace(/\/\*[\s\S]*?Footer[\s\S]*?\*\/[\s]*const Footer:?[\s\S]*?return \([\s\S]*?\);[\s]*};/g, '');
        content = content.replace(/const Footer = \(\) => {[\s\S]*?return \([\s\S]*?\);[\s]*};/g, '');
        
        if (!content.includes('<Footer />')) {
            const mainEnd = content.lastIndexOf('</main>');
            if (mainEnd > -1) {
                const closingPart = content.substring(mainEnd);
                const newClosing = closingPart.replace('</main>', '</main>\n      <Footer />');
                content = content.substring(0, mainEnd) + newClosing;
            }
        }

        // 4. FIX EXTERNAL ASSET LINKS (to avoid mixed content or fetching issues)
        content = content.replace(/https:\/\/img\.indiafilings\.com\/catalog\/[a-zA-Z0-9\-\.]+\.(webp|png|jpg|svg)/g, (match) => {
           const filename = match.split('/').pop().replace('.webp', '.png');
           return '/images/' + filename;
        });

        fs.writeFileSync(fullPath, content);
        console.log('Successfully standardized Sidebar & Assets for ' + filePath);
    } catch (e) {
        console.error('Error fixing ' + filePath + ': ' + e.message);
    }
}

const targetFiles = [
    'app/authorized-capital-increase/page.tsx',
    'app/aoa-amendment/page.tsx',
    'app/registered-office-change/page.tsx',
    'app/director-change/page.tsx',
    'app/remove-director/page.tsx',
    'app/llp-compliance/page.tsx',
    'app/opc-compliance/page.tsx',
    'app/adt-1-filing/page.tsx',
    'app/share-transfer/page.tsx',
    'app/name-change-company/page.tsx',
    'app/dpt-3-filing/page.tsx',
    'app/winding-up-llp/page.tsx',
    'app/din-ekyc-filing/page.tsx'
];

targetFiles.forEach(fixFile);
