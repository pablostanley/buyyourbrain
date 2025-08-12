"use client"

import { config } from "@/app/config"
import SpotlightCard from "@/components/ui/spotlight-card"
import { Button } from "@/components/ui/button"
import { RealityCheckModal } from "@/components/reality-check-modal"
import { ArrowRight, Sparkles, Flame, Zap, TrendingUp } from "lucide-react"
import { useState, useEffect } from "react"

export function ProductGridSpotlight() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
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

    const element = document.getElementById("product-grid")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const cardBadges = {
    'designer-brain': { text: '🔥 SUPER HOT!', color: 'from-orange-500 to-red-500' },
    'ai-brain': { text: '⚡ TRENDING', color: 'from-purple-500 to-pink-500' },
    'data-brain': { text: '🚀 10X POWER', color: 'from-cyan-500 to-blue-500' },
    'manager-brain': { text: '💎 PREMIUM', color: 'from-yellow-500 to-orange-500' },
    'developer-brain': { text: '🎯 TOP RATED', color: 'from-green-500 to-emerald-500' },
    'marketer-brain': { text: '✨ VIRAL', color: 'from-pink-500 to-purple-500' },
  }

  return (
    <section id="product-grid" className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="mb-12 text-center space-y-4">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">INSTANT EXPERTISE</span>
          </div>

          <div className="overflow-visible pb-4">
            <h2 className={`text-3xl font-semibold tracking-tighter sm:text-5xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
              Choose Your Brain{" "}
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 dark:from-primary dark:via-accent dark:to-primary animate-gradient-wave leading-relaxed">
                Upgrade
              </span>
            </h2>
          </div>
          <p className={`mt-4 max-w-[700px] mx-auto text-muted-foreground md:text-xl transition-all duration-1000 delay-200 text-pretty ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
            Instant expertise, zero effort. Pick your delusion below.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {config.brains.map((brain, index) => {
            const badge = cardBadges[brain.id as keyof typeof cardBadges]
            return (
              <div
                key={brain.id}
                className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{
                  transitionDelay: `${index * 200 + 300}ms`,
                  transform: hoveredCard === brain.id ? 'translateY(-4px)' : 'translateY(0)',
                  transition: 'all 1.5s cubic-bezier(0.2, 1, 1, 1)'
                }}
              >
                <SpotlightCard
                  className="aspect-[4/5] group cursor-pointer relative"
                  spotlightColor="rgba(103, 38, 233, 0.3)"
                >
                  {badge && index < 3 && (
                    <div className={`absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-gradient-to-r ${badge.color} text-white text-xs font-semibold animate-pulse`}>
                      {badge.text}
                    </div>
                  )}

                  <div
                    className="relative h-full w-full"
                    onMouseEnter={() => setHoveredCard(brain.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url('${brain.image}')`,
                        transform: hoveredCard === brain.id ? 'scale(1.05)' : 'scale(1)',
                        transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    />

                    <div
                      className="absolute inset-0"
                      style={{
                        background: hoveredCard === brain.id
                          ? 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.3) 70%, transparent 100%)'
                          : 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 30%, transparent 70%, transparent 100%)',
                        transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    />

                    <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-white"
                          style={{
                            transform: hoveredCard === brain.id ? 'translateY(-2px)' : 'translateY(0)',
                            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
                          }}
                        >
                          {brain.name}
                        </h3>

                        <div
                          className="space-y-3 overflow-hidden"
                          style={{
                            maxHeight: hoveredCard === brain.id ? '300px' : '0',
                            opacity: hoveredCard === brain.id ? 1 : 0,
                            transform: hoveredCard === brain.id ? 'translateY(0)' : 'translateY(10px)',
                            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                          }}
                        >
                          <p className="text-white/90 text-pretty">
                            {brain.description}
                          </p>

                          <ul className="space-y-2 text-sm text-white/80">
                            {brain.specs.slice(0, 3).map((spec, specIndex) => (
                              <li
                                key={specIndex}
                                className="flex items-center gap-2"
                                style={{
                                  transform: hoveredCard === brain.id ? 'translateX(0)' : 'translateX(-10px)',
                                  opacity: hoveredCard === brain.id ? 1 : 0,
                                  transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${specIndex * 100}ms`,
                                }}
                              >
                                <ArrowRight className="h-3 w-3 text-primary flex-shrink-0" />
                                <span>{spec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div
                          style={{
                            transform: hoveredCard === brain.id ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
                            transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)',
                          }}
                        >
                          <RealityCheckModal>
                            <Button variant="outline" className="w-full group/btn" size="lg">
                              Install Now
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
                            </Button>
                          </RealityCheckModal>
                        </div>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-wave {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient-wave {
          background-size: 200% 200%;
          animation: gradient-wave 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}