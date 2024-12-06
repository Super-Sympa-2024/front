import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import '@assets/credits.css'

export const Route = createLazyFileRoute('/test')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="area-square p-24">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )

}

