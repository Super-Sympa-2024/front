import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/credits/')({
  component: AbyssesRouteComponent,
})

import { motion } from 'framer-motion'

export default function AbyssesRouteComponent() {
    const zones = [
      { id: 1, name: "Zone Épipélagique", description: "Bienvenue dans les eaux superficielles !", bg: "bg-blue-300", img: "fish1.png" },
      { id: 2, name: "Zone Mésopélagique", description: "Ici, la lumière commence à disparaître...", bg: "bg-blue-600", img: "jellyfish.png" },
      { id: 3, name: "Zone Bathypélagique", description: "Un royaume de ténèbres et de mystères.", bg: "bg-blue-800", img: "anglerfish.png" },
      { id: 4, name: "Zone Abyssale", description: "La vie ici est rare et étrange.", bg: "bg-blue-900", img: "creature.png" },
      { id: 5, name: "Zone Hadale", description: "Les fosses océaniques : la dernière frontière.", bg: "bg-blue-999", img: "deepsea-creature.png" },
    ]
  
    return (
      <>
      <div className = "logoSuperSympa">
        <img src="/assets/logo.png" alt="logo" className="w-32 h-32 animate-float" />
    </div>
      <div className="w-full min-h-screen bg-abysses-gradient overflow-hidden">
        {zones.map((zone) => (
          <motion.section
            key={zone.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`relative h-screen flex flex-col justify-center items-center text-white ${zone.bg}`}
          >
            {/* Bulles animées */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bottom-0 w-2 h-2 bg-white rounded-full animate-bubble"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${Math.random() * 3 + 2}s`,
                  }}
                />
              ))}
            </div>
  
            {/* Contenu principal */}
            <h1 className="text-4xl font-bold mb-4">{zone.name}</h1>
            <p className="text-xl mb-6 text-center px-4">{zone.description}</p>
            <img src={`/assets/${zone.img}`} alt={zone.name} className="w-32 h-32 animate-float" />
          </motion.section>
        ))}
      </div>
      </>  
    )
  }
  