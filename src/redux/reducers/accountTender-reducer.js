import {getTenderAPI} from "../../services/homePage-services";
import {
  acceptTenderRequestAPI, getContractorAPI,
  getTenderRequestsAPI,
  updateTenderAPI
} from "../../services/accountPage-services";

const SET_ACCOUNT_TENDER = 'SET_ACCOUNT_TENDER'
const SET_TENDER_CREATOR = 'SET_TENDER_CREATOR'
const SET_TENDER_REQUESTS = 'SET_TENDER_REQUESTS'

const initState = {
  tender: null,
  tenderCreator: null,
  tenderRequests: null,
}

export const accountTenderReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ACCOUNT_TENDER:
      return {
        ...state,
        tender: action.tender
      }
    case SET_TENDER_REQUESTS:
      return {
        ...state,
        tenderRequests: action.tenderRequests
      }
    case SET_TENDER_CREATOR:
      return {
        ...state,
        tenderCreator: action.tenderCreator
      }
    default:
      return state
  }
}

const setAccountTender = (tender) => ({type: SET_ACCOUNT_TENDER, tender})
const setTenderRequests = (tenderRequests) => ({type: SET_TENDER_REQUESTS, tenderRequests})
const setTenderCreator = (tenderCreator) => ({type: SET_TENDER_CREATOR, tenderCreator})

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
  }
}
