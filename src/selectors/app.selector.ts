import {AppState} from "@app/types";

export const selectIsSuccess = (state: AppState) => {
  return state.app.isSuccess
}