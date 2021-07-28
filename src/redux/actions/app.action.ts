import * as ActionTypes from "@redux/actionTypes";
import {AuthActions} from "@redux/actions/index"
import {InitializeAppSuccess} from "@redux/types";

const initializeAppSuccess = (): InitializeAppSuccess => ({type: ActionTypes.APP_INITIALIZED_SUCCESS})
export const toggleIsSuccess = (isSuccess: boolean) => ({type: ActionTypes.TOGGLE_IS_SUCCESS, isSuccess} as const)

// dispatch of thunk
export const initialize = () => (dispatch: any) => {
  const initializingPromise = dispatch(AuthActions.checkValidToken())

  Promise.all([initializingPromise])
    .then(() => {
      dispatch(initializeAppSuccess())
    })
}