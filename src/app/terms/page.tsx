import type { Metadata } from 'next'
import Link from 'next/link'
import { BRAND, WA_LINKS } from '@/lib/constants'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import styles from '../legal.module.css'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and Conditions for Siyara Innovations.',
  alternates: { canonical: `${BRAND.siteUrl}/terms` },
}

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={<>Terms of <span className="gold-shimmer">Service</span></>}
        subtitle="The rules, guidelines, and terms that govern the use of our services."
        breadcrumb={[{ label: 'Terms of Service' }]}
      />

      <section className={`light-section ${styles.legalSection}`}>
        <div className={`section-wrap ${styles.legalWrap}`}>
          <Reveal className={styles.legalContent}>
            <div>
              <h2>1. Agreement to Terms</h2>
              <p>By accessing our website and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
            </div>
            
            <div>
              <h2>2. Intellectual Property Rights</h2>
              <p>Unless otherwise stated, Siyara Innovations and/or its licensors own the intellectual property rights for all material on Siyara Innovations. All intellectual property rights are reserved. You may access this from Siyara Innovations for your own personal use subjected to restrictions set in these terms and conditions.</p>
              <ul>
                <li>Republish material from Siyara Innovations</li>
                <li>Sell, rent or sub-license material from Siyara Innovations</li>
                <li>Reproduce, duplicate or copy material from Siyara Innovations</li>
                <li>Redistribute content from Siyara Innovations</li>
              </ul>
            </div>

            <div>
              <h2>3. Service Terms</h2>
              <p>When you engage Siyara Innovations for our digital marketing, web development, or AI automation services, specific project timelines, deliverables, and payment terms will be outlined in a separate written agreement or proposal tailored to your project.</p>
            </div>

            <div>
              <h2>4. Disclaimer</h2>
              <p>The materials on Siyara Innovations&apos; website are provided on an &apos;as is&apos; basis. Siyara Innovations makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="section-wrap">
          <Reveal as="h2" className={styles.ctaTitle}>
            Need clarification?
          </Reveal>
          <Reveal delay={0.1} as="p" className={styles.ctaDesc}>
            If you have any questions regarding our terms, please feel free to contact us.
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
