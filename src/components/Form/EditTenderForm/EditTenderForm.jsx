import React from 'react';
import {Field, reduxForm} from "redux-form";
import s from "../../Tender/Tender.module.css";
import {Button} from "@components/ui";
import {Input, Textarea} from "../FormControls/FormControls";
import {APP_TEXT} from "@components/i18n";

const EditTenderForm = ({
                          handleSubmit,
                          cancelEditing,
                          tender,
                          contractor,
                        }) => {
  const createdDate = tender.createdDate.slice(0, 10)
  const createdTime = tender.createdDate.slice(11, 16)

  return (
    <form className={s.tender} onSubmit={handleSubmit}>
      <div className={s.header}>
        <div className={s.title__edit}>
          <Field type="text"
                 name="name"
                 placeholder={APP_TEXT.tender.tenderName}
                 component={Input}/>
        </div>
        <div className={s.data}>
          <div className={s.row}>
            <div className={s.data}>{APP_TEXT.tender.status}: <b>{tender.status}</b></div>
          </div>
        </div>
      </div>
      <div className={s.row}>
        <div className={s.column}>
          <h2>{APP_TEXT.tender.tenderInf}</h2>
          <ul className={s.info}>
            <li>
              <span>{APP_TEXT.tender.budget}</span>
              <span>
                <Field type="number"
                       name="budget"
                       placeholder={APP_TEXT.tender.budget}
                       component={Input}/>
              </span>
            </li>
            <li><span>{APP_TEXT.tender.createdDate}</span><span>{createdDate} - {createdTime}</span></li>
            <li><span>{APP_TEXT.tender.contractor}</span><span>{contractor.name}</span></li>
          </ul>
        </div>
        <div className={s.column}>
          <h2>{APP_TEXT.tender.contractorInf}</h2>
          <ul className={s.info}>
            <li><span>{APP_TEXT.generalUser.companyName}</span><span>{contractor.companyName}</span></li>
            <li><span>{APP_TEXT.generalUser.industry}</span><span>{contractor.industry}</span></li>
            <li><span>{APP_TEXT.generalUser.city}</span><span>{contractor.city}</span></li>
          </ul>
        </div>
      </div>
      <div className={s.details}>
        <h2>{APP_TEXT.tender.description}</h2>
        <Field type="text"
               name="description"
               placeholder={APP_TEXT.tender.description}
               component={Textarea}/>
      </div>
      <div className={s.buttons}>
        <div>
          <Button>{APP_TEXT.general.saveChanges}</Button>
        </div>
        <div>
          <Button btnColor={"#6498E1"}
                  btnHover={"#71ACFF"}
                  onClick={cancelEditing}>{APP_TEXT.general.cancel}</Button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "updateTender"
})(EditTenderForm);
