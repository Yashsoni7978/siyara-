'use client'

import { m, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export function CursorSpotlight() {
  const [isMounted, setIsMounted] = useState(false)
  
  const mouseX = useMotionValue(-1000)
  const mouseY = useMotionValue(-1000)

  // Spring configuration for smooth trailing effect
  const springConfig = { damping: 25, stiffness: 150 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  useEffect(() => {
    setIsMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  if (!isMounted) return null

  return (
    <m.div
      className="cursor-spotlight pointer-events-none fixed inset-0 z-50"
      style={{
        background: `radial-gradient(600px circle at var(--x) var(--y), rgba(var(--accent-primary-rgb), 0.05), transparent 40%)`
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <m.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'transparent',
          maskImage: 'radial-gradient(400px circle at var(--x) var(--y), black, transparent 50%)',
          WebkitMaskImage: 'radial-gradient(400px circle at var(--x) var(--y), black, transparent 50%)',
        }}
        onUpdate={() => {
          document.documentElement.style.setProperty('--x', `${smoothX.get()}px`)
          document.documentElement.style.setProperty('--y', `${smoothY.get()}px`)
        }}
      />
    </m.div>
  )
}
