import React from 'react';
import {Field, reduxForm} from "redux-form";
import s from "../CreateContractorForm/CreateContractorForm.module.css";
import {Button} from "@components/ui";
import {Input} from "../FormControls/FormControls";
import {required} from "../validators/validators";

const EditAccountDataForm = ({ handleSubmit }) => {

  return (
    <form className={s.form} onSubmit={handleSubmit}>
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
      <div className={s.btn}>
        <Button>Submit</Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'EditPersonalData'
})(EditAccountDataForm);
