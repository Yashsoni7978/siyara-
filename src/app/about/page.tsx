import type { Metadata } from 'next'
import Link from 'next/link'
import { WA_LINKS, BRAND } from '@/lib/constants'
import { CLIENT_TESTIMONIALS } from '@/lib/social-proof'
import { aboutPageSchema } from '@/lib/seo'
import sharedStyles from '../contact/contact.module.css'
import styles from './about.module.css'
import { Reveal } from '@/components/ui/Reveal'
import { CTA } from '@/components/ui/CTA'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn why top brands trust Siyara Innovations. We are a strategy-first team based in Jaipur, focused entirely on ROI and premium digital execution.',
  alternates: { canonical: `${BRAND.siteUrl}/about` },
  openGraph: {
    title: `About Us | ${BRAND.name}`,
    description: 'Learn why top brands trust Siyara Innovations.',
    url: `${BRAND.siteUrl}/about`,
  },
}

const ABOUT_MARQUEE = [
  'Strategy-First', 'Founder-Led', 'Premium Always', 'Jaipur Roots',
  'Full Ecosystem', 'Problem-First', 'AI-Powered', 'ROI Obsessed',
  'Data Driven', 'Brand Architects', 'Growth Partners', 'Non-Negotiable Quality',
]

const VALUES = [
  { icon: '◈', title: 'Strategy before execution', body: "We never build things without knowing why. Every design, campaign, and page serves a clear business objective — not a deliverable count." },
  { icon: '◉', title: 'Jaipur-first, India-ready', body: 'We know this market. We know how local businesses win here and how they expand across India from here. Our Jaipur roots give us a cultural edge no remote agency can replicate.' },
  { icon: '⬡', title: 'One strategy, everything connected', body: 'Your website informs your SEO. Your SEO informs your content. Your content informs your ads. No disconnected vendors pulling in different directions. One integrated strategy, everything compounding.' },
  { icon: '✦', title: 'Premium, always', body: "Work that leaves here looks expensive, feels premium, and performs. We turn down projects that don't fit this standard." },
  { icon: '⚡', title: 'Speed with precision', body: 'Timelines are deadlines. We deliver on time, every time — without cutting corners on quality.' },
  { icon: '🔒', title: 'Radical transparency', body: "You will always know exactly what we are working on, why, and what results it is generating. No jargon. No fluff." },
]

const HOW_WE_WORK = [
  { icon: '◈', title: 'Diagnose first', body: 'Every engagement starts with understanding the actual problem — not pitching services. Visibility, positioning, technology, growth: we identify what the business genuinely needs before anything is built.' },
  { icon: '◉', title: 'Founder-led direction', body: 'Strategic direction stays close to execution. There is no unnecessary account-management layer between the thinking and the doing. Decisions are faster, accountability is clearer.' },
  { icon: '⬡', title: 'Systems over campaigns', body: 'Every growth problem is approached as a system. Your website, SEO, content, and ads are not separate activities — they are one compounding engine. We build it that way.' },
  { icon: '✦', title: 'Right capability for the brief', body: 'Execution is structured around what the business actually needs. Specialist depth where it is required. Direct involvement where it matters most. No unnecessary layers.' },
]

