import React from 'react';
import s from './Login.module.css';
import LoginForm from "../../components/Form/Login-Form/LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/reducers/auth-reducer";
import {Redirect} from "react-router-dom";

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
              <div className={s.title}>MEYS</div>
              <div className={s.description}>
                MEYS helps you to create tenders and take part in other people tenders as well
              </div>
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
