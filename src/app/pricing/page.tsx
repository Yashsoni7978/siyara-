import type { Metadata } from 'next'
import Link from 'next/link'
import { WA_LINKS, BRAND } from '@/lib/constants'
import { RATING_STATS, CLIENT_TESTIMONIALS } from '@/lib/social-proof'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
// Reusing contact module css for shared social proof elements
import styles from '../contact/contact.module.css'
import pricingStyles from './pricing.module.css'

export const metadata: Metadata = {
  title: 'Pricing & Packages',
  description: 'Transparent pricing for premium web development, SEO, and performance marketing in Jaipur.',
  alternates: { canonical: `${BRAND.siteUrl}/pricing` },
}

const PRICING_PLANS = [
  {
    name: 'Website Design & Dev',
    price: 'Starting ₹45,000',
    desc: 'Custom, high-performance websites engineered to convert visitors into leads.',
    features: [
      'Custom UI/UX Design (Figma)',
      'Next.js / React Development',
      'Mobile-First & Fully Responsive',
      'On-Page SEO Setup',
      'Fast Load Times (< 2s)',
      'CMS Integration'
    ]
  },
  {
    name: 'SEO & Content',
    price: 'Starting ₹25,000 / mo',
    desc: 'Dominate Google search results and drive high-intent organic traffic consistently.',
    features: [
      'Comprehensive Keyword Strategy',
      'Technical SEO Audits',
      'Content Creation (4 Articles/mo)',
      'Backlink Building',
      'Google Business Profile Optimization',
      'Monthly Performance Reports'
    ],
    popular: true
  },
  {
    name: 'Performance Marketing',
    price: 'Custom Quote',
    desc: 'Data-driven Meta and Google Ads campaigns focused strictly on ROI.',
    features: [
      'Campaign Strategy & Setup',
      'Ad Creative & Copywriting',
      'A/B Testing & Scaling',
      'Landing Page Optimization',
      'Conversion Tracking Setup',
      'Bi-weekly Strategy Calls'
    ]
  }
]

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={<>Premium work.<br /><span className="gold-shimmer">Transparent pricing.</span></>}
        subtitle="We do not compete on price. We compete on value, quality, and results. Here is what you can expect when partnering with Siyara."
        breadcrumb={[{ label: 'Pricing' }]}
      />

      {/* Ratings Strip - Social Proof */}
      <section className={styles.ratingsStrip} aria-label="Platform Ratings">
        <div className="section-wrap">
          <div className={styles.ratingsGrid}>
            {RATING_STATS.map((stat, i) => (
              <Reveal key={stat.platform} delay={i * 0.1} className={styles.ratingItem}>
                <div className={styles.ratingPlatform}>
                  <span className={styles.platformIcon}>{stat.icon}</span>
                  <div className={styles.stars}>
                    {'★'.repeat(Math.floor(stat.rating))}
                    {stat.rating % 1 !== 0 && '★'}
                  </div>
                </div>
                <div className={styles.ratingScore}>
                  <span className={styles.scoreNum}>{stat.rating}</span>
                  <span className={styles.scoreLabel}>
                    {stat.platform} · {stat.reviews} reviews
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className={pricingStyles.pricingSection}>
        <div className="section-wrap">
          <div className={pricingStyles.pricingGrid}>
            {PRICING_PLANS.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.15} className={pricingStyles.pricingCard}>
                {plan.popular && (
                  <span className={pricingStyles.popularBadge}>
                    Most Popular
                  </span>
                )}
                <h2 className={pricingStyles.planName}>{plan.name}</h2>
                <div className={pricingStyles.planPrice}>{plan.price}</div>
                <p className={pricingStyles.planDesc}>{plan.desc}</p>
                
                <ul className={pricingStyles.featuresList}>
                  {plan.features.map(f => (
                    <li key={f} className={pricingStyles.featureItem}>
                      <span className={pricingStyles.featureIcon}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                
                <Link href={WA_LINKS.strategyCall} target="_blank" className={`btn-primary ${pricingStyles.getStartedBtn}`}>
                  Get Started
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Dense Content */}
      <section className={styles.testimonialsSection} aria-label="Client testimonials">
        <div className="section-wrap">
          <div className={styles.testiHeader}>
            <Reveal as="span" className="eyebrow">Client Success</Reveal>
            <Reveal as="h2" delay={0.1} className={styles.testiTitle}>
              Real ROI for real businesses.
            </Reveal>
          </div>
          
          <div className={styles.testiGrid}>
            {CLIENT_TESTIMONIALS.slice(4, 8).map((testi, i) => (
              <Reveal key={testi.author} delay={i * 0.1} className={styles.testiCard}>
                <div className={styles.testiTop}>
                  <div className={styles.testiAvatar}>{testi.author.split(' ').map(n=>n[0]).join('')}</div>
                  <div>
                    <div className={styles.testiAuthor}>{testi.author}</div>
                    <div className={styles.testiRole}>{testi.role}</div>
                  </div>
                  <span className={styles.testiPlatform}>{testi.platform}</span>
                </div>
                <div className={styles.stars}>★★★★★</div>
                <p className={styles.testiQuote}>&quot;{testi.quote}&quot;</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.ctaSection} ${pricingStyles.ctaSection}`} aria-label="Start your project">
        <div className="section-wrap">
          <Reveal as="h2" className={styles.ctaTitle}>
            Ready to invest in your growth?
          </Reveal>
          <Reveal delay={0.1} as="p" className={pricingStyles.ctaDesc}>
            Book a free strategy call to discuss your goals. We&apos;ll give you an honest assessment of what you need and a custom proposal.
          </Reveal>
          <Reveal delay={0.2} className={pricingStyles.ctaBtnWrap}>
            <Link href={WA_LINKS.strategyCall} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Strategy Call →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
