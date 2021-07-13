import {
  SET_CURRENT_PAGE,
  SET_TENDERS,
  SET_TOTAL_COUNT,
  TOGGLE_IS_LOADED
} from "@redux/actionTypes";

const initState = {
  tenders: [],
  isLoaded: false,
  totalCount: null,
  pageSize: 10,
  currentPage: 1,
}

const homePageReducer = (state = initState, action) => {
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