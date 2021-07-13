import React from 'react';
import {Field, reduxForm} from "redux-form";

import {Textarea, Button, RouteLeavingGuard} from "@components";
import {required} from "@app/utils/validators";
import {APP_TEXT} from "@app/i18n";

import theme from "@app/styles";
import s from "./ReplyToTenderForm.module.scss";

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
               placeholder={APP_TEXT.reply.placeholder}
               validate={[required]}
               component={Textarea}/>
        <div className={s.flex}>
          <div className={s.flex__item}>
            <Button>{APP_TEXT.general.send}</Button>
          </div>
          <div className={s.flex__item}>
            <Button btnColor={theme.COLOR.SECONDARY}
                    btnHover={theme.COLOR.SECONDARY_HOVER}
                    onClick={props.cancel}>{APP_TEXT.general.cancel}</Button>
          </div>
        </div>
      </form>

      <RouteLeavingGuard when={isEdited} confirmation={APP_TEXT.confirmation.unsavedChanges}/>
    </>
  );
};

export default reduxForm({
  form: "replyToTender"
})(ReplyToTenderForm);
