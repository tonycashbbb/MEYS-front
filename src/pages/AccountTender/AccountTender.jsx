import React, {useState} from 'react'
import {useHistory} from "react-router-dom";

import {
  Button,
  Spinner,
  Tender,
  TenderRequestList
} from "@components";
import {APP_TEXT} from "@app/i18n";

const AccountTender = ({
                         tenderId,
                         tender,
                         tenderCreator,
                         tenderRequests,
                         updateTender,
                       }) => {
  const history = useHistory()
  // const [isEditing, setIsEditing] = useState(false)

  // const toggleIsEditing = () => {
  //   setIsEditing(!isEditing)
  // }

  // const submitTenderEditing = (tenderData) => {
  //   updateTender(tenderData)
  //   setIsEditing(!isEditing)
  // }

  const goToEditTender = () => {
    history.push(`/account/tenders/${tenderId}/edit`)
  }

  if (!tender || !tenderCreator) {
    return <Spinner/>
  }

  return (
    <div className="container">
      <Tender tender={tender}
              contractor={tenderCreator}/>

      <Button onClick={goToEditTender}>{APP_TEXT.general.edit} {APP_TEXT.general.tender}</Button>

      {/*{!isEditing*/}
      {/*  ? <Tender tender={tender}*/}
      {/*            contractor={tenderCreator}/>*/}
      {/*  : <EditTenderForm onSubmit={submitTenderEditing}*/}
      {/*                    initialValues={tender}*/}
      {/*                    formValues={formValues}*/}
      {/*                    contractor={tenderCreator}*/}
      {/*                    cancelEditing={toggleIsEditing}/>}*/}

      {/*{!isEditing && <Button onClick={toggleIsEditing}>{APP_TEXT.general.edit} {APP_TEXT.general.tender}</Button>}*/}

      <TenderRequestList tenderStatus={tender.status}
                         tenderRequests={tenderRequests}/>

    </div>
  )
}

export default AccountTender
