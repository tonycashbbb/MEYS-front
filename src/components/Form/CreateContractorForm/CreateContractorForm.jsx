import React from 'react';
import s from "./CreateContractorForm.module.css";
import {Button} from "@components/ui";
import {Field, reduxForm} from "redux-form";
import {Input} from "../FormControls/FormControls";
import {required} from "../validators/validators";

const CreateContractorForm = (props) => {
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <Field type="text"
             name="name"
             placeholder="Username"
             component={Input}
             validate={[required]}/>
      <Field type="email"
             name="email"
             placeholder="Email"
             validate={[required]}
             component={Input}/>
      <Field type="password"
             name="password"
             placeholder="Password"
             validate={[required]}
             component={Input}/>
      <Field type="text"
             name="companyName"
             placeholder="Company name"
             validate={required}
             component={Input}/>
      <Field type="number"
             name="nip"
             placeholder="NIP"
             validate={[required]}
             component={Input}/>
      <Field type="text"
             name="industry"
             placeholder="Industry"
             validate={[required]}
             component={Input}/>
      <Field type="text"
             name="region"
             placeholder="Region"
             validate={[required]}
             component={Input}/>
      <Field type="text"
             name="city"
             placeholder="City"
             validate={[required]}
             component={Input}/>
      {props.error && <div className={s.error__text}>{props.error}</div>}
      <div className={s.btn}>
        <Button>Submit</Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "createContractor"
})(CreateContractorForm);
