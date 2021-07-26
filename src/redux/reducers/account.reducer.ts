import {
    SET_IS_LOADED,
    SET_MY_REPLIES,
    SET_USER,
    TOGGLE_IS_SUCCESS,
    SET_CONTRACTOR_TENDERS,
} from "@redux/actionTypes"

import {Tender, User, TenderRequest} from "@app/types";
import { SetAccountTenders, SetIsLoaded, SetMyRepliesList, SetUser, ToggleIsSuccess } from "@redux/types";

export type InitState = typeof initState
type Action = SetAccountTenders | SetIsLoaded | SetMyRepliesList | SetUser | ToggleIsSuccess
// 53 - request: any

const initState = {
    tenders: null as unknown as Array<Tender> | null,
    user: null as unknown as User | null,
    myRepliesList: null as unknown as Array<TenderRequest> | null,
    isLoaded: false,
    isSuccess: false,
}

const accountReducer = (state: InitState = initState, action: Action) => {
    switch (action.type) {
        case SET_CONTRACTOR_TENDERS:
            return {
                ...state,
                tenders: action.contractorTenders
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
                  ? action.allRequests.filter((request: any) => request.userId === state.user?.id)
                  : null,
            }
        default:
            return state
    }
}

export default accountReducer
