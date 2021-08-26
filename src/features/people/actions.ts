import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import axios from 'axios'
import { GET_PEOPLE, GET_PERSON } from './actionTypes'

const baseUrl = `${process.env.REACT_APP_REST_API_URL}/api`

/* export const fetchPeople = (): ThunkAction<void, {}, {}, AnyAction> => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  const { data } = await axios.get(`${baseUrl}/`)
  dispatch({ type: GET_PEOPLE, payload: data })
  console.info('Data', data)
  // dispatch(updateSession({ loggedIn: res }))
} */

export const fetchPeople = (page: number) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  const { data } = await axios.get(
    `${baseUrl}/persons${page > 1 ? `?page=${page}` : ''}`
  )
  dispatch({ type: GET_PEOPLE, payload: data })
}

export const fetchProfile = (id: number) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  const { data } = await axios.get(`${baseUrl}/persons/${id}`)
  dispatch({ type: GET_PERSON, payload: data })
}
