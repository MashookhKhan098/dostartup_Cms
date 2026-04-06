const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
    const fullPath = path.resolve(__dirname, filePath);
    try {
        if (!fs.existsSync(fullPath)) return;
        let content = fs.readFileSync(fullPath, 'utf8');
        
        // 1. Remove local Footer definition if it exists
        // Looks for "const Footer = () => {" or "const Footer: React.FC = () => {" etc.
        const localFooterRegex = /\/\*[\s\S]*?Footer[\s\S]*?\*\/[\s]*const Footer:?[\s\S]*?return \([\s\S]*?\);[\s]*};/g;
        const localFooterRegex2 = /const Footer = \(\) => {[\s\S]*?return \([\s\S]*?\);[\s]*};/g;
        
        content = content.replace(localFooterRegex, '');
        content = content.replace(localFooterRegex2, '');
        
        // Also remove any remaining <Footer /> if we are going to add it again
        // content = content.replace(/<Footer\s*\/>/g, ''); 

        // 2. Fix Imports
        if (!content.includes('import Footer from "../components/Footer"')) {
            // Remove any other local Footer imports or declarations that might clash
            content = content.replace('import Navbar from "../components/Navbar";', 'import Navbar from "../components/Navbar";\nimport SidebarCart from "../components/SidebarCart";\nimport Footer from "../components/Footer";');
        }
        
        // 3. Replace Sidebar (Legacy to SidebarCart)
        const asideMatch = content.match(/<aside[\s\S]*?<\/aside>/);
        if (asideMatch) {
            content = content.replace(asideMatch[0], '<aside className="col-span-12 lg:col-span-4 max-w-[400px] mx-auto lg:ml-auto">\n          <SidebarCart />\n        </aside>');
        }
        
        // 4. Add Footer before closing div
        if (!content.includes('<Footer />')) {
             const mainEnd = content.lastIndexOf('</main>');
             if (mainEnd > -1) {
                 const closingPart = content.substring(mainEnd);
                 const newClosing = closingPart.replace('</main>', '</main>\n      <Footer />');
                 content = content.substring(0, mainEnd) + newClosing;
             }
        }
        
        // Double check for duplicate <Footer /> at the end
        const footerCount = (content.match(/<Footer\s*\/>/g) || []).length;
        if (footerCount > 1) {
            content = content.replace(/<Footer\s*\/>/, ''); // remove first one
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
