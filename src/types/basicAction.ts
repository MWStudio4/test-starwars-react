import { ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { GetPeopleAction, GetPersonAction } from '../features/people/types'

export interface IBasicState {
  people: {
    list: number[]
    person: {}
  }
  count: {
    value: number
  }
}

export enum BasicActionTypes {
  ANY = 'ANY',
}

export interface IBasicAnyAction {
  type: BasicActionTypes.ANY
  payload: any
}

export type BasicActions = IBasicAnyAction | GetPeopleAction | GetPersonAction

/* <Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const basicAction: ActionCreator<ThunkAction<
  Promise<any>,
  IBasicState,
  null,
  IBasicAnyAction
>> = () => {
  return async (dispatch: Dispatch) => {
    try {
      // Your logic here
      dispatch({
        property: null,
        type: BasicActionTypes.ANY,
      })
    } catch (err) {
      console.error(err)
    }
  }
}
