import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { INDUSTRIES, PORTFOLIO, WA_LINKS, BRAND, SERVICES } from '@/lib/constants'
import { TESTIMONIALS } from '@/lib/social-proof'
import { PageHero } from '@/components/ui/PageHero'
import { CTA } from '@/components/ui/CTA'
import { Reveal } from '@/components/ui/Reveal'
import styles from './industry.module.css'
import { IconMap } from '@/components/ui/Icons'

export async function generateStaticParams() {
  return INDUSTRIES.map((ind) => ({
    id: ind.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const ind = INDUSTRIES.find((i) => i.id === resolvedParams.id)
  if (!ind) return { title: 'Not Found' }
  return {
    title: `Digital Marketing for ${ind.name} in ${BRAND.location.split(',')[0]} | ${BRAND.name}`,
    description: ind.desc,
    alternates: { canonical: `${BRAND.siteUrl}/industries/${ind.id}` },
    openGraph: {
      title: `${ind.name} Digital Marketing | ${BRAND.name}`,
      description: ind.desc,
      url: `${BRAND.siteUrl}/industries/${ind.id}`,
    },
  }
}

// Deep content for each industry
const INDUSTRY_DEEP: Record<string, {
  challenge: string
  solution: string
  painPoints: { title: string; body: string }[]
  recommendedServices: string[]
  stats: { num: string; label: string }[]
  faq: { q: string; a: string }[]
}> = {
  restaurants: {
    challenge: 'Restaurants are drowning in aggregator fees — Zomato takes 20-30% per order, and Swiggy isn\'t much better. Your margins are already razor-thin. Meanwhile, your direct online presence is either non-existent or stuck on a template site that doesn\'t drive footfall, reservations, or direct orders. You\'re building Zomato\'s brand while your own stays invisible.',
    solution: 'We build restaurant brands that own their audience. A stunning website with built-in reservation and ordering systems. A social media presence that makes people crave your food. Google Business Profile optimisation that puts you at the top of "restaurants near me" searches. And ads that drive direct orders — not aggregator orders.',
    painPoints: [
      { title: 'Aggregator Dependency', body: 'You are paying 20-30% commissions to Zomato and Swiggy while they build their brand on your food. Every order through an aggregator is revenue you are giving away.' },
      { title: 'No Direct Ordering', body: 'Without your own online ordering system, you have zero control over the customer relationship. No data, no remarketing, no loyalty programs.' },
      { title: 'Invisible on Google Maps', body: 'When someone searches "best restaurant near me," your competitors appear first because they have optimised their Google Business Profile. You don\'t.' },
      { title: 'Social Media That Doesn\'t Convert', body: 'Posting food photos is not a strategy. Without proper content planning, hashtag research, and engagement tactics, your social media is a time sink that produces zero footfall.' },
    ],
    recommendedServices: ['web-development', 'google-business', 'social-media', 'performance-marketing'],
    stats: [
      { num: '3x', label: 'Average increase in direct orders' },
      { num: '85%', label: 'Reduction in aggregator dependency' },
      { num: '#1', label: 'Google Maps ranking for clients' },
      { num: '4.9★', label: 'Average Google rating maintained' },
    ],
    faq: [
      { q: 'Can you build an online ordering system?', a: 'Yes. We build custom ordering systems integrated directly into your website — zero commission fees. You keep 100% of every direct order.' },
      { q: 'How do you help with Google Maps rankings?', a: 'We fully optimise your Google Business Profile — reviews strategy, photo optimization, posting schedule, category tagging, and local SEO signals that push you to the top of "near me" searches.' },
      { q: 'Do you create food photography content?', a: 'We provide content strategy and art direction. For photography, we partner with professional food photographers in Jaipur or can guide your team to create high-quality content.' },
      { q: 'How much should a restaurant invest in digital?', a: 'Most restaurants see strong ROI starting at ₹30,000/month for a combined package of social media management, Google Business Profile optimization, and targeted local ads.' },
    ],
  },
  fashion: {
    challenge: 'Fashion is the most visual industry in the world — yet most Jaipur fashion brands have a digital presence that looks like it was built in 2018. Generic Shopify templates, inconsistent social media, no brand story, and ads that hemorrhage money on clicks that never convert. In fashion, if your digital presence doesn\'t match your product quality, you\'ve already lost the sale.',
    solution: 'We build fashion brands that look and feel premium online. High-converting e-commerce experiences that showcase your products beautifully. Lookbook-style social media that builds desire, not just awareness. Performance marketing that targets the exact demographic buying your product — and retargets everyone who didn\'t convert on the first visit.',
    painPoints: [
      { title: 'Generic E-commerce', body: 'Your online store looks identical to a thousand others. No brand personality, no storytelling, no reason for a customer to choose you over a competitor with the exact same template.' },
      { title: 'Amazon & Marketplace Dependency', body: 'You are building Jeff Bezos\'s brand, not your own. Every sale through Amazon costs you margin and customer data. D2C is the future — but only if done right.' },
      { title: 'No Visual Identity System', body: 'Your Instagram looks different from your website, which looks different from your packaging. There is no cohesive visual language that screams "this is a premium brand."' },
      { title: 'Wasted Ad Spend', body: 'You are running Facebook and Instagram ads without proper audience segmentation, creative testing, or retargeting funnels. Money goes out, vanity metrics come back.' },
    ],
    recommendedServices: ['web-development', 'branding', 'social-media', 'performance-marketing'],
    stats: [
      { num: '340%', label: 'Average ROAS on Meta Ads' },
      { num: '65%', label: 'Increase in D2C revenue' },
      { num: '12x', label: 'Instagram engagement growth' },
      { num: '2.5x', label: 'Average order value increase' },
    ],
    faq: [
      { q: 'Can you build a Shopify store?', a: 'Yes — but we don\'t use templates. We custom-design your Shopify or headless e-commerce experience to match your brand\'s aesthetic and conversion goals.' },
      { q: 'Do you handle product photography?', a: 'We provide creative direction and can coordinate with professional fashion photographers. We ensure every visual aligns with your brand system.' },
      { q: 'How do you handle seasonal campaigns?', a: 'We plan seasonal marketing calendars 3 months in advance — including ad creative, social content, email campaigns, and website merchandising changes.' },
      { q: 'What ad budget do you recommend for fashion?', a: 'We typically recommend starting with ₹50,000/month in ad spend for Meta campaigns, scaling based on ROAS performance.' },
    ],
  },
  realestate: {
    challenge: 'Real estate is a trust business. High-ticket decisions require immense credibility. Yet most real estate brands in Jaipur have websites that look like they were built by a college student — stock photos, broken links, and zero lead capture strategy. In a market where a single lead can be worth lakhs, every missed opportunity compounds.',
    solution: 'We craft premium digital showcases that position you as the authority in your market. Luxury-grade websites with virtual property tours. SEO strategies that capture high-intent "buy property in Jaipur" searches. Lead generation campaigns with proper CRM integration so no lead ever falls through the cracks.',
    painPoints: [
      { title: 'Low Trust Website', body: 'Your prospects are making crore-level decisions. If your website doesn\'t scream credibility and professionalism, they will go to the competitor whose site does.' },
      { title: 'No Lead Capture System', body: 'Visitors come, browse, and leave. Without proper lead magnets, forms, and follow-up sequences, you are losing prospects who were genuinely interested.' },
      { title: 'Invisible in Search', body: 'When someone searches "3BHK flat in Mansarovar" or "luxury villa in Jaipur," you don\'t appear. Your competitors who invested in SEO do.' },
      { title: 'No Retargeting', body: 'Someone visits your property page and leaves. Without retargeting, they forget you within 24 hours. With retargeting, you stay top-of-mind until they\'re ready to buy.' },
    ],
    recommendedServices: ['web-development', 'seo', 'performance-marketing', 'google-business'],
    stats: [
      { num: '47%', label: 'Increase in qualified leads' },
      { num: '#1', label: 'Google ranking for key searches' },
      { num: '₹8L', label: 'Average lead value generated' },
      { num: '3.2x', label: 'Return on ad spend' },
    ],
    faq: [
      { q: 'Can you integrate with our CRM?', a: 'Yes. We integrate with popular CRMs and can set up custom lead routing to ensure every inquiry reaches the right agent immediately.' },
      { q: 'Do you handle property listing management?', a: 'We can build custom property listing systems with filters, virtual tours, and lead capture — all managed through a simple admin panel.' },
      { q: 'What about virtual tours?', a: 'We integrate 360° virtual tours and video walkthroughs into your property pages for an immersive experience.' },
      { q: 'How quickly can leads be generated?', a: 'With performance marketing, you can start receiving qualified leads within 7–10 days of campaign launch.' },
    ],
  },
  ecommerce: {
    challenge: 'Your online store is not just a catalogue — it\'s supposed to be a sales engine. But most e-commerce brands in Jaipur are running generic stores with high cart abandonment, no email sequences, no retargeting, and conversion rates below 1%. You\'re spending money to drive traffic to a store that leaks customers at every stage.',
    solution: 'We optimise every touchpoint for conversion, retention, and maximum return on ad spend. From product page design to checkout flow, from abandoned cart recovery to post-purchase upsells — we build e-commerce systems that turn browsers into buyers and buyers into repeat customers.',
    painPoints: [
      { title: 'High Cart Abandonment', body: 'Industry average is 70%. Without exit-intent popups, email recovery sequences, and simplified checkout flows, you are leaving money on the table every single day.' },
      { title: 'No Customer Retention', body: 'Acquiring a new customer costs 5x more than retaining one. Without loyalty programs, email marketing, and personalisation, you are stuck on the acquisition treadmill.' },
      { title: 'Poor Product Pages', body: 'Your product pages don\'t sell. No social proof, no urgency, no compelling copy, no lifestyle imagery. They list features when they should tell stories.' },
      { title: 'Blind Ad Spend', body: 'You are running ads without proper attribution, pixel tracking, or ROAS measurement. You don\'t know which ads make money and which ones waste it.' },
    ],
    recommendedServices: ['web-development', 'performance-marketing', 'seo', 'content-creation'],
    stats: [
      { num: '2.8x', label: 'Average conversion rate increase' },
      { num: '45%', label: 'Reduction in cart abandonment' },
      { num: '380%', label: 'Average ROAS on campaigns' },
      { num: '60%', label: 'Increase in repeat purchases' },
    ],
    faq: [
      { q: 'Which e-commerce platform do you recommend?', a: 'It depends on your scale. Shopify for most D2C brands, WooCommerce for WordPress ecosystems, and custom headless solutions for enterprise-scale operations.' },
      { q: 'Can you help with marketplace listings?', a: 'Yes — but our primary focus is building your D2C channel so you own the customer relationship and data.' },
      { q: 'Do you set up email marketing?', a: 'Absolutely. We build complete email flows — welcome series, abandoned cart, post-purchase, win-back, and promotional campaigns.' },
      { q: 'What about international shipping?', a: 'We can integrate international shipping solutions and multi-currency support into your store.' },
    ],
  },
  events: {
    challenge: 'You create unforgettable moments — but your digital presence doesn\'t reflect that. Event and wedding businesses live and die by their portfolio, yet most have websites that fail to showcase the magic they create. In an industry where emotional connection drives bookings, a bland online presence is the kiss of death.',
    solution: 'We build authority and visual proof that makes you the obvious choice for high-end clients. Stunning portfolio showcases, immersive galleries, and social proof systems that turn past events into future bookings. Plus, targeted ads that reach couples and corporate clients exactly when they\'re planning.',
    painPoints: [
      { title: 'No Portfolio Showcase', body: 'Your best work is sitting in Google Drive folders, not on a stunning website that converts visitors into inquiries. Every event you don\'t showcase is a booking you\'re missing.' },
      { title: 'Seasonal Revenue Dips', body: 'Wedding and event businesses suffer from feast-or-famine cycles. Without consistent marketing, you are scrambling during slow months.' },
      { title: 'Word-of-Mouth Only', body: 'Referrals are great but unscalable. You need a systematic digital pipeline that generates inquiries consistently, regardless of the season.' },
      { title: 'No Lead Qualification', body: 'You spend hours on calls with unqualified leads. Without proper intake forms and qualification systems, your time is being wasted on prospects who can\'t afford you.' },
    ],
    recommendedServices: ['web-development', 'social-media', 'performance-marketing', 'branding'],
    stats: [
      { num: '5x', label: 'Increase in qualified inquiries' },
      { num: '₹15L+', label: 'Average booking value' },
      { num: '92%', label: 'Reduction in unqualified calls' },
      { num: '12mo', label: 'Revenue pipeline visibility' },
    ],
    faq: [
      { q: 'Can you build a portfolio gallery system?', a: 'Yes. We build immersive, filterable portfolio showcases with full-screen galleries, video integration, and client testimonial overlays.' },
      { q: 'How do you target wedding couples?', a: 'We use Meta and Google ads with precise targeting — recently engaged, wedding-related searches, geographic targeting, and lookalike audiences based on your past clients.' },
      { q: 'Do you handle social media for events?', a: 'Yes. We create content calendars showcasing your past events, behind-the-scenes content, client testimonials, and vendor collaborations.' },
      { q: 'What about wedding planning portals?', a: 'We can build custom client portals with planning checklists, vendor directories, and timeline management — elevating the client experience.' },
    ],
  },
}

const DEFAULT_INDUSTRY = {
  challenge: 'Most businesses in this industry are invisible online. Their competitors with inferior products win more customers simply because they have a better digital presence.',
  solution: 'We build premium digital experiences that match the quality of your actual product. Strategy-first, conversion-focused, and designed to generate measurable business results.',
  painPoints: [
    { title: 'Weak Online Presence', body: 'Your digital presence does not match the quality of your actual product. Every day this gap exists, you lose customers to less capable competitors.' },
    { title: 'No Lead Generation System', body: 'Visitors come and go without converting. You have no systematic way to capture, nurture, and close leads online.' },
    { title: 'Inconsistent Marketing', body: 'Your marketing is sporadic and reactive instead of strategic and consistent. Growth requires compounding effort, not random bursts.' },
    { title: 'No Measurement', body: 'You are spending on marketing but have no idea what is working and what is not. Every decision should be data-driven.' },
  ],
  recommendedServices: ['web-development', 'seo', 'social-media', 'performance-marketing'],
  stats: [
    { num: '3x', label: 'Average growth in leads' },
    { num: '4.9★', label: 'Client satisfaction rating' },
    { num: '92%', label: 'Client retention rate' },
    { num: '40+', label: 'Brands served' },
  ],
  faq: [
    { q: 'How quickly can you start?', a: 'We can begin discovery within 5–7 business days.' },
    { q: 'Do you specialise in my industry?', a: 'Yes. We have deep experience in your sector and understand your customers, competitors, and market dynamics.' },
    { q: 'What budget should I plan for?', a: 'It depends on your goals and current state. We provide custom recommendations during the free strategy call.' },
    { q: 'Can I start with one service?', a: 'Absolutely. Most clients start with what they need most and expand as they see results.' },
  ],
}

export default async function IndustryPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const ind = INDUSTRIES.find((i) => i.id === resolvedParams.id)
  if (!ind) notFound()

  const relatedProjects = PORTFOLIO.filter(p => p.industry === ind.name)
  const deep = INDUSTRY_DEEP[ind.id] || DEFAULT_INDUSTRY
  const recommended = deep.recommendedServices.map(id => SERVICES.find(s => s.id === id)).filter(Boolean)

  const waKey = ind.waLink as keyof typeof WA_LINKS
  const waHref = WA_LINKS[waKey] || WA_LINKS.default

  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title={
          <>
            <span className={styles.heroIcon}>{IconMap[ind.icon]}</span>
            <br />
            {ind.name}
          </>
        }
        subtitle={ind.desc}
        breadcrumb={[
          { label: 'Industries' },
          { label: ind.name },
        ]}
      />

      {/* Stats Strip */}
      <section className={styles.statsStrip}>
        <div className="section-wrap">
          <div className={styles.statsGrid}>
            {deep.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1} className={styles.statItem}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.container}>
        <div className="section-wrap">

          {/* Industry Challenge */}
          <Reveal>
            <h2 className="section-title" style={{ textAlign: 'center' }}>
              The Industry Challenge
            </h2>
          </Reveal>
          <Reveal delay={0.1} className={styles.challengeBox}>
            <p className={styles.challengeText}>{deep.challenge}</p>
          </Reveal>

          {/* Pain Points */}
          <div style={{ marginTop: '6rem' }}>
            <Reveal>
              <h2 className="section-title" style={{ textAlign: 'center' }}>
                Problems We Solve
              </h2>
            </Reveal>
            <div className={styles.painGrid}>
              {deep.painPoints.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.08} className={styles.painCard}>
                  <span className={styles.painNum}>{String(i + 1).padStart(2, '0')}</span>
                  <h3 className={styles.painTitle}>{p.title}</h3>
                  <p className={styles.painBody}>{p.body}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Our Solution */}
          <div style={{ marginTop: '6rem' }}>
            <Reveal>
              <h2 className="section-title" style={{ textAlign: 'center' }}>
                The Siyara Solution
              </h2>
            </Reveal>
            <Reveal delay={0.1} className={`${styles.challengeBox} ${styles.solutionBox}`}>
              <p className={styles.challengeText}>{deep.solution}</p>
            </Reveal>
          </div>

          {/* Recommended Services */}
          {recommended.length > 0 && (
            <div style={{ marginTop: '6rem' }}>
              <Reveal>
                <h2 className="section-title" style={{ textAlign: 'center' }}>
                  Recommended Services for {ind.name}
                </h2>
              </Reveal>
              <div className={styles.servicesGrid}>
                {recommended.map((svc, i) => svc && (
                  <Reveal key={svc.id} delay={i * 0.1} className={styles.serviceCard}>
                    <Link href={`/services/${svc.id}`} className={styles.serviceLink}>
                      <span className={styles.serviceIcon}>{IconMap[svc.icon]}</span>
                      <h3 className={styles.serviceName}>{svc.name}</h3>
                      <p className={styles.serviceDesc}>{svc.desc}</p>
                      <span className={styles.serviceArrow}>Learn More →</span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {/* Portfolio */}
          {relatedProjects.length > 0 && (
            <div style={{ marginTop: '6rem' }}>
              <Reveal>
                <h2 className="section-title" style={{ textAlign: 'center' }}>
                  Featured Work
                </h2>
              </Reveal>
              <div className={styles.portfolioGrid}>
                {relatedProjects.map((project, i) => (
                  <Reveal key={project.id} delay={i * 0.1} className={styles.projectCard}>
                    <h3 className={styles.projectName}>{project.name}</h3>
                    <p className={styles.projectDesc}>{project.desc}</p>
                    <Link href={project.demoLink} className={styles.projectLink}>View Case Study →</Link>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {/* FAQ */}
          <div style={{ marginTop: '6rem' }}>
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

        </div>
      </section>

      <CTA
        title={
          <>
            Grow your <br/>
            <span className="gold-shimmer">{ind.name}</span> business.
          </>
        }
        description={`We know the ${ind.name} market in Jaipur better than anyone. Let's discuss a strategy tailored to your exact sector.`}
        primaryBtn={{
          text: `Enquire about ${ind.name}`,
          href: waHref,
          isExternal: true,
          hasIcon: true,
        }}
      />
    </>
  )
}
