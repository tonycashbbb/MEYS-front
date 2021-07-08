import React from "react";
import {useHistory} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

import {Button, Input, Textarea, DialogContainer} from "@components";
import theme from "@app/styles";
import {required} from "@app/utils/validators";
import {APP_TEXT} from "@app/i18n";

import s from './CreateTenderForm.module.scss';
import {RouteLeavingGuard} from "@app/components/ui/Dialog/RouteLeavingGuard";
// import history from '@app/history';

const CreateTenderForm = ({formValue = {}, ...props}) => {
  const history = useHistory()

  const handleClickCancel = (e) => {
    // e.preventDefault()
    // history.back()
    history.goBack()
    // history.push('/account')
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
          <Button>{APP_TEXT.general.create}</Button>
          <Button onClick={handleClickCancel}
                  btnColor={theme.COLOR.SECONDARY}
                  btnHover={theme.COLOR.SECONDARY_HOVER}>{APP_TEXT.general.cancel}</Button>
        </div>
      </form>

      <DialogContainer when={isEdited} confirmation={APP_TEXT.confirmation.unsavedChanges}/>
      {/*<RouteLeavingGuard when={isEdited} confirmation={APP_TEXT.confirmation.unsavedChanges}/>*/}
    </>
  )
}

export default reduxForm({
  form: "createTender"
})(CreateTenderForm)
