import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_layout/demo/$id')({
  component: RouteComponent
})

function RouteComponent() {
  const { id } = Route.useParams()

  return <p>Id : {id}</p>
}
