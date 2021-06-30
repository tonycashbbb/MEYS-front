import React from 'react';
import s from "./CreateContractorForm.module.css";
import {Field, reduxForm} from "redux-form";
import {Input, Button} from "@components";
import {required} from "@app/utils/validators";
import {APP_TEXT} from "@app/i18n";

const CreateContractorForm = (props) => {
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <Field type="text"
             name="name"
             placeholder={APP_TEXT.generalUser.username}
             component={Input}
             validate={[required]}/>
      <Field type="email"
             name="email"
             placeholder={APP_TEXT.generalUser.email}
             validate={[required]}
             component={Input}/>
      <Field type="password"
             name="password"
             placeholder={APP_TEXT.generalUser.password}
             validate={[required]}
             component={Input}/>
      <Field type="text"
             name="companyName"
             placeholder={APP_TEXT.generalUser.companyName}
             validate={required}
             component={Input}/>
      <Field type="number"
             name="nip"
             placeholder={APP_TEXT.generalUser.nip}
             validate={[required]}
             component={Input}/>
      <Field type="text"
             name="industry"
             placeholder={APP_TEXT.generalUser.industry}
             validate={[required]}
             component={Input}/>
      <Field type="text"
             name="region"
             placeholder={APP_TEXT.generalUser.region}
             validate={[required]}
             component={Input}/>
      <Field type="text"
             name="city"
             placeholder={APP_TEXT.generalUser.city}
             validate={[required]}
             component={Input}/>
      {props.error && <div className={s.error__text}>{props.error}</div>}
      <div className={s.btn}>
        <Button>{APP_TEXT.general.submit}</Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "createContractor"
})(CreateContractorForm);
