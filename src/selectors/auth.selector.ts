import {AppState} from "@app/types";

export const selectUserId = (state: AppState) => {
  if (!state.auth.user) {
    return null
  }

  return state.auth.user.id
}

export const selectUser = (state: AppState) => {
  if (!state.auth.user) {
    return null
  }
  return state.auth.user
}

export const selectUsername = (state: AppState) => {
  if (!state.auth.user) {
    return null
  }

  return state.auth.user.name
}

export const selectEmail = (state: AppState) => {
  if (!state.auth.user) {
    return null
  }

  return state.auth.user.email
}
