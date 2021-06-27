import {
    TOGGLE_IS_EDITING,
    SET_IS_LOADED,
    SET_MY_REPLIES,
    SET_USER,
    TOGGLE_IS_SUCCESS,
    SET_CONTRACTOR_TENDERS
} from "../actionTypes/accountPage.actionType"

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