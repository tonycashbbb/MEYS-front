import * as ActionTypes from "@redux/actionTypes";

const initialState = {
  user: null,
  isAuth: false,
}

const authReducer = (state = initialState, action) => {
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