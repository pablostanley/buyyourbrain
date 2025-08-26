import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "./animations.css"
import { ThemeProvider } from "@/components/theme-provider"
import { PasswordProtection } from "@/components/password-protection"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BuyaBrain.ai - Vibe-Coded Parody by Udemy",
  description: "You can't buy skills. You earn them. Use AI to enhance your thinking, not replace it.",
  metadataBase: new URL('https://buyabrain.ai'),
  openGraph: {
    title: "BuyaBrain.ai - Vibe-Coded Parody by Udemy",
    description: "You can't buy skills. You earn them. Use AI to enhance your thinking, not replace it.",
    url: 'https://buyabrain.ai',
    siteName: 'BuyaBrain.ai',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BuyaBrain.ai - Skip the learning. Install a new brain.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "BuyaBrain.ai - Vibe-Coded Parody by Udemy",
    description: "You can't buy skills. You earn them. Use AI to enhance your thinking, not replace it.",
    images: ['/images/og-image.jpg'],
    creator: '@pablostanley',
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
  themeColor: '#A435F0',
  alternates: {
    canonical: 'https://buyabrain.ai',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <PasswordProtection>
            {children}
          </PasswordProtection>
        </ThemeProvider>
      </body>
    </html>
  )
}
