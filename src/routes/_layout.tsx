import * as React from 'react'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <>
      <div>MENUUU</div>
      <Outlet />
    </>
  )
}
