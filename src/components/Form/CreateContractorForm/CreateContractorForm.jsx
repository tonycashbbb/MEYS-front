import React from 'react';
import {useHistory} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

import {Input, Button, DialogContainer} from "@components";
import {required} from "@app/utils/validators";
import {APP_TEXT} from "@app/i18n";

import s from "./CreateContractorForm.module.scss";
import theme from "@app/styles";

const CreateContractorForm = ({
                                formValues = {},
                                handleSubmit,
                                error
                              }) => {
  const history = useHistory()

  const onCancel = (e) => {
    e.preventDefault()
    history.goBack()
  }

  const isEdited = JSON.stringify(formValues) !== JSON.stringify({})

  return (
   <>
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
       {error && <div className={s.error__text}>{error}</div>}
       <div className={s.buttons}>
         <Button>{APP_TEXT.general.create}</Button>
         <Button onClick={onCancel}
                 btnColor={theme.COLOR.SECONDARY}
                 btnHover={theme.COLOR.SECONDARY_HOVER}>{APP_TEXT.general.cancel}</Button>
       </div>
     </form>

     <DialogContainer when={isEdited} confirmation={APP_TEXT.confirmation.unsavedChanges} />
   </>
  );
};

export default reduxForm({
  form: "createContractor"
})(CreateContractorForm);
