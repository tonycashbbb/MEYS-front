import {
  SET_CURRENT_PAGE,
  SET_TENDERS,
  SET_TOTAL_COUNT,
  TOGGLE_IS_LOADED
} from "@redux/actionTypes";
import {Tender} from "@app/types";
import {SetCurrentPage, SetTenders, SetTotalCount, ToggleIsLoaded} from "@redux/types";

export type InitState = typeof initState
type Action = SetTenders | SetTotalCount | SetCurrentPage | ToggleIsLoaded

const initState = {
  tenders: [] as Array<Tender>,
  isLoaded: false,
  totalCount: null as unknown as number | null,
  pageSize: 10,
  currentPage: 1,
}

const homePageReducer = (state: InitState = initState, action: Action) => {
  switch (action.type) {
    case SET_TENDERS:
      return {
        ...state,
        tenders: [...action.tenders]
      }
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount
      }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.pageNum
      }
    }
    case TOGGLE_IS_LOADED:
      return {
        ...state,
        isLoaded: action.isLoaded
      }
    default:
      return state
  }
}

export default homePageReducer