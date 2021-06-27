import {getTenderAPI, requestTenderAPI} from "../../services/homePage-services";
import {toggleIsSuccess} from "./accountPage-reducer";

const SET_HOME_TENDER = 'SET_HOME_TENDER'

const initState = {
  tender: null,
  canReply: true
}

export const homeTenderReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_HOME_TENDER:
      return {
        ...state,
        tender: action.tender
      }
    default:
      return state
  }
}

const setHomeTender = (tender) => ({type: SET_HOME_TENDER, tender})

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
