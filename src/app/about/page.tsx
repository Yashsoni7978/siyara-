import type { Metadata } from 'next'
import Link from 'next/link'
import { WA_LINKS, BRAND } from '@/lib/constants'
import { TESTIMONIALS, PLATFORM_STATS, RESULTS } from '@/lib/social-proof'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { CTA } from '@/components/ui/CTA'
import styles from './about.module.css'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn why top brands trust Siyara Innovations. We are a strategy-first team based in Jaipur, focused entirely on ROI and premium digital execution.',
  alternates: { canonical: `${BRAND.siteUrl}/about` },
  openGraph: {
    title: `About Us | ${BRAND.name}`,
    description: 'Learn why top brands trust Siyara Innovations. We are a strategy-first team based in Jaipur, focused entirely on ROI and premium digital execution.',
    url: `${BRAND.siteUrl}/about`,
  },
}

const VALUES = [
  { icon: '◈', title: 'Strategy before execution', body: "We never build things without knowing why. Every design, campaign, and page serves a clear business objective — not a deliverable count. We ask 'what problem does this solve?' before we touch a pixel." },
  { icon: '◉', title: 'Jaipur-first, India-ready', body: 'We know this market. We know how local businesses win here and how they expand across India from here. Our Jaipur roots give us a cultural edge that no remote agency can replicate.' },
  { icon: '⬡', title: 'One team, full ecosystem', body: 'No disconnected vendors. No agency silos. Your website informs your SEO, your SEO informs your content, your content informs your ads. One strategy, everything compounding.' },
  { icon: '✦', title: 'Premium, always', body: "Work that leaves our team looks expensive, feels premium, and performs. We turn down projects that don't fit this standard because our reputation depends on every piece of work we release." },
  { icon: '⚡', title: 'Speed with precision', body: 'Timelines are deadlines. We deliver on time, every time — without cutting corners on quality. Urgency and excellence are not mutually exclusive in our team.' },
  { icon: '🔒', title: 'Radical transparency', body: "You will always know exactly what we are working on, why, and what results it is generating. No jargon. No fluff. Just honest reporting and clear accountability." },
]

const TEAM = [
  { role: 'Founder & Strategy Lead', initials: 'SI', name: 'Siyara Founder', desc: 'Brand strategist with 8+ years building businesses across Jaipur and India. Worked with 50+ brands before founding Siyara. Specialises in positioning and go-to-market strategy.', skills: ['Brand Strategy', 'Market Positioning', 'Growth Planning'] },
  { role: 'Creative Director', initials: 'CD', name: 'Creative Lead', desc: 'Award-winning designer specialising in luxury brand identities and digital experiences. Previously at a top Delhi design studio. Obsessed with typography and motion.', skills: ['UI/UX Design', 'Brand Identity', 'Motion Design'] },
  { role: 'Head of Performance Marketing', initials: 'HP', name: 'Performance Lead', desc: 'Ex-agency performance marketer who has managed ₹5Cr+ in annual ad spend across Meta and Google. Believes every rupee in ads must have a measurable job.', skills: ['Meta Ads', 'Google Ads', 'Analytics'] },
  { role: 'AI & Automation Lead', initials: 'AL', name: 'Tech Lead', desc: 'Full-stack developer and AI specialist building custom automation pipelines for Indian businesses. Previously built SaaS products for two startups before joining Siyara.', skills: ['AI Automation', 'Web Development', 'API Integration'] },
  { role: 'SEO & Content Strategist', initials: 'SC', name: 'SEO Lead', desc: 'SEO strategist who has ranked 200+ keywords in competitive Jaipur and national searches. Also leads content strategy, ensuring every piece earns its place.', skills: ['Technical SEO', 'GEO', 'Content Strategy'] },
  { role: 'Social Media Manager', initials: 'SM', name: 'Social Lead', desc: 'Built and grew 12 Instagram accounts from zero to 10,000+ followers for Jaipur businesses. Understands the Rajasthan market nuance that national agencies miss entirely.', skills: ['Social Strategy', 'Content Creation', 'Community Management'] },
]

