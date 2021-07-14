import {
    SET_IS_LOADED,
    SET_MY_REPLIES,
    SET_USER,
    TOGGLE_IS_SUCCESS,
    SET_CONTRACTOR_TENDERS,
} from "@redux/actionTypes"

const initState = {
    items: null,
    user: null,
    myRepliesList: null,
    isLoaded: false,
    isSuccess: false,
}

const accountPageReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CONTRACTOR_TENDERS:
            return {
                ...state,
                items: action.contractorTenders
                  ? [...action.contractorTenders]
                  : null
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
        case SET_MY_REPLIES:
            return {
                ...state,
                myRepliesList: action.allRequests
                  ? action.allRequests.filter(request => request.userId === state.user.id)
                  : null,
            }
        default:
            return state
    }
}

export default accountPageReducer
