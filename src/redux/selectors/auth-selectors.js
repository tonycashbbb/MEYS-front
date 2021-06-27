export const selectUserId = state => {
  if (!state.auth.user) {
    return null
  }

  return state.auth.user.id
}

export const selectUser = state => {
  if (!state.auth.user) {
    return null
  }
  return state.auth.user
}

export const selectUsername = state => {
  if (!state.auth.user) {
    return null
  }

  return state.auth.user.name
}

export const selectEmail = state => {
  if (!state.auth.user) {
    return null
  }

  return state.auth.user.email
}
