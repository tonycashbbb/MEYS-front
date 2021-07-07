import React from 'react';

import {EditTenderForm, TenderRequestList} from "@components";

const EditTender = ({
                      tender,
                      tenderCreator,
                      tenderRequests,
                      formValues,
                      updateTender
                    }) => {

  const submitTenderEditing = (formData) => {
    updateTender(formData)
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