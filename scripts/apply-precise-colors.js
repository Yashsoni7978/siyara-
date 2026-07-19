const fs = require('fs');
const path = require('path');

// 1. Update Footer.module.css
const footerPath = path.join(__dirname, 'src/components/layout/Footer.module.css');
let footerContent = fs.readFileSync(footerPath, 'utf8');

footerContent = footerContent.replace(/rgba\(\s*244\s*,\s*239\s*,\s*230\s*,\s*(0\.\d+)\)/g, 'rgba(var(--text-primary-rgb), $1)');
footerContent = footerContent.replace(/rgba\(\s*201\s*,\s*168\s*,\s*76\s*,\s*(0\.\d+)\)/g, 'rgba(var(--accent-primary-rgb), $1)');

fs.writeFileSync(footerPath, footerContent, 'utf8');

// 2. Update globals.css with new palettes
const globalsPath = path.join(__dirname, 'src/app/globals.css');
let globalsContent = fs.readFileSync(globalsPath, 'utf8');

const newRootBlock = `:root {
  /* Colors - DARK MODE (Default) - Emerald Green */
  --bg-primary:     #013220;
  --bg-primary-rgb: 1, 50, 32;
  --bg-secondary:   #05472A;
  --bg-secondary-rgb: 5, 71, 42;
  --bg-tertiary:    #085C37;
  --bg-tertiary-rgb: 8, 92, 55;
  --accent-primary: #D4AF37;
  --accent-primary-rgb: 212, 175, 55;
  --accent-secondary: #FDB931;
  --accent-shimmer: #FFD700;
  --text-primary:   #FFFFFF;
  --text-primary-rgb: 255, 255, 255;
  --text-secondary: #F1E0B6;
  --text-inverse:   #013220;

  /* Alpha tokens - DARK */
  --text-muted:      rgba(var(--text-primary-rgb), 0.65);
  --text-muted-dark: rgba(var(--text-primary-rgb), 0.35);
  --border-color:    rgba(var(--accent-primary-rgb), 0.25);
  --border-glow:     rgba(var(--accent-primary-rgb), 0.12);
}

[data-theme='light'] {
  /* Colors - LIGHT MODE - Dense Ivory */
  --bg-primary:     #F1E0B6;
  --bg-primary-rgb: 241, 224, 182;
  --bg-secondary:   #F4EDCA;
  --bg-secondary-rgb: 244, 237, 202;
  --bg-tertiary:    #FAF8D9;
  --bg-tertiary-rgb: 250, 248, 217;
  --accent-primary: #D4AF37;
  --accent-primary-rgb: 212, 175, 55;
  --accent-secondary: #FDB931;
  --accent-shimmer: #FFD700;
  --text-primary:   #013220;
  --text-primary-rgb: 1, 50, 32;
  --text-secondary: #05472A;
  --text-inverse:   #F1E0B6;

  /* Alpha tokens - LIGHT */
  --text-muted:      rgba(var(--text-primary-rgb), 0.75);
  --text-muted-dark: rgba(var(--text-primary-rgb), 0.45);
  --border-color:    rgba(var(--text-primary-rgb), 0.25);
  --border-glow:     rgba(var(--accent-primary-rgb), 0.12);
}`;

globalsContent = globalsContent.replace(/:root\s*\{[\s\S]*?\[data-theme='light'\]\s*\{[\s\S]*?\}/, newRootBlock);

fs.writeFileSync(globalsPath, globalsContent, 'utf8');
console.log('Successfully updated Footer colors and global palettes!');
