import { useEffect, useState } from 'react'
import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  RadialLinearScale,
  Title,
  Tooltip
} from 'chart.js'
import { PolarArea } from 'react-chartjs-2'

import { EventModel } from '@models/EventModel'
import { EventTypeEnum } from '@models/EventTypeEnum'

import { useEventLogger } from '@services/eventLogger'

// Enregistrer les composants nécessaires pour le graphique Polar Area
ChartJS.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale)

export default function PolarAreaChartComponent() {
  const { getEventsByType } = useEventLogger()

  const [data, setData] = useState<EventModel[] | null>(null)

  useEffect(() => {
    async function fetchData() {
      // Récupérer les événements CAPTCHA1, CAPTCHA2, et CAPTCHA3
      const eventTypes = [
        EventTypeEnum.CAPTCHA1,
        EventTypeEnum.CAPTCHA2,
        EventTypeEnum.CAPTCHA3
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

  // Calcul des comptages pour chaque type de CAPTCHA
  const captchaCounts = {
    CAPTCHA1: 0,
    CAPTCHA2: 0,
    CAPTCHA3: 0
  }

  data.forEach((event) => {
    if (event.eventType === EventTypeEnum.CAPTCHA1) {
      captchaCounts.CAPTCHA1 += 1
    } else if (event.eventType === EventTypeEnum.CAPTCHA2) {
      captchaCounts.CAPTCHA2 += 1
    } else if (event.eventType === EventTypeEnum.CAPTCHA3) {
      captchaCounts.CAPTCHA3 += 1
    }
  })

  // Préparer les données pour le Polar Area Chart
  const labels = ['CAPTCHA1', 'CAPTCHA2', 'CAPTCHA3']
  const counts = [
    captchaCounts.CAPTCHA1,
    captchaCounts.CAPTCHA2,
    captchaCounts.CAPTCHA3
  ]

  const chartData = {
    labels, // Labels des CAPTCHA
    datasets: [
      {
        label: 'Nombre de CAPTCHA Résolus',
        data: counts, // Données du graphique
        backgroundColor: [
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)'
        ], // Couleurs des sections
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ], // Couleur des bords
        borderWidth: 1
      }
    ]
  }

  return (
    <>
      <h2>Nombre de CAPTCHA Résolus</h2>
      <PolarArea data={chartData} />
    </>
  )
}
