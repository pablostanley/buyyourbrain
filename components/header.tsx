"use client"

import Link from "next/link"
import { config } from "@/app/config"
import { Brain } from "lucide-react"
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-3 sm:px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity" aria-label="BuyYourBrain home">
          <Brain className="h-5 w-5 sm:h-6 md:h-7 sm:w-6 md:w-7 text-primary" aria-hidden="true" />
          <span className="text-base sm:text-lg md:text-xl font-semibold">
            {config.siteName}
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex md:hidden">
            <Link
              href={config.udemyLinks.ai}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2"
            >
              Learn
            </Link>
          </Button>
          <Button asChild variant="outline" className="hidden md:inline-flex">
            <Link
              href={config.udemyLinks.ai}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4"
            >
              Learn with Udemy
            </Link>
          </Button>
          <AnimatedThemeToggler />
        </div>
      </div>
    </header>
  )
}
