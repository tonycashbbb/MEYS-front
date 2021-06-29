import React from 'react';
import s from "./LoginForm.module.css";
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Button} from "@components/ui";
import {required} from "@components/Form/validators";
import {APP_TEXT} from "@components/i18n";
import {Input} from "@components/Form/FormControls";

const LoginForm = (props) => {
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <Field type={"text"}
             name={"username"}
             placeholder={APP_TEXT.generalUser.username}
             component={Input}
             validate={[required]}/>
      <Field type={"password"}
             name={"password"}
             placeholder={APP_TEXT.generalUser.password}
             component={Input}
             validate={[required]}/>
      {props.error && <div className={s.error__text}>{props.error}</div>}
      <div className={s.login__btn}>
        <Button>{APP_TEXT.login.loginBtn}</Button>
      </div>
      <hr/>
      <div className={s.register}>
        <NavLink to="/create_account">{APP_TEXT.login.createBtn}</NavLink>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "login"
})(LoginForm);
