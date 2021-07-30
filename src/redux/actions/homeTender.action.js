import * as ActionTypes from "@redux/actionTypes";
import {AccountActions} from "@redux/actions";
import * as Services from "@services";

export const setHomeTender = (tender) => ({type: ActionTypes.SET_HOME_TENDER, tender})
export const setTenderOwner = (tenderOwner) => ({type: ActionTypes.SET_TENDER_OWNER, tenderOwner})

export const getHomeTender = (tenderId) => (dispatch) => {
  Services.getTenderAPI(tenderId)
    .then(tender => {
      dispatch(setHomeTender(tender))
    })
}
export const replyOnTender = (userId, tenderId, message) => async (dispatch) => {
  const res = await Services.requestTenderAPI(userId, tenderId, message)

  if (res.status === 200) {
    dispatch(AccountActions.toggleIsSuccess(true))
  }
}
export const getTenderOwner = (tenderOwnerId) => (dispatch) => {
  Services.getContractorAPI(tenderOwnerId)
    .then(tenderOwner => {
      dispatch(setTenderOwner(tenderOwner))
    })
}