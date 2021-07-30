import * as ActionTypes from "@redux/actionTypes";
import {AuthActions} from "@redux/actions"

const initializeAppSuccess = () => ({type: ActionTypes.APP_INITIALIZED_SUCCESS})
export const toggleIsSuccess = (isSuccess) => ({type: ActionTypes.TOGGLE_IS_SUCCESS, isSuccess})

export const initialize = () => (dispatch) => {
  const initializingPromise = dispatch(AuthActions.checkValidToken())

  Promise.all([initializingPromise])
    .then(() => {
      dispatch(initializeAppSuccess())
    })
}