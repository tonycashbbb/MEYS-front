import {SET_CURRENT_PAGE, SET_TENDERS, SET_TOTAL_COUNT, TOGGLE_IS_LOADED} from "../actionTypes/homePage.actionType";
import {getTendersAPI} from "../../services/homePage-services";

export const setTenders = (tenders) => ({type: SET_TENDERS, tenders})
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})
export const setCurrentPageAC = (pageNum) => ({type: SET_CURRENT_PAGE, pageNum})
export const toggleIsLoaded = (isLoaded) => ({type: TOGGLE_IS_LOADED, isLoaded})

export const getHomeTenders = (currentPage = 1, pageSize = 10) => async (dispatch) => {
    dispatch(toggleIsLoaded(false))
    dispatch(setCurrentPageAC(currentPage))

    const tenders = await getTendersAPI(currentPage, pageSize)

    dispatch(setTenders(tenders.data))
    // dispatch(setTotalCount(data.totalCount))
    dispatch(setTotalCount(tenders.data.length))
    dispatch(toggleIsLoaded(true))

}