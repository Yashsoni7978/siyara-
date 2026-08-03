'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function ScrollObserver() {
  const pathname = usePathname()

  useEffect(() => {
    // 1. Single optimized IntersectionObserver
    // No scroll listeners, no getBoundingClientRect calls, no forced layout reflows.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // Immediately unobserve target to release memory & CPU tracking
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.05,
        rootMargin: '80px 0px 40px 0px',
      }
    )

    // 2. Observe all unrevealed elements
    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal:not(.visible)')
      elements.forEach((el) => observer.observe(el))
    }

    observeElements()

    // 3. Lightweight MutationObserver to detect dynamically added DOM nodes (replaces polling & scroll listeners)
    const mutationObserver = new MutationObserver(() => {
      observeElements()
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [pathname])

  return null
}
