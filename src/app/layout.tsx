'use client'

import '~/assets/styles/main.css'
import { LazyMotion, domMax } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import Header from '~/components/layout/BasicLayout/Header'
import PageProgressBar from '~/components/layout/BasicLayout/PageProgressBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="zh-cn">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          <LazyMotion strict features={domMax}>
            <Header />
            <PageProgressBar />
            <main className="bg-[var(--content-bg)] dark:bg-[var(--dark-content-bg)]">
              {children}
            </main>
          </LazyMotion>
        </ThemeProvider>
      </body>
    </html>
  )
}
