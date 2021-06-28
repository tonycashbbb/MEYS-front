import React, {useState} from 'react'
import Button from "../../components/ui/Button/Button";
import Tender from "../../components/Tender/Tender";
import Spinner from "../../components/ui/Spinner/Spinner";
import TenderRequestList from "../../components/TenderRequestList/TenderRequestList";
import EditTenderForm from "../../components/Form/EditTender-Form/EditTenderForm";

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

      {!isEditing && <Button onClick={toggleIsEditing}>Edit tender</Button>}

      <TenderRequestList tenderStatus={tender.status}
                         tenderRequests={tenderRequests}/>

    </div>
  )
}

export default AccountTender
