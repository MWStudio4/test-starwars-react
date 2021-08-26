import { SystemState } from './types'

export const getPeopleCount = (state: SystemState) => state.people.count
export const getPeopleList = (state: SystemState) => state.people.list
export const getPerson = (state: SystemState) => state.people.person
