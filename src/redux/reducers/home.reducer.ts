import * as ActionTypes from "@redux/actionTypes";
import {Tender} from "@app/types";
import {SetTenders, ToggleIsLoaded} from "@redux/types";

export type InitState = typeof initState
type Action = SetTenders | ToggleIsLoaded

const initState = {
  tenders: [] as Array<Tender>,
  isLoaded: false,
  totalCount: null as unknown as number | null,
  pageSize: 10,
  currentPage: 1,
}

const homeReducer = (state: InitState = initState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_TENDERS:
      return {
        ...state,
        tenders: [...action.tenders]
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