import React, {useState} from 'react'

import {
  Button,
  Spinner,
  Tender,
  TenderRequestList,
  EditTenderForm
} from "@components";
import {APP_TEXT} from "@app/i18n";

const AccountTender = ({
                         tender,
                         tenderCreator,
                         tenderRequests,
                         updateTender
                       }) => {
  const [isEditing, setIsEditing] = useState(false)

  const toggleIsEditing = () => {
    setIsEditing(!isEditing)
  }

  const submitTenderEditing = (tenderData) => {
    updateTender(tenderData)
    setIsEditing(!isEditing)
  }

  if (!tender || !tenderCreator) {
    return <Spinner/>
  }

  return (
    <div className="container">
      {!isEditing
        ? <Tender tender={tender}
                  contractor={tenderCreator}/>
        : <EditTenderForm onSubmit={submitTenderEditing}
                          initialValues={tender}
                          tender={tender}
                          contractor={tenderCreator}
                          cancelEditing={toggleIsEditing}/>}

      {!isEditing && <Button onClick={toggleIsEditing}>{APP_TEXT.general.edit} {APP_TEXT.general.tender}</Button>}

      <TenderRequestList tenderStatus={tender.status}
                         tenderRequests={tenderRequests}/>

    </div>
  )
}

export default AccountTender
