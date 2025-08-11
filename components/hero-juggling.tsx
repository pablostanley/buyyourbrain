"use client"

import { Button } from "@/components/ui/button"
import { RealityCheckModal } from "@/components/reality-check-modal"
import { useEffect, useState, useRef, MouseEvent } from "react"

export function HeroJuggling() {
  const [displayedText, setDisplayedText] = useState("")
  const [displayedSubtext, setDisplayedSubtext] = useState("")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const fullText = "Skip the learning. Install a new brain."
  const fullSubtext = "Designer, AI, or data—pretend to pop it in. Results not included."

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        // Start typing subtext after main text is done
        let subtextIndex = 0
        const subtextInterval = setInterval(() => {
          if (subtextIndex <= fullSubtext.length) {
            setDisplayedSubtext(fullSubtext.slice(0, subtextIndex))
            subtextIndex++
          } else {
            clearInterval(subtextInterval)
          }
        }, 30)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setMousePosition({ x, y })
  }

  const scrollToGrid = () => {
    document.getElementById("product-grid")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <section className="relative w-full p-4">
      <div className="container mx-auto relative">
        {/* Rainbow animated border container */}
        <div
          ref={containerRef}
          className="relative rounded-4xl p-[8px] overflow-hidden group"
          onMouseMove={handleMouseMove}
        >
          {/* Animated rainbow gradient border - more vibrant */}
          <div
            className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `
                linear-gradient(90deg, 
                  #ec4899 0%, 
                  #8b5cf6 20%, 
                  #3b82f6 40%, 
                  #06b6d4 60%, 
                  #10b981 80%, 
                  #eab308 100%
                )`,
              backgroundSize: '400% 400%',
              animation: 'gradient-shift 8s ease infinite',
            }}
          />

          {/* Inner container - stays stable */}
          <div className="relative rounded-3xl overflow-hidden bg-background">
            {/* Background image that scales on hover */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 group-hover:scale-[1.03]"
              style={{
                backgroundImage: "url('/images/juggling.png')",
              }}
            />

            {/* Mouse-following spotlight effect - more prominent */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: `radial-gradient(500px circle at ${mousePosition.x}% ${mousePosition.y}%, 
                  rgba(139, 92, 246, 0.35), 
                  rgba(236, 72, 153, 0.15) 30%,
                  transparent 50%)`,
              }}
            />

            <div className="relative">
              <div className="grid lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
                <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 space-y-8">
                  <div className="space-y-6">
                    <h1 className="text-4xl font-semibold tracking-tighter sm:text-5xl xl:text-7xl/none text-white min-h-[3em] lg:min-h-[2em] drop-shadow-2xl">
                      {displayedText}
                      <span className="animate-pulse">|</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 min-h-[3em] drop-shadow-lg">
                      {displayedSubtext}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button
                      size="lg"
                      onClick={scrollToGrid}
                      className="font-medium px-8 py-6 hover:scale-105 hover:shadow-xl transition-all duration-300"
                    >
                      Meet the brains
                    </Button>
                    <RealityCheckModal>
                      <Button
                        variant="outline"
                        size="lg"
                        className="font-medium px-8 py-6 hover:scale-105 hover:shadow-xl transition-all duration-300 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
                      >
                        Is this real? (nope)
                      </Button>
                    </RealityCheckModal>
                  </div>
                </div>
                <div className="hidden lg:block" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  )
}