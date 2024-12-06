import { EventTypeEnum } from './EventTypeEnum'
import { User } from './UserModel'

export interface EventModel {
  id?: number
  eventType: EventTypeEnum
  userId: number
  timestamp?: Date
}
