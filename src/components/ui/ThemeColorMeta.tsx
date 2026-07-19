'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

/**
 * Dynamically updates <meta name="theme-color"> based on active theme.
 * Rendered in the root layout so the browser chrome matches the site.
 */
export function ThemeColorMeta() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const color = resolvedTheme === 'light' ? '#F7F3EB' : '#04100B'
    let meta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null

    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'theme-color'
      document.head.appendChild(meta)
    }

    meta.content = color
  }, [resolvedTheme, mounted])

  return null
}
