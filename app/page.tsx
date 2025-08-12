import { Header } from "@/components/header"
import { HeroJuggling } from "@/components/hero-juggling"
import { ProductGridSpotlight } from "@/components/product-grid-spotlight"
import { EnterpriseSection } from "@/components/enterprise-section"
import { Testimonials } from "@/components/testimonials"
import { WhyNotSection } from "@/components/why-not-section"
import { Faq } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="flex-1 pt-16">
        <HeroJuggling />
        <ProductGridSpotlight />
        <EnterpriseSection />
        <Testimonials />
        <WhyNotSection />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
