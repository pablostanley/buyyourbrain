"use client"

import Link from "next/link"
import { config } from "@/app/config"
import { Brain } from "lucide-react"
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Brain className="h-7 w-7 text-primary" />
          <span className="text-xl font-semibold">
            {config.siteName}
          </span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link
            href={config.udemyLinks.ai}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Learn with Udemy
          </Link>
          <AnimatedThemeToggler />
        </div>
      </div>
    </header>
  )
}
