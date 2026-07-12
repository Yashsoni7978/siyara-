'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion'
import { ReactNode } from 'react'

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider defaultTheme="dark" attribute="data-theme" enableSystem={false}>
      <MotionConfig reducedMotion="user">
        <LazyMotion features={domAnimation} strict>
          {children}
        </LazyMotion>
      </MotionConfig>
    </NextThemesProvider>
  )
}
