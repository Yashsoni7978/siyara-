// ============================================================
// SIYARA INNOVATIONS — BRAND CONSTANTS
// ============================================================

export const BRAND = {
  name: 'Siyara Innovations',
  shortName: 'Siyara',
  tagline: 'We build brands that dominate.',
  soulLine: "We don't just build your digital presence. We build brands that dominate.",
  location: 'Jaipur, Rajasthan, India',
  email: 'hello@siyarainnovations.com',
  // ⚠️ REPLACE WITH YOUR REAL WHATSAPP NUMBER (country code + number, no +)
  whatsappNumber: '919999999999',
  siteUrl: 'https://siyarainnovations.com',
  instagram: 'https://instagram.com/siyarainnovations',
  linkedin: 'https://linkedin.com/company/siyarainnovations',
  twitter: 'https://twitter.com/siyarainnovations',
} as const

// ============================================================
// WHATSAPP LINKS — Pre-filled messages per page / service
// ============================================================
const BASE_WA = `https://wa.me/${BRAND.whatsappNumber}`
const DEFAULT_MSG = encodeURIComponent(
  "Hi Siyara! I found you online and I'm interested in growing my brand digitally. Can we talk?"
)

export const WA_LINKS = {
  default:     `${BASE_WA}?text=${DEFAULT_MSG}`,
  hero:        `${BASE_WA}?text=${encodeURIComponent("Hi Siyara! I'd like to build my brand with you. Can we talk?")}`,
  strategyCall:`${BASE_WA}?text=${encodeURIComponent("Hi Siyara! I'd love a free 30-minute strategy call to discuss my business. Can we set that up?")}`,
  services:    `${BASE_WA}?text=${encodeURIComponent("Hi Siyara! I'm not sure which services I need but I'd like to talk about my brand.")}`,
  contact:     `${BASE_WA}?text=${encodeURIComponent("Hi Siyara! I found you online and I'd like to discuss a project.")}`,
  webDev:      `${BASE_WA}?text=${encodeURIComponent("Hi Siyara! I'm interested in Web Development for my business.")}`,
  appDev:      `${BASE_WA}?text=${encodeURIComponent("Hi Siyara! I'm interested in App Development.")}`,
  uiux:        `${BASE_WA}?text=${encodeURIComponent("Hi Siyara! I'm interested in UI/UX Design.")}`,
  aiAuto:      `${BASE_WA}?text=${encodeURIComponent("Hi Siyara! I'm interested in AI Automation for my business.")}`,
  aiAgent:     `${BASE_WA}?text=${encodeURIComponent("Hi Siyara! I'm interested in AI Agent Development.")}`,
  branding:    `${BASE_WA}?text=${encodeURIComponent("Hi Siyara! I'm interested in Branding & Identity.")}`,
  social:      `${BASE_WA}?text=${encodeURIComponent("Hi Siyara! I'm interested in Social Media Management.")}`,
  ads:         `${BASE_WA}?text=${encodeURIComponent("Hi Siyara! I'm interested in Performance Marketing / Ads.")}`,
  seo:         `${BASE_WA}?text=${encodeURIComponent("Hi Siyara! I'm interested in SEO Optimisation.")}`,
  geo:         `${BASE_WA}?text=${encodeURIComponent("Hi Siyara! I'm interested in GEO Optimisation / AI Search.")}`,
  gbp:         `${BASE_WA}?text=${encodeURIComponent("Hi Siyara! I'm interested in Google Business Profile Management.")}`,
  content:     `${BASE_WA}?text=${encodeURIComponent("Hi Siyara! I'm interested in Content Creation.")}`,
  restaurant:  `${BASE_WA}?text=${encodeURIComponent("Hi Siyara! I run a restaurant/food business and I'm interested in growing my digital presence.")}`,
  fashion:     `${BASE_WA}?text=${encodeURIComponent("Hi Siyara! I have a fashion/clothing brand and I'd like to talk about digital growth.")}`,
  realestate:  `${BASE_WA}?text=${encodeURIComponent("Hi Siyara! I'm in real estate / interior design and I'd like to discuss my brand.")}`,
  ecommerce:   `${BASE_WA}?text=${encodeURIComponent("Hi Siyara! I run an e-commerce / D2C brand and I'd like to grow it digitally.")}`,
  events:      `${BASE_WA}?text=${encodeURIComponent("Hi Siyara! I'm in the events / wedding industry and I'd like to build my digital presence.")}`,
} as const

