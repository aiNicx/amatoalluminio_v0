"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

export default function TestingSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-black py-12 lg:py-16 opacity-0 transition-opacity duration-1000 ease-out"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-medium text-white">
              Come vengono testate le nostre finestre
            </h2>
            <p className="mb-6 text-gray-400">
              Il nostro rigoroso processo di test garantisce i più alti standard di qualità e durata per tutti i nostri prodotti.
            </p>
            <button className="border-[rgb(0,146,128)] text-[rgb(0,146,128)] hover:bg-[rgb(0,146,128)] hover:text-white">
              Scopri di più
            </button>
          </div>
          <div className="relative h-[300px] overflow-hidden rounded-lg">
            <Image
              src="/images/GSG_4854.jpg"
              alt="Detailed window testing process showing quality control measures in our facility"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}