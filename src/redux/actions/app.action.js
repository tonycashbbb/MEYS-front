import {APP_INITIALIZED_SUCCESS} from "@redux/actionTypes";
import {AuthActions} from "@redux/actions"

const initializeAppSuccess = () => ({type: APP_INITIALIZED_SUCCESS})

export const initialize = () => (dispatch) => {
  const initializingPromise = dispatch(AuthActions.checkValidToken())

  Promise.all([initializingPromise])
    .then(() => {
      dispatch(initializeAppSuccess())
    })
}