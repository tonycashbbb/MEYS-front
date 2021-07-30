import * as ActionTypes from "@redux/actionTypes";

const initState = {
  tenders: [],
  isLoaded: false,
  totalCount: null,
  pageSize: 10,
  currentPage: 1,
}

const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.SET_TENDERS:
      return {
        ...state,
        tenders: [...action.tenders]
      }
    case ActionTypes.SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount
      }
    case ActionTypes.SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.pageNum
      }
    }
    case ActionTypes.TOGGLE_IS_LOADED:
      return {
        ...state,
        isLoaded: action.isLoaded
      }
    default:
      return state
  }
}

export default homeReducer