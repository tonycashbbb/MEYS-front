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
        ? <Tender tenderName={tender.name}
                  status={tender.status}
                  budget={tender.budget}
                  createdDate={tender.createdDate}
                  yyyy_mm_dd={tender.createdDate.slice(0, 10)}
                  time={tender.createdDate.slice(11, 16)}
                  description={tender.description}
                  contractorName={tenderCreator.name}
                  companyName={tenderCreator.companyName}
                  industry={tenderCreator.industry}
                  city={tenderCreator.city}/>
        : <EditTenderForm onSubmit={submitTenderEditing}
                          initialValues={tender}
                          cancelEditing={toggleIsEditing}
                          status={tender.status}
                          yyyy_mm_dd={tender.createdDate.slice(0, 10)}
                          time={tender.createdDate.slice(11, 16)}
                          contractorName={tenderCreator.name}
                          companyName={tenderCreator.companyName}
                          industry={tenderCreator.industry}
                          city={tenderCreator.city}/>}

      {!isEditing && <Button onClick={toggleIsEditing}>Edit tender</Button>}

      <TenderRequestList tenderStatus={tender.status}
                         tenderRequests={tenderRequests}/>

    </div>
  )
}

export default AccountTender
