import type React from "react"
import { config } from "@/app/config"
import { Award, Repeat, Wand } from "lucide-react"

const icons: { [key: string]: React.ElementType } = {
  Award,
  Repeat,
  Wand,
}

export function WhyNotSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl">Why An Artificial Fake Brain?</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-pretty">
              Because real growth comes from delegating your intelligence. Installing, not learning.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16 mt-12">
          {config.whyNot.map((item) => {
            const Icon = icons[item.icon]
            return (
              <div key={item.title} className="grid gap-1 text-center">
                <div className="flex justify-center items-center mb-2">
                  {Icon && <Icon className="h-8 w-8 text-primary" />}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
