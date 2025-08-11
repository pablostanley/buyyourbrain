"use client"

import { Button } from "@/components/ui/button"
import { RealityCheckModal } from "@/components/reality-check-modal"
import { useEffect, useState } from "react"

export function HeroJuggling() {
  const [displayedText, setDisplayedText] = useState("")
  const [displayedSubtext, setDisplayedSubtext] = useState("")
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

  const scrollToGrid = () => {
    document.getElementById("product-grid")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <section className="relative w-full p-4">
      <div className="container mx-auto relative">
        {/* Rainbow animated border container */}
        <div className="relative rounded-4xl p-[8px] overflow-hidden">
          {/* Animated rainbow gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-gradient-xy" />

          {/* Inner container - stays stable */}
          <div className="relative rounded-3xl overflow-hidden bg-background">
            {/* Background image that scales on hover */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 hover:scale-[1.02]"
              style={{
                backgroundImage: "url('/images/juggling.png')",
              }}
            />
            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 hover:from-primary/10 hover:via-accent/10 hover:to-primary/10 transition-all duration-700" />

            <div className="relative">
              <div className="grid lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
                <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 space-y-8">
                  <div className="space-y-6">
                    <h1 className="text-4xl font-semibold tracking-tighter sm:text-5xl xl:text-6xl/none text-white min-h-[3em] lg:min-h-[2em]">
                      {displayedText}
                      <span className="animate-pulse">|</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 min-h-[3em]">
                      {displayedSubtext}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button
                      size="lg"
                      onClick={scrollToGrid}
                      className="font-medium px-8 py-6 hover:scale-105 transition-transform"
                    >
                      Meet the brains
                    </Button>
                    <RealityCheckModal>
                      <Button
                        variant="outline"
                        size="lg"
                        className="font-medium px-8 py-6 hover:scale-105 transition-transform"
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
        @keyframes gradient-xy {
          0%, 100% {
            background-position: 0% 50%;
            background-size: 200% 200%;
          }
          25% {
            background-position: 100% 50%;
            background-size: 200% 200%;
          }
          50% {
            background-position: 100% 100%;
            background-size: 200% 200%;
          }
          75% {
            background-position: 0% 100%;
            background-size: 200% 200%;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-gradient-xy {
          animation: gradient-xy 15s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}