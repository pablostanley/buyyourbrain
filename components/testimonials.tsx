"use client"

import Image from "next/image"
import { Star, Brain, Zap } from "lucide-react"
import { useEffect, useState } from "react"

export function Testimonials() {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const testimonials = [
    {
      image: "/images/testimonial1.png",
      name: "Sarah Chen",
      role: "Former Human",
      quote: "I haven't had an original thought since installing my AI brain. It's liberating! Why think when the algorithm does it better?",
      rating: 5
    },
    {
      image: "/images/testimonial2.png", 
      name: "Marcus Johnson",
      role: "Ex-Creative Director",
      quote: "My AI brain generates 1000 ideas per second. They're all terrible, but the quantity is impressive. I've forgotten what creativity feels like.",
      rating: 5
    },
    {
      image: "/images/testimonial3.png",
      name: "Emily Rodriguez",
      role: "Reformed Thinker",
      quote: "I used to waste hours 'learning' and 'growing'. Now my AI brain just knows everything instantly. My personality is gone but my productivity is through the roof!",
      rating: 5
    },
    {
      image: "/images/testimonial4.png",
      name: "David Kim",
      role: "Consciousness Optional",
      quote: "The best part about my AI brain? I can finally argue any position with confidence, even if I understand nothing. Especially if I understand nothing.",
      rating: 5
    },
    {
      image: "/images/testimonial5.png",
      name: "Lisa Thompson",
      role: "Thought Outsourcer",
      quote: "My children don't recognize me anymore, but my LinkedIn engagement is up 2000%. The AI brain was the best investment in becoming less human.",
      rating: 5
    },
    {
      image: "/images/family1.png",
      name: "The Johnsons",
      role: "Collective Intelligence",
      quote: "We bought AI brains for the whole family. Now we all think the same thoughts at the same time. Dinner conversations are incredibly efficient.",
      rating: 5
    },
    {
      image: "/images/moustache2.png",
      name: "Professor Whiskers",
      role: "Academic Automaton",
      quote: "I've published 47 papers this week. I haven't read any of them. My AI brain assures me they're groundbreaking. Who am I to argue?",
      rating: 5
    },
    {
      image: "/images/family2.png",
      name: "The Smiths",
      role: "Synchronized Family Unit",
      quote: "Our AI brains auto-update every night. We wake up with new personalities daily. Yesterday we were musicians, today we're data analysts!",
      rating: 5
    }
  ]

  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Brain className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">SATISFIED CUSTOMERS</span>
          </div>
          
          <h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl md:text-6xl">
            They've embraced the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 dark:from-primary dark:via-accent dark:to-primary">
              void
            </span>
          </h2>
          <p className="text-muted-foreground md:text-xl max-w-[700px] mx-auto text-pretty">
            Real* people who surrendered their consciousness for artificial intelligence. 
            <span className="text-xs block mt-2 italic">*Not real people</span>
          </p>
        </div>
      </div>

      <div className="md:hidden px-4 pb-4">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85vw] snap-center bg-gradient-to-br from-card to-card/50 backdrop-blur border border-border rounded-2xl overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                <div className="absolute top-4 left-4 p-2 bg-white/10 backdrop-blur rounded-full">
                  <Brain className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="p-5">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                <blockquote className="text-sm text-foreground/90 italic mb-4 text-pretty">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <Zap className="w-4 h-4 text-primary opacity-50" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-4">
          <p className="text-xs text-muted-foreground">← Swipe to see more →</p>
        </div>
      </div>

      <div className="hidden md:block relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-6 animate-marquee">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[600px] bg-gradient-to-br from-card to-card/50 backdrop-blur border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex h-full">
                <div className="relative w-1/2 h-[280px]">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
                  
                    <div className="absolute top-4 left-4 p-2 bg-white/10 backdrop-blur rounded-full">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="w-1/2 p-6 flex flex-col justify-between">
                    <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>

                    <blockquote className="text-foreground/90 italic flex-grow mb-4 text-pretty">
                    "{testimonial.quote}"
                  </blockquote>

                    <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <Zap className="w-5 h-5 text-primary opacity-50 group-hover:opacity-100 group-hover:animate-pulse transition-opacity" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-12">
        <div className="text-center">
          <p className="text-sm text-muted-foreground italic text-pretty">
            Join thousands* who've replaced their personalities with algorithms
            <span className="block text-xs mt-2">*Zero actual customers. Vibe-coded parody by Udemy.</span>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 80s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}