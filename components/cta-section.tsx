import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-primary-foreground">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/60 mb-6">
          Ven a Vernos
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6 text-balance">
          Estamos en el Centro
          <br />
          <span className="italic">de Morón</span>
        </h2>
        <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          A tan solo 2 minutos de la Comisaría de Policía, los más cercanos.
        </p>
        <Button
          size="lg"
          className="rounded-full px-10 py-6 text-base bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
          asChild
        >
          <a href="https://www.google.com/maps/dir/Imagenia,+fotograf%C3%ADa+e+impresi%C3%B3n,+C.+Utrera,+20,+41530+Mor%C3%B3n+de+la+Frontera,+Sevilla/Comisaria+Polic%C3%ADa+Nacional,+C.+la+Carrera,+18,+41530+Mor%C3%B3n+de+la+Frontera,+Sevilla/@37.1212446,-5.458897,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0xd0d617329daf75f:0x403dcd27f6653408!2m2!1d-5.457256!2d37.1210817!1m5!1m1!1s0xd0d610cfd0b3edf:0xd9bd9faff461ea21!2m2!1d-5.4554234!2d37.1213238?entry=ttu&g_ep=EgoyMDI2MDQwNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            Cómo Llegar
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  )
}
