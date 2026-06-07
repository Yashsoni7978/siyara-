'use client'

import React from 'react'

// Helper component to standardise SVG props
const BaseIcon = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-6 h-6 ${className}`}
  >
    {children}
  </svg>
)

// ============================================================
// SERVICES ICONS
// ============================================================
const WebIcon = () => (
  <BaseIcon>
    <circle cx="12" cy="12" r="10" />
    <ellipse cx="12" cy="12" rx="4" ry="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
  </BaseIcon>
)

const AppIcon = () => (
  <BaseIcon>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </BaseIcon>
)

const DesignIcon = () => (
  <BaseIcon>
    <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z" />
  </BaseIcon>
)

const AIIcon = () => (
  <BaseIcon>
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </BaseIcon>
)

const BotIcon = () => (
  <BaseIcon>
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <line x1="8" y1="16" x2="8.01" y2="16" />
    <line x1="16" y1="16" x2="16.01" y2="16" />
  </BaseIcon>
)

const BrandIcon = () => (
  <BaseIcon>
    <polygon points="12 2 22 12 12 22 2 12" />
  </BaseIcon>
)

const SocialIcon = () => (
  <BaseIcon>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
  </BaseIcon>
)

const ChartIcon = () => (
  <BaseIcon>
    <polyline points="3 17 9 11 13 15 21 7" />
    <polyline points="14 7 21 7 21 14" />
  </BaseIcon>
)

const SearchIcon = () => (
  <BaseIcon>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </BaseIcon>
)

const BrainIcon = () => (
  <BaseIcon>
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
  </BaseIcon>
)

const MapIcon = () => (
  <BaseIcon>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </BaseIcon>
)

const PenIcon = () => (
  <BaseIcon>
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
  </BaseIcon>
)

// ============================================================
// INDUSTRIES ICONS
// ============================================================
const FoodIcon = () => (
  <BaseIcon>
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
  </BaseIcon>
)

const FashionIcon = () => (
  <BaseIcon>
    <path d="M12 8A2 2 0 1 0 10 6" />
    <path d="M12 8l-8 7c-.6.5-1 .5-1 1s.4 1 1 1h16c.6 0 1-.5 1-1s-.4-.5-1-1l-8-7z" />
  </BaseIcon>
)

const HomeIcon = () => (
  <BaseIcon>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </BaseIcon>
)

const ShopIcon = () => (
  <BaseIcon>
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </BaseIcon>
)

const RingIcon = () => (
  <BaseIcon>
    <circle cx="12" cy="14" r="6" />
    <path d="M9 8l3-4 3 4z" />
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
  <BaseIcon>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </BaseIcon>
)

const LinkedInIcon = () => (
  <BaseIcon>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </BaseIcon>
)

const WhatsAppIcon = () => (
  <BaseIcon>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
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
  
  // Industries
  food: <FoodIcon />,
  fashion: <FashionIcon />,
  home: <HomeIcon />,
  shop: <ShopIcon />,
  ring: <RingIcon />,

  // Platforms
  google: <GoogleIcon />,
  instagram: <InstagramIcon />,
  linkedin: <LinkedInIcon />,
  whatsapp: <WhatsAppIcon />,
}
