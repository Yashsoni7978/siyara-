import type { Metadata } from 'next'
import Link from 'next/link'
import { PORTFOLIO, WA_LINKS, BRAND } from '@/lib/constants'
import { CLIENT_TESTIMONIALS } from '@/lib/social-proof'
import { CursorSpotlight } from '@/components/ui/CursorSpotlight'
import { Reveal } from '@/components/ui/Reveal'
import { CTA } from '@/components/ui/CTA'
import { PortfolioGrid } from './PortfolioGrid'
import styles from './portfolio.module.css'


export const metadata: Metadata = {
  title: `Portfolio | ${BRAND.name}`,
  description:
    "Browse Siyara Innovations' portfolio of digital work — premium websites, branding, and campaigns built for ambitious businesses across India.",
  alternates: { canonical: `${BRAND.siteUrl}/portfolio` },
  openGraph: {
    title: `Portfolio | ${BRAND.name}`,
    description:
      "Browse Siyara Innovations' portfolio of digital work — premium websites, branding, and campaigns built for ambitious businesses across India.",
    url: `${BRAND.siteUrl}/portfolio`,
  },
}

const MARQUEE_ITEMS = [
  'Web Development', 'Branding & Identity', 'AI Automation', 'SEO Optimisation',
  'Performance Marketing', 'Social Media', 'UI/UX Design', 'Content Creation',
  'App Development', 'GEO Optimisation', 'AI Agent Development', 'Premium Design',
  'Real Results', 'Jaipur-First',
]

export default function PortfolioPage() {
  return (
    <>
      <CursorSpotlight />

      {/* ============================================================
          CINEMATIC HERO
      ============================================================ */}
      <section className={styles.heroSection} aria-label="Portfolio hero">
        {/* Background layers */}
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroCurtain} aria-hidden="true" />
        <div className={styles.heroRays} aria-hidden="true" />
        <div className={`${styles.orb} ${styles.orb1}`} aria-hidden="true" />
        <div className={`${styles.orb} ${styles.orb2}`} aria-hidden="true" />
        <div className={`${styles.orb} ${styles.orb3}`} aria-hidden="true" />

        <div className={styles.heroContentWrapper}>
          {/* Breadcrumb */}
          <nav className={styles.heroBreadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className={styles.sep}>/</span>
            <span style={{ color: 'rgba(240,245,242,0.55)' }}>Portfolio</span>
          </nav>

          {/* Badge */}
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} aria-hidden="true" />
            <span>Our Work</span>
          </div>

          {/* H1 — 3-line structure matching homepage */}
          <h1 className={styles.h1}>
            <span className={styles.h1Line1}>Built to Impress.</span>
            <span className={styles.h1Line2}>Engineered to</span>
            <span className={styles.h1Line3}>CONVERT</span>
          </h1>

          {/* Subtitle */}
          <p className={styles.heroSubtitle}>
            Every project in our portfolio is a real business with real goals —
            and a real story of growth. Here is the work that defines our standard.
          </p>

          {/* Accent line */}
          <span className={styles.heroAccentLine} aria-hidden="true" />
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator} aria-hidden="true" />
      </section>

      {/* ============================================================
          MARQUEE STRIP
      ============================================================ */}
      <section className={styles.marqueeSection} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <div key={i} className={styles.marqueeItem}>
              <span className={styles.marqueeValue}>{item}</span>
              <span className={styles.marqueeDot} />
            </div>
          ))}
        </div>
      </section>


      {/* ============================================================
          INTERACTIVE FILTER + CARD GRID (Client Component)
      ============================================================ */}
      <PortfolioGrid items={PORTFOLIO} />


      {/* ============================================================
          TESTIMONIALS — Dual Scrolling Marquee
      ============================================================ */}
      <section className={styles.testimonialsSection} aria-label="Client testimonials">
        <div className={styles.starsBg} aria-hidden="true" />

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Header */}
          <div className={styles.testiHeader}>
            <Reveal>
              <span className={styles.testiEyebrow}>Client Success</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className={styles.testiTitle}>
                Real ROI.<br />Real businesses.
              </h2>
            </Reveal>
          </div>

          {/* Dual-row marquee */}
          <div className={styles.marqueeWrapper}>
            {/* Row 1 — scrolls left */}
            <div className={styles.marqueeTrackTop}>
              {[...CLIENT_TESTIMONIALS.slice(0, 4), ...CLIENT_TESTIMONIALS.slice(0, 4)].map((testi, i) => (
                <div key={`top-${i}`} className={styles.testiCard}>
                  <div className={styles.testiStars}>★★★★★</div>
                  <p className={styles.testiQuote}>&quot;{testi.quote}&quot;</p>
                  <div className={styles.testiAuthorRow}>
                    <span className={styles.testiAuthor}>— {testi.author}</span>
                    <span className={styles.testiRole}>{testi.company.split(',')[0]}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 — scrolls right */}
            <div className={styles.marqueeTrackBottom}>
              {[...CLIENT_TESTIMONIALS.slice(4, 8), ...CLIENT_TESTIMONIALS.slice(4, 8)].map((testi, i) => (
                <div key={`bottom-${i}`} className={styles.testiCard}>
                  <div className={styles.testiStars}>★★★★★</div>
                  <p className={styles.testiQuote}>&quot;{testi.quote}&quot;</p>
                  <div className={styles.testiAuthorRow}>
                    <span className={styles.testiAuthor}>— {testi.author}</span>
                    <span className={styles.testiRole}>{testi.company.split(',')[0]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA FINALE
      ============================================================ */}
      <CTA
        eyebrow="Want Your Brand In This Portfolio?"
        title={<>Your work belongs here.<br /><span className="gold-shimmer">Let's build it together.</span></>}
        description="We take on a limited number of projects each quarter — so every client gets the attention their brand deserves."
        primaryBtn={{ text: 'Start a Project', href: WA_LINKS.hero, isExternal: true, hasIcon: true }}
        secondaryBtn={{ text: 'View All Services →', href: '/services' }}
        note="No pitch deck. No pressure. Just a real conversation."
      />
    </>
  )
}
