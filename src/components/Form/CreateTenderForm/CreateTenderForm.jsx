import React from "react";
import {Field, reduxForm} from "redux-form";

import {Button, Input, Textarea, DialogAlert} from "@components";
import {required} from "@app/utils/validators";
import {APP_TEXT} from "@app/i18n";

import s from './CreateTenderForm.module.css'

const CreateTenderForm = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (e) => {
    e.preventDefault()
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = () => {
    props.handleSubmit()
  }

  return (
    <>
      <form className={s.form} onSubmit={onSubmit}>
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
          <Button onClick={handleClickOpen}>{APP_TEXT.general.submit}</Button>
        </div>
      </form>
      <DialogAlert title={APP_TEXT.dialog.title}
                   description={APP_TEXT.createTender.dialogDescription}
                   buttonNegativeText={APP_TEXT.general.cancel}
                   buttonPositiveText={APP_TEXT.general.create}
                   open={open}
                   handleClose={handleClose}
                   handleOK={onSubmit}/>
    </>
  )
}

export default reduxForm({
  form: "createTender"
})(CreateTenderForm)
