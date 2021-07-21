import {
  SET_CURRENT_PAGE,
  SET_TENDERS,
  SET_TOTAL_COUNT,
  TOGGLE_IS_LOADED
} from "@redux/actionTypes";
import {getTendersAPI} from "@services";
import {Tender} from "@app/types";
import {SetCurrentPage, SetTenders, SetTotalCount, ToggleIsLoaded } from "@redux/types";

export const setTenders = (tenders: Array<Tender>): SetTenders => ({type: SET_TENDERS, tenders})
export const setTotalCount = (totalCount: number): SetTotalCount => ({type: SET_TOTAL_COUNT, totalCount})
export const setCurrentPageAC = (pageNum: number): SetCurrentPage => ({type: SET_CURRENT_PAGE, pageNum})
export const toggleIsLoaded = (isLoaded: boolean): ToggleIsLoaded => ({type: TOGGLE_IS_LOADED, isLoaded})

export const getHomeTenders = (currentPage = 1, pageSize = 10) => async (dispatch: any) => {
  dispatch(toggleIsLoaded(false))
  dispatch(setCurrentPageAC(currentPage))

  const tenders = await getTendersAPI(currentPage, pageSize)

  dispatch(setTenders(tenders.data))
  dispatch(setTotalCount(tenders.data.length))
  dispatch(toggleIsLoaded(true))
}