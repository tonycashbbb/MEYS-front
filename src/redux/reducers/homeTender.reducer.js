import {SET_HOME_TENDER, SET_IS_REPLYING} from "@redux/actionTypes";

const initState = {
  tender: null,
  isReplying: false
}

const homeTenderReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_HOME_TENDER:
      return {
        ...state,
        tender: action.tender
      }
    case SET_IS_REPLYING:
      return {
        ...state,
        isReplying: action.isReplying
      }
    default:
      return state
  }
}

export default homeTenderReducer