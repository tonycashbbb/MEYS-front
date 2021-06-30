import {SET_HOME_TENDER} from "../actionTypes/homeTender.actionType";
import {getTenderAPI, requestTenderAPI} from "@services/homePage.service";
import {toggleIsSuccess} from "./accountPage.action";

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