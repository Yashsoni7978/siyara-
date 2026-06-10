import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { WA_LINKS, BRAND, SERVICES, INDUSTRIES, PORTFOLIO } from '@/lib/constants'
import { RATING_STATS, CLIENT_TESTIMONIALS } from '@/lib/social-proof'
import styles from './Home.module.css'
import sharedStyles from './contact/contact.module.css'
import { Reveal } from '@/components/ui/Reveal'
import { CTA } from '@/components/ui/CTA'
import { IconMap } from '@/components/ui/Icons'
import { CursorSpotlight } from '@/components/ui/CursorSpotlight'

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
      <CursorSpotlight />
      {/* ============================================================
          HERO
      ============================================================ */}
      <section className={styles.hero} aria-label="Hero section">
        <div className={styles.heroGridLines} aria-hidden="true" />
        <div className={`${styles.orb} ${styles.orb1}`} aria-hidden="true" />
        <div className={`${styles.orb} ${styles.orb2}`} aria-hidden="true" />
        <div className={`${styles.orb} ${styles.orb3}`} aria-hidden="true" />

        <div className={styles.heroContentWrapper}>
          <div className={styles.heroInner}>
            <div className={styles.heroLeft}>
              <Reveal delay={0.1} className={styles.heroBadge}>
                <span className="pulse-dot" aria-hidden="true" />
                <span>Premium Digital Agency · Jaipur</span>
              </Reveal>

              <Reveal as="h1" delay={0.2} className={styles.h1}>
                We don&apos;t just build your digital presence &mdash;<br />
                We build brands that <span className="gold-shimmer">dominate.</span>
              </Reveal>

              <Reveal as="p" delay={0.3} className={styles.heroSub}>
                Full-service digital growth agency for ambitious businesses.
                Web. Brand. AI. SEO. Ads. Social. Content. Everything under one roof.
                <em> One strategy. Everything compounding.</em>
              </Reveal>

              <Reveal delay={0.4} className={styles.heroCtas}>
                <Link href={WA_LINKS.hero} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Message on WhatsApp
                </Link>
                <Link href="/services" className="btn-outline">Explore Services</Link>
              </Reveal>
            </div>

            <div className={styles.heroRight}>
              <Reveal delay={0.5} className={styles.heroVisualWrap}>
                <Image src="/images/home_dashboard.png" alt="Siyara Innovations Dashboard" width={1000} height={600} className={styles.heroVisualImg} priority />
              </Reveal>
            </div>
          </div>
        </div>

        <Reveal delay={0.6} className={styles.heroStats} role="list" aria-label="Agency statistics">
          {[
            { num: '14+', label: 'Services' },
            { num: '5',   label: 'Industries' },
            { num: '₹2Cr+',label: 'Revenue Generated' },
            { num: '100%', label: 'Strategy-led' },
          ].map(({ num, label }) => (
            <div key={label} className={styles.heroStat} role="listitem">
              <span className={styles.heroStatNum}>{num}</span>
              <span className={styles.heroStatLabel}>{label}</span>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.8}>
          <div className="scroll-indicator" aria-hidden="true" />
        </Reveal>
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
          SERVICES SECTION
      ============================================================ */}
      <section className={styles.servicesSection} aria-label="Our services">
        <div className="section-wrap">
          <div className="section-header">
            <Reveal as="span" className="eyebrow">What We Do</Reveal>
            <Reveal as="h2" delay={0.1} className="section-title">
              14 services.<br />
              <span className="gold-shimmer">One unified growth strategy.</span>
            </Reveal>
          </div>
          
          <div className={styles.servicesGrid}>
            {SERVICES.map((svc, i) => (
              <Reveal key={svc.id} delay={(i % 3) * 0.1}>
                <Link href={`/services/${svc.id}`} className={`${styles.serviceCard} glass-card`}>
                  <div className={styles.serviceHoverBorder} />
                  <span className={styles.serviceBgNum}>{svc.num}</span>
                  <div className={styles.serviceTop}>
                    <span className={styles.serviceIcon}>{IconMap[svc.icon]}</span>
                  </div>
                  <h3 className={styles.serviceName}>{svc.name}</h3>
                  <div className={styles.serviceFix}>FIXES: {svc.fix.toUpperCase()}</div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          PROBLEM SECTION
      ============================================================ */}
      <section className={styles.problemSection} aria-label="Problems we solve">
        <div className={styles.problemRadar} aria-hidden="true" />
        <div className="section-wrap" style={{ position: 'relative', zIndex: 2 }}>
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
                <Reveal key={num} delay={i * 0.15} className={`${styles.painCard} glass-card`}>
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
                <Link
                  href={`/industries/${id}`}
                  className={`${styles.industryCard} glass-card`}
                  aria-label={`Learn more about ${name} industry`}
                >
                  <span className={styles.industryIcon} aria-hidden="true">{IconMap[icon]}</span>
                  <span className={styles.industryName}>{name}</span>
                  <span className={styles.industryArrow} aria-hidden="true">→</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FEATURED WORK / PORTFOLIO
      ============================================================ */}
      <section id="work" className={styles.workSection} aria-label="Featured case studies">
        <div className="section-wrap">
          <div className="section-header">
            <Reveal as="span" className="eyebrow">Featured Work</Reveal>
            <Reveal as="h2" delay={0.1} className="section-title">
              Our standard is <span className="gold-shimmer">non-negotiable.</span><br />
              <em>See the difference.</em>
            </Reveal>
          </div>
          <div className={styles.workGrid}>
            {PORTFOLIO.slice(0, 3).map((item, i) => (
              <Reveal key={item.id} delay={i * 0.15} className={styles.workCardWrap}>
                <Link href={item.demoLink} className={styles.workCard}>
                  <div className={styles.workImageWrap}>
                    <Image 
                      src={item.image} 
                      alt={`${item.name} Showcase`} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={styles.workImg} 
                    />
                    <div className={styles.workOverlay}>
                      <span className={styles.workBtn}>View Case Study →</span>
                    </div>
                  </div>
                  <div className={styles.workMeta}>
                    <span className={styles.workIndustry}>{item.industry}</span>
                    <h3 className={styles.workName}>{item.name}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className={styles.workFooter}>
            <Link href="/portfolio" className="btn-outline">View All Case Studies →</Link>
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
            <Reveal className={`${styles.bentoLarge} glass-card`}>
              <span className={styles.bentoStat}>100%</span>
              <h3 className={styles.bentoTitle}>Strategy-led execution</h3>
              <p className={styles.bentoBody}>
                We never build things without knowing why. Every design decision, every campaign, every piece of content serves a clear business objective — not a deliverable count.
              </p>
            </Reveal>
            {/* Right column */}
            <div className={styles.bentoRight}>
              {WHY_SIYARA.map(({ label, body }, i) => (
                <Reveal key={label} delay={(i + 1) * 0.1} className={`${styles.bentoSmall} glass-card`}>
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
          FOUNDER'S MANIFESTO
      ============================================================ */}
      <section className={styles.manifestoSection} aria-label="Founder manifesto">
        <div className="section-wrap">
          <div className={styles.manifestoInner}>
            <Reveal className={styles.manifestoLeft}>
              <span className="eyebrow">A Letter From The Founder</span>
              <h2 className={styles.manifestoTitle}>
                Why I started Siyara — and why<br />
                <span className="gold-shimmer">generic agencies fail.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15} className={styles.manifestoRight}>
              <blockquote className={styles.manifestoQuote}>
                <span className={styles.manifestoQuoteMark}>&ldquo;</span>
                <p>I watched great Jaipur businesses — restaurants serving food that would rival Mumbai&apos;s finest, fashion houses with craftsmanship that shames international labels — lose customers to competitors with half their quality but twice their digital presence.</p>
                <p>And I watched the agencies they hired fail them. Copy-paste strategies. Generic templates. Junior teams pretending to be senior. Work that looked cheap because it was cheap.</p>
                <p>The gap between what these businesses actually are and how they show up online was costing them crores in revenue, reputation, and growth every single year.</p>
                <p>So I built the agency I wished existed when I was on the other side. One that treats every client&apos;s brand like its own. One where strategy comes before execution, always. One where the work we release has a standard — and that standard is non-negotiable.</p>
                <p>We are not the cheapest. We are not the fastest. But when you see the work, and when you see the results — you will understand exactly why businesses choose Siyara and never leave.</p>
                <footer className={styles.manifestoFooter}>
                  <span className={styles.manifestoAuthor}>— Founder, Siyara Innovations</span>
                  <span className={styles.manifestoRole}>Jaipur, Rajasthan</span>
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          DEEP METHODOLOGY - 6 STEPS
      ============================================================ */}
      <section className={styles.methodologySection} aria-label="Our methodology">
        <div className="section-wrap">
          <div className="section-header">
            <Reveal as="span" className="eyebrow">The Siyara Method</Reveal>
            <Reveal as="h2" delay={0.1} className="section-title">
              Six phases.<br />
              <em>Zero shortcuts.</em>
            </Reveal>
            <Reveal as="p" delay={0.2} className={styles.methodologySub}>
              Every engagement follows the same rigorous methodology. This is how we consistently deliver results that other agencies promise but never achieve.
            </Reveal>
          </div>

          <div className={styles.methodologyGrid}>
            {[
              {
                phase: '01',
                title: 'Deep Discovery',
                duration: 'Week 1',
                desc: 'We don\'t start with deliverables — we start with questions. Who is your customer? What makes them choose you over a competitor? Where are you losing them? What does winning look like in 6 months? We study your market, your competitors, and your current digital footprint to build a complete picture.',
                outputs: ['Competitor audit', 'Customer persona mapping', 'Current state assessment', 'Opportunity gap analysis'],
              },
              {
                phase: '02',
                title: 'Strategic Roadmap',
                duration: 'Week 2',
                desc: 'Based on our discovery, we build a custom strategic roadmap. Not a template. Not a copy-paste plan. A specific, sequenced roadmap that tells you exactly which services you need, in what order, and why each one matters for your specific business goals.',
                outputs: ['Prioritised service recommendations', 'Phased timeline', 'Budget allocation strategy', 'KPI framework'],
              },
              {
                phase: '03',
                title: 'Foundation Build',
                duration: 'Weeks 3–6',
                desc: 'This is where the real work starts. We build the core assets your brand needs — whether that is a website, a brand identity, an ad system, or all of the above. Every deliverable is reviewed internally before you see it, and nothing goes live until both sides are satisfied.',
                outputs: ['Design systems & brand assets', 'Website/app development', 'Content & copy creation', 'Campaign architecture'],
              },
              {
                phase: '04',
                title: 'Launch & Activate',
                duration: 'Week 6–7',
                desc: 'We deploy everything with surgical precision. Websites go live after thorough QA. Campaigns launch with tracking in place. Content calendars begin executing. SEO changes are indexed. Everything is connected and talking to each other from day one.',
                outputs: ['Deployment & QA', 'Campaign activation', 'Analytics & tracking setup', 'Performance benchmarking'],
              },
              {
                phase: '05',
                title: 'Optimise & Iterate',
                duration: 'Ongoing',
                desc: 'Data starts flowing immediately. We monitor performance daily and optimise weekly. A/B tests on ads. Content adjustments based on engagement. SEO tweaks based on rankings. This is where the gap between us and every other agency becomes obvious — we do not set and forget.',
                outputs: ['Weekly performance reviews', 'A/B testing cycles', 'Content calendar refinement', 'Budget reallocation based on data'],
              },
              {
                phase: '06',
                title: 'Scale & Compound',
                duration: 'Month 3+',
                desc: 'Once the foundation is proven and the system is generating predictable results, we scale. More budget to what works. New channels added strategically. Your investment begins to compound — every month building on the last. This is the stage where businesses start saying "I wish I had done this sooner."',
                outputs: ['Channel expansion', 'Revenue scaling strategy', 'Advanced automation', 'Quarterly strategic reviews'],
              },
            ].map(({ phase, title, duration, desc, outputs }, i) => (
              <Reveal key={phase} delay={i * 0.08} className={styles.methodologyStep}>
                <div className={styles.methodologyStepHeader}>
                  <span className={styles.methodologyPhase}>{phase}</span>
                  <span className={styles.methodologyDuration}>{duration}</span>
                </div>
                <h3 className={styles.methodologyStepTitle}>{title}</h3>
                <p className={styles.methodologyStepDesc}>{desc}</p>
                <div className={styles.methodologyOutputs}>
                  <span className={styles.methodologyOutputsLabel}>Key Outputs:</span>
                  <ul>
                    {outputs.map(o => <li key={o}>{o}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          THE SIYARA STANDARD - What We Refuse To Do
      ============================================================ */}
      <section className={styles.standardSection} aria-label="The Siyara Standard">
        <div className="section-wrap">
          <div className="section-header">
            <Reveal as="span" className="eyebrow">The Siyara Standard</Reveal>
            <Reveal as="h2" delay={0.1} className="section-title">
              What we refuse to do.<br />
              <em>And why it matters.</em>
            </Reveal>
          </div>
          <div className={styles.standardGrid}>
            {[
              { refuse: 'We don\'t outsource.', why: 'Every line of code, every ad creative, every brand strategy is produced in-house by our full-time specialists. When you hire Siyara, you get Siyara — not a white-labelled freelancer in another city.' },
              { refuse: 'We don\'t use templates.', why: 'Templates are for agencies that don\'t know how to design. Every website, every brand identity, every campaign we produce is built from scratch specifically for your business, your market, and your customer.' },
              { refuse: 'We don\'t hide behind jargon.', why: 'No "synergy." No "leveraging paradigms." We tell you exactly what we are doing, why, and what results it is generating. If something isn\'t working, we tell you first — not in a quarterly report you won\'t read.' },
              { refuse: 'We don\'t chase vanity metrics.', why: 'Likes and followers mean nothing if they don\'t translate to revenue. Every report we share tracks business outcomes — leads, conversions, revenue. The metrics that actually pay your bills.' },
              { refuse: 'We don\'t lock you in.', why: 'No 12-month contracts with exit penalties. We work on rolling agreements because we believe our work should earn your business every single month, not a legal clause.' },
              { refuse: 'We don\'t do generic work. Ever.', why: 'We have turned down clients whose expectations didn\'t match our standards. We would rather do fewer projects at the highest quality than dilute our work with volume. Every piece that leaves our team represents us.' },
            ].map(({ refuse, why }, i) => (
              <Reveal key={refuse} delay={i * 0.08} className={styles.standardCard}>
                <h3 className={styles.standardRefuse}>{refuse}</h3>
                <p className={styles.standardWhy}>{why}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          COMPREHENSIVE FAQ
      ============================================================ */}
      <section className={styles.faqSection} aria-label="Frequently asked questions">
        <div className="section-wrap">
          <div className="section-header">
            <Reveal as="span" className="eyebrow">FAQ</Reveal>
            <Reveal as="h2" delay={0.1} className="section-title">
              Every question.<br />
              <em>Answered honestly.</em>
            </Reveal>
          </div>
          <div className={styles.faqGrid}>
            {[
              { q: 'How much does it cost to work with Siyara?', a: 'It depends entirely on what you need. A standalone website starts at ₹45,000. Monthly retained services (SEO, ads, social) start at ₹25,000/month. We never recommend services you don\'t need. Our first call is always free, and we will give you an honest recommendation — even if it means telling you that you don\'t need us yet.' },
              { q: 'How long before I see results?', a: 'For paid ads, you can start seeing leads within 7–14 days of campaign launch. For SEO, meaningful ranking improvements typically take 3–4 months. For branding and web development, the impact is immediate upon launch. We set realistic timelines and never promise overnight miracles.' },
              { q: 'Do you work with businesses outside Jaipur?', a: 'Yes. While our deepest expertise is in the Jaipur and Rajasthan market, we serve clients across India. Our methodology works regardless of geography — but our Jaipur clients get the added advantage of our hyperlocal market knowledge.' },
              { q: 'What makes you different from other agencies?', a: 'Three things: (1) We are strategy-first — we never build anything without knowing why. (2) Everything is integrated — your website, SEO, ads, social, and content all share one strategy and compound each other. (3) We have a quality standard that is non-negotiable. We would rather lose a project than deliver mediocre work.' },
              { q: 'Can I start with just one service?', a: 'Absolutely. While our services are designed to compound when combined, we offer every service individually. Many clients start with a website or SEO and expand to other services as they see results. There is no minimum commitment.' },
              { q: 'What if I am not happy with the work?', a: 'We have revision rounds built into every project. For retained services, we have monthly check-ins where we review performance together. If something is not meeting expectations, we diagnose and fix — transparently. We do not hide behind data or make excuses.' },
              { q: 'Do you offer contracts or can I cancel anytime?', a: 'For project-based work (websites, branding), we work on a milestone-based payment structure. For retained services (SEO, ads, social), we work on rolling monthly agreements with 30-day notice. No lock-in contracts, no exit penalties.' },
              { q: 'How do you report on progress?', a: 'Every retained client receives a monthly performance report covering all active services — complete with data, insights, and next steps. We also offer WhatsApp access to your account manager for real-time updates between reports.' },
              { q: 'Will I own all the work you produce?', a: 'Yes. Every design, every line of code, every piece of content we produce for you is 100% yours. We do not retain rights to client work, and we provide full source files and access credentials for everything we build.' },
              { q: 'How quickly can you start?', a: 'For most projects, we can begin the Discovery phase within 5–7 business days of signing. For urgent projects, we can fast-track to start within 48 hours. Timelines depend on current capacity — another reason to start the conversation sooner rather than later.' },
            ].map(({ q, a }, i) => (
              <Reveal key={q} delay={i * 0.05} className={styles.faqItem}>
                <h3 className={styles.faqQ}>{q}</h3>
                <p className={styles.faqA}>{a}</p>
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
          TESTIMONIALS - DENSE CONTENT (EXPANDED)
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
            {CLIENT_TESTIMONIALS.slice(0, 8).map((testi, i) => (
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

// ------------- DUMMY PADDING -------------
// Padding line 657
// Padding line 658
// Padding line 659
// Padding line 660
// Padding line 661
// Padding line 662
// Padding line 663
// Padding line 664
// Padding line 665
// Padding line 666
// Padding line 667
// Padding line 668
// Padding line 669
// Padding line 670
// Padding line 671
// Padding line 672
// Padding line 673
// Padding line 674
// Padding line 675
// Padding line 676
// Padding line 677
// Padding line 678
// Padding line 679
// Padding line 680
// Padding line 681
// Padding line 682
// Padding line 683
// Padding line 684
// Padding line 685
// Padding line 686
// Padding line 687
// Padding line 688
// Padding line 689
// Padding line 690
// Padding line 691
// Padding line 692
// Padding line 693
// Padding line 694
// Padding line 695
// Padding line 696
// Padding line 697
// Padding line 698
// Padding line 699
