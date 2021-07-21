import {
  SET_ACCOUNT_TENDER,
  SET_TENDER_CREATOR,
  SET_TENDER_REQUESTS
} from "@redux/actionTypes";
import {
  getTenderAPI,
  acceptTenderRequestAPI,
  getContractorAPI,
  getTenderRequestsAPI,
  updateTenderAPI
} from "@services";
import {AccountPageActions} from "@redux/actions/index";
import {Tender, TenderRequest, User} from "@app/types";
import { SetAccountTender, SetTenderCreator, SetTenderRequests } from "@redux/types";

export const setAccountTender = (tender: Tender): SetAccountTender => ({type: SET_ACCOUNT_TENDER, tender})
export const setTenderRequests = (tenderRequests: Array<TenderRequest>): SetTenderRequests => ({
  type: SET_TENDER_REQUESTS,
  tenderRequests
})
export const setTenderCreator = (tenderCreator: User): SetTenderCreator => ({type: SET_TENDER_CREATOR, tenderCreator})

export const getAccountTender = (tenderId: number) => async (dispatch: any) => {
  const tender = await getTenderAPI(tenderId)
  dispatch(setAccountTender(tender))
}
export const getTenderCreator = (tenderCreatorId: number) => async (dispatch: any) => {
  const tenderCreator = await getContractorAPI(tenderCreatorId)
  dispatch(setTenderCreator(tenderCreator))
}
export const getTenderRequests = (tenderId: number) => async (dispatch: any) => {
  const tenderRequests = await getTenderRequestsAPI(tenderId)
  dispatch(setTenderRequests(tenderRequests))
}
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
    dispatch(AccountPageActions.toggleIsSuccess(true))
  }
}