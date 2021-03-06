import React from 'react';
import {Field, reduxForm} from "redux-form";
import s from "../../Tender/Tender.module.css";
import Button from "../../ui/Button/Button";
import {Input, Textarea} from "../Form-controls/FormControls";

const EditTenderForm = ({
                          handleSubmit,
                          cancelEditing,
                          status,
                          yyyy_mm_dd,
                          time,
                          contractorName,
                          companyName,
                          industry,
                          city
                        }) => {
  return (
    <form className={s.tender} onSubmit={handleSubmit}>
      <div className={s.header}>
        <div className={s.title__edit}>
          <Field type="text"
                 name="name"
                 placeholder="Tender name"
                 component={Input}/>
        </div>
        <div className={s.data}>
          <div className={s.row}>
            <div className={s.data}>Status: <b>{status}</b></div>
          </div>
        </div>
      </div>
      <div className={s.row}>
        <div className={s.column}>
          <h2>Information about tender:</h2>
          <ul className={s.info}>
            <li>
              <span>Budget</span>
              <span>
                <Field type="number "
                       name="budget"
                       placeholder="Budget"
                       component={Input}/>
              </span>
            </li>
            <li><span>Created date</span><span>{yyyy_mm_dd} - {time}</span></li>
            <li><span>Contractor</span><span>{contractorName}</span></li>
          </ul>
        </div>
        <div className={s.column}>
          <h2>Information about contractor:</h2>
          <ul className={s.info}>
            <li><span>Company name</span><span>{companyName}</span></li>
            <li><span>Industry</span><span>{industry}</span></li>
            <li><span>City</span><span>{city}</span></li>
          </ul>
        </div>
      </div>
      <div className={s.details}>
        <h2>Description:</h2>
        <Field type="text"
               name="description"
               placeholder="Description"
               component={Textarea}/>
      </div>
      <div className={s.buttons}>
        <div>
          <Button>Submit</Button>
        </div>
        <div>
          <Button btnColor={"#6498E1"}
                  btnHover={"#71ACFF"}
                  onClick={cancelEditing}>Cancel</Button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "updateTender"
})(EditTenderForm);
