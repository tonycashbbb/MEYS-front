import * as ActionTypes from "@redux/actionTypes";
import {InitializeAppSuccess, ToggleIsSuccess} from "@redux/types";

type InitState = typeof initState
type Action = InitializeAppSuccess | ToggleIsSuccess

const initState = {
  isInitialized: false,
  isSuccess: false,
}

const appReducer = (state: InitState = initState, action: Action) => {
  switch (action.type) {
    case ActionTypes.APP_INITIALIZED_SUCCESS:
      return {
        ...state,
        isInitialized: true
      }
    case ActionTypes.TOGGLE_IS_SUCCESS: {
      return {
        ...state,
        isSuccess: action.isSuccess
      }
    }
    default:
      return state
  }
}

export default appReducer
