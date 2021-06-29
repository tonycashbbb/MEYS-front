import {SET_USER_DATA, TOGGLE_IS_AUTH} from "../actionTypes/auth.actionType";
import authService, {createContractorAPI} from "../../services/auth.services";
import {setUser, toggleIsSuccess} from "./accountPage.action";
import {stopSubmit} from "redux-form";

export const setUserData = (userData) => ({type: SET_USER_DATA, userData})
export const toggleIsAuth = (isAuth) => ({type: TOGGLE_IS_AUTH, isAuth})

export const getLoggedInUser = () => (dispatch) => {
    authService.getLoggedInUser()
        .then((user) => {
            dispatch(setUserData(user))
            dispatch(toggleIsAuth(true))
            dispatch(setUser(user))
        })
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

    // <a href="login"/>
    window.location.href = '/login'

    dispatch(setUserData(null))
    dispatch(toggleIsAuth(false))
}
export const createContractor = (userData) => async (dispatch) => {
    await createContractorAPI(userData)
    dispatch(toggleIsSuccess(true))
    dispatch(toggleIsSuccess(false))
}