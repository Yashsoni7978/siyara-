'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { LazyMotion, domAnimation } from 'framer-motion'
import { ReactNode } from 'react'

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider defaultTheme="dark" attribute="data-theme" enableSystem={false}>
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
    </NextThemesProvider>
  )
}
