import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react'

const footerLinks = {
  "TROVA IL TIPO DI LAVORO": [
    "Catalogo prodotti",
    "Installazione",
    "Sostituzione",
    "Nuove costruzioni",
    "Commerciale",
    "Porte anti-tempesta"
  ],
  "SU ANDERSEN": [
    "La nostra azienda",
    "Lavora con noi",
    "Sala stampa",
    "Responsabilità aziendale",
    "Contattaci",
    "Privacy policy"
  ],
  "OTTENI AIUTO": [
    "Centro assistenza",
    "Supporto prodotto",
    "Servizio e ricambi",
    "Garanzia",
    "Trova un rivenditore",
    "Contattaci"
  ],
  "PER I PROFESSIONISTI": [
    "Architetti",
    "Costruttori",
    "Appaltatori",
    "Rivenditori",
    "Commerciale",
    "Negozio ricambi"
  ]
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 font-semibold uppercase">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 transition-colors duration-300 ease-in-out hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 md:flex-row">
          <div className="flex gap-4">
            <a href="#" aria-label="Visita la nostra pagina Facebook" className="transition-transform duration-300 ease-in-out hover:scale-110">
              <Facebook className="h-5 w-5 text-gray-400 transition-colors duration-300 ease-in-out hover:text-white" />
            </a>
            <a href="#" aria-label="Seguici su Twitter" className="transition-transform duration-300 ease-in-out hover:scale-110">
              <Twitter className="h-5 w-5 text-gray-400 transition-colors duration-300 ease-in-out hover:text-white" />
            </a>
            <a href="#" aria-label="Seguici su Instagram" className="transition-transform duration-300 ease-in-out hover:scale-110">
              <Instagram className="h-5 w-5 text-gray-400 transition-colors duration-300 ease-in-out hover:text-white" />
            </a>
            <a href="#" aria-label="Visita il nostro canale Youtube" className="transition-transform duration-300 ease-in-out hover:scale-110">
              <Youtube className="h-5 w-5 text-gray-400 transition-colors duration-300 ease-in-out hover:text-white" />
            </a>
            <a href="#" aria-label="Seguici su LinkedIn" className="transition-transform duration-300 ease-in-out hover:scale-110">
              <Linkedin className="h-5 w-5 text-gray-400 transition-colors duration-300 ease-in-out hover:text-white" />
            </a>
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Andersen Corporation. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  )
}

