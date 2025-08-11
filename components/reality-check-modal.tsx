import type React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { config } from "@/app/config"

interface RealityCheckModalProps {
  children: React.ReactNode
}

export function RealityCheckModal({ children }: RealityCheckModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Not for real. But your growth can be.</DialogTitle>
          <DialogDescription>
            You can’t buy skills. You earn them. Use AI—don’t outsource your thinking.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-col sm:flex-col sm:space-x-0 gap-2">
          <Button asChild size="lg">
            <Link href={config.udemyLinks.ai} target="_blank">
              Learn AI the right way
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href={config.udemyLinks.aiForDesigners} target="_blank">
              AI for Designers
            </Link>
          </Button>
          <p className="text-xs text-muted-foreground text-center pt-2">
            Parody site for a Udemy campaign. Nothing here is for sale.
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
