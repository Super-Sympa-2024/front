import { useEffect, useState } from 'react'
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js'
import { Line } from 'react-chartjs-2'

import { EventModel } from '@models/EventModel'
import { EventTypeEnum } from '@models/EventTypeEnum'

import { useEventLogger } from '@services/eventLogger'

// Enregistrer les composants de Chart.js
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

export default function ChartComponent() {
  const { newEvent, getEventsByType } = useEventLogger()

  const [data, setData] = useState<EventModel[] | null>(null)

  useEffect(() => {
    async function fetchData() {
      const localData = await getEventsByType(EventTypeEnum.CONNEXION)
      setData(localData)
    }

    fetchData()
  }, [])

  if (!data) {
    return <p>Loading...</p>
  }

  // Transformation des données pour compter les événements par heure
  const eventsPerHour = data.reduce(
    (acc, event) => {
      const hour = new Date(event.timestamp || '').getHours() // Extraire l'heure de l'événement
      acc[hour] = acc[hour] ? acc[hour] + 1 : 1 // Incrémenter le compteur pour l'heure correspondante
      return acc
    },
    {} as Record<number, number>
  )

  // Formatage des labels et des valeurs pour Chart.js
  const hours = Array.from({ length: 24 }, (_, i) => i) // Les heures de 0 à 23
  const requestCounts = hours.map((hour) => eventsPerHour[hour] || 0) // Nombre de requêtes par heure

  const chartData = {
    labels: hours.map((hour) => `${hour}:00`), // Labels des heures
    datasets: [
      {
        label: 'Nombre de connexions par heure',
        data: requestCounts, // Données du graphique
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)', // Couleur de la ligne
        tension: 0.1
      }
    ]
  }

  return (
    <>
      <h2>Nombre de connexions par heure</h2>
      <Line data={chartData} />
    </>
  )
}
