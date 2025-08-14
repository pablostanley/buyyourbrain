"use client"

import type React from "react"
import { config } from "@/app/config"
import { Award, Repeat, Wand } from "lucide-react"
import { useEffect, useState } from "react"

const icons: { [key: string]: React.ElementType } = {
  Award,
  Repeat,
  Wand,
}

export function WhyNotSection() {
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

    const element = document.getElementById("why-not-section")
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
    <section id="why-not-section" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-muted/30 dark:bg-card/30 rounded-3xl p-8 md:p-12 lg:p-16 border border-border/50">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-4">
              <h2 className={`text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                Why an{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 dark:from-primary dark:via-accent dark:to-primary animate-gradient-x">
                  artificial
                </span>
                {" "}brain?
              </h2>
              <p className={`max-w-[700px] text-muted-foreground md:text-xl text-pretty transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                Because real growth comes from delegating your intelligence. Installing, not learning.
              </p>
            </div>
          </div>
          
          <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {config.whyNot.map((item, index) => {
              const Icon = icons[item.icon]
              return (
                <div 
                  key={item.title} 
                  className={`group relative bg-background/50 dark:bg-card/50 rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:bg-background/80 dark:hover:bg-card/80 hover:scale-105 hover:shadow-lg ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ 
                    transition: `opacity 1s ${index * 100 + 300}ms, transform 0.3s ease-out, background-color 0.3s, border-color 0.3s, box-shadow 0.3s`,
                    transform: isVisible ? undefined : 'translateY(1rem)'
                  }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      {Icon && <Icon className="h-6 w-6 text-primary" />}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground text-pretty">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500 pointer-events-none" />
                </div>
              )
            })}
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
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
      `}</style>
    </section>
  )
}