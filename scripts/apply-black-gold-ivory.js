const fs = require('fs');
const path = require('path');

const globalsPath = path.join(__dirname, 'src/app/globals.css');
let globalsContent = fs.readFileSync(globalsPath, 'utf8');

const newRootBlock = `:root {
  /* Colors - DARK MODE (Default) - Black / Ivory / Gold */
  --bg-primary:     #080808;
  --bg-primary-rgb: 8, 8, 8;
  --bg-secondary:   #111111;
  --bg-secondary-rgb: 17, 17, 17;
  --bg-tertiary:    #1A1A1A;
  --bg-tertiary-rgb: 26, 26, 26;
  
  --accent-primary: #C9A84C;
  --accent-primary-rgb: 201, 168, 76;
  --accent-secondary: #E5C77A;
  --accent-shimmer: #F3DF9A;
  
  --accent-green:   #024D30;
  --accent-green-rgb: 2, 77, 48;
  
  --text-primary:   #F8F6F0;
  --text-primary-rgb: 248, 246, 240;
  --text-secondary: #EBE5D9;
  --text-inverse:   #080808;

  /* Alpha tokens */
  --text-muted:      rgba(var(--text-primary-rgb), 0.65);
  --text-muted-dark: rgba(var(--text-primary-rgb), 0.35);
  --border-color:    rgba(var(--accent-primary-rgb), 0.25);
  --border-glow:     rgba(var(--accent-primary-rgb), 0.12);
}

[data-theme='light'] {
  /* Colors - LIGHT MODE - Crisp Light Ivory / Black / Gold */
  --bg-primary:     #FAF9F6;
  --bg-primary-rgb: 250, 249, 246;
  --bg-secondary:   #FFFFFF;
  --bg-secondary-rgb: 255, 255, 255;
  --bg-tertiary:    #F2EFE9;
  --bg-tertiary-rgb: 242, 239, 233;
  
  --accent-primary: #C9A84C;
  --accent-primary-rgb: 201, 168, 76;
  --accent-secondary: #B28F38;
  --accent-shimmer: #E5C77A;
  
  --accent-green:   #024D30;
  --accent-green-rgb: 2, 77, 48;
  
  --text-primary:   #0A0A0A;
  --text-primary-rgb: 10, 10, 10;
  --text-secondary: #222222;
  --text-inverse:   #FAF9F6;

  /* Alpha tokens */
  --text-muted:      rgba(var(--text-primary-rgb), 0.65);
  --text-muted-dark: rgba(var(--text-primary-rgb), 0.35);
  --border-color:    rgba(var(--accent-primary-rgb), 0.25);
  --border-glow:     rgba(var(--accent-primary-rgb), 0.12);
}`;

// Replace root variables
globalsContent = globalsContent.replace(/:root\s*\{[\s\S]*?\[data-theme='light'\]\s*\{[\s\S]*?\}/, newRootBlock);

// Add text selection highlighting with emerald green
if (!globalsContent.includes('::selection')) {
  globalsContent += `

::selection {
  background: var(--accent-green);
  color: #FFFFFF;
}
::-moz-selection {
  background: var(--accent-green);
  color: #FFFFFF;
}
`;
}

// Modify Primary Button Hover to use Emerald Green Highlighter
globalsContent = globalsContent.replace(/\.btn-primary:hover\s*\{[\s\S]*?\}/, `.btn-primary:hover {\n  background: var(--accent-green);\n  color: #FFFFFF;\n  transform: translateY(-2px);\n  box-shadow: 0 16px 48px rgba(var(--accent-green-rgb), 0.3);\n}`);

// Modify Outline Button Hover to use Emerald Green Highlighter
globalsContent = globalsContent.replace(/\.btn-outline:hover\s*\{[\s\S]*?\}/, `.btn-outline:hover {\n  border-color: var(--accent-green);\n  color: var(--accent-green);\n  transform: translateY(-2px);\n}`);

// Modify Social Link Hover to use Emerald Green Highlighter
globalsContent = globalsContent.replace(/\.social-link:hover\s*\{[\s\S]*?\}/, `.social-link:hover {\n  border-color: var(--accent-green);\n  color: var(--accent-green);\n  background: rgba(var(--accent-green-rgb), 0.08);\n}`);

fs.writeFileSync(globalsPath, globalsContent, 'utf8');

console.log('Successfully updated to Black, Gold, Ivory core with Emerald Green highlighting!');
