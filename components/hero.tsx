export default function Hero() {
  return (
    <section className="relative h-[450px] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto flex h-full flex-col justify-center px-6 text-white lg:px-8">
            <h1 className="max-w-2xl text-4xl font-medium leading-tight lg:text-5xl">
              Costruiamo insieme.
            </h1>
            <p className="mt-4 max-w-xl text-lg font-light opacity-90">
              Siamo qui per supportare il tuo lavoro e migliorare la collaborazione con i clienti.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

