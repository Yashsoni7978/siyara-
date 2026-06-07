import type { Metadata } from 'next'
import Link from 'next/link'
import { WA_LINKS, BRAND } from '@/lib/constants'
import { POSTS } from '@/lib/blog-posts'
import { RATING_STATS, CLIENT_TESTIMONIALS } from '@/lib/social-proof'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { CTA } from '@/components/ui/CTA'
import styles from './blog.module.css'
import sharedStyles from '../contact/contact.module.css'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Strategy, growth thinking, and digital marketing insights from the Siyara Innovations team. Written for Jaipur businesses who want to dominate online.',
  alternates: { canonical: `${BRAND.siteUrl}/blog` },
  openGraph: {
    title: `Insights | ${BRAND.name}`,
    description: 'Strategy, growth thinking, and digital marketing insights from the Siyara Innovations team. Written for Jaipur businesses who want to dominate online.',
    url: `${BRAND.siteUrl}/blog`,
  },
}

const CATEGORIES = ['All', 'Marketing', 'SEO', 'Branding', 'Ads', 'AI', 'Business']

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={<>Thinking out loud.</>}
        subtitle="Strategy, digital growth, and straight talk about what actually works for ambitious businesses. Written by practitioners, not content mills."
        breadcrumb={[{ label: 'Insights' }]}
      />

      {/* Ratings Strip - Social Proof */}
      <section className={sharedStyles.ratingsStrip} aria-label="Platform Ratings">
        <div className="section-wrap">
          <div className={sharedStyles.ratingsGrid}>
            {RATING_STATS.map((stat, i) => (
              <Reveal key={stat.platform} delay={i * 0.1} className={sharedStyles.ratingItem}>
                <div className={sharedStyles.ratingPlatform}>
                  <span className={sharedStyles.platformIcon}>{stat.icon}</span>
                  <div className={sharedStyles.stars}>
                    {'★'.repeat(Math.floor(stat.rating))}
                    {stat.rating % 1 !== 0 && '★'}
                  </div>
                </div>
                <div className={sharedStyles.ratingScore}>
                  <span className={sharedStyles.scoreNum}>{stat.rating}</span>
                  <span className={sharedStyles.scoreLabel}>
                    {stat.platform} · {stat.reviews} reviews
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Category filter — visual only */}
      <section className={styles.filterSection} aria-label="Post categories">
        <div className={styles.filterWrap}>
          {CATEGORIES.map((cat, i) => (
            <span key={cat} className={`${styles.filterChip} ${i === 0 ? styles.filterActive : ''}`}>
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Posts grid */}
      <section className={styles.postsSection} aria-label="Blog posts">
        <div className="section-wrap">
          <div className={styles.postsGrid}>
            {POSTS.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`} className={styles.postCard}>
                  <div className={styles.postTop}>
                    <span className={styles.postCategory}>{post.category}</span>
                    <span className={styles.postMeta}>{post.date} · {post.readTime}</span>
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <span className={styles.postRead}>Read article →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Dense Content */}
      <section className={sharedStyles.testimonialsSection} aria-label="Client testimonials">
        <div className="section-wrap">
          <div className={sharedStyles.testiHeader}>
            <Reveal as="span" className="eyebrow">Client Success</Reveal>
            <Reveal as="h2" delay={0.1} className={sharedStyles.testiTitle}>
              Real ROI for real businesses.
            </Reveal>
          </div>
          
          <div className={sharedStyles.testiGrid}>
            {CLIENT_TESTIMONIALS.slice(0, 4).map((testi, i) => (
              <Reveal key={testi.author} delay={i * 0.1} className={sharedStyles.testiCard}>
                <div className={sharedStyles.testiTop}>
                  <div className={sharedStyles.testiAvatar}>{testi.author.split(' ').map(n=>n[0]).join('')}</div>
                  <div>
                    <div className={sharedStyles.testiAuthor}>{testi.author}</div>
                    <div className={sharedStyles.testiRole}>{testi.role}</div>
                  </div>
                  <span className={sharedStyles.testiPlatform}>{testi.platform}</span>
                </div>
                <div className={sharedStyles.stars}>★★★★★</div>
                <p className={sharedStyles.testiQuote}>&quot;{testi.quote}&quot;</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA 
        title="Want insights delivered to you?"
        description="We send a short, practical WhatsApp message when a new piece goes live. No spam."
        primaryBtn={null as any}
        secondaryBtn={{ text: 'Get Insights on WhatsApp →', href: WA_LINKS.default, isExternal: true }}
        withGlow={false}
      />
    </>
  )
}
