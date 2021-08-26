import { GET_PEOPLE, GET_PERSON, CLEAR_PERSON } from './actionTypes'

interface Person {
  id: number
  name: string
  birthYear: string
  url: string
  age: number
}

interface PersonProfile {
  name: string
  birth_year: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  gender: string
  homeworld: string
}

export interface GetPeopleAction {
  type: typeof GET_PEOPLE
  payload: { count: number; persons: Person[] }
}

export interface GetPersonAction {
  type: typeof GET_PERSON
  payload: PersonProfile
}

export interface ClearPersonAction {
  type: typeof CLEAR_PERSON
}

export type PeopleActionTypes =
  | GetPeopleAction
  | GetPersonAction
  | ClearPersonAction

export interface SystemState {
  people: {
    count: number
    list: Person[]
    person: PersonProfile
  }
}
