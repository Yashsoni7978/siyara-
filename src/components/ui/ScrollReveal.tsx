'use client'

import { useEffect, useRef } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  as?: any
}

export function ScrollReveal({ children, className = '', delay = 0, as: Tag = 'div' }: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          obs.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const delayClass = delay > 0 ? `reveal-d${delay}` : ''

  return (
    <Tag ref={ref} className={`reveal ${delayClass} ${className}`.trim()}>
      {children}
    </Tag>
  )
}
