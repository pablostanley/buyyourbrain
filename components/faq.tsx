"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { config } from "@/app/config"
import Image from "next/image"
import { useEffect, useState } from "react"
import {
  Brain,
  Zap,
  Clock,
  DollarSign,
  Shield,
  HelpCircle,
  Sparkles,
  Rocket,
  AlertTriangle,
  Coffee
} from "lucide-react"

export function Faq() {
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

    const element = document.getElementById("faq-section")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  // Map icons to FAQ questions based on keywords
  const getIcon = (question: string) => {
    const lowerQuestion = question.toLowerCase()
    if (lowerQuestion.includes('real')) return AlertTriangle
    if (lowerQuestion.includes('work')) return Zap
    if (lowerQuestion.includes('side effects')) return Shield
    if (lowerQuestion.includes('install')) return Brain
    if (lowerQuestion.includes('refund')) return DollarSign
    if (lowerQuestion.includes('how long')) return Clock
    if (lowerQuestion.includes('upgrade')) return Rocket
    if (lowerQuestion.includes('learn')) return Coffee
    return HelpCircle
  }

  return (
    <section id="faq-section" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />

      <div className="container mx-auto relative p-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - FAQ content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">FREQUENTLY ASKED</span>
              </div>
              <h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl">
                Questions About Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Brain Upgrade
                </span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Everything you need to know about installing instant expertise (spoiler: it's not real)
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {config.faq.map((item, index) => {
                const Icon = getIcon(item.question)
                return (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className={`border border-border rounded-lg px-6 bg-card hover:bg-card/80 transition-all duration-500 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <AccordionTrigger className="hover:no-underline group py-6 cursor-pointer">
                      <div className="flex items-center gap-4 text-left">
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium text-base">{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 pl-16 pr-4 text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>

            {/* Fun fact card - moved below questions */}
            <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <div className="flex items-start gap-3">
                <Brain className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="space-y-2">
                  <p className="font-medium">Fun Fact</p>
                  <p className="text-sm text-muted-foreground">
                    The human brain processes coffee faster than AI knowledge downloads.
                    That's why our product doesn't actually work!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Coffee drinking image */}
          <div className={`relative lg:sticky lg:top-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
            <div className="relative rounded-3xl overflow-hidden border border-border bg-card p-2">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/drinking-coffee-1.png"
                  alt="Person with brain helmet drinking coffee"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />

                {/* Floating badges */}
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur px-4 py-2 rounded-full border border-primary/20 animate-float">
                  <span className="text-sm font-medium flex items-center gap-2">
                    <Coffee className="w-4 h-4" />
                    BRAIN LOADING...
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur px-4 py-2 rounded-full border border-accent/20 animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-sm font-medium">98% COMPLETE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}