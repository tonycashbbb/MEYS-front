import {SET_HOME_TENDER} from "../actionTypes/homeTender.actionType";

const initState = {
  tender: null,
}

export const homeTenderReducer = (state = initState, action) => {
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
