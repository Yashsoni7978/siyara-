import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SERVICES, WA_LINKS, BRAND } from '@/lib/constants'
import { TESTIMONIALS, PLATFORM_STATS } from '@/lib/social-proof'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { CTA } from '@/components/ui/CTA'
import styles from './services.module.css'
import { IconMap } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'Our Services | Capability System',
  description: 'Explore all 14 digital capabilities by Siyara Innovations — web development, branding, AI automation, SEO, performance marketing, and more. Rated 4.9★ on Google.',
  alternates: { canonical: `${BRAND.siteUrl}/services` },
  openGraph: {
    title: `Our Services | ${BRAND.name}`,
    description: 'Explore all 14 digital capabilities by Siyara Innovations.',
    url: `${BRAND.siteUrl}/services`,
  },
}

const COMPARISON = [
  { feature: 'Strategy-led approach',    siyara: true,  generic: false },
  { feature: 'Integrated cross-service', siyara: true,  generic: false },
  { feature: 'Dedicated specialist',     siyara: true,  generic: false },
  { feature: 'Monthly transparency reports', siyara: true, generic: false },
  { feature: 'Jaipur market expertise',  siyara: true,  generic: false },
  { feature: 'AI & GEO capabilities',    siyara: true,  generic: false },
  { feature: 'No lock-in contracts',     siyara: true,  generic: false },
  { feature: 'WhatsApp support',         siyara: true,  generic: false },
]

const SERVICES_FAQ = [
  { q: 'Can I pick just one service?', a: 'Absolutely. While our services compound when combined, we offer every service individually. Start with what you need most right now.' },
  { q: 'What is your pricing structure?', a: 'We work on project fees (for one-off work like websites or branding) and monthly retainers (for ongoing services like SEO, ads, and social media). We share pricing transparently on the strategy call.' },
  { q: 'How long does a website take?', a: 'A standard business website typically takes 3–5 weeks from kickoff to launch. A more complex e-commerce or custom platform takes 6–10 weeks.' },
  { q: 'Do you work with businesses outside Jaipur?', a: 'Yes. We work with clients across India. While our deepest market expertise is Jaipur and Rajasthan, our services work for any Indian business.' },
  { q: 'What happens if I am not happy with the results?', a: 'We have monthly check-ins where we review performance together. If results are not meeting expectations, we diagnose and fix — transparently. We do not hide behind data and we do not make excuses.' },
  { q: 'What industries do you specialise in?', a: 'We have deep expertise in restaurants & food, fashion & clothing, real estate & interiors, e-commerce & D2C, and events & weddings. However, our methodology works across industries.' },
  { q: 'Do you offer a free consultation?', a: 'Yes. We offer a free 30-minute strategy call where we will honestly assess what your brand needs. No pitch, no pressure — just a real conversation.' },
  { q: 'How do I know which services I need?', a: 'That is exactly what the strategy call is for. After understanding your goals, we recommend the specific services you need — and tell you which ones you do not. We never upsell.' },
]

const CAPABILITY_SYSTEMS = [
  {
    id: '01',
    title: 'BRAND & EXPERIENCE',
    headline: 'BUILD THE BRAND PEOPLE TRUST ON SIGHT.',
    purpose: 'Build the brand people trust and the digital experience they move through.',
    serviceIds: ['web-development', 'app-development', 'ui-ux-design', 'branding'],
    layout: 'grid'
  },
  {
    id: '02',
    title: 'VISIBILITY & DISCOVERY',
    headline: 'DOMINATE SEARCH — GOOGLE, MAPS & AI.',
    purpose: 'Make the business easier to find, understand and choose.',
    serviceIds: ['seo', 'geo', 'google-business', 'content-creation'],
    layout: 'list'
  },
  {
    id: '03',
    title: 'GROWTH & CONVERSION',
    headline: 'TURN YOUR AUDIENCE INTO PAYING CUSTOMERS.',
    purpose: 'Turn attention into measurable business movement.',
    serviceIds: ['social-media', 'performance-marketing', 'whatsapp-marketing', 'email-marketing'],
    layout: 'grid'
  },
  {
    id: '04',
    title: 'AUTOMATION & SCALE',
    headline: 'AUTOMATE AND SCALE WITHOUT THE OVERHEAD.',
    purpose: 'Remove repetitive friction and build operating leverage.',
    serviceIds: ['ai-automation', 'ai-agents'],
    layout: 'compact'
  }
]

