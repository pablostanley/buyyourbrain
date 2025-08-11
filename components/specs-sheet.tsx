import type React from "react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { CheckCircle } from "lucide-react"
import type { Brain } from "@/app/types"

interface SpecsSheetProps {
  children: React.ReactNode
  brain: Brain
}

export function SpecsSheet({ children, brain }: SpecsSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{brain.name}</SheetTitle>
          <SheetDescription>
            These specs are entirely made up for your amusement. Please do not attempt to install.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <ul className="space-y-3">
            {brain.specs.map((spec, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  )
}
