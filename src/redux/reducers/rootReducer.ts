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
  home: homeReducer,
  homeTender: homeTenderReducer,
  account: accountReducer,
  accountTender: accountTenderReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
})