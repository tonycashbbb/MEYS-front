import {APP_INITIALIZED_SUCCESS} from "@redux/actionTypes"

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
    default:
      return state
  }
}

export default appReducer
