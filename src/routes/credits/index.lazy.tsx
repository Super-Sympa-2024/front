import { createLazyFileRoute } from '@tanstack/react-router'

import '@assets/credits.css'
import poissonbanal from '@assets/poissonbanal.webp'
import anguille from '@assets/anguille.webp'
import blobfish from '@assets/blobfish.webp'
import algue1 from '@assets/algue1.webp'
import algue2 from '@assets/algue2.webp'
import algue3 from '@assets/algue3.webp'
import alguebronzee from '@assets/alguebronzee.webp'
import gitclone from '@assets/gitclone.webp'
import overdose from '@assets/overdose.webp'
import valideparlastreet from '@assets/valideparlastreet.webp'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { listOrganizationMembersResponse } from '@models/OctokitResponseModel'
import { useGithubService } from '@services/githubService'

export const Route = createLazyFileRoute('/credits/')({
  component: AbyssesRouteComponent
})

export default function AbyssesRouteComponent() {
  const [organizationMembersData, setOrganizationMembersData] = useState<listOrganizationMembersResponse['data']>([])
  const [numberOfCommitsByUser, setNumberOfCommitsByUser] = useState<{
    number: number,
    login: string
  }[] | undefined>(undefined)

  const { getOrganizationMembers, getNumberOfCommitsByUser } = useGithubService()

  useEffect(() => {
    const fetchOrganizationMembers = async () => {
      try {
        const data = await getOrganizationMembers()
        setOrganizationMembersData(data)
      } catch (error) {
        console.error('Error fetching collaborators:', error)
      }
    }

    fetchOrganizationMembers()
  }, [])

  useEffect(() => {
    const fetchNumberOfCommitsByUser = async () => {
      const results = await Promise.all(organizationMembersData.map(async (organizationMember) => {
        try {
          const data = await getNumberOfCommitsByUser(organizationMember.login)
          return { number: data, login: organizationMember.login }
        } catch (error) {
          console.error('Error fetching commits:', error)
        }
      }))
      const filteredResults = results.filter((result): result is { number: number, login: string } => result !== null)
      setNumberOfCommitsByUser(filteredResults.length > 0 ? filteredResults : undefined)
    }

    fetchNumberOfCommitsByUser()
  }, [organizationMembersData])

  const zones = [{
    id: 1,
    name: 'Zone Épipélagique',
    description: 'Bienvenue dans les eaux superficielles !, ici le projet prend forme, les super sympa choisissent leurs défis pour la nuit !',
    bg: '#7dd3fc',
    img: poissonbanal
  }, {
    id: 2,
    name: 'Zone Mésopélagique',
    description: 'Ici, la lumière commence à disparaître... et les super sympa se répartissent les tâches, ça y est, le travail peut commencer.',
    bg: '#2563eb',
    img: anguille
  }, {
    id: 3,
    name: 'Zone Bathypélagique',
    description: 'Un royaume de ténèbres et de mystères, mais aussi de développement et de dessin, des flots d\'idées traversent l\'océan de super sympa.',
    bg: '#1e40af',
    img: blobfish
  }, {
    id: 4,
    name: 'Zone Abyssale',
    description: 'La vie ici est rare et étrange, tout comme l\'énergie. Il se fait tard, et les super sympa doivent avancer malgré tout.',
    bg: '#1e3a8a',
    img: blobfish
  }, {
    id: 5,
    name: 'Zone Hadale',
    description: 'Les fosses océaniques : la dernière frontière. Il ne leur reste plus qu\'à tout merger et contempler leur site. Les super sympa peuvent se reposer, la nuit a été longue.',
    bg: '#111827',
    img: anguille
  }]

  const getRandomPosition = () => ({
    top: `${Math.random() * 80}%`, left: `${Math.random() * 80}%`
  })

  return (<>
      <div className="w-full min-h-screen bg-abysses-gradient overflow-hidden">
        {zones.map((zone, index) => {
          const nextZone = zones[index + 1]
          const backgroundStyle = nextZone ? {
            background: `linear-gradient(to bottom, ${zone.bg}, ${nextZone.bg})`
          } : { backgroundColor: zone.bg }

          return (<motion.section
              key={zone.id}
              viewport={{ once: true }}
              style={backgroundStyle}
              className="relative h-screen flex flex-col justify-center items-center text-white"
            >
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (<div
                    key={i}
                    className="absolute bottom-0 w-2 h-2 bg-white rounded-full bubble"
                    style={{
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 5}s`,
                      animationDuration: `${Math.random() * 3 + 2}s`
                    }}
                  />))}
              </div>

              <h1 className="text-4xl font-bold mb-4">{zone.name}</h1>
              <p className="text-xl mb-6 text-center px-4">
                {zone.description}
              </p>

              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((_, fishIndex) => (<img
                  key={fishIndex}
                  src={zone.img}
                  alt={`Fish ${fishIndex + 1}`}
                  className="absolute w-20 h-20 float"
                  style={getRandomPosition()}
                />))}
            </motion.section>)
        })}

        <motion.section
          key="zone3"
          style={{ background: `linear-gradient(to bottom, #111827, #080b13)` }}
          className="relative h-screen flex flex-col justify-center items-center text-white"
        >
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (<div
              key={i}
              className="absolute bottom-0 w-2 h-2 bg-white rounded-full bubble"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />))}
          </div>

          <div className="flex flex-wrap justify-center items-center relative">
            <img className="size-96" src={gitclone} />
            <img className="size-96" src={valideparlastreet} />
            <img className="size-96" src={overdose} />
          </div>

            <div className="flex flex-wrap justify-center items-center relative">
              {organizationMembersData.length > 0 ? (organizationMembersData.map((organizationMembers) => {
                const commits = numberOfCommitsByUser?.find(user => user.login === organizationMembers.login)
                return (<div key={organizationMembers.id} className="flex flex-col items-center mt-48 m-12">
                  <img className="size-24 rounded-full mb-2 float" src={organizationMembers.avatar_url}
                       alt={`Avatar de ${organizationMembers.login}`} />
                  <a href={organizationMembers.html_url} target="_blank" rel="noopener noreferrer"
                     className="text-white hover:underline float">
                    <strong>{organizationMembers.login}</strong>
                  </a>
                  <p className="float">Commits: {commits ? commits.number : 0}</p>
                </div>)
              })) : (<p>Le token a expiré, désolé !</p>)}
            </div>

            <div className="relative h-full w-full bg-transparent flex items-end justify-evenly">
              <img
                src={algue1}
                alt="Algue 1"
                className="w-24 h-auto mb-0"
              />
              <img
                src={alguebronzee}
                alt="Algue 2"
                className="w-32 h-auto mb-0"
              />
              <img
                src={algue3}
                alt="Algue 3"
                className="w-28 h-auto mb-0"
              />
              <img
                src={algue2}
                alt="Algue 3"
                className="w-28 h-auto mb-0"
              />
              <img
                src={alguebronzee}
                alt="Algue 3"
                className="w-28 h-auto mb-0"
              />
            </div>
        </motion.section>
      </div>
  </>
)
}
