import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_layout/demo/demo_2/')({
  component: RouteComponent
})

function RouteComponent() {
  return 'Hello /_layout/demo/demo_2/!'
}
