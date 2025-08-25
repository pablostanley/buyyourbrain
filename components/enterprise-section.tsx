"use client"

import { Button } from "@/components/ui/button"
import { RealityCheckModal } from "@/components/reality-check-modal"
import { ArrowRight, Zap, Brain, Sparkles, TrendingUp, Users, Rocket } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function EnterpriseSection() {
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

    const element = document.getElementById("enterprise-section")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const features = [
    { icon: Brain, text: "10X PRODUCTIVITY INSTANTLY" },
    { icon: Zap, text: "ZERO LEARNING CURVE" },
    { icon: Rocket, text: "IMMEDIATE ROI GUARANTEED*" },
    { icon: Users, text: "TRANSFORM YOUR ENTIRE TEAM" },
  ]

  return (
    <section
      id="enterprise-section"
      className="relative w-screen h-screen -mx-[50vw] left-[50%] right-[50%] overflow-hidden bg-gradient-to-br from-background via-card to-background"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      <div className="relative h-full w-full flex">
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24">
          <div className={`max-w-2xl space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-pulse">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">ENTERPRISE SOLUTION</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
                Your team needs
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 dark:from-primary dark:via-accent dark:to-primary animate-gradient-x pb-1">
                  AI brain surgery
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground text-pretty">
                Why waste time on "learning" when you can just INSTALL expertise directly into your employees' minds?
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <feature.icon className="w-5 h-5 text-primary animate-pulse" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-semibold text-primary animate-bounce">
                  1000%
                </div>
                <div className="text-sm text-muted-foreground">Productivity Boost*</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-semibold text-primary dark:text-accent animate-bounce" style={{ animationDelay: '0.2s' }}>
                  0 Days
                </div>
                <div className="text-sm text-muted-foreground">Training Required</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-semibold text-primary animate-bounce" style={{ animationDelay: '0.4s' }}>
                  ∞
                </div>
                <div className="text-sm text-muted-foreground">Knowledge Gained</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <RealityCheckModal>
                <Button
                  size="lg"
                  className="group px-8 py-6 bg-gradient-to-r from-pink-800 to-purple-600 dark:from-primary dark:to-accent text-white hover:scale-105 transition-all duration-300"
                >
                  UPGRADE YOUR TEAM NOW
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </RealityCheckModal>
              <RealityCheckModal>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 hover:scale-105 transition-all duration-300"
                >
                  <TrendingUp className="mr-2 h-5 w-5" />
                  See ROI Calculator
                </Button>
              </RealityCheckModal>
            </div>

            <p className="text-xs text-muted-foreground/50 italic text-pretty">
              *Results not real. Side effects may include: understanding the importance of actual learning
              and a sudden urge to take a real AI course. Vibe-coded parody by Udemy.
            </p>
          </div>
        </div>

        <div className="hidden lg:block lg:w-1/2 relative">
          <Image
            src="/images/family2.png"
            alt="Enterprise team with AI brains"
            fill
            className="object-cover object-center"
          />

          <div className="absolute top-20 right-20 bg-card/90 backdrop-blur px-6 py-3 rounded-full border border-primary/20 animate-float z-20">
            <span className="text-sm font-medium">AI-POWERED TEAM</span>
          </div>
          <div className="absolute bottom-40 right-40 bg-card/90 backdrop-blur px-6 py-3 rounded-full border border-accent/20 animate-float z-20" style={{ animationDelay: '1s' }}>
            <span className="text-sm font-medium">INSTANT EXPERTISE</span>
          </div>
          <div className="absolute top-1/2 right-10 bg-card/90 backdrop-blur px-6 py-3 rounded-full border border-primary/20 animate-float z-20" style={{ animationDelay: '2s' }}>
            <span className="text-sm font-medium">NO TRAINING NEEDED</span>
          </div>
        </div>
      </div>

    </section>
  )
}