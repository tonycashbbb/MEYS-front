import {AppState} from "@app/types";

export const selectHomeTender = (state: AppState) => {
  return state.homeTender.tender
}

export const selectTenderOwner = (state: AppState) => {
  return state.homeTender.tenderOwner
}