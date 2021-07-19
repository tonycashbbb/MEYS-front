import {SET_HOME_TENDER, SET_TENDER_OWNER} from "@redux/actionTypes";
import {SetHomeTender, SetTenderOwner} from "@redux/types";
import {Tender, User} from "@app/types";

export type InitState = typeof initState
type Action = SetHomeTender | SetTenderOwner

const initState = {
  tender: null as unknown as Tender,
  tenderOwner: null as unknown as User,
}

const homeTenderReducer = (state: InitState = initState, action: Action) => {
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