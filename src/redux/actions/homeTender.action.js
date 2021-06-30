import {SET_HOME_TENDER} from "@redux/actionTypes";
import {toggleIsSuccess} from "@redux/actions";
import {getTenderAPI, requestTenderAPI} from "@services";

export const setHomeTender = (tender) => ({type: SET_HOME_TENDER, tender})

export const getHomeTender = (tenderId) => (dispatch) => {
    getTenderAPI(tenderId)
        .then(tender => {
            dispatch(setHomeTender(tender))
        })
}
export const replyOnTender = (userId, tenderId, message) => async (dispatch) => {
    await requestTenderAPI(userId, tenderId, message)

    dispatch(toggleIsSuccess(true))
    dispatch(toggleIsSuccess(false))
}