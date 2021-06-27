import {getTendersAPI} from "../../services/homePage-services";

const SET_TENDERS = 'SET_TENDERS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_LOADED = 'TOGGLE_IS_LOADED'

const initState = {
  tenders: [],
  isLoaded: false,
  totalCount: null,
  pageSize: 10,
  currentPage: 1,
}

export const homePageReducer = (state = initState, action) => {
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

const setTenders = (tenders) => ({type: SET_TENDERS, tenders})
const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})
const setCurrentPageAC = (pageNum) => ({type: SET_CURRENT_PAGE, pageNum})
const toggleIsLoaded = (isLoaded) => ({type: TOGGLE_IS_LOADED, isLoaded})

export const getHomeTenders = (currentPage = 1, pageSize = 10) => async (dispatch) => {
  dispatch(toggleIsLoaded(false))
  dispatch(setCurrentPageAC(currentPage))

  const tenders = await getTendersAPI(currentPage, pageSize)

  dispatch(setTenders(tenders.data))
  // dispatch(setTotalCount(data.totalCount))
  dispatch(setTotalCount(tenders.data.length))
  dispatch(toggleIsLoaded(true))

}


