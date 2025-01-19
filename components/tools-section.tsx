import Image from "next/image"

const tools = [
  {
    title: "Strumenti architettonici",
    description: "Accedi a disegni CAD, contenuti BIM e altre risorse di progettazione.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Risorse per il dimensionamento",
    description: "Trova i prodotti giusti per i tuoi progetti con i nostri strumenti di dimensionamento.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Risorse per l'installazione",
    description: "Ottieni guide di installazione dettagliate e tutorial video.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Guide ai prodotti",
    description: "Sfoglia cataloghi prodotti e documentazione tecnica.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function ToolsSection() {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="mb-8 text-2xl font-medium">Strumenti per ogni progetto</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <div key={tool.title} className="group overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={tool.image || "/placeholder.svg"}
                  alt={tool.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-medium">{tool.title}</h3>
                <p className="mb-4 text-sm text-gray-600">{tool.description}</p>
                <button className="text-sm border-[rgb(0,146,128)] text-[rgb(0,146,128)] hover:bg-[rgb(0,146,128)] hover:text-white">
                  Vedi di più
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