const TIMELINE = [
  { year: '2021', title: 'Founded', desc: 'Siyara Innovations was founded with a simple belief: Jaipur businesses deserve world-class digital marketing. Started with three clients and a clear mission.' },
  { year: '2022', title: 'First 10 clients', desc: 'Grew to 10 retained clients across restaurants, fashion, and real estate. Hired our Creative Director and Head of Performance Marketing.' },
  { year: '2023', title: 'AI & automation division', desc: 'Launched our AI Automation practice — the first Jaipur agency to offer custom AI agent development and workflow automation for SMBs.' },
  { year: '2024', title: 'GEO Optimisation launch', desc: 'Pioneered Generative Engine Optimisation (GEO) for Jaipur businesses — helping clients appear in ChatGPT, Perplexity, and Google AI recommendations.' },
  { year: '2025', title: '40+ active clients', desc: 'Reached 40+ active retained clients with a 92% recommendation rate. Expanded the team to 6 full-time specialists. Zero generic work policy introduced.' },
  { year: '2026', title: 'Scaling across India', desc: 'While our heart is in Jaipur, we now serve clients across India. Every engagement remains personal, strategic, and premium.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={<>Not just another agency.<br /><em style={{ fontStyle: 'italic', color: 'var(--accent-primary)' }}>A different kind of partner.</em></>}
        subtitle="We were tired of seeing great Jaipur businesses lose to inferior competitors who just happened to have better digital marketing. So we built the agency we always wished existed."
        breadcrumb={[{ label: 'About' }]}
      />

      {/* Platform Ratings Bar */}
      <section className={styles.ratingsBar} aria-label="Platform ratings">
        <div className={styles.ratingsInner}>
          {PLATFORM_STATS.map(({ platform, rating, reviews, logo }) => (
            <div key={platform} className={styles.ratingItem}>
              <span className={styles.ratingPlatformIcon}>{logo}</span>
              <div className={styles.ratingStars} aria-label={`${rating} out of 5 stars`}>
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i} className={styles.star}>{star}</span>
                ))}
              </div>
              <span className={styles.ratingValue}>{rating}</span>
              <span className={styles.ratingPlatform}>{platform} · {reviews} reviews</span>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className={styles.missionSection} aria-label="Our mission">
        <div className="section-wrap">
          <div className={styles.missionInner}>
            <Reveal className={styles.missionLeft}>
              <span className="eyebrow">Our Mission</span>
              <h2 className={styles.missionTitle}>
                We exist to make great<br />businesses <span className="gold-shimmer">impossible to ignore.</span>
              </h2>
              <div className={styles.missionQuote}>
                <span className={styles.missionQuoteMark}>&ldquo;</span>
                <p>Every great Jaipur business deserves a digital presence that matches the quality of what they actually do.</p>
              </div>
            </Reveal>
            <Reveal delay={0.15} className={styles.missionRight}>
              <p className={styles.missionBody}>Jaipur has some of the most incredible businesses in India — restaurants with food that would impress Mumbai, fashion brands with craftsmanship that rivals international labels, real estate projects of genuine quality.</p>
              <p className={styles.missionBody}>But most of them are invisible. Their digital presence doesn&apos;t match the quality of what they actually offer. That gap — between who they are and how they show up online — costs them customers, revenue, and credibility every single day.</p>
              <p className={styles.missionBody}>That&apos;s the problem we exist to solve. We build the digital presence these businesses deserve — one that makes their competitors nervous, their customers trust them instantly, and their revenue grow predictably.</p>
              <div className={styles.missionStats}>
                <div className={styles.missionStat}><span className={styles.missionStatNum}>40+</span><span className={styles.missionStatLabel}>Active clients</span></div>
                <div className={styles.missionStat}><span className={styles.missionStatNum}>5yr</span><span className={styles.missionStatLabel}>In business</span></div>
                <div className={styles.missionStat}><span className={styles.missionStatNum}>4.9★</span><span className={styles.missionStatLabel}>Google rating</span></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className={styles.resultsSection} aria-label="Key results">
        <div className="section-wrap">
          <Reveal as="span" className="eyebrow" style={{ marginBottom: '48px', display: 'block' }}>The Numbers</Reveal>
          <div className={styles.resultsGrid}>
            {RESULTS.map(({ metric, label, sub }, i) => (
              <Reveal key={metric} delay={i * 0.08} className={styles.resultCard}>
                <span className={styles.resultMetric}>{metric}</span>
                <span className={styles.resultLabel}>{label}</span>
                <span className={styles.resultSub}>{sub}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.valuesSection} aria-label="Our values">
        <div className="section-wrap">
          <div className={styles.valuesHeader}>
            <Reveal as="span" className="eyebrow">How We Work</Reveal>
            <Reveal as="h2" delay={0.1} className={styles.valuesTitle}>Six principles.<br />Non-negotiable.</Reveal>
          </div>
          <div className={styles.valuesGrid}>
            {VALUES.map(({ icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.08} className={styles.valueCard}>
                <span className={styles.valueIcon}>{icon}</span>
                <h3 className={styles.valueTitle}>{title}</h3>
                <p className={styles.valueBody}>{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timelineSection} aria-label="Company timeline">
        <div className="section-wrap">
          <div className={styles.valuesHeader}>
            <Reveal as="span" className="eyebrow">Our Journey</Reveal>
            <Reveal as="h2" delay={0.1} className={styles.valuesTitle}>Five years of building<br />Jaipur&apos;s brands.</Reveal>
          </div>
          <div className={styles.timeline}>
            {TIMELINE.map(({ year, title, desc }, i) => (
              <Reveal key={year} delay={i * 0.1} className={styles.timelineItem}>
                <span className={styles.timelineYear}>{year}</span>
                <div className={styles.timelineLine} aria-hidden="true" />
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{title}</h3>
                  <p className={styles.timelineDesc}>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={styles.teamSection} aria-label="Our team">
        <div className="section-wrap">
          <div className={styles.valuesHeader}>
            <Reveal as="span" className="eyebrow">The Team</Reveal>
            <Reveal as="h2" delay={0.1} className={styles.valuesTitle}>Specialists, not generalists.</Reveal>
          </div>
          <div className={styles.teamGrid}>
            {TEAM.map(({ role, initials, name, desc, skills }, i) => (
              <Reveal key={role} delay={i * 0.08} className={styles.teamCard}>
                <div className={styles.teamAvatar}><span>{initials}</span></div>
                <div className={styles.teamInfo}>
                  <span className={styles.teamRole}>{role}</span>
                  <p className={styles.teamDesc}>{desc}</p>
                  <div className={styles.teamSkills}>
                    {skills.map(s => <span key={s} className={styles.teamSkill}>{s}</span>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonialsSection} aria-label="Client testimonials">
        <div className="section-wrap">
          <div className={styles.valuesHeader}>
            <Reveal as="span" className="eyebrow">Client Stories</Reveal>
            <Reveal as="h2" delay={0.1} className={styles.valuesTitle}>Rated 4.9★ on Google.<br />Here is what clients say.</Reveal>
          </div>
          <div className={styles.testimonialsGrid}>
            {TESTIMONIALS.map(({ id, name, role, company, avatar, rating, platform, text }) => (
              <Reveal key={id} delay={(id % 3) * 0.1} className={styles.testimonialCard}>
                <div className={styles.testimonialTop}>
                  <div className={styles.testimonialAvatar}><span>{avatar}</span></div>
                  <div>
                    <span className={styles.testimonialName}>{name}</span>
                    <span className={styles.testimonialCompany}>{role} · {company}</span>
                  </div>
                  <span className={styles.testimonialPlatform}>{platform}</span>
                </div>
                <div className={styles.testimonialStars} aria-label={`${rating} stars`}>
                  {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <p className={styles.testimonialText}>&ldquo;{text}&rdquo;</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA 
        title={<>Ready to build something<br /><span className="gold-shimmer">worth being proud of?</span></>}
        description="Start with a free 30-minute strategy call. No pitch. No pressure. Just an honest conversation about what your brand actually needs."
        primaryBtn={{ text: 'Book Free Strategy Call →', href: WA_LINKS.strategyCall, isExternal: true }}
        secondaryBtn={{ text: 'View Our Services', href: '/services' }}
      />
    </>
  )
}
