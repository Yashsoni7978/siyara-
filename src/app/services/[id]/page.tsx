import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { SERVICES, WA_LINKS, BRAND, INDUSTRIES } from '@/lib/constants'
import { TESTIMONIALS } from '@/lib/social-proof'
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

// Deep content maps for each service — rich, unique copy per page
const SERVICE_DEEP_CONTENT: Record<string, {
  problemDetail: string
  fixDetail: string
  benefits: { title: string; desc: string }[]
  deliverables: string[]
  faq: { q: string; a: string }[]
  relatedServices: string[]
}> = {
  'web-development': {
    problemDetail: 'Your website is the single most important asset in your digital ecosystem. Yet most Jaipur businesses are running on outdated, slow, mobile-unfriendly websites that actively repel potential customers. Every second of load time above 3 seconds costs you 7% in conversions. Every poorly designed page erodes trust before a single conversation happens.',
    fixDetail: 'We build websites that are engineered to convert — not just look pretty. Every page is strategically designed with conversion goals in mind. Every interaction is optimised for speed, clarity, and trust. Built on Next.js for blazing performance, designed mobile-first, and SEO-ready from day one.',
    benefits: [
      { title: 'Sub-2 Second Load Times', desc: 'Built on Next.js with server-side rendering and static generation. Your site loads faster than 95% of competitors.' },
      { title: 'Conversion-Focused Design', desc: 'Every element — from hero to footer — is designed to guide visitors toward your business goals. No decorative filler.' },
      { title: 'Mobile-First Architecture', desc: '70%+ of your traffic comes from mobile. We design for phones first, then scale up to desktop. Not the other way around.' },
      { title: 'SEO Built Into The Foundation', desc: 'Technical SEO is not an afterthought. Schema markup, meta tags, sitemaps, and Core Web Vitals are engineered from the start.' },
      { title: 'CMS Integration', desc: 'Update your own content without calling a developer. We integrate headless CMS solutions that give you control without complexity.' },
      { title: 'Analytics & Tracking', desc: 'Know exactly how visitors behave on your site. We set up comprehensive tracking so every business decision is data-driven.' },
    ],
    deliverables: ['Custom UI/UX design in Figma', 'Next.js / React development', 'Mobile-responsive implementation', 'On-page SEO setup', 'Google Analytics & Search Console', 'CMS integration', 'SSL & security hardening', 'Performance optimization', '30-day post-launch support'],
    faq: [
      { q: 'How long does a website take?', a: 'A standard business website takes 3–5 weeks. Complex e-commerce or custom platforms take 6–10 weeks. We provide a detailed timeline during the strategy call.' },
      { q: 'Do I own the website code?', a: 'Yes. Every line of code we write is 100% yours. We provide full source files and access credentials.' },
      { q: 'Can I update the website myself?', a: 'Absolutely. We integrate a CMS so you can update text, images, and blog posts without touching code.' },
      { q: 'What technology do you use?', a: 'We primarily build on Next.js (React) for maximum performance. For e-commerce, we use Shopify or custom solutions depending on your needs.' },
    ],
    relatedServices: ['ui-ux-design', 'seo', 'content-creation'],
  },
  'app-development': {
    problemDetail: 'Your customers live on their phones — checking apps 150+ times a day. If your business doesn\'t have a mobile product, you\'re invisible during 4+ hours of their daily screen time. A website alone is no longer enough to compete in markets where customer engagement and retention drive revenue.',
    fixDetail: 'We build mobile applications that are intuitive, fast, and built around what your users actually need. Cross-platform (iOS + Android) development using React Native ensures you reach every customer without doubling your budget.',
    benefits: [
      { title: 'Cross-Platform Development', desc: 'One codebase, two platforms. React Native lets us build for iOS and Android simultaneously, saving you 40%+ in development costs.' },
      { title: 'Offline-First Architecture', desc: 'Your app works even without internet. Critical features remain accessible, and data syncs when connectivity returns.' },
      { title: 'Push Notification Strategy', desc: 'Re-engage users with targeted, personalised push notifications that drive repeat visits and purchases.' },
      { title: 'App Store Optimisation', desc: 'We handle the entire submission process for both Apple App Store and Google Play Store, including ASO for discoverability.' },
      { title: 'Analytics Dashboard', desc: 'Real-time insights into user behaviour, retention rates, and conversion funnels built directly into your app.' },
      { title: 'Scalable Backend', desc: 'Cloud infrastructure that grows with your user base. From 100 users to 100,000 — the architecture is ready.' },
    ],
    deliverables: ['User research & persona mapping', 'Wireframes & interactive prototypes', 'Cross-platform development (iOS + Android)', 'Backend API development', 'Push notification system', 'App Store submission & ASO', 'Analytics integration', 'Post-launch iteration support'],
    faq: [
      { q: 'Do you build native or cross-platform?', a: 'We primarily use React Native for cross-platform efficiency. For performance-critical applications, we offer native Swift/Kotlin development.' },
      { q: 'How much does an app cost?', a: 'App development starts at ₹2,00,000 for an MVP. Final pricing depends on complexity, features, and platform requirements.' },
      { q: 'How long does app development take?', a: 'An MVP typically takes 8–12 weeks. A fully featured app can take 16–24 weeks depending on scope.' },
      { q: 'Do you handle app store submissions?', a: 'Yes. We manage the entire process including compliance, screenshots, descriptions, and ASO optimization.' },
    ],
    relatedServices: ['ui-ux-design', 'ai-automation', 'web-development'],
  },
  'ui-ux-design': {
    problemDetail: 'Bad design doesn\'t just look unprofessional — it actively drives customers away. Studies show that 94% of first impressions are design-related, and 88% of users won\'t return after a bad experience. If your interface creates friction, you are paying to acquire users only to lose them at the door.',
    fixDetail: 'We design interfaces that make people stay, trust, and act. Every screen, every interaction is crafted to reduce friction and guide your user toward exactly what you want them to do next. Design that converts — not just impresses.',
    benefits: [
      { title: 'User Research-Driven', desc: 'We start with your actual users — their goals, frustrations, and behaviours. Design decisions are based on data, not assumptions.' },
      { title: 'Conversion-Optimised Flows', desc: 'Every user journey is mapped to minimise drop-off and maximise the actions that matter to your business.' },
      { title: 'Design System Creation', desc: 'We build reusable component libraries that ensure consistency across your entire product and speed up future development.' },
      { title: 'Interactive Prototyping', desc: 'Before a single line of code is written, you can click through and test the entire experience in high-fidelity Figma prototypes.' },
      { title: 'Accessibility Compliance', desc: 'WCAG-compliant designs that ensure your product is usable by everyone — expanding your addressable market.' },
      { title: 'Motion & Micro-Interactions', desc: 'Subtle animations and transitions that make your interface feel premium, responsive, and alive.' },
    ],
    deliverables: ['User research & journey mapping', 'Wireframes & information architecture', 'High-fidelity UI design in Figma', 'Interactive prototypes', 'Design system & component library', 'Usability testing', 'Developer handoff documentation', 'Motion design specifications'],
    faq: [
      { q: 'What tools do you use for design?', a: 'We design in Figma — the industry standard for collaborative UI/UX design. All files are shareable and commentable.' },
      { q: 'Do you do user testing?', a: 'Yes. We conduct usability testing with real users to validate design decisions before development begins.' },
      { q: 'Can you redesign an existing product?', a: 'Absolutely. We audit your current UX, identify friction points, and redesign with measurable improvement goals.' },
      { q: 'How many revision rounds are included?', a: 'Typically 2–3 rounds of revisions are included. We work iteratively so changes are captured early in the process.' },
    ],
    relatedServices: ['web-development', 'app-development', 'branding'],
  },
}

