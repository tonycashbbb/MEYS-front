import {createSelector} from "reselect";

const getHomeTenders = state => {
  return state.homePage.tenders
}

export const selectHomeTenders = createSelector(getHomeTenders, (tenders) => {
  return tenders.filter(t => true)
})

export const selectUsername = state => {
  if (!state.auth.user) {
    return null
  }
  return state.auth.user.name
}

export const selectHomeIsLoaded = state => {
  return state.homePage.isLoaded
}

export const selectTotalCount = state => {
  return state.homePage.totalCount
}

export const selectPageSize = state => {
  return state.homePage.pageSize
}

export const selectCurrentPage = state => {
  return state.homePage.currentPage
}
