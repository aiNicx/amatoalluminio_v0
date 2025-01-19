import Image from "next/image"

export default function TestingSection() {
  return (
    <section className="bg-black py-12 lg:py-16">
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
              src="/placeholder.svg?height=300&width=500"
              alt="Window testing process"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

