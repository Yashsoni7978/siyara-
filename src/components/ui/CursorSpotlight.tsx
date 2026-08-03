'use client'

import { m, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export function CursorSpotlight() {
  const [isMounted, setIsMounted] = useState(false)
  
  const mouseX = useMotionValue(-1000)
  const mouseY = useMotionValue(-1000)

  // Spring configuration for smooth trailing effect
  const springConfig = { damping: 25, stiffness: 150 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  // Translate by -300px to center the 600x600 circle on the cursor
  const x = useTransform(smoothX, (val) => val - 300)
  const y = useTransform(smoothY, (val) => val - 300)

  useEffect(() => {
    // Touch/coarse-pointer devices don't have a hovering cursor —
    // skip attaching the listener and rendering the effect entirely.
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches
    if (isTouchDevice) return

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
      className="cursor-spotlight"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 40,
        pointerEvents: 'none',
        width: 600,
        height: 600,
        x,
        y,
        background: 'radial-gradient(circle, rgba(var(--accent-primary-rgb), 0.05) 0%, transparent 60%)',
        borderRadius: '50%',
        willChange: 'transform'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}
