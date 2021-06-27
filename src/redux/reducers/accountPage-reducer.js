import {
  cancelTenderAPI,
  createTenderAPI,
  getAllTenderRequestsAPI,
  getContractorAPI,
  getContractorTendersAPI,
  retenderAPI,
  startTenderAPI,
  updateAccountAPI
} from "../../services/accountPage-services";

const SET_CONTRACTOR_TENDERS = 'SET_CONTRACTOR_TENDERS'
const SET_USER = 'SET_USER'
const SET_IS_LOADED = 'SET_IS_LOADED'
const SET_MY_REPLIES = 'SET_MY_REPLIES'
const TOGGLE_IS_SUCCESS = 'TOGGLE_IS_SUCCESS'
const TOGGLE_IS_EDITING = 'TOGGLE_IS_EDITING'

const initState = {
  items: [],
  user: null,
  myRepliesList: null,
  isLoaded: false,
  isSuccess: false,
  isEditing: false,
}

export const accountPageReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CONTRACTOR_TENDERS:
      return {
        ...state,
        items: [...action.contractorTenders]
      }
    case SET_IS_LOADED:
      return {
        ...state,
        isLoaded: action.isLoaded
      }
    case TOGGLE_IS_SUCCESS: {
      return {
        ...state,
        isSuccess: action.isSuccess
      }
    }
    case SET_USER:
      return {
        ...state,
        user: action.user
      }
    case TOGGLE_IS_EDITING:
      return {
        ...state,
        isEditing: action.isEditing
      }
    case SET_MY_REPLIES:
      return {
        ...state,
        myRepliesList: action.allRequests.filter(request => request.userId === state.user.id)
      }
    default:
      return state
  }
}

const setContractorTenders = (contractorTenders) => ({type: SET_CONTRACTOR_TENDERS, contractorTenders})
const setMyRepliesList = (allRequests) => ({type: SET_MY_REPLIES, allRequests})
export const setUser = (user) => ({type: SET_USER, user})
export const toggleIsSuccess = (isSuccess) => ({type: TOGGLE_IS_SUCCESS, isSuccess})
export const toggleIsEditing = (isEditing) => ({type: TOGGLE_IS_EDITING, isEditing})
export const setIsLoaded = (isLoaded) => ({type: SET_IS_LOADED, isLoaded})

export const getAccountTenders = (contractorId) => (dispatch) => {
  getContractorTendersAPI(contractorId)
    .then(tenders => {
      dispatch(setContractorTenders(tenders))
      dispatch(setIsLoaded(true))
    })
}
export const getUser = (userId) => (dispatch) => {
  getContractorAPI(userId)
    .then(user => {
      dispatch(setUser(user))
    })
}
export const createTender = (name, budget, description, contractorId) => (dispatch) => {
  createTenderAPI(name, budget, description, contractorId)
    .then(res => {
      if (res.status === 200) {
        dispatch(toggleIsSuccess(true))
        dispatch(toggleIsSuccess(false))
      }
    })
}
export const startTender = (tenderId, contractorId) => async (dispatch) => {
  await startTenderAPI(tenderId)
  dispatch(getAccountTenders(contractorId))
}
export const cancelTender = (tenderId, contractorId) => async (dispatch) => {
  await cancelTenderAPI(tenderId)
  dispatch(getAccountTenders(contractorId))
}
export const retender = (tenderId, contractorId) => async (dispatch) => {
  await retenderAPI(tenderId)
  dispatch(getAccountTenders(contractorId))
}
export const updateAccountData = (accountData) => async (dispatch) => {
  dispatch(toggleIsEditing(false))
  await updateAccountAPI(accountData)
}
export const getMyRepliesList = () => async (dispatch) => {
  const res = await getAllTenderRequestsAPI()
  dispatch(setMyRepliesList(res))
}
