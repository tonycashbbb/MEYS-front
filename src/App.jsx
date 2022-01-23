import React, {useEffect} from 'react';
import {Route, Redirect, Switch} from "react-router-dom";
import {connect} from "react-redux";

import {Footer, Header, Spinner} from "@components";
import {
  Account,
  AccountTenderContainer,
  CreateTenderContainer,
  HomeContainer,
  HomeTenderContainer,
  Login,
  Error
} from "./pages";
import {ROUTER_CONFIG} from "@app/utils/config";
import {AppActions} from "@redux/actions";

import './styles/global.scss'
import EditAccountData from "@app/pages/EditAccountData/EditAccountData";

const CreateAccount = React.lazy(() => import("./pages/CreateAccount/CreateAccount"))

const App = ({
               isInitialized,
               initialize
             }) => {
  useEffect(() => {
    initialize()
  }, [initialize])

  if (!isInitialized) {
    return <div style={{position: "absolute", top: "70px", left: "44%"}}>
      <Spinner/>
    </div>
  }

  return (
    <div className="wrapper">
      <Header/>
      <main className="content">
        <React.Suspense fallback={<Spinner/>}>
          <Switch>
            <Route path={ROUTER_CONFIG.AUTH.LOGIN} component={Login}/>
            <Route path={ROUTER_CONFIG.AUTH.SIGN_UP} component={CreateAccount}/>

            <Route path={`${ROUTER_CONFIG.HOME.BASE}/:id/reply`} component={HomeTenderContainer}/>
            <Route path={`${ROUTER_CONFIG.HOME.BASE}/:id`} component={HomeTenderContainer}/>
            <Route path={ROUTER_CONFIG.HOME.BASE} component={HomeContainer}/>

            <Route path={`${ROUTER_CONFIG.ACCOUNT.BASE}/:id/edit`} component={AccountTenderContainer}/>
            <Route path={`${ROUTER_CONFIG.ACCOUNT.BASE}/:id`} component={AccountTenderContainer}/>
            <Route path={`/account/edit`} component={() => <div>KEK</div>}/>
            <Route path={ROUTER_CONFIG.ACCOUNT.BASE} component={Account}/>

            <Route path={`${ROUTER_CONFIG.ACCOUNT.REPLIES}/:id`} component={HomeTenderContainer}/>
            <Route path={ROUTER_CONFIG.ACCOUNT.REPLIES} component={Account}/>

            <Route path={ROUTER_CONFIG.ACCOUNT.CREATE} component={CreateTenderContainer}/>

            <Route path={ROUTER_CONFIG.ERROR} component={Error}/>

            <Redirect exact from='/' to={ROUTER_CONFIG.AUTH.LOGIN}/>
            <Redirect from='*' to={ROUTER_CONFIG.ERROR}/>
          </Switch>
        </React.Suspense>
      </main>
      <Footer/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isInitialized: state.app.isInitialized
})

const mapDispatchToProps = (dispatch) => ({
  initialize: () => dispatch(AppActions.initialize())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
