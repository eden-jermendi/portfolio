import type { Metadata } from 'next'
import { Manrope, IBM_Plex_Mono } from 'next/font/google'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const sans = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-mono',
})

import { getSiteConfig } from '@/lib/content-parser'
import { FractalSystemProvider } from '@/components/providers/FractalSystemProvider'
import { LiveBackground } from '@/components/ui/LiveBackground'

export const metadata: Metadata = {
  metadataBase: new URL('https://edenjermendi.com'),
  title: "Eden Jermendi | Full-stack System's Oriented Developer",
  description: "Backend-leaning full-stack developer. I build resilient, thoughtful software with a focus on good structure, useful interfaces, and code that feels deliberate rather than flashy.",
  openGraph: {
    title: "Eden Jermendi",
    description: "Backend-leaning full-stack developer.",
    url: 'https://edenjermendi.com',
    siteName: 'Eden Jermendi Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { author } = getSiteConfig();

  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <FractalSystemProvider>
          <LiveBackground />
          <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', flex: 1 }}>
            <SiteHeader />
            <main id="main">{children}</main>
            <Footer author={author} />
          </div>
        </FractalSystemProvider>
      </body>
    </html>
  )
}