// ============================================================
// SERVICES LIST
// ============================================================
export const SERVICES = [
  { id: 'web-development',       num: '01', icon: 'web',    name: 'Web Development',           fix: 'weak online presence',          category: 'chosen',    waLink: 'webDev', desc: 'Not just a website — a high-performance digital storefront built to convert. Fast, beautiful, mobile-perfect, and engineered to rank.', ctaText: 'Get Chosen' },
  { id: 'app-development',       num: '02', icon: 'app',    name: 'App Development',            fix: 'no mobile product',             category: 'chosen',    waLink: 'appDev', desc: 'Your customers live on their phones. Your business should too. We build mobile apps that are intuitive, fast, and built around what your users actually need.', ctaText: 'Get Chosen' },
  { id: 'ui-ux-design',          num: '03', icon: 'design', name: 'UI / UX Design',             fix: 'poor user experience',          category: 'chosen',    waLink: 'uiux', desc: 'Design that makes people stay, trust, and act. Every screen, every interaction — crafted to reduce friction and guide your user toward exactly what you want them to do next.', ctaText: 'Get Efficient' },
  { id: 'ai-automation',         num: '04', icon: 'ai',     name: 'AI Automation',              fix: 'slow manual operations',        category: 'efficient', waLink: 'aiAuto', desc: 'Stop doing manually what a system can do instantly. We identify the repetitive processes in your business and automate them.', ctaText: 'Get Efficient' },
  { id: 'ai-agents',             num: '05', icon: 'bot',    name: 'AI Agent Development',       fix: 'missed leads & response delays',category: 'efficient', waLink: 'aiAgent', desc: 'Custom AI agents that handle your leads, answer questions, qualify prospects, and follow up — 24/7. Never miss a lead again.', ctaText: 'Get Chosen' },
  { id: 'branding',              num: '06', icon: 'brand',  name: 'Branding & Identity',        fix: 'forgettable brand',             category: 'chosen',    waLink: 'branding', desc: 'Your brand is the first thing a client judges — before they read a single word. Logo, visual identity, brand language — everything that makes you the premium option in the room.', ctaText: 'Get Revenue' },
  { id: 'social-media',          num: '07', icon: 'social', name: 'Social Media Management',    fix: 'inconsistent online presence',  category: 'revenue',   waLink: 'social', desc: 'Showing up consistently with content that actually builds your audience — not just fills a grid. Strategy, design, writing, posting, and engagement. Every day.', ctaText: 'Get Revenue' },
  { id: 'performance-marketing', num: '08', icon: 'chart',  name: 'Ads & Performance Marketing',fix: 'wasted ad spend',               category: 'revenue',   waLink: 'ads', desc: 'Meta, Google, YouTube — campaigns where every rupee has a job to do. We build, test, and scale ad systems tied directly to your revenue goals. No vanity metrics.', ctaText: 'Get Found' },
  { id: 'seo',                   num: '09', icon: 'search', name: 'SEO Optimisation',           fix: 'invisible on Google',           category: 'found',     waLink: 'seo', desc: 'Rank at the top — and stay there. We build SEO strategies that are technical, content-driven, and long-game.', ctaText: 'Get Found' },
  { id: 'geo',                   num: '10', icon: 'brain',  name: 'GEO Optimisation',           fix: 'invisible in AI search',        category: 'found',     waLink: 'geo', desc: 'When someone asks ChatGPT, Perplexity, or Google AI for recommendations — is your business mentioned? GEO is the new frontier of search.', ctaText: 'Get Found' },
  { id: 'google-business',       num: '11', icon: 'map',    name: 'Google Business Profile',    fix: 'not showing on Maps',           category: 'found',     waLink: 'gbp', desc: 'When someone searches your category in Jaipur, your profile should be the first thing they see — fully optimised, fully trusted.', ctaText: 'Get Revenue' },
  { id: 'content-creation',      num: '12', icon: 'pen',    name: 'Content Creation',           fix: 'no content strategy',           category: 'revenue',   waLink: 'content', desc: 'Content that looks premium, reads sharp, and actually builds your authority — not filler posts to hit a quota.', ctaText: 'Get Revenue' },
] as const

