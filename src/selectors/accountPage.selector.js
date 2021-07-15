import {createSelector} from "reselect";

const _getTenders = state => {
  return state.accountPage.items
}

export const selectTenders = createSelector(_getTenders, (tenders) => {
  if (!tenders) {
    return tenders
  }

  return tenders.filter(() => true)
})

export const selectIsLoaded = state => {
  return state.accountPage.isLoaded
}

export const selectMyRepliesList = state => {
  return state.accountPage.myRepliesList
}

export const selectTenderCreator = state => {
  return state.accountTender.tenderCreator
}

export const selectRequestCreator = state => {
  return state.accountTender.requestCreator
}

export const selectIsSuccess = state => {
  return state.accountPage.isSuccess
}
