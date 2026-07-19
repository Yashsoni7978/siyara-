const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src/app/Home.module.css');
let content = fs.readFileSync(cssPath, 'utf8');

// Replace off-white text (rgba(244,239,230,x)) with dark green text (rgba(0,96,57,x))
content = content.replace(/rgba\(\s*244\s*,\s*239\s*,\s*230\s*,/g, 'rgba(0,96,57,');

// Replace dark backgrounds with light/ivory backgrounds
content = content.replace(/rgba\(\s*6\s*,\s*14\s*,\s*8\s*,/g, 'rgba(244,239,230,');
content = content.replace(/rgba\(\s*22\s*,\s*52\s*,\s*32\s*,/g, 'rgba(232,224,208,'); // Slightly darker ivory for contrast
content = content.replace(/rgba\(\s*15\s*,\s*36\s*,\s*24\s*,/g, 'rgba(244,239,230,');

fs.writeFileSync(cssPath, content, 'utf8');
console.log('Successfully updated Home.module.css for light theme!');
