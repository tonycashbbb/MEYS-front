import {APP_INITIALIZED_SUCCESS} from "@redux/actionTypes";
import {AuthActions} from "@redux/actions/index"
import {InitializeAppSuccess} from "@redux/types";

const initializeAppSuccess = (): InitializeAppSuccess => ({type: APP_INITIALIZED_SUCCESS})

// dispatch of thunk
export const initialize = () => (dispatch: any) => {
  const initializingPromise = dispatch(AuthActions.checkValidToken())

  Promise.all([initializingPromise])
    .then(() => {
      dispatch(initializeAppSuccess())
    })
}