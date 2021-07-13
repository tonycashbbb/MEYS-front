import React from 'react';
import {Route, Redirect, Switch} from "react-router-dom";

import {Footer, Header, Spinner} from "@components";
import {
  Account,
  AccountTenderContainer,
  CreateAccount,
  CreateTenderContainer,
  HomeContainer,
  HomeTenderContainer,
  Login,
  Error
} from "./pages";

import './styles/global.scss'
import {ROUTER_CONFIG} from "@app/utils/config";

const IntroPage = React.lazy(() => import("./pages/IntroPage/IntroPage"))

const App = () => {

  return (
    <div className="wrapper">
      <Header/>
      <main className="content">
        <Switch>
          {/*<Route exact path={'/'} render={() => <Redirect to={'/intro'}/>}/>*/}

          {/*<React.Suspense fallback={Spinner}>*/}
          {/*  <Route path={"/intro"} component={IntroPage}/>*/}
          {/*</React.Suspense>*/}

          <Route path={ROUTER_CONFIG.AUTH.LOGIN} component={Login}/>
          <Route path={ROUTER_CONFIG.AUTH.SIGN_UP} component={CreateAccount}/>

          <Route path={`${ROUTER_CONFIG.HOME.BASE}/:id/reply`} component={HomeTenderContainer}/>
          <Route path={`${ROUTER_CONFIG.HOME.BASE}/:id`} component={HomeTenderContainer}/>
          <Route path={ROUTER_CONFIG.HOME.BASE} component={HomeContainer}/>

          <Route path={`${ROUTER_CONFIG.ACCOUNT.BASE}/:id/edit`} component={AccountTenderContainer}/>
          <Route path={`${ROUTER_CONFIG.ACCOUNT.BASE}/:id`} component={AccountTenderContainer}/>
          <Route path={ROUTER_CONFIG.ACCOUNT.BASE} component={Account}/>

          <Route path={`${ROUTER_CONFIG.ACCOUNT.REPLIES}/:id`} component={HomeTenderContainer}/>
          <Route path={ROUTER_CONFIG.ACCOUNT.REPLIES} component={Account}/>

          <Route path={ROUTER_CONFIG.ACCOUNT.CREATE} component={CreateTenderContainer}/>

          <Route path={ROUTER_CONFIG.ERROR} component={Error}/>
          <Redirect from='*' to={ROUTER_CONFIG.ERROR} />
        </Switch>
      </main>
      <Footer/>
    </div>
  )
}

export default App
