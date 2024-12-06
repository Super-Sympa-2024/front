import BarChartComponent from '@components/BarChartComponent'
import ChartComponent from '@components/ChartComponent'
import PieChartComponent from '@components/PieChartComponent'
import PolarAreaChartComponent from '@components/PolarAreaChartComponent'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/stats')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <div>
    <div className='w-1/2'>
      <ChartComponent />
      <BarChartComponent />
      <PieChartComponent />
      <PolarAreaChartComponent />
    </div>
  </div>)
}
