import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import {
  accountReducer,
  accountTenderReducer,
  homeReducer,
  homeTenderReducer,
  authReducer,
  appReducer
} from '@redux/reducers'

export const rootReducer = combineReducers({
  homePage: homeReducer,
  homeTender: homeTenderReducer,
  accountPage: accountReducer,
  accountTender: accountTenderReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
})