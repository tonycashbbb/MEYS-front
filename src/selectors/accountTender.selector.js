export const selectAccountTender = state => {
  return state.accountTender.tender
}

export const selectTenderCreator = state => {
  return state.accountTender.tenderCreator
}

export const selectTenderRequest = state => {
  return state.accountTender.tenderRequests
}