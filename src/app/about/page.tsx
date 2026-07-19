import type { Metadata } from 'next'
import Link from 'next/link'
import { WA_LINKS, BRAND } from '@/lib/constants'
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

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      {/* ============================================================
          01 — WHY SIYARA
      ============================================================ */}
      <section className={styles.aboutHero} aria-label="About hero">
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroInner}>
          <Reveal as="span" className={styles.kicker}>
            01 / WHY SIYARA
          </Reveal>
          <Reveal as="h1" delay={0.1} className={styles.heroH1}>
            <span className={styles.textIvory}>NOT JUST ANOTHER</span>
            <span className={styles.textIvory}>AGENCY.</span>
            <span className={styles.textGreen}>A DIFFERENT KIND</span>
            <span className={styles.textGreen}>OF PARTNER.</span>
          </Reveal>
          <Reveal as="p" delay={0.25} className={styles.heroSub}>
            Businesses do not need more disconnected digital services. They need clearer diagnosis, connected thinking and execution built around the real growth problem.
          </Reveal>
          <Reveal delay={0.35}>
            <span className={styles.heroLine} aria-hidden="true" />
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          02 — THE PROBLEM
      ============================================================ */}
      <section className={styles.problemSection} aria-label="The Problem">
        <div className="section-wrap">
          <Reveal as="span" className={styles.kicker}>
            02 / THE PROBLEM
          </Reveal>
          <Reveal as="h2" delay={0.1} className={styles.sectionTitle}>
            <span className={styles.textIvory}>GOOD BUSINESSES.</span>
            <span className={styles.textGreen}>FRAGMENTED DIGITAL SYSTEMS.</span>
          </Reveal>
          <Reveal as="p" delay={0.2} className={styles.sectionDesc}>
            Brand, website, visibility and growth are often treated as separate activities. Each may be active. The system remains disconnected.
          </Reveal>

          <div className={styles.diagnosticGrid}>
            {[
              { num: '01', label: 'BRAND', text: 'Positioning exists in one place and disappears in another.' },
              { num: '02', label: 'EXPERIENCE', text: 'The website looks active but does not move the customer forward.' },
              { num: '03', label: 'VISIBILITY', text: 'Search, content and AI discovery operate without one visibility direction.' },
              { num: '04', label: 'GROWTH', text: 'Campaigns generate activity, but the signal does not improve the wider system.' },
            ].map(({ num, label, text }, i) => (
              <Reveal key={num} delay={i * 0.08} className={styles.diagnosticItem}>
                <span className={styles.diagnosticIndex}>SIGNAL / {num}</span>
                <h3 className={styles.diagnosticLabel}>{label}</h3>
                <p className={styles.diagnosticText}>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          03 — THE REALISATION
      ============================================================ */}
      <section className={styles.realisationSection} aria-label="The Realisation">
        <div className="section-wrap">
          <div className={styles.realisationSplit}>
            <div className={styles.realisationLeft}>
              <Reveal as="span" className={styles.kicker}>
                03 / THE REALISATION
              </Reveal>
              <Reveal as="h2" delay={0.1} className={styles.realisationH2}>
                <span className={styles.textIvory}>THE SERVICES WERE NEVER</span>
                <span className={styles.textIvory}>THE REAL PROBLEM.</span>
                <span className={styles.textGreen}>THE DISCONNECTION WAS.</span>
              </Reveal>
            </div>
            <div className={styles.realisationRight}>
              {[
                'A better website cannot repair unclear positioning.',
                'SEO cannot compensate for a weak digital experience.',
                'Advertising cannot fix a broken customer path.',
                'Automation cannot create strategy.',
                'The disciplines have to work as one connected system.',
              ].map((text, i) => (
                <Reveal as="p" key={i} delay={0.1 + i * 0.05} className={styles.realisationPoint}>
                  {text}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          04 — THE MODEL
      ============================================================ */}
      <section className={styles.modelSection} aria-label="The Model">
        <div className="section-wrap">
          <Reveal as="span" className={styles.kicker}>
            04 / THE MODEL
          </Reveal>
          <Reveal as="h2" delay={0.1} className={styles.modelH2}>
            <span className={styles.textIvory}>DIAGNOSE.</span>
            <span className={styles.textIvory}>ARCHITECT.</span>
            <span className={styles.textIvory}>BUILD.</span>
            <span className={styles.textIvory}>AMPLIFY.</span>
            <span className={styles.textGreen}>OPTIMISE.</span>
          </Reveal>

          <div className={styles.modelFlow}>
            {[
              { num: '01', title: 'DIAGNOSE', desc: 'Understand the business, friction and current signal.' },
              { num: '02', title: 'ARCHITECT', desc: 'Map the capabilities required around the actual problem.' },
              { num: '03', title: 'BUILD', desc: 'Create the digital assets, systems or experiences required.' },
              { num: '04', title: 'AMPLIFY', desc: 'Deploy visibility, content and growth capabilities.' },
              { num: '05', title: 'OPTIMISE', desc: 'Use signal, data and performance to improve the system.' },
            ].map(({ num, title, desc }, i) => (
              <Reveal key={num} delay={i * 0.06} className={styles.modelStage}>
                <div className={styles.modelStageHeader}>
                  <span className={styles.modelStageIndex}>{num} /</span>
                  <h3 className={styles.modelStageTitle}>{title}</h3>
                </div>
                <p className={styles.modelStageDesc}>{desc}</p>
                {i < 4 && <div className={styles.modelStageConnector} aria-hidden="true" />}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          05 — PRINCIPLES
      ============================================================ */}
      <section className={styles.principlesSection} aria-label="Principles">
        <div className="section-wrap">
          <Reveal as="span" className={styles.kicker}>
            05 / PRINCIPLES
          </Reveal>
          <Reveal as="h2" delay={0.1} className={styles.sectionTitle}>
            <span className={styles.textIvory}>SIX PRINCIPLES.</span>
            <span className={styles.textGreen}>NON-NEGOTIABLE.</span>
          </Reveal>

          <div className={styles.principlesGrid}>
            {[
              { num: '01', title: 'Strategy before execution', body: 'We never build things without knowing why. Every design, campaign, and page serves a clear business objective — not a deliverable count.' },
              { num: '02', title: 'Jaipur-first, India-ready', body: 'We know this market. We know how local businesses win here and how they expand across India from here. Our Jaipur roots give us a cultural edge no remote agency can replicate.' },
              { num: '03', title: 'One strategy, everything connected', body: 'Your website informs your SEO. Your SEO informs your content. Your content informs your ads. No disconnected vendors pulling in different directions. One integrated strategy, everything compounding.' },
              { num: '04', title: 'Premium, always', body: 'Work that leaves here looks expensive, feels premium, and performs. We turn down projects that don\'t fit this standard.' },
              { num: '05', title: 'Speed with precision', body: 'Timelines are deadlines. We deliver on time, every time — without cutting corners on quality.' },
              { num: '06', title: 'Radical transparency', body: 'You will always know exactly what we are working on, why, and what results it is generating. No jargon. No fluff.' },
            ].map(({ num, title, body }, i) => (
              <Reveal key={num} delay={i * 0.06} className={styles.principleItem}>
                <span className={styles.principleIndex}>P / {num}</span>
                <h3 className={styles.principleTitle}>{title}</h3>
                <p className={styles.principleBody}>{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          06 — OPERATING MODEL
      ============================================================ */}
      <section className={styles.operatingSection} aria-label="Operating Model">
        <div className="section-wrap">
          <Reveal as="span" className={styles.kicker}>
            06 / OPERATING MODEL
          </Reveal>
          
          <div className={styles.operatingSplit}>
            <div className={styles.operatingLeft}>
              <Reveal as="h2" delay={0.1} className={styles.operatingH2}>
                <span className={styles.textIvory}>STRATEGY STAYS CLOSE.</span>
                <span className={styles.textGreen}>EXECUTION STAYS CONNECTED.</span>
              </Reveal>
              <Reveal as="p" delay={0.2} className={styles.operatingStatement}>
                Siyara is founder-led by design. The business problem is diagnosed directly. Strategic thinking remains close to execution. The original growth problem should not disappear between unnecessary layers.
              </Reveal>
            </div>
            
            <div className={styles.operatingRight}>
              <div className={styles.operatingGrid}>
                {[
                  { title: 'Diagnose first', body: 'Visibility, positioning, technology, growth: we identify what the business genuinely needs before anything is built.' },
                  { title: 'Founder-led direction', body: 'Strategic direction stays close to execution. Decisions are faster, accountability is clearer.' },
                  { title: 'Systems over campaigns', body: 'Your website, SEO, content, and ads are not separate activities — they are one compounding engine.' },
                  { title: 'Right capability for the brief', body: 'Execution is structured around what the business actually needs. Direct involvement where it matters most.' },
                ].map(({ title, body }, i) => (
                  <Reveal key={title} delay={0.2 + i * 0.08} className={styles.opItem}>
                    <h3 className={styles.opTitle}>{title}</h3>
                    <p className={styles.opBody}>{body}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ============================================================
          07 — FINAL ACTION
      ============================================================ */}
      <CTA
        eyebrow="07 / FINAL ACTION"
        title={<>THE THINKING IS DIFFERENT.<br /><span className="gold-shimmer">THE START IS SIMPLE.</span></>}
        primaryBtn={{ text: 'Start a Conversation', href: WA_LINKS.contact, isExternal: true, hasIcon: true }}
        secondaryBtn={{ text: 'Explore Our Services →', href: '/services' }}
        note="WHATSAPP / FASTEST RESPONSE"
      />
    </>
  )
}
