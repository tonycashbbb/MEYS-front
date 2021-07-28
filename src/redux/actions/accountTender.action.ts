import {Dispatch} from "redux";

import * as ActionTypes from "@redux/actionTypes";
import {
  getTenderAPI,
  acceptTenderRequestAPI,
  getUserAPI,
  getTenderRequestsAPI,
  updateTenderAPI
} from "@services";
import {AppActions} from "@redux/actions/index";
import {Tender, TenderRequest, User} from "@app/types";
import { SetAccountTender, SetTenderCreator, SetTenderRequests } from "@redux/types";

type Action = SetAccountTender | SetTenderCreator | SetTenderRequests

export const setAccountTender = (tender: Tender): SetAccountTender => ({type: ActionTypes.SET_ACCOUNT_TENDER, tender})
export const setTenderRequests = (tenderRequests: Array<TenderRequest>): SetTenderRequests => ({
  type: ActionTypes.SET_TENDER_REQUESTS,
  tenderRequests
})
export const setTenderCreator = (tenderCreator: User): SetTenderCreator => ({type: ActionTypes.SET_TENDER_CREATOR, tenderCreator})

export const getAccountTender = (tenderId: number) => async (dispatch: Dispatch<Action>) => {
  const tender = await getTenderAPI(tenderId)
  dispatch(setAccountTender(tender))
}
export const getTenderCreator = (tenderCreatorId: number) => async (dispatch: Dispatch<Action>) => {
  const tenderCreator = await getUserAPI(tenderCreatorId)
  dispatch(setTenderCreator(tenderCreator))
}
export const getTenderRequests = (tenderId: number) => async (dispatch: Dispatch<Action>) => {
  const tenderRequests = await getTenderRequestsAPI(tenderId)
  dispatch(setTenderRequests(tenderRequests))
}
// dispatch of thunk
export const acceptTenderRequest = (tenderRequestId: number, tenderId: number) => async (dispatch: any) => {
  const res = await acceptTenderRequestAPI(tenderRequestId)

  if (res.status === 200) {
    dispatch(getAccountTender(tenderId))
  }
}
export const updateTender = (tenderData: Tender) => async (dispatch: any) => {
  const res = await updateTenderAPI(tenderData)

  if (res.status === 200) {
    dispatch(getAccountTender(tenderData.id))
    dispatch(AppActions.toggleIsSuccess(true))
  }
}