// Fallback for services without deep content
const DEFAULT_DEEP = {
  problemDetail: 'Most businesses invest in this area without a clear strategy, leading to wasted resources and missed opportunities. The gap between effort and results grows wider every month without expert guidance.',
  fixDetail: 'We bring strategy, expertise, and premium execution to every engagement. Our approach is data-driven, results-focused, and designed to compound over time — turning your investment into measurable business growth.',
  benefits: [
    { title: 'Strategy-First Approach', desc: 'We never start executing without a clear plan. Every action is tied to a measurable business outcome.' },
    { title: 'Premium Execution', desc: 'Our work meets the highest standards of quality. No shortcuts, no templates, no outsourcing.' },
    { title: 'Transparent Reporting', desc: 'You always know exactly what we are doing, why, and what results it is generating.' },
    { title: 'Dedicated Specialist', desc: 'You work directly with a senior specialist in this domain — not a junior account manager.' },
    { title: 'Compounding Results', desc: 'Our systems are designed to build on each other. Month 6 outperforms month 1 because everything compounds.' },
    { title: 'No Lock-In Contracts', desc: 'We earn your business every month with results, not legal clauses.' },
  ],
  deliverables: ['Initial audit & assessment', 'Custom strategy document', 'Implementation & execution', 'Monthly performance reports', 'Ongoing optimisation', 'Direct WhatsApp support'],
  faq: [
    { q: 'How quickly can you start?', a: 'We can typically begin the discovery phase within 5–7 business days of signing.' },
    { q: 'What does the onboarding process look like?', a: 'A 30-minute strategy call, followed by a discovery phase, then a detailed proposal with timeline and deliverables.' },
    { q: 'Can this be combined with other services?', a: 'Yes — and we recommend it. Our services are designed to compound when integrated under a single strategy.' },
    { q: 'How do you measure success?', a: 'We define KPIs together during the strategy phase and track them rigorously through monthly reports.' },
  ],
  relatedServices: [],
}

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const svc = SERVICES.find((s) => s.id === resolvedParams.id)
  if (!svc) notFound()

  const waKey = svc.waLink as keyof typeof WA_LINKS
  const waHref = WA_LINKS[waKey] || WA_LINKS.default
  const deep = SERVICE_DEEP_CONTENT[svc.id] || DEFAULT_DEEP
  const related = (deep.relatedServices || []).map(id => SERVICES.find(s => s.id === id)).filter(Boolean)

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

      {/* Problem vs Fix */}
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
              <p className={styles.boxDesc}>{deep.problemDetail}</p>
            </Reveal>

            <Reveal delay={0.2} className={`${styles.box} ${styles.fixBox}`}>
              <h3 className={styles.boxTitle}>The Siyara Fix</h3>
              <p className={styles.boxDesc}>{deep.fixDetail}</p>
            </Reveal>
          </div>

          {/* Benefits Grid */}
          <div style={{ marginTop: '8rem' }}>
            <Reveal>
              <h2 className="section-title" style={{ textAlign: 'center' }}>
                What You Get
              </h2>
            </Reveal>

            <div className={styles.benefitsGrid}>
              {deep.benefits.map((b, i) => (
                <Reveal key={b.title} delay={i * 0.08} className={styles.benefitCard}>
                  <h3 className={styles.benefitTitle}>{b.title}</h3>
                  <p className={styles.benefitDesc}>{b.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Our Approach */}
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

          {/* Deliverables */}
          <div style={{ marginTop: '8rem' }}>
            <Reveal>
              <h2 className="section-title" style={{ textAlign: 'center' }}>
                Full Deliverables
              </h2>
            </Reveal>

            <Reveal delay={0.1} className={styles.deliverablesBox}>
              <ul className={styles.deliverablesList}>
                {deep.deliverables.map(d => (
                  <li key={d} className={styles.deliverableItem}>
                    <span className={styles.deliverableCheck}>✓</span>
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* FAQ */}
          <div style={{ marginTop: '8rem' }}>
            <Reveal>
              <h2 className="section-title" style={{ textAlign: 'center' }}>
                Common Questions
              </h2>
            </Reveal>

            <div className={styles.faqGrid}>
              {deep.faq.map((f, i) => (
                <Reveal key={f.q} delay={i * 0.08} className={styles.faqItem}>
                  <h3 className={styles.faqQ}>{f.q}</h3>
                  <p className={styles.faqA}>{f.a}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Related Services */}
          {related.length > 0 && (
            <div style={{ marginTop: '8rem' }}>
              <Reveal>
                <h2 className="section-title" style={{ textAlign: 'center' }}>
                  Services That Compound With {svc.name}
                </h2>
              </Reveal>

              <div className={styles.relatedGrid}>
                {related.map((r, i) => r && (
                  <Reveal key={r.id} delay={i * 0.1} className={styles.relatedCard}>
                    <Link href={`/services/${r.id}`} className={styles.relatedLink}>
                      <span className={styles.relatedIcon}>{IconMap[r.icon]}</span>
                      <h3 className={styles.relatedName}>{r.name}</h3>
                      <p className={styles.relatedDesc}>{r.desc}</p>
                      <span className={styles.relatedArrow}>Explore →</span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          )}
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
