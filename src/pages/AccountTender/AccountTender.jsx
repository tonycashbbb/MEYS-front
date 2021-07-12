import React from 'react'

import {
  Button,
  EditTenderForm,
  Spinner, Success,
  Tender,
  TenderRequestList
} from "@components";
import {APP_TEXT} from "@app/i18n";
import history from "@app/history";

const AccountTender = ({
                         tenderId,
                         tender,
                         tenderCreator,
                         tenderRequests,
                         updateTender,
                         formValues,
                         isSuccess,
                         isEditing,
                         setIsEditing
                       }) => {
  const onIsEditing = () => {
    history.push(`/account/tenders/${tenderId}/edit`)
    setIsEditing(true)
  }

  const offIsEditing = (e) => {
    e.preventDefault()
    history.push(`/account/tenders/${tenderId}`)
    setIsEditing(false)
  }

  const submitTenderEditing = (tenderData) => {
    updateTender(tenderData)
    setIsEditing(false)
  }

  if (!tender || !tenderCreator) {
    return <Spinner/>
  }

  if (isSuccess) {
    return <Success title={APP_TEXT.success.updateTender.title}/>
  }

  return (
    <div className="container">
      {!isEditing
        ? <Tender tender={tender}
                  contractor={tenderCreator}/>
        : <EditTenderForm onSubmit={submitTenderEditing}
                          initialValues={tender}
                          formValues={formValues}
                          contractor={tenderCreator}
                          onCancel={offIsEditing}
                          setIsEditing={setIsEditing}/>}

      {!isEditing && <Button onClick={onIsEditing}>{APP_TEXT.general.edit} {APP_TEXT.general.tender}</Button>}

      <TenderRequestList tenderStatus={tender.status}
                         tenderRequests={tenderRequests}/>

    </div>
  )
}

export default AccountTender
