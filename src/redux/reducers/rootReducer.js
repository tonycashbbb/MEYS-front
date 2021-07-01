import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import {accountPageReducer} from "@redux/reducers/accountPage.reducer";
import {accountTenderReducer} from "@redux/reducers/accountTender.reducer";
import {homePageReducer} from "@redux/reducers/homePage.reducer";
import {homeTenderReducer} from "@redux/reducers/homeTender.reducer";
import {authReducer} from "@redux/reducers/auth.reducer";

export const rootReducer = combineReducers({
  homePage: homePageReducer,
  homeTender: homeTenderReducer,
  accountPage: accountPageReducer,
  accountTender: accountTenderReducer,
  auth: authReducer,
  form: formReducer,
})