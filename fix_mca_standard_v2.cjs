const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
    const fullPath = path.resolve(__dirname, filePath);
    try {
        if (!fs.existsSync(fullPath)) {
            console.log('Skipping non-existent ' + filePath);
            return;
        }
        let content = fs.readFileSync(fullPath, 'utf8');
        
        // 1. Fix Imports
        if (!content.includes('SidebarCart')) {
            content = content.replace('import Navbar from "../components/Navbar";', 'import Navbar from "../components/Navbar";\nimport SidebarCart from "../components/SidebarCart";\nimport Footer from "../components/Footer";');
        }
        
        // 2. Replace Sidebar (Legacy to SidebarCart)
        const asideMatch = content.match(/<aside[\s\S]*?<\/aside>/);
        if (asideMatch) {
            content = content.replace(asideMatch[0], '<aside className="col-span-12 lg:col-span-4 max-w-[400px] mx-auto lg:ml-auto">\n          <SidebarCart />\n        </aside>');
        }
        
        // 3. Add Footer before closing div
        if (!content.includes('<Footer />')) {
             const mainEnd = content.lastIndexOf('</main>');
             if (mainEnd > -1) {
                 const closingPart = content.substring(mainEnd);
                 const newClosing = closingPart.replace('</main>', '</main>\n      <Footer />');
                 content = content.substring(0, mainEnd) + newClosing;
             }
        }
        
        fs.writeFileSync(fullPath, content);
        console.log('Successfully fixed ' + filePath);
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
