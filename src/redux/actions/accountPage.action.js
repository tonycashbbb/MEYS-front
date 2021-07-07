import {
    SET_CONTRACTOR_TENDERS,
    SET_IS_LOADED,
    SET_MY_REPLIES,
    SET_USER, TOGGLE_IS_EDITING,
    TOGGLE_IS_SUCCESS
} from "@redux/actionTypes";
import {
    cancelTenderAPI,
    createTenderAPI,
    getAllTenderRequestsAPI,
    getContractorAPI,
    getContractorTendersAPI,
    retenderAPI,
    startTenderAPI,
    updateAccountAPI
} from "@services";

export const setContractorTenders = (contractorTenders) => ({type: SET_CONTRACTOR_TENDERS, contractorTenders})
export const setMyRepliesList = (allRequests) => ({type: SET_MY_REPLIES, allRequests})
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