import { useEffect, useState } from 'react'
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  BarElement,
  Title,
  Tooltip
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

import { EventModel } from '@models/EventModel'
import { EventTypeEnum } from '@models/EventTypeEnum'

import { useEventLogger } from '@services/eventLogger'

// Enregistrer les composants de Chart.js
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
)

export default function BarChartComponent() {
  const { getEventsByType } = useEventLogger()

  const [data, setData] = useState<EventModel[] | null>(null)

  useEffect(() => {
    async function fetchData() {
      const eventTypes = [
        EventTypeEnum.JEUETAPE1,
        EventTypeEnum.JEUETAPE2,
        EventTypeEnum.JEUETAPE3,
        EventTypeEnum.JEUETAPE4,
        EventTypeEnum.JEUETAPE5
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

  // Calcul des comptages pour chaque JEUETAPE
  const eventCounts = {
    JEUETAPE1: 0,
    JEUETAPE2: 0,
    JEUETAPE3: 0,
    JEUETAPE4: 0,
    JEUETAPE5: 0
  }

  data.forEach((event) => {
    if (event.eventType.startsWith('JEUETAPE')) {
      eventCounts[event.eventType as keyof typeof eventCounts] += 1
    }
  })

  // Formatage des labels et des valeurs pour Chart.js
  const labels = ['Épipalégique', 'Mésopélagique', 'Bathypélagique', 'Abyssale', 'Hadale']
  const counts = Object.values(eventCounts)

  const chartData = {
    labels, // Labels des étapes
    datasets: [
      {
        label: "Nombre d'utilisateur ayant franchi chaque étape des abysses",
        data: counts, // Données du graphique
        backgroundColor: 'rgba(75, 192, 192, 0.5)', // Couleur des barres
        borderColor: 'rgba(75, 192, 192, 1)', // Couleur des bords des barres
        borderWidth: 1
      }
    ]
  }

  return (
    <>
      <h2>Nombre d'utilisateur ayant franchi chaque étape des abysses</h2>
      <Bar data={chartData} />
    </>
  )
}
