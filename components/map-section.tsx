"use client";
import Image from "next/image"
import AnimationWrapper from "./shared/AnimationWrapper"

export default function MapSection() {
  return (
    <section className="bg-[rgb(0,146,128)] py-12 text-white lg:py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <AnimationWrapper animation="slide-up" duration={1}>
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-medium">Conta su di noi, perché i tuoi clienti contano su di te.</h2>
            <button className="rounded-full bg-white px-6 py-2 text-sm font-medium text-[rgb(0,146,128)] transition-colors hover:bg-gray-100">
              Diventa certificato
            </button>
          </div>
        </AnimationWrapper>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <AnimationWrapper animation="slide-in" duration={1} delay={0.3}>
            <div className="relative h-[400px]">
              <Image
                src="/images/GSG_4765.jpg"
                alt="Mappa della nostra copertura servizi in Italia"
                fill
                className="object-cover rounded-lg"
                quality={90}
                priority
              />
            </div>
          </AnimationWrapper>
          <AnimationWrapper animation="slide-in" duration={1} delay={0.5}>
            <div>
              <h2 className="mb-4 text-3xl font-medium">Siamo qui per te</h2>
              <p className="mb-6">
                Trova i fornitori di servizi Andersen nella tua zona pronti ad aiutarti con il tuo progetto.
              </p>
              <button className="rounded-full bg-white px-6 py-2 text-sm font-medium text-[rgb(0,146,128)] transition-colors hover:bg-gray-100">
                Trova un professionista vicino a te
              </button>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  )
}