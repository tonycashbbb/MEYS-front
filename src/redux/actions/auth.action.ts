import {stopSubmit} from "redux-form";

import {SET_USER_DATA, TOGGLE_IS_AUTH} from "@redux/actionTypes";
import {AccountPageActions} from "@redux/actions/index";
import {createContractorAPI, authService} from "@services";
import {User} from "@app/types";
import {SetUserData, ToggleIsAuth} from "@redux/types";

export const setUserData = (userData: User | null): SetUserData => ({type: SET_USER_DATA, userData})
export const toggleIsAuth = (isAuth: boolean): ToggleIsAuth => ({type: TOGGLE_IS_AUTH, isAuth})

export const getLoggedInUser = () => async (dispatch: any) => {
  const user = await authService.getLoggedInUser()

  dispatch(setUserData(user))
  dispatch(toggleIsAuth(true))
}
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
export const logout = () => (dispatch: any) => {
  authService.logout()

  window.location.href = '/login'
  dispatch(setUserData(null))
  dispatch(toggleIsAuth(false))
}
export const createContractor = (userData: User) => async (dispatch: any) => {
  const res = await createContractorAPI(userData)

  if (res.status === 200) {
    dispatch(AccountPageActions.toggleIsSuccess(true))
  } else {
    dispatch(stopSubmit("createContractor", {_error: "Something went wrong"}))
  }
}
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