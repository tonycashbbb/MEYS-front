import * as ActionTypes from "@redux/actionTypes";
import {getTendersAPI} from "@services";

export const setTenders = (tenders) => ({type: ActionTypes.SET_TENDERS, tenders})
export const setTotalCount = (totalCount) => ({type: ActionTypes.SET_TOTAL_COUNT, totalCount})
export const setCurrentPageAC = (pageNum) => ({type: ActionTypes.SET_CURRENT_PAGE, pageNum})
export const toggleIsLoaded = (isLoaded) => ({type: ActionTypes.TOGGLE_IS_LOADED, isLoaded})

export const getHomeTenders = (currentPage = 1, pageSize = 10) => async (dispatch) => {
    dispatch(toggleIsLoaded(false))
    dispatch(setCurrentPageAC(currentPage))

    const tenders = await getTendersAPI(currentPage, pageSize)

    dispatch(setTenders(tenders.data))
    dispatch(setTotalCount(tenders.data.length))
    dispatch(toggleIsLoaded(true))
}