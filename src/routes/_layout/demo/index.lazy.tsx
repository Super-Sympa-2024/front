import { useEffect, useState } from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'

import { PeopleModel } from '@models/PeopleModel'

import { useDemoService } from '@services/demoService'

import LoaderComponent from '@components/LoaderComponent'

export const Route = createLazyFileRoute('/_layout/demo/')({
  component: RouteComponent
})

interface TableComponentProps {
  title: string
  numbers: number[]
}
function TableComponent(props: TableComponentProps) {
  return <div>{props.title}</div>
}

function RouteComponent() {
  const navigate = Route.useNavigate()
  function testNavigate() {
    navigate({ to: '/demo/demo_2' })
  }

  const [starWarsData, setStarWarsData] = useState<PeopleModel>()
  const [isLoading, setIsLoading] = useState(false)

  const { getStarWarsPeople } = useDemoService()

  useEffect(() => {
    setIsLoading(true)
    getStarWarsPeople()
      .then((data) => setStarWarsData(data))
      .then(() => setIsLoading(false))
  }, [])

  if (isLoading) return <LoaderComponent />

  if (starWarsData)
    return (
      <div>
        <p>{starWarsData.name}</p>
      </div>
    )
}
