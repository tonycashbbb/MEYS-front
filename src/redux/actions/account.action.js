import * as ActionTypes from "@redux/actionTypes";
import * as Services from "@services";
import {AppActions} from "@redux/actions";

export const setAccountTenders = (contractorTenders) => ({type: ActionTypes.SET_CONTRACTOR_TENDERS, contractorTenders})
export const setMyRepliesList = (allRequests) => ({type: ActionTypes.SET_MY_REPLIES, allRequests})
export const setUserId = (userId) => ({type: ActionTypes.SET_USER_ID, userId})
export const setIsLoaded = (isLoaded) => ({type: ActionTypes.SET_IS_LOADED, isLoaded})

export const getAccountTenders = (contractorId) => (dispatch) => {
  Services.getContractorTendersAPI(contractorId)
    .then(tenders => {
      dispatch(setAccountTenders(tenders))
      dispatch(setIsLoaded(true))
    })
}
export const createTender = (name, budget, description, contractorId) => (dispatch) => {
  Services.createTenderAPI(name, budget, description, contractorId)
    .then(res => {
      if (res.status === 200) {
        dispatch(AppActions.toggleIsSuccess(true))
      }
    })
}
export const startTender = (tenderId, contractorId) => async (dispatch) => {
  await Services.startTenderAPI(tenderId)
  dispatch(getAccountTenders(contractorId))
}
export const cancelTender = (tenderId, contractorId) => async (dispatch) => {
  await Services.cancelTenderAPI(tenderId)
  dispatch(getAccountTenders(contractorId))
}
export const retender = (tenderId, contractorId) => async (dispatch) => {
  await Services.retenderAPI(tenderId)
  dispatch(getAccountTenders(contractorId))
}
export const getMyRepliesList = (userId) => async (dispatch) => {
  const user = await Services.getContractorAPI(userId)
  dispatch(setUserId(user.id))

  const res = await Services.getAllTenderRequestsAPI()
  dispatch(setMyRepliesList(res))
}