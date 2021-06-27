import {
    SET_TENDER_CREATOR,
    SET_TENDER_REQUESTS,
    SET_ACCOUNT_TENDER
} from "../actionTypes/accountTender.actionType"

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