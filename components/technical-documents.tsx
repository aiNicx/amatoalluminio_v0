'use client'

import { ChevronDown } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { useReducedMotion } from './hooks/useReducedMotion'

const documents = [
  {
    title: "Installazione",
    items: ["Guide di installazione", "Video", "Specifiche tecniche"]
  },
  {
    title: "Pianificazione",
    items: ["Strumenti di pianificazione", "Linee guida di progettazione", "Checklist di progetto"]
  },
  {
    title: "Assistenza e supporto",
    items: ["Supporto tecnico", "Informazioni sulla garanzia", "Guide alla manutenzione"]
  }
]

export default function TechnicalDocuments() {
  const [openSection, setOpenSection] = useState<number | null>(null)
  const [contentHeight, setContentHeight] = useState<{[key: number]: number}>({});
  const contentRefs = useRef<{[key: number]: HTMLDivElement | null}>({})

  return (
    <section className="bg-[rgb(0,146,128)] py-12 lg:py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="mb-8 text-2xl font-medium text-white">Documentazione tecnica</h2>
        <div className="grid gap-4">
          {documents.map((doc, index) => (
            <div key={index} className="rounded-lg bg-white">
              <button
                className="flex w-full items-center justify-between p-4 text-left font-medium"
                onClick={() => setOpenSection(openSection === index ? null : index)}
              >
                {doc.title}
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    openSection === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-[height] duration-300 ease-in-out ${openSection === index ? 'border-t' : ''}`}
                style={{
                  height: openSection === index ? `${contentHeight[index]}px` : '0',
                }}
                role="region"
                aria-labelledby={`accordion-header-${index}`}
                aria-hidden={openSection !== index}
              >
                <div 
                  ref={el => contentRefs.current[index] = el}
                  className="px-4 py-3"
                >
                  <ul className="space-y-2">
                    {doc.items.map((item, idx) => (
                      <li key={idx}>
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-[rgb(0,146,128)]"
                          role="menuitem"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

  // Effect to measure and update content heights
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Skip height calculations if user prefers reduced motion
    if (prefersReducedMotion) return;
    
    const updateHeight = () => {
      const newHeights: {[key: number]: number} = {};
      documents.forEach((_, index) => {
        if (contentRefs.current[index]) {
          newHeights[index] = contentRefs.current[index]?.scrollHeight || 0;
        }
      });
      setContentHeight(newHeights);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);
}