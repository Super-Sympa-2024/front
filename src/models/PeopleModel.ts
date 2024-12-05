import { GenderEnum } from './GenderEnum'

export interface PeopleModel {
  name: string
  height: number
  mass: number
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: GenderEnum
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created: Date
  edited: Date
  url: string
}
