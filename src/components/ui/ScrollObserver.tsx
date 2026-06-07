'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function ScrollObserver() {
  const pathname = usePathname()

  useEffect(() => {
    // 1. Setup IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0, rootMargin: '100px 0px 50px 0px' }
    )

    // 2. Function to find and observe all unrevealed elements
    const scanAndObserve = () => {
      const elements = document.querySelectorAll('.reveal:not(.visible)')
      elements.forEach((el) => {
        observer.observe(el)
      })
    }

    // 3. Fallback: Manual check for elements currently in viewport
    const manualCheck = () => {
      const elements = document.querySelectorAll('.reveal:not(.visible)')
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        // If element is anywhere within 100px of the viewport, force it visible
        if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      })
    }

    // Initialize
    scanAndObserve()
    manualCheck()

    // 4. Poll every 500ms to catch elements added by React late
    const interval = setInterval(() => {
      scanAndObserve()
      manualCheck()
    }, 500)

    // 5. Scroll listener as an ultimate fallback if IntersectionObserver fails
    window.addEventListener('scroll', manualCheck, { passive: true })

    return () => {
      observer.disconnect()
      clearInterval(interval)
      window.removeEventListener('scroll', manualCheck)
    }
  }, [pathname])

  return null
}
