import * as ActionTypes from "@redux/actionTypes";
import {User} from "@app/types";
import {Nullable, SetUserData, ToggleIsAuth} from "@redux/types";

type InitState = typeof initialState
type Action = SetUserData | ToggleIsAuth

const initialState = {
  user: null as Nullable<User>,
  isAuth: false,
}

const authReducer = (state: InitState = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_USER_DATA:
      return {
        ...state,
        user: action.userData
      }
    case ActionTypes.TOGGLE_IS_AUTH:
      return {
        ...state,
        isAuth: action.isAuth
      }
    default:
      return state
  }
}

export default authReducer