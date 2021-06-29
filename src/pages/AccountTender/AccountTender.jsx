import React, {useState} from 'react'
import {Button, Spinner} from "@components/ui";
import {
  Tender,
  TenderRequestList
} from "@components";
import {EditTenderForm} from '@components/Form'
import {APP_TEXT} from "@components/i18n";

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
