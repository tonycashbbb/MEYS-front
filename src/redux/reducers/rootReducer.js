import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import {
  accountPageReducer,
  accountTenderReducer,
  homePageReducer,
  homeTenderReducer,
  authReducer
} from '@redux/reducers'

export const rootReducer = combineReducers({
  homePage: homePageReducer,
  homeTender: homeTenderReducer,
  accountPage: accountPageReducer,
  accountTender: accountTenderReducer,
  auth: authReducer,
  form: formReducer,
})