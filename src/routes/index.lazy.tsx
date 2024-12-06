import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'

import CapchatComponent from '@components/CapchatComponent'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent
})

function RouteComponent() {
  return <CapchatComponent />
}
