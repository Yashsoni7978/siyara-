const fs = require('fs');
const path = require('path');

const globalsPath = path.join(__dirname, 'src/app/globals.css');
let globalsContent = fs.readFileSync(globalsPath, 'utf8');

// The new CSS variables block
const newRootBlock = `:root {
  /* Colors - DARK MODE (Default) */
  --bg-primary:     #041E14;
  --bg-primary-rgb: 4, 30, 20;
  --bg-secondary:   #022919;
  --bg-secondary-rgb: 2, 41, 25;
  --bg-tertiary:    #083320;
  --bg-tertiary-rgb: 8, 51, 32;
  --accent-primary: #C9A84C;
  --accent-primary-rgb: 201, 168, 76;
  --accent-secondary: #E5C77A;
  --accent-shimmer: #F3DF9A;
  --text-primary:   #F8F6F0;
  --text-primary-rgb: 248, 246, 240;
  --text-secondary: #EBE5D9;
  --text-inverse:   #041E14;

  /* Alpha tokens - DARK */
  --text-muted:      rgba(var(--text-primary-rgb), 0.55);
  --text-muted-dark: rgba(var(--text-primary-rgb), 0.25);
  --border-color:    rgba(var(--accent-primary-rgb), 0.18);
  --border-glow:     rgba(var(--accent-primary-rgb), 0.09);
}

[data-theme='light'] {
  /* Colors - LIGHT MODE */
  --bg-primary:     #EBE5D9;
  --bg-primary-rgb: 235, 229, 217;
  --bg-secondary:   #F4F0E6;
  --bg-secondary-rgb: 244, 240, 230;
  --bg-tertiary:    #E4DCCB;
  --bg-tertiary-rgb: 228, 220, 203;
  --accent-primary: #C9A84C;
  --accent-primary-rgb: 201, 168, 76;
  --accent-secondary: #B28F38;
  --accent-shimmer: #E5C77A;
  --text-primary:   #004F2D;
  --text-primary-rgb: 0, 79, 45;
  --text-secondary: #006039;
  --text-inverse:   #EBE5D9;

  /* Alpha tokens - LIGHT */
  --text-muted:      rgba(var(--text-primary-rgb), 0.65);
  --text-muted-dark: rgba(var(--text-primary-rgb), 0.35);
  --border-color:    rgba(var(--text-primary-rgb), 0.15);
  --border-glow:     rgba(var(--text-primary-rgb), 0.08);
}`;

// Replace the CSS variable block in globals.css
globalsContent = globalsContent.replace(/:root\s*\{[\s\S]*?\[data-theme='light'\]\s*\{[\s\S]*?\}/, newRootBlock);

// Make global headings bolder
globalsContent = globalsContent.replace(/(\.section-title\s*\{[\s\S]*?font-weight:\s*)400/g, '$1600');
globalsContent = globalsContent.replace(/(\.section-title em\s*\{[\s\S]*?font-weight:\s*)300/g, '$1400');

fs.writeFileSync(globalsPath, globalsContent, 'utf8');

// NOW UPDATE Home.module.css
const homePath = path.join(__dirname, 'src/app/Home.module.css');
let homeContent = fs.readFileSync(homePath, 'utf8');

// Replace hardcoded RGBA with CSS variables using RGB tokens
const replacements = [
  // Bolder Hero Text
  { target: /\.h1\s*\{[\s\S]*?font-weight:\s*300/g, replacement: '.h1 {\n  font-family: var(--font-display);\n  font-size: clamp(54px, 8vw, 116px);\n  font-weight: 500' },
  { target: /\.h1Line1\s*\{[\s\S]*?color:\s*rgba\([^)]+\)/g, replacement: '.h1Line1 {\n  color: rgba(var(--text-primary-rgb), 0.85)' },
  { target: /\.h1Line2\s*\{[\s\S]*?color:\s*rgba\([^)]+\)/g, replacement: '.h1Line2 {\n  color: rgba(var(--text-primary-rgb), 0.95)' },
  
  // Bolder text everywhere
  { target: /font-weight:\s*300/g, replacement: 'font-weight: 400' },
  { target: /font-weight:\s*400/g, replacement: 'font-weight: 500' },
  { target: /font-weight:\s*500/g, replacement: 'font-weight: 600' },

  // Background and gradients
  { target: /rgba\(\s*244\s*,\s*239\s*,\s*230\s*,\s*(0\.\d+)\)/g, replacement: 'rgba(var(--bg-primary-rgb), $1)' },
  { target: /rgba\(\s*232\s*,\s*224\s*,\s*208\s*,\s*(0\.\d+)\)/g, replacement: 'rgba(var(--bg-secondary-rgb), $1)' },
  { target: /rgba\(\s*0\s*,\s*96\s*,\s*57\s*,\s*(0\.\d+)\)/g, replacement: 'rgba(var(--text-primary-rgb), $1)' },
  
  // Update Gold
  { target: /rgba\(\s*201\s*,\s*168\s*,\s*76\s*,\s*(0\.\d+)\)/g, replacement: 'rgba(var(--accent-primary-rgb), $1)' },
];

replacements.forEach(r => {
  homeContent = homeContent.replace(r.target, r.replacement);
});

// Fix specific sections that used hardcoded backgrounds which might now be missing
// .heroStats background
homeContent = homeContent.replace(/background:\s*rgba\(var\(--bg-primary-rgb\),\s*0\.5\);/g, 'background: rgba(var(--bg-secondary-rgb), 0.65);');

fs.writeFileSync(homePath, homeContent, 'utf8');

console.log('Successfully updated themes and typography weights!');
