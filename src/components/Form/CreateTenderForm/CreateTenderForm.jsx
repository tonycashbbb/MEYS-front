import React from "react";
import s from './CreateTenderForm.module.css'
import {Button} from "@components/ui";
import {Field, reduxForm} from "redux-form";
import {required} from "../validators/validators";
import {Input, Textarea} from "../FormControls/FormControls";
import {APP_TEXT} from "@components/i18n";

const CreateTenderForm = (props) => {
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <Field type="text"
             name="name"
             placeholder={APP_TEXT.tender.tenderName}
             component={Input}
             validate={[required]}/>
      <Field type="number"
             name="budget"
             placeholder={APP_TEXT.tender.budget}
             validate={[required]}
             component={Input}/>
      <Field type="text"
             name="description"
             placeholder={APP_TEXT.tender.description}
             validate={[required]}
             component={Textarea}/>

      <div className={s.btn}>
        <Button>{APP_TEXT.general.submit}</Button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: "createTender"
})(CreateTenderForm)
