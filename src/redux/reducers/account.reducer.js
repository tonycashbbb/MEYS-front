import * as ActionTypes from "@redux/actionTypes"

const initState = {
    items: null,
    userId: null,
    myRepliesList: null,
    isLoaded: false,
    isSuccess: false,
}

const accountReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.SET_CONTRACTOR_TENDERS:
            return {
                ...state,
                items: action.contractorTenders
                  ? [...action.contractorTenders]
                  : null
            }
        case ActionTypes.SET_IS_LOADED:
            return {
                ...state,
                isLoaded: action.isLoaded
            }
        case ActionTypes.SET_USER_ID:
            return {
                ...state,
                userId: action.userId
            }
        case ActionTypes.SET_MY_REPLIES:
            return {
                ...state,
                myRepliesList: action.allRequests
                  ? action.allRequests.filter(request => request.userId === state.userId)
                  : null,
            }
        default:
            return state
    }
}

export default accountReducer
