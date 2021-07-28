import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

import * as ActionTypes from "@redux/actionTypes";
import {AppActions} from "@redux/actions/index";
import {createUserAPI, authService} from "@services";
import {User} from "@app/types";
import {SetUserData, ToggleIsAuth} from "@redux/types";

type Action = SetUserData | ToggleIsAuth

export const setUserData = (userData: User | null): SetUserData => ({type: ActionTypes.SET_USER_DATA, userData})
export const toggleIsAuth = (isAuth: boolean): ToggleIsAuth => ({type: ActionTypes.TOGGLE_IS_AUTH, isAuth})

export const getLoggedInUser = () => async (dispatch: Dispatch<Action>) => {
  const user = await authService.getLoggedInUser()

  dispatch(setUserData(user))
  dispatch(toggleIsAuth(true))
}
// dispatch of thunk
export const login = (username: string, password: string) => async (dispatch: any) => {
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
export const logout = () => (dispatch: Dispatch<Action>) => {
  authService.logout()

  window.location.href = '/login'
  dispatch(setUserData(null))
  dispatch(toggleIsAuth(false))
}
// stopSubmit
export const createUser = (userData: User) => async (dispatch: any) => {
  const res = await createUserAPI(userData)

  if (res.status === 200) {
    dispatch(AppActions.toggleIsSuccess(true))
  } else {
    dispatch(stopSubmit("createContractor", {_error: "Something went wrong"}))
  }
}
// dispatch of thunk
export const checkValidToken = () => async (dispatch: any) => {
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