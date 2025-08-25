"use client"

import type React from "react"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { config } from "@/app/config"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface RealityCheckModalProps {
  children: React.ReactNode
}

export function RealityCheckModal({ children }: RealityCheckModalProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Check for dark mode using both theme and DOM
  useEffect(() => {
    const checkDarkMode = () => {
      const isDarkMode = theme === 'dark' || 
                        document.documentElement.classList.contains('dark')
      setIsDark(isDarkMode)
    }
    
    checkDarkMode()
    
    // Also observe class changes on the html element
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => observer.disconnect()
  }, [theme])

  const logoSrc = isDark ? "/udemy_logo_dark.svg" : "/udemy_logo.svg"
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[90vw] sm:max-w-[800px] p-0 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image Section - Left on desktop, top on mobile */}
          <div className="relative w-full md:w-2/5 h-64 md:h-auto md:min-h-[400px]">
            <Image
              src="/images/puppy.png"
              alt="Learn AI the right way"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient overlay for better text readability on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 via-black/20 to-transparent md:hidden" />
          </div>
          
          {/* Content Section - Right on desktop, bottom on mobile */}
          <div className="flex flex-col justify-center p-8 md:p-12 md:w-3/5 space-y-6">
            <div className="space-y-4">
              <DialogTitle className="text-2xl md:text-3xl font-semibold tracking-tight">
                Not for real.
                <span className="block text-primary">But your growth can be.</span>
              </DialogTitle>
              
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                You can't buy skills. You earn them. Use AI to enhance your thinking, not replace it.
              </p>
            </div>
            
            <div className="space-y-4">
              <Button asChild size="lg" className="w-full sm:w-auto group">
                <Link href={config.udemyLinks.ai} target="_blank" className="flex items-center justify-center gap-2">
                  Learn AI the right way
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <div className="pt-2">
                {mounted && (
                  <Image
                    key={logoSrc}
                    src={logoSrc}
                    alt="Udemy"
                    width={91}
                    height={34}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                )}
              </div>
              
              <p className="text-xs text-muted-foreground/70">
                Parody site for a Udemy campaign. Nothing here is for sale.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}