import React from 'react';
import {Field, reduxForm} from "redux-form";

import {Textarea, Button} from "@components";
import {required} from "@app/utils/validators";

import s from "./ReplyToTenderForm.module.scss";
import theme from "@app/styles";

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
          <Button btnColor={theme.COLOR.SECONDARY}
                  btnHover={theme.COLOR.SECONDARY_HOVER}
                  onClick={props.cancel}>Cancel</Button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "replyToTender"
})(ReplyToTenderForm);
