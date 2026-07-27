'use client'

import dynamic from 'next/dynamic'

const SilkBackground = dynamic(
  () => import('@/components/hero/SilkBackground'),
  { ssr: false }
)

interface HeroSilkProps {
  className?: string
  color?: string
  speed?: number
  noiseIntensity?: number
  mouseSensitivity?: number
  damping?: number
}

export default function HeroSilk(props: HeroSilkProps) {
  return <SilkBackground {...props} />
}
