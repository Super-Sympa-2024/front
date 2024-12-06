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
import { Line } from 'react-chartjs-2' // Import de la version Line de Chart.js

import { EventTypeEnum } from '@models/EventTypeEnum'

import { useEventLogger } from '@services/eventLogger'

// Enregistrement des composants nécessaires pour Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const ChartComponent = () => {
  // Données pour le graphique
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Mois
    datasets: [
      {
        label: 'Ventes mensuelles', // Titre du dataset
        data: [12, 19, 3, 5, 2, 3, 7], // Valeurs du dataset
        fill: false, // Remplir sous la courbe (false pour un graphique en ligne)
        borderColor: 'rgba(75,192,192,1)', // Couleur de la ligne
        tension: 0.1 // Courbure de la ligne
      }
    ]
  }

  // Options du graphique
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      tooltip: {
        mode: 'index',
        intersect: false
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Temps'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Connexion'
        }
      }
    }
  }

  return (
    <div>
      <h2>Graphique des Ventes Mensuelles</h2>
      <button
        onClick={() => useEventLogger().newEvent(EventTypeEnum.CONNEXION)}
      >
        click
      </button>
      <button
        onClick={() => useEventLogger().getEventsByType(EventTypeEnum.CONNEXION)}
      >
        GetUnknown
      </button>
      <Line data={data} options={options} />
    </div>
  )
}

export default ChartComponent