const TIMELINE = [
  { year: 'Day One', title: 'Founded in Jaipur', desc: 'Siyara Innovations was built on a single conviction: Jaipur businesses deserve world-class digital execution, not templated solutions.' },
  { year: 'Early Work', title: 'First retained clients', desc: 'Built initial relationships across restaurants, fashion, and real estate — industries where premium digital presence creates measurable commercial advantage.' },
  { year: 'Expanding', title: 'AI & Automation practice', desc: 'Added AI automation and custom agent development — structuring growth systems that run beyond conventional marketing campaigns.' },
  { year: 'Present', title: 'GEO Optimisation launch', desc: 'Pioneered Generative Engine Optimisation (GEO) — helping Jaipur businesses appear in AI-generated search recommendations on ChatGPT, Perplexity, and Google AI.' },
  { year: 'Now', title: 'Serving businesses across India', desc: 'Rooted in Jaipur, working with ambitious businesses across India. The heart stays here. The reach keeps growing.' },
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      {/* ============================================================
          CINEMATIC HERO
      ============================================================ */}
      <section className={styles.hero} aria-label="About hero">
        <div className={styles.heroCurtain} aria-hidden="true" />
        <div className={styles.heroRays} aria-hidden="true" />
        <div className={`${styles.orb} ${styles.orb1}`} aria-hidden="true" />
        <div className={`${styles.orb} ${styles.orb2}`} aria-hidden="true" />

        <div className={styles.heroInner}>
          <Reveal>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>About</span>
            </nav>
          </Reveal>
          <Reveal delay={0.1}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              <span>OUR STORY</span>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className={styles.heroTitle} style={{ fontFamily: "'Times New Roman', Times, serif" }}>
              Not just another agency.<br />
              <span className={styles.heroTitleAccent}>A different kind of partner.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className={styles.heroSub}>
              We were tired of seeing great Jaipur businesses lose to inferior competitors who just happened to have better digital marketing. So we built the agency we always wished existed.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className={styles.heroActions}>
              <Link href={WA_LINKS.strategyCall} className={styles.heroBtnPrimary} target="_blank" rel="noopener noreferrer">
                Book Free Strategy Call →
              </Link>
              <Link href="#mission" className={styles.heroBtnSecondary}>
                Read Our Story ↓
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <main className={styles.pageContent}>
        {/* ============================================================
            STATS BAR — qualitative positioning only
        ============================================================ */}
        <div className={styles.statsBar}>
          {[
            { num: 'Jaipur', label: 'Rooted here' },
            { num: '4.9★', label: 'Google rating' },
            { num: 'Founder', label: 'Led by design' },
            { num: 'System', label: 'Driven growth' },
          ].map(({ num, label }) => (
            <div key={label} className={styles.statItem}>
              <span className={styles.statNum}>{num}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>

        {/* ============================================================
            MISSION
        ============================================================ */}
        <section id="mission" className={styles.missionSection}>
          <Reveal>
            <h2 className={styles.missionTitle}>
              We exist to make great businesses<br />
              <span className="gold-shimmer">impossible to ignore.</span>
            </h2>
            <p className={styles.missionBody}>
              Jaipur has some of the most incredible businesses in India — restaurants with food that would rival Mumbai&apos;s finest, fashion brands with craftsmanship that rivals international labels. But most are invisible. Their digital presence doesn&apos;t match the quality of what they actually offer. That gap costs them customers, revenue, and credibility every single day. That&apos;s the problem we exist to solve.
            </p>
          </Reveal>
        </section>

        {/* ============================================================
            MARQUEE
        ============================================================ */}
        <div className={styles.marqueeSection}>
          <div className={styles.marqueeTrack}>
            {[...ABOUT_MARQUEE, ...ABOUT_MARQUEE].map((item, i) => (
              <div key={i} className={styles.marqueeItem}>
                <span className={styles.marqueeValue}>{item}</span>
                <span className={styles.marqueeDot} />
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================
            VALUES — Six Principles
        ============================================================ */}
        <section className={styles.valuesSection}>
          <div className="section-wrap">
            <div className={styles.sectionHeader}>
              <Reveal as="span" className="eyebrow">How We Work</Reveal>
              <Reveal as="h2" delay={0.1} className={styles.sectionTitle}>
                Six principles.<br />
                <span className="gold-shimmer">Non-negotiable.</span>
              </Reveal>
            </div>
            <div className={styles.valuesGrid}>
              {VALUES.map(({ icon, title, body }, i) => (
                <Reveal key={title} delay={i * 0.08} className={styles.valueCard}>
                  <span className={styles.valueIcon}>{icon}</span>
                  <h3 className={styles.valueCardTitle}>{title}</h3>
                  <p className={styles.valueCardBody}>{body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            FOUNDER'S MANIFESTO
        ============================================================ */}
        <section className={styles.manifestoSection}>
          <div className={styles.manifestoGlow} aria-hidden="true" />
          <div className={styles.manifestoInner}>
            <Reveal>
              <span className="eyebrow" style={{ color: 'rgba(255, 215, 0, 0.7)' }}>A Letter From The Founder</span>
              <h2 className={styles.manifestoTitle}>
                &ldquo;I watched great Jaipur businesses lose customers to competitors with half their quality but <span className="gold-shimmer">twice their digital presence.</span>&rdquo;
              </h2>
              <p className={styles.manifestoBody}>
                And I watched the agencies they hired fail them. Copy-paste strategies. Generic templates. Junior teams pretending to be senior. Work that looked cheap because it was cheap.
              </p>
              <p className={styles.manifestoBody}>
                So I built the agency I wished existed. One that treats every client&apos;s brand like its own. One where strategy comes before execution, always. One where the work has a standard — and that standard is non-negotiable.
              </p>
              <footer className={styles.manifestoFooter}>
                <span className={styles.manifestoAuthor}>— Founder, Siyara Innovations</span>
                <span className={styles.manifestoRole}>Jaipur, Rajasthan</span>
              </footer>
            </Reveal>
          </div>
        </section>

        {/* ============================================================
            TIMELINE — Our Journey
        ============================================================ */}
        <section className={styles.timelineSection}>
          <div className="section-wrap">
            <div className={styles.sectionHeader}>
              <Reveal as="span" className="eyebrow">Our Journey</Reveal>
              <Reveal as="h2" delay={0.1} className={styles.sectionTitle}>
                How Siyara<br /><span className="gold-shimmer">was built.</span>
              </Reveal>
            </div>
            <div className={styles.timeline}>
              {TIMELINE.map(({ year, title, desc }, i) => (
                <Reveal key={year} delay={i * 0.1} className={styles.timelineItem}>
                  <span className={styles.timelineYear}>{year}</span>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <h3 className={styles.timelineTitle}>{title}</h3>
                    <p className={styles.timelineDesc}>{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            HOW WE WORK — Founder-led operating model
        ============================================================ */}
        <section className={styles.teamSection}>
          <div className="section-wrap">
            <div className={styles.sectionHeader}>
              <Reveal as="span" className="eyebrow">How We Work</Reveal>
              <Reveal as="h2" delay={0.1} className={styles.sectionTitle}>
                Founder-led.<br /><span className="gold-shimmer">System-driven.</span>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <p style={{ fontSize: '1.15rem', color: 'rgba(var(--text-primary-rgb), 0.75)', lineHeight: 1.75, maxWidth: '680px', marginBottom: '56px' }}>
                Siyara is intentionally built around direct strategic involvement. Every growth problem is diagnosed first — then execution is structured around what the business actually needs. Less unnecessary layering. Closer connection between strategy and delivery. Faster decisions. Clearer accountability.
              </p>
            </Reveal>
            <div className={styles.valuesGrid}>
              {HOW_WE_WORK.map(({ icon, title, body }, i) => (
                <Reveal key={title} delay={i * 0.08} className={styles.valueCard}>
                  <span className={styles.valueIcon}>{icon}</span>
                  <h3 className={styles.valueCardTitle}>{title}</h3>
                  <p className={styles.valueCardBody}>{body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            TESTIMONIALS — Flowing Marquee (shared with homepage)
        ============================================================ */}
        <section className={sharedStyles.testimonialsSection} aria-label="Client testimonials">
          <div className={sharedStyles.starsBg}></div>
          <div style={{ position: 'relative', zIndex: 1, paddingBottom: '40px' }}>
            <div className={sharedStyles.testiHeader}>
              <Reveal as="span" className="eyebrow" style={{ color: 'rgba(255, 215, 0, 0.7)' }}>Client Stories</Reveal>
              <Reveal as="h2" delay={0.1} className={sharedStyles.testiTitle}>
                Rated 4.9★ on Google.<br />Here is what clients say.
              </Reveal>
            </div>

            <div className={sharedStyles.marqueeWrapper}>
              <div className={sharedStyles.marqueeTrackTop}>
                {[...CLIENT_TESTIMONIALS.slice(0, 4), ...CLIENT_TESTIMONIALS.slice(0, 4)].map((testi, i) => (
                  <div key={`top-${i}`} className={sharedStyles.testiCard}>
                    <div className={sharedStyles.stars}>★★★★★</div>
                    <p className={sharedStyles.testiQuote}>&quot;{testi.quote}&quot;</p>
                    <div className={sharedStyles.testiAuthorRow}>
                      <span className={sharedStyles.testiAuthor}>— {testi.author}</span>
                      <span className={sharedStyles.testiRole}>{testi.company.split(',')[0]}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className={sharedStyles.marqueeTrackBottom}>
                {[...CLIENT_TESTIMONIALS.slice(4, 8), ...CLIENT_TESTIMONIALS.slice(4, 8)].map((testi, i) => (
                  <div key={`bottom-${i}`} className={sharedStyles.testiCard}>
                    <div className={sharedStyles.stars}>★★★★★</div>
                    <p className={sharedStyles.testiQuote}>&quot;{testi.quote}&quot;</p>
                    <div className={sharedStyles.testiAuthorRow}>
                      <span className={sharedStyles.testiAuthor}>— {testi.author}</span>
                      <span className={sharedStyles.testiRole}>{testi.company.split(',')[0]}</span>
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
          eyebrow="Let's Build Something Premium"
          title={<>Ready to build something<br /><span className="gold-shimmer">worth being proud of?</span></>}
          description="Start with a free 30-minute strategy call. No pitch. No pressure. Just an honest conversation about what your brand actually needs."
          primaryBtn={{ text: 'Book Free Strategy Call', href: WA_LINKS.strategyCall, isExternal: true, hasIcon: true }}
          secondaryBtn={{ text: 'View Our Services →', href: '/services' }}
          note="No pressure. No pitch deck. Just a real conversation."
        />
      </main>
    </>
  )
}
