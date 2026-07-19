import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { WA_LINKS, BRAND } from '@/lib/constants'
import { POSTS } from '@/lib/blog-posts'
import { PageHero } from '@/components/ui/PageHero'
import styles from './post.module.css'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return POSTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = POSTS.find(p => p.slug === slug)
  if (!post) return { title: 'Post Not Found' }
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${BRAND.siteUrl}/blog/${slug}` },
    openGraph: { type: 'article', publishedTime: post.date },
  }
}

const POST_CONTENT: Record<string, React.ReactNode> = {
  'why-your-restaurant-needs-more-than-zomato-2026': (
    <>
      <p>Zomato takes 25–30% of every single order you fulfill. You have zero visibility into who your customers are. You cannot email them, you cannot retarget them on Instagram, and you cannot build loyalty with them directly. If Zomato changes its algorithm tomorrow — or if a competitor bids higher for the same search term — your restaurant goes from page one to page four overnight.</p>
      <p>This is not a hypothetical risk. Restaurant owners across India have experienced this exact scenario.</p>
      <h2>The Problem With Platform Dependency</h2>
      <p>The aggregator model works — up to a point. Zomato and Swiggy have the demand. They have the eyeballs. But they make money from your transactions, and that means their incentives are never perfectly aligned with yours.</p>
      <p>When you list on an aggregator, you are essentially renting your customers. You never own the relationship. The moment someone orders from you on Zomato, Zomato owns that customer interaction — not you.</p>
      <h2>What a Real Digital Presence Looks Like</h2>
      <p>The restaurants that will win in 2026 are the ones building multiple touchpoints that they control:</p>
      <ul>
        <li><strong>Their own website</strong> — with a direct ordering system or reservation flow</li>
        <li><strong>Google Business Profile</strong> — fully optimised so they appear on Maps searches</li>
        <li><strong>Instagram with real strategy</strong> — not just food photos but content that builds a community</li>
        <li><strong>WhatsApp for regulars</strong> — a direct channel to their most loyal customers</li>
      </ul>
      <h2>The Compounding Effect</h2>
      <p>Here is the thing about building your own digital presence: it compounds. Every piece of content you create, every review you earn, every person who follows you on Instagram — all of it builds equity in your brand. Aggregator traffic builds equity in their platform.</p>
      <p>You do not have to abandon Zomato. Use it as a discovery channel. But invest in the channels that you own.</p>
    </>
  ),
  'what-is-geo-optimisation': (
    <>
      <p>If someone types &ldquo;best premium digital agency in Jaipur&rdquo; into ChatGPT right now, they get a response — and that response includes specific business recommendations. The question is: is your business mentioned?</p>
      <p>This is GEO — Generative Engine Optimisation. And it is becoming one of the most important factors in how businesses get discovered in 2026.</p>
      <h2>What Is GEO?</h2>
      <p>GEO is the practice of optimising your digital presence so that AI language models — ChatGPT, Google Gemini, Perplexity, Claude — are likely to cite, recommend, and reference your business when users ask relevant questions.</p>
      <p>Traditional SEO gets you ranked on Google&apos;s search results page. GEO gets you cited by the AI answers that increasingly sit above those results.</p>
      <h2>Why It Matters More Than You Think</h2>
      <p>In 2024, Google introduced AI Overviews to its search results. In 2025, usage of AI assistants for local business research grew by over 200% among urban Indian consumers. By 2026, a meaningful percentage of discovery journeys — especially for premium services — start with an AI query, not a traditional Google search.</p>
      <h2>How to Win at GEO</h2>
      <ul>
        <li><strong>Build authoritative content</strong> — AI models cite businesses that have substantial, well-structured online content</li>
        <li><strong>Get cited by trusted sources</strong> — Local news, industry publications, and business directories all feed into what AI models know about you</li>
        <li><strong>Have a consistent NAP</strong> — Name, Address, Phone number consistent across every platform</li>
        <li><strong>Earn reviews</strong> — AI models factor in reputation signals when making recommendations</li>
      </ul>
      <p>GEO is still early. Which means the businesses that invest now will have a significant head start over those who wait.</p>
    </>
  ),
  'how-jaipur-fashion-brands-can-sell-without-amazon': (
    <>
      <p>Amazon takes 15–30% of your revenue. Flipkart is no different. But worse than the margin hit — you are building equity in their platform, not yours. Your customers know Amazon. They do not necessarily know your brand.</p>
      <p>The good news: Jaipur&apos;s fashion and textile brands have something that no algorithm can replicate. Craft. Heritage. Story. And those are exactly the things that build a direct-to-consumer brand.</p>
      <h2>The D2C Shift</h2>
      <p>Across India, premium fashion brands are making the move to direct sales — and the economics are compelling. A brand selling a ₹3,000 kurta on Amazon might net ₹2,100 after fees. Selling it through their own website, they net closer to ₹2,700. Over 1,000 orders a year, that is ₹6 lakh staying in the business instead of going to Amazon.</p>
      <h2>What Jaipur Brands Have That Others Don&apos;t</h2>
      <p>Block print. Bandhani. Hand embroidery. Traditional craft with modern aesthetic. This is not a commodity — it is a story, and stories sell at a premium.</p>
      <p>The brands winning in D2C are leaning into this. They are not just selling clothing — they are selling an origin story, a craft tradition, and an identity.</p>
      <h2>The Digital Infrastructure You Need</h2>
      <ul>
        <li><strong>A beautiful, fast website</strong> — that reflects the premium nature of the product</li>
        <li><strong>Instagram as a discovery engine</strong> — not just product photos but behind-the-scenes craft content</li>
        <li><strong>WhatsApp as a conversion tool</strong> — for personalised service and repeat customers</li>
        <li><strong>Email marketing</strong> — for building loyalty and driving repeat purchases</li>
      </ul>
      <p>You do not need to abandon marketplaces overnight. But every rupee you invest in your own channels compounds over time. Every rupee you invest in Amazon&apos;s ads compounds for Amazon.</p>
    </>
  ),
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = POSTS.find(p => p.slug === slug)
  if (!post) notFound()

  const content = POST_CONTENT[slug]
  const related = POSTS.filter(p => p.slug !== slug).slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        subtitle={`${post.date} · ${post.readTime} read`}
        breadcrumb={[{ label: 'Insights', href: '/blog' }, { label: post.category }]}
      />

      <article className={styles.article}>
        <div className={styles.articleInner}>
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Share this article</span>
              <Link
                href={WA_LINKS.default}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.shareBtn}
              >
                Share on WhatsApp
              </Link>
            </div>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Want this applied to your brand?</span>
              <Link
                href={WA_LINKS.strategyCall}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: '10.5px', padding: '14px 20px' }}
              >
                Book Strategy Call
              </Link>
            </div>
          </aside>

          {/* Content */}
          <div className={styles.content}>
            {content}
          </div>
        </div>
      </article>

      {/* Related posts */}
      <section className={styles.relatedSection} aria-label="Related articles">
        <div className="section-wrap">
          <span className="eyebrow" style={{ marginBottom: '48px', display: 'block' }}>More Insights</span>
          <div className={styles.relatedGrid}>
            {related.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className={styles.relatedCard}>
                <span className={styles.relatedCategory}>{p.category}</span>
                <h3 className={styles.relatedTitle}>{p.title}</h3>
                <span className={styles.relatedRead}>Read →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
