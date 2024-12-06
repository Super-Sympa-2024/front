import { Event } from '@models/EventModel'
import { EventTypeEnum } from '@models/EventTypeEnum'
import { apiUrl } from '@services/envValueService'

export function useEventLogger() {
  async function newEvent(eventType: EventTypeEnum) {
    const eventToSend: Event = {
      eventType: eventType,
      userId: 1
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

  return {
    newEvent
  }
}
