import type { Metadata } from 'next'
import Link from 'next/link'
import { PORTFOLIO, WA_LINKS, BRAND } from '@/lib/constants'
import { RATING_STATS, CLIENT_TESTIMONIALS } from '@/lib/social-proof'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { CTA } from '@/components/ui/CTA'
import styles from './portfolio.module.css'
import { IconMap } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Browse Siyara Innovations\' portfolio of digital work — premium websites, branding, and campaigns built for ambitious businesses across India.',
  alternates: { canonical: `${BRAND.siteUrl}/portfolio` },
  openGraph: {
    title: `Portfolio | ${BRAND.name}`,
    description: 'Browse Siyara Innovations\' portfolio of digital work — premium websites, branding, and campaigns built for ambitious businesses across India.',
    url: `${BRAND.siteUrl}/portfolio`,
  },
}

const INDUSTRIES = ['All', 'Events & Weddings', 'Real Estate & Interiors', 'Restaurants & Food', 'Fashion & Clothing', 'Fitness & Wellness', 'Education & EdTech', 'Healthcare & Clinics']

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title={<>Built to impress.<br /><em style={{ fontStyle: 'italic', color: 'var(--accent-primary)' }}>Engineered to convert.</em></>}
        subtitle="Every project in our portfolio is a real business with real goals. Here is how we brought their brand to life."
        breadcrumb={[{ label: 'Portfolio' }]}
      />

      {/* Ratings Strip - Social Proof */}
      <section className={styles.ratingsStrip} aria-label="Platform Ratings">
        <div className="section-wrap">
          <div className={styles.ratingsGrid}>
            {RATING_STATS.map((stat, i) => (
              <Reveal key={stat.platform} delay={i * 0.1} className={styles.ratingItem}>
                <div className={styles.ratingPlatform}>
                  <span className={styles.platformIcon}>{IconMap[stat.icon]}</span>
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

      {/* Filter strip */}
      <section className={styles.filterSection} aria-label="Filter by industry">
        <div className={styles.filterWrap}>
          {INDUSTRIES.map((ind, i) => (
            <span key={ind} className={`${styles.filterChip} ${i === 0 ? styles.filterActive : ''}`}>
              {ind}
            </span>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className={styles.portfolioSection} aria-label="Portfolio projects">
        <div className="section-wrap">
          <div className={styles.grid}>
            {PORTFOLIO.map((item, i) => (
              <Reveal key={item.id} delay={(i % 3) * 0.1}>
                <a
                  href={item.demoLink}
                  className={styles.card}
                  aria-label={`View ${item.name} project`}
                >
                  {/* Visual placeholder */}
                  <div className={styles.cardVisual}>
                    <div className={styles.cardPattern} aria-hidden="true" />
                    <span className={styles.cardInitials}>
                      {item.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                    </span>
                    <span className={styles.cardViewLabel}>View Project →</span>
                  </div>

                  <div className={styles.cardBody}>
                    <span className={styles.cardIndustry}>{item.industry}</span>
                    <h2 className={styles.cardName}>{item.name}</h2>
                    <p className={styles.cardDesc}>{item.desc}</p>
                  </div>
                </a>
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
            {CLIENT_TESTIMONIALS.slice(0, 6).map((testi, i) => (
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
      <CTA 
        title="Want your brand in this portfolio?"
        description="We take on a limited number of new clients each quarter to ensure every project gets the attention it deserves."
        primaryBtn={{ text: 'Start a Project →', href: WA_LINKS.hero, isExternal: true }}
        secondaryBtn={{ text: 'View All Services →', href: '/services' }}
      />
    </>
  )
}
