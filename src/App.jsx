import React from 'react';
import './App.css';
import {Redirect, Route} from "react-router-dom";
import {Footer, Header} from "./components";
import {
  Account,
  AccountTenderContainer,
  CreateAccount,
  CreateTenderContainer,
  HomeContainer,
  HomeTenderContainer,
  IntroPage,
  Login, Success
} from "./pages";

const EditAccountData = React.lazy(() => import("./pages/EditAccountData/EditAccountData"))

const App = () => {

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">

        <React.Suspense fallback={<div style={{"margin": 'auto'}}><h1>Loading...</h1></div>}>
          <Route exact path={"/"} render={() => <Redirect to={'/intro'}/>}/>
          <Route exact path={"/intro"} component={IntroPage}/>

          <Route path={"/login"} component={Login}/>
          <Route path={"/create_account"} component={CreateAccount}/>

          <Route exact path={"/home"} component={HomeContainer}/>
          <Route path={"/home/tenders/:id"} component={HomeTenderContainer}/>

          <Route exact path={"/account"} component={Account}/>
          <Route path={"/account/tenders/:id"} component={AccountTenderContainer}/>

          <Route path={"/account/edit"} component={EditAccountData}/>

          <Route path={"/create_tender"} component={CreateTenderContainer}/>
          <Route path={"/success"} component={Success}/>
        </React.Suspense>

      </div>
      <Footer/>
    </div>
  )
}

export default App
