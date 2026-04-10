"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="relative h-24 lg:h-28 w-88 lg:w-96">
            <Image
              src="/images/logo-imagenia.png"
              alt="Imagenia - Fotografía e Impresión"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#servicios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Servicios
            </Link>
            <Link href="#testimonios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Testimonios
            </Link>
            <Link href="#contacto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contacto
            </Link>
            <Button className="rounded-full px-6" asChild>
              <a href="https://maps.app.goo.gl/vbgk4Tef6tAj3M57A" target="_blank" rel="noopener noreferrer">Visítanos</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="#servicios"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="#testimonios"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonios
              </Link>
              <Link
                href="#contacto"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <Button className="rounded-full px-6 w-fit" asChild>
                <a href="https://maps.app.goo.gl/vbgk4Tef6tAj3M57A" target="_blank" rel="noopener noreferrer">Visítanos</a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
