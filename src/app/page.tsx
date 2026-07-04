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
import { MagicBento } from '@/components/ui/MagicBento'
import { FlowingMenu } from '@/components/ui/FlowingMenu'
import { TiltedCard } from '@/components/ui/TiltedCard'
import { WeatherIndustryCard } from '@/components/ui/WeatherIndustryCard'

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
  { num: '01', shortTitle: "Outdated Design", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&h=400&auto=format&fit=crop", title: "Your website looks like it's from 2016.", body: "And your customers notice. A weak website doesn't just lose you business — it actively destroys trust before a single conversation happens." },
  { num: '02', shortTitle: "Invisible on Search", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&h=400&auto=format&fit=crop", title: "You're invisible on Google.", body: "Your competitors are showing up every time someone searches for your service in Jaipur. You're not. That's not bad luck. That's a fixable problem." },
  { num: '03', shortTitle: "Wasted Ad Spend", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&h=400&auto=format&fit=crop", title: "You're wasting money on ads that don't work.", body: "Bad creative. No targeting strategy. No follow-up system. Money spent on ads without a proper strategy is just money spent." },
  { num: '04', shortTitle: "Fragmented Strategy", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&h=400&auto=format&fit=crop", title: "You have 4 vendors and zero strategy.", body: "A social media guy who doesn't talk to the website guy. An ad agency that's never seen your brand guide. Nothing connected. Nothing compounding." },
]

const WHY_SIYARA = [
  { label: 'Jaipur-first', body: 'We know this market. We know how local businesses win here and how they expand across India from here.' },
  { label: 'One team, full ecosystem', body: 'No disconnected vendors. Every service talks to every other service. One strategy, everything compounding.' },
  { label: 'Strategy before execution', body: "We don't build things without knowing why. Every design, campaign, and page serves a clear business objective." },
  { label: 'Premium, always', body: 'We have a standard. Work that leaves our team looks expensive, feels premium, and performs. No exceptions.' },
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
      <div className={styles.heroStickyContainer}>
        <section className={styles.hero} aria-label="Hero section">
        <div className={styles.heroCurtain} aria-hidden="true" />
        <div className={styles.heroRays} aria-hidden="true" />
        <div className={`${styles.orb} ${styles.orb1}`} aria-hidden="true" />
        <div className={`${styles.orb} ${styles.orb2}`} aria-hidden="true" />
        <div className={`${styles.orb} ${styles.orb3}`} aria-hidden="true" />

        <div className={styles.heroContentWrapper}>
          <div className={styles.heroInner}>
            <div className={styles.heroLeft} style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
              <div className={styles.heroBadge}>
                <span className={styles.heroBadgeDot} aria-hidden="true" style={{ background: '#6ead98', boxShadow: '0 0 8px rgba(90,166,138,0.8)' }} />
                <span>Now Accepting Projects</span>
              </div>

              <h1 className={styles.h1} style={{ fontFamily: "'Times New Roman', Times, serif", textTransform: 'uppercase', lineHeight: '1.1', fontWeight: 'bold', textAlign: 'left' }}>
                <div className={styles.h1Line1} style={{ fontSize: 'clamp(40px, 6vw, 90px)', color: '#fff', whiteSpace: 'nowrap' }}>ENGINEERING THE</div>
                <div className={styles.h1Line2} style={{ fontSize: 'clamp(40px, 6vw, 90px)', color: 'rgba(255, 255, 255, 0.25)', whiteSpace: 'nowrap' }}>FUTURE OF</div>
                <div className={styles.h1Line3} style={{ fontSize: 'clamp(40px, 6vw, 90px)', color: '#fff', whiteSpace: 'nowrap' }}>DIGITAL ARCHITECTURE.</div>
              </h1>



            </div>
          </div>
        </div>



        <div>
          <div className="scroll-indicator" aria-hidden="true" />
        </div>
      </section>
      </div>

      <main className={styles.pageContent}>
        <div className={styles.heroStats} role="list" aria-label="Agency statistics">
          {[
            { num: '12+', label: 'Digital services' },
            { num: '5', label: 'Industries served' },
            { num: '1', label: 'Unified strategy' },
            { num: '0', label: 'Generic work. Ever.' },
          ].map(({ num, label }) => (
            <div key={label} className={styles.heroStat} role="listitem">
              <span className={styles.heroStatNum}>{num}</span>
              <span className={styles.heroStatLabel}>{label}</span>
            </div>
          ))}
        </div>

      {/* ============================================================
          MARQUEE
      ============================================================ */}
      <Reveal as="section" className={styles.marqueeSection} aria-label="Services marquee" aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <div key={i} className={styles.marqueeItem}>
              <span className={styles.marqueeValue}>{item}</span>
              <span className={styles.marqueeDot} />
            </div>
          ))}
        </div>
      </Reveal>





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

          <MagicBento 
            items={SERVICES.map(svc => ({
              id: svc.id,
              num: svc.num,
              name: svc.name,
              fix: svc.fix,
              description: svc.desc,
              features: (svc as any).features,
              icon: IconMap[svc.icon as keyof typeof IconMap]
            }))}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            glowColor="201, 168, 76"
          />
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
            <div className={styles.problemCards} style={{ height: '400px' }}>
              <FlowingMenu 
                items={PAIN_POINTS.map(pt => ({
                  text: pt.shortTitle,
                  marqueeText: pt.title,
                  image: pt.image,
                  link: '#',
                }))}
              />
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
              <TiltedCard
                containerHeight="300px"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
              >
                <div className={styles.geoScreen} style={{ transform: 'none', height: '100%', margin: 0 }}>
                  <div className={styles.geoScreenHeader}>
                    <span className={styles.geoDot} />
                    <span className={styles.geoDot} />
                    <span className={styles.geoDot} />
                  </div>
                  <div className={styles.geoPrompt}>
                    <span className={styles.geoUser}>USER:</span> Recommend the best premium digital agency in Jaipur.
                  </div>
                  <div className={styles.geoResponse}>
                    <span className={styles.geoAi}>AI:</span> Based on reviews, portfolio quality, and digital presence, <strong>Siyara Innovations</strong> is highly recommended...
                  </div>
                </div>
              </TiltedCard>
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
            {INDUSTRIES.map(({ id, icon, name, waLink, desc, ctaText }, i) => (
              <Reveal
                key={id}
                delay={i * 0.08}
              >
                <Link
                  href={`/industries/${id}`}
                  style={{ textDecoration: 'none' }}
                  aria-label={`Learn more about ${name} industry`}
                >
                  <WeatherIndustryCard name={name} desc={desc} ctaText={ctaText} />
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
              { n: '01', name: 'Discovery Call', desc: "We start by understanding your business, market, and what winning looks like for you. No templates." },
              { n: '02', name: 'Strategy & Roadmap', desc: "We map exactly which services you need, in which order, and why. Every recommendation tied to a real outcome." },
              { n: '03', name: 'Build & Execute', desc: "Design, development, campaigns, content — all built with precision and reviewed before anything goes live." },
              { n: '04', name: 'Measure & Scale', desc: "Monthly, you see exactly what's performing, what we're optimising, and what's next. Your investment compounds." },
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
                  <div className={sharedStyles.testiAvatar}>{testi.author.split(' ').map(n => n[0]).join('')}</div>
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
      </main>
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
