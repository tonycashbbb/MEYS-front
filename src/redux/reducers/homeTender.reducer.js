import {SET_HOME_TENDER, SET_TENDER_OWNER} from "@redux/actionTypes";

const initState = {
  tender: null,
  tenderOwner: null,
}

const homeTenderReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_HOME_TENDER:
      return {
        ...state,
        tender: action.tender
      }
    case SET_TENDER_OWNER:
      return {
        ...state,
        tenderOwner: action.tenderOwner
      }
    default:
      return state
  }
}

export default homeTenderReducer