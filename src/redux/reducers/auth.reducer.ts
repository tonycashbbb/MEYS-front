import {SET_USER_DATA, TOGGLE_IS_AUTH} from "@redux/actionTypes";
import {User} from "@app/types";
import {SetUserData, ToggleIsAuth} from "@redux/types";

export type InitState = typeof initialState
type Action = SetUserData | ToggleIsAuth

const initialState = {
  user: null as unknown as User | null,
  isAuth: false,
}

const authReducer = (state: InitState = initialState, action: Action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        user: action.userData
      }
    case TOGGLE_IS_AUTH:
      return {
        ...state,
        isAuth: action.isAuth
      }
    default:
      return state
  }
}

export default authReducer