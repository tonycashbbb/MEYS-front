import React from 'react';
import {Field, reduxForm} from "redux-form";

import {Button, Input} from "@components";
import {required} from "@app/utils/validators";
import {APP_TEXT} from "@app/i18n";

import s from "../CreateContractorForm/CreateContractorForm.module.scss";
import theme from "@app/styles";

const EditAccountDataForm = ({handleSubmit, cancelEditing}) => {

  return (
    <form className={s.form} onSubmit={handleSubmit}>
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
      <div className={s.btns}>
        <Button>{APP_TEXT.general.saveChanges}</Button>
        <Button btnColor={theme.COLOR.SECONDARY}
                btnHover={theme.COLOR.SECONDARY_HOVER}
                onClick={cancelEditing}>{APP_TEXT.general.cancel}</Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'EditPersonalData'
})(EditAccountDataForm);
