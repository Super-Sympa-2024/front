import { createLazyFileRoute } from '@tanstack/react-router'

import '@assets/credits.css'
import poissonbanal from '@assets/poissonbanal.webp'
import anguille from '@assets/anguille.webp'
import blobfish from '@assets/blobfish.webp'

import { motion } from 'framer-motion'

export const Route = createLazyFileRoute('/credits/')({
  component: AbyssesRouteComponent
})

export default function AbyssesRouteComponent() {
  const zones = [
    {
      id: 1,
      name: 'Zone Épipélagique',
      description:
        'Bienvenue dans les eaux superficielles !, ici le projet prend forme, les super sympa choisissent leurs défis pour la nuit !',
      bg: '#7dd3fc',
      img: poissonbanal
    },
    {
      id: 2,
      name: 'Zone Mésopélagique',
      description:
        'Ici, la lumière commence à disparaître... et les super sympa se répartissent les tâches, ça y est, le travail peut commencer.',
      bg: '#2563eb',
      img: anguille
    },
    {
      id: 3,
      name: 'Zone Bathypélagique',
      description:
        "Un royaume de ténèbres et de mystères, mais aussi de développement et de dessin, des flots d'idées traversent l'océan de super sympa.",
      bg: '#1e40af',
      img: blobfish
    },
    {
      id: 4,
      name: 'Zone Abyssale',
      description:
        "La vie ici est rare et étrange, tout comme l'énergie. Il se fait tard, et les super sympa doivent avancer malgré tout.",
      bg: '#1e3a8a',
      img: 'creature.png' // Assurez-vous que cette image existe dans le dossier assets
    },
    {
      id: 5,
      name: 'Zone Hadale',
      description:
        "Les fosses océaniques : la dernière frontière. Il ne leur reste plus qu'à tout merger et contempler leur site. Les super sympa peuvent se reposer, la nuit a été longue.",
      bg: '#111827',
      img: 'deepsea-creature.png' // Assurez-vous que cette image existe dans le dossier assets
    }
  ]

  return (
    <>
      {/* Sections principales */}
      <div className='w-full min-h-screen bg-abysses-gradient overflow-hidden'>
        {zones.map((zone, index) => {
          const nextZone = zones[index + 1]
          const backgroundStyle = nextZone
            ? {
                background: `linear-gradient(to bottom, ${zone.bg}, ${nextZone.bg})`
              }
            : { backgroundColor: zone.bg }

          return (
            <motion.section
              key={zone.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={backgroundStyle}
              className='relative h-screen flex flex-col justify-center items-center text-white'
            >
              {/* Bulles animées */}
              <div className='absolute inset-0 overflow-hidden'>
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className='absolute bottom-0 w-2 h-2 bg-white rounded-full bubble'
                    style={{
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 5}s`,
                      animationDuration: `${Math.random() * 3 + 2}s`
                    }}
                  />
                ))}
              </div>

              {/* Contenu principal */}
              <h1 className='text-4xl font-bold mb-4'>{zone.name}</h1>
              <p className='text-xl mb-6 text-center px-4'>
                {zone.description}
              </p>
              <img
                src={zone.img}  // Utilisation de la valeur dynamique pour l'image
                alt={zone.name}
                className='w-32 h-32 animate-float'
              />
            </motion.section>
          )
        })}
      </div>
    </>
  )
}
