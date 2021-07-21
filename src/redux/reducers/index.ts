import accountPageReducer from "@redux/reducers/accountPage.reducer";
import accountTenderReducer from "@redux/reducers/accountTender.reducer";
import authReducer from "@redux/reducers/auth.reducer";
import homePageReducer from "@redux/reducers/homePage.reducer";
import homeTenderReducer from "@redux/reducers/homeTender.reducer";
import appReducer from "@redux/reducers/app.reducer";

export * from "@redux/reducers/rootReducer"

export {
  accountPageReducer,
  accountTenderReducer,
  authReducer,
  homePageReducer,
  homeTenderReducer,
  appReducer
}