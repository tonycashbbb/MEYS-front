import React, {useEffect} from 'react';
import {Route, Redirect, Switch} from "react-router-dom";
import {connect, ConnectedProps} from "react-redux";

import {
  AccountTenderContainer,
  CreateTenderContainer,
  Footer,
  Header,
  HomeContainer,
  HomeTenderContainer,
  Spinner
} from "@components";
import {
  Account,
  Login,
  Error
} from "@app/pages";
import {ROUTER_CONFIG} from "@app/utils/config";
import {AppState} from '@app/types';
import {AppActions} from "@redux/actions";

import '@app/styles/global.scss'

const CreateAccount = React.lazy(() => import("./pages/CreateAccount/CreateAccount"))

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux

const App: React.FC<Props> = ({
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
            {/*@ts-ignore --Type props, that route gives to component  */}
            <Route path={ROUTER_CONFIG.HOME.BASE} component={HomeContainer}/>

            <Route path={`${ROUTER_CONFIG.ACCOUNT.BASE}/:id/edit`} component={AccountTenderContainer}/>
            <Route path={`${ROUTER_CONFIG.ACCOUNT.BASE}/:id`} component={AccountTenderContainer}/>
            <Route path={ROUTER_CONFIG.ACCOUNT.BASE} component={Account}/>

            <Route path={`${ROUTER_CONFIG.ACCOUNT.REPLIES}/:id`} component={HomeTenderContainer}/>
            <Route path={ROUTER_CONFIG.ACCOUNT.REPLIES} component={Account}/>

            {/*@ts-ignore*/}
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

const mapStateToProps = (state: AppState) => ({
  isInitialized: state.app.isInitialized
})

const mapDispatchToProps = (dispatch: any) => ({
  initialize: () => dispatch(AppActions.initialize())
})

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connect(mapStateToProps, mapDispatchToProps)(App)
