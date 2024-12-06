import { Event } from '@models/EventModel'
import { EventTypeEnum } from '@models/EventTypeEnum'
import { apiUrl } from '@services/envValueService'

export function useEventLogger() {
  async function newEvent(eventType: EventTypeEnum) {
    const eventToSend: Event = {
      eventType: eventType,
      userId: 2
    }

    const response = await fetch(`${apiUrl}event`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventToSend)
    }).then((response) => response.json())

    console.log(response)
  }

  async function getEventsByType(eventType: EventTypeEnum) {
    const apiUrl = 'http://localhost:3000/'
    const response = await fetch(`${apiUrl}event/type/${eventType}`).then(
      (response) => response.json()
    )

    console.log(response)

    return response;
  }

  return {
    newEvent,
    getEventsByType
  }
}
