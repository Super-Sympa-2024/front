import { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  Legend,
  Tooltip,
  ArcElement,
  Title,
} from 'chart.js'
import { Pie } from 'react-chartjs-2'

import { EventModel } from '@models/EventModel'
import { EventTypeEnum } from '@models/EventTypeEnum'

import { useEventLogger } from '@services/eventLogger'

// Enregistrer les composants de Chart.js nécessaires
ChartJS.register(Title, Tooltip, Legend, ArcElement)

export default function PieChartComponent() {
  const { getEventsByType } = useEventLogger()

  const [data, setData] = useState<EventModel[] | null>(null)

  useEffect(() => {
    async function fetchData() {
      const eventTypes = [
        EventTypeEnum.CLICKCORPS1,
        EventTypeEnum.CLICKCORPS2,
        EventTypeEnum.CLICKCORPS3,
        EventTypeEnum.CLICKCORPS4,
        EventTypeEnum.CLICKCORPS5,
        EventTypeEnum.CLICKCORPS6
      ]

      const events: EventModel[] = []
      for (const eventType of eventTypes) {
        const eventData = await getEventsByType(eventType)
        events.push(...eventData)
      }

      setData(events)
    }

    fetchData()
  }, [])

  if (!data) {
    return <p>Loading...</p>
  }

  // Comptage des événements pour chaque type de CLICKCORPS
  const clickCorpsCounts = {
    CLICKCORPS1: 0,
    CLICKCORPS2: 0,
    CLICKCORPS3: 0,
    CLICKCORPS4: 0,
  }

  data.forEach((event) => {
    if (event.eventType.startsWith('CLICKCORPS')) {
      clickCorpsCounts[event.eventType as keyof typeof clickCorpsCounts] += 1
    }
  })

  // Données à afficher sur le PieChart
  const labels = [
    'Régulation chimique', 'Poumon', 'Cardiovasculaire',
    'Système circulatoire'
  ]
  const counts = Object.values(clickCorpsCounts)

  const chartData = {
    labels, // Labels des différents types de CLICKCORPS
    datasets: [
      {
        data: counts, // Données des comptages
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', 
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)'
        ], // Couleurs différentes pour chaque secteur
        borderColor: [
          'rgba(255, 99, 132, 1)', 
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ], // Couleurs des bords des secteurs
        borderWidth: 1
      }
    ]
  }

  return (
    <div>
      <h2>Répartition des événements par CLICKCORPS</h2>
      <Pie data={chartData} />
    </div>
  )
}
