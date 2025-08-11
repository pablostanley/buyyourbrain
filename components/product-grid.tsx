import { config } from "@/app/config"
import { BrainCard } from "@/components/brain-card"

export function ProductGrid() {
  return (
    <section id="product-grid" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {config.brains.map((brain) => (
            <BrainCard key={brain.id} brain={brain} />
          ))}
        </div>
      </div>
    </section>
  )
}
