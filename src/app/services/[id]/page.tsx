import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { SERVICES, WA_LINKS, BRAND } from '@/lib/constants'
import { PageHero } from '@/components/ui/PageHero'
import { CTA } from '@/components/ui/CTA'
import { Reveal } from '@/components/ui/Reveal'
import styles from './service.module.css'
import { IconMap } from '@/components/ui/Icons'

export async function generateStaticParams() {
  return SERVICES.map((svc) => ({
    id: svc.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const svc = SERVICES.find((s) => s.id === resolvedParams.id)
  if (!svc) return { title: 'Not Found' }
  return {
    title: `${svc.name} in ${BRAND.location.split(',')[0]} | ${BRAND.name}`,
    description: svc.desc,
    alternates: { canonical: `${BRAND.siteUrl}/services/${svc.id}` },
    openGraph: {
      title: `${svc.name} Services | ${BRAND.name}`,
      description: svc.desc,
      url: `${BRAND.siteUrl}/services/${svc.id}`,
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const svc = SERVICES.find((s) => s.id === resolvedParams.id)
  if (!svc) notFound()

  // Use type assertion for WA_LINKS to avoid TS index errors
  const waKey = svc.waLink as keyof typeof WA_LINKS
  const waHref = WA_LINKS[waKey] || WA_LINKS.default

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            <span className={styles.heroIcon}>{IconMap[svc.icon]}</span>
            <br />
            {svc.name}
          </>
        }
        subtitle={svc.desc}
        breadcrumb={[
          { label: 'Services', href: '/services' },
          { label: svc.name },
        ]}
      />

      <section className={styles.container}>
        <div className="section-wrap">
          <Reveal>
            <h2 className="section-title" style={{ textAlign: 'center' }}>
              The Problem vs. The Fix
            </h2>
          </Reveal>

          <div className={styles.problemSolution}>
            <Reveal delay={0.1} className={styles.box}>
              <h3 className={styles.boxTitle}>The Problem</h3>
              <p className={styles.boxDesc}>
                Many businesses suffer from a <strong>{svc.fix}</strong>. They invest time and capital, but fail to see the corresponding growth because their foundation is weak or their strategy is misaligned.
              </p>
            </Reveal>

            <Reveal delay={0.2} className={`${styles.box} ${styles.fixBox}`}>
              <h3 className={styles.boxTitle}>The Siyara Fix</h3>
              <p className={styles.boxDesc}>
                We don&apos;t just patch the issue. We completely overhaul your {svc.name.toLowerCase()} approach, building a resilient system designed strictly for conversion, authority, and sustained revenue growth.
              </p>
            </Reveal>
          </div>

          <div style={{ marginTop: '8rem' }}>
            <Reveal>
              <h2 className="section-title" style={{ textAlign: 'center' }}>
                Our Approach
              </h2>
            </Reveal>

            <div className={styles.processGrid}>
              <Reveal delay={0.1} className={styles.processStep}>
                <span className={styles.stepNum}>01. Audit & Strategy</span>
                <h3 className={styles.stepTitle}>Deep Dive Diagnosis</h3>
                <p className={styles.stepDesc}>
                  We analyze your current standing, identify the gaps causing friction, and architect a custom roadmap specifically for {svc.name.toLowerCase()}.
                </p>
              </Reveal>

              <Reveal delay={0.2} className={styles.processStep}>
                <span className={styles.stepNum}>02. Execution</span>
                <h3 className={styles.stepTitle}>Precision Engineering</h3>
                <p className={styles.stepDesc}>
                  Our specialists build, deploy, and refine the solution. No outsourcing, no templates. Pure, high-end execution focused on your goals.
                </p>
              </Reveal>

              <Reveal delay={0.3} className={styles.processStep}>
                <span className={styles.stepNum}>03. Scaling</span>
                <h3 className={styles.stepTitle}>Growth & Optimization</h3>
                <p className={styles.stepDesc}>
                  Once the foundation is set, we iterate based on real data to ensure the ROI continues to compound month over month.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title={
          <>
            Ready to dominate with <br/>
            <span className="gold-shimmer">{svc.name}</span>?
          </>
        }
        description="Speak directly with our strategy team. No sales pitch, just a breakdown of how we can deploy this for your brand."
        primaryBtn={{
          text: `Enquire about ${svc.name}`,
          href: waHref,
          isExternal: true,
          hasIcon: true,
        }}
        secondaryBtn={{ text: 'View All Services', href: '/services' }}
      />
    </>
  )
}
