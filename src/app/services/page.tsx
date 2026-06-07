import type { Metadata } from 'next'
import Link from 'next/link'
import { SERVICES, WA_LINKS, BRAND } from '@/lib/constants'
import { TESTIMONIALS, PLATFORM_STATS } from '@/lib/social-proof'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { CTA } from '@/components/ui/CTA'
import styles from './services.module.css'
import { IconMap } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore all 12 digital services by Siyara Innovations — web development, branding, AI automation, SEO, performance marketing, and more. Rated 4.9★ on Google by 47+ Jaipur businesses.',
  alternates: { canonical: `${BRAND.siteUrl}/services` },
  openGraph: {
    title: `Our Services | ${BRAND.name}`,
    description: 'Explore all 12 digital services by Siyara Innovations — web development, branding, AI automation, SEO, performance marketing, and more. Rated 4.9★ on Google by 47+ Jaipur businesses.',
    url: `${BRAND.siteUrl}/services`,
  },
}

const CATEGORIES = [
  { id: 'chosen',    label: 'Get Chosen',    icon: '◈', desc: 'Build the brand people trust on sight.', count: 4 },
  { id: 'found',     label: 'Get Found',     icon: '🔍', desc: 'Dominate search — Google, Maps & AI.', count: 3 },
  { id: 'revenue',   label: 'Get Revenue',   icon: '📈', desc: 'Turn your audience into paying customers.', count: 3 },
  { id: 'efficient', label: 'Get Efficient', icon: '⚡', desc: 'Automate and scale without the overhead.', count: 2 },
]

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
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title={<>12 services.<br /><em style={{ fontStyle: 'italic', color: 'var(--accent-primary)' }}>One unified strategy.</em></>}
        subtitle="Every service is designed to work together. When your website, SEO, ads, and social all share one strategy — they compound. That's the Siyara difference."
        breadcrumb={[{ label: 'Services' }]}
      />

      {/* Rating Strip */}
      <section className={styles.ratingStrip} aria-label="Ratings">
        <div className={styles.ratingStripInner}>
          {PLATFORM_STATS.map(({ platform, rating, reviews, logo }) => (
            <div key={platform} className={styles.ratingStripItem}>
              <span className={styles.ratingLogo}>{logo}</span>
              <span className={styles.ratingStars}>{'★★★★★'}</span>
              <span className={styles.ratingScore}>{rating} on {platform}</span>
              <span className={styles.ratingCount}>({reviews} reviews)</span>
            </div>
          ))}
        </div>
      </section>

      {/* Category Overview */}
      <section className={styles.categoriesSection} aria-label="Service categories">
        <div className="section-wrap">
          <div className={styles.categoriesGrid}>
            {CATEGORIES.map(({ id, label, icon, desc, count }, i) => (
              <Reveal key={id} delay={i * 0.1} className={styles.categoryCard}>
                <a href={`#${id}`} className={styles.categoryLink}>
                  <span className={styles.categoryIcon}>{icon}</span>
                  <span className={styles.categoryLabel}>{label}</span>
                  <p className={styles.categoryDesc}>{desc}</p>
                  <span className={styles.categoryCount}>{count} services</span>
                  <span className={styles.categoryArrow}>Explore ↓</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services by Category */}
      {CATEGORIES.map(cat => {
        const catServices = SERVICES.filter(s => s.category === cat.id)
        return (
          <section key={cat.id} id={cat.id} className={styles.categorySection} aria-label={cat.label}>
            <div className="section-wrap">
              <div className={styles.categoryHeader}>
                <Reveal as="span" className="eyebrow">{cat.label}</Reveal>
                <Reveal as="h2" delay={0.1} className={styles.categoryTitle}>{cat.desc}</Reveal>
              </div>
              <div className={styles.servicesGrid}>
                {catServices.map((svc, i) => (
                  <Reveal key={svc.id} delay={i * 0.1}>
                    <a href={WA_LINKS[svc.waLink]} target="_blank" rel="noopener noreferrer" className={styles.svcCard} aria-label={`Enquire about ${svc.name}`}>
                      <div className={styles.svcTop}>
                        <span className={styles.svcNum}>{svc.num}</span>
                        <span className={styles.svcIcon}>{IconMap[svc.icon]}</span>
                      </div>
                      <h3 className={styles.svcName}>{svc.name}</h3>
                      <p className={styles.svcDesc}>{svc.desc}</p>
                      <div className={styles.svcFix}><span>Fixes:</span> {svc.fix}</div>
                      <span className={styles.svcCta}>Enquire on WhatsApp →</span>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* Why Siyara vs Generic Agency */}
      <section className={styles.comparisonSection} aria-label="Why Siyara">
        <div className="section-wrap">
          <div className={styles.valuesHeader}>
            <Reveal as="span" className="eyebrow">Why Siyara</Reveal>
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

      {/* Testimonials slice */}
      <section className={styles.testimonialsSection} aria-label="Client testimonials">
        <div className="section-wrap">
          <div className={styles.valuesHeader}>
            <Reveal as="span" className="eyebrow">What Clients Say</Reveal>
            <Reveal as="h2" delay={0.1} className={styles.categoryTitle}>Rated 4.9★ across all platforms.</Reveal>
          </div>
          <div className={styles.testimonialsGrid}>
            {TESTIMONIALS.slice(0, 4).map(({ id, name, role, company, avatar, rating, platform, text }) => (
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

      {/* FAQ */}
      <section className={styles.faqSection} aria-label="Services FAQ">
        <div className="section-wrap">
          <div className={styles.valuesHeader}>
            <Reveal as="span" className="eyebrow">FAQ</Reveal>
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

      {/* CTA */}
      <CTA 
        title={<>Not sure where to start?<br /><span className="gold-shimmer">We&apos;ll tell you exactly what you need.</span></>}
        description="Free 30-minute strategy call. No pitch. Just an honest look at your brand and what it actually needs."
        primaryBtn={{ text: 'Book Free Strategy Call', href: WA_LINKS.strategyCall, isExternal: true, hasIcon: true }}
        secondaryBtn={{ text: 'Other Contact Options →', href: '/contact' }}
      />
    </>
  )
}
