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
  'ai-automation': {
    problemDetail: 'Scaling your business usually means scaling your headcount, leading to bloated payrolls, human error, and slow operations. While you sleep, manual processes choke your growth and eat into your margins.',
    fixDetail: 'We identify repetitive bottlenecks and replace them with custom AI automations. From CRM syncing to automated invoicing and data entry, we build systems that do the work of 5 humans—instantly and flawlessly.',
    benefits: [
      { title: 'Zero Human Error', desc: 'Automations execute the exact same way, every single time. No typos, no missed steps, no forgotten emails.' },
      { title: 'Drastic Cost Reduction', desc: 'Software costs a fraction of a full-time employee. Scale your output without scaling your payroll.' },
      { title: '24/7 Operations', desc: 'Your business processes keep running overnight, on weekends, and during holidays.' },
      { title: 'Instant Execution', desc: 'What takes a human 15 minutes takes an automation 15 milliseconds.' },
      { title: 'Seamless Integration', desc: 'We connect your existing tools (CRM, Slack, Email, ERP) so data flows effortlessly across your stack.' },
      { title: 'Focus on High-ROI Work', desc: 'Free your team from repetitive data entry so they can focus on strategy, sales, and relationships.' },
    ],
    deliverables: ['Process audit & bottleneck mapping', 'Custom automation scripts & logic', 'Zapier / Make.com architectures', 'CRM & ERP API integrations', 'Automated reporting dashboards', 'Staff training on new workflows'],
    faq: [
      { q: 'What kind of processes can be automated?', a: 'Anything repetitive that follows rules: lead routing, invoicing, data entry, email follow-ups, and onboarding.' },
      { q: 'Do we need to change our current software?', a: 'Usually no. We build automations that connect the tools you already use via APIs.' },
      { q: 'Is it secure?', a: 'Yes. We use enterprise-grade encryption and secure API key management to ensure your data stays private.' },
      { q: 'What happens if a tool changes its API?', a: 'We provide ongoing maintenance retainers to ensure your automations never break.' },
    ],
    relatedServices: ['ai-agents', 'app-development'],
  },
  'ai-agents': {
    problemDetail: 'Every unanswered inquiry is lost revenue. While your sales team sleeps or is busy, potential customers are asking questions and demanding instant answers. By the time you reply, they\'ve already bought from a competitor.',
    fixDetail: 'We build custom AI agents trained specifically on your business data. These aren\'t simple chatbots—they are intelligent agents that can qualify leads, answer complex queries, book appointments, and close sales 24/7.',
    benefits: [
      { title: 'Instant Lead Qualification', desc: 'Agents ask the right questions to separate high-ticket buyers from casual browsers instantly.' },
      { title: '100% Response Rate', desc: 'Never miss a lead again. Every single inquiry gets a hyper-relevant, immediate response.' },
      { title: 'Trained on Your Knowledge', desc: 'We feed the AI your PDFs, website, and past emails. It speaks in your brand voice and knows your business inside out.' },
      { title: 'Multi-Channel Deployment', desc: 'Deploy agents on your website, WhatsApp, Instagram DMs, and Facebook Messenger.' },
      { title: 'Appointment Setting', desc: 'The AI integrates directly with your calendar to book qualified leads into your sales team\'s schedule.' },
      { title: 'Continuous Learning', desc: 'The agent gets smarter over time as we review chat logs and refine its knowledge base.' },
    ],
    deliverables: ['Custom LLM prompt engineering', 'Knowledge base vectorization', 'Website & WhatsApp integration', 'Lead routing logic setup', 'Custom agent persona design', 'Monthly conversation audits'],
    faq: [
      { q: 'Are these just regular chatbots?', a: 'No. Traditional chatbots use rigid dialogue trees. Our AI agents use advanced LLMs (like GPT-4) to understand context and converse naturally.' },
      { q: 'Will the AI hallucinate or give wrong answers?', a: 'We use strict system prompts and Retrieval-Augmented Generation (RAG) to lock the AI down to only use your approved knowledge base.' },
      { q: 'Can it speak different languages?', a: 'Yes. The agents can automatically detect the user\'s language and respond fluently in Hindi, English, and dozens of other languages.' },
      { q: 'Can it hand off to a human?', a: 'Absolutely. If a query is too complex or the user requests it, the agent seamlessly alerts your team.' },
    ],
    relatedServices: ['ai-automation', 'whatsapp-marketing'],
  },
  'branding': {
    problemDetail: 'If you look like everybody else, you have to compete on price. Most businesses fail to build a memorable identity, settling for cheap logos and inconsistent colors that make them look untrustworthy and small.',
    fixDetail: 'We build brands that demand a premium. From logo design and typography to brand voice and visual strategy, we craft an identity that positions you as the unquestionable leader in your space.',
    benefits: [
      { title: 'Premium Positioning', desc: 'Charge what you are worth. A premium brand identity justifies higher price points and attracts better clients.' },
      { title: 'Instant Trust', desc: 'Humans judge books by their covers. A professional, cohesive brand builds instant credibility before you even speak.' },
      { title: 'Market Differentiation', desc: 'We identify visual gaps in your industry and design an identity that makes you stand out completely.' },
      { title: 'Consistent Execution', desc: 'You get a comprehensive brand book so every post, email, and ad looks like it comes from the same high-end company.' },
      { title: 'Emotional Connection', desc: 'We craft a brand story and voice that resonates deeply with your target audience.' },
      { title: 'Scalable Assets', desc: 'Everything is designed in high-resolution, vector formats ready for print, web, and massive billboards.' },
    ],
    deliverables: ['Logo design & variations', 'Color palette & typography selection', 'Comprehensive brand guidelines book', 'Business cards & letterheads', 'Social media templates', 'Brand voice & messaging matrix'],
    faq: [
      { q: 'Do I get the source files?', a: 'Yes, you receive all vector files (.AI, .SVG, .EPS) so you have complete ownership and control.' },
      { q: 'How long does branding take?', a: 'A full brand identity project typically takes 4–6 weeks, involving deep research and collaborative workshops.' },
      { q: 'Do you just make logos?', a: 'No. A logo is just one piece of a brand. We build the entire visual and verbal ecosystem around it.' },
      { q: 'Can you rebrand an existing business?', a: 'Yes. We carefully evolve your brand to retain existing equity while modernizing it for the future.' },
    ],
    relatedServices: ['ui-ux-design', 'content-creation'],
  },
  'social-media': {
    problemDetail: 'Posting 3 times a week with generic captions doesn\'t generate revenue. Most businesses use social media as a digital brochure rather than an active acquisition channel, wasting time on vanity metrics like "likes" instead of driving sales.',
    fixDetail: 'We turn your social media into a revenue-generating asset. We craft compelling, shareable content that builds an actual audience, establishes authority, and funnels followers into paying customers.',
    benefits: [
      { title: 'Audience Growth', desc: 'We don\'t just post; we implement growth strategies to attract your ideal customer profile.' },
      { title: 'Authority Building', desc: 'Educational and high-value content positions your brand as the industry expert.' },
      { title: 'Consistent Aesthetic', desc: 'Your grid will look premium, cohesive, and instantly recognizable.' },
      { title: 'Community Management', desc: 'We engage with comments and DMs to build genuine relationships with your audience.' },
      { title: 'Trend Capitalization', desc: 'We monitor algorithm changes and audio trends to get you maximum organic reach.' },
      { title: 'Data-Driven Iteration', desc: 'We double down on the formats and topics that actually drive profile visits and link clicks.' },
    ],
    deliverables: ['Monthly content calendar', 'Custom graphic design & video editing', 'Copywriting & hashtag strategy', 'Daily posting & community management', 'Monthly performance analytics', 'Influencer outreach strategy'],
    faq: [
      { q: 'Which platforms do you manage?', a: 'Instagram, LinkedIn, Twitter/X, and Facebook. We focus on the platforms where your specific audience actually spends time.' },
      { q: 'Do you shoot the videos?', a: 'We provide creative direction and editing. If you are in Jaipur, we can arrange professional shoots. Otherwise, we guide you on capturing raw footage which we edit.' },
      { q: 'How do you measure success?', a: 'While reach and engagement matter, our primary metrics are link clicks, DM inquiries, and overall business growth.' },
      { q: 'Do I have to approve every post?', a: 'We share the content calendar with you 2 weeks in advance for approval, so you are always in control of your brand message.' },
    ],
    relatedServices: ['content-creation', 'branding'],
  },
  'performance-marketing': {
    problemDetail: 'Burning cash on Facebook and Google Ads without tracking ROI is the fastest way to kill a business. Most agencies focus on impressions and clicks, hiding behind vanity metrics while your actual customer acquisition cost skyrockets.',
    fixDetail: 'We run math-driven, ruthless performance marketing campaigns. Every rupee is tracked. We test hundreds of creatives, optimize landing pages, and scale only the campaigns that actually generate profitable revenue.',
    benefits: [
      { title: 'Strict ROAS Tracking', desc: 'We only care about Return On Ad Spend. If a campaign isn\'t profitable, we kill it.' },
      { title: 'Rapid Creative Testing', desc: 'Ad fatigue is real. We constantly cycle new images, videos, and copy to find the winning combinations.' },
      { title: 'Advanced Retargeting', desc: 'We capture the 98% of people who don\'t buy on the first visit with hyper-specific retargeting ads.' },
      { title: 'Lookalike Audiences', desc: 'We feed the algorithm your best customers to automatically find more people exactly like them.' },
      { title: 'Landing Page Optimisation', desc: 'Ads are only half the battle. We optimize the pages they land on to ensure maximum conversion.' },
      { title: 'Transparent Dashboards', desc: 'You get a live dashboard showing exactly how much you spent and how much you made. No hidden fees.' },
    ],
    deliverables: ['Account audit & pixel setup', 'Audience research & targeting', 'Ad copywriting & creative design', 'A/B testing framework', 'Landing page optimization', 'Live ROI tracking dashboard'],
    faq: [
      { q: 'How much should I spend on ads?', a: 'We recommend a minimum starting budget of ₹50,000/month for ad spend to generate statistically significant data, separate from our management fee.' },
      { q: 'Google Ads or Facebook Ads?', a: 'It depends on your business. Google captures high intent (people searching for you). Facebook/Instagram builds demand (interrupting people with great offers). We usually run both.' },
      { q: 'How long until I see results?', a: 'While we aim for immediate wins, it typically takes 2-4 weeks for the algorithms to fully optimize and stabilize your Cost Per Acquisition (CPA).' },
      { q: 'Do you guarantee results?', a: 'We guarantee our process, tracking, and relentless optimization. While nobody can guarantee specific ROAS due to market variables, we don\'t lock you in if we aren\'t performing.' },
    ],
    relatedServices: ['web-development', 'seo'],
  },
  'seo': {
    problemDetail: 'If you aren\'t on Page 1 of Google, you don\'t exist. You are losing high-intent, ready-to-buy customers to competitors with inferior products simply because they have better SEO.',
    fixDetail: 'We build long-game SEO strategies that dominate search engines. We fix your technical foundation, build topical authority through elite content, and acquire high-power backlinks to secure long-term, free organic traffic.',
    benefits: [
      { title: 'High-Intent Traffic', desc: 'SEO brings you customers who are actively searching for your exact service. They are ready to buy.' },
      { title: 'Compounding ROI', desc: 'Unlike ads where traffic stops the minute you stop paying, SEO traffic compounds over months and years.' },
      { title: 'Technical Excellence', desc: 'We fix site speed, mobile usability, and schema markup so Google\'s bots love your website.' },
      { title: 'Topical Authority', desc: 'We don\'t just target single keywords. We build content clusters that prove to Google you are the industry expert.' },
      { title: 'Quality Backlinks', desc: 'We secure links from high-authority, relevant websites to boost your domain rating safely.' },
      { title: 'Competitor Domination', desc: 'We reverse-engineer what your competitors are doing and execute a strategy to outrank them.' },
    ],
    deliverables: ['Comprehensive technical SEO audit', 'Keyword research & mapping', 'On-page optimization (Meta, H1, internal linking)', 'Content gap analysis', 'Monthly blog post creation', 'High-DA backlink acquisition'],
    faq: [
      { q: 'How long does SEO take?', a: 'SEO is a marathon, not a sprint. You will typically see movement in 3 months, and substantial ROI in 6-9 months depending on competition.' },
      { q: 'Is SEO better than ads?', a: 'They serve different purposes. Ads give you instant traffic; SEO gives you sustainable, compounding long-term traffic with a much higher eventual ROI.' },
      { q: 'Do you use black-hat techniques?', a: 'Never. We strictly follow Google\'s Webmaster Guidelines. Black-hat tricks will get your site permanently penalized.' },
      { q: 'Will you guarantee the #1 spot?', a: 'No ethical agency guarantees the #1 spot because Google\'s algorithm is private. We guarantee executing the exact strategies that have ranked our other clients successfully.' },
    ],
    relatedServices: ['geo', 'google-business', 'content-creation'],
  },
  'geo': {
    problemDetail: 'Search is fundamentally changing. Your customers are no longer just Googling; they are asking ChatGPT, Perplexity, and Google Gemini for recommendations. If your brand isn\'t referenced by AI, you are missing the next generation of search.',
    fixDetail: 'Generative Engine Optimisation (GEO) is how you rank in the AI era. We optimize your brand\'s digital footprint across the web so that when LLMs generate answers, they cite your business as the definitive source.',
    benefits: [
      { title: 'First-Mover Advantage', desc: 'While your competitors are still fighting over traditional SEO, you will dominate the new AI search engines.' },
      { title: 'High Trust Recommendations', desc: 'When ChatGPT recommends your business, users trust it implicitly, leading to incredibly high conversion rates.' },
      { title: 'Citation Building', desc: 'We ensure your brand is mentioned across high-authority datasets that LLMs use for their training.' },
      { title: 'Contextual Relevance', desc: 'We structure your content so AI engines understand exactly who you are and who you serve.' },
      { title: 'Future-Proofing', desc: 'As AI search rapidly replaces traditional search, your brand will already be positioned at the top.' },
      { title: 'Zero-Click Domination', desc: 'Capture users directly within the AI chat interface before they ever visit a search engine results page.' },
    ],
    deliverables: ['AI brand footprint audit', 'Knowledge graph optimization', 'Entity relationship building', 'Digital PR & high-authority citations', 'Conversational keyword targeting', 'Monthly AI visibility tracking'],
    faq: [
      { q: 'How is GEO different from SEO?', a: 'SEO optimizes for Google\'s ranking algorithm. GEO optimizes for Large Language Models (like ChatGPT) by ensuring your brand is present in the data sources they trust.' },
      { q: 'Which AI engines do you optimize for?', a: 'Primarily ChatGPT (OpenAI), Perplexity AI, Google Gemini, and Anthropic Claude.' },
      { q: 'Is GEO a replacement for SEO?', a: 'No, they work together. A strong traditional SEO foundation is actually a prerequisite for good GEO.' },
      { q: 'Can we track GEO traffic?', a: 'It\'s harder to track than traditional SEO, but we use specialized brand-mention tracking and monitor referral traffic from AI platforms.' },
    ],
    relatedServices: ['seo', 'content-creation'],
  },
  'google-business': {
    problemDetail: 'When someone in Jaipur searches "best [your industry] near me", they look at Google Maps before they look at websites. If you don\'t have a highly-rated, optimized profile, you are handing local footfall directly to your competitors.',
    fixDetail: 'We turn your Google Business Profile into a local lead generation machine. We optimize every setting, manage reviews, post regular updates, and ensure you dominate the local 3-pack for high-intent searches.',
    benefits: [
      { title: 'Local Search Dominance', desc: 'Rank in the coveted Google "Local 3-Pack" where 70% of clicks happen.' },
      { title: 'Review Management', desc: 'We help you generate authentic 5-star reviews and professionally respond to all feedback.' },
      { title: 'Instant Footfall', desc: 'Capture people who are in their cars, on their phones, looking to buy right now.' },
      { title: 'Visual Appeal', desc: 'We regularly upload high-quality photos and videos to make your profile stand out.' },
      { title: 'Accurate Information', desc: 'Ensure your hours, location, and contact details are always perfect so you never frustrate a customer.' },
      { title: 'Post Updates', desc: 'We use GBP posts to announce offers, events, and news directly on the search results page.' },
    ],
    deliverables: ['Profile verification & setup', 'Keyword optimization of description', 'Weekly GBP posts & offers', 'Review generation strategy', 'Automated review responses', 'Monthly local search analytics'],
    faq: [
      { q: 'Do I need a physical store for this?', a: 'No. Service-area businesses (like plumbers or consultants) can also rank highly without displaying a physical address.' },
      { q: 'How do you get more reviews?', a: 'We set up automated SMS/Email workflows to ask your happy customers for reviews at the exact right moment.' },
      { q: 'What if we get a fake negative review?', a: 'We flag it with Google for removal and provide a professional public response to mitigate the damage.' },
      { q: 'Does this help my website?', a: 'Yes. A strong Google Business Profile is a massive trust signal that improves your overall local SEO.' },
    ],
    relatedServices: ['seo', 'whatsapp-marketing'],
  },
  'content-creation': {
    problemDetail: 'Using stock photos and generic AI-written articles destroys your brand\'s credibility. If your content doesn\'t sound like an industry leader, no one will treat you like one.',
    fixDetail: 'We produce premium, authoritative content. From high-end photography and video to deeply researched editorial articles, we create assets that command attention and build undeniable trust with your audience.',
    benefits: [
      { title: 'Undeniable Authority', desc: 'Deeply researched, expert-level content proves you are the best at what you do.' },
      { title: 'Visual Excellence', desc: 'High-end imagery and videography that makes your products or services look irresistible.' },
      { title: 'Brand Voice Consistency', desc: 'We capture your unique tone of voice so every piece of content sounds genuinely like you.' },
      { title: 'Omnichannel Assets', desc: 'One high-quality video can be repurposed into blogs, reels, tweets, and newsletters.' },
      { title: 'SEO Fuel', desc: 'Great written content is the engine that drives your organic search rankings.' },
      { title: 'Sales Enablement', desc: 'We create case studies and whitepapers that your sales team can use to close bigger deals.' },
    ],
    deliverables: ['Professional photography & videography', 'Long-form editorial blog posts', 'Case studies & success stories', 'E-books & whitepapers', 'Email newsletter copywriting', 'Scriptwriting for video'],
    faq: [
      { q: 'Who writes the content?', a: 'Our in-house team of native English copywriters who specialize in B2B and premium B2C content.' },
      { q: 'Will you need my time?', a: 'Yes. We conduct regular interview sessions with you to extract your industry expertise, which we then turn into content.' },
      { q: 'Do you use AI to write?', a: 'We use AI for research and outlining, but every piece of final content is heavily edited and refined by expert human writers.' },
      { q: 'Can you shoot videos in our office?', a: 'Yes, if you are located in Jaipur or willing to cover travel, we provide full on-site production services.' },
    ],
    relatedServices: ['social-media', 'seo', 'branding'],
  },
  'whatsapp-marketing': {
    problemDetail: 'Email open rates are plummeting. If you rely solely on email to reach your customers, 80% of them are never seeing your message. You are leaving massive amounts of backend revenue on the table.',
    fixDetail: 'We build direct-to-customer WhatsApp systems. With 98% open rates, we set up automated flows for abandoned carts, appointment reminders, and broadcast promotions that actually get read and acted upon.',
    benefits: [
      { title: '98% Open Rates', desc: 'WhatsApp is where your customers\' friends and family are. They will see your message.' },
      { title: 'Instant Conversions', desc: 'Because the messages are read instantly, promotions drive immediate spikes in sales.' },
      { title: 'Automated Workflows', desc: 'We set up triggers (like abandoned carts or post-purchase thank yous) that run on autopilot.' },
      { title: 'Two-Way Communication', desc: 'Customers can reply to the message and chat directly with your sales team or AI agent.' },
      { title: 'Rich Media', desc: 'Send images, videos, PDFs, and interactive buttons directly in the chat.' },
      { title: 'Highly Personalised', desc: 'Segment your audience and send tailored messages based on their past purchase behavior.' },
    ],
    deliverables: ['WhatsApp Business API integration', 'Template message creation & approval', 'Abandoned cart automation', 'Post-purchase review requests', 'Monthly promotional broadcasts', 'Audience segmentation strategy'],
    faq: [
      { q: 'Is this spammy?', a: 'No. We strictly adhere to WhatsApp\'s opt-in policies. We only message people who have explicitly agreed to receive updates from you.' },
      { q: 'Do we need the official API?', a: 'Yes. We set you up with the official WhatsApp Business API so your number isn\'t banned for bulk messaging.' },
      { q: 'Can we get a green tick?', a: 'If your business has sufficient PR and brand awareness, we assist in applying for the official verified green tick.' },
      { q: 'How much does it cost to send messages?', a: 'Meta charges a few rupees per conversation. We help you optimize your flows to ensure the ROI far exceeds the messaging costs.' },
    ],
    relatedServices: ['ai-agents', 'email-marketing'],
  },
  'email-marketing': {
    problemDetail: 'You are renting your audience on Instagram and Google. One algorithm change, and you lose access to them. If you aren\'t building and monetizing an email list, you don\'t truly own your customer base.',
    fixDetail: 'We build the asset you actually own. We create beautiful, high-converting email sequences that welcome new subscribers, nurture leads, recover lost sales, and drive consistent, predictable backend revenue.',
    benefits: [
      { title: 'Complete Ownership', desc: 'Nobody can take your email list away from you. It is a completely owned revenue channel.' },
      { title: 'Automated Revenue', desc: 'Set up welcome series and abandoned cart flows once, and they generate sales 24/7.' },
      { title: 'High ROI', desc: 'Email marketing consistently delivers the highest ROI of any digital channel because you aren\'t paying for the clicks.' },
      { title: 'Deep Segmentation', desc: 'Send different emails to VIP customers vs. people who haven\'t bought in 6 months.' },
      { title: 'Beautiful Design', desc: 'We design custom HTML emails that look like premium digital magazines, not plain text spam.' },
      { title: 'A/B Testing', desc: 'We constantly test subject lines, send times, and button colors to maximize open and click rates.' },
    ],
    deliverables: ['Klaviyo / Mailchimp setup', 'Custom email template design', 'Welcome series automation', 'Abandoned cart & browse abandonment flows', 'Weekly/Monthly newsletter campaigns', 'List cleaning & deliverability optimization'],
    faq: [
      { q: 'Is email dead?', a: 'Not at all. While promotional blasts get ignored, highly personalized, beautifully designed, value-driven emails still drive massive revenue.' },
      { q: 'How often should we email our list?', a: 'It depends on your industry. E-commerce can email 2-3 times a week. B2B services might do a high-value newsletter twice a month.' },
      { q: 'What if our emails go to spam?', a: 'We focus heavily on technical deliverability (DKIM, SPF, DMARC) and list hygiene to ensure your emails hit the primary inbox.' },
      { q: 'Do you write the emails?', a: 'Yes, our copywriters handle everything from the catchy subject lines to the persuasive body copy.' },
    ],
    relatedServices: ['whatsapp-marketing', 'content-creation'],
  }
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

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: svc.name,
    description: svc.desc,
    provider: {
      '@type': 'LocalBusiness',
      name: BRAND.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Jaipur',
        addressRegion: 'Rajasthan',
        addressCountry: 'IN'
      }
    },
    areaServed: {
      '@type': 'City',
      name: 'Jaipur'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${svc.name} Deliverables`,
      itemListElement: deep.deliverables.map((d, i) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: d
        },
        position: i + 1
      }))
    }
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: deep.faq.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
