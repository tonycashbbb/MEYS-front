import {SET_HOME_TENDER} from "@redux/actionTypes";

const initState = {
  tender: null
}

const homeTenderReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_HOME_TENDER:
      return {
        ...state,
        tender: action.tender
      }
    default:
      return state
  }
}

export default homeTenderReducer