import React, {ChangeEvent, FC} from 'react';
import {Redirect} from "react-router-dom";
import {connect, ConnectedProps} from "react-redux";

import {LoginForm} from "@components";
import {AuthActions} from "@redux/actions";
import history from "@app/history";
import {APP_TEXT} from "@app/i18n";
import {ROUTER_CONFIG} from "@app/utils/config";
import {LoginFormData} from "@components/types";
import {AppState} from "@app/types";

import s from './Login.module.scss';

type PropsFromRedux = ConnectedProps<typeof connector>

const Login: FC<PropsFromRedux> = (props) => {
  if (props.isAuth) {
    return <Redirect to={"/home/tenders"} />
  }

  const onSubmit = ({username, password}: LoginFormData) => {
    props.login(username, password)
  }

  const onCreateNavigate = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    history.push(ROUTER_CONFIG.AUTH.SIGN_UP)
  }

  return (
    <div className={s.auth}>
      <div className="container">
        <div className={s.column}>
          <div className={s.row}>
            <div className={s.text}>
              <div className={s.title}>{APP_TEXT.meys}</div>
              <div className={s.description}>{APP_TEXT.login.description}</div>
            </div>

            <LoginForm onSubmit={onSubmit} onCreateNavigate={onCreateNavigate}/>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  isAuth: state.auth.isAuth
})

const connector = connect(mapStateToProps, {login: AuthActions.login})

export default connect(mapStateToProps, {login: AuthActions.login})(Login);