export const INDUSTRIES = [
  { id: 'restaurants', icon: 'food',    name: 'Restaurants & Food',         waLink: 'restaurant', desc: 'Diners eat with their eyes first. We build digital presences that drive footfall, table reservations, and food orders. Stop relying on aggregators and own your audience.', ctaText: 'Pack Your Tables' },
  { id: 'fashion',     icon: 'fashion', name: 'Fashion & Clothing',          waLink: 'fashion',    desc: 'In fashion, aesthetic is everything. We design high-converting e-commerce experiences and visual campaigns that turn casual browsers into loyal brand advocates.', ctaText: 'Elevate Your Brand'    },
  { id: 'realestate',  icon: 'home',    name: 'Real Estate & Interiors',     waLink: 'realestate', desc: 'High-ticket sales require immense trust. We craft premium digital showcases that highlight your properties and portfolio, generating highly qualified leads.', ctaText: 'Get Premium Leads' },
  { id: 'ecommerce',   icon: 'shop',    name: 'E-commerce & D2C',           waLink: 'ecommerce',  desc: "Your store isn't just a catalogue—it's a sales engine. We optimise every touchpoint for conversion, retention, and maximum return on ad spend.", ctaText: 'Scale Your Store'  },
  { id: 'events',      icon: 'ring',    name: 'Events & Weddings',           waLink: 'events',     desc: 'You create unforgettable moments; we make sure people know about them. We build authority and visual proof that makes you the obvious choice for high-end clients.', ctaText: 'Book More Events'     },
] as const
export const PORTFOLIO = [
  { 
    id: 'velara',
    name: 'Velara Worldwide',
    industry: 'Events & Weddings',
    desc: 'A robust, high-performance platform for a leading global wedding planning brand. Engineered for massive scale, rich visual storytelling, and seamless user experience.',
    image: '/portfolio/the-knot.png',
    demoLink: '/showcase/velara',
  },
  { 
    id: 'marigold',
    name: 'Marigold Events',
    industry: 'Events & Weddings',
    desc: 'A premium showcase for Jaipur\'s finest wedding planners. We built a stunning, lead-generating digital presence that matches the elegance of the weddings they design.',
    image: '/portfolio/fiestro.png',
    demoLink: '/showcase/marigold',
  },
  { 
    id: 'lumiere',
    name: 'Lumière Studios',
    industry: 'Events & Weddings',
    desc: 'An immersive digital experience for a luxury wedding photography studio. Built for visual impact and seamless lead conversion.',
    image: '/portfolio/ido-gallery.png',
    demoLink: '/showcase/lumiere',
  },
  {
    id: 'aura',
    name: 'Aura Aesthetics',
    industry: 'Healthcare & Clinics',
    desc: 'A sophisticated digital experience for a premium dermatology clinic. Built with custom CSS gradients and robust patient booking flows.',
    image: '',
    demoLink: '/showcase/aura',
  },
  {
    id: 'vitalis',
    name: 'Vitalis Health',
    industry: 'Healthcare & Clinics',
    desc: 'A multi-campus hospital showcase focusing on patient trust and accessibility. Features department listings and doctor directories.',
    image: '',
    demoLink: '/showcase/vitalis',
  },
  {
    id: 'oakhaven',
    name: 'Oakhaven Properties',
    industry: 'Real Estate & Interiors',
    desc: 'An ultra-luxury real estate brokerage platform showcasing high-net-worth properties with elegant serif typography and rich color schemes.',
    image: '',
    demoLink: '/showcase/oakhaven',
  },
  {
    id: 'apex',
    name: 'Apex Commercial',
    industry: 'Real Estate & Interiors',
    desc: 'A data-driven corporate real estate advisory site with modern layouts, highlighting commercial listings and services.',
    image: '',
    demoLink: '/showcase/apex',
  },
  {
    id: 'maison',
    name: 'Maison 14',
    industry: 'Restaurants & Food',
    desc: 'A sophisticated dark-mode digital experience for a Two Michelin Star fine dining restaurant, featuring elegant menus and reservation systems.',
    image: '',
    demoLink: '/showcase/maison',
  },
  {
    id: 'roastingco',
    name: 'The Roasting Co.',
    industry: 'Restaurants & Food',
    desc: 'A vibrant, earthy website for an artisanal coffee roastery with multiple locations. Designed to drive footfall and online orders.',
    image: '',
    demoLink: '/showcase/roastingco',
  },
  {
    id: 'lumina',
    name: 'Lumina Studio',
    industry: 'Fashion & Clothing',
    desc: 'An elegant, minimalist e-commerce storefront for a high-end sustainable womenswear brand. Features clean typography and immersive lookbooks.',
    image: '',
    demoLink: '/showcase/lumina',
  },
  {
    id: 'threadworks',
    name: 'Threadworks',
    industry: 'Fashion & Clothing',
    desc: 'A bold, utilitarian digital flagship for a modern streetwear brand. Designed with a dark mode aesthetic, neon accents, and heavy typography.',
    image: '',
    demoLink: '/showcase/threadworks',
  },
  {
    id: 'vitality',
    name: 'Vitality Wellness',
    industry: 'Fitness & Wellness',
    desc: 'A serene, high-end digital sanctuary for a holistic wellness and spa club. Features class schedules and membership booking flows.',
    image: '',
    demoLink: '/showcase/vitality',
  },
  {
    id: 'ironcore',
    name: 'Ironcore Gym',
    industry: 'Fitness & Wellness',
    desc: 'An aggressive, high-energy digital presence for a hardcore strength and conditioning facility. Features bold typography and high-contrast dark mode.',
    image: '',
    demoLink: '/showcase/ironcore',
  },
  {
    id: 'nova',
    name: 'Nova Academy',
    industry: 'Education & EdTech',
    desc: 'A futuristic, dark-mode platform for a premium software engineering bootcamp, featuring curriculum outlines and ISA breakdowns.',
    image: '',
    demoLink: '/showcase/nova',
  },
  {
    id: 'horizon',
    name: 'Horizon Masterclass',
    industry: 'Education & EdTech',
    desc: 'An inspiring, brightly colored platform for premium online creative courses. Includes instructor directories and tiered subscription pricing.',
    image: '',
    demoLink: '/showcase/horizon',
  }
] as const
