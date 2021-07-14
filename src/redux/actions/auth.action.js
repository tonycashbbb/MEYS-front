import {stopSubmit} from "redux-form";

import {SET_USER_DATA, TOGGLE_IS_AUTH} from "@redux/actionTypes";
import {AccountPageActions} from "@redux/actions";
import {createContractorAPI, authService} from "@services";

export const setUserData = (userData) => ({type: SET_USER_DATA, userData})
export const toggleIsAuth = (isAuth) => ({type: TOGGLE_IS_AUTH, isAuth})

export const getLoggedInUser = () => async (dispatch) => {
  const user = await authService.getLoggedInUser()

  dispatch(setUserData(user))
  dispatch(toggleIsAuth(true))
}
export const login = (username, password) => async (dispatch) => {
  try {
    const res = await authService.executeBasicAuthenticationService(username, password)

    if (res.message === "You are authenticated!") {
      authService.registerSuccessfulLogin(username, password)
      dispatch(getLoggedInUser())
    }
  } catch (e) {
    dispatch(stopSubmit("login", {_error: "Invalid username or password"}))
  }
}
export const logout = () => (dispatch) => {
  authService.logout()

  window.location.href = '/login'
  dispatch(setUserData(null))
  dispatch(toggleIsAuth(false))
}
export const createContractor = (userData) => async (dispatch) => {
  const res = await createContractorAPI(userData)

  if (res.status === 200) {
    dispatch(AccountPageActions.toggleIsSuccess(true))
  } else {
      dispatch(stopSubmit("createContractor", {_error: "Something went wrong"}))
  }
}
export const checkValidToken = () => async (dispatch) => {
  const token = sessionStorage.getItem('token')

  if (!token) {
    return false
  }

  const res = await authService.checkValidToken(token)

  if (res.message === "You are authenticated!") {
    authService._setupAxiosInterceptors(token)
    await dispatch(getLoggedInUser())
    return true
  }

  return false
}