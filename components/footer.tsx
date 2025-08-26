"use client"

import Link from "next/link"
import { Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RealityCheckModal } from "@/components/reality-check-modal"
import { useRef } from "react"
import { useIntersectionVisibility } from "@/hooks/use-intersection-visibility"

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null)
  const isVisible = useIntersectionVisibility(footerRef, { threshold: 0.1 })

  return (
    <footer ref={footerRef} id="footer-section" className="relative w-full pt-24 pb-8 overflow-hidden bg-gradient-to-t from-muted to-background">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tighter">
            It's a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 dark:from-primary dark:via-accent dark:to-primary animate-gradient-x">
              no-brainer
            </span>
          </h2>
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Stop thinking. Start pretending. Your AI brain upgrade awaits.*
          </p>
        </div>

        <div className={`flex flex-col items-center gap-6 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <RealityCheckModal>
            <Button size="lg" className="py-6 bg-gradient-to-r from-pink-500 to-purple-500 dark:from-primary dark:to-accent text-white hover:scale-105 transition-transform">
              Install Your Brain Now
              <Brain className="ml-2 h-5 w-5" />
            </Button>
          </RealityCheckModal>
          <p className="text-xs text-muted-foreground italic text-pretty">
            *Not a real product. Vibe-coded parody by Udemy. Please use your actual brain.
          </p>
        </div>

        <div className={`border-t border-border/40 pt-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Brain className="h-5 w-5 text-primary" />
              <p className="text-sm text-muted-foreground text-pretty">
                © 2025 BuyaBrain.ai | Vibe-coded parody by Udemy
              </p>
            </div>

            <div className="flex gap-6">
              <Link
                href="https://www.udemy.com/"
                target="_blank"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Real Learning
              </Link>
              <Link
                href="https://www.udemy.com/terms/privacy/"
                target="_blank"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="https://about.udemy.com/"
                target="_blank"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                About Udemy
              </Link>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}