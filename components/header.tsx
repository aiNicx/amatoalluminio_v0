'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Search, Heart, MapPin, ExternalLink } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [favorites] = useState(0)

  return (
    <header className="w-full">
      {/* Top utility nav */}
      <div className="bg-black px-4 py-2 text-white">
        <div className="container mx-auto flex flex-wrap items-center justify-end gap-4 text-sm">
          <Link href="#" className="flex items-center gap-1 hover:text-gray-300">
            <MapPin className="h-4 w-4" />
            Dove acquistare
          </Link>
          <Link href="#" className="flex items-center gap-1 hover:text-gray-300">
            Trova un appaltatore
            <ExternalLink className="h-4 w-4" />
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Diventa un appaltatore certificato
          </Link>
          <Link href="#" className="flex items-center gap-1 hover:text-gray-300">
            <Heart className="h-4 w-4" />
            I miei preferiti ({favorites})
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Contattaci
          </Link>
          <Link href="tel:1-800-426-4261" className="hover:text-gray-300">
            1-800-426-4261
          </Link>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex lg:items-center lg:gap-8">
            <Link href="#" className="text-sm font-medium hover:text-[rgb(0,146,128)]">
              Finestre e porte
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-[rgb(0,146,128)]">
              Ispirazione
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-[rgb(0,146,128)]">
              Ricambi e supporto
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-[rgb(0,146,128)]">
              Documentazione tecnica
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-[rgb(0,146,128)]">
              Per i professionisti
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="rounded-full bg-[rgb(0,146,128)] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[rgb(0,116,100)]">
              Richiedi un preventivo
            </button>
            <button className="rounded-full p-2 hover:bg-gray-100">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

