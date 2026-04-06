const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
    const fullPath = path.resolve(__dirname, filePath);
    try {
        if (!fs.existsSync(fullPath)) return;
        let content = fs.readFileSync(fullPath, 'utf8');
        
        // 0. CLEAN UP PREVIOUS DUPLICATE IMPORTS
        content = content.replace(/import SidebarCart from "\.\.\/components\/SidebarCart";\s*/g, '');
        content = content.replace(/import Footer from "\.\.\/components\/Footer";\s*/g, '');

        // 1. STANDARD IMPORTS (Add SidebarCart and Footer)
        if (!content.includes('import SidebarCart')) {
            content = content.replace('import Navbar from "../components/Navbar";', 'import Navbar from "../components/Navbar";\nimport SidebarCart from "../components/SidebarCart";\nimport Footer from "../components/Footer";');
        }

        // 2. REPLACE ASIDE CONTENT WITH SIDEBARCART
        // Ensure we find the aside and inject SidebarCart exactly once
        const asideRegex = /(<aside[\s\S]*?>)[\s\S]*?(<\/aside>)/g;
        content = content.replace(asideRegex, (match, p1, p2) => {
            return p1 + '\n          <SidebarCart />\n        ' + p2;
        });

        // 3. INTEGRATE GLOBAL FOOTER
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
        
        // Deduplicate <Footer /> calls in JSX
        const footerCount = (content.match(/<Footer\s*\/>/g) || []).length;
        if (footerCount > 1) {
            content = content.replace(/<Footer\s*\/>/, ''); 
        }

        // 4. FIX EXTERNAL ASSET LINKS
        content = content.replace(/https:\/\/img\.indiafilings\.com\/catalog\/[a-zA-Z0-9\-\.]+\.(webp|png|jpg|svg)/g, (match) => {
           const filename = match.split('/').pop().replace('.webp', '.png');
           return '/images/' + filename;
        });

        fs.writeFileSync(fullPath, content);
        console.log('Fixed ' + filePath);
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
    'app/din-ekyc-filing/page.tsx',
    'app/moa-amendment/page.tsx'
];

targetFiles.forEach(fixFile);
