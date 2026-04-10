import { Card, CardContent } from "@/components/ui/card"
import { User, Image, Palette } from "lucide-react"

const services = [
  {
    icon: User,
    title: "Fotos Carnet",
    description: "Fotos de carnet para DNI, pasaporte, visados y cualquier documento oficial. Servicio rápido con entrega en el momento.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000",
  },
  {
    icon: Image,
    title: "Revelado Fotográfico",
    description: "Revelamos tus fotos digitales en papel de alta calidad. Diferentes formatos y acabados disponibles.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000",
  },
  {
    icon: Palette,
    title: "Ilustraciones Únicas",
    description: "Transformamos tus fotos en ilustraciones artísticas personalizadas. El regalo perfecto para personas, mascotas y momentos especiales.",
    image: "/images/ilustracion-perro.png",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Nuestros Servicios
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-balance">
            Creamos Imágenes que
            <br />
            <span className="italic">Cuentan Historias</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-none bg-card hover:shadow-xl transition-all duration-500"
            >
              <CardContent className="p-0">
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/30 transition-colors duration-500" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <service.icon className="h-8 w-8 text-primary-foreground mb-3" />
                    <h3 className="font-serif text-2xl lg:text-3xl font-medium text-primary-foreground mb-2">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6 lg:p-8">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
