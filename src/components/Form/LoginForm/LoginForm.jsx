import React from 'react';
import {Field, reduxForm} from "redux-form";

import {Input, Button} from "@components";
import {required} from "@app/utils/validators";
import {APP_TEXT} from "@app/i18n";

import s from "./LoginForm.module.scss";
import theme from "@app/styles";

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
      <div className={s.login__btn}>
        <Button onClick={props.onCreateNavigate}
                btnColor={theme.COLOR.SECONDARY}
                btnHover={theme.COLOR.SECONDARY_HOVER}>{APP_TEXT.login.createBtn}</Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "login"
})(LoginForm);
