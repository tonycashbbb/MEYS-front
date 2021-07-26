import {createSelector} from "reselect";
import {AppState} from "@app/types";

const getHomeTenders = (state: AppState) => {
  return state.home.tenders
}

export const selectHomeTenders = createSelector(getHomeTenders, (tenders) => {
  return tenders.filter(t => true)
})

export const selectHomeIsLoaded = (state: AppState) => {
  return state.home.isLoaded
}
