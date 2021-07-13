import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {rootReducer} from "@redux/reducers/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunkMiddleware)
));

export default store
