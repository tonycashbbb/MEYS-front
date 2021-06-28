import React from "react";
import s from './CreateTenderForm.module.css'
import {Button} from "@components/ui";
import {Field, reduxForm} from "redux-form";
import {required} from "../validators/validators";
import {Input, Textarea} from "../FormControls/FormControls";

const CreateTenderForm = (props) => {
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <Field type="text"
             name="name"
             placeholder="Tender name"
             component={Input}
             validate={[required]}/>
      <Field type="number"
             name="budget"
             placeholder="Budget"
             validate={[required]}
             component={Input}/>
      <Field type="text"
             name="description"
             placeholder="Description"
             validate={[required]}
             component={Textarea}/>

      <div className={s.btn}>
        <Button>Submit</Button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: "createTender"
})(CreateTenderForm)
