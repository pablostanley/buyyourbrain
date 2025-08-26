"use client"

import { Button } from "@/components/ui/button"
import { RealityCheckModal } from "@/components/reality-check-modal"
import { useEffect, useState, useRef, MouseEvent } from "react"

export function HeroJuggling() {
  const [displayedTextPart1, setDisplayedTextPart1] = useState("")
  const [displayedTextPart2, setDisplayedTextPart2] = useState("")
  const [displayedSubtext, setDisplayedSubtext] = useState("")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const fullTextPart1 = "Skip the learning. Install a "
  const fullTextPart2 = "new brain"
  const fullSubtext = "Designer, AI, or data — pretend to pop it in. Results not included."

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullTextPart1.length) {
        setDisplayedTextPart1(fullTextPart1.slice(0, currentIndex))
        currentIndex++
      } else if (currentIndex <= fullTextPart1.length + fullTextPart2.length) {
        setDisplayedTextPart2(fullTextPart2.slice(0, currentIndex - fullTextPart1.length))
        currentIndex++
      } else if (currentIndex === fullTextPart1.length + fullTextPart2.length + 1) {
        // Add the period
        setDisplayedTextPart2(fullTextPart2 + ".")
        currentIndex++
      } else {
        clearInterval(typingInterval)
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
    <section className="relative w-full p-2 sm:p-3 lg:p-4">
      <div className="container mx-auto relative">
        <div
          ref={containerRef}
          className="relative rounded-4xl p-[8px] overflow-hidden group"
          onMouseMove={handleMouseMove}
        >
          <div
            className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift"
            style={{
              background: `
                linear-gradient(90deg, 
                  #ec4899 0%, 
                  #8b5cf6 20%, 
                  #3b82f6 40%, 
                  #06b6d4 60%, 
                  #10b981 80%, 
                  #eab308 100%
                )`
            }}
          />

          <div className="relative rounded-3xl overflow-hidden bg-background">
            <div
              className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 group-hover:scale-[1.03]"
              style={{
                backgroundImage: "url('/images/juggling.jpg')",
              }}
            />

            <div
              className="lg:hidden absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
              style={{
                backgroundImage: "url('/images/juggling-mobile.jpg')",
              }}
            />

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
              <div className="hidden lg:grid lg:grid-cols-2 lg:min-h-[700px]">
                <div className="flex flex-col justify-center p-16 space-y-8">
                  <div className="space-y-6">
                    <h1 className="text-5xl font-semibold tracking-tighter xl:text-7xl/none text-white min-h-[2em] drop-shadow-2xl text-pretty">
                      {displayedTextPart1}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 animate-gradient-x">
                        {displayedTextPart2}
                      </span>
                      <span className="animate-pulse">|</span>
                    </h1>
                    <p className="text-xl text-white/90 min-h-[3em] drop-shadow-lg text-pretty">
                      {displayedSubtext}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      size="lg"
                      onClick={scrollToGrid}
                      className="font-medium px-8 py-6 hover:scale-105 hover:shadow-xl transition-all duration-300"
                      aria-label="Scroll to product selection"
                    >
                      Meet the brains
                    </Button>
                    <RealityCheckModal>
                      <Button
                        variant="outline"
                        size="lg"
                        className="font-medium px-8 py-6 hover:scale-105 hover:shadow-xl transition-all duration-300"
                      >
                        Is this real? (nope)
                      </Button>
                    </RealityCheckModal>
                  </div>
                </div>
                <div className="hidden lg:block" />
              </div>

              <div className="lg:hidden min-h-[600px] h-[85vh] max-h-[900px] flex flex-col">
                <div className="flex flex-col justify-center items-center text-center p-6 sm:p-8 pt-12 sm:pt-16 pb-4 space-y-4 sm:space-y-6">
                  <div className="space-y-3 sm:space-y-4 max-w-md">
                    <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-white drop-shadow-2xl text-pretty">
                      {displayedTextPart1}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 animate-gradient-x">
                        {displayedTextPart2}
                      </span>
                      <span className="animate-pulse">|</span>
                    </h1>
                    <p className="text-base sm:text-lg text-white/90 drop-shadow-lg">
                      {displayedSubtext}
                    </p>
                  </div>
                  <div className="flex flex-col w-full max-w-sm gap-2 sm:gap-3">
                    <Button
                      size="lg"
                      onClick={scrollToGrid}
                      className="font-medium w-full py-5 sm:py-6 hover:scale-105 hover:shadow-xl transition-all duration-300"
                      aria-label="Scroll to product selection"
                    >
                      Meet the brains
                    </Button>
                    <RealityCheckModal>
                      <Button
                        variant="secondary"
                        size="lg"
                        className="font-medium w-full py-5 sm:py-6 hover:scale-105 hover:shadow-xl transition-all duration-300"
                      >
                        Is this real? (nope)
                      </Button>
                    </RealityCheckModal>
                  </div>
                </div>
                <div className="flex-1" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}