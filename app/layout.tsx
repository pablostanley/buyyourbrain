import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { PasswordProtection } from "@/components/password-protection"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BuyYourBrain.ai - A Parody",
  description: "You can't buy skills. You earn them. Use AI to enhance your thinking, not replace it.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
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
