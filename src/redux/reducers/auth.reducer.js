import {SET_USER_DATA, TOGGLE_IS_AUTH} from "@redux/actionTypes";

const initialState = {
  user: null,
  isAuth: false,
}

const authReducer = (state = initialState, action) => {
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