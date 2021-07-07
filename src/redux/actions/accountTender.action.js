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
import {AccountPageActions} from "@redux/actions";

export const setAccountTender = (tender) => ({type: SET_ACCOUNT_TENDER, tender})
export const setTenderRequests = (tenderRequests) => ({type: SET_TENDER_REQUESTS, tenderRequests})
export const setTenderCreator = (tenderCreator) => ({type: SET_TENDER_CREATOR, tenderCreator})

export const getAccountTender = (tenderId) => async (dispatch) => {
    const tender = await getTenderAPI(tenderId)
    dispatch(setAccountTender(tender))
}
export const getTenderCreator = (tenderCreatorId) => async (dispatch) => {
    const tenderCreator = await getContractorAPI(tenderCreatorId)
    dispatch(setTenderCreator(tenderCreator))
}
export const getTenderRequests = (tenderId) => async (dispatch) => {
    const tenderRequests = await getTenderRequestsAPI(tenderId)
    dispatch(setTenderRequests(tenderRequests))
}
export const acceptTenderRequest = (tenderRequestId, tenderId) => async (dispatch) => {
    const res = await acceptTenderRequestAPI(tenderRequestId)

    if (res.status === 200) {
        dispatch(getAccountTender(tenderId))
    }
}
export const updateTender = (tenderData) => async (dispatch) => {
    const res = await updateTenderAPI(tenderData)

    if (res.status === 200) {
        dispatch(getAccountTender(tenderData.id))
        dispatch(AccountPageActions.toggleIsSuccess(true))
    }
}