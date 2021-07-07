import React from 'react';

import {EditTenderForm, TenderRequestList, Success} from "@components";
import {APP_TEXT} from "@app/i18n";

const EditTender = ({
                      tender,
                      tenderCreator,
                      tenderRequests,
                      formValues,
                      updateTender,
                      isSuccess
                    }) => {

  const submitTenderEditing = (formData) => {
    updateTender(formData)
  }

  if (isSuccess) {
    return <Success title={APP_TEXT.success.updateTender.title}/>
  }

  return (
    <div className="container">
      <EditTenderForm onSubmit={submitTenderEditing}
                      initialValues={tender}
                      formValues={formValues}
                      contractor={tenderCreator}/>

      <TenderRequestList tenderStatus={tender.status}
                         tenderRequests={tenderRequests}/>
    </div>
  );
};

export default EditTender;