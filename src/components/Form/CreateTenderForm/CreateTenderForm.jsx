import React from "react";
import {Field, reduxForm} from "redux-form";

import {Button, Input, Textarea, RouteLeavingGuard} from "@components";
import {required} from "@app/utils/validators";
import {APP_TEXT} from "@app/i18n";
import history from '@app/history';

import theme from "@app/styles";
import s from './CreateTenderForm.module.scss';

const CreateTenderForm = ({
                            formValue = {},
                            ...props
                          }) => {
  const handleClickCancel = (e) => {
    e.preventDefault()
    history.goBack()
  }

  const isEdited = JSON.stringify(formValue) !== JSON.stringify({})

  return (
    <>
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

        <div className={s.buttons}>
          <Button onClick={handleClickCancel}>{APP_TEXT.general.cancel}</Button>
          <Button btnColor={theme.COLOR.SECONDARY}
                  btnHover={theme.COLOR.SECONDARY_HOVER}>{APP_TEXT.general.create}</Button>
        </div>
      </form>

      <RouteLeavingGuard when={isEdited} confirmation={APP_TEXT.confirmation.unsavedChanges}/>
    </>
  )
}

export default reduxForm({
  form: "createTender"
})(CreateTenderForm)
