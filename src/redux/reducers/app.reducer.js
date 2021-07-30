import {APP_INITIALIZED_SUCCESS} from "@redux/actionTypes"
import * as ActionTypes from "@redux/actionTypes";

const initState = {
  isInitialized: false
}

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case APP_INITIALIZED_SUCCESS:
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
