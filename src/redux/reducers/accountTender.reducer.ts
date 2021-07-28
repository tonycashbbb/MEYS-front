import * as ActionTypes from "@redux/actionTypes"
import {Tender, TenderRequest, User} from "@app/types";
import {Nullable, SetAccountTender, SetTenderCreator, SetTenderRequests} from "@redux/types";

type InitState = typeof initState
type Action = SetAccountTender | SetTenderCreator | SetTenderRequests

const initState = {
  tender: null as Nullable<Tender>,
  tenderCreator: null as Nullable<User>,
  tenderRequests: null as Nullable<Array<TenderRequest>>,
}

const accountTenderReducer = (state: InitState = initState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_ACCOUNT_TENDER:
      return {
        ...state,
        tender: action.tender
      }
    case ActionTypes.SET_TENDER_REQUESTS:
      return {
        ...state,
        tenderRequests: action.tenderRequests
      }
    case ActionTypes.SET_TENDER_CREATOR:
      return {
        ...state,
        tenderCreator: action.tenderCreator
      }
    default:
      return state
  }
}

export default accountTenderReducer
