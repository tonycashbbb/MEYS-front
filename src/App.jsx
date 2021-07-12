import React from 'react';
import {Route, Redirect} from "react-router-dom";

import {Footer, Header} from "@components";
import {
  Account,
  AccountTenderContainer,
  CreateAccount,
  CreateTenderContainer,
  HomeContainer,
  HomeTenderContainer,
  Login
} from "./pages";

import './styles/global.scss'

const IntroPage = React.lazy(() => import("./pages/IntroPage/IntroPage"))

const App = () => {

  return (
    <div className="wrapper">
      <Header/>
      <main className="content">
        <React.Suspense fallback={<div style={{"margin": 'auto'}}><h1>Loading...</h1></div>}>
          <Route exact path={"/"} render={() => <Redirect to={'/intro'}/>}/>
          <Route path={"/intro"} component={IntroPage}/>

          <Route path={"/login"} component={Login}/>
          <Route path={"/create"} component={CreateAccount}/>

          <Route exact path={"/home/tenders"} component={HomeContainer}/>
          <Route exact path={"/home/tenders/:id"} component={HomeTenderContainer}/>
          <Route path={"/home/tenders/:id/reply"} component={HomeTenderContainer}/>

          <Route exact path={"/account/tenders"} component={Account}/>
          <Route exact path={"/account/tenders/:id"} component={AccountTenderContainer}/>
          <Route path={"/account/tenders/:id/edit"} component={AccountTenderContainer}/>

          <Route exact path={"/account/replies"} component={Account}/>
          <Route path={"/account/replies/:id"} component={HomeTenderContainer}/>

          <Route exact path={"/account/create"} component={CreateTenderContainer}/>
        </React.Suspense>
      </main>
      <Footer/>
    </div>
  )
}

export default App
