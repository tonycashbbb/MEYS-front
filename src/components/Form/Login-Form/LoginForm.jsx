import React from 'react';
import s from "./LoginForm.module.css";
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import Button from "../../ui/Button/Button";
import {required} from "../validators/validators";
import {Input} from "../Form-controls/FormControls";

const LoginForm = (props) => {
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <Field type={"text"}
             name={"username"}
             placeholder={"Username"}
             component={Input}
             validate={[required]}/>
      <Field type={"password"}
             name={"password"}
             placeholder={"Password"}
             component={Input}
             validate={[required]}/>
      {props.error && <div className={s.error__text}>{props.error}</div>}
      <div className={s.login__btn}>
        <Button>Log in</Button>
      </div>
      <hr/>
      <div className={s.register}>
        <NavLink to="/create_account">Create an account</NavLink>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "login"
})(LoginForm);
