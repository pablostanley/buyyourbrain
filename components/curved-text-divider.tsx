"use client"

import CurvedLoop from "@/components/ui/curved-loop"

export function CurvedTextDivider() {
  return (
    <section className="relative w-full -mt-16 mb-24 md:-mt-32 md:mb-40 bg-gradient-to-b from-background via-muted/20 to-background overflow-visible">
      <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:60px_60px]" />

      <CurvedLoop
        marqueeText="🧠 Why Think When You Can Install? ✦ Zero Effort Maximum Delusion ✦ Your Brain But Worse ✦ "
        speed={0.5}
        curveAmount={350}
        direction="left"
        interactive={true}
        className="fill-primary/20 dark:fill-primary/30 hover:fill-primary/40 transition-colors duration-500"
      />


    </section>
  )
}