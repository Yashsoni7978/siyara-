import type { Metadata } from 'next'
import Link from 'next/link'
import { BRAND, WA_LINKS } from '@/lib/constants'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import styles from '../legal.module.css'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Siyara Innovations.',
  alternates: { canonical: `${BRAND.siteUrl}/privacy` },
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={<>Privacy <span className="gold-shimmer">Policy</span></>}
        subtitle="How we handle your data, protect your privacy, and secure your information."
        breadcrumb={[{ label: 'Privacy Policy' }]}
      />

      <section className={`light-section ${styles.legalSection}`}>
        <div className={`section-wrap ${styles.legalWrap}`}>
          <Reveal className={styles.legalContent}>
            <div>
              <h2>1. Introduction</h2>
              <p>At Siyara Innovations, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
            </div>
            
            <div>
              <h2>2. Information We Collect</h2>
              <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
              <ul>
                <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number.</li>
                <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
              </ul>
            </div>

            <div>
              <h2>3. Use of Your Information</h2>
              <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
              <ul>
                <li>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site to you.</li>
                <li>Email you regarding your account or order.</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
              </ul>
            </div>

            <div>
              <h2>4. Contact Us</h2>
              <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
              <p style={{ marginTop: '12px' }}>
                Siyara Innovations<br />
                Jaipur, Rajasthan, India<br />
                Email: <a href={`mailto:${BRAND.email}`} style={{ color: 'var(--accent-primary)' }}>{BRAND.email}</a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="section-wrap">
          <Reveal as="h2" className={styles.ctaTitle}>
            Have more questions?
          </Reveal>
          <Reveal delay={0.1} as="p" className={styles.ctaDesc}>
            We&apos;re always here to help. Reach out to our team on WhatsApp for immediate support.
          </Reveal>
          <Reveal delay={0.2} style={{ marginTop: '32px' }}>
            <Link href={WA_LINKS.default} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Contact Support →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
