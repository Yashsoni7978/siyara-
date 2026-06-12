const fs = require('fs');
const path = require('path');

function removeAnimations(filePath) {
  let css = fs.readFileSync(filePath, 'utf8');

  // Remove `animation: ...;`
  css = css.replace(/animation:\s*[^;]+;/g, '');
  
  // Remove `animation-delay: ...;`
  css = css.replace(/animation-delay:\s*[^;]+;/g, '');
  
  // Remove `animation-duration: ...;`
  css = css.replace(/animation-duration:\s*[^;]+;/g, '');
  
  // Remove `animation-play-state: ...;`
  css = css.replace(/animation-play-state:\s*[^;]+;/g, '');

  // Remove `@keyframes ... { ... }` blocks (simplified, assuming they are top-level and end with '}')
  // A better regex for keyframes that might contain nested blocks:
  // Since CSS parsing with regex is hard, let's just do a greedy match up to the matching closing brace.
  const keyframesRegex = /@keyframes\s+[\w-]+\s*\{((?:[^{}]*\{[^{}]*\})*[^{}]*)\}/g;
  css = css.replace(keyframesRegex, '');

  fs.writeFileSync(filePath, css, 'utf8');
  console.log('Processed', filePath);
}

['src/app/Home.module.css', 'src/app/globals.css'].forEach(f => {
  const p = path.join(__dirname, f);
  if (fs.existsSync(p)) {
    removeAnimations(p);
  }
});
