import * as ActionTypes from "@redux/actionTypes";
import {getTendersAPI} from "@services";

export const setTenders = (tenders) => ({type: ActionTypes.SET_TENDERS, tenders})
export const setTotalCount = (totalCount) => ({type: ActionTypes.SET_TOTAL_COUNT, totalCount})
export const setCurrentPageAC = (pageNum) => ({type: ActionTypes.SET_CURRENT_PAGE, pageNum})
export const toggleIsLoaded = (isLoaded) => ({type: ActionTypes.TOGGLE_IS_LOADED, isLoaded})

export const getHomeTenders = (search) => async (dispatch) => {
    dispatch(toggleIsLoaded(false))

    const tenders = await getTendersAPI(search)

    dispatch(setTenders(tenders.data))
    dispatch(setTotalCount(tenders.data.length))
    dispatch(toggleIsLoaded(true))
}