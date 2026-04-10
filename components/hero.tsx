import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070')",
        }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/80 mb-6">
          Tu tienda de fotografía en Morón de la Frontera
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-primary-foreground leading-tight mb-6 text-balance">
          Tus Recuerdos
          <br />
          <span className="italic">en Papel</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Fotos carnet al instante y revelados de la mejor calidad. Llevamos más de 10 años cuidando tus recuerdos.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-base bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
            asChild
          >
            <a href="#servicios">
              Nuestros Servicios
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-base bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
            asChild
          >
            <a href="https://maps.app.goo.gl/vbgk4Tef6tAj3M57A" target="_blank" rel="noopener noreferrer">Visítanos</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
