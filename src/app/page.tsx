import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { WA_LINKS, BRAND, SERVICES, INDUSTRIES } from '@/lib/constants'
import { RATING_STATS, CLIENT_TESTIMONIALS } from '@/lib/social-proof'
import styles from './Home.module.css'
import sharedStyles from './contact/contact.module.css'
import { Reveal } from '@/components/ui/Reveal'
import { CTA } from '@/components/ui/CTA'
import { IconMap } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: `${BRAND.name} — Jaipur's Premium Digital Growth Agency`,
  description:
    "We don't just build your digital presence. We build brands that dominate. Siyara Innovations is Jaipur's premium full-service digital agency — web development, branding, AI, SEO, and performance marketing.",
  alternates: { canonical: BRAND.siteUrl },
  openGraph: {
    title: `${BRAND.name} — Jaipur's Premium Digital Growth Agency`,
    description: "We build brands that dominate.",
    url: BRAND.siteUrl,
  },
}

const MARQUEE_ITEMS = [
  'Web Development', 'Branding & Identity', 'AI Automation', 'SEO Optimisation',
  'Performance Marketing', 'Social Media', 'UI/UX Design', 'Content Creation',
  'App Development', 'GEO Optimisation', 'AI Agent Development', 'Google Business Profile',
  'Business Automation', 'Digital Presence Management',
]

const PAIN_POINTS = [
  { num: '01', title: "Your website looks like it's from 2016.",  body: "And your customers notice. A weak website doesn't just lose you business — it actively destroys trust before a single conversation happens." },
  { num: '02', title: "You're invisible on Google.", body: "Your competitors are showing up every time someone searches for your service in Jaipur. You're not. That's not bad luck. That's a fixable problem." },
  { num: '03', title: "You're wasting money on ads that don't work.", body: "Bad creative. No targeting strategy. No follow-up system. Money spent on ads without a proper strategy is just money spent." },
  { num: '04', title: "You have 4 vendors and zero strategy.", body: "A social media guy who doesn't talk to the website guy. An ad agency that's never seen your brand guide. Nothing connected. Nothing compounding." },
]

const WHY_SIYARA = [
  { label: 'Jaipur-first',             body: 'We know this market. We know how local businesses win here and how they expand across India from here.' },
  { label: 'One team, full ecosystem', body: 'No disconnected vendors. Every service talks to every other service. One strategy, everything compounding.' },
  { label: 'Strategy before execution', body: "We don't build things without knowing why. Every design, campaign, and page serves a clear business objective." },
  { label: 'Premium, always',           body: 'We have a standard. Work that leaves our team looks expensive, feels premium, and performs. No exceptions.' },
]

