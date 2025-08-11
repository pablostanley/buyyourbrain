"use client"

import Link from "next/link"
import { Brain, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RealityCheckModal } from "@/components/reality-check-modal"
import { useEffect, useState } from "react"

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById("footer-section")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <footer id="footer-section" className="relative w-full py-24 overflow-hidden bg-gradient-to-t from-muted to-background">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Giant text */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tighter">
            It's a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 dark:from-primary dark:via-accent dark:to-primary animate-gradient-x">
              no-brainer
            </span>
          </h2>
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Stop thinking. Start pretending. Your AI brain upgrade awaits.*
          </p>
        </div>

        {/* CTA Section */}
        <div className={`flex flex-col items-center gap-6 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <RealityCheckModal>
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-pink-500 to-purple-500 dark:from-primary dark:to-accent text-white hover:scale-105 transition-transform">
              Install Your Brain Now
              <Brain className="ml-2 h-5 w-5" />
            </Button>
          </RealityCheckModal>
          <p className="text-xs text-muted-foreground italic">
            *Not a real product. This is a parody. Please use your actual brain.
          </p>
        </div>

        {/* Links and info */}
        <div className={`border-t border-border/40 pt-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Brain className="h-5 w-5 text-primary" />
              <p className="text-sm text-muted-foreground">
                © 2024 buyyourbrain.ai | A Udemy parody campaign
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

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  )
}