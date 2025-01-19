'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, User, Phone } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [favorites] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top utility nav */}
      <div className="bg-[rgb(0,146,128)] px-4 py-2 text-white">
        <div className="container mx-auto flex items-center justify-end gap-6 text-sm">
          <Link href="#" className="flex items-center gap-2 hover:text-gray-300 transition-colors duration-300">
            <User className="h-5 w-5" />
            Accedi
          </Link>
          <Link href="tel:1-800-426-4261" className="flex items-center gap-2 hover:text-gray-300 transition-colors duration-300">
            <Phone className="h-5 w-5" />
            1-800-426-4261
          </Link>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-black text-white px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Amato Alluminio - Serramenti e infissi di qualità"
              width={180}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex lg:items-center lg:gap-8">
            <Link href="#" className="text-sm font-medium hover:text-[rgb(0,146,128)] transition-colors duration-300">
              Finestre e porte
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-[rgb(0,146,128)] transition-colors duration-300">
              Ispirazione
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-[rgb(0,146,128)] transition-colors duration-300">
              Ricambi e supporto
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-[rgb(0,146,128)] transition-colors duration-300">
              Documentazione tecnica
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-[rgb(0,146,128)] transition-colors duration-300">
              Per i professionisti
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-[rgb(0,146,128)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[rgb(0,116,100)] md:px-6">
              Richiedi un preventivo
            </button>
            <button
              className="lg:hidden p-2 hover:bg-gray-700 rounded-md transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden bg-white transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-96' : 'max-h-0'
      }`}>
        <nav className="flex flex-col items-center gap-4 py-4">
          <Link href="#" className="text-sm font-medium text-black hover:text-[rgb(0,146,128)] transition-colors duration-300">
            Finestre e porte
          </Link>
          <Link href="#" className="text-sm font-medium text-black hover:text-[rgb(0,146,128)] transition-colors duration-300">
            Ispirazione
          </Link>
          <Link href="#" className="text-sm font-medium text-black hover:text-[rgb(0,146,128)] transition-colors duration-300">
            Ricambi e supporto
          </Link>
          <Link href="#" className="text-sm font-medium text-black hover:text-[rgb(0,146,128)] transition-colors duration-300">
            Documentazione tecnica
          </Link>
          <Link href="#" className="text-sm font-medium text-black hover:text-[rgb(0,146,128)] transition-colors duration-300">
            Per i professionisti
          </Link>
        </nav>
      </div>
    </header>
  )
}

