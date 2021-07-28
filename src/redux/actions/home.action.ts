import * as ActionTypes from "@redux/actionTypes";
import {getTendersAPI} from "@services";
import {Tender} from "@app/types";
import {SetTenders, ToggleIsLoaded } from "@redux/types";
import {Dispatch} from "redux";

type Action = SetTenders | ToggleIsLoaded

export const setTenders = (tenders: Array<Tender>): SetTenders => ({type: ActionTypes.SET_TENDERS, tenders})
export const toggleIsLoaded = (isLoaded: boolean): ToggleIsLoaded => ({type: ActionTypes.TOGGLE_IS_LOADED, isLoaded})

export const getHomeTenders = () => async (dispatch: Dispatch<Action>) => {
  dispatch(toggleIsLoaded(false))

  const tenders = await getTendersAPI()

  dispatch(setTenders(tenders.data))
  dispatch(toggleIsLoaded(true))
}