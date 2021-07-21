import {
  SET_TENDER_CREATOR,
  SET_TENDER_REQUESTS,
  SET_ACCOUNT_TENDER,
} from "@redux/actionTypes"
import {Tender, TenderRequest, User} from "@app/types";
import {SetAccountTender, SetTenderCreator, SetTenderRequests} from "@redux/types";

export type InitState = typeof initState
type Action = SetAccountTender | SetTenderCreator | SetTenderRequests

const initState = {
  tender: null as unknown as Tender | null,
  tenderCreator: null as unknown as User | null,
  tenderRequests: null as unknown as Array<TenderRequest> | null,
}

const accountTenderReducer = (state: InitState = initState, action: Action) => {
  switch (action.type) {
    case SET_ACCOUNT_TENDER:
      return {
        ...state,
        tender: action.tender
      }
    case SET_TENDER_REQUESTS:
      return {
        ...state,
        tenderRequests: action.tenderRequests
      }
    case SET_TENDER_CREATOR:
      return {
        ...state,
        tenderCreator: action.tenderCreator
      }
    default:
      return state
  }
}

export default accountTenderReducer
