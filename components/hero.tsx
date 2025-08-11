"use client"

import { Button } from "@/components/ui/button"
import { RealityCheckModal } from "@/components/reality-check-modal"
import Image from "next/image"

export function Hero() {
  const scrollToGrid = () => {
    document.getElementById("product-grid")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40">
      <div className="container mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Skip the learning. Install a new brain.
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Designer, AI, or data—pretend to pop it in. Results not included.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" onClick={scrollToGrid}>
                Meet the brains
              </Button>
              <RealityCheckModal>
                <Button variant="secondary">
                  Is this real? (nope)
                </Button>
              </RealityCheckModal>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <Image
              src="/images/happy3.png"
              alt="A person with an exaggerated happy expression, representing the absurdity of instant brain upgrades"
              width={500}
              height={500}
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover animate-float"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-5xl font-semibold uppercase text-foreground/20 -rotate-12 select-none md:text-7xl">PARODY</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
