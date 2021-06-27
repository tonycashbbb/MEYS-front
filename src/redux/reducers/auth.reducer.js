import {SET_USER_DATA, TOGGLE_IS_AUTH} from "../actionTypes/auth.actionType";

const initialState = {
  user: null,
  isAuth: false,
}

export const authReducer = (state = initialState, action) => {
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
