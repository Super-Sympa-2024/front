import ChartComponent from '@components/ChartComponent'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/stats')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<div>
    <ChartComponent />
  </div>)
}
