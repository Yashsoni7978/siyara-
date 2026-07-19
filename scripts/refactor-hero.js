const fs = require('fs');
const path = require('path');

// 1. Rewrite Home.module.css
const cssPath = path.join(__dirname, 'src/app/Home.module.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

const newCss = `/* ---- HERO ---- */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  background: var(--bg-primary);
}

.heroGrid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(var(--accent-primary-rgb), 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(var(--accent-primary-rgb), 0.045) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(ellipse 70% 80% at 50% 40%, black 10%, transparent 80%);
  -webkit-mask-image: radial-gradient(ellipse 70% 80% at 50% 40%, black 10%, transparent 80%);
}

.heroGlow {
  position: absolute; top: 0; left: 50%; transform: translateX(-50%);
  width: 100%; height: 100%; max-width: 1100px;
  background: radial-gradient(ellipse 55% 65% at 50% 30%, rgba(var(--bg-secondary-rgb), 0.65) 0%, transparent 70%);
  pointer-events: none;
}

.heroGoldGlow {
  position: absolute; bottom: -10%; left: 50%; transform: translateX(-50%);
  width: 900px; height: 500px;
  background: radial-gradient(ellipse at center bottom, rgba(var(--accent-primary-rgb), 0.055) 0%, transparent 65%);
  pointer-events: none;
}

.orb {
  position: absolute; border-radius: 50%; pointer-events: none;
  animation: orbFloat 10s ease-in-out infinite;
}

.orb1 { width: 420px; height: 420px; top: 5%; left: -14%; background: radial-gradient(circle, rgba(var(--bg-primary-rgb), 0.55) 0%, transparent 70%); }
.orb2 { width: 300px; height: 300px; top: 8%; right: -8%; background: radial-gradient(circle, rgba(var(--bg-secondary-rgb), 0.6) 0%, transparent 70%); animation-delay: 4s; animation-duration: 13s; }
.orb3 { width: 350px; height: 350px; bottom: 20%; right: 10%; background: radial-gradient(circle, rgba(var(--accent-green-rgb), 0.08) 0%, transparent 70%); animation-delay: 2s; animation-duration: 15s; }

@keyframes orbFloat {
  0%,100% { transform: scale(1) translate(0,0); }
  33%      { transform: scale(1.07) translate(14px,-18px); }
  66%      { transform: scale(0.95) translate(-10px,12px); }
}

.heroContentWrapper {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 56px;
  padding-top: calc(var(--nav-h) + 40px);
}

.heroInner {
  position: relative; z-index: 2;
  max-width: 1380px; margin: 0 auto; width: 100%;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 80px;
  align-items: center;
}

.heroLeft {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.heroVisual {
  position: relative;
  width: 100%;
  animation: fadeIn 1s var(--ease-out) 0.6s both, floatImage 6s ease-in-out infinite;
}

.heroVisual img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  filter: drop-shadow(0 24px 64px rgba(var(--accent-green-rgb), 0.18));
}

@keyframes floatImage {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-16px); }
}

/* Badge */
.heroBadge {
  display: inline-flex; align-items: center; gap: 12px;
  padding: 10px 22px;
  background: rgba(var(--bg-secondary-rgb), 0.55);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(var(--accent-primary-rgb), 0.18);
  margin-bottom: 40px;
  font-size: 10px; font-weight: 600;
  letter-spacing: 0.28em; text-transform: uppercase;
  color: var(--text-muted);
  animation: fadeIn 0.8s var(--ease-out) 0.2s both;
}

@keyframes fadeIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }

/* H1 */
.h1 {
  font-family: var(--font-display);
  font-size: clamp(48px, 6vw, 86px);
  font-weight: 600; line-height: 1.05;
  letter-spacing: -0.02em; margin-bottom: 32px;
  display: flex; flex-direction: column; gap: 0;
}

.h1Line1 { color: rgba(var(--text-primary-rgb), 0.85); animation: fadeIn 0.9s var(--ease-out) 0.35s both; }
.h1Line2 { color: rgba(var(--text-primary-rgb), 0.95); animation: fadeIn 0.9s var(--ease-out) 0.52s both; }
.h1Line3 { font-weight: 600; text-transform: uppercase; letter-spacing: 0.01em; color: var(--text-primary); animation: fadeIn 0.9s var(--ease-out) 0.68s both; }

.heroSub {
  font-size: 15px; font-weight: 600; line-height: 1.82;
  color: var(--text-muted); max-width: 540px; margin-bottom: 48px;
  animation: fadeIn 0.9s var(--ease-out) 0.88s both;
}

.heroSub em { color: var(--text-secondary); font-style: italic; }

/* CTAs */
.heroCtas {
  display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
  animation: fadeIn 0.9s var(--ease-out) 1.06s both;
}

/* Stats */
.heroStats {
  display: grid; grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color);
  background: rgba(var(--bg-secondary-rgb), 0.65); backdrop-filter: blur(10px);
  animation: fadeIn 0.8s var(--ease-out) 1.2s both;
  width: 100%;
  position: relative;
  z-index: 2;
}

.heroStat {
  padding: 32px 28px; border-right: 1px solid var(--border-color);
  display: flex; flex-direction: column; gap: 6px; align-items: center; text-align: center;
}

.heroStat:last-child { border-right: none; }

.heroStatNum {
  font-family: var(--font-display); font-size: 36px;
  font-weight: 600; color: var(--accent-primary); line-height: 1;
}

.heroStatLabel {
  font-size: 11px; font-weight: 600; letter-spacing: 0.1em;
  color: rgba(var(--text-primary-rgb), 0.35); text-transform: uppercase;
}

`;

cssContent = cssContent.replace(/\/\* ---- HERO ---- \*\/[\s\S]*?\/\* ---- MARQUEE ---- \*\//, newCss + "\n/* ---- MARQUEE ---- */");

// Also update responsive query to stack heroInner
if (!cssContent.includes('.heroInner { grid-template-columns: 1fr; }')) {
  cssContent = cssContent.replace('@media (max-width: 1100px) {', '@media (max-width: 1100px) {\n  .heroInner { grid-template-columns: 1fr; gap: 48px; }\n  .heroContentWrapper { padding-top: calc(var(--nav-h) + 20px); }');
}

fs.writeFileSync(cssPath, cssContent, 'utf8');

// 2. Rewrite page.tsx
const pagePath = path.join(__dirname, 'src/app/page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

if (!pageContent.includes('next/image')) {
  pageContent = pageContent.replace("import Link from 'next/link'", "import Link from 'next/link'\nimport Image from 'next/image'");
}

const newPageHero = `<section className={styles.hero} aria-label="Hero section">
        <div className={styles.heroGrid}     aria-hidden="true" />
        <div className={styles.heroGlow}     aria-hidden="true" />
        <div className={styles.heroGoldGlow} aria-hidden="true" />
        <div className={\`\${styles.orb} \${styles.orb1}\`} aria-hidden="true" />
        <div className={\`\${styles.orb} \${styles.orb2}\`} aria-hidden="true" />
        <div className={\`\${styles.orb} \${styles.orb3}\`} aria-hidden="true" />

        <div className={styles.heroContentWrapper}>
          <div className={styles.heroInner}>
            <div className={styles.heroLeft}>
              <div className={styles.heroBadge}>
                <span className="pulse-dot" aria-hidden="true" />
                <span>Premium Digital Agency · Jaipur</span>
              </div>

              <h1 className={styles.h1}>
                <span className={styles.h1Line1}>We don&apos;t just build</span>
                <span className={styles.h1Line2}>your digital presence.</span>
                <span className={styles.h1Line3}>
                  We build brands that <span className="gold-shimmer">dominate.</span>
                </span>
              </h1>

              <p className={styles.heroSub}>
                Full-service digital growth agency for ambitious businesses.
                Web. Brand. AI. SEO. Ads. Social. Content. Everything under one roof.
                <em> One strategy. Everything compounding.</em>
              </p>

              <div className={styles.heroCtas}>
                <Link href={WA_LINKS.hero} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Build My Brand
                </Link>
                <Link href="#services" className="btn-outline">See All Services &nbsp;→</Link>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <Image src="/hero_dashboard.png" alt="Premium Dashboard UI Mockup" width={800} height={600} priority />
            </div>
          </div>
        </div>

        <div className={styles.heroStats} role="list" aria-label="Agency statistics">
          {[
            { num: '12+', label: 'Digital services' },
            { num: '5',   label: 'Industries served' },
            { num: '1',   label: 'Unified strategy' },
            { num: '0',   label: 'Generic work. Ever.' },
          ].map(({ num, label }) => (
            <div key={label} className={styles.heroStat} role="listitem">
              <span className={styles.heroStatNum}>{num}</span>
              <span className={styles.heroStatLabel}>{label}</span>
            </div>
          ))}
        </div>
      </section>`;

pageContent = pageContent.replace(/<section className=\{styles\.hero\} aria-label="Hero section">[\s\S]*?<\/section>/, newPageHero);

fs.writeFileSync(pagePath, pageContent, 'utf8');
console.log('Successfully refactored the Hero section!');