export default function ServicesPage() {
  return (
    <>
      {/* 01 — CAPABILITY SYSTEM / HERO */}
      <PageHero
        eyebrow="01 / CAPABILITY SYSTEM"
        title={<>14 services.<br /><em style={{ color: 'var(--accent-primary)' }}>One unified strategy.</em></>}
        subtitle="Every service is designed to work together. When your website, SEO, ads, and social all share one strategy — they compound. That's the Siyara difference."
        breadcrumb={[{ label: 'Services' }]}
      />

      {/* 02 — THE CONNECTION */}
      <section className={styles.connectionSection} aria-label="Our Connection Philosophy">
        <div className="section-wrap">
          <div className={styles.connectionInner}>
            <div className={styles.connectionLeft}>
              <Reveal as="span" className="eyebrow">02 / THE CONNECTION</Reveal>
              <Reveal as="h2" delay={0.1} className={styles.connectionTitle}>
                <span style={{ color: 'var(--text-primary)' }}>THE SERVICE ISN&apos;T<br/>THE STRATEGY.</span><br />
                <span style={{ color: 'var(--accent-primary)' }}>THE CONNECTION IS.</span>
              </Reveal>
            </div>
            <div className={styles.connectionRight}>
              <Reveal delay={0.2} className={styles.connectionText}>
                You may come looking for a website, SEO, content, or automation. We start with the business problem — then connect the capabilities required to move it.
              </Reveal>
              <Reveal delay={0.3} className={styles.connectionLabel}>
                <span className={styles.labelDot}></span>
                CAPABILITY ARCHITECTURE
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 03-06 — THE FOUR CAPABILITY SYSTEMS */}
      <div className={styles.systemsWrapper}>
        {CAPABILITY_SYSTEMS.map((sys, idx) => {
          const sysServices = sys.serviceIds.map(id => SERVICES.find(s => s.id === id)).filter(Boolean) as typeof SERVICES[number][];
          
          return (
            <section key={sys.id} id={`system-${sys.id}`} className={styles.systemSection} aria-label={sys.title}>
              <div className="section-wrap">
                <div className={styles.systemHeader}>
                  <Reveal as="span" className="eyebrow">SYSTEM / {sys.id}</Reveal>
                  <Reveal as="h2" delay={0.1} className={styles.systemTitle}>{sys.title}</Reveal>
                  <Reveal as="h3" delay={0.15} className={styles.systemHeadline}>{sys.headline}</Reveal>
                  <Reveal as="p" delay={0.2} className={styles.systemPurpose}>{sys.purpose}</Reveal>
                </div>
                
                <div className={sys.layout === 'compact' ? styles.compactGrid : (sys.layout === 'list' ? styles.listGrid : styles.capabilityGrid)}>
                  {sysServices.map((svc, i) => (
                    <Reveal key={svc.id} delay={i * 0.1} className={styles.capCard}>
                      <div className={styles.capHeader}>
                        <span className={styles.capNum}>CAPABILITY / {String(i + 1).padStart(2, '0')}</span>
                        <span className={styles.capIcon}>{IconMap[svc.icon as keyof typeof IconMap]}</span>
                      </div>
                      <div className={styles.capContent}>
                        <h4 className={styles.capName}>{svc.name}</h4>
                        <p className={styles.capDesc}>{svc.desc}</p>
                        <Link href={WA_LINKS[svc.waLink as keyof typeof WA_LINKS] || WA_LINKS.services} target="_blank" rel="noopener noreferrer" className={styles.capLink}>
                          Discuss this capability →
                        </Link>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* 07 — CONNECTED RESULTS */}
      <section className={styles.synergySection} aria-label="Service synergy">
        <div className="section-wrap">
          <div className={styles.valuesHeader}>
            <Reveal as="span" className="eyebrow">07 / CONNECTED RESULTS</Reveal>
            <Reveal as="h2" delay={0.1} className={styles.categoryTitle}>When services work together,<br />results multiply.</Reveal>
            <Reveal as="p" delay={0.2} className={styles.synergySubtext}>
              Most agencies sell services in isolation. A website here, some ads there, a social media package somewhere else. The result? Nothing compounds. With Siyara, every service feeds into every other service — creating a digital ecosystem where growth accelerates over time.
            </Reveal>
          </div>

          <Reveal delay={0.3} style={{ marginBottom: '80px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(var(--accent-primary-rgb), 0.2)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', textAlign: 'center', position: 'relative', width: '100%', maxWidth: '800px', margin: '0 auto 80px', height: 'auto', aspectRatio: '16/9' }}>
            <Image src="/images/services_3d.png" alt="Siyara Digital Services Synergy" fill style={{ objectFit: 'contain' }} sizes="(max-width: 800px) 100vw, 800px" />
          </Reveal>

          <div className={styles.synergyGrid}>
            {[
              { combo: 'Website + SEO', effect: 'Your site ranks. Your traffic grows organically. Every page is built with keywords and technical SEO from day one — not bolted on as an afterthought.', multiplier: '3.2x' },
              { combo: 'SEO + Content', effect: 'Every blog post, every landing page is a strategic asset designed to capture search intent and build topical authority in your market.', multiplier: '2.8x' },
              { combo: 'Ads + Website', effect: 'Paid traffic lands on pages engineered for conversion. Not a generic homepage — a specific, targeted landing page that matches the ad\'s promise.', multiplier: '4.1x' },
              { combo: 'Social + Branding', effect: 'Your social presence feels cohesive, premium, and unmistakably yours. Every post reinforces your brand positioning.', multiplier: '2.5x' },
              { combo: 'AI + Operations', effect: 'Your lead follow-up is instant. Your customer support is 24/7. Manual processes are automated. Your team focuses on what humans do best.', multiplier: '5x' },
              { combo: 'GEO + SEO', effect: 'You dominate both traditional Google search and the new AI-powered search engines. When ChatGPT recommends businesses in your industry, you are mentioned.', multiplier: '∞' },
            ].map(({ combo, effect, multiplier }, i) => (
              <Reveal key={combo} delay={i * 0.08} className={styles.synergyCard}>
                <div className={styles.synergyTop}>
                  <span className={styles.synergyCombo}>{combo}</span>
                  <span className={styles.synergyMultiplier}>{multiplier} ROI</span>
                </div>
                <p className={styles.synergyEffect}>{effect}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — THE DIFFERENCE */}
      <section className={styles.comparisonSection} aria-label="Why Siyara">
        <div className="section-wrap">
          <div className={styles.valuesHeader}>
            <Reveal as="span" className="eyebrow">08 / THE DIFFERENCE</Reveal>
            <Reveal as="h2" delay={0.1} className={styles.categoryTitle}>Not all agencies are equal.</Reveal>
          </div>
          <Reveal className={styles.comparisonTable}>
            <div className={styles.comparisonHeader}>
              <div className={styles.comparisonFeature} />
              <div className={styles.comparisonCol}>
                <span className={styles.comparisonColLabel}>Siyara Innovations</span>
                <span className={styles.comparisonColSub}>Premium · Integrated · Jaipur-based</span>
              </div>
              <div className={styles.comparisonCol}>
                <span className={styles.comparisonColLabel}>Generic Agency</span>
                <span className={styles.comparisonColSub}>One-size-fits-all · Siloed · Remote</span>
              </div>
            </div>
            {COMPARISON.map(({ feature, siyara, generic }) => (
              <div key={feature} className={styles.comparisonRow}>
                <div className={styles.comparisonFeature}>{feature}</div>
                <div className={styles.comparisonCell}><span className={`${styles.check} ${siyara ? styles.checkYes : styles.checkNo}`}>{siyara ? '✓' : '✗'}</span></div>
                <div className={styles.comparisonCell}><span className={`${styles.check} ${styles.checkNo}`}>✗</span></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 09 — THE PROCESS */}
      <section className={styles.deepProcessSection} aria-label="How we work">
        <div className="section-wrap">
          <div className={styles.valuesHeader}>
            <Reveal as="span" className="eyebrow">09 / THE PROCESS</Reveal>
            <Reveal as="h2" delay={0.1} className={styles.categoryTitle}>From first call to<br />measurable results.</Reveal>
          </div>
          <div className={styles.deepProcessGrid}>
            {[
              { num: '01', title: 'Free Strategy Call', time: '30 min', desc: 'We listen to your goals, audit your current state, and tell you honestly what you need — and what you don\'t. No obligation, no pitch deck.' },
              { num: '02', title: 'Custom Proposal', time: '3–5 days', desc: 'You receive a detailed proposal with recommended services, timeline, deliverables, and transparent pricing. No surprises, ever.' },
              { num: '03', title: 'Discovery & Research', time: 'Week 1', desc: 'We deep-dive into your market, competitors, and customers. We study what is working, what is broken, and where the biggest opportunities are.' },
              { num: '04', title: 'Strategy & Roadmap', time: 'Week 2', desc: 'We present a prioritised, phased roadmap. You know exactly what happens, when, and why. Every recommendation is tied to a business outcome.' },
              { num: '05', title: 'Build & Execute', time: 'Weeks 3–6', desc: 'Our specialists execute the plan. Design, development, content, campaigns — all built to our quality standard. Nothing goes live without your approval.' },
              { num: '06', title: 'Launch & Optimise', time: 'Ongoing', desc: 'We deploy, monitor, and refine. Monthly reports show exactly what\'s working. We optimise relentlessly. Your investment compounds every month.' },
            ].map(({ num, title, time, desc }, i) => (
              <Reveal key={num} delay={i * 0.08} className={styles.deepProcessStep}>
                <div className={styles.deepProcessHeader}>
                  <span className={styles.deepProcessNum}>{num}</span>
                  <span className={styles.deepProcessTime}>{time}</span>
                </div>
                <h3 className={styles.deepProcessTitle}>{title}</h3>
                <p className={styles.deepProcessDesc}>{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — CLIENT PROOF */}
      <section className={styles.testimonialsSection} aria-label="Client testimonials">
        <div className="section-wrap">
          <div className={styles.valuesHeader}>
            <Reveal as="span" className="eyebrow">10 / CLIENT PROOF</Reveal>
            <Reveal as="h2" delay={0.1} className={styles.categoryTitle}>Rated 4.9★ across all platforms.</Reveal>
          </div>
          
          {/* Rating Strip (Moved from top) */}
          <div className={styles.ratingStripInner} style={{ marginBottom: '40px', background: 'var(--bg-surface)', borderRadius: '12px', border: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
            {PLATFORM_STATS.map(({ platform, rating, reviews, logo }) => (
              <div key={platform} className={styles.ratingStripItem}>
                <span className={styles.ratingLogo}>{logo}</span>
                <span className={styles.ratingStars}>{'★★★★★'}</span>
                <span className={styles.ratingScore}>{rating} on {platform}</span>
                <span className={styles.ratingCount}>({reviews} reviews)</span>
              </div>
            ))}
          </div>

          <div className={styles.testimonialsGrid}>
            {TESTIMONIALS.slice(0, 6).map(({ id, name, role, company, avatar, rating, platform, text }) => (
              <Reveal key={id} delay={(id % 2) * 0.12} className={styles.testimonialCard}>
                <div className={styles.testimonialTop}>
                  <div className={styles.testimonialAvatar}><span>{avatar}</span></div>
                  <div>
                    <span className={styles.testimonialName}>{name}</span>
                    <span className={styles.testimonialCompany}>{role} · {company}</span>
                  </div>
                  <span className={styles.testimonialPlatform}>{platform}</span>
                </div>
                <div className={styles.testimonialStars}>{'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}</div>
                <p className={styles.testimonialText}>&ldquo;{text}&rdquo;</p>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/about" className="btn-outline">Read All Testimonials →</Link>
          </Reveal>
        </div>
      </section>

      {/* 11 — QUICK ANSWERS */}
      <section className={styles.faqSection} aria-label="Services FAQ">
        <div className="section-wrap">
          <div className={styles.valuesHeader}>
            <Reveal as="span" className="eyebrow">11 / QUICK ANSWERS</Reveal>
            <Reveal as="h2" delay={0.1} className={styles.categoryTitle}>Common questions answered.</Reveal>
          </div>
          <div className={styles.faqList}>
            {SERVICES_FAQ.map(({ q, a }, i) => (
              <Reveal key={q} delay={i * 0.08} className={styles.faqItem}>
                <h3 className={styles.faqQ}>{q}</h3>
                <p className={styles.faqA}>{a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 12 — FINAL ACTION */}
      <div id="action">
        <CTA 
          title={<>Not sure where to start?<br /><span className="gold-shimmer">We&apos;ll tell you exactly what you need.</span></>}
          description="Free 30-minute strategy call. No pitch. Just an honest look at your brand and what it actually needs."
          primaryBtn={{ text: 'Start a Conversation', href: WA_LINKS.contact, isExternal: true, hasIcon: true }}
          secondaryBtn={{ text: 'Learn About Us →', href: '/about' }}
        />
      </div>
    </>
  )
}
