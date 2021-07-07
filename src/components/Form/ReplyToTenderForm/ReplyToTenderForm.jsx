import React from 'react';
import {Field, reduxForm} from "redux-form";

import {Textarea, Button, DialogContainer} from "@components";
import {required} from "@app/utils/validators";

import s from "./ReplyToTenderForm.module.scss";
import theme from "@app/styles";
import {APP_TEXT} from "@app/i18n";

const ReplyToTenderForm = ({
                             formValues = {},
                             ...props
                           }) => {
  const isEdited = JSON.stringify(formValues) !== JSON.stringify({})

  return (
    <>
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
      <DialogContainer when={isEdited} confirmation={APP_TEXT.confirmation.unsavedChanges}/>
    </>
  );
};

export default reduxForm({
  form: "replyToTender"
})(ReplyToTenderForm);
