import Link from "next/link"
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacto" className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-serif text-2xl font-medium tracking-tight">
              Imagenia
            </Link>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Estudio de fotografía profesional dedicado a capturar la belleza en cada momento.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/imagenia02/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#servicios" className="text-muted-foreground hover:text-foreground transition-colors">
                  Fotos Carnet
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-muted-foreground hover:text-foreground transition-colors">
                  Revelado Fotográfico
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-muted-foreground hover:text-foreground transition-colors">
                  Ilustraciones Únicas
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Enlaces</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                <span className="text-muted-foreground">
                  Calle Utrera, 20<br />
                  41530 Morón de la Frontera, Sevilla
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground shrink-0" />
                <a href="tel:+34686825238" className="text-muted-foreground hover:text-foreground transition-colors">
                  +34 686 825 238
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground shrink-0" />
                <a href="mailto:imageniaimprime@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  imageniaimprime@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Imagenia. Todos los derechos reservados. | Diseño y desarrollo por{" "}
            <a
              href="https://github.com/MarioAlvn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors font-medium underline-offset-4 hover:underline">
              Mario Alv.
            </a>
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
