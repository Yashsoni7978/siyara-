'use client'

import React from 'react'

// Helper component to standardise SVG props
const BaseIcon = ({ children, className = '', width = 28, height = 28 }: { children: React.ReactNode, className?: string, width?: number, height?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#52e597"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={width}
    height={height}
    style={{ width: `${width}px`, height: `${height}px`, minWidth: `${width}px`, minHeight: `${height}px`, display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    className={className}
  >
    {children}
  </svg>
)

// ============================================================
// SERVICES ICONS
// ============================================================
// 01. Web Development — Code < />
const WebIcon = () => (
  <BaseIcon>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </BaseIcon>
)

// 02. App Development — Smartphone
const AppIcon = () => (
  <BaseIcon>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </BaseIcon>
)

// 03. UI / UX Design — Pen Tool / Pencil
const DesignIcon = () => (
  <BaseIcon>
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.5 7.5" />
    <circle cx="11" cy="11" r="2" />
  </BaseIcon>
)

// 04. AI Automation — Robot
const AIIcon = () => (
  <BaseIcon>
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <line x1="8" y1="16" x2="8.01" y2="16" />
    <line x1="16" y1="16" x2="16.01" y2="16" />
  </BaseIcon>
)

// 05. AI Agents — Bot Head
const BotIcon = () => (
  <BaseIcon>
    <path d="M12 2a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4z" />
    <path d="M12 14a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4z" />
    <path d="M2 12a4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4z" />
    <path d="M14 12a4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4z" />
  </BaseIcon>
)

// 06. Branding — Target / Bullseye
const BrandIcon = () => (
  <BaseIcon>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </BaseIcon>
)

// 07. Social Media — 4 Circles
const SocialIcon = () => (
  <BaseIcon>
    <circle cx="7" cy="7" r="3" />
    <circle cx="17" cy="7" r="3" />
    <circle cx="7" cy="17" r="3" />
    <circle cx="17" cy="17" r="3" />
  </BaseIcon>
)

// 08. Ads & Performance Marketing — Megaphone / Bullhorn
const ChartIcon = () => (
  <BaseIcon>
    <path d="M22 8l-6 4 6 4V8z" />
    <rect x="2" y="6" width="14" height="12" rx="2" />
    <path d="M6 18v4" />
  </BaseIcon>
)

// 09. SEO — Search Magnifier
const SearchIcon = () => (
  <BaseIcon>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </BaseIcon>
)

// 10. GEO — Pie Chart
const BrainIcon = () => (
  <BaseIcon>
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
    <path d="M22 12A10 10 0 0 0 12 2v10z" />
  </BaseIcon>
)

// 11. Google Business — Funnel / Filter
const MapIcon = () => (
  <BaseIcon>
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </BaseIcon>
)

// 12. Content Creation — Document
const PenIcon = () => (
  <BaseIcon>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </BaseIcon>
)

// 13. WhatsApp Marketing — Headset
const WhatsAppIcon = () => (
  <BaseIcon>
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </BaseIcon>
)

// 14. Email Marketing — Envelope
const MailIcon = () => (
  <BaseIcon>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </BaseIcon>
)

// ============================================================
// INDUSTRIES ICONS
// ============================================================
const HealthcareIcon = () => (
  <BaseIcon width={24} height={24}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    <line x1="12" y1="9" x2="12" y2="15" />
    <line x1="9" y1="12" x2="15" y2="12" />
  </BaseIcon>
)

const FoodIcon = () => (
  <BaseIcon width={24} height={24}>
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </BaseIcon>
)

const FashionIcon = () => (
  <BaseIcon width={24} height={24}>
    <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
  </BaseIcon>
)

const HomeIcon = () => (
  <BaseIcon width={24} height={24}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </BaseIcon>
)

const ShopIcon = () => (
  <BaseIcon width={24} height={24}>
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </BaseIcon>
)

const RingIcon = () => (
  <BaseIcon width={24} height={24}>
    <polygon points="12 2 15 6 9 6 12 2" />
    <path d="M6 6h12l-6 16L6 6z" />
  </BaseIcon>
)

const EduIcon = () => (
  <BaseIcon width={24} height={24}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </BaseIcon>
)

const FactoryIcon = () => (
  <BaseIcon width={24} height={24}>
    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4H2v16z" />
  </BaseIcon>
)

const SaasIcon = () => (
  <BaseIcon width={24} height={24}>
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </BaseIcon>
)

const FinanceIcon = () => (
  <BaseIcon width={24} height={24}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </BaseIcon>
)

const FitnessIcon = () => (
  <BaseIcon width={24} height={24}>
    <path d="M6.5 6.5h11M6.5 17.5h11M3 10v4M21 10v4M5 8v8M19 8v8" />
  </BaseIcon>
)

const AutoIcon = () => (
  <BaseIcon width={24} height={24}>
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H7c-.7 0-1.3.3-1.8.7C4.3 8.6 3 10 3 10s-2.7.6-3.5 1.1C.7 11.3 0 12.1 0 13v3c0 .6.4 1 1 1h2" />
    <circle cx="7" cy="17" r="2" />
    <circle cx="17" cy="17" r="2" />
  </BaseIcon>
)

const RetailIcon = () => (
  <BaseIcon width={24} height={24}>
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </BaseIcon>
)

// ============================================================
// PLATFORM ICONS
// ============================================================
const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z" />
  </svg>
)

const InstagramIcon = () => (
  <BaseIcon width={24} height={24}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </BaseIcon>
)

const LinkedInIcon = () => (
  <BaseIcon width={24} height={24}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </BaseIcon>
)

// ============================================================
// EXPORT MAP
// ============================================================
export const IconMap: Record<string, React.ReactNode> = {
  // Services
  web: <WebIcon />,
  app: <AppIcon />,
  design: <DesignIcon />,
  ai: <AIIcon />,
  bot: <BotIcon />,
  brand: <BrandIcon />,
  social: <SocialIcon />,
  chart: <ChartIcon />,
  search: <SearchIcon />,
  brain: <BrainIcon />,
  map: <MapIcon />,
  pen: <PenIcon />,
  whatsapp: <WhatsAppIcon />,
  mail: <MailIcon />,
  
  // Industries
  healthcare: <HealthcareIcon />,
  jewellery: <RingIcon />,
  realestate: <HomeIcon />,
  home: <HomeIcon />,
  education: <EduIcon />,
  ecommerce: <ShopIcon />,
  shop: <ShopIcon />,
  manufacturing: <FactoryIcon />,
  hospitality: <FoodIcon />,
  food: <FoodIcon />,
  saas: <SaasIcon />,
  finance: <FinanceIcon />,
  fitness: <FitnessIcon />,
  automotive: <AutoIcon />,
  retail: <RetailIcon />,
  fashion: <FashionIcon />,
  ring: <RingIcon />,

  // Platforms
  google: <GoogleIcon />,
  instagram: <InstagramIcon />,
  linkedin: <LinkedInIcon />,
}
