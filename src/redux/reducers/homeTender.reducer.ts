import * as ActionTypes from "@redux/actionTypes";
import {Nullable, SetHomeTender, SetTenderOwner} from "@redux/types";
import {Tender, User} from "@app/types";

type InitState = typeof initState
type Action = SetHomeTender | SetTenderOwner

const initState = {
  tender: null as Nullable<Tender>,
  tenderOwner: null as Nullable<User>,
}

const homeTenderReducer = (state: InitState = initState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_HOME_TENDER:
      return {
        ...state,
        tender: action.tender
      }
    case ActionTypes.SET_TENDER_OWNER:
      return {
        ...state,
        tenderOwner: action.tenderOwner
      }
    default:
      return state
  }
}

export default homeTenderReducer