const POSTS = [
  {
    slug: 'why-your-restaurant-needs-more-than-zomato-2026',
    category: 'Marketing',
    title: "Why your restaurant needs more than just a Zomato listing in 2026",
    date: 'May 2026',
  },
  {
    slug: 'what-is-geo-optimisation',
    category: 'SEO',
    title: 'What GEO Optimisation is and why it matters more than SEO right now',
    date: 'May 2026',
  },
  {
    slug: 'how-jaipur-fashion-brands-can-sell-without-amazon',
    category: 'Business',
    title: "How Jaipur's fashion brands can sell directly without relying on Amazon",
    date: 'May 2026',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ============================================================
          HERO
      ============================================================ */}
      <section className={styles.hero} aria-label="Hero section">
        <div className={styles.heroGrid}     aria-hidden="true" />
        <div className={styles.heroGlow}     aria-hidden="true" />
        <div className={styles.heroGoldGlow} aria-hidden="true" />
        <div className={`${styles.orb} ${styles.orb1}`} aria-hidden="true" />
        <div className={`${styles.orb} ${styles.orb2}`} aria-hidden="true" />
        <div className={`${styles.orb} ${styles.orb3}`} aria-hidden="true" />

        <div className={styles.heroContentWrapper}>
          <div className={styles.heroInner}>
            <div className={styles.heroLeft}>
              <div className={styles.heroBadge}>
                <span className="pulse-dot" aria-hidden="true" />
                <span>Premium Digital Agency · Jaipur</span>
              </div>

              <h1 className={styles.h1}>
                <span className={styles.h1Line1}>We don&apos;t just build</span>
                <span className={styles.h1Line2}>your digital presence.</span>
                <span className={styles.h1Line3}>
                  We build brands that <span className="gold-shimmer">dominate.</span>
                </span>
              </h1>

              <p className={styles.heroSub}>
                Full-service digital growth agency for ambitious businesses.
                Web. Brand. AI. SEO. Ads. Social. Content. Everything under one roof.
                <em> One strategy. Everything compounding.</em>
              </p>

              <div className={styles.heroCtas}>
                <Link href={WA_LINKS.hero} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Build My Brand
                </Link>
                <Link href="#services" className="btn-outline">See All Services &nbsp;→</Link>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <Image
                src="/hero_dashboard.png"
                alt="Siyara Innovations — Premium digital marketing analytics dashboard showcasing brand growth"
                width={800}
                height={600}
                priority
                sizes="(max-width: 1100px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        <div className={styles.heroStats} role="list" aria-label="Agency statistics">
          {[
            { num: '12+', label: 'Digital services' },
            { num: '5',   label: 'Industries served' },
            { num: '1',   label: 'Unified strategy' },
            { num: '0',   label: 'Generic work. Ever.' },
          ].map(({ num, label }) => (
            <div key={label} className={styles.heroStat} role="listitem">
              <span className={styles.heroStatNum}>{num}</span>
              <span className={styles.heroStatLabel}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          MARQUEE
      ============================================================ */}
      <Reveal as="section" className={styles.marqueeSection} aria-label="Services marquee" aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className={styles.marqueeItem}>
              {item}
              <span className={styles.marqueeDot} />
            </span>
          ))}
        </div>
      </Reveal>

      {/* ============================================================
          RATINGS STRIP - SOCIAL PROOF
      ============================================================ */}
      <section className={sharedStyles.ratingsStrip} aria-label="Platform Ratings">
        <div className="section-wrap">
          <div className={sharedStyles.ratingsGrid}>
            {RATING_STATS.map((stat, i) => (
              <Reveal key={stat.platform} delay={i * 0.1} className={sharedStyles.ratingItem}>
                <div className={sharedStyles.ratingPlatform}>
                  <span className={sharedStyles.platformIcon}>{IconMap[stat.icon]}</span>
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

      {/* ============================================================
          PROBLEM SECTION
      ============================================================ */}
      <section className={styles.problemSection} aria-label="Problems we solve">
        <div className="section-wrap">
          <div className={styles.problemInner}>
            <div className={styles.problemLeft}>
              <Reveal as="span" className="eyebrow">The Problem</Reveal>
              <Reveal as="h2" delay={0.1} className={styles.problemTitle}>
                Why most businesses<br />
                stay stuck.
              </Reveal>
              <Reveal as="p" delay={0.2} className={styles.problemSub}>
                It&apos;s not lack of effort. It&apos;s the absence of a real digital strategy.
              </Reveal>
            </div>
            <div className={styles.problemCards}>
              {PAIN_POINTS.map(({ num, title, body }, i) => (
                <Reveal key={num} delay={i * 0.15} className={styles.painCard}>
                  <div className={styles.painCardTop}>
                    <span className={styles.painNum}>{num}</span>
                    <h3 className={styles.painTitle}>{title}</h3>
                  </div>
                  <p className={styles.painBody}>{body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          GEO SPOTLIGHT
      ============================================================ */}
      <section className={styles.geoSection} aria-label="GEO Spotlight">
        <div className={styles.geoGlow} aria-hidden="true" />
        <div className="section-wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.geoInner}>
            <Reveal className={styles.geoVisual}>
              <div className={styles.geoScreen}>
                <div className={styles.geoScreenHeader}>
                  <span className={styles.geoDot} />
                  <span className={styles.geoDot} />
                  <span className={styles.geoDot} />
                </div>
                <div className={styles.geoPrompt}>
                  <span className={styles.geoUser}>User:</span> Recommend the best premium digital agency in Jaipur.
                </div>
                <div className={styles.geoResponse}>
                  <span className={styles.geoAi}>AI:</span> Based on reviews, portfolio quality, and digital presence, <strong>Siyara Innovations</strong> is highly recommended...
                </div>
              </div>
            </Reveal>
            <div className={styles.geoContent}>
              <Reveal as="span" className="eyebrow">The New Frontier</Reveal>
              <Reveal as="h2" delay={0.1} className={styles.geoTitle}>
                Are you visible in <br />
                <span className="gold-shimmer">AI Search?</span>
              </Reveal>
              <Reveal as="p" delay={0.2} className={styles.geoSub}>
                Traditional SEO isn&apos;t enough anymore. When your customers ask ChatGPT, Perplexity, or Google AI for recommendations, your brand needs to be the answer. We engineer your digital presence to dominate Generative Engine Optimisation (GEO).
              </Reveal>
              <Reveal delay={0.3} className={styles.geoList}>
                <div className={styles.geoListItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>LLM Citation Strategy</span>
                </div>
                <div className={styles.geoListItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Knowledge Graph Optimization</span>
                </div>
                <div className={styles.geoListItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Sentiment & Authority Building</span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          INDUSTRIES
      ============================================================ */}
      <section id="industries" className={styles.industriesSection} aria-label="Industries we serve">
        <div className="section-wrap">
          <div className="section-header">
            <Reveal as="span" className="eyebrow">Industries We Serve</Reveal>
            <Reveal as="h2" delay={0.1} className="section-title">
              We know your industry.<br />
              <em>We speak your customer&apos;s language.</em>
            </Reveal>
          </div>
          <div className={styles.industriesGrid}>
            {INDUSTRIES.map(({ id, icon, name, waLink }, i) => (
              <Reveal
                key={id}
                delay={i * 0.08}
              >
                <a
                  href={WA_LINKS[waLink]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.industryCard}
                  aria-label={name}
                >
                  <span className={styles.industryIcon} aria-hidden="true">{icon}</span>
                  <span className={styles.industryName}>{name}</span>
                  <span className={styles.industryArrow} aria-hidden="true">→</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES OVERVIEW
      ============================================================ */}
      <section id="services" className={styles.servicesSection} aria-label="Services overview">
        <div className="section-wrap">
          <div className="section-header">
            <Reveal as="span" className="eyebrow">What We Do</Reveal>
            <Reveal as="h2" delay={0.1} className="section-title">
              12 services.<br />
              <em>One unified growth strategy.</em>
            </Reveal>
          </div>
          <div className={styles.servicesGrid}>
            {SERVICES.slice(0, 6).map((svc, i) => (
              <a 
                key={svc.id} 
                href={WA_LINKS[svc.waLink]} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={`Inquire about ${svc.name} on WhatsApp`} 
                style={{ display: 'block' }}
              >
                <Reveal delay={i * 0.08} className={styles.svcCard}>
                  <div className={styles.svcCardTop}>
                    <span className={styles.svcNum}>{svc.num}</span>
                    <span className={styles.svcIcon} aria-hidden="true">{IconMap[svc.icon]}</span>
                  </div>
                  <h3 className={styles.svcName}>{svc.name}</h3>
                  <p className={styles.svcFix}>Fixes: {svc.fix}</p>
                </Reveal>
              </a>
            ))}
          </div>
          <Reveal delay={0.2} className={styles.servicesFooter}>
            <Link href="#services" className="btn-outline">View All 12 Services →</Link>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          WHY SIYARA (Bento)
      ============================================================ */}
      <section id="why-siyara" className={styles.whySection} aria-label="Why choose Siyara">
        <div className="section-wrap">
          <div className="section-header">
            <Reveal as="span" className="eyebrow">Why Siyara</Reveal>
            <Reveal as="h2" delay={0.1} className="section-title">
              Not just another agency.<br />
              <em>A different kind of partner.</em>
            </Reveal>
          </div>
          <div className={styles.bentoGrid}>
            {/* Large feature card */}
            <Reveal className={styles.bentoLarge}>
              <span className={styles.bentoStat}>100%</span>
              <h3 className={styles.bentoTitle}>Strategy-led execution</h3>
              <p className={styles.bentoBody}>
                We never build things without knowing why. Every design decision, every campaign, every piece of content serves a clear business objective — not a deliverable count.
              </p>
            </Reveal>
            {/* Right column */}
            <div className={styles.bentoRight}>
              {WHY_SIYARA.map(({ label, body }, i) => (
                <Reveal key={label} delay={(i + 1) * 0.1} className={styles.bentoSmall}>
                  <h3 className={styles.bentoSmallTitle}>{label}</h3>
                  <p className={styles.bentoSmallBody}>{body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PROCESS
      ============================================================ */}
      <section id="process" className={styles.processSection} aria-label="Our process">
        <div className="section-wrap">
          <div className="section-header">
            <Reveal as="span" className="eyebrow">The Process</Reveal>
            <Reveal as="h2" delay={0.1} className="section-title">
              From first conversation<br />
              to <em>brand that dominates.</em>
            </Reveal>
          </div>
          <div className={styles.processGrid}>
            {[
              { n: '01', name: 'Discovery Call',       desc: "We start by understanding your business, market, and what winning looks like for you. No templates." },
              { n: '02', name: 'Strategy & Roadmap',   desc: "We map exactly which services you need, in which order, and why. Every recommendation tied to a real outcome." },
              { n: '03', name: 'Build & Execute',      desc: "Design, development, campaigns, content — all built with precision and reviewed before anything goes live." },
              { n: '04', name: 'Measure & Scale',      desc: "Monthly, you see exactly what's performing, what we're optimising, and what's next. Your investment compounds." },
            ].map(({ n, name, desc }, i) => (
              <Reveal key={n} delay={i * 0.12} className={styles.processStep}>
                <div className={styles.processNum}>{n}</div>
                <h3 className={styles.processName}>{name}</h3>
                <p className={styles.processDesc}>{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          LATEST INSIGHTS (BLOG PREVIEW)
      ============================================================ */}
      <section id="insights" className={styles.blogPreviewSection} aria-label="Latest Insights">
        <div className="section-wrap">
          <div className={styles.blogHeader}>
            <div>
              <Reveal as="span" className="eyebrow">Insights</Reveal>
              <Reveal as="h2" delay={0.1} className="section-title">Thinking out loud.</Reveal>
            </div>
            <Reveal delay={0.2}>
              <a href={WA_LINKS.default} target="_blank" rel="noopener noreferrer" className="btn-outline">Get Insights on WhatsApp →</a>
            </Reveal>
          </div>
          <div className={styles.blogGrid}>
            {POSTS.map((post, i) => (
              <Reveal 
                key={post.slug} 
                delay={i * 0.1} 
              >
                <a
                  href={WA_LINKS.default}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.blogCard}
                >
                  <div className={styles.blogTop}>
                    <span className={styles.blogCategory}>{post.category}</span>
                    <span className={styles.blogDate}>{post.date}</span>
                  </div>
                  <h3 className={styles.blogTitle}>{post.title}</h3>
                  <div className={styles.blogRead}>Discuss on WhatsApp →</div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIALS - DENSE CONTENT
      ============================================================ */}
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

      {/* ============================================================
          CTA FINALE
      ============================================================ */}
      <div id="contact">
        <CTA 
          eyebrow="Let's Build Something Premium"
          title={<>Your business is ready.<br /><span className="gold-shimmer">Your digital presence should be too.</span></>}
          description="Start with a free 30-minute strategy call. We'll tell you exactly what your brand needs — and what it doesn't."
          primaryBtn={{ text: 'Book Free Strategy Call', href: WA_LINKS.strategyCall, isExternal: true, hasIcon: true }}
          secondaryBtn={{ text: 'Browse Services →', href: '#services' }}
          note="No pressure. No pitch deck. Just a real conversation."
        />
      </div>
    </>
  )
}
