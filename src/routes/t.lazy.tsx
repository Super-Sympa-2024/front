import { createLazyFileRoute } from '@tanstack/react-router'

import { EventTypeEnum } from '@models/EventTypeEnum'

import { useEventLogger } from '@services/eventLogger'

export const Route = createLazyFileRoute('/t')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <button onClick={() => useEventLogger().newEvent(EventTypeEnum.UNKNOWN)}>
      click
    </button>
  )
}
