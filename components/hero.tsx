import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Hero() {
  return (
    <section className="relative h-[450px] w-full overflow-hidden">
      <div className="absolute inset-0 transform translate-y-[-10%] scale-110 transition-transform duration-1000 ease-out">
        <Image
          src="/images/hero.jpg"
          alt="Amato Alluminio workshop showcasing craftsmanship and expertise"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-black/50">
        <div 
          className="container mx-auto flex h-full flex-col justify-center px-6 text-white lg:px-8 opacity-0 animate-fadeIn"
          style={{
            animation: 'fadeIn 1s ease-out forwards',
          }}
        >
          <h1 
            className="max-w-2xl text-4xl font-medium leading-tight lg:text-5xl transform translate-y-4 opacity-0"
            style={{
              animation: 'slideUp 0.8s ease-out 0.2s forwards'
            }}
          >
            Costruiamo insieme.
          </h1>
          <p 
            className="mt-4 max-w-xl text-lg font-light opacity-0"
            style={{
              animation: 'slideUp 0.8s ease-out 0.4s forwards'
            }}
          >
            Siamo qui per supportare il tuo lavoro e migliorare la collaborazione con i clienti.
          </p>
        </div>
      </div>
    </section>
  )
}

// Add keyframe animations
const styles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

// Add styles to head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}