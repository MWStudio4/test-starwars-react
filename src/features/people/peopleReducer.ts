import { CLEAR_PERSON, GET_PEOPLE, GET_PERSON } from './actionTypes'
import { PeopleActionTypes } from './types'

const initialState = {
  count: 0,
  list: [],
  person: {},
}

export default (state = initialState, action: PeopleActionTypes) => {
  switch (action.type) {
    case GET_PEOPLE:
      return {
        ...state,
        list: action.payload.persons,
        count: action.payload.count,
      }
    case GET_PERSON:
      return { ...state, person: action.payload }
    case CLEAR_PERSON:
      return { ...state, person: {} }
    default:
      return state
  }
}
