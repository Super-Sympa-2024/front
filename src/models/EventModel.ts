import { EventTypeEnum } from './EventTypeEnum'
import { User } from './UserModel'

export interface Event {
  id?: number
  eventType: EventTypeEnum
  userId: number
  timestamp?: Date
}
