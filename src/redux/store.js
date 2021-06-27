import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {homePageReducer} from "./reducers/homePage-reducer";
import {accountPageReducer} from "./reducers/accountPage-reducer";
import {authReducer} from "./reducers/auth-reducer";
import {reducer as formReducer} from "redux-form";
import {accountTenderReducer} from "./reducers/accountTender-reducer";
import {homeTenderReducer} from "./reducers/homeTender-reducer";

const rootReducer = combineReducers({
  homePage: homePageReducer,
  homeTender: homeTenderReducer,
  accountPage: accountPageReducer,
  accountTender: accountTenderReducer,
  auth: authReducer,
  form: formReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunkMiddleware)
));

export default store
