import React from 'react';
import s from './Login.module.css';
import {LoginForm} from "@components/Form";
import {connect} from "react-redux";
import {login} from "@redux/actions/auth.action";
import {Redirect} from "react-router-dom";
import {APP_TEXT} from "@components/i18n";

const Login = (props) => {
  if (props.isAuth) {
    return <Redirect to={'/home'} />
  }

  const onSubmit = ({username, password}) => {
    props.login(username, password)
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

            <LoginForm onSubmit={onSubmit}/>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
