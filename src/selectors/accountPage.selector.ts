import {createSelector} from "reselect";
import {AppState} from "@app/types";

const _getTenders = (state: AppState) => {
  return state.accountPage.tenders
}

export const selectTenders = createSelector(_getTenders, (tenders) => {
  if (!tenders) {
    return tenders
  }

  return tenders.filter(() => true)
})

export const selectIsLoaded = (state: AppState) => {
  return state.accountPage.isLoaded
}

export const selectMyRepliesList = (state: AppState) => {
  return state.accountPage.myRepliesList
}

export const selectTenderCreator = (state: AppState) => {
  return state.accountTender.tenderCreator
}

export const selectIsSuccess = (state: AppState) => {
  return state.accountPage.isSuccess
}
