'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"
import { useState } from "react"

const articles = [
  {
    image: "/placeholder.svg?height=200&width=300",
    title: "Costruire case migliori",
    description: "Scopri le moderne tecniche di installazione delle finestre",
    date: "15 gen 2024"
  },
  {
    image: "/placeholder.svg?height=200&width=300",
    title: "Guida all'installazione",
    description: "Processo di installazione passo-passo",
    date: "10 gen 2024"
  },
  {
    image: "/placeholder.svg?height=200&width=300",
    title: "Innovazione di prodotto",
    description: "Le ultime tecnologie per finestre",
    date: "5 gen 2024"
  },
  {
    image: "/placeholder.svg?height=200&width=300",
    title: "Focus sulla sostenibilità",
    description: "Pratiche di edilizia sostenibile",
    date: "30 dic 2023"
  }
]

export default function ProViews() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const maxSlide = articles.length - 3

  const nextSlide = () => {
    setCurrentSlide(current => Math.min(current + 1, maxSlide))
  }

  const prevSlide = () => {
    setCurrentSlide(current => Math.max(current - 1, 0))
  }

  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-medium">Approfondimenti</h2>
          <div className="flex gap-2">
            <button
              className={`rounded-full border p-2 transition-colors hover:bg-gray-50 ${
                currentSlide === 0 ? 'opacity-50' : ''
              }`}
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              className={`rounded-full border p-2 transition-colors hover:bg-gray-50 ${
                currentSlide === maxSlide ? 'opacity-50' : ''
              }`}
              onClick={nextSlide}
              disabled={currentSlide === maxSlide}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}
          >
            {articles.map((article, index) => (
              <div
                key={index}
                className="min-w-[33.33%] flex-shrink-0 px-3"
              >
                <div className="group cursor-pointer overflow-hidden rounded-lg border">
                  <div className="relative h-48">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="mb-2 text-sm text-gray-500">{article.date}</p>
                    <h3 className="mb-2 text-lg font-medium">{article.title}</h3>
                    <p className="text-sm text-gray-600">{article.description}</p>
                    <button className="mt-4 text-sm font-medium text-[rgb(0,146,128)] hover:text-[rgb(0,116,100)]">
                      Leggi di più
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

