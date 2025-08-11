import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RealityCheckModal } from "@/components/reality-check-modal"
import { SpecsSheet } from "@/components/specs-sheet"
import type { Brain } from "@/app/types"

interface BrainCardProps {
  brain: Brain
}

export function BrainCard({ brain }: BrainCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="aspect-square relative w-full overflow-hidden rounded-lg">
          <Image
            src={brain.image || "/placeholder.svg"}
            alt={`Parody image of ${brain.name}`}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-2">
        <CardTitle>{brain.name}</CardTitle>
        <p className="text-muted-foreground">{brain.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <RealityCheckModal>
          <Button variant="outline">Poke brain</Button>
        </RealityCheckModal>
        <SpecsSheet brain={brain}>
          <Button>Ridiculous specs</Button>
        </SpecsSheet>
      </CardFooter>
    </Card>
  )
}
