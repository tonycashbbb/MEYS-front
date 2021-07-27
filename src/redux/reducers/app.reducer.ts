import * as ActionTypes from "@redux/actionTypes";
import {InitializeAppSuccess} from "@redux/types";

export type InitState = typeof initState
type Action = InitializeAppSuccess

const initState = {
  isInitialized: false
}

const appReducer = (state: InitState = initState, action: Action) => {
  switch (action.type) {
    case ActionTypes.APP_INITIALIZED_SUCCESS:
      return {
        ...state,
        isInitialized: true
      }
    default:
      return state
  }
}

export default appReducer
