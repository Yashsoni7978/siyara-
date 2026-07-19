const fs = require('fs');
const path = require('path');

const globalsPath = path.join(__dirname, 'src/app/globals.css');
let globalsContent = fs.readFileSync(globalsPath, 'utf8');

const replacements = [
  // Hardcoded Gold to var
  { target: /rgba\(\s*201\s*,\s*168\s*,\s*76\s*,\s*(0\.\d+)\)/g, replacement: 'rgba(var(--accent-primary-rgb), $1)' },
  
  // Hardcoded Green (from light theme) to var(--text-primary-rgb)
  { target: /rgba\(\s*0\s*,\s*96\s*,\s*57\s*,\s*(0\.\d+)\)/g, replacement: 'rgba(var(--text-primary-rgb), $1)' },
  
  // Hardcoded Ivory background
  { target: /rgba\(\s*232\s*,\s*224\s*,\s*208\s*,\s*(0\.\d+)\)/g, replacement: 'rgba(var(--bg-secondary-rgb), $1)' },
  
  // .eyebrow--dark
  { target: /rgba\(\s*12\s*,\s*26\s*,\s*16\s*,\s*(0\.\d+)\)/g, replacement: 'rgba(var(--bg-primary-rgb), $1)' }
];

replacements.forEach(r => {
  globalsContent = globalsContent.replace(r.target, r.replacement);
});

fs.writeFileSync(globalsPath, globalsContent, 'utf8');

console.log('Successfully updated globals.css with dynamic RGBA variables!');
