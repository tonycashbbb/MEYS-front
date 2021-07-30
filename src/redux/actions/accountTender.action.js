import * as ActionTypes from "@redux/actionTypes";
import * as Services from "@services";
import {AppActions} from "@redux/actions";

export const setAccountTender = (tender) => ({type: ActionTypes.SET_ACCOUNT_TENDER, tender})
export const setTenderRequests = (tenderRequests) => ({type: ActionTypes.SET_TENDER_REQUESTS, tenderRequests})
export const setTenderCreator = (tenderCreator) => ({type: ActionTypes.SET_TENDER_CREATOR, tenderCreator})

export const getAccountTender = (tenderId) => async (dispatch) => {
    const tender = await Services.getTenderAPI(tenderId)
    dispatch(setAccountTender(tender))
}
export const getTenderCreator = (tenderCreatorId) => async (dispatch) => {
    const tenderCreator = await Services.getContractorAPI(tenderCreatorId)
    dispatch(setTenderCreator(tenderCreator))
}
export const getTenderRequests = (tenderId) => async (dispatch) => {
    const tenderRequests = await Services.getTenderRequestsAPI(tenderId)
    dispatch(setTenderRequests(tenderRequests))
}
export const acceptTenderRequest = (tenderRequestId, tenderId) => async (dispatch) => {
    const res = await Services.acceptTenderRequestAPI(tenderRequestId)

    if (res.status === 200) {
        dispatch(getAccountTender(tenderId))
    }
}
export const updateTender = (tenderData) => async (dispatch) => {
    const res = await Services.updateTenderAPI(tenderData)

    if (res.status === 200) {
        dispatch(getAccountTender(tenderData.id))
        dispatch(AppActions.toggleIsSuccess(true))
    }
}