import {SET_HOME_TENDER, SET_TENDER_OWNER} from "@redux/actionTypes";
import {AccountPageActions} from "@redux/actions";
import {getContractorAPI, getTenderAPI, requestTenderAPI} from "@services";

export const setHomeTender = (tender) => ({type: SET_HOME_TENDER, tender})
export const setTenderOwner = (tenderOwner) => ({type: SET_TENDER_OWNER, tenderOwner})

export const getHomeTender = (tenderId) => (dispatch) => {
    getTenderAPI(tenderId)
        .then(tender => {
            dispatch(setHomeTender(tender))
        })
}
export const replyOnTender = (userId, tenderId, message) => async (dispatch) => {
    const res = await requestTenderAPI(userId, tenderId, message)

    if (res.status === 200) {
        dispatch(AccountPageActions.toggleIsSuccess(true))
    }
}
export const getTenderOwner = (tenderOwnerId) => (dispatch) => {
    getContractorAPI(tenderOwnerId)
      .then(tenderOwner => {
          dispatch(setTenderOwner(tenderOwner))
      })
}