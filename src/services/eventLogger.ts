import { Event } from '@models/EventModel'
import { EventTypeEnum } from '@models/EventTypeEnum'

export function useEventLogger() {
  async function newEvent(eventType: EventTypeEnum) {
    const eventToSend: Event = {
      eventType: eventType,
      userId: 1
    }

    console.log(eventToSend)

    const apiUrl = 'http://localhost:3000/'
    const response = await fetch(`${apiUrl}event`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventToSend)
    }).then((response) => response.json())

    console.log(response)
  }

  return {
    newEvent
  }
}
