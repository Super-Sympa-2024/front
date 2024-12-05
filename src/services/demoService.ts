import { PeopleModel } from 'src/models/PeopleModel'

export function useDemoService() {
  async function getStarWarsPeople(): Promise<PeopleModel> {
    const response = await fetch('https://swapi.dev/api/people/1')
    return response.json()
  }

  return {
    getStarWarsPeople
  }
}
