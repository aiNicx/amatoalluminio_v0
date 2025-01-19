import { Building2, HardHat, Wrench, Building, Store } from 'lucide-react'
import Link from "next/link"

const categories = [
  { name: "Architetti", icon: Building2 },
  { name: "Costruttori", icon: HardHat },
  { name: "Appaltatori", icon: Wrench },
  { name: "Sviluppatori commerciali", icon: Building },
  { name: "Rivenditori", icon: Store },
]

export default function Navigation() {
  return (
    <nav className="border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 lg:px-8">
        <ul className="flex flex-wrap items-center justify-between gap-4">
          {categories.map((category) => (
            <li key={category.name}>
              <Link
                href="#"
                className="flex items-center gap-2 text-sm font-medium text-gray-700 transition-all duration-200 ease-in-out hover:text-[rgb(0,146,128)] hover:scale-105 focus:text-[rgb(0,146,128)] focus:scale-105 focus:outline-none"
              >
                <category.icon className="h-5 w-5" />
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

