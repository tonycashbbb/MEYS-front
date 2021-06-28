import React from 'react';
import s from "./ReplyToTenderForm.module.css";
import Button from "../../ui/Button/Button";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../FormControls/FormControls";
import {required} from "../validators/validators";

const ReplyToTenderForm = (props) => {
  return (
    <form className={s.reply} onSubmit={props.handleSubmit}>
      <Field type={"text"}
             name={"replyText"}
             placeholder={"Write your reply"}
             validate={[required]}
             component={Textarea}/>
      <div className={s.flex}>
        <div className={s.flex__item}>
          <Button>Send</Button>
        </div>
        <div className={s.flex__item}>
          <Button btnColor={"#6498E1"}
                  btnHover={"#71ACFF"}
                  onClick={props.cancel}>Cancel</Button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "replyToTender"
})(ReplyToTenderForm);
