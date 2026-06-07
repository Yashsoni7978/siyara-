import type { Metadata } from 'next'
import Link from 'next/link'
import { WA_LINKS, BRAND } from '@/lib/constants'
import { RATING_STATS, CLIENT_TESTIMONIALS } from '@/lib/social-proof'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import styles from './contact.module.css'
import { IconMap } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Siyara Innovations. Start with a free 30-minute strategy call or message us on WhatsApp. We reply within 4 hours.',
  alternates: { canonical: `${BRAND.siteUrl}/contact` },
}

const CONTACT_OPTIONS = [
  {
    icon: '💬',
    title: 'WhatsApp (Fastest)',
    desc: 'Message us directly. We reply within 4 hours on weekdays.',
    cta: 'Message on WhatsApp',
    href: WA_LINKS.default,
    external: true,
  },
  {
    icon: '📞',
    title: 'Strategy Call',
    desc: 'Book a free 30-minute call to discuss your brand and what it needs.',
    cta: 'Book Free Call',
    href: WA_LINKS.strategyCall,
    external: true,
  },
  {
    icon: '✉️',
    title: 'Email',
    desc: 'Prefer email? Reach us at hello@siyarainnovations.com. We reply within 24 hours.',
    cta: 'Send an Email',
    href: `mailto:${BRAND.email}`,
    external: false,
  },
]

const FAQ = [
  { q: 'Where are you based?', a: 'We are based in Jaipur, Rajasthan, and work with businesses across India.' },
  { q: 'How quickly do you respond?', a: 'We typically respond to WhatsApp messages within 4 hours during weekdays (Mon–Sat, 9am–7pm IST).' },
  { q: 'Do you work with businesses outside Jaipur?', a: 'Yes. While we specialise in Jaipur-based businesses, we work with clients across India.' },
  { q: 'What is the minimum engagement?', a: "There's no minimum — we work on one-off projects and long-term retainers alike. The right fit depends on your goals." },
  { q: 'Do you offer a free consultation?', a: 'Yes. We offer a free 30-minute strategy call where we will tell you honestly what your brand needs — and what it does not.' },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title={<>Let&apos;s build something<br /><span className="gold-shimmer">worth talking about.</span></>}
        subtitle="No pitch decks. No sales calls. Just an honest conversation about your business and what it actually needs."
        breadcrumb={[{ label: 'Contact' }]}
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

      {/* Contact Options */}
      <section className={styles.optionsSection} aria-label="Contact options">
        <div className="section-wrap">
          <div className={styles.optionsGrid}>
            {CONTACT_OPTIONS.map(({ icon, title, desc, cta, href, external }, i) => (
              <Reveal key={title} delay={i * 0.12} className={styles.optionCard}>
                <span className={styles.optionIcon}>{icon}</span>
                <h2 className={styles.optionTitle}>{title}</h2>
                <p className={styles.optionDesc}>{desc}</p>
                <Link
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="btn-primary"
                  style={{ marginTop: 'auto', alignSelf: 'flex-start' }}
                >
                  {cta}
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
            {CLIENT_TESTIMONIALS.slice(0, 4).map((testi, i) => (
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

      {/* Info Strip */}
      <section className={styles.infoSection} aria-label="Office information">
        <div className="section-wrap">
          <div className={styles.infoGrid}>
            <Reveal className={styles.infoCard}>
              <span className={styles.infoLabel}>Location</span>
              <span className={styles.infoValue}>Jaipur, Rajasthan, India</span>
            </Reveal>
            <Reveal delay={0.1} className={styles.infoCard}>
              <span className={styles.infoLabel}>Working Hours</span>
              <span className={styles.infoValue}>Mon – Sat · 9am – 7pm IST</span>
            </Reveal>
            <Reveal delay={0.2} className={styles.infoCard}>
              <span className={styles.infoLabel}>Email</span>
              <a href={`mailto:${BRAND.email}`} className={styles.infoLink}>{BRAND.email}</a>
            </Reveal>
            <Reveal delay={0.3} className={styles.infoCard}>
              <span className={styles.infoLabel}>Response Time</span>
              <span className={styles.infoValue}>Within 4 hours (WhatsApp)</span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection} aria-label="Frequently asked questions">
        <div className="section-wrap">
          <div className={styles.faqHeader}>
            <Reveal as="span" className="eyebrow">FAQ</Reveal>
            <Reveal as="h2" delay={0.1} className={styles.faqTitle}>
              Quick answers.
            </Reveal>
          </div>
          <div className={styles.faqList}>
            {FAQ.map(({ q, a }, i) => (
              <Reveal key={q} delay={i * 0.08} className={styles.faqItem}>
                <h3 className={styles.faqQ}>{q}</h3>
                <p className={styles.faqA}>{a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
