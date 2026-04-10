import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const googleReviews = [
  {
    quote: "Buen trato y buen servicio",
    author: "Juan Antonio Ponce",
    rating: 5,
    timeAgo: "hace 4 años",
  },
  {
    quote: "Todo bien",
    author: "Angelica Ornia",
    rating: 5,
    timeAgo: "hace 6 meses",
  },
  {
    quote: "Servicio rápido, limpio, de alta calidad y siempre priorizando al cliente. Además, cuenta con muy buena accesibilidad para personas en silla de ruedas. 10/10",
    author: "Mario Álvarez ",
    rating: 5,
    timeAgo: "hace 2 años",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"
            }`}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonios" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Reseñas de Google
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-balance">
            Lo que Dicen
            <br />
            <span className="italic">Nuestros Clientes</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-lg font-medium">4.9</span>
            <span className="text-muted-foreground">de 5 estrellas</span>
          </div>
          <a
            href="https://www.google.com/maps/place/Imagenia,+fotograf%C3%ADa+e+impresi%C3%B3n/@37.1210817,-5.457256,17z/data=!4m8!3m7!1s0xd0d617329daf75f:0x403dcd27f6653408!8m2!3d37.1210817!4d-5.457256!9m1!1b1!16s%2Fg%2F11h1vb2zvg?entry=ttu&g_ep=EgoyMDI2MDQwNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-sm text-accent hover:underline"
          >
            Ver todas las reseñas en Google Maps
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {googleReviews.map((review, index) => (
            <Card
              key={index}
              className="bg-card border-0 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <StarRating rating={review.rating} />
                  <span className="text-xs text-muted-foreground">{review.timeAgo}</span>
                </div>
                <blockquote className="text-foreground leading-relaxed mb-4 text-sm">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-medium text-sm">
                    {review.author.charAt(0)}
                  </div>
                  <p className="font-medium text-foreground text-sm">
                    {review.author}
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
